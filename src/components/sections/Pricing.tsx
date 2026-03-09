"use client";
import { PRISPLANER } from "@/lib/prisplaner";
import { clsx } from "clsx";

export default function Pricing() {
  return (
    <section id="priser" className="py-24 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Prenumeration</div>
          <h2 className="font-display font-black text-5xl tracking-tight mb-4">Välj ditt skyddsnivå</h2>
          <p className="text-mid text-lg font-light">Avsluta när som helst. Ingen bindningstid. Inkl. moms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PRISPLANER.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                "rounded-xl p-8 border transition-all",
                plan.featured
                  ? "bg-white text-ink border-accent scale-105 shadow-2xl shadow-accent/20 relative"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className={clsx("text-xs font-bold uppercase tracking-widest mb-4", plan.featured ? "text-mid" : "text-mid")}>
                {plan.name}
              </div>

              <div className="mb-1">
                <span className="font-display font-black text-5xl tracking-tighter">
                  {plan.price === 0 ? "0" : plan.price}
                </span>
                <span className={clsx("text-base ml-1", plan.featured ? "text-mid" : "text-mid")}>
                  {plan.interval === "gratis" ? "" : `kr/${plan.interval}`}
                </span>
              </div>

              <p className={clsx("text-sm leading-relaxed mb-6 pb-6 border-b", plan.featured ? "text-mid border-border" : "text-mid border-white/10")}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className={clsx("flex items-start gap-2.5 text-sm", !f.included && "opacity-40")}>
                    <span className={clsx("mt-0.5 text-xs font-bold flex-shrink-0", f.included ? "text-success" : "text-mid")}>
                      {f.included ? "✓" : "—"}
                    </span>
                    <span className={plan.featured ? "text-ink" : "text-paper/80"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <button
                className={clsx(
                  "w-full py-3.5 rounded font-display font-bold text-sm transition-all",
                  plan.featured
                    ? "bg-accent text-white hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30"
                    : "bg-white/10 text-paper hover:bg-white/20"
                )}
              >
                {plan.price === 0 ? "Kom igång gratis" : `Välj ${plan.name} — ${plan.price} kr/mån →`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
