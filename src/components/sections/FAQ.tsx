"use client";
import { useState } from "react";

const FAQS = [
  { q: "Vilka länkar tar ni bort automatiskt?", a: "Alla dina uppgifter från 25+ svenska upplysningssajter tas bort direkt när du registrerar dig. Vi uppmanar dig att söka på dig själv på Google och skicka in fler länkar om någon missats." },
  { q: "Kan ni ta bort mina bilder på Google?", a: "Ja. Du kan ta bort alla typer av bilder om dig från Google — så länge de inte kommer från sociala medier eller rör allmänt intresse." },
  { q: "Vad innebär dark web-bevakning?", a: "Vi genomsöker kontinuerligt över 15 miljarder läckta konton på dark web och informerar dig direkt om din information dyker upp — så att du kan agera i tid." },
  { q: "Hur lång tid tar det tills länkarna tas bort?", a: "Den genomsnittliga borttagningstiden är 13 dagar. Vi rekommenderar att du söker på dig själv på Google och noga granskar sökresultaten för att identifiera alla relevanta länkar." },
  { q: "Är det lagligt att ta bort mina uppgifter?", a: "Ja, absolut. Rätten att bli glömd är inskriven i GDPR (artikel 17) och gäller i hela EU/EEA. Datatjänster är skyldiga att radera uppgifterna inom 30 dagar." },
  { q: "Kan ni ta bort information om mitt företag?", a: "Det kan vi tyvärr inte göra, eftersom bolagsuppgifter räknas som allmänt intresse och inte kan tas bort. Vi kan dock ta bort personuppgifter kopplade till dig som privatperson." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 max-w-4xl mx-auto px-5">
      <div className="text-center mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Support</div>
        <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mb-2">Frågor och svar</h2>
        <p className="text-slate-400">Vi svarar på vanligt förekommande frågor</p>
      </div>

      <div className="space-y-2">
        {FAQS.map((faq, i) => (
          <div key={i} className={`glass rounded-2xl overflow-hidden transition-all ${open === i ? "border-accent/30" : "border-transparent"}`}>
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 group"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-semibold text-white group-hover:text-accent transition-colors">{faq.q}</span>
              <span className="text-accent text-xl flex-shrink-0 transition-transform" style={{ transform: open === i ? "rotate(45deg)" : "" }}>+</span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/vanliga-fragor" className="text-accent text-sm font-semibold hover:underline">
          Till alla vanliga frågor →
        </a>
      </div>
    </section>
  );
}
