import type { DocSection, HelpCategory } from './types'

export const DOC_SECTIONS: DocSection[] = [
  {
    title: 'Getting Started',
    description: 'Set up your Clienter account and start managing clients in minutes.',
    children: [
      'getting-started',
      'getting-started/signup',
      'getting-started/setup',
      'getting-started/first-client',
      'getting-started/first-project',
      'getting-started/first-invoice',
      'getting-started/invite-team',
      'getting-started/mobile',
    ],
  },
  {
    title: 'Clients',
    description: 'Add, manage, and organize your client relationships.',
    children: [
      'clients',
      'clients/adding-clients',
      'clients/client-details',
      'clients/client-currency',
      'clients/client-files',
      'clients/client-portal',
      'clients/client-reviews',
      'clients/client-avatars',
    ],
  },
  {
    title: 'Projects',
    description: 'Track freelance and retainer projects from start to finish.',
    children: [
      'projects',
      'projects/freelance',
      'projects/retainer',
      'projects/project-detail',
      'projects/progress',
      'projects/domain-hosting',
      'projects/secrets-vault',
      'projects/team-members',
    ],
  },
  {
    title: 'Leads',
    description: 'Manage your sales pipeline and convert leads into clients.',
    children: [
      'leads',
      'leads/pipeline',
      'leads/adding-leads',
      'leads/import-export',
      'leads/follow-ups',
      'leads/converting',
      'leads/lead-files',
      'leads/lead-location',
      'leads/lead-meetings',
      'leads/starred-leads',
      'leads/by-person',
      'leads/lead-sources',
      'leads/limits',
    ],
  },
  {
    title: 'Documents',
    description: 'Create quotations, contracts, and invoices with a canvas editor.',
    children: [
      'documents',
      'documents/canvas-editor',
      'documents/quotations',
      'documents/contracts',
      'documents/invoices',
      'documents/e-signature',
      'documents/sharing',
      'documents/paste-import',
      'documents/ai-builder',
      'documents/bulk-actions',
      'documents/linked-docs',
    ],
  },
  {
    title: 'Invoicing',
    description: 'Create invoices, track payments, and manage billing.',
    children: [
      'invoicing',
      'invoicing/creating',
      'invoicing/editing',
      'invoicing/auto-invoice',
      'invoicing/reminders',
      'invoicing/payments',
      'invoicing/currency',
    ],
  },
  {
    title: 'Tasks',
    description: 'Organize work with Kanban boards, cards, and recurring tasks.',
    children: [
      'tasks',
      'tasks/boards',
      'tasks/cards',
      'tasks/columns',
      'tasks/sharing',
      'tasks/recurring',
      'tasks/files',
      'tasks/client-tags',
    ],
  },
  {
    title: 'Meetings',
    description: 'Schedule meetings and sync with Google Calendar.',
    children: [
      'meetings',
      'meetings/scheduling',
      'meetings/google-calendar',
      'meetings/reminders',
      'meetings/lead-meetings',
    ],
  },
  {
    title: 'Messaging',
    description: 'Chat with your team and clients in real time.',
    children: [
      'messaging',
      'messaging/conversations',
      'messaging/realtime',
      'messaging/attachments',
      'messaging/portal-chat',
      'messaging/notifications',
    ],
  },
  {
    title: 'Team',
    description: 'Invite teammates, assign roles, and manage payroll.',
    children: [
      'team',
      'team/inviting',
      'team/roles',
      'team/teammate-portal',
      'team/payroll',
      'team/payouts',
      'team/removing',
      'team/limits',
    ],
  },
  {
    title: 'Dashboard',
    description: 'Revenue KPIs, forecasts, and your setup checklist.',
    children: [
      'dashboard',
      'dashboard/kpis',
      'dashboard/forecast',
      'dashboard/setup-checklist',
      'dashboard/announcements',
    ],
  },
  {
    title: 'Settings',
    description: 'Configure your organization, branding, and preferences.',
    children: [
      'settings',
      'settings/branding',
      'settings/white-label',
      'settings/custom-domains',
      'settings/currency',
      'settings/timezone',
      'settings/bank-details',
      'settings/dark-mode',
      'settings/files-vault',
      'settings/notifications',
    ],
  },
  {
    title: 'Billing',
    description: 'Plans, upgrades, payments, and account management.',
    children: [
      'billing',
      'billing/plans',
      'billing/upgrade',
      'billing/payment-methods',
      'billing/manage',
      'billing/grace-period',
      'billing/delete-account',
    ],
  },
  {
    title: 'Integrations',
    description: 'Connect Google Calendar, Meta Ads, IndiaMART, and more.',
    children: [
      'integrations',
      'integrations/google',
      'integrations/meta-ads',
      'integrations/indiamart',
      'integrations/webhook',
      'integrations/contact-form',
      'integrations/review-badge',
    ],
  },
  {
    title: 'Client Portal',
    description: 'Give your clients their own login to view projects, invoices, and more.',
    children: [
      'portal',
      'portal/overview',
      'portal/setup',
      'portal/features',
      'portal/login',
      'portal/notifications',
    ],
  },
  {
    title: 'Marketplace',
    description: 'Your public business profile and the agency directory.',
    children: [
      'marketplace',
      'marketplace/profile',
      'marketplace/directory',
      'marketplace/reviews',
    ],
  },
  {
    title: 'Partner Program',
    description: 'Earn commissions by referring others to Clienter.',
    children: [
      'partner-program',
      'partner-program/how-it-works',
      'partner-program/dashboard',
      'partner-program/sharing',
    ],
  },
  {
    title: 'Security',
    description: 'Encryption, data protection, and compliance.',
    children: [
      'security',
      'security/encryption',
      'security/data-protection',
      'security/rls',
      'security/captcha',
    ],
  },
  {
    title: 'Mobile',
    description: 'Install and use Clienter on your phone.',
    children: [
      'mobile',
      'mobile/install',
      'mobile/navigation',
      'mobile/responsive',
    ],
  },
  {
    title: 'Agency Workflows',
    description: 'Best practices for client onboarding, delivery, and portfolios.',
    children: [
      'agency-workflows',
      'agency-workflows/onboarding',
      'agency-workflows/delivery',
      'agency-workflows/case-studies',
    ],
  },
]

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: 'account',
    title: 'Account & Profile',
    description: 'Sign up, log in, reset your password, and manage your account.',
    icon: 'User',
    articles: ['account/signup', 'account/login', 'account/password-reset', 'account/delete', 'account/switch-org'],
  },
  {
    slug: 'billing',
    title: 'Billing & Subscription',
    description: 'Plans, upgrades, payments, and refunds.',
    icon: 'CreditCard',
    articles: ['billing/plans', 'billing/upgrade', 'billing/downgrade', 'billing/payment-failed', 'billing/cancel', 'billing/invoice', 'billing/refund'],
  },
  {
    slug: 'clients',
    title: 'Client Management',
    description: 'Adding, editing, and managing your clients.',
    icon: 'Users',
    articles: ['clients/add', 'clients/edit', 'clients/delete', 'clients/portal-invite', 'clients/reviews', 'clients/limits'],
  },
  {
    slug: 'projects',
    title: 'Projects',
    description: 'Creating and managing projects.',
    icon: 'FolderKanban',
    articles: ['projects/create', 'projects/retainer-setup', 'projects/team', 'projects/vault', 'projects/domain-expiry'],
  },
  {
    slug: 'leads',
    title: 'Leads',
    description: 'Adding, importing, and converting leads.',
    icon: 'Filter',
    articles: ['leads/add', 'leads/import', 'leads/convert', 'leads/stages', 'leads/integrations'],
  },
  {
    slug: 'documents',
    title: 'Documents',
    description: 'Creating and sharing quotations, contracts, and invoices.',
    icon: 'FileText',
    articles: ['documents/create', 'documents/sign', 'documents/share', 'documents/ai', 'documents/paste'],
  },
  {
    slug: 'invoicing',
    title: 'Invoicing & Payments',
    description: 'Creating invoices and recording payments.',
    icon: 'Receipt',
    articles: ['invoicing/create', 'invoicing/record-payment', 'invoicing/reminders', 'invoicing/auto-invoice', 'invoicing/currency'],
  },
  {
    slug: 'tasks',
    title: 'Tasks',
    description: 'Task boards, cards, and recurring tasks.',
    icon: 'CheckSquare',
    articles: ['tasks/create-board', 'tasks/share-client', 'tasks/recurring'],
  },
  {
    slug: 'meetings',
    title: 'Meetings',
    description: 'Scheduling meetings and calendar sync.',
    icon: 'Calendar',
    articles: ['meetings/schedule', 'meetings/google', 'meetings/reminders'],
  },
  {
    slug: 'messaging',
    title: 'Messaging',
    description: 'Chat with your team and clients.',
    icon: 'MessageSquare',
    articles: ['messaging/start', 'messaging/groups', 'messaging/client-chat'],
  },
  {
    slug: 'team',
    title: 'Team',
    description: 'Inviting members, roles, and payroll.',
    icon: 'UserPlus',
    articles: ['team/invite', 'team/roles', 'team/payroll', 'team/remove', 'team/limits'],
  },
  {
    slug: 'portal',
    title: 'Client Portal',
    description: 'Setting up and using the client portal.',
    icon: 'Globe',
    articles: ['portal/what-is', 'portal/setup', 'portal/client-login', 'portal/features'],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    description: 'Connect third-party services.',
    icon: 'Plug',
    articles: ['integrations/google-cal', 'integrations/meta-ads', 'integrations/indiamart', 'integrations/webhook', 'integrations/review-badge'],
  },
  {
    slug: 'referral',
    title: 'Refer & Earn',
    description: 'How the partner program works.',
    icon: 'Gift',
    articles: ['referral/how', 'referral/earnings', 'referral/withdraw'],
  },
  {
    slug: 'security',
    title: 'Security & Privacy',
    description: 'Data protection and encryption.',
    icon: 'Shield',
    articles: ['security/data', 'security/encryption', 'security/dpdp', 'security/delete-data'],
  },
  {
    slug: 'mobile',
    title: 'Mobile App',
    description: 'Installing and using Clienter on your phone.',
    icon: 'Smartphone',
    articles: ['mobile/install-android', 'mobile/install-ios', 'mobile/notifications'],
  },
  {
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Fixes for common issues.',
    icon: 'Wrench',
    articles: [
      'troubleshooting/payment-failed',
      'troubleshooting/push-not-working',
      'troubleshooting/cant-login',
      'troubleshooting/missing-data',
      'troubleshooting/portal-issues',
      'troubleshooting/invoice-not-received',
      'troubleshooting/calendar-not-syncing',
    ],
  },
  {
    slug: 'contact',
    title: 'Contact Support',
    description: 'Get in touch with the Clienter team.',
    icon: 'Mail',
    articles: [],
  },
]

export function getAllDocSlugs(): string[] {
  return DOC_SECTIONS.flatMap((s) => s.children)
}

export function getAllHelpSlugs(): string[] {
  return HELP_CATEGORIES.flatMap((c) => c.articles)
}

export function getDocSectionForSlug(slug: string): DocSection | undefined {
  return DOC_SECTIONS.find((s) => s.children.includes(slug))
}

export function getHelpCategoryForSlug(slug: string): HelpCategory | undefined {
  return HELP_CATEGORIES.find((c) => c.articles.includes(slug))
}

export function getAdjacentDocs(slug: string): { prev?: { title: string; href: string }; next?: { title: string; href: string } } {
  const all = getAllDocSlugs()
  const idx = all.indexOf(slug)
  return {
    prev: idx > 0 ? { title: all[idx - 1].split('/').pop()!.replace(/-/g, ' '), href: `/docs/${all[idx - 1]}` } : undefined,
    next: idx < all.length - 1 ? { title: all[idx + 1].split('/').pop()!.replace(/-/g, ' '), href: `/docs/${all[idx + 1]}` } : undefined,
  }
}
