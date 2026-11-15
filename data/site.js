/** Canonical origin, used by metadata, sitemap.xml and robots.txt. */
export const SITE_URL = 'https://agentshift.ai'

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
