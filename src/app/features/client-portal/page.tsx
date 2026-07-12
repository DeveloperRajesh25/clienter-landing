import type { Metadata } from 'next'
import { FeatureLanding } from '@/components/marketing/FeatureLanding'
import { pageMetadata } from '@/lib/site'
import { FEATURE_PAGE_BY_SLUG } from '@/lib/feature-pages'

const config = FEATURE_PAGE_BY_SLUG['client-portal']

export const metadata: Metadata = pageMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: config.path,
  keywords: config.keywords,
})

export default function Page() {
  return <FeatureLanding config={config} />
}
