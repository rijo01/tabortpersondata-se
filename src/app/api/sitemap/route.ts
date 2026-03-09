import { NextResponse } from "next/server";
import { getAllTjansterSlugs, getAllGuiderSlugs } from "@/lib/content";
import { TJANSTER_LIST } from "@/lib/tjanster-data";
import { MALLAR } from "@/lib/mallar";

const BASE = "https://tabortpersondata.se";

function url(path: string, priority: number, changefreq: string) {
  return `
  <url>
    <loc>${BASE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`;
}

export async function GET() {
  const mdxTjanster = getAllTjansterSlugs();
  const staticTjanster = TJANSTER_LIST.map((t) => t.slug);
  const allTjanster = [...new Set([...mdxTjanster, ...staticTjanster])];

  const guider = getAllGuiderSlugs();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${url("/", 1.0, "daily")}
  ${url("/ta-bort-dig-fran", 0.9, "weekly")}
  ${url("/mallar", 0.9, "weekly")}
  ${url("/gdpr", 0.8, "weekly")}
  ${url("/om-oss", 0.5, "monthly")}
  ${allTjanster.map((s) => url(`/ta-bort-dig-fran/${s}`, 0.8, "weekly")).join("")}
  ${MALLAR.map((m) => url(`/mallar/${m.slug}`, 0.8, "weekly")).join("")}
  ${guider.map((s) => url(`/gdpr/${s}`, 0.7, "weekly")).join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
