export interface TjanstFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  keywords: string[];
  author: string;
  tjanst: string; // e.g. "Ratsit", "Hitta.se"
  svartighet: "Enkel" | "Medel" | "Avancerad";
  tid: string; // e.g. "5 minuter"
  featured?: boolean;
}

export interface GuideContent {
  slug: string;
  frontmatter: TjanstFrontmatter;
  content: string;
}

export interface Mall {
  id: string;
  slug: string;
  title: string;
  tjanst: string;
  description: string;
  price: number; // SEK
  stripePriceId: string;
  category: "opt-out" | "klagomål" | "paket";
  featured?: boolean;
}

export interface PrisplanFeature {
  text: string;
  included: boolean;
}

export interface Prisplan {
  id: string;
  name: string;
  price: number;
  interval: "månad" | "engång" | "gratis";
  description: string;
  features: PrisplanFeature[];
  stripePriceId?: string;
  featured?: boolean;
  badge?: string;
}
