import type { BlogPost } from '../_type'

/**
 * DRAFT — see `draft` in ../_type.ts. Written 2026-10-04, unpublished.
 * Cluster: scope creep (docs/content-plan.md). Middle of funnel.
 */
export const POST: BlogPost = {
  draft: true,
  slug: 'how-to-prevent-scope-creep',
  title: 'How to Prevent Scope Creep (Without Being Difficult About It)',
  metaTitle: 'How to Prevent Scope Creep on Client Projects',
  description:
    'Scope creep is a documentation problem, not a client problem. How to prevent it with scope, exclusions and change orders — and what to say when it happens.',
  date: '2026-10-04',
  author: 'Talagana Rajesh',
  category: 'Agency operations',
  categorySlug: 'agency-operations',
  tags: ['scope creep', 'contracts', 'agency'],
  primaryKeyword: 'how to prevent scope creep',
  intro:
    'Scope creep is the slow expansion of what a client expects for the same money: one more revision round, a second landing page, "while you’re in there, could you…". It is almost never bad faith. It is what happens when two people agreed on a deliverable without agreeing on its edges, and the only person tracking the drift is the one doing the work. Preventing it is a documentation habit, not a personality trait — and the four mechanisms below do most of the job.',
  body: [
    {
      type: 'p',
      text: 'The short answer: write down what is excluded as carefully as what is included, cap the things that are naturally uncapped (revisions, meetings, hours), put a named change-order process in the contract so saying "that’s extra" is a procedure rather than a confrontation, and log every request the day it arrives. The rest of this explains why each of those works.',
    },

    { type: 'h2', text: 'Scope creep is a definition problem, not a client problem', id: 'definition' },
    {
      type: 'p',
      text: 'Picture a quote that says "Design and build a five-page website." Both sides read it and agree. The client is picturing the five pages, a few rounds of tweaks, someone loading their content, a logo tidy-up and whatever "making it work on mobile" involves. You are picturing five page designs and a build against supplied content. Nobody has lied. The document simply did not say.',
    },
    {
      type: 'p',
      text: 'That gap is where scope creep lives. The client asks for something they genuinely believed was included; you either absorb it or have an awkward conversation; and whichever you choose, the relationship gets slightly worse. Which is why the fix is upstream, in how the work was described, rather than downstream in how firmly you say no.',
    },

    { type: 'h2', text: 'Mechanism 1 — Write the exclusions down', id: 'exclusions' },
    {
      type: 'p',
      text: 'Most quotes list what is included. Few list what is not, and the exclusions are where the money leaks. An "Out of scope" section is the cheapest protection available, and it does not read as defensive — it reads as someone who has done this before.',
    },
    {
      type: 'p',
      text: 'Be concrete and name the things people actually assume. Copywriting and content entry. Stock photography and licences. Hosting, domains and ongoing maintenance. Third-party plugin or app subscriptions. Translation. Accessibility auditing. Training. Anything after launch. Each line costs you one sentence and saves you a conversation.',
    },
    {
      type: 'callout',
      text: 'A useful test for a quote: could a reasonable stranger tell, from this document alone, whether writing the About page copy is your job? If not, the quote is not finished.',
    },

    { type: 'h2', text: 'Mechanism 2 — Cap whatever is naturally uncapped', id: 'caps' },
    {
      type: 'p',
      text: 'Some parts of a project have no inherent end, and those are the ones that need a number. Revisions: "two rounds of revisions per deliverable, further rounds billed at the hourly rate" is clear and normal. Meetings: a weekly call plus the kickoff is a scope item like any other. Hours on a retainer: a monthly cap, in writing, with what happens on overflow.',
    },
    {
      type: 'p',
      text: 'A cap is not an insult to the client. It is how both of you can tell when the work has grown, which is the thing neither of you can currently see. Clients who are given a cap of two revision rounds usually use one and a half, because they know it is finite.',
    },

    { type: 'h2', text: 'Mechanism 3 — Put a change order in the contract', id: 'change-orders' },
    {
      type: 'p',
      text: 'A change order is a short written note that says: here is the extra thing you asked for, here is what it costs, here is what it does to the timeline, reply "approved" and we will do it. That is all it is. Its value is that it turns a difficult conversation into an administrative step.',
    },
    {
      type: 'p',
      text: 'The important part is that it is named in the contract before anything goes wrong. "Changes to the agreed scope will be quoted as a written change order and begin once approved" is one sentence, and it means the first time you send one you are following the agreement rather than inventing a charge. Nobody argues with a process they already signed.',
    },
    {
      type: 'p',
      text: 'Send change orders for small things too, including free ones. A change order priced at zero — "this one is on us, noting it so the scope record stays accurate" — builds enormous goodwill and quietly establishes that extras are tracked. The client who has had three free change orders is far easier to charge on the fourth.',
    },

    { type: 'h2', text: 'Mechanism 4 — Log requests the day they arrive', id: 'log' },
    {
      type: 'p',
      text: 'Scope creep is cumulative and individually invisible. No single request is worth a conversation; twelve of them are worth a fortnight. If nothing is written down, you only notice when the project is already late and you are already resentful, which is the worst possible moment to raise it.',
    },
    {
      type: 'p',
      text: 'So log each request against the project as it comes in, with the date and the rough effort. Two things follow. You can see the trend early, while it is still a cheerful "we’re about 30% past the original scope, shall we talk about it?" rather than a grievance. And you have the evidence, which converts an argument about feelings into a conversation about a list.',
    },

    { type: 'h2', text: 'What to say when it happens', id: 'what-to-say' },
    {
      type: 'p',
      text: 'The phrasing that works is neither a flat no nor a silent yes. It is "yes, and here is what that costs". You are not refusing the request; you are pricing it, which is your job.',
    },
    {
      type: 'table',
      headers: ['They say', 'A reply that holds the line'],
      rows: [
        [
          'Could you also do a second landing page?',
          'Happy to. That is outside the five pages we scoped, so I will send a change order with the cost and the new date — probably about a week.',
        ],
        [
          'Can we have one more round of changes?',
          'Of course. We are past the two rounds in the quote, so this one is billed hourly. I will estimate it before starting so there are no surprises.',
        ],
        [
          'This should be quick, it is only a small tweak.',
          'Some are, some are not. Let me look and come back with an estimate — if it really is ten minutes I will just do it.',
        ],
        [
          'I assumed the copy was included.',
          'I can see why — let me point at the exclusions in the quote so we are working from the same page, and then quote the copy separately if you would like us to do it.',
        ],
      ],
    },
    {
      type: 'p',
      text: 'Note what none of those do: relitigate whether the client should have known. You will not win that, and winning it is worth less than the relationship.',
    },

    { type: 'h2', text: 'When to absorb it anyway', id: 'when-to-absorb' },
    {
      type: 'p',
      text: 'Being rigorous about scope is not the same as charging for everything. Absorb the genuinely small thing, especially early, when the relationship is worth more than the twenty minutes. Absorb your own mistakes without being asked. Absorb something once as a gesture with a good long-term client, and say that is what you are doing so it is understood as a gesture rather than a precedent.',
    },
    {
      type: 'p',
      text: 'What you should not do is absorb silently and repeatedly. That is how a profitable project becomes a break-even one and a good client becomes one you resent, with the client never finding out there was a problem.',
    },

    { type: 'h2', text: 'Retainers need their own answer', id: 'retainers' },
    {
      type: 'p',
      text: 'Retainers are the most scope-creep-prone arrangement in client services, because "ongoing support" has no edges at all. The fee is fixed, the expectations are not, and the drift compounds every month instead of ending with the project.',
    },
    {
      type: 'p',
      text: 'Three things make a retainer safe. A written cap, in hours or deliverables per month. A short monthly report showing delivered against the cap, sent whether or not anyone asked for it. And a standing rule that consistent overflow triggers a conversation about a bigger retainer, not a quiet absorption. If you are over the cap three months running, the retainer is priced wrong and both of you benefit from saying so.',
    },

    { type: 'h2', text: 'Where tooling helps', id: 'tooling' },
    {
      type: 'p',
      text: 'Scope control is mostly a writing habit, and no tool supplies the habit. What a tool can do is make the record exist without extra effort: the quote with its exclusions, the signed contract, the project budget against actual, the extra requests logged against the project, the retainer invoice raising itself each month.',
    },
    {
      type: 'p',
      text: 'In Clienter, the quote becomes the signed contract, the project carries a budget you can watch, extra work is recorded against the project rather than in your inbox, and retainers invoice automatically on their billing day. The value is not sophistication — it is that the evidence for an awkward conversation already exists when you need it.',
    },
  ],
  faqs: [
    {
      q: 'What is scope creep?',
      a: 'The gradual expansion of what a client expects for the same fee — extra revision rounds, additional deliverables, small requests that accumulate. It is usually caused by a scope document that described what was included without describing its edges, not by a client acting in bad faith.',
    },
    {
      q: 'How do I prevent scope creep without damaging the relationship?',
      a: 'Do the work before it happens rather than during. Write the exclusions into the quote, cap revisions and meetings, name a change-order process in the contract, and log requests as they arrive. Then when something extra comes up you are following an agreed procedure rather than inventing a charge, which is what makes the conversation feel administrative instead of adversarial.',
    },
    {
      q: 'What is a change order?',
      a: 'A short written note describing extra work, its cost and its effect on the timeline, which the client approves before you start. It is the mechanism that turns "that is not included" from a confrontation into a step in a process. Worth sending even for free extras, priced at zero, so the scope record stays accurate.',
    },
    {
      q: 'Should I charge for every small extra request?',
      a: 'No. Absorb the genuinely small ones, especially early, and absorb your own mistakes without being asked. What you should not do is absorb repeatedly and silently — that turns a profitable project into a break-even one without the client ever learning there was a problem. Log everything, charge selectively.',
    },
    {
      q: 'How many revision rounds should a contract allow?',
      a: 'Two per deliverable is a common and defensible default, with further rounds billed hourly. The exact number matters less than stating one: an uncapped revision clause has no natural end, and clients given a finite number generally use fewer than they are allowed.',
    },
    {
      q: 'Why do retainers suffer from scope creep more than projects?',
      a: 'Because a project ends and a retainer does not, so the drift compounds instead of resetting. "Ongoing support" has no edges unless you give it some. Cap the hours or deliverables per month in writing, send a short monthly report of delivered-against-cap whether or not anyone asks, and treat three consecutive months of overflow as a pricing conversation.',
    },
  ],
  related: [
    {
      href: '/glossary/scope-of-work',
      label: 'Scope of work',
      desc: 'What belongs in one, and what to exclude.',
    },
    {
      href: '/glossary/change-order',
      label: 'Change order',
      desc: 'The mechanism, in one page.',
    },
    {
      href: '/templates/scope-of-work-template',
      label: 'Scope of work template',
      desc: 'A starting point with an exclusions section.',
    },
    {
      href: '/blog/monthly-retainers-vs-project-pricing',
      label: 'Retainers vs project pricing',
      desc: 'Where the creep risk differs.',
    },
  ],
}
