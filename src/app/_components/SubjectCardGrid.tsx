'use client'

import {
  Calculator,
  Brain,
  Landmark,
  Clock,
  Globe2,
  TrendingUp,
  Atom,
} from 'lucide-react'
import { SubjectCard } from '@/components/ui/SubjectCard'
import type { SubjectInfo } from '@/data/subjects'

const SUBJECT_ICONS: Record<string, React.ReactNode> = {
  quant: <Calculator size={22} />,
  reasoning: <Brain size={22} />,
  polity: <Landmark size={22} />,
  history: <Clock size={22} />,
  geography: <Globe2 size={22} />,
  economics: <TrendingUp size={22} />,
  science: <Atom size={22} />,
}

const SUBJECT_HEX: Record<string, string> = {
  blue: '#3b82f6',
  purple: '#a855f7',
  red: '#ef4444',
  amber: '#f59e0b',
  green: '#22c55e',
  teal: '#14b8a6',
  cyan: '#06b6d4',
}

interface SubjectCardGridProps {
  subjects: SubjectInfo[]
}

export function SubjectCardGrid({ subjects }: SubjectCardGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.slug}
          title={subject.name}
          description={subject.description}
          href={`/${subject.slug}`}
          color={SUBJECT_HEX[subject.color] ?? subject.color}
          icon={SUBJECT_ICONS[subject.slug]}
        />
      ))}
    </div>
  )
}
