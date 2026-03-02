import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'
import { ReasoningTopicTabs } from '@/components/visualizers/reasoning/ReasoningTopicTabs'
import { BloodRelationVisualizer } from '@/components/visualizers/reasoning/BloodRelationVisualizer'
import { DirectionVisualizer } from '@/components/visualizers/reasoning/DirectionVisualizer'
import { CodingDecodingVisualizer } from '@/components/visualizers/reasoning/CodingDecodingVisualizer'
import { PuzzleVisualizer } from '@/components/visualizers/reasoning/PuzzleVisualizer'

// Tabs topic imports
import { inequalitiesConcept } from '@/data/reasoning/concepts/inequalities'
import { analogiesConcept } from '@/data/reasoning/concepts/analogies'
import { classificationConcept } from '@/data/reasoning/concepts/classification'
import { statementConclusionsConcept } from '@/data/reasoning/concepts/statement-conclusions'
import { inputOutputConcept } from '@/data/reasoning/concepts/input-output'
import { alphabetTestsConcept } from '@/data/reasoning/concepts/alphabet-tests'
import { causeEffectConcept } from '@/data/reasoning/concepts/cause-effect'

import { inequalitiesTricks } from '@/data/reasoning/tricks/inequalities'
import { analogiesTricks } from '@/data/reasoning/tricks/analogies'
import { classificationTricks } from '@/data/reasoning/tricks/classification'
import { statementConclusionsTricks } from '@/data/reasoning/tricks/statement-conclusions'
import { inputOutputTricks } from '@/data/reasoning/tricks/input-output'
import { alphabetTestsTricks } from '@/data/reasoning/tricks/alphabet-tests'
import { causeEffectTricks } from '@/data/reasoning/tricks/cause-effect'

import { inequalitiesProblems } from '@/data/reasoning/problems/inequalities-problems'
import { analogiesProblems } from '@/data/reasoning/problems/analogies-problems'
import { classificationProblems } from '@/data/reasoning/problems/classification-problems'
import { statementConclusionsProblems } from '@/data/reasoning/problems/statement-conclusions-problems'
import { inputOutputProblems } from '@/data/reasoning/problems/input-output-problems'
import { alphabetTestsProblems } from '@/data/reasoning/problems/alphabet-tests-problems'
import { causeEffectProblems } from '@/data/reasoning/problems/cause-effect-problems'

// Visualizer data imports
import { bloodRelationProblems } from '@/data/reasoning/visualizer/blood-relations'
import { directionProblems } from '@/data/reasoning/visualizer/direction-distance'
import { codingDecodingProblems } from '@/data/reasoning/visualizer/coding-decoding'
import { puzzleProblems } from '@/data/reasoning/visualizer/puzzles'

// ─────────────────────────────────────────────────────────────────────────────
// Topic registry
// ─────────────────────────────────────────────────────────────────────────────

interface TabsTopicData {
  kind: 'tabs'
  concept: ReasoningConcept
  tricks: ReasoningTrick[]
  problems: ReasoningProblem[]
  label: string
  description: string
}

interface VisualizerTopicData {
  kind: 'visualizer'
  type: 'blood-relations' | 'direction-distance' | 'coding-decoding' | 'puzzles'
  label: string
  description: string
}

type TopicEntry = TabsTopicData | VisualizerTopicData

const TOPIC_DATA: Record<string, TopicEntry> = {
  inequalities: {
    kind: 'tabs',
    concept: inequalitiesConcept,
    tricks: inequalitiesTricks,
    problems: inequalitiesProblems,
    label: 'Inequalities',
    description:
      'Master coded inequalities for SSC CGL, IBPS PO, and banking exams. Concepts, shortcuts, and animated step-by-step problems.',
  },
  analogies: {
    kind: 'tabs',
    concept: analogiesConcept,
    tricks: analogiesTricks,
    problems: analogiesProblems,
    label: 'Analogies',
    description:
      'Solve analogy problems for all major government exams. Semantic, symbolic, and alphabetical analogy patterns with tricks.',
  },
  classification: {
    kind: 'tabs',
    concept: classificationConcept,
    tricks: classificationTricks,
    problems: classificationProblems,
    label: 'Classification',
    description:
      'Identify the odd one out using semantic, letter, number, and code patterns for SSC and IBPS exams.',
  },
  'statement-conclusions': {
    kind: 'tabs',
    concept: statementConclusionsConcept,
    tricks: statementConclusionsTricks,
    problems: statementConclusionsProblems,
    label: 'Statement & Conclusions',
    description:
      'Determine valid conclusions from statements for UPSC CSAT, SSC CGL, and banking exams.',
  },
  'input-output': {
    kind: 'tabs',
    concept: inputOutputConcept,
    tricks: inputOutputTricks,
    problems: inputOutputProblems,
    label: 'Input-Output',
    description: 'Decode machine rearrangement patterns for IBPS PO and RRB NTPC exams.',
  },
  'alphabet-tests': {
    kind: 'tabs',
    concept: alphabetTestsConcept,
    tricks: alphabetTestsTricks,
    problems: alphabetTestsProblems,
    label: 'Alphabet Tests',
    description:
      'EJOTY trick, letter series, dictionary order, and word formation problems for SSC and banking exams.',
  },
  'cause-effect': {
    kind: 'tabs',
    concept: causeEffectConcept,
    tricks: causeEffectTricks,
    problems: causeEffectProblems,
    label: 'Cause & Effect',
    description: 'Identify cause-effect relationships for UPSC CSAT and IBPS PO exams.',
  },
  'blood-relations': {
    kind: 'visualizer',
    type: 'blood-relations',
    label: 'Blood Relations',
    description:
      'Solve blood relation problems with animated family tree builder for SSC CGL and IBPS PO.',
  },
  'direction-distance': {
    kind: 'visualizer',
    type: 'direction-distance',
    label: 'Direction & Distance',
    description:
      'Solve direction and distance problems with animated compass path for all major exams.',
  },
  'coding-decoding': {
    kind: 'visualizer',
    type: 'coding-decoding',
    label: 'Coding-Decoding',
    description:
      'Decode cipher patterns with animated letter-by-letter visualization for SSC and IBPS exams.',
  },
  puzzles: {
    kind: 'visualizer',
    type: 'puzzles',
    label: 'Floor & Box Puzzles',
    description:
      'Solve floor and box puzzle arrangements with animated grid for IBPS PO, SBI PO, and SSC CGL.',
  },
}

// ─────────────────────────────────────────────────────────────────────────────

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

export default async function ReasoningTopicPage({ params }: Props) {
  const { topic } = await params
  const data = TOPIC_DATA[topic]

  if (!data) notFound()

  if (data.kind === 'tabs') {
    return (
      <div>
        <h1 className="mb-6 text-2xl font-bold text-text-primary">{data.label}</h1>
        <ReasoningTopicTabs concept={data.concept} tricks={data.tricks} problems={data.problems} />
      </div>
    )
  }

  // Visualizer topics
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text-primary">{data.label}</h1>
      {data.type === 'blood-relations' && (
        <BloodRelationVisualizer problem={bloodRelationProblems[0]} />
      )}
      {data.type === 'direction-distance' && (
        <DirectionVisualizer problem={directionProblems[0]} />
      )}
      {data.type === 'coding-decoding' && (
        <CodingDecodingVisualizer problem={codingDecodingProblems[0]} />
      )}
      {data.type === 'puzzles' && <PuzzleVisualizer problem={puzzleProblems[0]} />}
    </div>
  )
}
