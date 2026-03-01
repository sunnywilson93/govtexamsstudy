'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { PracticeSession } from '@/components/practice/PracticeSession'
import { quantMCQs } from '@/data/practice/quant-mcqs'
import { reasoningMCQs } from '@/data/practice/reasoning-mcqs'
import { gkMCQs } from '@/data/practice/gk-mcqs'
import { scienceMCQs } from '@/data/practice/science-mcqs'
import type { MCQ } from '@/types/shared'

const ALL_MCQS: MCQ[] = [
  ...quantMCQs,
  ...reasoningMCQs,
  ...gkMCQs,
  ...scienceMCQs,
]

const SUBJECT_NAMES: Record<string, string> = {
  quant: 'Quantitative Aptitude',
  reasoning: 'Reasoning & Logic',
  polity: 'Indian Polity',
  history: 'Indian History',
  geography: 'Indian Geography',
  economics: 'Indian Economy',
  science: 'General Science',
}

const TOPIC_NAMES: Record<string, string> = {
  percentage: 'Percentage',
  ratio: 'Ratio & Proportion',
  'profit-loss': 'Profit & Loss',
  seating: 'Seating Arrangement',
  syllogism: 'Syllogism',
  series: 'Number Series',
  polity: 'Constitutional Framework',
  history: 'Key Events & Movements',
  geography: 'Physical Geography',
  economics: 'Economic Concepts & Policy',
  'periodic-table': 'Periodic Table',
  'body-systems': 'Human Body Systems',
}

interface TopicPageProps {
  params: { subject: string; topic: string }
}

export default function TopicPracticePage({ params }: TopicPageProps) {
  const subjectName = SUBJECT_NAMES[params.subject]
  const topicName = TOPIC_NAMES[params.topic]

  if (!subjectName || !topicName) notFound()

  const questions = ALL_MCQS.filter((q) => q.topic === params.topic)

  if (questions.length === 0) notFound()

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm">
        <Link
          href="/practice"
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          Practice
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        <Link
          href={`/practice/${params.subject}`}
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          {subjectName}
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        <span className="font-medium text-text-primary">{topicName}</span>
      </nav>

      <h1 className="mb-6 text-xl font-bold text-text-primary">{topicName}</h1>

      <PracticeSession
        questions={questions}
        subject={params.subject}
        topic={params.topic}
      />
    </div>
  )
}
