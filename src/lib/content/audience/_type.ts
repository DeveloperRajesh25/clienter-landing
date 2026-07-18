import type { Faq, IconItem, PlainItem, RelatedLink, CompareLedger } from '@/lib/content/types'

/**
 * One `/for/<audience>` page. Each is written specifically for its audience —
 * their real daily workflow, their pain points, the Clienter features that map
 * to those pains, a workflow walkthrough, a pricing note, and an
 * audience-specific FAQ. These are NOT templated copy: every config carries
 * genuinely different words so each page earns its own ranking.
 *
 * Rendered by <AudienceLanding>. Lives at /for/<slug>.
 */
export type AudiencePageConfig = {
  slug: string
  /** Full route, e.g. "/for/freelancers". */
  path: string
  /** Plural audience label, e.g. "Freelancers", "Web design agencies". */
  audience: string

  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string

  breadcrumbLabel: string
  eyebrow: string
  /** H1 lead — the highlight is appended in the brand gradient. */
  h1: string
  h1Highlight: string
  subheading: string

  /** Opening "what this is / why it matters for you" — 2–3 paragraphs. */
  intro: { heading: string; body: string[] }

  /** The audience's real pain points (4–6). */
  pains: { heading: string; sub: string; items: PlainItem[] }

  /** How a day/project actually flows through Clienter for this audience. */
  workflow: { heading: string; sub: string; steps: PlainItem[] }

  /** Which Clienter features solve this audience's problems (icon cards). */
  features: { heading: string; sub: string; items: IconItem[] }

  /** "Old way vs Clienter" ledger, phrased for this audience. */
  compare: CompareLedger

  /** Audience-specific pricing paragraph(s). */
  pricing: { heading: string; body: string[] }

  faqHeading: string
  faqs: Faq[]

  related: RelatedLink[]
  ctaTitle: string
  ctaSubtitle: string
}
