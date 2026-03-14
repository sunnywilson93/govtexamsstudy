import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { AdUnit } from '@/components/ads/AdUnit'
import { AD_SLOTS } from '@/components/ads/AdSlots'
import { getPracticeTopics } from '@/data/practice/subject-problems'
import type { Subject } from '@/types/shared'

const LEGACY_TOPICS: Record<string, { name: string; topics: { slug: string; label: string; count: number }[] }> = {
  quant: {
    name: 'Quantitative Aptitude',
    topics: [
      { slug: 'percentage', label: 'Percentage', count: 4 },
      { slug: 'ratio', label: 'Ratio & Proportion', count: 4 },
      { slug: 'profit-loss', label: 'Profit & Loss', count: 4 },
    ],
  },
  reasoning: {
    name: 'Reasoning & Logic',
    topics: [
      { slug: 'seating', label: 'Seating Arrangement', count: 4 },
      { slug: 'syllogism', label: 'Syllogism', count: 4 },
      { slug: 'series', label: 'Number Series', count: 4 },
    ],
  },
  science: {
    name: 'General Science',
    topics: [
      { slug: 'periodic-table', label: 'Periodic Table', count: 6 },
      { slug: 'body-systems', label: 'Human Body Systems', count: 6 },
    ],
  },
}

const SUBJECT_NAMES: Record<string, string> = {
  quant: 'Quantitative Aptitude',
  reasoning: 'Reasoning & Logic',
  polity: 'Indian Polity',
  history: 'Indian History',
  geography: 'Indian Geography',
  economics: 'Indian Economy',
  science: 'General Science',
}

interface SubjectPageProps {
  params: Promise<{ subject: string }>
}

export default async function SubjectPracticePage({ params }: SubjectPageProps) {
  const { subject } = await params
  const subjectName = SUBJECT_NAMES[subject]
  if (!subjectName) notFound()

  const registryTopics = getPracticeTopics(subject as Subject)
  const legacyConfig = LEGACY_TOPICS[subject]
  const topics = registryTopics ?? legacyConfig?.topics
  if (!topics || topics.length === 0) notFound()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm">
        <Link
          href="/practice"
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          Practice
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        <span className="font-medium text-text-primary">{subjectName}</span>
      </nav>

      <h1 className="mb-2 text-2xl font-bold text-text-primary">{subjectName}</h1>
      <p className="mb-8 text-text-secondary">
        Select a topic to start your practice session.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/practice/${subject}/${topic.slug}`}
            className="group rounded-lg border border-border-primary bg-bg-elevated p-5 no-underline transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 text-base font-semibold text-text-primary group-hover:text-primary">
              {topic.label}
            </h3>
            <p className="text-sm text-text-secondary">
              {topic.count} questions
            </p>
          </Link>
        ))}
      </div>

      <AdUnit slot={AD_SLOTS.practiceSubjectBanner} format="horizontal" className="mt-8" />
    </div>
  )
}
