import type { Metadata } from 'next'
import { Mail, MessageSquare, LifeBuoy, Instagram } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { ContactForm } from '@/components/marketing/ContactForm'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, CONTACT, SOCIALS } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with the Clienter team. Questions about features, pricing, or a partnership? Send us a message and we’ll reply within one business day.',
  path: '/contact',
  keywords: ['contact Clienter', 'Clienter support', 'freelancer software support'],
})

const CHANNELS = [
  {
    icon: Mail,
    title: 'General enquiries',
    desc: 'Questions about the product, pricing, or partnerships.',
    value: CONTACT.general,
    href: `mailto:${CONTACT.general}`,
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    desc: 'Need help with your account or have an issue?',
    value: CONTACT.support,
    href: `mailto:${CONTACT.support}`,
  },
  {
    icon: Instagram,
    title: 'Social',
    desc: 'Follow along and DM us — we’re active and responsive.',
    value: '@clienter',
    href: SOCIALS.instagram,
  },
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

      <section className="mx-auto mt-16 grid max-w-5xl gap-12 px-4 pb-8 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Channels */}
        <div className="space-y-4 lg:col-span-2">
          {CHANNELS.map(({ icon: Icon, title, desc, value, href }) => (
            <a
              key={title}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group block rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-base font-bold text-gray-900">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
              <p className="mt-3 text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                {value}
              </p>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft-lg sm:p-8">
            <h2 className="font-display text-xl font-bold text-gray-900">Send us a message</h2>
            <p className="mt-1 text-sm text-gray-500">
              Fill this in and we’ll get back to you within one business day.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="h-16" />
    </PageShell>
  )
}
