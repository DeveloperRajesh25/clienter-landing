import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, FileText } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { TEMPLATES } from '@/lib/content/templates'

export const metadata: Metadata = buildMetadata({
  title: 'Free Templates for Freelancers — Contracts, Proposals & More',
  description:
    'Free, copyable templates for freelancers and agencies: freelance contract, proposal, scope of work, NDA, invoice, quotation, onboarding, and retainer templates.',
  path: '/templates',
  keywords: ['freelance templates', 'freelance contract template', 'proposal template'],
})

export default function TemplatesHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(
            TEMPLATES.map((t) => ({ name: t.title, path: t.path })),
            'Free templates for freelancers',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Templates', path: '/templates' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <FileText className="h-4 w-4" /> Templates
          </>
        }
        title="Free templates for freelancers &"
        highlight="agencies"
        subtitle="Copyable contracts, proposals, checklists, and invoices — the paperwork of running a freelance business, ready to use and adapt. Free, no signup."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Templates', href: '/templates' },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPLATES.map((t, i) => (
              <Reveal key={t.slug} delay={(i % 3) * 60}>
                <Link
                  href={t.path}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-base font-bold text-gray-900">{t.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-orange-500" />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-gray-500">{t.tagline}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Templates are a start. Clienter finishes the job."
        subtitle="Send proposals clients e-sign, raise invoices, and track it all in one place. Start free."
      />
    </PageShell>
  )
}
