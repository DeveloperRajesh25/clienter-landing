import type { Faq, RelatedLink } from '@/lib/content/types'

/**
 * A structured blog content model instead of raw MDX (see SEO_OVERHAUL_REPORT.md
 * for the decision): it's build-safe, needs no new dependencies, and guarantees
 * consistent formatting, TOC generation, and Article schema across every post,
 * matching the codebase's data-config philosophy.
 *
 * Each post's body is an ordered list of blocks the <BlogContent> renderer turns
 * into semantic HTML. h2 blocks become the table-of-contents entries.
 */
export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; text: string }
  | { type: 'quote'; text: string }

export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO date (YYYY-MM-DD). */
  date: string
  updated?: string
  author: string
  category: string
  categorySlug: string
  tags: string[]
  primaryKeyword: string
  /** Featured on the blog index (first featured post is the hero). */
  featured?: boolean

  /** Opening paragraph — primary keyword must appear in the first 100 words. */
  intro: string
  body: BlogBlock[]
  faqs: Faq[]
  related: RelatedLink[]
}

/** Slugify a heading for a stable TOC anchor. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export type BlogCategory = { name: string; slug: string; description: string }
export type BlogTag = { name: string; slug: string }
