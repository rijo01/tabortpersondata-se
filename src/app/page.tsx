import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogosStrip from "@/components/sections/LogosStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import TjansterGrid from "@/components/sections/TjansterGrid";
import MallarPreview from "@/components/sections/MallarPreview";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Ta bort dina personuppgifter från nätet | tabortpersondata.se",
  description: "Vi tar bort dina personuppgifter från Ratsit, Hitta.se, Merinfo och 25+ sajter automatiskt. Månatlig bevakning från 59 kr/mån.",
  alternates: { canonical: "/" },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "tabortpersondata.se",
  url: "https://tabortpersondata.se",
  description: "Automatisk GDPR-radering av personuppgifter från svenska datatjänster",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://tabortpersondata.se/ta-bort-dig-fran?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisk GDPR-radering",
  provider: {
    "@type": "Organization",
    name: "tabortpersondata.se",
    url: "https://tabortpersondata.se",
  },
  description: "Vi tar automatiskt bort dina personuppgifter från 25+ svenska datatjänster och bevakar att de förblir borttagna.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "149",
    priceCurrency: "SEK",
    offerCount: "3",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Hero />
      <LogosStrip />
      <HowItWorks />
      <TjansterGrid />
      <MallarPreview />
      <Pricing />
      <FAQ />
    </>
  );
}
