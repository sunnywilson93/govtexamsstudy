import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { HistoryConcept, HistoryRevision, HistoryProblem } from '@/types/history'
import { HistoryTopicTabs } from '@/components/visualizers/history/HistoryTopicTabs'

// Ancient India
import { indusValleyConcept } from '@/data/history/concepts/indus-valley'
import { vedicPeriodConcept } from '@/data/history/concepts/vedic-period'
import { buddhismJainismConcept } from '@/data/history/concepts/buddhism-jainism'
import { mahajanapdasConcept } from '@/data/history/concepts/mahajanapadas'
import { mauryaEmpireConcept } from '@/data/history/concepts/maurya-empire'
import { postMauryaConcept } from '@/data/history/concepts/post-maurya'
import { sangamAgeConcept } from '@/data/history/concepts/sangam-age'
import { guptaEmpireConcept } from '@/data/history/concepts/gupta-empire'
import { southIndianDynastiesConcept } from '@/data/history/concepts/south-indian-dynasties'

import { indusValleyRevision } from '@/data/history/revision/indus-valley'
import { vedicPeriodRevision } from '@/data/history/revision/vedic-period'
import { buddhismJainismRevision } from '@/data/history/revision/buddhism-jainism'
import { mahajanapdasRevision } from '@/data/history/revision/mahajanapadas'
import { mauryaEmpireRevision } from '@/data/history/revision/maurya-empire'
import { postMauryaRevision } from '@/data/history/revision/post-maurya'
import { sangamAgeRevision } from '@/data/history/revision/sangam-age'
import { guptaEmpireRevision } from '@/data/history/revision/gupta-empire'
import { southIndianDynastiesRevision } from '@/data/history/revision/south-indian-dynasties'

import { indusValleyProblems } from '@/data/history/problems/indus-valley-problems'
import { vedicPeriodProblems } from '@/data/history/problems/vedic-period-problems'
import { buddhismJainismProblems } from '@/data/history/problems/buddhism-jainism-problems'
import { mahajanapdasProblems } from '@/data/history/problems/mahajanapadas-problems'
import { mauryaEmpireProblems } from '@/data/history/problems/maurya-empire-problems'
import { postMauryaProblems } from '@/data/history/problems/post-maurya-problems'
import { sangamAgeProblems } from '@/data/history/problems/sangam-age-problems'
import { guptaEmpireProblems } from '@/data/history/problems/gupta-empire-problems'
import { southIndianDynastiesProblems } from '@/data/history/problems/south-indian-dynasties-problems'

// Medieval India
import { delhiSultanateConcept } from '@/data/history/concepts/delhi-sultanate'
import { vijayanagaraBahmaniConcept } from '@/data/history/concepts/vijayanagara-bahmani'
import { bhaktiSufiConcept } from '@/data/history/concepts/bhakti-sufi'
import { mughalEmpireConcept } from '@/data/history/concepts/mughal-empire'
import { marathaEmpireConcept } from '@/data/history/concepts/maratha-empire'
import { medievalKingdomsConcept } from '@/data/history/concepts/medieval-kingdoms'

import { delhiSultanateRevision } from '@/data/history/revision/delhi-sultanate'
import { vijayanagaraBahmaniRevision } from '@/data/history/revision/vijayanagara-bahmani'
import { bhaktiSufiRevision } from '@/data/history/revision/bhakti-sufi'
import { mughalEmpireRevision } from '@/data/history/revision/mughal-empire'
import { marathaEmpireRevision } from '@/data/history/revision/maratha-empire'
import { medievalKingdomsRevision } from '@/data/history/revision/medieval-kingdoms'

import { delhiSultanateProblems } from '@/data/history/problems/delhi-sultanate-problems'
import { vijayanagaraBahmaniProblems } from '@/data/history/problems/vijayanagara-bahmani-problems'
import { bhaktiSufiProblems } from '@/data/history/problems/bhakti-sufi-problems'
import { mughalEmpireProblems } from '@/data/history/problems/mughal-empire-problems'
import { marathaEmpireProblems } from '@/data/history/problems/maratha-empire-problems'
import { medievalKingdomsProblems } from '@/data/history/problems/medieval-kingdoms-problems'

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
  'vedic-period': {
    concept: vedicPeriodConcept,
    revision: vedicPeriodRevision,
    problems: vedicPeriodProblems,
    label: 'Vedic Period',
    description: 'Vedic Period for UPSC, SSC & banking exams. Early and Later Vedic society, polity, literature with notes, revision, and PYQs.',
  },
  'buddhism-jainism': {
    concept: buddhismJainismConcept,
    revision: buddhismJainismRevision,
    problems: buddhismJainismProblems,
    label: 'Buddhism & Jainism',
    description: 'Buddhism and Jainism for government exams. Founders, teachings, councils, sects with notes, revision, and PYQs.',
  },
  mahajanapadas: {
    concept: mahajanapdasConcept,
    revision: mahajanapdasRevision,
    problems: mahajanapdasProblems,
    label: 'Mahajanapadas & Rise of Magadha',
    description: 'Mahajanapadas for UPSC & SSC. 16 kingdoms, Haryanka to Nanda dynasties with notes, revision, and PYQs.',
  },
  'maurya-empire': {
    concept: mauryaEmpireConcept,
    revision: mauryaEmpireRevision,
    problems: mauryaEmpireProblems,
    label: 'Maurya Empire & Ashoka',
    description: 'Maurya Empire for government exams. Chandragupta, Arthashastra, Ashoka edicts, Dhamma with notes, revision, and PYQs.',
  },
  'post-maurya': {
    concept: postMauryaConcept,
    revision: postMauryaRevision,
    problems: postMauryaProblems,
    label: 'Post-Maurya Period',
    description: 'Post-Maurya Period for UPSC & SSC. Sungas, Kanvas, Satavahanas, Indo-Greeks, Kushanas with notes, revision, and PYQs.',
  },
  'sangam-age': {
    concept: sangamAgeConcept,
    revision: sangamAgeRevision,
    problems: sangamAgeProblems,
    label: 'Sangam Age',
    description: 'Sangam Age for government exams. Tamil kingdoms, Sangam literature, Roman trade with notes, revision, and PYQs.',
  },
  'gupta-empire': {
    concept: guptaEmpireConcept,
    revision: guptaEmpireRevision,
    problems: guptaEmpireProblems,
    label: 'Gupta Empire & Golden Age',
    description: 'Gupta Empire for UPSC & SSC. Science, literature, art, Nalanda with notes, revision, and PYQs.',
  },
  'south-indian-dynasties': {
    concept: southIndianDynastiesConcept,
    revision: southIndianDynastiesRevision,
    problems: southIndianDynastiesProblems,
    label: 'South Indian Dynasties',
    description: 'South Indian Dynasties for government exams. Chalukyas, Pallavas, Rashtrakutas, Cholas with notes, revision, and PYQs.',
  },
  'delhi-sultanate': {
    concept: delhiSultanateConcept,
    revision: delhiSultanateRevision,
    problems: delhiSultanateProblems,
    label: 'Delhi Sultanate',
    description: 'Delhi Sultanate for UPSC & SSC. Five dynasties, administration, economy with notes, revision, and PYQs.',
  },
  'vijayanagara-bahmani': {
    concept: vijayanagaraBahmaniConcept,
    revision: vijayanagaraBahmaniRevision,
    problems: vijayanagaraBahmaniProblems,
    label: 'Vijayanagara & Bahmani Kingdoms',
    description: 'Vijayanagara and Bahmani for government exams. Krishnadevaraya, Hampi, Deccan sultanates with notes, revision, and PYQs.',
  },
  'bhakti-sufi': {
    concept: bhaktiSufiConcept,
    revision: bhaktiSufiRevision,
    problems: bhaktiSufiProblems,
    label: 'Bhakti & Sufi Movements',
    description: 'Bhakti and Sufi Movements for UPSC & SSC. Saints, Sufi orders, philosophy, social impact with notes, revision, and PYQs.',
  },
  'mughal-empire': {
    concept: mughalEmpireConcept,
    revision: mughalEmpireRevision,
    problems: mughalEmpireProblems,
    label: 'Mughal Empire',
    description: 'Mughal Empire for government exams. Babur to Aurangzeb, Mansabdari, revenue, culture with notes, revision, and PYQs.',
  },
  'maratha-empire': {
    concept: marathaEmpireConcept,
    revision: marathaEmpireRevision,
    problems: marathaEmpireProblems,
    label: 'Maratha Empire',
    description: 'Maratha Empire for UPSC & SSC. Shivaji, Peshwas, Ashtapradhan, Panipat III with notes, revision, and PYQs.',
  },
  'medieval-kingdoms': {
    concept: medievalKingdomsConcept,
    revision: medievalKingdomsRevision,
    problems: medievalKingdomsProblems,
    label: 'Other Medieval Kingdoms',
    description: 'Medieval Kingdoms for government exams. Rajputs, Sikhs, Ahom kingdom with notes, revision, and PYQs.',
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
