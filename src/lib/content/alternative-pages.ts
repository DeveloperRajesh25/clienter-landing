import type { AlternativePageConfig } from './alternative/_type'
import { HUBSPOT_ALTERNATIVE } from './alternative/hubspot-alternative-for-freelancers'
import { HONEYBOOK_ALTERNATIVE } from './alternative/honeybook-alternative-india'
import { DUBSADO_ALTERNATIVE } from './alternative/dubsado-alternative'
import { BONSAI_ALTERNATIVE } from './alternative/bonsai-alternative'
import { ZOHO_CRM_ALTERNATIVE } from './alternative/zoho-crm-alternative-for-freelancers'
import { NOTION_ALTERNATIVE } from './alternative/notion-alternative-for-client-management'
import { TRELLO_ALTERNATIVE } from './alternative/trello-alternative-for-freelancers'
import { QUICKBOOKS_ALTERNATIVE } from './alternative/quickbooks-alternative-india'
import { BEST_FREE_CRM_ALTERNATIVES } from './alternative/best-free-crm-alternatives'

export type { AlternativePageConfig }

/** All /alternatives/<slug> pages. */
export const ALTERNATIVE_PAGES: AlternativePageConfig[] = [
  BEST_FREE_CRM_ALTERNATIVES,
  HUBSPOT_ALTERNATIVE,
  HONEYBOOK_ALTERNATIVE,
  DUBSADO_ALTERNATIVE,
  BONSAI_ALTERNATIVE,
  ZOHO_CRM_ALTERNATIVE,
  NOTION_ALTERNATIVE,
  TRELLO_ALTERNATIVE,
  QUICKBOOKS_ALTERNATIVE,
]

export const ALTERNATIVE_BY_SLUG: Record<string, AlternativePageConfig> = Object.fromEntries(
  ALTERNATIVE_PAGES.map((p) => [p.slug, p]),
)
