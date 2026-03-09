import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ta bort personuppgifter från nätet | tabortpersondata.se",
    template: "%s | tabortpersondata.se",
  },
  description: "Vi tar bort dina personuppgifter från Ratsit, Hitta.se, Merinfo och 25+ sajter automatiskt. Månatlig bevakning. Från 59 kr/mån.",
  keywords: ["ta bort personuppgifter", "ta bort sig från ratsit", "hitta.se gdpr", "merinfo radera", "opt out sverige", "gdpr radering"],
  authors: [{ name: "tabortpersondata.se" }],
  creator: "tabortpersondata.se",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://tabortpersondata.se"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://tabortpersondata.se",
    siteName: "tabortpersondata.se",
    title: "Ta bort dina personuppgifter från nätet",
    description: "Automatisk GDPR-radering från 25+ svenska datatjänster. Månadsbevakning. 59 kr/mån.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ta bort personuppgifter | tabortpersondata.se",
    description: "Automatisk GDPR-radering från 25+ svenska datatjänster.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
