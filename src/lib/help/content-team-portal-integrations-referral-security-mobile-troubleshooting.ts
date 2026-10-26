import type { HelpArticle } from '../docs/types'

const SUPPORT_FOOTER = '\n\nStill need help? Contact us at support@clienter.co.in or use the Help button in the app.'

export const HELP_REMAINING: Record<string, HelpArticle> = {
  // ─── TEAM ────────────────────────────────────────────────────────────
  'team/invite': {
    slug: 'team/invite',
    title: 'How do I invite a team member?',
    metaTitle: 'Invite Team Members to Clienter — Step-by-Step Guide',
    metaDescription: 'Learn how to invite team members to your Clienter workspace. Free plan includes 1 member, Pro allows up to 5, and Ultra supports expanded teams.',
    category: 'Team',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Team', href: '/help/team' },
      { label: 'Invite a team member', href: '/help/team/invite' }
    ],
    answer: 'You can invite team members from your workspace settings. The number of members you can add depends on your plan: Free allows 1 member (just you), Pro supports up to 5 team members, and Ultra expands beyond that for growing agencies.',
    steps: [
      'Open app.clienter.co.in and go to Settings → Team.',
      'Click "Invite Member" in the top-right corner.',
      'Enter your team member\'s email address.',
      'Select a role for the new member (Admin, Manager, or Member).',
      'Click "Send Invite" — they\'ll receive an email with a link to join.',
      'The invite expires after 7 days. You can resend it from the Pending tab if needed.'
    ],
    sections: [
      {
        id: 'plan-limits',
        heading: 'Team size by plan',
        level: 2,
        content: 'Your plan determines how many people can be in your workspace. Free: 1 (owner only). Pro: up to 5 members including the owner. Ultra: expanded team size for larger agencies. You can upgrade at any time from Settings → Billing to unlock more seats.',
        callout: { type: 'info', text: 'Upgrading your plan instantly unlocks additional seats — no need to re-invite existing members.' }
      },
      {
        id: 'pending-invites',
        heading: 'Managing pending invites',
        level: 2,
        content: 'Pending invites appear under Settings → Team → Pending. You can resend or revoke any invite from there. Revoking an invite immediately invalidates the join link.'
      }
    ],
    relatedLinks: [
      { title: 'What roles can I assign?', href: '/help/team/roles' },
      { title: 'I\'ve hit my team member limit', href: '/help/team/limits' },
      { title: 'How do I remove a team member?', href: '/help/team/remove' }
    ],
    relatedDocs: [
      { title: 'Team Management', href: '/docs/team-management' },
      { title: 'Plans & Pricing', href: '/docs/plans-and-pricing' }
    ]
  },

  'team/roles': {
    slug: 'team/roles',
    title: 'What roles can I assign?',
    metaTitle: 'Team Roles & Permissions in Clienter',
    metaDescription: 'Understand the Admin, Manager, and Member roles in Clienter and what permissions each role has for managing clients, invoices, and team settings.',
    category: 'Team',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Team', href: '/help/team' },
      { label: 'Team roles', href: '/help/team/roles' }
    ],
    answer: 'Clienter offers three roles — Admin, Manager, and Member — each with different levels of access to your workspace. Roles help you control who can manage billing, invite others, or only work on assigned clients.',
    sections: [
      {
        id: 'admin',
        heading: 'Admin',
        level: 2,
        content: 'Full access to everything. Admins can manage billing, invite or remove members, change roles, access all clients and projects, send invoices, and configure integrations. The workspace owner is always an Admin and cannot be downgraded.'
      },
      {
        id: 'manager',
        heading: 'Manager',
        level: 2,
        content: 'Managers can view and manage all clients and projects, create and send invoices, and access reports. They cannot change billing settings, manage team members, or configure integrations.'
      },
      {
        id: 'member',
        heading: 'Member',
        level: 2,
        content: 'Members can only see clients and projects they are assigned to. They can update task statuses, log activity, and communicate within assigned projects. They cannot create invoices, access billing, or view unassigned clients.'
      },
      {
        id: 'changing-roles',
        heading: 'Changing a member\'s role',
        level: 2,
        content: 'Go to Settings → Team, click the three-dot menu next to any member, and select "Change Role." Only Admins can change roles.',
        callout: { type: 'warning', text: 'Downgrading an Admin to Member will immediately restrict their access. Make sure at least one other Admin exists before making changes.' }
      }
    ],
    relatedLinks: [
      { title: 'How do I invite a team member?', href: '/help/team/invite' },
      { title: 'How do I remove a team member?', href: '/help/team/remove' }
    ],
    relatedDocs: [
      { title: 'Team Management', href: '/docs/team-management' }
    ]
  },

  'team/payroll': {
    slug: 'team/payroll',
    title: 'How does team payroll work?',
    metaTitle: 'Team Payroll in Clienter — Track & Pay Your Team [Ultra]',
    metaDescription: 'Learn how to use Clienter\'s team payroll feature on the Ultra plan to track hours, set pay rates, and generate payout summaries for your agency team.',
    category: 'Team',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Team', href: '/help/team' },
      { label: 'Team payroll', href: '/help/team/payroll' }
    ],
    answer: 'Team payroll on the Ultra plan lets you set pay rates for each team member, track their logged hours against client projects, and generate payout summaries. It gives you a clear picture of team costs versus client revenue.',
    sections: [
      {
        id: 'setup',
        heading: 'Setting up payroll',
        level: 2,
        content: 'Navigate to Settings → Team → Payroll. For each team member, set their hourly or monthly pay rate and payment cycle (weekly, bi-weekly, or monthly). Clienter automatically calculates payable amounts based on logged time.',
        callout: { type: 'info', text: 'Team payroll is available exclusively on the Ultra plan.' }
      },
      {
        id: 'tracking',
        heading: 'Tracking hours & costs',
        level: 2,
        content: 'When team members log time on client projects, those hours feed into the payroll dashboard. You can see a breakdown by member, by project, or by date range. The dashboard also shows your profit margin — client revenue minus team costs.'
      },
      {
        id: 'payouts',
        heading: 'Generating payout summaries',
        level: 2,
        content: 'At the end of each cycle, Clienter generates a payout summary you can review and export. The actual payment is made outside Clienter (via bank transfer, UPI, etc.) — the summary helps you track what\'s owed and mark payments as completed.'
      }
    ],
    relatedLinks: [
      { title: 'What roles can I assign?', href: '/help/team/roles' },
      { title: 'How do I invite a team member?', href: '/help/team/invite' }
    ],
    relatedDocs: [
      { title: 'Team Management', href: '/docs/team-management' },
      { title: 'Plans & Pricing', href: '/docs/plans-and-pricing' }
    ]
  },

  'team/remove': {
    slug: 'team/remove',
    title: 'How do I remove a team member?',
    metaTitle: 'Remove a Team Member from Clienter',
    metaDescription: 'Step-by-step instructions to remove a team member from your Clienter workspace, including what happens to their assigned clients and data.',
    category: 'Team',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Team', href: '/help/team' },
      { label: 'Remove a member', href: '/help/team/remove' }
    ],
    answer: 'Admins can remove team members from the workspace at any time. The removed member immediately loses access, and their assigned clients can be reassigned.',
    steps: [
      'Go to Settings → Team.',
      'Find the member you want to remove.',
      'Click the three-dot menu next to their name and select "Remove Member."',
      'Confirm the removal in the dialog.',
      'Optionally reassign their clients and projects to another team member.'
    ],
    sections: [
      {
        id: 'what-happens',
        heading: 'What happens after removal',
        level: 2,
        content: 'The removed member is immediately logged out and can no longer access the workspace. Their activity history (notes, logged hours, etc.) is preserved. Any clients or projects assigned exclusively to them become unassigned — you\'ll see a prompt to reassign them.',
        callout: { type: 'warning', text: 'Removal is immediate and cannot be undone. To re-add the person, you\'ll need to send a new invite.' }
      }
    ],
    relatedLinks: [
      { title: 'How do I invite a team member?', href: '/help/team/invite' },
      { title: 'What roles can I assign?', href: '/help/team/roles' }
    ],
    relatedDocs: [
      { title: 'Team Management', href: '/docs/team-management' }
    ]
  },

  'team/limits': {
    slug: 'team/limits',
    title: "I've hit my team member limit",
    metaTitle: 'Team Member Limit Reached — Upgrade Your Clienter Plan',
    metaDescription: 'Hit the team member limit on your Clienter plan? Learn how to upgrade from Free to Pro or Ultra to add more team members to your workspace.',
    category: 'Team',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Team', href: '/help/team' },
      { label: 'Team limit reached', href: '/help/team/limits' }
    ],
    answer: 'Each plan has a team member cap. Free: 1 (owner only). Pro: up to 5 members. Ultra: expanded for larger teams. If you see "Team member limit reached," you need to upgrade your plan or remove an existing member to free up a seat.',
    steps: [
      'Go to Settings → Billing.',
      'Review your current plan and the team size it includes.',
      'Click "Upgrade" to move to Pro (up to 5 members) or Ultra (expanded teams).',
      'Once upgraded, go to Settings → Team → Invite Member to add new people.'
    ],
    sections: [
      {
        id: 'alternative',
        heading: 'Don\'t want to upgrade?',
        level: 2,
        content: 'You can also free up a seat by removing an inactive team member. Go to Settings → Team, click the three-dot menu next to the member, and select "Remove Member." The seat becomes available immediately.',
        callout: { type: 'tip', text: 'Pro at ₹199/month gives you 5 seats — great value for small teams just getting started.' }
      }
    ],
    relatedLinks: [
      { title: 'How do I invite a team member?', href: '/help/team/invite' },
      { title: 'How do I remove a team member?', href: '/help/team/remove' }
    ],
    relatedDocs: [
      { title: 'Plans & Pricing', href: '/docs/plans-and-pricing' }
    ]
  },

  // ─── PORTAL ──────────────────────────────────────────────────────────
  'portal/what-is': {
    slug: 'portal/what-is',
    title: 'What is the client portal?',
    metaTitle: 'Client Portal Overview — Clienter Help',
    metaDescription: 'Learn about Clienter\'s client portal — a branded space where your clients can view project updates, invoices, documents, and communicate with your team.',
    category: 'Client Portal',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Portal', href: '/help/portal' },
      { label: 'What is the client portal?', href: '/help/portal/what-is' }
    ],
    answer: 'The client portal is a dedicated, branded space where your clients can log in to view project progress, check invoices, download shared documents, and communicate with your team — without you needing to send manual updates via WhatsApp or email.',
    sections: [
      {
        id: 'why-use',
        heading: 'Why use the client portal?',
        level: 2,
        content: 'Instead of fielding "where\'s my project?" messages, give your clients self-service access. They can see real-time project status, pending and paid invoices, shared files, and leave feedback — all in one place. It makes your agency look more professional and saves hours of back-and-forth communication.'
      },
      {
        id: 'what-clients-see',
        heading: 'What clients can see',
        level: 2,
        content: 'By default, clients see their project timeline and status, invoices (pending and paid), shared documents and deliverables, and a messaging channel to communicate with your team. You control exactly what\'s visible per client from your dashboard.'
      }
    ],
    relatedLinks: [
      { title: 'How do I set up the portal?', href: '/help/portal/setup' },
      { title: 'How does my client log in?', href: '/help/portal/client-login' },
      { title: 'What can clients see on the portal?', href: '/help/portal/features' }
    ],
    relatedDocs: [
      { title: 'Client Portal Guide', href: '/docs/client-portal' }
    ]
  },

  'portal/setup': {
    slug: 'portal/setup',
    title: 'How do I set up the portal?',
    metaTitle: 'Set Up the Client Portal — Clienter Help',
    metaDescription: 'Step-by-step guide to setting up your Clienter client portal, including branding, enabling access for clients, and choosing what information to share.',
    category: 'Client Portal',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Portal', href: '/help/portal' },
      { label: 'Set up the portal', href: '/help/portal/setup' }
    ],
    answer: 'Setting up the client portal takes just a few minutes. Configure your branding, choose what clients can see, and then enable portal access for individual clients.',
    steps: [
      'Go to Settings → Client Portal.',
      'Upload your agency logo and set your brand color — this customizes the portal appearance for your clients.',
      'Choose default visibility settings: project updates, invoices, documents, and messaging.',
      'Navigate to any client\'s profile and toggle "Portal Access" to ON.',
      'Click "Send Portal Invite" — the client receives an email with their login link.',
      'Your client can now log in and see what you\'ve shared with them.'
    ],
    sections: [
      {
        id: 'per-client',
        heading: 'Per-client visibility',
        level: 2,
        content: 'You can override the default visibility settings for each client. For example, you might hide invoices for a client who pays through a separate system, or disable messaging for a client you only communicate with via email.',
        callout: { type: 'tip', text: 'Start with conservative visibility settings and expand as clients get comfortable with the portal.' }
      }
    ],
    relatedLinks: [
      { title: 'What is the client portal?', href: '/help/portal/what-is' },
      { title: 'How does my client log in?', href: '/help/portal/client-login' }
    ],
    relatedDocs: [
      { title: 'Client Portal Guide', href: '/docs/client-portal' }
    ]
  },

  'portal/client-login': {
    slug: 'portal/client-login',
    title: 'How does my client log in?',
    metaTitle: 'Client Portal Login — Magic Link & Password Options',
    metaDescription: 'Understand how your clients log into the Clienter portal using magic links or passwords, and how to help them if they have trouble accessing it.',
    category: 'Client Portal',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Portal', href: '/help/portal' },
      { label: 'Client login', href: '/help/portal/client-login' }
    ],
    answer: 'Clients log into the portal using a magic link sent to their email. On their first visit, they can optionally set a password for future logins. No separate sign-up is needed — access is controlled entirely by you.',
    sections: [
      {
        id: 'magic-link',
        heading: 'Magic link login',
        level: 2,
        content: 'When you enable portal access for a client, they receive an email with a magic link. Clicking it logs them in instantly — no password required. Each magic link is single-use and expires after 15 minutes for security.'
      },
      {
        id: 'password',
        heading: 'Setting a password',
        level: 2,
        content: 'After logging in via magic link, clients can go to their portal settings and set a password. Once set, they can log in with their email and password directly, or continue using magic links — both methods work.',
        callout: { type: 'info', text: 'You don\'t manage client passwords. If a client forgets theirs, they can always use the magic link option on the login page.' }
      },
      {
        id: 'troubleshooting',
        heading: 'Client can\'t log in?',
        level: 2,
        content: 'Check that portal access is enabled for the client (Client Profile → Portal Access). Make sure the client\'s email address is correct. Ask them to check spam/junk folders for the magic link email. You can resend the invite from the client\'s profile page.'
      }
    ],
    relatedLinks: [
      { title: 'Client can\'t access portal', href: '/help/troubleshooting/portal-issues' },
      { title: 'How do I set up the portal?', href: '/help/portal/setup' }
    ],
    relatedDocs: [
      { title: 'Client Portal Guide', href: '/docs/client-portal' }
    ]
  },

  'portal/features': {
    slug: 'portal/features',
    title: 'What can clients see on the portal?',
    metaTitle: 'Client Portal Features — What Your Clients Can Access',
    metaDescription: 'A full list of what your clients can view and do in the Clienter client portal, including project updates, invoices, documents, and messaging.',
    category: 'Client Portal',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Client Portal', href: '/help/portal' },
      { label: 'Portal features', href: '/help/portal/features' }
    ],
    answer: 'The client portal gives your clients a self-service view into their projects, invoices, documents, and a direct line of communication with your team. You control what each client can see.',
    sections: [
      {
        id: 'projects',
        heading: 'Project updates',
        level: 2,
        content: 'Clients can see the status and timeline of their projects, including milestones and recent activity. They see a clean, read-only view — they can\'t edit project details or see internal notes.'
      },
      {
        id: 'invoices',
        heading: 'Invoices & payments',
        level: 2,
        content: 'Clients can view all invoices you\'ve sent them, see payment status (pending, paid, overdue), and pay directly from the portal via your configured payment methods (Razorpay, PayPal, or bank transfer).'
      },
      {
        id: 'documents',
        heading: 'Shared documents',
        level: 2,
        content: 'Any files or deliverables you share with a client appear in their Documents tab. They can view and download these files. Useful for sharing design mockups, reports, contracts, and final deliverables.'
      },
      {
        id: 'messaging',
        heading: 'Messaging',
        level: 2,
        content: 'The portal includes a messaging channel where clients can send messages and you can reply from your Clienter dashboard. It keeps all communication in one place instead of scattered across WhatsApp, email, and calls.',
        callout: { type: 'tip', text: 'Portal messages also trigger notifications on your end, so you never miss a client message.' }
      },
      {
        id: 'reviews',
        heading: 'Reviews',
        level: 2,
        content: 'After a project is completed, clients can leave a review directly from the portal. These reviews feed into your review badge that you can embed on your website.'
      }
    ],
    relatedLinks: [
      { title: 'What is the client portal?', href: '/help/portal/what-is' },
      { title: 'How do I embed the review badge?', href: '/help/integrations/review-badge' }
    ],
    relatedDocs: [
      { title: 'Client Portal Guide', href: '/docs/client-portal' }
    ]
  },

  // ─── INTEGRATIONS ────────────────────────────────────────────────────
  'integrations/google-cal': {
    slug: 'integrations/google-cal',
    title: 'Google Calendar setup step-by-step',
    metaTitle: 'Connect Google Calendar to Clienter — Setup Guide [Pro/Ultra]',
    metaDescription: 'Step-by-step instructions to connect Google Calendar with Clienter on Pro or Ultra plans. Sync meetings, deadlines, and follow-ups automatically.',
    category: 'Integrations',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Integrations', href: '/help/integrations' },
      { label: 'Google Calendar', href: '/help/integrations/google-cal' }
    ],
    answer: 'Connect Google Calendar to Clienter to automatically sync your meetings, deadlines, and follow-up reminders. Available on Pro and Ultra plans.',
    steps: [
      'Go to Settings → Integrations → Google Calendar.',
      'Click "Connect Google Calendar."',
      'Sign in with your Google account and grant Clienter permission to read and create events.',
      'Choose which calendar to sync (you can select your primary or any secondary calendar).',
      'Enable the sync options you want: pull meetings into Clienter, push Clienter deadlines to Google Calendar, or both.',
      'Click "Save" — syncing begins immediately and updates every few minutes.'
    ],
    sections: [
      {
        id: 'what-syncs',
        heading: 'What gets synced',
        level: 2,
        content: 'Clienter pulls your upcoming meetings into the dashboard so you can see client calls alongside your tasks. It can also push follow-up dates, project deadlines, and payment due dates to your Google Calendar as events.'
      },
      {
        id: 'multiple-accounts',
        heading: 'Using multiple Google accounts',
        level: 2,
        content: 'You can connect one Google account per Clienter user. If you use multiple Google accounts, connect the one that has your client-facing calendar.',
        callout: { type: 'info', text: 'Google Calendar integration requires Pro or Ultra. Free plan users can upgrade from Settings → Billing.' }
      },
      {
        id: 'disconnect',
        heading: 'Disconnecting',
        level: 2,
        content: 'To disconnect, go to Settings → Integrations → Google Calendar and click "Disconnect." Events already synced to Google Calendar remain; future changes in Clienter will no longer push to Google.'
      }
    ],
    relatedLinks: [
      { title: 'Google Calendar not syncing', href: '/help/troubleshooting/calendar-not-syncing' }
    ],
    relatedDocs: [
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  'integrations/meta-ads': {
    slug: 'integrations/meta-ads',
    title: 'Meta Lead Ads setup step-by-step',
    metaTitle: 'Connect Meta Lead Ads to Clienter — Setup Guide [Ultra]',
    metaDescription: 'Step-by-step guide to connecting Meta (Facebook/Instagram) Lead Ads with Clienter on the Ultra plan. Auto-import leads as clients instantly.',
    category: 'Integrations',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Integrations', href: '/help/integrations' },
      { label: 'Meta Lead Ads', href: '/help/integrations/meta-ads' }
    ],
    answer: 'Connect Meta Lead Ads to automatically import leads from your Facebook and Instagram ad campaigns as new clients in Clienter. Available on the Ultra plan.',
    steps: [
      'Go to Settings → Integrations → Meta Lead Ads.',
      'Click "Connect Meta Account."',
      'Log in with your Facebook account that manages the ad campaigns.',
      'Grant Clienter permission to access your leads.',
      'Select the Facebook Page(s) and ad account(s) you want to sync.',
      'Choose a default pipeline stage for new leads (e.g., "New Lead" or "Contacted").',
      'Click "Save" — new leads start flowing in automatically.'
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How leads are imported',
        level: 2,
        content: 'When someone fills out a lead form on your Facebook or Instagram ad, Clienter receives the lead data within seconds via Meta\'s real-time webhook. The lead is created as a new client with their name, email, phone number, and any custom fields from your lead form.',
        callout: { type: 'info', text: 'Meta Lead Ads integration is available exclusively on the Ultra plan.' }
      },
      {
        id: 'mapping',
        heading: 'Field mapping',
        level: 2,
        content: 'Clienter automatically maps standard lead form fields (name, email, phone) to client fields. Custom questions from your lead form appear in the client\'s notes section. You can customize the mapping from the integration settings.'
      },
      {
        id: 'permissions',
        heading: 'Required Facebook permissions',
        level: 2,
        content: 'You need to be an Admin or Advertiser on the Facebook Page running the ads. If you manage ads for clients via their Business Manager, make sure your personal account has been granted leads_retrieval permission on their page.'
      }
    ],
    relatedLinks: [
      { title: 'IndiaMART setup', href: '/help/integrations/indiamart' },
      { title: 'Webhook integration guide', href: '/help/integrations/webhook' }
    ],
    relatedDocs: [
      { title: 'Integrations Overview', href: '/docs/integrations' },
      { title: 'Lead Management', href: '/docs/lead-management' }
    ]
  },

  'integrations/indiamart': {
    slug: 'integrations/indiamart',
    title: 'IndiaMART setup step-by-step',
    metaTitle: 'Connect IndiaMART to Clienter — Lead Import Guide [Ultra]',
    metaDescription: 'Step-by-step instructions to connect your IndiaMART seller account with Clienter on the Ultra plan. Auto-import IndiaMART leads as new clients.',
    category: 'Integrations',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Integrations', href: '/help/integrations' },
      { label: 'IndiaMART', href: '/help/integrations/indiamart' }
    ],
    answer: 'Connect your IndiaMART seller account to Clienter to automatically import buyer inquiries as new clients. Available on the Ultra plan.',
    steps: [
      'Go to Settings → Integrations → IndiaMART.',
      'Click "Connect IndiaMART."',
      'Enter your IndiaMART CRM API key (found in your IndiaMART seller dashboard under Lead Manager → CRM Settings → API Key).',
      'Click "Verify & Connect" — Clienter will test the connection.',
      'Choose a default pipeline stage for imported leads.',
      'Click "Save" — IndiaMART inquiries start importing automatically.'
    ],
    sections: [
      {
        id: 'finding-api-key',
        heading: 'Finding your API key',
        level: 2,
        content: 'Log into your IndiaMART seller account at seller.indiamart.com. Navigate to Lead Manager → CRM Settings. Your API key (also called the CRM key or GLUSR_MOBILE_KEY) is displayed on that page. Copy it and paste it into Clienter.',
        callout: { type: 'warning', text: 'Keep your API key private. Anyone with this key can access your IndiaMART leads. Never share it publicly.' }
      },
      {
        id: 'what-imports',
        heading: 'What gets imported',
        level: 2,
        content: 'Each IndiaMART inquiry creates a new client in Clienter with the buyer\'s name, phone number, email (if provided), city, product they inquired about, and their message. These details appear in the client profile and notes.'
      },
      {
        id: 'sync-frequency',
        heading: 'Sync frequency',
        level: 2,
        content: 'Clienter checks for new IndiaMART leads every few minutes. Leads are de-duplicated by phone number — if the same buyer sends multiple inquiries, subsequent ones are added as notes to the existing client rather than creating duplicates.'
      }
    ],
    relatedLinks: [
      { title: 'Meta Lead Ads setup', href: '/help/integrations/meta-ads' },
      { title: 'Webhook integration guide', href: '/help/integrations/webhook' }
    ],
    relatedDocs: [
      { title: 'Integrations Overview', href: '/docs/integrations' },
      { title: 'Lead Management', href: '/docs/lead-management' }
    ]
  },

  'integrations/webhook': {
    slug: 'integrations/webhook',
    title: 'Webhook integration guide',
    metaTitle: 'Webhook Integration — Connect Any Service to Clienter',
    metaDescription: 'Use Clienter\'s webhook integration to connect any external service or custom app. Receive and send data programmatically via HTTP webhooks.',
    category: 'Integrations',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Integrations', href: '/help/integrations' },
      { label: 'Webhooks', href: '/help/integrations/webhook' }
    ],
    answer: 'Webhooks let you connect Clienter with any external service that supports HTTP callbacks. Use incoming webhooks to push leads from custom forms, landing pages, or third-party tools. Use outgoing webhooks to notify your own systems when events happen in Clienter.',
    sections: [
      {
        id: 'incoming',
        heading: 'Incoming webhooks',
        level: 2,
        content: 'Incoming webhooks let external services send data to Clienter. Go to Settings → Integrations → Webhooks and click "Create Incoming Webhook." You\'ll get a unique URL. When a POST request is sent to this URL with lead data (name, email, phone), Clienter creates a new client automatically.',
        steps: [
          'Go to Settings → Integrations → Webhooks.',
          'Click "Create Incoming Webhook."',
          'Copy the generated webhook URL.',
          'Configure your external service (form builder, landing page tool, etc.) to POST data to this URL.',
          'Send a test payload to verify it works.',
          'New entries appear as clients in your pipeline.'
        ]
      },
      {
        id: 'outgoing',
        heading: 'Outgoing webhooks',
        level: 2,
        content: 'Outgoing webhooks notify your systems when things happen in Clienter. Go to Settings → Integrations → Webhooks and click "Create Outgoing Webhook." Select which events to listen to (new client created, invoice paid, project status changed, etc.) and enter your endpoint URL.',
        callout: { type: 'tip', text: 'Use outgoing webhooks with Zapier, Make (formerly Integromat), or your own backend to build custom automations.' }
      },
      {
        id: 'payload',
        heading: 'Payload format',
        level: 2,
        content: 'All webhook payloads are JSON. Incoming webhooks expect at minimum: { "name": "...", "email": "...", "phone": "..." }. Additional fields are stored in client notes. Outgoing webhooks include the event type, timestamp, and the full object (client, invoice, or project) that triggered the event.'
      },
      {
        id: 'security',
        heading: 'Webhook security',
        level: 2,
        content: 'Each webhook includes a signing secret. Outgoing webhooks include an X-Clienter-Signature header with an HMAC-SHA256 hash of the payload. Verify this signature on your server to ensure the request genuinely came from Clienter. For incoming webhooks, the URL itself acts as a secret — treat it like a password.',
        callout: { type: 'warning', text: 'Never expose your webhook URLs or signing secrets publicly. Regenerate them immediately if compromised.' }
      }
    ],
    relatedLinks: [
      { title: 'Meta Lead Ads setup', href: '/help/integrations/meta-ads' },
      { title: 'IndiaMART setup', href: '/help/integrations/indiamart' }
    ],
    relatedDocs: [
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  'integrations/review-badge': {
    slug: 'integrations/review-badge',
    title: 'How do I embed the review badge?',
    metaTitle: 'Embed the Clienter Review Badge on Your Website',
    metaDescription: 'Learn how to embed the Clienter review badge on your website to showcase client reviews and build trust with potential customers.',
    category: 'Integrations',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Integrations', href: '/help/integrations' },
      { label: 'Review badge', href: '/help/integrations/review-badge' }
    ],
    answer: 'The review badge is an embeddable widget that displays your client reviews on your website. It builds social proof and trust with potential clients visiting your site.',
    steps: [
      'Go to Settings → Integrations → Review Badge.',
      'Customize the badge appearance: choose between a compact badge (shows average rating) or a full widget (shows recent reviews).',
      'Select the color theme to match your website.',
      'Copy the embed code — a small HTML snippet.',
      'Paste the snippet into your website\'s HTML where you want the badge to appear.',
      'The badge loads dynamically and updates as new reviews come in.'
    ],
    sections: [
      {
        id: 'customization',
        heading: 'Customization options',
        level: 2,
        content: 'You can choose between two styles: a compact badge that shows your average star rating and total review count, or a full carousel widget that rotates through recent reviews. Both styles support light and dark themes and can be configured to match your website\'s design.'
      },
      {
        id: 'collecting-reviews',
        heading: 'Collecting reviews',
        level: 2,
        content: 'Reviews come from clients who have portal access. After you mark a project as completed, the client sees a review prompt in their portal. You can also send a direct review request from the client\'s profile. Only reviews you approve appear on the public badge.',
        callout: { type: 'tip', text: 'Send review requests while the project is fresh in the client\'s mind — completion day or the day after gets the best response rates.' }
      }
    ],
    relatedLinks: [
      { title: 'What can clients see on the portal?', href: '/help/portal/features' }
    ],
    relatedDocs: [
      { title: 'Client Portal Guide', href: '/docs/client-portal' },
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  },

  // ─── REFERRAL ────────────────────────────────────────────────────────
  'referral/how': {
    slug: 'referral/how',
    title: 'How does the partner program work?',
    metaTitle: 'Clienter Partner Program — Earn Recurring Commissions',
    metaDescription: 'Learn how the Clienter partner program works. Earn ₹40 per Pro referral or ₹160 per Ultra referral every month for up to 12 billing cycles.',
    category: 'Refer & Earn',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Refer & Earn', href: '/help/referral' },
      { label: 'How it works', href: '/help/referral/how' }
    ],
    answer: 'The Clienter partner program lets you earn recurring commissions by referring other freelancers and agencies. You earn ₹40 for every Pro referral and ₹160 for every Ultra referral — every month for up to 12 billing cycles per referral.',
    sections: [
      {
        id: 'how-it-works',
        heading: 'How it works',
        level: 2,
        content: 'Share your unique referral link with anyone who might benefit from Clienter. When they sign up using your link and subscribe to a paid plan, you start earning. The commission is credited each time the referred user\'s subscription renews, for up to 12 cycles.',
        steps: [
          'Go to Settings → Refer & Earn to find your unique referral link.',
          'Share the link via social media, email, your website, or directly.',
          'When someone signs up through your link and subscribes to Pro or Ultra, you earn a commission.',
          'Commissions are credited after each successful renewal — ₹40/month for Pro referrals, ₹160/month for Ultra referrals.',
          'You can earn up to 12 monthly commissions per referral.'
        ]
      },
      {
        id: 'earnings-math',
        heading: 'Potential earnings',
        level: 2,
        content: 'A single Pro referral earns you up to ₹480 over 12 months (₹40 × 12). A single Ultra referral earns you up to ₹1,920 over 12 months (₹160 × 12). There is no limit on the number of people you can refer — the more you share, the more you earn.',
        callout: { type: 'tip', text: 'Refer 10 Ultra users and you could earn up to ₹19,200 over 12 months — entirely passive income.' }
      },
      {
        id: 'rules',
        heading: 'Program rules',
        level: 2,
        content: 'Referrals must be genuine — self-referrals, fake accounts, and spam are not allowed and will result in disqualification. The referred user must subscribe through your link before any other referral link. Commissions stop if the referred user cancels their subscription.'
      }
    ],
    relatedLinks: [
      { title: 'How do I track my earnings?', href: '/help/referral/earnings' },
      { title: 'How do I withdraw my earnings?', href: '/help/referral/withdraw' }
    ],
    relatedDocs: [
      { title: 'Partner Program', href: '/docs/partner-program' }
    ]
  },

  'referral/earnings': {
    slug: 'referral/earnings',
    title: 'How do I track my earnings?',
    metaTitle: 'Track Referral Earnings — Clienter Partner Program',
    metaDescription: 'See how to track your Clienter referral earnings, including pending and confirmed commissions, referral history, and payout details.',
    category: 'Refer & Earn',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Refer & Earn', href: '/help/referral' },
      { label: 'Track earnings', href: '/help/referral/earnings' }
    ],
    answer: 'Track all your referral earnings from Settings → Refer & Earn. The dashboard shows your total earnings, pending commissions, confirmed payouts, and a detailed breakdown of each referral.',
    sections: [
      {
        id: 'dashboard',
        heading: 'Earnings dashboard',
        level: 2,
        content: 'The Refer & Earn dashboard shows: total earnings (lifetime), current balance (available to withdraw), pending commissions (awaiting the referral\'s next renewal), and a list of all your referrals with their plan, signup date, and total earned from each.'
      },
      {
        id: 'statuses',
        heading: 'Commission statuses',
        level: 2,
        content: 'Pending: the referred user has subscribed, but their payment hasn\'t been confirmed yet. Confirmed: payment processed and commission credited to your balance. Expired: the 12-cycle earning window ended. Cancelled: the referred user cancelled their subscription before renewal.',
        callout: { type: 'info', text: 'Commissions are confirmed within 48 hours of the referred user\'s successful payment.' }
      }
    ],
    relatedLinks: [
      { title: 'How does the partner program work?', href: '/help/referral/how' },
      { title: 'How do I withdraw my earnings?', href: '/help/referral/withdraw' }
    ],
    relatedDocs: [
      { title: 'Partner Program', href: '/docs/partner-program' }
    ]
  },

  'referral/withdraw': {
    slug: 'referral/withdraw',
    title: 'How do I withdraw my earnings?',
    metaTitle: 'Withdraw Referral Earnings — Clienter Partner Program',
    metaDescription: 'Learn how to withdraw your Clienter referral earnings via UPI or bank transfer, including minimum withdrawal amounts and processing times.',
    category: 'Refer & Earn',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Refer & Earn', href: '/help/referral' },
      { label: 'Withdraw earnings', href: '/help/referral/withdraw' }
    ],
    answer: 'Once your confirmed balance reaches the minimum withdrawal amount, you can request a payout to your bank account or UPI.',
    steps: [
      'Go to Settings → Refer & Earn.',
      'Check that your confirmed balance meets the minimum withdrawal threshold.',
      'Click "Withdraw" and choose your payout method (UPI or bank transfer).',
      'Enter your UPI ID or bank account details.',
      'Confirm the withdrawal request.',
      'Payouts are processed within 5-7 business days.'
    ],
    sections: [
      {
        id: 'methods',
        heading: 'Payout methods',
        level: 2,
        content: 'We support UPI (instant once processed) and bank transfer (NEFT/IMPS). Enter your details once and they\'re saved for future withdrawals. You can change your payout details at any time from the Refer & Earn settings.',
        callout: { type: 'info', text: 'International payouts are not currently supported for referral earnings. Withdrawals are available to Indian bank accounts and UPI IDs only.' }
      },
      {
        id: 'timeline',
        heading: 'Processing time',
        level: 2,
        content: 'Withdrawal requests are reviewed and processed within 5-7 business days. You\'ll receive an email confirmation when the payout is sent. UPI transfers typically arrive the same day they\'re processed; bank transfers may take 1-2 additional days.'
      }
    ],
    relatedLinks: [
      { title: 'How do I track my earnings?', href: '/help/referral/earnings' },
      { title: 'How does the partner program work?', href: '/help/referral/how' }
    ],
    relatedDocs: [
      { title: 'Partner Program', href: '/docs/partner-program' }
    ]
  },

  // ─── SECURITY ────────────────────────────────────────────────────────
  'security/data': {
    slug: 'security/data',
    title: 'How is my data protected?',
    metaTitle: 'Data Protection & Security at Clienter',
    metaDescription: 'Learn how Clienter protects your data with encryption, secure infrastructure, access controls, and compliance with Indian data protection standards.',
    category: 'Security & Privacy',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Security & Privacy', href: '/help/security' },
      { label: 'Data protection', href: '/help/security/data' }
    ],
    answer: 'Clienter protects your data with industry-standard encryption, secure cloud infrastructure, strict access controls, and compliance with Indian data protection regulations. Your client data, invoices, and communications are safeguarded at every layer.',
    sections: [
      {
        id: 'infrastructure',
        heading: 'Secure infrastructure',
        level: 2,
        content: 'Clienter runs on enterprise-grade cloud infrastructure with automated backups, redundancy, and 24/7 monitoring. All data is stored in secure, certified data centers. Database backups happen daily and are encrypted at rest.'
      },
      {
        id: 'encryption',
        heading: 'Encryption',
        level: 2,
        content: 'All data in transit is protected by TLS 1.3 encryption. Data at rest is encrypted using AES-256. The encrypted vault feature uses end-to-end encryption (ECDH P-256 + AES-256-GCM) so that sensitive documents can only be decrypted by authorized users.'
      },
      {
        id: 'access',
        heading: 'Access controls',
        level: 2,
        content: 'Role-based access ensures team members only see what they need to. Magic-link and password authentication protect user accounts. Session tokens expire automatically, and you can revoke active sessions from Settings → Security.',
        callout: { type: 'tip', text: 'Review your active sessions regularly in Settings → Security and revoke any you don\'t recognize.' }
      },
      {
        id: 'compliance',
        heading: 'Compliance',
        level: 2,
        content: 'Clienter complies with India\'s Digital Personal Data Protection (DPDP) Act. You have full rights to access, correct, and delete your personal data. See our DPDP compliance article for details on your data rights.'
      }
    ],
    relatedLinks: [
      { title: 'What is E2E encryption?', href: '/help/security/encryption' },
      { title: 'DPDP compliance & data rights', href: '/help/security/dpdp' },
      { title: 'How do I request data deletion?', href: '/help/security/delete-data' }
    ],
    relatedDocs: [
      { title: 'Security Overview', href: '/docs/security' },
      { title: 'Privacy Policy', href: '/docs/privacy-policy' }
    ]
  },

  'security/encryption': {
    slug: 'security/encryption',
    title: 'What is E2E encryption?',
    metaTitle: 'End-to-End Encryption in Clienter — ECDH P-256 + AES-256-GCM',
    metaDescription: 'Understand how Clienter\'s end-to-end encrypted vault works using ECDH P-256 key exchange and AES-256-GCM encryption to protect your sensitive documents.',
    category: 'Security & Privacy',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Security & Privacy', href: '/help/security' },
      { label: 'E2E encryption', href: '/help/security/encryption' }
    ],
    answer: 'Clienter\'s encrypted vault uses end-to-end (E2E) encryption with ECDH P-256 for key exchange and AES-256-GCM for data encryption. This means sensitive documents stored in the vault can only be decrypted by you and the people you explicitly share them with — not even Clienter can read them.',
    sections: [
      {
        id: 'how-it-works',
        heading: 'How it works',
        level: 2,
        content: 'When you store a document in the encrypted vault, your browser generates a unique encryption key using the Elliptic Curve Diffie-Hellman (ECDH) protocol with the P-256 curve. The document is encrypted locally in your browser using AES-256-GCM before it ever leaves your device. The encrypted data is then stored on our servers. To decrypt it, the recipient\'s browser uses their private key to derive the shared secret and decrypt the content.'
      },
      {
        id: 'what-it-means',
        heading: 'What this means for you',
        level: 2,
        content: 'Your vault documents are encrypted before they leave your browser. The encryption keys never touch our servers. Even if our servers were compromised, the attacker would only see encrypted data they cannot decrypt. Only you and people you explicitly share with can read the contents.',
        callout: { type: 'warning', text: 'If you lose access to your account and haven\'t set up recovery, vault contents cannot be recovered — not even by Clienter support. This is by design.' }
      },
      {
        id: 'vault-vs-regular',
        heading: 'Vault vs. regular storage',
        level: 2,
        content: 'Regular files in Clienter are encrypted at rest (AES-256) and in transit (TLS 1.3), but Clienter can access them to provide features like previews and search. Vault files use E2E encryption — they are opaque to Clienter\'s servers. Use the vault for contracts, financial documents, passwords, and anything highly sensitive.'
      }
    ],
    relatedLinks: [
      { title: 'How is my data protected?', href: '/help/security/data' },
      { title: 'DPDP compliance & data rights', href: '/help/security/dpdp' }
    ],
    relatedDocs: [
      { title: 'Security Overview', href: '/docs/security' }
    ]
  },

  'security/dpdp': {
    slug: 'security/dpdp',
    title: 'DPDP compliance & data rights',
    metaTitle: 'DPDP Compliance — Your Data Rights at Clienter',
    metaDescription: 'Learn how Clienter complies with India\'s Digital Personal Data Protection Act and what rights you have over your personal data.',
    category: 'Security & Privacy',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Security & Privacy', href: '/help/security' },
      { label: 'DPDP compliance', href: '/help/security/dpdp' }
    ],
    answer: 'Clienter complies with India\'s Digital Personal Data Protection (DPDP) Act, 2023. As a user, you have the right to access, correct, and delete your personal data, and to know how it is being used.',
    sections: [
      {
        id: 'your-rights',
        heading: 'Your data rights',
        level: 2,
        content: 'Under the DPDP Act, you have the following rights: Right to access your personal data and know what we collect. Right to correction of inaccurate or incomplete data. Right to erasure — request deletion of your data. Right to grievance redressal — raise concerns about data handling. Right to nominate — appoint someone to exercise your rights on your behalf.'
      },
      {
        id: 'what-we-collect',
        heading: 'What data we collect',
        level: 2,
        content: 'Clienter collects your name, email address, phone number (optional), billing information, and usage data necessary to provide the service. For your clients, we store the data you enter: names, contact details, project information, and invoices. We do not sell personal data to third parties.',
        callout: { type: 'info', text: 'You are the data fiduciary for your clients\' data stored in Clienter. We act as a data processor on your behalf.' }
      },
      {
        id: 'exercising-rights',
        heading: 'Exercising your rights',
        level: 2,
        content: 'To exercise any data right, email privacy@clienter.co.in with your request. We will verify your identity and respond within 30 days. For data deletion, see the dedicated article linked below. For grievances, you can reach our Grievance Officer at the same email address.'
      }
    ],
    relatedLinks: [
      { title: 'How do I request data deletion?', href: '/help/security/delete-data' },
      { title: 'How is my data protected?', href: '/help/security/data' }
    ],
    relatedDocs: [
      { title: 'Privacy Policy', href: '/docs/privacy-policy' },
      { title: 'Terms of Service', href: '/docs/terms-of-service' }
    ]
  },

  'security/delete-data': {
    slug: 'security/delete-data',
    title: 'How do I request data deletion?',
    metaTitle: 'Request Data Deletion — Clienter Help',
    metaDescription: 'Learn how to request complete deletion of your personal data from Clienter, including what gets deleted, timelines, and what to expect.',
    category: 'Security & Privacy',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Security & Privacy', href: '/help/security' },
      { label: 'Data deletion', href: '/help/security/delete-data' }
    ],
    answer: 'You can request complete deletion of your personal data at any time. This permanently removes your account and all associated data from Clienter\'s systems.',
    steps: [
      'Go to Settings → Account → Delete Account, or email privacy@clienter.co.in with the subject "Data Deletion Request."',
      'Confirm your identity (you\'ll receive a verification email).',
      'Review the summary of what will be deleted.',
      'Confirm the deletion — this action cannot be undone.',
      'Your data will be permanently deleted within 30 days.'
    ],
    sections: [
      {
        id: 'what-is-deleted',
        heading: 'What gets deleted',
        level: 2,
        content: 'Account deletion removes: your profile and login credentials, all client records you created, all invoices and payment records, all projects and tasks, all files and vault contents, team membership and payroll data, and referral program data. Encrypted vault contents are permanently destroyed since the encryption keys are deleted.',
        callout: { type: 'warning', text: 'Data deletion is permanent and cannot be reversed. Export any data you need before requesting deletion.' }
      },
      {
        id: 'timeline',
        heading: 'Deletion timeline',
        level: 2,
        content: 'After confirmation, your account is immediately deactivated (you can no longer log in). Data is purged from active systems within 7 days and from backups within 30 days. You\'ll receive an email confirmation when the deletion is complete.'
      },
      {
        id: 'partial',
        heading: 'Deleting specific data',
        level: 2,
        content: 'If you want to delete specific client records or files without deleting your entire account, you can do so from the app directly (delete clients, invoices, or files individually). For bulk deletion requests, email privacy@clienter.co.in specifying exactly what you want removed.'
      }
    ],
    relatedLinks: [
      { title: 'DPDP compliance & data rights', href: '/help/security/dpdp' },
      { title: 'How is my data protected?', href: '/help/security/data' }
    ],
    relatedDocs: [
      { title: 'Privacy Policy', href: '/docs/privacy-policy' }
    ]
  },

  // ─── MOBILE ──────────────────────────────────────────────────────────
  'mobile/install-android': {
    slug: 'mobile/install-android',
    title: 'How do I install on Android?',
    metaTitle: 'Install Clienter on Android — PWA Setup Guide',
    metaDescription: 'Install Clienter as a Progressive Web App on your Android device using Chrome. Get an app-like experience with home screen access and push notifications.',
    category: 'Mobile App',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Mobile App', href: '/help/mobile' },
      { label: 'Install on Android', href: '/help/mobile/install-android' }
    ],
    answer: 'Clienter is a Progressive Web App (PWA) — you install it directly from Chrome on your Android device. No app store needed. It works like a native app with its own icon, full-screen mode, and push notifications.',
    steps: [
      'Open Google Chrome on your Android device.',
      'Navigate to app.clienter.co.in and log in.',
      'Tap the three-dot menu (⋮) in the top-right corner of Chrome.',
      'Tap "Add to Home screen" or "Install app" (the wording varies by Chrome version).',
      'Confirm by tapping "Install" in the dialog.',
      'Clienter now appears on your home screen as a standalone app. Tap it to open.'
    ],
    sections: [
      {
        id: 'why-pwa',
        heading: 'Why a PWA?',
        level: 2,
        content: 'PWAs combine the best of web and native apps. Clienter as a PWA loads fast, works offline for recently viewed data, supports push notifications, and updates automatically — no app store downloads or manual updates needed.',
        callout: { type: 'tip', text: 'Pin Clienter to your home screen for instant one-tap access, just like a native app.' }
      },
      {
        id: 'requirements',
        heading: 'Requirements',
        level: 2,
        content: 'Android 8.0 or later with Google Chrome (version 80+). Other Chromium-based browsers (Edge, Brave, Samsung Internet) also support PWA installation, but Chrome provides the best experience.'
      }
    ],
    relatedLinks: [
      { title: 'How do I install on iPhone/iPad?', href: '/help/mobile/install-ios' },
      { title: 'How do I enable push notifications?', href: '/help/mobile/notifications' }
    ],
    relatedDocs: [
      { title: 'Getting Started', href: '/docs/getting-started' }
    ]
  },

  'mobile/install-ios': {
    slug: 'mobile/install-ios',
    title: 'How do I install on iPhone/iPad?',
    metaTitle: 'Install Clienter on iPhone & iPad — PWA Setup Guide',
    metaDescription: 'Install Clienter as a Progressive Web App on your iPhone or iPad using Safari. Get a full-screen app experience with home screen access.',
    category: 'Mobile App',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Mobile App', href: '/help/mobile' },
      { label: 'Install on iOS', href: '/help/mobile/install-ios' }
    ],
    answer: 'On iPhone and iPad, install Clienter as a PWA using Safari. It gets its own icon on your home screen and opens in full-screen mode like a native app.',
    steps: [
      'Open Safari on your iPhone or iPad (this only works in Safari, not Chrome or other browsers on iOS).',
      'Navigate to app.clienter.co.in and log in.',
      'Tap the Share button (the square with an upward arrow) at the bottom of the screen.',
      'Scroll down in the share sheet and tap "Add to Home Screen."',
      'Edit the name if you want (it defaults to "Clienter"), then tap "Add."',
      'Clienter now appears on your home screen. Tap it to open in full-screen mode.'
    ],
    sections: [
      {
        id: 'safari-only',
        heading: 'Why Safari only?',
        level: 2,
        content: 'Apple requires PWA installation to happen through Safari on iOS. Chrome, Firefox, and other browsers on iOS do not support the "Add to Home Screen" feature for PWAs. Once installed, the app runs independently of Safari.',
        callout: { type: 'warning', text: 'You must use Safari to install the PWA. Chrome on iOS does not support "Add to Home Screen" for web apps.' }
      },
      {
        id: 'notifications-ios',
        heading: 'Push notifications on iOS',
        level: 2,
        content: 'Push notifications for PWAs on iOS require iOS 16.4 or later. After installing Clienter to your home screen, open it and go to Settings → Notifications to enable push notifications. You\'ll see a system prompt to allow notifications — tap "Allow."'
      }
    ],
    relatedLinks: [
      { title: 'How do I install on Android?', href: '/help/mobile/install-android' },
      { title: 'How do I enable push notifications?', href: '/help/mobile/notifications' }
    ],
    relatedDocs: [
      { title: 'Getting Started', href: '/docs/getting-started' }
    ]
  },

  'mobile/notifications': {
    slug: 'mobile/notifications',
    title: 'How do I enable push notifications?',
    metaTitle: 'Enable Push Notifications — Clienter Mobile Help',
    metaDescription: 'Learn how to enable push notifications for Clienter on Android and iOS so you never miss a new lead, client message, or payment update.',
    category: 'Mobile App',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Mobile App', href: '/help/mobile' },
      { label: 'Push notifications', href: '/help/mobile/notifications' }
    ],
    answer: 'Push notifications alert you to new leads, client messages, payment updates, and task reminders. Enable them from within the Clienter app after installing it on your device.',
    steps: [
      'Open Clienter from your home screen (it must be installed as a PWA first).',
      'Go to Settings → Notifications.',
      'Toggle on the notification types you want: new leads, client messages, invoice payments, task reminders, etc.',
      'When prompted by your browser or OS, tap "Allow" to grant notification permission.',
      'You\'ll see a test notification confirming everything is working.'
    ],
    sections: [
      {
        id: 'android',
        heading: 'Android',
        level: 2,
        content: 'On Android, push notifications work immediately after you grant permission. If you don\'t see the permission prompt, go to your device Settings → Apps → Chrome (or your browser) → Notifications and make sure notifications are enabled for the browser.'
      },
      {
        id: 'ios',
        heading: 'iOS (iPhone/iPad)',
        level: 2,
        content: 'iOS requires version 16.4 or later for PWA push notifications. The app must be installed to your home screen via Safari (not just bookmarked). Open the installed app, enable notifications in Settings → Notifications, and allow the system prompt.',
        callout: { type: 'info', text: 'If you\'re on iOS 16.3 or earlier, push notifications are not available for PWAs. Update your device to iOS 16.4+ to enable this feature.' }
      },
      {
        id: 'desktop',
        heading: 'Desktop browser',
        level: 2,
        content: 'Push notifications also work on desktop browsers (Chrome, Edge, Firefox). When you visit app.clienter.co.in, you\'ll see a browser prompt asking to allow notifications. Click "Allow" to receive them even when Clienter is running in a background tab.'
      }
    ],
    relatedLinks: [
      { title: 'Push notifications not working', href: '/help/troubleshooting/push-not-working' },
      { title: 'How do I install on Android?', href: '/help/mobile/install-android' },
      { title: 'How do I install on iPhone/iPad?', href: '/help/mobile/install-ios' }
    ],
    relatedDocs: [
      { title: 'Getting Started', href: '/docs/getting-started' }
    ]
  },

  // ─── TROUBLESHOOTING ─────────────────────────────────────────────────
  'troubleshooting/payment-failed': {
    slug: 'troubleshooting/payment-failed',
    title: 'Payment not going through',
    metaTitle: 'Fix Payment Failures — Clienter Troubleshooting',
    metaDescription: 'Troubleshoot payment failures in Clienter. Common causes and step-by-step fixes for subscription payments, invoice payments, and client-facing payment issues.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: 'Payment not going through', href: '/help/troubleshooting/payment-failed' }
    ],
    answer: 'Payment failures can happen for several reasons — insufficient funds, bank declines, expired cards, or network issues. Here\'s how to diagnose and fix the problem.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'You see an error like "Payment failed," "Transaction declined," or "Unable to process payment" when trying to subscribe or when a client tries to pay an invoice.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'Insufficient balance in the linked bank account or card. Your bank declined the transaction (often due to international transaction limits or daily spending caps). Expired or cancelled credit/debit card. UPI app timeout — the payment request expired before approval. Network connectivity issues during the payment process.'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Try these steps in order to resolve the issue:',
        steps: [
          'Check your bank account or card balance to ensure sufficient funds.',
          'If using UPI, make sure you approve the payment request within the timeout window (usually 5 minutes).',
          'Try a different payment method — switch between card, UPI, and net banking.',
          'If your bank declines the transaction, contact your bank to authorize it or increase your transaction limits.',
          'For international card payments (PayPal), ensure international transactions are enabled on your card.',
          'Clear your browser cache and try again, or use a different browser.',
          'If the problem persists, wait 30 minutes and retry — the payment gateway may be experiencing temporary issues.'
        ]
      },
      {
        id: 'client-payments',
        heading: 'Client payment issues',
        level: 2,
        content: 'If a client reports that they can\'t pay your invoice, share the relevant steps above with them. You can also check the invoice status in your Clienter dashboard under Invoices — if the payment is stuck in "Processing," it usually resolves within a few hours.',
        callout: { type: 'info', text: 'Razorpay payments are processed in INR. PayPal payments support international currencies. Make sure the correct gateway is configured for your client\'s location.' }
      }
    ],
    relatedLinks: [
      { title: 'I can\'t log in', href: '/help/troubleshooting/cant-login' }
    ],
    relatedDocs: [
      { title: 'Invoicing Guide', href: '/docs/invoicing' },
      { title: 'Plans & Pricing', href: '/docs/plans-and-pricing' }
    ]
  },

  'troubleshooting/push-not-working': {
    slug: 'troubleshooting/push-not-working',
    title: 'Push notifications not working',
    metaTitle: 'Fix Push Notifications — Clienter Troubleshooting',
    metaDescription: 'Not receiving push notifications from Clienter? Troubleshoot notification issues on Android, iOS, and desktop with this step-by-step guide.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: 'Push notifications not working', href: '/help/troubleshooting/push-not-working' }
    ],
    answer: 'Push notifications may not work if permissions are blocked, the app isn\'t installed as a PWA, or your device settings override app-level preferences. Follow the steps below to fix it.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'You don\'t receive any notifications from Clienter, or notifications stopped working after a device or browser update.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'Notification permission denied in the browser or device settings. The app is open in a regular browser tab instead of the installed PWA. Battery saver or Do Not Disturb mode is active. On iOS, the device is running a version below 16.4. The browser\'s notification setting for Clienter is set to "Block."'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Work through these steps:',
        steps: [
          'Make sure Clienter is installed as a PWA (added to your home screen), not just open in a browser tab.',
          'Open the Clienter app and go to Settings → Notifications — verify that the notification types you want are toggled on.',
          'Check your device\'s notification settings: on Android, go to Settings → Apps → Chrome → Notifications. On iOS, go to Settings → Notifications → Clienter.',
          'Disable Do Not Disturb and Battery Saver temporarily to test.',
          'On iOS, verify your device is running iOS 16.4 or later (Settings → General → About).',
          'In your browser, go to Settings → Site Settings → Notifications and make sure app.clienter.co.in is set to "Allow," not "Block."',
          'If all else fails, uninstall the PWA from your home screen, clear browser cache, and reinstall it.'
        ]
      }
    ],
    relatedLinks: [
      { title: 'How do I enable push notifications?', href: '/help/mobile/notifications' },
      { title: 'How do I install on Android?', href: '/help/mobile/install-android' },
      { title: 'How do I install on iPhone/iPad?', href: '/help/mobile/install-ios' }
    ],
    relatedDocs: [
      { title: 'Getting Started', href: '/docs/getting-started' }
    ]
  },

  'troubleshooting/cant-login': {
    slug: 'troubleshooting/cant-login',
    title: "I can't log in",
    metaTitle: 'Can\'t Log In to Clienter — Troubleshooting Guide',
    metaDescription: 'Troubleshoot login issues with Clienter. Fix problems with magic links, forgotten passwords, account lockouts, and Google sign-in.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: "Can't log in", href: '/help/troubleshooting/cant-login' }
    ],
    answer: 'Login problems are usually caused by expired magic links, incorrect credentials, or browser issues. Here\'s how to get back in.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'You see "Invalid or expired link," "Incorrect email or password," or a blank screen when trying to log in at app.clienter.co.in.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'Magic link expired (they\'re valid for 15 minutes). Clicking the magic link in a different browser than the one you requested it from. Incorrect email address or password. Browser cache or cookies interfering with the login flow. Account was removed from a workspace by an admin.'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Try these steps:',
        steps: [
          'If using magic link: request a new one and click it within 15 minutes. Make sure you open it in the same browser you requested it from.',
          'Check your spam/junk folder for the magic link email.',
          'If using a password: double-check your email address and try resetting your password via the "Forgot password" link.',
          'If using Google sign-in: make sure you\'re signing in with the same Google account you registered with.',
          'Clear your browser\'s cache and cookies for app.clienter.co.in, then try again.',
          'Try an incognito/private window to rule out browser extensions interfering.',
          'If none of the above works, email support@clienter.co.in with the email address you registered with.'
        ]
      }
    ],
    relatedLinks: [
      { title: 'My data is missing / page shows error', href: '/help/troubleshooting/missing-data' },
      { title: 'Payment not going through', href: '/help/troubleshooting/payment-failed' }
    ],
    relatedDocs: [
      { title: 'Getting Started', href: '/docs/getting-started' }
    ]
  },

  'troubleshooting/missing-data': {
    slug: 'troubleshooting/missing-data',
    title: 'My data is missing / page shows error',
    metaTitle: 'Missing Data or Page Errors — Clienter Troubleshooting',
    metaDescription: 'Troubleshoot missing data, blank pages, or error screens in Clienter. Step-by-step guide to resolve data display and loading issues.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: 'Missing data', href: '/help/troubleshooting/missing-data' }
    ],
    answer: 'Missing data or error pages are usually caused by temporary network issues, stale cache, or permission changes. Your data is almost certainly safe — here\'s how to get it showing again.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'A page shows "Something went wrong," a blank screen, clients or projects appear missing, or data that was there before is no longer visible.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'Stale browser cache showing outdated data. Temporary network or server connectivity issues. Your role was changed and you no longer have access to certain data (Members only see assigned clients). A filter or search is active, hiding some records. The browser tab has been open for a long time without refreshing.'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Try these steps:',
        steps: [
          'Hard-refresh the page: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac).',
          'Check if any filters or search terms are active on the page — clear them to see all records.',
          'Check your role: if you\'re a Member, you only see clients assigned to you. Ask an Admin if your assignments changed.',
          'Clear your browser cache for app.clienter.co.in and reload.',
          'Try a different browser or incognito window.',
          'Check status.clienter.co.in for any ongoing service incidents.',
          'If the issue persists, contact support@clienter.co.in with a screenshot of the error and the URL where it occurs.'
        ],
        callout: { type: 'info', text: 'Your data is not deleted when a page shows an error. Clienter stores data on secure servers with daily backups — display issues are almost always temporary.' }
      }
    ],
    relatedLinks: [
      { title: "I can't log in", href: '/help/troubleshooting/cant-login' },
      { title: 'How is my data protected?', href: '/help/security/data' }
    ],
    relatedDocs: [
      { title: 'Security Overview', href: '/docs/security' }
    ]
  },

  'troubleshooting/portal-issues': {
    slug: 'troubleshooting/portal-issues',
    title: "Client can't access portal",
    metaTitle: 'Client Portal Access Issues — Clienter Troubleshooting',
    metaDescription: 'Troubleshoot client portal access problems. Fix issues with portal invites, magic links, login errors, and permission settings.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: "Client can't access portal", href: '/help/troubleshooting/portal-issues' }
    ],
    answer: 'If your client can\'t access their portal, the issue is usually with the invite email, portal access settings, or the magic link. Here\'s how to fix it.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'Your client says they never received the portal invite, the link doesn\'t work, they see an "Access denied" message, or the portal page is blank.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'Portal access is not enabled for that client. The invite email went to spam. The magic link expired (15-minute validity). The client\'s email address is different from what you have on file. The client is trying to use a browser that doesn\'t support the portal (very old browsers).'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Work through these:',
        steps: [
          'Go to the client\'s profile in Clienter and verify that "Portal Access" is toggled ON.',
          'Confirm the email address on file matches the email your client uses.',
          'Click "Resend Portal Invite" from the client\'s profile.',
          'Ask your client to check their spam/junk folder for the email from Clienter.',
          'If the magic link expired, they can request a new one from the portal login page using "Send me a login link."',
          'Ask the client to try a different browser (Chrome, Safari, Edge, or Firefox — latest versions).',
          'If all else fails, temporarily set a password for the client from their profile so they can log in directly.'
        ]
      }
    ],
    relatedLinks: [
      { title: 'How does my client log in?', href: '/help/portal/client-login' },
      { title: 'How do I set up the portal?', href: '/help/portal/setup' }
    ],
    relatedDocs: [
      { title: 'Client Portal Guide', href: '/docs/client-portal' }
    ]
  },

  'troubleshooting/invoice-not-received': {
    slug: 'troubleshooting/invoice-not-received',
    title: "Client didn't receive invoice email",
    metaTitle: 'Invoice Email Not Received — Clienter Troubleshooting',
    metaDescription: 'Troubleshoot invoice delivery issues in Clienter. Fix problems with invoice emails not reaching your clients.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: 'Invoice not received', href: '/help/troubleshooting/invoice-not-received' }
    ],
    answer: 'If your client says they didn\'t receive an invoice email, the issue is usually with the email address, spam filters, or the invoice not actually being sent. Here\'s how to fix it.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'Your client reports they never received the invoice email, or you\'re unsure whether the invoice was actually sent.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'The invoice was saved as a draft but never sent. The client\'s email address has a typo. The invoice email landed in the client\'s spam/junk folder. The client\'s email provider blocked the email.'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Try these:',
        steps: [
          'Go to Invoices in your Clienter dashboard and check the invoice status. If it says "Draft," it was never sent — click "Send" to deliver it.',
          'Verify the client\'s email address in their profile. Even a small typo (like .con instead of .com) will prevent delivery.',
          'Ask your client to search their spam/junk folder for emails from Clienter.',
          'Ask your client to add noreply@clienter.co.in to their email contacts to prevent future filtering.',
          'Click "Resend" on the invoice to send a fresh copy.',
          'As a workaround, you can share the invoice payment link directly via WhatsApp or any messaging app — copy the link from the invoice details page.'
        ],
        callout: { type: 'tip', text: 'Copy the invoice payment link and share it via WhatsApp for a faster alternative to email.' }
      }
    ],
    relatedLinks: [
      { title: 'Payment not going through', href: '/help/troubleshooting/payment-failed' },
      { title: "Client can't access portal", href: '/help/troubleshooting/portal-issues' }
    ],
    relatedDocs: [
      { title: 'Invoicing Guide', href: '/docs/invoicing' }
    ]
  },

  'troubleshooting/calendar-not-syncing': {
    slug: 'troubleshooting/calendar-not-syncing',
    title: 'Google Calendar not syncing',
    metaTitle: 'Fix Google Calendar Sync Issues — Clienter Troubleshooting',
    metaDescription: 'Troubleshoot Google Calendar sync problems in Clienter. Fix issues with events not appearing, sync delays, and disconnected accounts.',
    category: 'Troubleshooting',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Troubleshooting', href: '/help/troubleshooting' },
      { label: 'Calendar not syncing', href: '/help/troubleshooting/calendar-not-syncing' }
    ],
    answer: 'If Google Calendar events aren\'t syncing to Clienter (or vice versa), the issue is usually with permissions, the connected account, or sync settings.' + SUPPORT_FOOTER,
    sections: [
      {
        id: 'symptoms',
        heading: 'Symptoms',
        level: 2,
        content: 'Google Calendar events don\'t appear in Clienter, Clienter deadlines don\'t show up in Google Calendar, or sync stopped working after it was previously fine.'
      },
      {
        id: 'causes',
        heading: 'Common causes',
        level: 2,
        content: 'Google Calendar permissions were revoked (e.g., during a Google security checkup). The connected Google account\'s password was changed. The selected calendar was deleted or hidden in Google. Sync direction settings were changed. Your plan was downgraded from Pro/Ultra to Free (calendar sync requires Pro or Ultra).'
      },
      {
        id: 'fixes',
        heading: 'Step-by-step fixes',
        level: 2,
        content: 'Try these:',
        steps: [
          'Go to Settings → Integrations → Google Calendar and check the connection status.',
          'If it shows "Disconnected" or "Requires reconnection," click "Reconnect" and sign in with your Google account again.',
          'Verify you\'re connecting the correct Google account (the one with the calendar you want to sync).',
          'Check that the correct calendar is selected in the sync settings — if you have multiple calendars, the wrong one might be selected.',
          'Verify your sync direction settings (pull from Google, push to Google, or both).',
          'Go to your Google Account → Security → Third-party apps and make sure Clienter still has access.',
          'Confirm you\'re on Pro or Ultra — calendar sync is not available on the Free plan.',
          'If all else fails, disconnect and reconnect the integration from scratch.'
        ]
      }
    ],
    relatedLinks: [
      { title: 'Google Calendar setup step-by-step', href: '/help/integrations/google-cal' }
    ],
    relatedDocs: [
      { title: 'Integrations Overview', href: '/docs/integrations' }
    ]
  }
}
