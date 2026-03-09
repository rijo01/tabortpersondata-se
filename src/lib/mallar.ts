import type { Mall } from "@/types";

export const MALLAR: Mall[] = [
  {
    id: "ratsit",
    slug: "opt-out-mall-ratsit",
    title: "Opt-out brev — Ratsit",
    tjanst: "Ratsit.se",
    description: "Juridiskt korrekt GDPR-brev för borttagning av personuppgifter från Ratsit. Inkluderar krav på radering av adress, telefonnummer och inkomstuppgifter.",
    price: 29,
    stripePriceId: process.env.STRIPE_PRICE_MALL_RATSIT || "",
    category: "opt-out",
  },
  {
    id: "hitta",
    slug: "opt-out-mall-hitta-se",
    title: "Opt-out brev — Hitta.se",
    tjanst: "Hitta.se",
    description: "Brev anpassat för Hitta.se med korrekt mottagaradress och stöd i GDPR artikel 17. Täcker adress, kartor och kontaktuppgifter.",
    price: 29,
    stripePriceId: process.env.STRIPE_PRICE_MALL_HITTA || "",
    category: "opt-out",
  },
  {
    id: "merinfo",
    slug: "opt-out-mall-merinfo",
    title: "Opt-out brev — Merinfo",
    tjanst: "Merinfo.se",
    description: "Begäran om radering från Merinfo med juridisk hänvisning till artikel 17 GDPR. Täcker bostadsuppgifter och ägarhistorik.",
    price: 29,
    stripePriceId: process.env.STRIPE_PRICE_MALL_MERINFO || "",
    category: "opt-out",
  },
  {
    id: "eniro",
    slug: "opt-out-mall-eniro",
    title: "Opt-out brev — Eniro",
    tjanst: "Eniro.se",
    description: "Komplett opt-out-brev för Eniro. Inkluderar begäran om radering av telefonnummer och adressuppgifter ur deras register.",
    price: 29,
    stripePriceId: process.env.STRIPE_PRICE_MALL_ENIRO || "",
    category: "opt-out",
  },
  {
    id: "uc",
    slug: "opt-out-mall-uc-kreditinfo",
    title: "Opt-out brev — UC / Kreditinfo",
    tjanst: "UC & Kreditinfo",
    description: "Avancerat brev för kreditupplysningsbolag. Stöd i kreditupplysningslagen samt GDPR. Hög betalningsvilja — skydda din kreditprofil.",
    price: 49,
    stripePriceId: process.env.STRIPE_PRICE_MALL_UC || "",
    category: "opt-out",
    featured: true,
  },
  {
    id: "imy",
    slug: "klagomal-imy-mall",
    title: "Klagomål till IMY",
    tjanst: "Integritetsskyddsmyndigheten",
    description: "Färdigt klagomålsbrev till IMY när en datatjänst vägrar radera dina uppgifter. Unik produkt — låg konkurrens online.",
    price: 49,
    stripePriceId: process.env.STRIPE_PRICE_MALL_IMY || "",
    category: "klagomål",
  },
  {
    id: "paket",
    slug: "gdpr-mallpaket-komplett",
    title: "Komplett mallpaket",
    tjanst: "Alla tjänster",
    description: "Alla 10+ mallar i ett paket. Täcker Ratsit, Hitta.se, Merinfo, Eniro, UC, Mrkoll, Proff, Upplysning.se + IMY-klagomål. Livstidsåtkomst.",
    price: 149,
    stripePriceId: process.env.STRIPE_PRICE_MALL_PAKET || "",
    category: "paket",
    featured: true,
  },
];

export function getMallBySlug(slug: string): Mall | undefined {
  return MALLAR.find((m) => m.slug === slug);
}

export function getMallarByCategory(category: Mall["category"]): Mall[] {
  return MALLAR.filter((m) => m.category === category);
}
