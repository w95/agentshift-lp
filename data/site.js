/**
 * Canonical origin for metadata, sitemap and robots.
 *
 * Vercel exposes the deployment host as NEXT_PUBLIC_VERCEL_URL (no protocol).
 * Set NEXT_PUBLIC_SITE_URL in the project's environment to pin the production
 * domain; preview deploys fall back to their own URL so canonicals and OG tags
 * never point at production from a preview.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000')

export const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/platform', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/manifesto', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/support', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/startups', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
]
