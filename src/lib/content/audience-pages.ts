import type { AudiencePageConfig } from './audience/_type'
import { FREELANCERS } from './audience/freelancers'
import { INDIAN_FREELANCERS } from './audience/indian-freelancers'
import { AGENCIES } from './audience/agencies'
import { WEB_DEVELOPERS } from './audience/web-developers'
import { WEB_DEVELOPMENT_AGENCIES } from './audience/web-development-agencies'
import { WEB_DESIGN_AGENCIES } from './audience/web-design-agencies'
import { DESIGN_AGENCIES } from './audience/design-agencies'
import { SOFTWARE_AGENCIES } from './audience/software-agencies'
import { DIGITAL_MARKETING_AGENCIES } from './audience/digital-marketing-agencies'
import { MARKETING_AGENCIES } from './audience/marketing-agencies'
import { SEO_AGENCIES } from './audience/seo-agencies'
// ── Web & software build niche (November 2026 refocus) ───────────────────────
import { WORDPRESS_DEVELOPERS } from './audience/wordpress-developers'
import { SHOPIFY_DEVELOPERS } from './audience/shopify-developers'
import { ECOMMERCE_DEVELOPMENT_AGENCIES } from './audience/ecommerce-development-agencies'
import { APP_DEVELOPMENT_AGENCIES } from './audience/app-development-agencies'
import { WEBSITE_MAINTENANCE_AGENCIES } from './audience/website-maintenance-agencies'
import { SAAS_DEVELOPMENT_AGENCIES } from './audience/saas-development-agencies'

export type { AudiencePageConfig }

/**
 * All `/for/<audience>` pages. Order here drives the "Use cases" footer column
 * and the /for hub listing. Each config lives in its own file under
 * ./audience/ and is written specifically for that audience.
 *
 * NICHE SCOPE (November 2026). Clienter is positioned for the people who build
 * and maintain websites and software for clients: freelance developers and
 * designers, web and web-design studios, software and app shops, and the
 * marketing/SEO agencies that ship sites alongside campaigns. Pages aimed at
 * unrelated service niches — photographers, videographers, consultants,
 * copywriters, social media managers, generic small businesses — were retired
 * in this pass and 301-redirect to the nearest in-niche page (see
 * next.config.js). Their config files are kept in ./audience/ so restoring one
 * is an import plus a line here, but DO NOT add new out-of-niche audiences: the
 * whole ranking strategy is depth in one vertical, not breadth across many.
 */
export const AUDIENCE_PAGES: AudiencePageConfig[] = [
  // Core
  FREELANCERS,
  INDIAN_FREELANCERS,
  AGENCIES,
  // Web build
  WEB_DEVELOPERS,
  WEB_DEVELOPMENT_AGENCIES,
  WEB_DESIGN_AGENCIES,
  WORDPRESS_DEVELOPERS,
  SHOPIFY_DEVELOPERS,
  ECOMMERCE_DEVELOPMENT_AGENCIES,
  WEBSITE_MAINTENANCE_AGENCIES,
  // Software build
  SOFTWARE_AGENCIES,
  APP_DEVELOPMENT_AGENCIES,
  SAAS_DEVELOPMENT_AGENCIES,
  // Adjacent studios that ship websites
  DESIGN_AGENCIES,
  DIGITAL_MARKETING_AGENCIES,
  MARKETING_AGENCIES,
  SEO_AGENCIES,
]

export const AUDIENCE_BY_SLUG: Record<string, AudiencePageConfig> = Object.fromEntries(
  AUDIENCE_PAGES.map((p) => [p.slug, p]),
)
