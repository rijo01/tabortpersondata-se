import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss — tabortpersondata.se",
  description: "Vi hjälper privatpersoner att skydda sin integritet online sedan 2024.",
};

export default function OmOssPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Om oss</div>
      <h1 className="font-display font-black text-white text-5xl tracking-tight mb-6">
        Vi brinner för din rätt till anonymitet
      </h1>
      <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
        tabortpersondata.se grundades med ett enkelt uppdrag: att göra dataskydd tillgängligt för alla — inte bara för dem med juridisk expertis eller teknisk kompetens.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {[
          { label: "25+", desc: "Tjänster täckta" },
          { label: "4,9/5", desc: "Betyg från kunder" },
          { label: "13 dagar", desc: "Genomsnittlig borttagningstid" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center">
            <div className="font-display font-black text-white text-3xl mb-1">{s.label}</div>
            <div className="text-slate-400 text-sm">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="prose mb-12">
        <h2>Varför vi startade</h2>
        <p>Varje dag publicerar svenska datatjänster miljontals personprofiler med adress, telefon, inkomst och mer — utan att du bett om det. Vi automatiserar processen att ta bort dem.</p>
        <h2>Vår mission</h2>
        <p>Vi arbetar inom lagens ramar och GDPR:s riktlinjer för att ge dig det bästa möjliga skyddet online. Din integritet är en rättighet — vi hjälper dig att utöva den.</p>
      </div>

      <div className="glass rounded-2xl p-8 border border-accent/20 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-white text-2xl mb-2">Redo att bli dold?</h2>
          <p className="text-slate-400 text-sm">Starta skyddet idag. Ingen bindningstid.</p>
        </div>
        <Link href="/#priser" className="bg-accent text-white font-bold px-6 py-3.5 rounded-xl hover:bg-accent-dark transition-colors whitespace-nowrap">
          Kom igång →
        </Link>
      </div>
    </div>
  );
}
