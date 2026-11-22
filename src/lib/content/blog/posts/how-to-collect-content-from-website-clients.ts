import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'how-to-collect-content-from-website-clients',
  title: 'How to Get Website Content From Clients (Before It Kills Your Deadline)',
  metaTitle: 'How to Get Content From Website Clients',
  description:
    'The number one cause of late website projects is client content. A practical system for collecting copy, images and logins — contract clauses, deadlines, chasing scripts and what to do when it never arrives.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['web development', 'process', 'client management', 'project management', 'onboarding'],
  primaryKeyword: 'how to get content from website clients',
  featured: false,
  intro:
    'Ask any web developer why their last project ran late and the answer is almost never technical. It is that the client didn’t send the copy. The build was finished in week four and the site launched in week eleven, and for those seven weeks the project sat frozen — unbillable, unclosable, and quietly taking the blame. Client content is the single largest cause of delay in website projects, and it is almost entirely solvable with process rather than nagging.',
  body: [
    { type: 'h2', text: 'Why clients don’t send their content', id: 'why-clients-dont-send-content' },
    { type: 'p', text: 'It is worth understanding before trying to fix it, because the usual assumption — that the client is disorganised or doesn’t care — is mostly wrong and leads to the wrong remedies.' },
    { type: 'ul', items: [
      'Writing is hard, and they are not writers. “Send us your About page” asks a plumber or a dentist to produce something they have never produced and feel exposed doing badly.',
      'The task is enormous and shapeless. “All your content” is not a task anyone can start. It has no first step and no visible end.',
      'They have a full-time job. The website is the most important thing in your week and the ninth most important in theirs.',
      'Nobody told them it was urgent. Most developers mention content at kickoff and never again until it is already late.',
      'They are waiting to see the design. Entirely reasonable — writing into an unknown layout feels pointless, and often is.',
    ] },
    { type: 'p', text: 'Every one of those is a process problem. None of them is fixed by a fourth polite follow-up email.' },

    { type: 'h2', text: 'Decide who is writing before you quote', id: 'decide-who-is-writing' },
    { type: 'p', text: 'The first fix happens before the project exists. At quoting stage, make content an explicit line item with a named owner. There are only three honest answers, and every one of them is fine as long as it is chosen on purpose.' },
    { type: 'ol', items: [
      'The client writes it. Cheapest, slowest, most common. Price the project assuming a delay, and build the rest of this article’s process around it.',
      'You write it, or you bring in a copywriter. Add it to the quote — properly, not as a favour. Projects where the developer controls the content finish dramatically faster, and clients are often relieved to be rid of it.',
      'You launch with placeholder-free minimum content and expand later. Underused and often the right answer: a smaller site that is live beats a larger one that is three months from launching.',
    ] },
    { type: 'p', text: 'What must not happen is the fourth option, which is what usually happens: nobody decides, everyone assumes the other side has it, and the question surfaces in week five.' },

    { type: 'h2', text: 'Break it into pages, not a pile', id: 'break-it-into-pages' },
    { type: 'p', text: 'Never ask for “the content”. Ask for one page at a time, with a template, a word count and an example. The difference in response rate is dramatic, because you have converted an overwhelming project into a series of twenty-minute tasks.' },
    { type: 'p', text: 'For each page, give them a short brief: the page’s purpose, the sections it contains, roughly how many words each section needs, and a real example from another site. For an About page that might be: a one-line summary, a 150-word story of how the business started, three team members at 60 words each with a photo, and one sentence about what you want the visitor to do next.' },
    { type: 'p', text: 'Where you can, ask questions instead of requesting prose. “What are the three things customers ask you most often?” produces usable copy from someone who would have stared at a blank document for a fortnight. You then edit their answers into page copy, which takes you an hour and saves them three weeks.' },
    { type: 'callout', text: 'A content request that includes a word count and an example gets answered. One that says “send us your copy when you get a chance” does not. The difference is not the client’s diligence — it is whether you gave them a task they could start.' },

    { type: 'h2', text: 'Put it in the contract', id: 'put-it-in-the-contract' },
    { type: 'p', text: 'Content deadlines belong in the agreement alongside the payment schedule, because without them you have no mechanism when things slip — only goodwill, which runs out. Three clauses do most of the work.' },
    { type: 'ul', items: [
      'A content deadline tied to the project schedule: “All page content and image assets are due by [date]. The launch date assumes delivery by this date and moves accordingly if it slips.”',
      'A project-hold clause: if content is outstanding for more than, say, 30 days, the project is paused, any remaining milestone becomes payable, and restarting is subject to current availability.',
      'A placeholder clause: content not received by the deadline may be launched with placeholder or client-supplied interim text, with population billed separately afterwards.',
    ] },
    { type: 'p', text: 'The purpose of these is not to punish anyone. It is to make the consequence of delay visible and automatic, so it is a stated term rather than an awkward conversation you have to initiate. Most clients, told at kickoff that the launch date moves if content is late, simply send the content.' },

    { type: 'h2', text: 'Make the blocker visible', id: 'make-the-blocker-visible' },
    { type: 'p', text: 'This is the highest-leverage change available, and most developers never make it. While content is outstanding, the project looks stalled — and in the client’s mind, a stalled project is a stalled developer. They do not see their own missing copy; they see three weeks of nothing happening.' },
    { type: 'p', text: 'Fix it by putting the outstanding items somewhere the client can see them, with the date they were requested. A client portal that says “Waiting on: About page copy (requested 4 Oct), team photos (requested 4 Oct)” does three things at once: it moves the delay to its real owner, it removes the need for you to chase in a way that feels like nagging, and it gives you an unarguable record when the timeline is discussed later.' },
    { type: 'p', text: 'Clienter does this as part of the project — outstanding client items are tracked on the build and surfaced in the client’s own portal, so the status is the same thing both sides are looking at. The mechanism matters more than the tool: anything that makes the blocker visible and dated will outperform chasing by email.' },

    { type: 'h2', text: 'How to chase without becoming annoying', id: 'how-to-chase' },
    { type: 'p', text: 'Chasing works when it is scheduled, short, specific and helpful. A rhythm that works:' },
    { type: 'ol', items: [
      'On the due date, a short note: what is outstanding, what it unblocks, and a question offering help. Not a complaint.',
      'A week later, a consequence note: the launch date now moves to X unless the content arrives by Y. Stated calmly as a fact of scheduling.',
      'Two weeks later, a call rather than an email. Ten minutes on the phone, where you type their answers into the page yourself, routinely unlocks what a month of emails could not.',
      'At 30 days, invoke the hold clause — in writing, without drama, referencing the agreement they signed.',
    ] },
    { type: 'p', text: 'Across all four, the most effective single sentence is an offer, not a reminder: “If it is easier, give me fifteen minutes on a call and I will write it from your answers.” Most stuck content is stuck because the client cannot face writing it, and that sentence removes the obstacle entirely.' },

    { type: 'h2', text: 'What to do when it never arrives', id: 'when-it-never-arrives' },
    { type: 'p', text: 'Some projects simply stop. The contact leaves, the business pivots, the enthusiasm dies. Do not let a dead project sit on your books as an open obligation with an unpaid balance attached.' },
    { type: 'p', text: 'Invoke the hold clause, invoice the completed milestones, and close the project formally with a written summary of what was delivered and what remains. Store the work somewhere retrievable and tell them the terms for restarting — usually current rates and current availability. That converts an indefinite drain into a finished piece of business, and leaves the door open without leaving your schedule hostage.' },
    { type: 'p', text: 'And record what happened. Clients who go quiet on content once often do it again; that is worth knowing before you quote them the next one.' },

    { type: 'h2', text: 'The short version', id: 'the-short-version' },
    { type: 'p', text: 'Decide who writes the content before you quote. Ask for one page at a time with a template, a word count and an example. Put a content deadline and a hold clause in the agreement. Make outstanding items visible to the client with the date you asked. Chase on a schedule, and always offer to write it from a fifteen-minute call. Do those five things and client content stops being the reason your projects run late.' },
  ],
  faqs: [
    { q: 'Why do clients take so long to send website content?', a: 'Usually because writing is genuinely hard for them, the request is too large to start, and nobody told them it was on the critical path. It is rarely indifference. Breaking the ask into per-page briefs with word counts and examples, and offering to write copy from a short call, solves most cases far better than repeated reminders do.' },
    { q: 'Should I write the website content for my clients?', a: 'Often yes, and you should charge for it. Projects where the developer or a copywriter controls the content finish dramatically faster, which is worth real money to both sides. If the client insists on writing it themselves, price the project assuming a delay and put a content deadline in the contract.' },
    { q: 'What should a content deadline clause say?', a: 'Three things: a date by which all copy and assets are due, that the launch date moves if that date slips, and that a project with content outstanding beyond roughly 30 days is paused with remaining milestones payable. The aim is to make the consequence automatic and stated up front, so it is a term rather than an argument.' },
    { q: 'Can I launch a website without all the client’s content?', a: 'Yes, and it is frequently the right call. Launch a smaller, complete site with the pages that are ready and add the rest later as a second phase. A live five-page site earns the client more than a fifteen-page one that has been three weeks from launching for three months.' },
    { q: 'How do I stop client delays from looking like my delays?', a: 'Make the blockers visible and dated. List outstanding client items on the project where the client can see them, with the date each was requested, so the status both sides look at is the same. It removes the need to chase in a way that feels like nagging, and gives you an unarguable record when the timeline comes up later.' },
  ],
  related: [
    { href: '/blog/client-onboarding-process', label: 'Client onboarding process', desc: 'Starting a project so content is set up to arrive.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'Where clients see what the build is waiting on.' },
    { href: '/blog/how-to-prevent-scope-creep', label: 'How to prevent scope creep', desc: 'The other half of protecting a project.' },
    { href: '/for/web-developers', label: 'For Web Developers', desc: 'The workspace built around client web work.' },
  ],
}
