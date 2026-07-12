import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Heart,
  Target,
  Shield,
  Flame,
  Lightbulb,
  Hammer,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { Marquee } from '@/components/landing/Marquee'
import { CountUp } from '@/components/landing/CountUp'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, FOUNDER, SOCIALS, SITE_URL } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'About Clienter — Built for Indian Freelancers',
  description:
    'Clienter is built by Rajesh Talagana to help Indian freelancers and small agencies run their business without the chaos. Learn the story, the mission, and the values behind the product.',
  path: '/about',
  keywords: ['about Clienter', 'Rajesh Talagana', 'freelancer software India founder'],
})

// Honest journey beats — no fabricated dates or traction, just the story.
const MILESTONES: { icon: LucideIcon; phase: string; title: string; desc: string }[] = [
  {
    icon: Flame,
    phase: 'The frustration',
    title: 'Too many tools, too little calm',
    desc: 'Clients in WhatsApp, invoices in Word, projects in your head. Nothing connected — and something always slipped through.',
  },
  {
    icon: Lightbulb,
    phase: 'The idea',
    title: 'One place for the whole business',
    desc: 'What if clients, projects, invoices, payments, meetings, and team lived together — designed around how Indian freelancers actually work?',
  },
  {
    icon: Hammer,
    phase: 'Building in the open',
    title: 'Made with the community, not for it',
    desc: 'Built alongside the freelancers and agency owners I make content for — shaped by real feedback, not a boardroom.',
  },
  {
    icon: Rocket,
    phase: 'Live today',
    title: 'The app I wished I had',
    desc: 'Clienter is live and growing. Start free, and go from signup to your first invoice in minutes.',
  },
]

// Varied, non-card values — rendered as numbered editorial rows.
const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: 'Focused on freelancers',
    desc: 'We don’t try to be everything for everyone. Every feature is shaped by the real, daily workflow of independent freelancers and small agencies — especially in India.',
  },
  {
    icon: Heart,
    title: 'Calm over clutter',
    desc: 'Software should reduce stress, not add to it. Clienter is intentionally clean and fast, so the tool gets out of your way and lets you do the work.',
  },
  {
    icon: Shield,
    title: 'Your data is yours',
    desc: 'No lock-in, no selling your information. Export your clients, projects, and invoices whenever you want. We just want to earn your trust every month.',
  },
]

// Product-fact stats only — true of the product, not an invented user base.
const STATS = [
  { to: 6, prefix: '', suffix: '-in-1', label: 'Tools in one app' },
  { to: 0, prefix: '₹', suffix: '', label: 'To start — free forever' },
  { to: 5, prefix: '~', suffix: ' min', label: 'To your first invoice' },
  { to: 100, prefix: '', suffix: '%', label: 'Your data, always yours' },
]

// Who Clienter is built for — sliding keyword pills.
const AUDIENCE = [
  'Freelancers',
  'Design studios',
  'Marketing agencies',
  'Consultants',
  'Developers',
  'Photographers',
  'Content creators',
  'Solo founders',
  'Small teams',
  'Copywriters',
]

const SOCIAL_LINKS = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.twitter, label: 'X', Icon: Twitter },
]

/** Sliding pill for the "who it's for" marquee. */
function AudienceChip({ label }: { label: string }) {
  return (
    <span className="mx-1.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-stone-200/80 bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 shadow-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500" />
      {label}
    </span>
  )
}

export default function AboutPage() {
  // Person schema connecting the founder to the brand — helps Google build the
  // knowledge graph around your name and content.
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: FOUNDER.name,
    jobTitle: 'Founder',
    worksFor: { '@type': 'Organization', name: 'Clienter', url: SITE_URL },
    sameAs: Object.values(SOCIALS),
  }

  return (
    <PageShell>
      <JsonLd
        data={[
          personSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Our story"
        title="Built to help freelancers run their business"
        highlight="without the chaos"
        subtitle="Clienter started with a simple frustration: running a freelance business means juggling too many tools. So we built one calm place for all of it."
      />

      {/* ───────── Story (editorial lead + prose) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Why Clienter exists
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-[2.6rem]">
              Freelancing is hard enough. Running it across ten tabs shouldn’t make it feel like{' '}
              <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                ten businesses at once
              </span>
              .
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            <Reveal className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                If you freelance, you know the feeling. Client details live in WhatsApp. Project
                notes are in a notebook. Invoices are a Word template you copy every month. Payments
                are tracked in your head. Nothing talks to anything else — and something always
                slips.
              </p>
              <p>
                Clienter exists to end that. It brings your{' '}
                <strong className="font-semibold text-gray-900">
                  clients, projects, invoices, payments, meetings, and team
                </strong>{' '}
                into one beautiful, fast workspace — designed for how Indian freelancers and small
                agencies actually work, right down to ₹ invoicing and GST.
              </p>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                The goal isn’t more features. It’s less chaos: a calmer way to run a serious
                business, so you can spend your energy on the work and the clients, not the admin.
              </p>
              <p className="border-l-2 border-orange-200 pl-5 text-[17px] font-medium text-gray-800">
                One workspace. Every part of your business. Built so the tool gets out of your way
                and lets you do the work.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── Journey timeline (vertical rail) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              The journey
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From a frustration to a product
            </h2>
          </Reveal>

          <ol className="relative mt-14 space-y-10">
            {/* Vertical connector line running through the number nodes */}
            <span
              aria-hidden
              className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-orange-200 via-orange-200 to-transparent sm:left-7"
            />
            {MILESTONES.map((m, i) => {
              const Icon = m.icon
              return (
                <Reveal key={m.phase} as="li" delay={i * 100} className="relative flex gap-5 sm:gap-7">
                  <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="pt-1">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                      {m.phase}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-gray-900">
                      {m.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{m.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ───────── Founder pull-quote (editorial) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span
              aria-hidden
              className="block select-none font-serif-display text-[5.5rem] leading-[0.7] text-orange-200"
            >
              &rdquo;
            </span>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              A note from the founder
            </span>
            <blockquote className="mt-6 font-display text-2xl font-bold leading-[1.35] tracking-tight text-gray-900 sm:text-[2rem]">
              I’m building Clienter in the open for the same people I make content for — freelancers
              and agency owners who want to grow without{' '}
              <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                drowning in tools
              </span>
              . This is the app I wished I had.
            </blockquote>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Image
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                width={144}
                height={144}
                className="h-20 w-20 rounded-full object-cover shadow-lg shadow-orange-500/25 ring-2 ring-orange-200"
              />
              <div>
                <p className="font-display text-lg font-bold text-gray-900">{FOUNDER.name}</p>
                <p className="text-sm text-gray-500">{FOUNDER.role}</p>
              </div>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${FOUNDER.name} on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-gray-500 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── Honest stat band ───────── */}
      <section className="relative border-y border-stone-200/70 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-5xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="relative border-stone-200/70 px-4 py-9 text-center sm:py-11 [&:nth-child(n+3)]:border-t lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+3)]:border-t-0"
            >
              <div className="text-gradient-brand font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-gray-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── Values (numbered editorial rows) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              What we believe
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Three principles behind every decision
            </h2>
          </Reveal>

          <div className="mt-12">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal
                  key={v.title}
                  delay={i * 100}
                  className="grid grid-cols-[auto,1fr] items-start gap-x-5 gap-y-2 border-t border-stone-200/70 py-8 sm:grid-cols-[6rem,auto,1fr] sm:gap-x-8 sm:py-10"
                >
                  <span className="font-serif-display text-4xl italic text-orange-200 sm:text-5xl">
                    0{i + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 sm:mt-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <h3 className="font-display text-xl font-bold text-gray-900">{v.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-gray-600">{v.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── Who it's for (sliding pills) ───────── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Who it’s for
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Built for people who run{' '}
              <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                the whole thing
              </span>{' '}
              themselves
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 space-y-4">
          <Marquee speed={44}>
            {AUDIENCE.map((label) => (
              <AudienceChip key={label} label={label} />
            ))}
          </Marquee>
          <Marquee speed={52} reverse>
            {[...AUDIENCE].reverse().map((label) => (
              <AudienceChip key={label} label={label} />
            ))}
          </Marquee>
        </Reveal>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-600 transition-colors hover:text-orange-700"
          >
            Have a question or idea? Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
