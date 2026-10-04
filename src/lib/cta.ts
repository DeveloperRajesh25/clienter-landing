import { APP_URL } from '@/lib/site'

/**
 * Every link from the marketing site into the app's signup.
 *
 * WHY A HELPER: there were 17 bare `${APP_URL}/signup` links across 14 files, so
 * every signup arrived with no attribution and there was no way to tell which
 * page type earns signups — a comparison page, a free tool, the pricing page or
 * the homepage hero. They all now carry UTMs, built in one place so the
 * parameter names cannot drift.
 *
 * The scheme (fixed — analytics queries depend on it):
 *   utm_source   always `site`
 *   utm_medium   the PAGE TYPE the click came from, from CtaMedium below
 *   utm_campaign the page's own slug, so a single page can be read on its own
 *
 * UTMs survive into the app because they are query parameters on the signup URL
 * itself; the app's signup page must not strip them on its first redirect. See
 * docs/analytics-plan.md.
 */

/** Page type a CTA sits on. Keep this list short — it is a reporting dimension. */
export type CtaMedium =
  | 'home'
  | 'pricing'
  | 'feature'
  | 'use-case'
  | 'comparison'
  | 'alternatives'
  | 'tool'
  | 'template'
  | 'glossary'
  | 'blog'
  | 'nav'
  | 'footer'
  | 'demo'
  | 'download'
  | 'seo-landing'

/**
 * Turn a path or arbitrary label into a campaign slug: lowercase, hyphenated,
 * no leading slash. `/compare/clienter-vs-bonsai` → `compare-clienter-vs-bonsai`.
 */
export function campaignSlug(input: string): string {
  const s = input
    .toLowerCase()
    .replace(/^\/+/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return s || 'home'
}

/**
 * The signup URL for a CTA. `campaign` takes a path or a slug; pass the page's
 * own path wherever the component has it.
 */
export function signupUrl(medium: CtaMedium, campaign: string): string {
  const params = new URLSearchParams({
    utm_source: 'site',
    utm_medium: medium,
    utm_campaign: campaignSlug(campaign),
  })
  return `${APP_URL}/signup?${params.toString()}`
}

/**
 * The site's primary call to action, in one place so the wording is the same
 * everywhere. "Start free" won over "Get started free" and "Try Clienter free"
 * because it names the only thing a visitor is committing to; the reassurance
 * underneath carries the rest.
 */
export const PRIMARY_CTA = 'Start free'

/** The line that goes under a primary CTA. True on every plan, no card involved. */
export const CTA_REASSURANCE = 'Free forever plan · no credit card · set up in minutes'
