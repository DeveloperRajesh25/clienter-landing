import type { GlossaryTermConfig } from './_type'

/**
 * Invoicing & Finance glossary terms. Each term defines a money concept an
 * Indian freelancer or agency meets in practice, then links to the relevant
 * Clienter feature and related terms. Tax figures are kept general on purpose —
 * rates and thresholds change, so readers are told to check the current ones.
 */
export const FINANCE_TERMS: GlossaryTermConfig[] = [
  {
    slug: 'invoice',
    term: 'Invoice',
    path: '/glossary/invoice',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is an Invoice? Meaning for Indian Freelancers',
    metaDescription:
      'Invoice meaning explained for freelancers: what an invoice is, what every bill must include, how it differs from a quote, and how to get paid on time.',
    keywords: ['invoice meaning', 'what is an invoice', 'invoice for freelancers'],
    definition:
      'An invoice is a formal document a freelancer or business sends a client that lists the work done, the amount owed, taxes like GST, and how and by when to pay — it is the request that turns finished work into money in the bank.',
    body: [
      'An invoice is the bill you send after doing the work. It records what you delivered, how much it costs, any taxes such as GST, and the date the payment is due. Until you raise one, a client has nothing to pay against — the invoice is what turns a casual “I’ll pay you” into a trackable, on-record obligation. For a freelancer in India, a clean invoice is also your proof of income when you file taxes or apply for a loan.',
      'A proper invoice has a predictable set of fields: a unique invoice number, the date, your name and address (and GSTIN if you are registered), the client’s details, a line-by-line description of the work with quantities and rates, the subtotal, the tax, and the total payable. If you charge GST, the invoice must split it correctly — CGST and SGST for a client in your own state, or IGST for a client in another state. A missing invoice number or a wrong tax split is exactly the kind of small error that delays payment.',
      'The invoice is different from a quotation or a proforma invoice, which come before the work and only estimate the cost. The tax invoice is the real, final document raised once the work is agreed or delivered, and it is the one that counts for your accounts and for GST. Sending a quote when the client expected a tax invoice — or the reverse — is a common mix-up that confuses both the client and your own books.',
      'Getting invoices right is really about getting paid. Number them in sequence so you and the tax department can follow the trail, state clear payment terms like “Net 15” or “due on receipt”, and send the invoice the moment the work is signed off rather than weeks later. In India, where payments can stretch for months, a prompt, professional, unambiguous invoice is one of the few levers a freelancer actually controls.',
      'Keeping every invoice in one place — instead of scattered across email drafts and word-processor files — also means you can see at a glance who has paid, who is overdue, and how much you have genuinely earned this quarter. That single view is what separates a freelancer who runs a business from one who just does the work and hopes the money follows.',
    ],
    clienterNote:
      'Clienter raises GST-ready invoices in a few clicks: add your GSTIN, pick the client, and it applies CGST/SGST or IGST correctly, numbers the invoice for you, and tracks whether it is paid, pending, or overdue — with the earnings flowing straight into your live profit view.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Raise GST-ready invoices fast.' },
      { href: '/invoice', label: 'Free Invoice Tool', desc: 'Create an invoice online.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Clients and billing together.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Proforma invoice', slug: 'proforma-invoice' },
      { term: 'GST', slug: 'gst' },
      { term: 'Net 30', slug: 'net-30' },
    ],
  },
  {
    slug: 'proforma-invoice',
    term: 'Proforma invoice',
    path: '/glossary/proforma-invoice',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is a Proforma Invoice? Meaning & When to Use',
    metaDescription:
      'Proforma invoice meaning explained: how it differs from a tax invoice, why freelancers send one to unlock payment, and when to convert it to a real bill.',
    keywords: ['proforma invoice meaning', 'what is a proforma invoice', 'proforma vs tax invoice'],
    definition:
      'A proforma invoice is a preliminary bill sent before work begins or goods ship — it shows the client the expected items, amounts, and taxes so they can approve or arrange payment, but it is not a final tax invoice and does not record a sale.',
    body: [
      'A proforma invoice is a “here’s what it will cost” document you send before the work is done or the goods are delivered. It looks almost identical to a real invoice — same layout, same line items, same tax breakup — but it is clearly marked “Proforma” and carries no weight as a completed sale. Think of it as a firm, itemised estimate a client can take to their finance team to release an advance or raise a purchase order.',
      'Freelancers and agencies in India use proforma invoices mostly to unlock payment before starting. A corporate client’s accounts department often cannot pay against a casual email; they need a formal document to process an advance or an approval. A proforma gives them exactly that, without you having to book the income or account for the GST yet — because a proforma is not the tax invoice and should never be recorded as one.',
      'The key distinction is timing and legal status. A proforma comes before the deal is final and can still change; the tax invoice comes after, is fixed and sequentially numbered, and is the document that actually counts for GST and your accounts. You should never enter a proforma in your GST returns. Once the client confirms and pays, or the work is delivered, you convert the proforma into a proper tax invoice with its own invoice number.',
      'A good proforma still includes everything the client needs to decide: your details, their details, a clear description of the scope, the amounts, the expected tax (and your GSTIN if you are registered), and a validity date after which the quote may change. Adding a line such as “This is a proforma invoice and not a tax invoice” removes any doubt about its status and keeps both sides’ books clean.',
      'For a freelancer, the proforma is a quiet but powerful tool. It makes you look organised to a corporate buyer, it front-loads the payment conversation before you have spent hours on the work, and it protects you from starting on nothing more than a verbal yes. Used well, it is the bridge between a quotation and money in your account.',
    ],
    clienterNote:
      'In Clienter you can send a quotation or proforma-style document to get a client’s approval, then convert it into a numbered GST tax invoice once they say yes — so the estimate and the final bill stay linked instead of living as two disconnected files.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Quotes and invoices in one place.' },
      { href: '/invoice', label: 'Free Invoice Tool', desc: 'Create an invoice online.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Every client and quote in one profile.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Invoice', slug: 'invoice' },
      { term: 'Quotation', slug: 'quotation' },
      { term: 'Purchase order', slug: 'purchase-order' },
    ],
  },
  {
    slug: 'purchase-order',
    term: 'Purchase order',
    path: '/glossary/purchase-order',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is a Purchase Order (PO)? Meaning for Agencies',
    metaDescription:
      'Purchase order meaning explained for freelancers and agencies: what a PO is, why clients need one before they can pay, and how it fits the invoicing flow.',
    keywords: ['purchase order meaning', 'what is a purchase order', 'PO number'],
    definition:
      'A purchase order (PO) is a document a client issues to you that formally confirms they want to buy a specific scope of work at an agreed price — it is the buyer’s written commitment to pay, and it usually comes before you raise your invoice.',
    body: [
      'A purchase order is the client’s side of the deal in writing. Where your quotation says “here is what I’ll do and what it costs”, the PO is the buyer replying “yes, we authorise this — go ahead”. It carries a PO number, the agreed scope, quantities, rates, and often the payment terms. For agencies and freelancers working with companies, the PO is frequently the green light that work can begin at all.',
      'In Indian corporate and agency work, POs matter because many clients simply cannot pay an invoice that does not quote a valid PO number. Their finance systems match three documents before releasing money: the purchase order, the proof of delivery or completion, and your invoice — the classic “three-way match”. If your invoice does not reference the PO, it can sit unpaid for weeks while someone chases the missing number.',
      'The purchase order also protects you. Because it is issued by the client and states the scope and price they approved, it is strong evidence of what was agreed if a dispute arises later. A verbal “go ahead” is easy to walk back; a PO is much harder to deny. For that reason, experienced freelancers treat “no PO, no start” as a rule when dealing with larger organisations that run on procurement processes.',
      'The flow usually runs like this: you send a quotation or proforma, the client raises a PO against it, you do the work, and then you raise a tax invoice that quotes the PO number. Keeping that PO number on your invoice — and in your own records — is what keeps the whole paper trail matching and your payment on schedule instead of stuck in “pending approval”.',
      'Not every client works this way; a small business may just say yes over WhatsApp. But the moment you deal with a mid-sized or large company, understanding purchase orders is the difference between an invoice that gets paid and one that quietly stalls. Treat the PO as the client’s promise, and make sure your invoice speaks the same language their finance team is looking for.',
    ],
    clienterNote:
      'Clienter lets you record the client’s PO number against a project and place it on the matching GST invoice, so the paper trail lines up and there is no missing reference to delay payment — though Clienter does not replace your client’s own procurement or ERP system.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Reference POs on your invoices.' },
      { href: '/features/project-management', label: 'Project Management', desc: 'Tie a PO to the work.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Keep client records straight.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Invoice', slug: 'invoice' },
      { term: 'Quotation', slug: 'quotation' },
      { term: 'Scope of work', slug: 'scope-of-work' },
    ],
  },
  {
    slug: 'gst',
    term: 'GST',
    path: '/glossary/gst',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is GST? A Simple Guide for Indian Freelancers',
    metaDescription:
      'GST meaning for Indian freelancers: how CGST, SGST and IGST work, when you must register for a GSTIN, and how GST appears on invoices. Check current rates.',
    keywords: ['GST meaning', 'GST for freelancers', 'GST registration'],
    definition:
      'GST (Goods and Services Tax) is India’s unified indirect tax on the sale of goods and services, which registered freelancers and businesses charge on their invoices — split into CGST and SGST within a state or IGST across states — and then pay to the government.',
    body: [
      'GST is the single indirect tax that replaced a tangle of older taxes like service tax and VAT in India. If you are registered, you add GST on top of your fee, collect it from the client, and pass it to the government after adjusting for the GST you paid on your own business expenses (your input credit). For most professional and creative services the rate has commonly been 18%, but rates vary by category — always check the current rate that applies to your work.',
      'The tax splits depending on where your client is. For a client in your own state, GST is divided into CGST (central) and SGST (state) — for example 9% plus 9%. For a client in another state, you charge a single IGST at the combined rate instead. Getting this split right on the invoice matters: charging CGST/SGST when it should be IGST, or the reverse, is a frequent error that a client’s accountant will bounce straight back to you.',
      'Not every freelancer has to register. GST registration generally becomes mandatory once your turnover crosses a threshold — commonly around ₹20 lakh a year for services (lower in some special-category states) and ₹40 lakh for goods — but these numbers change and carry exceptions, so check the current thresholds before deciding. Some freelancers register voluntarily below the limit, because corporate clients prefer vendors who are GST-registered and can pass on input credit.',
      'Once registered, you get a GSTIN — a 15-digit GST identification number that must appear on every tax invoice — and you take on filing duties: periodic GST returns that report what you charged and paid. This is where GST stops being just an invoice line and becomes an ongoing compliance task, one many freelancers hand to a chartered accountant. Missing a return can mean penalties and interest, so it is not something to leave to the last day.',
      'The practical takeaway for a freelancer is simple: know whether you must register, put a correct GSTIN and tax split on every invoice, keep your input-credit records tidy, and treat the collected GST as the government’s money passing through your account — not income you can spend. Get those habits right and GST becomes routine rather than a yearly panic.',
    ],
    clienterNote:
      'Clienter is built GST-ready: add your GSTIN and it applies CGST/SGST or IGST correctly based on the client, so your invoices come out compliant. It is not a GST-filing or accounting tool, though — you or your CA still file the returns; Clienter just makes sure the invoices going into them are clean.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'GST-ready invoices by default.' },
      { href: '/invoice', label: 'Free Invoice Tool', desc: 'Add GST to an invoice.' },
      { href: '/for/indian-freelancers', label: 'For Indian Freelancers', desc: 'Built for India’s freelancers.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Invoice', slug: 'invoice' },
      { term: 'TDS', slug: 'tds' },
      { term: 'Proforma invoice', slug: 'proforma-invoice' },
    ],
  },
  {
    slug: 'tds',
    term: 'TDS',
    path: '/glossary/tds',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is TDS? Tax Deducted at Source for Freelancers',
    metaDescription:
      'TDS meaning for freelancers: how clients deduct tax at source under Section 194J, where it shows up in Form 26AS, and how to claim it. Confirm current rates.',
    keywords: ['TDS meaning', 'tax deducted at source', 'TDS for freelancers'],
    definition:
      'TDS (Tax Deducted at Source) is income tax that a client withholds from your payment and deposits with the government on your behalf, so you receive the invoice amount minus that deduction and later claim it as credit when you file your income tax return.',
    body: [
      'TDS means your client pays part of your fee to the Income Tax Department instead of to you. When a company hires a freelancer for professional services, the law often requires them to deduct a percentage of the payment as tax at source and deposit it against your PAN. So if you invoice ₹1,00,000, you may receive less in your bank — the balance has gone to the government in your name, not vanished into thin air.',
      'For freelancers, the relevant rule is usually Section 194J, which covers fees for professional and technical services — the bucket most designers, developers, consultants, and writers fall into. There are set rates for this deduction, but rates and rules change and differ by category, so confirm the current rate for your type of service rather than assuming. Your client should give you a TDS certificate (Form 16A) showing what they deducted and deposited.',
      'The money is not lost — it is a credit. Everything deducted under your PAN shows up in your Form 26AS and your Annual Information Statement (AIS), the government’s record of tax paid on your behalf. When you file your income tax return, you total your tax liability for the year and subtract this already-deducted TDS. If too much was deducted, you get a refund; if too little, you pay the difference at filing time.',
      'The practical discipline for a freelancer is to reconcile. Match the TDS your clients say they deducted against what actually appears in your Form 26AS, because if a client deducted but never deposited it, you cannot claim that credit. Keep every Form 16A, note the TDS on each payment, and treat your invoice value — not the smaller amount that hits your bank — as your real income for tax purposes.',
      'TDS trips up freelancers who think of the deducted amount as a loss, or who simply forget to claim it. Understood correctly, it is just your income tax being paid in instalments through the year — annoying for cash flow, but fully recoverable when you file. Build the habit of tracking it invoice by invoice and it stops being a mystery gap in your payments.',
    ],
    clienterNote:
      'Clienter tracks the full invoice value and lets you see what was actually received, so you can spot when a client has paid less because of a TDS deduction. It is not a tax-filing tool and does not compute or file your TDS — for your returns, Form 26AS and your CA remain the source of truth.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'See invoiced vs received.' },
      { href: '/for/indian-freelancers', label: 'For Indian Freelancers', desc: 'Built for India’s freelancers.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Track payments per client.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'GST', slug: 'gst' },
      { term: 'Invoice', slug: 'invoice' },
      { term: 'Accounts receivable', slug: 'accounts-receivable' },
    ],
  },
  {
    slug: 'net-30',
    term: 'Net 30',
    path: '/glossary/net-30',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is Net 30? Payment Terms Meaning for Freelancers',
    metaDescription:
      'Net 30 meaning explained: how this payment term works, why clients use credit periods, and how freelancers can set clear due dates and still get paid fast.',
    keywords: ['net 30 meaning', 'what is net 30', 'payment terms'],
    definition:
      'Net 30 is a payment term meaning the full invoice amount is due within 30 days of the invoice date, giving the client a fixed credit period and setting a clear, agreed deadline for when a freelancer should be paid.',
    body: [
      '“Net 30” is shorthand you put on an invoice to say the whole amount is payable within 30 days of the invoice date. The “net” means the full sum with nothing withheld, and the number is the count of days allowed. You will also see Net 15, Net 45, and Net 60 — same idea, different windows. It replaces a vague “pay soon” with an exact, agreed deadline that both sides can point to later.',
      'Payment terms exist because most business-to-business work runs on credit, not instant payment. A company is not going to pay a freelancer the moment an invoice lands; their approval and payment process takes time. Net 30 formalises that delay into something predictable, so you know a bill dated the 1st should clear by roughly the 30th, and you can plan your cash flow around that date instead of guessing.',
      'The catch for Indian freelancers is that longer terms tie up your money. Net 30 sounds reasonable until you are running a solo business where rent and expenses do not wait 30 days. That is why many freelancers negotiate shorter terms, ask for an advance plus the balance on delivery, or add a small late-payment clause. Some encourage faster payment with a term like “2/10 Net 30” — a small discount if the client pays within 10 days.',
      'Whatever term you choose, the rules are the same: state it clearly on every invoice, count the due date from the invoice date, and follow up the moment it passes. A payment term only protects you if it is written down and you actually enforce it. An invoice that just says “due on receipt” with no follow-up is far more likely to slip than a clearly dated Net 15 that you chase on day 16.',
      'Net terms are ultimately about setting expectations. Agree the window before you start, put it on the invoice, and treat the due date as a real deadline rather than a polite suggestion — and you turn “when will I get paid?” from an anxious guess into a specific date you can plan and chase against.',
    ],
    clienterNote:
      'Clienter lets you set payment terms and a due date on each invoice, then flags what is pending or overdue, so a Net 30 bill does not quietly slip past its date unnoticed — you can see exactly who to follow up and when.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Set terms and due dates.' },
      { href: '/invoice', label: 'Free Invoice Tool', desc: 'Add payment terms to an invoice.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Chase payments alongside clients.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Invoice', slug: 'invoice' },
      { term: 'Accounts receivable', slug: 'accounts-receivable' },
      { term: 'Dunning', slug: 'dunning' },
    ],
  },
  {
    slug: 'accounts-receivable',
    term: 'Accounts receivable',
    path: '/glossary/accounts-receivable',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is Accounts Receivable? Meaning for Freelancers',
    metaDescription:
      'Accounts receivable meaning for freelancers: what clients owe you on unpaid invoices, why AR ageing matters for cash flow, and how to collect it faster.',
    keywords: ['accounts receivable meaning', 'what is accounts receivable', 'AR ageing'],
    definition:
      'Accounts receivable is the total money your clients owe you for work already invoiced but not yet paid — it is income you have earned and are waiting to collect, and it is one of the clearest signals of a freelancer’s cash-flow health.',
    body: [
      'Accounts receivable (often shortened to AR, or just “receivables”) is the sum of every invoice you have sent that has not yet been paid. You have done the work and billed for it, so it is your money — but it is sitting in your clients’ accounts, not yours. In plain terms, it is the answer to “how much am I owed right now?” For a freelancer, that number is worth watching as closely as your actual bank balance.',
      'Receivables matter because earned is not the same as received. You can have a great month on paper — plenty of invoices raised — and still struggle to make rent, because the cash is stuck behind Net 30 and Net 60 terms and slow-paying clients. This gap between billing and banking is where solo businesses quietly get into trouble. Tracking AR is how you see that gap coming instead of being ambushed by it.',
      'The healthiest way to watch receivables is by age. “AR ageing” groups what you are owed by how overdue it is — current, 30 days late, 60 days late, 90-plus. The older an invoice gets, the harder it is to collect, so ageing tells you exactly which clients to chase first. In India, where payment delays are common, a disciplined look at your ageing each week is often the difference between collecting and writing off.',
      'Managing receivables is mostly about follow-up. Send invoices promptly, put clear due dates on them, send a polite reminder before the due date and a firmer one after, and keep a running list of who owes what. Reducing your receivables — turning “owed” into “in the bank” faster — improves your cash flow far more reliably than winning yet another new project whose payment will also be delayed.',
      'Accounts receivable is one half of a bookkeeping pair; accounts payable is what you owe others. For most freelancers the receivable side is the one that keeps you up at night, because your income depends entirely on collecting it. Keep it visible, keep it aged, and keep chasing — receivables you cannot see are receivables you tend not to get.',
    ],
    clienterNote:
      'Clienter gives you a clear view of what is invoiced, pending, and overdue per client, so you can see your outstanding receivables and who to follow up. It handles this tracking, but it is not full accounting software — for formal books and tax filing you would still use a bookkeeping tool or your CA.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'See pending and overdue.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Who owes what, per client.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Run the money side.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Invoice', slug: 'invoice' },
      { term: 'Net 30', slug: 'net-30' },
      { term: 'Dunning', slug: 'dunning' },
    ],
  },
  {
    slug: 'profit-margin',
    term: 'Profit margin',
    path: '/glossary/profit-margin',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is Profit Margin? Meaning, Formula & Examples',
    metaDescription:
      'Profit margin meaning explained for freelancers: how to work out the share of revenue you actually keep, gross vs net margin, and practical ways to improve it.',
    keywords: ['profit margin meaning', 'what is profit margin', 'profit margin formula'],
    definition:
      'Profit margin is the share of your revenue left as profit after costs, expressed as a percentage — it tells a freelancer or agency not just how much they earned, but how much of every rupee billed they actually keep.',
    body: [
      'Profit margin turns “I made ₹1,00,000 this month” into a more honest number: how much of that you actually kept after expenses. It is profit divided by revenue, shown as a percentage. If you billed ₹1,00,000 and spent ₹40,000 on tools, subcontractors, and other costs, your ₹60,000 profit is a 60% margin. The percentage matters more than the raw figure, because it shows how efficient your business is, not just how busy you were.',
      'For freelancers the idea can feel abstract until you picture two people earning the same revenue with very different margins. One keeps most of what they bill because they work solo with low costs; the other hands half of it to subcontractors, software, and ads. Same top line, very different take-home. Margin is what reveals that difference — and shows you where your money is quietly leaking out.',
      'There are a few flavours worth knowing. Gross margin looks at revenue minus the direct cost of delivering the work — say, the freelancers you subcontract. Net margin subtracts everything, including your tools, subscriptions, and overheads. For a solo freelancer the two are often close; for an agency that outsources, the gap between them is a crucial number to keep an eye on month to month.',
      'Improving margin is not only about charging more, though raising rates is the fastest lever. You can also cut waste — the subscriptions you never use, the low-value clients who eat your time — and get more efficient at delivery so each project costs you less to complete. The freelancers who build a sustainable business tend to be the ones who track margin per client and per project, then quietly drop the work that looks busy but pays thin.',
      'The reason margin deserves your attention is blunt: revenue is vanity, profit is sanity. A freelancer chasing a bigger top line while ignoring costs can work harder every single year and somehow keep less. Watching your margin keeps you focused on the only number that actually shows up in your life — what you take home.',
    ],
    clienterNote:
      'Clienter gives you a live profit view by tracking income against expenses, so you can see roughly what you are keeping — not just what you billed. It is a working profit picture for day-to-day decisions, not a substitute for formal accounting or a CA-prepared profit-and-loss statement.',
    related: [
      { href: '/features', label: 'Features', desc: 'See income, expenses, and profit.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Run the whole business.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'From lead to profit.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Billable hours', slug: 'billable-hours' },
      { term: 'Utilization rate', slug: 'utilization-rate' },
      { term: 'Accounts receivable', slug: 'accounts-receivable' },
    ],
  },
  {
    slug: 'dunning',
    term: 'Dunning',
    path: '/glossary/dunning',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is Dunning? Chasing Overdue Invoices Explained',
    metaDescription:
      'Dunning meaning explained for freelancers: how a planned sequence of payment reminders chases overdue invoices, and why consistent follow-up gets you paid.',
    keywords: ['dunning meaning', 'what is dunning', 'chasing overdue invoices'],
    definition:
      'Dunning is the systematic process of reminding and chasing clients to pay overdue invoices — a planned sequence of increasingly firm messages that turns awkward, ad-hoc payment-chasing into a repeatable routine.',
    body: [
      'Dunning is a slightly old-fashioned word for a very modern freelancer problem: getting paid what you are owed. Rather than one anxious “have you paid yet?” message sent whenever you happen to remember, dunning is a planned series of reminders — a gentle nudge before the due date, a polite note just after, and firmer follow-ups as the invoice ages. It takes the emotion and awkwardness out of chasing money by making it a process rather than a confrontation.',
      'For freelancers and agencies in India, where payments routinely run late, dunning is not optional — it is how you survive. The people who get paid on time are rarely the ones with nicer clients; they are the ones who follow up consistently. A clear dunning routine quietly signals to clients that you track your invoices closely and that “forgetting” to pay will not slip past unnoticed, which changes how promptly they act.',
      'A typical dunning sequence escalates in tone, not in hostility. It might run: a friendly reminder a few days before due, a “just checking this is on your radar” on the due date itself, a clear “this is now overdue” a week later, and a more formal note referencing your late-payment terms after that. The wording stays professional throughout — the goal is to get paid and keep the relationship, not to win an argument.',
      'The two enemies of good dunning are inconsistency and delay. An invoice you first chase on day 45 is much harder to collect than one you nudged on day 2. Automating or at least systematising the reminders — so they go out on schedule regardless of how busy or uncomfortable you feel — is what makes dunning work. Pair it with clear payment terms and prompt invoicing, and a large share of late payments simply stop happening.',
      'Done well, dunning barely feels like chasing. It becomes the quiet, reliable machinery sitting behind every invoice, making sure “I’ll pay you next week” does not drift into next month. For a solo business, that machinery is often worth more than another new client — because a sale you never collect is not really a sale at all.',
    ],
    clienterNote:
      'Clienter flags invoices that are pending and overdue so you always know exactly who to follow up and when — the backbone of any dunning routine. You send the reminders yourself, but Clienter makes sure no overdue invoice ever quietly slips off your radar.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Spot overdue invoices.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Chase within the client record.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Track payment status.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Accounts receivable', slug: 'accounts-receivable' },
      { term: 'Net 30', slug: 'net-30' },
      { term: 'Invoice', slug: 'invoice' },
    ],
  },
  {
    slug: 'milestone-billing',
    term: 'Milestone billing',
    path: '/glossary/milestone-billing',
    category: 'Invoicing & Finance',
    metaTitle: 'What Is Milestone Billing? A Guide for Freelancers',
    metaDescription:
      'Milestone billing meaning for freelancers: how to split a project into paid stages, why staged payments protect your cash flow, and how to define milestones.',
    keywords: ['milestone billing meaning', 'what is milestone billing', 'staged payments'],
    definition:
      'Milestone billing is a payment structure where a project is split into stages and the client pays a portion at each completed milestone, so a freelancer is paid progressively through the work instead of waiting for one lump sum at the end.',
    body: [
      'Milestone billing breaks a big project into paid stages. Instead of billing the whole amount at the finish — and carrying all the risk until then — you agree checkpoints, and the client pays an instalment as each one is completed. A website project might be split into 30% on kickoff, 40% at design approval, and 30% on launch. Each milestone is both a deliverable and a payment trigger, so progress and money move together.',
      'For freelancers, the appeal is cash flow and protection. Long projects can run for months; milestone billing means money comes in along the way rather than as a single payment you wait and hope for. It also caps your exposure — if a client disappears or the project stalls, you have already been paid for the work completed up to the last milestone, instead of being left owed the entire amount.',
      'It protects the client too, which is exactly why they usually accept it. They are not asked to pay for the whole project upfront on trust; they release each payment only after seeing tangible progress. That shared, staged commitment tends to keep both sides engaged — you keep delivering to unlock the next payment, and the client keeps reviewing and approving so the work keeps moving forward.',
      'The key to making it work is defining milestones precisely in writing before you start: what exactly counts as “design approved”, what each stage costs, and when the invoice for it goes out. Vague milestones cause disputes (“this isn’t finished, so I won’t pay”). A clear scope tied to each milestone — ideally in the contract or statement of work — keeps milestone billing smooth. Raise a proper tax invoice at each stage rather than treating them as informal part-payments.',
      'Milestone billing suits fixed-scope projects with clear stages; ongoing work often fits a retainer better. But for any substantial one-off project, staging the payments is one of the simplest ways a freelancer can protect both their cash flow and their peace of mind — the money arrives as the work does, and neither side is carrying the whole risk alone.',
    ],
    clienterNote:
      'Clienter lets you manage a project and raise a GST invoice at each milestone, so staged payments stay tied to the work rather than living in scattered messages — you can see what has been billed, what is pending, and what is still to come.',
    related: [
      { href: '/features/project-management', label: 'Project Management', desc: 'Split work into stages.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Bill at each milestone.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Projects and billing together.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Fixed bid', slug: 'fixed-bid' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Invoice', slug: 'invoice' },
    ],
  },
]
