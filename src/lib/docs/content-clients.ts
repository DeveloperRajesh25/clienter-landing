import type { DocPage } from './types'

export const CLIENTS_DOCS: Record<string, DocPage> = {
  'clients': {
    slug: 'clients',
    title: 'Client Management',
    metaTitle: 'Client Management | Clienter Docs',
    metaDescription:
      'Learn how to manage your clients in Clienter. Add clients, track projects, send invoices, share files, and give clients their own portal — all from one place.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        level: 2,
        content:
          'The Clients section is your central hub for every person or company you work with. Each client record holds their contact details, projects, invoices, files, and conversation history so you never have to dig through emails or spreadsheets again.',
      },
      {
        id: 'plan-limits',
        heading: 'Client limits by plan',
        level: 2,
        content:
          'The number of clients you can manage depends on your plan. Free accounts can add up to 3 clients, Pro accounts up to 20, and Ultra accounts get an expanded limit for growing agencies. You can upgrade at any time from Settings > Billing.',
        callout: {
          type: 'info',
          text: 'Free plan: 3 clients · Pro plan: 20 clients · Ultra plan: expanded limit.',
        },
      },
      {
        id: 'what-you-can-do',
        heading: 'What you can do with clients',
        level: 2,
        content:
          'From a client record you can create and assign projects, generate invoices in the client\'s preferred currency, upload and organise files, send messages, collect reviews, and enable a client portal so they can view their own data. Every action is tracked so your whole team stays in sync.',
      },
      {
        id: 'navigating',
        heading: 'Navigating the Clients page',
        level: 2,
        content:
          'Open Clients from the sidebar. You will see a searchable list of all your clients sorted by most recently active. Use the search bar to find a client by name or email, or apply filters to narrow by status. Click any client to open their detail page.',
      },
      {
        id: 'next-steps',
        heading: 'Next steps',
        level: 2,
        content:
          'Ready to get started? Head to Adding Clients to create your first client record. If you already have clients, explore the Client Detail Page to see everything you can do from one screen.',
      },
    ],
    faqs: [
      {
        q: 'How many clients can I add on the Free plan?',
        a: 'You can add up to 3 clients on the Free plan. Upgrade to Pro for up to 20 clients, or Ultra for an expanded limit.',
      },
      {
        q: 'Can I import clients from a spreadsheet?',
        a: 'Not yet, but we are working on CSV import. For now, you can add clients one at a time from the Clients page.',
      },
      {
        q: 'Can I delete a client?',
        a: 'Yes. Open the client detail page, click the menu icon, and select Delete. This removes the client and unlinks their projects and invoices (the projects and invoices themselves are not deleted).',
      },
    ],
    relatedLinks: [
      { title: 'Adding clients', href: '/docs/clients/adding-clients' },
      { title: 'Client detail page', href: '/docs/clients/client-details' },
      { title: 'Client portal', href: '/docs/clients/client-portal' },
      { title: 'Invoices', href: '/docs/invoices' },
    ],
  },

  'clients/adding-clients': {
    slug: 'clients/adding-clients',
    title: 'Adding & Editing Clients',
    metaTitle: 'Adding & Editing Clients | Clienter Docs',
    metaDescription:
      'Step-by-step guide to adding new clients and editing existing client details in Clienter. Set names, emails, billing currency, and more.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Adding clients', href: '/docs/clients/adding-clients' },
    ],
    sections: [
      {
        id: 'add-a-client',
        heading: 'Add a new client',
        level: 2,
        content:
          'Creating a client takes less than a minute. All you need is a name and an email address — everything else is optional and can be filled in later.',
        steps: [
          'Go to Clients in the sidebar.',
          'Click the "Add Client" button in the top-right corner.',
          'Enter the client\'s name (person or company) and email address.',
          'Optionally set a phone number, company name, billing currency, and notes.',
          'Click "Save" to create the client.',
        ],
        callout: {
          type: 'tip',
          text: 'Set the billing currency when you add the client so future invoices default to the right currency automatically.',
        },
      },
      {
        id: 'required-fields',
        heading: 'Required and optional fields',
        level: 3,
        content:
          'Only the client name and email are required. Optional fields include phone number, company name, address, billing currency, and internal notes. You can update any field at any time from the client detail page.',
      },
      {
        id: 'edit-a-client',
        heading: 'Edit client details',
        level: 2,
        content:
          'Open the client you want to update, then click the edit icon or "Edit" button at the top of the detail page. Make your changes and click "Save". The update takes effect immediately — any open invoices or projects linked to this client will reflect the new information.',
        steps: [
          'Navigate to Clients and click the client you want to edit.',
          'Click "Edit" near the top of the detail page.',
          'Update the fields you need to change.',
          'Click "Save" to apply the changes.',
        ],
      },
      {
        id: 'duplicate-check',
        heading: 'Avoiding duplicate clients',
        level: 2,
        content:
          'Clienter checks for duplicate email addresses when you add a new client. If the email already exists, you will be prompted to open the existing record instead. Keeping one record per client avoids split invoices and confused project history.',
        callout: {
          type: 'warning',
          text: 'If you create a duplicate by mistake, delete the newer record and keep the one with existing projects and invoices.',
        },
      },
      {
        id: 'client-notes',
        heading: 'Internal notes',
        level: 3,
        content:
          'Use the Notes field to store anything your team needs to remember — preferred communication style, time-zone, contract terms, or special requirements. Notes are visible only to your team, never to the client.',
      },
    ],
    faqs: [
      {
        q: 'Is there a limit to how many clients I can add?',
        a: 'Yes. Free accounts can add up to 3 clients, Pro up to 20, and Ultra has an expanded limit.',
      },
      {
        q: 'Can I change a client\'s email address later?',
        a: 'Yes. Edit the client and update the email field. If the client has a portal account, they will need to log in with the new email.',
      },
    ],
    relatedLinks: [
      { title: 'Client detail page', href: '/docs/clients/client-details' },
      { title: 'Client billing currency', href: '/docs/clients/client-currency' },
      { title: 'Client portal', href: '/docs/clients/client-portal' },
    ],
  },

  'clients/client-details': {
    slug: 'clients/client-details',
    title: 'Client Detail Page',
    metaTitle: 'Client Detail Page | Clienter Docs',
    metaDescription:
      'Explore the client detail page in Clienter. Understand the Overview, Projects, Invoices, Documents, Files, and Messages tabs to manage every aspect of a client relationship.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Client details', href: '/docs/clients/client-details' },
    ],
    sections: [
      {
        id: 'overview-tab',
        heading: 'Overview tab',
        level: 2,
        content:
          'The Overview tab shows a snapshot of the client: contact details, total revenue earned, number of active projects, outstanding invoice amount, and recent activity. Use it as a quick health check before a client call.',
      },
      {
        id: 'projects-tab',
        heading: 'Projects tab',
        level: 2,
        content:
          'All projects linked to this client appear here, grouped by status (active, completed, on hold). Click any project to jump to its detail page, or click "New Project" to create one already linked to this client.',
      },
      {
        id: 'invoices-tab',
        heading: 'Invoices tab',
        level: 2,
        content:
          'View every invoice sent to this client — draft, sent, paid, or overdue. You can create a new invoice directly from this tab; it will inherit the client\'s name, email, and billing currency automatically.',
      },
      {
        id: 'documents-tab',
        heading: 'Documents tab',
        level: 2,
        content:
          'Store contracts, proposals, briefs, and other text documents tied to this client. Documents can be shared with the client via the client portal if portal access is enabled.',
      },
      {
        id: 'files-tab',
        heading: 'Files tab',
        level: 2,
        content:
          'Upload images, PDFs, design files, or any other attachment. Files are organised in a simple list with preview thumbnails where available. You can drag-and-drop files directly into this tab. See the Client Files guide for more details.',
        callout: {
          type: 'tip',
          text: 'Drag and drop files directly into the tab to upload them instantly.',
        },
      },
      {
        id: 'messages-tab',
        heading: 'Messages tab',
        level: 2,
        content:
          'Send and receive messages with your client right inside Clienter. Messages appear in a threaded conversation view. If the client has portal access, they can reply from their portal — no email back-and-forth required.',
      },
    ],
    faqs: [
      {
        q: 'Can I rearrange the tabs?',
        a: 'Not at this time. The tabs follow a fixed order: Overview, Projects, Invoices, Documents, Files, Messages.',
      },
      {
        q: 'Does the client see all these tabs in their portal?',
        a: 'No. The client portal only shows what you choose to share — typically projects, invoices, files, and messages. Internal documents and notes remain private.',
      },
    ],
    relatedLinks: [
      { title: 'Adding clients', href: '/docs/clients/adding-clients' },
      { title: 'Client files', href: '/docs/clients/client-files' },
      { title: 'Client portal', href: '/docs/clients/client-portal' },
      { title: 'Invoices overview', href: '/docs/invoices' },
    ],
  },

  'clients/client-currency': {
    slug: 'clients/client-currency',
    title: 'Client Billing Currency & FX',
    metaTitle: 'Client Billing Currency & FX | Clienter Docs',
    metaDescription:
      'Set per-client billing currencies in Clienter for international invoicing. Learn how currency selection works, how exchange rates are handled, and how to change a client\'s currency.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Client currency', href: '/docs/clients/client-currency' },
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How per-client currency works',
        level: 2,
        content:
          'Every client can have their own billing currency. When you create an invoice for that client, the currency is pre-filled automatically. This means you can bill one client in INR, another in USD, and another in EUR — all from the same Clienter account.',
      },
      {
        id: 'setting-currency',
        heading: 'Setting a client\'s currency',
        level: 2,
        content:
          'You can set the billing currency when you first add a client, or change it later from the client detail page.',
        steps: [
          'Open the client detail page.',
          'Click "Edit" to open the edit form.',
          'Select the desired currency from the Billing Currency dropdown.',
          'Click "Save".',
        ],
        callout: {
          type: 'info',
          text: 'Changing the currency does not retroactively update existing invoices. Only new invoices will use the new currency.',
        },
      },
      {
        id: 'supported-currencies',
        heading: 'Supported currencies',
        level: 3,
        content:
          'Clienter supports major world currencies including INR, USD, EUR, GBP, AUD, CAD, SGD, AED, and more. The full list is available in the currency dropdown when editing a client.',
      },
      {
        id: 'exchange-rates',
        heading: 'Exchange rates & reporting',
        level: 2,
        content:
          'Invoices are always issued in the client\'s chosen currency. For your own reporting, Clienter converts amounts to your base currency (set in Settings > Business) using indicative exchange rates. These rates are for reporting purposes only — the actual amount your client pays and you receive depends on your payment processor.',
        callout: {
          type: 'warning',
          text: 'Exchange rates shown in reports are indicative. Your payment processor (PayPal, Stripe, etc.) determines the actual conversion rate at the time of payment.',
        },
      },
      {
        id: 'best-practices',
        heading: 'Best practices for international billing',
        level: 2,
        content:
          'Set the currency when you add the client so every invoice is consistent. If a client requests a different currency mid-project, update it on their profile and note the change. Keep in mind that mixing currencies on the same client can make accounting harder, so pick one and stick with it where possible.',
      },
    ],
    faqs: [
      {
        q: 'Can I bill the same client in multiple currencies?',
        a: 'A client has one default currency at a time. You can change it, but all new invoices will use the updated currency. To bill in two currencies, you would need two client records.',
      },
      {
        q: 'Does Clienter handle payment collection in foreign currencies?',
        a: 'Clienter generates the invoice in the selected currency. Payment collection and conversion depend on your connected payment processor (e.g. PayPal or Stripe).',
      },
    ],
    relatedLinks: [
      { title: 'Adding clients', href: '/docs/clients/adding-clients' },
      { title: 'Invoices', href: '/docs/invoices' },
      { title: 'Payment settings', href: '/docs/settings/payments' },
    ],
  },

  'clients/client-files': {
    slug: 'clients/client-files',
    title: 'Client Files',
    metaTitle: 'Uploading & Managing Client Files | Clienter Docs',
    metaDescription:
      'Upload, organise, and share files with your clients in Clienter. Learn about supported file types, storage, drag-and-drop uploads, and sharing via the client portal.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Client files', href: '/docs/clients/client-files' },
    ],
    sections: [
      {
        id: 'uploading-files',
        heading: 'Uploading files',
        level: 2,
        content:
          'You can upload files from the Files tab on any client detail page. Supported formats include images (JPG, PNG, SVG, WebP), PDFs, documents (DOCX, XLSX), archives (ZIP), and design files. Each file can be up to 10 MB.',
        steps: [
          'Open the client detail page and switch to the Files tab.',
          'Click "Upload File" or drag and drop files directly into the tab.',
          'Wait for the upload to complete — a progress indicator shows the status.',
          'The file appears in the list with a thumbnail preview (where available).',
        ],
        callout: {
          type: 'tip',
          text: 'You can upload multiple files at once by selecting several files in the file picker or dragging a batch into the tab.',
        },
      },
      {
        id: 'managing-files',
        heading: 'Managing uploaded files',
        level: 2,
        content:
          'Each file shows its name, size, upload date, and a thumbnail. Click a file to preview it or download it. Use the menu icon on each file to rename or delete it. Deleted files cannot be recovered, so download a copy first if you are unsure.',
        callout: {
          type: 'warning',
          text: 'Deleting a file is permanent. Make sure you have a backup before removing it.',
        },
      },
      {
        id: 'sharing-via-portal',
        heading: 'Sharing files through the client portal',
        level: 2,
        content:
          'When a client has portal access enabled, they can view and download files you have uploaded to their record. This is a great way to deliver final assets, share contracts, or provide resources without sending email attachments.',
      },
      {
        id: 'storage-limits',
        heading: 'Storage and limits',
        level: 3,
        content:
          'File storage is included with every plan. Individual file uploads are capped at 10 MB. If you need to share larger files, consider uploading a ZIP archive or using an external file-sharing link in the Messages tab.',
      },
    ],
    faqs: [
      {
        q: 'Can clients upload files back to me?',
        a: 'Clients with portal access can send messages, and file sharing through the portal is available. Check the Client Portal guide for current capabilities.',
      },
      {
        q: 'What happens to files if I delete a client?',
        a: 'Deleting a client removes their files from Clienter. Download any files you need before deleting the client record.',
      },
    ],
    relatedLinks: [
      { title: 'Client detail page', href: '/docs/clients/client-details' },
      { title: 'Client portal', href: '/docs/clients/client-portal' },
    ],
  },

  'clients/client-portal': {
    slug: 'clients/client-portal',
    title: 'Client Portal',
    metaTitle: 'Client Portal | Clienter Docs',
    metaDescription:
      'Give your clients their own portal in Clienter. Share projects, invoices, files, messages, and tasks with magic-link login and optional password authentication.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Client portal', href: '/docs/clients/client-portal' },
    ],
    planBadge: 'Free',
    sections: [
      {
        id: 'what-is-the-portal',
        heading: 'What is the client portal?',
        level: 2,
        content:
          'The client portal is a private, branded space where your clients can view their projects, invoices, files, messages, and tasks — without needing access to your full Clienter dashboard. It gives your clients visibility and reduces back-and-forth emails.',
        callout: {
          type: 'info',
          text: 'Free plan includes portal access for 1 client. Pro and Ultra plans support more portal clients.',
        },
      },
      {
        id: 'enabling-portal',
        heading: 'Enabling portal access for a client',
        level: 2,
        content:
          'You control which clients get portal access. Once enabled, the client receives a magic-link email they can use to log in instantly.',
        steps: [
          'Open the client detail page.',
          'Click "Enable Portal" or toggle the Portal Access switch.',
          'The client receives an email with a magic link to access their portal.',
          'On first visit, the client can set their own password for future logins.',
        ],
      },
      {
        id: 'magic-link-auth',
        heading: 'Magic link and password authentication',
        level: 2,
        content:
          'Clients initially log in via a magic link sent to their email — no password needed. After their first login, they are prompted to set a password so they can log in directly in the future. This two-step approach balances ease of onboarding with security.',
        callout: {
          type: 'tip',
          text: 'If a client loses access, you can resend the magic link from their detail page at any time.',
        },
      },
      {
        id: 'what-clients-see',
        heading: 'What clients can see',
        level: 2,
        content:
          'The portal shows only what you choose to share. By default, clients can view their projects (with progress and tasks), invoices (with payment status), shared files, and messages. They cannot see your other clients, internal notes, revenue reports, or team settings.',
      },
      {
        id: 'sharing-controls',
        heading: 'Controlling what you share',
        level: 3,
        content:
          'You can toggle visibility for individual projects, invoices, and files. For example, you might share a completed project but hide one that is still in early planning. Messages in the portal are always visible to both sides once sent.',
      },
      {
        id: 'tasks-in-portal',
        heading: 'Tasks in the client portal',
        level: 3,
        content:
          'When tasks are enabled for a shared project, clients can view task progress and, depending on your settings, mark tasks as complete or leave comments. This is useful for approval workflows where the client needs to sign off on deliverables.',
      },
    ],
    faqs: [
      {
        q: 'How many clients can access the portal?',
        a: 'Free plan: 1 portal client. Pro and Ultra plans support additional portal clients.',
      },
      {
        q: 'Can I customise the portal\'s appearance?',
        a: 'The portal uses your business name and branding from Settings. Full theme customisation is on the roadmap.',
      },
      {
        q: 'Is the portal secure?',
        a: 'Yes. Portal access uses magic-link authentication and optional passwords. All data is transmitted over HTTPS and clients can only see their own information.',
      },
    ],
    relatedLinks: [
      { title: 'Client detail page', href: '/docs/clients/client-details' },
      { title: 'Client files', href: '/docs/clients/client-files' },
      { title: 'Projects overview', href: '/docs/projects' },
      { title: 'Invoices', href: '/docs/invoices' },
    ],
  },

  'clients/client-reviews': {
    slug: 'clients/client-reviews',
    title: 'Client Reviews',
    metaTitle: 'Collecting Client Reviews | Clienter Docs',
    metaDescription:
      'Collect star-rating reviews from clients in Clienter. Share a public review page, embed a review badge on your website, and build social proof for your agency or freelance business.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Client reviews', href: '/docs/clients/client-reviews' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'How client reviews work',
        level: 2,
        content:
          'Clienter lets you request and collect star-rating reviews from your clients. Each review includes a 1-to-5 star rating and an optional written testimonial. Reviews are collected through a simple link you share with the client.',
      },
      {
        id: 'requesting-a-review',
        heading: 'Requesting a review',
        level: 2,
        content:
          'You can request a review from any client, whether or not they use the client portal.',
        steps: [
          'Open the client detail page.',
          'Click "Request Review" (or find it in the menu).',
          'A personalised review link is generated for that client.',
          'Share the link via email, message, or any channel you prefer.',
          'The client clicks the link, selects a star rating, writes an optional testimonial, and submits.',
        ],
        callout: {
          type: 'tip',
          text: 'Request reviews right after delivering a project — clients are most likely to respond when the work is fresh.',
        },
      },
      {
        id: 'public-review-page',
        heading: 'Public review page',
        level: 2,
        content:
          'Clienter gives you a public review page that displays all approved reviews with star ratings and testimonials. Share this page in proposals, on social media, or link to it from your website to build trust with potential clients.',
      },
      {
        id: 'embeddable-badge',
        heading: 'Embeddable review badge',
        level: 2,
        content:
          'Want to show your average rating on your own website? Clienter provides an embeddable badge — a small snippet of code you paste into your site\'s HTML. The badge displays your average star rating and updates automatically as new reviews come in.',
        steps: [
          'Go to Settings > Reviews (or your public review page).',
          'Copy the embed code snippet.',
          'Paste it into your website\'s HTML where you want the badge to appear.',
          'The badge renders your current average rating and total review count.',
        ],
      },
      {
        id: 'managing-reviews',
        heading: 'Managing and moderating reviews',
        level: 3,
        content:
          'All submitted reviews appear in your dashboard. You can approve, hide, or delete reviews. Only approved reviews are shown on your public review page and in the embeddable badge. This gives you control over what potential clients see.',
      },
    ],
    faqs: [
      {
        q: 'Can clients edit their review after submitting?',
        a: 'Not currently. If a client wants to update their review, you can delete the old one and send a new review request.',
      },
      {
        q: 'Do reviews show the client\'s name?',
        a: 'Yes, the client\'s name and their star rating are displayed. Written testimonials are shown if provided.',
      },
      {
        q: 'Is the review page public by default?',
        a: 'Yes, the public review page is accessible via its link. However, only approved reviews appear on it.',
      },
    ],
    relatedLinks: [
      { title: 'Client portal', href: '/docs/clients/client-portal' },
      { title: 'Client management overview', href: '/docs/clients' },
    ],
  },

  'clients/client-avatars': {
    slug: 'clients/client-avatars',
    title: 'Client Profile Photos',
    metaTitle: 'Client Profile Photos & Avatars | Clienter Docs',
    metaDescription:
      'Add profile photos to your clients in Clienter. Learn how avatars are displayed, how to upload or change them, and what happens when no photo is set.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Clients', href: '/docs/clients' },
      { label: 'Client avatars', href: '/docs/clients/client-avatars' },
    ],
    sections: [
      {
        id: 'how-avatars-work',
        heading: 'How client avatars work',
        level: 2,
        content:
          'Each client can have a profile photo (avatar) that appears throughout Clienter — on the client list, the detail page, invoices, and the client portal. A recognisable photo makes it easier to spot the right client at a glance, especially when you manage many accounts.',
      },
      {
        id: 'uploading-a-photo',
        heading: 'Uploading a profile photo',
        level: 2,
        content:
          'You can set or change a client\'s profile photo from their detail page.',
        steps: [
          'Open the client detail page.',
          'Click the avatar area (the circle showing the client\'s initials or current photo).',
          'Select an image file from your device (JPG, PNG, or WebP, up to 2 MB).',
          'The photo is cropped to a circle and saved automatically.',
        ],
        callout: {
          type: 'tip',
          text: 'Use a square image for the best result. Rectangular images are centre-cropped to fit the circle.',
        },
      },
      {
        id: 'default-avatars',
        heading: 'Default avatars',
        level: 2,
        content:
          'If no photo is uploaded, Clienter displays a coloured circle with the client\'s initials. The colour is automatically assigned based on the client\'s name, so each client gets a distinct default avatar.',
      },
      {
        id: 'removing-a-photo',
        heading: 'Removing or changing a photo',
        level: 3,
        content:
          'To remove a photo, open the client detail page, click the avatar, and select "Remove". The client will revert to their default initial-based avatar. To change the photo, simply upload a new one — it replaces the previous image.',
      },
    ],
    faqs: [
      {
        q: 'What image formats are supported?',
        a: 'JPG, PNG, and WebP. The maximum file size is 2 MB.',
      },
      {
        q: 'Does the client see their avatar in the portal?',
        a: 'Yes. The avatar appears in the client portal alongside their name.',
      },
    ],
    relatedLinks: [
      { title: 'Adding clients', href: '/docs/clients/adding-clients' },
      { title: 'Client detail page', href: '/docs/clients/client-details' },
    ],
  },
}
