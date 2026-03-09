import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PLANS, type Interval } from "@/lib/prisplaner";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  try {
    const { planId, interval } = await req.json() as { planId: string; interval: Interval };
    const plan = PLANS.find((p) => p.id === planId);
    if (!plan) return NextResponse.json({ error: "Plan not found" }, { status: 404 });

    const priceId = plan.stripePriceIds[interval];
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://tabortpersondata.se";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card", "klarna"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/tack?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/#priser`,
      metadata: { planId, interval },
      locale: "sv",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
