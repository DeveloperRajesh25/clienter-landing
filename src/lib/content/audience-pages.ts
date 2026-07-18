import type { AudiencePageConfig } from './audience/_type'
import { FREELANCERS } from './audience/freelancers'
import { WEB_DEVELOPERS } from './audience/web-developers'
import { WEB_DESIGN_AGENCIES } from './audience/web-design-agencies'
import { DIGITAL_MARKETING_AGENCIES } from './audience/digital-marketing-agencies'
import { GRAPHIC_DESIGNERS } from './audience/graphic-designers'
import { CONTENT_WRITERS } from './audience/content-writers'
import { VIDEO_EDITORS } from './audience/video-editors'
import { PHOTOGRAPHERS } from './audience/photographers'
import { CONSULTANTS } from './audience/consultants'
import { SOFTWARE_AGENCIES } from './audience/software-agencies'
import { SEO_AGENCIES } from './audience/seo-agencies'
import { SOCIAL_MEDIA_MANAGERS } from './audience/social-media-managers'
import { INDIAN_FREELANCERS } from './audience/indian-freelancers'

export type { AudiencePageConfig }

/**
 * All `/for/<audience>` pages. Order here drives the "Use cases" footer column
 * and the /for hub listing. Each config lives in its own file under
 * ./audience/ and is written specifically for that audience.
 */
export const AUDIENCE_PAGES: AudiencePageConfig[] = [
  FREELANCERS,
  INDIAN_FREELANCERS,
  WEB_DEVELOPERS,
  WEB_DESIGN_AGENCIES,
  DIGITAL_MARKETING_AGENCIES,
  SEO_AGENCIES,
  GRAPHIC_DESIGNERS,
  CONTENT_WRITERS,
  VIDEO_EDITORS,
  PHOTOGRAPHERS,
  SOCIAL_MEDIA_MANAGERS,
  CONSULTANTS,
  SOFTWARE_AGENCIES,
]

export const AUDIENCE_BY_SLUG: Record<string, AudiencePageConfig> = Object.fromEntries(
  AUDIENCE_PAGES.map((p) => [p.slug, p]),
)
