import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock, ShieldCheck, Database, CreditCard, Download, EyeOff, ServerCog, KeyRound } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, CONTACT } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Security & Data Protection',
  description:
    'How Clienter keeps your business and client data safe: encryption in transit, per-account data isolation with row-level security, secure payments via Razorpay, and full data export — no lock-in.',
  path: '/security',
  keywords: ['Clienter security', 'data protection', 'secure freelancer software'],
})

const PRACTICES = [
  {
    icon: Lock,
    title: 'Encrypted in transit',
    desc: 'All traffic is served over HTTPS/TLS, with HSTS enforced. Your data is encrypted while moving between your device and our servers.',
  },
  {
    icon: Database,
    title: 'Per-account data isolation',
    desc: 'Every account’s data is isolated using row-level security at the database layer, so one customer can never see another’s information.',
  },
  {
    icon: KeyRound,
    title: 'Secure authentication',
    desc: 'Passwords are hashed and never stored in plain text. Sessions are managed securely by our authentication provider.',
  },
  {
    icon: CreditCard,
    title: 'Safe payments',
    desc: 'Payments are processed by Razorpay, a PCI-DSS compliant provider. We never see or store your full card details on our servers.',
  },
  {
    icon: ServerCog,
    title: 'Hardened infrastructure',
    desc: 'We run on managed, reputable infrastructure (Supabase and Vercel) with security headers, a strict content-security policy, and regular updates.',
  },
  {
    icon: Download,
    title: 'Your data, exportable',
    desc: 'You can export your clients, projects, and invoices at any time. There’s no lock-in — your data stays yours.',
  },
  {
    icon: EyeOff,
    title: 'We never sell your data',
    desc: 'We do not sell or share your personal or client data with advertisers. We only use trusted providers needed to run the service.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy by design',
    desc: 'We collect only what we need to run Clienter, and we comply with applicable privacy law including India’s DPDP Act, 2023.',
  },
]

export default function SecurityPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Security', path: '/security' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <ShieldCheck className="h-4 w-4" /> Security &amp; trust
          </>
        }
        title="Your business data is"
        highlight="safe with us"
        subtitle="Your clients trust you with their work. You can trust us with your data. Here’s exactly how we protect it."
      />

      <section className="mx-auto mt-16 max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {PRACTICES.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold text-gray-900">{p.title}</h2>
                  <p className="mt-2 leading-relaxed text-gray-600">{p.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/60 p-7 text-center">
          <p className="text-gray-600">
            Found a security issue or have a question about how we handle data? We take it
            seriously — email{' '}
            <a href={`mailto:${CONTACT.support}`} className="font-medium text-orange-600 hover:text-orange-700">
              {CONTACT.support}
            </a>{' '}
            or read our <Link href="/privacy" className="font-medium text-orange-600 hover:text-orange-700">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
