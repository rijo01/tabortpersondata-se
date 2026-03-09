import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Välkommen! — tabortpersondata.se" };

export default function TackPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-32 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="font-display font-black text-white text-4xl tracking-tight mb-4">
        Välkommen ombord!
      </h1>
      <p className="text-slate-400 text-lg font-light mb-4">
        Din prenumeration är aktiv. Du får ett bekräftelsemail med inloggningslänk inom några minuter.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        Vi börjar omedelbart att ta bort dina uppgifter. Genomsnittstid för Google: 13 dagar.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="https://app.tabortpersondata.se"
          className="bg-accent text-white font-bold px-6 py-3.5 rounded-xl hover:bg-accent-dark transition-colors">
          Gå till din dashboard →
        </Link>
        <Link href="/"
          className="glass text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
