'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Element } from '@/types/science'
import { CATEGORY_COLORS } from './category-colors'

interface ElementDetailProps {
  element: Element | null
  onClose: () => void
}

export function ElementDetail({ element, onClose }: ElementDetailProps) {
  const colors = element ? CATEGORY_COLORS[element.category] : null

  return (
    <AnimatePresence>
      {element && colors && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col overflow-y-auto bg-bg-primary shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-label={`${element.name} details`}
          >
            <div className="flex items-center justify-between border-b border-border-primary p-4">
              <h2 className="text-lg font-semibold text-text-primary">
                {element.name}
              </h2>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-text-muted hover:bg-bg-tertiary hover:text-text-primary"
                aria-label="Close detail panel"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-5 p-4">
              <div className="flex items-center gap-6">
                <div
                  className="flex h-28 w-28 flex-col items-center justify-center rounded-xl border-2"
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.border,
                  }}
                >
                  <span className="text-xs font-medium text-text-secondary">
                    {element.atomicNumber}
                  </span>
                  <span className="text-4xl font-bold text-text-primary">
                    {element.symbol}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {element.atomicMass}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-text-primary">
                    {element.name}
                  </h3>
                  <span
                    className="inline-block w-fit rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                    }}
                  >
                    {formatCategory(element.category)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <InfoCard label="Group" value={String(element.group)} />
                <InfoCard label="Period" value={String(element.period)} />
                <InfoCard label="Atomic Mass" value={String(element.atomicMass)} />
                <InfoCard
                  label="Electron Config"
                  value={element.electronConfig}
                  mono
                />
              </div>

              {element.examFacts.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Exam-Relevant Facts
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {element.examFacts.map((fact, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-md border border-border-primary p-2.5 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 shrink-0 text-subject-science">
                          &bull;
                        </span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {element.uses.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-text-primary">
                    Common Uses
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {element.uses.map((use, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-md border border-border-primary p-2.5 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 shrink-0 text-subject-science">
                          &bull;
                        </span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function InfoCard({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="rounded-md border border-border-primary bg-bg-elevated p-3">
      <p className="text-xs text-text-muted">{label}</p>
      <p
        className={`mt-1 text-sm font-semibold text-text-primary ${mono ? 'font-mono' : ''}`}
      >
        {value}
      </p>
    </div>
  )
}

function formatCategory(category: string): string {
  return category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
