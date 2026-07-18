import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AudienceLanding } from '@/components/marketing/AudienceLanding'
import { buildMetadata } from '@/lib/seo/metadata'
import { AUDIENCE_PAGES, AUDIENCE_BY_SLUG } from '@/lib/content/audience-pages'

/** Statically generate every /for/<audience> page at build time (SSG). */
export function generateStaticParams() {
  return AUDIENCE_PAGES.map((p) => ({ audience: p.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { audience: string } }): Metadata {
  const config = AUDIENCE_BY_SLUG[params.audience]
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

export default function AudiencePage({ params }: { params: { audience: string } }) {
  const config = AUDIENCE_BY_SLUG[params.audience]
  if (!config) notFound()
  return <AudienceLanding config={config} />
}
