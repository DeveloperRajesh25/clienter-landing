import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, X, Sparkles, Minus, Info } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Faq } from '@/components/landing/Faq'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { APP_URL } from '@/lib/site'
import type { ComparePageConfig } from '@/lib/content/compare/_type'

/** A pros/cons card. */
function ProsCons({ title, pros, cons, accent }: { title: string; pros: string[]; cons: string[]; accent: boolean }) {
  return (
    <div
      className={`rounded-3xl border p-6 shadow-soft backdrop-blur-sm sm:p-8 ${
        accent ? 'border-orange-200 bg-orange-50/40' : 'border-stone-200/70 bg-white/60'
      }`}
    >
      <h3 className="font-display text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600">Strengths</p>
      <ul className="mt-3 space-y-2.5">
        {pros.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[15px] text-gray-700">
            <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">Trade-offs</p>
      <ul className="mt-3 space-y-2.5">
        {cons.map((c) => (
          <li key={c} className="flex items-start gap-2.5 text-[15px] text-gray-500">
            <Minus className="mt-0.5 h-4 w-4 flex-none text-stone-300" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Renders one `/compare/clienter-vs-<competitor>` page from its config. Includes
 * a responsive feature table, fair pros/cons for both tools, a ₹ pricing
 * comparison, a "who should choose which" split, migration notes, an FAQ (with
 * FAQPage schema), and a dated accuracy disclaimer.
 */
export function CompareLanding({ config }: { config: ComparePageConfig }) {
  const {
    path,
    competitor,
    breadcrumbLabel,
    eyebrow,
    h1,
    h1Highlight,
    subheading,
    intro,
    tableHeading,
    rows,
    clienterPros,
    clienterCons,
    competitorPros,
    competitorCons,
    pricing,
    chooseClienter,
    chooseOther,
    migration,
    faqHeading,
    faqs,
    related,
    ctaTitle,
    ctaSubtitle,
    asOf,
  } = config

  return (
    <PageShell>
      <JsonLd
        data={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Compare', path: '/compare' },
            { name: breadcrumbLabel, path },
          ]),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <Sparkles className="h-4 w-4" /> {eyebrow}
          </>
        }
        title={h1}
        highlight={h1Highlight}
        subtitle={subheading}
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Compare', href: '/compare' },
          { name: breadcrumbLabel, href: path },
        ]}
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`${APP_URL}/signup`}
            className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800 sm:w-auto"
          >
            Try Clienter free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/pricing"
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
          >
            See pricing
          </Link>
        </div>
      </PageHero>

      {/* ── Intro ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {intro.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {intro.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Feature comparison table ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {tableHeading}
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <div className="overflow-x-auto rounded-3xl border border-stone-200/70 bg-white/60 shadow-soft-lg backdrop-blur-sm">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                  <tr className="border-b border-stone-200/70">
                    <th className="px-5 py-4 font-display text-sm font-bold text-gray-500 sm:px-7">Feature</th>
                    <th className="bg-orange-50/50 px-5 py-4 font-display text-sm font-bold text-orange-700 sm:px-7">
                      Clienter
                    </th>
                    <th className="px-5 py-4 font-display text-sm font-bold text-gray-500 sm:px-7">{competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.feature} className="border-b border-stone-200/60 last:border-0">
                      <td className="px-5 py-4 font-medium text-gray-700 sm:px-7">{row.feature}</td>
                      <td className="bg-orange-50/40 px-5 py-4 text-gray-800 sm:px-7">{row.clienter}</td>
                      <td className="px-5 py-4 text-gray-600 sm:px-7">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 flex items-start gap-2 text-xs text-stone-400">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-none" />
              <span>
                Competitor details are our fair reading as of {asOf} and can change. Always check{' '}
                {competitor}’s own site for their current plans and pricing.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Pros / cons ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              An honest look at both
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No tool is perfect. Here’s where each one is strong and where it isn’t.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <ProsCons title="Clienter" pros={clienterPros} cons={clienterCons} accent />
            </Reveal>
            <Reveal delay={80}>
              <ProsCons title={competitor} pros={competitorPros} cons={competitorCons} accent={false} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pricing comparison ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {pricing.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {pricing.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Who should choose which ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-orange-200 bg-orange-50/40 p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-xl font-bold text-gray-900">{chooseClienter.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {chooseClienter.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-orange-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-stone-200/70 bg-white/60 p-6 shadow-soft sm:p-8">
                <h3 className="font-display text-xl font-bold text-gray-900">{chooseOther.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {chooseOther.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] text-gray-600">
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-stone-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Migration ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {migration.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {migration.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Keep comparing
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map(({ href, label, desc }, i) => (
              <Reveal key={href} delay={i * 70}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-stone-200/70 bg-white/60 p-5 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft-lg"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-base font-bold text-gray-900">{label}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-orange-500" />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {faqHeading}
          </h2>
        </Reveal>
        <div className="mt-10">
          <Faq items={faqs} />
        </div>
      </section>

      <CtaSection title={ctaTitle} subtitle={ctaSubtitle} />
    </PageShell>
  )
}
