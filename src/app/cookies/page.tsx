import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME, LEGAL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description:
    'What cookies and similar technologies Clienter uses, why we use them, how long they last, and how you can control or remove them. We use only strictly necessary cookies — no advertising or cross-site tracking.',
  path: '/cookies',
})

// NOTE(owner): Keep this in sync with what the site/app actually sets. Today we
// use only strictly necessary cookies (auth/session, security, hosting). If you
// add analytics or any non-essential cookie, you MUST update the table below and
// add a consent banner before enabling it. Not legal advice — review before launch.
export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated={LEGAL.effectiveDate}
      path="/cookies"
      intro={`This Cookie Policy explains how ${SITE_NAME} uses cookies and similar technologies on our website and application. It should be read together with our Privacy Policy.`}
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. Similar
        technologies include <code>localStorage</code>, <code>sessionStorage</code>, and session
        tokens. They let a site remember your actions and preferences (such as staying signed in) so
        you don’t have to set them up again on every page or visit.
      </p>

      <h2>2. How we use cookies</h2>
      <p>
        We use cookies and similar storage only to make {SITE_NAME} work, keep it secure, and
        remember your preferences. We currently use <strong>only strictly necessary cookies</strong>.
        We do <strong>not</strong> use advertising cookies, and we do not track you across other
        websites.
      </p>

      <h2>3. Cookies we use</h2>
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
              <td>Authentication / session</td>
              <td>Keeps you securely signed in to the app and maintains your session.</td>
              <td>Strictly necessary</td>
              <td>Session &amp; up to ~30 days</td>
            </tr>
            <tr>
              <td>Security &amp; abuse prevention</td>
              <td>Helps protect forms and the service against spam, fraud, and abuse (including rate-limiting).</td>
              <td>Strictly necessary</td>
              <td>Short-lived</td>
            </tr>
            <tr>
              <td>Hosting / load balancing</td>
              <td>Set by our infrastructure provider (Vercel) to route requests and serve the site reliably.</td>
              <td>Strictly necessary</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>Preferences</td>
              <td>Remembers basic preferences so the interface behaves the way you expect.</td>
              <td>Functional</td>
              <td>Up to 12 months</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>
                Not currently used. If we add privacy-respecting analytics in future, we will list it
                here and ask for consent where the law requires.
              </td>
              <td>Analytics (not in use)</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Because we use only strictly necessary cookies today, we do not show a cookie consent banner.
        Strictly necessary cookies do not require consent under applicable law, but you can still
        control them through your browser (see below).
      </p>

      <h2>4. Third-party cookies</h2>
      <p>
        Some essential cookies are set by the trusted providers that run {SITE_NAME} — for example,
        Supabase (authentication) and Vercel (hosting). When you make a payment, Razorpay may set its
        own cookies on its secure checkout to process your transaction. These providers handle that
        data under their own privacy and cookie policies. We do not use third-party advertising or
        social-media tracking cookies.
      </p>

      <h2>5. How to control cookies</h2>
      <p>You are always in control. You can:</p>
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
        Please note that blocking strictly necessary cookies will break core functionality — for
        example, you may not be able to stay signed in to the app.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy as the service evolves — for example, if we introduce
        analytics. When we do, we will update the “Last updated” date above and, where required, seek
        your consent.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about our use of cookies? Email{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a>, see our{' '}
        <Link href="/privacy">Privacy Policy</Link>, or visit our{' '}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  )
}
