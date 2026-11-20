import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FeatureLanding } from '@/components/marketing/FeatureLanding'
import { buildMetadata } from '@/lib/seo/metadata'
import { FEATURE_PAGES, FEATURE_PAGE_BY_SLUG } from '@/lib/feature-pages'

export function generateStaticParams() {
  return FEATURE_PAGES.map((f) => ({ slug: f.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = FEATURE_PAGE_BY_SLUG[params.slug]
  if (!config) return {}
  return buildMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: config.path,
    keywords: config.keywords,
  })
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const config = FEATURE_PAGE_BY_SLUG[params.slug]
  if (!config) notFound()
  return <FeatureLanding config={config} />
}
