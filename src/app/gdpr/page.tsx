import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuider } from "@/lib/content";

export const metadata: Metadata = {
  title: "GDPR-guider — rätten till radering och personuppgiftsskydd",
  description: "Kompletta guider om GDPR, rätten att bli glömd, klagomål till IMY och hur du skyddar dina personuppgifter online.",
  alternates: { canonical: "/gdpr" },
};

const STATIC_GUIDES = [
  { slug: "ratt-till-radering", title: "Rätten till radering (artikel 17 GDPR)", desc: "Vad innebär rätten att bli glömd? Lär dig när du har rätt att kräva radering och hur du går tillväga.", category: "Grundläggande", tid: "5 min" },
  { slug: "klagomal-imy", title: "Klaga till IMY — så gör du", desc: "Om en datatjänst vägrar radera dina uppgifter kan du klaga till Integritetsskyddsmyndigheten. Steg-för-steg guide.", category: "Klagomål", tid: "10 min" },
  { slug: "personuppgifter-foretag", title: "Personuppgifter kopplade till företag", desc: "Egenföretagare och styrelseledamöter — vad kan tas bort och vad måste finnas kvar i offentliga register?", category: "Företag", tid: "7 min" },
  { slug: "digitalt-fotavtryck", title: "Minska ditt digitala fotavtryck", desc: "Praktiska steg för att begränsa spridningen av dina personuppgifter online — utöver opt-out från datatjänster.", category: "Praktiskt", tid: "8 min" },
];

export default function GDPRPage() {
  const mdxGuides = getAllGuider();

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <div className="mb-12 max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Kunskapsbank</div>
        <h1 className="font-display font-black text-5xl text-ink tracking-tight leading-tight mb-4">GDPR-guider</h1>
        <p className="text-mid text-lg font-light leading-relaxed">
          Allt du behöver veta om dina rättigheter, hur du kräver radering och vad du gör om tjänster vägrar samarbeta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[...STATIC_GUIDES, ...mdxGuides.map((g) => ({
          slug: g.slug,
          title: g.frontmatter.title,
          desc: g.frontmatter.description,
          category: g.frontmatter.category,
          tid: g.frontmatter.tid || "5 min",
        }))].map((guide) => (
          <Link
            key={guide.slug}
            href={`/gdpr/${guide.slug}`}
            className="bg-white border border-border rounded-xl p-6 hover:border-accent hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-accent bg-accent-soft px-2.5 py-1 rounded-full">{guide.category}</span>
              <span className="text-xs text-mid">⏱ {guide.tid}</span>
            </div>
            <h2 className="font-display font-bold text-lg text-ink mb-2 group-hover:text-accent transition-colors tracking-tight leading-tight">{guide.title}</h2>
            <p className="text-sm text-mid leading-relaxed">{guide.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
