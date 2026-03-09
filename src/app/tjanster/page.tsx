import Link from "next/link";
import type { Metadata } from "next";
import { TJANSTER } from "@/lib/tjanster";

export const metadata: Metadata = {
  title: "Tjänster — så funkar det",
  description: "Dölj dina uppgifter, ta bort Google-resultat, dark web-bevakning och ID-skydd. Allt i ett.",
};

export default function TjansterPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="text-center mb-14">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Tjänster</div>
        <h1 className="font-display font-black text-white text-5xl tracking-tight mb-4">Så funkar det</h1>
        <p className="text-slate-400 text-lg font-light max-w-[50ch] mx-auto">
          Kraftfulla verktyg för att skydda din personliga information online.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TJANSTER.map((t) => (
          <Link key={t.slug} href={`/tjanster/${t.slug}`}
            className="glass rounded-2xl p-7 hover:border-accent/30 transition-all group border border-white/5">
            <div className="text-4xl mb-5">{t.icon}</div>
            <h2 className="font-display font-bold text-white text-xl mb-2 group-hover:text-accent transition-colors">{t.name}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">{t.shortDesc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
