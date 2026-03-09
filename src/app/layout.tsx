import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "Ta bort personuppgifter från nätet | tabortpersondata.se", template: "%s | tabortpersondata.se" },
  description: "Ta bort dina uppgifter från Ratsit, Hitta.se, Merinfo och 25+ sajter. Automatisk bevakning, Google avindexering och ID-skydd. Från 41 kr/mån.",
  keywords: ["ta bort personuppgifter","ta bort sig från ratsit","hitta.se gdpr","dold adress","merinfo radera","google avindexering"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://tabortpersondata.se"),
  openGraph: { type: "website", locale: "sv_SE", siteName: "tabortpersondata.se" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
