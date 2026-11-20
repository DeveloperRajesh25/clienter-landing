import { CalendarCheck, UserCheck, Eye, Repeat, Wallet } from 'lucide-react'
import type { FeaturePageConfig } from '@/lib/feature-pages'

export const ATTENDANCE_TRACKING: FeaturePageConfig = {
  slug: 'attendance-tracking',
  path: '/features/attendance-tracking',
  navLabel: 'Attendance & Leave',
  navDescription: 'Daily attendance, leave requests and approvals for your team',
  icon: CalendarCheck,
  metaTitle: 'Free Attendance & Leave Management System — Clienter',
  metaDescription:
    'How attendance and leave management works in Clienter: mark your team present each day, let members request leave, approve it as owner, and review clear reports.',
  keywords: [
    'free attendance management system',
    'leave management software',
    'attendance tracker for teams',
    'employee attendance',
    'leave approval system',
    'staff attendance',
  ],
  eyebrow: 'Attendance & Leave',
  h1: 'Track attendance and leave without the',
  h1Highlight: 'spreadsheet',
  subheading:
    'Mark your team present each day, let members request leave, approve it in a tap, and review attendance reports — the people side of your business, kept right where the work lives.',
  intro: {
    heading: 'What is attendance tracking in Clienter?',
    body: [
      'Attendance tracking is how you keep a daily record of who on your team showed up. You mark attendance each day, your members raise leave requests when they need a day off, and you — the owner or admin — approve or decline them. Every present day, absence, and approved leave collects into attendance reports you can open and read, instead of a group chat of “I’m on leave today” messages you forget by Friday.',
      'Because attendance sits beside your Team and Payroll, the same people you assign to projects are the ones whose days you’re tracking — and when it’s time to run payroll, the attendance is already there. The person who worked twenty-two days and the person who took a week off aren’t a memory you have to reconstruct; they’re a record you can see.',
    ],
  },
  stepsHeading: 'How to use attendance tracking',
  steps: [
    { title: 'Mark the day', desc: 'Open the day and mark who’s present — your whole team in a few taps, not a roll call.' },
    { title: 'Members request leave', desc: 'A member who needs time off raises a leave request from their own login, with the dates and a reason.' },
    { title: 'Approve or decline', desc: 'As owner or admin you see pending requests and approve or decline each one — the member is updated.' },
    { title: 'Review the report', desc: 'Open attendance reports to see present days, absences, and approved leave per person over the month.' },
  ],
  helpsHeading: 'How attendance tracking helps you',
  helps: [
    { icon: Eye, title: 'Know who worked when', desc: 'A clear month-by-month record of present days and leave — no scrolling back through chat.' },
    { icon: Repeat, title: 'Leave that doesn’t get lost', desc: 'Requests and approvals live in one place, so an approved day off is never a “wait, did I say yes?”' },
    { icon: Wallet, title: 'Payroll that already adds up', desc: 'Attendance feeds the people side of payroll, so the days worked are counted before you pay anyone.' },
    { icon: UserCheck, title: 'One owner approves', desc: 'Members request, admins and owners decide — so leave has a clear sign-off instead of a verbal maybe.' },
  ],
  whereHeading: 'Where attendance tracking fits',
  where: [
    { title: 'Small service teams', desc: 'A handful of people whose days you need on record without buying an HR suite to do it.' },
    { title: 'Agencies paying monthly', desc: 'Teams on monthly salaries where days worked and leave taken decide what each person is paid.' },
    { title: 'Owners drowning in “I’m off today”', desc: 'Founders tired of tracking leave across WhatsApp, memory, and a sticky note on the desk.' },
  ],
  capabilitiesHeading: 'What’s included',
  capabilities: [
    'Daily attendance marking for your team',
    'Member-raised leave requests',
    'Owner and admin approvals',
    'Monthly attendance reports per person',
    'Connected to Team and Payroll',
    'Free on every plan',
  ],
  faqHeading: 'Attendance & leave FAQs',
  faqs: [
    { q: 'Who can approve leave requests?', a: 'The owner and admins. A team member raises a leave request from their own login with the dates and a reason, and an admin or the owner approves or declines it — so every day off has a clear sign-off rather than a verbal yes.' },
    { q: 'Does attendance connect to payroll?', a: 'Yes. Attendance sits with your Team and Payroll, so the days each person worked and the leave they took are already recorded when you run payroll for the month — no re-counting from a chat thread.' },
    { q: 'Is attendance tracking really free?', a: 'Yes — attendance marking, leave requests, approvals, and reports are free on every plan. Limits only apply to volume as your team grows, never to the features themselves.' },
  ],
  ctaTitle: 'Put your team’s attendance on record',
  ctaSubtitle: 'Start free and track attendance and leave for your whole team today. No credit card required.',
}
