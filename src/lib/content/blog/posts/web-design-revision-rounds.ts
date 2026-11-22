import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'web-design-revision-rounds',
  title: 'Revision Rounds: How to Stop Web Design Feedback Loops',
  metaTitle: 'Web Design Revision Rounds Explained',
  description:
    'How to define revision rounds, collect feedback that is actually usable, handle the client who keeps changing their mind, and bill extra rounds without damaging the relationship.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['web design', 'process', 'client management', 'scope', 'contracts'],
  primaryKeyword: 'web design revision rounds',
  featured: false,
  intro:
    'A design that takes three weeks and eleven rounds was not a harder design than one that took two rounds. It was a worse-run process. Revision loops are the most predictable way a profitable web project becomes an unprofitable one, and they are caused less by indecisive clients than by vague asks, unstructured feedback, and a round that was never defined in the first place.',
  body: [
    { type: 'h2', text: 'Define what a round actually is', id: 'define-a-round' },
    { type: 'p', text: 'Most contracts say “two rounds of revisions” and leave the word round undefined, which makes it meaningless. If a client sends four separate messages over nine days, is that one round or four? Both parties will answer in whichever way favours them, and neither is being dishonest.' },
    { type: 'p', text: 'Define it in the agreement: a round is one consolidated set of feedback, delivered together, within a stated window — typically five working days. Feedback arriving after a round has begun is held for the next one. That single sentence eliminates the trickle, which is the real problem: scattered feedback forces you to re-enter the design repeatedly, and the re-entry costs more than the changes.' },
    { type: 'callout', text: 'Two rounds per stage is the standard that works. One is too few for genuine collaboration; three or more encourages deferred decisions, because the client knows there is always another chance to change their mind.' },

    { type: 'h2', text: 'Most revision loops start before the design', id: 'loops-start-early' },
    { type: 'p', text: 'When a first design gets a reaction like “it’s not quite what I imagined”, the problem is almost never the design. It is that nobody established what the client imagined, in a form specific enough to design against.' },
    { type: 'p', text: 'Spend an hour up front that saves a fortnight later. Collect three to five sites the client likes, and — more useful — ask what specifically they like about each, because “clean” means six different things. Agree the brand direction, the colour and type constraints, and the one job the homepage has to do. Where possible, get sign-off on a wireframe or a single style tile before investing in full page designs.' },
    { type: 'p', text: 'Present the first design with reasoning rather than as a reveal. Walking a client through why the hero is structured as it is converts the conversation from taste to purpose, and a client who understands the reasoning gives far better feedback than one presented with a finished artefact and asked whether they like it.' },

    { type: 'h2', text: 'Make feedback structured', id: 'structured-feedback' },
    { type: 'p', text: '“Can you make it pop more?” is not a failing of the client. It is a failing of how you asked. Clients are not trained to critique design, so they fall back on vague adjectives — unless you give them a structure.' },
    { type: 'ul', items: [
      'Ask for feedback against the page’s purpose: does this page make the next step obvious? Not: do you like it?',
      'Request comments in one place — annotations on the design, or a single numbered list — not across email, WhatsApp and a call.',
      'Ask for the problem rather than the solution. “The pricing feels hidden” tells you more than “move the pricing up”, and often has a better answer than the one proposed.',
      'Require one consolidated response from the decision-maker. Feedback assembled from four stakeholders with contradictory opinions is the client’s to resolve before it reaches you, not yours to referee.',
      'Separate subjective preference from functional problems, and handle them differently. A broken mobile layout is a defect; a colour someone dislikes is a preference.',
    ] },
    { type: 'p', text: 'Translating vague feedback is a skill worth practising. When you hear “make it pop”, ask what they want a visitor to notice first. The answer is usually actionable, and it is usually not more contrast.' },

    { type: 'h2', text: 'The committee problem', id: 'the-committee-problem' },
    { type: 'p', text: 'The fastest way to eleven rounds is three stakeholders who have never spoken to each other. Each sees the design separately, each has an opinion, and the opinions conflict — so you are now mediating an internal disagreement you are not being paid to mediate and cannot win.' },
    { type: 'p', text: 'Name one decision-maker in the contract, and say that feedback must be consolidated by them. When contradictory comments arrive anyway, do not pick a side. Send them back: “These two points conflict — which direction would you like me to take?” It feels awkward once and saves days, and it puts the resolution where it belongs.' },

    { type: 'h2', text: 'When the rounds run out', id: 'when-rounds-run-out' },
    { type: 'p', text: 'The agreement says two rounds; the client asks for a third. How you handle this determines both your margin and the relationship, and the answer is neither silently absorbing it nor refusing.' },
    { type: 'p', text: 'Say yes with a price, matter-of-factly and in advance. “Happy to do these — this is round three, so it would be billed at ₹X, roughly four hours. Shall I go ahead?” Reasonable clients accept this without friction. What damages relationships is not charging for extra work; it is surprising someone with a charge they were not warned about, or grudgingly absorbing the work and letting resentment show up elsewhere.' },
    { type: 'p', text: 'And distinguish honestly between a revision and a fix. If something does not match the agreed brief, that is yours to correct and should not count as a round. If the brief has changed, that is a revision. Being scrupulous about that line is what gives you the standing to charge confidently for the other.' },

    { type: 'h2', text: 'Close each stage properly', id: 'close-each-stage' },
    { type: 'p', text: 'A design stage that is never formally closed stays open forever, and changes arrive during the build when they are five times more expensive to make.' },
    { type: 'p', text: 'Get written sign-off with a date at the end of the design stage, and state in the contract that post-approval changes are quoted as new work. Add a review window — if feedback does not arrive within five working days, the stage is deemed approved — so a project cannot be parked indefinitely while you hold capacity for it.' },
    { type: 'p', text: 'Keep that approval where you can find it. A dated sign-off attached to the project is the difference between “we agreed this in September” as an assertion and as a fact. Clienter stores approvals, the change log and the invoices on the project itself for exactly that reason — not because it is sophisticated, but because an approval in an email thread may as well not exist.' },

    { type: 'h2', text: 'The summary', id: 'the-summary' },
    { type: 'p', text: 'Define a round as one consolidated set of feedback within five working days. Do the alignment work before designing, and present with reasoning rather than as a reveal. Give clients a structure for feedback and insist it comes from one decision-maker. Charge for extra rounds openly and in advance, while fixing genuine misses for free. Close each stage with a dated written approval. Do that and two rounds is usually enough — which is better for the design as well as for the invoice.' },
  ],
  faqs: [
    { q: 'How many revision rounds should a web design project include?', a: 'Two per stage is the standard that works. One leaves no room for genuine collaboration; three or more encourages the client to defer decisions, because there is always another chance to change their mind. What matters more than the number is defining what a round is — one consolidated set of feedback delivered together, within a stated window.' },
    { q: 'What counts as a revision round?', a: 'One consolidated set of feedback, delivered together, within a defined window such as five working days. Anything arriving after that round has begun is held for the next one. Without that definition a trickle of individual messages over two weeks can be argued to be one round, and the repeated re-entry into the design costs more than the changes themselves.' },
    { q: 'How do I charge for extra revision rounds without upsetting the client?', a: 'Quote it before doing the work, plainly and without apology: this is round three, it would be billed at this amount, shall I proceed? Clients almost never object to that. What damages relationships is an unannounced charge, or absorbing the work resentfully. Also be scrupulous about fixing genuine misses against the brief for free — that is what gives you standing to charge for the rest.' },
    { q: 'How do I handle vague design feedback like “make it pop”?', a: 'Translate it into a question about purpose: what do you want a visitor to notice first? Ask for the problem rather than the proposed solution, request comments in one place rather than across several channels, and frame the review around whether the page does its job rather than whether the client likes it. Vague feedback is usually a symptom of being asked a vague question.' },
    { q: 'What if multiple stakeholders give conflicting feedback?', a: 'Do not pick a side — you cannot win an internal disagreement you are not paid to mediate. Name one decision-maker in the contract, require feedback to be consolidated by them, and when conflicting comments arrive, send them back with the conflict identified and ask which direction they would like. It is briefly awkward and saves days.' },
  ],
  related: [
    { href: '/blog/how-to-prevent-scope-creep', label: 'How to prevent scope creep', desc: 'The wider discipline revisions sit inside.' },
    { href: '/blog/web-development-contract-essentials', label: 'Contract essentials', desc: 'Where the revision clause belongs.' },
    { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'Approvals and projects in one workspace.' },
    { href: '/blog/how-to-collect-content-from-website-clients', label: 'Getting content from clients', desc: 'The other half of a stalled design stage.' },
  ],
}
