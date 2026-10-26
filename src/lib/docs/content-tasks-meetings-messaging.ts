import type { DocPage } from './types'

export const TASKS_MEETINGS_MESSAGING_DOCS: Record<string, DocPage> = {
  // ─── TASKS ───────────────────────────────────────────────────────────

  'tasks': {
    slug: 'tasks',
    title: 'Task Boards',
    metaTitle: 'Task Boards — Clienter Docs',
    metaDescription: 'Organize agency and freelance work with Kanban-style task boards in Clienter. Create boards per project or client, assign tasks, set priorities, and track progress visually.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What are Task Boards?',
        level: 2,
        content: 'Task Boards in Clienter give you a visual, Kanban-style workspace to manage every deliverable across your agency or freelance practice. Each board is a collection of columns (e.g. To Do, In Progress, Done) containing task cards that you can drag between stages as work progresses. Boards can be scoped to a specific project, client, or team — whatever matches how you think about your work.',
      },
      {
        id: 'key-features',
        heading: 'Key features at a glance',
        level: 2,
        content: 'Task Boards include drag-and-drop columns, priority levels, due dates with time estimates, file attachments, task comments, recurring tasks, and the ability to share boards directly with clients. Every task can be tagged to a client so you can filter your entire workload by account.',
        callout: { type: 'tip', text: 'Use the "By Client" grouping view to see all tasks across every board grouped under the client they belong to — perfect for weekly check-ins.' },
      },
      {
        id: 'creating-first-board',
        heading: 'Creating your first board',
        level: 2,
        content: 'Head to the Tasks section in the left sidebar of app.clienter.co.in. Click "New Board", give it a name (e.g. "Website Redesign — Acme Corp"), and choose whether it starts with default columns or a blank slate.',
        steps: [
          'Open the Tasks section from the sidebar.',
          'Click the "+ New Board" button in the top-right corner.',
          'Enter a board name and optional description.',
          'Choose a template (Default Kanban, Sprint Board, or Blank).',
          'Click "Create" — your board is ready to use.',
        ],
      },
      {
        id: 'navigation',
        heading: 'Navigating between boards',
        level: 2,
        content: 'All your boards appear as tabs or a list in the Tasks section. Star a board to pin it to the top. Use the search bar to find boards by name, or filter by client tag to show only boards related to a specific account.',
      },
    ],
    faqs: [
      { q: 'Is there a limit on how many boards I can create?', a: 'Free plans include up to 3 boards. Pro and Ultra plans offer unlimited boards.' },
      { q: 'Can I archive a board without deleting it?', a: 'Yes. Open the board menu and select "Archive". Archived boards can be restored any time from Settings > Archived Boards.' },
    ],
    relatedLinks: [
      { title: 'Creating & managing boards', href: '/docs/tasks/boards' },
      { title: 'Task cards', href: '/docs/tasks/cards' },
      { title: 'Custom columns', href: '/docs/tasks/columns' },
      { title: 'Sharing boards with clients', href: '/docs/tasks/sharing' },
    ],
  },

  'tasks/boards': {
    slug: 'tasks/boards',
    title: 'Creating & Managing Boards',
    metaTitle: 'Creating & Managing Task Boards — Clienter Docs',
    metaDescription: 'Learn how to create, rename, duplicate, archive, and delete task boards in Clienter. Organize your agency work into dedicated visual workspaces.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Boards', href: '/docs/tasks/boards' },
    ],
    sections: [
      {
        id: 'create-board',
        heading: 'Creating a new board',
        level: 2,
        content: 'Boards are top-level containers for your task workflow. Each board holds its own set of columns and cards. You can create a board from scratch or start from a template.',
        steps: [
          'Navigate to Tasks in the sidebar.',
          'Click "+ New Board".',
          'Enter a name, add an optional description, and select a color label.',
          'Pick a template or choose "Blank Board".',
          'Click "Create".',
        ],
      },
      {
        id: 'rename-describe',
        heading: 'Renaming and describing boards',
        level: 2,
        content: 'Click the board title at the top of the board view to edit it inline. To update the description, click the small description icon next to the title. Descriptions support basic formatting and are visible to anyone the board is shared with.',
      },
      {
        id: 'duplicate',
        heading: 'Duplicating a board',
        level: 2,
        content: 'Need a similar structure for a new project? Open the board menu (three-dot icon at the top right) and select "Duplicate Board". You can choose whether to copy just columns, or columns with all existing cards. Assignees and due dates on duplicated cards are cleared by default so you can reassign them.',
        callout: { type: 'info', text: 'Duplicating a board does not carry over client sharing settings. You will need to re-share the new board separately.' },
      },
      {
        id: 'archive-delete',
        heading: 'Archiving and deleting boards',
        level: 2,
        content: 'Archiving moves a board out of your active list but preserves all data. You can restore an archived board at any time. Deleting a board permanently removes it and all its cards after a 7-day grace period.',
        callout: { type: 'warning', text: 'Deleted boards cannot be recovered after the 7-day grace period. Archive instead if you might need the data later.' },
        steps: [
          'Open the board menu.',
          'Select "Archive Board" or "Delete Board".',
          'Confirm your choice in the dialog.',
        ],
      },
      {
        id: 'board-settings',
        heading: 'Board settings',
        level: 3,
        content: 'Each board has a settings panel where you can change the default card color, enable or disable time tracking on cards, set a default assignee for new cards, and toggle whether completed cards auto-archive after a set number of days.',
      },
    ],
    faqs: [
      { q: 'Can I move cards between different boards?', a: 'Yes. Open the card, click "Move", and select the destination board and column.' },
      { q: 'How do I reorder boards in my sidebar?', a: 'Drag the board tab to reposition it, or star important boards to pin them at the top.' },
    ],
    relatedLinks: [
      { title: 'Task cards', href: '/docs/tasks/cards' },
      { title: 'Custom columns', href: '/docs/tasks/columns' },
      { title: 'Sharing boards with clients', href: '/docs/tasks/sharing' },
    ],
  },

  'tasks/cards': {
    slug: 'tasks/cards',
    title: 'Task Cards',
    metaTitle: 'Task Cards — Labels, Priority, Assignees & More — Clienter Docs',
    metaDescription: 'Master task cards in Clienter: set priority levels, assign team members, add labels, due dates, time estimates, file attachments, and comments to keep every deliverable on track.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Cards', href: '/docs/tasks/cards' },
    ],
    sections: [
      {
        id: 'creating-cards',
        heading: 'Creating a task card',
        level: 2,
        content: 'Click the "+ Add Card" button at the bottom of any column to create a new task. Type a title and press Enter for a quick card, or click the expand icon to open the full card editor where you can fill in all fields at once.',
        steps: [
          'Click "+ Add Card" at the bottom of a column.',
          'Type a task title.',
          'Press Enter to create the card, or click the expand icon for the full editor.',
        ],
      },
      {
        id: 'labels',
        heading: 'Labels',
        level: 2,
        content: 'Labels are colored tags you can attach to cards for quick visual categorization. Common uses include tagging by task type (Design, Development, Content) or urgency. You can create custom labels from any card or from the board settings. Each card can hold multiple labels.',
        callout: { type: 'tip', text: 'Click a label on the board view to instantly filter cards showing only that label.' },
      },
      {
        id: 'priority',
        heading: 'Priority levels',
        level: 2,
        content: 'Every card can be assigned a priority: Low, Medium, High, or Urgent. Priority is shown as a colored indicator on the card face. You can sort any column by priority to surface the most important work at the top.',
      },
      {
        id: 'assignee-dates',
        heading: 'Assignees, due dates & time estimates',
        level: 2,
        content: 'Assign one or more team members to a card. Set a due date to track deadlines — cards approaching their due date display a yellow warning, and overdue cards turn red. Time estimates let you forecast how long a task should take, and you can log actual time spent against it.',
        callout: { type: 'info', text: 'Due date warnings appear 24 hours before the deadline by default. You can adjust this per board in board settings.' },
      },
      {
        id: 'comments',
        heading: 'Card comments',
        level: 2,
        content: 'Use the comments section inside a card to discuss the task with your team or with shared clients. Comments support text formatting, mentions (type @ followed by a name), and file attachments. All comment activity is included in the card\'s activity log.',
      },
      {
        id: 'card-actions',
        heading: 'Moving, copying & archiving cards',
        level: 3,
        content: 'Drag a card to move it to another column on the same board. Use the card menu to move it to a different board, duplicate it, or archive it. Archived cards can be found in the board\'s archive view and restored at any time.',
      },
    ],
    faqs: [
      { q: 'Can I assign a card to someone outside my team?', a: 'Cards can only be assigned to workspace members. If a client has been invited to your workspace, they can be assigned tasks.' },
      { q: 'Is there a character limit on card descriptions?', a: 'Card descriptions support up to 10,000 characters with basic formatting.' },
    ],
    relatedLinks: [
      { title: 'Task file attachments', href: '/docs/tasks/files' },
      { title: 'Recurring tasks', href: '/docs/tasks/recurring' },
      { title: 'Client-tagged tasks', href: '/docs/tasks/client-tags' },
    ],
  },

  'tasks/columns': {
    slug: 'tasks/columns',
    title: 'Custom Columns & Drag-Drop Ordering',
    metaTitle: 'Custom Columns & Drag-Drop Ordering — Clienter Docs',
    metaDescription: 'Customize your Kanban workflow in Clienter with custom columns, drag-and-drop reordering, column limits, and done-column auto-archiving.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Columns', href: '/docs/tasks/columns' },
    ],
    sections: [
      {
        id: 'default-columns',
        heading: 'Default columns',
        level: 2,
        content: 'New boards created from the Default Kanban template start with three columns: To Do, In Progress, and Done. These columns can be renamed, reordered, or deleted to match your workflow.',
      },
      {
        id: 'add-rename',
        heading: 'Adding and renaming columns',
        level: 2,
        content: 'Click the "+ Add Column" button at the right edge of your board to add a new column. To rename a column, click directly on its title and type the new name. Press Enter or click away to save.',
        steps: [
          'Click "+ Add Column" on the right side of the board.',
          'Type a column name (e.g. "In Review", "Blocked", "QA").',
          'Press Enter to create the column.',
        ],
      },
      {
        id: 'reorder',
        heading: 'Drag-and-drop reordering',
        level: 2,
        content: 'Grab a column by its header and drag it horizontally to reposition it on the board. Cards within a column can also be dragged vertically to change their order, or dragged into a different column to update their status. All reordering syncs in real time for every team member viewing the board.',
        callout: { type: 'tip', text: 'Hold Shift while dragging a card to see a placement preview in the destination column before releasing.' },
      },
      {
        id: 'column-limits',
        heading: 'Work-in-progress limits',
        level: 3,
        content: 'You can set a maximum number of cards allowed in a column. When the limit is reached, the column header displays a warning and the column is highlighted. This is a soft limit — you can still drag cards in, but the visual cue helps your team avoid overloading any stage.',
      },
      {
        id: 'done-column',
        heading: 'Done column auto-archive',
        level: 3,
        content: 'Mark any column as a "Done" column in the column settings. Cards moved into a done column are automatically archived after a configurable number of days (default: 14). This keeps your board clean without manual housekeeping.',
      },
    ],
    faqs: [
      { q: 'Is there a limit on the number of columns?', a: 'You can add up to 20 columns per board.' },
      { q: 'What happens to cards when I delete a column?', a: 'You will be prompted to move existing cards to another column or archive them before the column is removed.' },
    ],
    relatedLinks: [
      { title: 'Task Boards overview', href: '/docs/tasks' },
      { title: 'Task cards', href: '/docs/tasks/cards' },
    ],
  },

  'tasks/sharing': {
    slug: 'tasks/sharing',
    title: 'Sharing Boards with Clients',
    metaTitle: 'Share Task Boards with Clients — Clienter Docs',
    metaDescription: 'Share Clienter task boards with your clients for real-time project visibility. Control whether clients can view, comment, or edit cards on shared boards.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Sharing', href: '/docs/tasks/sharing' },
    ],
    sections: [
      {
        id: 'why-share',
        heading: 'Why share boards with clients?',
        level: 2,
        content: 'Sharing a task board gives your clients real-time visibility into project progress without needing status-update calls or email threads. Clients see exactly which tasks are done, which are in progress, and what is coming up — all in a clean interface they can access through the Client Portal at app.clienter.co.in.',
      },
      {
        id: 'access-levels',
        heading: 'Access levels: View, Comment, Edit',
        level: 2,
        content: 'When you share a board, you choose what the client can do. "View" allows the client to see the board and card details but not interact. "Comment" lets them add comments on cards to provide feedback. "Edit" gives them full ability to move cards, update fields, and add new cards — useful when clients manage their own request queues.',
        callout: { type: 'info', text: 'Clients never see internal-only cards. Mark any card as "Internal" to hide it from shared views.' },
      },
      {
        id: 'how-to-share',
        heading: 'How to share a board',
        level: 2,
        content: 'Open the board you want to share and click the "Share" button in the top-right corner. Search for the client by name or email, choose an access level, and click "Send Invite". The client will receive an email notification with a link to view the board in their portal.',
        steps: [
          'Open the board and click "Share" in the top-right corner.',
          'Search for the client or enter their email address.',
          'Select an access level: View, Comment, or Edit.',
          'Click "Send Invite".',
          'The client receives an email with a direct link to the shared board.',
        ],
      },
      {
        id: 'revoke-access',
        heading: 'Revoking or changing access',
        level: 2,
        content: 'Open the Share dialog to see everyone who has access to the board. Click the access level dropdown next to a client\'s name to change their permissions, or click the "Remove" button to revoke access entirely. Changes take effect immediately.',
      },
    ],
    faqs: [
      { q: 'Can I share individual cards instead of a whole board?', a: 'Not currently. Sharing works at the board level. Use the "Internal" flag to hide specific cards from clients.' },
      { q: 'Will the client need a Clienter account?', a: 'Yes. If the client does not have an account, they will be prompted to create a free Client Portal account when they accept the invite.' },
    ],
    relatedLinks: [
      { title: 'Client portal messaging', href: '/docs/messaging/portal-chat' },
      { title: 'Task Boards overview', href: '/docs/tasks' },
    ],
  },

  'tasks/recurring': {
    slug: 'tasks/recurring',
    title: 'Recurring Tasks',
    metaTitle: 'Recurring Tasks — Daily, Weekly & Monthly — Clienter Docs',
    metaDescription: 'Automate repeating work with Clienter recurring tasks. Set daily, weekly, or monthly recurrence with work-ahead mode to pre-create future cards.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Recurring', href: '/docs/tasks/recurring' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What are recurring tasks?',
        level: 2,
        content: 'Recurring tasks automatically create new cards on a schedule you define. Use them for repeating deliverables like weekly social media posts, monthly reports, or daily standups. When a recurrence triggers, a new card is created in the column you specify with the same title, description, labels, assignee, and time estimate as the original.',
      },
      {
        id: 'setup',
        heading: 'Setting up a recurring task',
        level: 2,
        content: 'Open any task card and click the "Recurrence" option in the card menu. Choose a frequency (daily, weekly, or monthly), set the start date, and pick which column the new card should land in.',
        steps: [
          'Open a task card.',
          'Click the "Recurrence" icon or menu option.',
          'Select a frequency: Daily, Weekly (pick days), or Monthly (pick date).',
          'Choose the target column for new cards.',
          'Click "Save Recurrence".',
        ],
        callout: { type: 'tip', text: 'For weekly tasks, you can select multiple days of the week — e.g. every Monday and Thursday.' },
      },
      {
        id: 'work-ahead',
        heading: 'Work-ahead mode',
        level: 2,
        content: 'Work-ahead mode pre-creates the next N occurrences of a recurring task so your team can start on future deliverables before the official due date. Enable it from the recurrence settings and choose how many cards to generate ahead (1 to 4 future occurrences). Pre-created cards are marked with a "Scheduled" badge and their due dates are set automatically.',
        callout: { type: 'info', text: 'Work-ahead cards count toward your board\'s card limits. Plan your column capacity accordingly.' },
      },
      {
        id: 'managing',
        heading: 'Editing and stopping recurrence',
        level: 2,
        content: 'To change the frequency or stop a recurring task, open the original card (marked with a recurrence icon) and edit or remove the recurrence settings. Cards that were already created by the recurrence remain on the board and are not deleted. You can also pause a recurrence temporarily without deleting it.',
      },
    ],
    faqs: [
      { q: 'Can I set a recurring task to end after a certain number of occurrences?', a: 'Yes. In the recurrence settings, choose "End after" and enter the number of occurrences, or select "End by date" to set a final date.' },
      { q: 'What happens if I delete the original recurring card?', a: 'The recurrence stops and no new cards are created. Existing cards generated by the recurrence stay on the board.' },
    ],
    relatedLinks: [
      { title: 'Task cards', href: '/docs/tasks/cards' },
      { title: 'Client-tagged tasks', href: '/docs/tasks/client-tags' },
    ],
  },

  'tasks/files': {
    slug: 'tasks/files',
    title: 'Task File Attachments',
    metaTitle: 'Task File Attachments — Clienter Docs',
    metaDescription: 'Attach files to task cards in Clienter. Upload design files, documents, images, and more directly to tasks so everything your team needs is in one place.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Files', href: '/docs/tasks/files' },
    ],
    sections: [
      {
        id: 'attaching-files',
        heading: 'Attaching files to a task',
        level: 2,
        content: 'Open a task card and click the "Attach" button, or drag and drop files directly onto the card. You can attach images, PDFs, documents, spreadsheets, and other common file types. Attachments appear in the card\'s file section and are accessible to anyone who can view the card.',
        steps: [
          'Open a task card.',
          'Click the "Attach" button or drag files onto the card.',
          'Wait for the upload to complete.',
          'Files appear in the Attachments section of the card.',
        ],
      },
      {
        id: 'limits',
        heading: 'File size and storage limits',
        level: 2,
        content: 'Individual files can be up to 25 MB each. Storage limits depend on your plan: Free plans include 500 MB total, Pro plans include 5 GB, and Ultra plans include 25 GB. You can see your current storage usage in Settings > Billing.',
        callout: { type: 'info', text: 'Need to share larger files? Paste a link from Google Drive, Dropbox, or any cloud storage service in the card description or comments.' },
      },
      {
        id: 'previews',
        heading: 'File previews and downloads',
        level: 2,
        content: 'Image files (PNG, JPG, GIF, WebP) display inline previews on the card. PDFs open in a built-in viewer. Other file types can be downloaded by clicking the file name. Clients with access to a shared board can also view and download attachments.',
      },
      {
        id: 'managing-attachments',
        heading: 'Removing and replacing files',
        level: 3,
        content: 'Hover over an attachment and click the trash icon to remove it. To replace a file, remove the old one and upload the new version. File deletions are logged in the card\'s activity feed.',
        callout: { type: 'warning', text: 'Removing a file attachment is permanent and cannot be undone.' },
      },
    ],
    faqs: [
      { q: 'Can clients upload files to shared boards?', a: 'Clients with "Edit" access can upload attachments. Clients with "View" or "Comment" access can only download existing files.' },
    ],
    relatedLinks: [
      { title: 'File sharing in chat', href: '/docs/messaging/attachments' },
      { title: 'Task cards', href: '/docs/tasks/cards' },
    ],
    planBadge: 'Free',
  },

  'tasks/client-tags': {
    slug: 'tasks/client-tags',
    title: 'Client-Tagged Tasks & "By Client" Grouping',
    metaTitle: 'Client-Tagged Tasks — Clienter Docs',
    metaDescription: 'Tag tasks to clients in Clienter and use the "By Client" grouping view to see your entire workload organized by account. Perfect for multi-client agencies.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Tasks', href: '/docs/tasks' },
      { label: 'Client Tags', href: '/docs/tasks/client-tags' },
    ],
    sections: [
      {
        id: 'what-are-client-tags',
        heading: 'What are client tags?',
        level: 2,
        content: 'Client tags link a task card to a specific client in your Clienter CRM. This creates a two-way connection: you can see all tasks for a client from their profile, and you can group your entire task view by client across all boards.',
      },
      {
        id: 'tagging-tasks',
        heading: 'Tagging a task to a client',
        level: 2,
        content: 'Open a task card and click the "Client" field. Search for and select the client from your contacts. The client\'s name appears as a tag on the card face. Each card can be tagged to one client.',
        steps: [
          'Open a task card.',
          'Click the "Client" field in the card details.',
          'Search for the client by name or company.',
          'Select the client to tag the card.',
        ],
      },
      {
        id: 'by-client-view',
        heading: 'Using the "By Client" grouping view',
        level: 2,
        content: 'From the Tasks section, click the "Group By" dropdown and select "Client". Your tasks are reorganized into sections, one per client, showing every card tagged to that client regardless of which board it lives on. This is an excellent way to prepare for client meetings or review workload distribution.',
        callout: { type: 'tip', text: 'Combine "By Client" grouping with a priority sort to see each client\'s most urgent tasks first.' },
      },
      {
        id: 'client-profile-tasks',
        heading: 'Viewing tasks from a client profile',
        level: 3,
        content: 'Navigate to a client\'s profile in the CRM and open the "Tasks" tab. You will see every task card tagged to that client, with status, board name, and due date. Click any task to open the full card.',
      },
    ],
    faqs: [
      { q: 'Can I tag a task to multiple clients?', a: 'Each task can be tagged to one client. If work spans multiple clients, create separate cards for each.' },
      { q: 'What happens to client-tagged tasks if I delete a client?', a: 'The tasks remain but the client tag is removed. The cards themselves are never deleted when a client is removed.' },
    ],
    relatedLinks: [
      { title: 'Task Boards overview', href: '/docs/tasks' },
      { title: 'Meetings linked to leads', href: '/docs/meetings/lead-meetings' },
    ],
  },

  // ─── MEETINGS ────────────────────────────────────────────────────────

  'meetings': {
    slug: 'meetings',
    title: 'Meetings & Calendar',
    metaTitle: 'Meetings & Calendar — Clienter Docs',
    metaDescription: 'Schedule and manage client meetings in Clienter. View your calendar, link meetings to leads, integrate with Google Calendar, and set automated reminders.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Meetings', href: '/docs/meetings' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Meetings in Clienter',
        level: 2,
        content: 'The Meetings module in Clienter gives you a dedicated calendar to schedule and track every client interaction. Create meetings with a title, date, time, attendees, and notes. Meetings can be linked to leads in your CRM so your sales pipeline stays connected to your calendar.',
      },
      {
        id: 'calendar-view',
        heading: 'Calendar view',
        level: 2,
        content: 'View your meetings in a monthly, weekly, or daily calendar layout. Click any meeting on the calendar to see details, edit the event, or add notes. The calendar supports drag-and-drop rescheduling — grab a meeting and move it to a new time slot.',
        callout: { type: 'tip', text: 'Switch to the "Agenda" view for a simple chronological list of upcoming meetings.' },
      },
      {
        id: 'quick-actions',
        heading: 'Quick actions',
        level: 2,
        content: 'From the calendar view, click any empty time slot to quickly create a new meeting. Right-click a meeting for options including reschedule, cancel, add notes, and copy meeting link. Cancelled meetings are struck through on the calendar and excluded from reminder notifications.',
      },
      {
        id: 'meeting-notes',
        heading: 'Meeting notes',
        level: 2,
        content: 'Each meeting has a notes field where you can capture agendas, discussion points, and action items. Notes are saved automatically and can be viewed later from the meeting detail or the linked lead\'s profile. Notes support basic text formatting.',
      },
    ],
    faqs: [
      { q: 'Can I see my team members\' meetings?', a: 'Yes. Use the team calendar view to overlay your schedule with your team. Each member\'s meetings are shown in a different color.' },
    ],
    relatedLinks: [
      { title: 'Creating & managing meetings', href: '/docs/meetings/scheduling' },
      { title: 'Google Calendar integration', href: '/docs/meetings/google-calendar' },
      { title: 'Meeting reminders', href: '/docs/meetings/reminders' },
      { title: 'Meetings linked to leads', href: '/docs/meetings/lead-meetings' },
    ],
  },

  'meetings/scheduling': {
    slug: 'meetings/scheduling',
    title: 'Creating & Managing Meetings',
    metaTitle: 'Creating & Managing Meetings — Clienter Docs',
    metaDescription: 'Learn how to create, edit, reschedule, and cancel meetings in Clienter. Add attendees, set video call links, and attach meeting agendas.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Meetings', href: '/docs/meetings' },
      { label: 'Scheduling', href: '/docs/meetings/scheduling' },
    ],
    sections: [
      {
        id: 'create-meeting',
        heading: 'Creating a meeting',
        level: 2,
        content: 'Click the "+ New Meeting" button in the Meetings section or click an empty slot on the calendar. Fill in the title, date, start and end time, and add attendees from your contacts or team members.',
        steps: [
          'Navigate to Meetings in the sidebar.',
          'Click "+ New Meeting" or click an empty calendar slot.',
          'Enter the meeting title and description.',
          'Set the date, start time, and end time.',
          'Add attendees by searching contacts or team members.',
          'Optionally add a video call link or meeting location.',
          'Click "Create Meeting".',
        ],
      },
      {
        id: 'editing',
        heading: 'Editing and rescheduling',
        level: 2,
        content: 'Click any meeting on the calendar to open its detail view. Edit any field and click "Save". To reschedule, either update the date and time fields directly or drag the meeting to a new slot on the calendar. Attendees are notified of changes automatically if notifications are enabled.',
      },
      {
        id: 'cancel',
        heading: 'Cancelling a meeting',
        level: 2,
        content: 'Open the meeting detail and click "Cancel Meeting". You can optionally send a cancellation notification to attendees. Cancelled meetings remain on the calendar with a strikethrough but are excluded from reminders and upcoming-meeting lists.',
        callout: { type: 'info', text: 'Cancelling a meeting in Clienter does not automatically cancel it on Google Calendar. If the meeting is synced, cancel it in Google Calendar separately or let the sync handle it based on your sync settings.' },
      },
      {
        id: 'video-links',
        heading: 'Adding video call links',
        level: 2,
        content: 'Paste a Google Meet, Zoom, or Microsoft Teams link into the "Video Call" field when creating or editing a meeting. The link appears as a clickable button in the meeting detail, making it easy for attendees to join. With the Google Calendar integration on Pro or Ultra, Google Meet links can be generated automatically.',
      },
    ],
    relatedLinks: [
      { title: 'Google Calendar integration', href: '/docs/meetings/google-calendar' },
      { title: 'Meeting reminders', href: '/docs/meetings/reminders' },
    ],
  },

  'meetings/google-calendar': {
    slug: 'meetings/google-calendar',
    title: 'Google Calendar + Meet Integration',
    metaTitle: 'Google Calendar & Meet Integration — Clienter Docs',
    metaDescription: 'Sync your Clienter meetings with Google Calendar and auto-generate Google Meet links. Available on Pro and Ultra plans.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Meetings', href: '/docs/meetings' },
      { label: 'Google Calendar', href: '/docs/meetings/google-calendar' },
    ],
    planBadge: 'Pro',
    sections: [
      {
        id: 'overview',
        heading: 'What the integration does',
        level: 2,
        content: 'The Google Calendar integration syncs meetings between Clienter and your Google Calendar in both directions. Meetings you create in Clienter appear on your Google Calendar, and events from Google Calendar are shown in your Clienter calendar. Google Meet links can be generated automatically when you create a meeting in Clienter.',
        callout: { type: 'info', text: 'This integration is available on Pro and Ultra plans. Free plan users can still manually paste Google Meet links into meetings.' },
      },
      {
        id: 'setup',
        heading: 'Connecting your Google account',
        level: 2,
        content: 'Go to Settings > Integrations > Google Calendar and click "Connect Google Account". You will be redirected to Google to authorize Clienter. Grant the requested permissions and you will be redirected back to Clienter with the integration active.',
        steps: [
          'Navigate to Settings > Integrations.',
          'Find Google Calendar and click "Connect".',
          'Sign in to your Google account and authorize Clienter.',
          'Choose which Google calendars to sync.',
          'Click "Save" to activate the integration.',
        ],
      },
      {
        id: 'sync-settings',
        heading: 'Sync direction and conflict handling',
        level: 2,
        content: 'You can choose one-way sync (Clienter to Google only, or Google to Clienter only) or two-way sync. In two-way mode, if the same meeting is edited in both places, the most recent edit wins. Sync runs every few minutes and can also be triggered manually from the calendar toolbar.',
        planBadge: 'Pro',
      },
      {
        id: 'meet-links',
        heading: 'Auto-generating Google Meet links',
        level: 2,
        content: 'Enable "Auto-generate Meet link" in your Google Calendar integration settings. When turned on, every new meeting created in Clienter that includes at least one attendee will automatically have a Google Meet link attached. Attendees see the link in their calendar invite and in the Clienter meeting detail.',
        planBadge: 'Pro',
      },
      {
        id: 'disconnect',
        heading: 'Disconnecting the integration',
        level: 3,
        content: 'Go to Settings > Integrations > Google Calendar and click "Disconnect". Existing meetings remain in both Clienter and Google Calendar but will no longer sync. You can reconnect at any time.',
      },
    ],
    faqs: [
      { q: 'Does the integration work with Google Workspace (G Suite) accounts?', a: 'Yes. Both personal Gmail and Google Workspace accounts are supported.' },
      { q: 'Will deleting a meeting in Google Calendar also delete it in Clienter?', a: 'With two-way sync enabled, yes. The deletion syncs to Clienter within a few minutes.' },
    ],
    relatedLinks: [
      { title: 'Creating & managing meetings', href: '/docs/meetings/scheduling' },
      { title: 'Meeting reminders', href: '/docs/meetings/reminders' },
    ],
  },

  'meetings/reminders': {
    slug: 'meetings/reminders',
    title: 'Meeting Reminders & Notifications',
    metaTitle: 'Meeting Reminders & Notifications — Clienter Docs',
    metaDescription: 'Set up automated meeting reminders in Clienter. Get notified via push notification, email, or both before your meetings start.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Meetings', href: '/docs/meetings' },
      { label: 'Reminders', href: '/docs/meetings/reminders' },
    ],
    sections: [
      {
        id: 'default-reminders',
        heading: 'Default reminders',
        level: 2,
        content: 'Clienter sends a reminder notification 30 minutes before every meeting by default. This applies to all meetings you create or are added to as an attendee. Default reminders are delivered as in-app notifications.',
      },
      {
        id: 'custom-reminders',
        heading: 'Customizing reminder timing',
        level: 2,
        content: 'You can change the default reminder timing in Settings > Notifications > Meetings. Choose from 5 minutes, 15 minutes, 30 minutes, 1 hour, or 1 day before. You can also set multiple reminders (e.g. 1 day before and 30 minutes before) to ensure you never miss a meeting.',
        steps: [
          'Go to Settings > Notifications > Meetings.',
          'Click "Add Reminder" or edit the existing one.',
          'Select the timing (e.g. 15 minutes before).',
          'Choose the delivery channel: in-app, email, or both.',
          'Click "Save".',
        ],
      },
      {
        id: 'channels',
        heading: 'Notification channels',
        level: 2,
        content: 'Meeting reminders can be delivered via in-app push notifications, email, or both. If you are offline when a push notification is sent, Clienter will fall back to email delivery to make sure you receive the reminder. Configure your preferred channels in notification settings.',
        callout: { type: 'tip', text: 'Enable both push and email notifications for important client meetings to ensure you never miss them, even if you are away from the app.' },
      },
      {
        id: 'per-meeting',
        heading: 'Per-meeting reminder overrides',
        level: 3,
        content: 'Override the default reminder for a specific meeting by opening the meeting detail and setting a custom reminder in the "Reminder" field. This only affects the selected meeting and does not change your global settings.',
      },
    ],
    faqs: [
      { q: 'Do attendees also receive reminders?', a: 'Team members who are attendees receive reminders based on their own notification settings. External attendees (clients) receive email reminders if they have email notifications enabled in their portal.' },
    ],
    relatedLinks: [
      { title: 'Notification settings', href: '/docs/messaging/notifications' },
      { title: 'Creating & managing meetings', href: '/docs/meetings/scheduling' },
    ],
  },

  'meetings/lead-meetings': {
    slug: 'meetings/lead-meetings',
    title: 'Meetings Linked to Leads',
    metaTitle: 'Meetings Linked to Leads — Clienter Docs',
    metaDescription: 'Link Clienter meetings to leads in your CRM to keep your sales pipeline and calendar connected. View all meetings from a lead\'s profile.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Meetings', href: '/docs/meetings' },
      { label: 'Lead Meetings', href: '/docs/meetings/lead-meetings' },
    ],
    sections: [
      {
        id: 'why-link',
        heading: 'Why link meetings to leads?',
        level: 2,
        content: 'Linking a meeting to a lead creates a timeline of interactions in the lead\'s CRM profile. You can see when you last met, what was discussed (via meeting notes), and when the next meeting is — all without leaving the CRM. This context helps you move leads through your sales pipeline more effectively.',
      },
      {
        id: 'linking',
        heading: 'How to link a meeting to a lead',
        level: 2,
        content: 'When creating or editing a meeting, use the "Link to Lead" field to search for and select a lead from your CRM. The meeting then appears in the lead\'s activity timeline alongside emails, notes, and status changes.',
        steps: [
          'Create or edit a meeting.',
          'Click the "Link to Lead" field.',
          'Search for the lead by name, email, or company.',
          'Select the lead.',
          'Save the meeting.',
        ],
      },
      {
        id: 'lead-profile',
        heading: 'Viewing meetings from a lead profile',
        level: 2,
        content: 'Open a lead\'s profile in the CRM and navigate to the "Meetings" tab or scroll to the activity timeline. All linked meetings appear chronologically with their status (upcoming, completed, cancelled), title, and notes. Click any meeting to open its full detail.',
        callout: { type: 'tip', text: 'Use meeting notes to record action items during client calls. They become a searchable history on the lead\'s profile.' },
      },
      {
        id: 'unlinking',
        heading: 'Unlinking a meeting',
        level: 3,
        content: 'To unlink a meeting from a lead, open the meeting detail, click the linked lead\'s name, and select "Remove Link". The meeting remains on your calendar but is no longer associated with the lead\'s profile.',
      },
    ],
    faqs: [
      { q: 'Can I link one meeting to multiple leads?', a: 'Currently, each meeting can be linked to one lead. If a meeting involves multiple leads, link it to the primary lead and mention the others in the meeting notes.' },
      { q: 'Does linking a meeting to a lead automatically add them as an attendee?', a: 'No. Linking and attendees are independent. You can link a meeting to a lead for CRM tracking without inviting them.' },
    ],
    relatedLinks: [
      { title: 'Meetings & Calendar overview', href: '/docs/meetings' },
      { title: 'Client-tagged tasks', href: '/docs/tasks/client-tags' },
    ],
  },

  // ─── MESSAGING ───────────────────────────────────────────────────────

  'messaging': {
    slug: 'messaging',
    title: 'Messaging & Chat',
    metaTitle: 'Messaging & Chat — Clienter Docs',
    metaDescription: 'Communicate with your team and clients using Clienter\'s built-in messaging. Real-time chat with typing indicators, file sharing, and client portal access.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Messaging', href: '/docs/messaging' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Messaging in Clienter',
        level: 2,
        content: 'Clienter includes a built-in messaging system for real-time communication with your team and clients. Send direct messages, create group chats for projects, share files, and keep conversations connected to your workflow — no need to switch between a separate chat app and your project management tool.',
      },
      {
        id: 'key-features',
        heading: 'Key features',
        level: 2,
        content: 'Messaging in Clienter includes real-time message delivery, typing indicators, read receipts, file attachments, group conversations, direct messages, and client portal access. Offline users receive push notification and email fallback so no message is missed.',
      },
      {
        id: 'getting-started',
        heading: 'Getting started',
        level: 2,
        content: 'Open the Messaging section from the left sidebar. Your conversations appear on the left and the active chat on the right. Click "+ New Chat" to start a direct message or create a group conversation.',
        steps: [
          'Click "Messaging" in the sidebar.',
          'Click "+ New Chat".',
          'Select "Direct Message" or "Group Chat".',
          'Add participants from your team or client contacts.',
          'Type your message and press Enter to send.',
        ],
      },
      {
        id: 'search',
        heading: 'Searching messages',
        level: 2,
        content: 'Use the search bar at the top of the Messaging section to find messages by keyword, sender, or date range. Search results highlight matching text and link directly to the message in its conversation.',
        callout: { type: 'tip', text: 'Type "from:name" in search to find messages from a specific person across all conversations.' },
      },
    ],
    relatedLinks: [
      { title: 'Group chats & DMs', href: '/docs/messaging/conversations' },
      { title: 'Real-time messaging', href: '/docs/messaging/realtime' },
      { title: 'File sharing in chat', href: '/docs/messaging/attachments' },
      { title: 'Client portal messaging', href: '/docs/messaging/portal-chat' },
      { title: 'Notifications', href: '/docs/messaging/notifications' },
    ],
  },

  'messaging/conversations': {
    slug: 'messaging/conversations',
    title: 'Group Chats & DMs',
    metaTitle: 'Group Chats & Direct Messages — Clienter Docs',
    metaDescription: 'Create group conversations for project teams and direct messages for one-on-one communication in Clienter. Manage participants and conversation settings.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Messaging', href: '/docs/messaging' },
      { label: 'Conversations', href: '/docs/messaging/conversations' },
    ],
    sections: [
      {
        id: 'direct-messages',
        heading: 'Direct messages',
        level: 2,
        content: 'Direct messages (DMs) are private, one-on-one conversations between you and another person — either a team member or a client. Click "+ New Chat" and select a single person to start a DM. Your DM history is preserved indefinitely and can be searched at any time.',
      },
      {
        id: 'group-chats',
        heading: 'Creating a group chat',
        level: 2,
        content: 'Group chats let you communicate with multiple people in a single conversation. Use them for project teams, departments, or any group of collaborators.',
        steps: [
          'Click "+ New Chat" in the Messaging section.',
          'Select "Group Chat".',
          'Give the group a name (e.g. "Acme Corp — Website Project").',
          'Add participants by searching for team members or clients.',
          'Click "Create Group".',
        ],
      },
      {
        id: 'managing-groups',
        heading: 'Managing group participants',
        level: 2,
        content: 'Open a group chat and click the group name or info icon at the top to manage participants. You can add new members, remove existing ones, or change the group name and avatar. Only the group creator and workspace admins can remove participants.',
        callout: { type: 'info', text: 'When a new member is added to a group, they can see the full message history from before they joined.' },
      },
      {
        id: 'muting',
        heading: 'Muting and leaving conversations',
        level: 3,
        content: 'Mute a conversation to stop receiving notifications for it without leaving. Open the conversation menu and select "Mute" — you can choose to mute for 1 hour, 8 hours, 1 day, or until you unmute. To leave a group chat, select "Leave Group" from the same menu.',
      },
    ],
    faqs: [
      { q: 'Is there a limit on group chat participants?', a: 'Group chats can include up to 50 participants.' },
      { q: 'Can I convert a DM into a group chat?', a: 'Not directly. Create a new group chat and add both the existing DM participant and the additional people.' },
    ],
    relatedLinks: [
      { title: 'Real-time messaging', href: '/docs/messaging/realtime' },
      { title: 'Client portal messaging', href: '/docs/messaging/portal-chat' },
    ],
  },

  'messaging/realtime': {
    slug: 'messaging/realtime',
    title: 'Real-Time Messaging',
    metaTitle: 'Real-Time Messaging — Typing Indicators & Read Receipts — Clienter Docs',
    metaDescription: 'Experience real-time communication in Clienter with instant message delivery, typing indicators, read receipts, and online presence.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Messaging', href: '/docs/messaging' },
      { label: 'Real-Time', href: '/docs/messaging/realtime' },
    ],
    sections: [
      {
        id: 'instant-delivery',
        heading: 'Instant message delivery',
        level: 2,
        content: 'Messages in Clienter are delivered in real time using a persistent WebSocket connection. When you send a message, it appears in the recipient\'s chat window instantly without any page refresh. If the connection is momentarily lost, messages queue locally and send automatically when the connection restores.',
      },
      {
        id: 'typing-indicators',
        heading: 'Typing indicators',
        level: 2,
        content: 'When someone is typing a message in a conversation you are viewing, you will see a subtle "typing..." indicator below the message input. In group chats, the indicator shows who is typing (e.g. "Sarah is typing..."). Typing indicators disappear after a few seconds of inactivity.',
      },
      {
        id: 'read-receipts',
        heading: 'Read receipts',
        level: 2,
        content: 'Messages show delivery and read status with small indicators. A single checkmark means the message was delivered to the server. A double checkmark means the recipient has opened the conversation and seen the message. In group chats, read receipts show how many participants have seen the message.',
        callout: { type: 'info', text: 'You can disable read receipts for your account in Settings > Privacy. When disabled, others will not see when you have read their messages, and you will not see their read status either.' },
      },
      {
        id: 'online-presence',
        heading: 'Online presence',
        level: 2,
        content: 'A green dot next to a user\'s avatar indicates they are currently online in Clienter. An orange dot means they were recently active (within the last 15 minutes). No dot means they are offline. Presence status updates in real time across the messaging interface.',
      },
    ],
    relatedLinks: [
      { title: 'Messaging overview', href: '/docs/messaging' },
      { title: 'Notifications', href: '/docs/messaging/notifications' },
    ],
  },

  'messaging/attachments': {
    slug: 'messaging/attachments',
    title: 'File Sharing in Chat',
    metaTitle: 'File Sharing in Chat — Clienter Docs',
    metaDescription: 'Share files, images, and documents directly in Clienter chat conversations. Preview images inline and download attachments from any conversation.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Messaging', href: '/docs/messaging' },
      { label: 'Attachments', href: '/docs/messaging/attachments' },
    ],
    sections: [
      {
        id: 'sharing-files',
        heading: 'Sharing files in a conversation',
        level: 2,
        content: 'Click the attachment (paperclip) icon in the message input bar, or drag and drop files directly into the chat window. You can attach a message along with the file. Multiple files can be sent at once.',
        steps: [
          'Open a conversation.',
          'Click the paperclip icon or drag files into the chat.',
          'Select one or more files from your device.',
          'Optionally type a message to accompany the files.',
          'Press Enter or click Send.',
        ],
      },
      {
        id: 'supported-types',
        heading: 'Supported file types and limits',
        level: 2,
        content: 'You can share images (PNG, JPG, GIF, WebP, SVG), documents (PDF, DOCX, XLSX, PPTX), archives (ZIP, RAR), and other common file types. The maximum file size per attachment is 25 MB. Storage used by chat attachments counts toward your workspace storage quota.',
        callout: { type: 'warning', text: 'Executable files (.exe, .bat, .sh) are blocked for security reasons.' },
      },
      {
        id: 'previews',
        heading: 'Inline previews',
        level: 2,
        content: 'Images display as inline previews in the chat. Click an image to view it full-screen with zoom controls. PDFs show a thumbnail preview with a "View" button to open the built-in PDF reader. Other file types show a file icon with the name and size.',
      },
      {
        id: 'managing',
        heading: 'Downloading and managing attachments',
        level: 3,
        content: 'Click the download icon on any attachment to save it to your device. To find all files shared in a conversation, click the info icon at the top of the chat and open the "Files" tab. This gives you a chronological list of every attachment in that conversation.',
      },
    ],
    relatedLinks: [
      { title: 'Task file attachments', href: '/docs/tasks/files' },
      { title: 'Messaging overview', href: '/docs/messaging' },
    ],
  },

  'messaging/portal-chat': {
    slug: 'messaging/portal-chat',
    title: 'Client Portal Messaging',
    metaTitle: 'Client Portal Messaging — Clienter Docs',
    metaDescription: 'Let clients message you directly from the Clienter Client Portal. Conversations sync with your messaging inbox for seamless communication.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Messaging', href: '/docs/messaging' },
      { label: 'Portal Chat', href: '/docs/messaging/portal-chat' },
    ],
    sections: [
      {
        id: 'what-is-portal-chat',
        heading: 'What is Client Portal messaging?',
        level: 2,
        content: 'Client Portal messaging allows your clients to send you messages directly from their portal at app.clienter.co.in. These conversations appear in your Messaging inbox alongside team chats, so you manage all communication from one place. Clients see only their conversations with you — they cannot see your internal team chats.',
      },
      {
        id: 'how-it-works',
        heading: 'How it works',
        level: 2,
        content: 'When a client logs into their portal, they see a "Messages" section with their existing conversations and a button to start a new one. Messages sent from the portal are delivered to your Clienter inbox in real time. You reply from your inbox and the client sees your response in their portal.',
        callout: { type: 'tip', text: 'Client portal conversations are labeled with a "Portal" badge in your inbox so you can easily distinguish them from internal team chats.' },
      },
      {
        id: 'enabling',
        heading: 'Enabling portal messaging for a client',
        level: 2,
        content: 'Portal messaging is enabled by default for all clients who have portal access. To restrict messaging for a specific client, go to their profile in the CRM, open the "Portal Access" tab, and toggle "Allow Messaging" off.',
        steps: [
          'Open the client\'s profile in the CRM.',
          'Navigate to the "Portal Access" tab.',
          'Toggle "Allow Messaging" on or off.',
          'Click "Save".',
        ],
      },
      {
        id: 'notifications',
        heading: 'Notifications for portal messages',
        level: 3,
        content: 'You receive the same notifications for portal messages as for any other chat message — in-app push and email fallback for offline users. Clients receive email notifications when you reply if they are not actively viewing the portal.',
      },
    ],
    faqs: [
      { q: 'Can clients send files through portal messaging?', a: 'Yes. Clients can attach files up to 25 MB per message, following the same file type restrictions as regular chat.' },
      { q: 'Can I assign a portal conversation to a team member?', a: 'Not directly. Add the team member to the conversation as a participant so they can see and respond to the client.' },
    ],
    relatedLinks: [
      { title: 'Sharing boards with clients', href: '/docs/tasks/sharing' },
      { title: 'Messaging overview', href: '/docs/messaging' },
      { title: 'Notifications', href: '/docs/messaging/notifications' },
    ],
  },

  'messaging/notifications': {
    slug: 'messaging/notifications',
    title: 'Push & Email Notification Fallback',
    metaTitle: 'Chat Notifications — Push & Email Fallback — Clienter Docs',
    metaDescription: 'Never miss a message in Clienter. Get real-time push notifications when online and automatic email fallback when offline.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Messaging', href: '/docs/messaging' },
      { label: 'Notifications', href: '/docs/messaging/notifications' },
    ],
    sections: [
      {
        id: 'how-it-works',
        heading: 'How notifications work',
        level: 2,
        content: 'Clienter uses a two-tier notification system to ensure you never miss an important message. When you are online and have the app open (or have browser notifications enabled), you receive real-time push notifications. When you are offline or have been inactive for more than 5 minutes, Clienter sends an email notification to your registered email address as a fallback.',
      },
      {
        id: 'push-notifications',
        heading: 'Push notifications',
        level: 2,
        content: 'Push notifications appear in your browser or device notification center. They include the sender\'s name, a preview of the message, and a link that takes you directly to the conversation. To enable browser push notifications, click "Allow" when prompted by your browser, or enable them in Settings > Notifications.',
        callout: { type: 'info', text: 'Push notifications require browser notification permissions. If you dismissed the permission prompt, you can re-enable it in your browser\'s site settings for app.clienter.co.in.' },
      },
      {
        id: 'email-fallback',
        heading: 'Email fallback for offline users',
        level: 2,
        content: 'When you are offline and receive a message, Clienter waits 5 minutes and then sends an email digest to your registered email address. The email includes the sender, message preview, and a direct link to the conversation. If multiple messages arrive while you are offline, they are batched into a single email to avoid inbox clutter.',
      },
      {
        id: 'customizing',
        heading: 'Customizing notification preferences',
        level: 2,
        content: 'Fine-tune what triggers a notification and how it is delivered.',
        steps: [
          'Go to Settings > Notifications.',
          'Toggle push notifications on or off.',
          'Toggle email fallback on or off.',
          'Choose which events trigger notifications: all messages, only DMs, only mentions, or none.',
          'Set quiet hours to suppress notifications during specific times.',
          'Click "Save".',
        ],
        callout: { type: 'tip', text: 'Set quiet hours (e.g. 10 PM to 8 AM) to suppress notifications during non-working hours. Messages are still delivered and will be waiting when you return.' },
      },
      {
        id: 'per-conversation',
        heading: 'Per-conversation notification settings',
        level: 3,
        content: 'Mute specific conversations to stop receiving notifications for them without changing your global settings. Open the conversation menu and select "Mute". You can mute for a set duration or indefinitely. Muted conversations still show unread badges but do not trigger push or email notifications.',
      },
    ],
    faqs: [
      { q: 'Can I get SMS notifications instead of email?', a: 'SMS notifications are not currently supported. Email and push notifications are the available channels.' },
      { q: 'Do clients receive notifications for portal messages?', a: 'Yes. Clients receive email notifications when they have a new message and are not currently active in the portal.' },
      { q: 'How do I contact support if I am not receiving notifications?', a: 'Email support@clienter.co.in with your account email and a description of the issue. Include your browser and device information.' },
    ],
    relatedLinks: [
      { title: 'Meeting reminders', href: '/docs/meetings/reminders' },
      { title: 'Messaging overview', href: '/docs/messaging' },
      { title: 'Client portal messaging', href: '/docs/messaging/portal-chat' },
    ],
  },
}
