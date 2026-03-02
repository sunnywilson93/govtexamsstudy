# Reasoning & Logic — Complete Topic Expansion Design

**Date:** 2026-03-02
**Status:** Approved
**Exams targeted:** SSC CGL/CHSL, IBPS PO/Clerk, SBI PO, RRB NTPC, UPSC CSAT

---

## Goal

Expand the Reasoning & Logic section from 3 placeholder visualizers to 14 fully interactive topics covering all major Indian government exam syllabus areas. Use a hybrid model: bespoke animated solvers for high-visualizer topics; Concepts + Tricks + Problems tabs (reusing quant infrastructure) for pattern-based verbal/logical topics.

---

## Architecture

### Experience Model

| Experience | Topics | Count |
|---|---|---|
| Bespoke interactive visualizers | seating ✅, syllogism ✅, series ✅, blood-relations, direction-distance, coding-decoding, puzzles | 7 |
| Concepts + Tricks + Problems tabs | inequalities, analogies, classification, statement-conclusions, input-output, alphabet-tests, cause-effect | 7 |

### Routing

- 3 existing standalone routes unchanged: `/reasoning/seating`, `/reasoning/syllogism`, `/reasoning/series`
- 11 new topics via `/reasoning/[topic]` dynamic route
  - `REASONING_TOPIC_DATA` record keyed by slug
  - Visualizer slugs render bespoke component
  - Tabs slugs render `ReasoningTopicTabs`
  - `generateStaticParams()` = `Object.keys(REASONING_TOPIC_DATA)`
  - `notFound()` for unknown slugs
  - `generateMetadata` for per-topic SEO

### Component Structure

```
src/components/visualizers/reasoning/
  BloodRelationVisualizer.tsx       new — SVG family tree, step-by-step node reveal
  DirectionVisualizer.tsx           new — SVG compass grid, animated path drawing
  CodingDecodingVisualizer.tsx      new — cipher table + letter-highlight animation
  PuzzleVisualizer.tsx              new — floor/box grid, clue-by-clue placement
  ReasoningTopicTabs.tsx            new — mirrors quant TopicTabs
  ReasoningConceptPanel.tsx         new — mirrors ConceptPanel ("rules" instead of "formulas")
  ReasoningTricksPanel.tsx          new — mirrors TricksPanel
  SeatingVisualizer.tsx             existing, unchanged
  SyllogismVisualizer.tsx           existing, unchanged
  SeriesVisualizer.tsx              existing, unchanged
```

---

## Data Models

### New types added to `src/types/reasoning.ts`

```ts
export type ReasoningTopic =
  | "blood-relations"
  | "direction-distance"
  | "coding-decoding"
  | "puzzles"
  | "inequalities"
  | "analogies"
  | "classification"
  | "statement-conclusions"
  | "input-output"
  | "alphabet-tests"
  | "cause-effect"

// Tabs topics — mirrors QuantConcept / QuantTrick / MathProblem

export interface ReasoningRule {
  name: string
  rule: string          // "formula" renamed to "rule" for reasoning context
  whenToUse: string
}

export interface ReasoningConcept {
  topic: ReasoningTopic
  title: string
  description: string
  keyIdea: string
  rules: ReasoningRule[]
  examTags: string[]
  examRelevance: string
}

export interface ReasoningTrick {
  id: string
  topic: ReasoningTopic
  type: "pattern-shortcut" | "elimination"
  title: string
  description: string
  example: { problem: string; solution: string }
  timeSaved?: string
}

export interface ReasoningStep {
  id: number
  operation: string
  expression: string
  result: string
  explanation: string
}

export interface ReasoningProblem {
  id: string
  topic: ReasoningTopic
  title: string
  question: string
  steps: ReasoningStep[]
  answer: string
  difficulty: "easy" | "medium" | "hard"
}

// Visualizer topics

export interface BloodRelationNode {
  id: string
  name: string
  gender: "M" | "F"
  generation: number    // 0=query person, -1=parent, +1=child
}

export interface BloodRelationEdge {
  from: string
  to: string
  label: string         // "father of", "sister of", etc.
}

export interface BloodRelationProblem {
  id: string
  question: string
  nodes: BloodRelationNode[]
  edges: BloodRelationEdge[]
  steps: string[]       // text explanation revealed per step
  answer: string
}

export interface DirectionStep {
  id: number
  direction: "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW"
  distance: number
  label: string
}

export interface DirectionProblem {
  id: string
  question: string
  steps: DirectionStep[]
  finalDirection: string
  finalDistance: number
  answer: string
}

export interface CodingRule {
  input: string
  output: string
  pattern: string
}

export interface CodingDecodingProblem {
  id: string
  type: "letter-shift" | "word-mapping" | "symbol-substitution"
  question: string
  codingRules: CodingRule[]
  steps: string[]
  answer: string
}

export interface PuzzleCell {
  position: number      // 1-based; for floors: 1=bottom, N=top
  occupant: string | null
}

export interface PuzzleProblem {
  id: string
  type: "floor" | "box"
  totalPositions: number
  clues: string[]
  steps: string[]       // each step resolves one entity placement
  solution: PuzzleCell[]
}
```

### Data File Layout

```
src/data/reasoning/
  concepts/
    inequalities.ts             → export const inequalitiesConcept: ReasoningConcept
    analogies.ts
    classification.ts
    statement-conclusions.ts
    input-output.ts
    alphabet-tests.ts
    cause-effect.ts
  tricks/
    inequalities.ts             → export const inequalitiesTricks: ReasoningTrick[]  (5 per topic)
    analogies.ts
    classification.ts
    statement-conclusions.ts
    input-output.ts
    alphabet-tests.ts
    cause-effect.ts
  problems/
    inequalities-problems.ts    → export const inequalitiesProblems: ReasoningProblem[]  (5 per topic)
    analogies-problems.ts
    classification-problems.ts
    statement-conclusions-problems.ts
    input-output-problems.ts
    alphabet-tests-problems.ts
    cause-effect-problems.ts
  visualizer/
    blood-relations.ts          → export const bloodRelationProblems: BloodRelationProblem[]
    direction-distance.ts       → export const directionProblems: DirectionProblem[]
    coding-decoding.ts          → export const codingDecodingProblems: CodingDecodingProblem[]
    puzzles.ts                  → export const puzzleProblems: PuzzleProblem[]
```

Each data file: exactly 5 entries.

---

## Visualizer Interaction Designs

### Blood Relations (`/reasoning/blood-relations`)

**Interaction:** Step-by-step family tree builder on SVG canvas.
- Nodes = circles with name + gender icon (♂/♀), laid out in horizontal generation bands
- Edges = labeled arrows (`motion.line` + arrowhead)
- Each step reveals the next node + edge cumulatively
- Final step highlights the answer path in purple (`#8b5cf6`)
- `StepController` drives current step index

### Direction & Distance (`/reasoning/direction-distance`)

**Interaction:** Animated path drawing on compass grid.
- SVG with N/S/E/W grid lines; compass rose fixed top-right corner
- Each step draws next segment via `motion.line`; dot `motion.div` moves along path
- Direction labels appear beside each segment
- Final step: dashed straight line from origin to endpoint; distance + direction label shown
- Scale auto-fits so full path fills the canvas

### Coding-Decoding (`/reasoning/coding-decoding`)

**Interaction:** Cipher table reveal + letter-by-letter decode animation.
- Step 1: Coding rule table appears row by row
- Subsequent steps: highlight box slides across input letters; coded equivalent lights up in table
- Types: `letter-shift` (Caesar-style), `word-mapping`, `symbol-substitution`
- Two horizontal strips (input row / coded row) with synchronized animated highlight

### Floor & Box Puzzles (`/reasoning/puzzles`)

**Interaction:** Grid of positions with clue-by-clue entity placement.
- Vertical stack of cells (floor numbers left-labeled); for boxes: horizontal row
- Each step: one person/item animates into their cell via `motion.div` layout animation
- Eliminated cells show red ✗ chip; confirmed cells show green chip
- `steps[]` array drives the sequence; `solution[]` is the final state

---

## Hub Page (`/reasoning/page.tsx`)

Three sections using the same `SECTIONS` array pattern as quant:

```
Section 1: "Interactive Visualizers"
  subheading: "Step-by-step animated problem solvers"
  7 topics (seating, blood-relations, direction-distance, coding-decoding,
            puzzles, syllogism, series) — hasTabs: false

Section 2: "Verbal Reasoning"
  subheading: "High-frequency topics for SSC, IBPS, RRB"
  5 topics (inequalities, analogies, classification, alphabet-tests,
            input-output) — hasTabs: true

Section 3: "Logical Reasoning"
  subheading: "Critical thinking topics for UPSC CSAT and banking"
  2 topics (statement-conclusions, cause-effect) — hasTabs: true
```

---

## Layout (`/reasoning/layout.tsx`)

`SubjectLayout` with `subjectColor="#8b5cf6"`, `showHeading=false`, 14 sidebar links in 3 groups: Visualizers / Verbal / Logical.

---

## Files to Create / Modify

| Action | File |
|---|---|
| Modify | `src/types/reasoning.ts` — add 11 new types |
| Create | `src/app/reasoning/[topic]/page.tsx` — dynamic route, REASONING_TOPIC_DATA |
| Modify | `src/app/reasoning/layout.tsx` — add 11 new sidebar links |
| Modify | `src/app/reasoning/page.tsx` — replace current content with 3-section SECTIONS layout |
| Modify | `src/app/sitemap.ts` — add 11 new `/reasoning/*` routes at priority 0.6 |
| Create | `src/components/visualizers/reasoning/BloodRelationVisualizer.tsx` |
| Create | `src/components/visualizers/reasoning/DirectionVisualizer.tsx` |
| Create | `src/components/visualizers/reasoning/CodingDecodingVisualizer.tsx` |
| Create | `src/components/visualizers/reasoning/PuzzleVisualizer.tsx` |
| Create | `src/components/visualizers/reasoning/ReasoningTopicTabs.tsx` |
| Create | `src/components/visualizers/reasoning/ReasoningConceptPanel.tsx` |
| Create | `src/components/visualizers/reasoning/ReasoningTricksPanel.tsx` |
| Create | `src/data/reasoning/concepts/{7 files}.ts` |
| Create | `src/data/reasoning/tricks/{7 files}.ts` |
| Create | `src/data/reasoning/problems/{7 files}.ts` |
| Create | `src/data/reasoning/visualizer/{4 files}.ts` |

Total new files: ~36. Modifications: 4.
