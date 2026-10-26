import type { DocPage } from './types';

export const INVOICING_DOCS: Record<string, DocPage> = {
  'invoicing': {
    slug: 'invoicing',
    title: 'Invoicing & Payments',
    metaTitle: 'Invoicing & Payments — Clienter Docs',
    metaDescription: 'Create professional invoices, track payments, set up auto-invoicing for retainers, and manage multi-currency billing — all from your Clienter dashboard.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        level: 2,
        content: 'Clienter gives you a complete invoicing system built right into your project workflow. Create invoices linked to active projects or standalone bills, track payment status in real time, and let clients pay through a branded invoice page. No need for a separate invoicing tool — everything from quote to payment lives in one place.',
      },
      {
        id: 'how-invoicing-works',
        heading: 'How Invoicing Works',
        level: 2,
        content: 'Every invoice in Clienter follows a simple lifecycle: Draft, Sent, Viewed, Paid, and Overdue. You create an invoice from the Invoices tab or directly from a project, fill in line items, preview the result, and share it with your client via a unique link or email. Clients see a clean, branded invoice page and can download a PDF copy.',
        steps: [
          'Go to the Invoices section from your dashboard sidebar.',
          'Click "New Invoice" — choose a linked project or create a standalone invoice.',
          'Add line items, taxes, discounts, and notes.',
          'Preview the invoice, then send it to your client.',
          'Track the status as your client views and pays the invoice.',
        ],
      },
      {
        id: 'invoice-statuses',
        heading: 'Invoice Statuses',
        level: 2,
        content: 'Each invoice displays one of these statuses: **Draft** (not yet sent), **Sent** (delivered to client), **Viewed** (client opened the invoice link), **Paid** (full payment recorded), **Partially Paid** (some amount received), and **Overdue** (past the due date with balance remaining). You can filter your invoice list by status to quickly find what needs attention.',
        callout: {
          type: 'info',
          text: 'Clienter automatically marks an invoice as Overdue when the due date passes and the full amount has not been recorded as paid.',
        },
      },
      {
        id: 'project-linked-invoices',
        heading: 'Project-Linked vs Standalone Invoices',
        level: 2,
        content: 'Project-linked invoices pull the client name, project title, and currency from the associated project, saving you time on data entry. Standalone invoices are useful for one-off charges, deposits, or billing clients you have not set up as a project. Both types support the full range of features — line items, taxes, discounts, custom sections, and payment tracking.',
      },
      {
        id: 'key-features',
        heading: 'Key Features',
        level: 2,
        content: 'Clienter invoicing includes automatic invoice numbering, an in-place sheet editor for fast editing, multi-currency support, tax and discount calculations, payment reminders, a payments ledger for tracking partial and full payments, auto-invoicing for retainer projects, and PDF generation for every invoice.',
      },
    ],
    faqs: [
      {
        q: 'Does Clienter process payments directly?',
        a: 'Clienter is an invoicing and tracking tool — it does not process client payments. You share invoices with clients and record payments manually when received via bank transfer, UPI, or any other method. Clienter subscriptions (Pro/Ultra plans) are processed through Razorpay.',
      },
      {
        q: 'Can I use my own branding on invoices?',
        a: 'Yes. Your business name, logo, and contact details appear on every invoice. You can also add custom sections like bank details or terms of service.',
      },
      {
        q: 'Is there a limit on how many invoices I can create?',
        a: 'Free plan users can create invoices with standard features. Pro and Ultra plans unlock auto-invoicing, advanced reminders, and additional customisation options.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Invoices', href: '/docs/invoicing/creating' },
      { title: 'Invoice Sheet Editor', href: '/docs/invoicing/editing' },
      { title: 'Auto-Invoicing for Retainers', href: '/docs/invoicing/auto-invoice' },
      { title: 'Payment Reminders', href: '/docs/invoicing/reminders' },
      { title: 'Payments Ledger', href: '/docs/invoicing/payments' },
      { title: 'Multi-Currency Invoicing', href: '/docs/invoicing/currency' },
    ],
  },

  'invoicing/creating': {
    slug: 'invoicing/creating',
    title: 'Creating Invoices',
    metaTitle: 'Creating Invoices — Clienter Docs',
    metaDescription: 'Learn how to create project-linked and standalone invoices in Clienter with auto-numbering, line items, taxes, and discounts.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
      { label: 'Creating Invoices', href: '/docs/invoicing/creating' },
    ],
    sections: [
      {
        id: 'create-from-project',
        heading: 'Creating an Invoice from a Project',
        level: 2,
        content: 'The fastest way to create an invoice is from within a project. Navigate to the project, open the Invoices tab, and click "New Invoice." Clienter pre-fills the client name, project title, and currency from the project settings, so you only need to add your line items.',
        steps: [
          'Open the project from your dashboard.',
          'Go to the Invoices tab inside the project.',
          'Click "New Invoice."',
          'Add line items with descriptions, quantities, and rates.',
          'Set the due date, add any taxes or discounts, and save.',
        ],
        callout: {
          type: 'tip',
          text: 'Project-linked invoices stay connected to the project, so you can track total billed and outstanding amounts from the project overview.',
        },
      },
      {
        id: 'standalone-invoice',
        heading: 'Creating a Standalone Invoice',
        level: 2,
        content: 'For one-off charges or clients without an active project, create a standalone invoice from the main Invoices section. You will need to manually enter the client name, email, currency, and all line item details.',
        steps: [
          'Go to the Invoices section from the sidebar.',
          'Click "New Invoice."',
          'Enter the client name and email address.',
          'Select the invoice currency.',
          'Add line items, set the due date, and save.',
        ],
      },
      {
        id: 'auto-numbering',
        heading: 'Auto-Numbering',
        level: 2,
        content: 'Clienter automatically assigns a sequential invoice number to every new invoice. The format follows a prefix and incrementing number (e.g., INV-001, INV-002). This keeps your records consistent without manual tracking. You can see the assigned number in the invoice header before sending.',
        callout: {
          type: 'info',
          text: 'Invoice numbers are assigned in the order invoices are created and cannot be changed after the invoice is sent, ensuring an auditable sequence.',
        },
      },
      {
        id: 'line-items',
        heading: 'Adding Line Items',
        level: 2,
        content: 'Each invoice can have multiple line items. For every item, enter a description, quantity, and unit rate. Clienter calculates the line total automatically. You can reorder items by dragging, and remove any item with the delete button. Use descriptive names so your client understands exactly what they are being billed for.',
      },
      {
        id: 'taxes-discounts',
        heading: 'Taxes and Discounts',
        level: 3,
        content: 'Add taxes as a percentage applied to the subtotal — useful for GST, VAT, or other regional taxes. Discounts can be applied as a flat amount or a percentage. Both are clearly broken out on the invoice so your client sees exactly how the total is calculated.',
      },
      {
        id: 'preview-send',
        heading: 'Previewing and Sending',
        level: 2,
        content: 'Before sending, use the preview to see exactly what your client will receive. Check the line items, totals, due date, and any notes. When ready, click "Send" to deliver the invoice via email and generate a shareable link. You can also copy the invoice link and send it through any channel you prefer.',
      },
    ],
    faqs: [
      {
        q: 'Can I duplicate an existing invoice?',
        a: 'Yes. Open any existing invoice, click the menu, and select "Duplicate." A new draft is created with the same line items and details, assigned a new invoice number.',
      },
      {
        q: 'Can I edit an invoice after sending it?',
        a: 'You can edit a sent invoice as long as no payment has been recorded against it. See the Invoice Sheet Editor guide for details on in-place editing.',
      },
    ],
    relatedLinks: [
      { title: 'Invoice Sheet Editor', href: '/docs/invoicing/editing' },
      { title: 'Multi-Currency Invoicing', href: '/docs/invoicing/currency' },
      { title: 'Invoicing Overview', href: '/docs/invoicing' },
    ],
  },

  'invoicing/editing': {
    slug: 'invoicing/editing',
    title: 'Invoice Sheet Editor',
    metaTitle: 'Invoice Sheet Editor — Clienter Docs',
    metaDescription: 'Edit invoices in place with Clienter\'s sheet editor. Update line items, add bank details, customise sections, and manage invoice content without leaving the page.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
      { label: 'Invoice Sheet Editor', href: '/docs/invoicing/editing' },
    ],
    sections: [
      {
        id: 'sheet-editor-overview',
        heading: 'In-Place Editing',
        level: 2,
        content: 'The invoice sheet editor lets you modify any part of an invoice directly on the page. Click on a field — description, quantity, rate, notes, or dates — and edit it in place. Changes are saved automatically as you type, so there is no separate save step. This makes it fast to correct typos, adjust amounts, or update details before sending.',
      },
      {
        id: 'editing-line-items',
        heading: 'Editing Line Items',
        level: 2,
        content: 'Click on any line item field to edit it directly. You can change descriptions, quantities, and rates. Add new line items with the "Add Item" button at the bottom of the list. Remove an item by clicking the delete icon on its row. Totals recalculate instantly as you make changes.',
        callout: {
          type: 'tip',
          text: 'Drag line items to reorder them. Put your most important deliverables at the top for clarity.',
        },
      },
      {
        id: 'bank-details',
        heading: 'Adding Bank Details',
        level: 2,
        content: 'Include your payment information directly on the invoice so clients know where to send funds. Add a bank details section with your account name, account number, IFSC code (or SWIFT/IBAN for international clients), and UPI ID. This section appears at the bottom of the invoice and on the PDF download.',
        steps: [
          'Open the invoice in the sheet editor.',
          'Scroll to the bottom and click "Add Section."',
          'Select "Bank Details" from the section type options.',
          'Fill in your account name, number, IFSC/SWIFT code, and UPI ID.',
          'The details will appear on the invoice and PDF automatically.',
        ],
      },
      {
        id: 'custom-sections',
        heading: 'Custom Sections',
        level: 2,
        content: 'Beyond bank details, you can add custom sections for terms and conditions, payment instructions, project scope notes, or any other information your client needs. Each section has a heading and a free-text body. You can add multiple sections and reorder them as needed.',
      },
      {
        id: 'notes-footer',
        heading: 'Notes and Footer',
        level: 3,
        content: 'The notes field at the bottom of every invoice is a good place for a thank-you message, late payment policy, or a reminder of your next steps. Keep it concise — your client sees it on the invoice page and the PDF.',
      },
      {
        id: 'editing-restrictions',
        heading: 'Editing Restrictions',
        level: 2,
        content: 'You can freely edit invoices in Draft status. Sent invoices can be edited as long as no payment has been recorded. Once a payment is recorded against an invoice, the line items and totals are locked to maintain an accurate audit trail. You can still update notes and custom sections on paid invoices.',
        callout: {
          type: 'warning',
          text: 'Editing a sent invoice does not re-send it to the client. After making changes, share the updated link or resend the invoice manually.',
        },
      },
    ],
    relatedLinks: [
      { title: 'Creating Invoices', href: '/docs/invoicing/creating' },
      { title: 'Payments Ledger', href: '/docs/invoicing/payments' },
      { title: 'Invoicing Overview', href: '/docs/invoicing' },
    ],
  },

  'invoicing/auto-invoice': {
    slug: 'invoicing/auto-invoice',
    title: 'Auto-Invoicing for Retainers',
    metaTitle: 'Auto-Invoicing for Retainer Projects — Clienter Docs',
    metaDescription: 'Set up automatic recurring invoices for retainer projects in Clienter. Configure billing cycles, line items, and let Clienter generate invoices on schedule.',
    planBadge: 'Pro',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
      { label: 'Auto-Invoicing', href: '/docs/invoicing/auto-invoice' },
    ],
    sections: [
      {
        id: 'what-is-auto-invoicing',
        heading: 'What Is Auto-Invoicing?',
        level: 2,
        content: 'Auto-invoicing generates recurring invoices for retainer projects on a schedule you define. Instead of manually creating the same invoice every month, set it up once and Clienter handles the rest — creating the invoice, assigning a number, and optionally notifying your client when each new invoice is ready.',
        planBadge: 'Pro',
      },
      {
        id: 'setting-up',
        heading: 'Setting Up Auto-Invoicing',
        level: 2,
        content: 'Auto-invoicing is configured at the project level for retainer-type projects. You define the billing cycle, line items, and start date. Clienter then generates a new invoice at the beginning of each cycle.',
        steps: [
          'Open a retainer project from your dashboard.',
          'Go to the Invoices tab and click "Auto-Invoice Settings."',
          'Select the billing cycle: monthly, bi-monthly, or quarterly.',
          'Add the recurring line items with descriptions and amounts.',
          'Set the start date for the first auto-generated invoice.',
          'Enable auto-invoicing and save.',
        ],
        callout: {
          type: 'info',
          text: 'Auto-invoicing is available on Pro and Ultra plans. Free plan users can create recurring invoices manually.',
        },
      },
      {
        id: 'billing-cycles',
        heading: 'Billing Cycles',
        level: 2,
        content: 'Choose from monthly, bi-monthly, or quarterly billing cycles. The invoice is generated on the first day of each cycle. For example, a monthly cycle starting January 1 generates invoices on February 1, March 1, and so on. The due date is set based on your default payment terms.',
      },
      {
        id: 'customising-recurring-items',
        heading: 'Customising Recurring Line Items',
        level: 3,
        content: 'The line items you set during auto-invoice setup are used for every generated invoice. If your retainer amount changes, update the auto-invoice settings and all future invoices will use the new amounts. Already-generated invoices are not affected.',
      },
      {
        id: 'reviewing-auto-invoices',
        heading: 'Reviewing Generated Invoices',
        level: 2,
        content: 'Auto-generated invoices are created in Draft status by default, giving you a chance to review before sending. You can change this to auto-send in the settings if you prefer invoices to go out immediately. Either way, every generated invoice appears in your invoice list and the project\'s Invoices tab.',
        callout: {
          type: 'tip',
          text: 'Set auto-invoices to Draft initially until you are confident the line items and amounts are correct. Switch to auto-send once your retainer is stable.',
        },
      },
      {
        id: 'pausing-stopping',
        heading: 'Pausing or Stopping Auto-Invoicing',
        level: 2,
        content: 'You can pause auto-invoicing at any time from the project\'s auto-invoice settings. Pausing stops new invoices from being generated but keeps your configuration intact. Resume when ready, and the next invoice picks up from the current cycle. To stop permanently, disable auto-invoicing — you can always set it up again later.',
      },
    ],
    faqs: [
      {
        q: 'What happens if I change the retainer amount mid-cycle?',
        a: 'Update the line items in auto-invoice settings. The change applies to the next generated invoice. Invoices already created are not modified.',
      },
      {
        q: 'Can I auto-invoice for non-retainer projects?',
        a: 'Auto-invoicing is designed for retainer projects with recurring billing. For one-time or milestone-based projects, create invoices manually.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Invoices', href: '/docs/invoicing/creating' },
      { title: 'Payment Reminders', href: '/docs/invoicing/reminders' },
      { title: 'Invoicing Overview', href: '/docs/invoicing' },
    ],
  },

  'invoicing/reminders': {
    slug: 'invoicing/reminders',
    title: 'Payment Reminders',
    metaTitle: 'Payment Reminders — Clienter Docs',
    metaDescription: 'Send manual or automatic payment reminders to clients for unpaid invoices in Clienter. Configure due-date reminders to reduce late payments.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
      { label: 'Payment Reminders', href: '/docs/invoicing/reminders' },
    ],
    sections: [
      {
        id: 'reminders-overview',
        heading: 'Overview',
        level: 2,
        content: 'Late payments are one of the biggest pain points for freelancers and agencies. Clienter helps you stay on top of outstanding invoices with payment reminders — both manual nudges you send on demand and automatic reminders triggered by due dates.',
      },
      {
        id: 'manual-reminders',
        heading: 'Sending Manual Reminders',
        level: 2,
        content: 'Open any unpaid invoice and click "Send Reminder." Clienter sends a polite payment reminder email to your client with the invoice details, amount due, and a link to view the invoice. You can send manual reminders as many times as needed.',
        steps: [
          'Go to the Invoices section and find the unpaid invoice.',
          'Open the invoice and click "Send Reminder."',
          'Clienter sends an email reminder to the client on file.',
          'The reminder timestamp is logged on the invoice for your records.',
        ],
        callout: {
          type: 'tip',
          text: 'Space out your reminders. A reminder a few days before the due date and another a few days after is usually enough. Too many reminders can strain your client relationship.',
        },
      },
      {
        id: 'auto-reminders',
        heading: 'Automatic Due-Date Reminders',
        level: 2,
        content: 'Set up automatic reminders so you never have to remember to follow up. Clienter can send a reminder before the due date (e.g., 3 days before) and after the due date (e.g., 1 day, 7 days, and 14 days overdue). Configure these intervals in your invoicing settings.',
        steps: [
          'Go to Settings and open the Invoicing section.',
          'Enable automatic payment reminders.',
          'Choose your reminder schedule — select intervals before and after the due date.',
          'Save your settings. Reminders apply to all future invoices with a due date.',
        ],
        callout: {
          type: 'info',
          text: 'Automatic reminders are sent only for invoices in Sent or Overdue status. Draft invoices and fully paid invoices do not trigger reminders.',
        },
      },
      {
        id: 'reminder-history',
        heading: 'Reminder History',
        level: 3,
        content: 'Every reminder — whether manual or automatic — is logged on the invoice timeline. You can see when each reminder was sent and track how many follow-ups a particular invoice has needed. This is helpful for identifying clients who consistently pay late.',
      },
      {
        id: 'best-practices',
        heading: 'Best Practices',
        level: 2,
        content: 'Set clear payment terms upfront in your project agreement. Use a pre-due-date reminder (3 days before) as a gentle heads-up, and a post-due-date reminder (1 day after) as the first follow-up. If payment is still outstanding after 14 days, consider reaching out directly. Clienter\'s reminders keep the tone professional and consistent.',
      },
    ],
    faqs: [
      {
        q: 'Will my client receive multiple reminders on the same day?',
        a: 'No. Clienter sends at most one reminder per invoice per day, even if both manual and automatic reminders are scheduled.',
      },
      {
        q: 'Can I customise the reminder email text?',
        a: 'Reminder emails use a standard professional template with your business name and invoice details. Custom email templates are on the roadmap.',
      },
    ],
    relatedLinks: [
      { title: 'Payments Ledger', href: '/docs/invoicing/payments' },
      { title: 'Creating Invoices', href: '/docs/invoicing/creating' },
      { title: 'Invoicing Overview', href: '/docs/invoicing' },
    ],
  },

  'invoicing/payments': {
    slug: 'invoicing/payments',
    title: 'Payments Ledger',
    metaTitle: 'Payments Ledger — Clienter Docs',
    metaDescription: 'Record full and partial payments against invoices in Clienter. Track payment history, generate receipt invoices, and keep your financial records accurate.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
      { label: 'Payments Ledger', href: '/docs/invoicing/payments' },
    ],
    sections: [
      {
        id: 'payments-overview',
        heading: 'Overview',
        level: 2,
        content: 'The payments ledger is where you record and track every payment received against your invoices. When a client pays — via bank transfer, UPI, or any other method — you log the payment in Clienter. The system updates the invoice status automatically: Partially Paid when some amount is received, and Paid when the full balance is cleared.',
      },
      {
        id: 'recording-payment',
        heading: 'Recording a Payment',
        level: 2,
        content: 'Recording a payment takes just a few clicks. Open the invoice, click "Record Payment," enter the amount received, the payment date, and an optional note (e.g., the transaction reference). Clienter deducts the amount from the outstanding balance and updates the invoice status.',
        steps: [
          'Open the invoice you received payment for.',
          'Click "Record Payment."',
          'Enter the amount received and the payment date.',
          'Optionally add a note or transaction reference.',
          'Save. The invoice balance and status update automatically.',
        ],
        callout: {
          type: 'info',
          text: 'You can record multiple partial payments against a single invoice. Each payment is logged separately in the ledger.',
        },
      },
      {
        id: 'partial-payments',
        heading: 'Partial Payments',
        level: 2,
        content: 'If a client pays in instalments, record each payment as it comes in. The invoice shows the total paid, the remaining balance, and a status of "Partially Paid" until the full amount is received. This is common for large projects or milestone-based billing.',
      },
      {
        id: 'payment-history',
        heading: 'Payment History',
        level: 3,
        content: 'Every invoice maintains a complete payment history — each recorded payment with its amount, date, and note. You can view this history on the invoice detail page. The ledger also provides a consolidated view of all payments across invoices, sortable by date, client, or amount.',
      },
      {
        id: 'receipt-invoices',
        heading: 'Receipt Invoices',
        level: 2,
        content: 'After recording a payment, you can generate a receipt invoice — a document confirming the payment received. This is useful for clients who need a payment acknowledgment for their own records. The receipt includes the original invoice reference, amount paid, payment date, and your business details.',
        steps: [
          'Open the invoice with a recorded payment.',
          'Click "Generate Receipt" from the payment history section.',
          'Review the receipt and share it with your client via link or PDF.',
        ],
      },
      {
        id: 'deleting-payments',
        heading: 'Correcting or Deleting Payments',
        level: 2,
        content: 'If you record a payment in error, you can delete it from the payment history. This restores the invoice balance and reverts the status. Only delete payments that were genuinely recorded by mistake — for refunds or adjustments, add a note to the invoice for a clear audit trail.',
        callout: {
          type: 'warning',
          text: 'Deleting a payment is permanent and cannot be undone. Double-check the payment details before removing it.',
        },
      },
    ],
    faqs: [
      {
        q: 'Does Clienter collect payments from my clients?',
        a: 'No. Clienter is an invoicing and tracking tool. You collect payments through your own channels (bank transfer, UPI, etc.) and record them in Clienter for tracking purposes.',
      },
      {
        q: 'Can I export my payment history?',
        a: 'You can view and sort all payments in the ledger. Export functionality is planned for a future update.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Invoices', href: '/docs/invoicing/creating' },
      { title: 'Payment Reminders', href: '/docs/invoicing/reminders' },
      { title: 'Invoicing Overview', href: '/docs/invoicing' },
    ],
  },

  'invoicing/currency': {
    slug: 'invoicing/currency',
    title: 'Multi-Currency Invoicing',
    metaTitle: 'Multi-Currency Invoicing & FX — Clienter Docs',
    metaDescription: 'Invoice international clients in their local currency with Clienter. Set invoice currencies, manage exchange rates, and handle cross-border billing.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Invoicing', href: '/docs/invoicing' },
      { label: 'Multi-Currency', href: '/docs/invoicing/currency' },
    ],
    sections: [
      {
        id: 'multi-currency-overview',
        heading: 'Overview',
        level: 2,
        content: 'If you work with international clients, you need to invoice in their currency. Clienter supports multi-currency invoicing so you can bill in USD, EUR, GBP, AUD, CAD, and many other currencies while keeping your own books in INR (or your base currency). Each invoice carries its own currency, and amounts are displayed with the correct symbol and formatting.',
      },
      {
        id: 'setting-invoice-currency',
        heading: 'Setting the Invoice Currency',
        level: 2,
        content: 'You choose the currency when creating an invoice. For project-linked invoices, the currency defaults to the one set on the project. For standalone invoices, select the currency from the dropdown during creation. Once an invoice is sent, the currency cannot be changed.',
        steps: [
          'Create a new invoice (from a project or standalone).',
          'In the invoice header, click the currency selector.',
          'Choose the currency your client should be billed in.',
          'All line item amounts and totals display in the selected currency.',
        ],
        callout: {
          type: 'info',
          text: 'Set the currency at the project level if you consistently bill a client in the same currency. Every invoice created from that project will default to it.',
        },
      },
      {
        id: 'supported-currencies',
        heading: 'Supported Currencies',
        level: 2,
        content: 'Clienter supports all major world currencies including INR, USD, EUR, GBP, AUD, CAD, SGD, AED, and more. The currency list is regularly updated. If you need a currency that is not listed, reach out to support@clienter.co.in and we will add it.',
      },
      {
        id: 'exchange-rates',
        heading: 'Exchange Rates and Conversions',
        level: 2,
        content: 'Clienter displays invoice amounts in the selected currency as-is — there is no automatic currency conversion applied to your totals. You set your rates in the client\'s currency, and that is what appears on the invoice. For your own tracking, the dashboard shows a summary that can help you understand your earnings across currencies.',
        callout: {
          type: 'tip',
          text: 'When setting rates for international clients, factor in exchange rate fluctuations and any bank transfer fees. Consider quoting slightly above your target rate to absorb FX variance.',
        },
      },
      {
        id: 'recording-fx-payments',
        heading: 'Recording Payments in Foreign Currency',
        level: 3,
        content: 'When you record a payment against a foreign-currency invoice, enter the amount in the invoice currency. If you received the equivalent in INR (or your local currency), you can add the actual received amount in the payment note for your own reference. Clienter tracks the invoice balance in the invoiced currency.',
      },
      {
        id: 'best-practices-international',
        heading: 'Best Practices for International Invoicing',
        level: 2,
        content: 'Clearly state the currency on every invoice and in your project agreements. Include your SWIFT/IBAN details in the bank details section for international wire transfers. Specify who bears the transfer fees (typically the client). Consider setting payment terms slightly longer for international transfers, as cross-border payments can take 3 to 5 business days.',
      },
    ],
    faqs: [
      {
        q: 'Does Clienter convert currencies automatically?',
        a: 'No. You enter amounts in the client\'s currency, and the invoice displays those amounts as-is. There is no automatic FX conversion.',
      },
      {
        q: 'Can I invoice the same client in different currencies?',
        a: 'Yes. Each invoice has its own currency setting. You can bill the same client in USD for one project and EUR for another.',
      },
      {
        q: 'How do I handle GST on international invoices?',
        a: 'For exports of services (billing international clients), GST may be zero-rated under Indian tax law. Consult your accountant for your specific situation. Clienter lets you set tax to 0% on any invoice.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Invoices', href: '/docs/invoicing/creating' },
      { title: 'Payments Ledger', href: '/docs/invoicing/payments' },
      { title: 'Invoicing Overview', href: '/docs/invoicing' },
    ],
  },
};
