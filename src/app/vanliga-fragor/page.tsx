import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Vanliga frågor — tabortpersondata.se",
  description: "Svar på vanliga frågor om GDPR, datarensning, Google avindexering och våra tjänster.",
};

export default function VanligaFragorPage() {
  return (
    <div className="pt-8">
      <div className="max-w-4xl mx-auto px-5 py-8 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Hjälpcenter</div>
        <h1 className="font-display font-black text-white text-5xl tracking-tight">Vanliga frågor</h1>
      </div>
      <FAQ />
    </div>
  );
}
