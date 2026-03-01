import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const SUBJECT_TOPICS: Record<string, { name: string; topics: { slug: string; label: string; count: number }[] }> = {
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
  polity: {
    name: 'Indian Polity',
    topics: [
      { slug: 'polity', label: 'Constitutional Framework', count: 3 },
    ],
  },
  history: {
    name: 'Indian History',
    topics: [
      { slug: 'history', label: 'Key Events & Movements', count: 3 },
    ],
  },
  geography: {
    name: 'Indian Geography',
    topics: [
      { slug: 'geography', label: 'Physical Geography', count: 3 },
    ],
  },
  economics: {
    name: 'Indian Economy',
    topics: [
      { slug: 'economics', label: 'Economic Concepts & Policy', count: 3 },
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

interface SubjectPageProps {
  params: { subject: string }
}

export default function SubjectPracticePage({ params }: SubjectPageProps) {
  const config = SUBJECT_TOPICS[params.subject]
  if (!config) notFound()

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
        <span className="font-medium text-text-primary">{config.name}</span>
      </nav>

      <h1 className="mb-2 text-2xl font-bold text-text-primary">{config.name}</h1>
      <p className="mb-8 text-text-secondary">
        Select a topic to start your practice session.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/practice/${params.subject}/${topic.slug}`}
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
    </div>
  )
}
