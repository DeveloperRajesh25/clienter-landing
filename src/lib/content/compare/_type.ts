import type { Faq, RelatedLink, CompareRow } from '@/lib/content/types'

/**
 * One `/compare/clienter-vs-<competitor>` page. High commercial intent — people
 * searching these are close to choosing. Every page must be FAIR and ACCURATE
 * about the competitor: honest pros and cons for both tools, and no fabricated
 * competitor prices or features. Where a specific competitor price would be a
 * guess, describe it qualitatively (e.g. "paid tiers get expensive quickly")
 * and let Clienter's concrete ₹ pricing do the talking. The template renders an
 * "as of <asOf>" disclaimer telling readers to verify current competitor
 * pricing on the competitor's own site.
 *
 * Rendered by <CompareLanding>. Lives at /compare/<slug>.
 */
export type ComparePageConfig = {
  slug: string
  /** Full route, e.g. "/compare/clienter-vs-hubspot". */
  path: string
  /** Display name of the competitor, e.g. "HubSpot". */
  competitor: string
  /** One-line category of the competitor, e.g. "enterprise CRM & marketing platform". */
  competitorCategory: string

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

  /** Fair overview of both tools — 2–3 paragraphs. */
  intro: { heading: string; body: string[] }

  /** Feature comparison table. 7–12 rows. */
  tableHeading: string
  rows: CompareRow[]

  /** Honest pros/cons for each side. */
  clienterPros: string[]
  clienterCons: string[]
  competitorPros: string[]
  competitorCons: string[]

  /** Pricing comparison in ₹ (qualitative for the competitor). */
  pricing: { heading: string; body: string[] }

  /** Who should choose which. */
  chooseClienter: { heading: string; points: string[] }
  chooseOther: { heading: string; points: string[] }

  /** How to migrate from the competitor to Clienter. */
  migration: { heading: string; body: string[] }

  faqHeading: string
  faqs: Faq[]

  related: RelatedLink[]
  ctaTitle: string
  ctaSubtitle: string

  /** Month + year the competitor facts were last checked, e.g. "July 2026". */
  asOf: string
}
