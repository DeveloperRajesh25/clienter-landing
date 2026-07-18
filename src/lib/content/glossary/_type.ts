import type { RelatedLink } from '@/lib/content/types'

/**
 * One `/glossary/<slug>` term page (500–800 words). Builds topical authority and
 * internal links: each term defines a concept freelancers/agencies meet, then
 * links to the relevant Clienter feature, tool, or blog post and to related
 * terms. The one-sentence `definition` doubles as the FAQ/answer used for a
 * featured-snippet-friendly "What is X?" schema.
 *
 * Rendered by <GlossaryTermPage>. Lives at /glossary/<slug>.
 */
export type GlossaryTermConfig = {
  slug: string
  /** The term itself, e.g. "CRM", "Scope of work". */
  term: string
  path: string
  /** Grouping for the hub, e.g. "CRM & Sales". */
  category: string

  metaTitle: string
  metaDescription: string
  keywords?: string[]

  /** One-sentence plain-English definition (also used as the schema answer). */
  definition: string
  /** 3–6 paragraphs expanding the definition with an Indian-freelance lens. */
  body: string[]
  /** Optional "how it works in Clienter" note. */
  clienterNote?: string

  related: RelatedLink[]
  relatedTerms: { term: string; slug: string }[]
}
