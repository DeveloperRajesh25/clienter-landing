import type { DocPage } from './types'

export const LEADS_DOCS: Record<string, DocPage> = {
  'leads': {
    slug: 'leads',
    title: 'Lead Management',
    metaTitle: 'Lead Management — Clienter Docs',
    metaDescription: 'Track every prospect from first contact to signed deal. Clienter gives you a visual pipeline, follow-up reminders, file attachments, and lead-source integrations so nothing slips through the cracks.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What is Lead Management?',
        level: 2,
        content: 'Lead management in Clienter is your single workspace for tracking every potential client from the moment they express interest until they sign a deal. Instead of juggling spreadsheets, sticky notes, and scattered WhatsApp chats, you get a visual Kanban pipeline, automatic follow-up reminders, file attachments, location tracking, and meeting scheduling — all in one place.',
        callout: { type: 'tip', text: 'New to Clienter? Start by adding your first five leads manually, then explore the pipeline view to drag them through your sales stages.' }
      },
      {
        id: 'key-features',
        heading: 'Key Features',
        level: 2,
        content: 'Clienter\'s lead management module is built for agencies and freelancers who need speed without complexity. Here is what you get out of the box:',
        steps: [
          'Visual Kanban pipeline with custom stages and drag-and-drop',
          'Follow-up reminders that notify you before a lead goes cold',
          'File attachments — proposals, briefs, contracts — pinned to each lead',
          'Location and GPS tagging for field sales teams',
          'Meeting scheduling directly from the lead card',
          'Star important leads so they always float to the top',
          'Group leads by assignee with the "By Person" view',
          'CSV/Excel import and export for bulk operations',
          'Lead source integrations with Meta Ads, IndiaMART, webhooks, and contact forms (Ultra plan)'
        ]
      },
      {
        id: 'navigating',
        heading: 'Navigating the Leads Module',
        level: 2,
        content: 'Open the Leads section from the left sidebar in the Clienter dashboard. You will see two primary views: the Pipeline view (Kanban board) and the List view (table). Toggle between them using the icons at the top-right of the leads page. Use the search bar and filters to narrow results by stage, assignee, source, or date range.'
      },
      {
        id: 'lead-card',
        heading: 'Anatomy of a Lead Card',
        level: 2,
        content: 'Every lead in Clienter is a card that stores the prospect\'s name, email, phone number, company, expected deal value, assigned team member, current pipeline stage, source, notes, files, location, and meeting history. Open any card to see a timeline of all interactions, follow-ups, and status changes.',
        callout: { type: 'info', text: 'Deal value is optional but highly recommended — it powers the revenue forecast visible at the top of your pipeline.' }
      },
      {
        id: 'plan-limits',
        heading: 'Lead Limits by Plan',
        level: 2,
        content: 'The Free plan supports up to 30 active leads, Pro supports up to 300, and Ultra gives you unlimited active leads. Archived or converted leads do not count toward your active limit. If you hit your cap, archive older leads or upgrade your plan to keep adding new ones.',
        callout: { type: 'info', text: 'Need more leads on Free? Convert or archive stale leads to free up slots before upgrading.' }
      }
    ],
    faqs: [
      { q: 'Can I use Clienter leads on mobile?', a: 'Yes. The Clienter mobile app gives you full access to your pipeline, lead cards, follow-ups, and file attachments on the go.' },
      { q: 'Is there a way to automatically capture leads?', a: 'On the Ultra plan you can connect Meta Ads, IndiaMART, a webhook endpoint, or your website contact form to push leads straight into your pipeline.' },
      { q: 'What happens to my leads if I downgrade?', a: 'Your existing leads are preserved, but you will not be able to add new ones until your active count falls within the lower plan\'s limit.' }
    ],
    relatedLinks: [
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Adding Leads', href: '/docs/leads/adding-leads' },
      { title: 'Follow-up Reminders', href: '/docs/leads/follow-ups' },
      { title: 'Lead Limits per Plan', href: '/docs/leads/limits' },
      { title: 'Converting Leads to Clients', href: '/docs/leads/converting' }
    ]
  },

  'leads/pipeline': {
    slug: 'leads/pipeline',
    title: 'Sales Pipeline',
    metaTitle: 'Sales Pipeline — Clienter Docs',
    metaDescription: 'Visualize your entire sales process with Clienter\'s Kanban pipeline. Create custom stages, drag-and-drop leads between columns, and track deal value at every step.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Sales Pipeline', href: '/docs/leads/pipeline' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'How the Pipeline Works',
        level: 2,
        content: 'The pipeline is a Kanban-style board where each column represents a stage in your sales process. Leads appear as cards that you drag from one stage to the next as conversations progress. A revenue bar at the top shows the total deal value in each stage so you can spot bottlenecks at a glance.'
      },
      {
        id: 'default-stages',
        heading: 'Default Stages',
        level: 2,
        content: 'Clienter ships with four default stages: New, Contacted, Proposal Sent, and Won. These cover the most common freelancer and agency workflow. You can rename, reorder, or delete any of them and add your own.',
        callout: { type: 'tip', text: 'Keep your pipeline between four and seven stages. Too many stages slow down your team; too few hide where leads actually are.' }
      },
      {
        id: 'custom-stages',
        heading: 'Creating Custom Stages',
        level: 2,
        content: 'Tailor the pipeline to match your unique sales process by adding custom stages.',
        steps: [
          'Open the Pipeline view from the Leads section.',
          'Click the "+ Add Stage" button at the far right of the board.',
          'Enter a stage name (e.g., "Discovery Call", "Negotiation").',
          'Drag the new column to reposition it in the flow.',
          'Click Save to apply the changes.'
        ]
      },
      {
        id: 'drag-drop',
        heading: 'Moving Leads Between Stages',
        level: 2,
        content: 'Click and hold any lead card, then drag it to the target column and release. The stage change is saved instantly and visible to all team members. On mobile, tap the lead card, then use the "Move to" menu to select a new stage.',
        callout: { type: 'info', text: 'Every stage change is logged in the lead\'s activity timeline so you can review the full history later.' }
      },
      {
        id: 'filters',
        heading: 'Filtering and Sorting',
        level: 2,
        content: 'Use the filter bar above the pipeline to narrow cards by assignee, lead source, date range, or deal value range. You can also sort within each column by newest first, oldest first, or highest value. Filters persist across sessions until you clear them.'
      },
      {
        id: 'revenue-forecast',
        heading: 'Revenue Forecast Bar',
        level: 2,
        content: 'At the top of the pipeline, Clienter displays the sum of deal values in each stage. This gives you a real-time snapshot of potential revenue without needing a separate report. Hover over any stage total to see the number of leads contributing to that figure.'
      }
    ],
    faqs: [
      { q: 'Can I have multiple pipelines?', a: 'Currently Clienter supports a single pipeline per workspace. Use custom stages and filters to manage different service lines within the same board.' },
      { q: 'Does dragging a lead trigger any automation?', a: 'Stage changes are logged automatically. Follow-up reminders linked to specific stages will activate when a lead enters that stage.' }
    ],
    relatedLinks: [
      { title: 'Adding Leads', href: '/docs/leads/adding-leads' },
      { title: 'Follow-up Reminders', href: '/docs/leads/follow-ups' },
      { title: 'Converting Leads to Clients', href: '/docs/leads/converting' },
      { title: 'By Person View', href: '/docs/leads/by-person' }
    ]
  },

  'leads/adding-leads': {
    slug: 'leads/adding-leads',
    title: 'Adding Leads Manually',
    metaTitle: 'Adding Leads Manually — Clienter Docs',
    metaDescription: 'Learn how to add new leads to Clienter manually. Enter prospect details, assign a pipeline stage, set a deal value, and assign a team member in seconds.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Adding Leads', href: '/docs/leads/adding-leads' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Adding a New Lead',
        level: 2,
        content: 'You can create a lead from anywhere inside the Leads module. Whether you are in Pipeline view or List view, the "Add Lead" button is always visible in the top-right corner.',
        steps: [
          'Click "Add Lead" to open the new lead form.',
          'Enter the prospect\'s name (required), email, phone number, and company.',
          'Select a pipeline stage — the default is "New".',
          'Optionally set an expected deal value and currency.',
          'Assign the lead to a team member or leave it unassigned.',
          'Add any initial notes, then click "Save".'
        ]
      },
      {
        id: 'required-fields',
        heading: 'Required vs Optional Fields',
        level: 2,
        content: 'Only the lead name is required to create a record. Everything else — email, phone, company, deal value, source, and notes — is optional. That said, filling in at least a phone number or email makes follow-ups much easier down the line.',
        callout: { type: 'tip', text: 'Fill in the lead source field every time. It helps you measure which channels bring the best prospects when you review your pipeline later.' }
      },
      {
        id: 'quick-add',
        heading: 'Quick Add from Mobile',
        level: 2,
        content: 'On the Clienter mobile app, tap the floating "+" button on the Leads screen to open a streamlined form. You can also use your phone\'s share menu to send a contact directly into Clienter as a new lead.'
      },
      {
        id: 'duplicates',
        heading: 'Duplicate Detection',
        level: 2,
        content: 'Clienter checks for existing leads with the same phone number or email address. If a match is found, you will see a warning with a link to the existing record so you can update it instead of creating a duplicate.',
        callout: { type: 'warning', text: 'Duplicate detection is based on phone and email. If you add a lead with only a name, Clienter cannot check for duplicates.' }
      }
    ],
    faqs: [
      { q: 'Can I add leads in bulk?', a: 'Yes — use the CSV/Excel import feature to add hundreds of leads at once. See the Import & Export guide for details.' },
      { q: 'Is there a limit to how many leads I can add?', a: 'Free accounts can have up to 30 active leads, Pro up to 300, and Ultra is unlimited. Archived or converted leads do not count.' }
    ],
    relatedLinks: [
      { title: 'Import & Export Leads', href: '/docs/leads/import-export' },
      { title: 'Lead Limits per Plan', href: '/docs/leads/limits' },
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Follow-up Reminders', href: '/docs/leads/follow-ups' }
    ]
  },

  'leads/import-export': {
    slug: 'leads/import-export',
    title: 'Import & Export Leads',
    metaTitle: 'Import & Export Leads — Clienter Docs',
    metaDescription: 'Bulk-import leads into Clienter from CSV or Excel files and export your lead data anytime. Map columns, handle duplicates, and keep your data portable.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Import & Export', href: '/docs/leads/import-export' }
    ],
    sections: [
      {
        id: 'import-overview',
        heading: 'Importing Leads',
        level: 2,
        content: 'Clienter supports CSV (.csv) and Excel (.xlsx) file imports so you can migrate from spreadsheets, other CRMs, or lead lists in just a few steps.',
        steps: [
          'Go to Leads and click the "Import" button in the top bar.',
          'Upload your CSV or Excel file (max 5 MB).',
          'Clienter reads the column headers and shows a mapping screen.',
          'Map each file column to a Clienter field (Name, Email, Phone, Company, Deal Value, Stage, Source, Notes).',
          'Choose how to handle duplicates: skip, overwrite, or create new.',
          'Click "Start Import" and wait for the confirmation summary.'
        ],
        callout: { type: 'info', text: 'The import respects your plan\'s active lead limit. If the file would push you over the cap, Clienter imports as many as your limit allows and lists the skipped rows.' }
      },
      {
        id: 'column-mapping',
        heading: 'Column Mapping Tips',
        level: 3,
        content: 'Clienter auto-matches common header names like "Name", "Email", "Phone", and "Company". For non-standard headers, use the dropdown to manually assign each column. Columns you leave unmapped are ignored during import. If your file uses "Deal Amount" instead of "Deal Value", just map it manually — no need to rename the file.'
      },
      {
        id: 'export',
        heading: 'Exporting Leads',
        level: 2,
        content: 'Export your leads at any time for backups, reporting, or migration.',
        steps: [
          'Go to Leads and click the "Export" button.',
          'Choose the format: CSV or Excel.',
          'Select whether to export all leads or only the currently filtered set.',
          'Click "Download" — the file is generated and saved to your device.'
        ],
        callout: { type: 'tip', text: 'Apply filters before exporting to create targeted lists — for example, export only "Won" leads from the last quarter for a revenue report.' }
      },
      {
        id: 'data-format',
        heading: 'Supported Data Formats',
        level: 2,
        content: 'Name fields accept up to 200 characters. Phone numbers can include country codes with or without the "+" prefix. Email addresses are validated on import — invalid emails are flagged but the row is still imported. Deal values should be numeric; currency symbols are stripped automatically. Date fields accept ISO 8601 (YYYY-MM-DD) and common regional formats (DD/MM/YYYY, MM/DD/YYYY).'
      }
    ],
    faqs: [
      { q: 'Can I import leads from Google Sheets?', a: 'Download your Google Sheet as a CSV or Excel file first, then import that file into Clienter.' },
      { q: 'What happens if my file has more leads than my plan allows?', a: 'Clienter imports leads up to your plan\'s active limit and provides a report of skipped rows so you know exactly which ones were not imported.' },
      { q: 'Does exporting include archived leads?', a: 'By default, the export includes active leads only. Toggle the "Include archived" option on the export dialog to include them.' }
    ],
    relatedLinks: [
      { title: 'Adding Leads Manually', href: '/docs/leads/adding-leads' },
      { title: 'Lead Limits per Plan', href: '/docs/leads/limits' },
      { title: 'Lead Source Integrations', href: '/docs/leads/lead-sources' }
    ]
  },

  'leads/follow-ups': {
    slug: 'leads/follow-ups',
    title: 'Follow-up Reminders',
    metaTitle: 'Follow-up Reminders — Clienter Docs',
    metaDescription: 'Never lose a deal to silence. Schedule follow-up reminders on any lead in Clienter and get notified via push notification and in-app alert when it is time to reach out.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Follow-up Reminders', href: '/docs/leads/follow-ups' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Why Follow-ups Matter',
        level: 2,
        content: 'Most deals are lost not because the prospect said no, but because nobody followed up. Clienter\'s follow-up system lets you attach a reminder to any lead so you get a notification exactly when you need to reach out again. No more checking spreadsheets or relying on memory.'
      },
      {
        id: 'scheduling',
        heading: 'Scheduling a Follow-up',
        level: 2,
        content: 'Set a follow-up reminder in just a few taps.',
        steps: [
          'Open the lead card you want to follow up on.',
          'Tap the "Follow-up" button (clock icon).',
          'Pick a date and time for the reminder.',
          'Optionally add a note describing what to discuss.',
          'Save the reminder.'
        ],
        callout: { type: 'tip', text: 'Use quick-select options like "Tomorrow 10 AM", "In 3 days", or "Next Monday" to schedule common follow-ups without typing a date.' }
      },
      {
        id: 'notifications',
        heading: 'How You Get Notified',
        level: 2,
        content: 'When a follow-up is due, Clienter sends a push notification to your phone (if the mobile app is installed) and displays an in-app badge on the Leads icon. The notification includes the lead name, your note, and a direct link to open the lead card. Overdue follow-ups are highlighted in red on the pipeline so they are impossible to miss.'
      },
      {
        id: 'managing',
        heading: 'Managing Follow-ups',
        level: 2,
        content: 'View all upcoming and overdue follow-ups in the Follow-ups tab on the Leads page. From there you can reschedule, mark as done, or delete any reminder. Completed follow-ups are logged in the lead\'s activity timeline for future reference.',
        callout: { type: 'info', text: 'You can filter the pipeline to show only leads with overdue follow-ups, making it easy to prioritize your day.' }
      },
      {
        id: 'recurring',
        heading: 'Recurring Follow-ups',
        level: 3,
        content: 'For long-cycle prospects, you can set a recurring follow-up — weekly or monthly — so Clienter keeps reminding you until the deal moves forward or you mark the lead as lost.'
      }
    ],
    faqs: [
      { q: 'Can multiple team members get the same follow-up notification?', a: 'Follow-up notifications go to the team member assigned to the lead. If you reassign the lead, future reminders go to the new assignee.' },
      { q: 'Do follow-ups work offline?', a: 'You can schedule follow-ups offline on the mobile app. They sync when you are back online, and notifications fire at the correct time.' }
    ],
    relatedLinks: [
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Lead Meetings', href: '/docs/leads/lead-meetings' },
      { title: 'Converting Leads to Clients', href: '/docs/leads/converting' }
    ]
  },

  'leads/converting': {
    slug: 'leads/converting',
    title: 'Converting a Lead to a Client',
    metaTitle: 'Converting Leads to Clients — Clienter Docs',
    metaDescription: 'When a lead says yes, convert them to a full client in Clienter with one click. All notes, files, and history carry over so onboarding starts instantly.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Converting Leads', href: '/docs/leads/converting' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'From Lead to Client',
        level: 2,
        content: 'Converting a lead creates a new client record in your Clients module and carries over all the important context — name, contact details, notes, files, and activity history. The lead is marked as "Won" in the pipeline and archived so it no longer counts against your active lead limit.'
      },
      {
        id: 'how-to',
        heading: 'How to Convert a Lead',
        level: 2,
        content: 'The conversion process takes just a few seconds.',
        steps: [
          'Open the lead card for the prospect who has agreed to work with you.',
          'Click the "Convert to Client" button at the top of the card.',
          'Review the pre-filled client details (name, email, phone, company).',
          'Add any extra client-specific information such as billing address or GST number.',
          'Click "Confirm" to create the client record.'
        ],
        callout: { type: 'info', text: 'After conversion, you will be redirected to the new client profile where you can immediately create a project, send an invoice, or schedule onboarding.' }
      },
      {
        id: 'what-carries-over',
        heading: 'What Carries Over',
        level: 2,
        content: 'All notes, files, meeting history, follow-up logs, and activity timeline entries are copied to the client record. The original lead card is preserved in a "Won" state so you can always trace back to the sales history. Team assignment is carried over as well — whoever owned the lead becomes the primary contact for the client.'
      },
      {
        id: 'after-conversion',
        heading: 'What to Do After Converting',
        level: 2,
        content: 'Once the client exists, you unlock the full Clienter suite for that relationship: projects, invoices, proposals, tasks, and payments. A good next step is to create a project and share an onboarding checklist so both you and the client know what comes next.',
        callout: { type: 'tip', text: 'Create a project template for onboarding so you can kick off every new client relationship in one click.' }
      }
    ],
    faqs: [
      { q: 'Can I undo a conversion?', a: 'You cannot reverse a conversion automatically, but you can delete the client record and re-open the lead manually if needed.' },
      { q: 'Does converting a lead free up my lead limit?', a: 'Yes. Converted leads are archived and do not count toward your active lead cap.' },
      { q: 'Can I convert a lead without an email address?', a: 'Yes. Only the name is required. You can add the email to the client record later.' }
    ],
    relatedLinks: [
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Lead Limits per Plan', href: '/docs/leads/limits' },
      { title: 'Client Management', href: '/docs/clients' }
    ]
  },

  'leads/lead-files': {
    slug: 'leads/lead-files',
    title: 'Attaching Files to Leads',
    metaTitle: 'Lead File Attachments — Clienter Docs',
    metaDescription: 'Attach proposals, briefs, contracts, and reference documents directly to a lead card in Clienter. Keep all prospect-related files in one place.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Lead Files', href: '/docs/leads/lead-files' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Why Attach Files to Leads?',
        level: 2,
        content: 'During the sales process you exchange proposals, requirement briefs, reference images, and contracts. Attaching these files directly to the lead card means your team never has to dig through email or chat to find the latest version.'
      },
      {
        id: 'how-to',
        heading: 'Attaching a File',
        level: 2,
        content: 'Adding files to a lead is straightforward.',
        steps: [
          'Open the lead card.',
          'Scroll to the "Files" section or tap the paperclip icon.',
          'Click "Upload" and select one or more files from your device.',
          'The files appear in the card immediately after upload.'
        ],
        callout: { type: 'info', text: 'Supported formats include PDF, Word, Excel, images (JPG, PNG), and common archive files (ZIP). Individual file size limit is 10 MB.' }
      },
      {
        id: 'managing',
        heading: 'Managing Attached Files',
        level: 2,
        content: 'You can preview images and PDFs directly inside Clienter without downloading. To rename, download, or delete a file, click the three-dot menu next to it. Files are visible to all team members who have access to the lead.'
      },
      {
        id: 'conversion',
        heading: 'Files After Conversion',
        level: 2,
        content: 'When you convert a lead to a client, all attached files are carried over to the new client record. The originals remain on the archived lead card as well, so nothing is lost.',
        callout: { type: 'tip', text: 'Attach the signed proposal or contract before converting — it becomes the first document in your client\'s file library.' }
      }
    ],
    faqs: [
      { q: 'Is there a total storage limit?', a: 'Storage limits depend on your plan. Check the Plans page at app.clienter.co.in for current storage quotas.' },
      { q: 'Can I attach files from Google Drive?', a: 'Currently you need to download the file first and then upload it to Clienter. Direct cloud-storage integration is on the roadmap.' }
    ],
    relatedLinks: [
      { title: 'Adding Leads', href: '/docs/leads/adding-leads' },
      { title: 'Converting Leads to Clients', href: '/docs/leads/converting' },
      { title: 'Lead Management Overview', href: '/docs/leads' }
    ]
  },

  'leads/lead-location': {
    slug: 'leads/lead-location',
    title: 'Location & GPS on Leads',
    metaTitle: 'Lead Location & GPS Tracking — Clienter Docs',
    metaDescription: 'Tag leads with a location or GPS pin in Clienter. Ideal for field sales teams who visit prospects and need to track where meetings happened.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Lead Location', href: '/docs/leads/lead-location' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Location Tracking for Leads',
        level: 2,
        content: 'If your agency or freelance work involves field visits — client site walkthroughs, property inspections, on-location shoots — Clienter lets you tag each lead with a physical location. The location is stored on the lead card and visible on a map so your team knows exactly where a prospect is based.'
      },
      {
        id: 'adding-location',
        heading: 'Adding a Location to a Lead',
        level: 2,
        content: 'You can add a location when creating a lead or anytime after.',
        steps: [
          'Open the lead card.',
          'Tap the "Location" field or the map-pin icon.',
          'Either enter an address manually or tap "Use Current Location" to capture your GPS coordinates.',
          'The address and map pin are saved to the lead.'
        ],
        callout: { type: 'tip', text: 'On mobile, "Use Current Location" is the fastest option when you are standing at the prospect\'s office or site.' }
      },
      {
        id: 'viewing',
        heading: 'Viewing Lead Locations',
        level: 2,
        content: 'Each lead card shows the saved address as text and a small embedded map preview. Tap the map to open it in your device\'s default maps app for navigation. On desktop, the map opens in a new browser tab.'
      },
      {
        id: 'use-cases',
        heading: 'Common Use Cases',
        level: 2,
        content: 'Field sales representatives use location to plan route-optimized visit schedules. Event planners tag venue locations to each event lead. Real estate and construction agencies record site coordinates for future reference. Any time physical presence matters, lead location keeps the context right where it belongs — on the lead card.',
        callout: { type: 'info', text: 'Location data is private to your workspace. It is never shared outside your Clienter account.' }
      }
    ],
    faqs: [
      { q: 'Does Clienter track my live location?', a: 'No. Clienter only records a location when you explicitly save one to a lead. There is no background or continuous GPS tracking.' },
      { q: 'Can I change a lead\'s location later?', a: 'Yes. Open the lead card and update the location field at any time.' }
    ],
    relatedLinks: [
      { title: 'Adding Leads', href: '/docs/leads/adding-leads' },
      { title: 'Lead Meetings', href: '/docs/leads/lead-meetings' },
      { title: 'Lead Management Overview', href: '/docs/leads' }
    ]
  },

  'leads/lead-meetings': {
    slug: 'leads/lead-meetings',
    title: 'Scheduling Meetings with Leads',
    metaTitle: 'Lead Meetings — Clienter Docs',
    metaDescription: 'Schedule and track meetings with prospects directly from their lead card in Clienter. Add date, time, agenda, and location — everything your team needs to show up prepared.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Lead Meetings', href: '/docs/leads/lead-meetings' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Meetings in the Lead Workflow',
        level: 2,
        content: 'Many deals require one or more meetings before a prospect converts. Clienter lets you create meeting records on any lead card with a date, time, location, and agenda. Your team can see upcoming meetings at a glance and review past ones for context.'
      },
      {
        id: 'scheduling',
        heading: 'Creating a Meeting',
        level: 2,
        content: 'Schedule a meeting in just a few steps.',
        steps: [
          'Open the lead card.',
          'Go to the "Meetings" section and tap "Schedule Meeting".',
          'Enter the meeting title, date, and time.',
          'Add a location (physical address or virtual meeting link).',
          'Write an optional agenda or talking points.',
          'Save the meeting.'
        ],
        callout: { type: 'tip', text: 'Paste a Google Meet or Zoom link into the location field so your team can join with one click.' }
      },
      {
        id: 'reminders',
        heading: 'Meeting Reminders',
        level: 2,
        content: 'Clienter sends a notification before each scheduled meeting so you are never caught off-guard. The reminder includes the meeting title, lead name, and location. You can adjust reminder timing in your notification settings.'
      },
      {
        id: 'history',
        heading: 'Meeting History',
        level: 2,
        content: 'Past meetings stay on the lead card in reverse-chronological order. After a meeting, add notes summarizing what was discussed and any action items. This history carries over if you convert the lead to a client, giving your delivery team full context.',
        callout: { type: 'info', text: 'Meeting notes are searchable, so you can quickly find a discussion point across all your leads.' }
      }
    ],
    faqs: [
      { q: 'Can I sync meetings with Google Calendar?', a: 'Direct calendar sync is on the roadmap. For now, you can copy the meeting details and add them to your calendar manually, or paste a calendar event link into the meeting location field.' },
      { q: 'Who can see meetings on a lead?', a: 'All team members with access to the lead can view and add meetings.' }
    ],
    relatedLinks: [
      { title: 'Follow-up Reminders', href: '/docs/leads/follow-ups' },
      { title: 'Lead Location', href: '/docs/leads/lead-location' },
      { title: 'Converting Leads to Clients', href: '/docs/leads/converting' }
    ]
  },

  'leads/starred-leads': {
    slug: 'leads/starred-leads',
    title: 'Starring Important Leads',
    metaTitle: 'Starred Leads — Clienter Docs',
    metaDescription: 'Star high-priority leads in Clienter so they always stand out in your pipeline. Quickly filter for starred leads to focus on deals that matter most.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Starred Leads', href: '/docs/leads/starred-leads' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What Are Starred Leads?',
        level: 2,
        content: 'Starring a lead is the simplest way to mark it as high-priority. Starred leads display a visible star icon on both the pipeline and list views, making them easy to spot among dozens or hundreds of prospects. Think of it as your personal "hot list" within the pipeline.'
      },
      {
        id: 'how-to',
        heading: 'Starring and Unstarring',
        level: 2,
        content: 'Toggle the star status with a single tap.',
        steps: [
          'In Pipeline or List view, tap the star icon on the lead card.',
          'The star fills in to indicate the lead is now starred.',
          'Tap again to remove the star.'
        ],
        callout: { type: 'tip', text: 'You can also star a lead from inside the lead card detail view using the star icon in the header.' }
      },
      {
        id: 'filtering',
        heading: 'Filtering by Starred',
        level: 2,
        content: 'Use the "Starred" filter in the Leads toolbar to show only starred leads across all pipeline stages. This is especially useful during daily stand-ups or when reviewing your top-priority deals before a call block.'
      },
      {
        id: 'team-visibility',
        heading: 'Team Visibility',
        level: 2,
        content: 'Stars are visible to all team members, not just the person who set them. This makes it a useful signal for the whole team — if a lead is starred, everyone knows it is a priority.',
        callout: { type: 'info', text: 'Stars are a lightweight priority marker. For more nuanced prioritization, combine stars with pipeline stages and deal values.' }
      }
    ],
    faqs: [
      { q: 'Is there a limit to how many leads I can star?', a: 'No. You can star as many leads as you like across all stages.' },
      { q: 'Do starred leads sort to the top?', a: 'By default, starred leads appear at the top within each pipeline column. You can change sorting to override this behavior.' }
    ],
    relatedLinks: [
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Follow-up Reminders', href: '/docs/leads/follow-ups' },
      { title: 'By Person View', href: '/docs/leads/by-person' }
    ]
  },

  'leads/by-person': {
    slug: 'leads/by-person',
    title: 'By Person View',
    metaTitle: 'Leads By Person View — Clienter Docs',
    metaDescription: 'See all leads grouped by assigned team member with Clienter\'s "By Person" view. Quickly check workload distribution and reassign leads to balance your team.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'By Person', href: '/docs/leads/by-person' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'What Is the By Person View?',
        level: 2,
        content: 'The "By Person" view reorganizes your leads by assigned team member instead of by pipeline stage. Each person gets a column (or section in list mode) showing all leads assigned to them. Unassigned leads appear in their own group. This view is invaluable for managers who need to check workload balance at a glance.'
      },
      {
        id: 'accessing',
        heading: 'Accessing the View',
        level: 2,
        content: 'Switch to the By Person view from the Leads module.',
        steps: [
          'Open the Leads section from the sidebar.',
          'Click the view toggle in the top-right area.',
          'Select "By Person" from the available views.'
        ]
      },
      {
        id: 'workload',
        heading: 'Checking Workload Distribution',
        level: 2,
        content: 'Each person\'s column shows a count of active leads and the total deal value they are managing. If one team member is overloaded while another has capacity, you can drag leads between columns to reassign them instantly.',
        callout: { type: 'tip', text: 'Review the By Person view during weekly team meetings to ensure leads are evenly distributed and no one is overwhelmed.' }
      },
      {
        id: 'reassigning',
        heading: 'Reassigning Leads',
        level: 2,
        content: 'Drag a lead card from one person\'s column to another to reassign it. The new assignee receives a notification and any future follow-up reminders go to them. You can also reassign from inside the lead card by changing the "Assigned to" field.',
        callout: { type: 'info', text: 'Reassigning a lead does not change its pipeline stage. The lead stays in the same sales stage regardless of who owns it.' }
      }
    ],
    faqs: [
      { q: 'Can I see leads for just one team member?', a: 'Yes. Use the assignee filter in combination with the By Person view, or any other view, to isolate one person\'s leads.' },
      { q: 'What if a lead is not assigned to anyone?', a: 'Unassigned leads appear in an "Unassigned" group at the end of the By Person view so they are easy to spot and claim.' }
    ],
    relatedLinks: [
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Starred Leads', href: '/docs/leads/starred-leads' },
      { title: 'Lead Management Overview', href: '/docs/leads' }
    ]
  },

  'leads/lead-sources': {
    slug: 'leads/lead-sources',
    title: 'Lead Source Integrations',
    metaTitle: 'Lead Source Integrations — Clienter Docs',
    metaDescription: 'Automatically capture leads from Meta Ads, IndiaMART, webhooks, and your website contact form into Clienter. Available on the Ultra plan.',
    planBadge: 'Ultra',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Lead Sources', href: '/docs/leads/lead-sources' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Automatic Lead Capture',
        level: 2,
        content: 'On the Ultra plan, Clienter can pull leads directly from your advertising platforms, marketplaces, and website forms. Instead of manually copying prospect details, leads flow into your pipeline the moment someone fills out a form or submits an inquiry.',
        planBadge: 'Ultra',
        callout: { type: 'info', text: 'Lead source integrations are available exclusively on the Ultra plan. Upgrade at app.clienter.co.in to enable them.' }
      },
      {
        id: 'meta-ads',
        heading: 'Meta Ads (Facebook & Instagram)',
        level: 2,
        content: 'Connect your Meta Ads account to automatically import leads from Facebook Lead Ads and Instagram Lead Ads.',
        steps: [
          'Go to Settings > Integrations in your Clienter dashboard.',
          'Click "Connect" next to Meta Ads.',
          'Authorize Clienter to access your Meta Business account.',
          'Select the ad accounts and lead forms you want to sync.',
          'New leads from those forms will appear in your pipeline within minutes.'
        ],
        planBadge: 'Ultra'
      },
      {
        id: 'indiamart',
        heading: 'IndiaMART',
        level: 2,
        content: 'If you receive buyer inquiries on IndiaMART, connect your IndiaMART seller account to route those leads into Clienter automatically.',
        steps: [
          'Go to Settings > Integrations.',
          'Click "Connect" next to IndiaMART.',
          'Enter your IndiaMART CRM key (found in your IndiaMART seller dashboard under Lead Manager > CRM Integration).',
          'Save the connection. New IndiaMART inquiries will sync to your Clienter pipeline.'
        ],
        planBadge: 'Ultra'
      },
      {
        id: 'webhook',
        heading: 'Webhook Integration',
        level: 2,
        content: 'For platforms not natively supported, use the webhook endpoint to push leads into Clienter from any source that can send an HTTP POST request — Zapier, Make (Integromat), Pabbly, or your own backend.',
        steps: [
          'Go to Settings > Integrations > Webhook.',
          'Copy your unique webhook URL.',
          'Configure your external tool to POST JSON with fields: name, email, phone, company, source, and notes.',
          'Clienter validates the payload and creates a new lead in the "New" stage.'
        ],
        callout: { type: 'tip', text: 'Use the webhook test button in Settings to send a sample lead and verify your integration before going live.' },
        planBadge: 'Ultra'
      },
      {
        id: 'contact-form',
        heading: 'Website Contact Form',
        level: 2,
        content: 'Embed a Clienter-powered contact form on your website or point your existing form\'s submission to the Clienter webhook URL. Every form submission becomes a lead in your pipeline with the source automatically tagged as "Contact Form".',
        planBadge: 'Ultra'
      },
      {
        id: 'source-tracking',
        heading: 'Tracking Lead Sources',
        level: 2,
        content: 'Every lead captured through an integration is automatically tagged with its source (e.g., "Meta Ads", "IndiaMART", "Webhook", "Contact Form"). Filter your pipeline by source to measure which channels bring the most — and the best — prospects. This data helps you allocate ad spend and marketing effort more effectively.'
      }
    ],
    faqs: [
      { q: 'Can I use lead source integrations on the Pro plan?', a: 'No. Automatic lead capture from external platforms is an Ultra-exclusive feature. On Pro, you can add leads manually or via CSV import.' },
      { q: 'Is there a delay in lead sync?', a: 'Most integrations sync within two to five minutes. Webhooks are near-instant.' },
      { q: 'Can I customize which pipeline stage new leads land in?', a: 'By default, captured leads enter the "New" stage. You can change the default intake stage in Settings > Integrations for each source.' }
    ],
    relatedLinks: [
      { title: 'Sales Pipeline', href: '/docs/leads/pipeline' },
      { title: 'Adding Leads Manually', href: '/docs/leads/adding-leads' },
      { title: 'Lead Limits per Plan', href: '/docs/leads/limits' },
      { title: 'Import & Export Leads', href: '/docs/leads/import-export' }
    ]
  },

  'leads/limits': {
    slug: 'leads/limits',
    title: 'Lead Limits per Plan',
    metaTitle: 'Lead Limits per Plan — Clienter Docs',
    metaDescription: 'Understand how many active leads you can have on each Clienter plan. Free allows 30, Pro allows 300, and Ultra gives you unlimited active leads.',
    breadcrumbs: [
      { label: 'Docs', href: '/docs' },
      { label: 'Leads', href: '/docs/leads' },
      { label: 'Lead Limits', href: '/docs/leads/limits' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'How Lead Limits Work',
        level: 2,
        content: 'Clienter counts the number of active leads in your workspace to determine whether you can add more. Active leads are those in any pipeline stage that have not been archived or converted to a client. Archived and converted leads are free — they do not count toward your limit.'
      },
      {
        id: 'plan-breakdown',
        heading: 'Limits by Plan',
        level: 2,
        content: 'Each plan comes with a different active lead allowance to match the scale of your business.',
        steps: [
          'Free plan — up to 30 active leads',
          'Pro plan (₹199/month) — up to 300 active leads',
          'Ultra plan (₹799/month) — unlimited active leads'
        ],
        callout: { type: 'info', text: 'These are active lead limits. There is no cap on the total number of archived or converted leads stored in your account.' }
      },
      {
        id: 'hitting-limit',
        heading: 'What Happens When You Hit the Limit',
        level: 2,
        content: 'When you reach your plan\'s active lead cap, Clienter prevents you from adding new leads manually or via import. Automatic lead capture (Ultra only) also pauses. You will see a clear notification explaining the limit and your options.',
        callout: { type: 'warning', text: 'If you are close to your limit and have lead source integrations running, incoming leads may be queued until you free up space or upgrade.' }
      },
      {
        id: 'freeing-space',
        heading: 'Freeing Up Lead Slots',
        level: 2,
        content: 'You have several ways to make room without upgrading.',
        steps: [
          'Convert won leads to clients — they move out of active count.',
          'Archive cold or lost leads — they stop counting toward your limit.',
          'Delete leads that were created by mistake or are no longer relevant.'
        ]
      },
      {
        id: 'upgrading',
        heading: 'Upgrading Your Plan',
        level: 2,
        content: 'If you regularly hit your lead cap, upgrading is the easiest solution. Go to Settings > Billing in the Clienter dashboard or visit app.clienter.co.in to compare plans and upgrade instantly. Your new limit takes effect immediately and any queued leads are imported automatically.',
        callout: { type: 'tip', text: 'Pro at ₹199/month gives you 10x the leads of the Free plan — the best value for growing agencies.' }
      },
      {
        id: 'downgrading',
        heading: 'What Happens If You Downgrade',
        level: 3,
        content: 'If you downgrade to a lower plan, your existing leads are preserved — Clienter never deletes data. However, you will not be able to add new active leads until your count falls below the new plan\'s limit through archiving, converting, or deleting.'
      }
    ],
    faqs: [
      { q: 'Do converted clients count as leads?', a: 'No. Once a lead is converted to a client, it is archived from the leads module and no longer counts toward your active lead limit.' },
      { q: 'Do team members affect lead limits?', a: 'No. Lead limits are per workspace, not per user. All team members share the same pool of active leads.' },
      { q: 'Can I buy extra lead slots without upgrading?', a: 'Currently, lead limits are tied to your plan tier. There is no option to purchase additional slots a la carte.' }
    ],
    relatedLinks: [
      { title: 'Lead Management Overview', href: '/docs/leads' },
      { title: 'Converting Leads to Clients', href: '/docs/leads/converting' },
      { title: 'Import & Export Leads', href: '/docs/leads/import-export' },
      { title: 'Lead Source Integrations', href: '/docs/leads/lead-sources' }
    ]
  }
}
