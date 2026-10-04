import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostLayout } from '@/components/marketing/BlogPostLayout'
import { buildArticleMetadata } from '@/lib/seo/metadata'
import { ALL_BLOG_POSTS, BLOG_BY_SLUG, readingMinutes, relatedPosts } from '@/lib/content/blog'

// ALL_BLOG_POSTS, not BLOG_POSTS: a draft's page has to be buildable so it can be
// reviewed at its URL. It is noindex and linked from nowhere (see generateMetadata).
export function generateStaticParams() {
  return ALL_BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_BY_SLUG[params.slug]
  if (!post) return {}
  return buildArticleMetadata({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.primaryKeyword, ...post.tags],
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    authors: [post.author],
    // A draft is readable at its URL and invisible to search. It is also absent
    // from the sitemap (lib/seo/routes.ts) and from every index and feed.
    noindex: post.draft,
  })
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_BY_SLUG[params.slug]
  if (!post) notFound()
  return <BlogPostLayout post={post} minutes={readingMinutes(post)} related={relatedPosts(post)} />
}
