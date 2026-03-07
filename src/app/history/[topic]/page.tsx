import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'
import { HistoryTopicTabs } from '@/components/visualizers/history/HistoryTopicTabs'

import { indusValleyConcept } from '@/data/history/concepts/indus-valley'
import { indusValleyRevision } from '@/data/history/revision/indus-valley'
import { indusValleyProblems } from '@/data/history/problems/indus-valley-problems'

interface TopicData {
  concept: HistoryConcept
  revision: HistoryRevision
  problems: HistoryProblem[]
  label: string
  description: string
}

const TOPIC_DATA: Record<string, TopicData> = {
  'indus-valley': {
    concept: indusValleyConcept,
    revision: indusValleyRevision,
    problems: indusValleyProblems,
    label: 'Indus Valley Civilization',
    description:
      'Indus Valley Civilization for UPSC, SSC & banking exams. Notes, revision points, and previous year questions.',
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
    title: `${data.label} — Notes, Revision & PYQs | GovtExams`,
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
      <HistoryTopicTabs concept={data.concept} revision={data.revision} problems={data.problems} />
    </div>
  )
}
