import type { Metadata } from 'next'
import Link from 'next/link'
import {
  User, CreditCard, Users, FolderKanban, Filter, FileText, Receipt,
  CheckSquare, Calendar, MessageSquare, UserPlus, Globe, Plug, Gift,
  Shield, Smartphone, Wrench, Mail,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { DocsSearch } from '@/components/docs/DocsSearch'
import { buildSearchIndex } from '@/lib/docs/content'
import { HELP_CATEGORIES } from '@/lib/docs/sections'

export const metadata: Metadata = {
  title: 'Help Center',
  description:
    'Get answers to common questions about Clienter — account setup, billing, clients, projects, invoicing, and troubleshooting.',
  alternates: { canonical: '/help' },
}

const CATEGORY_ICONS: Record<string, typeof User> = {
  User, CreditCard, Users, FolderKanban, Filter, FileText, Receipt,
  CheckSquare, Calendar, MessageSquare, UserPlus, Globe, Plug, Gift,
  Shield, Smartphone, Wrench, Mail,
}

export default function HelpPage() {
  const searchItems = buildSearchIndex()

  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Help Center', path: '/help' }])} />

      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-blue-50/60 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Help Center
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out of Clienter.
          </p>
          <div className="mt-8 mx-auto max-w-xl">
            <DocsSearch items={searchItems} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.icon] ?? FileText
              const href = cat.articles.length > 0 ? `/help/${cat.articles[0]}` : '/contact'
              return (
                <Link
                  key={cat.slug}
                  href={href}
                  className="group rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-bold text-gray-900">
                    {cat.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>
                  {cat.articles.length > 0 && (
                    <p className="mt-3 text-xs font-medium text-blue-600">
                      {cat.articles.length} article{cat.articles.length !== 1 ? 's' : ''}
                    </p>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <h2 className="font-display text-xl font-bold text-gray-900">Still need help?</h2>
            <p className="mt-2 text-gray-600">
              Our support team is ready to help you with any question.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:support@clienter.co.in"
                className="btn-primary"
              >
                <Mail className="h-4 w-4" />
                Email Support
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
