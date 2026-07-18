import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TemplatePage } from '@/components/marketing/TemplatePage'
import { buildMetadata } from '@/lib/seo/metadata'
import { TEMPLATES, TEMPLATE_BY_SLUG } from '@/lib/content/templates'

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = TEMPLATE_BY_SLUG[params.slug]
  if (!config) return {}
  return buildMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: config.path,
    keywords: config.keywords,
  })
}

export default function Template({ params }: { params: { slug: string } }) {
  const config = TEMPLATE_BY_SLUG[params.slug]
  if (!config) notFound()
  return <TemplatePage config={config} />
}
