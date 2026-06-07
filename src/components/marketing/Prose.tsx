/**
 * Readable long-form text container for legal/policy pages. Applies consistent
 * typography to headings, paragraphs, lists, and links without needing the
 * Tailwind typography plugin.
 */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        mx-auto max-w-3xl px-4 sm:px-6 lg:px-8
        [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900
        [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-gray-900
        [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-gray-600
        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-gray-600
        [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:text-gray-600
        [&_li]:leading-relaxed
        [&_a]:font-medium [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-orange-700
        [&_strong]:font-semibold [&_strong]:text-gray-900
      "
    >
      {children}
    </div>
  )
}
