import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Users } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { AUDIENCE_PAGES } from '@/lib/content/audience-pages'

export const metadata: Metadata = buildMetadata({
  title: 'Clienter for Freelancers, Agencies & Creatives',
  description:
    'See how Clienter fits your work — whether you’re a freelancer, web or design agency, marketer, writer, photographer, consultant, or creative. Built for India.',
  path: '/for',
  keywords: ['client management for freelancers', 'agency management software', 'crm by profession'],
})

export default function ForHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(
            AUDIENCE_PAGES.map((p) => ({ name: p.audience, path: p.path })),
            'Clienter by profession',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'For', path: '/for' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <Users className="h-4 w-4" /> Who it’s for
          </>
        }
        title="Built for how you actually"
        highlight="work"
        subtitle="Clienter adapts to your workflow, not the other way round. Find the guide written for your kind of work — from solo freelancers to full agencies."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'For', href: '/for' },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCE_PAGES.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <Link
                  href={p.path}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-base font-bold text-gray-900">{p.audience}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-orange-500" />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-gray-500">{p.subheading.split('.')[0]}.</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Whatever you do, do it without the chaos"
        subtitle="Create your free Clienter account and bring your clients, projects, and invoices together."
      />
    </PageShell>
  )
}
