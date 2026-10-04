import type { BlogPost } from '../_type'

/**
 * DRAFT — see `draft` in ../_type.ts. Written 2026-10-04, unpublished.
 * Cluster: proposals and quotes (docs/content-plan.md). Middle of funnel.
 */
export const POST: BlogPost = {
  draft: true,
  slug: 'how-to-write-a-proposal-that-wins',
  title: 'How to Write a Proposal That Wins the Work',
  metaTitle: 'How to Write a Proposal That Wins the Work',
  description:
    'A proposal structure that wins: what goes in each of the eight sections, how to present price, and the three mistakes that lose work you should have won.',
  date: '2026-10-04',
  author: 'Talagana Rajesh',
  category: 'Freelance business',
  categorySlug: 'freelance-business',
  tags: ['proposals', 'sales', 'pricing'],
  primaryKeyword: 'how to write a proposal',
  intro:
    'A winning proposal is not a better-looking price list. It is a document that proves you understood the problem, shows the client exactly what they get, removes the reasons to hesitate, and makes saying yes a single easy action. Most lost proposals are not lost on price — they are lost because the client could not tell what they were buying, or because the document arrived a week after the enthusiasm did. Here is the structure that works and the thinking behind each part.',
  body: [
    {
      type: 'p',
      text: 'The eight sections, in order: a one-paragraph summary of their problem in their words, what you propose to do, the deliverables with exclusions, the timeline, the price with options, the proof, the terms, and one obvious way to accept. Send it within 24 hours of the conversation. That is the whole method; the rest is why.',
    },

    { type: 'h2', text: 'A proposal is not a quotation', id: 'proposal-vs-quote' },
    {
      type: 'p',
      text: 'A quotation answers "how much". A proposal answers "why you, why this approach, and why now" — and then answers "how much" as a consequence. The distinction matters because they do different jobs. For a small, well-defined task where the client already trusts you, a quote is plenty and a proposal is overkill. For anything where you are being compared, or where the client is spending enough that they need to justify it to someone, the proposal does the persuading a bare price never can.',
    },
    {
      type: 'p',
      text: 'The practical test: is the client choosing between you and someone else, or between doing this and not doing it? If either, write a proposal.',
    },

    { type: 'h2', text: 'Section 1 — Their problem, in their words', id: 'problem' },
    {
      type: 'p',
      text: 'Open with one paragraph describing the situation they described to you. Not your services. Not your company history. Their problem, using the phrases they used on the call.',
    },
    {
      type: 'p',
      text: 'This is the highest-leverage paragraph in the document and almost everyone skips it. It does two things at once: it proves you were listening, which is the single biggest differentiator in a competitive pitch, and it gets agreement on the premise before you ask for money. A client who reads the first paragraph and thinks "yes, that is exactly it" reads the rest of the document generously.',
    },
    {
      type: 'callout',
      text: 'If you cannot write this paragraph, you do not know enough to quote. That is a signal to have another conversation, not to write a vaguer proposal.',
    },

    { type: 'h2', text: 'Section 2 — What you propose to do, and why that', id: 'approach' },
    {
      type: 'p',
      text: 'Describe the approach in plain language, with the reasoning attached. Not "Phase 1: Discovery" as a bare label, but what discovery means here, what it will produce, and why skipping it would cost them. The reasoning is what distinguishes a considered proposal from a template with their name pasted in.',
    },
    {
      type: 'p',
      text: 'Keep it to the level of detail a decision-maker needs. They are not buying your methodology; they are buying confidence that you have one.',
    },

    { type: 'h2', text: 'Section 3 — Deliverables, with exclusions', id: 'deliverables' },
    {
      type: 'p',
      text: 'List exactly what they receive, in countable terms. "Five page designs, delivered as Figma files, plus a built and deployed WordPress site" rather than "a website". Then list what is not included, which is the section that protects both of you. Copywriting, content entry, stock photography, hosting, ongoing maintenance, training, anything after launch — name the things clients commonly assume.',
    },
    {
      type: 'p',
      text: 'Exclusions do not read as mean. They read as experienced. The client who sees an exclusions list learns that you have done this before and that nothing will be invented halfway through.',
    },

    { type: 'h2', text: 'Section 4 — Timeline, with their dependencies named', id: 'timeline' },
    {
      type: 'p',
      text: 'Give milestone dates rather than a single end date, and state what you need from them to hit each one. "Designs within two weeks of receiving brand assets and content" is a commitment you can keep. "Designs by the 14th" is a hostage situation.',
    },
    {
      type: 'p',
      text: 'Naming the client’s dependencies in the proposal is also the politest possible way to establish that delays can be theirs. It is much easier to point at later if it was agreed up front.',
    },

    { type: 'h2', text: 'Section 5 — Price, presented as a decision', id: 'price' },
    {
      type: 'p',
      text: 'Do not bury the price and do not apologise for it. Put it in its own clearly labelled section with the payment schedule next to it, so the client can see not only what it costs but when each amount is due.',
    },
    {
      type: 'p',
      text: 'Where it fits the work, offer two or three options rather than one number. A single price is a yes-or-no question; three options turn the conversation from "should we do this" into "which of these". A common and honest shape is a core option that solves the stated problem, a larger one that adds the thing they mentioned wanting eventually, and sometimes a smaller one that proves the approach on a limited scope.',
    },
    {
      type: 'p',
      text: 'Two cautions. Make each option genuinely distinct, not the same work with a feature removed to make the middle one look sensible — clients notice. And do not offer five; too many options is a reason to postpone.',
    },

    { type: 'h2', text: 'Section 6 — Proof, as specific as you can make it', id: 'proof' },
    {
      type: 'p',
      text: 'One relevant piece of evidence is worth more than a page of logos. A short case study of similar work, naming the problem and the outcome, is best. A testimonial from a comparable client is next. A link to live work is better than a screenshot. If you are early and have none of these, say what you have done that is adjacent rather than inflating what you have — a proposal that gets caught overstating is a lost proposal.',
    },
    {
      type: 'p',
      text: 'Verified reviews, where you have them, carry more weight than quotes you typed out yourself, for the obvious reason.',
    },

    { type: 'h2', text: 'Section 7 — Terms, kept short', id: 'terms' },
    {
      type: 'p',
      text: 'A short terms section covers payment schedule and any advance, revision rounds included, the change-order process for extra work, ownership of the work and when it transfers, and how either side can end the engagement. Half a page. The full contract can follow; this is so nothing in it is a surprise.',
    },

    { type: 'h2', text: 'Section 8 — One obvious way to say yes', id: 'accept' },
    {
      type: 'p',
      text: 'End with a single action. A signature field, or one named next step. Not "let me know your thoughts", which is not an action and invites a week of silence.',
    },
    {
      type: 'p',
      text: 'This is where a surprising number of good proposals quietly die. The client is convinced, there is nothing specific to do, the document goes into a tab, and the tab gets closed. One click to accept removes the gap between deciding and acting.',
    },

    { type: 'h2', text: 'The structure at a glance', id: 'structure' },
    {
      type: 'table',
      headers: ['Section', 'The job it does', 'Length'],
      rows: [
        ['Their problem', 'Proves you listened; agrees the premise', '1 paragraph'],
        ['Your approach', 'Shows you have a considered method', '2–4 paragraphs'],
        ['Deliverables & exclusions', 'Removes ambiguity about what they get', 'A list'],
        ['Timeline', 'Sets expectations; names their dependencies', 'Milestones'],
        ['Price & options', 'Turns yes/no into which', 'Its own section'],
        ['Proof', 'Lowers the risk of choosing you', '1 strong example'],
        ['Terms', 'No surprises in the contract', 'Half a page'],
        ['Accept', 'Converts a decision into an action', '1 click'],
      ],
    },

    { type: 'h2', text: 'Speed beats polish', id: 'speed' },
    {
      type: 'p',
      text: 'Client interest decays fast. The proposal that arrives the same day, while the conversation is still vivid, routinely beats the more beautiful one that arrives a week later. If you are choosing between sending something good tomorrow and something perfect next week, send it tomorrow.',
    },
    {
      type: 'p',
      text: 'The way to have both is to stop writing proposals from scratch. Keep a structure you reuse, keep the sections that never change as saved text, and spend your actual writing time on the first paragraph and the approach — the two parts that have to be specific to this client. That is also the honest use for an AI drafting tool: produce the scaffolding and the boilerplate in a minute, then write the parts that require having been on the call.',
    },

    { type: 'h2', text: 'Three mistakes that lose winnable work', id: 'mistakes' },
    {
      type: 'ol',
      items: [
        'Leading with yourself. A proposal that opens with your company history is talking about the wrong person. Open with their problem.',
        'Hiding the price, or leaving out the payment schedule. It reads as unconfident, and it guarantees a follow-up email instead of a decision.',
        'No clear way to accept. "Let me know your thoughts" is not a call to action, and the proposal with no signature field is the one still sitting in a tab.',
      ],
    },
    {
      type: 'p',
      text: 'A fourth, if you want it: sending the same proposal to everyone. Templates are good and reused structure is good. A document that could have been sent to any client, however, tells the client exactly that.',
    },

    { type: 'h2', text: 'What follow-up should look like', id: 'follow-up' },
    {
      type: 'p',
      text: 'Say in the proposal when you will follow up, then do it. Three to five working days is normal, and a short message that adds something — answering a question that came up, or noting a slot in your calendar you are holding — is better than "just checking in". Two follow-ups is enough; after that you are chasing someone who has decided and not told you, and your energy is better spent on the next conversation.',
    },
    {
      type: 'p',
      text: 'Knowing whether the document was opened is genuinely useful here, because a proposal read three times and not answered is a different problem from one never opened.',
    },
    {
      type: 'p',
      text: 'In Clienter, a quote can be drafted from the requirements with an AI builder that works from your own past rates, sent as a link, signed in the client’s portal, and turned into a project and an invoice the moment it is accepted — so the gap between yes and started is minutes rather than days.',
    },
  ],
  faqs: [
    {
      q: 'How long should a proposal be?',
      a: 'As short as it can be while still answering the client’s questions — usually two to four pages for small-agency work. Length is not persuasive; specificity is. If a section is there to look thorough rather than to help them decide, cut it.',
    },
    {
      q: 'Should I put the price in the proposal or wait to discuss it?',
      a: 'Put it in, in its own clearly labelled section, with the payment schedule next to it. Withholding the price reads as unconfident and guarantees another round of email before any decision gets made. If you are worried the number will shock them, that conversation needed to happen before the proposal, not inside it.',
    },
    {
      q: 'Should a proposal offer multiple pricing options?',
      a: 'Usually yes, where the work genuinely supports it. Two or three options turn a yes-or-no decision into a which-one decision. Make them meaningfully different rather than the same scope with features removed, and stop at three — more options is a reason to postpone.',
    },
    {
      q: 'How quickly should I send a proposal after a call?',
      a: 'Within 24 hours if you can, and within three days at the outside. Client interest decays quickly, and a good proposal sent today generally beats a better one sent next week. Reusing a structure is what makes that possible.',
    },
    {
      q: 'What is the difference between a proposal and a quotation?',
      a: 'A quotation prices a defined piece of work. A proposal wraps that price in context: what you understood about the problem, the approach you recommend, what is and is not included, and why you are the right choice. Use a quote for small, well-defined jobs with a client who already trusts you; use a proposal whenever you are being compared.',
    },
    {
      q: 'How many times should I follow up on a proposal?',
      a: 'Twice. The first after three to five working days, the second about a week later, each adding something rather than just checking in. Beyond that you are chasing someone who has already decided and not said so, and the time is better spent on the next opportunity.',
    },
  ],
  related: [
    {
      href: '/templates/project-proposal-template',
      label: 'Project proposal template',
      desc: 'This structure, ready to fill in.',
    },
    {
      href: '/glossary/proposal',
      label: 'What is a proposal?',
      desc: 'The definition, and how it differs from a quote.',
    },
    {
      href: '/tools/quotation-generator',
      label: 'Quotation generator',
      desc: 'For the jobs that only need a price.',
    },
    {
      href: '/blog/how-to-prevent-scope-creep',
      label: 'Preventing scope creep',
      desc: 'Why the exclusions section earns its place.',
    },
  ],
}
