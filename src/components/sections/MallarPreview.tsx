import Link from "next/link";
import { MALLAR } from "@/lib/mallar";

export default function MallarPreview() {
  return (
    <section id="mallar" className="py-24 max-w-7xl mx-auto px-5">
      <div className="mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Pay-per-download</div>
        <h2 className="font-display font-black text-ink text-4xl md:text-5xl tracking-tight leading-tight mb-4 max-w-xl">
          Juridiska GDPR-mallar du kan använda direkt
        </h2>
        <p className="text-mid text-lg font-light max-w-[50ch] leading-relaxed">
          Skriv under och skicka. Varje mall är juridiskt korrekt och anpassad för respektive tjänst — redo att ladda ner som PDF.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {MALLAR.map((mall) => (
          <div
            key={mall.id}
            className={`border rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-black/6 transition-all group bg-white ${
              mall.featured ? "border-accent border-2 relative" : "border-border"
            }`}
          >
            {mall.featured && mall.category === "paket" && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Bästa värdet
              </div>
            )}

            {/* Preview area */}
            <div className={`h-28 flex items-center justify-center relative overflow-hidden border-b border-border ${mall.category === "paket" ? "bg-accent-soft" : "bg-paper"}`}>
              {mall.category === "paket" ? (
                <div className="text-center">
                  <div className="text-3xl mb-1">📦</div>
                  <div className="text-xs font-semibold text-accent">Alla 10+ mallar</div>
                </div>
              ) : (
                <div className="text-center px-4">
                  <div className="text-xs text-mid/50 font-mono leading-6">
                    Till: {mall.tjanst}<br />
                    Ärende: GDPR-radering…<br />
                    Artikel 17 GDPR…
                  </div>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center font-display font-black text-5xl text-black/[0.03] pointer-events-none">
                GDPR
              </div>
            </div>

            <div className="p-5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold text-sm text-ink mb-0.5 group-hover:text-accent transition-colors">{mall.title}</h3>
                <p className="text-xs text-mid">Juridiskt korrekt · PDF · Direkt</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="font-display font-black text-accent text-xl">{mall.price} kr</span>
                <Link
                  href={`/mallar/${mall.slug}`}
                  className="text-xs font-bold bg-accent text-white px-3 py-1.5 rounded hover:bg-accent-dark transition-colors"
                >
                  Köp →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/mallar" className="text-sm font-semibold text-accent hover:underline">
          Se alla mallar →
        </Link>
      </div>
    </section>
  );
}
