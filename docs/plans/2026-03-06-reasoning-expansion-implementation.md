# Reasoning Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand reasoning from 14 to 27 topics, deepen existing topics from 5 to 15 problems, add 5 new bespoke visualizers and a Non-Verbal Reasoning section.

**Architecture:** Extends existing discriminated-union TOPIC_DATA pattern in `reasoning/[topic]/page.tsx`. New tabs topics reuse `ReasoningConcept/Trick/Problem` types. New visualizers get dedicated types and components following the blood-relations/direction-distance pattern. All data as typed TS files — no CMS.

**Tech Stack:** Next.js App Router, TypeScript, Framer Motion, Zustand (useVisualizerStore), Vitest + RTL

**Design doc:** `docs/plans/2026-03-06-reasoning-expansion-design.md`

---

## Task 1: Add New Types to `src/types/reasoning.ts`

**Files:**
- Modify: `src/types/reasoning.ts`

**Step 1: Expand `ReasoningTopic` union**

Add 13 new slugs to the existing union at line 79-90:

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
  // New tabs topics
  | "order-ranking"
  | "data-sufficiency"
  | "calendar-reasoning"
  | "logical-venn-diagrams"
  | "linear-arrangements"
  | "critical-reasoning"
  | "figure-series"
  | "embedded-figures"
  // New visualizer topics (used in concept/trick files if needed)
  | "mirror-water-images"
  | "cubes-dice"
  | "paper-folding"
  | "clock-reasoning"
  | "counting-figures"
```

**Step 2: Add 5 new visualizer type interfaces**

Append after line 204 (after `PuzzleProblem`):

```ts
// ── Mirror & Water Images ─────────────────────────────────────

export interface MirrorImageProblem {
  id: string
  type: "mirror" | "water"
  question: string
  originalGrid: string[][]
  transformedGrid: string[][]
  steps: string[]
  answer: string
}

// ── Cubes & Dice ──────────────────────────────────────────────

export interface CubeFace {
  position: number
  content: string
  color: string
}

export interface CubeDiceProblem {
  id: string
  type: "cube-fold" | "dice-opposite" | "dice-adjacent"
  question: string
  faces: CubeFace[]
  steps: string[]
  answer: string
}

// ── Paper Folding & Cutting ───────────────────────────────────

export interface FoldStep {
  direction: "left" | "right" | "top" | "bottom" | "diagonal"
  description: string
}

export interface PaperFoldProblem {
  id: string
  question: string
  folds: FoldStep[]
  punchPosition: { x: number; y: number }
  unfoldedResult: string
  steps: string[]
  answer: string
}

// ── Clock Reasoning ───────────────────────────────────────────

export interface ClockProblem {
  id: string
  type: "angle" | "time-gain-loss" | "mirror"
  question: string
  hourAngle: number
  minuteAngle: number
  steps: string[]
  answer: string
}

// ── Counting Figures ──────────────────────────────────────────

export interface FigureHighlight {
  id: string
  path: string
  label: string
}

export interface CountingFigureProblem {
  id: string
  type: "triangles" | "squares" | "lines" | "mixed"
  question: string
  svgPath: string
  highlights: FigureHighlight[]
  steps: string[]
  answer: string
  totalCount: number
}
```

**Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: Clean (no errors)

**Step 4: Commit**

```bash
git add src/types/reasoning.ts
git commit -m "feat(reasoning): add 13 new topic slugs + 5 visualizer type interfaces"
```

---

## Task 2: Create Data Files for 8 New Tabs Topics

Each new tabs topic needs 3 files. Follow the exact pattern of `src/data/reasoning/concepts/inequalities.ts`, `tricks/inequalities.ts`, `problems/inequalities-problems.ts`.

**Files to create (24 total):**

```
src/data/reasoning/concepts/order-ranking.ts
src/data/reasoning/concepts/data-sufficiency.ts
src/data/reasoning/concepts/calendar-reasoning.ts
src/data/reasoning/concepts/logical-venn-diagrams.ts
src/data/reasoning/concepts/linear-arrangements.ts
src/data/reasoning/concepts/critical-reasoning.ts
src/data/reasoning/concepts/figure-series.ts
src/data/reasoning/concepts/embedded-figures.ts

src/data/reasoning/tricks/order-ranking.ts
src/data/reasoning/tricks/data-sufficiency.ts
src/data/reasoning/tricks/calendar-reasoning.ts
src/data/reasoning/tricks/logical-venn-diagrams.ts
src/data/reasoning/tricks/linear-arrangements.ts
src/data/reasoning/tricks/critical-reasoning.ts
src/data/reasoning/tricks/figure-series.ts
src/data/reasoning/tricks/embedded-figures.ts

src/data/reasoning/problems/order-ranking-problems.ts
src/data/reasoning/problems/data-sufficiency-problems.ts
src/data/reasoning/problems/calendar-reasoning-problems.ts
src/data/reasoning/problems/logical-venn-diagrams-problems.ts
src/data/reasoning/problems/linear-arrangements-problems.ts
src/data/reasoning/problems/critical-reasoning-problems.ts
src/data/reasoning/problems/figure-series-problems.ts
src/data/reasoning/problems/embedded-figures-problems.ts
```

**Pattern for each concept file** (example: order-ranking):

```ts
import type { ReasoningConcept } from "@/types/reasoning"

export const orderRankingConcept: ReasoningConcept = {
  topic: "order-ranking",
  title: "Order & Ranking",
  description: "...",
  keyIdea: "...",
  rules: [
    { name: "...", rule: "...", whenToUse: "..." },
    // 4-5 rules total
  ],
  examTags: ["SSC CGL", "IBPS PO", "RRB NTPC", ...],
  examRelevance: "...",
}
```

**Pattern for each tricks file** (5 tricks per topic):

```ts
import type { ReasoningTrick } from "@/types/reasoning"

export const orderRankingTricks: ReasoningTrick[] = [
  {
    id: "or-t1",
    topic: "order-ranking",
    type: "pattern-shortcut",
    title: "...",
    description: "...",
    example: { problem: "...", solution: "..." },
    timeSaved: "...",
  },
  // 4 more tricks
]
```

**Pattern for each problems file** (15 problems per topic — 5 easy, 5 medium, 5 hard):

```ts
import type { ReasoningProblem } from "@/types/reasoning"

export const orderRankingProblems: ReasoningProblem[] = [
  {
    id: "or-p1",
    topic: "order-ranking",
    title: "...",
    question: "...",
    steps: [
      { id: 1, operation: "...", expression: "...", result: "...", explanation: "..." },
      // 3-5 steps per problem
    ],
    answer: "...",
    difficulty: "easy",
  },
  // 14 more problems (5 easy, 5 medium, 5 hard)
]
```

**Export naming convention** (camelCase of slug):
- `order-ranking` → `orderRankingConcept`, `orderRankingTricks`, `orderRankingProblems`
- `data-sufficiency` → `dataSufficiencyConcept`, `dataSufficiencyTricks`, `dataSufficiencyProblems`
- `calendar-reasoning` → `calendarReasoningConcept`, `calendarReasoningTricks`, `calendarReasoningProblems`
- `logical-venn-diagrams` → `logicalVennDiagramsConcept`, `logicalVennDiagramsTricks`, `logicalVennDiagramsProblems`
- `linear-arrangements` → `linearArrangementsConcept`, `linearArrangementsTricks`, `linearArrangementsProblems`
- `critical-reasoning` → `criticalReasoningConcept`, `criticalReasoningTricks`, `criticalReasoningProblems`
- `figure-series` → `figureSeriesConcept`, `figureSeriesTricks`, `figureSeriesProblems`
- `embedded-figures` → `embeddedFiguresConcept`, `embeddedFiguresTricks`, `embeddedFiguresProblems`

**Content guidance per topic:**

| Topic | Key concepts | Exam focus |
|-------|-------------|-----------|
| order-ranking | Left/right position from top/bottom, Total = Left + Right - 1, between counting | SSC CGL (3-4 Qs), IBPS |
| data-sufficiency | When is data sufficient alone / combined / neither, statement analysis order | IBPS PO (5 Qs), SBI PO |
| calendar-reasoning | Odd days method, leap year rules, day calculation for any date | SSC CGL, RRB NTPC |
| logical-venn-diagrams | 2-circle and 3-circle membership diagrams, region identification | SSC CGL (2-3 Qs) |
| linear-arrangements | Left-right, facing direction, conditions with gaps, variable assignments | IBPS PO (5-set), SBI PO |
| critical-reasoning | Assumptions, strengthening/weakening, course of action | UPSC CSAT, banking |
| figure-series | Next figure in pattern, rotation, addition, subtraction of elements | SSC CGL non-verbal |
| embedded-figures | Finding a figure hidden in a complex figure, rotation matching | SSC CGL non-verbal |

**Step: Verify all 24 files compile**

Run: `npx tsc --noEmit`
Expected: Clean

**Step: Commit**

```bash
git add src/data/reasoning/concepts/ src/data/reasoning/tricks/ src/data/reasoning/problems/
git commit -m "feat(reasoning): add data files for 8 new tabs topics (concept+tricks+15 problems each)"
```

---

## Task 3: Create Data Files for 5 New Visualizer Topics

**Files to create (5 total):**

```
src/data/reasoning/visualizer/mirror-water-images.ts
src/data/reasoning/visualizer/cubes-dice.ts
src/data/reasoning/visualizer/paper-folding.ts
src/data/reasoning/visualizer/clock-reasoning.ts
src/data/reasoning/visualizer/counting-figures.ts
```

**Pattern** (example: mirror-water-images):

```ts
import type { MirrorImageProblem } from "@/types/reasoning"

export const mirrorImageProblems: MirrorImageProblem[] = [
  {
    id: "mirror-p1",
    type: "mirror",
    question: "What is the mirror image of the following figure when a vertical mirror is placed to the right?",
    originalGrid: [
      ["A", "B"],
      ["C", "D"],
    ],
    transformedGrid: [
      ["B", "A"],
      ["D", "C"],
    ],
    steps: [
      "Observe the original 2x2 grid: A B / C D",
      "Place a vertical mirror on the right side",
      "Each row reverses left-to-right",
      "Result: B A / D C",
    ],
    answer: "B A / D C",
  },
  // 4 more problems
]
```

**Export names:**
- `mirrorImageProblems: MirrorImageProblem[]`
- `cubeDiceProblems: CubeDiceProblem[]`
- `paperFoldProblems: PaperFoldProblem[]`
- `clockProblems: ClockProblem[]`
- `countingFigureProblems: CountingFigureProblem[]`

**5 problems each**, graded easy → hard.

**Content guidance:**

| Topic | Problem types |
|-------|--------------|
| mirror-water-images | 2 mirror (vertical flip), 2 water (horizontal flip), 1 combined |
| cubes-dice | 2 dice-opposite, 2 dice-adjacent, 1 cube-fold |
| paper-folding | 2 single-fold, 2 double-fold, 1 diagonal-fold |
| clock-reasoning | 2 angle calculation, 2 time-gain-loss, 1 mirror time |
| counting-figures | 2 triangles, 1 squares, 1 lines, 1 mixed |

**Step: Verify**

Run: `npx tsc --noEmit`
Expected: Clean

**Step: Commit**

```bash
git add src/data/reasoning/visualizer/
git commit -m "feat(reasoning): add data files for 5 new visualizer topics (5 problems each)"
```

---

## Task 4: Expand Existing Problem Files from 5 to 15

**Files to modify (9 total):**

```
src/data/reasoning/problems/inequalities-problems.ts       (5→15)
src/data/reasoning/problems/analogies-problems.ts          (5→15)
src/data/reasoning/problems/classification-problems.ts     (5→15)
src/data/reasoning/problems/alphabet-tests-problems.ts     (5→15)
src/data/reasoning/problems/input-output-problems.ts       (5→15)
src/data/reasoning/problems/statement-conclusions-problems.ts (5→15)
src/data/reasoning/problems/cause-effect-problems.ts       (5→15)
```

Also top up standalone visualizer data:
```
src/data/reasoning/seating.ts (or wherever seating problems live)  (2→5)
src/data/reasoning/syllogism.ts (or wherever syllogism problems live) (3→5)
```

**For each tabs topic problems file:**
- Read the existing 5 problems first
- Append 10 new problems after the last entry
- New IDs continue from existing sequence (e.g., `ineq-p6` through `ineq-p15`)
- Difficulty distribution: problems 6-8 = "easy", 9-12 = "medium", 13-15 = "hard"
- Each problem needs 3-5 steps with operation/expression/result/explanation

**For seating/syllogism:**
- Find where problems are defined (check `src/data/reasoning/seating.ts` or `src/app/reasoning/seating/`)
- Add problems to reach 5 total

**Step: Verify**

Run: `npx tsc --noEmit`
Expected: Clean

**Step: Commit**

```bash
git add src/data/reasoning/problems/ src/data/reasoning/
git commit -m "feat(reasoning): expand existing topics to 15 problems each, top up standalone visualizers"
```

---

## Task 5: Build 5 New Visualizer Components

**Files to create:**

```
src/components/visualizers/reasoning/MirrorWaterImageVisualizer.tsx
src/components/visualizers/reasoning/CubeDiceVisualizer.tsx
src/components/visualizers/reasoning/PaperFoldVisualizer.tsx
src/components/visualizers/reasoning/ClockReasoningVisualizer.tsx
src/components/visualizers/reasoning/CountingFigureVisualizer.tsx
```

**All components follow this skeleton** (same as existing `BloodRelationVisualizer`):

```tsx
'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { XxxProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'

interface Props {
  problem: XxxProblem
}

export function XxxVisualizer({ problem }: Props) {
  const { currentStep, reset, setSteps } = useVisualizerStore()

  useEffect(() => {
    reset()
    setSteps(problem.steps.length)
  }, [problem.steps.length, reset, setSteps])

  return (
    <div className="space-y-4">
      {/* SVG visualization area */}
      <div className="overflow-hidden rounded-lg border border-border-primary bg-bg-elevated p-4">
        <svg viewBox="..." className="h-auto w-full" role="img" aria-label="...">
          {/* Render based on currentStep */}
        </svg>
      </div>

      {/* Step explanation */}
      {problem.steps[currentStep] && (
        <p className="rounded-lg bg-subject-reasoning-light p-3 text-sm text-text-primary">
          {problem.steps[currentStep]}
        </p>
      )}

      <StepController />
    </div>
  )
}
```

### 5a: MirrorWaterImageVisualizer

- SVG: two grids side by side (original + transformed)
- Grid cells are `rect` + `text` elements
- Steps reveal: (1) original grid, (2) axis line appears (`motion.line`), (3) cells flip one by one with `motion.rect` opacity transition, (4) final transformed grid fully visible
- Props: `problem: MirrorImageProblem`

### 5b: CubeDiceVisualizer

- SVG: cross-shaped net layout (6 `rect` faces with content `text`)
- Face positions: top, left, center, right, bottom, back — laid out as a cross
- Steps: (1) show net, (2) highlight fold lines, (3) animate to isometric view (3 visible parallelogram faces), (4) highlight answer face(s) in `#8b5cf6`
- Props: `problem: CubeDiceProblem`

### 5c: PaperFoldVisualizer

- SVG: square paper (`rect`) that visually folds
- Each fold step: `motion.rect` slides half the paper over with opacity 0.7
- Punch: small `circle` appears at punchPosition
- Unfold: reverse animation reveals symmetrical punch holes
- Props: `problem: PaperFoldProblem`

### 5d: ClockReasoningVisualizer

- SVG: circle clock face, 12 hour markers (`text`), hour hand + minute hand (`motion.line`)
- Hands positioned via: `hourAngle` and `minuteAngle` from problem
- Steps: (1) empty clock, (2) hands animate to position, (3) angle arc drawn between hands (`motion.path` arc), (4) calculation shown, (5) answer highlighted
- Props: `problem: ClockProblem`

### 5e: CountingFigureVisualizer

- SVG: complex figure drawn by `svgPath` as base
- Each step: one `FigureHighlight` fills in with translucent color (`motion.path` with `fill-opacity` 0→0.3)
- Running count badge: `text` element in top-right corner updates each step
- Final step: all highlights visible, total count shown
- Props: `problem: CountingFigureProblem`

**Step: Verify**

Run: `npx tsc --noEmit`
Expected: Clean

**Step: Commit**

```bash
git add src/components/visualizers/reasoning/
git commit -m "feat(reasoning): add 5 new bespoke visualizer components"
```

---

## Task 6: Wire Routing — Update [topic]/page.tsx, layout.tsx, page.tsx, sitemap.ts

**Files to modify:**

```
src/app/reasoning/[topic]/page.tsx
src/app/reasoning/layout.tsx
src/app/reasoning/page.tsx
src/app/sitemap.ts
```

### 6a: Update `[topic]/page.tsx`

**Add imports** at the top (after existing imports, ~line 38):

New concept imports:
```ts
import { orderRankingConcept } from '@/data/reasoning/concepts/order-ranking'
import { dataSufficiencyConcept } from '@/data/reasoning/concepts/data-sufficiency'
import { calendarReasoningConcept } from '@/data/reasoning/concepts/calendar-reasoning'
import { logicalVennDiagramsConcept } from '@/data/reasoning/concepts/logical-venn-diagrams'
import { linearArrangementsConcept } from '@/data/reasoning/concepts/linear-arrangements'
import { criticalReasoningConcept } from '@/data/reasoning/concepts/critical-reasoning'
import { figureSeriesConcept } from '@/data/reasoning/concepts/figure-series'
import { embeddedFiguresConcept } from '@/data/reasoning/concepts/embedded-figures'
```

New tricks imports:
```ts
import { orderRankingTricks } from '@/data/reasoning/tricks/order-ranking'
import { dataSufficiencyTricks } from '@/data/reasoning/tricks/data-sufficiency'
import { calendarReasoningTricks } from '@/data/reasoning/tricks/calendar-reasoning'
import { logicalVennDiagramsTricks } from '@/data/reasoning/tricks/logical-venn-diagrams'
import { linearArrangementsTricks } from '@/data/reasoning/tricks/linear-arrangements'
import { criticalReasoningTricks } from '@/data/reasoning/tricks/critical-reasoning'
import { figureSeriesTricks } from '@/data/reasoning/tricks/figure-series'
import { embeddedFiguresTricks } from '@/data/reasoning/tricks/embedded-figures'
```

New problems imports:
```ts
import { orderRankingProblems } from '@/data/reasoning/problems/order-ranking-problems'
import { dataSufficiencyProblems } from '@/data/reasoning/problems/data-sufficiency-problems'
import { calendarReasoningProblems } from '@/data/reasoning/problems/calendar-reasoning-problems'
import { logicalVennDiagramsProblems } from '@/data/reasoning/problems/logical-venn-diagrams-problems'
import { linearArrangementsProblems } from '@/data/reasoning/problems/linear-arrangements-problems'
import { criticalReasoningProblems } from '@/data/reasoning/problems/critical-reasoning-problems'
import { figureSeriesProblems } from '@/data/reasoning/problems/figure-series-problems'
import { embeddedFiguresProblems } from '@/data/reasoning/problems/embedded-figures-problems'
```

New visualizer data imports:
```ts
import { mirrorImageProblems } from '@/data/reasoning/visualizer/mirror-water-images'
import { cubeDiceProblems } from '@/data/reasoning/visualizer/cubes-dice'
import { paperFoldProblems } from '@/data/reasoning/visualizer/paper-folding'
import { clockProblems } from '@/data/reasoning/visualizer/clock-reasoning'
import { countingFigureProblems } from '@/data/reasoning/visualizer/counting-figures'
```

New visualizer component imports:
```ts
import { MirrorWaterImageVisualizer } from '@/components/visualizers/reasoning/MirrorWaterImageVisualizer'
import { CubeDiceVisualizer } from '@/components/visualizers/reasoning/CubeDiceVisualizer'
import { PaperFoldVisualizer } from '@/components/visualizers/reasoning/PaperFoldVisualizer'
import { ClockReasoningVisualizer } from '@/components/visualizers/reasoning/ClockReasoningVisualizer'
import { CountingFigureVisualizer } from '@/components/visualizers/reasoning/CountingFigureVisualizer'
```

**Expand `VisualizerTopicData.type` union** (line 56):

```ts
interface VisualizerTopicData {
  kind: 'visualizer'
  type: 'blood-relations' | 'direction-distance' | 'coding-decoding' | 'puzzles'
    | 'mirror-water-images' | 'cubes-dice' | 'paper-folding' | 'clock-reasoning' | 'counting-figures'
  label: string
  description: string
}
```

**Add 13 new entries to `TOPIC_DATA`** (after existing `puzzles` entry):

8 new tabs entries:
```ts
  'order-ranking': {
    kind: 'tabs',
    concept: orderRankingConcept,
    tricks: orderRankingTricks,
    problems: orderRankingProblems,
    label: 'Order & Ranking',
    description: 'Master order and ranking problems for SSC CGL, IBPS PO, and RRB NTPC exams.',
  },
  // ... 7 more tabs entries following the same pattern
```

5 new visualizer entries:
```ts
  'mirror-water-images': {
    kind: 'visualizer',
    type: 'mirror-water-images',
    label: 'Mirror & Water Images',
    description: 'Solve mirror and water image problems with animated flip visualization.',
  },
  // ... 4 more visualizer entries
```

**Add visualizer render branches** (after the `puzzles` branch at line ~203):

```tsx
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
```

### 6b: Update `layout.tsx`

Add 13 new links to the `links` array (lines 10-33). Insert after existing entries, maintaining group order:

```ts
// After existing Visualizers group (line 21):
{ href: '/reasoning/mirror-water-images', label: 'Mirror & Water Images', group: 'Visualizers' },
{ href: '/reasoning/cubes-dice', label: 'Cubes & Dice', group: 'Visualizers' },
{ href: '/reasoning/paper-folding', label: 'Paper Folding', group: 'Visualizers' },
{ href: '/reasoning/clock-reasoning', label: 'Clock Reasoning', group: 'Visualizers' },
{ href: '/reasoning/counting-figures', label: 'Counting Figures', group: 'Visualizers' },

// After existing Verbal group (line 26):
{ href: '/reasoning/order-ranking', label: 'Order & Ranking', group: 'Verbal' },

// After existing Logical group (line 32):
{ href: '/reasoning/data-sufficiency', label: 'Data Sufficiency', group: 'Logical' },
{ href: '/reasoning/calendar-reasoning', label: 'Calendar Reasoning', group: 'Logical' },
{ href: '/reasoning/logical-venn-diagrams', label: 'Logical Venn Diagrams', group: 'Logical' },
{ href: '/reasoning/linear-arrangements', label: 'Linear Arrangements', group: 'Logical' },
{ href: '/reasoning/critical-reasoning', label: 'Critical Reasoning', group: 'Logical' },

// New group:
{ href: '/reasoning/figure-series', label: 'Figure Series', group: 'Non-Verbal' },
{ href: '/reasoning/embedded-figures', label: 'Embedded Figures', group: 'Non-Verbal' },
```

### 6c: Update `page.tsx` (hub)

**Add 5 new visualizer topics** to the Interactive Visualizers section (after `series` at line 72):

```ts
{
  href: '/reasoning/mirror-water-images',
  title: 'Mirror & Water Images',
  description: 'Identify mirror and water reflections with animated flip transformations.',
  hasTabs: false,
},
{
  href: '/reasoning/cubes-dice',
  title: 'Cubes & Dice',
  description: 'Solve cube net folding and dice opposite-face problems with visual animation.',
  hasTabs: false,
},
{
  href: '/reasoning/paper-folding',
  title: 'Paper Folding & Cutting',
  description: 'Watch paper fold, punch, and unfold to reveal hole patterns.',
  hasTabs: false,
},
{
  href: '/reasoning/clock-reasoning',
  title: 'Clock Reasoning',
  description: 'Calculate angles between clock hands with animated clock face.',
  hasTabs: false,
},
{
  href: '/reasoning/counting-figures',
  title: 'Counting Figures',
  description: 'Count triangles, squares, and lines in complex figures with step-by-step highlights.',
  hasTabs: false,
},
```

**Add 1 new topic** to Verbal Reasoning section (after `input-output` at line 112):

```ts
{
  href: '/reasoning/order-ranking',
  title: 'Order & Ranking',
  description: 'Position-based problems — find rank from top/bottom, total count, between positions.',
  hasTabs: true,
},
```

**Add 5 new topics** to Logical Reasoning section (after `cause-effect` at line 131):

```ts
{
  href: '/reasoning/data-sufficiency',
  title: 'Data Sufficiency',
  description: 'Determine if given statements provide enough data to answer the question.',
  hasTabs: true,
},
{
  href: '/reasoning/calendar-reasoning',
  title: 'Calendar Reasoning',
  description: 'Find the day of the week for any date using odd days and leap year rules.',
  hasTabs: true,
},
{
  href: '/reasoning/logical-venn-diagrams',
  title: 'Logical Venn Diagrams',
  description: 'Identify relationships between groups using 2-circle and 3-circle Venn diagrams.',
  hasTabs: true,
},
{
  href: '/reasoning/linear-arrangements',
  title: 'Linear Arrangements',
  description: 'Arrange people in a row with facing and position constraints.',
  hasTabs: true,
},
{
  href: '/reasoning/critical-reasoning',
  title: 'Critical Reasoning',
  description: 'Evaluate assumptions, strengthening and weakening arguments, and course of action.',
  hasTabs: true,
},
```

**Add a 4th section** — Non-Verbal Reasoning (after Logical Reasoning section):

```ts
{
  heading: 'Non-Verbal Reasoning',
  subheading: 'Visual pattern and spatial reasoning for SSC and competitive exams',
  topics: [
    {
      href: '/reasoning/figure-series',
      title: 'Figure Series',
      description: 'Identify the next figure in a pattern — rotation, addition, subtraction of elements.',
      hasTabs: true,
    },
    {
      href: '/reasoning/embedded-figures',
      title: 'Embedded Figures',
      description: 'Find a given figure hidden within a complex figure, accounting for rotation.',
      hasTabs: true,
    },
  ],
},
```

**Update the hasTabs badge text** from "5 concepts · 5 tricks · 5 problems" to "5 concepts · 5 tricks · 15 problems" (line 165):

```tsx
<p className="text-xs text-text-muted">5 concepts · 5 tricks · 15 problems</p>
```

### 6d: Update `sitemap.ts`

Add 13 new slugs to the `REASONING_TOPICS` array (after line 53):

```ts
const REASONING_TOPICS = [
  // existing 14...
  'seating',
  'syllogism',
  'series',
  'blood-relations',
  'direction-distance',
  'coding-decoding',
  'puzzles',
  'inequalities',
  'analogies',
  'classification',
  'statement-conclusions',
  'input-output',
  'alphabet-tests',
  'cause-effect',
  // new 13
  'order-ranking',
  'data-sufficiency',
  'calendar-reasoning',
  'logical-venn-diagrams',
  'linear-arrangements',
  'critical-reasoning',
  'figure-series',
  'embedded-figures',
  'mirror-water-images',
  'cubes-dice',
  'paper-folding',
  'clock-reasoning',
  'counting-figures',
]
```

**Step: Verify**

Run: `npx tsc --noEmit`
Expected: Clean

**Step: Commit**

```bash
git add src/app/reasoning/ src/app/sitemap.ts
git commit -m "feat(reasoning): wire 13 new topics into routing, layout, hub page, and sitemap"
```

---

## Task 7: Write Tests

**Files to create:**

```
src/components/visualizers/reasoning/__tests__/MirrorWaterImageVisualizer.test.tsx
src/components/visualizers/reasoning/__tests__/CubeDiceVisualizer.test.tsx
src/components/visualizers/reasoning/__tests__/PaperFoldVisualizer.test.tsx
src/components/visualizers/reasoning/__tests__/ClockReasoningVisualizer.test.tsx
src/components/visualizers/reasoning/__tests__/CountingFigureVisualizer.test.tsx
src/data/reasoning/__tests__/reasoning-data.test.ts
```

### 7a: Component tests (5 files)

Follow the exact pattern of existing `BloodRelationVisualizer.test.tsx`. Each test file:

```tsx
import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { XxxVisualizer } from '../XxxVisualizer'
import { useVisualizerStore } from '@/store/visualizerStore'

const mockProblem = { /* minimal valid problem object */ }

describe('XxxVisualizer', () => {
  beforeEach(() => {
    useVisualizerStore.getState().reset()
  })

  it('renders the SVG visualization', () => {
    render(<XxxVisualizer problem={mockProblem} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('displays step explanation text', () => {
    render(<XxxVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.steps[0])).toBeInTheDocument()
  })
})
```

### 7b: Data validation test

```ts
// src/data/reasoning/__tests__/reasoning-data.test.ts
import { describe, expect, it } from 'vitest'

// Import all new tabs topic data
import { orderRankingConcept } from '../concepts/order-ranking'
import { orderRankingTricks } from '../tricks/order-ranking'
import { orderRankingProblems } from '../problems/order-ranking-problems'
// ... repeat for all 8 new tabs topics

// Import all new visualizer data
import { mirrorImageProblems } from '../visualizer/mirror-water-images'
import { cubeDiceProblems } from '../visualizer/cubes-dice'
import { paperFoldProblems } from '../visualizer/paper-folding'
import { clockProblems } from '../visualizer/clock-reasoning'
import { countingFigureProblems } from '../visualizer/counting-figures'

// Import expanded existing data
import { inequalitiesProblems } from '../problems/inequalities-problems'
// ... all 7 existing

describe('new tabs topics data', () => {
  const tabsTopics = [
    { name: 'order-ranking', concept: orderRankingConcept, tricks: orderRankingTricks, problems: orderRankingProblems },
    // ... all 8
  ]

  for (const { name, concept, tricks, problems } of tabsTopics) {
    describe(name, () => {
      it('has 1 concept with rules', () => {
        expect(concept.topic).toBe(name)
        expect(concept.rules.length).toBeGreaterThanOrEqual(3)
      })
      it('has 5 tricks', () => {
        expect(tricks).toHaveLength(5)
      })
      it('has 15 problems', () => {
        expect(problems).toHaveLength(15)
      })
    })
  }
})

describe('new visualizer topics data', () => {
  it('mirror-water-images has 5 problems', () => {
    expect(mirrorImageProblems).toHaveLength(5)
  })
  it('cubes-dice has 5 problems', () => {
    expect(cubeDiceProblems).toHaveLength(5)
  })
  it('paper-folding has 5 problems', () => {
    expect(paperFoldProblems).toHaveLength(5)
  })
  it('clock-reasoning has 5 problems', () => {
    expect(clockProblems).toHaveLength(5)
  })
  it('counting-figures has 5 problems', () => {
    expect(countingFigureProblems).toHaveLength(5)
  })
})

describe('expanded existing topics', () => {
  it('inequalities now has 15 problems', () => {
    expect(inequalitiesProblems).toHaveLength(15)
  })
  // ... repeat for all 7 existing tabs topics
})
```

**Step: Run tests**

Run: `npx vitest run`
Expected: All tests pass

**Step: Commit**

```bash
git add src/components/visualizers/reasoning/__tests__/ src/data/reasoning/__tests__/
git commit -m "test(reasoning): add component tests for 5 new visualizers + data validation tests"
```

---

## Task 8: Final Verification

**Step 1:** Run full test suite
```bash
npx vitest run
```
Expected: All tests pass

**Step 2:** TypeScript check
```bash
npx tsc --noEmit
```
Expected: Clean

**Step 3:** Dev server check — navigate to:
- `http://localhost:3000/reasoning` — verify 4 sections, 27 topic cards
- `http://localhost:3000/reasoning/order-ranking` — verify tabs (Concept/Tricks/Problems)
- `http://localhost:3000/reasoning/mirror-water-images` — verify visualizer renders
- `http://localhost:3000/reasoning/clock-reasoning` — verify clock visualizer
- `http://localhost:3000/reasoning/inequalities` — verify 15 problems in Problems tab

**Step 4:** Lint
```bash
npm run lint
```
Expected: Clean or only pre-existing warnings

**Step 5:** Final commit
```bash
git add -A
git commit -m "feat(reasoning): complete expansion — 27 topics, 5 new visualizers, deeper content"
```

---

## Execution Order Summary

| Task | Description | Files | Depends on |
|------|-------------|-------|-----------|
| 1 | New types | 1 modified | — |
| 2 | 8 new tabs topic data (24 files) | 24 created | Task 1 |
| 3 | 5 new visualizer data (5 files) | 5 created | Task 1 |
| 4 | Expand existing problems (9 files) | 9 modified | — |
| 5 | 5 new visualizer components | 5 created | Tasks 1, 3 |
| 6 | Wire routing + layout + hub + sitemap | 4 modified | Tasks 2, 3, 5 |
| 7 | Tests (6 files) | 6 created | Tasks 2-6 |
| 8 | Final verification | — | All |

Tasks 2, 3, 4 can run in parallel (all depend only on Task 1).
Task 5 can start after Tasks 1+3.
Task 6 needs Tasks 2+3+5.
