import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CompareLanding } from '@/components/marketing/CompareLanding'
import { buildMetadata } from '@/lib/seo/metadata'
import { COMPARE_PAGES, COMPARE_BY_SLUG } from '@/lib/content/compare-pages'

export function generateStaticParams() {
  return COMPARE_PAGES.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = COMPARE_BY_SLUG[params.slug]
  if (!config) return {}
  return buildMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: config.path,
    keywords: config.keywords,
    ogTitle: config.ogTitle,
    ogDescription: config.ogDescription,
  })
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const config = COMPARE_BY_SLUG[params.slug]
  if (!config) notFound()
  return <CompareLanding config={config} />
}
