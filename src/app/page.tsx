import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import TjansterSection from "@/components/sections/TjansterSection";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "tabortpersondata.se",
  url: "https://tabortpersondata.se",
  description: "Ta bort dina personuppgifter från nätet automatiskt. GDPR-radering från 25+ svenska datatjänster.",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <HowItWorks />
      <TjansterSection />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
