import type { Metadata } from 'next'

/**
 * Single source of truth for the public marketing site.
 *
 * Everything SEO-facing — the canonical domain, brand copy, founder identity,
 * social links, nav/footer structure, and the per-page metadata helper — lives
 * here so titles, descriptions, canonical URLs, and structured data stay
 * consistent across every page and never drift.
 *
 * TODO(owner): the social URLs below are best-guess placeholders. Replace them
 * with your real profile URLs — they appear in the footer, the About page, and
 * the Organization `sameAs` structured data that Google uses to connect your
 * brand to its social presence.
 */

/** Canonical production origin — drives metadataBase, canonical tags, sitemap, OG. */
export const SITE_URL = 'https://clienter.co.in'

/** Where the actual app lives (login / signup / dashboard).
 *  Single-domain setup: the app is served from the same origin as the
 *  marketing site, so this points at the canonical domain. */
export const APP_URL = SITE_URL

export const SITE_NAME = 'Clienter'
export const SITE_TAGLINE = 'Run your freelance business without the chaos'
export const SITE_DESCRIPTION =
  'Clienter is the all-in-one client management software for Indian freelancers and agencies — manage clients, projects, invoices, payments, meetings, and your team in one beautiful place. Start free.'

/** Founder — shown on About / founder note and used in author structured data. */
export const FOUNDER = {
  name: 'Talagana Rajesh',
  role: 'Founder & Builder, Clienter',
  // The handle people know him by across his content.
  contentHandle: '@talaganarajesh',
  // Founder photo, served from /public.
  photo: '/rajesh-photo.jpg',
}

export const CONTACT = {
  general: 'hello@clienter.co.in',
  support: 'support@clienter.co.in',
  privacy: 'privacy@clienter.co.in',
  legal: 'legal@clienter.co.in',
}

/** Social / content profiles. Used in the footer + Organization `sameAs`. */
export const SOCIALS = {
  instagram: 'https://www.instagram.com/talagana.rajesh/',
  youtube: 'https://www.youtube.com/@talaganarajesh',
  linkedin: 'https://www.linkedin.com/in/talaganarajesh/',
  twitter: 'https://x.com/talaganaRajesh',
}

/** Flat list of social URLs for structured-data `sameAs`. */
export const SOCIAL_URLS = Object.values(SOCIALS)

/**
 * Marketing routes that must render WITHOUT the authenticated app chrome
 * (sidebar / bottom nav). AppLayout reads this to keep these pages full-screen.
 * Keep in sync when adding a new marketing page.
 */
export const MARKETING_PATHS = [
  '/about',
  '/contact',
  '/features',
  '/how-it-works',
  '/pricing',
  '/faq',
  '/demo',
  '/privacy',
  '/terms',
  '/refund',
  '/security',
] as const

/** Primary nav links (used in header + footer). In-page anchors resolve on home. */
export const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Demo' },
  { href: '/faq', label: 'FAQ' },
]

/** Footer link columns. */
export const FOOTER_NAV = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/demo', label: 'Demo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
      { href: '/security', label: 'Security' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/refund', label: 'Refund & Cancellation' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { href: '/#waitlist', label: 'Join the waitlist' },
      { href: `${APP_URL}/login`, label: 'Sign in', external: true },
      { href: '/pricing', label: 'See pricing' },
    ],
  },
] as const

/**
 * Build a complete, SEO-correct Metadata object for a marketing page.
 *
 * - Sets a templated title, canonical URL, and full OpenGraph + Twitter cards.
 * - The root layout supplies metadataBase + the default OG image, so individual
 *   pages only need their path, title, and description.
 */
export function pageMetadata(opts: {
  title: string
  description: string
  /** Path beginning with "/" — used for the canonical + OG URL. */
  path: string
  /** Override the social-card image (defaults to the generated OG image). */
  image?: string
  /** Mark a page as noindex (e.g. thin/utility pages). */
  noindex?: boolean
  keywords?: string[]
}): Metadata {
  const url = opts.path === '/' ? SITE_URL : `${SITE_URL}${opts.path}`
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    robots: opts.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      ...(opts.image ? { images: [{ url: opts.image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      ...(opts.image ? { images: [opts.image] } : {}),
    },
  }
}
