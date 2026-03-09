import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") || "";

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET || "");
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.mode === "payment") {
        // One-time mall purchase — send download email via Resend
        const mallId = session.metadata?.mallId;
        const email = session.customer_details?.email;
        console.log(`✅ Mall purchased: ${mallId} by ${email}`);
        // TODO: trigger Resend email with PDF download link
      }

      if (session.mode === "subscription") {
        const planId = session.metadata?.planId;
        const email = session.customer_details?.email;
        console.log(`✅ Subscription started: ${planId} by ${email}`);
        // TODO: create user account, trigger onboarding scan
      }
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log(`❌ Subscription cancelled: ${sub.id}`);
      // TODO: deactivate user access
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`⚠️ Payment failed for: ${invoice.customer_email}`);
      // TODO: send payment retry email
      break;
    }
  }

  return NextResponse.json({ received: true });
}
