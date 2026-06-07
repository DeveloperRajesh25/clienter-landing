import type { Metadata } from 'next'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Faq } from '@/components/landing/Faq'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata } from '@/lib/site'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { FAQS } from '@/lib/faq-data'

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about Clienter — pricing, GST invoicing, team management, data security, refunds, and more. Everything you need before you get started.',
  path: '/faq',
  keywords: ['Clienter FAQ', 'freelancer software questions', 'invoice software help'],
})

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked"
        highlight="questions"
        subtitle="Everything you need to know about Clienter before you get started. Can't find your answer? We're one email away."
      />

      <section className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <Faq items={FAQS} />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
          Still have a question?{' '}
          <a href="/contact" className="font-medium text-orange-600 hover:text-orange-700">
            Get in touch
          </a>{' '}
          and we&apos;ll get back to you within one business day.
        </p>
      </section>

      <CtaSection />
    </PageShell>
  )
}
