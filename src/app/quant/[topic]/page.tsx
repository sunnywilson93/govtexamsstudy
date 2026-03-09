import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { QuantConcept, QuantTrick, MathProblem } from '@/types/quant'
import { TopicTabs } from '@/components/visualizers/quant/TopicTabs'

import { percentageConcept } from '@/data/quant/concepts/percentage'
import { profitLossConcept } from '@/data/quant/concepts/profit-loss'
import { ratioConcept } from '@/data/quant/concepts/ratio'
import { tsdConcept } from '@/data/quant/concepts/time-speed-distance'
import { timeWorkConcept } from '@/data/quant/concepts/time-work'
import { numberSystemConcept } from '@/data/quant/concepts/number-system'
import { averageConcept } from '@/data/quant/concepts/average'
import { siCiConcept } from '@/data/quant/concepts/simple-compound-interest'
import { mixtureAlligationConcept } from '@/data/quant/concepts/mixture-alligation'
import { mensurationConcept } from '@/data/quant/concepts/mensuration'

import { percentageTricks } from '@/data/quant/tricks/percentage'
import { profitLossTricks } from '@/data/quant/tricks/profit-loss'
import { ratioTricks } from '@/data/quant/tricks/ratio'
import { tsdTricks } from '@/data/quant/tricks/time-speed-distance'
import { timeWorkTricks } from '@/data/quant/tricks/time-work'
import { numberSystemTricks } from '@/data/quant/tricks/number-system'
import { averageTricks } from '@/data/quant/tricks/average'
import { siCiTricks } from '@/data/quant/tricks/simple-compound-interest'
import { mixtureAlligationTricks } from '@/data/quant/tricks/mixture-alligation'
import { mensurationTricks } from '@/data/quant/tricks/mensuration'

import { percentageProblems } from '@/data/quant/problems/percentage-problems'
import { profitLossProblems } from '@/data/quant/problems/profit-loss-problems'
import { ratioProblems } from '@/data/quant/problems/ratio-problems'
import { tsdProblems } from '@/data/quant/problems/time-speed-distance-problems'
import { timeWorkProblems } from '@/data/quant/problems/time-work-problems'
import { numberSystemProblems } from '@/data/quant/problems/number-system-problems'
import { averageProblems } from '@/data/quant/problems/average-problems'
import { siCiProblems } from '@/data/quant/problems/simple-compound-interest-problems'
import { mixtureAlligationProblems } from '@/data/quant/problems/mixture-alligation-problems'
import { mensurationProblems } from '@/data/quant/problems/mensuration-problems'

import { algebraConcept } from '@/data/quant/concepts/algebra'
import { trigonometryConcept } from '@/data/quant/concepts/trigonometry'
import { dataInterpretationConcept } from '@/data/quant/concepts/data-interpretation'
import { statisticsProbabilityConcept } from '@/data/quant/concepts/statistics-probability'
import { surdsConcept } from '@/data/quant/concepts/surds-indices'
import { partnershipConcept } from '@/data/quant/concepts/partnership'
import { agesConcept } from '@/data/quant/concepts/ages'
import { simplificationConcept } from '@/data/quant/concepts/simplification'
import { sequencesSeriesConcept } from '@/data/quant/concepts/sequences-series'

import { algebraTricks } from '@/data/quant/tricks/algebra'
import { trigonometryTricks } from '@/data/quant/tricks/trigonometry'
import { dataInterpretationTricks } from '@/data/quant/tricks/data-interpretation'
import { statisticsProbabilityTricks } from '@/data/quant/tricks/statistics-probability'
import { surdsTricks } from '@/data/quant/tricks/surds-indices'
import { partnershipTricks } from '@/data/quant/tricks/partnership'
import { agesTricks } from '@/data/quant/tricks/ages'
import { simplificationTricks } from '@/data/quant/tricks/simplification'
import { sequencesSeriesTricks } from '@/data/quant/tricks/sequences-series'

import { algebraProblems } from '@/data/quant/problems/algebra-problems'
import { trigonometryProblems } from '@/data/quant/problems/trigonometry-problems'
import { dataInterpretationProblems } from '@/data/quant/problems/data-interpretation-problems'
import { statisticsProbabilityProblems } from '@/data/quant/problems/statistics-probability-problems'
import { surdsProblems } from '@/data/quant/problems/surds-indices-problems'
import { partnershipProblems } from '@/data/quant/problems/partnership-problems'
import { agesProblems } from '@/data/quant/problems/ages-problems'
import { simplificationProblems } from '@/data/quant/problems/simplification-problems'
import { sequencesSeriesProblems } from '@/data/quant/problems/sequences-series-problems'

import { decimalFractionsConcept } from '@/data/quant/concepts/decimal-fractions'
import { squareCubeRootsConcept } from '@/data/quant/concepts/square-cube-roots'
import { chainRuleConcept } from '@/data/quant/concepts/chain-rule'
import { boatsStreamsConcept } from '@/data/quant/concepts/boats-streams'
import { problemsOnTrainsConcept } from '@/data/quant/concepts/problems-on-trains'
import { racesGamesConcept } from '@/data/quant/concepts/races-games'
import { calendarConcept } from '@/data/quant/concepts/calendar'
import { clocksConcept } from '@/data/quant/concepts/clocks'
import { stocksSharesConcept } from '@/data/quant/concepts/stocks-shares'
import { trueDiscountConcept } from '@/data/quant/concepts/true-discount'
import { bankersDiscountConcept } from '@/data/quant/concepts/bankers-discount'

import { decimalFractionsTricks } from '@/data/quant/tricks/decimal-fractions'
import { squareCubeRootsTricks } from '@/data/quant/tricks/square-cube-roots'
import { chainRuleTricks } from '@/data/quant/tricks/chain-rule'
import { boatsStreamsTricks } from '@/data/quant/tricks/boats-streams'
import { problemsOnTrainsTricks } from '@/data/quant/tricks/problems-on-trains'
import { racesGamesTricks } from '@/data/quant/tricks/races-games'
import { calendarTricks } from '@/data/quant/tricks/calendar'
import { clocksTricks } from '@/data/quant/tricks/clocks'
import { stocksSharesTricks } from '@/data/quant/tricks/stocks-shares'
import { trueDiscountTricks } from '@/data/quant/tricks/true-discount'
import { bankersDiscountTricks } from '@/data/quant/tricks/bankers-discount'

import { decimalFractionsProblems } from '@/data/quant/problems/decimal-fractions-problems'
import { squareCubeRootsProblems } from '@/data/quant/problems/square-cube-roots-problems'
import { chainRuleProblems } from '@/data/quant/problems/chain-rule-problems'
import { boatsStreamsProblems } from '@/data/quant/problems/boats-streams-problems'
import { problemsOnTrainsProblems } from '@/data/quant/problems/problems-on-trains-problems'
import { racesGamesProblems } from '@/data/quant/problems/races-games-problems'
import { calendarProblems } from '@/data/quant/problems/calendar-problems'
import { clocksProblems } from '@/data/quant/problems/clocks-problems'
import { stocksSharesProblems } from '@/data/quant/problems/stocks-shares-problems'
import { trueDiscountProblems } from '@/data/quant/problems/true-discount-problems'
import { bankersDiscountProblems } from '@/data/quant/problems/bankers-discount-problems'

import { logarithmsConcept } from '@/data/quant/concepts/logarithms'
import { logarithmsTricks } from '@/data/quant/tricks/logarithms'
import { logarithmsProblems } from '@/data/quant/problems/logarithms-problems'

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
  'number-system': {
    concept: numberSystemConcept,
    tricks: numberSystemTricks,
    problems: numberSystemProblems,
    label: 'Number System',
    description:
      'Master HCF, LCM, remainders, and number properties for SSC CGL and RRB NTPC. Divisibility rules, factorials, and last-digit tricks.',
  },
  average: {
    concept: averageConcept,
    tricks: averageTricks,
    problems: averageProblems,
    label: 'Average',
    description:
      'Learn average concepts for competitive exams. Weighted average, replacement effect, and wrong entry correction with practice problems.',
  },
  'simple-compound-interest': {
    concept: siCiConcept,
    tricks: siCiTricks,
    problems: siCiProblems,
    label: 'Simple & Compound Interest',
    description:
      'Master SI and CI for banking and SSC exams. CI−SI difference shortcut, half-yearly compounding, and Rule of 72.',
  },
  'mixture-alligation': {
    concept: mixtureAlligationConcept,
    tricks: mixtureAlligationTricks,
    problems: mixtureAlligationProblems,
    label: 'Mixture & Alligation',
    description:
      'Learn alligation rule, repeated dilution, and mixture ratio problems for SSC CGL and IBPS PO exams.',
  },
  mensuration: {
    concept: mensurationConcept,
    tricks: mensurationTricks,
    problems: mensurationProblems,
    label: 'Mensuration',
    description:
      'Master 2D and 3D shapes for SSC CGL Tier 2. Area, volume, surface area, and shape conversion problems.',
  },
  algebra: {
    concept: algebraConcept,
    tricks: algebraTricks,
    problems: algebraProblems,
    label: 'Algebra',
    description: 'Linear and quadratic equations, algebraic identities, remainder theorem, and inequalities for SSC CGL and UPSC CSAT.',
  },
  trigonometry: {
    concept: trigonometryConcept,
    tricks: trigonometryTricks,
    problems: trigonometryProblems,
    label: 'Trigonometry',
    description: 'Trig ratios, standard value table, Pythagorean identities, heights and distances for SSC CGL and CDS.',
  },
  'data-interpretation': {
    concept: dataInterpretationConcept,
    tricks: dataInterpretationTricks,
    problems: dataInterpretationProblems,
    label: 'Data Interpretation',
    description: 'Tables, bar charts, pie charts, line graphs, and caselets for SSC CGL Tier 2, IBPS PO, and SBI PO.',
  },
  'statistics-probability': {
    concept: statisticsProbabilityConcept,
    tricks: statisticsProbabilityTricks,
    problems: statisticsProbabilityProblems,
    label: 'Statistics & Probability',
    description: 'Mean, median, mode, variance, probability rules, permutations and combinations for SSC CGL Tier 2 and IBPS PO.',
  },
  'surds-indices': {
    concept: surdsConcept,
    tricks: surdsTricks,
    problems: surdsProblems,
    label: 'Surds & Indices',
    description: 'Laws of indices, fractional exponents, simplifying surds, and rationalisation for SSC CGL, RRB NTPC, and CDS.',
  },
  partnership: {
    concept: partnershipConcept,
    tricks: partnershipTricks,
    problems: partnershipProblems,
    label: 'Partnership',
    description: 'Simple and compound partnership, equivalent capital, working vs sleeping partners for SSC CGL, IBPS PO, and SBI PO.',
  },
  ages: {
    concept: agesConcept,
    tricks: agesTricks,
    problems: agesProblems,
    label: 'Problems on Ages',
    description: 'Present age equations, ratio method, past/future age conditions for SSC CGL, IBPS PO, and all major competitive exams.',
  },
  simplification: {
    concept: simplificationConcept,
    tricks: simplificationTricks,
    problems: simplificationProblems,
    label: 'Simplification',
    description: 'BODMAS rule, approximation techniques, fraction and square root simplification for IBPS PO, SBI PO, and SSC CHSL.',
  },
  'sequences-series': {
    concept: sequencesSeriesConcept,
    tricks: sequencesSeriesTricks,
    problems: sequencesSeriesProblems,
    label: 'Sequences & Series',
    description: 'AP/GP formulas, nth term, sum of series, and special series for SSC CGL, IBPS PO, CDS, and UPSC CSAT.',
  },
  'decimal-fractions': {
    concept: decimalFractionsConcept,
    tricks: decimalFractionsTricks,
    problems: decimalFractionsProblems,
    label: 'Decimal Fractions',
    description: 'Decimal operations, conversion between fractions and decimals, recurring decimals, and approximation for SSC CGL, IBPS PO, and RRB NTPC.',
  },
  'square-cube-roots': {
    concept: squareCubeRootsConcept,
    tricks: squareCubeRootsTricks,
    problems: squareCubeRootsProblems,
    label: 'Square & Cube Roots',
    description: 'Finding square roots, cube roots, estimation methods, and perfect square shortcuts for SSC CGL, RRB NTPC, and banking exams.',
  },
  'chain-rule': {
    concept: chainRuleConcept,
    tricks: chainRuleTricks,
    problems: chainRuleProblems,
    label: 'Chain Rule',
    description: 'Direct and inverse proportions, multi-variable chain rule problems for SSC CGL, RRB NTPC, and other competitive exams.',
  },
  'boats-streams': {
    concept: boatsStreamsConcept,
    tricks: boatsStreamsTricks,
    problems: boatsStreamsProblems,
    label: 'Boats & Streams',
    description: 'Upstream/downstream speed formulas, still water speed, and stream speed problems for SSC CGL, IBPS PO, and RRB NTPC.',
  },
  'problems-on-trains': {
    concept: problemsOnTrainsConcept,
    tricks: problemsOnTrainsTricks,
    problems: problemsOnTrainsProblems,
    label: 'Problems on Trains',
    description: 'Train crossing a pole, platform, and another train — relative speed and length problems for SSC CGL, RRB NTPC, and banking exams.',
  },
  'races-games': {
    concept: racesGamesConcept,
    tricks: racesGamesTricks,
    problems: racesGamesProblems,
    label: 'Races & Games',
    description: 'Race problems — beat by distance/time, head start, three-runner chain, and games of skill for SSC CGL, SSC CHSL, and RRB NTPC.',
  },
  calendar: {
    concept: calendarConcept,
    tricks: calendarTricks,
    problems: calendarProblems,
    label: 'Calendar',
    description: 'Day of the week, odd days method, leap year rules, and Zeller\'s formula for SSC CGL, IBPS PO, and RRB NTPC.',
  },
  clocks: {
    concept: clocksConcept,
    tricks: clocksTricks,
    problems: clocksProblems,
    label: 'Clocks',
    description: 'Angle between clock hands, coincidence and right-angle times, and gain/loss of clock problems for SSC CGL and RRB NTPC.',
  },
  'stocks-shares': {
    concept: stocksSharesConcept,
    tricks: stocksSharesTricks,
    problems: stocksSharesProblems,
    label: 'Stocks & Shares',
    description: 'Face value, market value, dividend, yield, and brokerage calculations for SSC CGL Tier 2 and SBI PO.',
  },
  'true-discount': {
    concept: trueDiscountConcept,
    tricks: trueDiscountTricks,
    problems: trueDiscountProblems,
    label: 'True Discount',
    description: 'Present worth, true discount vs SI, and banker\'s gain concepts for SSC CGL, IBPS PO, and SBI PO.',
  },
  'bankers-discount': {
    concept: bankersDiscountConcept,
    tricks: bankersDiscountTricks,
    problems: bankersDiscountProblems,
    label: "Banker's Discount",
    description: "Banker's discount vs true discount, banker's gain, and face value calculations for SSC CGL Tier 2, IBPS PO, and SBI PO.",
  },
  logarithms: {
    concept: logarithmsConcept,
    tricks: logarithmsTricks,
    problems: logarithmsProblems,
    label: 'Logarithms',
    description: 'Log rules (product, quotient, power), standard values, change of base, and log equations for SSC CGL, SSC CHSL, RRB NTPC, and UPSC CSAT.',
  },
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  const data = TOPIC_DATA[topic]
  if (!data) return {}
  const title = `${data.label} — Concepts, Tricks & Problems | GovtExamsStudy`
  const description = `${data.description} Free concepts, shortcut tricks, and practice problems for SSC CGL, IBPS PO, and government exams.`
  return {
    title,
    description,
    keywords: [`${data.label}`, `${data.label} tricks`, `${data.label} shortcuts`, 'Quantitative Aptitude', 'quant for SSC CGL', 'maths tricks', `${data.label} problems`],
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
      canonical: `https://govtexamsstudy.org/quant/${topic}`,
    },
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
