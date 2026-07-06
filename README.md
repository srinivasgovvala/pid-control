# PID Controls — Corporate Website

Smart Automation. Sustainable Performance.

Professional corporate website for **PID Controls**, a Hyderabad-based Building Management System (BMS) and automation company with 10+ years of experience in intelligent building automation and energy management.

**Live:** [www.pid-controls.com](https://www.pid-controls.com)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3
- **Icons:** Custom SVG icon library (Lucide-inspired)
- **Fonts:** Inter (body), Montserrat (headings) — Google Fonts
- **Deployment:** Static export, ready for Vercel / Netlify

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero with tagline/pillars, services strip, about preview, industries grid, trust points, brand partners, CTA |
| About Us | `/about` | Company narrative, capability hub, vision & mission, 6 core values |
| Services | `/services` | 5 core services (BMS, HVAC, EMS, EnMS, CPM) with key features, advanced solutions |
| Industries | `/industries` | 6 industry cards (commercial, healthcare, pharma, industrial, education, data centers) |
| Our Process | `/process` | 6-step project execution timeline with interactive dashboard mockup |
| Why Choose Us | `/why-choose-us` | 6 trust pillars, brand partner grid (10 brands), stats counters |
| Contact | `/contact` | Quote/consultation form, office address, embedded Google Map |

## Features

- Fully responsive (mobile, tablet, desktop)
- Sticky navigation with dropdown menus
- Smooth scroll-reveal animations
- WhatsApp & Call floating action buttons
- Contact form with client-side validation
- SEO: meta tags, sitemap.xml, robots.txt, LocalBusiness schema
- Dark forest green gradient brand identity with circuit-board motifs

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Deploy

### Vercel (recommended)
1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add custom domain in Vercel dashboard
4. Point `www` CNAME → `cname.vercel-dns.com`

### Netlify
1. Run `npx next export` to generate `out/` folder
2. Drag-drop `out/` into Netlify
3. Add custom domain in Netlify dashboard

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── industries/
│   ├── process/
│   ├── services/
│   ├── why-choose-us/
│   ├── globals.css
│   ├── layout.js
│   └── page.js           # Home page
├── components/           # Reusable components
│   ├── Footer.js
│   ├── Icons.js          # SVG icon library
│   ├── Navbar.js
│   ├── PageHeader.js
│   ├── ScrollReveal.js
│   └── WhatsAppButton.js
public/
├── images/
├── robots.txt
└── sitemap.xml
```

## Brand

- **Primary:** Dark forest green (#0B3D24 / #123524), gradient green (#4CAF50 → #8BC34A)
- **Secondary:** White / light gray backgrounds
- **Typography:** Montserrat (headings), Inter (body)
