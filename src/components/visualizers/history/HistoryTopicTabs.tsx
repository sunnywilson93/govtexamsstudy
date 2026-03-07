'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'
import { HistoryNotesPanel } from './HistoryNotesPanel'
import { HistoryRevisionPanel } from './HistoryRevisionPanel'
import { HistoryPYQSolver } from './HistoryPYQSolver'

type Tab = 'notes' | 'revision' | 'pyq'

const TABS: { id: Tab; label: string }[] = [
  { id: 'notes', label: 'Notes' },
  { id: 'revision', label: 'Revision' },
  { id: 'pyq', label: 'PYQ Practice' },
]

interface HistoryTopicTabsProps {
  concept: HistoryConcept
  revision: HistoryRevision
  problems: HistoryProblem[]
}

export function HistoryTopicTabs({ concept, revision, problems }: HistoryTopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('notes')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 border-b border-border-primary">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
              activeTab === tab.id
                ? 'border-subject-history text-subject-history'
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
        {activeTab === 'notes' && <HistoryNotesPanel concept={concept} />}
        {activeTab === 'revision' && <HistoryRevisionPanel revision={revision} />}
        {activeTab === 'pyq' && <HistoryPYQSolver problems={problems} />}
      </motion.div>
    </div>
  )
}
