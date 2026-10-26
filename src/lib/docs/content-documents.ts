import type { DocPage } from './types'

const BASE = { label: 'Docs', href: '/docs' }
const DOCS_SECTION = { label: 'Documents', href: '/docs/documents' }

export const DOCUMENTS_DOCS: Record<string, DocPage> = {
  'documents': {
    slug: 'documents',
    title: 'Documents & Contracts',
    metaTitle: 'Documents & Contracts — Clienter Docs',
    metaDescription:
      'Create professional quotations, contracts, and invoices with Clienter\'s canvas-based document editor. E-signatures, AI quote builder, sharing, and more.',
    breadcrumbs: [BASE, DOCS_SECTION],
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        level: 2,
        content:
          'Clienter\'s Documents module gives you a full-featured, canvas-based editor for every document your business needs — quotations, contracts, invoices, and free-form documents. Every document lives on an A4 canvas where you can drag, resize, and snap elements exactly where you want them. No more wrestling with word-processor templates.',
      },
      {
        id: 'document-types',
        heading: 'Document Types',
        level: 2,
        content:
          'Clienter supports four core document types, each tailored to a specific stage of your client workflow:',
        steps: [
          'Quotations — Itemised price breakdowns you send to prospects and clients before work begins.',
          'Contracts — Legally-structured agreements with two-party signing, request-changes flow, and tamper-evident e-signatures.',
          'Invoices — Canvas-based invoices you can customise to match your brand, complete with line items, taxes, and payment terms.',
          'Free-form documents — Blank A4 canvases for proposals, scope documents, NDAs, or anything else.',
        ],
      },
      {
        id: 'canvas-editor-intro',
        heading: 'The Canvas Editor',
        level: 2,
        content:
          'Every document opens in Clienter\'s canvas editor — a free-form A4 workspace. Add text blocks, images, tables, dividers, and signature fields, then drag and snap them into place. The editor auto-saves as you work, and you can preview the document exactly as your client will see it before sharing.',
        callout: {
          type: 'tip',
          text: 'Press Ctrl/Cmd + S at any time to force-save, or rely on the automatic save that triggers every few seconds.',
        },
      },
      {
        id: 'ai-builder-intro',
        heading: 'AI Quote Builder',
        level: 2,
        content:
          'Short on time? Describe what you need in plain English and the AI Quote Builder generates a complete quotation document — line items, pricing, terms, and layout included. You can edit everything afterwards in the canvas editor. Free plans get 3 AI-generated quotes per month, and Pro plans get 25.',
        planBadge: 'Free',
      },
      {
        id: 'e-signature-intro',
        heading: 'E-Signatures',
        level: 2,
        content:
          'Clienter supports legally-compliant electronic signatures with both typed and hand-drawn options. Every signed document is sealed with a SHA-256 hash for tamper evidence, and the signing flow is designed with India\'s IT Act 2000 Section 3A in mind. Both parties — you and your client — can sign directly from the shared document link.',
      },
      {
        id: 'getting-started',
        heading: 'Getting Started',
        level: 2,
        content:
          'Head to the Documents section in your Clienter dashboard to create your first document. You can start from scratch, use the AI Quote Builder, or duplicate an existing document.',
        steps: [
          'Open app.clienter.co.in and navigate to Documents from the sidebar.',
          'Click "New Document" and choose a document type — Quotation, Contract, Invoice, or Free-form.',
          'Use the canvas editor to add and arrange your content.',
          'Share via a public link, or request e-signatures from your client.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I use documents on the Free plan?',
        a: 'Yes. Document creation, the canvas editor, sharing, and e-signatures are all available on every plan. The AI Quote Builder has usage limits that vary by plan.',
      },
      {
        q: 'Are e-signatures legally valid in India?',
        a: 'Clienter\'s e-signatures use SHA-256 tamper-evidence hashing and are designed in accordance with India\'s IT Act 2000 Section 3A. They are widely accepted for business agreements, though we recommend consulting a legal professional for high-stakes contracts.',
      },
      {
        q: 'Can I link a document to a client or project?',
        a: 'Absolutely. Documents can be linked to clients, projects, and leads so they appear in context wherever you need them.',
      },
    ],
    relatedLinks: [
      { title: 'Canvas Editor', href: '/docs/documents/canvas-editor' },
      { title: 'Creating Quotations', href: '/docs/documents/quotations' },
      { title: 'Creating Contracts', href: '/docs/documents/contracts' },
      { title: 'E-Signatures', href: '/docs/documents/e-signature' },
      { title: 'AI Quote Builder', href: '/docs/documents/ai-builder' },
    ],
  },

  'documents/canvas-editor': {
    slug: 'documents/canvas-editor',
    title: 'Canvas Editor',
    metaTitle: 'Canvas Editor — Clienter Docs',
    metaDescription:
      'Learn how to use Clienter\'s free-form A4 canvas editor to build professional documents with drag-and-drop elements, snap-to-grid alignment, and real-time preview.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Canvas Editor', href: '/docs/documents/canvas-editor' }],
    sections: [
      {
        id: 'what-is-canvas',
        heading: 'What Is the Canvas Editor?',
        level: 2,
        content:
          'The canvas editor is Clienter\'s document workspace. Instead of a linear word processor, you get a free-form A4 page where every element — text, images, tables, dividers, signature blocks — can be placed anywhere. Think of it as a lightweight design tool purpose-built for business documents.',
      },
      {
        id: 'adding-elements',
        heading: 'Adding Elements',
        level: 2,
        content:
          'The toolbar at the top of the canvas gives you access to all available elements. Click an element type to drop it onto the page, then drag it into position.',
        steps: [
          'Click the "+" button or use the top toolbar to open the element picker.',
          'Choose an element type: Text Block, Image, Table, Divider, Signature Field, or Shape.',
          'The element appears on the canvas — drag it to your desired position.',
          'Resize by dragging the corner handles, or double-click a text block to start editing.',
        ],
      },
      {
        id: 'drag-and-snap',
        heading: 'Drag, Snap & Alignment',
        level: 2,
        content:
          'Elements snap to a grid and to other elements as you drag them, making it easy to create clean, aligned layouts without pixel-pushing. Smart guides appear in blue when an element aligns with another element\'s edge or centre. You can hold Alt/Option while dragging to temporarily disable snapping for fine control.',
        callout: {
          type: 'tip',
          text: 'Use the alignment buttons in the element toolbar to quickly centre, left-align, or distribute multiple selected elements.',
        },
      },
      {
        id: 'text-formatting',
        heading: 'Text Formatting',
        level: 3,
        content:
          'Double-click any text block to enter edit mode. You get standard formatting options — bold, italic, underline, font size, colour, and alignment. Heading styles (H1, H2, H3) are available for section titles. The formatting toolbar appears inline above the text block when you\'re editing.',
      },
      {
        id: 'tables',
        heading: 'Working with Tables',
        level: 3,
        content:
          'Tables are essential for quotations and invoices. Add a table element, then configure columns and rows. Each cell is independently editable. Right-click a row or column header to insert, delete, or reorder. Tables automatically calculate totals when you enable the "Auto-sum" option on a column.',
      },
      {
        id: 'preview-and-save',
        heading: 'Preview & Auto-Save',
        level: 2,
        content:
          'The canvas auto-saves every few seconds. Click the "Preview" button in the top-right corner to see exactly what your client will see when they open the shared link. The preview renders the document at print-ready quality, including any signature fields and their current state.',
        callout: {
          type: 'info',
          text: 'Documents are stored securely in the cloud. You can access and edit them from any device logged into your Clienter account.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can I add multiple pages to a document?',
        a: 'Yes. When your content exceeds a single A4 page, a new page is added automatically. You can also manually add pages from the toolbar.',
      },
      {
        q: 'Is there a limit on the number of elements per page?',
        a: 'There is no hard limit. However, for the best performance and readability, we recommend keeping each page focused and well-organised.',
      },
    ],
    relatedLinks: [
      { title: 'Documents Overview', href: '/docs/documents' },
      { title: 'Paste Import', href: '/docs/documents/paste-import' },
      { title: 'Creating Quotations', href: '/docs/documents/quotations' },
    ],
  },

  'documents/quotations': {
    slug: 'documents/quotations',
    title: 'Creating Quotations',
    metaTitle: 'Creating Quotations — Clienter Docs',
    metaDescription:
      'Build professional quotations in Clienter with itemised pricing, taxes, discounts, and custom terms. Share instantly via public link or request e-signatures.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Quotations', href: '/docs/documents/quotations' }],
    sections: [
      {
        id: 'what-are-quotations',
        heading: 'What Are Quotations?',
        level: 2,
        content:
          'Quotations are itemised pricing documents you send to clients before starting work. They outline the scope, line items, quantities, rates, taxes, and total cost. In Clienter, quotations are built on the canvas editor so you have complete control over layout and branding.',
      },
      {
        id: 'creating-a-quotation',
        heading: 'Creating a Quotation',
        level: 2,
        content:
          'You can create a quotation manually or use the AI Quote Builder to generate one from a description.',
        steps: [
          'Go to Documents and click "New Document".',
          'Select "Quotation" as the document type.',
          'Fill in the client details at the top — name, company, email, and address.',
          'Add line items using the items table: description, quantity, rate, and tax percentage.',
          'The subtotal, tax, discount, and grand total are calculated automatically.',
          'Add any terms, notes, or validity period in the sections below the table.',
          'Click "Preview" to review, then "Share" to send it to your client.',
        ],
      },
      {
        id: 'line-items',
        heading: 'Line Items & Pricing',
        level: 3,
        content:
          'Each line item has fields for description, quantity, unit rate, and tax rate. You can add optional discount fields (percentage or flat amount) per item or at the document level. The totals section updates in real time as you edit. To reorder items, drag the handle on the left side of each row.',
      },
      {
        id: 'customising-layout',
        heading: 'Customising the Layout',
        level: 2,
        content:
          'Since quotations use the canvas editor, you can move any element. Add your logo, change colours to match your brand, reposition the terms section, or add extra text blocks for a personal note. Everything your client sees is exactly what you design.',
        callout: {
          type: 'tip',
          text: 'Save a finished quotation as a template by duplicating it. Next time, just swap out the client details and line items.',
        },
      },
      {
        id: 'sharing-quotations',
        heading: 'Sharing & Client Approval',
        level: 2,
        content:
          'Once your quotation is ready, click "Share" to generate a public link. Your client can view the quotation in their browser without needing a Clienter account. If you\'ve added a signature field, they can approve the quotation by signing directly on the shared page.',
      },
      {
        id: 'converting-to-invoice',
        heading: 'Converting a Quotation to an Invoice',
        level: 2,
        content:
          'Accepted quotations can be converted into invoices with one click. Clienter copies all the line items, pricing, and client details into a new invoice document, saving you from re-entering everything.',
        callout: {
          type: 'info',
          text: 'The original quotation is preserved and linked to the new invoice for your records.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can I add a validity period to my quotation?',
        a: 'Yes. Add a "Valid Until" date in the quotation details section. Your client will see this date on the shared link, and expired quotations display a notice.',
      },
      {
        q: 'Can I send quotations in different currencies?',
        a: 'Yes. Set the currency when creating the quotation. Clienter supports all major currencies including INR, USD, EUR, GBP, and AUD.',
      },
    ],
    relatedLinks: [
      { title: 'AI Quote Builder', href: '/docs/documents/ai-builder' },
      { title: 'Canvas Editor', href: '/docs/documents/canvas-editor' },
      { title: 'Invoices', href: '/docs/documents/invoices' },
      { title: 'Sharing Documents', href: '/docs/documents/sharing' },
    ],
  },

  'documents/contracts': {
    slug: 'documents/contracts',
    title: 'Creating Contracts',
    metaTitle: 'Creating Contracts — Clienter Docs',
    metaDescription:
      'Create and sign contracts in Clienter with two-party e-signatures, request-changes workflow, and SHA-256 tamper evidence. Compliant with IT Act 2000 Section 3A.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Contracts', href: '/docs/documents/contracts' }],
    sections: [
      {
        id: 'overview',
        heading: 'Contracts in Clienter',
        level: 2,
        content:
          'Contracts are two-party agreements built on the canvas editor. Both you and your client get dedicated signature fields, and the signing flow supports a request-changes cycle so either party can propose edits before committing. Once both parties sign, the document is sealed with a SHA-256 hash for tamper evidence.',
      },
      {
        id: 'creating-a-contract',
        heading: 'Creating a Contract',
        level: 2,
        content:
          'Start with a blank contract or paste content from an existing agreement.',
        steps: [
          'Go to Documents and click "New Document", then select "Contract".',
          'Add a title (e.g. "Website Development Agreement").',
          'Write or paste your contract clauses into text blocks on the canvas.',
          'Add signature fields for both parties — "Your Signature" and "Client Signature".',
          'Optionally add date fields that auto-fill when each party signs.',
          'Click "Share" to send the contract to your client for review and signing.',
        ],
      },
      {
        id: 'two-party-signing',
        heading: 'Two-Party Signing Flow',
        level: 2,
        content:
          'When you share a contract, your client receives a link to review the document. They can either sign it or request changes. If they request changes, you\'ll receive a notification with their comments. You can then edit the contract and re-share it. This cycle continues until both parties are satisfied and have signed.',
        callout: {
          type: 'info',
          text: 'You can sign your side of the contract before or after sharing it with your client. The order does not affect the validity of the document.',
        },
      },
      {
        id: 'request-changes',
        heading: 'Request Changes Workflow',
        level: 3,
        content:
          'The "Request Changes" button is available to the client on any unsigned contract. When they click it, a text field appears where they can describe the changes they need. You receive these requests as a notification in Clienter and via email. The contract status changes to "Changes Requested" until you update and re-share it.',
      },
      {
        id: 'tamper-evidence',
        heading: 'Tamper Evidence & Legal Compliance',
        level: 2,
        content:
          'Once both parties sign, Clienter generates a SHA-256 hash of the complete document contents and stores it alongside the signed PDF. Any modification to the document after signing would produce a different hash, making tampering immediately detectable. This approach aligns with India\'s IT Act 2000 Section 3A requirements for electronic signatures.',
        callout: {
          type: 'warning',
          text: 'Clienter provides tamper-evidence technology, not legal advice. For high-value or regulated agreements, consult a legal professional about the specific requirements in your jurisdiction.',
        },
      },
      {
        id: 'contract-status',
        heading: 'Contract Statuses',
        level: 2,
        content:
          'Contracts move through clear statuses so you always know where things stand: Draft (still being edited), Sent (shared with client, awaiting action), Changes Requested (client has asked for edits), Partially Signed (one party has signed), and Signed (both parties have signed and the document is sealed).',
      },
    ],
    faqs: [
      {
        q: 'Can I edit a contract after both parties have signed?',
        a: 'No. Once both signatures are in place, the document is sealed and locked. If changes are needed, you would create a new version or an addendum.',
      },
      {
        q: 'Does the client need a Clienter account to sign?',
        a: 'No. Clients sign directly from the shared link in their browser. No account or login is required.',
      },
    ],
    relatedLinks: [
      { title: 'E-Signatures', href: '/docs/documents/e-signature' },
      { title: 'Sharing Documents', href: '/docs/documents/sharing' },
      { title: 'Canvas Editor', href: '/docs/documents/canvas-editor' },
    ],
  },

  'documents/invoices': {
    slug: 'documents/invoices',
    title: 'Canvas-Based Invoices',
    metaTitle: 'Invoices — Clienter Docs',
    metaDescription:
      'Create branded invoices on Clienter\'s canvas editor with line items, taxes, payment terms, and shareable links. Convert quotations to invoices in one click.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Invoices', href: '/docs/documents/invoices' }],
    sections: [
      {
        id: 'overview',
        heading: 'Invoices in Clienter',
        level: 2,
        content:
          'Clienter invoices are built on the same canvas editor as all other documents, giving you full control over layout and branding. Add your logo, arrange line items, set payment terms, and share a professional invoice link — all without leaving Clienter.',
      },
      {
        id: 'creating-an-invoice',
        heading: 'Creating an Invoice',
        level: 2,
        content:
          'You can create an invoice from scratch, convert an accepted quotation, or duplicate an existing invoice.',
        steps: [
          'Go to Documents and click "New Document", then select "Invoice".',
          'Fill in your business details and the client\'s billing information.',
          'Add line items — each with a description, quantity, rate, and tax rate.',
          'Set the invoice number (auto-generated or custom), issue date, and due date.',
          'Add payment terms, bank details, or a payment link in the notes section.',
          'Preview and share the invoice via a public link.',
        ],
      },
      {
        id: 'line-items-taxes',
        heading: 'Line Items, Taxes & Discounts',
        level: 3,
        content:
          'The line-items table supports per-item tax rates (GST, VAT, or custom), quantity-based pricing, and optional discounts. Subtotal, tax breakdown, and grand total are computed automatically. For Indian businesses, you can configure CGST/SGST or IGST splits directly in the tax settings.',
      },
      {
        id: 'branding',
        heading: 'Branding Your Invoices',
        level: 2,
        content:
          'Upload your logo, set brand colours, and position elements to match your visual identity. Since invoices use the canvas editor, there are no fixed templates to fight against. Create one layout you love, then duplicate it for every new invoice.',
        callout: {
          type: 'tip',
          text: 'Consistent branding builds trust. Set up your logo and colour scheme once, duplicate the invoice, and only change the client details and line items each time.',
        },
      },
      {
        id: 'payment-terms',
        heading: 'Payment Terms & Due Dates',
        level: 2,
        content:
          'Add a due date and payment terms to every invoice. Common options include "Due on Receipt", "Net 15", "Net 30", or custom terms. The shared invoice clearly displays the due date so your client knows exactly when payment is expected.',
      },
      {
        id: 'from-quotation',
        heading: 'Converting from a Quotation',
        level: 2,
        content:
          'If you\'ve already created and had a quotation accepted, open it and click "Convert to Invoice". All line items, pricing, client details, and notes are carried over into a new invoice document. The quotation remains linked for your records.',
        callout: {
          type: 'info',
          text: 'Converting a quotation does not delete or modify the original quotation. Both documents are preserved and linked together.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can I track whether a client has viewed my invoice?',
        a: 'Yes. When a client opens the shared invoice link, Clienter logs the view. You can see view activity on the document detail page.',
      },
      {
        q: 'Does Clienter support recurring invoices?',
        a: 'Not yet, but it\'s on the roadmap. For now, you can duplicate a previous invoice and update the dates and amounts.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Quotations', href: '/docs/documents/quotations' },
      { title: 'Sharing Documents', href: '/docs/documents/sharing' },
      { title: 'Canvas Editor', href: '/docs/documents/canvas-editor' },
    ],
  },

  'documents/e-signature': {
    slug: 'documents/e-signature',
    title: 'E-Signatures',
    metaTitle: 'E-Signatures — Clienter Docs',
    metaDescription:
      'Clienter e-signatures support typed and drawn signatures with SHA-256 tamper evidence. Designed for compliance with India\'s IT Act 2000 Section 3A.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'E-Signatures', href: '/docs/documents/e-signature' }],
    sections: [
      {
        id: 'overview',
        heading: 'How E-Signatures Work',
        level: 2,
        content:
          'Clienter lets you collect legally-compliant electronic signatures on any document — contracts, quotations, or free-form documents. Signers can type their name (rendered in a signature font) or draw their signature using a mouse, trackpad, or touchscreen. No plugins, downloads, or accounts are required from the signer.',
      },
      {
        id: 'typed-vs-drawn',
        heading: 'Typed vs. Drawn Signatures',
        level: 2,
        content:
          'When a signer clicks on a signature field, they choose between two options. "Type" lets them enter their name, which is rendered in a handwriting-style font. "Draw" opens a signature pad where they can sign freehand. Both options are equally valid and produce the same tamper-evidence seal.',
        callout: {
          type: 'tip',
          text: 'On mobile devices, the draw option works beautifully with finger or stylus input. The signature pad adapts to the screen size automatically.',
        },
      },
      {
        id: 'adding-signature-fields',
        heading: 'Adding Signature Fields to a Document',
        level: 2,
        content:
          'Place signature fields anywhere on your canvas, just like any other element.',
        steps: [
          'Open your document in the canvas editor.',
          'Click the "+" button and select "Signature Field".',
          'Drag the field to the desired position on the canvas.',
          'Assign the field to a party — "You" or "Client".',
          'Optionally add a date field next to it that auto-fills when the party signs.',
        ],
      },
      {
        id: 'sha256-tamper-evidence',
        heading: 'SHA-256 Tamper Evidence',
        level: 2,
        content:
          'When all required signatures are collected, Clienter computes a SHA-256 cryptographic hash of the entire document — layout, content, and signatures included. This hash is stored alongside the signed document. If even a single character were changed after signing, the hash would not match, making any tampering immediately evident. The hash is displayed on the signed document\'s detail page for verification.',
        callout: {
          type: 'info',
          text: 'SHA-256 is a one-way cryptographic hash function used globally in security-critical applications. It is computationally infeasible to alter a document without changing its hash.',
        },
      },
      {
        id: 'it-act-compliance',
        heading: 'IT Act 2000 Section 3A Compliance',
        level: 2,
        content:
          'India\'s Information Technology Act 2000, Section 3A, recognises electronic signatures as legally valid when they are linked uniquely to the signatory, capable of identifying the signatory, created under the signatory\'s sole control, and attached to the data in a way that detects subsequent alteration. Clienter\'s e-signature implementation addresses each of these requirements through authenticated signing sessions, unique signer identification, and SHA-256 tamper-evidence hashing.',
        callout: {
          type: 'warning',
          text: 'While Clienter\'s e-signatures are designed for IT Act 2000 Section 3A compliance, they are not a substitute for digital signatures issued by a licensed Certifying Authority under Section 3 of the Act. Consult a legal professional for regulated or high-value agreements.',
        },
      },
      {
        id: 'signature-audit-trail',
        heading: 'Signature Audit Trail',
        level: 2,
        content:
          'Every signature event is logged with the signer\'s name, email, IP address, timestamp, and the device/browser used. This audit trail is accessible from the document\'s detail page and can serve as supporting evidence in case of disputes.',
      },
    ],
    faqs: [
      {
        q: 'Does the client need a Clienter account to sign?',
        a: 'No. Clients sign directly from the shared document link. They verify their identity with their email address before signing.',
      },
      {
        q: 'Can I use e-signatures on quotations?',
        a: 'Yes. You can add signature fields to any document type — quotations, contracts, invoices, or free-form documents.',
      },
      {
        q: 'What happens if I edit a document after it has been signed?',
        a: 'Signed documents are locked and cannot be edited. If changes are needed, you must create a new version of the document.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Contracts', href: '/docs/documents/contracts' },
      { title: 'Sharing Documents', href: '/docs/documents/sharing' },
      { title: 'Documents Overview', href: '/docs/documents' },
    ],
  },

  'documents/sharing': {
    slug: 'documents/sharing',
    title: 'Sharing Documents',
    metaTitle: 'Sharing Documents — Clienter Docs',
    metaDescription:
      'Share Clienter documents via public links or multi-document share pages. Clients can view, sign, and download without creating an account.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Sharing', href: '/docs/documents/sharing' }],
    sections: [
      {
        id: 'overview',
        heading: 'Sharing Options',
        level: 2,
        content:
          'Clienter gives you two ways to share documents with clients: individual public links for single documents, and multi-document share pages when you need to send several documents together (e.g. a quotation and a contract as a package). Both options work without the client needing a Clienter account.',
      },
      {
        id: 'public-links',
        heading: 'Public Links',
        level: 2,
        content:
          'Every document can be shared via a unique public link. The link opens a read-only view of your document that matches the canvas layout exactly. If the document contains signature fields, the client can sign directly from this link.',
        steps: [
          'Open the document you want to share.',
          'Click the "Share" button in the top-right corner.',
          'Copy the generated public link.',
          'Send the link to your client via email, chat, or any other channel.',
        ],
        callout: {
          type: 'info',
          text: 'Public links are active until you revoke them. You can disable a link at any time from the document\'s share settings.',
        },
      },
      {
        id: 'multi-doc-share',
        heading: 'Multi-Document Share Pages',
        level: 2,
        content:
          'When a deal involves multiple documents — say a quotation, a scope document, and a contract — you can bundle them into a single share page. Your client gets one link that opens a branded page listing all the documents, and they can open each one individually.',
        steps: [
          'Select the documents you want to bundle (use checkboxes in the document list).',
          'Click "Share Selected" from the bulk actions bar.',
          'Customise the share page title if needed.',
          'Copy the single share-page link and send it to your client.',
        ],
      },
      {
        id: 'view-tracking',
        heading: 'View Tracking',
        level: 2,
        content:
          'Clienter logs when a client opens your shared link, including the timestamp and general location. This helps you follow up at the right time — if a client viewed your quotation three days ago but hasn\'t responded, that\'s a good moment to send a gentle reminder.',
      },
      {
        id: 'revoking-access',
        heading: 'Revoking Access',
        level: 3,
        content:
          'To revoke a shared link, open the document, go to Share settings, and click "Disable Link". The link immediately stops working. You can re-enable it later if needed, and the same URL will work again.',
        callout: {
          type: 'warning',
          text: 'Revoking a link does not unsign a document. If a client has already signed, the signed version is preserved.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can clients download a shared document as PDF?',
        a: 'Yes. The shared document page includes a download option that generates a high-quality PDF matching the canvas layout.',
      },
      {
        q: 'Is there a limit on the number of share links I can create?',
        a: 'No. You can create share links for all your documents on any plan.',
      },
    ],
    relatedLinks: [
      { title: 'E-Signatures', href: '/docs/documents/e-signature' },
      { title: 'Documents Overview', href: '/docs/documents' },
      { title: 'Linked Documents', href: '/docs/documents/linked-docs' },
    ],
  },

  'documents/paste-import': {
    slug: 'documents/paste-import',
    title: 'Paste Import',
    metaTitle: 'Paste from Word, Docs & Canva — Clienter Docs',
    metaDescription:
      'Paste content from Microsoft Word, Google Docs, Canva, and other tools directly into Clienter\'s canvas editor. Formatting is preserved automatically.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Paste Import', href: '/docs/documents/paste-import' }],
    sections: [
      {
        id: 'overview',
        heading: 'Import Content by Pasting',
        level: 2,
        content:
          'Already have a contract drafted in Word or a proposal designed in Canva? Instead of rebuilding from scratch, you can paste content directly into Clienter\'s canvas editor. Clienter reads the clipboard\'s rich-text data and converts headings, paragraphs, bold/italic formatting, lists, and tables into native canvas elements.',
      },
      {
        id: 'supported-sources',
        heading: 'Supported Sources',
        level: 2,
        content:
          'Paste import works with any application that copies rich text (HTML) to the clipboard. The most common sources include:',
        steps: [
          'Microsoft Word — Select text in Word, copy (Ctrl/Cmd + C), and paste into the canvas.',
          'Google Docs — Copy from Docs and paste. Headings, lists, and basic formatting are preserved.',
          'Canva — Copy text elements from Canva designs. Note that complex layouts may simplify to text blocks.',
          'Notion, Confluence, and other rich-text editors — Most formatting carries over cleanly.',
        ],
      },
      {
        id: 'how-to-paste',
        heading: 'How to Paste',
        level: 2,
        content:
          'Pasting is straightforward — just use your standard paste shortcut.',
        steps: [
          'Copy content from your source application (Ctrl/Cmd + C).',
          'Open a document in Clienter\'s canvas editor.',
          'Click on the canvas where you want the content to appear.',
          'Paste with Ctrl/Cmd + V.',
          'The content appears as one or more canvas elements. Rearrange and edit as needed.',
        ],
        callout: {
          type: 'tip',
          text: 'If formatting looks off, try pasting into a fresh text block. You can also use Ctrl/Cmd + Shift + V to paste as plain text and format manually.',
        },
      },
      {
        id: 'what-is-preserved',
        heading: 'What Is Preserved',
        level: 3,
        content:
          'Headings (H1-H3), bold, italic, underline, numbered and bulleted lists, tables (rows and columns), and hyperlinks are preserved. Images pasted inline are converted to image elements on the canvas. Font-specific styling (custom fonts, colours) may revert to Clienter\'s default styles — you can restyle them using the formatting toolbar.',
      },
      {
        id: 'limitations',
        heading: 'Known Limitations',
        level: 2,
        content:
          'Complex multi-column layouts, embedded charts, and interactive elements (e.g. form fields from Canva) do not transfer. These are simplified to text or omitted. For best results, paste text-heavy content and add visual elements using the canvas editor\'s built-in tools.',
        callout: {
          type: 'info',
          text: 'If you need to bring in a full design from Canva, consider exporting it as a PDF and using it as a reference while rebuilding in the canvas editor.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can I paste images from Word or Docs?',
        a: 'Yes. Inline images are imported as image elements on the canvas. Very large images may be resized to fit the page.',
      },
      {
        q: 'Does paste import work on mobile?',
        a: 'Paste import works on tablets. On phones, the canvas editor is optimised for viewing and light edits rather than full document creation.',
      },
    ],
    relatedLinks: [
      { title: 'Canvas Editor', href: '/docs/documents/canvas-editor' },
      { title: 'Documents Overview', href: '/docs/documents' },
    ],
  },

  'documents/ai-builder': {
    slug: 'documents/ai-builder',
    title: 'AI Quote Builder',
    metaTitle: 'AI Quote Builder — Clienter Docs',
    metaDescription:
      'Generate professional quotations with AI in Clienter. Describe your project in plain English and get a complete quote with line items, pricing, and terms.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'AI Quote Builder', href: '/docs/documents/ai-builder' }],
    planBadge: 'Free',
    sections: [
      {
        id: 'overview',
        heading: 'What Is the AI Quote Builder?',
        level: 2,
        content:
          'The AI Quote Builder lets you generate a complete quotation document from a plain-English description. Describe the project scope, and the AI produces line items with quantities, rates, taxes, payment terms, and a professional layout — all on the canvas editor, ready to customise and send.',
      },
      {
        id: 'how-to-use',
        heading: 'Generating a Quote with AI',
        level: 2,
        content:
          'Using the AI Quote Builder takes less than a minute.',
        steps: [
          'Go to Documents and click "New Document".',
          'Select "Quotation" and then click "Generate with AI".',
          'In the prompt field, describe the project — for example: "5-page WordPress website with e-commerce, SEO setup, and 3 months of maintenance."',
          'Optionally set the currency and your default tax rate.',
          'Click "Generate" and wait a few seconds.',
          'The AI produces a full quotation on the canvas. Review and edit the line items, pricing, and terms.',
          'Share the finalised quotation with your client.',
        ],
      },
      {
        id: 'editing-ai-output',
        heading: 'Editing the Generated Quote',
        level: 2,
        content:
          'The AI-generated quotation is fully editable — it\'s just a regular canvas document. Adjust line-item descriptions, change quantities or rates, add or remove rows, update the terms, or rearrange the layout. The AI gives you a strong starting point; you make it yours.',
        callout: {
          type: 'tip',
          text: 'Always review AI-generated pricing before sending. The AI bases its estimates on your description, but you know your actual rates best.',
        },
      },
      {
        id: 'plan-limits',
        heading: 'Usage Limits by Plan',
        level: 2,
        content:
          'The AI Quote Builder is available on all plans with the following monthly limits:',
        steps: [
          'Free plan — 3 AI-generated quotes per month.',
          'Pro plan — 25 AI-generated quotes per month.',
          'Ultra plan — Unlimited AI-generated quotes.',
        ],
        callout: {
          type: 'info',
          text: 'Limits reset on the 1st of each month. Editing an AI-generated quote after creation does not count as an additional use.',
        },
      },
      {
        id: 'tips-for-better-results',
        heading: 'Tips for Better Results',
        level: 2,
        content:
          'The more detail you provide in your prompt, the better the output. Include specifics like the number of deliverables, technologies involved, timeline, and any recurring costs. Mentioning your industry (e.g. web development, graphic design, marketing) helps the AI choose appropriate terminology.',
        steps: [
          'Be specific — "10 social media posts with captions and hashtags" beats "social media content".',
          'Mention your pricing model — hourly, per-project, or retainer.',
          'Include your currency and tax expectations in the prompt or settings.',
          'If the first result isn\'t perfect, tweak your description and regenerate — or just edit the canvas directly.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does the AI use my previous quotations to generate new ones?',
        a: 'No. The AI generates quotations based solely on your prompt. Your existing documents are not accessed or analysed.',
      },
      {
        q: 'Can I use the AI builder for invoices or contracts?',
        a: 'Currently, the AI builder is designed for quotations. Contract and invoice generation may be added in the future.',
      },
      {
        q: 'What happens when I reach my monthly limit?',
        a: 'You can still create quotations manually using the canvas editor. The limit only applies to AI-generated quotes. Upgrading your plan increases the limit.',
      },
    ],
    relatedLinks: [
      { title: 'Creating Quotations', href: '/docs/documents/quotations' },
      { title: 'Canvas Editor', href: '/docs/documents/canvas-editor' },
      { title: 'Pricing Plans', href: '/pricing' },
    ],
  },

  'documents/bulk-actions': {
    slug: 'documents/bulk-actions',
    title: 'Bulk Actions',
    metaTitle: 'Bulk Select, Archive & Delete Documents — Clienter Docs',
    metaDescription:
      'Use bulk actions in Clienter to select, archive, or delete multiple documents at once. Keep your document library clean and organised.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Bulk Actions', href: '/docs/documents/bulk-actions' }],
    sections: [
      {
        id: 'overview',
        heading: 'Bulk Actions Overview',
        level: 2,
        content:
          'When your document library grows, bulk actions help you stay organised. Select multiple documents at once and archive or delete them in a single action. Bulk actions are available from the main Documents list view.',
      },
      {
        id: 'selecting-documents',
        heading: 'Selecting Multiple Documents',
        level: 2,
        content:
          'Enter selection mode and pick the documents you want to act on.',
        steps: [
          'Open the Documents section from the sidebar.',
          'Click the checkbox on any document card to enter selection mode.',
          'Select additional documents by clicking their checkboxes. Use "Select All" to select everything on the current page.',
          'The bulk actions bar appears at the bottom of the screen showing the count of selected documents.',
        ],
      },
      {
        id: 'archiving',
        heading: 'Archiving Documents',
        level: 2,
        content:
          'Archiving removes documents from your active list without deleting them permanently. Archived documents can be found in the "Archived" filter and restored at any time.',
        steps: [
          'Select the documents you want to archive.',
          'Click "Archive" in the bulk actions bar.',
          'Confirm the action. The documents move to the Archived section.',
          'To restore, switch to the Archived filter, select the documents, and click "Restore".',
        ],
        callout: {
          type: 'tip',
          text: 'Archive completed or expired documents regularly to keep your active list focused on current work.',
        },
      },
      {
        id: 'deleting',
        heading: 'Deleting Documents',
        level: 2,
        content:
          'Deleting permanently removes documents from your account. This action cannot be undone.',
        steps: [
          'Select the documents you want to delete.',
          'Click "Delete" in the bulk actions bar.',
          'A confirmation dialog lists the documents that will be deleted. Review carefully.',
          'Click "Confirm Delete" to proceed.',
        ],
        callout: {
          type: 'warning',
          text: 'Deleted documents cannot be recovered. If a document has been signed, we strongly recommend archiving it instead of deleting so you retain the signed record.',
        },
      },
      {
        id: 'shared-link-impact',
        heading: 'Impact on Shared Links',
        level: 3,
        content:
          'Archiving a document does not disable its shared link — clients can still view and sign archived documents. Deleting a document permanently disables all shared links associated with it.',
      },
    ],
    faqs: [
      {
        q: 'Is there a limit on how many documents I can select at once?',
        a: 'No. You can select all documents on the current page or across multiple pages using "Select All".',
      },
      {
        q: 'Can I bulk-share documents?',
        a: 'Yes. Select multiple documents and use "Share Selected" to create a multi-document share page with a single link.',
      },
    ],
    relatedLinks: [
      { title: 'Documents Overview', href: '/docs/documents' },
      { title: 'Sharing Documents', href: '/docs/documents/sharing' },
    ],
  },

  'documents/linked-docs': {
    slug: 'documents/linked-docs',
    title: 'Linked Documents',
    metaTitle: 'Linked Documents on Clients, Projects & Leads — Clienter Docs',
    metaDescription:
      'Link documents to clients, projects, and leads in Clienter so every quotation, contract, and invoice appears in context where you need it.',
    breadcrumbs: [BASE, DOCS_SECTION, { label: 'Linked Documents', href: '/docs/documents/linked-docs' }],
    sections: [
      {
        id: 'overview',
        heading: 'What Are Linked Documents?',
        level: 2,
        content:
          'Linked documents connect your quotations, contracts, invoices, and other documents to the clients, projects, or leads they belong to. Instead of searching through a flat list, you can open a client\'s profile and see every document associated with them — organised and in context.',
      },
      {
        id: 'linking-a-document',
        heading: 'Linking a Document',
        level: 2,
        content:
          'You can link a document when creating it or after the fact.',
        steps: [
          'When creating a new document, use the "Link to" dropdown to select a client, project, or lead.',
          'For an existing document, open it and click the link icon in the document header.',
          'Search for and select the client, project, or lead you want to link to.',
          'The document now appears in that entity\'s Documents tab.',
        ],
        callout: {
          type: 'info',
          text: 'A single document can be linked to one client, one project, and one lead simultaneously. For example, a quotation might be linked to both the client and the project it belongs to.',
        },
      },
      {
        id: 'viewing-linked-docs',
        heading: 'Viewing Linked Documents',
        level: 2,
        content:
          'Navigate to any client, project, or lead detail page and look for the Documents tab or section. All linked documents appear there with their type (quotation, contract, invoice), status (draft, sent, signed), and creation date. Click any document to open it in the canvas editor.',
      },
      {
        id: 'unlinking',
        heading: 'Unlinking a Document',
        level: 3,
        content:
          'To remove a link, open the document, click the link icon, and remove the association. The document itself is not affected — it simply no longer appears in that client\'s, project\'s, or lead\'s Documents tab.',
      },
      {
        id: 'automatic-linking',
        heading: 'Automatic Linking',
        level: 2,
        content:
          'When you create a document from within a client\'s or project\'s page (using the "New Document" button in their Documents tab), Clienter automatically links the document to that entity. The same applies when converting a quotation to an invoice — the new invoice inherits the quotation\'s links.',
        callout: {
          type: 'tip',
          text: 'Create documents from within the client or project page whenever possible. It saves a step and ensures nothing goes unlinked.',
        },
      },
    ],
    faqs: [
      {
        q: 'Can I link a document to multiple clients?',
        a: 'Each document links to one client. If a document involves multiple parties, link it to the primary client and mention others in the document itself.',
      },
      {
        q: 'Does unlinking a document delete it?',
        a: 'No. Unlinking removes the association but the document remains in your Documents library.',
      },
    ],
    relatedLinks: [
      { title: 'Documents Overview', href: '/docs/documents' },
      { title: 'Sharing Documents', href: '/docs/documents/sharing' },
      { title: 'Bulk Actions', href: '/docs/documents/bulk-actions' },
    ],
  },
}
