import {
  Users,
  FolderKanban,
  MessageSquareReply,
  FolderOpen,
  ReceiptText,
  LayoutDashboard,
} from 'lucide-react'
import type { AudiencePageConfig } from './_type'

export const DESIGN_AGENCIES: AudiencePageConfig = {
  slug: 'design-agencies',
  path: '/for/design-agencies',
  audience: 'Design agencies',
  metaTitle: 'Design Agency Management Software & Creative CRM',
  metaDescription:
    'Free all-in-one design agency management software for creative studios — pipeline, creative projects, approvals, team, invoicing, and a client portal in one place. Start free.',
  keywords: [
    'design agency management software',
    'creative agency CRM',
    'project management for design agencies',
    'creative studio software',
    'manage design clients and projects',
    'client portal for design agency',
    'design studio project management',
    'creative project approval software',
    'design agency software India',
  ],
  ogTitle: 'Design Agency Management Software — Clienter',
  ogDescription:
    'Run a multi-discipline creative studio from one workspace — pipeline, creative projects, revision rounds, deliverables, team, and billing. Free to start.',
  breadcrumbLabel: 'For Design Agencies',
  eyebrow: 'For design agencies',
  h1: 'Design agency management software for the whole creative',
  h1Highlight: 'studio',
  subheading:
    'Branding one week, a packaging system the next, a product UI after that — each with its own rounds of revisions, its own approvals, and its own pile of files. Clienter holds the pipeline, the creative projects, the feedback, the team, and the invoices in one place, so the studio runs without living across six tabs.',
  intro: {
    heading: 'The system around the creative work',
    body: [
      'A design agency rarely does one thing. A single studio of five to fifteen people might be running a brand identity, a motion piece, a packaging line, and a product UI in the same month — different disciplines, different deliverables, different clients, all moving at once. The design happens in your creative tools; what tends to go missing is everything around it. The proposal and deposit that start the job, the rounds of revisions and sign-offs that carry it, the final files handed over at the end, and the invoice that closes it.',
      'That middle layer is where studios lose time. A concept gets approved over email, a revision request arrives on WhatsApp, the deposit is tracked in a spreadsheet, and the deliverables sit in a drive nobody but the lead can navigate. When a client asks which round they are on or when the next milestone is due, someone has to piece the answer together from four places. A creative agency CRM should keep those threads tied to the client and the project, so the studio spends its hours on the work, not on reassembling where the work stands.',
      'Clienter is that layer, built for how creative studios actually deliver. A pipeline for new briefs, projects that hold their revision rounds and approvals, a place to organise every deliverable, the team assignments across all your live jobs, and GST invoices in rupees tied to deposits and milestones. It sits around your design tools, not inside them.',
    ],
  },
  pains: {
    heading: 'Where creative delivery gets messy',
    sub: 'The friction a multi-discipline studio hits on every project, from brief to hand-off.',
    items: [
      {
        title: 'Revision rounds blur together',
        desc: 'A client says ‘one more small change’ for the fourth time, and nobody can point to what round two actually agreed. Without a record of each round and its sign-off, scope creep is invisible until it has eaten the margin.',
      },
      {
        title: 'Feedback arrives from everywhere',
        desc: 'Comments come by email, WhatsApp, a shared doc, and a voice note. Pulling one coherent brief for the designer out of five channels is its own job, and something always gets missed.',
      },
      {
        title: 'Deliverables are scattered',
        desc: 'Logo files in one drive, the brand guide in another, source files on a designer’s machine. When a client asks for the final packaging artwork six months later, the hunt begins.',
      },
      {
        title: 'Assigning across disciplines is guesswork',
        desc: 'Your illustrator is booked, the motion designer is between jobs, and the brand lead is on two projects already. With no view of who holds what, you promise a timeline you can’t staff.',
      },
      {
        title: 'Proposals and deposits slip through',
        desc: 'A project starts on a verbal ‘go ahead’ with no signed scope and no deposit collected, and the first invoice becomes an awkward conversation three weeks in.',
      },
    ],
  },
  workflow: {
    heading: 'A creative project, brief to final files',
    sub: 'How a studio engagement moves through Clienter, start to finish.',
    steps: [
      {
        title: '1. Capture the brief in your pipeline',
        desc: 'New enquiries and referrals land as deals and move through discovery, proposal, and won — so inbound briefs are tracked, not lost in an inbox, even while the studio is heads-down delivering.',
      },
      {
        title: '2. Lock scope with a proposal and deposit',
        desc: 'Turn the brief into a proposal that spells out deliverables, the number of revision rounds, and terms, collect an e-signature, and raise the deposit invoice — so the project starts on a signed agreement.',
      },
      {
        title: '3. Build the project and assign the team',
        desc: 'Create a project with phases, milestones, and a deadline, then assign the designers, illustrators, and motion people on it, so everyone sees their work and leads see capacity across every live job.',
      },
      {
        title: '4. Run revision rounds and approvals',
        desc: 'Share concepts, gather feedback in one place, and track each round to its sign-off, so the studio knows exactly which round a client is on and when an approval is holding the work up.',
      },
      {
        title: '5. Hand off files and bill the balance',
        desc: 'Organise final deliverables and source files against the project, give the client a branded portal to review and download them, and raise the closing GST invoice as the milestone lands.',
      },
    ],
  },
  features: {
    heading: 'What a creative studio runs on',
    sub: 'The features that hold the pipeline, the projects, the feedback, and the files together.',
    items: [
      { icon: Users, title: 'Client accounts', desc: 'Every client linked to their briefs, projects, proposals, deliverables, and invoices in one profile.' },
      { icon: FolderKanban, title: 'Creative projects', desc: 'Projects with phases, milestones, and deadlines to carry a job from concept to final hand-off.' },
      { icon: MessageSquareReply, title: 'Revisions & approvals', desc: 'Track each round of feedback and its sign-off, so revision creep stays visible instead of silent.' },
      { icon: FolderOpen, title: 'Deliverable & file organisation', desc: 'Keep concepts, final artwork, and source files against the project, ready to find months later.' },
      { icon: LayoutDashboard, title: 'Client portal', desc: 'A branded portal where clients review work, approve rounds, and download the finished files.' },
      { icon: ReceiptText, title: 'Deposits & invoicing', desc: 'GST invoices tied to deposits and milestones, with outstanding balances tracked per project.' },
    ],
  },
  compare: {
    heading: 'Tabs and group chats vs one studio workspace',
    sub: 'What changes when the pipeline, projects, feedback, and files share one home.',
    old: [
      'Revision rounds argued over email after the fact',
      'Feedback spread across WhatsApp, docs, and voice notes',
      'Final files hunted for across scattered drives',
      'Work promised without knowing who’s free to do it',
      'Projects starting on a verbal yes and no deposit',
    ],
    calm: [
      'Every round tracked to its sign-off, scope creep visible',
      'Feedback gathered in one place, tied to the project',
      'Deliverables and source files organised per client',
      'Live capacity across every designer and discipline',
      'A signed proposal and collected deposit before work starts',
    ],
  },
  pricing: {
    heading: 'Studio software without per-seat pain',
    body: [
      'Start free while you see whether it fits the studio — the Free plan covers up to 3 clients and 5 projects with the full pipeline, proposals, revision tracking, invoicing, and meetings, free forever and no card required.',
      'For a working studio, Pro at $19/month (₹199 in India) covers up to 20 clients, 40 projects, and 5 team members with the branded client portal for every account, while Ultra at $39/month (₹799 in India) removes every limit — unlimited clients, projects, and designers — for studios running many jobs at once. Every feature is included on all plans; only the usage limits scale, so adding a designer to the team never means a bigger software bill or a renegotiated contract.',
    ],
  },
  faqHeading: 'Design agency FAQs',
  faqs: [
    {
      q: 'What is design agency management software?',
      a: 'Design agency management software is the system around your creative work — it keeps your new-business pipeline, client accounts, creative projects, revision rounds, deliverables, team assignments, and billing connected instead of scattered across drives, chats, and spreadsheets. Clienter is exactly this, built for multi-discipline studios, and it starts free with no card.',
    },
    {
      q: 'How does Clienter handle revision rounds and approvals?',
      a: 'Each project tracks its rounds of feedback and the sign-off that closes them, so you always know which round a client is on and when an approval is holding the work up. Because the proposal sets the agreed number of rounds, extra revisions are easy to spot, which keeps scope creep from quietly eating the margin.',
    },
    {
      q: 'Can my team see what everyone is working on across projects?',
      a: 'Yes. You assign designers, illustrators, and motion people to projects with role-based access, and leads get a view of who holds what across every live job. That makes staffing a new brief a decision based on real capacity rather than a guess, so you only promise timelines the studio can actually deliver.',
    },
    {
      q: 'Where do final deliverables and source files live?',
      a: 'Deliverables and source files are organised against each project and client, so concepts, final artwork, and working files stay in one findable place rather than in a drive only the lead can navigate. Clients review and download approved work through a branded portal, which keeps hand-offs tidy long after a job wraps.',
    },
  ],
  related: [
    { href: '/features/project-management', label: 'Project Management', desc: 'Phases, milestones, and deadlines for creative projects.' },
    { href: '/features/client-portal', label: 'Client Portal', desc: 'A branded space for clients to review, approve, and download.' },
    { href: '/features/file-management', label: 'File Management', desc: 'Keep deliverables and source files organised per project.' },
    { href: '/for/web-design-agencies', label: 'For Web Design Agencies', desc: 'The same platform, tuned for web-specific studios.' },
  ],
  ctaTitle: 'Run the studio, not the scattered tools',
  ctaSubtitle: 'Create your free account and bring briefs, creative projects, approvals, files, and billing into one workspace today.',
}
