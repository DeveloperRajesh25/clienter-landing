import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { JsonLd } from '@/components/marketing/JsonLd'
import { SmoothScroll } from '@/components/SmoothScroll'
import { ConsentManager } from '@/components/marketing/ConsentManager'
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
} from '@/lib/structured-data'
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Display/heading typeface — gives the marketing surfaces a premium, modern feel.
const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

// Editorial serif used for single accent words in landing headlines ("chaos").
const serifDisplay = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif-display',
  display: 'swap',
})

export const metadata: Metadata = {
  // Absolute base for every canonical/OG URL across the site.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    // Sub-pages set just their title; this appends the brand.
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'client management software',
    'freelancer CRM India',
    'invoice software for freelancers',
    'agency management software',
    'project management for freelancers',
    'GST invoice software',
    'freelance business tools India',
    'Clienter',
  ],
  authors: [{ name: 'Rajesh Talagana' }],
  creator: 'Rajesh Talagana',
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
    languages: { 'en-IN': '/', 'x-default': '/' },
  },
  category: 'business software',
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    creator: '@talaganaRajesh',
  },
  // TODO(owner): paste the verification token from Google Search Console here.
  // verification: { google: 'your-google-site-verification-token' },
}

export const viewport: Viewport = {
  themeColor: '#ea580c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${display.variable} ${serifDisplay.variable}`}>
      <head>
        {/* NOTE: Google Analytics used to load here, unconditionally, on every
            page. It is non-essential and sets `_ga` cookies, so under India's
            DPDP Act it needs prior, opt-in consent. It now loads ONLY from
            <ConsentManager /> below, and only after the visitor accepts. Do not
            reintroduce a tag in <head> — that would fire before any choice is
            made and contradict /privacy and /cookies. */}
        {/* Site-wide structured data: brand graph + product. Page-level schema
            (FAQ, breadcrumbs) is added per page. */}
        <JsonLd
          data={[organizationSchema(), websiteSchema(), softwareApplicationSchema()]}
        />
      </head>
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
        {/* Consent gate + the only loader for non-essential trackers. Mounted
            outside SmoothScroll so the banner is never affected by Lenis. */}
        <ConsentManager />
      </body>
    </html>
  )
}
