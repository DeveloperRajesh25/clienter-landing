import type { GlossaryTermConfig } from './glossary/_type'
import { CRM_TERMS } from './glossary/terms-crm'
import { FINANCE_TERMS } from './glossary/terms-finance'
import { PROJECT_TERMS } from './glossary/terms-projects'
import { DOCS_TERMS } from './glossary/terms-docs'
import { AGENCY_TERMS } from './glossary/terms-agency'

export type { GlossaryTermConfig }

/** All glossary terms, flattened from the category files and sorted A→Z. */
export const GLOSSARY_TERMS: GlossaryTermConfig[] = [
  ...CRM_TERMS,
  ...FINANCE_TERMS,
  ...PROJECT_TERMS,
  ...DOCS_TERMS,
  ...AGENCY_TERMS,
].sort((a, b) => a.term.localeCompare(b.term))

export const GLOSSARY_BY_SLUG: Record<string, GlossaryTermConfig> = Object.fromEntries(
  GLOSSARY_TERMS.map((t) => [t.slug, t]),
)

/** Distinct categories in a stable display order. */
export const GLOSSARY_CATEGORIES = [
  'CRM & Sales',
  'Invoicing & Finance',
  'Projects & Delivery',
  'Proposals & Documents',
  'Agency & Growth',
] as const
