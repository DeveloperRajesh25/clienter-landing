import type { DocPage } from './types'

export const GETTING_STARTED_DOCS: Record<string, DocPage> = {
  'getting-started': {
    slug: 'getting-started',
    title: 'Getting Started',
    metaTitle: 'Getting Started with Clienter — Quickstart Guide',
    metaDescription: 'Get up and running with Clienter in under 10 minutes. Learn how to set up your account, add clients, create projects, and send your first invoice.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' }
    ],
    sections: [
      {
        id: 'welcome',
        heading: 'Welcome to Clienter',
        level: 2,
        content: 'Clienter is an all-in-one platform built for freelancers and small agencies to manage clients, projects, invoices, and teams — all from one place. Whether you are a solo designer, a development studio, or a growing agency, Clienter helps you stay organized and get paid on time.'
      },
      {
        id: 'quickstart-overview',
        heading: 'Quickstart Overview',
        level: 2,
        content: 'You can be fully set up and sending your first invoice in under 10 minutes. Here is the recommended order to get started:',
        steps: [
          'Create your free account at app.clienter.co.in',
          'Set up your organization — add your business name, logo, currency, and bank details',
          'Add your first client with their contact and billing information',
          'Create your first project and link it to that client',
          'Generate and send your first invoice',
          'Invite team members if you work with others',
          'Install the mobile app for on-the-go access'
        ],
        callout: {
          type: 'tip',
          text: 'The Free plan gives you 3 clients, 5 projects, and 1 teammate — no credit card required. You can upgrade anytime as your business grows.'
        }
      },
      {
        id: 'what-you-need',
        heading: 'What You Need',
        level: 2,
        content: 'To get the most out of Clienter, have the following ready before you begin: your business name and logo, your bank account or UPI details for receiving payments, and at least one client\'s contact information. Everything else can be added later.'
      },
      {
        id: 'plans-overview',
        heading: 'Choose the Right Plan',
        level: 2,
        content: 'Clienter offers three plans to match where you are in your freelancing or agency journey. The **Free** plan (₹0) includes 3 clients, 5 projects, and 1 teammate — perfect for getting started. The **Pro** plan (₹199/mo or $19/mo) expands to 20 clients, 40 projects, and 5 teammates. The **Ultra** plan (₹799/mo or $39/mo) unlocks expanded limits across the board for growing agencies.',
        callout: {
          type: 'info',
          text: 'All plans include invoicing, project tracking, and client management. You can start free and upgrade when you need more capacity.'
        }
      },
      {
        id: 'need-help',
        heading: 'Need Help?',
        level: 2,
        content: 'If you run into any issues while setting up, reach out to our support team at support@clienter.co.in. We typically respond within a few hours on business days.'
      }
    ],
    faqs: [
      { q: 'Is Clienter free to use?', a: 'Yes. The Free plan costs ₹0 and includes 3 clients, 5 projects, and 1 teammate. No credit card is required to sign up.' },
      { q: 'Can I upgrade or downgrade my plan later?', a: 'Absolutely. You can change your plan at any time from your account settings. Upgrades take effect immediately, and downgrades apply at the end of your current billing cycle.' },
      { q: 'Does Clienter have a mobile app?', a: 'Clienter is a Progressive Web App (PWA). You can install it directly from your browser on Android or iOS — no app store download needed.' }
    ],
    relatedLinks: [
      { title: 'Create Your Account', href: '/docs/getting-started/signup' },
      { title: 'Set Up Your Organization', href: '/docs/getting-started/setup' },
      { title: 'Add Your First Client', href: '/docs/getting-started/first-client' },
      { title: 'Send Your First Invoice', href: '/docs/getting-started/first-invoice' }
    ]
  },

  'getting-started/signup': {
    slug: 'getting-started/signup',
    title: 'Creating Your Account',
    metaTitle: 'Create Your Clienter Account — Sign Up in Seconds',
    metaDescription: 'Sign up for Clienter in under a minute. Create your free account to start managing clients, projects, and invoices for your freelance or agency business.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Creating Your Account', href: '/docs/getting-started/signup' }
    ],
    sections: [
      {
        id: 'create-account',
        heading: 'Create Your Free Account',
        level: 2,
        content: 'Getting started with Clienter takes less than a minute. Head to app.clienter.co.in and you will see the sign-up page.',
        steps: [
          'Open app.clienter.co.in in your browser',
          'Click "Sign Up" or "Get Started"',
          'Enter your email address and create a password, or sign up with Google for one-click access',
          'Check your inbox for a verification email and click the confirmation link',
          'You are in — you will land on your dashboard, ready to set up your organization'
        ],
        callout: {
          type: 'tip',
          text: 'Signing up with Google is the fastest option — it skips email verification entirely and gets you to your dashboard in one click.'
        }
      },
      {
        id: 'email-verification',
        heading: 'Email Verification',
        level: 2,
        content: 'If you sign up with email and password, you will receive a verification email within a few minutes. Click the link in the email to activate your account. If you do not see it, check your spam or promotions folder.',
        callout: {
          type: 'info',
          text: 'Verification emails are sent from noreply@clienter.co.in. Add this address to your contacts to prevent it from landing in spam.'
        }
      },
      {
        id: 'choosing-password',
        heading: 'Choosing a Strong Password',
        level: 3,
        content: 'Your password should be at least 8 characters long. We recommend using a mix of letters, numbers, and symbols. If you use a password manager, let it generate one for you. You can always reset your password later from the login page.'
      },
      {
        id: 'what-happens-next',
        heading: 'What Happens After Sign-Up',
        level: 2,
        content: 'Once your account is created, Clienter will guide you through initial setup. You will be asked to enter your organization name and basic details. This information appears on invoices and client-facing documents, so use your real business or freelance brand name.',
        callout: {
          type: 'tip',
          text: 'You can change your organization details at any time from Settings, so do not worry about getting everything perfect on day one.'
        }
      },
      {
        id: 'free-plan-limits',
        heading: 'What the Free Plan Includes',
        level: 2,
        content: 'Your new account starts on the Free plan at no cost. You get up to 3 clients, 5 projects, and 1 teammate. No credit card is required — there are no trials or hidden fees. When you need more capacity, you can upgrade to Pro (₹199/mo or $19/mo) or Ultra (₹799/mo or $39/mo) from your account settings.',
        planBadge: 'Free'
      }
    ],
    faqs: [
      { q: 'Can I sign up with my phone number?', a: 'Currently, sign-up is available via email or Google. Phone number login is not supported yet.' },
      { q: 'I did not receive the verification email. What should I do?', a: 'Check your spam or promotions folder first. If it is not there, try signing up again or contact support@clienter.co.in for help.' },
      { q: 'Can I use Clienter for multiple businesses?', a: 'Each Clienter account is tied to one organization. If you run multiple businesses, you can create separate accounts with different email addresses.' }
    ],
    relatedLinks: [
      { title: 'Set Up Your Organization', href: '/docs/getting-started/setup' },
      { title: 'Getting Started Overview', href: '/docs/getting-started' },
      { title: 'Install the Mobile App', href: '/docs/getting-started/mobile' }
    ]
  },

  'getting-started/setup': {
    slug: 'getting-started/setup',
    title: 'Setting Up Your Organization',
    metaTitle: 'Set Up Your Organization in Clienter — Name, Logo, Currency & More',
    metaDescription: 'Configure your Clienter organization with your business name, logo, preferred currency, timezone, and bank details for professional invoices.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Setting Up Your Organization', href: '/docs/getting-started/setup' }
    ],
    sections: [
      {
        id: 'why-setup-matters',
        heading: 'Why Organization Setup Matters',
        level: 2,
        content: 'Your organization details appear on every invoice, proposal, and client-facing document you send through Clienter. Taking a few minutes to set these up correctly ensures you look professional from your very first interaction with a client.'
      },
      {
        id: 'basic-info',
        heading: 'Business Name and Logo',
        level: 2,
        content: 'Start by entering your business name — this could be your registered company name, your freelance brand, or simply your full name if you operate as a sole proprietor. Upload a logo (PNG or JPG, at least 200x200px recommended) to make your invoices and documents instantly recognizable.',
        steps: [
          'Go to Settings from the sidebar',
          'Under "Organization", enter your business or brand name',
          'Click the logo area to upload your business logo',
          'Hit Save to apply your changes'
        ],
        callout: {
          type: 'tip',
          text: 'If you do not have a logo yet, Clienter will display your business name in a clean text format on invoices. You can always add a logo later.'
        }
      },
      {
        id: 'currency-timezone',
        heading: 'Currency and Timezone',
        level: 2,
        content: 'Set your default currency to match how you bill most of your clients. Clienter supports Indian Rupees (INR) and US Dollars (USD), among others. Your timezone affects how dates and deadlines appear across the platform. Both can be changed later, but setting them correctly now saves time.',
        steps: [
          'In Settings, find the "Currency" dropdown and select your preferred currency',
          'Set your timezone from the "Timezone" dropdown',
          'Click Save'
        ],
        callout: {
          type: 'info',
          text: 'Changing your default currency does not retroactively update existing invoices. Each invoice locks in the currency it was created with.'
        }
      },
      {
        id: 'bank-details',
        heading: 'Bank and Payment Details',
        level: 2,
        content: 'Adding your bank details allows Clienter to display them on invoices so clients know exactly where to send payment. You can add your bank account number, IFSC code, UPI ID, or any other payment information relevant to your region.',
        steps: [
          'Navigate to Settings and scroll to "Payment Details"',
          'Enter your bank name, account number, and IFSC code',
          'Add your UPI ID if you accept UPI payments',
          'Optionally add PayPal or other international payment details',
          'Click Save'
        ],
        callout: {
          type: 'warning',
          text: 'Your bank details are displayed on invoices you send. Double-check the account number and IFSC code to avoid payment issues.'
        }
      },
      {
        id: 'business-address',
        heading: 'Business Address and Tax Info',
        level: 3,
        content: 'If you need to display a business address or tax registration number (such as GSTIN) on your invoices, you can add these in the Organization settings. This is optional but recommended for registered businesses, as many clients require it for their own bookkeeping.'
      },
      {
        id: 'setup-complete',
        heading: 'You Are All Set',
        level: 2,
        content: 'Once your organization details are saved, every invoice and document you create will automatically pull in your business name, logo, currency, and payment details. You are now ready to add your first client.',
        callout: {
          type: 'tip',
          text: 'Bookmark app.clienter.co.in/settings to quickly return to your organization settings whenever you need to update them.'
        }
      }
    ],
    faqs: [
      { q: 'Can I change my organization name later?', a: 'Yes. Go to Settings and update your organization name at any time. The change applies to all future documents but does not alter previously sent invoices.' },
      { q: 'What image format should my logo be?', a: 'PNG or JPG files work best. Use a square image of at least 200x200 pixels for the sharpest display on invoices.' },
      { q: 'Can I bill different clients in different currencies?', a: 'Yes. The default currency is a starting point, but you can select a different currency when creating individual invoices.' }
    ],
    relatedLinks: [
      { title: 'Add Your First Client', href: '/docs/getting-started/first-client' },
      { title: 'Send Your First Invoice', href: '/docs/getting-started/first-invoice' },
      { title: 'Creating Your Account', href: '/docs/getting-started/signup' }
    ]
  },

  'getting-started/first-client': {
    slug: 'getting-started/first-client',
    title: 'Adding Your First Client',
    metaTitle: 'Add Your First Client in Clienter — Client Management Guide',
    metaDescription: 'Learn how to add and manage your first client in Clienter. Store contact details, billing info, and notes to keep your freelance business organized.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Adding Your First Client', href: '/docs/getting-started/first-client' }
    ],
    sections: [
      {
        id: 'about-clients',
        heading: 'How Clients Work in Clienter',
        level: 2,
        content: 'Clients are at the center of everything in Clienter. Every project, invoice, and interaction is linked to a client. Adding a client takes about 30 seconds and creates a dedicated space where you can track all the work you do for them.'
      },
      {
        id: 'add-client',
        heading: 'Add a New Client',
        level: 2,
        content: 'Adding a client is straightforward. You just need their name and email to get started — everything else is optional and can be filled in later.',
        steps: [
          'Click "Clients" in the sidebar to open the client list',
          'Click the "Add Client" or "+" button',
          'Enter the client\'s name (person or company)',
          'Add their email address — this is where invoices will be sent',
          'Optionally fill in phone number, company name, and billing address',
          'Click Save to create the client'
        ],
        callout: {
          type: 'tip',
          text: 'Use the company name field even for individual clients if they want invoices addressed to their business. It appears on invoices alongside their name.'
        }
      },
      {
        id: 'client-details',
        heading: 'What to Include',
        level: 2,
        content: 'At minimum, add a name and email. For a complete client profile, also include their phone number, company name, billing address, and any tax identifiers they have provided (like GSTIN). The more details you add now, the less you will need to look up later when creating invoices or proposals.',
        callout: {
          type: 'info',
          text: 'Client email addresses are used to send invoices directly from Clienter. Make sure the email is one your client actively checks.'
        }
      },
      {
        id: 'client-notes',
        heading: 'Adding Notes to a Client',
        level: 3,
        content: 'Each client profile has a notes section where you can jot down important context — their preferred communication style, project history, payment habits, or anything that helps you serve them better. Notes are private and visible only to you and your team.'
      },
      {
        id: 'client-limits',
        heading: 'Client Limits by Plan',
        level: 2,
        content: 'The Free plan allows up to 3 clients. If you are managing more than 3 clients, upgrade to the Pro plan (₹199/mo or $19/mo) for up to 20 clients, or Ultra (₹799/mo or $39/mo) for expanded limits.',
        planBadge: 'Free',
        callout: {
          type: 'info',
          text: 'Archived clients do not count toward your plan limit. If you finish working with a client, archive them to free up a slot.'
        }
      },
      {
        id: 'whats-next',
        heading: 'Next: Create a Project',
        level: 2,
        content: 'Now that your client is added, the next step is creating a project for them. Projects help you organize work, track progress, and link invoices to specific deliverables.'
      }
    ],
    faqs: [
      { q: 'Can I import clients from a spreadsheet?', a: 'Bulk import is not available yet, but we are working on it. For now, clients need to be added one at a time.' },
      { q: 'Can a client see my Clienter dashboard?', a: 'No. Clients only see the invoices and documents you send them via email. They do not have access to your Clienter account.' },
      { q: 'What happens if I delete a client?', a: 'Deleting a client removes their profile, but invoices and projects linked to them are preserved for your records. Consider archiving instead of deleting.' }
    ],
    relatedLinks: [
      { title: 'Create Your First Project', href: '/docs/getting-started/first-project' },
      { title: 'Send Your First Invoice', href: '/docs/getting-started/first-invoice' },
      { title: 'Set Up Your Organization', href: '/docs/getting-started/setup' }
    ]
  },

  'getting-started/first-project': {
    slug: 'getting-started/first-project',
    title: 'Creating Your First Project',
    metaTitle: 'Create Your First Project in Clienter — Project Management Guide',
    metaDescription: 'Create and manage projects in Clienter. Link projects to clients, set deadlines, track progress, and keep your freelance work organized.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Creating Your First Project', href: '/docs/getting-started/first-project' }
    ],
    sections: [
      {
        id: 'about-projects',
        heading: 'How Projects Work',
        level: 2,
        content: 'Projects in Clienter represent a specific piece of work you are doing for a client — a website redesign, a marketing campaign, an ongoing retainer, or anything else you deliver. Each project is tied to a client and can have its own timeline, budget, and status.'
      },
      {
        id: 'create-project',
        heading: 'Create a New Project',
        level: 2,
        content: 'Creating a project takes under a minute. Make sure you have already added the client this project is for.',
        steps: [
          'Click "Projects" in the sidebar',
          'Click the "Add Project" or "+" button',
          'Give your project a clear, descriptive name (e.g., "Website Redesign — Q4 2026")',
          'Select the client this project belongs to',
          'Set a start date and deadline if applicable',
          'Add an optional project budget or rate',
          'Click Save to create the project'
        ],
        callout: {
          type: 'tip',
          text: 'Use specific project names that include the deliverable and timeframe. This makes it much easier to find past projects later, especially as your list grows.'
        }
      },
      {
        id: 'project-status',
        heading: 'Tracking Project Status',
        level: 2,
        content: 'Every project has a status that you can update as work progresses. Common statuses include Not Started, In Progress, On Hold, and Completed. Keeping statuses up to date gives you a clear overview of your workload from the Projects dashboard.',
        callout: {
          type: 'info',
          text: 'The project dashboard shows all your active projects at a glance. Use it as your daily command center to see what needs attention.'
        }
      },
      {
        id: 'project-budget',
        heading: 'Setting a Project Budget',
        level: 3,
        content: 'If your project has a fixed price or hourly rate, add it when creating the project. This helps you track revenue per project and makes it faster to generate invoices later — Clienter can pull the project amount directly into an invoice.'
      },
      {
        id: 'linking-invoices',
        heading: 'Linking Projects to Invoices',
        level: 2,
        content: 'When you create an invoice, you can link it to a specific project. This keeps your finances organized and makes it easy to see the total revenue generated by each project. You will learn how to create invoices in the next guide.',
        callout: {
          type: 'tip',
          text: 'For retainer clients, create a new project for each billing period (e.g., "Social Media Management — October 2026") to keep revenue tracking clean.'
        }
      },
      {
        id: 'project-limits',
        heading: 'Project Limits by Plan',
        level: 2,
        content: 'The Free plan allows up to 5 projects. Pro (₹199/mo or $19/mo) increases this to 40 projects, and Ultra (₹799/mo or $39/mo) expands the limit further. Completed projects can be archived to free up slots on your current plan.',
        planBadge: 'Free'
      }
    ],
    faqs: [
      { q: 'Can I assign a project to multiple clients?', a: 'Each project belongs to one client. If two clients are involved, create separate projects for each and reference them in your notes.' },
      { q: 'Can I move a project to a different client?', a: 'Yes. Edit the project and change the assigned client. Linked invoices remain unchanged.' },
      { q: 'Do completed projects count toward my limit?', a: 'Active projects count toward your plan limit. Archive completed projects to free up slots.' }
    ],
    relatedLinks: [
      { title: 'Send Your First Invoice', href: '/docs/getting-started/first-invoice' },
      { title: 'Add Your First Client', href: '/docs/getting-started/first-client' },
      { title: 'Invite Your First Team Member', href: '/docs/getting-started/invite-team' }
    ]
  },

  'getting-started/first-invoice': {
    slug: 'getting-started/first-invoice',
    title: 'Sending Your First Invoice',
    metaTitle: 'Send Your First Invoice with Clienter — Invoicing Guide',
    metaDescription: 'Create and send professional invoices in Clienter. Add line items, taxes, and discounts, then send directly to your client via email.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Sending Your First Invoice', href: '/docs/getting-started/first-invoice' }
    ],
    sections: [
      {
        id: 'about-invoicing',
        heading: 'Invoicing in Clienter',
        level: 2,
        content: 'Clienter generates clean, professional invoices that include your business details, logo, and payment information — all pulled automatically from your organization settings. Your clients receive invoices by email and can view them in their browser.'
      },
      {
        id: 'create-invoice',
        heading: 'Create a New Invoice',
        level: 2,
        content: 'Make sure you have at least one client added before creating an invoice. Having a project linked is optional but recommended for better tracking.',
        steps: [
          'Click "Invoices" in the sidebar',
          'Click "Create Invoice" or the "+" button',
          'Select the client this invoice is for',
          'Optionally link it to a project',
          'Add line items — each with a description, quantity, and rate',
          'Review the total, add any taxes or discounts if needed',
          'Click Save to create the invoice as a draft'
        ],
        callout: {
          type: 'tip',
          text: 'Always preview your invoice before sending. Check that line items, totals, and your bank details look correct — your client will judge your professionalism by this document.'
        }
      },
      {
        id: 'line-items',
        heading: 'Adding Line Items',
        level: 2,
        content: 'Line items are the individual services or products you are billing for. Each line item has a description (e.g., "Homepage Design"), a quantity, and a unit rate. Clienter calculates the line total and invoice total automatically. Add as many line items as you need.',
        callout: {
          type: 'info',
          text: 'Write clear, specific descriptions for each line item. Instead of "Design work", try "Homepage UI Design — 3 revisions included". Your clients will appreciate the clarity.'
        }
      },
      {
        id: 'taxes-discounts',
        heading: 'Taxes and Discounts',
        level: 3,
        content: 'You can add tax (like GST at 18%) or discounts to your invoice. Tax is calculated on the subtotal, and discounts can be applied as a fixed amount or percentage. If you are GST-registered, make sure your GSTIN is added in your organization settings so it appears on the invoice.'
      },
      {
        id: 'send-invoice',
        heading: 'Sending the Invoice',
        level: 2,
        content: 'Once your invoice looks good, you are ready to send it. Clienter emails the invoice directly to your client.',
        steps: [
          'Open the invoice you want to send',
          'Click "Send" or "Send Invoice"',
          'Confirm the client\'s email address',
          'Add an optional message or note for the client',
          'Click Send — the invoice is delivered to your client\'s inbox'
        ],
        callout: {
          type: 'warning',
          text: 'Once an invoice is sent, it is marked as "Sent" and the client can view it. If you need to make changes after sending, you can edit the invoice, but consider communicating the changes to your client directly.'
        }
      },
      {
        id: 'tracking-payments',
        heading: 'Tracking Payment Status',
        level: 2,
        content: 'After sending, your invoice will show a status: Sent, Viewed, Paid, or Overdue. When your client pays, you can manually mark the invoice as Paid. This updates your revenue dashboard and keeps your records accurate.',
        callout: {
          type: 'tip',
          text: 'Follow up on overdue invoices promptly. A friendly reminder within a few days of the due date significantly improves payment speed.'
        }
      }
    ],
    faqs: [
      { q: 'Can I send invoices in different currencies?', a: 'Yes. You can select the currency for each invoice when creating it, regardless of your default currency setting.' },
      { q: 'Can my client pay directly through the invoice?', a: 'Invoices display your payment details (bank account, UPI ID, PayPal, etc.) so clients can pay using their preferred method. Direct online payment collection is on the roadmap.' },
      { q: 'Can I duplicate an invoice for recurring billing?', a: 'Yes. Open an existing invoice and use the duplicate option to create a copy with the same line items. Just update the date and invoice number.' },
      { q: 'Is there a limit on how many invoices I can send?', a: 'There is no invoice limit on any plan. You can send as many invoices as you need.' }
    ],
    relatedLinks: [
      { title: 'Set Up Your Organization', href: '/docs/getting-started/setup' },
      { title: 'Add Your First Client', href: '/docs/getting-started/first-client' },
      { title: 'Create Your First Project', href: '/docs/getting-started/first-project' }
    ]
  },

  'getting-started/invite-team': {
    slug: 'getting-started/invite-team',
    title: 'Inviting Your First Team Member',
    metaTitle: 'Invite Team Members to Clienter — Team Collaboration Guide',
    metaDescription: 'Invite teammates to your Clienter workspace. Collaborate on projects, share client information, and manage work together as a team.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Inviting Your First Team Member', href: '/docs/getting-started/invite-team' }
    ],
    sections: [
      {
        id: 'about-teams',
        heading: 'Working with a Team',
        level: 2,
        content: 'If you work with other people — whether they are full-time employees, part-time contractors, or project collaborators — you can invite them to your Clienter workspace. Team members can view clients, contribute to projects, and help manage your business alongside you.'
      },
      {
        id: 'invite-member',
        heading: 'Send an Invitation',
        level: 2,
        content: 'Inviting a team member takes just a few clicks. They will receive an email with a link to join your workspace.',
        steps: [
          'Go to Settings from the sidebar',
          'Open the "Team" or "Members" section',
          'Click "Invite Member"',
          'Enter your teammate\'s email address',
          'Select their role (if role options are available)',
          'Click Send Invite'
        ],
        callout: {
          type: 'info',
          text: 'The invited person will receive an email with a link to create their Clienter account (or join your workspace if they already have one). The invitation expires after a few days, so let them know to accept it promptly.'
        }
      },
      {
        id: 'team-roles',
        heading: 'Understanding Team Roles',
        level: 2,
        content: 'As the account owner, you have full control over the workspace — including billing, settings, and member management. Team members can access clients, projects, and invoices within the workspace. The owner is the only one who can manage the subscription and organization settings.',
        callout: {
          type: 'warning',
          text: 'Be selective about who you invite. Team members can see client information and project details within your workspace. Only invite people you trust with your business data.'
        }
      },
      {
        id: 'team-limits',
        heading: 'Team Member Limits by Plan',
        level: 2,
        content: 'The Free plan includes 1 teammate (in addition to you, the owner). The Pro plan (₹199/mo or $19/mo) allows up to 5 teammates, and Ultra (₹799/mo or $39/mo) expands this further. If you need more seats, upgrading your plan is the fastest path.',
        planBadge: 'Free'
      },
      {
        id: 'managing-members',
        heading: 'Managing Your Team',
        level: 2,
        content: 'You can view all team members, pending invitations, and remove members from the Team section in Settings. Removing a member revokes their access immediately but does not delete any work they contributed to projects or invoices.',
        callout: {
          type: 'tip',
          text: 'If a teammate leaves your organization, remove them from your workspace right away to keep your business data secure.'
        }
      }
    ],
    faqs: [
      { q: 'Do team members need their own Clienter account?', a: 'Yes. When they accept your invitation, they will create their own Clienter account (or link an existing one) to join your workspace.' },
      { q: 'Can a person be part of multiple workspaces?', a: 'Yes. A single Clienter account can belong to multiple workspaces, making it easy for freelancers who collaborate with different teams.' },
      { q: 'Does the owner count toward the teammate limit?', a: 'No. The owner is separate. For example, the Free plan allows 1 teammate plus the owner, so 2 people total can access the workspace.' }
    ],
    relatedLinks: [
      { title: 'Getting Started Overview', href: '/docs/getting-started' },
      { title: 'Install the Mobile App', href: '/docs/getting-started/mobile' },
      { title: 'Create Your First Project', href: '/docs/getting-started/first-project' }
    ]
  },

  'getting-started/mobile': {
    slug: 'getting-started/mobile',
    title: 'Installing the Mobile App',
    metaTitle: 'Install the Clienter Mobile App (PWA) — Android & iOS Guide',
    metaDescription: 'Install Clienter on your phone as a Progressive Web App. Get instant access to clients, projects, and invoices from your Android or iOS home screen.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Installing the Mobile App', href: '/docs/getting-started/mobile' }
    ],
    sections: [
      {
        id: 'about-pwa',
        heading: 'Clienter on Your Phone',
        level: 2,
        content: 'Clienter is a Progressive Web App (PWA), which means you can install it directly from your browser — no app store needed. Once installed, it looks and feels like a native app with its own icon on your home screen, full-screen experience, and fast loading.',
        callout: {
          type: 'info',
          text: 'A PWA is a website that behaves like a native app. It loads fast, works offline for cached data, and receives the same updates as the desktop version automatically.'
        }
      },
      {
        id: 'install-android',
        heading: 'Install on Android (Chrome)',
        level: 2,
        content: 'Chrome on Android makes installing PWAs easy. Follow these steps to add Clienter to your home screen:',
        steps: [
          'Open Google Chrome on your Android device',
          'Navigate to app.clienter.co.in',
          'Log in to your account',
          'Tap the three-dot menu (⋮) in the top-right corner',
          'Tap "Add to Home screen" or "Install app"',
          'Confirm the installation when prompted',
          'Clienter now appears on your home screen like any other app'
        ],
        callout: {
          type: 'tip',
          text: 'If you do not see the "Install app" option, make sure you are using Chrome (not Samsung Internet or another browser). Also try scrolling down in the menu — it sometimes appears lower in the list.'
        }
      },
      {
        id: 'install-ios',
        heading: 'Install on iPhone and iPad (Safari)',
        level: 2,
        content: 'On iOS, PWAs can only be installed through Safari. Other browsers like Chrome on iOS do not support the "Add to Home Screen" feature for PWAs.',
        steps: [
          'Open Safari on your iPhone or iPad',
          'Go to app.clienter.co.in',
          'Log in to your account',
          'Tap the Share button (the square with an upward arrow) at the bottom of the screen',
          'Scroll down and tap "Add to Home Screen"',
          'Give the app a name (or keep "Clienter") and tap Add',
          'The Clienter icon now appears on your home screen'
        ],
        callout: {
          type: 'warning',
          text: 'You must use Safari on iOS. Chrome, Firefox, and other iOS browsers cannot install PWAs to the home screen. This is an Apple platform limitation, not a Clienter issue.'
        }
      },
      {
        id: 'using-mobile',
        heading: 'Using Clienter on Mobile',
        level: 2,
        content: 'The mobile experience gives you access to all core features — view clients, check project statuses, create and send invoices, and manage your team. The interface is optimized for smaller screens, so navigation and key actions are within easy reach.',
        callout: {
          type: 'tip',
          text: 'Keep the mobile app handy for quick tasks like checking a client detail before a call, updating a project status after a meeting, or reviewing an invoice on the go.'
        }
      },
      {
        id: 'staying-updated',
        heading: 'Automatic Updates',
        level: 2,
        content: 'One of the best things about a PWA is that it updates automatically. Every time you open Clienter, it checks for the latest version and updates in the background. You always have the newest features and bug fixes without visiting an app store or manually updating.'
      },
      {
        id: 'troubleshooting',
        heading: 'Troubleshooting Installation',
        level: 3,
        content: 'If the install option does not appear, try these fixes: clear your browser cache and reload the page, make sure you are using Chrome on Android or Safari on iOS, check that you are on app.clienter.co.in (not a cached version), or try using an incognito/private window first. If the issue persists, contact support@clienter.co.in.',
        callout: {
          type: 'info',
          text: 'On some Android devices, you may see a small "Install" banner at the bottom of the screen when you first visit. Tapping it is the fastest way to install.'
        }
      }
    ],
    faqs: [
      { q: 'Is the PWA the same as a native app?', a: 'Functionally, yes — it has its own icon, runs full-screen, and loads fast. The main difference is that it is installed from your browser, not an app store.' },
      { q: 'Does the mobile app work offline?', a: 'Clienter caches some data for faster loading, but you need an internet connection for most actions like creating invoices or updating projects.' },
      { q: 'Will there be a native app on the App Store or Play Store?', a: 'The PWA is our primary mobile experience. A native app may come in the future, but the PWA delivers the same core functionality today.' },
      { q: 'Can I receive notifications on mobile?', a: 'Push notification support depends on your device and browser. Android Chrome supports push notifications for PWAs. iOS support for PWA notifications was added in iOS 16.4 and later.' }
    ],
    relatedLinks: [
      { title: 'Getting Started Overview', href: '/docs/getting-started' },
      { title: 'Create Your Account', href: '/docs/getting-started/signup' },
      { title: 'Set Up Your Organization', href: '/docs/getting-started/setup' }
    ]
  }
}
