import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AlternativeLanding } from '@/components/marketing/AlternativeLanding'
import { buildMetadata } from '@/lib/seo/metadata'
import { ALTERNATIVE_PAGES, ALTERNATIVE_BY_SLUG } from '@/lib/content/alternative-pages'

export function generateStaticParams() {
  return ALTERNATIVE_PAGES.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = ALTERNATIVE_BY_SLUG[params.slug]
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

export default function AlternativePage({ params }: { params: { slug: string } }) {
  const config = ALTERNATIVE_BY_SLUG[params.slug]
  if (!config) notFound()
  return <AlternativeLanding config={config} />
}
