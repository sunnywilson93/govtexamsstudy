'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { MathProblem, QuantConcept, QuantTrick } from '@/types/quant'
import { ConceptPanel } from './ConceptPanel'
import { TricksPanel } from './TricksPanel'
import { StepSolver } from './StepSolver'

type Tab = 'concept' | 'tricks' | 'problems'

const TABS: { id: Tab; label: string }[] = [
  { id: 'concept', label: 'Concept' },
  { id: 'tricks', label: 'Tricks' },
  { id: 'problems', label: 'Problems' },
]

interface TopicTabsProps {
  concept: QuantConcept
  tricks: QuantTrick[]
  problems: MathProblem[]
}

export function TopicTabs({ concept, tricks, problems }: TopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('concept')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 border-b border-border-primary">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
              activeTab === tab.id
                ? 'border-subject-quant text-subject-quant'
                : 'border-transparent text-text-muted hover:text-text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
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
