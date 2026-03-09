import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMallBySlug, MALLAR } from "@/lib/mallar";
import MallCheckout from "./MallCheckout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MALLAR.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mall = getMallBySlug(slug);
  if (!mall) return {};
  return {
    title: `${mall.title} — GDPR-mall att ladda ner`,
    description: mall.description,
    alternates: { canonical: `/mallar/${slug}` },
  };
}

export default async function MallPage({ params }: Props) {
  const { slug } = await params;
  const mall = getMallBySlug(slug);
  if (!mall) notFound();

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-mid mb-8">
        <a href="/" className="hover:text-ink">Hem</a>
        <span>/</span>
        <a href="/mallar" className="hover:text-ink">Mallar</a>
        <span>/</span>
        <span className="text-ink">{mall.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left - info */}
        <div className="lg:col-span-3">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            {mall.category === "opt-out" ? "Opt-out brev" : mall.category === "klagomål" ? "Klagomål" : "Komplett paket"}
          </div>
          <h1 className="font-display font-black text-4xl text-ink tracking-tight leading-tight mb-4">{mall.title}</h1>
          <p className="text-mid text-lg font-light leading-relaxed mb-8">{mall.description}</p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              "Juridiskt korrekt enligt GDPR artikel 17",
              "Anpassat för " + mall.tjanst,
              "Redo att skriva under och skicka",
              "PDF-format — direkt nedladdning",
              mall.category === "paket" ? "10+ mallar i ett paket" : "Livstidsåtkomst",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-sm text-ink">
                <span className="text-success font-bold">✓</span>
                {f}
              </div>
            ))}
          </div>

          {/* Preview */}
          <div className="bg-paper border border-border rounded-xl p-8 font-mono text-xs text-mid leading-8 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center font-display font-black text-8xl text-black/[0.025] pointer-events-none">
              {mall.category === "klagomål" ? "IMY" : "GDPR"}
            </div>
            <p className="font-semibold text-ink not-italic">Till: {mall.tjanst}</p>
            <p>Ärende: Begäran om radering av personuppgifter</p>
            <p>Datum: [datum]</p>
            <br />
            <p>Med stöd i Europaparlamentets och rådets</p>
            <p>förordning (EU) 2016/679 (GDPR), artikel 17,</p>
            <p>begär jag härmed radering av samtliga</p>
            <p>personuppgifter som behandlas om mig…</p>
            <br />
            <p className="text-accent font-semibold">[Fullständig text efter köp]</p>
          </div>
        </div>

        {/* Right - checkout */}
        <div className="lg:col-span-2">
          <MallCheckout mall={mall} />
        </div>
      </div>
    </div>
  );
}
