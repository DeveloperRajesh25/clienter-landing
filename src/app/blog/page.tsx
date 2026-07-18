import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Newspaper } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { BlogList } from '@/components/marketing/BlogList'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { BLOG_POSTS, BLOG_CATEGORIES, readingMinutes } from '@/lib/content/blog'

export const metadata: Metadata = buildMetadata({
  title: 'The Clienter Blog — Freelance & Agency Guides',
  description:
    'Practical guides for freelancers and agencies in India — managing clients, pricing, invoicing, getting clients, contracts, and running an agency. From Clienter.',
  path: '/blog',
  keywords: ['freelance blog', 'freelance business guides', 'agency operations'],
})

export default function BlogIndexPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0]
  const summaries = BLOG_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    categorySlug: p.categorySlug,
    tags: p.tags,
    minutes: readingMinutes(p),
  }))

  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(
            BLOG_POSTS.map((p) => ({ name: p.title, path: `/blog/${p.slug}` })),
            'Clienter blog',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <Newspaper className="h-4 w-4" /> Blog
          </>
        }
        title="Guides for freelancers &"
        highlight="agencies"
        subtitle="Practical, no-fluff advice on running a freelance business in India — clients, pricing, invoicing, contracts, and scaling into an agency."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      {/* Featured */}
      {featured && (
        <section className="pt-4">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block overflow-hidden rounded-3xl border border-stone-200/70 bg-gradient-to-br from-orange-50/70 to-amber-50/40 p-8 shadow-soft-lg transition-all hover:-translate-y-0.5 sm:p-12"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-500">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-3 max-w-2xl font-display text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-600">{featured.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-orange-600">
                  Read the guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* All posts + search/filter */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BlogList posts={summaries} categories={BLOG_CATEGORIES.map((c) => ({ name: c.name, slug: c.slug }))} />
        </div>
      </section>

      <CtaSection
        title="Put the advice into action"
        subtitle="Clienter gives you the workspace to run everything you just read about. Start free."
      />
    </PageShell>
  )
}
