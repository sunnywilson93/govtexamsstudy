import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { PracticeSession } from '@/components/practice/PracticeSession'
import { getPracticeQuestions, getPracticeTopics } from '@/data/practice/subject-problems'
import { quantMCQs } from '@/data/practice/quant-mcqs'
import { reasoningMCQs } from '@/data/practice/reasoning-mcqs'
import { gkMCQs } from '@/data/practice/gk-mcqs'
import { scienceMCQs } from '@/data/practice/science-mcqs'
import type { MCQ, Subject } from '@/types/shared'

const LEGACY_MCQS: MCQ[] = [
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

const REGISTRY_SUBJECTS = new Set(['polity', 'history', 'geography', 'economics'])

interface TopicPageProps {
  params: Promise<{ subject: string; topic: string }>
}

export default async function TopicPracticePage({ params }: TopicPageProps) {
  const { subject, topic } = await params
  const subjectName = SUBJECT_NAMES[subject]
  if (!subjectName) notFound()

  let questions: MCQ[]

  if (REGISTRY_SUBJECTS.has(subject)) {
    questions = await getPracticeQuestions(subject as Subject, topic)
  } else {
    questions = LEGACY_MCQS.filter((q) => q.topic === topic)
  }

  if (questions.length === 0) notFound()

  const registryTopics = getPracticeTopics(subject as Subject)
  const topicLabel = registryTopics?.find((t) => t.slug === topic)?.label
  const topicName = topicLabel ?? topic.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

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
          href={`/practice/${subject}`}
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
        subject={subject}
        topic={topic}
      />
    </div>
  )
}
