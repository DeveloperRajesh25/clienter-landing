import type { DocPage, HelpArticle, SearchItem } from './types'

import { GETTING_STARTED_DOCS } from './content-getting-started'
import { CLIENTS_DOCS } from './content-clients'
import { PROJECTS_DOCS } from './content-projects'
import { LEADS_DOCS } from './content-leads'
import { DOCUMENTS_DOCS } from './content-documents'
import { INVOICING_DOCS } from './content-invoicing'
import { TASKS_MEETINGS_MESSAGING_DOCS } from './content-tasks-meetings-messaging'
import { TEAM_DASHBOARD_SETTINGS_DOCS } from './content-team-dashboard-settings'
import { BILLING_INTEGRATIONS_PORTAL_DOCS } from './content-billing-integrations-portal'
import { MISC_DOCS } from './content-marketplace-partner-security-mobile-workflows'

import { HELP_ACCOUNT_BILLING_CLIENTS } from '../help/content-account-billing-clients'
import { HELP_PROJECTS_LEADS_DOCUMENTS } from '../help/content-projects-leads-documents'
import { HELP_INVOICING_TASKS_MEETINGS_MESSAGING } from '../help/content-invoicing-tasks-meetings-messaging'
import { HELP_REMAINING } from '../help/content-team-portal-integrations-referral-security-mobile-troubleshooting'

export const ALL_DOCS: Record<string, DocPage> = {
  ...GETTING_STARTED_DOCS,
  ...CLIENTS_DOCS,
  ...PROJECTS_DOCS,
  ...LEADS_DOCS,
  ...DOCUMENTS_DOCS,
  ...INVOICING_DOCS,
  ...TASKS_MEETINGS_MESSAGING_DOCS,
  ...TEAM_DASHBOARD_SETTINGS_DOCS,
  ...BILLING_INTEGRATIONS_PORTAL_DOCS,
  ...MISC_DOCS,
}

export const ALL_HELP: Record<string, HelpArticle> = {
  ...HELP_ACCOUNT_BILLING_CLIENTS,
  ...HELP_PROJECTS_LEADS_DOCUMENTS,
  ...HELP_INVOICING_TASKS_MEETINGS_MESSAGING,
  ...HELP_REMAINING,
}

export function getDocPage(slug: string): DocPage | undefined {
  return ALL_DOCS[slug]
}

export function getHelpArticle(slug: string): HelpArticle | undefined {
  return ALL_HELP[slug]
}

export function getDocPagesMap(): Map<string, { title: string }> {
  const map = new Map<string, { title: string }>()
  for (const [slug, page] of Object.entries(ALL_DOCS)) {
    map.set(slug, { title: page.title })
  }
  return map
}

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  for (const [slug, page] of Object.entries(ALL_DOCS)) {
    items.push({
      title: page.title,
      slug,
      description: page.metaDescription,
      category: page.breadcrumbs.length > 2 ? page.breadcrumbs[1].label : 'Documentation',
      type: 'docs',
    })
  }

  for (const [slug, article] of Object.entries(ALL_HELP)) {
    items.push({
      title: article.title,
      slug,
      description: article.metaDescription,
      category: article.category,
      type: 'help',
    })
  }

  return items
}
