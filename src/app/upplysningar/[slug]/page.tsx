import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { UPPLYSNINGAR } from "@/lib/tjanster";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return UPPLYSNINGAR.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const u = UPPLYSNINGAR.find((x) => x.slug === slug);
  if (!u) return {};
  return {
    title: `Ta bort dig från ${u.name} — steg-för-steg guide`,
    description: `Lär dig hur du tar bort dina personuppgifter från ${u.name} med stöd i GDPR. Komplett guide med juridisk mall.`,
  };
}

export default async function UplysningPage({ params }: Props) {
  const { slug } = await params;
  const u = UPPLYSNINGAR.find((x) => x.slug === slug);
  if (!u) notFound();

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Ta bort dig från ${u.name}`,
    step: [
      { "@type": "HowToStep", name: "Hitta din profil", text: `Sök på ditt namn på ${u.url}` },
      { "@type": "HowToStep", name: "Begär radering", text: "Klicka på opt-out eller skicka GDPR-brev" },
      { "@type": "HowToStep", name: "Följ upp", text: "Vänta max 30 dagar — kontakta IMY om de vägrar" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <div className="border-b border-white/5 bg-white/[0.02] py-3">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-white">Hem</Link>
          <span>/</span>
          <span className="hover:text-white cursor-pointer">Upplysningar</span>
          <span>/</span>
          <span className="text-white">{u.name}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-xl font-black mb-6 ${u.color}`}>
            {u.initial}
          </div>
          <h1 className="font-display font-black text-white text-4xl md:text-5xl tracking-tight mb-4">
            Ta bort dig från {u.name}
          </h1>
          <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">{u.desc}</p>

          <div className="space-y-6">
            {[
              { title: "Steg 1 — Hitta din profil", body: `Gå till ${u.url} och sök på ditt namn. Identifiera din profil genom att kontrollera adress och födelseår.` },
              { title: "Steg 2 — Begär radering", body: `${u.name} har en inbyggd opt-out-funktion. Klicka på "Ta bort uppgifter" eller skicka ett GDPR-brev med stöd i artikel 17.` },
              { title: "Steg 3 — Verifiera identitet", body: "De flesta tjänster kräver verifiering via BankID eller e-post. Välj den metod som passar dig." },
              { title: "Steg 4 — Följ upp", body: "Tjänsten är skyldig att svara inom 30 dagar. Om de vägrar, kontakta Integritetsskyddsmyndigheten (IMY)." },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <h2 className="font-display font-bold text-white text-xl mb-2">{s.title}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 border border-accent/20 glow-accent-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Automatisera det</div>
            <h3 className="font-display font-bold text-white text-xl mb-2">Slipp göra det manuellt</h3>
            <p className="text-slate-400 text-sm mb-5">Med vår tjänst tar vi bort dig från {u.name} och 24 andra sajter automatiskt — varje månad.</p>
            <Link href="/#priser" className="block w-full bg-accent text-white font-bold text-sm py-3.5 rounded-xl text-center hover:bg-accent-dark transition-colors">
              Kom igång — från 41 kr/mån →
            </Link>
          </div>

          <div className="glass rounded-2xl p-5">
            <h3 className="font-semibold text-white text-sm mb-4">Fler upplysningssajter</h3>
            <div className="space-y-2">
              {UPPLYSNINGAR.filter((x) => x.slug !== slug).map((x) => (
                <Link key={x.slug} href={`/upplysningar/${x.slug}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-black ${x.color}`}>{x.initial}</div>
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
