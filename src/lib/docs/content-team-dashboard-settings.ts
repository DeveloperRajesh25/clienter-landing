import type { DocPage } from './types'

export const TEAM_DASHBOARD_SETTINGS_DOCS: Record<string, DocPage> = {
  // ─── TEAM ────────────────────────────────────────────────────────────────────

  'team': {
    slug: 'team',
    title: 'Team Management',
    metaTitle: 'Team Management — Clienter Docs',
    metaDescription: 'Learn how to build, manage, and pay your team inside Clienter. Invite teammates, assign roles, configure payroll, and track project-based payouts from one workspace.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Team Management overview',
        level: 2,
        content: 'Clienter gives agencies and freelancers a single workspace to collaborate with their team. Add contractors, full-time staff, or part-time collaborators — each person gets their own portal with access only to what they need. Team management is available on every plan, with member limits that scale as you grow.',
        callout: { type: 'info', text: 'Free plans include 1 team member. Pro supports up to 5, and Ultra expands your limit further.' },
      },
      {
        id: 'what-you-can-do',
        heading: 'What you can do with Teams',
        level: 2,
        content: 'From the Team section in your Clienter workspace, you can invite new members by email, assign granular roles that control exactly what each person can see and do, manage payroll and salaries for recurring team compensation, issue project-based payouts for contract or milestone work, and monitor your team\'s activity across projects, tasks, and client communication.',
      },
      {
        id: 'team-structure',
        heading: 'How teams are structured',
        level: 3,
        content: 'Every Clienter organization has one Owner — the person who created the workspace. The Owner has unrestricted access to billing, settings, and all data. Beyond the Owner, you can create custom roles with fine-grained permissions. Each team member logs in through the Teammate Portal, a dedicated dashboard scoped to their assignments.',
      },
      {
        id: 'getting-started',
        heading: 'Getting started with your team',
        level: 2,
        content: 'Setting up your team takes just a few minutes. Follow these steps to get your first teammate onboarded.',
        steps: [
          'Go to Team in the left sidebar of app.clienter.co.in.',
          'Click Invite Member and enter their email address.',
          'Choose a role or create a custom one with the permissions you need.',
          'Your teammate receives an email invitation with a link to join your workspace.',
          'Once they accept, they appear in your active team list and can access their Teammate Portal.',
        ],
      },
    ],
    faqs: [
      { q: 'Can team members see my revenue or billing info?', a: 'Only if you grant them that permission through their role. By default, teammates cannot see organization billing or revenue data.' },
      { q: 'Do team members need a separate Clienter account?', a: 'Yes. Each team member signs up with their own email. Their account is linked to your organization once they accept the invite.' },
    ],
    relatedLinks: [
      { title: 'Inviting team members', href: '/docs/team/inviting' },
      { title: 'Team roles & permissions', href: '/docs/team/roles' },
      { title: 'Teammate portal', href: '/docs/team/teammate-portal' },
      { title: 'Team member limits per plan', href: '/docs/team/limits' },
    ],
  },

  'team/inviting': {
    slug: 'team/inviting',
    title: 'Inviting Team Members',
    metaTitle: 'How to Invite Team Members — Clienter Docs',
    metaDescription: 'Step-by-step guide to inviting teammates to your Clienter workspace. Send email invitations, assign roles, and manage pending invites.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Inviting Members', href: '/docs/team/inviting' },
    ],
    sections: [
      {
        id: 'invite-process',
        heading: 'How invitations work',
        level: 2,
        content: 'Clienter uses email-based invitations. When you invite someone, they receive an email with a secure link to join your workspace. The invitation expires after 7 days. If it expires, you can resend it from the Team page.',
      },
      {
        id: 'sending-invite',
        heading: 'Sending an invitation',
        level: 2,
        content: 'You can invite a teammate in under a minute from the Team section.',
        steps: [
          'Navigate to Team from the sidebar at app.clienter.co.in.',
          'Click the Invite Member button in the top-right corner.',
          'Enter the person\'s email address.',
          'Select a role from the dropdown — this determines what they can access.',
          'Optionally add a personal note that appears in the invitation email.',
          'Click Send Invite.',
        ],
        callout: { type: 'tip', text: 'You can invite multiple people at once by entering comma-separated email addresses.' },
      },
      {
        id: 'managing-pending',
        heading: 'Managing pending invitations',
        level: 2,
        content: 'All pending invitations appear in the Pending tab on the Team page. From here you can see when each invite was sent, resend expired invitations, revoke an invitation before it is accepted, or change the assigned role before the person joins.',
      },
      {
        id: 'accept-flow',
        heading: 'What your teammate sees',
        level: 3,
        content: 'When a teammate clicks the invitation link, they are taken to a sign-up page where they create their Clienter account (or log in if they already have one). After accepting, they land in their Teammate Portal with access scoped to the role you assigned.',
        callout: { type: 'info', text: 'If the invited person already belongs to another Clienter organization, they can switch between workspaces from their account menu.' },
      },
    ],
    faqs: [
      { q: 'What happens if someone doesn\'t receive the invite email?', a: 'Ask them to check their spam folder. You can also resend the invitation from the Pending tab on the Team page, or contact support@clienter.co.in for help.' },
      { q: 'Can I invite someone who is already on another Clienter workspace?', a: 'Yes. A person can belong to multiple organizations. They will see a workspace switcher in their account menu.' },
    ],
    relatedLinks: [
      { title: 'Team roles & permissions', href: '/docs/team/roles' },
      { title: 'Team member limits', href: '/docs/team/limits' },
      { title: 'Removing & restoring members', href: '/docs/team/removing' },
    ],
  },

  'team/roles': {
    slug: 'team/roles',
    title: 'Team Roles & Permissions',
    metaTitle: 'Team Roles & Permissions — Clienter Docs',
    metaDescription: 'Understand team roles in Clienter. Learn the difference between Owner and custom roles, and how to configure fine-grained permissions for each team member.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Roles & Permissions', href: '/docs/team/roles' },
    ],
    sections: [
      {
        id: 'role-system',
        heading: 'How roles work',
        level: 2,
        content: 'Clienter uses a role-based access system. Every team member is assigned a role that controls which areas of the workspace they can view and interact with. Roles are defined at the organization level and can be reused across multiple team members.',
      },
      {
        id: 'owner-role',
        heading: 'The Owner role',
        level: 2,
        content: 'The Owner is the person who created the Clienter organization. There is exactly one Owner per workspace. The Owner has unrestricted access to everything: billing, settings, all clients, all projects, team management, and revenue data. Ownership can be transferred to another team member from Organization Settings, but this action is irreversible without contacting support.',
        callout: { type: 'warning', text: 'Transferring ownership grants full control to the new Owner, including billing management. This cannot be undone without contacting support@clienter.co.in.' },
      },
      {
        id: 'custom-roles',
        heading: 'Custom roles',
        level: 2,
        content: 'Beyond the Owner, all roles in Clienter are custom. When you create a role, you pick permissions from a checklist that covers every area of the platform. This means you can create a "Designer" role that only sees assigned projects and files, a "Finance Manager" role that handles invoices and payroll, or an "Account Manager" role with client-facing access but no billing visibility.',
        steps: [
          'Go to Team > Roles in the sidebar.',
          'Click Create Role.',
          'Name the role (e.g., "Project Lead", "Content Writer").',
          'Toggle permissions on or off for each area: Clients, Projects, Tasks, Invoices, Proposals, Contracts, Files, Messages, Team, Payroll, Settings, and Reports.',
          'Save the role. You can now assign it when inviting or editing a team member.',
        ],
      },
      {
        id: 'permission-areas',
        heading: 'Permission areas explained',
        level: 3,
        content: 'Permissions are grouped by feature area. Clients controls whether the member can view, create, or edit client records. Projects determines access to project boards and timelines. Tasks covers task assignment and status changes. Invoices and Proposals control financial document creation and viewing. Contracts allows access to contract templates and sent contracts. Files grants access to the organization file vault. Messages controls internal and client-facing messaging. Team allows viewing and managing other members. Payroll is restricted to salary and payout management. Settings covers organization-level configuration. Reports provides access to analytics dashboards.',
      },
      {
        id: 'editing-roles',
        heading: 'Editing and deleting roles',
        level: 3,
        content: 'You can edit a role\'s permissions at any time from Team > Roles. Changes apply immediately to all members with that role. Deleting a role requires you to reassign affected members to a different role first — Clienter will prompt you to choose a replacement before the deletion completes.',
      },
    ],
    faqs: [
      { q: 'Can I have multiple Owners?', a: 'No. Each organization has exactly one Owner. However, you can create a custom role with near-full access for other senior team members.' },
      { q: 'Do role changes take effect immediately?', a: 'Yes. When you update a role\'s permissions, all members assigned to that role see the changes the next time they load a page.' },
    ],
    relatedLinks: [
      { title: 'Inviting team members', href: '/docs/team/inviting' },
      { title: 'Teammate portal', href: '/docs/team/teammate-portal' },
      { title: 'Removing & restoring members', href: '/docs/team/removing' },
    ],
  },

  'team/teammate-portal': {
    slug: 'team/teammate-portal',
    title: 'Teammate Portal',
    metaTitle: 'Teammate Portal — Clienter Docs',
    metaDescription: 'Explore the Teammate Portal in Clienter. Learn how team members access their dashboard, tasks, projects, messages, payments, and files from a dedicated workspace.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Teammate Portal', href: '/docs/team/teammate-portal' },
    ],
    sections: [
      {
        id: 'portal-overview',
        heading: 'What is the Teammate Portal',
        level: 2,
        content: 'The Teammate Portal is the dedicated workspace each team member sees when they log in to Clienter. Unlike the Owner\'s full dashboard, the portal is scoped to the member\'s role and assignments. It provides a focused experience showing only the projects, tasks, messages, files, and payment information relevant to that person.',
      },
      {
        id: 'portal-dashboard',
        heading: 'Portal dashboard',
        level: 2,
        content: 'The portal dashboard gives each teammate a snapshot of their current workload. It displays tasks assigned to them sorted by due date, projects they are part of with progress indicators, recent messages and notifications, and upcoming deadlines. The dashboard updates in real time as tasks are completed or reassigned.',
        callout: { type: 'tip', text: 'Team members can customize which widgets appear on their portal dashboard by clicking the Customize button in the top-right corner.' },
      },
      {
        id: 'portal-tasks-projects',
        heading: 'Tasks and projects',
        level: 2,
        content: 'From the portal, teammates can view all tasks assigned to them across every project they are part of. They can update task statuses, log time if time tracking is enabled, add comments, and upload deliverables. Project views show the same board or list layout the Owner sees, but filtered to content the member has permission to access.',
      },
      {
        id: 'portal-messages',
        heading: 'Messages',
        level: 3,
        content: 'The Messages section in the portal includes both internal team conversations and client-facing threads the member is added to. Team members can only see client messages if their role grants Clients or Messages permission. All messages support file attachments, mentions, and threading.',
      },
      {
        id: 'portal-payments-files',
        heading: 'Payments and files',
        level: 2,
        content: 'If payroll or payouts are configured, the teammate can view their payment history, upcoming payroll dates, and payout amounts from the Payments tab. The Files section shows documents shared with them or uploaded to projects they belong to. Team members cannot access the organization-wide file vault unless their role explicitly grants Files permission.',
        callout: { type: 'info', text: 'Payment visibility in the portal is controlled by the member\'s role. A member without Payroll permission will only see their own payment history.' },
      },
    ],
    faqs: [
      { q: 'Can team members customize their portal?', a: 'Yes. They can rearrange dashboard widgets and set notification preferences. They cannot change their own role or permissions.' },
      { q: 'Do teammates see other team members\' tasks?', a: 'Only if their role includes Team permission. Otherwise, they see only tasks assigned to them.' },
    ],
    relatedLinks: [
      { title: 'Team roles & permissions', href: '/docs/team/roles' },
      { title: 'Team payroll & salaries', href: '/docs/team/payroll' },
      { title: 'Project-based payouts', href: '/docs/team/payouts' },
    ],
  },

  'team/payroll': {
    slug: 'team/payroll',
    title: 'Team Payroll & Salaries',
    metaTitle: 'Team Payroll & Salaries — Clienter Docs',
    metaDescription: 'Set up recurring payroll and salary tracking for your team in Clienter. Configure pay schedules, track payment history, and manage compensation on the Ultra plan.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Payroll & Salaries', href: '/docs/team/payroll' },
    ],
    planBadge: 'Ultra',
    sections: [
      {
        id: 'payroll-overview',
        heading: 'Payroll overview',
        level: 2,
        content: 'Clienter\'s payroll feature lets you track recurring compensation for your team members. Set monthly or custom-frequency salaries, record payments, and keep a full history of what has been paid and what is upcoming. Payroll is available exclusively on the Ultra plan.',
        planBadge: 'Ultra',
        callout: { type: 'info', text: 'Payroll in Clienter is a tracking and record-keeping tool. Actual fund transfers happen through your bank or payment provider — Clienter records the transaction for your books.' },
      },
      {
        id: 'setting-up-salary',
        heading: 'Setting up a salary',
        level: 2,
        content: 'To configure payroll for a team member, follow these steps.',
        steps: [
          'Navigate to Team and select the team member.',
          'Open the Payroll tab on their profile.',
          'Click Set Salary.',
          'Enter the salary amount and select the currency.',
          'Choose a pay frequency: monthly, bi-weekly, or custom.',
          'Set the pay day (e.g., 1st of each month).',
          'Save. The salary now appears in the payroll calendar.',
        ],
      },
      {
        id: 'recording-payments',
        heading: 'Recording salary payments',
        level: 2,
        content: 'When you pay a team member, mark the payment as completed in Clienter to keep your records accurate. Go to Team > Payroll, find the upcoming or overdue payment, and click Mark as Paid. You can add a reference number or note (e.g., a bank transaction ID) for your records. Paid entries move to the payment history.',
      },
      {
        id: 'payroll-history',
        heading: 'Payment history and reports',
        level: 3,
        content: 'Every salary payment you record is stored in the member\'s payment history. You can filter by date range, export the history as CSV for accounting, and view aggregate totals per month or per team member. This data also feeds into your Dashboard revenue KPIs if payroll expenses are enabled in reporting settings.',
        callout: { type: 'tip', text: 'Export payroll records at the end of each month to keep your external accounting software in sync.' },
      },
    ],
    faqs: [
      { q: 'Does Clienter send money to my team members?', a: 'No. Clienter tracks salaries and records payments. You handle actual fund transfers through your bank, PayPal, or other payment method.' },
      { q: 'Can I set different currencies for different team members?', a: 'Yes. Each team member\'s salary can be set in any currency Clienter supports, regardless of your organization\'s default currency.' },
    ],
    relatedLinks: [
      { title: 'Project-based payouts', href: '/docs/team/payouts' },
      { title: 'Teammate portal', href: '/docs/team/teammate-portal' },
      { title: 'Currency settings', href: '/docs/settings/currency' },
    ],
  },

  'team/payouts': {
    slug: 'team/payouts',
    title: 'Project-Based & Retainer Payouts',
    metaTitle: 'Project-Based & Retainer Payouts — Clienter Docs',
    metaDescription: 'Manage project-based payouts and retainer payouts for your team in Clienter. Assign payout amounts per project, track milestones, and record payments to contractors.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Payouts', href: '/docs/team/payouts' },
    ],
    sections: [
      {
        id: 'payouts-overview',
        heading: 'How payouts work',
        level: 2,
        content: 'Payouts are one-time or milestone-based payments you make to team members for specific work — separate from recurring payroll salaries. Use payouts to compensate contractors per project, pay bonuses for completed milestones, or distribute retainer earnings to team members who contributed to a retainer client\'s work.',
      },
      {
        id: 'project-payouts',
        heading: 'Project-based payouts',
        level: 2,
        content: 'When a team member contributes to a project, you can assign a payout amount tied to that project. This is useful for contract work where compensation is per-deliverable rather than on a recurring schedule.',
        steps: [
          'Open the project and go to the Team tab.',
          'Click Add Payout next to the team member\'s name.',
          'Enter the payout amount, currency, and an optional description (e.g., "Logo design delivery").',
          'Choose whether the payout is due immediately or on a future date.',
          'Save. The payout appears in the member\'s Payments tab and in your payouts ledger.',
        ],
        callout: { type: 'tip', text: 'You can split a project payout into milestones — for example, 50% on design approval and 50% on final delivery.' },
      },
      {
        id: 'retainer-payouts',
        heading: 'Retainer payouts',
        level: 2,
        content: 'For retainer clients, you may want to distribute a portion of the retainer fee to team members who handled the work. Retainer payouts link directly to the retainer agreement, so you can track how much of each retainer cycle goes to team compensation versus profit. Set up retainer payouts from the Retainer details page under the Payouts section.',
      },
      {
        id: 'tracking-payouts',
        heading: 'Tracking and recording payouts',
        level: 3,
        content: 'All payouts appear in your Team > Payouts ledger. Filter by team member, project, or date range. When you transfer funds to the team member, mark the payout as Paid and add a reference number. Completed payouts feed into your Dashboard financial reports, giving you a clear picture of project profitability after team costs.',
        callout: { type: 'info', text: 'Payout tracking is available on all plans. Payroll (recurring salaries) requires the Ultra plan.' },
      },
    ],
    faqs: [
      { q: 'What is the difference between payroll and payouts?', a: 'Payroll is for recurring salaries (monthly, bi-weekly). Payouts are one-time payments tied to a specific project, milestone, or retainer period.' },
      { q: 'Can a team member see their pending payouts?', a: 'Yes. Pending payouts appear in the Payments tab of their Teammate Portal along with expected dates and amounts.' },
    ],
    relatedLinks: [
      { title: 'Team payroll & salaries', href: '/docs/team/payroll' },
      { title: 'Teammate portal', href: '/docs/team/teammate-portal' },
      { title: 'Dashboard KPIs', href: '/docs/dashboard/kpis' },
    ],
  },

  'team/removing': {
    slug: 'team/removing',
    title: 'Removing & Restoring Team Members',
    metaTitle: 'Removing & Restoring Team Members — Clienter Docs',
    metaDescription: 'Learn how to remove team members from your Clienter workspace and restore them if needed. Understand what happens to their data, tasks, and payment records.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Removing & Restoring', href: '/docs/team/removing' },
    ],
    sections: [
      {
        id: 'removing-member',
        heading: 'Removing a team member',
        level: 2,
        content: 'When a team member leaves your organization or you need to revoke their access, you can remove them from the Team page.',
        steps: [
          'Go to Team in the sidebar.',
          'Find the member you want to remove.',
          'Click the three-dot menu on their row and select Remove Member.',
          'Confirm the removal in the dialog. You will be asked whether to reassign their open tasks.',
          'The member loses access to your workspace immediately.',
        ],
        callout: { type: 'warning', text: 'Removing a team member revokes their access immediately. They will no longer be able to log in to your workspace or see any data.' },
      },
      {
        id: 'what-happens',
        heading: 'What happens to their data',
        level: 2,
        content: 'When a member is removed, their completed work remains in the system — task history, file uploads, comments, and messages are preserved. Open tasks assigned to them can be reassigned during removal or left unassigned. Payment records (payroll and payouts) are retained for your accounting. The member\'s account still exists in Clienter but is no longer linked to your organization.',
      },
      {
        id: 'restoring-member',
        heading: 'Restoring a removed member',
        level: 2,
        content: 'If you need to bring someone back, you can restore them within 90 days of removal.',
        steps: [
          'Go to Team and click the Removed tab.',
          'Find the person and click Restore.',
          'Choose the role to assign them (it can be different from their original role).',
          'The member receives an email notification that their access has been reinstated.',
        ],
        callout: { type: 'info', text: 'After 90 days, removed members no longer appear in the Removed tab. You can still re-invite them as a new member, but their previous task assignments will not be reconnected.' },
      },
      {
        id: 'outstanding-payments',
        heading: 'Handling outstanding payments',
        level: 3,
        content: 'If a removed member has unpaid payroll or pending payouts, those records remain in your Payouts ledger marked as outstanding. You can still mark them as paid after the person has been removed. It is recommended to settle all pending payments before or shortly after removal.',
      },
    ],
    faqs: [
      { q: 'Can a removed member still access shared files?', a: 'No. All access is revoked immediately upon removal. Files they uploaded remain in your workspace.' },
      { q: 'Does removing a member free up a team slot?', a: 'Yes. Removing a member opens that slot for a new invitation, based on your plan\'s team member limit.' },
    ],
    relatedLinks: [
      { title: 'Inviting team members', href: '/docs/team/inviting' },
      { title: 'Team member limits', href: '/docs/team/limits' },
      { title: 'Team payroll & salaries', href: '/docs/team/payroll' },
    ],
  },

  'team/limits': {
    slug: 'team/limits',
    title: 'Team Member Limits per Plan',
    metaTitle: 'Team Member Limits per Plan — Clienter Docs',
    metaDescription: 'Understand team member limits on each Clienter plan. Free includes 1 member, Pro supports up to 5, and Ultra offers expanded team capacity for growing agencies.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Team', href: '/docs/team' },
      { label: 'Member Limits', href: '/docs/team/limits' },
    ],
    sections: [
      {
        id: 'limits-overview',
        heading: 'Plan-based team limits',
        level: 2,
        content: 'Each Clienter plan includes a set number of team member slots. The Owner does not count toward this limit — only invited team members do. Here is the breakdown: Free plan allows 1 team member, Pro plan allows up to 5 team members, and Ultra plan provides an expanded limit for larger agencies. These limits include active members only; removed members do not count.',
      },
      {
        id: 'free-plan',
        heading: 'Free plan — 1 team member',
        level: 3,
        content: 'The Free plan is designed for solo freelancers who occasionally collaborate with one other person. You get 1 team member slot, which is enough for a virtual assistant, a part-time designer, or a subcontractor on a single project.',
        planBadge: 'Free',
      },
      {
        id: 'pro-plan',
        heading: 'Pro plan — up to 5 team members',
        level: 3,
        content: 'The Pro plan is built for small teams and growing freelancers. With 5 team member slots, you can bring on a core team of designers, developers, writers, or account managers. All team features — roles, permissions, the teammate portal, and project-based payouts — are fully available on Pro.',
        planBadge: 'Pro',
      },
      {
        id: 'ultra-plan',
        heading: 'Ultra plan — expanded team',
        level: 3,
        content: 'The Ultra plan is for agencies that need to scale. It provides an expanded team member limit, along with exclusive features like payroll tracking, white-label branding, and custom domains. If you need more slots than your Ultra plan includes, contact support@clienter.co.in to discuss your requirements.',
        planBadge: 'Ultra',
        callout: { type: 'tip', text: 'Need more team slots than your current plan allows? Upgrading your plan takes effect immediately and opens up additional slots right away.' },
      },
      {
        id: 'checking-usage',
        heading: 'Checking your current usage',
        level: 2,
        content: 'To see how many team slots you have used, go to Team in the sidebar. The header shows your current count (e.g., "3 of 5 members") along with a link to upgrade if you are approaching your limit. Pending invitations count toward your limit — revoke unused invitations to free up slots.',
      },
    ],
    faqs: [
      { q: 'Do pending invitations count toward my limit?', a: 'Yes. An outstanding invitation reserves a slot. Revoke it from the Pending tab if you need to free the slot.' },
      { q: 'What happens if I downgrade and exceed the new plan\'s limit?', a: 'Existing team members remain active, but you cannot invite new members until you are within the new plan\'s limit. You will be prompted to remove members or upgrade.' },
    ],
    relatedLinks: [
      { title: 'Pricing', href: '/pricing' },
      { title: 'Inviting team members', href: '/docs/team/inviting' },
      { title: 'Removing & restoring members', href: '/docs/team/removing' },
    ],
  },

  // ─── DASHBOARD ───────────────────────────────────────────────────────────────

  'dashboard': {
    slug: 'dashboard',
    title: 'Dashboard Overview',
    metaTitle: 'Dashboard Overview — Clienter Docs',
    metaDescription: 'Your Clienter dashboard is the command center for your business. View revenue KPIs, financial forecasts, setup progress, and important announcements at a glance.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Dashboard', href: '/docs/dashboard' },
    ],
    sections: [
      {
        id: 'dashboard-overview',
        heading: 'Your business command center',
        level: 2,
        content: 'The Clienter dashboard is the first thing you see when you log in. It gives you a real-time snapshot of your business health — revenue metrics, active projects, upcoming tasks, and financial forecasts. Everything is designed to help you make informed decisions without digging through individual projects or clients.',
      },
      {
        id: 'dashboard-sections',
        heading: 'What the dashboard shows',
        level: 2,
        content: 'The dashboard is organized into distinct sections. The KPI bar at the top displays your key revenue numbers including total revenue, monthly recurring revenue (MRR), and active retainers. Below that, the financial forecast projects your expected income for the coming months. The activity feed shows recent actions across your workspace. The setup checklist appears for new accounts and guides you through initial configuration. Announcements from the Clienter team appear at the top when there is something important to share.',
      },
      {
        id: 'customizing',
        heading: 'Customizing your dashboard',
        level: 3,
        content: 'You can rearrange dashboard widgets by dragging them to your preferred position. Some widgets can be collapsed if you do not use them regularly. Your layout preferences are saved automatically and persist across sessions.',
        callout: { type: 'tip', text: 'Right-click any widget header to access options like collapse, expand, or hide. Hidden widgets can be restored from the Customize menu.' },
      },
      {
        id: 'team-vs-owner',
        heading: 'Dashboard for team members',
        level: 3,
        content: 'Team members see a different version of the dashboard through their Teammate Portal. They see tasks assigned to them, projects they belong to, and their own payment information — but not organization-wide revenue KPIs or financial forecasts, unless their role grants reporting access.',
      },
    ],
    relatedLinks: [
      { title: 'Revenue KPIs', href: '/docs/dashboard/kpis' },
      { title: 'Financial forecast', href: '/docs/dashboard/forecast' },
      { title: 'Setup checklist', href: '/docs/dashboard/setup-checklist' },
      { title: 'Announcements', href: '/docs/dashboard/announcements' },
    ],
  },

  'dashboard/kpis': {
    slug: 'dashboard/kpis',
    title: 'Revenue KPIs',
    metaTitle: 'Revenue KPIs — Clienter Docs',
    metaDescription: 'Track your key revenue metrics on the Clienter dashboard. Monitor total revenue, MRR, active retainers, outstanding invoices, and more in real time.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Dashboard', href: '/docs/dashboard' },
      { label: 'Revenue KPIs', href: '/docs/dashboard/kpis' },
    ],
    sections: [
      {
        id: 'kpis-overview',
        heading: 'Understanding your KPIs',
        level: 2,
        content: 'The KPI bar at the top of your dashboard displays the numbers that matter most for your business. These metrics update in real time as invoices are paid, retainers are renewed, and projects are completed.',
      },
      {
        id: 'available-kpis',
        heading: 'Available metrics',
        level: 2,
        content: 'Clienter tracks several key revenue metrics. Total Revenue shows the sum of all paid invoices for the selected period. Monthly Recurring Revenue (MRR) calculates your predictable monthly income from active retainers. Active Retainers counts the number of retainer agreements currently in effect. Outstanding Invoices shows the total amount of unpaid invoices. Average Project Value displays the mean value of completed projects over the selected period.',
        callout: { type: 'info', text: 'MRR is calculated from active retainers only. One-time project payments are not included in MRR, even if they repeat informally.' },
      },
      {
        id: 'filtering-kpis',
        heading: 'Filtering by time period',
        level: 3,
        content: 'Use the date range selector above the KPI bar to view metrics for different periods — this month, last month, this quarter, this year, or a custom date range. All KPIs update to reflect the selected period, so you can compare performance across months or quarters.',
      },
      {
        id: 'kpi-trends',
        heading: 'Trend indicators',
        level: 3,
        content: 'Each KPI displays a percentage change compared to the previous period. A green upward arrow indicates growth, while a red downward arrow signals a decline. These trend indicators help you spot patterns early — for example, a dropping MRR might mean retainers are not being renewed.',
        callout: { type: 'tip', text: 'Click any KPI card to drill down into the underlying data — invoices, retainers, or projects contributing to that number.' },
      },
    ],
    faqs: [
      { q: 'Why is my MRR different from my monthly revenue?', a: 'MRR only includes predictable recurring income from active retainers. One-time project invoices are counted in total revenue but not MRR.' },
      { q: 'Can team members see revenue KPIs?', a: 'Only if their role includes Reports permission. By default, teammates do not see organization-wide financial data.' },
    ],
    relatedLinks: [
      { title: 'Financial forecast', href: '/docs/dashboard/forecast' },
      { title: 'Dashboard overview', href: '/docs/dashboard' },
      { title: 'Currency settings', href: '/docs/settings/currency' },
    ],
  },

  'dashboard/forecast': {
    slug: 'dashboard/forecast',
    title: 'Financial Forecast',
    metaTitle: 'Financial Forecast — Clienter Docs',
    metaDescription: 'Use Clienter\'s financial forecast to predict revenue for the next 1 to 12 months. Based on active retainers, pending invoices, and scheduled projects.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Dashboard', href: '/docs/dashboard' },
      { label: 'Financial Forecast', href: '/docs/dashboard/forecast' },
    ],
    sections: [
      {
        id: 'forecast-overview',
        heading: 'How the forecast works',
        level: 2,
        content: 'Clienter\'s financial forecast uses your existing data to predict future revenue. It looks at active retainer agreements, scheduled project milestones, pending invoices, and historical payment patterns to generate a month-by-month projection for up to 12 months ahead.',
      },
      {
        id: 'data-sources',
        heading: 'What feeds the forecast',
        level: 2,
        content: 'The forecast draws from three sources. Active retainers contribute their recurring amount for each month they are expected to continue. Scheduled invoices and project milestones with known due dates are placed in the month they are expected to be paid. Historical trends — such as your average payment collection time and seasonal patterns — adjust the projections to be more realistic.',
        callout: { type: 'info', text: 'The forecast is a projection, not a guarantee. It is most accurate when your retainers and project schedules are up to date in Clienter.' },
      },
      {
        id: 'reading-forecast',
        heading: 'Reading the forecast chart',
        level: 2,
        content: 'The forecast appears as a bar or line chart on your dashboard. Each bar represents a future month\'s projected revenue. Hover over a bar to see the breakdown — how much comes from retainers versus one-time projects. The chart also shows a confidence range: a lighter band around each bar indicating the best-case and worst-case scenarios based on your payment history.',
      },
      {
        id: 'adjusting-range',
        heading: 'Adjusting the forecast range',
        level: 3,
        content: 'By default, the forecast shows 3 months. Use the range selector to extend it to 1, 6, or 12 months. Shorter ranges are more accurate; longer ranges are useful for capacity planning and hiring decisions but carry more uncertainty.',
        callout: { type: 'tip', text: 'Combine the 12-month forecast with your team payroll costs to estimate profitability for the year ahead.' },
      },
    ],
    faqs: [
      { q: 'How accurate is the forecast?', a: 'Accuracy depends on how current your data is. Regularly updating retainer statuses, project timelines, and invoice due dates improves the projection significantly.' },
      { q: 'Does the forecast account for expenses?', a: 'Currently, the forecast shows revenue only. Payroll costs are tracked separately in the Team section. A combined profit forecast is on the roadmap.' },
    ],
    relatedLinks: [
      { title: 'Revenue KPIs', href: '/docs/dashboard/kpis' },
      { title: 'Dashboard overview', href: '/docs/dashboard' },
      { title: 'Team payroll', href: '/docs/team/payroll' },
    ],
  },

  'dashboard/setup-checklist': {
    slug: 'dashboard/setup-checklist',
    title: 'Setup Checklist',
    metaTitle: 'Setup Checklist for New Users — Clienter Docs',
    metaDescription: 'Complete your Clienter setup with the guided checklist. Configure branding, add your first client, create a project, set up billing, and invite your team.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Dashboard', href: '/docs/dashboard' },
      { label: 'Setup Checklist', href: '/docs/dashboard/setup-checklist' },
    ],
    sections: [
      {
        id: 'checklist-overview',
        heading: 'What is the setup checklist',
        level: 2,
        content: 'When you create a new Clienter account, the dashboard displays a setup checklist that walks you through the essential first steps. Each item links to the relevant part of the app. As you complete steps, they are checked off automatically. The checklist disappears once every item is done, but you can dismiss it early if you prefer.',
      },
      {
        id: 'checklist-items',
        heading: 'Checklist steps',
        level: 2,
        content: 'The setup checklist guides you through the core configuration steps to get your workspace production-ready.',
        steps: [
          'Set your organization name and upload your logo in Settings > Branding.',
          'Configure your currency and timezone in Settings.',
          'Add your bank or payment details so invoices display your payment information.',
          'Create your first client record with their contact information.',
          'Set up your first project and assign it to a client.',
          'Invite a team member if you work with collaborators.',
          'Send your first invoice or proposal to a client.',
        ],
        callout: { type: 'tip', text: 'You do not have to complete every step to start using Clienter. The checklist is a guide, not a requirement. Dismiss it any time by clicking the X in the corner.' },
      },
      {
        id: 'progress-tracking',
        heading: 'Tracking your progress',
        level: 3,
        content: 'The checklist shows a progress bar indicating how many steps you have completed out of the total. Each completed step displays a checkmark. Steps are detected automatically — for example, if you add a client, that step is checked off without you needing to click anything on the checklist.',
      },
      {
        id: 'reopening-checklist',
        heading: 'Reopening the checklist',
        level: 3,
        content: 'If you dismissed the checklist before completing it and want it back, go to Settings > Dashboard and toggle the Setup Checklist visibility back on. It will reappear on your dashboard with your previous progress intact.',
      },
    ],
    relatedLinks: [
      { title: 'Dashboard overview', href: '/docs/dashboard' },
      { title: 'Organization branding', href: '/docs/settings/branding' },
      { title: 'Currency settings', href: '/docs/settings/currency' },
      { title: 'Inviting team members', href: '/docs/team/inviting' },
    ],
  },

  'dashboard/announcements': {
    slug: 'dashboard/announcements',
    title: 'Dashboard Announcements',
    metaTitle: 'Dashboard Announcements — Clienter Docs',
    metaDescription: 'Stay informed with dashboard announcements in Clienter. Learn about new features, important updates, maintenance schedules, and product news.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Dashboard', href: '/docs/dashboard' },
      { label: 'Announcements', href: '/docs/dashboard/announcements' },
    ],
    sections: [
      {
        id: 'announcements-overview',
        heading: 'What are dashboard announcements',
        level: 2,
        content: 'Dashboard announcements are messages from the Clienter team that appear at the top of your dashboard. They communicate new feature launches, important product updates, scheduled maintenance, pricing changes, and tips to help you get more out of the platform.',
      },
      {
        id: 'types',
        heading: 'Types of announcements',
        level: 2,
        content: 'Announcements fall into several categories. Feature launches highlight new capabilities you can start using immediately. Product updates cover improvements to existing features. Maintenance notices warn about scheduled downtime or migrations. Tips and guides share best practices for using Clienter more effectively. Each announcement is labeled with its category so you can quickly gauge its relevance.',
      },
      {
        id: 'managing-announcements',
        heading: 'Managing announcements',
        level: 2,
        content: 'You can dismiss individual announcements by clicking the X on the announcement card. Dismissed announcements do not reappear. If you want to review past announcements, visit the Announcements archive from the dashboard menu. Announcements are shown only to the Owner and team members with Settings permission.',
        callout: { type: 'info', text: 'Critical announcements, such as security updates or breaking changes, cannot be dismissed until acknowledged.' },
      },
    ],
    relatedLinks: [
      { title: 'Dashboard overview', href: '/docs/dashboard' },
      { title: 'Notification preferences', href: '/docs/settings/notifications' },
    ],
  },

  // ─── SETTINGS ────────────────────────────────────────────────────────────────

  'settings': {
    slug: 'settings',
    title: 'Organization Settings',
    metaTitle: 'Organization Settings — Clienter Docs',
    metaDescription: 'Configure your Clienter workspace. Set your organization name, branding, currency, timezone, payment details, notifications, and more from one settings page.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
    ],
    sections: [
      {
        id: 'settings-overview',
        heading: 'Settings overview',
        level: 2,
        content: 'Organization Settings is where you configure everything about your Clienter workspace. From branding and currency to payment details and notification preferences, all workspace-level configuration lives here. Only the Owner and team members with Settings permission can access this section.',
      },
      {
        id: 'settings-sections',
        heading: 'Available settings',
        level: 2,
        content: 'Settings are organized into logical groups. Branding covers your organization name, logo, and visual identity. White-label lets Ultra users fully rebrand the client-facing experience. Custom Domains connects your own domain to the client portal. Currency and Timezone set the defaults for your invoices and scheduling. Bank Details configures the payment information shown on your invoices. Dark Mode toggles the workspace theme. Files Vault manages your private organization documents. Notifications controls which events trigger email and in-app alerts.',
      },
      {
        id: 'accessing-settings',
        heading: 'Accessing settings',
        level: 3,
        content: 'Click Settings in the left sidebar at app.clienter.co.in, or click your organization name in the top-left corner and select Settings from the dropdown. All settings are saved automatically as you make changes — there is no separate save button.',
        callout: { type: 'info', text: 'Settings changes take effect immediately across your workspace. Team members will see updates the next time they load a page.' },
      },
    ],
    relatedLinks: [
      { title: 'Branding', href: '/docs/settings/branding' },
      { title: 'White-label branding', href: '/docs/settings/white-label' },
      { title: 'Currency settings', href: '/docs/settings/currency' },
      { title: 'Notification preferences', href: '/docs/settings/notifications' },
    ],
  },

  'settings/branding': {
    slug: 'settings/branding',
    title: 'Organization Name, Logo & Branding',
    metaTitle: 'Org Branding — Clienter Docs',
    metaDescription: 'Set your organization name, upload your logo, and configure branding in Clienter. Your branding appears on invoices, proposals, contracts, and the client portal.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Branding', href: '/docs/settings/branding' },
    ],
    sections: [
      {
        id: 'branding-overview',
        heading: 'Why branding matters',
        level: 2,
        content: 'Your branding in Clienter is what your clients see. Your organization name and logo appear on invoices, proposals, contracts, and the client portal. Consistent branding builds trust and gives your agency a professional appearance across every client interaction.',
      },
      {
        id: 'setting-name-logo',
        heading: 'Setting your name and logo',
        level: 2,
        content: 'Configure your organization identity in a few steps.',
        steps: [
          'Go to Settings > Branding at app.clienter.co.in.',
          'Enter your organization name. This appears in the header of all client-facing documents.',
          'Upload your logo. Supported formats are PNG, JPG, and SVG. A square logo works best (recommended size: 512x512 pixels).',
          'Optionally add a tagline that appears beneath your logo on proposals and contracts.',
          'Changes save automatically and apply across all documents and portals.',
        ],
      },
      {
        id: 'where-branding-appears',
        heading: 'Where your branding appears',
        level: 3,
        content: 'Your organization name and logo are used in the following places: invoice headers, proposal cover pages, contract headers, the client portal navigation bar, email notifications sent to clients, and exported PDF documents. If you have white-label branding enabled on the Ultra plan, your branding extends to the full client portal theme.',
        callout: { type: 'tip', text: 'Upload a high-resolution logo for the best appearance on PDF exports. Low-resolution images may appear blurry when printed.' },
      },
      {
        id: 'updating-branding',
        heading: 'Updating your branding',
        level: 3,
        content: 'You can change your organization name or logo at any time. Updates apply to all future documents immediately. Previously generated PDF exports retain the branding they were created with — re-export them if you need the new branding on older documents.',
      },
    ],
    relatedLinks: [
      { title: 'White-label branding', href: '/docs/settings/white-label' },
      { title: 'Custom domains', href: '/docs/settings/custom-domains' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/white-label': {
    slug: 'settings/white-label',
    title: 'White-Label Branding',
    metaTitle: 'White-Label Branding — Clienter Docs',
    metaDescription: 'Remove Clienter branding and fully customize the client portal with your own colors, logo, and theme on the Ultra plan. Make Clienter look like your own platform.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'White-Label', href: '/docs/settings/white-label' },
    ],
    planBadge: 'Ultra',
    sections: [
      {
        id: 'white-label-overview',
        heading: 'What is white-label branding',
        level: 2,
        content: 'White-label branding lets you remove all Clienter branding from the client-facing experience and replace it with your own. Your clients see your logo, your colors, and your brand name — never "Clienter." This is available exclusively on the Ultra plan.',
        planBadge: 'Ultra',
      },
      {
        id: 'customizable-elements',
        heading: 'What you can customize',
        level: 2,
        content: 'White-label settings give you control over the complete visual identity of the client portal. You can set your primary brand color, which applies to buttons, links, and accent elements throughout the portal. You can upload your logo for the portal navigation bar and login page. You can set a custom favicon that appears in the browser tab. And you can apply a full repaint that adjusts the entire color scheme — backgrounds, cards, text — to match your brand palette.',
        steps: [
          'Go to Settings > White-Label.',
          'Upload your logo for the client portal header.',
          'Set your primary brand color using the color picker or enter a hex code.',
          'Optionally upload a custom favicon (ICO or PNG, 32x32 recommended).',
          'Enable Full Repaint to apply your brand colors to the entire portal theme.',
          'Preview the changes in the live preview panel on the right side of the page.',
          'Save. Your clients will see the updated branding on their next visit.',
        ],
      },
      {
        id: 'full-repaint',
        heading: 'Full repaint mode',
        level: 3,
        content: 'Full repaint goes beyond just swapping the logo and accent color. It recalculates the entire portal theme — sidebar, cards, headers, input fields, and backgrounds — to align with your brand palette. You provide a primary and secondary color, and Clienter generates a cohesive theme. Preview it before publishing to make sure everything looks right.',
        callout: { type: 'warning', text: 'Full repaint changes are visible to all your clients immediately after saving. Preview thoroughly before publishing.' },
      },
      {
        id: 'email-branding',
        heading: 'White-label emails',
        level: 3,
        content: 'When white-label is enabled, client-facing email notifications (invoice reminders, proposal shares, contract signatures) use your logo and brand colors instead of Clienter\'s defaults. The sender name shows your organization name. Combined with a custom domain for email, this creates a fully branded experience from inbox to portal.',
        callout: { type: 'tip', text: 'Pair white-label branding with a custom domain for the most seamless client experience.' },
      },
    ],
    faqs: [
      { q: 'Will my clients ever see the Clienter name?', a: 'With white-label enabled, the Clienter name and branding are completely removed from the client portal, emails, and documents. The only place Clienter is mentioned is in the fine print of legal pages, which you can customize.' },
      { q: 'Can I preview changes before they go live?', a: 'Yes. The white-label settings page includes a live preview panel that shows exactly how the portal will look with your changes before you save.' },
    ],
    relatedLinks: [
      { title: 'Organization branding', href: '/docs/settings/branding' },
      { title: 'Custom domains', href: '/docs/settings/custom-domains' },
      { title: 'Dark mode', href: '/docs/settings/dark-mode' },
    ],
  },

  'settings/custom-domains': {
    slug: 'settings/custom-domains',
    title: 'Custom Domains',
    metaTitle: 'Custom Domains — Clienter Docs',
    metaDescription: 'Connect your own domain to the Clienter client portal. Serve your client portal from portal.youragency.com on the Ultra plan with a simple DNS configuration.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Custom Domains', href: '/docs/settings/custom-domains' },
    ],
    planBadge: 'Ultra',
    sections: [
      {
        id: 'custom-domains-overview',
        heading: 'What are custom domains',
        level: 2,
        content: 'Custom domains let you serve your Clienter client portal from your own domain — for example, portal.youragency.com instead of app.clienter.co.in. This is an add-on feature available on the Ultra plan. Your clients access their portal, invoices, proposals, and contracts through your branded URL.',
        planBadge: 'Ultra',
      },
      {
        id: 'setup-dns',
        heading: 'Setting up your custom domain',
        level: 2,
        content: 'Connecting a custom domain requires a DNS change with your domain registrar.',
        steps: [
          'Go to Settings > Custom Domains at app.clienter.co.in.',
          'Enter the subdomain you want to use (e.g., portal.youragency.com).',
          'Clienter displays a CNAME record you need to add to your DNS settings.',
          'Log in to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add the CNAME record.',
          'Return to Clienter and click Verify. DNS propagation can take up to 48 hours, but often completes within minutes.',
          'Once verified, Clienter automatically provisions an SSL certificate for your domain.',
        ],
        callout: { type: 'info', text: 'SSL certificates are provisioned automatically and renewed by Clienter. Your clients always access the portal over HTTPS.' },
      },
      {
        id: 'troubleshooting',
        heading: 'Troubleshooting DNS issues',
        level: 3,
        content: 'If verification fails, check that the CNAME record matches exactly what Clienter shows — including no trailing dot unless your registrar requires it. Ensure you are adding the record to the correct domain zone. DNS propagation can take up to 48 hours. If issues persist after 48 hours, contact support@clienter.co.in with your domain name and a screenshot of your DNS settings.',
        callout: { type: 'warning', text: 'Do not use an A record or redirect. Clienter requires a CNAME record to properly route and secure your custom domain.' },
      },
      {
        id: 'removing-domain',
        heading: 'Removing a custom domain',
        level: 3,
        content: 'To disconnect your custom domain, go to Settings > Custom Domains and click Remove. Your client portal will immediately revert to the default app.clienter.co.in address. Update any links you have shared with clients to avoid broken URLs.',
      },
    ],
    faqs: [
      { q: 'Can I use a root domain instead of a subdomain?', a: 'We recommend using a subdomain like portal.youragency.com. Root domains (youragency.com) may work with some registrars that support CNAME flattening, but this is not guaranteed.' },
      { q: 'Is there an extra cost for custom domains?', a: 'Custom domains are an add-on to the Ultra plan. Check the pricing page or contact support@clienter.co.in for current add-on pricing.' },
    ],
    relatedLinks: [
      { title: 'White-label branding', href: '/docs/settings/white-label' },
      { title: 'Organization branding', href: '/docs/settings/branding' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/currency': {
    slug: 'settings/currency',
    title: 'Currency Settings',
    metaTitle: 'Currency Settings — Clienter Docs',
    metaDescription: 'Set your organization-wide default currency in Clienter. All invoices, proposals, and financial reports use this currency unless overridden per client.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Currency', href: '/docs/settings/currency' },
    ],
    sections: [
      {
        id: 'currency-overview',
        heading: 'Organization-wide currency',
        level: 2,
        content: 'Clienter lets you set a default currency for your organization. This currency is used on all new invoices, proposals, retainer agreements, and financial reports unless you override it for a specific client or document. Supported currencies include INR, USD, EUR, GBP, AUD, CAD, and many more.',
      },
      {
        id: 'setting-currency',
        heading: 'Changing your default currency',
        level: 2,
        content: 'Set or change your default currency from organization settings.',
        steps: [
          'Go to Settings > Currency at app.clienter.co.in.',
          'Select your preferred currency from the dropdown.',
          'Save. All new documents will use this currency by default.',
        ],
        callout: { type: 'info', text: 'Changing the default currency does not retroactively update existing invoices or proposals. Only new documents use the new default.' },
      },
      {
        id: 'per-client-override',
        heading: 'Per-client currency overrides',
        level: 3,
        content: 'If you work with international clients, you can set a different currency for individual clients. When creating or editing a client record, select their preferred currency. All invoices and proposals for that client will use their currency instead of your organization default.',
      },
      {
        id: 'reporting-currency',
        heading: 'Currency in reports and KPIs',
        level: 3,
        content: 'Dashboard KPIs and financial reports display amounts in your organization\'s default currency. If you have invoices in multiple currencies, they are converted for reporting purposes using approximate exchange rates. For precise multi-currency accounting, we recommend exporting your data and using dedicated accounting software.',
        callout: { type: 'warning', text: 'Exchange rate conversions in dashboard reports are approximate and intended for overview purposes. Do not rely on them for tax or accounting filings.' },
      },
    ],
    relatedLinks: [
      { title: 'Bank & payment details', href: '/docs/settings/bank-details' },
      { title: 'Revenue KPIs', href: '/docs/dashboard/kpis' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/timezone': {
    slug: 'settings/timezone',
    title: 'Timezone Configuration',
    metaTitle: 'Timezone Configuration — Clienter Docs',
    metaDescription: 'Set your organization timezone in Clienter. Affects due dates, invoice schedules, notification timing, and dashboard reporting periods.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Timezone', href: '/docs/settings/timezone' },
    ],
    sections: [
      {
        id: 'timezone-overview',
        heading: 'Why timezone matters',
        level: 2,
        content: 'Your organization timezone determines how dates and times are displayed throughout Clienter. It affects invoice due dates, task deadlines, notification delivery times, scheduled email sends, and the start and end of "today" in your dashboard reports. Setting the correct timezone ensures your team and clients see consistent, accurate dates.',
      },
      {
        id: 'setting-timezone',
        heading: 'Setting your timezone',
        level: 2,
        content: 'Configure your timezone from organization settings.',
        steps: [
          'Go to Settings > Timezone at app.clienter.co.in.',
          'Search for your city or select your timezone from the dropdown (e.g., Asia/Kolkata, America/New_York, Europe/London).',
          'Save. All dates and times across the workspace now use this timezone.',
        ],
      },
      {
        id: 'team-timezones',
        heading: 'Team members in different timezones',
        level: 3,
        content: 'Clienter uses a single organization timezone for consistency. If your team spans multiple timezones, all deadlines and schedules are displayed in the organization timezone. Individual team members can see their local time in parentheses next to due dates for reference, but the canonical time is always the organization timezone.',
        callout: { type: 'tip', text: 'Choose the timezone where the majority of your team or your primary client base is located for the least confusion.' },
      },
    ],
    relatedLinks: [
      { title: 'Currency settings', href: '/docs/settings/currency' },
      { title: 'Notification preferences', href: '/docs/settings/notifications' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/bank-details': {
    slug: 'settings/bank-details',
    title: 'Bank & Payment Details',
    metaTitle: 'Bank & Payment Details for Invoices — Clienter Docs',
    metaDescription: 'Add your bank account, UPI, PayPal, or other payment details in Clienter. These details appear on your invoices so clients know how to pay you.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Bank Details', href: '/docs/settings/bank-details' },
    ],
    sections: [
      {
        id: 'bank-details-overview',
        heading: 'Why add payment details',
        level: 2,
        content: 'When you add your bank or payment details in Clienter, they automatically appear on every invoice you send. This tells your clients exactly how to pay you — whether by bank transfer, UPI, PayPal, or another method. You can configure multiple payment methods and choose which ones to display on invoices.',
      },
      {
        id: 'adding-details',
        heading: 'Adding payment details',
        level: 2,
        content: 'Set up your payment information so it appears on invoices.',
        steps: [
          'Go to Settings > Bank & Payment Details.',
          'Click Add Payment Method.',
          'Choose the type: Bank Transfer, UPI, PayPal, Stripe, or Other.',
          'Enter the relevant details — for bank transfer, this includes account number, IFSC/SWIFT code, bank name, and account holder name.',
          'Mark one method as the default. This is the one shown on invoices unless you select a different one per invoice.',
          'Save.',
        ],
        callout: { type: 'warning', text: 'Double-check your bank details before saving. Incorrect payment information on invoices can delay client payments and cause confusion.' },
      },
      {
        id: 'multiple-methods',
        heading: 'Multiple payment methods',
        level: 3,
        content: 'You can add as many payment methods as you need. For example, you might use UPI for domestic Indian clients and PayPal for international clients. When creating an invoice, you can select which payment method to display from the methods you have configured.',
      },
      {
        id: 'security',
        heading: 'Security of your payment details',
        level: 3,
        content: 'Your payment details are stored securely and only displayed on invoices you send. They are not visible to team members unless their role includes Settings or Invoices permission. Client portal users see payment details only on invoices shared with them.',
        callout: { type: 'info', text: 'Clienter does not process payments directly. Your bank details are displayed on invoices for reference — actual transactions happen through your bank or payment provider.' },
      },
    ],
    relatedLinks: [
      { title: 'Currency settings', href: '/docs/settings/currency' },
      { title: 'Organization branding', href: '/docs/settings/branding' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/dark-mode': {
    slug: 'settings/dark-mode',
    title: 'Dark Mode',
    metaTitle: 'Dark Mode Theme — Clienter Docs',
    metaDescription: 'Switch to dark theme in Clienter for a more comfortable experience in low-light environments. Toggle dark mode from Settings or your profile menu.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Dark Mode', href: '/docs/settings/dark-mode' },
    ],
    sections: [
      {
        id: 'dark-mode-overview',
        heading: 'About dark mode',
        level: 2,
        content: 'Clienter includes a dark theme that reduces eye strain in low-light environments and can save battery on OLED screens. Dark mode changes the workspace background, cards, sidebars, and text colors to a dark palette while preserving readability and brand accent colors.',
      },
      {
        id: 'toggling-dark-mode',
        heading: 'Enabling dark mode',
        level: 2,
        content: 'You can switch to dark mode in two ways.',
        steps: [
          'Quick toggle: Click your avatar in the bottom-left corner and select Dark Mode from the menu.',
          'Settings: Go to Settings > Appearance and select Dark from the theme dropdown. You can also choose System to follow your operating system\'s theme preference.',
        ],
        callout: { type: 'tip', text: 'Choose "System" to have Clienter automatically switch between light and dark mode based on your operating system settings.' },
      },
      {
        id: 'scope',
        heading: 'What dark mode affects',
        level: 3,
        content: 'Dark mode applies to the entire Clienter workspace — dashboard, sidebar, project boards, settings, invoices editor, and all internal pages. It does not affect client-facing pages or the client portal, which use your organization\'s branding settings (or white-label theme on Ultra).',
      },
    ],
    relatedLinks: [
      { title: 'White-label branding', href: '/docs/settings/white-label' },
      { title: 'Organization branding', href: '/docs/settings/branding' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/files-vault': {
    slug: 'settings/files-vault',
    title: 'Organization Files Vault',
    metaTitle: 'Organization Files Vault — Clienter Docs',
    metaDescription: 'Store private organization documents in Clienter\'s files vault. Upload contracts, templates, brand assets, and internal documents accessible only to authorized team members.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Files Vault', href: '/docs/settings/files-vault' },
    ],
    sections: [
      {
        id: 'vault-overview',
        heading: 'What is the files vault',
        level: 2,
        content: 'The Organization Files Vault is a centralized document storage area for your internal files. Use it to store contract templates, brand guidelines, internal policies, tax documents, or any file your team needs access to. Unlike project files, vault files are not tied to any specific client or project — they belong to the organization.',
      },
      {
        id: 'uploading-files',
        heading: 'Uploading and organizing files',
        level: 2,
        content: 'Add files to your vault and organize them with folders.',
        steps: [
          'Go to Settings > Files Vault.',
          'Click Upload or drag and drop files into the vault area.',
          'Create folders to organize files by category (e.g., "Templates", "Brand Assets", "Legal").',
          'Move files between folders by dragging them or using the right-click menu.',
        ],
        callout: { type: 'info', text: 'The files vault supports all common file types including PDF, DOCX, XLSX, PNG, JPG, SVG, and ZIP. Maximum file size per upload is 50 MB.' },
      },
      {
        id: 'access-control',
        heading: 'Who can access the vault',
        level: 2,
        content: 'Access to the files vault is controlled by team roles. Only the Owner and team members whose role includes Files permission can view, upload, or download vault files. Other team members cannot see the vault at all. This makes it safe to store sensitive documents like contracts and financial records.',
        callout: { type: 'warning', text: 'Vault files are private to your organization. They are never visible to clients through the client portal.' },
      },
      {
        id: 'using-vault-files',
        heading: 'Using vault files in projects',
        level: 3,
        content: 'You can reference or attach vault files to projects, proposals, or messages without re-uploading them. When composing a message or attaching a file to a project, use the "From Vault" option to select a file from the vault. This creates a link — the original stays in the vault and can be reused across multiple projects.',
      },
    ],
    relatedLinks: [
      { title: 'Team roles & permissions', href: '/docs/team/roles' },
      { title: 'Organization branding', href: '/docs/settings/branding' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },

  'settings/notifications': {
    slug: 'settings/notifications',
    title: 'Notification Preferences',
    metaTitle: 'Notification Preferences — Clienter Docs',
    metaDescription: 'Customize which notifications you receive in Clienter. Opt out of specific event types for email and in-app notifications while keeping the alerts that matter.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Settings', href: '/docs/settings' },
      { label: 'Notifications', href: '/docs/settings/notifications' },
    ],
    sections: [
      {
        id: 'notifications-overview',
        heading: 'How notifications work',
        level: 2,
        content: 'Clienter sends notifications for key events across your workspace — new messages, task assignments, invoice payments, team member joins, and more. Notifications arrive both in-app (the bell icon in the top navigation) and by email. You can customize which events trigger notifications and through which channels.',
      },
      {
        id: 'configuring-preferences',
        heading: 'Configuring your preferences',
        level: 2,
        content: 'Fine-tune your notification settings to reduce noise while staying informed.',
        steps: [
          'Go to Settings > Notifications.',
          'You will see a list of notification events grouped by category: Messages, Tasks, Invoices, Team, Projects, and System.',
          'For each event, toggle Email and In-App independently. Turn off email if you prefer to check in-app only, or vice versa.',
          'Use the Mute All toggle at the top to temporarily silence all notifications (useful during focused work sessions).',
          'Save your preferences.',
        ],
      },
      {
        id: 'event-types',
        heading: 'Notification events',
        level: 2,
        content: 'The main notification events you can configure include: new message received, task assigned to you, task status changed, task due date approaching, invoice paid, invoice overdue, proposal viewed by client, contract signed, team member joined, team member removed, retainer renewed, and system announcements. Each can be toggled on or off independently for email and in-app delivery.',
        callout: { type: 'info', text: 'Critical security notifications — such as password changes and login from a new device — cannot be disabled. These always arrive by email for your safety.' },
      },
      {
        id: 'team-notifications',
        heading: 'Notifications for team members',
        level: 3,
        content: 'Each team member controls their own notification preferences from their profile settings. As the Owner, you cannot change notification settings for other team members. However, you can control which events generate notifications at the organization level — for example, you can disable task-due-date reminders for the entire workspace if your team prefers not to receive them.',
        callout: { type: 'tip', text: 'Encourage your team to configure their notification preferences during onboarding. This reduces notification fatigue and keeps everyone focused on the alerts that matter to them.' },
      },
    ],
    faqs: [
      { q: 'Can I get notifications on my phone?', a: 'Currently, Clienter sends notifications via email and in-app. Mobile push notifications are on the roadmap. For now, enable email notifications for time-sensitive events.' },
      { q: 'Why am I still getting emails after turning off notifications?', a: 'Make sure you toggled off the Email column specifically, not just the In-App toggle. Also note that critical security notifications cannot be disabled.' },
    ],
    relatedLinks: [
      { title: 'Timezone settings', href: '/docs/settings/timezone' },
      { title: 'Dashboard announcements', href: '/docs/dashboard/announcements' },
      { title: 'Settings overview', href: '/docs/settings' },
    ],
  },
}
