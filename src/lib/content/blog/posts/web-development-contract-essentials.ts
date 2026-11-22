import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'web-development-contract-essentials',
  title: 'What Every Web Development Contract Should Contain',
  metaTitle: 'Web Development Contract Essentials',
  description:
    'The clauses that protect a website project — scope and exclusions, revisions, content deadlines, payment and late terms, IP and ownership, warranty, termination and the hold clause most contracts omit.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['contracts', 'web development', 'freelancing', 'agency operations', 'proposals'],
  primaryKeyword: 'web development contract',
  featured: false,
  intro:
    'Most web development disputes are not about bad work. They are about two people who agreed on something verbally in week one and remembered it differently in week nine — the number of revision rounds, whether the blog was included, who was supposed to write the copy, what happens now the client has gone quiet for a month. A contract is not protection against bad clients so much as a shared memory for ordinary ones. These are the clauses that actually earn their place. This is practical guidance, not legal advice; have a lawyer review your template once and it will serve you for years.',
  body: [
    { type: 'h2', text: 'Scope, and more importantly exclusions', id: 'scope-and-exclusions' },
    { type: 'p', text: 'Every contract describes what is included. The ones that work describe what is not, because disputes live almost entirely in the gap between the two.' },
    { type: 'p', text: 'Define the deliverable in countable terms: how many unique page templates, how many pages of content populated, which integrations by name, which browsers and devices supported, which CMS. “A modern responsive website” is not a scope; “six unique templates across fourteen pages, contact form, Google Maps embed, newsletter signup, on WordPress” is.' },
    { type: 'p', text: 'Then list the exclusions explicitly: copywriting, photography, logo and brand design, SEO campaigns, content population beyond the agreed page count, additional templates, hosting and third-party subscription costs, ongoing maintenance, and anything not named above. That final catch-all sentence — anything not expressly listed is out of scope and quoted separately — does more work than the rest of the document.' },

    { type: 'h2', text: 'Revisions, counted and defined', id: 'revisions' },
    { type: 'p', text: 'Unlimited revisions is not generosity, it is an unbounded liability and it makes projects worse. Decisions get deferred because they can always be changed later, and the project drifts.' },
    { type: 'p', text: 'State the number of rounds per stage — two per design stage is standard — and define what a round is: one consolidated set of feedback, delivered together, not a trickle of individual messages over a fortnight. Say what happens after: further rounds are billed at your hourly rate, quoted in advance. And set a feedback window, typically five working days, after which the stage is deemed approved so a project cannot be parked indefinitely in review.' },

    { type: 'h2', text: 'Client responsibilities and content deadlines', id: 'client-responsibilities' },
    { type: 'p', text: 'Almost no freelance contract includes this clause, and it is the one that prevents the most common failure mode in web projects: the build finishes and the launch waits three months on the client’s copy.' },
    { type: 'ul', items: [
      'A date by which all copy, images and brand assets are due.',
      'A statement that the delivery schedule assumes that date and moves if it slips.',
      'Who the single point of contact and decision-maker is, and a response time for approvals.',
      'A requirement to provide access — hosting, domain, existing site, third-party accounts — by a given date.',
      'A hold clause: if required materials or approvals are outstanding beyond 30 days, the project pauses, remaining milestones become payable, and restarting is subject to current availability and rates.',
    ] },
    { type: 'callout', text: 'The hold clause is the single most valuable paragraph in a web development contract. Without it, a client who goes quiet can freeze your billing indefinitely while occupying a slot in your schedule, and you have no stated mechanism to end it.' },

    { type: 'h2', text: 'Payment terms that mean something', id: 'payment-terms' },
    { type: 'p', text: 'Specify the total fee, the milestone split, what triggers each milestone, and the payment window. Use dates rather than jargon — “payable within 14 days of invoice date” beats “Net 14” for a client who has never worked with agencies.' },
    { type: 'ul', items: [
      'A deposit of 30–50%, payable before work starts. State that work begins on receipt, not on signature.',
      'Milestones tied to verifiable events — design approval, build complete, launch — not to calendar dates.',
      'Late payment interest, stated as a monthly percentage, plus the right to suspend work while an invoice is overdue.',
      'Who bears transaction costs and currency conversion on international payments.',
      'Tax treatment — GST where applicable, or the correct handling for an overseas client.',
      'That out-of-scope work is quoted and approved in writing before it begins.',
    ] },
    { type: 'p', text: 'The right to suspend work on overdue payment matters as much as the interest. Interest is a deterrent; suspension is a remedy, and the clause is far easier to invoke when it was agreed up front than when you are improvising it in month three.' },

    { type: 'h2', text: 'Intellectual property and ownership', id: 'ip-and-ownership' },
    { type: 'p', text: 'Be specific, because the default assumptions differ by jurisdiction and neither party usually knows what they are.' },
    { type: 'ul', items: [
      'What transfers to the client on final payment — typically the design and the custom code written for this project.',
      'What does not transfer: your pre-existing frameworks, libraries, internal tooling and reusable components, which you license to them perpetually for use in this project instead.',
      'Third-party licences — themes, plugins, fonts, stock images — and who pays for and holds them.',
      'That transfer is conditional on full payment. This is standard and it is one of your strongest protections.',
      'Your right to display the work in your portfolio and name the client as one, with an opt-out for clients under NDA.',
    ] },

    { type: 'h2', text: 'Warranty, support and the boundary after launch', id: 'warranty-and-support' },
    { type: 'p', text: 'State a defects period — thirty days is typical — covering bugs in what you built, and say plainly what it excludes: new features, content changes, problems caused by the client’s own edits, third-party plugin and platform updates, and anything after the period ends.' },
    { type: 'p', text: 'Then point at what comes next: support beyond the warranty is available under a maintenance plan or at your hourly rate. Without that sentence, the warranty quietly becomes permanent, and a project from two years ago is still consuming your week for free.' },

    { type: 'h2', text: 'Termination, liability and the practical clauses', id: 'termination-and-liability' },
    { type: 'ul', items: [
      'Either party may terminate with written notice; work completed to date is payable, and the deposit is non-refundable.',
      'A cap on liability, typically the total project fee. Unlimited liability on a ₹3,00,000 project is a risk nobody is being paid to take.',
      'Confidentiality, mutual, covering anything either side learns about the other’s business.',
      'Governing law and jurisdiction — meaningful if your clients are overseas.',
      'Force majeure, in sober language.',
      'That the agreement supersedes prior discussions, and that changes must be in writing. This is the clause that retires the verbal promise someone remembers differently.',
    ] },

    { type: 'h2', text: 'Make it signable', id: 'make-it-signable' },
    { type: 'p', text: 'A contract nobody signs protects nobody, and the usual obstacle is friction: a PDF emailed for printing, signing and scanning takes a week and sometimes never comes back. Use electronic signature, keep the document to a length a non-lawyer will read, and write it in plain language. A four-page agreement that gets signed on the day beats a fifteen-page one sitting in a client’s downloads folder.' },
    { type: 'p', text: 'Keep the signed copy attached to the client and the project, not in a folder on your laptop. The entire value of these clauses depends on being able to find and quote the exact wording quickly in month three — which is why Clienter stores proposals and signed documents on the client record alongside the project and its invoices.' },

    { type: 'h2', text: 'The short list', id: 'the-short-list' },
    { type: 'p', text: 'Countable scope with explicit exclusions and a catch-all. Defined revision rounds with a feedback window. Client responsibilities with a content deadline and a thirty-day hold clause. Milestone payments tied to events, with late interest and the right to suspend. IP transferring on full payment, with your reusable work licensed rather than assigned. A thirty-day warranty with clear limits. Termination, liability cap, confidentiality, and changes in writing. Get that reviewed once by a lawyer in your jurisdiction and use it for every project.' },
  ],
  faqs: [
    { q: 'What should a web development contract include?', a: 'Countable scope with explicit exclusions, defined revision rounds and a feedback window, client responsibilities including a content deadline and a hold clause, milestone payment terms tied to verifiable events, IP transfer conditional on full payment, a warranty period with stated limits, and the standard protections — termination, liability cap, confidentiality, and a requirement that changes be in writing.' },
    { q: 'How many revisions should a web design contract allow?', a: 'Two rounds per design stage is the common standard. The number matters less than the definition: a round is one consolidated set of feedback delivered together, not a trickle of messages over two weeks. Add a feedback window of about five working days after which the stage is deemed approved, so a project cannot be parked indefinitely in review.' },
    { q: 'Who owns the website code — the developer or the client?', a: 'Whatever the contract says, which is why it must say something. The usual arrangement is that the design and the custom code written for the project transfer to the client on final payment, while your pre-existing frameworks, libraries and reusable components stay yours and are licensed to them perpetually for use in that project. Third-party licences should be held and paid for by the client.' },
    { q: 'What is a hold clause and why does it matter?', a: 'It states that if the client leaves required content, access or approvals outstanding beyond a defined period — usually 30 days — the project is paused, remaining milestones become payable, and restarting is subject to current rates and availability. Without it, a client who goes quiet can freeze your billing indefinitely while still occupying a slot in your schedule, and you have no agreed mechanism to end it.' },
    { q: 'Do freelancers really need a written contract for small projects?', a: 'Yes, and small projects are where the absence hurts most, because they are the ones people skip the paperwork on. The contract is not mainly a defence against bad clients — it is a shared memory for ordinary ones, settling the revision count, the content deadline and the payment schedule before anyone has a reason to remember them differently. A four-page plain-language template, e-signed, is enough.' },
  ],
  related: [
    { href: '/blog/how-to-write-a-proposal-that-wins', label: 'How to write a proposal that wins', desc: 'The document the contract follows.' },
    { href: '/blog/how-to-prevent-scope-creep', label: 'How to prevent scope creep', desc: 'Using the scope clause in practice.' },
    { href: '/blog/website-project-milestone-payments', label: 'Milestone payments', desc: 'Structuring the payment clause.' },
    { href: '/templates', label: 'Free templates', desc: 'Proposal and invoice templates to start from.' },
  ],
}
