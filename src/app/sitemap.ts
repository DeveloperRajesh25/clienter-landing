import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * XML sitemap for the public marketing site. Only indexable, public pages are
 * listed — never app/auth/admin routes. Priorities and change frequencies hint
 * crawlers toward the highest-value pages (home, features, pricing).
 *
 * `lastModified` is a fixed launch date rather than `new Date()` so the build is
 * deterministic; bump it when a page's content materially changes.
 */
const LAST_MODIFIED = '2026-06-26'

type Entry = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

const ROUTES: Entry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  // Core-feature deep-dive pages (linked from the header "Solutions" menu).
  { path: '/features/client-management', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/features/crm-lead-pipeline', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/features/project-management', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/features/invoicing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/features/client-portal', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/features/verified-reviews', priority: 0.8, changeFrequency: 'monthly' },
  // Keyword-targeted SEO landing pages — high priority, each ranks on its own.
  { path: '/client-management-software', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/crm-for-freelancers', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/project-management-crm', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/business-management-software', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/how-it-works', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/invoice', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/time-converter', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/security', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/refund', priority: 0.4, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }))
}
