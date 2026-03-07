import { describe, expect, it } from 'vitest'

import { orderRankingConcept } from '../concepts/order-ranking'
import { orderRankingTricks } from '../tricks/order-ranking'
import { orderRankingProblems } from '../problems/order-ranking-problems'
import { dataSufficiencyConcept } from '../concepts/data-sufficiency'
import { dataSufficiencyTricks } from '../tricks/data-sufficiency'
import { dataSufficiencyProblems } from '../problems/data-sufficiency-problems'
import { calendarReasoningConcept } from '../concepts/calendar-reasoning'
import { calendarReasoningTricks } from '../tricks/calendar-reasoning'
import { calendarReasoningProblems } from '../problems/calendar-reasoning-problems'
import { logicalVennDiagramsConcept } from '../concepts/logical-venn-diagrams'
import { logicalVennDiagramsTricks } from '../tricks/logical-venn-diagrams'
import { logicalVennDiagramsProblems } from '../problems/logical-venn-diagrams-problems'
import { linearArrangementsConcept } from '../concepts/linear-arrangements'
import { linearArrangementsTricks } from '../tricks/linear-arrangements'
import { linearArrangementsProblems } from '../problems/linear-arrangements-problems'
import { criticalReasoningConcept } from '../concepts/critical-reasoning'
import { criticalReasoningTricks } from '../tricks/critical-reasoning'
import { criticalReasoningProblems } from '../problems/critical-reasoning-problems'
import { figureSeriesConcept } from '../concepts/figure-series'
import { figureSeriesTricks } from '../tricks/figure-series'
import { figureSeriesProblems } from '../problems/figure-series-problems'
import { embeddedFiguresConcept } from '../concepts/embedded-figures'
import { embeddedFiguresTricks } from '../tricks/embedded-figures'
import { embeddedFiguresProblems } from '../problems/embedded-figures-problems'

import { mirrorImageProblems } from '../visualizer/mirror-water-images'
import { cubeDiceProblems } from '../visualizer/cubes-dice'
import { paperFoldProblems } from '../visualizer/paper-folding'
import { clockProblems } from '../visualizer/clock-reasoning'
import { countingFigureProblems } from '../visualizer/counting-figures'

import { inequalitiesProblems } from '../problems/inequalities-problems'
import { analogiesProblems } from '../problems/analogies-problems'
import { classificationProblems } from '../problems/classification-problems'
import { alphabetTestsProblems } from '../problems/alphabet-tests-problems'
import { inputOutputProblems } from '../problems/input-output-problems'
import { statementConclusionsProblems } from '../problems/statement-conclusions-problems'
import { causeEffectProblems } from '../problems/cause-effect-problems'

describe('new tabs topics data', () => {
  const tabsTopics = [
    { name: 'order-ranking', concept: orderRankingConcept, tricks: orderRankingTricks, problems: orderRankingProblems },
    { name: 'data-sufficiency', concept: dataSufficiencyConcept, tricks: dataSufficiencyTricks, problems: dataSufficiencyProblems },
    { name: 'calendar-reasoning', concept: calendarReasoningConcept, tricks: calendarReasoningTricks, problems: calendarReasoningProblems },
    { name: 'logical-venn-diagrams', concept: logicalVennDiagramsConcept, tricks: logicalVennDiagramsTricks, problems: logicalVennDiagramsProblems },
    { name: 'linear-arrangements', concept: linearArrangementsConcept, tricks: linearArrangementsTricks, problems: linearArrangementsProblems },
    { name: 'critical-reasoning', concept: criticalReasoningConcept, tricks: criticalReasoningTricks, problems: criticalReasoningProblems },
    { name: 'figure-series', concept: figureSeriesConcept, tricks: figureSeriesTricks, problems: figureSeriesProblems },
    { name: 'embedded-figures', concept: embeddedFiguresConcept, tricks: embeddedFiguresTricks, problems: embeddedFiguresProblems },
  ]

  for (const { name, concept, tricks, problems } of tabsTopics) {
    describe(name, () => {
      it('has concept with correct topic', () => {
        expect(concept.topic).toBe(name)
        expect(concept.rules.length).toBeGreaterThanOrEqual(3)
      })
      it('has 5 tricks', () => {
        expect(tricks).toHaveLength(5)
      })
      it('has 30 problems', () => {
        expect(problems).toHaveLength(30)
      })
    })
  }
})

describe('new visualizer topics data', () => {
  it('mirror-water-images has 5 problems', () => { expect(mirrorImageProblems).toHaveLength(5) })
  it('cubes-dice has 5 problems', () => { expect(cubeDiceProblems).toHaveLength(5) })
  it('paper-folding has 5 problems', () => { expect(paperFoldProblems).toHaveLength(5) })
  it('clock-reasoning has 5 problems', () => { expect(clockProblems).toHaveLength(5) })
  it('counting-figures has 5 problems', () => { expect(countingFigureProblems).toHaveLength(5) })
})

describe('expanded existing topics', () => {
  it('inequalities has 30 problems', () => { expect(inequalitiesProblems).toHaveLength(30) })
  it('analogies has 30 problems', () => { expect(analogiesProblems).toHaveLength(30) })
  it('classification has 30 problems', () => { expect(classificationProblems).toHaveLength(30) })
  it('alphabet-tests has 30 problems', () => { expect(alphabetTestsProblems).toHaveLength(30) })
  it('input-output has 30 problems', () => { expect(inputOutputProblems).toHaveLength(30) })
  it('statement-conclusions has 30 problems', () => { expect(statementConclusionsProblems).toHaveLength(30) })
  it('cause-effect has 30 problems', () => { expect(causeEffectProblems).toHaveLength(30) })
})
