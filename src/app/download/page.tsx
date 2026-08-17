import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Smartphone,
  Download,
  ShieldCheck,
  Bell,
  Wifi,
  FolderDown,
  CheckCircle2,
  AlertTriangle,
  Apple,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { PageShell } from '@/components/marketing/PageShell'
import { PageHero } from '@/components/marketing/PageHero'
import { CtaSection } from '@/components/marketing/CtaSection'
import { Reveal } from '@/components/landing/Reveal'
import { JsonLd } from '@/components/marketing/JsonLd'
import { pageMetadata, APP_URL } from '@/lib/site'
import { breadcrumbSchema, mobileApplicationSchema } from '@/lib/structured-data'

/**
 * Release facts for the current APK in public/clienter.apk.
 *
 * Keep these three in sync with android/app/build.gradle in the clienter-mobile
 * repo whenever a new build is published — they drive the download card, the
 * structured data, and what users see before they tap.
 */
const APP_VERSION = '1.2.0'
const APP_SIZE = '4.6 MB'
const APP_UPDATED = 'August 2026'

export const metadata: Metadata = pageMetadata({
  title: 'Download the Clienter Android App',
  description:
    'Get Clienter on your Android phone. Manage clients, projects, invoices and payments from a real app — free download, no Play Store needed.',
  path: '/download',
  keywords: [
    'Clienter Android app',
    'client management app download',
    'freelance CRM app India',
    'invoice app APK',
  ],
})

// ── Install steps ───────────────────────────────────────────────────────────
// Written against the dialogs Android actually shows. Users WILL hit the
// unknown-sources and Play Protect warnings, and a download page that doesn't
// mention them reads as sketchy — naming them up front is what makes the
// process feel normal instead of alarming.
const STEPS: { title: string; body: string }[] = [
  {
    title: 'Tap Download APK',
    body: 'Chrome will warn that "this type of file can harm your device". That message appears for every APK on the internet. Choose Download anyway.',
  },
  {
    title: 'Open the downloaded file',
    body: 'Tap the download notification, or find clienter.apk in Files → Downloads and tap it.',
  },
  {
    title: 'Allow installs from this source',
    body: 'Android will say your phone "isn\'t allowed to install unknown apps from this source". Tap Settings, turn on Allow from this source, then press back.',
  },
  {
    title: 'Install',
    body: 'Tap Install. If Play Protect offers to scan the app or says it wasn\'t recognised, choose Install anyway — it flags everything that doesn\'t come from the Play Store.',
  },
  {
    title: 'Sign in',
    body: 'Open Clienter and sign in with the same email or Google account you already use. All your data is exactly where you left it.',
  },
]

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Smartphone,
    title: 'Built for your phone',
    body: 'Bottom navigation, swipeable pipelines and full-screen chat — the whole workspace, sized for one hand.',
  },
  {
    icon: FolderDown,
    title: 'Real file downloads',
    body: 'Invoices, contracts and project files save straight into your Downloads folder like any other app.',
  },
  {
    icon: ShieldCheck,
    title: 'Same secure account',
    body: 'The app is a signed, secure wrapper around app.clienter.co.in. Nothing is stored on the phone — your data lives in your Clienter account.',
  },
]

// Stated plainly so nobody installs expecting something the build doesn't do.
const NOTES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Wifi,
    title: 'Needs an internet connection',
    body: 'The app works online only. There is no offline mode yet.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    body: "Meeting reminders, payments and messages reach your lock screen, even when Clienter is closed. You'll be asked to allow notifications the first time you sign in.",
  },
  {
    icon: Download,
    title: 'Updates are manual',
    body: 'There is no auto-update yet. When a new version ships, come back here and install it over the old one — nothing is lost.',
  },
]

export default function DownloadPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Download', path: '/download' },
          ]),
          mobileApplicationSchema({ version: APP_VERSION, fileSize: APP_SIZE }),
        ]}
      />

      <PageHero
        eyebrow={
          <>
            <Smartphone className="h-4 w-4" /> Android app
          </>
        }
        title="Clienter, now on your"
        highlight="phone"
        subtitle="Run your whole client business from your pocket — leads, projects, invoices and payments. Free download, straight from us."
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Download', href: '/download' },
        ]}
      >
        <div className="flex flex-col items-center gap-4">
          <a
            href="/clienter.apk"
            download
            className="press inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gray-900/10 transition-transform hover:-translate-y-0.5 hover:bg-gray-800"
          >
            <Download className="h-5 w-5" />
            Download APK
          </a>

          <p className="text-sm text-gray-500">
            Version {APP_VERSION} · {APP_SIZE} · Android 7.0 and newer
          </p>
          <p className="text-xs text-gray-400">Updated {APP_UPDATED}</p>
        </div>
      </PageHero>

      {/* Why it isn't on the Play Store — answered before anyone has to wonder. */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-orange-200/70 bg-white/70 p-7 shadow-sm backdrop-blur-sm sm:p-9">
              <h2 className="font-display text-xl font-bold text-gray-900">
                Why is this a direct download?
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                We&apos;re publishing to the Play Store soon. Rather than make you wait for review,
                you can install the app today straight from us. It&apos;s the same Clienter you
                already use — a signed, secure app around{' '}
                <span className="font-medium text-gray-900">app.clienter.co.in</span>, with the
                same account, the same data and the same privacy rules.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Install guide */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900">
              How to install it
            </h2>
            <p className="mt-3 text-gray-600">
              Takes about a minute. Android shows a couple of security warnings along the way —
              that&apos;s normal for any app installed outside the Play Store, and here&apos;s
              exactly what they look like.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <li className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-gray-900">
              What you get
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-gray-200/70 bg-white/60 p-6 backdrop-blur-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900">
              Good to know
            </h2>
          </Reveal>

          <div className="mt-8 space-y-3">
            {NOTES.map((n, i) => (
              <Reveal key={n.title} delay={i * 60}>
                <div className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur-sm">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                    <n.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{n.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{n.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-amber-200/70 bg-amber-50/50 p-7 sm:p-9">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-gray-900">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                If something goes wrong
              </h2>

              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-gray-900">
                    &ldquo;Install blocked&rdquo; or &ldquo;unknown apps&rdquo;
                  </dt>
                  <dd className="mt-1 leading-relaxed text-gray-600">
                    Step 3 above — turn on <em>Allow from this source</em> for whichever app you
                    opened the file with (usually Chrome or Files).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">&ldquo;App not installed&rdquo;</dt>
                  <dd className="mt-1 leading-relaxed text-gray-600">
                    You likely have an older Clienter build installed. Uninstall it and try again —
                    your data is safe in your account, not on the phone.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Blank or stuck screen on launch</dt>
                  <dd className="mt-1 leading-relaxed text-gray-600">
                    Check your internet connection and reopen the app. If it persists, email{' '}
                    <a
                      href="mailto:support@clienter.co.in"
                      className="font-medium text-orange-600 hover:underline"
                    >
                      support@clienter.co.in
                    </a>
                    .
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* iPhone */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-start gap-4 rounded-3xl border border-gray-200/70 bg-white/60 p-7 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <Apple className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-gray-900">On an iPhone?</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    There&apos;s no iOS app yet. Open Clienter in Safari and tap{' '}
                    <em>Share → Add to Home Screen</em> — you&apos;ll get an app icon and a
                    full-screen experience.
                  </p>
                </div>
              </div>
              <a
                href={APP_URL}
                className="press inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                Open Clienter
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Second download prompt for anyone who read to the bottom first. */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="rounded-3xl border border-gray-200/70 bg-white/70 p-9 shadow-sm backdrop-blur-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <CheckCircle2 className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-gray-900">
                Ready to install?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-gray-600">
                Free, {APP_SIZE}, and works with the account you already have.
              </p>
              <a
                href="/clienter.apk"
                download
                className="press mt-7 inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gray-900/10 transition-transform hover:-translate-y-0.5 hover:bg-gray-800"
              >
                <Download className="h-5 w-5" />
                Download APK
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Don&apos;t have an account yet?{' '}
                <Link
                  href={`${APP_URL}/signup`}
                  className="font-medium text-orange-600 hover:underline"
                >
                  Create one free
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </PageShell>
  )
}
