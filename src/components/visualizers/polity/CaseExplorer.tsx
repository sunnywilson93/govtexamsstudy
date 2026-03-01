'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { LandmarkCase } from '@/types/polity'

interface CaseExplorerProps {
  cases: LandmarkCase[]
}

export function CaseExplorer({ cases }: CaseExplorerProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = searchQuery.trim()
    ? cases.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(c.year).includes(searchQuery)
      )
    : cases

  const sorted = [...filtered].sort((a, b) => a.year - b.year)

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search cases by name or year..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-subject-polity focus:outline-none"
        aria-label="Search cases"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {sorted.map((c) => {
          const isExpanded = expandedId === c.id
          return (
            <button
              key={c.id}
              onClick={() => setExpandedId(isExpanded ? null : c.id)}
              className={clsx(
                'rounded-lg border border-border-primary bg-bg-elevated p-4 text-left transition-shadow hover:shadow-md',
                isExpanded && 'ring-2 ring-subject-geography'
              )}
              aria-expanded={isExpanded}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-text-primary">
                  {c.name}
                </h3>
                <span className="shrink-0 rounded-full bg-subject-geography-light px-2 py-0.5 font-mono text-xs font-medium text-subject-geography-dark">
                  {c.year}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                {c.summary}
              </p>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 border-t border-border-primary pt-3">
                      <div className="mb-2">
                        <span className="text-[10px] font-semibold uppercase text-text-muted">
                          Verdict
                        </span>
                        <p className="mt-0.5 text-xs text-text-primary">
                          {c.verdict}
                        </p>
                      </div>
                      <div className="mb-2">
                        <span className="text-[10px] font-semibold uppercase text-text-muted">
                          Impact
                        </span>
                        <p className="mt-0.5 text-xs text-text-primary">
                          {c.impact}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase text-text-muted">
                          Articles Interpreted
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {c.articlesInterpreted.map((art) => (
                            <span
                              key={art}
                              className="rounded bg-subject-polity-light px-1.5 py-0.5 font-mono text-[10px] text-subject-polity-dark"
                            >
                              Art. {art}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>

      {sorted.length === 0 && (
        <p className="py-8 text-center text-sm text-text-muted">
          No cases match your search.
        </p>
      )}
    </div>
  )
}
