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

/** Where the actual app lives (login / signup / dashboard). */
export const APP_URL = 'https://app.clienter.co.in'

export const SITE_NAME = 'Clienter'
export const SITE_TAGLINE = 'Run your freelance business without the chaos'
export const SITE_DESCRIPTION =
  'Clienter is the all-in-one client management software for freelancers and agencies — manage clients, projects, invoices, payments, meetings, and your team in one beautiful place. Start free.'

/** Founder — shown on About / founder note and used in author structured data. */
export const FOUNDER = {
  name: 'Talagana Rajesh',
  role: 'Founder & Builder, Clienter',
  // The handle people know him by across his content.
  contentHandle: '@talaganarajesh',
  // Founder photo, served from /public.
  photo: '/rajesh-photo.jpg',
}

// TODO(owner): clienter.co.in mailboxes aren't receiving mail yet. Every public
// contact address routes to the founder's personal inbox until that's set up.
export const CONTACT = {
  general: 'hello@talaganarajesh.in',
  support: 'hello@talaganarajesh.in',
  privacy: 'hello@talaganarajesh.in',
  legal: 'hello@talaganarajesh.in',
}

/**
 * Legal/business identity, referenced across the policy pages so the entity we
 * name, the grievance contact, the governing law, and the effective date stay
 * consistent everywhere. Clienter is operated by an individual (sole proprietor)
 * — there is no separate registered company yet.
 *
 * TODO(owner): two things to confirm before / shortly after going live —
 *  1. No postal address is published (email-only contact). Razorpay usually
 *     requires a business address shown on the site for LIVE payments — add one
 *     here (e.g. `address: 'City, State, India'`) and surface it on /contact and
 *     in the policies when you have it.
 *  2. If you register a company/LLP later, update `entityType`, `operator`, and
 *     the Grievance Officer details below.
 */
export const LEGAL = {
  /** The natural person who operates Clienter. */
  operator: FOUNDER.name,
  /** How the business is constituted, for the "who we are" clauses. */
  entityType: 'an individual operating as a sole proprietor',
  /** Public trading name. */
  tradeName: SITE_NAME,
  /**
   * Grievance Officer / privacy contact. India's DPDP Act, 2023 and the IT Rules
   * require a named, reachable contact for data and content grievances.
   */
  grievanceOfficer: {
    name: FOUNDER.name,
    title: 'Grievance Officer',
    email: CONTACT.legal,
  },
  /** Country whose law governs the Terms (no city published — email-only contact). */
  governingCountry: 'India',
  /** Date the current legal documents take effect / were last updated. */
  effectiveDate: '26 June 2026',
} as const

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
  '/cookies',
  '/security',
] as const

/** Primary nav links (used in header + footer). In-page anchors resolve on home. */
export const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/demo', label: 'Demo' },
  { href: '/contact', label: 'Contact' },
]

/** Footer link columns. */
export const FOOTER_NAV = [
  {
    title: 'Tools',
    links: [
      { href: '/time-converter', label: 'Time Converter' },
      { href: '/invoice', label: 'Invoice Generator' },
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
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/refund', label: 'Refund & Cancellation' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { href: `${APP_URL}/signup`, label: 'Create account', external: true },
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
