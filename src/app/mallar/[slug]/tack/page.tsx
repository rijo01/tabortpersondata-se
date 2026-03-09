import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tack för ditt köp! — tabortpersondata.se",
  robots: { index: false },
};

export default function TackMallPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-24 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="font-display font-black text-4xl text-ink tracking-tight mb-4">
        Tack för ditt köp!
      </h1>
      <p className="text-mid text-lg font-light leading-relaxed mb-8">
        Du får ett e-postmeddelande med din nedladdningslänk inom några minuter. Kolla gärna skräppostmappen om det dröjer.
      </p>
      <div className="bg-success-soft border border-green-200 rounded-xl p-6 mb-8 text-left">
        <h2 className="font-semibold text-success mb-3">Nästa steg</h2>
        <ol className="space-y-2 text-sm text-ink">
          <li className="flex items-start gap-2"><span className="text-success font-bold">1.</span> Ladda ner PDF-mallen från e-postlänken</li>
          <li className="flex items-start gap-2"><span className="text-success font-bold">2.</span> Fyll i dina uppgifter (namn, personnummer, adress)</li>
          <li className="flex items-start gap-2"><span className="text-success font-bold">3.</span> Skriv under och skicka till tjänsten</li>
          <li className="flex items-start gap-2"><span className="text-success font-bold">4.</span> Förvänta svar inom 30 dagar (lagstadgat)</li>
        </ol>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/mallar" className="bg-accent text-white font-bold text-sm px-5 py-2.5 rounded hover:bg-accent-dark transition-colors">
          Se fler mallar
        </Link>
        <Link href="/#priser" className="border border-border text-ink font-semibold text-sm px-5 py-2.5 rounded hover:border-ink hover:bg-cream transition-colors">
          Automatisera med Skydd-planen
        </Link>
      </div>
    </div>
  );
}
