import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { TJANSTER } from "@/lib/tjanster";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return TJANSTER.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = TJANSTER.find((x) => x.slug === slug);
  if (!t) return {};
  return { title: `${t.name} — tabortpersondata.se`, description: t.desc };
}

export default async function TjanstPage({ params }: Props) {
  const { slug } = await params;
  const t = TJANSTER.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-10">
        <Link href="/" className="hover:text-white">Hem</Link>
        <span>/</span>
        <Link href="/tjanster" className="hover:text-white">Tjänster</Link>
        <span>/</span>
        <span className="text-white">{t.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="text-5xl mb-6">{t.icon}</div>
          <h1 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mb-4">{t.name}</h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">{t.desc}</p>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {t.features.map((f) => (
              <div key={f} className="glass rounded-xl p-4 flex items-center gap-2.5">
                <span className="text-accent font-bold">✓</span>
                <span className="text-sm text-slate-300">{f}</span>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="font-display font-bold text-white text-2xl mb-4">Hur fungerar {t.name}?</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              När du registrerar dig startar vi automatiskt processen att ta bort dina uppgifter. Du behöver inte göra något manuellt — vi sköter allt.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Vi bevakar kontinuerligt och agerar direkt om dina uppgifter dyker upp igen. Du får en notis via e-post så snart något händer.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 border border-accent/20 glow-accent-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Ingår i alla planer</div>
            <h3 className="font-display font-bold text-white text-xl mb-2">{t.name}</h3>
            <p className="text-slate-400 text-sm mb-5">{t.shortDesc}</p>
            <Link href="/#priser" className="block w-full bg-accent text-white font-bold text-sm py-3.5 rounded-xl text-center hover:bg-accent-dark transition-colors">
              Kom igång — från 41 kr/mån →
            </Link>
          </div>

          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white text-sm mb-4">Relaterade tjänster</h3>
            <div className="space-y-2">
              {TJANSTER.filter((x) => x.slug !== slug).slice(0, 4).map((x) => (
                <Link key={x.slug} href={`/tjanster/${x.slug}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <span>{x.icon}</span> {x.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
