"use client";
import { useState } from "react";
import type { Mall } from "@/types";

interface Props {
  mall: Mall;
}

export default function MallCheckout({ mall }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mallId: mall.id, mallSlug: mall.slug }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Något gick fel. Försök igen.");
      }
    } catch {
      setError("Något gick fel. Försök igen.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="sticky top-24">
      <div className="bg-white border border-border rounded-xl p-6 shadow-lg shadow-black/5">
        <div className="text-3xl font-display font-black text-accent mb-1">
          {mall.price} kr
        </div>
        <p className="text-xs text-mid mb-6">Engångsbetalning · inkl. moms</p>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-accent text-white font-display font-bold text-base py-4 rounded hover:bg-accent-dark transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed mb-3"
        >
          {loading ? "Laddar…" : `Köp & ladda ner — ${mall.price} kr →`}
        </button>

        {error && <p className="text-xs text-danger mb-3">{error}</p>}

        <div className="flex items-center justify-center gap-4 text-xs text-mid mb-5">
          <span>💳 Kort</span>
          <span>🍎 Apple Pay</span>
          <span>Klarna</span>
        </div>

        <div className="border-t border-border pt-5 space-y-2.5">
          {[
            "Säker betalning via Stripe",
            "Direkt nedladdning efter köp",
            "PDF klar att skriva ut & skicka",
            "Nöjdhetsgaranti — 14 dagars ångerrätt",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-xs text-mid">
              <span className="text-success">✓</span>
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-ink text-paper rounded-xl p-5">
        <p className="text-xs font-bold text-accent mb-2">💡 Spar tid med Skydd-planen</p>
        <p className="text-xs text-mid leading-relaxed mb-3">
          Med Skydd-planen för 59 kr/mån ingår alla mallar + automatisk radering från 25+ tjänster.
        </p>
        <a href="/#priser" className="text-xs font-bold text-white hover:underline">
          Jämför planer →
        </a>
      </div>
    </div>
  );
}
