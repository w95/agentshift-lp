import { ROUTES, SITE_URL } from '@/data/site'

// Static build timestamp; reading the clock per request would opt the route
// out of static generation.
const LAST_MODIFIED = '2026-11-16'

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
