import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Clienter collects, uses, stores, and protects your personal and business data. Read our privacy practices, your rights, and how to contact us.',
  path: '/privacy',
})

// NOTE(owner): This is a clear, good-faith policy template tailored to how the
// app actually works (Supabase, Razorpay, Resend). It is not legal advice —
// have it reviewed by a lawyer before relying on it for compliance.
export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="5 June 2026"
      path="/privacy"
      intro={`This Privacy Policy explains how ${SITE_NAME} ("we", "us", "our") collects, uses, and protects your information when you use our website and application. We respect your privacy and are committed to protecting your personal data.`}
    >
      <h2>1. Information we collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> your name, email address, and password (stored
          securely, never in plain text) when you create an account or join our waitlist.
        </li>
        <li>
          <strong>Business data you enter:</strong> details about your clients, projects, invoices,
          payments, meetings, and team members. This data belongs to you.
        </li>
        <li>
          <strong>Payment information:</strong> when you subscribe to a paid plan, payments are
          processed by our payment partner (Razorpay). We do not store your full card details on our
          servers.
        </li>
        <li>
          <strong>Technical information:</strong> standard log data such as IP address, browser
          type, and pages visited, used to keep the service secure and reliable.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, operate, and maintain the {SITE_NAME} service.</li>
        <li>Create and manage your account and process your subscription.</li>
        <li>Send transactional emails (waitlist confirmations, account notices, invoices to your team members).</li>
        <li>Respond to your enquiries and provide customer support.</li>
        <li>Detect, prevent, and address fraud, abuse, and security issues.</li>
        <li>Improve our product and understand how it is used (in aggregate).</li>
      </ul>
      <p>We do <strong>not</strong> sell your personal data or your clients’ data to anyone.</p>

      <h2>3. Service providers</h2>
      <p>We rely on a small number of trusted providers to run {SITE_NAME}:</p>
      <ul>
        <li><strong>Supabase</strong> — secure database and authentication hosting for your data.</li>
        <li><strong>Razorpay</strong> — payment processing for paid subscriptions.</li>
        <li><strong>Resend</strong> — delivery of transactional emails.</li>
        <li><strong>Vercel</strong> — application hosting and content delivery.</li>
      </ul>
      <p>
        Each provider only receives the data necessary to perform its function and is bound by its
        own privacy and security obligations.
      </p>

      <h2>4. Data storage and security</h2>
      <p>
        Your data is isolated per account using row-level security and is encrypted in transit
        (HTTPS/TLS). We apply industry-standard safeguards to protect against unauthorized access,
        loss, or misuse. No method of transmission or storage is 100% secure, but we work
        continuously to protect your information. Learn more on our{' '}
        <Link href="/security">security page</Link>.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We use essential cookies and similar technologies to keep you signed in and to remember your
        preferences. We do not use intrusive advertising trackers.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Consistent with applicable law (including India’s Digital Personal Data Protection Act,
        2023), you may:
      </p>
      <ul>
        <li>Access and export the data in your account at any time.</li>
        <li>Correct inaccurate personal information.</li>
        <li>Request deletion of your account and associated personal data.</li>
        <li>Withdraw consent for non-essential processing.</li>
      </ul>
      <p>
        To exercise any of these rights, email us at{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a>.
      </p>

      <h2>7. Data retention</h2>
      <p>
        We retain your data for as long as your account is active. If you delete your account, we
        delete or anonymize your personal data within a reasonable period, except where we are
        required to retain it for legal or accounting purposes.
      </p>

      <h2>8. Children</h2>
      <p>
        {SITE_NAME} is intended for use by professionals and is not directed at anyone under the age
        of 18. We do not knowingly collect personal data from children.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material changes, we will
        update the “Last updated” date above and, where appropriate, notify you by email.
      </p>

      <h2>10. Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle your data, contact us at{' '}
        <a href={`mailto:${CONTACT.privacy}`}>{CONTACT.privacy}</a> or through our{' '}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  )
}
