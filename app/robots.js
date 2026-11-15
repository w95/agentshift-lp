import { SITE_URL } from '@/data/site'

export default function robots() {
  // Keep preview deployments out of search results; only the pinned production
  // domain is allowed to be indexed.
  const isProduction = process.env.VERCEL_ENV === 'production' || !process.env.VERCEL_ENV

  return {
    rules: isProduction
      ? [{ userAgent: '*', allow: '/' }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
    host: SITE_URL,
  }
}
