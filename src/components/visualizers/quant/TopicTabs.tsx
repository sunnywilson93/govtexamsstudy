'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { MathProblem, QuantConcept, QuantTrick } from '@/types/quant'
import { ConceptPanel } from './ConceptPanel'
import { TricksPanel } from './TricksPanel'
import { StepSolver } from './StepSolver'

type Tab = 'concept' | 'tricks' | 'problems'

interface TopicTabsProps {
  concept: QuantConcept
  tricks: QuantTrick[]
  problems: MathProblem[]
}

export function TopicTabs({ concept, tricks, problems }: TopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('concept')

  const tabs: { id: Tab; label: string; badge?: string }[] = [
    { id: 'concept', label: 'Concept' },
    { id: 'tricks', label: 'Tricks', badge: String(tricks.length) },
    { id: 'problems', label: 'Problems', badge: String(problems.length) },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div
        style={{
          display: 'flex',
          gap: 4,
          borderBottom: '.5px solid var(--rule)',
          background: 'var(--paper)',
          position: 'sticky',
          top: 0,
          zIndex: 4,
        }}
      >
        {tabs.map((t) => {
          const active = activeTab === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                position: 'relative',
                padding: '12px 10px',
                border: 0,
                background: 'transparent',
                cursor: 'pointer',
                color: active ? 'var(--ink)' : 'var(--ink-3)',
                fontSize: 14,
                fontWeight: active ? 700 : 500,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                letterSpacing: '-.005em',
                fontFamily: 'inherit',
              }}
            >
              <span>{t.label}</span>
              {t.badge !== undefined && (
                <span
                  aria-hidden="true"
                  className="mono"
                  style={{
                    fontSize: 10,
                    padding: '2px 5px',
                    borderRadius: 4,
                    background: active
                      ? 'color-mix(in oklch, var(--subj-quant) 14%, var(--paper))'
                      : 'var(--paper-2)',
                    color: active ? 'var(--subj-quant-ink)' : 'var(--ink-3)',
                    fontWeight: 700,
                  }}
                >
                  {t.badge}
                </span>
              )}
              {active && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -0.5,
                    height: 2,
                    background: 'var(--subj-quant)',
                    borderRadius: 2,
                  }}
                />
              )}
            </button>
          )
        })}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === 'concept' && <ConceptPanel concept={concept} />}
        {activeTab === 'tricks' && <TricksPanel tricks={tricks} />}
        {activeTab === 'problems' && <StepSolver problems={problems} />}
      </motion.div>
    </div>
  )
}
