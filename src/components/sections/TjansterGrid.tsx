import Link from "next/link";
import { TJANSTER_LIST } from "@/lib/tjanster-data";

export default function TjansterGrid() {
  const shown = TJANSTER_LIST.slice(0, 8);
  return (
    <section className="py-24 bg-cream" id="tjanster">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Täckning</div>
            <h2 className="font-display font-black text-ink text-4xl md:text-5xl tracking-tight leading-tight">
              25+ tjänster täckta
            </h2>
          </div>
          <p className="text-mid text-base font-light leading-relaxed md:pt-14">
            Svenska datatjänster uppdaterar sina register kontinuerligt. Vi håller koll på alla — och lägger automatiskt till nya tjänster när de dyker upp på marknaden.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shown.map((t) => (
            <Link
              key={t.slug}
              href={`/ta-bort-dig-fran/${t.slug}`}
              className="bg-white border border-border rounded-xl p-5 hover:border-accent hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all group"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black mb-4 ${t.color}`}>
                {t.initial}
              </div>
              <h3 className="font-semibold text-sm text-ink mb-1 group-hover:text-accent transition-colors">{t.name}</h3>
              <p className="text-xs text-mid leading-relaxed">{t.description}</p>
            </Link>
          ))}
          <div className="bg-accent-soft border border-accent/20 rounded-xl p-5 flex flex-col justify-center items-center text-center">
            <div className="font-display font-black text-accent text-2xl mb-2">+13</div>
            <p className="text-xs text-accent font-medium">Fler tjänster</p>
            <Link href="/ta-bort-dig-fran" className="mt-3 text-xs font-bold text-accent hover:underline">
              Se alla →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
