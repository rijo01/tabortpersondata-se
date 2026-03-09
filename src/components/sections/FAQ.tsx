"use client";
import { useState } from "react";

const FAQS = [
  { q: "Är det lagligt att ta bort mina uppgifter?", a: "Ja, absolut. Rätten att bli glömd är inskriven i GDPR (artikel 17) och gäller i hela EU/EEA sedan maj 2018. Datatjänster som publicerar personuppgifter är skyldiga att radera dem på begäran om det inte finns ett övervägande, dokumenterat allmänintresse." },
  { q: "Hur lång tid tar det att ta bort mina uppgifter?", a: "Enligt GDPR måste tjänster behandla din begäran inom 30 dagar. I praktiken sker radering hos de flesta svenska tjänster inom 1–2 veckor. Vi bevakar och följer upp automatiskt om en tjänst inte svarar inom rimlig tid." },
  { q: "Varför dyker uppgifterna upp igen?", a: "Datatjänster hämtar löpande ny information från folkbokföringsregistret och andra offentliga källor. Det är precis därför vår månatliga bevakning är så viktig — vi fångar upp nya publiceringer automatiskt och agerar direkt." },
  { q: "Kan ni ta bort mig från Google?", a: "Vi hanterar idag 25+ svenska datatjänster. Google Search erbjuder en separat GDPR-process för borttagning av sökresultat — vi tillhandahåller komplett guide och mall för detta som en del av Skydd-planen." },
  { q: "Vad händer med min data hos er?", a: "Vi lagrar enbart den information vi behöver för att genomföra opt-out-begäran (namn, adress, personnummer). All data lagras krypterat på servrar inom EU och raderas permanent om du avslutar din prenumeration." },
  { q: "Fungerar det om jag är egenföretagare?", a: "Ja. Privatpersoner och egenföretagare kan båda använda tjänsten. Notera att bolagsuppgifter i offentliga register (Bolagsverket) inte kan raderas — men personuppgifter kopplade till dig som privatperson kan vi ta bort." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Vanliga frågor</div>
          <h2 className="font-display font-black text-ink text-4xl md:text-5xl tracking-tight">Frågor &amp; svar</h2>
        </div>
        <div className="divide-y divide-border">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex justify-between items-start gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm text-ink group-hover:text-accent transition-colors">{faq.q}</span>
                <span className="text-mid text-xl leading-none flex-shrink-0 mt-0.5 transition-transform" style={{ transform: open === i ? "rotate(45deg)" : "none" }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-mid leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
