import type { Metadata } from 'next'
import Link from 'next/link'
import { Instagram, Youtube, Linkedin, Twitter, Heart, Target, Shield } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
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

const VALUES = [
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
    desc: 'No lock-in, no selling your information. You can export your clients, projects, and invoices whenever you want. We just want to earn your trust every month.',
  },
]

const SOCIAL_LINKS = [
  { href: SOCIALS.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIALS.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIALS.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SOCIALS.twitter, label: 'X', Icon: Twitter },
]

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

      {/* Story */}
      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              If you freelance, you know the feeling. Client details live in WhatsApp. Project
              notes are in a notebook. Invoices are a Word template you copy every month. Payments
              are tracked in your head. Nothing talks to anything else — and something always slips.
            </p>
            <p>
              Clienter exists to end that. It brings your{' '}
              <strong className="font-semibold text-gray-900">
                clients, projects, invoices, payments, meetings, and team
              </strong>{' '}
              into one beautiful, fast workspace — designed specifically for how Indian freelancers
              and small agencies actually work, right down to ₹ invoicing and GST.
            </p>
            <p>
              The goal isn’t more features. It’s less chaos: a calmer way to run a serious business,
              so you can spend your energy on the work and the clients, not the admin.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Founder note */}
      <section className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/80 to-amber-50/40 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              A note from the founder
            </p>
            <blockquote className="mt-4 font-display text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
              “I’m building Clienter in the open for the same people I make content for —
              freelancers and agency owners who want to grow without drowning in tools. This is the
              app I wished I had. I’d love for you to be one of the first to use it.”
            </blockquote>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-base font-bold text-gray-900">{FOUNDER.name}</p>
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
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-200 bg-white/70 text-gray-500 transition-colors hover:bg-white hover:text-orange-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="mx-auto mt-24 max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-gray-900">
          What we believe
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon
            return (
              <Reveal key={v.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-gray-900">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{v.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="font-medium text-orange-600 hover:text-orange-700"
          >
            Have a question or idea? Get in touch →
          </Link>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
