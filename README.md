# Agentshift — marketing site

Next.js 16 (App Router) marketing site for Agentshift. Every route is statically
prerendered; there is no database, no API route and no server-side runtime.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

Node 20 or newer.

## Structure

```
app/
  layout.js            fonts, metadata, header/footer, analytics
  page.js              homepage
  <route>/page.js      platform, pricing, manifesto, blog, careers,
                       support, startups, terms, privacy
  not-found.js         404
  sitemap.js           /sitemap.xml
  robots.js            /robots.txt
  opengraph-image.js   generated 1200×630 social card
  icon.svg             favicon
  globals.css          the whole design system
components/            Header, Footer, Logo, PricingGrid, Rotator,
                       SignupForm, ui (PageHead / SectionHead / Cta)
data/
  site.js              canonical URL + route list for sitemap/robots
  pricing.js           plan data, shared by / and /pricing
public/               no image assets; the logo is inline SVG + text
```

## Design system

All styling lives in `app/globals.css` — no Tailwind, no CSS-in-JS. Neobrutalist:
flat colour fields, 3px ink borders, hard offset shadows, no gradients, no
border radius.

Tokens are CSS custom properties on `:root` (`--ink`, `--paper`, `--blue`,
`--lime`, `--coral`, `--violet`, plus border/shadow/layout values). Change the
palette there and the whole site follows.

Fonts load through `next/font/google`: Archivo Black (display), Space Grotesk
(body), JetBrains Mono (labels and code).

### Logo

`components/Logo.js` draws the icon mark as inline SVG and sets the wordmark as
live text in the display font. Both use `currentColor`, so the logo takes the
colour of whatever it sits in — the light header and the dark footer share one
component with no variants and no image files.

Inlining matters: an SVG loaded through `<img>` is an isolated document, so
`currentColor` inside it resolves to the SVG's own colour and never inherits
from the page. That is what rendered the footer logo black-on-black in an
earlier revision.

`app/icon.svg` is the same mark on a `--paper` square, used as the favicon.

## Deploying to Vercel

Import the repository; the framework preset, build command and output directory
are all detected automatically. Nothing else is required to get a working
deploy.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Pins the canonical origin (e.g. `https://agentshift.ai`) used by metadata, `sitemap.xml` and `robots.txt`. Without it the build falls back to the per-deployment Vercel URL. |

Preview deployments are served `Disallow: /` in `robots.txt`; only
`VERCEL_ENV=production` is allowed to be indexed.

Web Analytics and Speed Insights are wired in `app/layout.js` and start
reporting once they are enabled for the project in the Vercel dashboard.

## Before this goes public

- The customer names and both testimonials on the homepage are placeholders.
  Replace them with real, approved quotes or delete those blocks.
- Pricing figures, step allowances and SLA numbers are placeholders.
- The signup form posts to the existing Formspree endpoint in
  `components/SignupForm.js`. Point it wherever signups should actually land.
- The addresses referenced across the site (`hello@`, `support@`, `sales@`,
  `security@`, `careers@`, `startups@`, `legal@`) need to exist.
- `app/terms/page.js` has not been reviewed by a lawyer. `app/privacy/page.js`
  is the previously published policy, carried over unchanged.
