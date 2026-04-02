import type { Metadata } from 'next'
import Link from 'next/link'
import { AdUnit } from '@/components/ads/AdUnit'
import { AD_SLOTS } from '@/components/ads/AdSlots'
import {
  Calculator,
  Brain,
  Landmark,
  Clock,
  Globe2,
  TrendingUp,
  Atom,
  ChevronRight,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Practice Arena - MCQ Practice',
  description:
    'Practice topic-wise MCQs across all subjects with instant feedback and visual explanations for government exam preparation.',
}

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
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <div className="mb-8 rounded-2xl border border-border-primary bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Target size={20} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Practice Arena</h1>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300">
          Choose a subject to start practicing topic-wise MCQs with instant feedback and visual explanations.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Original practice questions designed for exam preparation — not from any official examination paper.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">7</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Subjects</p>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <p className="text-lg font-bold text-white">100%</p>
            <p className="text-[10px] uppercase tracking-wider text-gray-400">Free</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRACTICE_SUBJECTS.map((subject) => {
          const Icon = subject.icon
          return (
            <Link
              key={subject.slug}
              href={`/practice/${subject.slug}`}
              className="group relative cursor-pointer rounded-xl border border-border-primary bg-bg-elevated p-5 no-underline transition-all duration-200 hover:border-border-secondary hover:shadow-lg"
            >
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                style={{ backgroundColor: subject.color }}
              />
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${subject.color}15`, color: subject.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">{subject.name}</h3>
                </div>
                <ChevronRight
                  size={14}
                  className="shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>
              <p className="text-xs leading-relaxed text-text-secondary">{subject.description}</p>
            </Link>
          )
        })}
      </div>

      <AdUnit slot={AD_SLOTS.practiceHubBanner} format="horizontal" className="mt-8" />
    </div>
  )
}
