'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { SubjectConcept, SubjectRevision, SubjectProblem } from '@/types/subject-notes'
import { SUBJECT_CLASSES, type SubjectSlug } from './subject-classes'
import { SubjectNotesPanel } from './SubjectNotesPanel'
import { SubjectRevisionPanel } from './SubjectRevisionPanel'
import { SubjectPYQSolver } from './SubjectPYQSolver'

type Tab = 'notes' | 'revision' | 'pyq'

const TABS: { id: Tab; label: string }[] = [
  { id: 'notes', label: 'Notes' },
  { id: 'revision', label: 'Revision' },
  { id: 'pyq', label: 'PYQ Practice' },
]

interface SubjectTopicTabsProps {
  concept: SubjectConcept
  revision: SubjectRevision
  problems: SubjectProblem[]
  subject: SubjectSlug
}

export function SubjectTopicTabs({ concept, revision, problems, subject }: SubjectTopicTabsProps) {
  const c = SUBJECT_CLASSES[subject]
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
                ? `${c.border} ${c.text}`
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
        {activeTab === 'notes' && <SubjectNotesPanel concept={concept} subject={subject} />}
        {activeTab === 'revision' && <SubjectRevisionPanel revision={revision} subject={subject} />}
        {activeTab === 'pyq' && <SubjectPYQSolver problems={problems} subject={subject} />}
      </motion.div>
    </div>
  )
}
