import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss — tabortpersondata.se",
  description: "Vi hjälper svenska medborgare att utöva sin GDPR-rätt och ta bort personuppgifter från datatjänster online.",
  alternates: { canonical: "/om-oss" },
};

export default function OmOssPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <div className="mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Om oss</div>
        <h1 className="font-display font-black text-5xl text-ink tracking-tight leading-tight mb-4">
          Vi sätter din integritet i fokus
        </h1>
        <p className="text-mid text-xl font-light leading-relaxed">
          tabortpersondata.se grundades med ett enkelt syfte: att göra GDPR-rätten tillgänglig för alla — inte bara för dem med juridisk utbildning.
        </p>
      </div>

      <div className="prose mb-12">
        <h2>Bakgrunden</h2>
        <p>
          Varje år publicerar svenska datatjänster miljontals personprofiler med adress, telefonnummer, inkomstuppgifter och mycket mer — utan att du bett om det. GDPR ger dig rätt att kräva radering, men processen är tidskrävande och måste upprepas kontinuerligt.
        </p>
        <p>
          Vi automatiserar den processen. Från genomsökning till opt-out-brev till löpande bevakning.
        </p>

        <h2>Vad vi gör</h2>
        <p>
          Vi söker igenom 25+ svenska datatjänster, skickar juridiskt korrekta begäran om radering och bevakar att dina uppgifter förblir borttagna. Varje månad. Automatiskt.
        </p>
        <p>
          För dig som föredrar att göra det manuellt erbjuder vi också färdiga GDPR-mallar — juridiskt korrekta brev anpassade för varje tjänst, klara att skriva under och skicka.
        </p>

        <h2>Integritet och transparens</h2>
        <p>
          Vi lagrar enbart den information vi behöver för att utföra tjänsten. All data behandlas inom EU, krypteras i vila och i transit, och raderas permanent om du avslutar din prenumeration.
        </p>
      </div>

      <div className="bg-accent-soft border border-accent/20 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <h2 className="font-display font-bold text-2xl text-ink mb-2 tracking-tight">Redo att ta kontroll?</h2>
          <p className="text-mid text-sm">Starta skyddet idag. Ingen bindningstid.</p>
        </div>
        <Link href="/#priser" className="bg-accent text-white font-bold text-sm px-6 py-3 rounded hover:bg-accent-dark transition-colors whitespace-nowrap">
          Se prisplaner →
        </Link>
      </div>
    </div>
  );
}
