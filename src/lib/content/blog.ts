import type { BlogPost, BlogCategory, BlogTag } from './blog/_type'
import { POST as MANAGE_CLIENTS } from './blog/posts/how-to-manage-clients-as-a-freelancer-india'
import { POST as BEST_SOFTWARE } from './blog/posts/best-client-management-software-for-freelancers'
import { POST as GET_CLIENTS } from './blog/posts/how-to-get-freelance-clients-in-india'
import { POST as INVOICE_FORMAT } from './blog/posts/freelance-invoice-format-india'
import { POST as RETAINERS } from './blog/posts/monthly-retainers-vs-project-pricing'
// Drafts — written, unlinked, noindex, out of the sitemap. See `draft` in _type.ts.
import { POST as CLIENT_ONBOARDING } from './blog/posts/client-onboarding-process'
import { POST as SCOPE_CREEP } from './blog/posts/how-to-prevent-scope-creep'
import { POST as PROPOSAL_THAT_WINS } from './blog/posts/how-to-write-a-proposal-that-wins'
import { POST as LATE_PAYING_CLIENTS } from './blog/posts/how-to-handle-late-paying-clients'
import { POST as CLIENT_PORTAL_GUIDE } from './blog/posts/what-is-a-client-portal'
import { POST as AGENCY_PRICING_MODELS } from './blog/posts/agency-pricing-models'

export type { BlogPost }

/**
 * All blog posts, newest first. Each post lives in its own file under
 * ./blog/posts/ and is registered here. Adding an article = one file + one line.
 */
/**
 * Every post, drafts included. Only the `[slug]` route and `generateStaticParams`
 * should use this — everything that LISTS posts must use `BLOG_POSTS`, which
 * excludes drafts.
 */
export const ALL_BLOG_POSTS: BlogPost[] = [
  MANAGE_CLIENTS,
  BEST_SOFTWARE,
  GET_CLIENTS,
  INVOICE_FORMAT,
  RETAINERS,
  CLIENT_ONBOARDING,
  SCOPE_CREEP,
  PROPOSAL_THAT_WINS,
  LATE_PAYING_CLIENTS,
  CLIENT_PORTAL_GUIDE,
  AGENCY_PRICING_MODELS,
].sort((a, b) => (a.date < b.date ? 1 : -1))

/** Published posts — the list every index, archive, feed and related block uses. */
export const BLOG_POSTS: BlogPost[] = ALL_BLOG_POSTS.filter((p) => !p.draft)

/** Drafts are resolvable by slug so their page renders for review. */
export const BLOG_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  ALL_BLOG_POSTS.map((p) => [p.slug, p]),
)

/** Categories, with descriptions for the archive pages. */
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'Freelance business',
    slug: 'freelance-business',
    description:
      'Guides on running the business side of freelancing — clients, pricing, contracts, tax, and getting paid.',
  },
  {
    name: 'Software & tools',
    slug: 'software-tools',
    description:
      'Reviews and guides on the software freelancers and agencies use to run their work.',
  },
  {
    name: 'Agency operations',
    slug: 'agency-operations',
    description:
      'Playbooks for running and scaling a freelance studio or agency.',
  },
]

export const CATEGORY_BY_SLUG: Record<string, BlogCategory> = Object.fromEntries(
  BLOG_CATEGORIES.map((c) => [c.slug, c]),
)

/** All tags used across posts, derived so the list never drifts. */
export const BLOG_TAGS: BlogTag[] = Array.from(
  new Set(BLOG_POSTS.flatMap((p) => p.tags)),
)
  .sort()
  .map((name) => ({ name, slug: name.replace(/\s+/g, '-') }))

export const TAG_BY_SLUG: Record<string, BlogTag> = Object.fromEntries(
  BLOG_TAGS.map((t) => [t.slug, t]),
)

export function postsInCategory(slug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.categorySlug === slug)
}

export function postsWithTag(tagSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.tags.some((t) => t.replace(/\s+/g, '-') === tagSlug))
}

/** Estimated reading time from the post body. */
export function readingMinutes(post: BlogPost): number {
  const words =
    post.intro.split(/\s+/).length +
    post.body.reduce((n, b) => {
      if (b.type === 'p' || b.type === 'callout' || b.type === 'quote') return n + b.text.split(/\s+/).length
      if (b.type === 'h2' || b.type === 'h3') return n + b.text.split(/\s+/).length
      if (b.type === 'ul' || b.type === 'ol') return n + b.items.join(' ').split(/\s+/).length
      if (b.type === 'table') return n + b.headers.join(' ').split(/\s+/).length + b.rows.flat().join(' ').split(/\s+/).length
      return n
    }, 0)
  return Math.max(1, Math.round(words / 200))
}

/** Related posts by shared category/tags, excluding the current one. */
export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score:
        (p.categorySlug === post.categorySlug ? 2 : 0) +
        p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p)
}
