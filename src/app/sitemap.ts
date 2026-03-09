import type { MetadataRoute } from "next";
import { TJANSTER, UPPLYSNINGAR } from "@/lib/tjanster";

const BASE = "https://tabortpersondata.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const static_pages = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/tjanster`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/priser`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE}/om-oss`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/vanliga-fragor`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/blogg`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const tjanst_pages = TJANSTER.map((t) => ({
    url: `${BASE}/tjanster/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const uppl_pages = UPPLYSNINGAR.map((u) => ({
    url: `${BASE}/upplysningar/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...static_pages, ...tjanst_pages, ...uppl_pages];
}
