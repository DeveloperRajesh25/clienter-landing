import type { Metadata } from 'next'
import { SeoLanding } from '@/components/marketing/SeoLanding'
import { pageMetadata } from '@/lib/site'
import { SEO_LANDING_BY_PATH } from '@/lib/seo-pages'

const config = SEO_LANDING_BY_PATH['/business-management-software']

export const metadata: Metadata = pageMetadata({
  title: config.metaTitle,
  description: config.metaDescription,
  path: config.path,
  keywords: config.keywords,
  ogTitle: config.ogTitle,
  ogDescription: config.ogDescription,
})

export default function Page() {
  return <SeoLanding config={config} />
}
