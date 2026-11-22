import type { BlogPost } from '../_type'

export const POST: BlogPost = {
  slug: 'how-to-manage-multiple-website-projects',
  title: 'How to Manage Multiple Website Projects at Once',
  metaTitle: 'How to Manage Multiple Website Projects',
  description:
    'A working system for running four or five client websites in parallel — capacity planning, a single status view, handling the stalled project, batching, and what to do when everything is due the same week.',
  date: '2026-11-22',
  author: 'Talagana Rajesh',
  category: 'Web & software projects',
  categorySlug: 'web-development',
  tags: ['project management', 'web development', 'productivity', 'agency operations', 'freelancing'],
  primaryKeyword: 'manage multiple website projects',
  featured: false,
  intro:
    'One website project is a job. Four is a different discipline entirely. The work does not get harder — switching between it does, and the failure mode changes shape: instead of missing a detail, you lose track of a whole project for a fortnight and discover it when the client sends a short email asking whether everything is alright. Running several builds in parallel is a solvable problem, but not by working faster.',
  body: [
    { type: 'h2', text: 'The real constraint is not hours', id: 'the-real-constraint' },
    { type: 'p', text: 'Most developers plan capacity in hours: forty available, four projects, ten each. It never works, for two reasons that have nothing to do with effort.' },
    { type: 'p', text: 'The first is context switching. Moving between codebases, clients and conventions carries a real cost — twenty minutes to reload what you were doing, longer if it has been a week. Four projects touched daily is not four quarters of a week; it is closer to three, with the rest spent re-entering.' },
    { type: 'p', text: 'The second is that client projects are not continuously workable. They block. The design is waiting on approval, the build is waiting on copy, the launch is waiting on DNS access from the client’s old developer. At any moment a good fraction of your portfolio is simply not available to work on, which is why running two projects usually feels busier than running four and why the answer is staggering rather than squeezing.' },

    { type: 'h2', text: 'Stagger the phases deliberately', id: 'stagger-the-phases' },
    { type: 'p', text: 'The single highest-leverage habit is to avoid having multiple projects in the same phase at the same time. Two builds both in heads-down development is a bad week. Two builds both launching on the same Thursday is a bad month.' },
    { type: 'p', text: 'When you sell a project, you are also choosing when it will be in build and when it will launch. Treat the start date as a scheduling decision rather than whenever the client is ready. Telling a client in November that you will start in early January is not weakness — it signals a practice with demand, and it is how you avoid the alternative, which is accepting everything and delivering all of it late.' },
    { type: 'p', text: 'Phases also interleave naturally if you let them. Design-heavy weeks pair well with another project’s waiting-on-content period. A launch week pairs with nothing; keep it clear.' },
    { type: 'callout', text: 'A reasonable ceiling for one full-time developer is two projects in active build, one in design or discovery, and one in the waiting-on-client state — plus maintenance. Beyond that, the next project does not get slower; one of the existing ones goes silent.' },

    { type: 'h2', text: 'One view across everything', id: 'one-view' },
    { type: 'p', text: 'The thing that goes wrong with four projects is not within any one of them. It is the absence of a view across all four. Without it you work on whoever messaged most recently, which means the quiet client — usually the one closest to launch — drifts.' },
    { type: 'p', text: 'What that view needs to show is narrow: for each project, its current phase, who it is blocked on, its next deadline, and whether its last milestone has been invoiced. Four facts per project. If you can see those four for everything you have open, you can run five projects; if you cannot, three will feel like chaos.' },
    { type: 'p', text: 'Check it on a fixed schedule rather than when something feels wrong. Monday morning across every open project, and a shorter pass on Friday for what is blocked and what needs invoicing. Twenty minutes a week is enough, and it is the twenty minutes that prevents the fortnight-long silence.' },

    { type: 'h2', text: 'Make blocked projects visible, not forgotten', id: 'blocked-projects' },
    { type: 'p', text: 'A blocked project is the most dangerous object in a freelance business. It stops appearing in your working week, so it stops appearing in your head — and when it resurfaces it is late, the client is annoyed, and the balance is still unbilled.' },
    { type: 'p', text: 'Treat blocked as an explicit state with an owner and a date, not an absence of activity. “Waiting on client: product photos, requested 4 Oct” is a tracked item. “Nothing happening on the Mehta site” is a hole. The first generates a follow-up on a schedule and shows the client what is outstanding; the second generates an apology in three weeks.' },
    { type: 'p', text: 'Set a rule for how long a project may stay blocked — thirty days is common — and what happens then: a formal hold, an invoice for completed milestones, and the project moved out of your active capacity so you stop reserving time for it.' },

    { type: 'h2', text: 'Batch the admin, protect the build', id: 'batch-the-admin' },
    { type: 'p', text: 'Across four clients, admin arrives continuously: an email, a quote request, an invoice to raise, a question on Slack. Handled as it arrives, it fragments every day. Batched, it costs an hour.' },
    { type: 'ul', items: [
      'Two fixed windows a day for client communication, and tell clients what they are. Most are completely happy with “I reply to messages in the morning and late afternoon”.',
      'One admin block a week for invoicing, chasing and proposals — with the exception that milestone invoices go out the day the milestone lands.',
      'Protect at least two uninterrupted half-days a week for deep build work, and defend them like client meetings.',
      'Keep one queue for everything incoming so nothing depends on which app you happen to open.',
    ] },
    { type: 'p', text: 'The single biggest win here is moving client messages out of a chat app where every message is implicitly urgent. A client portal where requests are logged and answered is not slower for the client — it is merely less interrupting for you, and it has the side effect of creating a record of what was asked and when.' },

    { type: 'h2', text: 'When everything lands at once anyway', id: 'when-everything-lands' },
    { type: 'p', text: 'It will. Two launches collide, a bug appears on a maintained site, and a fourth client sends the content they have owed you for a month. The response is triage, communicated early.' },
    { type: 'ol', items: [
      'Rank by consequence, not by who is loudest. A broken ecommerce checkout on a live site outranks a staging review for a launch three weeks out.',
      'Tell the affected clients before they notice. A message on Monday saying a review will come Thursday is professional; silence until Thursday is not.',
      'Move the smallest piece first if it unblocks someone else. An hour that releases a client to spend a week reviewing is worth more than an hour of your own build.',
      'Do not solve it by working the weekend. That fixes this week and guarantees the same week recurs, because nothing in the schedule has changed.',
      'Afterwards, find the scheduling decision that caused the collision. There is almost always one, usually made two months earlier.',
    ] },

    { type: 'h2', text: 'The system in one paragraph', id: 'the-system' },
    { type: 'p', text: 'Stagger phases so two projects are never in the same intense stage at once. Keep one view showing every project’s phase, blocker, next deadline and billing status, and read it every Monday. Make blocked an explicit, dated, client-visible state with a thirty-day limit. Batch communication and admin into fixed windows. And when it collides anyway, triage by consequence and tell people early. None of that is about working harder; all of it is about not needing to remember.' },
    { type: 'p', text: 'Clienter is built around that view in particular — every project showing its stage, what it is waiting on, its deadline and its unbilled milestones, with the client seeing their own side in a portal. But the discipline is the thing that works. Whatever you run it on, the question to be able to answer in ten seconds is the same: across everything open right now, what is moving, what is stuck, and what has been delivered but not invoiced?' },
  ],
  faqs: [
    { q: 'How many website projects can one developer handle at once?', a: 'As a working ceiling, two in active build, one in design or discovery, and one in a waiting-on-client state, plus any maintenance. The limit is not hours — it is context switching and the fact that client projects block frequently. Past that number, the next project does not merely run slower; one of the existing ones goes quiet for weeks.' },
    { q: 'How do I stop forgetting about a project while working on others?', a: 'Keep one view across every open project showing its phase, what it is blocked on, its next deadline and whether its last milestone was invoiced, and read it on a fixed schedule — Monday morning works. Projects are forgotten when they are blocked, because blocked work stops appearing in your week; treating blocked as an explicit dated state rather than an absence fixes most of it.' },
    { q: 'How do I handle two website launches in the same week?', a: 'Avoid it at the selling stage by treating the start date as a scheduling decision rather than accepting whenever the client is ready. If it happens anyway, triage by consequence, tell both clients early rather than letting one discover the delay, and move the smaller unblocking tasks first. Working the weekend fixes the week and guarantees it recurs.' },
    { q: 'Should I use separate tools for each client project?', a: 'No — that is what creates the problem. The cost of multiple projects is reassembling context, and a tool per client multiplies it. Run every project in one workspace where you can see all of them at once, with per-client separation inside it rather than outside it.' },
    { q: 'How do I manage client communication across several projects?', a: 'Batch it into two fixed windows a day and tell clients what those windows are — almost all of them are fine with it. Then move requests out of chat apps, where every message feels urgent and nothing is recorded, into a single queue or client portal. You get uninterrupted build time and, as a side effect, a dated record of everything that was asked.' },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'One board across every active build.' },
    { href: '/blog/project-management-software-for-web-developers', label: 'Project management software for web developers', desc: 'Choosing the stack that fits client work.' },
    { href: '/blog/how-to-collect-content-from-website-clients', label: 'Getting content from clients', desc: 'Fixing the most common cause of blocked projects.' },
    { href: '/for/web-developers', label: 'For Web Developers', desc: 'How Clienter fits a freelance web practice.' },
  ],
}
