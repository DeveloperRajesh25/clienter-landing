import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalLayout } from '@/components/marketing/LegalLayout'
import { pageMetadata, CONTACT, SITE_NAME, LEGAL } from '@/lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'Refund & Cancellation Policy',
  description:
    'Clienter’s refund and cancellation policy. Plans are billed monthly and you can cancel anytime to stop future charges. Read the full details here.',
  path: '/refund',
})

// NOTE(owner): Reflects the "no refunds, cancel anytime" stance chosen for
// launch. Razorpay requires a published refund/cancellation policy. Not legal
// advice — review before launch.
export default function RefundPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      updated={LEGAL.effectiveDate}
      path="/refund"
      intro={`This policy explains how subscriptions to ${SITE_NAME} are billed, how to cancel, and our position on refunds. Please read it before subscribing to a paid plan.`}
    >
      <h2>1. Free plan</h2>
      <p>
        Our Free plan is free forever and requires no payment, so no billing or refund terms apply
        to it. You can use the Free plan for as long as you like.
      </p>

      <h2>2. Paid subscriptions</h2>
      <p>
        Paid plans (Pro and Ultra) are billed <strong>monthly in advance</strong> in Indian Rupees
        through our payment partner, Razorpay. Your subscription renews automatically each month
        until you cancel it.
      </p>

      <h2>3. Cancellation — you’re in control</h2>
      <ul>
        <li>You can cancel your subscription at any time from your billing settings.</li>
        <li>
          When you cancel, your plan stops renewing and you will <strong>not be charged again</strong>.
        </li>
        <li>
          You keep full access to your paid features until the end of the billing period you have
          already paid for. After that, your account moves to the Free plan.
        </li>
        <li>Your data is never deleted on cancellation — you can export it at any time.</li>
      </ul>

      <h2>4. Refunds</h2>
      <p>
        Because you can cancel anytime to prevent future charges, and because our plans are
        low-cost and billed only one month at a time, <strong>payments already made are
        non-refundable</strong>. We do not provide partial or pro-rated refunds for the unused
        portion of a billing period.
      </p>
      <p>We encourage you to start on the Free plan to make sure {SITE_NAME} is right for you before upgrading.</p>

      <h2>5. Exceptions</h2>
      <p>We will, of course, make things right in genuine cases such as:</p>
      <ul>
        <li>A duplicate charge for the same billing period.</li>
        <li>A technical billing error on our side that charged you incorrectly.</li>
        <li>A failure of the service that prevented you from using your paid plan for an extended period and was caused by us.</li>
      </ul>
      <p>
        If any of these apply, contact us within 7 days of the charge and we will investigate and
        issue a refund where appropriate.
      </p>

      <h2>6. How to request help</h2>
      <p>
        To cancel, manage your plan, or raise a billing issue, email{' '}
        <a href={`mailto:${CONTACT.support}`}>{CONTACT.support}</a> with your account email and the
        details of your request. Approved refunds are processed back to your original payment method
        via Razorpay, typically within 5–10 business days. If you’re not satisfied with how a billing
        issue is handled, you can escalate it to our Grievance Officer
        ({LEGAL.grievanceOfficer.name}) at{' '}
        <a href={`mailto:${LEGAL.grievanceOfficer.email}`}>{LEGAL.grievanceOfficer.email}</a>.
      </p>

      <h2>7. Your statutory rights</h2>
      <p>
        This policy does not limit or override any rights you may have under applicable consumer
        protection law in {LEGAL.governingCountry}. Where the law grants you a right that conflicts
        with this policy, the law prevails.
      </p>

      <h2>8. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date above reflects the
        latest version. For questions, see our <Link href="/contact">contact page</Link> or review
        our <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalLayout>
  )
}
