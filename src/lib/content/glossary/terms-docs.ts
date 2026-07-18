import type { GlossaryTermConfig } from './_type'

/**
 * Glossary terms for the "Proposals & Documents" category — the paperwork that
 * turns an enquiry into agreed, signed, billable work. SOW/NDA/MSA are treated
 * as concepts (background, not legal advice): adapt any template to your own
 * situation and take professional advice for high-stakes contracts.
 */
export const DOCS_TERMS: GlossaryTermConfig[] = [
  {
    slug: 'proposal',
    term: 'Proposal',
    path: '/glossary/proposal',
    category: 'Proposals & Documents',
    metaTitle: 'What Is a Proposal? Meaning for Freelancers & Agencies',
    metaDescription:
      'Proposal meaning explained: what a freelance project proposal includes, how it differs from a quote, and how to write one that wins the client.',
    keywords: ['proposal meaning', 'what is a proposal', 'freelance proposal'],
    definition:
      'A proposal is a document you send a prospective client that shows you understand their problem, lays out what you will deliver, the timeline, and the price, and gives them a clear decision to say yes to.',
    body: [
      'A proposal is the document that turns a conversation into a commitment. After a client describes what they need — a new website, a brand identity, three months of social media management — you send back a written proposal that shows you understood the brief, explains exactly what you will do, sets out a timeline, and puts a price on it. It is part pitch and part plan: enough detail to build trust, but always focused on helping a busy client reach a decision. A good proposal does not just quote a number; it makes saying yes feel like the obvious, low-risk choice.',
      'Most freelance proposals share a handful of building blocks. There is a short summary of the client’s goal in your own words, so they know you were listening on the call. There is the scope — the specific deliverables you will produce and, just as importantly, what falls outside them. There is a timeline with rough milestones, a clear price with payment terms and any advance, and a note on what you need from the client to begin. A relevant past project, a testimonial, or a short case study near the end reassures a first-time buyer who is trusting a stranger with their money.',
      'A proposal is often confused with a quotation, but the two do different jobs. A quotation is mostly about numbers — a priced list of what something will cost. A proposal wraps that price in context: why this approach, what the client actually gets, and why you are the right person to deliver it. For a small, well-defined job a quote is plenty. For anything where the client is weighing up several freelancers, or spending real money, the proposal does the persuading that a bare price never can, and it is usually the difference between winning and losing the work.',
      'In the Indian freelance market, most proposals still travel as PDFs over email or WhatsApp, and the ones that win are rarely the cheapest — they are the clearest. A tidy, well-structured proposal signals that you will be organised and easy to work with, which matters enormously when a client cannot meet you in person. Speed matters too: the freelancer who follows a discovery call with a same-day proposal usually beats the one who takes a week, because the client’s interest is highest right after you have spoken. Making it effortless to accept — a single tap to sign — removes the last bit of friction.',
      'The most common mistakes are all fixable. Vague scope invites scope creep and awkward money conversations later, so spell out deliverables and exclusions. Hiding the price, or leaving out payment terms and an advance, leads straight to cash-flow trouble. And a proposal with no clear way to say yes — no signature, no obvious next step — simply stalls on the client’s desk. The aim is a document a busy client can read, understand, and accept in a few minutes, with the terms recorded so both of you can point back to what was agreed.',
    ],
    clienterNote:
      'In Clienter you build a proposal, send it as a link, and the client reviews and signs it with an e-signature inside their own portal — so the moment they say yes is captured, dated, and ready to turn into a project and an invoice.',
    related: [
      { href: '/templates', label: 'Templates', desc: 'Starting points for proposals and quotes.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Clients review and sign in one place.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Move a lead from enquiry to won.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Quotation', slug: 'quotation' },
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'E-signature', slug: 'e-signature' },
    ],
  },
  {
    slug: 'quotation',
    term: 'Quotation',
    path: '/glossary/quotation',
    category: 'Proposals & Documents',
    metaTitle: 'What Is a Quotation? Meaning for Freelancers & Agencies',
    metaDescription:
      'Quotation meaning explained: what a freelance quote includes, how it differs from a proposal and an invoice, and how to send one that gets accepted fast.',
    keywords: ['quotation meaning', 'what is a quotation', 'freelance quote'],
    definition:
      'A quotation is a formal document that tells a client exactly what a job will cost — an itemised price for specific work, usually fixed for a stated period — so they can approve the spend before you begin.',
    body: [
      'A quotation, or quote, is the document that answers a client’s most direct question: what will this cost? It lists the work to be done, breaks it into line items with prices, adds any taxes, and gives a total the client can approve before anything starts. Where a proposal sells the idea, a quotation nails down the numbers. It is usually the last thing a client looks at before saying go, which is why a clear, professional quote does a surprising amount of work in closing a deal.',
      'A useful quotation carries more than just a figure. It has a quote number and date, an itemised list so the client sees what each part costs rather than one lump sum, and a validity period — “valid for 15 days” — that protects you from being held to an old price months later. It should state payment terms, including any advance, and in India whether GST applies and at what rate. Spelling out what is included, and what would be charged extra, prevents the client from assuming that “the website” quietly covers three rounds of changes and a logo too.',
      'It helps to know where a quotation sits among its cousins. A proposal is broader and more persuasive; a quotation is the priced core of it. An invoice comes later and asks for payment for work now agreed or done, while a quotation only proposes a price. A proforma invoice looks like an invoice but, like a quote, comes before the sale to help a client arrange payment or internal approval. For most freelance jobs the flow is simple: quote to agree the price, then invoice to collect it.',
      'For Indian freelancers and small agencies, a few habits make quotes work harder. Send them fast, while interest is warm, and make the total unmissable. Always include a validity window so rising costs do not trap you. If you are registered, show GST clearly so there are no surprises at invoice time; if you are not, a short note avoids confusion. And keep a copy of every quote you send — when a client comes back three weeks later saying “let’s go ahead”, you want to reissue the exact terms, not reconstruct them from memory.',
      'The quotes that get accepted fastest are the ones that remove doubt. A tidy layout, itemised pricing, a clear total, honest tax treatment, and an obvious way to approve all tell a client that you run a real, dependable business. Making acceptance a single action — approving or signing the quote rather than replying to an email thread — turns a maybe into a yes while the client is still looking at it, and gives you a dated record of exactly what they agreed to pay.',
    ],
    clienterNote:
      'Clienter lets you send a quotation as a shareable link, with itemised pricing and GST shown clearly. The client approves or signs it with an e-signature in their portal, and the accepted quote is ready to convert into an invoice — so nothing is retyped between agreeing a price and collecting it.',
    related: [
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Turn an accepted quote into an invoice.' },
      { href: '/templates', label: 'Templates', desc: 'Quotation and proposal starting points.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Clients approve quotes in one place.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Proposal', slug: 'proposal' },
      { term: 'Invoice', slug: 'invoice' },
      { term: 'Proforma invoice', slug: 'proforma-invoice' },
    ],
  },
  {
    slug: 'statement-of-work',
    term: 'Statement of work',
    path: '/glossary/statement-of-work',
    category: 'Proposals & Documents',
    metaTitle: 'What Is a Statement of Work? SOW Meaning for Freelancers',
    metaDescription:
      'Statement of work meaning explained: what an SOW covers, how it differs from a proposal and a contract, and why it keeps freelance projects on track.',
    keywords: ['statement of work', 'SOW meaning', 'what is an SOW'],
    definition:
      'A statement of work (SOW) is a document that spells out exactly what a project will deliver — the tasks, deliverables, timeline, and acceptance criteria — so both you and the client share one clear definition of ‘done’.',
    body: [
      'A statement of work, usually shortened to SOW, is the document that pins down exactly what a project involves. Where a proposal wins the work and a quotation prices it, the SOW describes the work itself in detail: the tasks you will carry out, the deliverables you will hand over, the schedule, and the standard each deliverable must meet to be accepted. Its job is to make sure you and the client are picturing the same finished result before either of you invests time and money.',
      'A typical SOW answers a set of practical questions. What is being delivered, exactly, and in what format? By when, and in what phases or milestones? Who is responsible for what — including what the client must provide, such as content, logins, or approvals? And crucially, how will everyone know a deliverable is finished — the acceptance criteria? By writing these down, an SOW turns fuzzy expectations into something concrete, which is the single best defence against the slow, unpaid expansion of a project known as scope creep.',
      'It is worth being clear about how an SOW relates to a contract. A statement of work describes the specifics of one project — the ‘what’ and ‘when’. A broader agreement, often a master services agreement, tends to cover the ‘how’ of the whole relationship: payment, ownership of work, confidentiality, and what happens if things go wrong. On small jobs the two are often merged into one document. On larger ones they are kept separate, so a single MSA can sit above many SOWs, one per project.',
      'For Indian freelancers and agencies, a plain-language SOW is often the most valuable piece of paperwork in a project, precisely because so much local work starts on a verbal “haan, kar denge” and a WhatsApp brief. Written scope, milestones, and acceptance criteria give both sides something calm to return to when memories differ. That said, an SOW is a real working document, not a template to copy blindly — adapt it to your actual project, and for high-value or complex engagements it is sensible to have a lawyer look over the wording and how it fits with the rest of your contract.',
      'In practice, the strongest SOWs are specific and readable. They list deliverables as concrete items rather than vague promises, tie payments to milestones so cash arrives as work is approved, and name what is out of scope as plainly as what is in. Getting the client to formally agree to the SOW before work begins — ideally with a signature and a date — means that when a new request arrives mid-project, you can point to the agreed scope and price the extra as a change order rather than absorbing it for free.',
    ],
    clienterNote:
      'You can send the scope and deliverables to a client as a proposal in Clienter and have them sign off with an e-signature in their portal, so the agreed statement of work is recorded and dated. Clienter handles that agreement-and-sign-off workflow — it does not provide the legal wording, so adapt your own terms or take advice for high-stakes contracts.',
    related: [
      { href: '/templates', label: 'Templates', desc: 'Scope and proposal starting points.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Clients sign off scope in one place.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Keep project terms with the client.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Scope of work', slug: 'scope-of-work' },
      { term: 'Change order', slug: 'change-order' },
      { term: 'MSA', slug: 'msa' },
    ],
  },
  {
    slug: 'e-signature',
    term: 'E-signature',
    path: '/glossary/e-signature',
    category: 'Proposals & Documents',
    metaTitle: 'E-Signature Meaning: A Guide for Freelancers & Agencies',
    metaDescription:
      'E-signature meaning explained: how electronic signatures let clients accept quotes, proposals, and agreements online, and speed up freelance sign-offs.',
    keywords: ['e-signature meaning', 'what is an e-signature', 'electronic signature'],
    definition:
      'An e-signature is a digital way of signing a document — a click, a typed name, or a drawn mark recorded online — that shows a person has reviewed and agreed to what it says, without printing, signing, and scanning anything.',
    body: [
      'An e-signature, or electronic signature, is simply a way of agreeing to a document online instead of on paper. Rather than printing a quote, signing it, scanning it, and emailing it back, a client reviews the document on screen and confirms their agreement with a click, a typed name, or a drawn signature. The system records who signed, and usually when, so there is a clear trail showing the document was accepted. For freelancers working with clients they may never meet, it removes one of the most tedious steps in getting to yes.',
      'The everyday value of e-signatures is speed. A proposal or quotation that would once sit for days while a client found a printer can be accepted in the time it takes to read it on a phone. That matters most right after a call, when interest is highest and any delay risks the deal going cold. E-signatures also create a tidy record: instead of a signed PDF buried in an inbox, you have a dated confirmation attached to the document, which is far easier to find months later when someone asks what exactly was agreed.',
      'In India, electronic signatures are broadly recognised under the Information Technology Act, 2000, which is why digitally accepting quotes and agreements has become normal practice. That said, the rules have nuances — certain documents may need particular forms of signature, and some sensitive instruments are treated differently — so an e-signature is not automatically the right tool for every document. For routine business paperwork it is well suited; for high-stakes or unusual agreements, it is worth checking the specific requirements or taking professional advice rather than assuming a click is always enough.',
      'For Indian freelancers and small agencies, e-signatures quietly professionalise the whole front end of a project. A client who can approve a quotation or sign off a scope with one tap experiences you as organised and modern, which builds trust before any work begins. It also protects you: because the acceptance is captured and dated, there is less room for a client to later claim they never agreed to the price or the deliverables. The friction that used to lose deals — “I’ll sign it and send it back next week” — mostly disappears.',
      'The best way to use e-signatures is to attach them to the documents that actually gate a project: quotations, proposals, and scope or onboarding sign-offs. Keeping the review and the signature in one place, rather than scattered across email and chat, means the moment a client agrees is captured cleanly and linked to the right document. The aim is not just a signature for its own sake, but a clear, findable record of what was agreed, by whom, and when — the kind of thing that prevents disputes rather than settling them.',
    ],
    clienterNote:
      'In Clienter, clients accept and sign quotes and proposals with an e-signature directly inside their portal — no printing or scanning. The signed, dated document stays attached to their profile, so the moment they agreed is captured and easy to find later.',
    related: [
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Clients sign in a branded portal.' },
      { href: '/features/invoicing', label: 'Invoicing', desc: 'Signed quotes flow into invoices.' },
      { href: '/features', label: 'Features', desc: 'Everything Clienter does in one place.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Proposal', slug: 'proposal' },
      { term: 'Quotation', slug: 'quotation' },
      { term: 'Client portal', slug: 'client-portal' },
    ],
  },
  {
    slug: 'intake-form',
    term: 'Intake form',
    path: '/glossary/intake-form',
    category: 'Proposals & Documents',
    metaTitle: 'What Is a Client Intake Form? A Freelancer’s Guide',
    metaDescription:
      'Client intake form meaning explained: what to ask new clients, how an intake form speeds up onboarding, and why it saves freelancers hours of back-and-forth.',
    keywords: ['client intake form', 'intake form meaning', 'client onboarding form'],
    definition:
      'A client intake form is a short questionnaire you send a new client at the start of a project to collect the details, files, and access you need in one go — instead of chasing them over email and WhatsApp.',
    body: [
      'A client intake form is the questionnaire you send at the very start of a working relationship to gather everything you need before real work begins. Instead of discovering halfway through a website that you never got the logo files, the brand colours, or the login for their hosting, you ask for all of it up front in one structured form. It is the difference between an onboarding that feels smooth and professional and one that stalls in a scatter of half-answered WhatsApp messages.',
      'What goes on the form depends on the work, but the pattern is consistent: the essentials to start well. That usually means the client’s business details and billing information, the goals and background for the project, brand assets and reference material, access or logins to any tools and accounts, key contacts and who signs off decisions, and any deadlines to plan around. A good intake form also quietly sets expectations — the questions you ask signal how you work, and a thorough one tells a client they are dealing with someone organised.',
      'The real payoff is time and mental load. Every detail collected once, in writing, is a detail you are not chasing later while a deadline looms. It reduces the endless “can you also send…” messages that eat into a freelancer’s day and make clients feel pestered. It also creates a clean record: when a question comes up about what the client originally asked for or provided, the answers are sitting in one place rather than scattered across three apps and two phone numbers.',
      'For Indian freelancers and agencies, where a lot of client communication lives on WhatsApp, an intake form is a small change that professionalises the whole start of a project. Rather than a dozen voice notes and forwarded images, the client fills one clear form and you begin with everything in hand. It works especially well for remote clients in other cities or countries whom you will never meet: a good form does the job that an in-person kickoff meeting would, and it does it on the client’s own time, in their own words.',
      'To get the most from an intake form, keep it as short as the work allows — every extra field lowers the chance a busy client finishes it — and ask only for what you genuinely need to start. Send it the moment a client says yes, while their enthusiasm is high, and make it easy to return files and access along with answers. Treated this way, the intake form becomes the first step of onboarding proper: the point where a signed client turns into a project that is ready to actually begin.',
    ],
    clienterNote:
      'Clienter includes client intake and onboarding forms, so you can send a new client one form to collect their details, brief, and files, and have it all land against their profile — turning a fresh yes into a ready-to-start project without the WhatsApp chase.',
    related: [
      { href: '/features/client-management', label: 'Client Management', desc: 'New client details in one profile.' },
      { href: '/features/client-portal', label: 'Client Portal', desc: 'Onboard clients in a branded portal.' },
      { href: '/client-management-software', label: 'Client Management Software', desc: 'Onboarding built into the workflow.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Onboarding', slug: 'onboarding' },
      { term: 'Discovery call', slug: 'discovery-call' },
      { term: 'Client portal', slug: 'client-portal' },
    ],
  },
  {
    slug: 'discovery-call',
    term: 'Discovery call',
    path: '/glossary/discovery-call',
    category: 'Proposals & Documents',
    metaTitle: 'What Is a Discovery Call? A Guide for Freelancers & Agencies',
    metaDescription:
      'Discovery call meaning explained: what happens on a discovery call, the questions to ask a new client, and how it helps freelancers win better-fit work.',
    keywords: ['discovery call', 'discovery call meaning', 'discovery call questions'],
    definition:
      'A discovery call is the first real conversation with a potential client — usually a short call — where you learn about their problem, budget, and expectations, and decide together whether the project is a good fit before anyone commits.',
    body: [
      'A discovery call is the first proper conversation between a freelancer and a potential client, held before any proposal is written or price is quoted. Its purpose is exactly what the name suggests: to discover. You learn what the client actually needs, what success looks like to them, roughly what they can spend, and how they like to work. They, in turn, get a feel for you. It is a short, low-pressure conversation — often twenty to thirty minutes — that decides whether it is worth taking things further at all.',
      'The call does two jobs at once. The first is fact-finding: understanding the real problem behind the request, because clients often ask for a solution (“I need a new logo”) when the underlying need is broader (“my brand looks unprofessional next to competitors”). The second is qualifying — working out whether this is a project you want. A few honest questions about budget, timeline, and decision-making save you from writing a detailed proposal for someone who was never going to pay your rate or was shopping purely on price.',
      'Good discovery calls are built on good questions. What are you trying to achieve, and by when? What have you tried already, and what went wrong? Who else is involved in the decision? What budget range are you working with? And, quietly important, why now? The aim is to listen far more than you talk. A client who feels genuinely heard on that first call is already inclined to trust you, and the detail you gather is exactly what makes the proposal that follows feel tailored rather than generic.',
      'For Indian freelancers and agencies, the discovery call is also where you gently establish that you run a business, not a favour. A lot of enquiries arrive casually over WhatsApp or Instagram, and a brief scheduled call shifts the tone from a quick question to a real project. It is the natural place to surface the budget conversation early — often awkward but always necessary — so you do not spend hours on a proposal for someone expecting five-figure work at four-figure prices. It also helps filter the referral who is a poor fit from the one worth prioritising.',
      'The strongest discovery calls end with a clear next step, not a vague “I’ll think about it”. That might be sending a proposal by a stated date, booking a follow-up, or agreeing the project is not a fit — which is itself a good outcome. Taking a few notes during the call, and capturing what you learned against the lead afterwards, means the proposal you send reflects the actual conversation. Done well, discovery turns a cold enquiry into a warm, well-understood lead that is far more likely to convert.',
    ],
    clienterNote:
      'In Clienter, a lead sits on your pipeline before a discovery call and moves forward after it. You can note what you learned on the call against that lead, so the proposal or quotation you send next is shaped by the conversation rather than starting from a blank page.',
    related: [
      { href: '/features/crm-lead-pipeline', label: 'Lead Pipeline', desc: 'Track leads before and after a call.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Turn enquiries into won work.' },
      { href: '/for/consultants', label: 'For Consultants', desc: 'Built for advice-led work.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Lead pipeline', slug: 'lead-pipeline' },
      { term: 'Proposal', slug: 'proposal' },
      { term: 'Intake form', slug: 'intake-form' },
    ],
  },
  {
    slug: 'nda',
    term: 'NDA',
    path: '/glossary/nda',
    category: 'Proposals & Documents',
    metaTitle: 'What Is an NDA? Meaning for Freelancers & Agencies',
    metaDescription:
      'NDA meaning explained: what a non-disclosure agreement does, when freelancers need one, and what to check before you sign — in plain, non-legal terms.',
    keywords: ['NDA meaning', 'what is an NDA', 'non-disclosure agreement'],
    definition:
      'An NDA (non-disclosure agreement) is a contract in which one or both parties promise to keep shared confidential information private and not pass it on — commonly signed before a client reveals sensitive details about their business or project.',
    body: [
      'An NDA, short for non-disclosure agreement, is a contract about secrecy. In it, the people signing agree that certain information they share will be kept confidential and not passed on to others or used for anything beyond the work at hand. A client might ask a freelancer to sign one before revealing an unreleased product, financial details, customer data, or a business idea they do not want leaking. It can run one way — only you promise confidentiality — or both ways, where each side protects the other’s secrets.',
      'The core of most NDAs is a handful of plain ideas. There is a definition of what actually counts as confidential, because not everything shared is a secret. There is what the receiving side may and may not do with that information. There is usually a time period over which the promise lasts, and a list of sensible exceptions — for instance, information that was already public, or that a court orders disclosed. Understanding these building blocks helps you read an NDA someone hands you, rather than signing it blind because it looks standard.',
      'For Indian freelancers and agencies, NDAs turn up most often when working with startups, larger companies, or anyone handling sensitive data. Being asked to sign one is usually a good sign: it means the client takes the work seriously. It is worth reading before you sign, though. Watch for terms that stretch far beyond confidentiality — clauses that quietly claim ownership of your work, stop you taking on similar clients, or make you liable for eye-watering sums. A confidentiality promise is reasonable; a document that limits how you earn a living deserves a closer look.',
      'This is where a word of caution belongs: an NDA is a legal contract, and this explanation is background, not legal advice. Templates found online are a starting point, not a finished document — they need adapting to your actual situation, the nature of the information, and the law that applies. For a routine, low-stakes confidentiality promise, a clear standard NDA is often fine. For anything high-value, unusual, or one-sided, or where large sums or important rights are involved, it is genuinely worth having a lawyer review it before you sign. The cost of advice is small next to the cost of a term you did not understand.',
      'Practically, the healthiest approach is neither to fear NDAs nor to sign them on autopilot. Read what is defined as confidential and make sure you can actually live with it. Check that the obligations are mutual where that makes sense, that the time limit is reasonable, and that nothing hidden in the document reaches beyond secrecy into owning your work or restricting your future clients. If a clause is unclear, ask for it to be explained or reworded. A good client will not mind a freelancer who reads carefully before agreeing — it is exactly the diligence they are hoping to hire.',
    ],
    clienterNote:
      'Clienter handles the proposal, quotation, and intake workflow with e-signature — it does not draft NDAs, supply legal templates, or review contracts. Treat any confidentiality agreement as a legal document to adapt to your situation, and get professional advice for high-stakes or one-sided terms.',
    related: [
      { href: '/glossary', label: 'Glossary', desc: 'Plain-English terms for freelancers.' },
      { href: '/features/client-management', label: 'Client Management', desc: 'Keep client documents in one place.' },
      { href: '/for/freelancers', label: 'For Freelancers', desc: 'Run the business side with less friction.' },
      { href: '/for/consultants', label: 'For Consultants', desc: 'Handle sensitive client work cleanly.' },
    ],
    relatedTerms: [
      { term: 'MSA', slug: 'msa' },
      { term: 'Statement of work', slug: 'statement-of-work' },
      { term: 'E-signature', slug: 'e-signature' },
    ],
  },
  {
    slug: 'msa',
    term: 'MSA',
    path: '/glossary/msa',
    category: 'Proposals & Documents',
    metaTitle: 'What Is an MSA? Master Services Agreement, Explained',
    metaDescription:
      'MSA meaning explained: what a master services agreement covers, how it works with an SOW, and why agencies use one — in plain, non-legal language.',
    keywords: ['MSA meaning', 'master services agreement', 'what is an MSA'],
    definition:
      'An MSA (master services agreement) is an overarching contract that sets the standard terms of an ongoing client relationship once — things like payment, ownership, and confidentiality — so each new project can start quickly under those agreed rules.',
    body: [
      'An MSA, or master services agreement, is the umbrella contract that sits over an ongoing client relationship. Rather than negotiating the same terms from scratch for every project, both sides agree the ground rules once — how payment works, who owns the finished work, how confidentiality and disputes are handled — and then run individual projects underneath it. Each new piece of work is captured in a short statement of work that plugs into the MSA, borrowing all those agreed terms without repeating them. It is a structure built for repeat business.',
      'The split is the whole point. The MSA holds the slow-changing, relationship-wide terms: payment timelines, liability, intellectual property, confidentiality, and how either side can end things. The statement of work holds the fast-changing, project-specific details: what is being delivered, by when, and for how much. This means the second, third, and tenth projects with the same client can begin almost immediately — just a new SOW — because the heavy groundwork was laid the first time. For agencies with regular clients, that saved friction adds up quickly.',
      'For Indian freelancers and small agencies, an MSA usually becomes relevant once a client relationship turns from a one-off into something ongoing, or when working with larger companies that expect this structure. A solo designer doing a single logo rarely needs one; an agency on its fourth project for the same client almost certainly benefits from it. The appeal is efficiency and clarity: everyone knows the standing rules, new work starts faster, and there is one agreed reference point if a disagreement ever arises about payment, ownership, or scope.',
      'Because an MSA governs an entire relationship, it carries real weight, and this is background rather than legal advice. The terms that live in an MSA — liability, intellectual property, indemnity, termination — are exactly the ones that can hurt if they are lopsided, and a bad clause here affects every project you do with that client, not just one. A downloaded template is only a starting point; it needs adapting to your work, and for anything significant it is worth having a lawyer review the MSA before you sign, especially when the other side is much larger and has drafted it in their own favour.',
      'Used sensibly, an MSA makes a growing client relationship calmer and faster, not more bureaucratic. The practical advice is to treat the first project with a promising client as the moment to get the standing terms right, then let each later project ride on a lightweight SOW. Read the ownership and liability terms with particular care, make sure payment terms actually match how you need cash to flow, and do not sign an agreement whose clauses you cannot explain in your own words. For high-stakes relationships, professional advice on the wording is money well spent.',
    ],
    clienterNote:
      'Clienter manages the quote, proposal, and intake side of a client relationship with e-signature — it does not draft or review MSAs or supply legal templates. Think of an MSA as the legal frame around the work; adapt any template to your situation and take professional advice for high-value or ongoing engagements.',
    related: [
      { href: '/features/client-management', label: 'Client Management', desc: 'Keep everything for a client together.' },
      { href: '/for/consultants', label: 'For Consultants', desc: 'Built for ongoing client work.' },
      { href: '/business-management-software', label: 'Business Management', desc: 'Run the whole client operation.' },
      { href: '/glossary', label: 'Glossary', desc: 'Plain-English terms for freelancers.' },
    ],
    relatedTerms: [
      { term: 'Statement of work', slug: 'statement-of-work' },
      { term: 'NDA', slug: 'nda' },
      { term: 'Retainer', slug: 'retainer' },
    ],
  },
  {
    slug: 'rfp',
    term: 'RFP',
    path: '/glossary/rfp',
    category: 'Proposals & Documents',
    metaTitle: 'What Is an RFP? Request for Proposal Meaning & Tips',
    metaDescription:
      'RFP meaning explained: what a request for proposal is, how freelancers and agencies respond to one, and how to decide whether it is worth bidding on.',
    keywords: ['RFP meaning', 'request for proposal', 'what is an RFP'],
    definition:
      'An RFP (request for proposal) is a document a company puts out to describe a project it wants done and invite freelancers or agencies to submit competing proposals, so it can compare approaches and prices before choosing a supplier.',
    body: [
      'An RFP, or request for proposal, flips the usual sales dance around. Instead of you pitching a client, the client — usually a company or organisation — writes up what it needs and invites several freelancers or agencies to propose how they would do it and what they would charge. The RFP document sets out the project background, goals, requirements, timeline, budget hints, and how to submit. Everyone who responds is competing on the same brief, so the client can line up the answers side by side and pick the one that fits best.',
      'RFPs are common wherever spending needs to be justified: larger companies, government bodies, NGOs, and corporates with procurement rules that stop them simply hiring the first freelancer they like. A formal RFP process gives them a paper trail and a fair way to compare options. For the freelancer or agency on the receiving end, it means the work is real and budgeted — but also that you are one of several, and the client has deliberately created competition on price and approach. Winning takes more than a good quote.',
      'Responding well starts before you write a word. Read the RFP closely and answer the brief they actually set, not the one you wish they had — mismatched responses get filtered out first. Address their stated goals and requirements point by point, show you understand their specific situation rather than pasting a generic pitch, and follow their format and deadline exactly, because sloppiness here signals sloppiness later. Where the RFP allows questions, thoughtful ones both sharpen your response and quietly demonstrate that you know the domain.',
      'For Indian freelancers and agencies, RFPs are worth understanding as you move upmarket from individual clients to companies and institutions. They open the door to larger, more stable projects, but they also cost real time to answer, so the crucial skill is deciding which to chase. A relevant portfolio, a realistic budget match, and some genuine connection to the buyer improve your odds; a cold RFP with dozens of bidders and a rock-bottom budget usually is not worth the hours. Treating every RFP as winnable is a fast way to burn a week for nothing.',
      'The smartest approach is to qualify hard, then commit fully to the few that fit. Ask whether you can realistically win, whether the budget is worth it, and whether the client is someone you actually want. For the ones that pass, put in a tailored, well-structured proposal that speaks directly to their brief and makes it easy to choose you. And whether you win or lose, keeping a record of what you submitted and what happened turns each RFP into practice that sharpens the next response, rather than a one-off effort you forget.',
    ],
    clienterNote:
      'When you respond to an RFP, Clienter helps you turn your answer into a polished proposal or quotation the client can review and sign online, and keeps that lead on your pipeline so you can track which bids convert — even though the RFP itself comes from the client’s own process.',
    related: [
      { href: '/templates', label: 'Templates', desc: 'Proposal starting points to respond faster.' },
      { href: '/features/crm-lead-pipeline', label: 'Lead Pipeline', desc: 'Track which bids convert.' },
      { href: '/crm-for-freelancers', label: 'CRM for Freelancers', desc: 'Manage enquiries end to end.' },
      { href: '/pricing', label: 'Pricing', desc: 'Free forever, or Pro from ₹199/month.' },
    ],
    relatedTerms: [
      { term: 'Proposal', slug: 'proposal' },
      { term: 'Quotation', slug: 'quotation' },
      { term: 'Lead pipeline', slug: 'lead-pipeline' },
    ],
  },
]
