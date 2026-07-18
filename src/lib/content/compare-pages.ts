import type { ComparePageConfig } from './compare/_type'
import { CLIENTER_VS_HUBSPOT } from './compare/clienter-vs-hubspot'
import { CLIENTER_VS_ZOHO_CRM } from './compare/clienter-vs-zoho-crm'
import { CLIENTER_VS_BITRIX24 } from './compare/clienter-vs-bitrix24'
import { CLIENTER_VS_FRESHSALES } from './compare/clienter-vs-freshsales'
import { CLIENTER_VS_MONDAY } from './compare/clienter-vs-monday'
import { CLIENTER_VS_CLICKUP } from './compare/clienter-vs-clickup'
import { CLIENTER_VS_ASANA } from './compare/clienter-vs-asana'
import { CLIENTER_VS_TRELLO } from './compare/clienter-vs-trello'
import { CLIENTER_VS_NOTION } from './compare/clienter-vs-notion'
import { CLIENTER_VS_BONSAI } from './compare/clienter-vs-bonsai'
import { CLIENTER_VS_HONEYBOOK } from './compare/clienter-vs-honeybook'
import { CLIENTER_VS_DUBSADO } from './compare/clienter-vs-dubsado'
import { CLIENTER_VS_PLUTIO } from './compare/clienter-vs-plutio'
import { CLIENTER_VS_MOXIE } from './compare/clienter-vs-moxie'
import { CLIENTER_VS_HARVEST } from './compare/clienter-vs-harvest'
import { CLIENTER_VS_ZOHO_BOOKS } from './compare/clienter-vs-zoho-books'
import { CLIENTER_VS_QUICKBOOKS } from './compare/clienter-vs-quickbooks'
import { CLIENTER_VS_FRESHBOOKS } from './compare/clienter-vs-freshbooks'
import { CLIENTER_VS_REFRENS } from './compare/clienter-vs-refrens'
import { CLIENTER_VS_VYAPAR } from './compare/clienter-vs-vyapar'
import { CLIENTER_VS_TASKIP } from './compare/clienter-vs-taskip'
import { CLIENTER_VS_JETPACK_CRM } from './compare/clienter-vs-jetpack-crm'
import { CLIENTER_VS_PIPEDRIVE } from './compare/clienter-vs-pipedrive'
import { CLIENTER_VS_SPREADSHEETS } from './compare/clienter-vs-spreadsheets'

export type { ComparePageConfig }

/** All /compare/clienter-vs-<x> pages. Order drives the /compare hub listing. */
export const COMPARE_PAGES: ComparePageConfig[] = [
  CLIENTER_VS_SPREADSHEETS,
  CLIENTER_VS_HUBSPOT,
  CLIENTER_VS_ZOHO_CRM,
  CLIENTER_VS_PIPEDRIVE,
  CLIENTER_VS_FRESHSALES,
  CLIENTER_VS_BITRIX24,
  CLIENTER_VS_JETPACK_CRM,
  CLIENTER_VS_MONDAY,
  CLIENTER_VS_CLICKUP,
  CLIENTER_VS_ASANA,
  CLIENTER_VS_TRELLO,
  CLIENTER_VS_NOTION,
  CLIENTER_VS_BONSAI,
  CLIENTER_VS_HONEYBOOK,
  CLIENTER_VS_DUBSADO,
  CLIENTER_VS_PLUTIO,
  CLIENTER_VS_MOXIE,
  CLIENTER_VS_TASKIP,
  CLIENTER_VS_HARVEST,
  CLIENTER_VS_ZOHO_BOOKS,
  CLIENTER_VS_QUICKBOOKS,
  CLIENTER_VS_FRESHBOOKS,
  CLIENTER_VS_REFRENS,
  CLIENTER_VS_VYAPAR,
]

export const COMPARE_BY_SLUG: Record<string, ComparePageConfig> = Object.fromEntries(
  COMPARE_PAGES.map((p) => [p.slug, p]),
)
