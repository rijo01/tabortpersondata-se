import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { MALLAR } from "@/lib/mallar";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  try {
    const { mallId } = await req.json();

    const mall = MALLAR.find((m) => m.id === mallId);
    if (!mall) {
      return NextResponse.json({ error: "Mall not found" }, { status: 404 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://tabortpersondata.se";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "klarna"],
      line_items: [
        {
          price_data: {
            currency: "sek",
            product_data: {
              name: mall.title,
              description: mall.description,
              metadata: { mallId: mall.id, mallSlug: mall.slug },
            },
            unit_amount: mall.price * 100, // öre
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/mallar/${mall.slug}/tack?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/mallar/${mall.slug}`,
      metadata: {
        mallId: mall.id,
        mallSlug: mall.slug,
      },
      locale: "sv",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
