import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllTjansterSlugs, getTjanstBySlug } from "@/lib/content";
import { TJANSTER_LIST } from "@/lib/tjanster-data";
import { MALLAR } from "@/lib/mallar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Combine MDX slugs with static tjanster list
  const mdxSlugs = getAllTjansterSlugs();
  const staticSlugs = TJANSTER_LIST.map((t) => t.slug);
  const all = [...new Set([...mdxSlugs, ...staticSlugs])];
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTjanstBySlug(slug);
  const tjanst = TJANSTER_LIST.find((t) => t.slug === slug);
  const name = guide?.frontmatter.tjanst || tjanst?.name || slug;

  return {
    title: `Ta bort dig från ${name} — steg-för-steg GDPR-guide`,
    description: `Lär dig hur du tar bort dina personuppgifter från ${name}. Komplett guide med opt-out-brev och juridisk mall att ladda ner.`,
    alternates: { canonical: `/ta-bort-dig-fran/${slug}` },
  };
}

export default async function TjanstPage({ params }: Props) {
  const { slug } = await params;
  const guide = getTjanstBySlug(slug);
  const tjanst = TJANSTER_LIST.find((t) => t.slug === slug);

  if (!guide && !tjanst) notFound();

  const name = guide?.frontmatter.tjanst || tjanst?.name || slug;
  const description = tjanst?.description || "";
  const svartighet = guide?.frontmatter.svartighet || tjanst?.svartighet || "Medel";
  const tid = guide?.frontmatter.tid || tjanst?.tid || "10 min";
  const relatedMall = MALLAR.find((m) => m.tjanst.toLowerCase().includes(name.split(".")[0].toLowerCase()));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Ta bort dig från ${name}`,
    description: `Steg-för-steg guide för GDPR-radering från ${name}`,
    step: [
      { "@type": "HowToStep", name: "Hitta opt-out-formuläret", text: `Gå till ${name}s webbplats och navigera till deras opt-out-sida.` },
      { "@type": "HowToStep", name: "Fyll i dina uppgifter", text: "Ange ditt namn och personnummer för att identifiera din profil." },
      { "@type": "HowToStep", name: "Skicka begäran", text: "Skicka din GDPR-begäran om radering. Tjänsten är skyldig att svara inom 30 dagar." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-cream">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-2 text-xs text-mid">
          <Link href="/" className="hover:text-ink">Hem</Link>
          <span>/</span>
          <Link href="/ta-bort-dig-fran" className="hover:text-ink">Tjänster</Link>
          <span>/</span>
          <span className="text-ink font-medium">{name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="mb-6 flex flex-wrap gap-2 items-center">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              svartighet === "Enkel" ? "bg-success-soft text-success" :
              svartighet === "Medel" ? "bg-warning-soft text-warning" :
              "bg-danger-soft text-danger"
            }`}>{svartighet}</span>
            <span className="text-xs text-mid">⏱ Tar ca {tid}</span>
          </div>

          <h1 className="font-display font-black text-4xl md:text-5xl text-ink tracking-tight leading-tight mb-4">
            Ta bort dig från {name}
          </h1>
          <p className="text-mid text-lg font-light leading-relaxed mb-8">
            {description || `Komplett GDPR-guide för att ta bort dina personuppgifter från ${name}. Följ stegen nedan eller använd vår färdiga mall.`}
          </p>

          {/* Guide content (MDX or static fallback) */}
          {guide?.content ? (
            <div className="prose" dangerouslySetInnerHTML={{ __html: guide.content }} />
          ) : (
            <div className="prose">
              <h2>Så tar du bort dig från {name}</h2>
              <p>Den här guiden beskriver steg för steg hur du begär radering av dina personuppgifter från {name} med stöd i GDPR artikel 17 (rätten att bli glömd).</p>

              <h3>Steg 1 — Förbered din begäran</h3>
              <p>Du behöver ha följande till hands: fullständigt namn, personnummer och den e-postadress du vill använda för korrespondensen.</p>

              <h3>Steg 2 — Hitta rätt opt-out-kanal</h3>
              <p>Gå till {name}s webbplats. De flesta svenska datatjänster har en dedikerad sida för GDPR-begäran, ofta under &quot;Integritet&quot; eller &quot;Ta bort uppgifter&quot;.</p>

              <h3>Steg 3 — Skicka din begäran</h3>
              <p>Fyll i formuläret eller skicka ett e-postbrev. Tjänsten är lagstadgad att bekräfta din begäran och genomföra raderingen inom 30 dagar.</p>

              <h3>Steg 4 — Följ upp om det dröjer</h3>
              <p>Om du inte hört något inom 30 dagar har du rätt att eskalera ärendet till Integritetsskyddsmyndigheten (IMY). Använd vår IMY-mall för detta.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-5">
          {/* Mall CTA */}
          {relatedMall && (
            <div className="bg-accent-soft border border-accent/20 rounded-xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Färdig mall</div>
              <h3 className="font-display font-bold text-lg text-ink mb-2 leading-tight">{relatedMall.title}</h3>
              <p className="text-sm text-mid mb-4 leading-relaxed">{relatedMall.description}</p>
              <Link
                href={`/mallar/${relatedMall.slug}`}
                className="w-full bg-accent text-white font-bold text-sm py-3 rounded hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
              >
                Ladda ner mall — {relatedMall.price} kr →
              </Link>
            </div>
          )}

          {/* Prenumeration CTA */}
          <div className="bg-ink text-paper rounded-xl p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Automatisera det</div>
            <h3 className="font-display font-bold text-lg mb-2 leading-tight">Slipp göra det manuellt</h3>
            <p className="text-sm text-mid mb-4 leading-relaxed">Med Skydd-planen tar vi bort dig från {name} och 24 andra tjänster — automatiskt och varje månad.</p>
            <Link
              href="/#priser"
              className="w-full bg-accent text-white font-bold text-sm py-3 rounded hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
            >
              Starta skyddet — 59 kr/mån →
            </Link>
          </div>

          {/* Related services */}
          <div className="bg-white border border-border rounded-xl p-5">
            <h3 className="font-semibold text-sm text-ink mb-4">Relaterade tjänster</h3>
            <div className="space-y-2">
              {TJANSTER_LIST.filter((t) => t.slug !== slug).slice(0, 4).map((t) => (
                <Link key={t.slug} href={`/ta-bort-dig-fran/${t.slug}`} className="flex items-center gap-2.5 text-sm hover:text-accent transition-colors group">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${t.color}`}>{t.initial}</div>
                  <span className="text-mid group-hover:text-accent">{t.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
