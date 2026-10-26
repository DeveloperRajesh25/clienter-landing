import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PageShell } from '@/components/marketing/PageShell'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { SITE_URL } from '@/lib/site'
import { getHelpArticle, buildSearchIndex } from '@/lib/docs/content'
import { getAllHelpSlugs, getHelpCategoryForSlug } from '@/lib/docs/sections'
import { Breadcrumbs } from '@/components/docs/Breadcrumbs'
import { Callout } from '@/components/docs/Callout'
import { StepList } from '@/components/docs/StepList'
import { RelatedArticles } from '@/components/docs/RelatedArticles'
import { ArticleFeedback } from '@/components/docs/ArticleFeedback'
import { DocsSearch } from '@/components/docs/DocsSearch'

export function generateStaticParams() {
  return getAllHelpSlugs().map((slug) => ({ slug: slug.split('/') }))
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const slug = params.slug.join('/')
  const article = getHelpArticle(slug)
  if (!article) return {}
  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDescription,
    alternates: { canonical: `/help/${slug}` },
    openGraph: {
      title: article.metaTitle ?? article.title,
      description: article.metaDescription,
      url: `${SITE_URL}/help/${slug}`,
      type: 'article',
    },
  }
}

export default function HelpArticlePage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const article = getHelpArticle(slug)
  if (!article) notFound()

  const searchItems = buildSearchIndex()
  const category = getHelpCategoryForSlug(slug)
  const crumbsData = article.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))

  const faqData = [{ q: article.title, a: article.answer }]

  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema(crumbsData)} />
      <JsonLd data={faqSchema(faqData)} />

      <div className="pt-28 sm:pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-md">
            <DocsSearch items={searchItems} />
          </div>

          <Breadcrumbs items={article.breadcrumbs} />

          <article className="mt-6">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {article.title}
            </h1>

            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
              <p className="text-sm font-medium text-green-800 leading-relaxed">
                {article.answer}
              </p>
            </div>

            {article.steps && article.steps.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-xl font-bold text-gray-900">Step-by-step</h2>
                <StepList steps={article.steps} />
              </div>
            )}

            {article.sections && article.sections.map((section) => {
              const Tag = section.level === 2 ? 'h2' : 'h3'
              return (
                <section key={section.id} id={section.id} className="mt-8">
                  <Tag
                    className={
                      section.level === 2
                        ? 'font-display text-xl font-bold text-gray-900'
                        : 'font-display text-lg font-bold text-gray-900'
                    }
                  >
                    {section.heading}
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

            {article.relatedDocs && article.relatedDocs.length > 0 && (
              <RelatedArticles title="Related Documentation" links={article.relatedDocs} />
            )}

            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <RelatedArticles title="Related Articles" links={article.relatedLinks} />
            )}

            {/* Related articles from same category */}
            {category && category.articles.length > 1 && (
              <RelatedArticles
                title={`More in ${category.title}`}
                links={category.articles
                  .filter((s) => s !== slug)
                  .slice(0, 5)
                  .map((s) => ({
                    title: s.split('/').pop()!.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
                    href: `/help/${s}`,
                  }))}
              />
            )}

            <ArticleFeedback />

            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-sm text-gray-600">
                Still need help? Contact us at{' '}
                <a href="mailto:support@clienter.co.in" className="font-medium text-orange-600 underline underline-offset-2">
                  support@clienter.co.in
                </a>{' '}
                or use the <strong>Help</strong> button in the app.
              </p>
            </div>
          </article>
        </div>
      </div>
    </PageShell>
  )
}
