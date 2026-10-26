export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="my-6 space-y-4 pl-0">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
            {i + 1}
          </span>
          <p className="pt-0.5 leading-relaxed text-gray-600">{step}</p>
        </li>
      ))}
    </ol>
  )
}
