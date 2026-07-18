import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, FolderOpen } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { BLOG_CATEGORIES, CATEGORY_BY_SLUG, postsInCategory, readingMinutes } from '@/lib/content/blog'

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = CATEGORY_BY_SLUG[params.category]
  if (!category) return {}
  return buildMetadata({
    title: `${category.name} — Clienter Blog`,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  })
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = CATEGORY_BY_SLUG[params.category]
  if (!category) notFound()
  const posts = postsInCategory(category.slug)

  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })), category.name),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: category.name, path: `/blog/category/${category.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <FolderOpen className="h-4 w-4" /> Category
          </>
        }
        title={category.name}
        subtitle={category.description}
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: category.name, href: `/blog/category/${category.slug}` },
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
                  <span className="flex items-start justify-between gap-2">
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
