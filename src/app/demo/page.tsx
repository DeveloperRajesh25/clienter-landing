import type { Metadata } from 'next'
import Link from 'next/link'
import { LayoutDashboard, Users, FileText, BarChart3, ArrowRight, PlayCircle } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { HeroPreview } from '@/components/landing/HeroPreview'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, APP_URL } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Demo — See Clienter in Action',
  description:
    'Take a guided tour of Clienter. See the dashboard, client profiles, invoicing, and revenue analytics that help Indian freelancers and agencies run their business without the chaos.',
  path: '/demo',
  keywords: ['Clienter demo', 'freelancer software demo', 'invoice software walkthrough'],
})

const TOUR = [
  {
    icon: LayoutDashboard,
    title: 'A dashboard that tells the truth',
    desc: 'The moment you log in, you see this month’s revenue, active clients, live projects, and outstanding invoices. No digging — the picture is right there.',
  },
  {
    icon: Users,
    title: 'Client profiles with full history',
    desc: 'Open any client to see their projects, invoices, payments, and meetings on one screen. You’re always prepared for the next conversation.',
  },
  {
    icon: FileText,
    title: 'Invoices in under a minute',
    desc: 'Add line items, set tax, and download a clean, branded PDF in ₹ — ready to send. GST details are carried through automatically.',
  },
  {
    icon: BarChart3,
    title: 'Analytics without spreadsheets',
    desc: 'Revenue, expenses, and profit roll up automatically so you can see your best months and most valuable clients at a glance.',
  },
]

export default function DemoPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Demo', path: '/demo' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <PlayCircle className="h-4 w-4" /> Product tour
          </>
        }
        title="See Clienter"
        highlight="in action"
        subtitle="This is the real interface — clean, fast, and made for the way freelancers actually work. Here’s a quick tour of what you’ll use every day."
      />

      <Reveal delay={120} className="mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <HeroPreview />
      </Reveal>

      <div className="mx-auto mt-20 max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {TOUR.map((t, i) => {
            const Icon = t.icon
            return (
              <Reveal key={t.title} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold text-gray-900">{t.title}</h2>
                  <p className="mt-2 leading-relaxed text-gray-600">{t.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href={`${APP_URL}/signup`}
            className="press group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
          >
            Try it yourself — create a free account
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <p className="mt-3 text-sm text-gray-500">
            Prefer a personal walkthrough?{' '}
            <Link href="/contact" className="font-medium text-orange-600 hover:text-orange-700">
              Request a live demo
            </Link>
            .
          </p>
        </div>
      </div>

      <CtaSection />
    </PageShell>
  )
}
