/**
 * Shared FAQ content — the single source for the landing-page accordion, the
 * dedicated /faq page, and the FAQPage structured data. Keeping one list means
 * the rich-result schema can never drift from what users actually read.
 *
 * Answers are plain text (no markup) so they're valid for schema.org/Answer.
 */
export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: 'What is Clienter?',
    a: 'Clienter is an all-in-one client management platform for agencies and freelancers. It brings leads, quotations, e-signed contracts, projects, a branded client portal, invoices and payment tracking into one login, so you can stop juggling spreadsheets, chat threads and half a dozen separate tools.',
  },
  {
    q: 'Who is Clienter built for?',
    a: 'Agencies of roughly 2 to 15 people and established freelancers with five or more clients, anywhere in the world. India is the largest early user base, and GST-compliant invoicing is one of Clienter’s strengths, but it is not an India-only product. It works for developers, designers, writers, marketers and any service business. If you have one or two clients and a notes app is coping, you probably do not need it yet.',
  },
  {
    q: 'Do I need a credit card to start?',
    a: 'No. The Free plan is genuinely free forever — no card required. You only upgrade when your client and project count outgrows it.',
  },
  {
    q: 'How much does Clienter cost?',
    a: 'Three plans. Free is $0 forever: up to 3 clients, 5 projects, 1 teammate and 20 active leads, plus the client portal for one client and Google Calendar sync. Pro is $19 a month, or ₹199 a month if you bill in India: up to 20 clients, 40 projects, 5 team members and 200 active leads, the portal for every client, auto-invoiced retainers and lead reminders. Ultra is $39 a month, or ₹799 in India: unlimited clients, projects, leads and team members, plus payroll, white-label branding, a custom portal domain and lead integrations. Outside India you pay in USD through PayPal; in India you pay in INR through Razorpay. Start free and upgrade whenever you outgrow it.',
  },
  {
    q: 'Which currencies can I invoice my clients in?',
    a: 'About 30, and you can set a different currency for each client. Every line item can carry its own custom tax rate, and invoices for India are GST-compliant with your GSTIN and the CGST/SGST split. There are no country-specific VAT or sales-tax invoice formats beyond that, so check a sample invoice against your local requirements before you rely on it. Every invoice exports as a branded PDF in one click.',
  },
  {
    q: 'Can I add my team?',
    a: 'Yes — even the Free plan includes one teammate. On Pro you can add up to 5 developers or designers, assign them to projects, and track their payments. Ultra removes the limit entirely (and adds team payroll) so you can run a full agency.',
  },
  {
    q: 'How do verified client reviews work?',
    a: 'When you mark a project as completed, your client is automatically invited to leave a 1–5 star review inside the portal they already use. Because every review is tied to a real client on a real completed project — and you cannot edit or delete them — they are genuinely verified. You get a public review page at your own agency slug and a copy-paste embeddable badge for your website, free on every plan.',
  },
  {
    q: 'Does Clienter collect payments from my clients?',
    a: 'No. Your clients pay you directly — bank transfer, UPI, card, however you already work. Clienter issues the invoice, sends the reminders, lets you record the payment and review proof of payment, and keeps the running total of what each client owes. The money never passes through Clienter, so there is no payment fee and no settlement wait.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your data is isolated per account with row-level security and encrypted in transit. We never sell or share your client information, and you can export everything at any time.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'You keep full access to export your clients, projects, and invoices. We never hold your data hostage — if you downgrade or cancel, your information stays yours.',
  },
  {
    q: 'Can I use Clienter on my phone?',
    a: 'Yes. Clienter is fully responsive and works in any modern mobile browser, with a native-app-style layout. You can also add it to your home screen as a progressive web app.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Plans are billed monthly rather than annually, so the most you are ever exposed to is one month. Cancelling stops future charges and you keep access to the end of the period you have paid for. We do not refund a charge already taken — the Free plan is there so you can try the whole product first. See our Refund & Cancellation Policy for details.',
  },
]

/** The shorter set shown on the landing page. */
export const HOME_FAQS = FAQS.slice(0, 6)
