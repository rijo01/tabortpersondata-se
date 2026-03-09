import type { Metadata } from "next";
import Link from "next/link";
import { MALLAR } from "@/lib/mallar";

export const metadata: Metadata = {
  title: "GDPR-mallar — opt-out brev och klagomål att ladda ner",
  description: "Färdiga juridiska GDPR-mallar för opt-out från Ratsit, Hitta.se, Merinfo, UC och mer. Ladda ner som PDF direkt efter betalning.",
  alternates: { canonical: "/mallar" },
};

export default function MallarPage() {
  const optOuts = MALLAR.filter((m) => m.category === "opt-out");
  const klagomal = MALLAR.filter((m) => m.category === "klagomål");
  const paket = MALLAR.filter((m) => m.category === "paket");

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Pay-per-download</div>
        <h1 className="font-display font-black text-5xl text-ink tracking-tight leading-tight mb-4">
          GDPR-mallar du kan använda direkt
        </h1>
        <p className="text-mid text-lg font-light leading-relaxed">
          Juridiskt korrekta brev anpassade för varje tjänst. Skriv under, skicka. Klart.
        </p>
      </div>

      {/* Paket (featured) */}
      {paket.map((mall) => (
        <div key={mall.id} className="bg-accent-soft border-2 border-accent rounded-xl p-8 mb-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Bästa värdet</div>
            <h2 className="font-display font-black text-2xl text-ink mb-2 tracking-tight">{mall.title}</h2>
            <p className="text-mid text-sm max-w-lg leading-relaxed">{mall.description}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
            <div className="font-display font-black text-4xl text-accent">{mall.price} kr</div>
            <Link href={`/mallar/${mall.slug}`} className="bg-accent text-white font-bold text-sm px-6 py-3 rounded hover:bg-accent-dark transition-colors">
              Köp komplett paket →
            </Link>
          </div>
        </div>
      ))}

      {/* Opt-out mallar */}
      <section className="mb-12">
        <h2 className="font-display font-bold text-2xl text-ink mb-5 tracking-tight">Opt-out brev</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {optOuts.map((mall) => (
            <div key={mall.id} className={`bg-white border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/6 transition-all ${mall.featured ? "border-accent/50" : "border-border"}`}>
              <div className="h-24 bg-paper flex items-center justify-center border-b border-border relative overflow-hidden">
                <div className="text-xs text-mid/40 font-mono text-center leading-6 px-4">
                  Till: {mall.tjanst}<br />
                  Ärende: GDPR-radering…
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-6xl text-black/[0.025] pointer-events-none">GDPR</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm text-ink mb-1">{mall.title}</h3>
                <p className="text-xs text-mid mb-4 leading-relaxed line-clamp-2">{mall.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-xl text-accent">{mall.price} kr</span>
                  <Link href={`/mallar/${mall.slug}`} className="bg-accent text-white text-xs font-bold px-4 py-2 rounded hover:bg-accent-dark transition-colors">
                    Köp & ladda ner →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Klagomål */}
      <section>
        <h2 className="font-display font-bold text-2xl text-ink mb-5 tracking-tight">Klagomål till IMY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {klagomal.map((mall) => (
            <div key={mall.id} className="bg-white border border-border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/6 transition-all">
              <div className="h-24 bg-paper flex items-center justify-center border-b border-border relative overflow-hidden">
                <div className="text-xs text-mid/40 font-mono text-center leading-6">
                  Till: IMY<br />Klagomål avseende…
                </div>
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-6xl text-black/[0.025] pointer-events-none">IMY</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm text-ink mb-1">{mall.title}</h3>
                <p className="text-xs text-mid mb-4 leading-relaxed">{mall.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-xl text-accent">{mall.price} kr</span>
                  <Link href={`/mallar/${mall.slug}`} className="bg-accent text-white text-xs font-bold px-4 py-2 rounded hover:bg-accent-dark transition-colors">
                    Köp & ladda ner →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
