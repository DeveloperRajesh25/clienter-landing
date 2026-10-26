import type { HelpArticle } from '../docs/types'

const SUPPORT_FOOTER = 'Still need help? Contact us at support@clienter.co.in or use the **Help** button in the app.'

export const HELP_PROJECTS_LEADS_DOCUMENTS: Record<string, HelpArticle> = {
  // ─── PROJECTS ───────────────────────────────────────────────

  'projects/create': {
    slug: 'projects/create',
    title: 'How do I create a project?',
    metaTitle: 'Create a Project — Clienter Help',
    metaDescription: 'Learn how to create a new project in Clienter, assign it to a client, set deadlines, and organize your work with tasks and milestones.',
    category: 'Projects',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Projects', href: '/help/projects' },
      { label: 'How do I create a project?', href: '/help/projects/create' },
    ],
    answer: 'You can create a project from the **Projects** page in your Clienter dashboard. Each project is linked to a client, has a deadline, and can contain tasks, milestones, files, and notes.',
    steps: [
      'Open **app.clienter.co.in** and go to **Projects** in the sidebar.',
      'Click the **+ New Project** button in the top-right corner.',
      'Enter a **project name** and select the **client** it belongs to. If the client doesn\'t exist yet, you can create one inline.',
      'Set the **start date** and **deadline**.',
      'Choose a **billing type** — Fixed Price, Hourly, or Retainer (Pro/Ultra plans).',
      'Add an optional **description** and any relevant **tags**.',
      'Click **Create Project**.',
    ],
    sections: [
      {
        id: 'after-creation',
        heading: 'What to do after creating a project',
        level: 2,
        content: 'Once your project is created, you can add tasks, upload files to the project vault, invite team members, and track time against the project. The project dashboard gives you an at-a-glance view of progress, upcoming deadlines, and recent activity.',
      },
      {
        id: 'project-statuses',
        heading: 'Project statuses',
        level: 3,
        content: 'Projects move through statuses: **Not Started**, **In Progress**, **On Hold**, **Completed**, and **Cancelled**. You can change the status from the project detail page at any time.',
      },
    ],
    relatedLinks: [
      { title: 'Set up a retainer project', href: '/help/projects/retainer-setup' },
      { title: 'Add team members to a project', href: '/help/projects/team' },
    ],
    relatedDocs: [
      { title: 'Projects overview', href: '/docs/projects' },
      { title: 'Task management', href: '/docs/projects/tasks' },
    ],
  },

  'projects/retainer-setup': {
    slug: 'projects/retainer-setup',
    title: 'How do I set up a retainer project?',
    metaTitle: 'Retainer Projects — Clienter Help',
    metaDescription: 'Set up recurring retainer projects in Clienter with automatic invoicing cycles, hour pools, and rollover settings. Available on Pro and Ultra plans.',
    category: 'Projects',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Projects', href: '/help/projects' },
      { label: 'How do I set up a retainer project?', href: '/help/projects/retainer-setup' },
    ],
    answer: 'Retainer projects let you bill clients on a recurring cycle — monthly, quarterly, or custom. You define a fixed fee or an hour pool, and Clienter automatically generates invoices at each cycle. This feature is available on **Pro** and **Ultra** plans.',
    steps: [
      'Go to **Projects → + New Project**.',
      'Select the billing type **Retainer**.',
      'Choose the **billing cycle** — Monthly, Quarterly, or Custom.',
      'Set the **retainer amount** (fixed fee) or define an **hour pool** with your hourly rate.',
      'Optionally enable **rollover hours** to carry unused hours to the next cycle.',
      'Set the **auto-invoice date** — Clienter will generate and optionally send invoices on this day each cycle.',
      'Click **Create Project**.',
    ],
    sections: [
      {
        id: 'hour-pool',
        heading: 'Hour pools and overages',
        level: 2,
        content: 'When you set up an hour pool, Clienter tracks logged time against the allocated hours. If your team exceeds the pool, overage hours are billed at the rate you specify. You can view hour usage from the project dashboard.',
        callout: { type: 'tip', text: 'Enable rollover hours if your clients expect unused hours to carry forward. You can cap rollover at a maximum number of hours.' },
      },
      {
        id: 'auto-invoicing',
        heading: 'Automatic invoicing',
        level: 2,
        content: 'On the auto-invoice date, Clienter creates a draft invoice for the retainer amount plus any overages. You can review it before sending, or enable auto-send to deliver it to the client automatically.',
      },
      {
        id: 'plan-requirement',
        heading: 'Plan requirement',
        level: 3,
        content: 'Retainer projects require a **Pro** (₹199/month) or **Ultra** (₹799/month) plan. Free plan users will see the option but will be prompted to upgrade.',
        callout: { type: 'info', text: 'Retainer billing is available on Pro and Ultra plans.' },
      },
    ],
    relatedLinks: [
      { title: 'Create a project', href: '/help/projects/create' },
      { title: 'Create an invoice', href: '/help/documents/create' },
    ],
    relatedDocs: [
      { title: 'Retainer billing', href: '/docs/projects/retainers' },
      { title: 'Invoicing', href: '/docs/documents/invoices' },
    ],
  },

  'projects/team': {
    slug: 'projects/team',
    title: 'How do I add team members to a project?',
    metaTitle: 'Add Team Members to a Project — Clienter Help',
    metaDescription: 'Invite team members to a Clienter project, assign roles, and control what each member can view and edit.',
    category: 'Projects',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Projects', href: '/help/projects' },
      { label: 'How do I add team members to a project?', href: '/help/projects/team' },
    ],
    answer: 'You can invite any workspace member to a project and assign them a role. Team members can be given access to tasks, files, time tracking, and client communication within that project.',
    steps: [
      'Open the project you want to add members to.',
      'Click the **Team** tab or the **people icon** in the project header.',
      'Click **+ Add Member**.',
      'Search for an existing workspace member or invite someone new by email.',
      'Select a **project role** — Owner, Editor, or Viewer.',
      'Click **Add**. The member will receive a notification and see the project in their sidebar.',
    ],
    sections: [
      {
        id: 'roles',
        heading: 'Project roles explained',
        level: 2,
        content: '**Owner** — full control including deleting the project and managing members. **Editor** — can create and edit tasks, upload files, and log time. **Viewer** — read-only access to project details, tasks, and files.',
      },
      {
        id: 'removing-members',
        heading: 'Removing a team member',
        level: 3,
        content: 'Open the Team tab, click the three-dot menu next to the member, and select **Remove from project**. Their assigned tasks will remain but become unassigned.',
        callout: { type: 'warning', text: 'Removing a member does not delete their logged time entries or uploaded files.' },
      },
    ],
    relatedLinks: [
      { title: 'Create a project', href: '/help/projects/create' },
    ],
    relatedDocs: [
      { title: 'Team management', href: '/docs/team' },
      { title: 'Roles and permissions', href: '/docs/team/roles' },
    ],
  },

  'projects/vault': {
    slug: 'projects/vault',
    title: 'How does the secrets vault work?',
    metaTitle: 'Secrets Vault (Zero-Knowledge Encryption) — Clienter Help',
    metaDescription: 'Learn how Clienter\'s secrets vault uses ECDH P-256 key exchange and AES-256-GCM encryption to store sensitive credentials with zero-knowledge security.',
    category: 'Projects',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Projects', href: '/help/projects' },
      { label: 'How does the secrets vault work?', href: '/help/projects/vault' },
    ],
    answer: 'The secrets vault lets you store sensitive credentials — API keys, hosting passwords, database URLs, and more — inside a project. Every secret is encrypted end-to-end using **ECDH P-256** key exchange and **AES-256-GCM** encryption. Clienter operates on a **zero-knowledge** model: your secrets are encrypted in the browser before they leave your device, and our servers never see the plaintext.',
    steps: [
      'Open a project and go to the **Vault** tab.',
      'Click **+ Add Secret**.',
      'Enter a **label** (e.g., "AWS Access Key") and the **secret value**.',
      'Optionally add a **note** for context.',
      'Click **Save**. The secret is encrypted in your browser and stored securely.',
      'To reveal a secret later, click the **eye icon** and confirm your identity.',
    ],
    sections: [
      {
        id: 'how-encryption-works',
        heading: 'How the encryption works',
        level: 2,
        content: 'When you save a secret, Clienter generates an **ECDH P-256** key pair in your browser. The shared secret derived from the key exchange is used to encrypt the value with **AES-256-GCM**, a standard authenticated encryption algorithm. The encrypted ciphertext and a public key component are sent to our servers — the private key material and plaintext never leave your device.',
        callout: { type: 'info', text: 'Zero-knowledge means Clienter staff cannot decrypt your secrets, even with database access. If you lose access to your account, secrets cannot be recovered.' },
      },
      {
        id: 'sharing-secrets',
        heading: 'Sharing secrets with team members',
        level: 2,
        content: 'When you share a project vault with a team member, a new ECDH key exchange is performed between your browser and theirs. The secret is re-encrypted for each authorized member. Only project Owners and Editors with vault access can view secrets.',
      },
      {
        id: 'secret-types',
        heading: 'Supported secret types',
        level: 3,
        content: 'You can store any text-based credential: passwords, API keys, tokens, SSH keys, database connection strings, environment variables, and more. Files and binary data are not currently supported in the vault — use the project file storage for those.',
      },
    ],
    relatedLinks: [
      { title: 'Add team members to a project', href: '/help/projects/team' },
    ],
    relatedDocs: [
      { title: 'Security overview', href: '/docs/security' },
      { title: 'Vault encryption details', href: '/docs/security/vault' },
    ],
  },

  'projects/domain-expiry': {
    slug: 'projects/domain-expiry',
    title: 'How do I track domain/hosting expiry?',
    metaTitle: 'Track Domain & Hosting Expiry — Clienter Help',
    metaDescription: 'Set up domain and hosting expiry tracking in Clienter to get automatic reminders before your clients\' services lapse.',
    category: 'Projects',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Projects', href: '/help/projects' },
      { label: 'How do I track domain/hosting expiry?', href: '/help/projects/domain-expiry' },
    ],
    answer: 'Clienter lets you log domain names, hosting plans, SSL certificates, and other recurring services with their expiry dates. You\'ll receive automatic reminders before they expire so you never miss a renewal.',
    steps: [
      'Open a project and go to the **Services** or **Domain & Hosting** tab.',
      'Click **+ Add Service**.',
      'Select the service type — **Domain**, **Hosting**, **SSL Certificate**, or **Other**.',
      'Enter the **provider name**, **login URL**, and **expiry date**.',
      'Set your **reminder schedule** — for example, 30 days, 7 days, and 1 day before expiry.',
      'Click **Save**.',
    ],
    sections: [
      {
        id: 'reminders',
        heading: 'How reminders work',
        level: 2,
        content: 'Clienter sends email and in-app notifications at the intervals you choose. Reminders go to the project owner by default, but you can add additional recipients — including the client.',
        callout: { type: 'tip', text: 'Set at least two reminder intervals (e.g., 30 days and 7 days) so you have time to coordinate renewal with your client.' },
      },
      {
        id: 'dashboard-view',
        heading: 'Expiry dashboard',
        level: 2,
        content: 'The **Services** section in your main dashboard shows all upcoming expiries across all projects, sorted by date. Services expiring within 30 days are highlighted in amber; those past their expiry date show in red.',
      },
    ],
    relatedLinks: [
      { title: 'Create a project', href: '/help/projects/create' },
    ],
    relatedDocs: [
      { title: 'Service tracking', href: '/docs/projects/services' },
    ],
  },

  // ─── LEADS ──────────────────────────────────────────────────

  'leads/add': {
    slug: 'leads/add',
    title: 'How do I add a lead?',
    metaTitle: 'Add a Lead — Clienter Help',
    metaDescription: 'Add new leads to your Clienter pipeline manually, capture their details, and start tracking them through your sales stages.',
    category: 'Leads',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Leads', href: '/help/leads' },
      { label: 'How do I add a lead?', href: '/help/leads/add' },
    ],
    answer: 'You can add a lead manually from the Leads page. Enter their contact details, assign a pipeline stage, and optionally set a value and expected close date to keep your pipeline organized.',
    steps: [
      'Go to **Leads** in the sidebar.',
      'Click **+ Add Lead**.',
      'Enter the lead\'s **name**, **email**, and **phone number**.',
      'Select the **pipeline stage** (e.g., New, Contacted, Qualified).',
      'Optionally set the **deal value**, **expected close date**, and **source** (e.g., Referral, Website, Social Media).',
      'Add any **notes** about the lead.',
      'Click **Save Lead**.',
    ],
    sections: [
      {
        id: 'lead-details',
        heading: 'Lead detail page',
        level: 2,
        content: 'After creating a lead, you can view their full profile including activity timeline, notes, attached files, and communication history. Move leads between stages by dragging them on the Kanban board or updating the stage dropdown.',
      },
      {
        id: 'quick-add',
        heading: 'Quick add from anywhere',
        level: 3,
        content: 'Press **Ctrl + L** (or **Cmd + L** on Mac) from any page to open the quick-add lead dialog without navigating away.',
        callout: { type: 'tip', text: 'Use the quick-add shortcut when you\'re on a call and need to capture a lead fast.' },
      },
    ],
    relatedLinks: [
      { title: 'Import leads from CSV/Excel', href: '/help/leads/import' },
      { title: 'Convert a lead to a client', href: '/help/leads/convert' },
    ],
    relatedDocs: [
      { title: 'Lead management', href: '/docs/leads' },
      { title: 'Pipeline overview', href: '/docs/leads/pipeline' },
    ],
  },

  'leads/import': {
    slug: 'leads/import',
    title: 'How do I import leads from CSV/Excel?',
    metaTitle: 'Import Leads from CSV or Excel — Clienter Help',
    metaDescription: 'Bulk import leads into Clienter from a CSV or Excel file. Map columns, review duplicates, and get your pipeline set up in minutes.',
    category: 'Leads',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Leads', href: '/help/leads' },
      { label: 'How do I import leads from CSV/Excel?', href: '/help/leads/import' },
    ],
    answer: 'Clienter supports bulk lead import from **.csv** and **.xlsx** files. Upload your file, map columns to Clienter fields, review duplicates, and import — all in a guided flow.',
    steps: [
      'Go to **Leads** and click the **Import** button (upload icon) in the top bar.',
      'Drag and drop your CSV or Excel file, or click to browse.',
      'Clienter will preview the first few rows. **Map each column** to a Clienter field — Name, Email, Phone, Stage, Value, Source, Notes, etc.',
      'Review the **duplicate detection** summary. Clienter matches on email and phone to flag existing leads.',
      'Choose how to handle duplicates — **Skip**, **Update existing**, or **Create new**.',
      'Click **Import Leads**. A progress bar shows the import status.',
      'Once complete, you\'ll see a summary of imported, skipped, and errored rows.',
    ],
    sections: [
      {
        id: 'file-format',
        heading: 'File format requirements',
        level: 2,
        content: 'Your file must have a header row. Supported formats are **.csv** (UTF-8) and **.xlsx**. Maximum file size is **5 MB** or **5,000 rows** per import. At minimum, each row needs a **name** or an **email** to be imported.',
        callout: { type: 'info', text: 'If your CSV has special characters (like ₹ or accented names), make sure it\'s saved as UTF-8.' },
      },
      {
        id: 'download-template',
        heading: 'Download a template',
        level: 3,
        content: 'Click **Download Template** on the import page to get a pre-formatted CSV with all supported columns. Fill it in and upload it back.',
      },
    ],
    relatedLinks: [
      { title: 'Add a lead manually', href: '/help/leads/add' },
      { title: 'Connect Meta Ads / IndiaMART', href: '/help/leads/integrations' },
    ],
    relatedDocs: [
      { title: 'Lead import reference', href: '/docs/leads/import' },
    ],
  },

  'leads/convert': {
    slug: 'leads/convert',
    title: 'How do I convert a lead to a client?',
    metaTitle: 'Convert a Lead to a Client — Clienter Help',
    metaDescription: 'Convert a qualified lead into a full client in Clienter, carrying over their contact details, notes, and communication history.',
    category: 'Leads',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Leads', href: '/help/leads' },
      { label: 'How do I convert a lead to a client?', href: '/help/leads/convert' },
    ],
    answer: 'When a lead is ready to become a paying client, you can convert them with one click. Their contact details, notes, and activity history carry over to the new client profile.',
    steps: [
      'Open the lead you want to convert.',
      'Click the **Convert to Client** button in the top-right corner (or from the three-dot menu).',
      'Review the pre-filled client details — name, email, phone, company, and address.',
      'Optionally create a **project** for the new client right away.',
      'Click **Convert**.',
      'The lead moves to the **Won** stage and a new client record is created.',
    ],
    sections: [
      {
        id: 'what-carries-over',
        heading: 'What carries over',
        level: 2,
        content: 'All contact information, notes, attached files, and the full activity timeline transfer to the client profile. The original lead entry is marked as **Won** and archived — you can still view it from the lead history.',
      },
      {
        id: 'without-converting',
        heading: 'Can I create a client without a lead?',
        level: 3,
        content: 'Yes. Go to **Clients → + Add Client** to create a client directly. Converting from a lead is optional and only needed if you\'ve been tracking them in the pipeline.',
      },
    ],
    relatedLinks: [
      { title: 'Customize pipeline stages', href: '/help/leads/stages' },
      { title: 'Create a project', href: '/help/projects/create' },
    ],
    relatedDocs: [
      { title: 'Client management', href: '/docs/clients' },
      { title: 'Lead pipeline', href: '/docs/leads/pipeline' },
    ],
  },

  'leads/stages': {
    slug: 'leads/stages',
    title: 'How do I customize pipeline stages?',
    metaTitle: 'Customize Lead Pipeline Stages — Clienter Help',
    metaDescription: 'Customize your lead pipeline stages in Clienter to match your sales process. Add, rename, reorder, and color-code stages.',
    category: 'Leads',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Leads', href: '/help/leads' },
      { label: 'How do I customize pipeline stages?', href: '/help/leads/stages' },
    ],
    answer: 'Clienter comes with default pipeline stages (New, Contacted, Qualified, Proposal Sent, Won, Lost), but you can fully customize them to match your sales workflow. Add new stages, rename existing ones, reorder them, and assign colors.',
    steps: [
      'Go to **Settings → Leads → Pipeline Stages**.',
      'You\'ll see your current stages in order. Drag to **reorder** them.',
      'Click on any stage name to **rename** it.',
      'Click the color circle to change a stage\'s **color**.',
      'Click **+ Add Stage** to insert a new stage. Choose where it goes in the order.',
      'To remove a stage, click the three-dot menu and select **Delete**. You\'ll be asked to move existing leads in that stage to another one.',
      'Click **Save Changes**.',
    ],
    sections: [
      {
        id: 'default-stages',
        heading: 'Default stages',
        level: 2,
        content: 'New accounts start with six stages: **New**, **Contacted**, **Qualified**, **Proposal Sent**, **Won**, and **Lost**. The **Won** and **Lost** stages are system stages — they can be renamed but not deleted, since lead conversion and analytics depend on them.',
        callout: { type: 'warning', text: 'Deleting a stage that has leads in it requires you to reassign those leads to a different stage first.' },
      },
      {
        id: 'multiple-pipelines',
        heading: 'Multiple pipelines',
        level: 3,
        content: 'If you handle different types of work (e.g., web design and SEO), you can create separate pipelines with their own stages. Go to **Settings → Leads → Pipelines** and click **+ New Pipeline**.',
      },
    ],
    relatedLinks: [
      { title: 'Add a lead', href: '/help/leads/add' },
      { title: 'Convert a lead to a client', href: '/help/leads/convert' },
    ],
    relatedDocs: [
      { title: 'Pipeline configuration', href: '/docs/leads/pipeline' },
    ],
  },

  'leads/integrations': {
    slug: 'leads/integrations',
    title: 'How do I connect Meta Ads / IndiaMART?',
    metaTitle: 'Meta Ads & IndiaMART Lead Integration — Clienter Help',
    metaDescription: 'Connect Meta (Facebook/Instagram) Ads lead forms and IndiaMART leads to Clienter for automatic lead capture. Available on Ultra plan.',
    category: 'Leads',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Leads', href: '/help/leads' },
      { label: 'How do I connect Meta Ads / IndiaMART?', href: '/help/leads/integrations' },
    ],
    answer: 'Clienter integrates with **Meta Ads** (Facebook & Instagram lead forms) and **IndiaMART** to automatically capture leads into your pipeline. When someone fills out a lead form on your ad or your IndiaMART listing, a new lead is created in Clienter instantly. This feature requires the **Ultra** plan.',
    steps: [
      'Go to **Settings → Integrations**.',
      'Find **Meta Ads** or **IndiaMART** in the list and click **Connect**.',
      'For **Meta Ads**: sign in with your Facebook account, select the ad account and page, and authorize Clienter to access your lead forms.',
      'For **IndiaMART**: enter your IndiaMART **mobile number** and **CRM key** (found in your IndiaMART seller dashboard under Lead Manager → CRM Integration).',
      'Choose the **default pipeline stage** for imported leads (e.g., New).',
      'Optionally set a **default source tag** to identify where these leads came from.',
      'Click **Save**. New leads will start flowing in automatically.',
    ],
    sections: [
      {
        id: 'meta-ads-details',
        heading: 'Meta Ads setup details',
        level: 2,
        content: 'Clienter uses the Meta Marketing API to subscribe to your lead form webhooks. Leads arrive within seconds of form submission. Each lead captures the name, email, phone, and any custom fields from your form. Make sure your Facebook page has active lead-generation campaigns running.',
        callout: { type: 'info', text: 'You need admin access to the Facebook page and ad account to connect the integration.' },
      },
      {
        id: 'indiamart-details',
        heading: 'IndiaMART setup details',
        level: 2,
        content: 'The IndiaMART integration uses their CRM Push API. Leads from your IndiaMART product listings, Buy Leads, and direct enquiries are synced to Clienter. The integration polls for new leads every few minutes.',
      },
      {
        id: 'plan-requirement',
        heading: 'Plan requirement',
        level: 3,
        content: 'Lead integrations with Meta Ads and IndiaMART are available exclusively on the **Ultra** plan (₹799/month). Pro and Free plan users can import leads manually or via CSV.',
        callout: { type: 'info', text: 'Lead integrations require the Ultra plan at ₹799/month.' },
      },
    ],
    relatedLinks: [
      { title: 'Add a lead manually', href: '/help/leads/add' },
      { title: 'Import leads from CSV/Excel', href: '/help/leads/import' },
    ],
    relatedDocs: [
      { title: 'Integrations overview', href: '/docs/integrations' },
      { title: 'Meta Ads integration', href: '/docs/integrations/meta-ads' },
      { title: 'IndiaMART integration', href: '/docs/integrations/indiamart' },
    ],
  },

  // ─── DOCUMENTS ──────────────────────────────────────────────

  'documents/create': {
    slug: 'documents/create',
    title: 'How do I create a quotation/contract/invoice?',
    metaTitle: 'Create Quotations, Contracts & Invoices — Clienter Help',
    metaDescription: 'Create professional quotations, contracts, and invoices in Clienter with the document editor, templates, and automatic numbering.',
    category: 'Documents',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Documents', href: '/help/documents' },
      { label: 'How do I create a quotation/contract/invoice?', href: '/help/documents/create' },
    ],
    answer: 'Clienter has a built-in document editor for creating **quotations**, **contracts**, and **invoices**. Choose a template or start from scratch, fill in the details, and send it to your client — all from one place.',
    steps: [
      'Go to **Documents** in the sidebar.',
      'Click **+ New Document**.',
      'Select the document type — **Quotation**, **Contract**, or **Invoice**.',
      'Choose a **template** or start with a blank document.',
      'Select the **client** and optionally link a **project**.',
      'Fill in the line items — description, quantity, rate, and tax.',
      'Add **terms and conditions**, **payment terms**, and any notes.',
      'Preview the document, then click **Save as Draft** or **Send to Client**.',
    ],
    sections: [
      {
        id: 'templates',
        heading: 'Using templates',
        level: 2,
        content: 'Clienter includes professionally designed templates for each document type. You can also create your own templates from any document by clicking **Save as Template**. Templates remember your line items, terms, and branding.',
      },
      {
        id: 'auto-numbering',
        heading: 'Automatic numbering',
        level: 2,
        content: 'Documents are auto-numbered sequentially (e.g., INV-001, QUO-001, CON-001). You can customize the prefix and starting number in **Settings → Documents → Numbering**.',
      },
      {
        id: 'taxes',
        heading: 'Taxes and GST',
        level: 3,
        content: 'Add GST (CGST + SGST or IGST), VAT, or custom tax rates to line items. Set default tax rates in **Settings → Documents → Tax** so they auto-apply to new documents.',
        callout: { type: 'tip', text: 'Set your GSTIN in Settings → Business to have it appear on all invoices automatically.' },
      },
    ],
    relatedLinks: [
      { title: 'E-signature for documents', href: '/help/documents/sign' },
      { title: 'Share a document with a client', href: '/help/documents/share' },
      { title: 'AI Quote Builder', href: '/help/documents/ai' },
    ],
    relatedDocs: [
      { title: 'Documents overview', href: '/docs/documents' },
      { title: 'Invoice guide', href: '/docs/documents/invoices' },
      { title: 'Quotation guide', href: '/docs/documents/quotations' },
    ],
  },

  'documents/sign': {
    slug: 'documents/sign',
    title: 'How does e-signature work?',
    metaTitle: 'E-Signature (Legally Valid) — Clienter Help',
    metaDescription: 'Learn how Clienter\'s e-signature works with typed and drawn signatures, SHA-256 hashing, and compliance with IT Act 2000 Section 3A.',
    category: 'Documents',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Documents', href: '/help/documents' },
      { label: 'How does e-signature work?', href: '/help/documents/sign' },
    ],
    answer: 'Clienter supports legally valid e-signatures on quotations and contracts. Your client can sign by **typing their name** or **drawing their signature** on any device. Each signature is secured with a **SHA-256 hash** of the document contents, and the process is compliant with the **IT Act 2000, Section 3A** for electronic signatures in India.',
    steps: [
      'Create or open a quotation or contract.',
      'Click **Request Signature** in the document toolbar.',
      'Add **signature fields** by dragging them to the desired positions in the document.',
      'Add the **signer\'s email address**.',
      'Click **Send for Signature**. The client receives an email with a secure link.',
      'The client opens the link, reviews the document, and signs by typing their name or drawing their signature.',
      'Once signed, both parties receive a copy of the signed document with an audit trail.',
    ],
    sections: [
      {
        id: 'security',
        heading: 'How signatures are secured',
        level: 2,
        content: 'When a document is sent for signature, Clienter generates a **SHA-256 hash** of the document contents. This hash is stored alongside the signature. If the document is tampered with after signing, the hash won\'t match — providing tamper evidence. The audit trail records the signer\'s IP address, timestamp, email, and browser information.',
        callout: { type: 'info', text: 'SHA-256 hashing ensures that any modification to the signed document is detectable.' },
      },
      {
        id: 'legal-validity',
        heading: 'Legal validity in India',
        level: 2,
        content: 'Clienter\'s e-signatures comply with the **Information Technology Act, 2000 — Section 3A**, which recognizes electronic signatures as legally valid when they can uniquely identify the signatory, are under the signatory\'s sole control, and are linked to the data in a way that detects subsequent changes. Clienter satisfies all three requirements through email verification, unique signing links, and SHA-256 document hashing.',
      },
      {
        id: 'signature-types',
        heading: 'Typed vs. drawn signatures',
        level: 3,
        content: '**Typed signatures** let the signer type their full name, which is rendered in a handwriting-style font. **Drawn signatures** let the signer draw on a canvas using a mouse, trackpad, or finger on mobile. Both are equally valid.',
      },
    ],
    relatedLinks: [
      { title: 'Create a document', href: '/help/documents/create' },
      { title: 'Share a document', href: '/help/documents/share' },
    ],
    relatedDocs: [
      { title: 'E-signature reference', href: '/docs/documents/e-signature' },
      { title: 'Security overview', href: '/docs/security' },
    ],
  },

  'documents/share': {
    slug: 'documents/share',
    title: 'How do I share a document with a client?',
    metaTitle: 'Share Documents with Clients — Clienter Help',
    metaDescription: 'Share quotations, contracts, and invoices with your clients via email, link, or WhatsApp directly from Clienter.',
    category: 'Documents',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Documents', href: '/help/documents' },
      { label: 'How do I share a document with a client?', href: '/help/documents/share' },
    ],
    answer: 'You can share any document with your client via **email**, a **shareable link**, or **WhatsApp**. The client sees a professional, branded view of the document and can accept, sign, or pay — depending on the document type.',
    steps: [
      'Open the document you want to share.',
      'Click the **Share** button in the top-right corner.',
      'Choose your sharing method:',
      '**Email** — the client\'s email is pre-filled from their profile. Add a personal message and click Send.',
      '**Copy Link** — generates a unique, secure URL you can paste anywhere.',
      '**WhatsApp** — opens WhatsApp (or WhatsApp Web) with a pre-composed message and document link.',
      'The client opens the link and sees the document in a clean, branded viewer.',
    ],
    sections: [
      {
        id: 'client-view',
        heading: 'What your client sees',
        level: 2,
        content: 'Clients see a professional document page with your logo, business details, and the document contents. For quotations, there\'s an **Accept** button. For contracts, a **Sign** button. For invoices, a **Pay Now** button that links to your configured payment methods (Razorpay, PayPal, bank transfer).',
      },
      {
        id: 'tracking',
        heading: 'View tracking',
        level: 2,
        content: 'Clienter tracks when a client opens the document. You\'ll see **Viewed** status with the date and time on the document page. This helps you know when to follow up.',
        callout: { type: 'tip', text: 'If a quotation hasn\'t been viewed after 2 days, Clienter will nudge you to follow up.' },
      },
      {
        id: 'link-expiry',
        heading: 'Link expiry and access',
        level: 3,
        content: 'Shareable links do not expire by default. You can disable a link at any time from the document\'s Share settings. Only people with the link can view the document — it is not indexed by search engines.',
      },
    ],
    relatedLinks: [
      { title: 'Create a document', href: '/help/documents/create' },
      { title: 'E-signature', href: '/help/documents/sign' },
    ],
    relatedDocs: [
      { title: 'Sharing and client portal', href: '/docs/documents/sharing' },
    ],
  },

  'documents/ai': {
    slug: 'documents/ai',
    title: 'How does the AI Quote Builder work?',
    metaTitle: 'AI Quote Builder — Clienter Help',
    metaDescription: 'Use Clienter\'s AI Quote Builder to generate professional quotations from a brief description. Free plan gets 3/month, Pro gets 25/month.',
    category: 'Documents',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Documents', href: '/help/documents' },
      { label: 'How does the AI Quote Builder work?', href: '/help/documents/ai' },
    ],
    answer: 'The AI Quote Builder generates a complete, professional quotation from a brief description of the work. Describe what you\'re quoting — e.g., "5-page WordPress website with contact form and SEO" — and Clienter\'s AI creates a detailed quotation with line items, pricing suggestions, timelines, and terms. You get **3 AI quotes per month** on the Free plan and **25 per month** on Pro.',
    steps: [
      'Go to **Documents → + New Document → Quotation**.',
      'Click the **AI Quote Builder** button (sparkle icon) at the top of the editor.',
      'Describe the project in plain language. Be as specific as you can — mention the scope, deliverables, and any technology preferences.',
      'Click **Generate**. The AI creates a full quotation with itemized line items, suggested pricing, and a timeline.',
      'Review and **edit** the generated quote. Adjust prices, add or remove items, and refine the wording.',
      'When you\'re satisfied, click **Save** to keep it as a draft, or **Send** to share it with the client.',
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How the AI generates quotes',
        level: 2,
        content: 'The AI analyzes your description and draws from industry-standard pricing data and common project structures to build the quotation. It breaks down the work into logical line items, suggests market-appropriate rates, and adds standard terms. The output is a starting point — always review and adjust to match your actual pricing.',
        callout: { type: 'warning', text: 'AI-generated pricing is a suggestion based on market data. Always verify that the amounts match your actual rates before sending.' },
      },
      {
        id: 'usage-limits',
        heading: 'Monthly usage limits',
        level: 2,
        content: '**Free plan**: 3 AI quotes per month. **Pro plan**: 25 AI quotes per month. **Ultra plan**: 25 AI quotes per month. The counter resets on the 1st of each month. You can see your remaining quota in the AI Quote Builder dialog.',
      },
      {
        id: 'tips',
        heading: 'Tips for better results',
        level: 3,
        content: 'The more detail you provide, the better the output. Include the number of pages or screens, specific features (e-commerce, authentication, API integrations), technology stack, and whether ongoing maintenance is included. Mention your typical pricing range if you want the AI to calibrate accordingly.',
        callout: { type: 'tip', text: 'Try: "E-commerce website on Shopify, 20 products, payment gateway, custom theme, SEO setup, 3 months support" for a detailed, accurate quote.' },
      },
    ],
    relatedLinks: [
      { title: 'Create a document', href: '/help/documents/create' },
      { title: 'Paste from Word/Google Docs', href: '/help/documents/paste' },
    ],
    relatedDocs: [
      { title: 'AI features', href: '/docs/ai' },
      { title: 'Quotation guide', href: '/docs/documents/quotations' },
    ],
  },

  'documents/paste': {
    slug: 'documents/paste',
    title: 'Can I paste from Word/Google Docs?',
    metaTitle: 'Paste from Word or Google Docs — Clienter Help',
    metaDescription: 'Paste formatted content from Microsoft Word, Google Docs, or any rich text editor into Clienter\'s document editor with formatting preserved.',
    category: 'Documents',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Documents', href: '/help/documents' },
      { label: 'Can I paste from Word/Google Docs?', href: '/help/documents/paste' },
    ],
    answer: 'Yes. Clienter\'s document editor supports rich-text paste from **Microsoft Word**, **Google Docs**, and other word processors. Headings, bold, italic, bullet lists, numbered lists, tables, and links are preserved when you paste.',
    steps: [
      'Open or create a document in Clienter.',
      'In your Word or Google Docs file, select the content you want to copy and press **Ctrl + C** (or **Cmd + C**).',
      'Click into the Clienter document editor where you want the content.',
      'Press **Ctrl + V** (or **Cmd + V**) to paste.',
      'The formatted content appears with styling preserved. Review and adjust as needed.',
    ],
    sections: [
      {
        id: 'supported-formatting',
        heading: 'What formatting is preserved',
        level: 2,
        content: 'The editor preserves **headings** (H1–H3), **bold**, **italic**, **underline**, **bullet lists**, **numbered lists**, **tables**, **links**, and **blockquotes**. Images pasted from Word or Docs are embedded automatically.',
      },
      {
        id: 'plain-text-paste',
        heading: 'Pasting as plain text',
        level: 3,
        content: 'If you want to strip all formatting, use **Ctrl + Shift + V** (or **Cmd + Shift + V**) to paste as plain text. This is useful when pasting from a source with unwanted styling.',
        callout: { type: 'tip', text: 'Use Ctrl + Shift + V to paste without formatting when copying from heavily styled sources.' },
      },
      {
        id: 'limitations',
        heading: 'Known limitations',
        level: 3,
        content: 'Complex layouts like multi-column sections, text boxes, and embedded charts from Word are not supported and may paste as simplified content. Header/footer content from Word does not transfer — use Clienter\'s built-in document header settings instead.',
      },
    ],
    relatedLinks: [
      { title: 'Create a document', href: '/help/documents/create' },
      { title: 'AI Quote Builder', href: '/help/documents/ai' },
    ],
    relatedDocs: [
      { title: 'Document editor', href: '/docs/documents/editor' },
    ],
  },
}
