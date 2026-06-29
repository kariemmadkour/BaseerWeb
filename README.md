# بصير — Baseer Web Platform

منصة وطنية رقمية لتمكين المكفوفين في دولة قطر  
National digital platform empowering visually impaired individuals in Qatar.

## Stack
- **Next.js 16** (App Router)
- **next-intl** — bilingual Arabic (RTL) + English
- **Tailwind CSS 4**
- **Lucide React** icons

## Routes
| Route | Description |
|-------|-------------|
| `/ar` or `/en` | Homepage |
| `/ar/services` | All 12 services |
| `/ar/app` | بصير mobile app |
| `/ar/volunteer` | Volunteer signup |
| `/ar/community` | Community hub |
| `/ar/contact` | Contact form |

## Run locally
```bash
npm install --legacy-peer-deps
npm run dev
```

## Deploy
Configured for Vercel — connect the `BaseerWeb` GitHub repo in the Vercel dashboard.
