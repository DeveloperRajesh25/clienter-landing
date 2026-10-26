import type { DocPage } from './types'

export const BILLING_INTEGRATIONS_PORTAL_DOCS: Record<string, DocPage> = {
  // ─── BILLING ───────────────────────────────────────────────────────────────

  'billing': {
    slug: 'billing',
    title: 'Subscription & Billing',
    metaTitle: 'Subscription & Billing — Clienter Docs',
    metaDescription: 'Understand how Clienter billing works — plans, payment methods, invoices, upgrades, and account management for agencies and freelancers.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' }
    ],
    sections: [
      {
        id: 'how-billing-works',
        heading: 'How Billing Works',
        level: 2,
        content: 'Clienter offers three plans — Free, Pro, and Ultra — billed monthly. All paid plans are processed through Razorpay for Indian users (UPI AutoPay, cards, netbanking) and PayPal for international users. Your subscription renews automatically on the same date each month. You can upgrade, downgrade, or cancel at any time from your account settings.',
        callout: { type: 'info', text: 'Clienter never charges hidden fees. The price you see on the pricing page is exactly what you pay — taxes included for Indian billing.' }
      },
      {
        id: 'invoices',
        heading: 'Invoices & Receipts',
        level: 2,
        content: 'Every payment generates an invoice that is emailed to your registered address and available under Settings → Billing → Invoice History inside the app. Invoices include your GST number if you have added one to your billing profile. International invoices are issued in USD via PayPal.',
        steps: [
          'Open app.clienter.co.in and go to Settings → Billing.',
          'Click Invoice History to see all past charges.',
          'Click the download icon next to any invoice to save it as PDF.'
        ]
      },
      {
        id: 'billing-cycle',
        heading: 'Billing Cycle & Proration',
        level: 2,
        content: 'When you upgrade mid-cycle, you are charged the prorated difference for the remaining days. When you downgrade, the current plan stays active until the end of the billing period, and the lower plan takes effect from the next cycle. No partial refunds are issued for downgrades.',
        callout: { type: 'tip', text: 'Upgrading from Free to Pro or Ultra takes effect immediately — you get instant access to all the features of the new plan.' }
      },
      {
        id: 'failed-payments',
        heading: 'Failed Payments',
        level: 3,
        content: 'If a renewal payment fails, Clienter retries the charge up to three times over the next five days. During this retry window your account stays fully active. If all retries fail, your account enters read-only mode — you can view and export data but cannot create new clients, projects, or invoices until payment is resolved.',
        callout: { type: 'warning', text: 'Update your payment method before the retry window ends to avoid any disruption. Go to Settings → Billing → Payment Method.' }
      }
    ],
    faqs: [
      { q: 'Is there a yearly plan?', a: 'Not yet. Clienter currently offers monthly billing only. Annual plans are on the roadmap.' },
      { q: 'Can I get a refund?', a: 'Clienter offers a full refund within 7 days of your first paid subscription. After that, refunds are not available, but you can cancel anytime to stop future charges.' },
      { q: 'Do I need a credit card for the Free plan?', a: 'No. The Free plan requires no payment method at all.' }
    ],
    relatedLinks: [
      { title: 'Compare Plans', href: '/docs/billing/plans' },
      { title: 'Payment Methods', href: '/docs/billing/payment-methods' },
      { title: 'Upgrade Your Plan', href: '/docs/billing/upgrade' },
      { title: 'Manage Subscription', href: '/docs/billing/manage' }
    ]
  },

  'billing/plans': {
    slug: 'billing/plans',
    title: 'Plan Comparison',
    metaTitle: 'Free vs Pro vs Ultra — Clienter Plan Comparison',
    metaDescription: 'Compare Clienter Free, Pro (₹199/mo), and Ultra (₹799/mo) plans side by side — clients, projects, teammates, portal, integrations, and more.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' },
      { label: 'Plans', href: '/docs/billing/plans' }
    ],
    sections: [
      {
        id: 'plan-overview',
        heading: 'Plan Overview',
        level: 2,
        content: 'Clienter has three plans designed to grow with your business. The Free plan lets you try the platform with real work — no trial timer, no credit card. Pro unlocks the tools a working freelancer needs daily. Ultra is built for agencies managing high volumes of clients and leads across multiple channels.'
      },
      {
        id: 'feature-matrix',
        heading: 'Feature Matrix',
        level: 2,
        content: '**Clients** — Free: 3 · Pro: Unlimited · Ultra: Unlimited | **Projects** — Free: 5 · Pro: Unlimited · Ultra: Unlimited | **Teammates** — Free: 1 (just you) · Pro: 3 · Ultra: 10 | **Client Portal Access** — Free: 1 client · Pro: Unlimited · Ultra: Unlimited | **Invoices** — Free: 5/mo · Pro: Unlimited · Ultra: Unlimited | **File Storage** — Free: 500 MB · Pro: 10 GB · Ultra: 50 GB | **Custom Domain Portal** — Free: No · Pro: No · Ultra: Yes | **Google Calendar & Meet** — Free: No · Pro: Yes · Ultra: Yes | **Meta Lead Ads** — Free: No · Pro: No · Ultra: Yes | **IndiaMART Integration** — Free: No · Pro: No · Ultra: Yes | **Webhook Leads** — Free: No · Pro: Yes · Ultra: Yes | **Review Badge** — Free: Yes · Pro: Yes · Ultra: Yes | **Priority Support** — Free: No · Pro: Email · Ultra: Email + Chat | **Data Export** — Free: CSV · Pro: CSV + PDF · Ultra: CSV + PDF + API.'
      },
      {
        id: 'pricing',
        heading: 'Pricing',
        level: 2,
        content: '**Free** — ₹0 forever. **Pro** — ₹199/month (international: $19/month via PayPal). **Ultra** — ₹799/month (international: $39/month via PayPal). All prices are inclusive of applicable taxes for Indian billing.',
        callout: { type: 'info', text: 'Launch pricing is active right now. These rates are locked in for as long as your subscription stays active — even if prices increase later.' }
      },
      {
        id: 'which-plan',
        heading: 'Which Plan Is Right for You?',
        level: 2,
        content: 'Choose **Free** if you are just starting out and have a handful of clients. Choose **Pro** if you are an active freelancer who needs unlimited clients, Google Calendar sync, and webhook integrations. Choose **Ultra** if you run an agency with a team, need lead-source integrations like Meta Ads and IndiaMART, or want a custom-domain client portal.',
        callout: { type: 'tip', text: 'You can start on Free and upgrade anytime. Your data carries over — nothing is lost when you switch plans.' }
      }
    ],
    faqs: [
      { q: 'What happens to my data if I downgrade?', a: 'Your data is never deleted on downgrade. If you exceed the lower plan limits, your account enters read-only mode for the excess records. See the Grace Period docs for details.' },
      { q: 'Can I switch plans mid-month?', a: 'Yes. Upgrades are prorated and take effect immediately. Downgrades take effect at the next billing cycle.' },
      { q: 'Is the launch pricing permanent?', a: 'Your rate is locked for the lifetime of your continuous subscription. If you cancel and resubscribe later, the price at that time applies.' }
    ],
    relatedLinks: [
      { title: 'Upgrade Your Plan', href: '/docs/billing/upgrade' },
      { title: 'Grace Period & Read-Only', href: '/docs/billing/grace-period' },
      { title: 'Payment Methods', href: '/docs/billing/payment-methods' }
    ]
  },

  'billing/upgrade': {
    slug: 'billing/upgrade',
    title: 'How to Upgrade Your Plan',
    metaTitle: 'Upgrade Your Clienter Plan — Step-by-Step Guide',
    metaDescription: 'Learn how to upgrade from Clienter Free to Pro or Ultra — instant activation, prorated billing, and no data loss.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' },
      { label: 'Upgrade', href: '/docs/billing/upgrade' }
    ],
    sections: [
      {
        id: 'before-you-upgrade',
        heading: 'Before You Upgrade',
        level: 2,
        content: 'Upgrading unlocks higher limits and new features instantly. Your existing data — clients, projects, invoices, files — stays exactly as it is. There is no migration step and no downtime.',
        callout: { type: 'info', text: 'If you are on the Free plan, you do not need to add a payment method beforehand. The upgrade flow will prompt you to set one up.' }
      },
      {
        id: 'upgrade-steps',
        heading: 'Upgrade Steps',
        level: 2,
        content: 'Follow these steps to upgrade your Clienter plan.',
        steps: [
          'Log in to app.clienter.co.in.',
          'Go to Settings → Billing.',
          'Click "Upgrade Plan" next to the plan you want.',
          'If you are in India, choose your payment method — UPI AutoPay, debit/credit card, or netbanking. International users will be redirected to PayPal.',
          'Complete the payment. Your new plan is active immediately.',
          'You will receive a confirmation email with your invoice.'
        ]
      },
      {
        id: 'proration',
        heading: 'How Proration Works',
        level: 3,
        content: 'When you upgrade mid-billing-cycle, Clienter calculates the unused days on your current plan and credits that amount toward the new plan. You only pay the difference for the remaining days. From the next cycle onward, you are billed the full amount of the new plan.',
        callout: { type: 'tip', text: 'Example: If you upgrade from Pro (₹199) to Ultra (₹799) halfway through your cycle, you pay roughly ₹400 for the remaining 15 days, not the full ₹799.' }
      },
      {
        id: 'upgrade-confirmation',
        heading: 'Confirming Your Upgrade',
        level: 3,
        content: 'After a successful upgrade, the Settings → Billing page shows your new plan name and next billing date. A confirmation email is sent to your registered address within a few minutes. If the page still shows your old plan after five minutes, try logging out and back in, or contact support@clienter.co.in.'
      }
    ],
    relatedLinks: [
      { title: 'Compare Plans', href: '/docs/billing/plans' },
      { title: 'Payment Methods', href: '/docs/billing/payment-methods' },
      { title: 'Manage Subscription', href: '/docs/billing/manage' }
    ]
  },

  'billing/payment-methods': {
    slug: 'billing/payment-methods',
    title: 'Payment Methods',
    metaTitle: 'Accepted Payment Methods — Clienter Billing',
    metaDescription: 'Clienter accepts UPI AutoPay, credit/debit cards, and netbanking via Razorpay for India, and PayPal for international users.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' },
      { label: 'Payment Methods', href: '/docs/billing/payment-methods' }
    ],
    sections: [
      {
        id: 'india-payments',
        heading: 'Payments in India (Razorpay)',
        level: 2,
        content: 'All Indian payments are processed securely through Razorpay. Clienter supports three payment methods for Indian users: UPI AutoPay, debit and credit cards (Visa, Mastercard, RuPay), and netbanking from all major banks. UPI AutoPay sets up a recurring mandate so renewals happen automatically without manual approval each month.',
        callout: { type: 'tip', text: 'UPI AutoPay is the fastest way to subscribe — no card details needed, and renewals are seamless.' }
      },
      {
        id: 'international-payments',
        heading: 'International Payments (PayPal)',
        level: 2,
        content: 'Users outside India pay via PayPal in USD. During checkout you are redirected to PayPal to authorize the subscription. PayPal handles recurring billing automatically. Pro is $19/month and Ultra is $39/month.',
        callout: { type: 'info', text: 'PayPal supports payments from credit cards, debit cards, and PayPal balance. You do not need a PayPal account — guest checkout via card is available in most countries.' }
      },
      {
        id: 'update-payment-method',
        heading: 'Updating Your Payment Method',
        level: 2,
        content: 'You can change your payment method at any time without affecting your subscription.',
        steps: [
          'Go to Settings → Billing → Payment Method.',
          'Click "Update Payment Method".',
          'Follow the prompts to add a new card, UPI ID, or PayPal account.',
          'The new method is used for all future charges. No re-subscription is needed.'
        ]
      },
      {
        id: 'payment-security',
        heading: 'Payment Security',
        level: 3,
        content: 'Clienter never stores your card numbers or bank credentials on its servers. All payment data is handled by Razorpay (PCI-DSS Level 1 compliant) and PayPal. Transactions are encrypted end to end. Razorpay tokenizes card details, meaning even Clienter cannot access your full card number after the initial transaction.'
      }
    ],
    faqs: [
      { q: 'Can I pay with a debit card?', a: 'Yes. Indian debit cards (Visa, Mastercard, RuPay) are fully supported via Razorpay.' },
      { q: 'Is there a currency conversion fee?', a: 'Clienter does not charge any conversion fee. However, your bank or PayPal may apply their own foreign exchange markup.' },
      { q: 'Can I use Google Pay or PhonePe?', a: 'Yes, through the UPI AutoPay option. When you select UPI, you can use any UPI-enabled app including Google Pay, PhonePe, Paytm, and others.' }
    ],
    relatedLinks: [
      { title: 'Upgrade Your Plan', href: '/docs/billing/upgrade' },
      { title: 'Manage Subscription', href: '/docs/billing/manage' },
      { title: 'Billing Overview', href: '/docs/billing' }
    ]
  },

  'billing/manage': {
    slug: 'billing/manage',
    title: 'Managing Your Subscription',
    metaTitle: 'Manage Your Clienter Subscription — Billing Settings',
    metaDescription: 'Learn how to manage your Clienter subscription — update payment methods, change plans, view invoices, and cancel your subscription.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' },
      { label: 'Manage', href: '/docs/billing/manage' }
    ],
    sections: [
      {
        id: 'billing-dashboard',
        heading: 'Your Billing Dashboard',
        level: 2,
        content: 'The billing dashboard at Settings → Billing shows your current plan, next billing date, payment method on file, and complete invoice history. From here you can upgrade, downgrade, update your payment method, add a GST number, and cancel your subscription.'
      },
      {
        id: 'change-plan',
        heading: 'Changing Your Plan',
        level: 2,
        content: 'You can switch between Pro and Ultra at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the end of the current billing cycle — you keep access to your current plan features until then.',
        steps: [
          'Go to Settings → Billing.',
          'Click "Change Plan".',
          'Select the new plan.',
          'Confirm the change. For upgrades, complete payment for the prorated amount.'
        ]
      },
      {
        id: 'cancel-subscription',
        heading: 'Cancelling Your Subscription',
        level: 2,
        content: 'You can cancel your paid subscription at any time. When you cancel, your current plan stays active until the end of the billing period. After that, your account reverts to the Free plan. Your data is not deleted — but if you exceed Free plan limits, excess records become read-only.',
        steps: [
          'Go to Settings → Billing.',
          'Click "Cancel Subscription".',
          'Confirm the cancellation. You will be asked for a brief reason (optional).',
          'Your plan remains active until the current period ends.'
        ],
        callout: { type: 'warning', text: 'Cancelling does not delete your data. To permanently delete your account and all data, see the Delete Account page.' }
      },
      {
        id: 'gst-billing',
        heading: 'GST & Tax Information',
        level: 3,
        content: 'Indian users can add their GSTIN to receive GST-compliant invoices. Go to Settings → Billing → Tax Info and enter your 15-digit GSTIN. Once saved, all future invoices will include your GST number and the tax breakup. This cannot be applied retroactively to past invoices.'
      }
    ],
    faqs: [
      { q: 'Will I lose my data if I cancel?', a: 'No. Your data stays on Clienter. You revert to the Free plan, and records beyond Free limits become read-only.' },
      { q: 'Can I pause my subscription instead of cancelling?', a: 'Pausing is not available yet. You can cancel and resubscribe later — your data will still be there.' }
    ],
    relatedLinks: [
      { title: 'Grace Period & Read-Only', href: '/docs/billing/grace-period' },
      { title: 'Delete Your Account', href: '/docs/billing/delete-account' },
      { title: 'Payment Methods', href: '/docs/billing/payment-methods' }
    ]
  },

  'billing/grace-period': {
    slug: 'billing/grace-period',
    title: 'Downgrade Grace Period & Read-Only Records',
    metaTitle: 'Downgrade Grace Period — Clienter Billing',
    metaDescription: 'What happens when you downgrade or cancel your Clienter plan — grace period, read-only access, and how to regain full access to your records.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' },
      { label: 'Grace Period', href: '/docs/billing/grace-period' }
    ],
    sections: [
      {
        id: 'what-happens-on-downgrade',
        heading: 'What Happens When You Downgrade',
        level: 2,
        content: 'When your plan changes to a lower tier — whether by choice or due to a failed payment — Clienter does not delete any data. Instead, records that exceed the lower plan\'s limits are placed in read-only mode. You can still view, search, and export these records, but you cannot edit them or create new ones beyond the plan limit.',
        callout: { type: 'info', text: 'Example: You have 20 clients on Pro. After downgrading to Free (3 clients), all 20 clients remain visible. You can open and view any of them, but only 3 are editable. The most recently active clients are kept editable.' }
      },
      {
        id: 'grace-period-details',
        heading: 'The Grace Period',
        level: 2,
        content: 'After a downgrade, Clienter gives you a 14-day grace period during which all your records remain fully editable. This gives you time to export data, wrap up active projects, or resubscribe. After the grace period ends, excess records become read-only.',
        steps: [
          'Day 0: Downgrade takes effect (end of billing cycle or after payment failure retries).',
          'Days 1–14: Full access to all records. A banner reminds you of the upcoming restriction.',
          'Day 15: Records exceeding the new plan limits become read-only.'
        ]
      },
      {
        id: 'read-only-behavior',
        heading: 'How Read-Only Records Work',
        level: 3,
        content: 'Read-only records are fully visible — you can view client details, project history, invoices, files, and messages. You cannot edit fields, add new files, send messages, or create new invoices for read-only clients. If a client has an active portal session, their portal access continues in view-only mode as well.'
      },
      {
        id: 'restore-access',
        heading: 'Restoring Full Access',
        level: 2,
        content: 'To regain full editing access to all your records, simply upgrade back to a plan that covers your usage. The upgrade takes effect immediately and all records become editable again — no data recovery step is needed.',
        callout: { type: 'tip', text: 'If you only need temporary access to close out a project, upgrading for one month and then downgrading again is a practical option.' }
      }
    ],
    relatedLinks: [
      { title: 'Compare Plans', href: '/docs/billing/plans' },
      { title: 'Manage Subscription', href: '/docs/billing/manage' },
      { title: 'Delete Your Account', href: '/docs/billing/delete-account' }
    ]
  },

  'billing/delete-account': {
    slug: 'billing/delete-account',
    title: 'Deleting Your Account',
    metaTitle: 'Delete Your Clienter Account — 30-Day Recovery Window',
    metaDescription: 'How to delete your Clienter account permanently — 30-day soft delete, data recovery, and what happens to your clients and team.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Billing', href: '/docs/billing' },
      { label: 'Delete Account', href: '/docs/billing/delete-account' }
    ],
    sections: [
      {
        id: 'before-deleting',
        heading: 'Before You Delete',
        level: 2,
        content: 'Deleting your account is permanent after the recovery window. Before proceeding, consider whether downgrading to the Free plan would meet your needs — your data stays intact on the Free plan. If you do want to delete, make sure to export any data you need first.',
        callout: { type: 'warning', text: 'Account deletion removes all your data — clients, projects, invoices, files, messages, portal configurations, and team members. This cannot be undone after the 30-day recovery window.' }
      },
      {
        id: 'delete-steps',
        heading: 'How to Delete Your Account',
        level: 2,
        content: 'Follow these steps to initiate account deletion.',
        steps: [
          'Go to Settings → Account → Danger Zone.',
          'Click "Delete My Account".',
          'Enter your password to confirm.',
          'Optionally provide a reason for leaving (helps us improve).',
          'Click "Confirm Deletion". Your account enters the 30-day soft-delete period.'
        ]
      },
      {
        id: 'soft-delete-period',
        heading: '30-Day Soft Delete & Recovery',
        level: 2,
        content: 'After you confirm deletion, your account enters a 30-day soft-delete period. During this time, your account is deactivated — you cannot log in, your client portals go offline, and your team members lose access. However, all data is preserved on our servers. If you change your mind, you can recover your account by contacting support@clienter.co.in with your registered email address. After 30 days, all data is permanently and irreversibly deleted.',
        callout: { type: 'info', text: 'During the soft-delete period, any active paid subscription is cancelled immediately. No further charges are made.' }
      },
      {
        id: 'what-gets-deleted',
        heading: 'What Gets Deleted',
        level: 3,
        content: 'After the 30-day window: all client records and contact details, all projects and their tasks, all invoices and payment records, all uploaded files and documents, all messages and chat history, client portal configurations and access tokens, team member associations, integration connections (Google, Meta, IndiaMART, webhooks), and your login credentials. Nothing is recoverable after this point.'
      },
      {
        id: 'export-before-delete',
        heading: 'Exporting Your Data First',
        level: 3,
        content: 'Before deleting, you can export a full copy of your data from Settings → Account → Export Data. This generates a ZIP file containing your clients (CSV), projects (CSV), invoices (PDF), and uploaded files. The export may take a few minutes for large accounts. You will receive an email with a download link when it is ready.'
      }
    ],
    faqs: [
      { q: 'Can I recover my account after 30 days?', a: 'No. After the 30-day soft-delete period, all data is permanently deleted and cannot be recovered.' },
      { q: 'What happens to my clients\' portal access?', a: 'Client portals go offline immediately when you initiate deletion. If you recover your account within 30 days, portals are restored.' },
      { q: 'Do I get a refund when I delete my account?', a: 'If you delete mid-billing-cycle, no prorated refund is issued. Cancel your subscription first and wait for the cycle to end, then delete.' }
    ],
    relatedLinks: [
      { title: 'Manage Subscription', href: '/docs/billing/manage' },
      { title: 'Grace Period', href: '/docs/billing/grace-period' },
      { title: 'Billing Overview', href: '/docs/billing' }
    ]
  },

  // ─── INTEGRATIONS ──────────────────────────────────────────────────────────

  'integrations': {
    slug: 'integrations',
    title: 'Integrations Overview',
    metaTitle: 'Integrations — Clienter Docs',
    metaDescription: 'Connect Clienter with Google Calendar, Meta Lead Ads, IndiaMART, webhooks, and more — bring leads in automatically and keep your workflow in sync.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' }
    ],
    sections: [
      {
        id: 'why-integrate',
        heading: 'Why Integrations Matter',
        level: 2,
        content: 'Integrations let Clienter fit into the tools you already use. Instead of copying leads from Facebook or manually syncing your calendar, integrations automate these handoffs so you spend less time on data entry and more time on actual work.'
      },
      {
        id: 'available-integrations',
        heading: 'Available Integrations',
        level: 2,
        content: '**Google Calendar & Meet** (Pro/Ultra) — Sync meetings, create Google Meet links from Clienter, and see your schedule alongside client timelines. **Meta Lead Ads** (Ultra) — Automatically import leads from your Facebook and Instagram ad campaigns as Clienter clients. **IndiaMART** (Ultra) — Pull buyer enquiries from IndiaMART directly into your Clienter pipeline. **Webhooks** (Pro/Ultra) — Receive leads from any source that can send an HTTP POST — Zapier, Make, custom forms, and more. **Contact Form** (All plans) — Embed a lead capture form on your website that creates clients in Clienter. **Review Badge** (All plans) — Display a trust badge on your website that links to your Clienter review profile.'
      },
      {
        id: 'managing-integrations',
        heading: 'Managing Integrations',
        level: 2,
        content: 'All integrations are managed from Settings → Integrations inside the app. Each integration has its own connect/disconnect flow and configuration options. You can enable or disable an integration without losing its configuration — reconnecting later restores your previous settings.',
        callout: { type: 'info', text: 'Integration availability depends on your plan. Features marked with a plan badge require that plan or higher.' }
      }
    ],
    relatedLinks: [
      { title: 'Google Calendar & Meet', href: '/docs/integrations/google' },
      { title: 'Meta Lead Ads', href: '/docs/integrations/meta-ads' },
      { title: 'IndiaMART', href: '/docs/integrations/indiamart' },
      { title: 'Webhooks', href: '/docs/integrations/webhook' },
      { title: 'Contact Form', href: '/docs/integrations/contact-form' },
      { title: 'Review Badge', href: '/docs/integrations/review-badge' }
    ]
  },

  'integrations/google': {
    slug: 'integrations/google',
    title: 'Google Calendar & Meet',
    metaTitle: 'Google Calendar & Meet Integration — Clienter Docs',
    metaDescription: 'Connect Google Calendar and Google Meet to Clienter — sync meetings, create Meet links, and view your schedule alongside client projects.',
    planBadge: 'Pro',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' },
      { label: 'Google Calendar & Meet', href: '/docs/integrations/google' }
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What This Integration Does',
        level: 2,
        content: 'The Google integration connects your Google Calendar to Clienter so you can see upcoming meetings alongside your client timelines, schedule meetings with clients directly from Clienter, and auto-generate Google Meet links. Meetings created in Clienter appear on your Google Calendar and vice versa.',
        planBadge: 'Pro'
      },
      {
        id: 'connect-google',
        heading: 'Connecting Your Google Account',
        level: 2,
        content: 'Follow these steps to link your Google account to Clienter.',
        steps: [
          'Go to Settings → Integrations → Google.',
          'Click "Connect Google Account".',
          'Sign in with the Google account whose calendar you want to sync.',
          'Grant the requested permissions — Clienter asks for Calendar read/write access only.',
          'You will be redirected back to Clienter. A success message confirms the connection.'
        ],
        callout: { type: 'info', text: 'Clienter uses OAuth 2.0 and never stores your Google password. You can revoke access anytime from your Google Account → Security → Third-party apps.' }
      },
      {
        id: 'scheduling-meetings',
        heading: 'Scheduling Meetings',
        level: 2,
        content: 'Once connected, you can create meetings from any client\'s profile page. Click "Schedule Meeting", pick a date and time, and optionally toggle "Add Google Meet link". The meeting appears on your Google Calendar and, if the client has a portal, on their portal calendar too. Clients receive an email invite with the Meet link.',
        callout: { type: 'tip', text: 'You can also schedule meetings from the global Calendar view in the sidebar. Assign the meeting to a client to keep it linked to their profile.' }
      },
      {
        id: 'sync-behavior',
        heading: 'How Sync Works',
        level: 3,
        content: 'Clienter syncs with Google Calendar every five minutes. New events, edits, and cancellations are reflected in both directions. If you edit a meeting in Google Calendar, the change shows up in Clienter at the next sync. Deleted events are removed from both sides. Only events on your primary calendar are synced — sub-calendars and shared calendars are not included.'
      }
    ],
    faqs: [
      { q: 'Can I connect multiple Google accounts?', a: 'Currently, one Google account per Clienter user. Multi-account support is planned.' },
      { q: 'Does this work with Google Workspace accounts?', a: 'Yes. Both personal Gmail and Google Workspace accounts are supported.' }
    ],
    relatedLinks: [
      { title: 'Integrations Overview', href: '/docs/integrations' },
      { title: 'Client Portal Features', href: '/docs/portal/features' },
      { title: 'Compare Plans', href: '/docs/billing/plans' }
    ]
  },

  'integrations/meta-ads': {
    slug: 'integrations/meta-ads',
    title: 'Meta Lead Ads Integration',
    metaTitle: 'Meta Lead Ads (Facebook & Instagram) — Clienter Integration',
    metaDescription: 'Automatically import leads from Facebook and Instagram Lead Ads into Clienter — zero manual entry, instant client creation.',
    planBadge: 'Ultra',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' },
      { label: 'Meta Lead Ads', href: '/docs/integrations/meta-ads' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What Meta Lead Ads Integration Does',
        level: 2,
        content: 'When someone fills out a lead form on your Facebook or Instagram ad, their details are automatically sent to Clienter and a new client record is created. No manual CSV downloads, no copy-pasting. Leads appear in your Clienter inbox within seconds of submission.',
        planBadge: 'Ultra'
      },
      {
        id: 'setup',
        heading: 'Setting Up Meta Lead Ads',
        level: 2,
        content: 'Connect your Meta Business account to start receiving leads.',
        steps: [
          'Go to Settings → Integrations → Meta Lead Ads.',
          'Click "Connect Meta Account" and sign in with your Facebook account that manages the ads.',
          'Select the Facebook Page(s) whose lead forms you want to sync.',
          'Grant the required permissions (leads_retrieval and pages_manage_ads).',
          'Choose a default label or pipeline stage for incoming leads.',
          'Click "Save". New leads from those pages now flow into Clienter automatically.'
        ],
        callout: { type: 'warning', text: 'You must be an admin of the Facebook Page to connect it. Page editors and moderators do not have sufficient permissions.' }
      },
      {
        id: 'lead-mapping',
        heading: 'Field Mapping',
        level: 2,
        content: 'Clienter maps standard Meta lead form fields automatically: name, email, phone number, and company. Custom fields from your lead form are stored in the client\'s notes. You can customize field mapping from the integration settings to route specific form fields to specific Clienter client fields.'
      },
      {
        id: 'troubleshooting',
        heading: 'Troubleshooting',
        level: 3,
        content: 'If leads are not appearing, check the following: verify the Facebook Page is connected and shows a green status indicator; confirm your Meta Business account has an active ad campaign with a lead form; check that the lead form is published (draft forms do not send leads); review the integration log at Settings → Integrations → Meta Lead Ads → Activity Log for error details.',
        callout: { type: 'tip', text: 'Use Meta\'s built-in "Test Lead" tool in Ads Manager to send a test submission and verify the connection works end to end.' }
      }
    ],
    faqs: [
      { q: 'Does this work with Instagram Lead Ads too?', a: 'Yes. Instagram Lead Ads connected to a Facebook Page are included automatically.' },
      { q: 'Can I import historical leads?', a: 'No. Only new leads submitted after the integration is connected are imported. For historical data, export a CSV from Meta and import it into Clienter manually.' }
    ],
    relatedLinks: [
      { title: 'IndiaMART Integration', href: '/docs/integrations/indiamart' },
      { title: 'Webhook Integration', href: '/docs/integrations/webhook' },
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  'integrations/indiamart': {
    slug: 'integrations/indiamart',
    title: 'IndiaMART Integration',
    metaTitle: 'IndiaMART Lead Integration — Clienter Docs',
    metaDescription: 'Automatically import IndiaMART buyer enquiries into Clienter — connect your IndiaMART seller account and receive leads in real time.',
    planBadge: 'Ultra',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' },
      { label: 'IndiaMART', href: '/docs/integrations/indiamart' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What IndiaMART Integration Does',
        level: 2,
        content: 'If you receive buyer enquiries on IndiaMART, this integration pipes them directly into Clienter as new client leads. Each enquiry creates a client record with the buyer\'s name, phone, email, city, and product interest. No more checking the IndiaMART dashboard separately.',
        planBadge: 'Ultra'
      },
      {
        id: 'setup',
        heading: 'Connecting IndiaMART',
        level: 2,
        content: 'IndiaMART uses a CRM API key for integration. Follow these steps to connect.',
        steps: [
          'Log in to your IndiaMART seller dashboard.',
          'Go to Lead Manager → CRM Integration and generate your API key (also called the CRM key or GLUSR key).',
          'Copy the API key.',
          'In Clienter, go to Settings → Integrations → IndiaMART.',
          'Paste your API key and click "Connect".',
          'Clienter validates the key and begins syncing new leads.'
        ],
        callout: { type: 'info', text: 'The IndiaMART API key is specific to your seller account. If you have multiple IndiaMART accounts, connect each one separately.' }
      },
      {
        id: 'sync-details',
        heading: 'How Lead Sync Works',
        level: 2,
        content: 'Clienter polls the IndiaMART API every 10 minutes for new enquiries. Each new buyer enquiry is created as a client record with a "IndiaMART" source label. Duplicate detection is based on phone number — if a buyer has already been added from a previous enquiry, the new enquiry is attached as a note to the existing client rather than creating a duplicate.'
      },
      {
        id: 'limitations',
        heading: 'Limitations',
        level: 3,
        content: 'The IndiaMART CRM API provides leads from the last 7 days only. Historical enquiries older than 7 days are not available for import. The API has a rate limit set by IndiaMART, so very high-volume sellers may experience slight delays. Buy-lead responses sent from within Clienter are not synced back to IndiaMART — you still need to respond on IndiaMART separately if required.',
        callout: { type: 'warning', text: 'If you regenerate your IndiaMART API key, the old key stops working immediately. Update it in Clienter Settings → Integrations → IndiaMART to avoid missing leads.' }
      }
    ],
    relatedLinks: [
      { title: 'Meta Lead Ads', href: '/docs/integrations/meta-ads' },
      { title: 'Webhook Integration', href: '/docs/integrations/webhook' },
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  'integrations/webhook': {
    slug: 'integrations/webhook',
    title: 'Webhook Integration',
    metaTitle: 'Webhook Integration for Custom Lead Sources — Clienter Docs',
    metaDescription: 'Send leads from any source to Clienter using webhooks — connect Zapier, Make, custom forms, or any tool that sends HTTP POST requests.',
    planBadge: 'Pro',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' },
      { label: 'Webhooks', href: '/docs/integrations/webhook' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What Webhooks Do',
        level: 2,
        content: 'A webhook gives you a unique URL that accepts HTTP POST requests with lead data in JSON format. When Clienter receives a valid POST to your webhook URL, it creates a new client record automatically. This is the most flexible integration — it works with Zapier, Make (Integromat), n8n, custom scripts, third-party forms, and any platform that supports outgoing webhooks.',
        planBadge: 'Pro'
      },
      {
        id: 'setup',
        heading: 'Getting Your Webhook URL',
        level: 2,
        content: 'Each Clienter account gets a unique webhook endpoint.',
        steps: [
          'Go to Settings → Integrations → Webhooks.',
          'Click "Generate Webhook URL". Your unique URL is displayed.',
          'Copy the URL and paste it into your lead source (Zapier, Make, a custom form handler, etc.).',
          'Optionally, set a default label or pipeline stage for leads arriving via this webhook.',
          'Send a test POST to verify the connection.'
        ],
        callout: { type: 'tip', text: 'You can generate multiple webhook URLs to distinguish leads from different sources — each URL can have its own default label.' }
      },
      {
        id: 'payload-format',
        heading: 'Payload Format',
        level: 2,
        content: 'Send a JSON POST with Content-Type: application/json. Required fields: `name` (string). Optional fields: `email` (string), `phone` (string), `company` (string), `source` (string — shown as the lead source label), `notes` (string). Example: `{ "name": "Priya Sharma", "email": "priya@example.com", "phone": "+919876543210", "source": "Webinar Signup" }`. Unknown fields are stored in the client\'s notes for reference.',
        callout: { type: 'info', text: 'The webhook returns HTTP 200 on success with the created client\'s ID, or HTTP 400 with an error message if validation fails.' }
      },
      {
        id: 'security',
        heading: 'Webhook Security',
        level: 3,
        content: 'Each webhook URL contains a unique token that authenticates requests. Treat it like a password — do not share it publicly. If a webhook URL is compromised, you can regenerate it from the integration settings. The old URL stops working immediately. For additional security, you can restrict incoming requests to specific IP addresses from the webhook settings.'
      }
    ],
    faqs: [
      { q: 'Can I receive data other than leads via webhook?', a: 'Currently, webhooks are designed for lead/client creation only. Project and invoice creation via webhook is on the roadmap.' },
      { q: 'Is there a rate limit?', a: 'Yes. Webhooks accept up to 100 requests per minute per URL. If you exceed this, requests receive HTTP 429 and should be retried after 60 seconds.' }
    ],
    relatedLinks: [
      { title: 'Contact Form', href: '/docs/integrations/contact-form' },
      { title: 'Meta Lead Ads', href: '/docs/integrations/meta-ads' },
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  'integrations/contact-form': {
    slug: 'integrations/contact-form',
    title: 'Website Contact Form',
    metaTitle: 'Embeddable Contact Form — Clienter Lead Capture',
    metaDescription: 'Add a lead capture form to your website that sends submissions directly to Clienter — embeddable HTML snippet, no backend required.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' },
      { label: 'Contact Form', href: '/docs/integrations/contact-form' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What the Contact Form Does',
        level: 2,
        content: 'Clienter provides an embeddable contact form that you can add to any website. When a visitor fills it out, their information is sent to Clienter and a new client record is created in your account. No server-side code needed — just paste the HTML snippet and you are live.'
      },
      {
        id: 'setup',
        heading: 'Adding the Form to Your Website',
        level: 2,
        content: 'Get your embed code and paste it into your website.',
        steps: [
          'Go to Settings → Integrations → Contact Form.',
          'Customize the form fields — choose which fields to show (name, email, phone, company, message).',
          'Optionally set a default label for leads arriving through the form.',
          'Copy the generated HTML embed code.',
          'Paste the code into your website\'s HTML where you want the form to appear.',
          'Test by submitting the form on your website and checking your Clienter inbox.'
        ],
        callout: { type: 'tip', text: 'The form works on any website — WordPress, Wix, Squarespace, static HTML, React, or any other platform that allows custom HTML.' }
      },
      {
        id: 'customization',
        heading: 'Styling the Form',
        level: 2,
        content: 'The embed code uses minimal default styling that adapts to most websites. You can override the CSS by targeting the `.clienter-form` class and its child elements. The form also supports a `data-theme="dark"` attribute if your website has a dark background. For advanced control, use the webhook integration instead and build your own form UI.'
      },
      {
        id: 'spam-protection',
        heading: 'Spam Protection',
        level: 3,
        content: 'The embedded form includes a hidden honeypot field and rate limiting to block bot submissions. Submissions from the same IP address are limited to 5 per hour. If you receive spam despite these measures, you can enable email verification — the visitor receives a confirmation email and the lead is only created after they click the link.',
        callout: { type: 'info', text: 'Email verification adds friction but dramatically reduces spam. Enable it from Settings → Integrations → Contact Form → Spam Protection.' }
      }
    ],
    relatedLinks: [
      { title: 'Webhook Integration', href: '/docs/integrations/webhook' },
      { title: 'Review Badge', href: '/docs/integrations/review-badge' },
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  'integrations/review-badge': {
    slug: 'integrations/review-badge',
    title: 'Embeddable Review Badge',
    metaTitle: 'Review Badge for Your Website — Clienter Docs',
    metaDescription: 'Display a trust badge on your website showing your Clienter review rating — embeddable, auto-updating, and available on all plans.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Integrations', href: '/docs/integrations' },
      { label: 'Review Badge', href: '/docs/integrations/review-badge' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What the Review Badge Is',
        level: 2,
        content: 'The review badge is a small, embeddable widget that displays your average client review rating and total review count on your website. It updates automatically as clients leave new reviews through the Clienter Client Portal. It serves as social proof — visitors see real feedback from your clients right on your site.'
      },
      {
        id: 'setup',
        heading: 'Adding the Badge to Your Website',
        level: 2,
        content: 'Get the badge code and embed it on your site.',
        steps: [
          'Go to Settings → Integrations → Review Badge.',
          'Choose a badge style — compact (star rating only), standard (stars + review count), or detailed (stars + count + latest review snippet).',
          'Choose light or dark theme to match your website.',
          'Copy the embed code.',
          'Paste it into your website HTML where you want the badge to appear.'
        ]
      },
      {
        id: 'how-it-works',
        heading: 'How It Updates',
        level: 2,
        content: 'The badge loads dynamically from Clienter\'s servers each time a visitor views your page. It always shows the latest rating and review count. There is no caching delay — new reviews are reflected within minutes. The badge makes a single lightweight API call and has no impact on your website\'s page speed.',
        callout: { type: 'info', text: 'The badge only shows reviews from clients who have submitted reviews through the Client Portal. It does not pull reviews from Google, Facebook, or other platforms.' }
      },
      {
        id: 'collecting-reviews',
        heading: 'Getting Reviews from Clients',
        level: 3,
        content: 'To build up your badge rating, ask clients to leave reviews through their portal. You can send a review request from any client\'s profile page using the "Request Review" button. Clients receive an email with a direct link to the review form. Reviews include a 1–5 star rating and an optional written comment.',
        callout: { type: 'tip', text: 'The best time to request a review is right after delivering a milestone or completing a project — clients are most likely to respond when work is fresh.' }
      }
    ],
    relatedLinks: [
      { title: 'Client Portal Features', href: '/docs/portal/features' },
      { title: 'Contact Form', href: '/docs/integrations/contact-form' },
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  // ─── CLIENT PORTAL ─────────────────────────────────────────────────────────

  'portal': {
    slug: 'portal',
    title: 'Client Portal',
    metaTitle: 'Client Portal — Clienter Docs',
    metaDescription: 'Give your clients a professional portal to view projects, invoices, files, messages, and more — included with every Clienter plan.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Client Portal', href: '/docs/portal' }
    ],
    sections: [
      {
        id: 'what-is-portal',
        heading: 'What Is the Client Portal?',
        level: 2,
        content: 'The Client Portal is a dedicated, branded space where your clients can log in to view their projects, invoices, files, messages, tasks, and deliverables. It replaces endless email threads and "can you send me that file again" messages with a single link your client can bookmark. Every Clienter plan includes portal access — Free allows 1 portal client, while Pro and Ultra offer unlimited portal clients.'
      },
      {
        id: 'why-use-portal',
        heading: 'Why Use the Portal',
        level: 2,
        content: 'The portal makes you look more professional and saves you time. Clients can check project status without messaging you. They can download invoices and files on their own. They can leave reviews, approve deliverables, and communicate through a threaded message interface — all in one place. It reduces back-and-forth and keeps your client relationships organized.'
      },
      {
        id: 'portal-plans',
        heading: 'Portal Access by Plan',
        level: 2,
        content: '**Free** — 1 client with portal access. **Pro** — Unlimited clients with portal access. **Ultra** — Unlimited clients with portal access plus custom domain support (e.g., portal.youragency.com instead of the default Clienter URL).',
        callout: { type: 'info', text: 'Portal access is per client, not per project. Once a client has portal access, they can see all projects, invoices, and files associated with their account.' }
      }
    ],
    relatedLinks: [
      { title: 'What Clients See', href: '/docs/portal/overview' },
      { title: 'Setting Up the Portal', href: '/docs/portal/setup' },
      { title: 'Portal Features', href: '/docs/portal/features' },
      { title: 'Client Login', href: '/docs/portal/login' },
      { title: 'Client Notifications', href: '/docs/portal/notifications' }
    ]
  },

  'portal/overview': {
    slug: 'portal/overview',
    title: 'What Your Clients See',
    metaTitle: 'Client Portal Overview — What Clients See in Clienter',
    metaDescription: 'A walkthrough of what your clients see when they log into their Clienter portal — projects, invoices, files, messages, and deliverables.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Client Portal', href: '/docs/portal' },
      { label: 'Overview', href: '/docs/portal/overview' }
    ],
    sections: [
      {
        id: 'client-dashboard',
        heading: 'The Client Dashboard',
        level: 2,
        content: 'When a client logs in, they see a clean dashboard with an overview of their active projects, recent invoices, unread messages, and pending tasks. The dashboard is designed for clarity — no clutter, no admin features, just the information relevant to that client.'
      },
      {
        id: 'what-clients-can-see',
        heading: 'What Clients Can Access',
        level: 2,
        content: 'Clients can view: **Projects** — status, timeline, milestones, and progress. **Invoices** — amounts, due dates, payment status, and download links. **Files** — all files you have shared with them, organized by project. **Documents** — contracts, proposals, and other documents you have attached. **Messages** — a threaded conversation with you and your team. **Tasks** — tasks assigned to them or visible to them. **Deliverables** — completed work items they can review and approve. **Reviews** — a form to leave a review of your work. **Secrets** — securely shared credentials like passwords and API keys.'
      },
      {
        id: 'what-clients-cannot-see',
        heading: 'What Clients Cannot Access',
        level: 2,
        content: 'Clients never see your internal notes, profit margins, cost breakdowns, other clients, team discussions marked as internal, or any settings. The portal shows only what is explicitly shared with that client. You control visibility at the project and file level.',
        callout: { type: 'info', text: 'Internal notes and team-only messages are clearly marked in your view so you always know what the client can and cannot see.' }
      },
      {
        id: 'branding',
        heading: 'Branding & Customization',
        level: 3,
        content: 'The portal displays your business name and logo. On Ultra, you can also use a custom domain so the portal URL matches your brand. Colors and layout follow a clean, neutral design that works well with any brand identity.'
      }
    ],
    relatedLinks: [
      { title: 'Setting Up the Portal', href: '/docs/portal/setup' },
      { title: 'Portal Features', href: '/docs/portal/features' },
      { title: 'Client Login', href: '/docs/portal/login' }
    ]
  },

  'portal/setup': {
    slug: 'portal/setup',
    title: 'Setting Up the Portal',
    metaTitle: 'Set Up the Client Portal — Clienter Docs',
    metaDescription: 'Step-by-step guide to enabling the Clienter Client Portal for a client — invite them, configure access, and customize what they see.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Client Portal', href: '/docs/portal' },
      { label: 'Setup', href: '/docs/portal/setup' }
    ],
    sections: [
      {
        id: 'enable-portal',
        heading: 'Enabling Portal Access for a Client',
        level: 2,
        content: 'Portal access is enabled per client. When you turn it on, the client receives an invitation email with a magic link to log in.',
        steps: [
          'Open a client\'s profile in Clienter.',
          'Click "Portal Access" in the sidebar or client settings.',
          'Toggle "Enable Portal" on.',
          'Verify the client\'s email address — this is where the login link is sent.',
          'Click "Send Invitation". The client receives an email with a magic link.',
          'Once the client clicks the link and logs in, their portal is active.'
        ]
      },
      {
        id: 'configure-visibility',
        heading: 'Configuring What Clients See',
        level: 2,
        content: 'By default, all projects, invoices, and shared files for a client are visible in their portal. You can control visibility at a granular level — hide specific projects from the portal, mark invoices as draft (not visible until published), and choose which files appear in the portal files section.',
        callout: { type: 'tip', text: 'Use the "Portal Visible" toggle on individual projects to control which projects appear in the client\'s portal. This is useful when you have internal or exploratory projects for a client that are not ready to share.' }
      },
      {
        id: 'custom-domain',
        heading: 'Custom Domain Setup',
        level: 2,
        content: 'Ultra plan users can serve the client portal from a custom domain like portal.youragency.com.',
        steps: [
          'Go to Settings → Portal → Custom Domain.',
          'Enter your desired subdomain (e.g., portal.youragency.com).',
          'Add the CNAME record shown to your DNS provider.',
          'Click "Verify DNS". Clienter checks the record and provisions an SSL certificate.',
          'Once verified, all portal links use your custom domain.'
        ],
        planBadge: 'Ultra',
        callout: { type: 'info', text: 'DNS propagation can take up to 48 hours. If verification fails, wait and try again. The CNAME must point to portal.clienter.co.in.' }
      },
      {
        id: 'resend-invitation',
        heading: 'Resending the Invitation',
        level: 3,
        content: 'If a client did not receive the invitation or the magic link expired, you can resend it from the client\'s profile → Portal Access → "Resend Invitation". Magic links expire after 24 hours for security. Each resend generates a new link and invalidates the previous one.'
      }
    ],
    relatedLinks: [
      { title: 'What Clients See', href: '/docs/portal/overview' },
      { title: 'Client Login', href: '/docs/portal/login' },
      { title: 'Portal Features', href: '/docs/portal/features' }
    ]
  },

  'portal/features': {
    slug: 'portal/features',
    title: 'Portal Features',
    metaTitle: 'Client Portal Features — Clienter Docs',
    metaDescription: 'Detailed breakdown of every Client Portal feature — projects, invoices, files, documents, messages, tasks, reviews, secrets, and deliverables.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Client Portal', href: '/docs/portal' },
      { label: 'Features', href: '/docs/portal/features' }
    ],
    sections: [
      {
        id: 'projects',
        heading: 'Projects',
        level: 2,
        content: 'Clients see all portal-visible projects with their status (active, paused, completed), timeline, milestones, and overall progress percentage. They cannot edit project details but can view updates in real time as you mark milestones complete or update the status.'
      },
      {
        id: 'invoices',
        heading: 'Invoices',
        level: 2,
        content: 'Published invoices appear in the portal with amount, due date, and payment status (paid, pending, overdue). Clients can download invoices as PDF. If you have enabled online payment collection, clients can pay invoices directly from the portal.'
      },
      {
        id: 'files-documents',
        heading: 'Files & Documents',
        level: 2,
        content: 'Files shared with a client are organized by project. Clients can view and download files but cannot upload unless you enable the upload permission. Documents — contracts, proposals, briefs — appear in a separate Documents section. Supported file types include images, PDFs, spreadsheets, presentations, and common design formats.'
      },
      {
        id: 'messages',
        heading: 'Messages',
        level: 2,
        content: 'The portal includes a threaded messaging interface. Clients can send messages, attach files, and reply to specific threads. Messages marked as "internal" in your Clienter dashboard are never shown in the portal. Message notifications are sent via email and push (if enabled).',
        callout: { type: 'tip', text: 'Use messages in the portal instead of email to keep all client communication searchable and attached to the right project.' }
      },
      {
        id: 'tasks',
        heading: 'Tasks',
        level: 3,
        content: 'You can assign tasks to clients — such as "send brand guidelines" or "approve homepage mockup". These tasks appear in the client\'s portal with due dates. Clients can mark tasks complete, which updates your Clienter dashboard in real time.'
      },
      {
        id: 'deliverables',
        heading: 'Deliverables',
        level: 3,
        content: 'Deliverables are completed work items you share for client review. Clients can view the deliverable, leave comments, and either approve or request revisions. Approved deliverables are marked as complete in your project timeline. This creates a clear approval trail for every piece of work.'
      },
      {
        id: 'reviews',
        heading: 'Reviews',
        level: 3,
        content: 'Clients can leave a review from their portal — a 1–5 star rating and an optional comment. Reviews feed into your review badge and public profile. You can send a review request from the client\'s profile to prompt them.'
      },
      {
        id: 'secrets',
        heading: 'Secrets',
        level: 3,
        content: 'The Secrets section is an encrypted vault for sharing sensitive information like passwords, API keys, server credentials, and license keys. Both you and the client can add secrets. Secrets are encrypted at rest and shown only after clicking "Reveal". They are never included in email notifications or exports.',
        callout: { type: 'warning', text: 'Secrets are stored encrypted, but we recommend rotating credentials after a project ends. Do not use the secrets vault for payment card numbers or banking credentials.' }
      }
    ],
    relatedLinks: [
      { title: 'What Clients See', href: '/docs/portal/overview' },
      { title: 'Setting Up the Portal', href: '/docs/portal/setup' },
      { title: 'Client Login', href: '/docs/portal/login' },
      { title: 'Client Notifications', href: '/docs/portal/notifications' }
    ]
  },

  'portal/login': {
    slug: 'portal/login',
    title: 'How Clients Log In',
    metaTitle: 'Client Portal Login — Magic Link & Password — Clienter Docs',
    metaDescription: 'How your clients access their Clienter portal — magic link login for the first visit, optional password setup for returning visits.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Client Portal', href: '/docs/portal' },
      { label: 'Login', href: '/docs/portal/login' }
    ],
    sections: [
      {
        id: 'magic-link',
        heading: 'Magic Link Login',
        level: 2,
        content: 'The first time a client accesses their portal, they use a magic link sent to their email. They click the link and are logged in instantly — no password to remember. Magic links expire after 24 hours and can only be used once. If the link expires, the client can request a new one from the portal login page.',
        callout: { type: 'info', text: 'Magic links are the default login method. Clients do not need to create an account or remember a password to access their portal.' }
      },
      {
        id: 'password-setup',
        heading: 'Setting a Password',
        level: 2,
        content: 'After logging in via magic link, clients can optionally set a password for faster access on future visits. This is done from the portal\'s Account Settings page.',
        steps: [
          'Client logs in using the magic link.',
          'Client navigates to Account Settings (profile icon → Settings).',
          'Client clicks "Set Password".',
          'Client enters and confirms a password.',
          'On future visits, the client can log in with their email and password, or still use a magic link.'
        ]
      },
      {
        id: 'session-security',
        heading: 'Session & Security',
        level: 2,
        content: 'Portal sessions last 30 days by default. After 30 days of inactivity, the client is logged out and needs to use a magic link or password to log in again. Sessions are device-specific — logging in on a new browser or device requires a fresh login. There is no "remember me" option for security reasons.',
        callout: { type: 'tip', text: 'If a client reports being unable to log in, check their email address in Clienter — the magic link is sent to the email on file. Typos in the email field are the most common cause of login issues.' }
      },
      {
        id: 'revoking-access',
        heading: 'Revoking Portal Access',
        level: 3,
        content: 'You can revoke a client\'s portal access at any time from their profile → Portal Access → toggle off "Enable Portal". This immediately invalidates all active sessions and magic links. The client sees a "Portal access has been disabled" message if they try to log in. Re-enabling portal access requires sending a new invitation.'
      }
    ],
    relatedLinks: [
      { title: 'Setting Up the Portal', href: '/docs/portal/setup' },
      { title: 'Client Notifications', href: '/docs/portal/notifications' },
      { title: 'Portal Features', href: '/docs/portal/features' }
    ]
  },

  'portal/notifications': {
    slug: 'portal/notifications',
    title: 'Client Notifications & Push',
    metaTitle: 'Client Portal Notifications — Clienter Docs',
    metaDescription: 'How Clienter notifies your clients about project updates, new messages, invoices, and deliverables — email and push notifications.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Client Portal', href: '/docs/portal' },
      { label: 'Notifications', href: '/docs/portal/notifications' }
    ],
    sections: [
      {
        id: 'notification-types',
        heading: 'What Triggers a Notification',
        level: 2,
        content: 'Clients receive notifications for: new messages from you or your team, new invoices published to the portal, project status changes (e.g., moved to "completed"), new files or documents shared, deliverables ready for review, task assignments and due date reminders, and review requests. Each notification type can be enabled or disabled by the client from their portal settings.'
      },
      {
        id: 'email-notifications',
        heading: 'Email Notifications',
        level: 2,
        content: 'Email is the primary notification channel. When an event occurs, the client receives an email with a summary and a direct link to the relevant item in the portal. Emails are sent from notifications@clienter.co.in. Clients can unsubscribe from non-essential emails (like status updates) while keeping critical ones (like invoice notifications) active.',
        callout: { type: 'info', text: 'Emails include your business name in the subject line so clients recognize them. Example: "New message from Acme Design Studio — Clienter".' }
      },
      {
        id: 'push-notifications',
        heading: 'Push Notifications',
        level: 2,
        content: 'If a client accesses the portal from a mobile browser or installs it as a PWA (Progressive Web App), they can opt in to push notifications. Push notifications deliver real-time alerts for messages and deliverable approvals. Clients can enable push from their portal Account Settings → Notifications.',
        callout: { type: 'tip', text: 'Encourage clients to add the portal to their home screen on mobile — this enables push notifications and gives them app-like access without downloading anything.' }
      },
      {
        id: 'notification-controls',
        heading: 'Your Controls Over Client Notifications',
        level: 3,
        content: 'As the account owner, you can configure default notification preferences for all portal clients from Settings → Portal → Notifications. You can also disable specific notification types globally — for example, turning off task reminder emails for all clients. Individual clients can still override these defaults from their own portal settings.'
      },
      {
        id: 'quiet-hours',
        heading: 'Quiet Hours',
        level: 3,
        content: 'Clienter respects quiet hours for email notifications. Notifications triggered between 10 PM and 7 AM in the client\'s local timezone are queued and delivered at 7 AM. Push notifications are not affected by quiet hours — they are delivered immediately. You can adjust the quiet hours window from Settings → Portal → Notifications.',
        callout: { type: 'info', text: 'Quiet hours are based on the client\'s timezone, which is auto-detected from their browser. Clients can manually set their timezone in portal Account Settings.' }
      }
    ],
    relatedLinks: [
      { title: 'Portal Features', href: '/docs/portal/features' },
      { title: 'Client Login', href: '/docs/portal/login' },
      { title: 'Setting Up the Portal', href: '/docs/portal/setup' },
      { title: 'Client Portal Overview', href: '/docs/portal' }
    ]
  }
}
