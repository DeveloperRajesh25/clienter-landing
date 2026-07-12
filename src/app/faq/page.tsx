import type { Metadata } from 'next'
import { Rocket, CreditCard, Sparkles, ShieldCheck, type LucideIcon } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Faq } from '@/components/landing/Faq'
import { Reveal } from '@/components/landing/Reveal'
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

// The 10 shared FAQs, sorted into readable categories. Indexes map to FAQS in
// lib/faq-data.ts so the on-page copy and the FAQPage schema never drift.
type Category = { id: string; icon: LucideIcon; title: string; items: typeof FAQS }
const CATEGORIES: Category[] = [
  { id: 'getting-started', icon: Rocket, title: 'Getting started', items: [FAQS[0], FAQS[1], FAQS[2], FAQS[8]] },
  { id: 'pricing-billing', icon: CreditCard, title: 'Pricing & billing', items: [FAQS[3], FAQS[9]] },
  { id: 'features', icon: Sparkles, title: 'Features & workflow', items: [FAQS[4], FAQS[5]] },
  { id: 'data-security', icon: ShieldCheck, title: 'Data & security', items: [FAQS[6], FAQS[7]] },
]

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

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[210px_1fr] lg:gap-16">
            {/* Sticky category index (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                  Browse by topic
                </p>
                {CATEGORIES.map(({ id, icon: Icon, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-orange-50 hover:text-orange-700"
                  >
                    <Icon className="h-4 w-4 text-orange-500" />
                    {title}
                  </a>
                ))}
              </div>
            </aside>

            {/* Accordions grouped by category */}
            <div className="space-y-12">
              {CATEGORIES.map(({ id, icon: Icon, title, items }, i) => (
                <Reveal key={id} delay={i * 60} as="div">
                  <div id={id} className="scroll-mt-28">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="font-display text-xl font-bold text-gray-900">{title}</h2>
                    </div>
                    <div className="mt-5">
                      <Faq items={items} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-14 max-w-3xl text-center text-sm text-gray-500">
            Still have a question?{' '}
            <a href="/contact" className="font-semibold text-orange-600 hover:text-orange-700">
              Get in touch
            </a>{' '}
            and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
