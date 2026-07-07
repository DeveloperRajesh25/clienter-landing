/**
 * Schema.org structured-data builders (JSON-LD). Rendered via <JsonLd>.
 *
 * These power rich results in Google: the Organization/WebSite graph helps the
 * brand panel and sitelinks search box; SoftwareApplication can surface price +
 * rating; FAQPage can show expandable Q&A directly in search results.
 */
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SOCIAL_URLS,
  CONTACT,
  FOUNDER,
} from '@/lib/site'

const LOGO = `${SITE_URL}/logo.png`

/** The brand entity. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO,
    description: SITE_DESCRIPTION,
    email: CONTACT.general,
    founder: { '@type': 'Person', name: FOUNDER.name },
    sameAs: SOCIAL_URLS,
    areaServed: 'IN',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: CONTACT.support,
      availableLanguage: ['English', 'Hindi'],
    },
  }
}

/** The site itself (enables the sitelinks search box). */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  }
}

/** The product — with the three-tier pricing offers. */
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    operatingSystem: 'Web, iOS, Android',
    applicationCategory: 'BusinessApplication',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: LOGO,
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'INR',
        description: 'Up to 5 clients and 10 projects, full leads & CRM pipeline, free forever.',
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        price: '199',
        priceCurrency: 'INR',
        description:
          'Launch offer (was ₹499): up to 30 clients, 60 projects, and 5 team members per month.',
      },
      {
        '@type': 'Offer',
        name: 'Ultra',
        price: '799',
        priceCurrency: 'INR',
        description:
          'Launch offer (was ₹1,999): unlimited clients, projects, and team members per month.',
      },
    ],
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/** Q&A rich result. Pass plain-text questions/answers. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/** Breadcrumb trail. Pass [{ name, path }] from home to the current page. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path === '/' ? SITE_URL : `${SITE_URL}${c.path}`,
    })),
  }
}
