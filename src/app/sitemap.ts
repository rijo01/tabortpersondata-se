import { MetadataRoute } from "next";
import { getAllTjansterSlugs, getAllGuiderSlugs } from "@/lib/content";
import { TJANSTER_LIST } from "@/lib/tjanster-data";
import { MALLAR } from "@/lib/mallar";

const BASE = "https://tabortpersondata.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const mdxTjanster = getAllTjansterSlugs();
  const staticTjanster = TJANSTER_LIST.map((t) => t.slug);
  const allTjanster = [...new Set([...mdxTjanster, ...staticTjanster])];
  const guider = getAllGuiderSlugs();

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/ta-bort-dig-fran`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/mallar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/gdpr`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/om-oss`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...allTjanster.map((slug) => ({
      url: `${BASE}/ta-bort-dig-fran/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...MALLAR.map((m) => ({
      url: `${BASE}/mallar/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...guider.map((slug) => ({
      url: `${BASE}/gdpr/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
