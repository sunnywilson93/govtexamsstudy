'use client'

import { motion } from 'framer-motion'
import type { ReasoningTrick } from '@/types/reasoning'

const TYPE_LABEL: Record<ReasoningTrick['type'], string> = {
  'pattern-shortcut': 'Pattern Shortcut',
  elimination: 'Elimination',
}

const TYPE_BADGE_STYLE: Record<ReasoningTrick['type'], { bg: string; fg: string }> = {
  'pattern-shortcut': { bg: '#dbeafe', fg: '#1d4ed8' },
  elimination: { bg: '#fef3c7', fg: '#b45309' },
}

export function ReasoningTrickCard({ trick }: { trick: ReasoningTrick }) {
  const badge = TYPE_BADGE_STYLE[trick.type]
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
      style={{
        background: 'var(--paper)',
        border: '.5px solid var(--rule)',
        borderRadius: 'var(--r-md)',
        boxShadow: 'var(--sh-1)',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>
          {trick.title}
        </h4>
        <span
          style={{
            flexShrink: 0,
            fontSize: 10.5,
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: 999,
            background: badge.bg,
            color: badge.fg,
            letterSpacing: '-.005em',
          }}
        >
          {TYPE_LABEL[trick.type]}
        </span>
      </div>

      <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{trick.description}</p>

      {trick.formula && (
        <div
          style={{
            background: 'var(--paper-2)',
            borderRadius: 'var(--r-sm)',
            padding: '10px 12px',
          }}
        >
          <p
            className="mono"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--subj-reasoning)',
            }}
          >
            {trick.formula}
          </p>
        </div>
      )}

      <div
        style={{
          background: 'var(--paper-2)',
          borderRadius: 'var(--r-sm)',
          padding: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <p
          className="mono"
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          Example
        </p>
        <p style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.45 }}>
          {trick.example.problem}
        </p>
        <p style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.45 }}>
          {trick.example.solution}
        </p>
      </div>

      {trick.timeSaved && (
        <span
          style={{
            alignSelf: 'flex-start',
            fontSize: 10.5,
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: 999,
            background: '#dcfce7',
            color: '#15803d',
          }}
        >
          Saves {trick.timeSaved}
        </span>
      )}
    </motion.div>
  )
}
