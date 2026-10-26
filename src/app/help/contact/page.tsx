import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle, Clock } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact Support',
  description:
    'Get help from the Clienter support team. Email us at support@clienter.co.in or use the Help button inside the app.',
  alternates: { canonical: '/help/contact' },
}

export default function HelpContactPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Help Center', path: '/help' },
          { name: 'Contact Support', path: '/help/contact' },
        ])}
      />

      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-blue-50/60 to-transparent" />
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contact Support
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re here to help. Choose the best way to reach us.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-gray-900">Email</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Send us an email and we&apos;ll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:support@clienter.co.in"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    support@clienter.co.in
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-gray-900">In-App Help</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Open the Clienter app and tap the <strong>Help</strong> button in the bottom-right corner for instant support.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-gray-900">Response Time</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    We typically respond within 24 hours on business days. For urgent issues, please include &quot;URGENT&quot; in your email subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Before contacting us, check our{' '}
              <Link href="/help" className="font-medium text-orange-600 underline underline-offset-2">
                Help Center
              </Link>{' '}
              and{' '}
              <Link href="/docs" className="font-medium text-orange-600 underline underline-offset-2">
                Documentation
              </Link>{' '}
              — your answer might already be there.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
