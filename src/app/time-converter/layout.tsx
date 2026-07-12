import type { Metadata } from 'next'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, SITE_URL, SITE_NAME } from '@/lib/site'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'

/**
 * Server layout for the Time Converter. The tool itself is a full-screen client
 * component and can't export metadata, so the SEO surface — title, description,
 * canonical, OG, and structured data — lives here, wrapping it.
 */
export const metadata: Metadata = pageMetadata({
  title: 'Time Zone Converter — Convert Time Across Any Timezone',
  description:
    'A free online time zone converter. Convert time instantly between IST, UTC, EST, PST, GMT and 200+ timezones worldwide. Pick any two zones, set a time, and see it side by side.',
  path: '/time-converter',
  keywords: [
    'time zone converter',
    'time converter',
    'convert time between time zones',
    'IST to EST converter',
    'UTC to IST converter',
    'world clock converter',
    'timezone converter online',
    'meeting time planner',
  ],
})

const TC_FAQS = [
  {
    q: 'How do I convert time between two timezones?',
    a: 'Pick a timezone on each side of the converter, then set or edit the time on either side. The other side updates instantly to show the matching local time, along with the offset and how many hours ahead or behind the zones are.',
  },
  {
    q: 'Is this time zone converter free?',
    a: 'Yes, the Clienter time zone converter is completely free to use, with no sign-up. It supports IST, UTC, EST, PST, GMT and over 200 timezones worldwide, and it updates live to the current time.',
  },
  {
    q: 'Does it handle daylight saving time (DST)?',
    a: 'Yes. Conversions use each region’s current UTC offset, including daylight saving time where it applies, so the times shown reflect the real local clock in each zone.',
  },
]

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Time Zone Converter',
  url: `${SITE_URL}/time-converter`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description:
    'Free online time zone converter — convert time instantly between IST, UTC, EST, PST, GMT and 200+ timezones worldwide.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  publisher: { '@id': `${SITE_URL}/#organization` },
  isPartOf: { '@id': `${SITE_URL}/#website` },
  provider: { '@type': 'Organization', name: SITE_NAME },
}

export default function TimeConverterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webAppSchema,
          faqSchema(TC_FAQS),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Time Converter', path: '/time-converter' },
          ]),
        ]}
      />
      {children}
    </>
  )
}
