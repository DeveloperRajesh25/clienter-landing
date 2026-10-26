import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Rocket, Users, FolderKanban, Filter, FileText, Receipt,
  CheckSquare, Calendar, MessageSquare, UserPlus, LayoutDashboard,
  Settings, CreditCard, Plug, Globe, Store, Gift, Shield, Smartphone, Briefcase,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { JsonLd } from '@/components/marketing/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { DocsSearch } from '@/components/docs/DocsSearch'
import { buildSearchIndex } from '@/lib/docs/content'
import { DOC_SECTIONS } from '@/lib/docs/sections'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Complete documentation for Clienter — learn how to manage clients, projects, invoices, leads, and your entire agency from one platform.',
  alternates: { canonical: '/docs' },
}

const SECTION_ICONS: Record<string, typeof Rocket> = {
  'Getting Started': Rocket,
  'Clients': Users,
  'Projects': FolderKanban,
  'Leads': Filter,
  'Documents': FileText,
  'Invoicing': Receipt,
  'Tasks': CheckSquare,
  'Meetings': Calendar,
  'Messaging': MessageSquare,
  'Team': UserPlus,
  'Dashboard': LayoutDashboard,
  'Settings': Settings,
  'Billing': CreditCard,
  'Integrations': Plug,
  'Client Portal': Globe,
  'Marketplace': Store,
  'Partner Program': Gift,
  'Security': Shield,
  'Mobile': Smartphone,
  'Agency Workflows': Briefcase,
}

export default function DocsPage() {
  const searchItems = buildSearchIndex()

  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Documentation', path: '/docs' }])} />

      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-orange-50/70 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Clienter — from getting started to advanced features.
          </p>
          <div className="mt-8 mx-auto max-w-xl">
            <DocsSearch items={searchItems} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOC_SECTIONS.map((section) => {
              const Icon = SECTION_ICONS[section.title] ?? FileText
              const href = `/docs/${section.children[0]}`
              return (
                <Link
                  key={section.title}
                  href={href}
                  className="group rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition-all duration-200 hover:border-orange-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
