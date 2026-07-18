import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GlossaryTermPage } from '@/components/marketing/GlossaryTermPage'
import { buildMetadata } from '@/lib/seo/metadata'
import { GLOSSARY_TERMS, GLOSSARY_BY_SLUG } from '@/lib/content/glossary'

export function generateStaticParams() {
  return GLOSSARY_TERMS.map((t) => ({ term: t.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { term: string } }): Metadata {
  const config = GLOSSARY_BY_SLUG[params.term]
  if (!config) return {}
  return buildMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: config.path,
    keywords: config.keywords,
  })
}

export default function GlossaryPage({ params }: { params: { term: string } }) {
  const config = GLOSSARY_BY_SLUG[params.term]
  if (!config) notFound()
  return <GlossaryTermPage config={config} />
}
