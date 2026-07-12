import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Mail,
  LifeBuoy,
  Instagram,
  MessageSquare,
  Clock,
  UserCheck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { ContactForm } from '@/components/marketing/ContactForm'
import { CtaSection } from '@/components/marketing/CtaSection'
import { JsonLd } from '@/components/marketing/JsonLd'
import { Reveal } from '@/components/landing/Reveal'
import { Marquee } from '@/components/landing/Marquee'
import { pageMetadata, CONTACT, SOCIALS } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with the Clienter team. Questions about features, pricing, or a partnership? Send us a message and we’ll reply within one business day.',
  path: '/contact',
  keywords: ['contact Clienter', 'Clienter support', 'freelancer software support'],
})

// Direct channels rendered as a clean list (icon + label + value), not heavy
// identical cards. General + support share one inbox, so we describe intent
// rather than pretending they're separate desks.
const CHANNELS = [
  {
    icon: Mail,
    label: 'Email us',
    desc: 'Product, pricing, or partnership questions.',
    value: CONTACT.general,
    href: `mailto:${CONTACT.general}`,
  },
  {
    icon: LifeBuoy,
    label: 'Account support',
    desc: 'Stuck on something? We’ll sort it out.',
    value: CONTACT.support,
    href: `mailto:${CONTACT.support}`,
  },
  {
    icon: Instagram,
    label: 'DM on Instagram',
    desc: 'Active and responsive — say hi.',
    value: '@talagana.rajesh',
    href: SOCIALS.instagram,
  },
]

// Short, honest reassurances — support is human and fast, and there's no bot
// ticket-maze in front of it.
const REASSURANCES = [
  { icon: UserCheck, title: 'A real human replies', desc: 'No ticket bots, no canned scripts.' },
  { icon: Clock, title: 'Within 1 business day', desc: 'Usually much sooner than that.' },
  { icon: ShieldCheck, title: 'Founder-led support', desc: 'You reach the team that builds it.' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: SOCIALS.instagram },
  { label: 'YouTube', href: SOCIALS.youtube },
  { label: 'LinkedIn', href: SOCIALS.linkedin },
  { label: 'X (Twitter)', href: SOCIALS.twitter },
]

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <MessageSquare className="h-4 w-4" /> We’d love to hear from you
          </>
        }
        title="Get in"
        highlight="touch"
        subtitle="Whether you have a question, an idea, or want a live walkthrough — we’re here and we reply fast."
      />

      {/* ───────── Contact split: channels + form ───────── */}
      <section className="mx-auto mt-14 grid max-w-6xl gap-10 px-4 py-16 sm:py-24 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        {/* Left — clean channel list + response promise + socials */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
              Reach us directly
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              A few ways to{' '}
              <span className="text-gradient-brand font-serif-display text-[1.1em] font-normal italic">
                say hello
              </span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              Prefer email or a DM? Pick whatever’s easiest — it all lands with the same small team.
            </p>
          </Reveal>

          {/* Channel list — icon + label + value on hairline dividers, no card chrome */}
          <Reveal delay={80} className="mt-8">
            <ul className="divide-y divide-stone-200/80 border-y border-stone-200/80">
              {CHANNELS.map(({ icon: Icon, label, desc, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-4 py-4 transition-colors"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-stone-200/80 bg-white text-orange-500 shadow-soft transition-colors group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="font-display text-[15px] font-bold text-gray-900">{label}</p>
                        <ArrowUpRight className="h-3.5 w-3.5 text-stone-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-500" />
                      </div>
                      <p className="mt-0.5 truncate text-sm text-gray-500">{desc}</p>
                    </div>
                    <span className="hidden truncate text-sm font-semibold text-orange-600 sm:block">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Response-time promise — highlighted element, not just body text */}
          <Reveal delay={140} className="mt-6">
            <div className="relative overflow-hidden rounded-2xl border border-orange-200/70 bg-gradient-to-br from-orange-50 to-amber-50/50 p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-orange-300/25 blur-2xl"
              />
              <div className="relative flex items-center gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-gray-900">
                    We reply within 1 business day
                  </p>
                  <p className="mt-0.5 text-sm text-gray-600">
                    Real humans, no ticket queue — usually much sooner.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Socials — tidy sliding strip */}
          <Reveal delay={200} className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
              Follow along
            </p>
            <div className="mt-3">
              <Marquee speed={26}>
                {[...SOCIAL_LINKS, ...SOCIAL_LINKS].map((s, i) => (
                  <a
                    key={`${s.label}-${i}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1.5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-stone-200/80 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-soft transition-colors hover:border-orange-200 hover:text-orange-600"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                    {s.label}
                  </a>
                ))}
              </Marquee>
            </div>
          </Reveal>
        </div>

        {/* Right — framed form panel with soft glow */}
        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_60%_55%_at_50%_20%,rgba(249,115,22,0.16),transparent_70%)] blur-2xl"
              />
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white/90 shadow-soft-lg backdrop-blur-sm">
                {/* Panel header bar */}
                <div className="flex items-center gap-3 border-b border-stone-100 px-6 py-5 sm:px-8">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-gray-900">
                      Send us a message
                    </h2>
                    <p className="text-sm text-gray-500">
                      Fill this in and we’ll get back within one business day.
                    </p>
                  </div>
                </div>
                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── Reassurances + "before you email" helper ───────── */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        {/* Light icon row — no card chrome, top hairline */}
        <div className="grid gap-x-10 gap-y-8 border-t border-stone-200/70 pt-12 sm:grid-cols-3">
          {REASSURANCES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100} className="flex gap-3.5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Before you email — nudge to the FAQ */}
        <Reveal delay={120} className="mt-12">
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-stone-200/80 bg-white/70 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25">
                <HelpCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-gray-900">Before you email us</h3>
                <p className="mt-1 max-w-md text-[15px] leading-relaxed text-gray-600">
                  Lots of questions about features, pricing, and getting started are already answered
                  — you might find yours in seconds.
                </p>
              </div>
            </div>
            <Link
              href="/faq"
              className="press group inline-flex flex-none items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:border-orange-200 hover:text-orange-600"
            >
              Browse the FAQ
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaSection />
    </PageShell>
  )
}
