'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'
import { ReasoningConceptPanel } from './ReasoningConceptPanel'
import { ReasoningTricksPanel } from './ReasoningTricksPanel'
import { ReasoningStepSolver } from './ReasoningStepSolver'

type Tab = 'concept' | 'tricks' | 'problems'

const TABS: { id: Tab; label: string }[] = [
  { id: 'concept', label: 'Concept' },
  { id: 'tricks', label: 'Tricks' },
  { id: 'problems', label: 'Problems' },
]

interface ReasoningTopicTabsProps {
  concept: ReasoningConcept
  tricks: ReasoningTrick[]
  problems: ReasoningProblem[]
}

export function ReasoningTopicTabs({ concept, tricks, problems }: ReasoningTopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('concept')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 border-b border-border-primary">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`-mb-px cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-subject-reasoning text-subject-reasoning'
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
        {activeTab === 'concept' && <ReasoningConceptPanel concept={concept} />}
        {activeTab === 'tricks' && <ReasoningTricksPanel tricks={tricks} />}
        {activeTab === 'problems' && <ReasoningStepSolver problems={problems} />}
      </motion.div>
    </div>
  )
}
