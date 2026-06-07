import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'The terms and conditions that govern your use of Clienter — accounts, subscriptions and billing, acceptable use, your data, and our responsibilities.',
  path: '/terms',
})

// NOTE(owner): Good-faith template aligned to the product. Not legal advice —
// have a lawyer review before launch, especially the governing-law clause.
export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="5 June 2026"
      path="/terms"
      intro={`These Terms of Service ("Terms") govern your access to and use of ${SITE_NAME}. By creating an account or using the service, you agree to these Terms.`}
    >
      <h2>1. The service</h2>
      <p>
        {SITE_NAME} is a software platform that helps freelancers and agencies manage clients,
        projects, invoices, payments, meetings, and team members. We may add, change, or remove
        features over time to improve the service.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>You must provide accurate information and keep it up to date.</li>
        <li>You are responsible for keeping your password secure and for all activity under your account.</li>
        <li>You must be at least 18 years old and able to enter into a binding contract.</li>
        <li>Notify us promptly at <a href={`mailto:${CONTACT.support}`}>{CONTACT.support}</a> of any unauthorized use.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for any unlawful, fraudulent, or harmful purpose.</li>
        <li>Attempt to gain unauthorized access to the service, other accounts, or our systems.</li>
        <li>Upload malware or interfere with the integrity or performance of the service.</li>
        <li>Reverse engineer, resell, or sublicense the service except as expressly permitted.</li>
        <li>Use the service to send spam or to store data you do not have the right to store.</li>
      </ul>

      <h2>4. Plans, billing, and cancellation</h2>
      <ul>
        <li>{SITE_NAME} offers a free plan and paid plans (Pro and Ultra) billed monthly in Indian Rupees.</li>
        <li>Paid subscriptions are processed by Razorpay and renew automatically each month until cancelled.</li>
        <li>You can upgrade, downgrade, or cancel at any time from your billing settings. Cancellation stops future charges; you retain access until the end of the current billing period.</li>
        <li>
          Charges already made are non-refundable. Please review our{' '}
          <Link href="/refund">Refund &amp; Cancellation Policy</Link> for full details.
        </li>
        <li>We may change our prices with reasonable advance notice; changes do not affect the period you have already paid for.</li>
      </ul>

      <h2>5. Your data and content</h2>
      <p>
        You retain all ownership of the data and content you put into {SITE_NAME} (your clients,
        projects, invoices, and files). You grant us a limited license to host and process that data
        solely to provide the service to you. You can export your data at any time. We handle your
        data as described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The {SITE_NAME} software, brand, and design are owned by us and protected by applicable
        intellectual-property laws. These Terms do not grant you any right to our trademarks or
        branding except as needed to use the service normally.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        The service integrates with third parties such as Razorpay, Supabase, and Resend. Your use
        of those services may be subject to their own terms. We are not responsible for third-party
        services we do not control.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The service is provided “as is” and “as available.” While we work hard to keep it reliable
        and secure, we do not warrant that it will be uninterrupted or error-free. You are
        responsible for keeping your own backups of critical data via the export tools provided.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE_NAME} and its founder will not be liable for
        indirect, incidental, or consequential damages, or for loss of profits, data, or business,
        arising from your use of the service. Our total liability for any claim is limited to the
        amount you paid us in the three months before the claim.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the service at any time. We may suspend or terminate your access if you
        breach these Terms or use the service in a way that harms others or us. On termination, you
        may export your data for a reasonable period before it is deleted.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes will be subject to the exclusive
        jurisdiction of the competent courts in India.
      </p>

      <h2>12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material changes, we will update
        the “Last updated” date and, where appropriate, notify you. Continued use of the service
        after changes means you accept the updated Terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href={`mailto:${CONTACT.legal}`}>{CONTACT.legal}</a> or visit our{' '}
        <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  )
}
