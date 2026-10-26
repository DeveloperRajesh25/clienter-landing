'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

export function ArticleFeedback() {
  const [submitted, setSubmitted] = useState<'yes' | 'no' | null>(null)

  if (submitted) {
    return (
      <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="text-sm text-gray-600">
          {submitted === 'yes'
            ? 'Glad this helped! If you have more questions, reach out to support@clienter.co.in.'
            : 'Sorry about that. Please contact support@clienter.co.in and we’ll help you out.'}
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
      <p className="text-sm font-medium text-gray-700">Was this article helpful?</p>
      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          onClick={() => setSubmitted('yes')}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-green-50 hover:border-green-300 hover:text-green-700"
        >
          <ThumbsUp className="h-4 w-4" /> Yes
        </button>
        <button
          onClick={() => setSubmitted('no')}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-red-50 hover:border-red-300 hover:text-red-700"
        >
          <ThumbsDown className="h-4 w-4" /> No
        </button>
      </div>
    </div>
  )
}
