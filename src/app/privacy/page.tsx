import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME, LEGAL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Clienter collects, uses, stores, shares, and protects your personal and business data — including cookies, data retention, international transfers, your rights under India’s DPDP Act, and how to reach our Grievance Officer.',
  path: '/privacy',
})

// NOTE(owner): This is a clear, good-faith policy written to match how the
// product actually works (Supabase, Razorpay, Resend, Vercel) and to align with
// India's Digital Personal Data Protection Act, 2023 and the IT Rules. It is
// NOT legal advice — have a lawyer review it before relying on it for
// compliance, and keep the disclosed practices in sync with the live product.
export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={LEGAL.effectiveDate}
      path="/privacy"
      intro={`This Privacy Policy explains how ${SITE_NAME} ("we", "us", "our") collects, uses, shares, and protects your information when you visit our website (clienter.co.in), join our waitlist, contact us, or use the ${SITE_NAME} application. We respect your privacy and only collect what we genuinely need to run the service.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {SITE_NAME} is operated by {LEGAL.operator}, {LEGAL.entityType} based in {LEGAL.governingCountry}.
        For the purposes of India’s Digital Personal Data Protection Act, 2023 (the “DPDP Act”), we
        act as the <strong>Data Fiduciary</strong> for the personal data described in this policy.
        You can reach us about privacy at any time at{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a>, or contact our Grievance Officer
        (see section 14).
      </p>
      <p>
        This policy covers both the public marketing website and the {SITE_NAME} application at
        app.clienter.co.in. Where we act on behalf of a customer’s own account — for example, the
        client and project records a freelancer stores about their own customers — that customer is
        the Data Fiduciary for those records and we process them as their service provider (Data
        Processor) under our <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>2. Information we collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Waitlist information:</strong> when you join our waitlist, we collect your email
          address and (optionally) your name so we can confirm your spot and notify you when you’re
          approved.
        </li>
        <li>
          <strong>Contact / support messages:</strong> when you use our contact form or email us, we
          collect your name, email address, subject, and the contents of your message so we can
          respond. Messages are delivered to our support inbox by email.
        </li>
        <li>
          <strong>Account information:</strong> when you create an account in the app, we collect
          your name, email address, and a password (stored only as a secure cryptographic hash —
          never in plain text).
        </li>
        <li>
          <strong>Business data you enter:</strong> details you choose to store about your clients,
          projects, invoices, payments, meetings, files, and team members. This data belongs to you;
          you control what you put in.
        </li>
        <li>
          <strong>Payment information:</strong> when you subscribe to a paid plan, your payment is
          processed by our payment partner, Razorpay. We receive limited details such as a
          transaction ID, plan, amount, and payment status — we do <strong>not</strong> receive or
          store your full card number, CVV, UPI PIN, or net-banking credentials.
        </li>
        <li>
          <strong>Technical &amp; usage information:</strong> standard log data such as your IP
          address, browser type, device and operating system, referring page, and the pages or
          actions you take. We use your IP address for security and rate-limiting (to deter spam and
          abuse of our public forms).
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> small files and storage used to keep
          the service working and remember preferences — see section 6 and our full{' '}
          <Link href="/cookies">Cookie Policy</Link>.
        </li>
      </ul>
      <p>
        We do not intentionally collect special-category or sensitive personal data (such as health,
        religion, or biometric data) and ask that you not store such data in free-text fields.
      </p>

      <h2>3. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, operate, maintain, and improve the {SITE_NAME} service.</li>
        <li>Create and manage your account and process your subscription and renewals.</li>
        <li>
          Send transactional and service messages — waitlist confirmations, approval and login
          details, billing receipts, security notices, and replies to your enquiries.
        </li>
        <li>Provide customer support and respond to your requests.</li>
        <li>Detect, prevent, and address fraud, spam, abuse, and security incidents.</li>
        <li>Understand, in aggregate, how the product is used so we can make it better.</li>
        <li>Comply with our legal, tax, and accounting obligations.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell your personal data or your clients’ data, and we do not use
        it for third-party advertising. We do not send marketing emails to your waitlist address
        beyond what is needed to onboard you, unless you separately opt in.
      </p>

      <h2>4. Legal bases and consent</h2>
      <p>
        Under the DPDP Act and other applicable laws, we process your personal data on the following
        bases:
      </p>
      <ul>
        <li>
          <strong>Your consent</strong> — for example, when you submit the waitlist or contact form,
          or create an account. You can withdraw consent for non-essential processing at any time
          (see section 9), though this may limit your ability to use parts of the service.
        </li>
        <li>
          <strong>Performance of a contract</strong> — to deliver the service you’ve signed up for
          and to process your payments.
        </li>
        <li>
          <strong>Legitimate uses and legal obligations</strong> — to keep the service secure,
          prevent abuse, and meet legal, tax, and accounting requirements.
        </li>
      </ul>

      <h2>5. Service providers and sub-processors</h2>
      <p>We rely on a small number of trusted, reputable providers to run {SITE_NAME}:</p>
      <ul>
        <li><strong>Supabase</strong> — secure database hosting and authentication for your account and data.</li>
        <li><strong>Razorpay</strong> — payment processing for paid subscriptions (a PCI-DSS compliant provider).</li>
        <li><strong>Resend</strong> — delivery of transactional and contact emails.</li>
        <li><strong>Vercel</strong> — application hosting and content delivery.</li>
      </ul>
      <p>
        Each provider only receives the data necessary to perform its function, acts on our
        instructions, and is bound by its own privacy and security obligations. We do not authorize
        them to use your data for their own purposes.
      </p>

      <h2>6. Cookies and similar technologies</h2>
      <p>
        We use cookies and similar browser storage to keep you signed in, keep the service secure,
        and remember your preferences. We currently use only <strong>strictly necessary</strong>{' '}
        cookies — we do <strong>not</strong> use advertising or cross-site tracking cookies. If we
        introduce analytics in the future, we will update our policy and, where the law requires,
        ask for your consent first. For the full list of cookies, what they do, and how to control
        them, see our <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>7. Data storage, international transfers, and security</h2>
      <p>
        Your data is isolated per account using row-level security at the database layer and is
        encrypted in transit (HTTPS/TLS). We apply industry-standard safeguards to protect against
        unauthorized access, loss, or misuse, and we restrict access to personal data to those who
        need it to operate the service.
      </p>
      <p>
        Some of our providers (such as Supabase, Vercel, and Resend) may store or process data on
        servers located outside {LEGAL.governingCountry}. Where data is transferred internationally,
        we rely on providers that offer appropriate contractual and technical safeguards, and we
        only transfer data to countries not restricted under applicable Indian law. No method of
        transmission or storage is 100% secure, but we work continuously to protect your information.
        Learn more on our <Link href="/security">security page</Link>.
      </p>

      <h2>8. Administrative access</h2>
      <p>
        {SITE_NAME} is built with Row-Level Security (RLS) enforced at the database level, ensuring
        your data is fully isolated from other organisations on the platform — no other agency or
        team can access your data. As the platform operator, {SITE_NAME}’s team may have
        administrative access to account and usage data strictly for purposes of providing support,
        resolving technical issues, and ensuring platform integrity. This is standard practice
        across SaaS platforms and we do not access, browse, or use your business data (clients,
        projects, invoices, messages) for any other purpose. Sensitive credentials such as Google
        Calendar tokens are encrypted at rest using AES-256-GCM, meaning even platform
        administrators cannot read them. We do not sell, share, or monetise your data in any form.
      </p>

      <h2>9. Data retention</h2>
      <p>We keep personal data only for as long as we need it:</p>
      <ul>
        <li>
          <strong>Account &amp; business data</strong> — for as long as your account is active. If
          you delete your account, we delete or anonymize the associated personal data within a
          reasonable period (typically within 90 days), except where we must retain it for legal,
          tax, or accounting reasons.
        </li>
        <li>
          <strong>Waitlist data</strong> — until you’re onboarded or you ask us to remove you,
          whichever comes first.
        </li>
        <li>
          <strong>Contact / support messages</strong> — for as long as needed to handle your request
          and keep a reasonable record of support history.
        </li>
        <li>
          <strong>Billing records</strong> — retained as required by Indian tax and accounting law.
        </li>
        <li>
          <strong>Security &amp; rate-limit logs</strong> — kept only briefly and pruned
          automatically.
        </li>
      </ul>

      <h2>10. Your rights</h2>
      <p>
        Consistent with applicable law, including the DPDP Act, you have the right to:
      </p>
      <ul>
        <li>Access and obtain a copy of the personal data we hold about you, and export the data in your account at any time.</li>
        <li>Correct or update inaccurate or incomplete personal information.</li>
        <li>Request erasure of your account and associated personal data.</li>
        <li>Withdraw consent for non-essential processing.</li>
        <li>Nominate another individual to exercise your rights in the event of death or incapacity.</li>
        <li>Raise a grievance and have it addressed (see section 13).</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a>. We may need to verify your
        identity before acting on a request, and we will respond within the timeframe required by
        law.
      </p>

      <h2>11. Data breach notification</h2>
      <p>
        We maintain safeguards to prevent personal data breaches. In the unlikely event of a breach
        that affects your personal data, we will notify the Data Protection Board of India and
        affected users as required by the DPDP Act and applicable law, and take prompt steps to
        contain and remediate the incident.
      </p>

      <h2>12. Children</h2>
      <p>
        {SITE_NAME} is intended for use by professionals and is <strong>not</strong> directed at
        anyone under the age of 18. We do not knowingly collect personal data from children. If you
        believe a child has provided us personal data, contact us and we will delete it.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material changes, we will
        update the “Last updated” date above and, where appropriate, notify you by email or an
        in-app notice. Your continued use of the service after an update means you accept the revised
        policy.
      </p>

      <h2>14. Grievance Officer &amp; contact</h2>
      <p>
        In line with the DPDP Act and the Information Technology Act and rules, you can contact our
        Grievance Officer for any questions, concerns, or complaints about your personal data or this
        policy:
      </p>
      <ul>
        <li><strong>Grievance Officer:</strong> {LEGAL.grievanceOfficer.name}</li>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>
        </li>
      </ul>
      <p>
        We aim to acknowledge grievances promptly and resolve them within the timeframe required by
        law. For general privacy questions you can also reach us at{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a> or through our{' '}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  )
}
