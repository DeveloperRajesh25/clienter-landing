import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'freelance-invoice-format-india',
  title: 'Freelance Invoice Format India: What to Include and Why',
  description:
    'The complete freelance invoice format for India: every field to include, when GST applies, numbering rules, and how to get paid faster. Free template.',
  date: '2026-07-05',
  author: 'Talagana Rajesh',
  category: 'Freelance business',
  categorySlug: 'freelance-business',
  tags: ['invoicing', 'gst', 'india'],
  primaryKeyword: 'freelance invoice format india',
  updated: '2026-10-04',
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

    { type: 'h2', text: 'TDS: why the client paid less than you invoiced', id: 'tds' },
    { type: 'p', text: 'This surprises almost every Indian freelancer once. You invoice ₹50,000, the client transfers ₹45,000, and nothing is wrong — they have deducted tax at source and paid it to the government against your PAN. It is not a discount or a dispute; it is an advance on your own income tax.' },
    { type: 'p', text: 'Three practical consequences. First, the deducted amount is credited to you, so it is not lost — it appears against your PAN and you claim it when you file, which means it can produce a refund if your actual liability is lower. Second, ask the client for the TDS certificate (Form 16A) for each quarter they deduct, because reconciling without it is tedious. Third, record the deduction against the invoice rather than treating the invoice as short-paid, or your own records will tell you a client owes money they have in fact paid.' },
    { type: 'p', text: 'The rate and the threshold depend on the nature of the service and change with the finance act, so confirm the current figures with your CA rather than from a blog post — including this one. What does not change is the habit: invoice the gross amount, expect the net, and record the difference as TDS.' },

    { type: 'h2', text: 'Invoicing international clients from India', id: 'international' },
    { type: 'p', text: 'An invoice to a client abroad is a different document from a domestic one, and getting it wrong creates problems at the bank rather than with the client.' },
    { type: 'p', text: 'Practical points. State the currency explicitly on the invoice — "USD 1,200" not "$1,200" — because the symbol is ambiguous across several currencies. Describe the service precisely, since the description is what your bank and your accountant will read when classifying the receipt. Include your full address and the client’s, because cross-border payments are documentation-sensitive. And keep the invoice, the contract and the payment advice together, because for export of services your bank will want a paper trail, and that trail is also what supports the zero-rated treatment your CA will advise on.' },
    { type: 'p', text: 'The GST treatment of services exported from India is a genuine area of nuance — it depends on where the recipient is, how payment is received, and whether you have registered. It is one of the few places in freelance admin where a professional opinion is worth more than it costs. Ask once, set your template up correctly, and then stop thinking about it.' },

    { type: 'h2', text: 'The mistakes that delay payment', id: 'mistakes' },
    { type: 'ol', items: [
      'Sending the invoice to the person who hired you rather than to accounts. Ask during onboarding who should receive invoices, and whether a purchase order number is needed.',
      'Omitting the PO number where the client uses them. In many companies an invoice without one is not short-paid, it is unprocessable.',
      'Reusing or skipping invoice numbers. A series with gaps or duplicates is a problem at audit and it looks careless to the client.',
      'No due date, or a vague one. "Net 15" with the actual date spelled out is harder to deprioritise than "payable on receipt".',
      'Missing or wrong GSTIN, PAN or bank details — the single most common reason an invoice sits in a queue while nobody tells you.',
      'Sending it late. An invoice raised a week after delivery signals that the date was never important.',
    ] },

    { type: 'h2', text: 'Manual invoices vs a tool', id: 'manual-vs-tool' },
    { type: 'p', text: 'You can build invoices from a template, and a free invoice generator or the template below will get you a clean one in minutes. But once you’re raising invoices regularly, doing it by hand becomes a chore — retyping client details, remembering the next number, tracking who’s paid.' },
    { type: 'p', text: 'A tool that raises GST-ready invoices from your client and project records removes all of that. Clienter numbers your invoices automatically, fills in client details, applies GST correctly, and tracks which invoices are paid or outstanding — so invoicing stops being the admin that eats your month-end.' },
  ],
  faqs: [
    { q: 'Why did my client pay less than my invoice amount?', a: 'Almost always TDS — tax deducted at source. The client withholds a percentage and pays it to the government against your PAN, so it is an advance on your own income tax rather than a reduction in your fee. Ask for the TDS certificate (Form 16A) each quarter, record the deduction against the invoice rather than treating it as unpaid, and claim the credit when you file. Current rates and thresholds change, so confirm them with your CA.' },
    { q: 'How should I invoice an international client from India?', a: 'State the currency in words and code rather than relying on a symbol, describe the service precisely because your bank and accountant will read that description, include both full addresses, and keep the invoice, contract and payment advice together as a set — cross-border receipts are documentation-sensitive. The GST treatment of exported services has real nuance, so get a professional opinion once and set your template up accordingly.' },
    { q: 'What is the most common reason a freelance invoice is paid late?', a: 'It reached the wrong person, or it is missing something that makes it unprocessable — a purchase order number the client requires, a GSTIN, correct bank details. Ask during onboarding who should receive invoices and whether a PO is needed; that one question prevents a large share of late payments.' },
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
