import { UsersRound, ShieldCheck, Eye, UserPlus } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const TEAM_MANAGEMENT: FeaturePageConfig = {
  slug: 'team-management',
  path: '/features/team-management',
  navLabel: 'Team Management',
  navDescription: 'Add members, set roles & assign them to projects and tasks',
  icon: UsersRound,
  metaTitle: 'Free Team Management Tool for Small Businesses',
  metaDescription:
    'How team management works in Clienter: add members, set owner, admin or member roles with role-based access, and assign them to projects and tasks in one workspace.',
  keywords: [
    'free team management tool',
    'team management software',
    'assign tasks to team',
    'role-based access',
    'team collaboration',
    'manage team members',
  ],
  eyebrow: 'Team Management',
  h1: 'Run your whole team from one',
  h1Highlight: 'workspace',
  subheading:
    'Add your people, give each the right level of access, and assign them to the projects and tasks they own — so the work is shared, not stuck in one person’s head.',
  intro: {
    heading: 'What is team management in Clienter?',
    body: [
      'Team management is how you bring your people into Clienter and decide what each can do. You invite a member by email and set their role — owner, admin, or member — and that role controls what they can see and change. An owner runs the whole workspace, an admin manages the day-to-day, and a member works on what they’re assigned without touching settings they shouldn’t.',
      'Because everyone shares one workspace, the work stops being siloed in separate tools and chats. Assign a teammate to a project or a task and it shows up for them straight away; open any project and you can see who’s on it. That shared picture is the payoff — the business doesn’t live on one person’s laptop, and nothing stalls because the only person who knew about it is away.',
    ],
  },
  stepsHeading: 'How to use team management',
  steps: [
    { title: 'Invite a member', desc: 'Add a teammate by email and they join your shared workspace with their own sign-in.' },
    { title: 'Set their role', desc: 'Choose owner, admin, or member so each person gets exactly the access their job needs.' },
    { title: 'Assign the work', desc: 'Put teammates on the projects and tasks they own so responsibilities are clear from day one.' },
    { title: 'See who’s on what', desc: 'Open any project to see its team at a glance — no spreadsheet of who’s doing what.' },
  ],
  helpsHeading: 'How team management helps you',
  helps: [
    { icon: ShieldCheck, title: 'The right access', desc: 'Role-based permissions mean members work freely without reaching settings or data they shouldn’t.' },
    { icon: Eye, title: 'See the whole team', desc: 'One workspace shows who’s assigned where, so capacity and ownership are never a mystery.' },
    { icon: UsersRound, title: 'Nothing siloed', desc: 'Work lives in a shared space, not scattered across personal tools, so it survives any one person leaving.' },
    { icon: UserPlus, title: 'Onboard in minutes', desc: 'A new hire joins by email and immediately sees the projects and tasks that are theirs.' },
  ],
  whereHeading: 'Where team management fits',
  where: [
    { title: 'Growing freelancers', desc: 'Bringing on a first contractor or assistant and needing to share work without handing over everything.' },
    { title: 'Small agencies', desc: 'A team of designers, developers, and account managers who each need the right level of access.' },
    { title: 'Businesses that can’t be siloed', desc: 'Where work must not live on one person’s laptop, so the whole team shares one picture.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Invite members by email',
    'Owner / admin / member roles',
    'Role-based access control',
    'Assign members to projects & tasks',
    'One shared workspace for everyone',
    'Free on every plan',
  ],
  faqHeading: 'Team management FAQs',
  faqs: [
    { q: 'What do the roles control?', a: 'Each role sets what a person can see and do. An owner runs the whole workspace, an admin handles the day-to-day, and a member works on what they’re assigned without reaching settings or data meant for the people above them.' },
    { q: 'Can I assign teammates to projects and tasks?', a: 'Yes. Once someone joins your workspace you can put them on any project and assign them tasks, and they’ll see exactly what’s theirs — which ties directly into Project Management and Task Management.' },
    { q: 'How many people can I add?', a: 'Team management is free on every plan — the features never change. The only thing that scales by plan is how many members you can add, so you’re never charged for the capability itself.' },
  ],
  ctaTitle: 'Bring your whole team into one workspace',
  ctaSubtitle: 'Start free and invite your first teammate in minutes. No credit card required.',
}
