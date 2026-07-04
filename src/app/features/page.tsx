import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  Briefcase,
  FileText,
  UserPlus,
  TrendingUp,
  Bell,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, APP_URL } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Features — Clients, Projects, Invoices & Team in One Place',
  description:
    'Explore everything Clienter does: client management, project tracking with Kanban boards, GST-ready invoicing, team management, revenue analytics, and meeting reminders — built for Indian freelancers and agencies.',
  path: '/features',
  keywords: [
    'freelancer client management features',
    'invoice software features',
    'project tracking for freelancers',
    'team management software India',
  ],
})

type Feature = {
  icon: typeof Users
  title: string
  tagline: string
  how: string[]
  benefit: string
}

const FEATURES: Feature[] = [
  {
    icon: Users,
    title: 'Client Management',
    tagline: 'Every client, every detail, one organized profile.',
    how: [
      'Add clients in seconds with contact details, company, and notes.',
      'See each client’s full history — projects, invoices, payments, and meetings — on one screen.',
      'Track client status (active, lead, on-hold) so you always know where things stand.',
    ],
    benefit:
      'No more digging through WhatsApp, email, and spreadsheets to remember what a client owes or what you promised. It’s all in one place.',
  },
  {
    icon: Briefcase,
    title: 'Project Tracking',
    tagline: 'Kanban boards, deadlines, and budgets for every project.',
    how: [
      'Spin up a project, link it to a client, and set a budget and deadline.',
      'Move work across a clean Kanban board — from To-do to In progress to Done.',
      'Assign team members to projects and track tasks against the budget.',
    ],
    benefit:
      'You always know which projects are on track, which are slipping, and how much budget is left — without a single status meeting.',
  },
  {
    icon: FileText,
    title: 'Smart Invoicing',
    tagline: 'Professional, GST-ready invoices in under a minute.',
    how: [
      'Build invoices with line items, quantities, rates, and tax.',
      'Amounts are in ₹ by default, with your business and GST details on every invoice.',
      'Download a clean, branded PDF and send it to your client in one click.',
    ],
    benefit:
      'Get paid faster with invoices that look like they came from an agency twice your size — no Word templates, no manual math.',
  },
  {
    icon: UserPlus,
    title: 'Team Management',
    tagline: 'Add your developers and designers, assign work, track payments.',
    how: [
      'Invite team members by email — they get their own secure login.',
      'Assign them to specific projects and tasks so everyone knows what to do.',
      'Track what you owe each team member and record payments as you go.',
    ],
    benefit:
      'Scale from solo freelancer to a small agency without losing control of who’s doing what and who you’ve paid.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Analytics',
    tagline: 'See your money clearly — revenue, expenses, and profit.',
    how: [
      'Your dashboard rolls up monthly revenue, outstanding invoices, and expenses automatically.',
      'Spot your best months and your most valuable clients at a glance.',
      'No spreadsheets, no formulas — the numbers update as you work.',
    ],
    benefit:
      'Make confident decisions about pricing, hiring, and which clients to keep — backed by real numbers, not gut feel.',
  },
  {
    icon: Bell,
    title: 'Meetings & Reminders',
    tagline: 'Never miss a client call again.',
    how: [
      'Schedule client meetings and attach them to the right client or project.',
      'Get automatic browser push reminders before each meeting.',
      'Keep a running history of every conversation alongside the client.',
    ],
    benefit:
      'Show up prepared and on time, every time — the small thing that makes clients trust you with bigger work.',
  },
]

export default function FeaturesPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <Sparkles className="h-4 w-4" /> Everything in one place
          </>
        }
        title="One app to run your whole"
        highlight="freelance business"
        subtitle="Stop stitching together six different tools. Clienter handles clients, projects, invoices, team, analytics, and meetings — and looks good doing it."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${APP_URL}/signup`}
            className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-800 sm:w-auto"
          >
            Start for free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
          >
            See how it works
          </Link>
        </div>
      </PageHero>

      <div className="mx-auto mt-20 max-w-5xl space-y-24 px-4 pb-8 sm:px-6 lg:px-8">
        {FEATURES.map((f, i) => {
          const Icon = f.icon
          const reverse = i % 2 === 1
          return (
            <Reveal key={f.title}>
              <section
                id={f.title.toLowerCase().replace(/[^a-z]+/g, '-')}
                className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={reverse ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-gray-900">
                    {f.title}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-orange-600">{f.tagline}</p>
                  <ul className="mt-6 space-y-3">
                    {f.how.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-50 text-orange-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-relaxed text-gray-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={reverse ? 'lg:order-1' : ''}>
                  <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 to-amber-50/40 p-8 shadow-soft-lg">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                      Why it matters
                    </p>
                    <p className="mt-3 font-display text-xl font-bold leading-snug text-gray-900">
                      {f.benefit}
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>
          )
        })}
      </div>

      <CtaSection
        title="Ready to bring it all together?"
        subtitle="Create your free account and start running your freelance business the calm way."
      />
    </PageShell>
  )
}
