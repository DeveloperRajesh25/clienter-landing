import type { Metadata } from 'next'
import { FileText, ShieldCheck, Sparkles, Smartphone } from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { InvoiceGenerator } from '@/components/marketing/InvoiceGenerator'
import { CtaSection } from '@/components/marketing/CtaSection'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata } from '@/lib/site'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Free Invoice Generator — No Sign-up Required',
  description:
    'Create a professional invoice in seconds. Fill in your details, add line items, and download a polished PDF instantly — no account, no watermark, nothing saved to a server.',
  path: '/invoice',
  keywords: [
    'free invoice generator',
    'online invoice maker',
    'invoice generator no signup',
    'freelancer invoice template',
    'download invoice PDF',
    'create invoice online free',
  ],
})

const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    title: 'Private by design',
    desc: 'Everything runs in your browser. Nothing you type is ever uploaded or stored on a server.',
  },
  {
    icon: Sparkles,
    title: 'No sign-up, no watermark',
    desc: 'No account, no email, no trial. Fill it in and download a clean, professional PDF.',
  },
  {
    icon: Smartphone,
    title: 'Remembers your business',
    desc: 'Your business details are remembered in this browser, so you only type them once.',
  },
]

export default function InvoicePage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Invoice Generator', path: '/invoice' },
        ])}
      />

      <PageHero
        eyebrow={
          <>
            <FileText className="h-4 w-4" /> 100% free, no account needed
          </>
        }
        title="Create a professional"
        highlight="invoice"
        subtitle="Fill in your details, add line items, and download a polished PDF in seconds — nothing you type ever leaves your browser."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Invoice Generator', href: '/invoice' },
        ]}
      />

      <section className="mx-auto mt-12 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <InvoiceGenerator />
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {VALUE_PROPS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center sm:text-left">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 sm:mx-0">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-base font-bold text-gray-900">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-8" />

      <CtaSection
        title="Need to send invoices like this automatically?"
        subtitle="Clienter tracks clients, projects, and payments, and generates invoices like this one for you automatically — no copy-pasting required."
        badge="Free plan — no credit card"
      />
    </PageShell>
  )
}
