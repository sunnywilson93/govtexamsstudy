'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { Amendment } from '@/types/polity'

interface AmendmentTimelineProps {
  amendments: Amendment[]
}

type CategoryFilter = 'all' | 'landmark' | 'major' | 'minor'

const CATEGORY_STYLES: Record<Amendment['category'], { border: string; bg: string; label: string }> = {
  landmark: { border: 'border-secondary-400', bg: 'bg-secondary-50', label: 'Landmark' },
  major: { border: 'border-subject-quant', bg: 'bg-subject-quant-light', label: 'Major' },
  minor: { border: 'border-gray-300', bg: 'bg-gray-50', label: 'Minor' },
}

export function AmendmentTimeline({ amendments }: AmendmentTimelineProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = filter === 'all'
    ? amendments
    : amendments.filter((a) => a.category === filter)

  const sorted = [...filtered].sort((a, b) => a.year - b.year)

  const filterButtons: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'landmark', label: 'Landmark' },
    { value: 'major', label: 'Major' },
    { value: 'minor', label: 'Minor' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={clsx(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              filter === btn.value
                ? 'bg-subject-polity text-white'
                : 'bg-bg-tertiary text-text-secondary hover:bg-bg-elevated'
            )}
            aria-pressed={filter === btn.value}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="relative min-w-[600px]">
          <div className="absolute left-0 right-0 top-[60px] h-0.5 bg-border-primary" />

          <div className="flex gap-4 px-4">
            {sorted.map((amendment) => {
              const style = CATEGORY_STYLES[amendment.category]
              const isExpanded = expandedId === amendment.id

              return (
                <div
                  key={amendment.id}
                  className="flex shrink-0 flex-col items-center"
                  style={{ minWidth: 180 }}
                >
                  <span className="mb-2 font-mono text-xs font-semibold text-text-muted">
                    {amendment.year}
                  </span>

                  <div className="relative z-10 mb-2 h-3 w-3 rounded-full border-2 border-subject-polity bg-bg-primary" />

                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : amendment.id)
                    }
                    className={clsx(
                      'w-full rounded-lg border-2 p-3 text-left transition-shadow hover:shadow-md',
                      style.border,
                      style.bg
                    )}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-text-primary">
                        {amendment.number}{ordinalSuffix(amendment.number)} Amendment
                      </span>
                      <span
                        className={clsx(
                          'rounded-full px-2 py-0.5 text-[10px] font-medium',
                          amendment.category === 'landmark' && 'bg-secondary-200 text-secondary-800',
                          amendment.category === 'major' && 'bg-subject-quant-light text-subject-quant-dark',
                          amendment.category === 'minor' && 'bg-gray-200 text-gray-600'
                        )}
                      >
                        {style.label}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                            {amendment.description}
                          </p>
                          <div className="mt-2">
                            <span className="text-[10px] font-semibold uppercase text-text-muted">
                              Articles Affected
                            </span>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {amendment.articlesAffected.slice(0, 8).map((art) => (
                                <span
                                  key={art}
                                  className="rounded bg-bg-primary px-1.5 py-0.5 font-mono text-[10px] text-text-secondary"
                                >
                                  {art}
                                </span>
                              ))}
                              {amendment.articlesAffected.length > 8 && (
                                <span className="text-[10px] text-text-muted">
                                  +{amendment.articlesAffected.length - 8} more
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="mt-2 text-xs font-medium text-text-primary">
                            {amendment.significance}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {sorted.length === 0 && (
        <p className="py-8 text-center text-sm text-text-muted">
          No amendments match the selected filter.
        </p>
      )}
    </div>
  )
}

function ordinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}
