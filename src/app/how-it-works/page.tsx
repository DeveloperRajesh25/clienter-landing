import type { Metadata } from 'next'
import Link from 'next/link'
import { UserPlus, FolderKanban, FileText, Wallet, ArrowRight, Zap } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'How It Works — From Signup to Paid in 4 Steps',
  description:
    'See exactly how Clienter works: add your clients, run projects on a Kanban board, send GST-ready invoices, and track payments and revenue — all in one workspace built for Indian freelancers.',
  path: '/how-it-works',
  keywords: ['how Clienter works', 'freelance workflow software', 'invoice and project workflow'],
})

const STEPS = [
  {
    icon: UserPlus,
    n: '01',
    title: 'Add your clients',
    desc: 'Create a profile for each client in seconds — contact details, company, notes, and status. This becomes the home for everything you do together.',
    detail: 'Takes ~2 minutes for your first client.',
  },
  {
    icon: FolderKanban,
    n: '02',
    title: 'Run your projects',
    desc: 'Spin up projects, set budgets and deadlines, assign your team, and move work across a clean Kanban board. Everyone knows what to do and when.',
    detail: 'Drag-and-drop boards, no training needed.',
  },
  {
    icon: FileText,
    n: '03',
    title: 'Invoice your work',
    desc: 'Turn completed work into a professional, GST-ready invoice with line items and tax. Download a branded PDF and send it to your client in one click.',
    detail: 'Your first invoice in under 5 minutes.',
  },
  {
    icon: Wallet,
    n: '04',
    title: 'Get paid & track revenue',
    desc: 'Record payments, see what’s outstanding, and watch your revenue analytics update live. Pay your team and keep your profit clear.',
    detail: 'Always know exactly where your money is.',
  },
]

export default function HowItWorksPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'How it works', path: '/how-it-works' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <Zap className="h-4 w-4" /> Up and running in minutes
          </>
        }
        title="From signup to paid in"
        highlight="four simple steps"
        subtitle="Clienter is designed so you can start today, with no onboarding calls and no learning curve. Here’s the whole flow."
      />

      <div className="mx-auto mt-20 max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative">
          {/* vertical connector */}
          <div className="absolute bottom-6 left-7 top-6 hidden w-px bg-gradient-to-b from-orange-200 via-orange-200 to-transparent sm:block" />
          <div className="space-y-12">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-white text-orange-600 shadow-md ring-1 ring-gray-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="pt-1">
                      <span className="font-display text-sm font-bold text-orange-500">
                        Step {step.n}
                      </span>
                      <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-gray-900">
                        {step.title}
                      </h2>
                      <p className="mt-2 leading-relaxed text-gray-600">{step.desc}</p>
                      <p className="mt-2 text-sm font-medium text-gray-400">{step.detail}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/demo"
            className="press group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800"
          >
            See it in action
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <CtaSection />
    </PageShell>
  )
}
