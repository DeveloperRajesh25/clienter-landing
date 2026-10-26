import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/marketing/PageShell'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/site'
import { getDocPage, getDocPagesMap, buildSearchIndex } from '@/lib/docs/content'
import { DOC_SECTIONS, getAllDocSlugs, getAdjacentDocs } from '@/lib/docs/sections'
import { DocsSidebar } from '@/components/docs/DocsSidebar'
import { TableOfContents } from '@/components/docs/TableOfContents'
import { Breadcrumbs } from '@/components/docs/Breadcrumbs'
import { PlanBadge } from '@/components/docs/PlanBadge'
import { Callout } from '@/components/docs/Callout'
import { StepList } from '@/components/docs/StepList'
import { PrevNextNav } from '@/components/docs/PrevNextNav'
import { RelatedArticles } from '@/components/docs/RelatedArticles'
import { FAQAccordion } from '@/components/docs/FAQAccordion'
import { DocsSearch } from '@/components/docs/DocsSearch'

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug: slug.split('/') }))
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const slug = params.slug.join('/')
  const page = getDocPage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle ?? page.title,
    description: page.metaDescription,
    alternates: { canonical: `/docs/${slug}` },
    openGraph: {
      title: page.metaTitle ?? page.title,
      description: page.metaDescription,
      url: `${SITE_URL}/docs/${slug}`,
      type: 'article',
    },
  }
}

export default function DocsArticlePage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const page = getDocPage(slug)
  if (!page) notFound()

  const pagesMap = getDocPagesMap()
  const searchItems = buildSearchIndex()
  const { prev, next } = getAdjacentDocs(slug)

  const tocItems = page.sections
    .filter((s) => s.level === 2)
    .map((s) => ({ id: s.id, text: s.heading, level: s.level }))

  const crumbsData = page.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))

  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema(crumbsData)} />
      {page.faqs && page.faqs.length > 0 && <JsonLd data={faqSchema(page.faqs)} />}

      <div className="pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="mb-8 max-w-md">
            <DocsSearch items={searchItems} />
          </div>

          <div className="flex gap-10">
            {/* Sidebar */}
            <DocsSidebar sections={DOC_SECTIONS} pages={pagesMap} basePath="/docs" />

            {/* Main content */}
            <article className="min-w-0 flex-1 pb-20">
              <Breadcrumbs items={page.breadcrumbs} />

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {page.title}
                {page.planBadge && (
                  <span className="ml-3 align-middle">
                    <PlanBadge plan={page.planBadge} />
                  </span>
                )}
              </h1>

              <div className="mt-8 space-y-8">
                {page.sections.map((section) => {
                  const Tag = section.level === 2 ? 'h2' : 'h3'
                  return (
                    <section key={section.id} id={section.id}>
                      <Tag
                        className={
                          section.level === 2
                            ? 'font-display text-2xl font-bold tracking-tight text-gray-900'
                            : 'font-display text-lg font-bold text-gray-900'
                        }
                      >
                        {section.heading}
                        {section.planBadge && (
                          <span className="ml-2 align-middle">
                            <PlanBadge plan={section.planBadge} />
                          </span>
                        )}
                      </Tag>
                      <div className="mt-3 text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                      {section.callout && (
                        <Callout type={section.callout.type}>{section.callout.text}</Callout>
                      )}
                      {section.steps && <StepList steps={section.steps} />}
                    </section>
                  )
                })}
              </div>

              {page.faqs && page.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={page.faqs} />
                </div>
              )}

              {page.relatedLinks && page.relatedLinks.length > 0 && (
                <RelatedArticles title="Related Documentation" links={page.relatedLinks} />
              )}

              <PrevNextNav prev={prev} next={next} />
            </article>

            {/* Table of contents */}
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </PageShell>
  )
}
