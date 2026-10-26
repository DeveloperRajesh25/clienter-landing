import type { HelpArticle } from '../docs/types'

export const HELP_INVOICING_TASKS_MEETINGS_MESSAGING: Record<string, HelpArticle> = {
  'invoicing/create': {
    slug: 'invoicing/create',
    title: 'How do I create and send an invoice?',
    metaTitle: 'Create & Send Invoices | Clienter Help',
    metaDescription: 'Learn how to create professional invoices, add line items, apply taxes, and send them to clients directly from Clienter.',
    category: 'Invoicing & Payments',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Invoicing & Payments', href: '/help/invoicing' },
      { label: 'How do I create and send an invoice?', href: '/help/invoicing/create' }
    ],
    answer: 'You can create and send a professional invoice to any client in under a minute. Clienter automatically pulls in your business details, calculates totals, and lets you send the invoice via email — all from one screen.',
    steps: [
      'Open the Clienter app at app.clienter.co.in and go to **Invoices** in the sidebar.',
      'Click **Create Invoice**.',
      'Select a client from your client list, or add a new client on the spot.',
      'Add one or more line items — enter a description, quantity, and rate for each.',
      'If applicable, set a tax rate (GST, VAT, or custom) and any discount.',
      'Choose a due date. Clienter defaults to Net 15, but you can pick any date.',
      'Review the invoice preview to make sure everything looks right.',
      'Click **Send Invoice**. Your client receives the invoice by email with a link to view and pay online.'
    ],
    sections: [
      {
        id: 'line-items',
        heading: 'Adding line items',
        level: 2,
        content: 'Each line item has a description, quantity, and unit rate. Use line items to break down deliverables — for example, "Website Design — Homepage" and "Website Design — About Page" as separate items. Clienter calculates the subtotal automatically.'
      },
      {
        id: 'taxes-discounts',
        heading: 'Taxes and discounts',
        level: 2,
        content: 'You can add a percentage-based tax (like 18% GST) or a flat discount to any invoice. Both are reflected in the total before sending. If you always charge the same tax, set a default tax rate in **Settings → Business Details** so it applies automatically.'
      },
      {
        id: 'notes',
        heading: 'Adding notes and terms',
        level: 2,
        content: 'Use the **Notes** field at the bottom of the invoice for payment instructions, bank details, or a thank-you message. The **Terms** field is ideal for late-payment policies or scope clarifications. Both appear on the client-facing invoice.',
        callout: {
          type: 'tip',
          text: 'Set default notes and terms in Settings → Invoice Defaults so you don\'t have to type them every time.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I record a payment?', href: '/help/invoicing/record-payment' },
      { title: 'How do payment reminders work?', href: '/help/invoicing/reminders' },
      { title: 'How do I bill clients in a different currency?', href: '/help/invoicing/currency' }
    ],
    relatedDocs: [
      { title: 'Invoicing overview', href: '/docs/features/invoicing' },
      { title: 'Getting started with Clienter', href: '/docs/getting-started' }
    ]
  },

  'invoicing/record-payment': {
    slug: 'invoicing/record-payment',
    title: 'How do I record a payment?',
    metaTitle: 'Record Invoice Payments | Clienter Help',
    metaDescription: 'Learn how to mark invoices as paid, record partial payments, and keep your payment history accurate in Clienter.',
    category: 'Invoicing & Payments',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Invoicing & Payments', href: '/help/invoicing' },
      { label: 'How do I record a payment?', href: '/help/invoicing/record-payment' }
    ],
    answer: 'When a client pays you, record the payment against the invoice to keep your books up to date. Clienter supports full payments, partial payments, and multiple payment methods.',
    steps: [
      'Go to **Invoices** in the sidebar.',
      'Find the invoice you want to update and click on it to open the detail view.',
      'Click **Record Payment**.',
      'Enter the payment amount. For a full payment, the total auto-fills. For a partial payment, type the amount received.',
      'Select the payment method — bank transfer, UPI, PayPal, cash, or other.',
      'Optionally add a note (e.g., transaction reference number).',
      'Click **Save**. The invoice status updates to **Paid** or **Partially Paid** depending on the amount.'
    ],
    sections: [
      {
        id: 'partial-payments',
        heading: 'Partial payments',
        level: 2,
        content: 'If a client pays in installments, record each payment separately. Clienter tracks the remaining balance and keeps the invoice in a **Partially Paid** state until the full amount is received. You can see a breakdown of all recorded payments in the invoice detail view.'
      },
      {
        id: 'payment-history',
        heading: 'Payment history',
        level: 2,
        content: 'Every recorded payment is logged with the date, amount, method, and any notes. Open any invoice and scroll to the **Payment History** section to see the full record. This is useful for reconciliation and for resolving disputes with clients.'
      },
      {
        id: 'undo-payment',
        heading: 'Deleting a recorded payment',
        level: 3,
        content: 'If you recorded a payment by mistake, open the invoice, find the payment entry in Payment History, and click the delete icon. The invoice balance and status update automatically.',
        callout: {
          type: 'warning',
          text: 'Deleting a payment cannot be undone. Double-check before removing a payment record.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I create and send an invoice?', href: '/help/invoicing/create' },
      { title: 'How do payment reminders work?', href: '/help/invoicing/reminders' }
    ],
    relatedDocs: [
      { title: 'Invoicing overview', href: '/docs/features/invoicing' },
      { title: 'Managing clients', href: '/docs/features/clients' }
    ]
  },

  'invoicing/reminders': {
    slug: 'invoicing/reminders',
    title: 'How do payment reminders work?',
    metaTitle: 'Invoice Payment Reminders | Clienter Help',
    metaDescription: 'Understand how Clienter sends automatic and manual payment reminders to clients with overdue or upcoming invoices.',
    category: 'Invoicing & Payments',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Invoicing & Payments', href: '/help/invoicing' },
      { label: 'How do payment reminders work?', href: '/help/invoicing/reminders' }
    ],
    answer: 'Clienter can send payment reminders to clients automatically when an invoice is approaching its due date or is overdue. You can also send a manual reminder at any time with one click.',
    steps: [
      'Go to **Settings → Invoice Defaults** to configure automatic reminders.',
      'Enable **Auto Reminders** and choose when they fire — for example, 3 days before the due date, on the due date, and 7 days after.',
      'Save your settings. Reminders apply to all new invoices going forward.',
      'To send a manual reminder for any invoice, open the invoice and click **Send Reminder**.'
    ],
    sections: [
      {
        id: 'auto-schedule',
        heading: 'Automatic reminder schedule',
        level: 2,
        content: 'You can set up to three automatic reminders per invoice: one before the due date, one on the due date, and one after. Each reminder sends a professional email to the client with the invoice details and a link to view and pay.'
      },
      {
        id: 'manual-reminders',
        heading: 'Manual reminders',
        level: 2,
        content: 'Open any unpaid invoice and click **Send Reminder** to fire off an email immediately. This is useful if a client hasn\'t responded to automatic reminders and you want to follow up directly.',
        callout: {
          type: 'tip',
          text: 'Manual reminders include a personalized note field — use it to add context like "Hi Sarah, just following up on this invoice" to keep things friendly.'
        }
      },
      {
        id: 'reminder-history',
        heading: 'Tracking sent reminders',
        level: 3,
        content: 'Every reminder (automatic or manual) is logged in the invoice\'s activity timeline. You can see exactly when each reminder was sent so you never accidentally double-remind a client.'
      }
    ],
    relatedLinks: [
      { title: 'How do I create and send an invoice?', href: '/help/invoicing/create' },
      { title: 'How does auto-invoicing work for retainers?', href: '/help/invoicing/auto-invoice' }
    ],
    relatedDocs: [
      { title: 'Invoicing overview', href: '/docs/features/invoicing' }
    ]
  },

  'invoicing/auto-invoice': {
    slug: 'invoicing/auto-invoice',
    title: 'How does auto-invoicing work for retainers?',
    metaTitle: 'Auto-Invoicing for Retainers | Clienter Help',
    metaDescription: 'Set up recurring auto-invoices for retainer clients in Clienter so invoices are created and sent automatically each billing cycle.',
    category: 'Invoicing & Payments',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Invoicing & Payments', href: '/help/invoicing' },
      { label: 'How does auto-invoicing work for retainers?', href: '/help/invoicing/auto-invoice' }
    ],
    answer: 'Auto-invoicing lets you set up recurring invoices for retainer clients. Clienter automatically creates and sends a new invoice at the start of each billing cycle — weekly, monthly, or on a custom schedule. This feature is available on Pro and Ultra plans.',
    steps: [
      'Open the client you want to set up a retainer for.',
      'Go to the **Invoices** tab and click **Set Up Recurring Invoice**.',
      'Define the line items, amount, and tax for the recurring invoice.',
      'Choose the billing frequency: weekly, bi-weekly, monthly, quarterly, or custom.',
      'Set the start date and optionally an end date (leave blank for ongoing retainers).',
      'Enable **Auto-Send** if you want the invoice emailed to the client automatically. If disabled, the invoice is created as a draft for your review.',
      'Click **Save**. Clienter handles the rest.'
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How the cycle works',
        level: 2,
        content: 'On each billing date, Clienter generates a new invoice with the line items and amounts you defined. If Auto-Send is on, the client receives it by email right away. If Auto-Send is off, the invoice appears in your Invoices list as a draft so you can review or adjust it before sending.'
      },
      {
        id: 'editing-recurring',
        heading: 'Editing or pausing a recurring invoice',
        level: 2,
        content: 'Open the client profile, go to the Invoices tab, and click the recurring invoice schedule. From there you can edit the amount, change the frequency, pause the schedule, or cancel it entirely. Changes apply to the next billing cycle — already-sent invoices are not affected.',
        callout: {
          type: 'info',
          text: 'Auto-invoicing is available on Pro and Ultra plans. Free plan users can upgrade at any time from Settings → Billing.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I create and send an invoice?', href: '/help/invoicing/create' },
      { title: 'How do payment reminders work?', href: '/help/invoicing/reminders' }
    ],
    relatedDocs: [
      { title: 'Invoicing overview', href: '/docs/features/invoicing' },
      { title: 'Pricing & plans', href: '/docs/pricing' }
    ]
  },

  'invoicing/currency': {
    slug: 'invoicing/currency',
    title: 'How do I bill clients in a different currency?',
    metaTitle: 'Multi-Currency Invoicing | Clienter Help',
    metaDescription: 'Learn how to create invoices in USD, EUR, GBP, and other currencies for international clients using Clienter.',
    category: 'Invoicing & Payments',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Invoicing & Payments', href: '/help/invoicing' },
      { label: 'How do I bill clients in a different currency?', href: '/help/invoicing/currency' }
    ],
    answer: 'Clienter supports multi-currency invoicing so you can bill international clients in their local currency. Set a default currency per client, or choose a different currency each time you create an invoice.',
    steps: [
      'When creating a new invoice, look for the **Currency** dropdown near the top of the invoice form.',
      'Select the currency you want to bill in — Clienter supports INR, USD, EUR, GBP, AUD, CAD, SGD, AED, and more.',
      'Enter your line item rates in the selected currency. All totals, taxes, and discounts calculate in that currency.',
      'Send the invoice. Your client sees the amount in the currency you chose.'
    ],
    sections: [
      {
        id: 'default-currency',
        heading: 'Setting a default currency per client',
        level: 2,
        content: 'If you always bill a particular client in USD (or any other currency), set it as their default. Go to the client\'s profile, click **Edit**, and choose their preferred currency. Every new invoice for that client pre-selects this currency automatically.'
      },
      {
        id: 'payments',
        heading: 'Receiving payments in foreign currencies',
        level: 2,
        content: 'Clienter generates the invoice in your chosen currency. How you receive the funds depends on your payment method — PayPal handles currency conversion automatically, while bank transfers may require a forex-enabled account. The invoice amount and payment recording stay in the invoiced currency.',
        callout: {
          type: 'info',
          text: 'Clienter does not convert currencies or handle exchange rates. The invoice is issued in the selected currency and payments are recorded in that same currency.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I create and send an invoice?', href: '/help/invoicing/create' },
      { title: 'How do I record a payment?', href: '/help/invoicing/record-payment' }
    ],
    relatedDocs: [
      { title: 'Invoicing overview', href: '/docs/features/invoicing' },
      { title: 'International billing', href: '/docs/features/international-billing' }
    ]
  },

  'tasks/create-board': {
    slug: 'tasks/create-board',
    title: 'How do I create a task board?',
    metaTitle: 'Create a Task Board | Clienter Help',
    metaDescription: 'Learn how to create Kanban-style task boards in Clienter to organize your project work and track deliverables.',
    category: 'Tasks',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Tasks', href: '/help/tasks' },
      { label: 'How do I create a task board?', href: '/help/tasks/create-board' }
    ],
    answer: 'Task boards in Clienter give you a Kanban-style view to organize work for any project or client. Create columns for each stage of your workflow and drag tasks between them as work progresses.',
    steps: [
      'Go to **Tasks** in the sidebar.',
      'Click **New Board**.',
      'Name the board — for example, "Acme Corp Website Redesign" or "Monthly Social Media".',
      'Optionally link the board to a specific client or project.',
      'Clienter creates a default board with columns like To Do, In Progress, and Done. You can rename, add, or remove columns to fit your workflow.',
      'Click **Add Task** in any column to start adding work items.'
    ],
    sections: [
      {
        id: 'columns',
        heading: 'Customizing columns',
        level: 2,
        content: 'Click the column header to rename it. Use the **+** icon to add new columns, or drag columns to reorder them. Common setups include "Backlog → In Progress → Review → Done" or "Brief → Design → Revisions → Approved". There\'s no limit on the number of columns.'
      },
      {
        id: 'task-details',
        heading: 'Task details',
        level: 2,
        content: 'Click any task card to open its detail view. You can add a description, set a due date, assign a priority label, attach files, and leave comments. Tasks also support checklists for breaking down sub-steps within a single task.',
        callout: {
          type: 'tip',
          text: 'Use priority labels (Urgent, High, Medium, Low) to quickly spot what needs attention when scanning the board.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I share a board with a client?', href: '/help/tasks/share-client' },
      { title: 'How do I set up recurring tasks?', href: '/help/tasks/recurring' }
    ],
    relatedDocs: [
      { title: 'Tasks overview', href: '/docs/features/tasks' },
      { title: 'Getting started with Clienter', href: '/docs/getting-started' }
    ]
  },

  'tasks/share-client': {
    slug: 'tasks/share-client',
    title: 'How do I share a board with a client?',
    metaTitle: 'Share Task Boards with Clients | Clienter Help',
    metaDescription: 'Learn how to share a Clienter task board with your client so they can see progress, leave comments, and stay in the loop.',
    category: 'Tasks',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Tasks', href: '/help/tasks' },
      { label: 'How do I share a board with a client?', href: '/help/tasks/share-client' }
    ],
    answer: 'You can share any task board with a client so they can view progress, comment on tasks, and stay updated — without needing to send status update emails back and forth.',
    steps: [
      'Open the task board you want to share.',
      'Click the **Share** button in the top-right corner.',
      'Toggle **Client Access** on.',
      'Choose the permission level: **View Only** (client can see tasks but not edit) or **Comment** (client can also leave comments on tasks).',
      'Copy the invite link and send it to your client, or enter their email to send an invitation directly.',
      'Your client receives access and can view the board from their Clienter dashboard or the shared link.'
    ],
    sections: [
      {
        id: 'permissions',
        heading: 'Client permission levels',
        level: 2,
        content: 'With **View Only**, clients can see all tasks, statuses, and due dates but cannot make changes. With **Comment**, they can additionally leave comments on individual tasks — useful for feedback rounds and approvals. Clients never see your internal notes or other boards unless you explicitly share them.'
      },
      {
        id: 'revoking',
        heading: 'Revoking access',
        level: 2,
        content: 'To remove a client\'s access, go back to the Share settings and toggle Client Access off, or remove their email from the shared list. Access is revoked immediately.',
        callout: {
          type: 'info',
          text: 'Shared boards show your professional brand. Make sure your board names and task descriptions are client-appropriate before sharing.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I create a task board?', href: '/help/tasks/create-board' },
      { title: 'Can my clients message me?', href: '/help/messaging/client-chat' }
    ],
    relatedDocs: [
      { title: 'Tasks overview', href: '/docs/features/tasks' },
      { title: 'Client portal', href: '/docs/features/client-portal' }
    ]
  },

  'tasks/recurring': {
    slug: 'tasks/recurring',
    title: 'How do I set up recurring tasks?',
    metaTitle: 'Recurring Tasks | Clienter Help',
    metaDescription: 'Automate repetitive work by setting up recurring tasks in Clienter that create themselves on a schedule you define.',
    category: 'Tasks',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Tasks', href: '/help/tasks' },
      { label: 'How do I set up recurring tasks?', href: '/help/tasks/recurring' }
    ],
    answer: 'Recurring tasks automatically create a new task on a schedule you set — daily, weekly, monthly, or custom. They are ideal for repetitive work like weekly reports, monthly check-ins, or regular content publishing.',
    steps: [
      'Open a task board and click **Add Task** in the desired column.',
      'Fill in the task name, description, and any other details.',
      'Click the **Repeat** icon (or toggle **Recurring** in the task detail view).',
      'Choose the frequency: daily, weekly (pick the day), monthly (pick the date), or custom interval.',
      'Set an optional end date or leave it open-ended.',
      'Save the task. Clienter creates a new copy of this task at each interval, placed in the same column.'
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How recurring tasks behave',
        level: 2,
        content: 'Each recurrence creates an independent task card. Completing or moving one does not affect future occurrences. The new task inherits the name, description, priority, and checklist of the original — but starts fresh (unchecked, in the original column).'
      },
      {
        id: 'editing',
        heading: 'Editing or stopping a recurring task',
        level: 2,
        content: 'Open any instance of the recurring task and click the Repeat icon. From there you can change the frequency, update the template details (applied to future recurrences), or stop the recurrence entirely. Already-created tasks remain on the board.',
        callout: {
          type: 'tip',
          text: 'Combine recurring tasks with payment reminders for retainer clients — a monthly "Send invoice" task keeps you on schedule.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I create a task board?', href: '/help/tasks/create-board' },
      { title: 'How does auto-invoicing work for retainers?', href: '/help/invoicing/auto-invoice' }
    ],
    relatedDocs: [
      { title: 'Tasks overview', href: '/docs/features/tasks' }
    ]
  },

  'meetings/schedule': {
    slug: 'meetings/schedule',
    title: 'How do I schedule a meeting?',
    metaTitle: 'Schedule Meetings | Clienter Help',
    metaDescription: 'Learn how to schedule client meetings in Clienter, set the date, time, and video link, and send calendar invitations.',
    category: 'Meetings',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Meetings', href: '/help/meetings' },
      { label: 'How do I schedule a meeting?', href: '/help/meetings/schedule' }
    ],
    answer: 'Schedule meetings with clients directly from Clienter. Set the date and time, add a video call link, and send an invitation — everything stays linked to the client record so you have a full history.',
    steps: [
      'Go to **Meetings** in the sidebar.',
      'Click **Schedule Meeting**.',
      'Select the client (or add attendee emails manually).',
      'Set the date, start time, and duration.',
      'Add a title and optional agenda or notes.',
      'Paste a video call link (Google Meet, Zoom, etc.) or leave blank for an in-person meeting.',
      'Click **Send Invite**. Attendees receive a calendar invitation by email.'
    ],
    sections: [
      {
        id: 'from-client',
        heading: 'Scheduling from a client profile',
        level: 2,
        content: 'You can also schedule a meeting from within a client\'s profile. Go to the client, click the **Meetings** tab, and click **Schedule Meeting**. The client is pre-selected as an attendee, saving you a step.'
      },
      {
        id: 'rescheduling',
        heading: 'Rescheduling or cancelling',
        level: 2,
        content: 'Open the meeting from the Meetings list and click **Edit** to change the date or time, or **Cancel** to cancel it. Attendees receive an updated or cancellation email automatically.',
        callout: {
          type: 'tip',
          text: 'Add an agenda to every meeting invite — it sets expectations and keeps the meeting focused.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I connect Google Calendar?', href: '/help/meetings/google' },
      { title: 'How do meeting reminders work?', href: '/help/meetings/reminders' }
    ],
    relatedDocs: [
      { title: 'Meetings overview', href: '/docs/features/meetings' },
      { title: 'Getting started with Clienter', href: '/docs/getting-started' }
    ]
  },

  'meetings/google': {
    slug: 'meetings/google',
    title: 'How do I connect Google Calendar?',
    metaTitle: 'Connect Google Calendar | Clienter Help',
    metaDescription: 'Sync your Google Calendar with Clienter to see all meetings in one place and avoid double-booking. Available on Pro and Ultra plans.',
    category: 'Meetings',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Meetings', href: '/help/meetings' },
      { label: 'How do I connect Google Calendar?', href: '/help/meetings/google' }
    ],
    answer: 'Connect your Google Calendar to Clienter so meetings sync both ways — events you create in Clienter appear on your Google Calendar, and your Google Calendar events show in Clienter. This helps you avoid double-booking and keeps everything in one view. Available on Pro and Ultra plans.',
    steps: [
      'Go to **Settings → Integrations**.',
      'Find **Google Calendar** and click **Connect**.',
      'Sign in with your Google account and grant Clienter permission to read and write calendar events.',
      'Choose which Google calendars to sync (you can select multiple).',
      'Click **Save**. Your existing Google Calendar events appear in the Clienter Meetings view within a few moments.'
    ],
    sections: [
      {
        id: 'two-way-sync',
        heading: 'Two-way sync',
        level: 2,
        content: 'Once connected, meetings created in Clienter automatically appear on your Google Calendar, and events added to Google Calendar show up in Clienter. Edits and cancellations sync both ways too.'
      },
      {
        id: 'disconnecting',
        heading: 'Disconnecting Google Calendar',
        level: 2,
        content: 'Go to Settings → Integrations and click **Disconnect** next to Google Calendar. Existing meetings remain in both systems, but future changes will no longer sync.',
        callout: {
          type: 'info',
          text: 'Google Calendar integration is available on Pro and Ultra plans. Upgrade from Settings → Billing to enable it.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I schedule a meeting?', href: '/help/meetings/schedule' },
      { title: 'How do meeting reminders work?', href: '/help/meetings/reminders' }
    ],
    relatedDocs: [
      { title: 'Meetings overview', href: '/docs/features/meetings' },
      { title: 'Integrations', href: '/docs/features/integrations' }
    ]
  },

  'meetings/reminders': {
    slug: 'meetings/reminders',
    title: 'How do meeting reminders work?',
    metaTitle: 'Meeting Reminders | Clienter Help',
    metaDescription: 'Learn how Clienter sends automatic reminders before scheduled meetings so you and your clients never miss a call.',
    category: 'Meetings',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Meetings', href: '/help/meetings' },
      { label: 'How do meeting reminders work?', href: '/help/meetings/reminders' }
    ],
    answer: 'Clienter sends automatic email reminders before your scheduled meetings so you and your clients are always prepared. Reminders go out to all attendees at the times you configure.',
    steps: [
      'Go to **Settings → Meetings**.',
      'Under **Reminders**, choose when reminders should be sent — for example, 24 hours before and 30 minutes before.',
      'Save your settings. Reminders apply to all future meetings automatically.'
    ],
    sections: [
      {
        id: 'default-reminders',
        heading: 'Default reminder timing',
        level: 2,
        content: 'By default, Clienter sends a reminder 24 hours before and 30 minutes before each meeting. You can change these intervals or add a third reminder in Settings → Meetings.'
      },
      {
        id: 'per-meeting',
        heading: 'Customizing reminders for a specific meeting',
        level: 2,
        content: 'When scheduling or editing a meeting, expand the **Reminders** section to override the defaults for that particular meeting. This is helpful for important meetings where you want an extra early reminder.',
        callout: {
          type: 'tip',
          text: 'Reminders are sent to all attendees, including clients. It is a simple way to reduce no-shows.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I schedule a meeting?', href: '/help/meetings/schedule' },
      { title: 'How do I connect Google Calendar?', href: '/help/meetings/google' }
    ],
    relatedDocs: [
      { title: 'Meetings overview', href: '/docs/features/meetings' }
    ]
  },

  'messaging/start': {
    slug: 'messaging/start',
    title: 'How do I start a conversation?',
    metaTitle: 'Start a Conversation | Clienter Help',
    metaDescription: 'Learn how to send messages to clients and team members directly within Clienter using the built-in messaging feature.',
    category: 'Messaging',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Messaging', href: '/help/messaging' },
      { label: 'How do I start a conversation?', href: '/help/messaging/start' }
    ],
    answer: 'Clienter has built-in messaging so you can communicate with clients and team members without switching to email or another chat app. Start a conversation in a few clicks.',
    steps: [
      'Go to **Messages** in the sidebar.',
      'Click **New Conversation**.',
      'Select a client or team member from the list, or type their name to search.',
      'Type your message and hit **Send**.',
      'The conversation appears in your Messages list. Both parties receive notifications for new messages.'
    ],
    sections: [
      {
        id: 'from-client-profile',
        heading: 'Starting from a client profile',
        level: 2,
        content: 'You can also start a conversation from a client\'s profile page. Click the **Message** button on their profile, and Clienter opens a new conversation with that client pre-selected.'
      },
      {
        id: 'attachments',
        heading: 'Sending files and attachments',
        level: 2,
        content: 'Click the attachment icon in the message input to share files — documents, images, PDFs, and more. Files are stored in the conversation and accessible to both parties at any time.',
        callout: {
          type: 'tip',
          text: 'Pin important messages in a conversation by hovering over them and clicking the pin icon. Pinned messages appear at the top for easy reference.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do group chats work?', href: '/help/messaging/groups' },
      { title: 'Can my clients message me?', href: '/help/messaging/client-chat' }
    ],
    relatedDocs: [
      { title: 'Messaging overview', href: '/docs/features/messaging' },
      { title: 'Getting started with Clienter', href: '/docs/getting-started' }
    ]
  },

  'messaging/groups': {
    slug: 'messaging/groups',
    title: 'How do group chats work?',
    metaTitle: 'Group Chats | Clienter Help',
    metaDescription: 'Learn how to create group conversations in Clienter to collaborate with multiple clients or team members in one thread.',
    category: 'Messaging',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Messaging', href: '/help/messaging' },
      { label: 'How do group chats work?', href: '/help/messaging/groups' }
    ],
    answer: 'Group chats let you bring multiple people into one conversation — useful for project teams, client stakeholders, or cross-functional collaboration.',
    steps: [
      'Go to **Messages** in the sidebar.',
      'Click **New Conversation**.',
      'Select multiple participants — you can mix clients and team members.',
      'Give the group a name (e.g., "Acme Website Project" or "Q4 Campaign Team").',
      'Type your first message and hit **Send**. All participants are notified and can reply in the thread.'
    ],
    sections: [
      {
        id: 'managing-members',
        heading: 'Adding or removing members',
        level: 2,
        content: 'Open the group chat and click the group name or the members icon at the top. From there you can add new participants or remove existing ones. Removed members lose access to the conversation history.'
      },
      {
        id: 'notifications',
        heading: 'Group notifications',
        level: 2,
        content: 'By default, all group members receive notifications for every message. If a group gets busy, any member can mute notifications for that specific conversation from the group settings without leaving it.',
        callout: {
          type: 'info',
          text: 'Group chats are great for project kickoffs — add the client and all team members so everyone starts on the same page.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I start a conversation?', href: '/help/messaging/start' },
      { title: 'Can my clients message me?', href: '/help/messaging/client-chat' }
    ],
    relatedDocs: [
      { title: 'Messaging overview', href: '/docs/features/messaging' }
    ]
  },

  'messaging/client-chat': {
    slug: 'messaging/client-chat',
    title: 'Can my clients message me?',
    metaTitle: 'Client Messaging | Clienter Help',
    metaDescription: 'Learn how clients can message you directly through Clienter and how to manage client communication in one place.',
    category: 'Messaging',
    breadcrumbs: [
      { label: 'Help', href: '/help' },
      { label: 'Messaging', href: '/help/messaging' },
      { label: 'Can my clients message me?', href: '/help/messaging/client-chat' }
    ],
    answer: 'Yes — clients can message you directly through Clienter. When you invite a client to Clienter or share a board or invoice with them, they get access to the messaging feature and can start conversations with you at any time.',
    steps: [
      'Make sure the client has been invited to Clienter (this happens automatically when you share a board, send an invoice, or send a meeting invite).',
      'The client logs in at app.clienter.co.in and can see the **Messages** section in their dashboard.',
      'They can start a new conversation with you or reply to an existing thread.',
      'You receive a notification whenever the client sends a message.'
    ],
    sections: [
      {
        id: 'client-experience',
        heading: 'What clients see',
        level: 2,
        content: 'Clients have a simplified dashboard focused on their projects. They see their conversations with you, shared task boards, invoices, and meetings — nothing else. They cannot see your other clients, your internal boards, or any data not explicitly shared with them.'
      },
      {
        id: 'managing-access',
        heading: 'Managing client messaging',
        level: 2,
        content: 'You can disable messaging for a specific client from their profile settings if you prefer to communicate through email or another channel. When disabled, the client no longer sees the Messages section in their dashboard.',
        callout: {
          type: 'tip',
          text: 'Keeping client communication inside Clienter means everything is searchable and tied to the client record — no more digging through email threads.'
        }
      }
    ],
    relatedLinks: [
      { title: 'How do I start a conversation?', href: '/help/messaging/start' },
      { title: 'How do I share a board with a client?', href: '/help/tasks/share-client' }
    ],
    relatedDocs: [
      { title: 'Messaging overview', href: '/docs/features/messaging' },
      { title: 'Client portal', href: '/docs/features/client-portal' }
    ]
  }
}
