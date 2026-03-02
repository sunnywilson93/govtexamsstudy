'use client'

import { motion } from 'framer-motion'
import type { ReasoningTrick } from '@/types/reasoning'

const TYPE_LABEL: Record<ReasoningTrick['type'], string> = {
  'pattern-shortcut': 'Pattern Shortcut',
  elimination: 'Elimination',
}

const TYPE_STYLE: Record<ReasoningTrick['type'], string> = {
  'pattern-shortcut': 'bg-blue-100 text-blue-700',
  elimination: 'bg-amber-100 text-amber-700',
}

export function ReasoningTrickCard({ trick }: { trick: ReasoningTrick }) {
  return (
    <motion.div
      className="flex flex-col gap-3 rounded-lg border border-border-primary bg-bg-elevated p-5"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-text-primary">{trick.title}</h4>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_STYLE[trick.type]}`}>
          {TYPE_LABEL[trick.type]}
        </span>
      </div>

      <p className="text-sm text-text-secondary">{trick.description}</p>

      {trick.formula && (
        <div className="rounded-md bg-bg-secondary px-3 py-2">
          <p className="font-mono text-sm text-subject-reasoning">{trick.formula}</p>
        </div>
      )}

      <div className="flex flex-col gap-1 rounded-md border border-border-secondary bg-bg-secondary p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Example</p>
        <p className="text-xs text-text-secondary">{trick.example.problem}</p>
        <p className="text-xs font-medium text-text-primary">{trick.example.solution}</p>
      </div>

      {trick.timeSaved && (
        <span className="self-start rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          Saves {trick.timeSaved}
        </span>
      )}
    </motion.div>
  )
}
