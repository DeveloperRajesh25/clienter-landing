import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
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
  ShieldCheck,
  Zap,
  Lock,
  Download,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { WaitlistForm } from '@/components/WaitlistForm'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { HeroPreview } from '@/components/landing/HeroPreview'
import { Reveal } from '@/components/landing/Reveal'
import { Faq } from '@/components/landing/Faq'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, FOUNDER, SOCIALS } from '@/lib/site'
import { faqSchema } from '@/lib/structured-data'
import { HOME_FAQS } from '@/lib/faq-data'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Clienter — Client Management Software for Indian Freelancers & Agencies',
    description:
      'Clienter brings clients, projects, invoices, payments, meetings, and your team into one beautiful workspace. Built for Indian freelancers and agencies. Start free — no credit card required.',
    path: '/',
    keywords: [
      'client management software India',
      'freelancer CRM',
      'invoice software for freelancers',
      'agency management software',
      'GST invoice generator',
      'freelance business management',
    ],
  }),
  // Home uses an absolute title so the brand template suffix isn't appended.
  title: { absolute: 'Clienter — Client Management Software for Indian Freelancers & Agencies' },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Client Management',
    desc: 'Track every client, their status, and full project history in one organized place.',
  },
  {
    icon: Briefcase,
    title: 'Project Tracking',
    desc: 'Kanban boards, deadlines, budgets, and team assignments — for every project.',
  },
  {
    icon: FileText,
    title: 'Smart Invoicing',
    desc: 'Professional, GST-ready invoices with line items, tax, and one-click PDF download.',
  },
  {
    icon: UserPlus,
    title: 'Team Management',
    desc: 'Add developers and designers, assign them to projects, and track payments.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Analytics',
    desc: 'See monthly revenue, expenses, and profit at a glance — no spreadsheets.',
  },
  {
    icon: Bell,
    title: 'Meeting Reminders',
    desc: 'Schedule client meetings with automatic browser push reminders.',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Add your clients',
    desc: 'Import or add clients in seconds and keep every detail in one tidy profile.',
  },
  {
    n: '02',
    title: 'Run your projects',
    desc: 'Spin up projects, assign your team, and track progress on a clean Kanban board.',
  },
  {
    n: '03',
    title: 'Invoice & get paid',
    desc: 'Generate branded invoices, send them, and watch your revenue analytics update live.',
  },
]

// Plan limits mirror src/lib/plans.ts (the enforced source of truth) so the
// marketing copy never promises more than the app actually allows.
const PLANS = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    tagline: 'For getting started',
    features: ['Up to 3 clients', 'Up to 5 projects', 'Invoice generation', 'Basic analytics'],
    cta: 'Get started free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹499',
    period: '/month',
    tagline: 'For growing freelancers',
    features: [
      'Up to 25 clients',
      'Up to 50 projects',
      'Full invoice system',
      'Team management (up to 3 members)',
      'Priority support',
    ],
    cta: 'Start Pro',
    popular: true,
  },
  {
    name: 'Ultra',
    price: '₹1,999',
    period: '/month',
    tagline: 'For agencies at scale',
    features: [
      'Unlimited clients',
      'Unlimited projects',
      'Unlimited team members',
      'White-label invoices',
      'Dedicated support',
    ],
    cta: 'Start Ultra',
    popular: false,
  },
]

// Honest product facts — no fabricated traction or usage numbers (we're
// pre-launch). Each is true of the product itself, not of a user base we
// don't have yet.
const STATS = [
  { value: '6-in-1', label: 'Tools in one app' },
  { value: '₹0', label: 'To start — free forever' },
  { value: '~5 min', label: 'To your first invoice' },
  { value: '100%', label: 'Your data, always yours' },
]

// The "before" (chaos) vs "after" (Clienter) contrast.
const CHAOS = [
  'Client details scattered across WhatsApp and email',
  'Invoices copied from a Word template every month',
  'Project status living only in your head',
  'No clear picture of what you earned or who owes you',
  'Juggling 5–6 different apps that don’t talk to each other',
]
const CALM = [
  'Every client, project, and invoice in one organized place',
  'Professional GST-ready invoices in under a minute',
  'A clean Kanban board that shows exactly where work stands',
  'Live revenue analytics — no spreadsheets, no guessing',
  'One calm workspace built for how you actually work',
]

const TRUST = [
  { icon: Lock, label: 'Encrypted in transit' },
  { icon: ShieldCheck, label: 'Per-account data isolation' },
  { icon: Download, label: 'Export anytime — no lock-in' },
  { icon: Check, label: 'No card required to start' },
]

const FOUNDER_SOCIALS = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.twitter, label: 'X', Icon: Twitter },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <SiteHeader />

      <main>
        {/* ───────── Hero ───────── */}
        <section className="relative overflow-hidden pt-28 sm:pt-36">
          <div className="absolute inset-0 -z-10 bg-grid-faint" />
          <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-orange-50/80 via-amber-50/30 to-white" />
          <div className="absolute -left-24 top-10 -z-10 h-72 w-72 animate-blob rounded-full bg-orange-300/30 blur-3xl" />
          <div className="absolute -right-20 top-32 -z-10 h-72 w-72 animate-blob rounded-full bg-amber-300/30 blur-3xl [animation-delay:3s]" />

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-orange-700 shadow-sm backdrop-blur transition-colors hover:border-orange-300"
              >
                <span className="flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-orange-400" />
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                </span>
                Now in beta — join the waitlist
              </a>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Run your freelance
                <br className="hidden sm:block" /> business{' '}
                <span className="text-gradient-brand animate-gradient-pan">without the chaos</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                Clienter brings your clients, projects, invoices, and team together in one beautiful
                place, built for freelancers and agencies.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#waitlist"
                  className="press group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-gray-900/20 transition-all hover:bg-gray-800 hover:shadow-xl sm:w-auto"
                >
                  Start for free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/how-it-works"
                  className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto"
                >
                  See how it works
                </Link>
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={320}>
              <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                {TRUST.map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5">
                    <Icon className="h-4 w-4 text-orange-500" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Product preview */}
          <Reveal delay={200} className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
            <HeroPreview />
          </Reveal>

          <div className="pointer-events-none h-24 bg-gradient-to-b from-transparent to-white sm:h-32" />
        </section>

        {/* ───────── Stats bar ───────── */}
        <section className="border-y border-gray-100 bg-gray-50/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="px-2 py-8 text-center sm:py-10">
                <div className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-gray-500">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── Problem → Solution ───────── */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Freelancing is hard enough. Your tools shouldn’t make it harder.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Most freelancers run their business across a dozen disconnected apps. Clienter
                replaces the mess with one calm system.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-gray-200 bg-gray-50/60 p-8">
                  <h3 className="font-display text-lg font-bold text-gray-500">Without Clienter</h3>
                  <ul className="mt-5 space-y-3.5">
                    {CHAOS.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[15px] text-gray-600">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gray-300" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="h-full rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/80 to-amber-50/40 p-8 shadow-soft-lg">
                  <h3 className="font-display text-lg font-bold text-orange-600">With Clienter</h3>
                  <ul className="mt-5 space-y-3.5">
                    {CALM.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[15px] text-gray-700">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── Features ───────── */}
        <section id="features" className="scroll-mt-20 border-t border-gray-100 bg-gray-50/60 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
                <Sparkles className="h-4 w-4" /> Everything in one place
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Your entire agency, beautifully organized
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Stop stitching together six different tools. Clienter does it all — and looks good
                doing it.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={(i % 3) * 100}>
                  <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-gray-900">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                Explore all features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── How it works ───────── */}
        <section id="how" className="scroll-mt-20 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
                <Zap className="h-4 w-4" /> Up and running in minutes
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                From signup to paid in three steps
              </h2>
            </Reveal>

            <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent md:block" />
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 120} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white font-display text-lg font-bold text-orange-600 shadow-md ring-1 ring-gray-200">
                    {step.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs leading-relaxed text-gray-600">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Pricing ───────── */}
        <section id="pricing" className="scroll-mt-20 border-t border-gray-100 bg-gray-50/60 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Simple, honest pricing
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Start free. Upgrade only when you&apos;re ready. No hidden fees, ever.
              </p>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {PLANS.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 100} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gray-900 text-white shadow-2xl shadow-gray-900/25 lg:-translate-y-3'
                        : 'border border-gray-200 bg-white hover:-translate-y-1 hover:shadow-xl'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                        Most popular
                      </span>
                    )}
                    <h3 className={`font-display text-lg font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mt-1 text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      {plan.tagline}
                    </p>
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="font-display text-5xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                      <span className={plan.popular ? 'text-gray-400' : 'text-gray-500'}>
                        {plan.period}
                      </span>
                    </div>
                    <ul className="mt-7 flex-1 space-y-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-[15px]">
                          <span
                            className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                              plan.popular ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-600'
                            }`}
                          >
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#waitlist"
                      className={`press mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                        plan.popular
                          ? 'bg-white text-gray-900 hover:bg-gray-100'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                Compare plans in detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── Founder ───────── */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-soft-lg sm:p-12">
                <span className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  From the founder
                </span>
                <blockquote className="mt-4 font-display text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                  “I’m building Clienter for the same people I make content for — freelancers and
                  agency owners who want to grow without drowning in tools. This is the app I wished
                  I had.”
                </blockquote>
                <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4">
                    <Image
                      src={FOUNDER.photo}
                      alt={FOUNDER.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover shadow-lg shadow-orange-500/25"
                    />
                    <div>
                      <p className="font-display text-lg font-bold text-gray-900">{FOUNDER.name}</p>
                      <p className="text-sm text-gray-500">{FOUNDER.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {FOUNDER_SOCIALS.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${FOUNDER.name} on ${label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  Read the full story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="scroll-mt-20 border-t border-gray-100 bg-gray-50/60 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know before you get started.
              </p>
            </Reveal>
            <Reveal className="mt-12">
              <Faq />
            </Reveal>
            <Reveal className="mt-8 text-center">
              <Link href="/faq" className="font-semibold text-orange-600 hover:text-orange-700">
                See all FAQs →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────── CTA / Waitlist ───────── */}
        <section id="waitlist" className="scroll-mt-20 px-4 pb-24 pt-24 sm:px-6 sm:pb-32 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-900 px-6 py-16 text-center shadow-2xl sm:px-12 sm:py-20">
              <div className="absolute inset-0 -z-0 bg-grid-faint opacity-[0.07]" />
              <div className="absolute -left-16 -top-16 h-64 w-64 animate-blob rounded-full bg-orange-500/30 blur-3xl" />
              <div className="absolute -bottom-16 -right-16 h-64 w-64 animate-blob rounded-full bg-amber-500/20 blur-3xl [animation-delay:3s]" />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-orange-200 backdrop-blur">
                  <ShieldCheck className="h-4 w-4" /> Free for the first 100 users
                </span>
                <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Get early access to Clienter
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
                  Join the waitlist and get 1 month of Pro free when we launch. No card required.
                </p>
                <div className="mt-8">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
