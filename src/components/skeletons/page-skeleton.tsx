import React from 'react'

type Props = {
  /** number of large content blocks to render below the top bar */
  blocks?: number
  /** show a 4-card metric row at the top */
  cards?: boolean
}

/**
 * Shared lightweight skeleton used by every (dashboard)/<route>/loading.tsx.
 * Rendered immediately by Next.js on navigation so the user never sees a
 * frozen previous page while the server component fetches data.
 */
const PageSkeleton = ({ blocks = 2, cards = false }: Props) => {
  return (
    <div className="w-full h-full animate-pulse">
      {/* Top info bar */}
      <div className="mb-4 flex w-full items-center justify-between px-6 py-3 bg-white/40 border border-white/40 rounded-2xl shadow-sm">
        <div className="h-5 w-40 rounded bg-gray-200" />
        <div className="flex items-center gap-3">
          <div className="hidden md:block h-9 w-64 rounded-lg bg-gray-200" />
          <div className="h-9 w-9 rounded-full bg-gray-200" />
          <div className="h-9 w-9 rounded-full bg-gray-200" />
        </div>
      </div>

      {cards && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-2xl bg-white shadow-soft-xl border border-gray-100 p-4 flex flex-col justify-between"
            >
              <div className="h-3 w-24 rounded bg-gray-200" />
              <div className="h-6 w-20 rounded bg-gray-200" />
              <div className="h-2 w-32 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            className="h-72 rounded-2xl bg-white shadow-soft-xl border border-gray-100 p-5"
          >
            <div className="h-4 w-40 rounded bg-gray-200 mb-4" />
            <div className="space-y-3">
              <div className="h-3 w-full rounded bg-gray-100" />
              <div className="h-3 w-5/6 rounded bg-gray-100" />
              <div className="h-3 w-4/6 rounded bg-gray-100" />
              <div className="h-3 w-3/6 rounded bg-gray-100" />
              <div className="h-3 w-5/6 rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageSkeleton
