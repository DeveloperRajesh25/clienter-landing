// ─────────────────────────────────────────────────────────────────────────────
// <!-- LEGAL REVIEW REQUIRED — draft copy, not final -->
//
// Engineer-drafted, not lawyer-reviewed. See DPDP_COMPLIANCE_PROGRESS.md.
//
// This page previously claimed the site used "only strictly necessary cookies"
// and therefore showed no consent banner — while Google Analytics loaded
// unconditionally in the root layout. Both statements were false. It now
// describes what actually happens.
//
// RULE: this table is the site's cookie inventory. If you add a script, an
// embed, or a vendor that sets storage, it goes in this table in the same
// commit — and if it isn't strictly necessary, it goes behind ConsentManager.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { CookiePreferencesButton } from '@/components/marketing/CookiePreferencesButton'
import { pageMetadata, CONTACT, SITE_NAME, LEGAL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description:
    'Every cookie and storage key Clienter uses, what it does, how long it lasts, and how to control it. Strictly necessary cookies only, unless you opt in to analytics — which is off by default and reversible at any time.',
  path: '/cookies',
})

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated={LEGAL.effectiveDate}
      path="/cookies"
      intro={`This policy lists every cookie and similar storage technology ${SITE_NAME} uses, what each one is for, and how long it lasts. Read it alongside our Privacy Notice, which explains the wider picture of what data we hold and what you can ask us to do about it.`}
    >
      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files a website stores on your device. Similar technologies include{' '}
        <code>localStorage</code> and <code>sessionStorage</code>, which work much the same way. They
        let a site remember something between page loads — that you are signed in, or what you chose
        last time — so you do not have to set it up again on every page.
      </p>

      <h2>2. Our approach</h2>
      <p>
        We split storage into two groups, and we treat them very differently.
      </p>
      <ul>
        <li>
          <strong>Strictly necessary</strong> — the service genuinely cannot work without these.
          They keep you signed in, protect our forms from abuse, and let our host serve the site.
          These are always on and do not require consent under applicable law.
        </li>
        <li>
          <strong>Analytics</strong> — helpful to us, not necessary to you. This means Google
          Analytics, and <strong>it is off unless you explicitly turn it on</strong>. Until you
          accept, no request is sent to Google and no analytics cookie is created.
        </li>
      </ul>
      <p>
        We use <strong>no advertising cookies</strong> and <strong>no cross-site tracking</strong>.
        We do not sell or share data with ad networks or data brokers, and we do not build profiles
        about you.
      </p>

      <h2>3. The full list</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cookie / storage</th>
              <th>Purpose</th>
              <th>Category</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Authentication / session (Supabase)</td>
              <td>Keeps you securely signed in to the app and maintains your session.</td>
              <td>Strictly necessary</td>
              <td>Session &amp; up to ~30 days</td>
            </tr>
            <tr>
              <td>Security &amp; abuse prevention</td>
              <td>Protects forms and the service against spam, fraud, and abuse, including rate-limiting.</td>
              <td>Strictly necessary</td>
              <td>Short-lived</td>
            </tr>
            <tr>
              <td>Hosting / load balancing (Vercel)</td>
              <td>Set by our infrastructure provider to route requests and serve the site reliably.</td>
              <td>Strictly necessary</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>
                <code>clienter.consent.v1</code>
              </td>
              <td>
                Remembers whether you accepted or declined analytics. It is browser{' '}
                <code>localStorage</code>, not a cookie, and is never sent to us or to anyone else —
                it exists purely so we honour your choice instead of asking on every page.
              </td>
              <td>Strictly necessary</td>
              <td>Until you clear your browser data</td>
            </tr>
            <tr>
              <td>Preferences</td>
              <td>Remembers basic interface preferences so the app behaves the way you expect.</td>
              <td>Functional</td>
              <td>Up to 12 months</td>
            </tr>
            <tr>
              <td>
                <code>_ga</code>, <code>_ga_&lt;id&gt;</code> (Google Analytics 4)
              </td>
              <td>
                Counts visits and page views so we can see which pages are useful.{' '}
                <strong>Only set if you accept analytics.</strong> Runs with IP anonymisation, and
                with Google&rsquo;s advertising and personalisation signals switched off — we never
                grant those.
              </td>
              <td>Analytics — opt-in</td>
              <td>Up to 24 months (data deleted by Google after 14 months)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. Your choice, and changing it</h2>
      <p>
        The first time you visit, we ask whether you are happy with analytics. Declining takes one
        click and is exactly as easy as accepting — and it is what happens by default if you close
        the banner or simply ignore it. We do not treat scrolling, clicking around, or continuing to
        browse as agreement.
      </p>
      <p>
        You can change your answer whenever you like, in either direction:
      </p>
      <p>
        <CookiePreferencesButton className="focus-ember rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-stone-50" />
      </p>
      <p>
        The same control sits in the footer of every page on this site. If you withdraw consent after
        having given it, we tell Google to stop, delete the analytics cookies already on your device,
        and reload the page without the tag — withdrawal takes effect immediately, not just for
        future visits.
      </p>

      <h2>5. Third parties</h2>
      <p>
        Some strictly necessary cookies come from the providers that run {SITE_NAME} — Supabase for
        authentication and Vercel for hosting. When you pay, Razorpay (or PayPal, for international
        customers) may set cookies on their own secure checkout to process the transaction. If you
        accept analytics, Google sets the cookies listed above.
      </p>
      <p>
        One more thing worth naming, because it is a third-party request even though it sets no
        cookie: the Product Hunt badge in our footer is an image served from Product Hunt&rsquo;s
        servers, so loading any page reveals your IP address and the page URL to them — as an
        externally-hosted image always does. It does not track you across other sites.
      </p>
      <p>
        Each of these providers handles data under its own privacy and cookie policy. The full list
        of who receives what is in section 5 of our <Link href="/privacy">Privacy Notice</Link>.
      </p>

      <h2>6. Controlling cookies in your browser</h2>
      <p>Independently of our banner, you are always in control. You can:</p>
      <ul>
        <li>Delete existing cookies and clear site data from your browser settings at any time.</li>
        <li>
          Block or limit cookies through your browser — see the help pages for{' '}
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>,{' '}
          <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a>,{' '}
          <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>, or{' '}
          <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>.
        </li>
      </ul>
      <p>
        Note that blocking strictly necessary cookies will break core functionality — you will not be
        able to stay signed in. Clearing site data also erases your saved consent choice, so we will
        ask again on your next visit.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        If we add or remove anything that sets storage, we update this table in the same change and
        revise the &ldquo;Last updated&rdquo; date above. Anything new that is not strictly necessary
        goes behind the consent banner before it ever runs.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about cookies? Email{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a>, read our{' '}
        <Link href="/privacy">Privacy Notice</Link>, or use our{' '}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  )
}
