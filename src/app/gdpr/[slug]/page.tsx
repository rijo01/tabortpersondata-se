import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllGuiderSlugs, getGuideBySlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuiderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    alternates: { canonical: `/gdpr/${slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const { frontmatter, content } = guide;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="border-b border-border bg-cream">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center gap-2 text-xs text-mid">
          <Link href="/" className="hover:text-ink">Hem</Link>
          <span>/</span>
          <Link href="/gdpr" className="hover:text-ink">GDPR-guider</Link>
          <span>/</span>
          <span className="text-ink font-medium">{frontmatter.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-bold text-accent bg-accent-soft px-2.5 py-1 rounded-full">{frontmatter.category}</span>
            <span className="text-xs text-mid">{new Date(frontmatter.date).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl text-ink tracking-tight leading-tight mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-mid text-lg font-light leading-relaxed mb-10">{frontmatter.description}</p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <div className="lg:col-span-1 space-y-5">
          <div className="bg-ink text-paper rounded-xl p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Automatisera skyddet</div>
            <h3 className="font-display font-bold text-lg mb-2 leading-tight">Slipp hålla koll manuellt</h3>
            <p className="text-sm text-mid mb-4 leading-relaxed">Skydd-planen hanterar allt automatiskt. 59 kr/mån.</p>
            <Link href="/#priser" className="w-full bg-accent text-white font-bold text-sm py-3 rounded hover:bg-accent-dark transition-colors flex items-center justify-center">
              Se prisplaner →
            </Link>
          </div>
          <div className="bg-white border border-border rounded-xl p-5">
            <h3 className="font-semibold text-sm text-ink mb-4">Relaterade guider</h3>
            <div className="space-y-3">
              <Link href="/gdpr/ratt-till-radering" className="block text-sm text-mid hover:text-accent transition-colors">→ Rätten till radering</Link>
              <Link href="/gdpr/klagomal-imy" className="block text-sm text-mid hover:text-accent transition-colors">→ Klaga till IMY</Link>
              <Link href="/mallar" className="block text-sm text-mid hover:text-accent transition-colors">→ Ladda ner GDPR-mallar</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
