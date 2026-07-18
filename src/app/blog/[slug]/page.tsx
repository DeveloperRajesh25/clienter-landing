import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostLayout } from '@/components/marketing/BlogPostLayout'
import { buildArticleMetadata } from '@/lib/seo/metadata'
import { BLOG_POSTS, BLOG_BY_SLUG, readingMinutes, relatedPosts } from '@/lib/content/blog'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_BY_SLUG[params.slug]
  if (!post) return {}
  return buildArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.primaryKeyword, ...post.tags],
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    authors: [post.author],
  })
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_BY_SLUG[params.slug]
  if (!post) notFound()
  return <BlogPostLayout post={post} minutes={readingMinutes(post)} related={relatedPosts(post)} />
}
