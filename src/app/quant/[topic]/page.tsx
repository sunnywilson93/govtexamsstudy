import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { QuantConcept, QuantTrick, MathProblem } from '@/types/quant'
import { TopicTabs } from '@/components/visualizers/quant/TopicTabs'

import { percentageConcept } from '@/data/quant/concepts/percentage'
import { profitLossConcept } from '@/data/quant/concepts/profit-loss'
import { ratioConcept } from '@/data/quant/concepts/ratio'
import { tsdConcept } from '@/data/quant/concepts/time-speed-distance'
import { timeWorkConcept } from '@/data/quant/concepts/time-work'

import { percentageTricks } from '@/data/quant/tricks/percentage'
import { profitLossTricks } from '@/data/quant/tricks/profit-loss'
import { ratioTricks } from '@/data/quant/tricks/ratio'
import { tsdTricks } from '@/data/quant/tricks/time-speed-distance'
import { timeWorkTricks } from '@/data/quant/tricks/time-work'

import { percentageProblems } from '@/data/quant/problems/percentage-problems'
import { profitLossProblems } from '@/data/quant/problems/profit-loss-problems'
import { ratioProblems } from '@/data/quant/problems/ratio-problems'
import { tsdProblems } from '@/data/quant/problems/time-speed-distance-problems'
import { timeWorkProblems } from '@/data/quant/problems/time-work-problems'

interface TopicData {
  concept: QuantConcept
  tricks: QuantTrick[]
  problems: MathProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  percentage: {
    concept: percentageConcept,
    tricks: percentageTricks,
    problems: percentageProblems,
    label: 'Percentage',
    description:
      'Master percentage for SSC CGL and banking exams. Concepts, shortcut tricks, and animated step-by-step problems.',
  },
  'profit-loss': {
    concept: profitLossConcept,
    tricks: profitLossTricks,
    problems: profitLossProblems,
    label: 'Profit, Loss & Discount',
    description:
      'Learn profit and loss for competitive exams. CP, SP, discount formulas, tricks, and practice problems.',
  },
  ratio: {
    concept: ratioConcept,
    tricks: ratioTricks,
    problems: ratioProblems,
    label: 'Ratio & Proportion',
    description:
      'Master ratio and proportion for SSC and banking exams. k-method, mean proportion, and practice problems.',
  },
  'time-speed-distance': {
    concept: tsdConcept,
    tricks: tsdTricks,
    problems: tsdProblems,
    label: 'Time, Speed & Distance',
    description:
      'Learn TSD for government exams. Average speed formula, trains, boats, and race problems with shortcuts.',
  },
  'time-work': {
    concept: timeWorkConcept,
    tricks: timeWorkTricks,
    problems: timeWorkProblems,
    label: 'Time & Work',
    description:
      'Master Time & Work and Pipes & Cisterns for SSC and IBPS exams. LCM method, efficiency tricks, and problems.',
  },
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  const data = TOPIC_DATA[topic]
  if (!data) return {}
  return {
    title: `${data.label} — Concepts, Tricks & Problems | GovtExams`,
    description: data.description,
  }
}

export function generateStaticParams() {
  return Object.keys(TOPIC_DATA).map((topic) => ({ topic }))
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params
  const data = TOPIC_DATA[topic]

  if (!data) notFound()

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text-primary">{data.label}</h1>
      <TopicTabs concept={data.concept} tricks={data.tricks} problems={data.problems} />
    </div>
  )
}
