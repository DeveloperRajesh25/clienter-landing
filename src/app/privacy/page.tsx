// ─────────────────────────────────────────────────────────────────────────────
// <!-- LEGAL REVIEW REQUIRED — draft copy, not final -->
//
// This Privacy Notice was drafted by an engineer to describe, accurately and in
// plain language, what the product actually does — it is NOT legal advice and
// has NOT been reviewed by a lawyer. Do not treat it as authoritative or rely on
// it for DPDP compliance until a qualified Indian data-protection practitioner
// has reviewed it. Tracked in DPDP_COMPLIANCE_PROGRESS.md at the repo root.
//
// Two standing rules for whoever edits this next:
//  1. This notice must describe the product AS BUILT. The previous version said
//     "we currently use only strictly necessary cookies" while Google Analytics
//     ran unconditionally on every page. Misdescribing processing is itself a
//     notice failure under the DPDP Act. If you add a vendor, a cookie, or a new
//     use of personal data, this page changes in the same commit.
//  2. Sections 3, 5 and 6 cover BOTH this marketing site and the app at
//     app.clienter.co.in, which lives in a different repo. Rows marked "app" are
//     described from product knowledge, not from code in this repo — re-verify
//     them against the app repo before publishing.
// ─────────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME, LEGAL, APP_URL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Notice',
  description:
    'In plain language: what personal data Clienter collects, why we collect it, how long we keep it, every third party it reaches, and how to exercise your rights under India’s DPDP Act — including access, correction, erasure, nomination, and withdrawing consent.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Notice"
      updated={LEGAL.privacyUpdatedDate}
      path="/privacy"
      intro={`This notice explains, in plain language, what personal data ${SITE_NAME} collects about you, why we need it, how long we keep it, who else sees it, and what you can ask us to do about it. It is written to meet the notice requirements of India’s Digital Personal Data Protection Act, 2023. It is a separate document from our Terms of Service — nothing here is buried in a contract.`}
    >
      <h2>1. Who we are, and who to contact</h2>
      <p>
        {SITE_NAME} is operated by {LEGAL.operator}, {LEGAL.entityType} based in{' '}
        {LEGAL.governingCountry}. Under the DPDP Act we are the <strong>Data Fiduciary</strong> for
        the personal data described below — meaning we decide why and how it is processed, and we
        are answerable to you for it. In the language of the Act, you are the{' '}
        <strong>Data Principal</strong>.
      </p>
      <p>
        One named person handles every privacy question, request, and complaint:
      </p>
      <ul>
        <li>
          <strong>{LEGAL.grievanceOfficer.title}:</strong> {LEGAL.grievanceOfficer.name}
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>
        </li>
        <li>
          <strong>Covers:</strong> this website (clienter.co.in) and the {SITE_NAME} application at{' '}
          {APP_URL.replace('https://', '')}.
        </li>
      </ul>
      <p>
        You can write to that address about anything in this notice. You do not need to explain why
        you are asking, and you do not need a lawyer to ask.
      </p>

      <h2>2. When we are not the Data Fiduciary</h2>
      <p>
        There is an important distinction to be clear about. {SITE_NAME} is a tool freelancers and
        agencies use to manage <em>their own</em> clients. When one of our customers stores details
        about their client in {SITE_NAME}, <strong>that customer</strong> is the Data Fiduciary for
        those records — they decided to collect them, and they are responsible for having the right
        to do so. We process that data on their instructions as their <strong>Data Processor</strong>,
        under our <Link href="/terms">Terms of Service</Link>.
      </p>
      <p>
        Practically: if you are a client of a {SITE_NAME} customer and want your details corrected or
        deleted, ask the freelancer or agency you hired — they control that record. If you contact us
        directly we will pass your request on to them and tell you we have done so, but we cannot
        change another business&rsquo;s records for them.
      </p>

      <h2>3. What we collect, and exactly why</h2>
      <p>
        We collect the minimum we need to run the service. Every item below has a specific purpose —
        we do not collect data speculatively in case it is useful later.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>What we collect</th>
              <th>Why we need it</th>
              <th>Where</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email address, and your name if you give it</td>
              <td>To create your account, sign you in, send you receipts and service notices, and reply when you contact us.</td>
              <td>Site &amp; app</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>To authenticate you. Stored only as a one-way cryptographic hash — we cannot read your password, and neither can anyone who obtained the database.</td>
              <td>App</td>
            </tr>
            <tr>
              <td>Contact-form messages (name, email, subject, message body)</td>
              <td>To answer your question. Nothing more — we do not add you to a marketing list from a support message.</td>
              <td>Site</td>
            </tr>
            <tr>
              <td>Business records you enter: your clients, projects, invoices, payments, meetings, files, team members</td>
              <td>To provide the product you are paying for. This is your data; you decide what goes in and you can export it at any time. See section 2 on who is responsible for it.</td>
              <td>App</td>
            </tr>
            <tr>
              <td>Subscription and payment status — plan, amount, transaction ID, success/failure</td>
              <td>To give you access to the plan you bought, issue receipts, and meet tax and accounting obligations. We never receive or store your full card number, CVV, UPI PIN, or net-banking credentials — those go directly to the payment provider.</td>
              <td>App</td>
            </tr>
            <tr>
              <td>IP address</td>
              <td>To rate-limit our public forms so they cannot be used for spam or abuse, and to investigate security incidents. It is not used to profile you or to guess who you are.</td>
              <td>Site &amp; app</td>
            </tr>
            <tr>
              <td>Standard server logs — browser, device, operating system, referring page, pages visited, timestamps</td>
              <td>To keep the service running, diagnose errors, and detect attacks. Generated automatically by our hosting provider, as they are by every website.</td>
              <td>Site &amp; app</td>
            </tr>
            <tr>
              <td>Google Calendar / Meet tokens, if you connect that integration</td>
              <td>Only to create and read the calendar events you ask {SITE_NAME} to manage. Optional — the product works without it. Encrypted at rest with AES-256-GCM, so even our own administrators cannot read them.</td>
              <td>App</td>
            </tr>
            <tr>
              <td>
                Analytics about how pages are used — <strong>only if you agree</strong>
              </td>
              <td>To see which pages people find useful so we can improve them. This is the one thing on this page that is optional and off by default. See section 6.</td>
              <td>Site</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We do not knowingly collect sensitive categories of data — health, religion, caste, sexual
        orientation, biometrics — and we ask that you do not type such details into free-text fields.
        We do not build advertising profiles, and we do not sell your data or your clients&rsquo; data
        to anyone, in any form.
      </p>

      <h2>4. The legal basis we rely on</h2>
      <p>Under the DPDP Act we process personal data on one of two footings:</p>
      <ul>
        <li>
          <strong>Your consent</strong> — given freely, specifically, and for a purpose we told you
          about first. This covers joining the waitlist, submitting the contact form, creating an
          account, connecting Google Calendar, and analytics. You can withdraw it (section 8).
        </li>
        <li>
          <strong>Certain legitimate uses</strong> recognised by the Act — including keeping the
          service secure and preventing abuse, and complying with legal, tax, and accounting duties
          that apply to us regardless of what either of us would prefer.
        </li>
      </ul>
      <p>
        Where we rely on consent, refusing it will sometimes mean part of the product cannot work —
        we cannot email you an invoice without your email address. We will always tell you what
        breaks rather than quietly degrading the service.
      </p>

      <h2>5. Everyone your data reaches</h2>
      <p>
        We use a small number of established providers to actually run {SITE_NAME}. Each one receives
        only what it needs for its job, acts on our instructions, and is not permitted to use your
        data for its own purposes. This is the complete list — there is no unlisted analytics vendor,
        ad network, or data broker.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Who</th>
              <th>What they do for us</th>
              <th>What they see</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Supabase</strong></td>
              <td>Database, authentication, and file storage — the system of record for the whole product.</td>
              <td>Your account details and the business records you enter.</td>
            </tr>
            <tr>
              <td><strong>Vercel</strong></td>
              <td>Hosting and content delivery for this website and the app.</td>
              <td>Request metadata: IP address, browser, and pages requested.</td>
            </tr>
            <tr>
              <td><strong>Razorpay</strong></td>
              <td>Processing subscription payments for customers paying in Indian Rupees. PCI-DSS compliant.</td>
              <td>Your name, email, payment amount, and the card/UPI details you enter directly into their checkout — which never pass through us.</td>
            </tr>
            <tr>
              <td><strong>PayPal</strong></td>
              <td>Processing payments for international customers, where Razorpay is not available. Integration in progress — not yet live.</td>
              <td>Same as Razorpay: your billing identifiers and the payment details you enter into their checkout.</td>
            </tr>
            <tr>
              <td><strong>Resend</strong></td>
              <td>Delivering transactional email — sign-in and account emails, receipts, security notices, replies.</td>
              <td>Your email address and the contents of the message we send you.</td>
            </tr>
            <tr>
              <td><strong>Web3Forms</strong></td>
              <td>Relaying submissions from the contact form on this website to our support inbox.</td>
              <td>The name, email, subject, and message you typed into that form.</td>
            </tr>
            <tr>
              <td><strong>Google</strong></td>
              <td>
                Two separate, unrelated things. (a) Calendar &amp; Meet, only if you connect the
                integration — Google sees the events {SITE_NAME} creates on your behalf. (b) Google
                Analytics on this marketing website, <strong>only if you accept it</strong> — Google
                then sees your IP address, the pages you view, and an analytics identifier. Decline,
                and no request is made to Google at all.
              </td>
              <td>Calendar events (opt-in), or page-view data (opt-in).</td>
            </tr>
            <tr>
              <td><strong>Upstash</strong></td>
              <td>Rate-limiting and caching in the application, to keep the service available and resist abuse.</td>
              <td>Short-lived technical keys derived from IP address or account ID. No account content.</td>
            </tr>
            <tr>
              <td><strong>Product Hunt</strong></td>
              <td>The launch badge image in our footer is served from Product Hunt&rsquo;s servers.</td>
              <td>Loading the image reveals your IP address and the page you are on to Product Hunt, as any externally-hosted image would. It sets no cookie for us and does not track you across sites.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We may also disclose personal data where we are legally required to — a valid court order,
        a lawful request from an authority with jurisdiction, or to establish or defend a legal
        claim. We will not hand over data on an informal request, and where we are permitted to tell
        you, we will.
      </p>
      <p>
        <strong>Where your data is stored.</strong> Several of these providers operate outside{' '}
        {LEGAL.governingCountry}, so your data may be stored or processed abroad. The DPDP Act permits
        transfers except to countries the Central Government has specifically restricted; we do not
        transfer to any restricted country, and we choose providers that offer contractual and
        technical safeguards. Your data is isolated per account by row-level security at the database
        layer and encrypted in transit with TLS. More detail on our{' '}
        <Link href="/security">security page</Link>.
      </p>
      <p>
        <strong>Google user data.</strong> If you connect the Google Calendar / Meet integration, the
        only Google user data we access is the calendar events {SITE_NAME} creates, reads, updates, or
        deletes on your explicit instruction — nothing else in your Google account. {SITE_NAME}&rsquo;s
        use and transfer of information received from Google APIs to any other app will adhere to the{' '}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. We never use this data for advertising, and we never
        transfer it to any other party except the sub-processors listed above, strictly to run the
        service on your behalf.
      </p>

      <h2>6. Cookies, analytics, and your choice</h2>
      <p>
        <strong>Strictly necessary cookies are always on.</strong> They keep you signed in, protect
        forms from abuse, and let our host route your requests. The service cannot work without them,
        and they do not require consent.
      </p>
      <p>
        <strong>Google Analytics is off until you switch it on.</strong> The first time you visit,
        we ask. Declining is a single click, and it is the default if you close the banner or ignore
        it — we do not treat silence, scrolling, or continued browsing as agreement. Until you
        actively accept, no request is made to Google and no analytics cookie is set.
      </p>
      <p>
        <strong>You can change your mind at any time.</strong> &ldquo;Cookie preferences&rdquo; in the
        footer of every page reopens that choice. If you withdraw consent after granting it, we tell
        Google to stop, delete the analytics cookies already on your device, and reload the page
        without the tag.
      </p>
      <p>
        We use no advertising cookies and no cross-site tracking, and we never have. The full
        inventory — every cookie, what it does, how long it lasts — is in our{' '}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>7. How long we keep things</h2>
      <p>
        The DPDP Act requires us to erase personal data once the purpose we collected it for is
        served. In practice:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Kept for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account and business records</td>
              <td>As long as your account is open. After you delete it, we delete or irreversibly anonymise the data within <strong>90 days</strong>, except records we are legally required to keep.</td>
            </tr>
            <tr>
              <td>Billing and tax records</td>
              <td><strong>Up to 8 years</strong>, because Indian tax and accounting law requires it. This is the one category we cannot delete on request, and it holds transaction records, not your business content.</td>
            </tr>
            <tr>
              <td>Contact and support messages</td>
              <td><strong>24 months</strong> from our last exchange, so we have the history if you write again.</td>
            </tr>
            <tr>
              <td>Waitlist entries</td>
              <td>Until you are onboarded or ask to be removed. The waitlist is no longer used for new signups — {SITE_NAME} is open to everyone — and remaining entries are being cleared.</td>
            </tr>
            <tr>
              <td>Rate-limit and security logs</td>
              <td>Pruned automatically, typically within <strong>24 hours</strong> to a few days.</td>
            </tr>
            <tr>
              <td>Server logs</td>
              <td>Retained briefly by our hosting provider under their standard retention, then discarded.</td>
            </tr>
            <tr>
              <td>Analytics data (only if you opted in)</td>
              <td><strong>14 months</strong>, then deleted by Google automatically.</td>
            </tr>
            <tr>
              <td>Record of your consent choice</td>
              <td>Stored in your own browser (not a cookie, and never sent to us) until you clear your browser data. Clearing it simply means we ask again.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>8. Your rights, and how to use them</h2>
      <p>
        The DPDP Act gives you the following rights over your personal data. All of them are
        exercised the same way: email{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a> and say what you want. There is no
        form to fill in and no charge.
      </p>
      <ul>
        <li>
          <strong>Right to access.</strong> Ask what personal data we hold about you, what we are
          doing with it, and which of the third parties in section 5 have received it. Account
          holders can also export their data from the app at any time without asking us.
        </li>
        <li>
          <strong>Right to correction and completion.</strong> If something we hold is wrong,
          outdated, or incomplete, tell us and we will fix it. Most account details you can edit
          yourself in the app immediately.
        </li>
        <li>
          <strong>Right to erasure.</strong> Ask us to delete your personal data. We will, unless a
          law requires us to keep a specific record (see the billing row in section 7) — in which
          case we will tell you exactly what we kept and why.
        </li>
        <li>
          <strong>Right to nominate.</strong> You can nominate another person to exercise these
          rights on your behalf if you die or become incapacitated. Email us the nominee&rsquo;s name
          and contact details and we will record it against your account.
        </li>
        <li>
          <strong>Right to withdraw consent.</strong> Wherever we rely on your consent, you can take
          it back, and it must be as easy to withdraw as it was to give. For analytics, use{' '}
          &ldquo;Cookie preferences&rdquo; in the footer. For anything else, email us. Withdrawal
          stops future processing; it does not undo processing that was lawful when it happened.
        </li>
        <li>
          <strong>Right to grievance redressal.</strong> If you are unhappy with how we handled any
          of the above, complain to our {LEGAL.grievanceOfficer.title} at{' '}
          <a href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>. You
          must be able to use this route before escalating.
        </li>
      </ul>
      <p>
        <strong>What to expect.</strong> We acknowledge requests within{' '}
        <strong>72 hours</strong> and aim to resolve them within <strong>30 days</strong>. If a
        request is complex and will take longer, we will tell you before the 30 days are up and
        explain why. We may need to verify your identity first — usually by replying from the email
        address on the account — so that nobody can obtain or delete your data by pretending to be
        you.
      </p>
      <p>
        <strong>Your duties.</strong> The Act also asks Data Principals not to file false or
        frivolous complaints and not to impersonate someone else when making a request.
      </p>
      <p>
        <strong>If we do not resolve it.</strong> If you are not satisfied with our response, you can
        complain to the <strong>Data Protection Board of India</strong>. Exercising a right, or
        complaining about how we handled one, will never affect your account or the service you
        receive.
      </p>

      <h2>9. Security and data breaches</h2>
      <p>
        We protect personal data with row-level isolation at the database layer, TLS in transit,
        hashed passwords, encrypted integration tokens, and access restricted to those who need it to
        operate the service. No system is perfectly secure, and we would rather say that plainly than
        promise otherwise.
      </p>
      <p>
        If a breach affects your personal data, the DPDP Act requires us to notify both the Data
        Protection Board of India and every affected person. We will do so without undue delay, and
        we will tell you what happened, what data was involved, and what you should do — not a vague
        reassurance.
      </p>

      <h2>10. Administrative access</h2>
      <p>
        Our team can access account and usage data for support, debugging, and platform integrity —
        the same as any SaaS operator. We do not browse your business records for any other reason,
        we do not use them to train models, and we do not monetise them. Row-level security means no
        other customer can ever see your data, and encrypted credentials such as Google Calendar
        tokens are unreadable even to us.
      </p>

      <h2>11. Children</h2>
      <p>
        {SITE_NAME} is for working professionals and is not directed at anyone under 18. Under the
        DPDP Act, processing a child&rsquo;s data requires verifiable parental consent, and tracking
        or behavioural advertising directed at children is prohibited outright — we do neither. If
        you believe someone under 18 has given us personal data, email{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a> and we will delete it.
      </p>

      <h2>12. Changes to this notice</h2>
      <p>
        When we change how we handle personal data, we update this notice in the same change — not
        afterwards. Material changes update the &ldquo;Last updated&rdquo; date above, and where the
        change affects something you consented to, we will ask again rather than assume the old
        answer still stands.
      </p>

      <h2>13. Contact</h2>
      <p>
        For anything in this notice — a question, a request, or a complaint — email{' '}
        <a href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>, which
        reaches {LEGAL.grievanceOfficer.name}, our {LEGAL.grievanceOfficer.title}. For anything else,
        our <Link href="/contact">contact page</Link> has the general address.
      </p>
    </LegalLayout>
  )
}
