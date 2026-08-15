import type { MetadataRoute } from 'next'
import { SEO_LANDING_CONFIGS } from '@/lib/seo-pages'
import { FEATURE_PAGES } from '@/lib/feature-pages'

/**
 * Central route registry — the single source of truth for the XML sitemap.
 *
 * Every indexable, public marketing URL on the site is composed here from the
 * same config arrays the pages themselves render from, so a page and its
 * sitemap entry can never drift. `app/sitemap.ts` is a thin wrapper over
 * `getAllRoutes()`.
 *
 * As new content systems land (/for, /compare, /alternatives, /blog, /tools,
 * /templates, /glossary) their config arrays are imported and appended below —
 * one place to add a whole section to the sitemap.
 */

export type ChangeFrequency = MetadataRoute.Sitemap[number]['changeFrequency']

export type RouteEntry = {
  path: string
  priority: number
  changeFrequency: ChangeFrequency
  /** ISO date; defaults to DEFAULT_LAST_MODIFIED. */
  lastModified?: string
}

/** Deterministic build date (avoids `new Date()` so the sitemap is stable). */
export const DEFAULT_LAST_MODIFIED = '2026-07-18'

// ── Static, hand-tuned marketing routes ──────────────────────────────────────
const STATIC_ROUTES: RouteEntry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/features', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/how-it-works', priority: 0.7, changeFrequency: 'monthly' },
  // Android app download. changeFrequency 'monthly' because the page's version
  // and size change whenever a new APK ships.
  { path: '/download', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/security', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/refund', priority: 0.3, changeFrequency: 'yearly' },
]

// ── Keyword SEO landing pages (/client-management-software, …) ────────────────
const SEO_LANDING_ROUTES: RouteEntry[] = SEO_LANDING_CONFIGS.map((c) => ({
  path: c.path,
  priority: 0.9,
  changeFrequency: 'monthly',
}))

// ── Feature deep-dives (/features/client-management, …) ───────────────────────
const FEATURE_ROUTES: RouteEntry[] = FEATURE_PAGES.map((f) => ({
  path: f.path,
  priority: 0.8,
  changeFrequency: 'monthly',
}))

// ── Free tools that pre-date the tools hub ────────────────────────────────────
const LEGACY_TOOL_ROUTES: RouteEntry[] = [
  { path: '/invoice', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/time-converter', priority: 0.6, changeFrequency: 'monthly' },
]

// ── Content systems added by the SEO overhaul ─────────────────────────────────
// Each is imported directly (not via side-effect registration) so route
// composition is deterministic regardless of module evaluation order. A new
// section is one import + one spread in `getAllRoutes()`.
import { AUDIENCE_PAGES } from '@/lib/content/audience-pages'
import { COMPARE_PAGES } from '@/lib/content/compare-pages'
import { ALTERNATIVE_PAGES } from '@/lib/content/alternative-pages'
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_TAGS } from '@/lib/content/blog'
import { TOOLS } from '@/lib/content/tools'
import { TEMPLATES } from '@/lib/content/templates'
import { GLOSSARY_TERMS } from '@/lib/content/glossary'

const AUDIENCE_ROUTES: RouteEntry[] = [
  { path: '/for', priority: 0.7, changeFrequency: 'monthly' },
  ...AUDIENCE_PAGES.map((p) => ({
    path: p.path,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  })),
]

const COMPARE_ROUTES: RouteEntry[] = [
  { path: '/compare', priority: 0.7, changeFrequency: 'monthly' },
  ...COMPARE_PAGES.map((p) => ({
    path: p.path,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  })),
]

const ALTERNATIVE_ROUTES: RouteEntry[] = ALTERNATIVE_PAGES.map((p) => ({
  path: p.path,
  priority: 0.8,
  changeFrequency: 'monthly',
}))

const BLOG_ROUTES: RouteEntry[] = [
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: p.updated ?? p.date,
  })),
  ...BLOG_CATEGORIES.map((c) => ({
    path: `/blog/category/${c.slug}`,
    priority: 0.5,
    changeFrequency: 'weekly' as const,
  })),
  ...BLOG_TAGS.map((t) => ({
    path: `/blog/tag/${t.slug}`,
    priority: 0.4,
    changeFrequency: 'weekly' as const,
  })),
]

const TOOLS_ROUTES: RouteEntry[] = [
  { path: '/tools', priority: 0.8, changeFrequency: 'monthly' },
  ...TOOLS.map((t) => ({
    path: t.path,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  })),
]

const TEMPLATES_ROUTES: RouteEntry[] = [
  { path: '/templates', priority: 0.7, changeFrequency: 'monthly' },
  ...TEMPLATES.map((t) => ({
    path: t.path,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  })),
]

const GLOSSARY_ROUTES: RouteEntry[] = [
  { path: '/glossary', priority: 0.6, changeFrequency: 'monthly' },
  ...GLOSSARY_TERMS.map((t) => ({
    path: `/glossary/${t.slug}`,
    priority: 0.4,
    changeFrequency: 'monthly' as const,
  })),
]

/** Every public route on the site, de-duplicated by path. */
export function getAllRoutes(): RouteEntry[] {
  const all = [
    ...STATIC_ROUTES,
    ...SEO_LANDING_ROUTES,
    ...FEATURE_ROUTES,
    ...LEGACY_TOOL_ROUTES,
    ...AUDIENCE_ROUTES,
    ...COMPARE_ROUTES,
    ...ALTERNATIVE_ROUTES,
    ...BLOG_ROUTES,
    ...TOOLS_ROUTES,
    ...TEMPLATES_ROUTES,
    ...GLOSSARY_ROUTES,
  ]
  const seen = new Set<string>()
  return all.filter((r) => {
    if (seen.has(r.path)) return false
    seen.add(r.path)
    return true
  })
}
