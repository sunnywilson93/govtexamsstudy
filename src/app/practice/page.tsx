import Link from 'next/link'
import {
  Calculator,
  Brain,
  Landmark,
  Clock,
  Globe2,
  TrendingUp,
  Atom,
} from 'lucide-react'

const PRACTICE_SUBJECTS = [
  {
    slug: 'quant',
    name: 'Quantitative Aptitude',
    description: 'Percentage, Ratio & Proportion, Profit-Loss',
    color: '#3b82f6',
    icon: Calculator,
  },
  {
    slug: 'reasoning',
    name: 'Reasoning & Logic',
    description: 'Seating Arrangement, Syllogism, Number Series',
    color: '#8b5cf6',
    icon: Brain,
  },
  {
    slug: 'polity',
    name: 'Indian Polity',
    description: 'Constitutional Articles, Amendments, Governance',
    color: '#ef4444',
    icon: Landmark,
  },
  {
    slug: 'history',
    name: 'Indian History',
    description: 'Freedom Movement, Key Events, Personalities',
    color: '#f59e0b',
    icon: Clock,
  },
  {
    slug: 'geography',
    name: 'Indian Geography',
    description: 'Rivers, Mountains, States, Climate',
    color: '#22c55e',
    icon: Globe2,
  },
  {
    slug: 'economics',
    name: 'Indian Economy',
    description: 'Fiscal Policy, GDP, Monetary System',
    color: '#14b8a6',
    icon: TrendingUp,
  },
  {
    slug: 'science',
    name: 'General Science',
    description: 'Periodic Table, Human Body Systems',
    color: '#06b6d4',
    icon: Atom,
  },
] as const

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold text-text-primary">Practice Arena</h1>
      <p className="mb-8 text-text-secondary">
        Choose a subject to start practicing topic-wise MCQs.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_SUBJECTS.map((subject) => {
          const Icon = subject.icon
          return (
            <Link
              key={subject.slug}
              href={`/practice/${subject.slug}`}
              className="rounded-lg border border-border-primary bg-bg-elevated p-5 no-underline transition-shadow hover:shadow-md"
              style={{ borderLeftWidth: '4px', borderLeftColor: subject.color }}
            >
              <div className="mb-2 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${subject.color}15`, color: subject.color }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-text-primary">{subject.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">{subject.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
