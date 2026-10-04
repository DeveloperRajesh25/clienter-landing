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
// Plural "best X alternatives" pages — research-stage intent, distinct from the
// singular switcher pages above. Added October 2026 for the three
// highest-interest competitors.
import { HONEYBOOK_ALTERNATIVES } from './alternative/honeybook-alternatives'
import { BONSAI_ALTERNATIVES } from './alternative/bonsai-alternatives'
import { DUBSADO_ALTERNATIVES } from './alternative/dubsado-alternatives'

export type { AlternativePageConfig }

/** All /alternatives/<slug> pages. */
export const ALTERNATIVE_PAGES: AlternativePageConfig[] = [
  BEST_FREE_CRM_ALTERNATIVES,
  HONEYBOOK_ALTERNATIVES,
  BONSAI_ALTERNATIVES,
  DUBSADO_ALTERNATIVES,
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
