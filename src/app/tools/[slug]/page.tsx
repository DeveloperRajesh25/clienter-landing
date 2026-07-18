import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ToolPage } from '@/components/marketing/ToolPage'
import { buildMetadata } from '@/lib/seo/metadata'
import { TOOL_PAGES, TOOLS_BY_SLUG } from '@/lib/content/tools'

/** Generate a page for every non-external tool (calculators + doc generators). */
export function generateStaticParams() {
  return TOOL_PAGES.map((t) => ({ slug: t.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const config = TOOLS_BY_SLUG[params.slug]
  if (!config) return {}
  return buildMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: config.path,
    keywords: config.keywords,
  })
}

export default function Tool({ params }: { params: { slug: string } }) {
  const config = TOOLS_BY_SLUG[params.slug]
  if (!config || config.kind === 'external') notFound()
  return <ToolPage config={config} />
}
