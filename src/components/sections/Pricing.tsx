"use client";
import { useState } from "react";
import { PLANS, getSavingsPercent, type Interval } from "@/lib/prisplaner";
import { clsx } from "clsx";

export default function Pricing() {
  const [interval, setInterval] = useState<Interval>("12");
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(planId: string) {
    setLoading(planId);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, interval }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally {
      setLoading(null);
    }
  }

  return (
    <section id="priser" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-5"
          style={{ background: "radial-gradient(ellipse, #0ea5e9, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Prenumeration</div>
          <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mb-4">
            Dölj din adress idag!
          </h2>
          <p className="text-slate-400 text-lg font-light mb-2">
            Välj det paket som passar dig bäst. Ju längre du prenumererar, desto större besparing.
          </p>
          <p className="text-xs text-slate-500">
            Du behöver vara minst 18 år och ha tillgång till <strong className="text-slate-300">mobilt BankID</strong>
          </p>
        </div>

        {/* Interval toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-2xl p-1.5 flex gap-1">
            {([["3", "3 mån"], ["6", "6 mån"], ["12", "12 mån"]] as [Interval, string][]).map(([val, label]) => {
              const savings = getSavingsPercent(val);
              return (
                <button
                  key={val}
                  onClick={() => setInterval(val)}
                  className={clsx(
                    "relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
                    interval === val
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {label}
                  {savings > 0 && (
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
                      -{savings}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan) => {
            const price = plan.prices[interval];
            return (
              <div
                key={plan.id}
                className={clsx(
                  "rounded-2xl p-7 flex flex-col transition-all relative",
                  plan.highlighted
                    ? "border-2 border-accent glow-accent bg-white/[0.06] scale-[1.02]"
                    : "glass"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Populärast
                  </div>
                )}

                {/* Icon & name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${plan.color}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Dold</div>
                    <div className="font-display font-black text-white text-lg leading-none">{plan.name}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-1">
                  <span className="font-display font-black text-white text-5xl tracking-tight">{price.monthly}</span>
                  <span className="text-slate-400 text-base ml-1">kr / mån</span>
                </div>

                {/* Total & savings */}
                <div className="text-xs text-slate-500 mb-5">
                  {price.total} kr totalt
                  {price.savings > 0 && (
                    <span className="ml-2 text-emerald-400 font-semibold">Du sparar {price.savings} kr</span>
                  )}
                </div>

                {/* Links badge */}
                <div className="glass-light rounded-xl p-3 mb-5 text-center">
                  <span className="font-display font-black text-white text-2xl">{plan.links}+</span>
                  <span className="text-slate-400 text-sm ml-1">länkborttagningar</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleCheckout(plan.id)}
                  disabled={loading === plan.id}
                  className={clsx(
                    "w-full py-4 rounded-xl font-display font-bold text-base transition-all",
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {loading === plan.id ? "Laddar…" : `Välj ${plan.name} →`}
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <span className="flex items-center gap-2">🔒 Trygga & säkra betalningar</span>
          <span className="flex items-center gap-2">↩ Avbryt när som helst</span>
          <span className="flex items-center gap-2">📋 14 dagars ångerrätt</span>
          <span className="flex items-center gap-2">💸 Inga dolda avgifter</span>
        </div>

        {/* Payment logos */}
        <div className="mt-6 flex justify-center gap-3 opacity-40">
          {["Klarna", "Apple Pay", "Google Pay", "Visa", "Mastercard"].map((p) => (
            <div key={p} className="glass rounded px-3 py-1 text-xs text-slate-400 font-semibold">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
