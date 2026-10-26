import type { HelpArticle } from '../docs/types'

const SUPPORT_LINE = 'Still need help? Contact us at support@clienter.co.in or use the Help button in the app.'

export const HELP_ACCOUNT_BILLING_CLIENTS: Record<string, HelpArticle> = {
  // ─── ACCOUNT ────────────────────────────────────────────────────────
  'account/signup': {
    slug: 'account/signup',
    title: 'How do I create an account?',
    metaTitle: 'Create a Clienter Account | Help Center',
    metaDescription: 'Sign up for Clienter in under a minute using email or Google. Start managing clients, projects, and invoices for free.',
    category: 'Account & Profile',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Account & Profile', href: '/help/account' },
      { label: 'How do I create an account?', href: '/help/account/signup' },
    ],
    answer: 'You can create a Clienter account for free using your email address or your Google account. The entire process takes less than a minute.',
    steps: [
      'Go to app.clienter.co.in/signup or click "Get Started" on the Clienter homepage.',
      'Choose "Continue with Google" for one-click signup, or enter your name, email address, and a strong password.',
      'If you signed up with email, check your inbox for a verification link and click it to confirm your address.',
      'Complete the onboarding wizard — choose your role (freelancer, agency, or team), name your organization, and optionally invite teammates.',
      'You\'re in! Your Free plan is active immediately with 3 clients, 5 projects, and 1 teammate included.',
    ],
    sections: [
      {
        id: 'google-signup',
        heading: 'Signing up with Google',
        level: 3,
        content: 'When you choose Google signup, Clienter only requests your name and email — we never access your contacts, calendar, or drive. You can add a password later from Settings > Security if you want both login methods.',
      },
      {
        id: 'verification-email',
        heading: 'Didn\'t receive the verification email?',
        level: 3,
        content: 'Check your spam or promotions folder first. If the email still hasn\'t arrived after 5 minutes, click "Resend verification email" on the login page. Make sure you entered the correct email address during signup.',
        callout: { type: 'tip', text: 'Add noreply@clienter.co.in to your contacts so future emails from Clienter land in your primary inbox.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I log in?', href: '/help/account/login' },
      { title: 'What\'s included in each plan?', href: '/help/billing/plans' },
    ],
    relatedDocs: [
      { title: 'Getting Started Guide', href: '/docs/getting-started' },
    ],
  },

  'account/login': {
    slug: 'account/login',
    title: 'How do I log in?',
    metaTitle: 'Log In to Clienter | Help Center',
    metaDescription: 'Log in to your Clienter account with email and password or Google. Troubleshoot common login issues.',
    category: 'Account & Profile',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Account & Profile', href: '/help/account' },
      { label: 'How do I log in?', href: '/help/account/login' },
    ],
    answer: 'Visit app.clienter.co.in/login and sign in with your email and password, or use "Continue with Google" if you signed up that way.',
    steps: [
      'Go to app.clienter.co.in/login.',
      'Enter the email address you used during signup.',
      'Type your password and click "Log In", or click "Continue with Google" to authenticate with your Google account.',
      'If you belong to multiple organizations, select the one you want to open.',
    ],
    sections: [
      {
        id: 'login-issues',
        heading: 'Common login issues',
        level: 3,
        content: 'If you see "Invalid credentials", double-check that you\'re using the same method you signed up with — email accounts and Google accounts are separate. If you forgot your password, use the "Forgot password?" link on the login page.',
      },
      {
        id: 'account-locked',
        heading: 'Account temporarily locked',
        level: 3,
        content: 'After 5 failed login attempts, your account is locked for 15 minutes as a security measure. Wait and try again, or reset your password immediately.',
        callout: { type: 'warning', text: 'If you suspect someone else is trying to access your account, reset your password right away and enable two-factor authentication from Settings > Security.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I reset my password?', href: '/help/account/password-reset' },
      { title: 'How do I create an account?', href: '/help/account/signup' },
    ],
    relatedDocs: [
      { title: 'Getting Started Guide', href: '/docs/getting-started' },
    ],
  },

  'account/password-reset': {
    slug: 'account/password-reset',
    title: 'How do I reset my password?',
    metaTitle: 'Reset Your Clienter Password | Help Center',
    metaDescription: 'Forgot your Clienter password? Reset it in a few steps using your registered email address.',
    category: 'Account & Profile',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Account & Profile', href: '/help/account' },
      { label: 'How do I reset my password?', href: '/help/account/password-reset' },
    ],
    answer: 'You can reset your password from the login page at any time. A password-reset link will be sent to your registered email address.',
    steps: [
      'Go to app.clienter.co.in/login and click "Forgot password?".',
      'Enter the email address associated with your Clienter account.',
      'Check your inbox for an email from Clienter with the subject "Reset your password".',
      'Click the reset link in the email — it expires after 1 hour.',
      'Enter and confirm your new password. It must be at least 8 characters with a mix of letters and numbers.',
      'Click "Reset Password". You\'ll be logged in automatically.',
    ],
    sections: [
      {
        id: 'no-reset-email',
        heading: 'Didn\'t receive the reset email?',
        level: 3,
        content: 'Check your spam folder and make sure you entered the correct email address. If you originally signed up with Google, there is no password to reset — use "Continue with Google" on the login page instead. You can add a password from Settings > Security after logging in with Google.',
        callout: { type: 'info', text: 'Password reset links are single-use. If you click the link a second time, you\'ll need to request a new one.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I log in?', href: '/help/account/login' },
    ],
    relatedDocs: [
      { title: 'Account & Security Settings', href: '/docs/settings/account' },
    ],
  },

  'account/delete': {
    slug: 'account/delete',
    title: 'How do I delete my account?',
    metaTitle: 'Delete Your Clienter Account | Help Center',
    metaDescription: 'Learn how to permanently delete your Clienter account. There is a 30-day recovery window before data is erased.',
    category: 'Account & Profile',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Account & Profile', href: '/help/account' },
      { label: 'How do I delete my account?', href: '/help/account/delete' },
    ],
    answer: 'You can delete your account from Settings. After requesting deletion, your account enters a 30-day soft-delete period during which you can recover it by simply logging back in. After 30 days, all data is permanently erased.',
    steps: [
      'Go to Settings > Account.',
      'Scroll to the "Danger Zone" section and click "Delete Account".',
      'Type your email address to confirm, then click "Delete My Account".',
      'Your account is now in a 30-day soft-delete state. You\'ll be logged out immediately.',
      'To recover your account within the 30-day window, simply log in with your credentials and confirm the recovery prompt.',
    ],
    sections: [
      {
        id: 'what-gets-deleted',
        heading: 'What gets deleted?',
        level: 3,
        content: 'After the 30-day grace period, all your data is permanently removed: clients, projects, invoices, proposals, contracts, files, and team data. If you are the only owner of an organization, that organization and all its data will also be deleted.',
        callout: { type: 'warning', text: 'Export your data before deleting. Go to Settings > Account > Export Data to download a ZIP of your clients, invoices, and project records.' },
      },
      {
        id: 'active-subscription',
        heading: 'Deleting with an active subscription',
        level: 3,
        content: 'If you have an active Pro or Ultra subscription, cancel it first from Settings > Billing. Any remaining paid time will still be honored, but your account deletion will be queued for after the current billing cycle ends.',
      },
    ],
    relatedLinks: [
      { title: 'How do I cancel my subscription?', href: '/help/billing/cancel' },
    ],
    relatedDocs: [
      { title: 'Account & Security Settings', href: '/docs/settings/account' },
    ],
  },

  'account/switch-org': {
    slug: 'account/switch-org',
    title: 'Can I switch between organizations?',
    metaTitle: 'Switch Between Organizations in Clienter | Help Center',
    metaDescription: 'Manage multiple businesses or teams by switching between organizations in Clienter without logging out.',
    category: 'Account & Profile',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Account & Profile', href: '/help/account' },
      { label: 'Can I switch between organizations?', href: '/help/account/switch-org' },
    ],
    answer: 'Yes. If you belong to more than one organization — for example, your own freelance practice and a client\'s agency — you can switch between them instantly without logging out.',
    steps: [
      'Click your organization name or avatar in the bottom-left corner of the sidebar.',
      'A dropdown will show all organizations linked to your account.',
      'Click the organization you want to switch to. The app will reload with that organization\'s data.',
    ],
    sections: [
      {
        id: 'create-new-org',
        heading: 'Creating a new organization',
        level: 3,
        content: 'In the same organization switcher dropdown, click "Create Organization" to set up a new workspace. Each organization has its own plan, billing, clients, and team members. Your personal login stays the same across all of them.',
        callout: { type: 'info', text: 'Each organization has its own separate subscription. A Pro plan on one organization does not carry over to another.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I create an account?', href: '/help/account/signup' },
    ],
    relatedDocs: [
      { title: 'Team & Organization Settings', href: '/docs/settings/organization' },
    ],
  },

  // ─── BILLING ────────────────────────────────────────────────────────
  'billing/plans': {
    slug: 'billing/plans',
    title: 'What\'s included in each plan?',
    metaTitle: 'Clienter Pricing Plans Compared | Help Center',
    metaDescription: 'Compare Clienter Free, Pro, and Ultra plans. See client limits, project caps, AI generations, and premium features.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'What\'s included in each plan?', href: '/help/billing/plans' },
    ],
    answer: 'Clienter offers three plans: Free, Pro, and Ultra. Every plan includes the core platform — client management, projects, invoicing, proposals, and a client portal. Paid plans unlock higher limits and premium features.',
    sections: [
      {
        id: 'free-plan',
        heading: 'Free — ₹0/month',
        level: 2,
        content: 'The Free plan is perfect for solo freelancers just getting started. It includes up to 3 clients, 5 projects, 1 teammate, 20 leads, 1 client portal, and 3 AI-powered content generations per month. You get access to invoicing, proposals, contracts, a basic client portal, and expense tracking — no credit card required.',
      },
      {
        id: 'pro-plan',
        heading: 'Pro — ₹199/month or $19/month',
        level: 2,
        content: 'Pro is built for growing freelancers and small agencies. It includes up to 20 clients, 40 projects, 5 teammates, 200 leads, and 25 AI generations per month. On top of everything in Free, you unlock advanced invoicing, recurring invoices, multi-currency support, priority email support, and custom branding for your client portal.',
        callout: { type: 'tip', text: 'Pro is the most popular plan for freelancers scaling their business. The annual plan saves you roughly 20%.' },
      },
      {
        id: 'ultra-plan',
        heading: 'Ultra — ₹799/month or $39/month',
        level: 2,
        content: 'Ultra is the full-power plan for established agencies and teams. It includes expanded client, project, and teammate limits, unlimited leads, payroll management, white-label branding (remove Clienter branding entirely), third-party integrations, unlimited AI generations, dedicated account support, and API access.',
      },
      {
        id: 'comparison',
        heading: 'Quick comparison',
        level: 2,
        content: '| Feature | Free | Pro | Ultra |\n|---|---|---|---|\n| Clients | 3 | 20 | Expanded |\n| Projects | 5 | 40 | Expanded |\n| Teammates | 1 | 5 | Expanded |\n| Leads | 20 | 200 | Unlimited |\n| Client Portals | 1 | Included | Included |\n| AI Generations | 3/mo | 25/mo | Unlimited |\n| Payroll | — | — | Yes |\n| White-Label | — | — | Yes |\n| Integrations | — | — | Yes |',
      },
    ],
    relatedLinks: [
      { title: 'How do I upgrade to Pro or Ultra?', href: '/help/billing/upgrade' },
      { title: 'What happens if I downgrade?', href: '/help/billing/downgrade' },
    ],
    relatedDocs: [
      { title: 'Pricing Page', href: '/pricing' },
    ],
  },

  'billing/upgrade': {
    slug: 'billing/upgrade',
    title: 'How do I upgrade to Pro or Ultra?',
    metaTitle: 'Upgrade Your Clienter Plan | Help Center',
    metaDescription: 'Upgrade to Clienter Pro or Ultra in a few clicks. Your new features activate instantly after payment.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'How do I upgrade to Pro or Ultra?', href: '/help/billing/upgrade' },
    ],
    answer: 'You can upgrade at any time from Settings > Billing. The upgrade takes effect immediately, and you\'re only charged the prorated difference for the rest of your current billing cycle.',
    steps: [
      'Go to Settings > Billing.',
      'Click "Upgrade Plan" next to the plan you want (Pro or Ultra).',
      'Choose monthly or annual billing. Annual billing saves you roughly 20%.',
      'Enter your payment details — we accept credit/debit cards and PayPal.',
      'Click "Confirm Upgrade". Your new limits and features activate instantly.',
    ],
    sections: [
      {
        id: 'proration',
        heading: 'How proration works',
        level: 3,
        content: 'When you upgrade mid-cycle, Clienter calculates the unused portion of your current plan and applies it as a credit toward the new plan. You only pay the difference. For example, if you upgrade from Free to Pro halfway through the month, you pay roughly half the Pro price for that first month.',
      },
      {
        id: 'international-billing',
        heading: 'International billing',
        level: 3,
        content: 'Indian users are billed in INR. International users are billed in USD. Your billing currency is determined by your payment method\'s country and cannot be changed manually.',
        callout: { type: 'info', text: 'All prices are exclusive of applicable taxes (GST for India, VAT for the EU).' },
      },
    ],
    relatedLinks: [
      { title: 'What\'s included in each plan?', href: '/help/billing/plans' },
      { title: 'Where can I find my invoices?', href: '/help/billing/invoice' },
    ],
    relatedDocs: [
      { title: 'Pricing Page', href: '/pricing' },
    ],
  },

  'billing/downgrade': {
    slug: 'billing/downgrade',
    title: 'What happens if I downgrade?',
    metaTitle: 'Downgrading Your Clienter Plan | Help Center',
    metaDescription: 'Understand what happens when you downgrade your Clienter plan, including grace periods and read-only records.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'What happens if I downgrade?', href: '/help/billing/downgrade' },
    ],
    answer: 'When you downgrade, you keep access to your current plan\'s features until the end of your billing cycle. After that, your account moves to the lower plan. Records that exceed the new plan\'s limits become read-only — nothing is deleted.',
    steps: [
      'Go to Settings > Billing.',
      'Click "Change Plan" and select the plan you want to downgrade to.',
      'Confirm the downgrade. You\'ll retain your current features until the billing period ends.',
    ],
    sections: [
      {
        id: 'grace-period',
        heading: 'Grace period',
        level: 2,
        content: 'Your current plan stays active until the end of the billing cycle you\'ve already paid for. If you downgrade on day 10 of a monthly cycle, you keep Pro or Ultra features for the remaining 20 days.',
      },
      {
        id: 'read-only',
        heading: 'What happens to excess data?',
        level: 2,
        content: 'If you have 15 clients on Pro and downgrade to Free (3-client limit), your extra 12 clients and their projects become read-only. You can view them and export their data, but you cannot edit them, create new invoices for them, or add new projects under them. To regain full access, either upgrade again or archive clients until you\'re within the Free plan\'s limits.',
        callout: { type: 'warning', text: 'No data is ever deleted during a downgrade. Your records are preserved in read-only mode for as long as your account exists.' },
      },
      {
        id: 'features-lost',
        heading: 'Features you\'ll lose',
        level: 3,
        content: 'Premium features like white-label branding, payroll, third-party integrations, and advanced AI generations are disabled once the downgrade takes effect. Any white-label portals will revert to showing Clienter branding.',
      },
    ],
    relatedLinks: [
      { title: 'What\'s included in each plan?', href: '/help/billing/plans' },
      { title: 'How do I cancel my subscription?', href: '/help/billing/cancel' },
    ],
    relatedDocs: [
      { title: 'Pricing Page', href: '/pricing' },
    ],
  },

  'billing/payment-failed': {
    slug: 'billing/payment-failed',
    title: 'My payment failed, what do I do?',
    metaTitle: 'Fix a Failed Payment on Clienter | Help Center',
    metaDescription: 'Resolve a failed Clienter payment by updating your card, retrying, or switching payment methods.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'My payment failed, what do I do?', href: '/help/billing/payment-failed' },
    ],
    answer: 'Failed payments are usually caused by an expired card, insufficient funds, or a bank block. Clienter will retry the charge automatically, but you can also fix it manually right away.',
    steps: [
      'Go to Settings > Billing. A banner at the top will explain the failure reason if one is available.',
      'Click "Update Payment Method" and enter a valid credit/debit card or switch to PayPal.',
      'Click "Retry Payment" to process the charge immediately.',
      'If the payment succeeds, your plan continues without interruption.',
    ],
    sections: [
      {
        id: 'retry-schedule',
        heading: 'Automatic retry schedule',
        level: 3,
        content: 'Clienter automatically retries failed payments on days 1, 3, and 7 after the initial failure. If all retries fail, your account is downgraded to the Free plan at the end of the retry window. Your data is preserved in read-only mode, exactly like a voluntary downgrade.',
      },
      {
        id: 'bank-blocks',
        heading: 'International or bank-side blocks',
        level: 3,
        content: 'Some banks flag recurring international charges. If you see a "declined by issuer" error, call your bank and authorize the charge from Clienter (processed via our payment partner). Alternatively, switch to PayPal for a smoother international experience.',
        callout: { type: 'tip', text: 'You can switch between card and PayPal at any time from Settings > Billing without losing your subscription.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I upgrade to Pro or Ultra?', href: '/help/billing/upgrade' },
      { title: 'Where can I find my invoices?', href: '/help/billing/invoice' },
    ],
    relatedDocs: [
      { title: 'Billing & Payments Docs', href: '/docs/billing' },
    ],
  },

  'billing/cancel': {
    slug: 'billing/cancel',
    title: 'How do I cancel my subscription?',
    metaTitle: 'Cancel Your Clienter Subscription | Help Center',
    metaDescription: 'Cancel your Clienter Pro or Ultra subscription anytime. Keep access until the end of your billing cycle.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'How do I cancel my subscription?', href: '/help/billing/cancel' },
    ],
    answer: 'You can cancel your subscription at any time from Settings > Billing. After cancellation, you keep access to all paid features until the end of your current billing cycle, then your account moves to the Free plan.',
    steps: [
      'Go to Settings > Billing.',
      'Click "Cancel Subscription".',
      'Select a reason for cancelling (optional but helpful for us).',
      'Confirm by clicking "Yes, Cancel".',
      'Your subscription status changes to "Cancelling" — you keep paid features until the period ends.',
    ],
    sections: [
      {
        id: 'after-cancellation',
        heading: 'What happens after cancellation?',
        level: 3,
        content: 'Once the billing cycle ends, your account reverts to the Free plan. Clients and projects exceeding Free limits become read-only. No data is deleted. You can resubscribe at any time to restore full access instantly.',
      },
      {
        id: 'annual-cancellation',
        heading: 'Cancelling an annual subscription',
        level: 3,
        content: 'Annual subscriptions follow the same process. After cancelling, you retain access for the remainder of the year you paid for. Partial refunds for unused months on annual plans are handled on a case-by-case basis — contact support@clienter.co.in.',
        callout: { type: 'info', text: 'Cancelling stops future charges. It does not delete your account or your data.' },
      },
    ],
    relatedLinks: [
      { title: 'What happens if I downgrade?', href: '/help/billing/downgrade' },
      { title: 'How do I delete my account?', href: '/help/account/delete' },
      { title: 'What\'s your refund policy?', href: '/help/billing/refund' },
    ],
    relatedDocs: [
      { title: 'Billing & Payments Docs', href: '/docs/billing' },
    ],
  },

  'billing/invoice': {
    slug: 'billing/invoice',
    title: 'Where can I find my subscription invoices?',
    metaTitle: 'Download Clienter Subscription Invoices | Help Center',
    metaDescription: 'View and download PDF invoices for all your Clienter subscription payments from Settings.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'Where can I find my subscription invoices?', href: '/help/billing/invoice' },
    ],
    answer: 'All your subscription invoices are available in Settings > Billing > Invoice History. You can view, download, or email any invoice as a PDF.',
    steps: [
      'Go to Settings > Billing.',
      'Scroll down to "Invoice History".',
      'Each row shows the date, amount, plan, and payment status.',
      'Click the download icon next to any invoice to save it as a PDF.',
    ],
    sections: [
      {
        id: 'invoice-details',
        heading: 'What\'s on the invoice?',
        level: 3,
        content: 'Each invoice includes your organization name, billing address, plan name, billing period, amount paid, taxes (GST/VAT where applicable), and payment method. If you need to update the organization name or address on future invoices, change it in Settings > Organization before the next billing cycle.',
      },
      {
        id: 'missing-invoice',
        heading: 'Missing an invoice?',
        level: 3,
        content: 'Invoices are generated immediately after a successful payment. If a payment failed and was retried, the invoice corresponds to the successful charge date. If you still can\'t find an invoice, contact support@clienter.co.in with the approximate date and amount.',
      },
    ],
    relatedLinks: [
      { title: 'My payment failed, what do I do?', href: '/help/billing/payment-failed' },
    ],
    relatedDocs: [
      { title: 'Billing & Payments Docs', href: '/docs/billing' },
    ],
  },

  'billing/refund': {
    slug: 'billing/refund',
    title: 'What\'s your refund policy?',
    metaTitle: 'Clienter Refund Policy | Help Center',
    metaDescription: 'Learn about Clienter\'s refund policy for monthly and annual subscriptions, including how to request a refund.',
    category: 'Billing & Subscription',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Billing & Subscription', href: '/help/billing' },
      { label: 'What\'s your refund policy?', href: '/help/billing/refund' },
    ],
    answer: 'Clienter offers a full refund within 7 days of your first paid subscription if you\'re not satisfied. After the 7-day window, monthly plans are not refundable, but annual plans may qualify for a prorated refund on a case-by-case basis.',
    sections: [
      {
        id: 'first-time-refund',
        heading: '7-day money-back guarantee',
        level: 2,
        content: 'If this is your first time subscribing to a paid Clienter plan and you\'re not satisfied, you can request a full refund within 7 days of the charge. This applies to both monthly and annual plans. To request it, email support@clienter.co.in with your account email and the reason for the refund.',
      },
      {
        id: 'monthly-refunds',
        heading: 'Monthly subscriptions',
        level: 2,
        content: 'After the 7-day window, monthly subscriptions are not refundable. When you cancel, you keep access until the end of the billing period, but no partial refund is issued for unused days.',
      },
      {
        id: 'annual-refunds',
        heading: 'Annual subscriptions',
        level: 2,
        content: 'Annual plan refunds beyond the 7-day window are evaluated on a case-by-case basis. If approved, the refund is prorated based on the number of full unused months remaining. Contact support@clienter.co.in to discuss your situation.',
        callout: { type: 'info', text: 'Refunds are typically processed within 5-10 business days back to the original payment method.' },
      },
      {
        id: 'duplicate-charges',
        heading: 'Duplicate or accidental charges',
        level: 3,
        content: 'If you were charged twice or see an unexpected charge, email support@clienter.co.in immediately with the transaction details. We\'ll investigate and issue a refund for any erroneous charges within 3 business days.',
      },
    ],
    relatedLinks: [
      { title: 'How do I cancel my subscription?', href: '/help/billing/cancel' },
      { title: 'Where can I find my invoices?', href: '/help/billing/invoice' },
    ],
    relatedDocs: [
      { title: 'Terms of Service', href: '/legal/terms' },
    ],
  },

  // ─── CLIENTS ────────────────────────────────────────────────────────
  'clients/add': {
    slug: 'clients/add',
    title: 'How do I add a client?',
    metaTitle: 'Add a Client in Clienter | Help Center',
    metaDescription: 'Add a new client to Clienter with their details, company info, and billing preferences in a few clicks.',
    category: 'Client Management',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Management', href: '/help/clients' },
      { label: 'How do I add a client?', href: '/help/clients/add' },
    ],
    answer: 'You can add a client from the Clients section of the dashboard. Fill in their basic info and you\'re ready to create projects, send invoices, and share a portal with them.',
    steps: [
      'Go to the Clients page from the sidebar.',
      'Click the "+ Add Client" button in the top-right corner.',
      'Enter the client\'s name, email address, and optionally their company name, phone number, and billing address.',
      'Choose a label or tag to categorize the client (e.g., "Active", "Lead", or a custom tag).',
      'Click "Save Client". The client is now in your directory and ready for projects and invoices.',
    ],
    sections: [
      {
        id: 'required-fields',
        heading: 'Required vs. optional fields',
        level: 3,
        content: 'Only the client\'s name is strictly required. However, adding an email address is strongly recommended — it\'s needed for sending invoices, proposals, and portal invitations. You can always edit and add more details later.',
      },
      {
        id: 'bulk-import',
        heading: 'Importing clients in bulk',
        level: 3,
        content: 'If you\'re migrating from another tool, you can import clients via CSV. Go to Clients > Import and upload a CSV file with columns for name, email, company, and phone. Clienter will map the columns and let you review before importing.',
        callout: { type: 'tip', text: 'Download the sample CSV template from the import page to make sure your columns match Clienter\'s expected format.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I edit client details?', href: '/help/clients/edit' },
      { title: 'How do I invite a client to the portal?', href: '/help/clients/portal-invite' },
      { title: 'I\'ve hit my client limit, what do I do?', href: '/help/clients/limits' },
    ],
    relatedDocs: [
      { title: 'Client Management Docs', href: '/docs/clients' },
    ],
  },

  'clients/edit': {
    slug: 'clients/edit',
    title: 'How do I edit client details?',
    metaTitle: 'Edit Client Details in Clienter | Help Center',
    metaDescription: 'Update a client\'s name, email, company, billing address, or tags in Clienter at any time.',
    category: 'Client Management',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Management', href: '/help/clients' },
      { label: 'How do I edit client details?', href: '/help/clients/edit' },
    ],
    answer: 'You can edit any client\'s details at any time from their profile page. Changes take effect immediately and are reflected on all future invoices and proposals.',
    steps: [
      'Go to the Clients page from the sidebar.',
      'Click on the client you want to edit.',
      'On the client profile page, click "Edit" or click directly on any field to modify it inline.',
      'Update the information — name, email, company, phone, billing address, tags, or notes.',
      'Click "Save" to apply the changes.',
    ],
    sections: [
      {
        id: 'existing-invoices',
        heading: 'Effect on existing invoices',
        level: 3,
        content: 'Editing a client\'s details does not retroactively change invoices or proposals that have already been sent or finalized. Only new documents will use the updated information. If you need to correct a sent invoice, void it and create a new one.',
      },
    ],
    relatedLinks: [
      { title: 'How do I add a client?', href: '/help/clients/add' },
      { title: 'Can I delete a client?', href: '/help/clients/delete' },
    ],
    relatedDocs: [
      { title: 'Client Management Docs', href: '/docs/clients' },
    ],
  },

  'clients/delete': {
    slug: 'clients/delete',
    title: 'Can I delete a client?',
    metaTitle: 'Delete a Client in Clienter | Help Center',
    metaDescription: 'Understand the consequences of deleting a client in Clienter, including permanent loss of revenue history.',
    category: 'Client Management',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Management', href: '/help/clients' },
      { label: 'Can I delete a client?', href: '/help/clients/delete' },
    ],
    answer: 'Yes, you can delete a client, but proceed with caution. Deleting a client permanently removes them and destroys all associated revenue history, invoices, and project records. This action cannot be undone.',
    steps: [
      'Go to the Clients page and select the client.',
      'Click the three-dot menu on the client profile page and choose "Delete Client".',
      'Read the warning carefully — it lists everything that will be permanently deleted.',
      'Type the client\'s name to confirm, then click "Delete Permanently".',
    ],
    sections: [
      {
        id: 'what-is-deleted',
        heading: 'What gets permanently deleted?',
        level: 2,
        content: 'Deleting a client removes their profile, all invoices and payment records, all projects and tasks, proposals, contracts, files, portal access, and any associated revenue data from your reports and analytics. This directly impacts your historical revenue reports.',
        callout: { type: 'warning', text: 'Deleting a client destroys revenue history permanently. If you just want to stop working with a client, archive them instead — their data is preserved but hidden from your active view.' },
      },
      {
        id: 'archive-instead',
        heading: 'Archiving as an alternative',
        level: 2,
        content: 'To archive a client, open their profile, click the three-dot menu, and select "Archive". Archived clients don\'t count toward your plan limits and are hidden from the default client list, but all their data — invoices, projects, revenue history — is fully preserved. You can unarchive them at any time.',
      },
    ],
    relatedLinks: [
      { title: 'How do I edit client details?', href: '/help/clients/edit' },
      { title: 'I\'ve hit my client limit, what do I do?', href: '/help/clients/limits' },
    ],
    relatedDocs: [
      { title: 'Client Management Docs', href: '/docs/clients' },
    ],
  },

  'clients/portal-invite': {
    slug: 'clients/portal-invite',
    title: 'How do I invite a client to the portal?',
    metaTitle: 'Invite a Client to Their Portal in Clienter | Help Center',
    metaDescription: 'Send a portal invitation to your client so they can view projects, invoices, and files in their own dashboard.',
    category: 'Client Management',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Management', href: '/help/clients' },
      { label: 'How do I invite a client to the portal?', href: '/help/clients/portal-invite' },
    ],
    answer: 'The client portal gives your clients a branded dashboard where they can view projects, approve proposals, pay invoices, and share files. You can invite them with a single click.',
    steps: [
      'Go to the Clients page and select the client.',
      'Click the "Portal" tab on their profile page.',
      'Click "Invite to Portal".',
      'Verify the client\'s email address (this is where the invitation will be sent).',
      'Click "Send Invitation". The client will receive an email with a link to set up their portal access.',
    ],
    sections: [
      {
        id: 'portal-access',
        heading: 'What can clients see in the portal?',
        level: 3,
        content: 'Clients can view their active projects and progress, pending and paid invoices, proposals awaiting approval, shared files and documents, and any messages you send through the portal. They cannot see your internal notes, cost breakdowns, profit margins, or other clients\' data.',
      },
      {
        id: 'portal-customization',
        heading: 'Customizing the portal',
        level: 3,
        content: 'On Pro plans, you can add your logo and brand colors to the portal. On Ultra, you can fully white-label the portal — removing all Clienter branding and using your own custom domain.',
        callout: { type: 'info', text: 'Each client gets their own portal link. The Free plan includes 1 client portal. Pro and Ultra include portals for all clients.' },
      },
      {
        id: 'resend-invite',
        heading: 'Client didn\'t receive the invite?',
        level: 3,
        content: 'Check that the email address on file is correct. You can resend the invitation from the Portal tab at any time. Ask your client to check their spam folder for an email from portal@clienter.co.in.',
      },
    ],
    relatedLinks: [
      { title: 'How do I add a client?', href: '/help/clients/add' },
      { title: 'How do I collect client reviews?', href: '/help/clients/reviews' },
    ],
    relatedDocs: [
      { title: 'Client Portal Docs', href: '/docs/client-portal' },
    ],
  },

  'clients/reviews': {
    slug: 'clients/reviews',
    title: 'How do I collect client reviews?',
    metaTitle: 'Collect Client Reviews in Clienter | Help Center',
    metaDescription: 'Request and collect client reviews and testimonials through Clienter to build social proof for your business.',
    category: 'Client Management',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Management', href: '/help/clients' },
      { label: 'How do I collect client reviews?', href: '/help/clients/reviews' },
    ],
    answer: 'Clienter lets you request reviews from clients directly through the platform. Clients receive a simple form via email, and their responses appear on your profile and can be displayed on your client portal or website.',
    steps: [
      'Go to the Clients page and select the client.',
      'Click the "Reviews" tab on their profile.',
      'Click "Request Review".',
      'Optionally customize the review request message.',
      'Click "Send". The client receives an email with a link to leave a star rating and written testimonial.',
    ],
    sections: [
      {
        id: 'managing-reviews',
        heading: 'Managing reviews',
        level: 3,
        content: 'Once a client submits a review, it appears in your Reviews dashboard. You can approve, hide, or feature reviews. Featured reviews are highlighted on your public profile and client portal. You can also copy a review as a testimonial snippet for your website.',
      },
      {
        id: 'review-tips',
        heading: 'Tips for getting great reviews',
        level: 3,
        content: 'Send the review request right after completing a successful project, while the experience is fresh. Keep the message personal — Clienter lets you customize the email. Follow up once if the client hasn\'t responded within a week; you can resend the request from the Reviews tab.',
        callout: { type: 'tip', text: 'Clients are more likely to leave a review when the request comes within 48 hours of project completion.' },
      },
    ],
    relatedLinks: [
      { title: 'How do I invite a client to the portal?', href: '/help/clients/portal-invite' },
    ],
    relatedDocs: [
      { title: 'Reviews & Testimonials Docs', href: '/docs/reviews' },
    ],
  },

  'clients/limits': {
    slug: 'clients/limits',
    title: 'I\'ve hit my client limit, what do I do?',
    metaTitle: 'Client Limit Reached in Clienter | Help Center',
    metaDescription: 'Reached your client limit on Clienter? Learn how to upgrade your plan or archive inactive clients to free up space.',
    category: 'Client Management',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Management', href: '/help/clients' },
      { label: 'I\'ve hit my client limit, what do I do?', href: '/help/clients/limits' },
    ],
    answer: 'When you reach your plan\'s client limit, you cannot add new clients until you either upgrade to a higher plan or archive inactive clients to free up slots.',
    sections: [
      {
        id: 'check-limit',
        heading: 'Checking your current usage',
        level: 2,
        content: 'Go to Settings > Billing to see how many client slots you\'ve used. The Free plan allows 3 clients, Pro allows 20, and Ultra offers an expanded limit. Archived clients do not count toward your limit.',
      },
      {
        id: 'option-upgrade',
        heading: 'Option 1: Upgrade your plan',
        level: 2,
        content: 'The fastest solution is to upgrade. Pro gives you 20 client slots (from Free\'s 3), and Ultra expands the limit further. Upgrading takes effect instantly — you can add new clients right away.',
        steps: [
          'Go to Settings > Billing.',
          'Click "Upgrade Plan" and choose Pro or Ultra.',
          'Complete payment. Your new limit is active immediately.',
        ],
      },
      {
        id: 'option-archive',
        heading: 'Option 2: Archive inactive clients',
        level: 2,
        content: 'If you have clients you\'re no longer actively working with, archive them to free up slots without losing any data. Archived clients can be viewed in the "Archived" filter and unarchived at any time.',
        steps: [
          'Go to the Clients page.',
          'Click the three-dot menu on an inactive client and select "Archive".',
          'The client is moved to the archive and their slot is freed up.',
        ],
        callout: { type: 'tip', text: 'Archiving is non-destructive. Unlike deleting, it preserves all revenue history, invoices, and project records.' },
      },
    ],
    relatedLinks: [
      { title: 'What\'s included in each plan?', href: '/help/billing/plans' },
      { title: 'How do I upgrade to Pro or Ultra?', href: '/help/billing/upgrade' },
      { title: 'Can I delete a client?', href: '/help/clients/delete' },
    ],
    relatedDocs: [
      { title: 'Client Management Docs', href: '/docs/clients' },
      { title: 'Pricing Page', href: '/pricing' },
    ],
  },
}

// Append support line to every article's answer
for (const key of Object.keys(HELP_ACCOUNT_BILLING_CLIENTS)) {
  const article = HELP_ACCOUNT_BILLING_CLIENTS[key]
  article.answer += `\n\n${SUPPORT_LINE}`
}
