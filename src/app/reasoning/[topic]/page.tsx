import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'
import { ReasoningTopicTabs } from '@/components/visualizers/reasoning/ReasoningTopicTabs'
import { BloodRelationVisualizer } from '@/components/visualizers/reasoning/BloodRelationVisualizer'
import { DirectionVisualizer } from '@/components/visualizers/reasoning/DirectionVisualizer'
import { CodingDecodingVisualizer } from '@/components/visualizers/reasoning/CodingDecodingVisualizer'
import { PuzzleVisualizer } from '@/components/visualizers/reasoning/PuzzleVisualizer'
import { MirrorWaterImageVisualizer } from '@/components/visualizers/reasoning/MirrorWaterImageVisualizer'
import { CubeDiceVisualizer } from '@/components/visualizers/reasoning/CubeDiceVisualizer'
import { PaperFoldVisualizer } from '@/components/visualizers/reasoning/PaperFoldVisualizer'
import { ClockReasoningVisualizer } from '@/components/visualizers/reasoning/ClockReasoningVisualizer'
import { CountingFigureVisualizer } from '@/components/visualizers/reasoning/CountingFigureVisualizer'

// Existing tabs topic imports
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

// New tabs topic imports
import { orderRankingConcept } from '@/data/reasoning/concepts/order-ranking'
import { dataSufficiencyConcept } from '@/data/reasoning/concepts/data-sufficiency'
import { calendarReasoningConcept } from '@/data/reasoning/concepts/calendar-reasoning'
import { logicalVennDiagramsConcept } from '@/data/reasoning/concepts/logical-venn-diagrams'
import { linearArrangementsConcept } from '@/data/reasoning/concepts/linear-arrangements'
import { criticalReasoningConcept } from '@/data/reasoning/concepts/critical-reasoning'
import { figureSeriesConcept } from '@/data/reasoning/concepts/figure-series'
import { embeddedFiguresConcept } from '@/data/reasoning/concepts/embedded-figures'

import { orderRankingTricks } from '@/data/reasoning/tricks/order-ranking'
import { dataSufficiencyTricks } from '@/data/reasoning/tricks/data-sufficiency'
import { calendarReasoningTricks } from '@/data/reasoning/tricks/calendar-reasoning'
import { logicalVennDiagramsTricks } from '@/data/reasoning/tricks/logical-venn-diagrams'
import { linearArrangementsTricks } from '@/data/reasoning/tricks/linear-arrangements'
import { criticalReasoningTricks } from '@/data/reasoning/tricks/critical-reasoning'
import { figureSeriesTricks } from '@/data/reasoning/tricks/figure-series'
import { embeddedFiguresTricks } from '@/data/reasoning/tricks/embedded-figures'

import { orderRankingProblems } from '@/data/reasoning/problems/order-ranking-problems'
import { dataSufficiencyProblems } from '@/data/reasoning/problems/data-sufficiency-problems'
import { calendarReasoningProblems } from '@/data/reasoning/problems/calendar-reasoning-problems'
import { logicalVennDiagramsProblems } from '@/data/reasoning/problems/logical-venn-diagrams-problems'
import { linearArrangementsProblems } from '@/data/reasoning/problems/linear-arrangements-problems'
import { criticalReasoningProblems } from '@/data/reasoning/problems/critical-reasoning-problems'
import { figureSeriesProblems } from '@/data/reasoning/problems/figure-series-problems'
import { embeddedFiguresProblems } from '@/data/reasoning/problems/embedded-figures-problems'

// Visualizer data imports
import { bloodRelationProblems } from '@/data/reasoning/visualizer/blood-relations'
import { directionProblems } from '@/data/reasoning/visualizer/direction-distance'
import { codingDecodingProblems } from '@/data/reasoning/visualizer/coding-decoding'
import { puzzleProblems } from '@/data/reasoning/visualizer/puzzles'
import { mirrorImageProblems } from '@/data/reasoning/visualizer/mirror-water-images'
import { cubeDiceProblems } from '@/data/reasoning/visualizer/cubes-dice'
import { paperFoldProblems } from '@/data/reasoning/visualizer/paper-folding'
import { clockProblems } from '@/data/reasoning/visualizer/clock-reasoning'
import { countingFigureProblems } from '@/data/reasoning/visualizer/counting-figures'

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
  type:
    | 'blood-relations'
    | 'direction-distance'
    | 'coding-decoding'
    | 'puzzles'
    | 'mirror-water-images'
    | 'cubes-dice'
    | 'paper-folding'
    | 'clock-reasoning'
    | 'counting-figures'
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
  'order-ranking': {
    kind: 'tabs',
    concept: orderRankingConcept,
    tricks: orderRankingTricks,
    problems: orderRankingProblems,
    label: 'Order & Ranking',
    description:
      'Master order and ranking problems for SSC CGL, IBPS PO, and RRB NTPC exams.',
  },
  'data-sufficiency': {
    kind: 'tabs',
    concept: dataSufficiencyConcept,
    tricks: dataSufficiencyTricks,
    problems: dataSufficiencyProblems,
    label: 'Data Sufficiency',
    description:
      'Determine if given statements provide enough data to answer the question for IBPS PO and SBI PO.',
  },
  'calendar-reasoning': {
    kind: 'tabs',
    concept: calendarReasoningConcept,
    tricks: calendarReasoningTricks,
    problems: calendarReasoningProblems,
    label: 'Calendar Reasoning',
    description:
      'Find the day of the week for any date using odd days and leap year rules for SSC CGL and RRB NTPC.',
  },
  'logical-venn-diagrams': {
    kind: 'tabs',
    concept: logicalVennDiagramsConcept,
    tricks: logicalVennDiagramsTricks,
    problems: logicalVennDiagramsProblems,
    label: 'Logical Venn Diagrams',
    description:
      'Identify relationships between groups using 2-circle and 3-circle Venn diagrams for SSC CGL.',
  },
  'linear-arrangements': {
    kind: 'tabs',
    concept: linearArrangementsConcept,
    tricks: linearArrangementsTricks,
    problems: linearArrangementsProblems,
    label: 'Linear Arrangements',
    description:
      'Arrange people in a row with facing and position constraints for IBPS PO and SBI PO.',
  },
  'critical-reasoning': {
    kind: 'tabs',
    concept: criticalReasoningConcept,
    tricks: criticalReasoningTricks,
    problems: criticalReasoningProblems,
    label: 'Critical Reasoning',
    description:
      'Evaluate assumptions, strengthening and weakening arguments for UPSC CSAT and banking exams.',
  },
  'figure-series': {
    kind: 'tabs',
    concept: figureSeriesConcept,
    tricks: figureSeriesTricks,
    problems: figureSeriesProblems,
    label: 'Figure Series',
    description:
      'Identify the next figure in a visual pattern — rotation, addition, subtraction of elements.',
  },
  'embedded-figures': {
    kind: 'tabs',
    concept: embeddedFiguresConcept,
    tricks: embeddedFiguresTricks,
    problems: embeddedFiguresProblems,
    label: 'Embedded Figures',
    description:
      'Find a given figure hidden within a complex figure, accounting for rotation and scaling.',
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
  'mirror-water-images': {
    kind: 'visualizer',
    type: 'mirror-water-images',
    label: 'Mirror & Water Images',
    description:
      'Solve mirror and water image problems with animated flip visualization.',
  },
  'cubes-dice': {
    kind: 'visualizer',
    type: 'cubes-dice',
    label: 'Cubes & Dice',
    description:
      'Solve cube net folding and dice opposite-face problems with visual animation.',
  },
  'paper-folding': {
    kind: 'visualizer',
    type: 'paper-folding',
    label: 'Paper Folding & Cutting',
    description:
      'Watch paper fold, punch, and unfold to reveal hole patterns with animation.',
  },
  'clock-reasoning': {
    kind: 'visualizer',
    type: 'clock-reasoning',
    label: 'Clock Reasoning',
    description:
      'Calculate angles between clock hands with animated clock face visualization.',
  },
  'counting-figures': {
    kind: 'visualizer',
    type: 'counting-figures',
    label: 'Counting Figures',
    description:
      'Count triangles, squares, and lines in complex figures with step-by-step highlights.',
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
  const title = `${data.label} — Concepts, Tricks & Problems | GovtExamsStudy`
  const description = `${data.description} Free concepts, shortcuts, and practice problems for SSC CGL, IBPS PO, and government exams.`
  return {
    title,
    description,
    keywords: [`${data.label}`, `${data.label} tricks`, `${data.label} reasoning`, 'Reasoning & Logic', 'reasoning for SSC CGL', 'logical reasoning tricks', `${data.label} problems`],
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'GovtExamsStudy',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: `https://govtexamsstudy.org/reasoning/${topic}`,
    },
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
      {data.type === 'mirror-water-images' && (
        <MirrorWaterImageVisualizer problem={mirrorImageProblems[0]} />
      )}
      {data.type === 'cubes-dice' && (
        <CubeDiceVisualizer problem={cubeDiceProblems[0]} />
      )}
      {data.type === 'paper-folding' && (
        <PaperFoldVisualizer problem={paperFoldProblems[0]} />
      )}
      {data.type === 'clock-reasoning' && (
        <ClockReasoningVisualizer problem={clockProblems[0]} />
      )}
      {data.type === 'counting-figures' && (
        <CountingFigureVisualizer problem={countingFigureProblems[0]} />
      )}
    </div>
  )
}
