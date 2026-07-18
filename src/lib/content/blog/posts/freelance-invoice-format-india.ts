import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'freelance-invoice-format-india',
  title: 'Freelance Invoice Format India: What to Include and Why',
  description:
    'The complete freelance invoice format for India — every field to include, when GST applies, invoice numbering rules, and how to get paid faster. With a free template.',
  date: '2026-07-05',
  author: 'Talagana Rajesh',
  category: 'Freelance business',
  categorySlug: 'freelance-business',
  tags: ['invoicing', 'gst', 'india'],
  primaryKeyword: 'freelance invoice format india',
  intro:
    'Getting your freelance invoice format right in India does more than look professional — it gets you paid faster, keeps you compliant if GST applies, and saves you headaches at tax time. Yet most freelancers cobble invoices together from a Word template and hope they’ve included everything. This guide covers exactly what a freelance invoice in India should contain, when and how GST fits in, and the small details that make clients pay on time.',
  body: [
    { type: 'h2', text: 'What every freelance invoice must include', id: 'what-to-include' },
    { type: 'p', text: 'Whether or not you’re registered for GST, a proper invoice needs a core set of fields. Missing any of them creates confusion, delays payment, or causes problems in your records. At a minimum, include:' },
    { type: 'ul', items: [
      'Your name or business name, address, and contact details',
      'Your PAN (and GSTIN if you’re registered for GST)',
      'The client’s name and address (and their GSTIN if applicable)',
      'A unique, consecutive invoice number',
      'The invoice date and the payment due date',
      'A clear description of the service, with quantity and rate',
      'The amount, any taxes, and the total payable',
      'Your payment details — UPI ID and/or bank account with IFSC',
    ] },
    { type: 'p', text: 'The amount in words is a nice touch on formal invoices, and a short note stating your payment terms (“due within 15 days”) sets expectations clearly.' },

    { type: 'h2', text: 'When GST applies — and how to show it', id: 'gst' },
    { type: 'p', text: 'Whether you charge GST depends on whether you’re registered, which in turn depends on your turnover and the nature of your services. If you’re not registered, you simply raise an invoice without GST. If you are registered, your invoice becomes a tax invoice and must show the tax correctly.' },
    { type: 'p', text: 'The tax split depends on where the supply happens:' },
    { type: 'ul', items: [
      'Within your state — GST is split equally into CGST and SGST (for example, 18% becomes 9% + 9%)',
      'Between states (inter-state) — the same total is charged as a single IGST',
    ] },
    { type: 'p', text: 'Show the taxable value, the rate, and the CGST/SGST or IGST amounts separately so your client can claim input credit. The correct rate depends on the SAC code for your service — most professional and creative services fall at 18%, but confirm the code and rate that apply to you.' },
    { type: 'callout', text: 'Not registered for GST? You don’t charge it — just raise a clean invoice without the tax lines. Only register when your turnover or situation requires it; check the current thresholds.' },

    { type: 'h2', text: 'Invoice numbering rules', id: 'numbering' },
    { type: 'p', text: 'Invoice numbers seem trivial until they cause a problem. Under GST, they must be consecutive and unique within a financial year, with no gaps. Even if you’re not registered, a clean numbering scheme keeps your records sortable and professional.' },
    { type: 'p', text: 'A reliable format combines a prefix, the financial year, and a zero-padded sequence — for example, INV/2026-27/001. Reset the sequence at the start of each financial year, and never skip or reuse a number; if you cancel an invoice, mark it cancelled rather than reusing its number.' },

    { type: 'h2', text: 'Details that get you paid faster', id: 'get-paid-faster' },
    { type: 'p', text: 'A correct invoice is the baseline; a few extra habits shorten the time to payment:' },
    { type: 'ol', items: [
      'Send it promptly — the payment clock only starts once the invoice reaches the client',
      'State a clear due date, not just “on receipt”',
      'Make paying effortless — include your UPI ID and bank details right on the invoice',
      'Take an advance on larger projects so you’re never fully exposed',
      'Follow up with a gentle, specific reminder a few days after the due date',
    ] },

    { type: 'h2', text: 'Manual invoices vs a tool', id: 'manual-vs-tool' },
    { type: 'p', text: 'You can build invoices from a template, and a free invoice generator or the template below will get you a clean one in minutes. But once you’re raising invoices regularly, doing it by hand becomes a chore — retyping client details, remembering the next number, tracking who’s paid.' },
    { type: 'p', text: 'A tool that raises GST-ready invoices from your client and project records removes all of that. Clienter numbers your invoices automatically, fills in client details, applies GST correctly, and tracks which invoices are paid or outstanding — so invoicing stops being the admin that eats your month-end.' },
  ],
  faqs: [
    { q: 'What should a freelance invoice in India include?', a: 'Your details and PAN (plus GSTIN if registered), the client’s details, a unique consecutive invoice number, the date and due date, a clear service description with rate, the amount and any GST, the total, and your UPI/bank payment details.' },
    { q: 'Do freelancers have to charge GST in India?', a: 'Only if you’re registered for GST, which depends on your turnover and services. If registered, raise a tax invoice with CGST/SGST (same state) or IGST (inter-state). If not, a simple invoice without GST is fine. Check the current registration thresholds.' },
    { q: 'How should I number my freelance invoices?', a: 'Use a consecutive, unique series within each financial year with no gaps — a format like INV/2026-27/001 works well. Reset the sequence each financial year and never reuse a number; mark cancelled invoices as cancelled.' },
    { q: 'How do I get clients to pay invoices faster?', a: 'Send invoices promptly, state a clear due date, include UPI and bank details so paying is easy, take advances on big projects, and follow up with a specific reminder soon after the due date. Tracking dues means you always know who to chase.' },
  ],
  related: [
    { href: '/tools/gst-invoice-generator', label: 'GST Invoice Generator', desc: 'Build a correct GST invoice draft.' },
    { href: '/templates/invoice-template-india', label: 'Invoice Template (India)', desc: 'A free invoice layout to copy.' },
    { href: '/features/invoicing', label: 'Invoicing', desc: 'Automatic GST invoices in Clienter.' },
  ],
}
