import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, Tag } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { BLOG_TAGS, TAG_BY_SLUG, postsWithTag, readingMinutes } from '@/lib/content/blog'

export function generateStaticParams() {
  return BLOG_TAGS.map((t) => ({ tag: t.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { tag: string } }): Metadata {
  const tag = TAG_BY_SLUG[params.tag]
  if (!tag) return {}
  return buildMetadata({
    title: `${tag.name} — Clienter Blog`,
    description: `Articles tagged “${tag.name}” — practical guides for freelancers and agencies from Clienter.`,
    path: `/blog/tag/${tag.slug}`,
  })
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = TAG_BY_SLUG[params.tag]
  if (!tag) notFound()
  const posts = postsWithTag(tag.slug)

  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })), tag.name),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: tag.name, path: `/blog/tag/${tag.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <Tag className="h-4 w-4" /> Tag
          </>
        }
        title={tag.name}
        subtitle={`Everything we've written about ${tag.name.toLowerCase()} for freelancers and agencies.`}
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: tag.name, href: `/blog/tag/${tag.slug}` },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-500">{p.category}</span>
                  <span className="mt-2 flex items-start justify-between gap-2">
                    <span className="font-display text-base font-bold leading-snug text-gray-900">{p.title}</span>
                    <ArrowUpRight className="h-4 w-4 flex-none text-gray-300 transition-colors group-hover:text-orange-500" />
                  </span>
                  <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">{p.description}</span>
                  <span className="mt-3 text-xs text-stone-400">{readingMinutes(p)} min read</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Run your freelance business without the chaos" subtitle="Start free with Clienter today." />
    </PageShell>
  )
}
