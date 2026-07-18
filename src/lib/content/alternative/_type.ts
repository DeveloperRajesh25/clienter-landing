import type { Faq, IconItem, PlainItem, RelatedLink, CompareLedger } from '@/lib/content/types'

/**
 * One `/alternatives/<slug>` page — targets the "X alternative" query pattern.
 * Framed around why someone is looking to switch and how Clienter fits, with an
 * optional list of other honest options (used by the listicle-style pages like
 * "best free CRM alternatives"). Be fair about the tool being replaced; never
 * fabricate its pricing or features.
 *
 * Rendered by <AlternativeLanding>. Lives at /alternatives/<slug>.
 */
export type AlternativePageConfig = {
  slug: string
  path: string
  /** The tool/category being replaced, e.g. "HoneyBook" or "spreadsheets". */
  competitor: string
  /** Short line for the /compare hub card. */
  tagline: string

  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string

  breadcrumbLabel: string
  eyebrow: string
  h1: string
  h1Highlight: string
  subheading: string

  intro: { heading: string; body: string[] }

  /** Why people go looking for an alternative (pain points with the old tool). */
  whySwitch: { heading: string; sub: string; items: PlainItem[] }

  /** How Clienter fits as the alternative (feature cards). */
  clienterFit: { heading: string; sub: string; items: IconItem[] }

  /** Optional — other honest options, for listicle-intent pages. */
  otherOptions?: { heading: string; sub: string; items: { name: string; desc: string }[] }

  compare: CompareLedger
  pricing: { heading: string; body: string[] }

  faqHeading: string
  faqs: Faq[]

  related: RelatedLink[]
  ctaTitle: string
  ctaSubtitle: string
  asOf: string
}
