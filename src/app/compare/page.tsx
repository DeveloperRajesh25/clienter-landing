import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, GitCompare } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { COMPARE_PAGES } from '@/lib/content/compare-pages'
import { ALTERNATIVE_PAGES } from '@/lib/content/alternative-pages'

export const metadata: Metadata = buildMetadata({
  title: 'Compare Clienter to Other CRM & Freelance Tools',
  description:
    'Honest, side-by-side comparisons of Clienter against popular CRM, invoicing, and project tools — features, ₹ pricing, and who each is really for.',
  path: '/compare',
  keywords: ['clienter comparison', 'crm comparison', 'freelance tool comparison'],
})

export default function CompareHubPage() {
  const items = [
    ...COMPARE_PAGES.map((p) => ({ name: p.breadcrumbLabel, path: p.path })),
    ...ALTERNATIVE_PAGES.map((p) => ({ name: p.breadcrumbLabel, path: p.path })),
  ]

  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(items, 'Clienter comparisons and alternatives'),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Compare', path: '/compare' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <GitCompare className="h-4 w-4" /> Compare
          </>
        }
        title="Compare Clienter to the"
        highlight="alternatives"
        subtitle="No spin — fair, side-by-side breakdowns of how Clienter stacks up against the CRM, invoicing, and project tools freelancers and agencies actually consider."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Compare', href: '/compare' },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Clienter vs …
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARE_PAGES.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <Link
                  href={p.path}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-base font-bold text-gray-900">
                      Clienter vs {p.competitor}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-orange-500" />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-gray-500">{p.competitorCategory}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Looking for an alternative?
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALTERNATIVE_PAGES.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <Link
                  href={p.path}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-base font-bold text-gray-900">{p.breadcrumbLabel}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-orange-500" />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-gray-500">{p.tagline}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Stop comparing, start running your business"
        subtitle="Create your free Clienter account and bring clients, projects, and invoices into one place."
      />
    </PageShell>
  )
}
