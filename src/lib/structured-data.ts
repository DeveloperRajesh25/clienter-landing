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
import { PLAN_PRICES } from '@/lib/pricing'

/** Top tier — drives the AggregateOffer highPrice. */
const ULTRA = PLAN_PRICES[PLAN_PRICES.length - 1]

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
    // Sold worldwide. 'IN' here told Google the brand serves one country, which
    // suppressed the entity for exactly the US/UK/AU/CA queries we want.
    areaServed: 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: CONTACT.support,
      availableLanguage: ['English'],
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
    inLanguage: 'en',
    // Sitelinks search box → our blog search (which reads the `q` query param).
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/** The product — with the three-tier pricing offers. */
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    // 'Web, Android' — not 'Web, iOS, Android'. There is a real Android build
    // (see /download) but no iOS app; claiming one we don't ship is exactly the
    // kind of mismatch that gets rich results suppressed.
    operatingSystem: 'Web, Android',
    applicationCategory: 'BusinessApplication',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    installUrl: `${SITE_URL}/download`,
    image: LOGO,
    // Both billing regions are declared: USD (PayPal, rest of world) and INR
    // (Razorpay, India). Google picks the offer matching the searcher's region,
    // so omitting USD meant international searchers saw a rupee price or none.
    // Prices here must match PLAN_PRICES in lib/pricing.ts.
    offers: PLAN_PRICES.flatMap((plan) => [
      {
        '@type': 'Offer',
        name: plan.name,
        price: String(plan.usd),
        priceCurrency: 'USD',
        description: plan.offerDescription,
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: plan.name,
        price: String(plan.inr),
        priceCurrency: 'INR',
        eligibleRegion: { '@type': 'Country', name: 'India' },
        description: plan.offerDescription,
        availability: 'https://schema.org/InStock',
      },
    ]),
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/**
 * The sideloaded Android APK offered on /download.
 *
 * Separate from softwareApplicationSchema() (which describes the SaaS product
 * and its pricing tiers) because this one describes a downloadable binary —
 * different downloadUrl, fileSize and softwareVersion. Keep the arguments in
 * step with the release constants in src/app/download/page.tsx.
 */
export function mobileApplicationSchema(opts: { version: string; fileSize: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: `${SITE_NAME} for Android`,
    operatingSystem: 'Android 7.0+',
    applicationCategory: 'BusinessApplication',
    description:
      'Manage clients, leads, projects, invoices and payments from your Android phone with the Clienter app.',
    softwareVersion: opts.version,
    fileSize: opts.fileSize,
    downloadUrl: `${SITE_URL}/clienter.apk`,
    installUrl: `${SITE_URL}/download`,
    url: `${SITE_URL}/download`,
    image: LOGO,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
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

/**
 * Blog-post Article schema. datePublished/dateModified are ISO dates; author is
 * a plain name. Publisher resolves to our Organization node.
 */
export function articleSchema(opts: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  authorName: string
  image?: string
}) {
  const url = `${SITE_URL}${opts.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: opts.image ?? LOGO,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Person', name: opts.authorName },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en',
  }
}

/**
 * Product + AggregateOffer for the pricing page. Two AggregateOffers, one per
 * billing region, because a single node can only carry one priceCurrency and
 * the product is sold in USD (PayPal) and INR (Razorpay). aggregateRating is
 * deliberately omitted — we do not fabricate ratings without real reviews.
 */
export function pricingProductSchema() {
  const aggregate = (currency: 'USD' | 'INR', high: string) => ({
    '@type': 'AggregateOffer',
    priceCurrency: currency,
    lowPrice: '0',
    highPrice: high,
    offerCount: PLAN_PRICES.length,
    offers: PLAN_PRICES.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: String(currency === 'USD' ? p.usd : p.inr),
      priceCurrency: currency,
    })),
  })
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE_NAME} — Client Management Software`,
    description: SITE_DESCRIPTION,
    brand: { '@type': 'Brand', name: SITE_NAME },
    image: LOGO,
    offers: [aggregate('USD', String(ULTRA.usd)), aggregate('INR', String(ULTRA.inr))],
  }
}

/**
 * ItemList for hub/index pages (blog index, tools hub, glossary hub, comparisons
 * hub). Helps Google understand the page as a curated list of links.
 */
export function itemListSchema(items: { name: string; path: string }[], listName?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(listName ? { name: listName } : {}),
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: `${SITE_URL}${it.path}`,
    })),
  }
}
