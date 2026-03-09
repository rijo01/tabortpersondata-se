# tabortpersondata.se

Ta bort dina personuppgifter från nätet — automatiskt.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Stripe · Resend  
**Hosting:** Vercel (auto-deploy från GitHub)

---

## 🚀 Deploy — 4 kommandon

```bash
# 1. Installera beroenden
npm install

# 2. Kopiera och fyll i miljövariabler
cp .env.local.example .env.local
# Öppna .env.local och lägg in Stripe-nycklar

# 3. Skapa GitHub-repo och pusha
git init
git add .
git commit -m "Initial commit — tabortpersondata.se"
git remote add origin https://github.com/rijo01/tabortpersondata-se.git
git push -u origin main

# 4. Koppla Vercel
# Gå till vercel.com/new → Import från GitHub
# Välj Next.js preset → Deploy
```

---

## 🔑 Miljövariabler att konfigurera

Se `.env.local.example` för full lista. Viktigaste:

- `STRIPE_SECRET_KEY` — från Stripe Dashboard
- `STRIPE_WEBHOOK_SECRET` — skapa via `stripe listen`
- `STRIPE_PRICE_SKYDD` — skapa prenumerationsprodukt i Stripe
- `STRIPE_PRICE_MALL_*` — skapa one-time products per mall
- `RESEND_API_KEY` — för kvittomail

---

## 🌐 Loopia DNS

| Typ | Namn | Värde |
|-----|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

---

## 🤖 MaxiAI Content

Lägg MDX-filer i:
- `content/tjanster/[slug].mdx` → publiceras på `/ta-bort-dig-fran/[slug]`
- `content/guider/[slug].mdx` → publiceras på `/gdpr/[slug]`

### Frontmatter-schema (tjanster)
```yaml
---
title: "Ta bort dig från X — guide 2026"
description: "..."
date: "2026-03-09"
category: "Tjänster"
keywords: ["nyckelord1", "nyckelord2"]
author: "tabortpersondata.se"
tjanst: "X"
svartighet: "Enkel" | "Medel" | "Avancerad"
tid: "5 minuter"
featured: true
---
```

### Cron-schema
MaxiAI kör 5 artiklar/dag kl 08:00 vardagar.
Commit-format: `content: add guide för [tjanst]`

---

## 💳 Stripe-produkter att skapa

### Prenumerationer (recurring)
- Skydd — 59 SEK/mån
- Familj — 149 SEK/mån

### Mallar (one-time)
- Ratsit opt-out — 29 SEK
- Hitta.se opt-out — 29 SEK
- Merinfo opt-out — 29 SEK
- Eniro opt-out — 29 SEK
- UC/Kreditinfo opt-out — 49 SEK
- IMY klagomål — 49 SEK
- Komplett paket — 149 SEK

---

## 📁 Projektstruktur

```
src/
  app/
    page.tsx                    # Startsida
    ta-bort-dig-fran/
      page.tsx                  # Tjänster-index
      [slug]/page.tsx           # Dynamisk tjänst-guide
    mallar/
      page.tsx                  # Mallar-shop
      [slug]/
        page.tsx                # Mall-detailsida
        MallCheckout.tsx        # Stripe checkout client
        tack/page.tsx           # Success page
    gdpr/
      page.tsx                  # Guide-index
      [slug]/page.tsx           # Dynamisk guide
    api/
      checkout/route.ts         # Stripe one-time payment
      subscribe/route.ts        # Stripe subscription
      webhook/route.ts          # Stripe webhook handler
    sitemap.ts                  # Auto-genererad sitemap
    robots.ts
  components/
    layout/                     # Navbar, Footer
    sections/                   # Hero, HowItWorks, Pricing, FAQ…
    ui/                         # Button, Badge
  lib/
    content.ts                  # gray-matter MDX reader
    mallar.ts                   # Mall-data
    prisplaner.ts               # Prenumerationsplaner
    tjanster-data.ts            # Tjänste-lista
  types/index.ts

content/
  tjanster/                     # MDX från MaxiAI
  guider/                       # MDX från MaxiAI
```
