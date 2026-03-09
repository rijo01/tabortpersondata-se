import Link from "next/link";
import { TJANSTER } from "@/lib/tjanster";

export default function TjansterSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Vad vi erbjuder</div>
          <h2 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mb-4">
            Dölj din adress — och mycket mer
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-[50ch] mx-auto">
            Kraftfulla verktyg för att rensa, övervaka och skydda din personliga data — snabbt och enkelt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TJANSTER.map((t, i) => (
            <Link
              key={t.slug}
              href={`/tjanster/${t.slug}`}
              className="glass rounded-2xl p-7 group hover:border-accent/30 hover:glow-accent-sm transition-all border border-white/5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-5">{t.icon}</div>
              <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-accent transition-colors">
                {t.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.features.map((f) => (
                  <span key={f} className="text-xs bg-white/5 text-slate-400 px-2.5 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
