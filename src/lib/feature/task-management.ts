import { ListChecks, Target, Eye, CalendarClock } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const TASK_MANAGEMENT: FeaturePageConfig = {
  slug: 'task-management',
  path: '/features/task-management',
  navLabel: 'Task Management',
  navDescription: 'Assign tasks, set deadlines & track them across the board',
  icon: ListChecks,
  metaTitle: 'Free Task Management for Agencies & Freelancers',
  metaDescription:
    'How task management works in Clienter: create tasks inside a project, assign them to your team, set deadlines, and watch cards move from To-do to Done.',
  keywords: [
    'free task management',
    'task management for agencies',
    'task management for freelancers',
    'task tracker',
    'assign tasks to team',
    'project tasks',
  ],
  eyebrow: 'Task Management',
  h1: 'Know exactly who’s doing what by',
  h1Highlight: 'when',
  subheading:
    'Break a project into tasks, hand each one to a person with a deadline, and watch the cards move across the board — so progress is visible without a single status call.',
  intro: {
    heading: 'What is task management in Clienter?',
    body: [
      'Task management is the layer inside every project where the actual work gets divided up. You create a task, assign it to yourself or a teammate, give it a deadline, and move its card across To-do, In progress, and Done as it gets done. Each task is a specific piece of the delivery — “design the hero”, “write the API docs” — not the whole project, so nobody is ever guessing what to pick up next.',
      'Because tasks live inside their project, finishing them rolls up into the project’s status automatically — one glance shows what’s on track and what’s slipping. That connection is the payoff: you don’t run a status call to find out where things stand, and a teammate never asks “what should I work on?” because their assigned tasks and deadlines are already in front of them.',
    ],
  },
  stepsHeading: 'How to use task management',
  steps: [
    { title: 'Add a task', desc: 'Create a task inside the project with a clear title describing the one piece of work it covers.' },
    { title: 'Assign & set a deadline', desc: 'Hand the task to yourself or a teammate and give it a due date so ownership is never ambiguous.' },
    { title: 'Move it across the board', desc: 'Drag the card from To-do to In progress to Done as the work actually progresses.' },
    { title: 'Watch it roll up', desc: 'Completed tasks update the project’s status automatically, so progress stays current on its own.' },
  ],
  helpsHeading: 'How task management helps you',
  helps: [
    { icon: Target, title: 'No dropped work', desc: 'Every task has one owner and one deadline, so nothing sits in limbo waiting for someone to notice.' },
    { icon: Eye, title: 'Progress without asking', desc: 'The board shows what’s done and what’s pending, so you skip the “where are we?” check-ins.' },
    { icon: CalendarClock, title: 'Deadlines that bite', desc: 'Due dates on each task turn a vague “soon” into a clear day, so delivery dates hold.' },
    { icon: ListChecks, title: 'Clear next action', desc: 'Teammates open the project and see their tasks waiting — no handover meeting required.' },
  ],
  whereHeading: 'Where task management fits',
  where: [
    { title: 'Freelancers with busy projects', desc: 'Delivery with lots of small moving parts that are easy to forget without a running list.' },
    { title: 'Agencies splitting the work', desc: 'A team where designers and developers each need their own tasks and deadlines on one board.' },
    { title: 'Deadline-driven delivery', desc: 'Work where a missed task quietly becomes a missed launch, so due dates matter.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Tasks created inside each project',
    'Assign to yourself or a teammate',
    'Per-task deadlines',
    'To-do / In progress / Done board',
    'Progress that rolls up to the project',
    'Free on every plan',
  ],
  faqHeading: 'Task management FAQs',
  faqs: [
    { q: 'How are tasks different from projects?', a: 'A project is the whole piece of client work; tasks are the individual steps inside it. Project Management runs the board, budget, and deadline for the project — task management is the layer that assigns each step to a person with its own due date.' },
    { q: 'Can I assign tasks to my team?', a: 'Yes. Assign any task to yourself or a teammate so ownership is always clear, and everyone sees the tasks that belong to them. Adding teammates is handled by Team Management, and task features are free on every plan.' },
    { q: 'Is task management free?', a: 'Yes — creating, assigning, and tracking tasks is free on every plan. The only limits are on volume as you grow, never on the task features themselves.' },
  ],
  ctaTitle: 'Turn projects into tasks that get done',
  ctaSubtitle: 'Start free and assign your first task in minutes. No credit card required.',
}
