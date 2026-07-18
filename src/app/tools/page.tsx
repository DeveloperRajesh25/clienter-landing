import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Wrench, Calculator, FileText } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { TOOLS } from '@/lib/content/tools'

export const metadata: Metadata = buildMetadata({
  title: 'Free Tools for Freelancers — Calculators & Generators',
  description:
    'Free tools for freelancers and agencies in India: invoice and GST generators, a rate and GST calculator, TDS, retainer, and project cost tools. No signup.',
  path: '/tools',
  keywords: ['free tools for freelancers', 'freelance calculators india', 'invoice generator'],
})

export default function ToolsHubPage() {
  const calculators = TOOLS.filter((t) => t.kind === 'calculator')
  const generators = TOOLS.filter((t) => t.kind !== 'calculator')

  const Group = ({ title, icon: Icon, tools }: { title: string; icon: typeof Wrench; tools: typeof TOOLS }) => (
    <Reveal className="mb-14">
      <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.16em] text-orange-500">
        <Icon className="h-4 w-4" /> {title}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <Link
            key={t.slug}
            href={t.path}
            className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
          >
            <span className="flex items-center justify-between">
              <span className="font-display text-base font-bold text-gray-900">{t.title}</span>
              <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-orange-500" />
            </span>
            <span className="mt-2 text-sm leading-relaxed text-gray-500">{t.tagline}</span>
          </Link>
        ))}
      </div>
    </Reveal>
  )

  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(
            TOOLS.map((t) => ({ name: t.title, path: t.path })),
            'Free tools for freelancers',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Tools', path: '/tools' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <Wrench className="h-4 w-4" /> Free tools
          </>
        }
        title="Free tools for freelancers &"
        highlight="agencies"
        subtitle="Calculators and generators that do the fiddly maths and paperwork of running a freelance business — free, no signup, and built for India."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Free Tools', href: '/tools' },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Group title="Calculators" icon={Calculator} tools={calculators} />
          <Group title="Generators & documents" icon={FileText} tools={generators} />
        </div>
      </section>

      <CtaSection
        title="Great tools. Even better together."
        subtitle="Clienter brings clients, projects, invoices, and payments into one workspace. Start free."
      />
    </PageShell>
  )
}
