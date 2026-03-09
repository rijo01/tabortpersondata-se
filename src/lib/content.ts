import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { GuideContent, TjanstFrontmatter } from "@/types";

const TJANSTER_DIR = path.join(process.cwd(), "content/tjanster");
const GUIDER_DIR = path.join(process.cwd(), "content/guider");

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ── Tjänst-guider (under /ta-bort-dig-fran/[slug]) ──
export function getAllTjansterSlugs(): string[] {
  ensureDir(TJANSTER_DIR);
  return fs
    .readdirSync(TJANSTER_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getTjanstBySlug(slug: string): GuideContent | null {
  ensureDir(TJANSTER_DIR);
  const mdxPath = path.join(TJANSTER_DIR, `${slug}.mdx`);
  const mdPath = path.join(TJANSTER_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as TjanstFrontmatter, content };
}

export function getAllTjanster(): GuideContent[] {
  return getAllTjansterSlugs()
    .map((slug) => getTjanstBySlug(slug))
    .filter(Boolean) as GuideContent[];
}

// ── Generella guider (under /gdpr/) ──
export function getAllGuiderSlugs(): string[] {
  ensureDir(GUIDER_DIR);
  return fs
    .readdirSync(GUIDER_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getGuideBySlug(slug: string): GuideContent | null {
  ensureDir(GUIDER_DIR);
  const mdxPath = path.join(GUIDER_DIR, `${slug}.mdx`);
  const mdPath = path.join(GUIDER_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as TjanstFrontmatter, content };
}

export function getAllGuider(): GuideContent[] {
  return getAllGuiderSlugs()
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean) as GuideContent[];
}
