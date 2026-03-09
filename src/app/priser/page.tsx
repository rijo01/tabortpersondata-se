import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Priser — från 41 kr/mån | tabortpersondata.se",
  description: "Välj ett paket och dölj dina uppgifter automatiskt. Basic från 41 kr, Pro från 48 kr, Premium från 58 kr per månad vid årsabonnemang.",
};

export default function PriserPage() {
  return (
    <div className="pt-8">
      <Pricing />
      <FAQ />
    </div>
  );
}
