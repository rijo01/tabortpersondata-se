import type { Metadata } from "next";
import Link from "next/link";
import { TJANSTER_LIST } from "@/lib/tjanster-data";

export const metadata: Metadata = {
  title: "Ta bort dig från svenska datatjänster — komplett guide",
  description: "Steg-för-steg guider för att ta bort dina personuppgifter från Ratsit, Hitta.se, Merinfo, Eniro och 20+ andra svenska datatjänster.",
  alternates: { canonical: "/ta-bort-dig-fran" },
};

const CATEGORIES = [
  { id: "personregister", label: "Personregister" },
  { id: "kreditupplysning", label: "Kreditupplysning" },
  { id: "foretagsinfo", label: "Företagsinfo" },
];

export default function TjansterPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Tjänster</div>
        <h1 className="font-display font-black text-5xl text-ink tracking-tight leading-tight mb-4">
          Ta bort dig från svenska datatjänster
        </h1>
        <p className="text-mid text-lg font-light leading-relaxed">
          Välj en tjänst nedan för steg-för-steg-guide och färdig opt-out-mall. Eller låt oss sköta allt automatiskt med Skydd-planen.
        </p>
      </div>

      {/* CTA banner */}
      <div className="bg-accent-soft border border-accent/20 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-display font-bold text-accent text-lg mb-1">Vill du slippa göra det manuellt?</div>
          <p className="text-sm text-mid">Skydd-planen tar bort dig från alla tjänster automatiskt. Från 59 kr/mån.</p>
        </div>
        <Link href="/#priser" className="bg-accent text-white font-bold text-sm px-5 py-2.5 rounded hover:bg-accent-dark transition-colors whitespace-nowrap">
          Se prenumerationsplaner →
        </Link>
      </div>

      {/* By category */}
      {CATEGORIES.map((cat) => {
        const items = TJANSTER_LIST.filter((t) => t.category === cat.id);
        if (!items.length) return null;
        return (
          <div key={cat.id} className="mb-12">
            <h2 className="font-display font-bold text-2xl text-ink mb-5 tracking-tight">{cat.label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((t) => (
                <Link
                  key={t.slug}
                  href={`/ta-bort-dig-fran/${t.slug}`}
                  className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 ${t.color}`}>
                    {t.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-ink mb-0.5 group-hover:text-accent transition-colors">{t.name}</div>
                    <div className="text-xs text-mid mb-2">{t.description}</div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`px-2 py-0.5 rounded-full font-semibold ${
                        t.svartighet === "Enkel" ? "bg-success-soft text-success" :
                        t.svartighet === "Medel" ? "bg-warning-soft text-warning" :
                        "bg-danger-soft text-danger"
                      }`}>{t.svartighet}</span>
                      <span className="text-mid">⏱ {t.tid}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
