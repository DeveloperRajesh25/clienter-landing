import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME, LEGAL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'The terms and conditions that govern your use of Clienter — accounts, early access, subscriptions and billing, acceptable use, your data, warranties, liability, indemnity, and governing law.',
  path: '/terms',
})

// NOTE(owner): Good-faith template aligned to the product and Indian law. Not
// legal advice — have a lawyer review before launch, especially the liability,
// indemnity, and governing-law clauses (no city is named because we publish an
// email-only contact; add a jurisdiction city once you have a business address).
export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated={LEGAL.effectiveDate}
      path="/terms"
      intro={`These Terms of Service ("Terms") govern your access to and use of ${SITE_NAME}, operated by ${LEGAL.operator} (${LEGAL.entityType}). By creating an account, joining our waitlist, or using the service, you agree to these Terms. If you do not agree, please do not use the service.`}
    >
      <h2>1. The service</h2>
      <p>
        {SITE_NAME} is a software platform that helps freelancers and agencies manage clients,
        projects, invoices, payments, meetings, and team members. We may add, change, or remove
        features over time to improve the service.
      </p>

      <h2>2. Eligibility and your account</h2>
      <ul>
        <li>You must be at least 18 years old and able to enter into a binding contract.</li>
        <li>You must provide accurate information and keep it up to date.</li>
        <li>You are responsible for keeping your password secure and for all activity under your account.</li>
        <li>You are responsible for your team members’ use of the workspaces you create for them.</li>
        <li>Notify us promptly at <a href={`mailto:${CONTACT.support}`}>{CONTACT.support}</a> of any unauthorized use or security issue.</li>
      </ul>

      <h2>3. Early access and beta features</h2>
      <p>
        {SITE_NAME} is offered on an early-access basis and may include features labelled “beta” or
        “preview.” These are provided as-is, may change or be discontinued, and may be less stable
        than generally available features. Early-access invitations and promotional offers (such as
        free Pro time for early waitlist members) are discretionary and may be limited or withdrawn.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the service for any unlawful, fraudulent, or harmful purpose.</li>
        <li>Attempt to gain unauthorized access to the service, other accounts, or our systems.</li>
        <li>Upload malware or interfere with the integrity or performance of the service.</li>
        <li>Reverse engineer, copy, resell, or sublicense the service except as expressly permitted.</li>
        <li>Use the service to send spam, or to store or process data you do not have the right to store or process.</li>
        <li>Use automated means to scrape, overload, or abuse the service or our public forms.</li>
      </ul>

      <h2>5. Plans, billing, and cancellation</h2>
      <ul>
        <li>{SITE_NAME} offers a free plan and paid plans (Pro and Ultra) billed monthly in Indian Rupees.</li>
        <li>Paid subscriptions are processed by Razorpay and renew automatically each month until cancelled.</li>
        <li>You can upgrade, downgrade, or cancel at any time from your billing settings. Cancellation stops future charges; you retain access until the end of the current billing period.</li>
        <li>Applicable taxes (such as GST) may be added to the listed prices.</li>
        <li>
          Charges already made are non-refundable. Please review our{' '}
          <Link href="/refund">Refund &amp; Cancellation Policy</Link> for full details.
        </li>
        <li>We may change our prices with reasonable advance notice; changes do not affect the period you have already paid for.</li>
      </ul>

      <h2>6. Your data and content</h2>
      <p>
        You retain all ownership of the data and content you put into {SITE_NAME} (your clients,
        projects, invoices, and files). You grant us a limited, worldwide licence to host, process,
        and display that data solely to provide and support the service to you. You are responsible
        for the lawfulness of the data you store and for having any consents required from the people
        whose information you enter. You can export your data at any time. We handle personal data as
        described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      {/* LEGAL REVIEW REQUIRED — draft copy, not final. Added on the DPDP
          compliance branch; the processor/controller split and the breach-
          notification wording in particular need a practitioner's eye. */}
      <h2>6A. Data protection</h2>
      <p>
        Both of us have obligations under India’s Digital Personal Data Protection Act, 2023 (the
        “DPDP Act”), and they are different obligations.
      </p>
      <ul>
        <li>
          <strong>For your own account data</strong> — your name, email, and billing details — we are
          the Data Fiduciary. We handle it as described in our{' '}
          <Link href="/privacy">Privacy Notice</Link>, which also sets out your rights to access,
          correct, erase, and nominate, and to withdraw consent.
        </li>
        <li>
          <strong>For the personal data you put into {SITE_NAME} about other people</strong> — your
          clients, their contacts, your team members — <strong>you</strong> are the Data Fiduciary
          and we act as your Data Processor. We process it only to provide the service to you and on
          your instructions. We do not use it for our own purposes, disclose it to anyone outside the
          providers listed in our Privacy Notice, or use it to train models.
        </li>
        <li>
          <strong>Your responsibilities as Data Fiduciary.</strong> You are responsible for having a
          lawful basis to hold the data you enter, for giving those people the notice the DPDP Act
          requires, for the accuracy of what you enter, and for responding to their requests. If
          someone contacts us about a record you control, we will pass their request to you and tell
          them we have done so — we will not amend or delete your records on a third party’s say-so.
        </li>
        <li>
          <strong>Security and breaches.</strong> We apply the safeguards described on our{' '}
          <Link href="/security">security page</Link>. If a personal-data breach affects data you
          control, we will notify you without undue delay and give you what you reasonably need to
          meet your own notification duties to the Data Protection Board of India and to affected
          individuals.
        </li>
        <li>
          <strong>Deletion and return.</strong> You can export your data at any time. On termination,
          we delete or irreversibly anonymise the personal data we hold for you within the period set
          out in the Privacy Notice, except records we are required by law to retain.
        </li>
        <li>
          <strong>Sub-processors.</strong> The providers we use to run the service are listed in our
          Privacy Notice. By using {SITE_NAME} you authorise us to engage them. We remain responsible
          to you for what they do with your data.
        </li>
      </ul>

      <h2>7. Feedback</h2>
      <p>
        If you send us suggestions or feedback, you grant us a perpetual, royalty-free right to use
        it to improve {SITE_NAME} without any obligation to you.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The {SITE_NAME} software, brand, logo, and design are owned by us and protected by applicable
        intellectual-property laws. These Terms do not grant you any right to our trademarks or
        branding except as needed to use the service normally.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        The service relies on third parties including Supabase, Vercel, Razorpay, Stripe, Resend,
        Google, and Upstash. The complete list, and what each one receives, is in section 5 of our{' '}
        <Link href="/privacy">Privacy Notice</Link>. Your use of those services may be subject to
        their own terms and policies. We are not responsible for third-party services we do not
        control.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        The service is provided “as is” and “as available,” without warranties of any kind, whether
        express or implied, including fitness for a particular purpose. While we work hard to keep
        the service reliable and secure, we do not warrant that it will be uninterrupted, error-free,
        or that it will meet every requirement. You are responsible for keeping your own backups of
        critical data using the export tools provided.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {SITE_NAME} and its operator will not be liable for
        any indirect, incidental, special, or consequential damages, or for loss of profits, data,
        goodwill, or business, arising from or related to your use of the service. Our total
        aggregate liability for any claim is limited to the amount you paid us for the service in the
        three (3) months immediately before the event giving rise to the claim. Nothing in these
        Terms excludes liability that cannot be excluded under applicable law.
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {SITE_NAME} and its operator from any claims,
        damages, losses, or expenses (including reasonable legal fees) arising from your misuse of
        the service, your violation of these Terms, or your violation of any law or the rights of a
        third party (including the rights of the people whose data you store).
      </p>

      <h2>13. Suspension and termination</h2>
      <p>
        You may stop using the service at any time. We may suspend or terminate your access if you
        breach these Terms, fail to pay, or use the service in a way that harms others, us, or the
        service. On termination, you may export your data for a reasonable period before it is
        deleted in accordance with our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>14. Force majeure</h2>
      <p>
        We are not liable for any failure or delay caused by events beyond our reasonable control,
        including internet or hosting outages, failures of third-party providers, power failures,
        natural disasters, or government action.
      </p>

      <h2>15. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we make material changes, we will update
        the “Last updated” date and, where appropriate, notify you. Continued use of the service
        after changes means you accept the updated Terms.
      </p>

      <h2>16. General</h2>
      <ul>
        <li><strong>Assignment:</strong> you may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets.</li>
        <li><strong>Severability:</strong> if any provision is found unenforceable, the rest remain in full effect.</li>
        <li><strong>No waiver:</strong> our failure to enforce a provision is not a waiver of it.</li>
        <li><strong>Entire agreement:</strong> these Terms, together with our Privacy, Cookie, and Refund policies, form the entire agreement between you and us regarding the service.</li>
        <li><strong>Notices:</strong> we may give notices by email or through the service; you can reach us at the addresses below.</li>
      </ul>

      <h2>17. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of {LEGAL.governingCountry}, without regard to its
        conflict-of-laws rules. Subject to any non-waivable rights you have under applicable consumer
        law, any disputes will be subject to the exclusive jurisdiction of the competent courts in
        {' '}{LEGAL.governingCountry}. We encourage you to contact us first so we can try to resolve
        any issue informally.
      </p>

      <h2>18. Contact</h2>
      <p>
        Questions about these Terms? Email{' '}
        <a href={`mailto:${CONTACT.legal}`}>{CONTACT.legal}</a>, contact our Grievance Officer
        ({LEGAL.grievanceOfficer.name}) at{' '}
        <a href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>, or
        visit our <Link href="/contact">contact page</Link>.
      </p>
    </LegalLayout>
  )
}
