import type { Metadata } from 'next'
import Link from 'next/link'
import { BookText } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structured-data'
import { buildMetadata } from '@/lib/seo/metadata'
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from '@/lib/content/glossary'

export const metadata: Metadata = buildMetadata({
  title: 'Freelance & Agency Glossary — Clienter',
  description:
    'Plain-English definitions of the client, project, invoicing, and agency terms freelancers actually run into — CRM, retainer, GST, scope of work, and more.',
  path: '/glossary',
  keywords: ['freelance glossary', 'agency terms', 'crm glossary'],
})

export default function GlossaryHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          itemListSchema(
            GLOSSARY_TERMS.map((t) => ({ name: t.term, path: t.path })),
            'Clienter freelance & agency glossary',
          ),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Glossary', path: '/glossary' },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <BookText className="h-4 w-4" /> Glossary
          </>
        }
        title="The freelance & agency"
        highlight="glossary"
        subtitle="Every client, project, invoicing, and agency term explained in plain English — with an Indian-freelance lens and a link to where it lives in Clienter."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Glossary', href: '/glossary' },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {GLOSSARY_CATEGORIES.map((category) => {
            const terms = GLOSSARY_TERMS.filter((t) => t.category === category)
            if (terms.length === 0) return null
            return (
              <Reveal key={category} className="mb-14">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-orange-500">
                  {category}
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {terms.map((t) => (
                    <Link
                      key={t.slug}
                      href={t.path}
                      className="group rounded-xl border border-stone-200/70 bg-white/60 px-4 py-3 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                    >
                      <span className="font-display text-[15px] font-bold text-gray-900 group-hover:text-orange-600">
                        {t.term}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-gray-500">
                        {t.definition}
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaSection
        title="From glossary to getting it done"
        subtitle="Clienter turns these ideas into one workflow for your clients, projects, and invoices. Start free."
      />
    </PageShell>
  )
}
