import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PRISPLANER } from "@/lib/prisplaner";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const { planId } = await req.json();

    const plan = PRISPLANER.find((p) => p.id === planId);
    if (!plan || plan.price === 0) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://tabortpersondata.se";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: plan.stripePriceId,
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/konto/tack?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/#priser`,
      metadata: { planId: plan.id },
      locale: "sv",
      subscription_data: {
        metadata: { planId: plan.id },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe subscription error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
