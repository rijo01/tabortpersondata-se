export type Interval = "3" | "6" | "12";

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  prices: Record<Interval, { monthly: number; total: number; savings: number }>;
  stripePriceIds: Record<Interval, string>;
  links: number;
  features: string[];
  highlighted?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Kom igång med grundskyddet",
    icon: "🛡️",
    color: "from-slate-500 to-slate-700",
    prices: {
      "3":  { monthly: 59, total: 177, savings: 0 },
      "6":  { monthly: 49, total: 294, savings: 60 },
      "12": { monthly: 41, total: 492, savings: 216 },
    },
    stripePriceIds: {
      "3":  process.env.STRIPE_PRICE_BASIC_3M  || "",
      "6":  process.env.STRIPE_PRICE_BASIC_6M  || "",
      "12": process.env.STRIPE_PRICE_BASIC_12M || "",
    },
    links: 5,
    features: [
      "Google Avindexering",
      "Bevaka & Dölj Uppgifter",
      "Adresslarm",
      "Fri Avindexering för Upplysningar",
      "Länkgaranti",
      "Dark web & dataläckor",
      "365 Kundsupport",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Mest populärt — komplett skydd",
    icon: "🔒",
    color: "from-accent to-accent-dark",
    highlighted: true,
    prices: {
      "3":  { monthly: 79, total: 237, savings: 0 },
      "6":  { monthly: 65, total: 390, savings: 84 },
      "12": { monthly: 48, total: 576, savings: 372 },
    },
    stripePriceIds: {
      "3":  process.env.STRIPE_PRICE_PRO_3M  || "",
      "6":  process.env.STRIPE_PRICE_PRO_6M  || "",
      "12": process.env.STRIPE_PRICE_PRO_12M || "",
    },
    links: 10,
    features: [
      "Google Avindexering",
      "Bevaka & Dölj Uppgifter",
      "Adresslarm",
      "Fri Avindexering för Upplysningar",
      "Länkgaranti",
      "Dark web & dataläckor",
      "ID-Skydd",
      "365 Kundsupport",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Maximalt skydd för dig och familjen",
    icon: "⚡",
    color: "from-violet-500 to-violet-700",
    prices: {
      "3":  { monthly: 99, total: 297, savings: 0 },
      "6":  { monthly: 82, total: 492, savings: 102 },
      "12": { monthly: 58, total: 696, savings: 492 },
    },
    stripePriceIds: {
      "3":  process.env.STRIPE_PRICE_PREMIUM_3M  || "",
      "6":  process.env.STRIPE_PRICE_PREMIUM_6M  || "",
      "12": process.env.STRIPE_PRICE_PREMIUM_12M || "",
    },
    links: 15,
    features: [
      "Allt i Pro",
      "15+ Länkborttagningar",
      "Prioriterad handläggning",
      "Upp till 3 familjemedlemmar",
      "Dedikerad kontaktperson",
      "GDPR-rådgivning",
      "ID-Skydd",
      "365 Kundsupport",
    ],
  },
];

export function getSavingsPercent(interval: Interval): number {
  if (interval === "6") return 16;
  if (interval === "12") return 27;
  return 0;
}
