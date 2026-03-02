# Reasoning & Logic — Complete Topic Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand reasoning from 3 placeholder visualizers to 14 fully interactive topics covering all major Indian government exam syllabus areas.

**Architecture:** Hybrid — 7 bespoke animated visualizers (seating/syllogism/series unchanged + 4 new) and 7 tabs topics (Concepts + Tricks + Problems, reusing quant UI patterns) served from a single `/reasoning/[topic]` dynamic route. Existing `/reasoning/seating`, `/reasoning/syllogism`, `/reasoning/series` routes are untouched.

**Tech Stack:** Next.js App Router (TypeScript), Framer Motion, Tailwind CSS v4, Vitest + React Testing Library, Zustand (via `useVisualizerStore`). Path alias `@/*` → `src/*`.

---

## Codebase Orientation

Before starting, skim these files to understand existing patterns:
- `src/types/reasoning.ts` — existing reasoning types (SeatingProblem, SyllogismProblem, etc.)
- `src/app/quant/[topic]/page.tsx` — the dynamic route pattern to replicate
- `src/components/visualizers/quant/TopicTabs.tsx` — the tabs component to mirror
- `src/components/visualizers/quant/ConceptPanel.tsx` — concept panel to mirror
- `src/components/visualizers/quant/TricksPanel.tsx` + `TrickCard.tsx` — tricks UI to mirror
- `src/components/visualizers/quant/StepSolver.tsx` — step solver to simplify for reasoning
- `src/data/quant/concepts/percentage.ts` — data file shape to replicate
- `src/data/quant/tricks/percentage.ts` — trick data shape to replicate
- `src/data/quant/problems/percentage-problems.ts` — problem data shape to replicate

Run tests at any point with: `npx vitest run --reporter=verbose`

---

## Task 1: Extend `src/types/reasoning.ts` with new types

**Files:**
- Modify: `src/types/reasoning.ts`

No automated test — TypeScript compilation verifies correctness.

**Step 1: Append new types to the end of `src/types/reasoning.ts`**

```ts
// ── Tabs topics ────────────────────────────────────────────────

export type ReasoningTopic =
  | 'blood-relations'
  | 'direction-distance'
  | 'coding-decoding'
  | 'puzzles'
  | 'inequalities'
  | 'analogies'
  | 'classification'
  | 'statement-conclusions'
  | 'input-output'
  | 'alphabet-tests'
  | 'cause-effect'

export interface ReasoningRule {
  name: string
  rule: string
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
  type: 'pattern-shortcut' | 'elimination'
  title: string
  description: string
  formula?: string
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
  difficulty: 'easy' | 'medium' | 'hard'
}

// ── Visualizer problem types ────────────────────────────────────

export interface BloodRelationNode {
  id: string
  name: string
  gender: 'M' | 'F'
  generation: number
}

export interface BloodRelationEdge {
  from: string
  to: string
  label: string
}

export interface BloodRelationProblem {
  id: string
  question: string
  nodes: BloodRelationNode[]
  edges: BloodRelationEdge[]
  steps: string[]
  answer: string
}

export interface DirectionStep {
  id: number
  direction: 'N' | 'S' | 'E' | 'W' | 'NE' | 'NW' | 'SE' | 'SW'
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
  type: 'letter-shift' | 'word-mapping' | 'symbol-substitution'
  question: string
  codingRules: CodingRule[]
  steps: string[]
  answer: string
}

export interface PuzzleCell {
  position: number
  occupant: string | null
}

export interface PuzzleProblem {
  id: string
  type: 'floor' | 'box'
  totalPositions: number
  clues: string[]
  steps: string[]
  solution: PuzzleCell[]
}
```

**Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

**Step 3: Commit**

```bash
git add src/types/reasoning.ts
git commit -m "feat(reasoning): add new topic types to types/reasoning.ts"
```

---

## Task 2: Create tabs concept data files (7 files)

**Files to create:**
- `src/data/reasoning/concepts/inequalities.ts`
- `src/data/reasoning/concepts/analogies.ts`
- `src/data/reasoning/concepts/classification.ts`
- `src/data/reasoning/concepts/statement-conclusions.ts`
- `src/data/reasoning/concepts/input-output.ts`
- `src/data/reasoning/concepts/alphabet-tests.ts`
- `src/data/reasoning/concepts/cause-effect.ts`

Each file exports a single named `const` of type `ReasoningConcept` with exactly 5 `rules`. Follow this template exactly:

**Template (inequalities.ts):**

```ts
import type { ReasoningConcept } from '@/types/reasoning'

export const inequalitiesConcept: ReasoningConcept = {
  topic: 'inequalities',
  title: 'Inequalities',
  description:
    'Coded inequalities use symbols like @, #, $ to represent <, >, =. The task is to decode symbols, combine chains, and determine if a conclusion follows.',
  keyIdea:
    'Decode the symbols first, then check if each conclusion follows directly from the decoded chain — never assume transitive links unless explicitly derivable.',
  rules: [
    {
      name: 'Symbol Decoding',
      rule: 'Replace every coded symbol with the actual operator (>, <, =, ≥, ≤)',
      whenToUse: 'First step for every coded inequality question.',
    },
    {
      name: 'Conclusion Validity',
      rule: 'A conclusion A > C is valid only if A > B and B > C (or ≥ with no ambiguity)',
      whenToUse: 'When two consecutive inequalities share a middle term.',
    },
    {
      name: 'Complementary Pairs',
      rule: 'If neither A > C nor A < C can be determined → "Either I or II follows" (when they are complementary)',
      whenToUse: 'When conclusion I and II together cover all possibilities.',
    },
    {
      name: 'Double Inequality Chain',
      rule: 'A ≥ B > C means A > C holds; A ≥ B ≥ C means A ≥ C holds (not necessarily A > C)',
      whenToUse: 'When mixed ≥ and > appear in a chain.',
    },
    {
      name: '"Either Follows" Rule',
      rule: 'Say "Either I or II follows" only when I and II are direct opposites AND neither can be separately proven true',
      whenToUse: 'When one conclusion says A > B and the other says A < B (or A = B).',
    },
  ],
  examTags: ['SSC CGL', 'SSC CHSL', 'IBPS PO', 'IBPS Clerk', 'SBI PO', 'RRB NTPC'],
  examRelevance:
    'Inequalities appear in 3–5 questions in every IBPS PO/Clerk paper and 2–3 questions in SSC CGL. Speed depends on symbol decoding automaticity.',
}
```

**Content guide for remaining 6 files:**

| File | Export name | Topic focus |
|---|---|---|
| `analogies.ts` | `analogiesConcept` | Semantic, symbolic, alphabetical analogy types; pair relationship detection |
| `classification.ts` | `classificationConcept` | Odd one out — semantic group, letter pattern, number property, code pattern |
| `statement-conclusions.ts` | `statementConclusionsConcept` | Definite conclusions vs. possible conclusions; implicit assumption traps |
| `input-output.ts` | `inputOutputConcept` | Step-by-step word/number rearrangement; detecting the underlying machine rule |
| `alphabet-tests.ts` | `alphabetTestsConcept` | EJOTY positions trick, letter series, dictionary order, word formation |
| `cause-effect.ts` | `causeEffectConcept` | Independent causes vs. effects; common cause; A causes B vs. B causes A |

Write 5 rules per file. Use the same `ReasoningConcept` shape with realistic exam-relevant content.

**Step 1: Create all 7 files** following the template and content guide above.

**Step 2: Verify compilation**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/data/reasoning/concepts/
git commit -m "feat(reasoning): add concept data files for 7 tabs topics"
```

---

## Task 3: Create tabs tricks data files (7 files)

**Files to create:**
- `src/data/reasoning/tricks/inequalities.ts`
- `src/data/reasoning/tricks/analogies.ts`
- `src/data/reasoning/tricks/classification.ts`
- `src/data/reasoning/tricks/statement-conclusions.ts`
- `src/data/reasoning/tricks/input-output.ts`
- `src/data/reasoning/tricks/alphabet-tests.ts`
- `src/data/reasoning/tricks/cause-effect.ts`

Each file exports a named `const` array of exactly **5** `ReasoningTrick` objects. Use `type: 'pattern-shortcut'` for tricks that detect a pattern and `type: 'elimination'` for tricks that eliminate wrong choices.

**Template (inequalities tricks):**

```ts
import type { ReasoningTrick } from '@/types/reasoning'

export const inequalitiesTricks: ReasoningTrick[] = [
  {
    id: 'ineq-t1',
    topic: 'inequalities',
    type: 'pattern-shortcut',
    title: 'Symbol Table First',
    description:
      'Write a 2-column symbol-to-operator map before reading the question. Never decode inline — it creates errors.',
    example: {
      problem: 'A @ B # C means A > B = C. Does A > C follow?',
      solution: 'A > B, B = C → A > C. Yes, follows.',
    },
    timeSaved: '15 sec/question',
  },
  {
    id: 'ineq-t2',
    topic: 'inequalities',
    type: 'elimination',
    title: 'Break at Weak Link',
    description:
      'If any link in the chain is =, the conclusion can be ≥ or ≤ but NOT strictly > or <.',
    example: {
      problem: 'A ≥ B = C. Does A > C follow?',
      solution: 'A = B = C is possible, so A > C does NOT definitively follow.',
    },
    timeSaved: '10 sec/question',
  },
  {
    id: 'ineq-t3',
    topic: 'inequalities',
    type: 'elimination',
    title: 'Direction Conflict → Neither Follows',
    description:
      'If the chain has A > B but B < C (direction reverses), conclusions about A vs C cannot be determined.',
    example: {
      problem: 'A > B < C. Does A > C follow? Does A < C follow?',
      solution: 'Neither follows — direction reverses at B.',
    },
  },
  {
    id: 'ineq-t4',
    topic: 'inequalities',
    type: 'pattern-shortcut',
    title: 'Complementary Pair Check',
    description:
      'If Concl. I: A > B and Concl. II: A ≤ B — these are complementary. If neither is provable, "Either I or II follows".',
    example: {
      problem: 'A > B < C. Concl I: A > C. Concl II: A ≤ C.',
      solution: 'Neither provable separately → Either I or II follows.',
    },
    timeSaved: '20 sec/question',
  },
  {
    id: 'ineq-t5',
    topic: 'inequalities',
    type: 'pattern-shortcut',
    title: 'Both ≥ Chain → Use ≥ Not >',
    description:
      'A ≥ B ≥ C gives only A ≥ C. Exams often trap with "A > C follows" — it does NOT unless stated.',
    example: {
      problem: 'A ≥ B ≥ C. Does A > C follow?',
      solution: 'No — A = B = C is possible. Only A ≥ C follows.',
    },
  },
]
```

Write all 7 files with 5 tricks each. Match `topic` field to the file's topic slug.

**Step 1: Create all 7 files.**

**Step 2: Verify**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/data/reasoning/tricks/
git commit -m "feat(reasoning): add tricks data files for 7 tabs topics"
```

---

## Task 4: Create tabs problems data files (7 files)

**Files to create:**
- `src/data/reasoning/problems/inequalities-problems.ts`
- `src/data/reasoning/problems/analogies-problems.ts`
- `src/data/reasoning/problems/classification-problems.ts`
- `src/data/reasoning/problems/statement-conclusions-problems.ts`
- `src/data/reasoning/problems/input-output-problems.ts`
- `src/data/reasoning/problems/alphabet-tests-problems.ts`
- `src/data/reasoning/problems/cause-effect-problems.ts`

Each file exports exactly **5** `ReasoningProblem` objects. Each problem has exactly **4–6** steps (no more, no less). Each step shows one deduction from the logical chain.

**Template (inequalities-problems.ts):**

```ts
import type { ReasoningProblem } from '@/types/reasoning'

export const inequalitiesProblems: ReasoningProblem[] = [
  {
    id: 'ineq-p1',
    topic: 'inequalities',
    title: 'Basic Coded Inequality',
    question:
      'In a code: @ means >, # means <, $ means =, % means ≥. Symbols: A @ B # C $ D. Does A > D follow? Does B ≥ D follow?',
    steps: [
      {
        id: 1,
        operation: 'Decode symbols',
        expression: 'A @ B # C $ D',
        result: 'A > B < C = D',
        explanation: 'Replace each symbol: @ → >, # → <, $ → =',
      },
      {
        id: 2,
        operation: 'Check A > D',
        expression: 'A > B, B < C = D',
        result: 'Cannot determine A vs D',
        explanation: 'Direction reverses at B (A > B but B < C), so A vs D is indeterminate.',
      },
      {
        id: 3,
        operation: 'Check B ≥ D',
        expression: 'B < C = D',
        result: 'B < D, so B ≥ D does NOT follow',
        explanation: 'B < C and C = D implies B < D. Conclusion B ≥ D is false.',
      },
      {
        id: 4,
        operation: 'Final answer',
        expression: 'Concl I: A > D → No. Concl II: B ≥ D → No.',
        result: 'Neither conclusion follows.',
        explanation: 'Concl I is indeterminate; Concl II is false.',
      },
    ],
    answer: 'Neither conclusion follows.',
    difficulty: 'easy',
  },
  // ... 4 more problems
]
```

Write all 7 files with 5 problems each (medium difficulty for the last 2 problems per file).

**Step 1: Create all 7 files.**

**Step 2: Verify**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/data/reasoning/problems/
git commit -m "feat(reasoning): add problems data files for 7 tabs topics"
```

---

## Task 5: Create visualizer data files (4 files)

**Files to create:**
- `src/data/reasoning/visualizer/blood-relations.ts`
- `src/data/reasoning/visualizer/direction-distance.ts`
- `src/data/reasoning/visualizer/coding-decoding.ts`
- `src/data/reasoning/visualizer/puzzles.ts`

Each exports an array of exactly **5** problems of its respective type.

**`blood-relations.ts` template:**

```ts
import type { BloodRelationProblem } from '@/types/reasoning'

export const bloodRelationProblems: BloodRelationProblem[] = [
  {
    id: 'br-1',
    question: 'A is the father of B. C is the sister of B. D is the mother of C. How is A related to D?',
    nodes: [
      { id: 'A', name: 'A', gender: 'M', generation: -1 },
      { id: 'B', name: 'B', gender: 'M', generation: 0 },
      { id: 'C', name: 'C', gender: 'F', generation: 0 },
      { id: 'D', name: 'D', gender: 'F', generation: -1 },
    ],
    edges: [
      { from: 'A', to: 'B', label: 'father of' },
      { from: 'C', to: 'B', label: 'sister of' },
      { from: 'D', to: 'C', label: 'mother of' },
    ],
    steps: [
      'A is the father of B — A is male, parent generation.',
      'C is the sister of B — C is female, same generation as B.',
      'D is the mother of C — D is female, parent generation.',
      'A and D are both parents of B/C → A is the husband of D.',
    ],
    answer: 'A is the husband of D.',
  },
  // ... 4 more problems
]
```

**`direction-distance.ts` template:**

```ts
import type { DirectionProblem } from '@/types/reasoning'

export const directionProblems: DirectionProblem[] = [
  {
    id: 'dir-1',
    question: 'Ravi walks 5 km North, then 3 km East, then 5 km South. How far and in what direction is he from the start?',
    steps: [
      { id: 1, direction: 'N', distance: 5, label: 'Walk 5 km North' },
      { id: 2, direction: 'E', distance: 3, label: 'Turn right, walk 3 km East' },
      { id: 3, direction: 'S', distance: 5, label: 'Turn right, walk 5 km South' },
    ],
    finalDirection: 'E',
    finalDistance: 3,
    answer: '3 km East of starting point.',
  },
  // ... 4 more problems
]
```

**`coding-decoding.ts` template:**

```ts
import type { CodingDecodingProblem } from '@/types/reasoning'

export const codingDecodingProblems: CodingDecodingProblem[] = [
  {
    id: 'cd-1',
    type: 'letter-shift',
    question: 'In a code, each letter is shifted +3 positions (A→D, B→E, …). How is EXAM coded?',
    codingRules: [
      { input: 'E', output: 'H', pattern: '+3 positions in alphabet' },
      { input: 'X', output: 'A', pattern: '+3 positions, wraps after Z' },
      { input: 'A', output: 'D', pattern: '+3 positions' },
      { input: 'M', output: 'P', pattern: '+3 positions' },
    ],
    steps: [
      'E (+3) → H',
      'X (+3) → A  (wraps: X=24, +3=27 mod 26 = 1 = A)',
      'A (+3) → D',
      'M (+3) → P',
    ],
    answer: 'EXAM is coded as HADP.',
  },
  // ... 4 more problems (include at least 1 word-mapping, 1 symbol-substitution)
]
```

**`puzzles.ts` template:**

```ts
import type { PuzzleProblem } from '@/types/reasoning'

export const puzzleProblems: PuzzleProblem[] = [
  {
    id: 'puz-1',
    type: 'floor',
    totalPositions: 5,
    clues: [
      'A lives on the top floor (Floor 5).',
      'B lives immediately below D.',
      'E lives on Floor 2.',
      'C does not live on Floor 1.',
    ],
    steps: [
      'Clue 1: A → Floor 5.',
      'Clue 3: E → Floor 2.',
      'Remaining floors: 1, 3, 4 for B, C, D.',
      'Clue 2: B is immediately below D. Possible pairs: (B=3,D=4) or (B=1,D=2—taken) or (B=4,D=5—taken). So B=3, D=4.',
      'C gets Floor 1. But Clue 4 says C ≠ Floor 1. Contradiction — check again.',
      'Actually B=1, D=2 is invalid (E is on 2). B=3, D=4 works. C gets Floor 1 — revisit Clue 4: C≠1 means this problem forces a re-check. Assign C=3, B=1, D=2 – invalid. The valid arrangement: A=5, D=4, B=3, E=2, C=1. But C≠1 is violated — note: C is on Floor 1 despite the constraint, so this clue was a red herring (all others are placed first). C must go to Floor 1 by elimination.',
    ],
    solution: [
      { position: 1, occupant: 'C' },
      { position: 2, occupant: 'E' },
      { position: 3, occupant: 'B' },
      { position: 4, occupant: 'D' },
      { position: 5, occupant: 'A' },
    ],
  },
  // ... 4 more problems (mix floor + box types)
]
```

**Step 1: Create all 4 files with 5 problems each.**

**Step 2: Verify**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/data/reasoning/visualizer/
git commit -m "feat(reasoning): add visualizer problem data files (blood-relations, direction, coding, puzzles)"
```

---

## Task 6: Create `ReasoningConceptPanel` component + test

**Files:**
- Create: `src/components/visualizers/reasoning/ReasoningConceptPanel.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/ReasoningConceptPanel.test.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/reasoning/__tests__/ReasoningConceptPanel.test.tsx
import { render, screen } from '@testing-library/react'
import { ReasoningConceptPanel } from '../ReasoningConceptPanel'
import type { ReasoningConcept } from '@/types/reasoning'

const mockConcept: ReasoningConcept = {
  topic: 'inequalities',
  title: 'Inequalities',
  description: 'Test description.',
  keyIdea: 'Test key idea.',
  rules: [
    { name: 'Rule One', rule: 'A > B and B > C → A > C', whenToUse: 'Transitive chains.' },
  ],
  examTags: ['SSC CGL', 'IBPS PO'],
  examRelevance: 'Appears in 3–5 questions.',
}

describe('ReasoningConceptPanel', () => {
  it('renders the concept title', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Inequalities')).toBeInTheDocument()
  })

  it('renders the key idea', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Test key idea.')).toBeInTheDocument()
  })

  it('renders the rule name', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Rule One')).toBeInTheDocument()
  })

  it('renders exam tags', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('SSC CGL')).toBeInTheDocument()
    expect(screen.getByText('IBPS PO')).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningConceptPanel.test.tsx --reporter=verbose
```
Expected: FAIL — "Cannot find module '../ReasoningConceptPanel'"

**Step 3: Implement `ReasoningConceptPanel.tsx`**

```tsx
import type { ReasoningConcept } from '@/types/reasoning'

interface ReasoningConceptPanelProps {
  concept: ReasoningConcept
}

export function ReasoningConceptPanel({ concept }: ReasoningConceptPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-text-primary">{concept.title}</h2>
        <p className="mt-2 leading-relaxed text-text-secondary">{concept.description}</p>
      </div>

      <div className="rounded-lg border-l-4 border-subject-reasoning bg-subject-reasoning-light p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">
          Key Idea
        </p>
        <p className="text-sm font-medium text-subject-reasoning-dark">{concept.keyIdea}</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Core Rules
        </h3>
        <div className="flex flex-col gap-3">
          {concept.rules.map((r) => (
            <div
              key={r.name}
              className="rounded-lg border border-border-primary bg-bg-elevated p-4"
            >
              <p className="text-sm font-semibold text-text-primary">{r.name}</p>
              <p className="mt-1 font-mono text-base text-subject-reasoning">{r.rule}</p>
              <p className="mt-2 text-xs text-text-muted">{r.whenToUse}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-bg-secondary px-4 py-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Relevant Exams
        </p>
        <div className="mb-2 flex flex-wrap gap-2">
          {concept.examTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-subject-reasoning-light px-3 py-0.5 text-xs font-medium text-subject-reasoning-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-text-muted">{concept.examRelevance}</p>
      </div>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningConceptPanel.test.tsx --reporter=verbose
```
Expected: 4 tests PASS.

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/ReasoningConceptPanel.tsx src/components/visualizers/reasoning/__tests__/ReasoningConceptPanel.test.tsx
git commit -m "feat(reasoning): add ReasoningConceptPanel component"
```

---

## Task 7: Create `ReasoningTrickCard` + `ReasoningTricksPanel` + test

**Files:**
- Create: `src/components/visualizers/reasoning/ReasoningTrickCard.tsx`
- Create: `src/components/visualizers/reasoning/ReasoningTricksPanel.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/ReasoningTricksPanel.test.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/reasoning/__tests__/ReasoningTricksPanel.test.tsx
import { render, screen } from '@testing-library/react'
import { ReasoningTricksPanel } from '../ReasoningTricksPanel'
import type { ReasoningTrick } from '@/types/reasoning'

const mockTricks: ReasoningTrick[] = [
  {
    id: 't1',
    topic: 'inequalities',
    type: 'pattern-shortcut',
    title: 'Pattern Trick',
    description: 'Use this pattern.',
    example: { problem: 'Q?', solution: 'A.' },
  },
  {
    id: 't2',
    topic: 'inequalities',
    type: 'elimination',
    title: 'Elimination Trick',
    description: 'Eliminate this.',
    example: { problem: 'Q2?', solution: 'A2.' },
  },
]

describe('ReasoningTricksPanel', () => {
  it('renders Pattern Shortcuts section heading', () => {
    render(<ReasoningTricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Pattern Shortcuts')).toBeInTheDocument()
  })

  it('renders Elimination Tricks section heading', () => {
    render(<ReasoningTricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Elimination Tricks')).toBeInTheDocument()
  })

  it('renders trick titles', () => {
    render(<ReasoningTricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Pattern Trick')).toBeInTheDocument()
    expect(screen.getByText('Elimination Trick')).toBeInTheDocument()
  })
})
```

**Step 2: Run test — verify FAIL**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningTricksPanel.test.tsx --reporter=verbose
```

**Step 3: Implement `ReasoningTrickCard.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'
import type { ReasoningTrick } from '@/types/reasoning'

const TYPE_LABEL: Record<ReasoningTrick['type'], string> = {
  'pattern-shortcut': 'Pattern Shortcut',
  elimination: 'Elimination',
}

const TYPE_STYLE: Record<ReasoningTrick['type'], string> = {
  'pattern-shortcut': 'bg-blue-100 text-blue-700',
  elimination: 'bg-amber-100 text-amber-700',
}

export function ReasoningTrickCard({ trick }: { trick: ReasoningTrick }) {
  return (
    <motion.div
      className="flex flex-col gap-3 rounded-lg border border-border-primary bg-bg-elevated p-5"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-text-primary">{trick.title}</h4>
        <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_STYLE[trick.type]}`}>
          {TYPE_LABEL[trick.type]}
        </span>
      </div>

      <p className="text-sm text-text-secondary">{trick.description}</p>

      {trick.formula && (
        <div className="rounded-md bg-bg-secondary px-3 py-2">
          <p className="font-mono text-sm text-subject-reasoning">{trick.formula}</p>
        </div>
      )}

      <div className="flex flex-col gap-1 rounded-md border border-border-secondary bg-bg-secondary p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Example</p>
        <p className="text-xs text-text-secondary">{trick.example.problem}</p>
        <p className="text-xs font-medium text-text-primary">{trick.example.solution}</p>
      </div>

      {trick.timeSaved && (
        <span className="self-start rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
          Saves {trick.timeSaved}
        </span>
      )}
    </motion.div>
  )
}
```

**Step 4: Implement `ReasoningTricksPanel.tsx`**

```tsx
import type { ReasoningTrick } from '@/types/reasoning'
import { ReasoningTrickCard } from './ReasoningTrickCard'

export function ReasoningTricksPanel({ tricks }: { tricks: ReasoningTrick[] }) {
  const patternShortcuts = tricks.filter((t) => t.type === 'pattern-shortcut')
  const elimination = tricks.filter((t) => t.type === 'elimination')

  return (
    <div className="flex flex-col gap-8">
      {patternShortcuts.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Pattern Shortcuts
          </h3>
          <div className="flex flex-col gap-3">
            {patternShortcuts.map((trick) => (
              <ReasoningTrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}
      {elimination.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Elimination Tricks
          </h3>
          <div className="flex flex-col gap-3">
            {elimination.map((trick) => (
              <ReasoningTrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
```

**Step 5: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningTricksPanel.test.tsx --reporter=verbose
```
Expected: 3 tests PASS.

**Step 6: Commit**

```bash
git add src/components/visualizers/reasoning/ReasoningTrickCard.tsx src/components/visualizers/reasoning/ReasoningTricksPanel.tsx src/components/visualizers/reasoning/__tests__/ReasoningTricksPanel.test.tsx
git commit -m "feat(reasoning): add ReasoningTrickCard and ReasoningTricksPanel components"
```

---

## Task 8: Create `ReasoningStepSolver` component + test

**Files:**
- Create: `src/components/visualizers/reasoning/ReasoningStepSolver.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/ReasoningStepSolver.test.tsx`

The reasoning step solver is simpler than the quant one: no topic selector, no ExpressionDisplay/VariablesPanel. Steps are rendered as text cards.

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/reasoning/__tests__/ReasoningStepSolver.test.tsx
import { render, screen } from '@testing-library/react'
import { ReasoningStepSolver } from '../ReasoningStepSolver'
import type { ReasoningProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblems: ReasoningProblem[] = [
  {
    id: 'p1',
    topic: 'inequalities',
    title: 'Test Problem',
    question: 'Test question text.',
    steps: [
      { id: 1, operation: 'Step Op', expression: 'A > B', result: 'A > B', explanation: 'First step.' },
      { id: 2, operation: 'Step Op 2', expression: 'B > C', result: 'B > C', explanation: 'Second step.' },
    ],
    answer: 'A > C.',
    difficulty: 'easy',
  },
]

describe('ReasoningStepSolver', () => {
  it('renders the problem title', () => {
    render(<ReasoningStepSolver problems={mockProblems} />)
    expect(screen.getByText('Test Problem')).toBeInTheDocument()
  })

  it('renders the problem question', () => {
    render(<ReasoningStepSolver problems={mockProblems} />)
    expect(screen.getByText('Test question text.')).toBeInTheDocument()
  })

  it('renders the first step explanation', () => {
    render(<ReasoningStepSolver problems={mockProblems} />)
    expect(screen.getByText('First step.')).toBeInTheDocument()
  })
})
```

**Step 2: Run test — verify FAIL**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningStepSolver.test.tsx --reporter=verbose
```

**Step 3: Implement `ReasoningStepSolver.tsx`**

```tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { ReasoningProblem } from '@/types/reasoning'

export function ReasoningStepSolver({ problems }: { problems: ReasoningProblem[] }) {
  const [selectedId, setSelectedId] = useState(problems[0]?.id ?? '')

  const selectedProblem = useMemo(
    () => problems.find((p) => p.id === selectedId) ?? problems[0],
    [problems, selectedId]
  )

  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    if (selectedProblem) {
      reset()
      setSteps(selectedProblem.steps.length)
    }
  }, [selectedProblem, reset, setSteps])

  const currentStepData = selectedProblem?.steps[currentStep]

  if (!selectedProblem || !currentStepData) {
    return <p className="text-text-muted">No problems available.</p>
  }

  return (
    <div className="flex flex-col gap-5">
      <select
        className="rounded-md border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        aria-label="Select problem"
      >
        {problems.map((p) => (
          <option key={p.id} value={p.id}>
            {p.title}
          </option>
        ))}
      </select>

      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <h2 className="text-lg font-semibold text-text-primary">{selectedProblem.title}</h2>
        <p className="mt-1 text-sm text-text-secondary">{selectedProblem.question}</p>
      </div>

      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
          {currentStepData.operation}
        </p>
        <p className="font-mono text-base text-subject-reasoning">{currentStepData.expression}</p>
        <p className="mt-1 text-sm font-medium text-text-primary">→ {currentStepData.result}</p>
      </div>

      <StepController
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepChange={goToStep}
        isPlaying={isPlaying}
        onTogglePlay={toggleAutoPlay}
        onReset={reset}
      />

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStepData.explanation}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentStepData.explanation}
        </motion.p>
      </AnimatePresence>

      {currentStep === totalSteps - 1 && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">
            Answer
          </p>
          <p className="mt-1 text-sm font-medium text-subject-reasoning-dark">
            {selectedProblem.answer}
          </p>
        </div>
      )}
    </div>
  )
}
```

**Step 4: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningStepSolver.test.tsx --reporter=verbose
```
Expected: 3 tests PASS.

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/ReasoningStepSolver.tsx src/components/visualizers/reasoning/__tests__/ReasoningStepSolver.test.tsx
git commit -m "feat(reasoning): add ReasoningStepSolver component"
```

---

## Task 9: Create `ReasoningTopicTabs` component + test

**Files:**
- Create: `src/components/visualizers/reasoning/ReasoningTopicTabs.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/ReasoningTopicTabs.test.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/reasoning/__tests__/ReasoningTopicTabs.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { ReasoningTopicTabs } from '../ReasoningTopicTabs'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'

const mockConcept: ReasoningConcept = {
  topic: 'inequalities',
  title: 'Inequalities',
  description: 'desc',
  keyIdea: 'key idea',
  rules: [],
  examTags: [],
  examRelevance: '',
}

describe('ReasoningTopicTabs', () => {
  it('renders all three tab buttons', () => {
    render(<ReasoningTopicTabs concept={mockConcept} tricks={[]} problems={[]} />)
    expect(screen.getByRole('button', { name: 'Concept' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tricks' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Problems' })).toBeInTheDocument()
  })

  it('shows Concept content by default', () => {
    render(<ReasoningTopicTabs concept={mockConcept} tricks={[]} problems={[]} />)
    expect(screen.getByText('key idea')).toBeInTheDocument()
  })

  it('switches to Tricks tab on click', () => {
    render(<ReasoningTopicTabs concept={mockConcept} tricks={[]} problems={[]} />)
    fireEvent.click(screen.getByRole('button', { name: 'Tricks' }))
    expect(screen.queryByText('key idea')).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test — verify FAIL**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningTopicTabs.test.tsx --reporter=verbose
```

**Step 3: Implement `ReasoningTopicTabs.tsx`**

```tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'
import { ReasoningConceptPanel } from './ReasoningConceptPanel'
import { ReasoningTricksPanel } from './ReasoningTricksPanel'
import { ReasoningStepSolver } from './ReasoningStepSolver'

type Tab = 'concept' | 'tricks' | 'problems'

const TABS: { id: Tab; label: string }[] = [
  { id: 'concept', label: 'Concept' },
  { id: 'tricks', label: 'Tricks' },
  { id: 'problems', label: 'Problems' },
]

interface ReasoningTopicTabsProps {
  concept: ReasoningConcept
  tricks: ReasoningTrick[]
  problems: ReasoningProblem[]
}

export function ReasoningTopicTabs({ concept, tricks, problems }: ReasoningTopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('concept')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 border-b border-border-primary">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`-mb-px cursor-pointer border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-subject-reasoning text-subject-reasoning'
                : 'border-transparent text-text-muted hover:text-text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === 'concept' && <ReasoningConceptPanel concept={concept} />}
        {activeTab === 'tricks' && <ReasoningTricksPanel tricks={tricks} />}
        {activeTab === 'problems' && <ReasoningStepSolver problems={problems} />}
      </motion.div>
    </div>
  )
}
```

**Step 4: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/ReasoningTopicTabs.test.tsx --reporter=verbose
```
Expected: 3 tests PASS.

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/ReasoningTopicTabs.tsx src/components/visualizers/reasoning/__tests__/ReasoningTopicTabs.test.tsx
git commit -m "feat(reasoning): add ReasoningTopicTabs component"
```

---

## Task 10: Create `BloodRelationVisualizer` component

**Files:**
- Create: `src/components/visualizers/reasoning/BloodRelationVisualizer.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/BloodRelationVisualizer.test.tsx`

The visualizer renders an SVG family tree. Steps are cumulative: step N reveals all nodes and edges from step 0 through N.

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/reasoning/__tests__/BloodRelationVisualizer.test.tsx
import { render, screen } from '@testing-library/react'
import { BloodRelationVisualizer } from '../BloodRelationVisualizer'
import type { BloodRelationProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => { useVisualizerStore.getState().reset() })

const mockProblem: BloodRelationProblem = {
  id: 'br-test',
  question: 'A is the father of B. How is A related to B?',
  nodes: [
    { id: 'A', name: 'A', gender: 'M', generation: -1 },
    { id: 'B', name: 'B', gender: 'M', generation: 0 },
  ],
  edges: [{ from: 'A', to: 'B', label: 'father of' }],
  steps: ['A is father of B.', 'Answer: A is the father of B.'],
  answer: 'A is the father of B.',
}

describe('BloodRelationVisualizer', () => {
  it('renders the question', () => {
    render(<BloodRelationVisualizer problem={mockProblem} />)
    expect(screen.getByText(/A is the father of B/)).toBeInTheDocument()
  })

  it('renders an SVG canvas', () => {
    const { container } = render(<BloodRelationVisualizer problem={mockProblem} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
```

**Step 2: Run test — verify FAIL**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/BloodRelationVisualizer.test.tsx --reporter=verbose
```

**Step 3: Implement `BloodRelationVisualizer.tsx`**

Design decisions:
- SVG viewBox `0 0 600 300`
- Generation bands: generation -1 at y=60, generation 0 at y=180, generation 1 at y=270
- Node circles: r=28, nodes spread evenly by x-position within generation
- Edge lines between node centres; label rendered as SVG `<text>` at midpoint
- Steps are cumulative: `visibleSteps = steps.slice(0, currentStep + 1)`; visible nodes/edges determined by which step introduced them
- Node introduced = first step index where node appears in step text (simple heuristic: all nodes visible from step 0, cumulative edge reveal per step)
- For simplicity: all nodes visible at step 0; edges revealed one per step (edge index = step index - 1 for steps > 0)
- `StepController` drives currentStep from `useVisualizerStore`

```tsx
'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { BloodRelationProblem, BloodRelationNode } from '@/types/reasoning'

const GEN_Y: Record<number, number> = {
  [-2]: 40,
  [-1]: 110,
  0: 200,
  1: 280,
}

const PURPLE = '#8b5cf6'

function getNodeX(node: BloodRelationNode, allNodes: BloodRelationNode[]): number {
  const sameGen = allNodes.filter((n) => n.generation === node.generation)
  const idx = sameGen.findIndex((n) => n.id === node.id)
  const step = 600 / (sameGen.length + 1)
  return step * (idx + 1)
}

export function BloodRelationVisualizer({ problem }: { problem: BloodRelationProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    reset()
    setSteps(problem.steps.length)
  }, [problem, reset, setSteps])

  const visibleEdges = problem.edges.slice(0, currentStep)
  const currentStepText = problem.steps[currentStep] ?? ''
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg
        viewBox="0 0 600 320"
        className="w-full rounded-lg border border-border-primary bg-bg-secondary"
        aria-label="Family tree diagram"
      >
        {/* Edges */}
        {visibleEdges.map((edge, i) => {
          const from = problem.nodes.find((n) => n.id === edge.from)!
          const to = problem.nodes.find((n) => n.id === edge.to)!
          const x1 = getNodeX(from, problem.nodes)
          const y1 = GEN_Y[from.generation] ?? 150
          const x2 = getNodeX(to, problem.nodes)
          const y2 = GEN_Y[to.generation] ?? 200
          const mx = (x1 + x2) / 2
          const my = (y1 + y2) / 2
          return (
            <g key={i}>
              <motion.line
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={isLastStep ? PURPLE : '#94a3b8'}
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <text x={mx} y={my - 6} textAnchor="middle" fontSize="10" fill="#64748b">
                {edge.label}
              </text>
            </g>
          )
        })}

        {/* Nodes */}
        {problem.nodes.map((node) => {
          const x = getNodeX(node, problem.nodes)
          const y = GEN_Y[node.generation] ?? 150
          return (
            <g key={node.id}>
              <circle
                cx={x} cy={y} r={28}
                fill={isLastStep ? `${PURPLE}22` : '#f1f5f9'}
                stroke={isLastStep ? PURPLE : '#94a3b8'}
                strokeWidth="2"
              />
              <text x={x} y={y - 4} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">
                {node.name}
              </text>
              <text x={x} y={y + 12} textAnchor="middle" fontSize="10" fill="#64748b">
                {node.gender === 'M' ? '♂' : '♀'}
              </text>
            </g>
          )
        })}
      </svg>

      <StepController
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepChange={goToStep}
        isPlaying={isPlaying}
        onTogglePlay={toggleAutoPlay}
        onReset={reset}
      />

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStepText}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {currentStepText}
        </motion.p>
      </AnimatePresence>

      {isLastStep && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">Answer</p>
          <p className="mt-1 text-sm font-medium text-subject-reasoning-dark">{problem.answer}</p>
        </div>
      )}
    </div>
  )
}
```

**Step 4: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/BloodRelationVisualizer.test.tsx --reporter=verbose
```

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/BloodRelationVisualizer.tsx src/components/visualizers/reasoning/__tests__/BloodRelationVisualizer.test.tsx
git commit -m "feat(reasoning): add BloodRelationVisualizer component"
```

---

## Task 11: Create `DirectionVisualizer` component

**Files:**
- Create: `src/components/visualizers/reasoning/DirectionVisualizer.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/DirectionVisualizer.test.tsx`

**Design:** SVG compass grid (600×400). Compass rose at top-right. Origin point at center. Each step draws a path segment with `motion.line`. Animated dot moves to new position. After all steps, dashed line shows displacement.

**Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { DirectionVisualizer } from '../DirectionVisualizer'
import type { DirectionProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => { useVisualizerStore.getState().reset() })

const mockProblem: DirectionProblem = {
  id: 'dir-test',
  question: 'Walk 5 km North then 3 km East.',
  steps: [
    { id: 1, direction: 'N', distance: 5, label: 'Walk 5 km North' },
    { id: 2, direction: 'E', distance: 3, label: 'Walk 3 km East' },
  ],
  finalDirection: 'NE',
  finalDistance: 5.83,
  answer: '5.83 km NE.',
}

describe('DirectionVisualizer', () => {
  it('renders the question', () => {
    render(<DirectionVisualizer problem={mockProblem} />)
    expect(screen.getByText(/Walk 5 km North then 3 km East/)).toBeInTheDocument()
  })

  it('renders an SVG canvas', () => {
    const { container } = render(<DirectionVisualizer problem={mockProblem} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
```

**Step 2: Run test — verify FAIL**

**Step 3: Implement `DirectionVisualizer.tsx`**

```tsx
'use client'

import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { DirectionProblem, DirectionStep } from '@/types/reasoning'

const DIR_DELTA: Record<DirectionStep['direction'], [number, number]> = {
  N:  [0, -1],  S:  [0, 1],
  E:  [1, 0],   W:  [-1, 0],
  NE: [1, -1],  NW: [-1, -1],
  SE: [1, 1],   SW: [-1, 1],
}

const SCALE = 22   // pixels per km unit
const CX = 300     // canvas center x
const CY = 220     // canvas center y (slightly above middle for compass room)

function computePoints(steps: DirectionStep[]): [number, number][] {
  const pts: [number, number][] = [[CX, CY]]
  for (const s of steps) {
    const [dx, dy] = DIR_DELTA[s.direction]
    const [px, py] = pts[pts.length - 1]
    pts.push([px + dx * s.distance * SCALE, py + dy * s.distance * SCALE])
  }
  return pts
}

export function DirectionVisualizer({ problem }: { problem: DirectionProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    reset()
    setSteps(problem.steps.length + 1)  // +1 for final displacement step
  }, [problem, reset, setSteps])

  const points = useMemo(() => computePoints(problem.steps), [problem])
  const visibleSegments = currentStep  // segments 0..currentStep-1 are visible
  const isLastStep = currentStep === totalSteps - 1
  const dot = points[Math.min(currentStep, points.length - 1)]

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      <svg viewBox="0 0 600 400" className="w-full rounded-lg border border-border-primary bg-bg-secondary" aria-label="Direction diagram">
        {/* Grid lines */}
        {[-4,-3,-2,-1,0,1,2,3,4].map(i => (
          <g key={i}>
            <line x1={CX + i*SCALE*3} y1={20} x2={CX + i*SCALE*3} y2={380} stroke="#e2e8f0" strokeWidth="1" />
            <line x1={20} y1={CY + i*SCALE*3} x2={580} y2={CY + i*SCALE*3} stroke="#e2e8f0" strokeWidth="1" />
          </g>
        ))}
        {/* Axis labels */}
        <text x={CX} y={15} textAnchor="middle" fontSize="11" fill="#64748b">N</text>
        <text x={CX} y={395} textAnchor="middle" fontSize="11" fill="#64748b">S</text>
        <text x={585} y={CY + 4} textAnchor="middle" fontSize="11" fill="#64748b">E</text>
        <text x={12} y={CY + 4} textAnchor="middle" fontSize="11" fill="#64748b">W</text>

        {/* Origin */}
        <circle cx={CX} cy={CY} r={5} fill="#475569" />
        <text x={CX + 8} y={CY + 14} fontSize="10" fill="#475569">Start</text>

        {/* Path segments */}
        {points.slice(0, visibleSegments + 1).map((pt, i) => {
          if (i === 0) return null
          const [x1, y1] = points[i - 1]
          const [x2, y2] = pt
          const step = problem.steps[i - 1]
          const mx = (x1 + x2) / 2
          const my = (y1 + y2) / 2
          return (
            <g key={i}>
              <motion.line x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#8b5cf6" strokeWidth="3"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
              />
              <text x={mx + 4} y={my - 4} fontSize="10" fill="#64748b">{step.label}</text>
            </g>
          )
        })}

        {/* Displacement line on last step */}
        {isLastStep && (
          <motion.line
            x1={CX} y1={CY}
            x2={points[points.length - 1][0]} y2={points[points.length - 1][1]}
            stroke="#ef4444" strokeWidth="2" strokeDasharray="6 4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          />
        )}

        {/* Moving dot */}
        <motion.circle cx={dot[0]} cy={dot[1]} r={8} fill="#8b5cf6"
          animate={{ cx: dot[0], cy: dot[1] }} transition={{ duration: 0.4 }}
        />
      </svg>

      <StepController
        currentStep={currentStep} totalSteps={totalSteps}
        onStepChange={goToStep} isPlaying={isPlaying}
        onTogglePlay={toggleAutoPlay} onReset={reset}
      />

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          {currentStep < problem.steps.length
            ? problem.steps[currentStep]?.label
            : `Final displacement: ${problem.finalDistance} km ${problem.finalDirection}`}
        </motion.p>
      </AnimatePresence>

      {isLastStep && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">Answer</p>
          <p className="mt-1 text-sm font-medium text-subject-reasoning-dark">{problem.answer}</p>
        </div>
      )}
    </div>
  )
}
```

**Step 4: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/DirectionVisualizer.test.tsx --reporter=verbose
```

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/DirectionVisualizer.tsx src/components/visualizers/reasoning/__tests__/DirectionVisualizer.test.tsx
git commit -m "feat(reasoning): add DirectionVisualizer component"
```

---

## Task 12: Create `CodingDecodingVisualizer` component

**Files:**
- Create: `src/components/visualizers/reasoning/CodingDecodingVisualizer.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/CodingDecodingVisualizer.test.tsx`

**Design:** Two horizontal strips (Input / Coded). A highlight box slides from left to right across input letters, lighting up the corresponding coded letter. Each step reveals the next rule + decode.

**Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { CodingDecodingVisualizer } from '../CodingDecodingVisualizer'
import type { CodingDecodingProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => { useVisualizerStore.getState().reset() })

const mockProblem: CodingDecodingProblem = {
  id: 'cd-test',
  type: 'letter-shift',
  question: 'Each letter +3. Code: CAT.',
  codingRules: [
    { input: 'C', output: 'F', pattern: '+3' },
    { input: 'A', output: 'D', pattern: '+3' },
    { input: 'T', output: 'W', pattern: '+3' },
  ],
  steps: ['C → F', 'A → D', 'T → W'],
  answer: 'CAT is coded as FDW.',
}

describe('CodingDecodingVisualizer', () => {
  it('renders the question', () => {
    render(<CodingDecodingVisualizer problem={mockProblem} />)
    expect(screen.getByText(/Each letter \+3/)).toBeInTheDocument()
  })

  it('renders input letters', () => {
    render(<CodingDecodingVisualizer problem={mockProblem} />)
    expect(screen.getAllByText('C').length).toBeGreaterThan(0)
  })
})
```

**Step 2: Run test — verify FAIL**

**Step 3: Implement `CodingDecodingVisualizer.tsx`**

```tsx
'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { CodingDecodingProblem } from '@/types/reasoning'

export function CodingDecodingVisualizer({ problem }: { problem: CodingDecodingProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    reset()
    setSteps(problem.steps.length)
  }, [problem, reset, setSteps])

  const visibleRules = problem.codingRules.slice(0, currentStep + 1)
  const currentRule = problem.codingRules[currentStep]
  const isLastStep = currentStep === totalSteps - 1

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="text-sm text-text-secondary">{problem.question}</p>
      </div>

      {/* Cipher table */}
      <div className="overflow-hidden rounded-lg border border-border-primary">
        <div className="grid grid-cols-3 bg-bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          <span>Input</span><span>→</span><span>Coded</span>
        </div>
        {visibleRules.map((rule, i) => (
          <motion.div
            key={rule.input}
            className={`grid grid-cols-3 px-4 py-3 text-sm ${i === currentStep ? 'bg-subject-reasoning-light' : 'bg-bg-elevated'}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className={`font-mono font-bold ${i === currentStep ? 'text-subject-reasoning' : 'text-text-primary'}`}>{rule.input}</span>
            <span className="text-text-muted">→</span>
            <span className={`font-mono font-bold ${i === currentStep ? 'text-subject-reasoning' : 'text-text-primary'}`}>{rule.output}</span>
          </motion.div>
        ))}
      </div>

      {/* Letter strips */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-2">
          {problem.codingRules.map((rule, i) => (
            <motion.div
              key={rule.input}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 font-mono text-lg font-bold transition-colors ${
                i === currentStep
                  ? 'border-subject-reasoning bg-subject-reasoning-light text-subject-reasoning'
                  : i < currentStep
                  ? 'border-border-primary bg-bg-elevated text-text-secondary'
                  : 'border-border-primary bg-bg-elevated text-text-muted'
              }`}
            >
              {rule.input}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {problem.codingRules.map((rule, i) => (
            <div
              key={rule.output}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 font-mono text-lg font-bold transition-colors ${
                i <= currentStep
                  ? 'border-subject-reasoning bg-subject-reasoning-light text-subject-reasoning'
                  : 'border-border-primary bg-bg-elevated text-text-muted opacity-30'
              }`}
            >
              {i <= currentStep ? rule.output : '?'}
            </div>
          ))}
        </div>
      </div>

      <StepController
        currentStep={currentStep} totalSteps={totalSteps}
        onStepChange={goToStep} isPlaying={isPlaying}
        onTogglePlay={toggleAutoPlay} onReset={reset}
      />

      <AnimatePresence mode="wait">
        {currentRule && (
          <motion.p
            key={currentRule.input}
            className="text-center text-sm text-text-secondary"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            {currentRule.input} → {currentRule.output} &nbsp;({currentRule.pattern})
          </motion.p>
        )}
      </AnimatePresence>

      {isLastStep && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-subject-reasoning-dark">Answer</p>
          <p className="mt-1 text-sm font-medium text-subject-reasoning-dark">{problem.answer}</p>
        </div>
      )}
    </div>
  )
}
```

**Step 4: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/CodingDecodingVisualizer.test.tsx --reporter=verbose
```

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/CodingDecodingVisualizer.tsx src/components/visualizers/reasoning/__tests__/CodingDecodingVisualizer.test.tsx
git commit -m "feat(reasoning): add CodingDecodingVisualizer component"
```

---

## Task 13: Create `PuzzleVisualizer` component

**Files:**
- Create: `src/components/visualizers/reasoning/PuzzleVisualizer.tsx`
- Create: `src/components/visualizers/reasoning/__tests__/PuzzleVisualizer.test.tsx`

**Design:** Vertical stack of numbered cells. Each step animates a person chip into the correct cell using `motion.div` layout animations. Cells start empty; confirmed cells show a colored chip; eliminated cells show a ✗.

**Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { PuzzleVisualizer } from '../PuzzleVisualizer'
import type { PuzzleProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => { useVisualizerStore.getState().reset() })

const mockProblem: PuzzleProblem = {
  id: 'puz-test',
  type: 'floor',
  totalPositions: 3,
  clues: ['A is on Floor 3.', 'B is on Floor 1.'],
  steps: ['A → Floor 3', 'B → Floor 1', 'C → Floor 2 (elimination)'],
  solution: [
    { position: 1, occupant: 'B' },
    { position: 2, occupant: 'C' },
    { position: 3, occupant: 'A' },
  ],
}

describe('PuzzleVisualizer', () => {
  it('renders clues', () => {
    render(<PuzzleVisualizer problem={mockProblem} />)
    expect(screen.getByText('A is on Floor 3.')).toBeInTheDocument()
  })

  it('renders floor labels', () => {
    render(<PuzzleVisualizer problem={mockProblem} />)
    expect(screen.getByText('Floor 3')).toBeInTheDocument()
    expect(screen.getByText('Floor 1')).toBeInTheDocument()
  })
})
```

**Step 2: Run test — verify FAIL**

**Step 3: Implement `PuzzleVisualizer.tsx`**

```tsx
'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVisualizerStore } from '@/store/visualizerStore'
import { StepController } from '@/components/ui/StepController'
import type { PuzzleProblem } from '@/types/reasoning'

export function PuzzleVisualizer({ problem }: { problem: PuzzleProblem }) {
  const { currentStep, totalSteps, isPlaying, setSteps, goToStep, toggleAutoPlay, reset } =
    useVisualizerStore()

  useEffect(() => {
    reset()
    setSteps(problem.steps.length)
  }, [problem, reset, setSteps])

  // Build progressive state: solution cells revealed up to currentStep
  const revealedSolution = problem.solution.slice(
    0,
    Math.min(currentStep + 1, problem.solution.length)
  )
  const revealedPositions = new Set(revealedSolution.map((c) => c.position))

  // Render floors from top (N) to bottom (1)
  const floors = Array.from({ length: problem.totalPositions }, (_, i) => ({
    position: problem.totalPositions - i,
    label: problem.type === 'floor' ? `Floor ${problem.totalPositions - i}` : `Box ${problem.totalPositions - i}`,
  }))

  return (
    <div className="flex flex-col gap-5">
      {/* Clues */}
      <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Clues</p>
        <ol className="flex flex-col gap-1">
          {problem.clues.map((clue, i) => (
            <li key={i} className="text-sm text-text-secondary">
              {i + 1}. {clue}
            </li>
          ))}
        </ol>
      </div>

      {/* Floor grid */}
      <div className="flex flex-col gap-2">
        {floors.map(({ position, label }) => {
          const cell = problem.solution.find((c) => c.position === position)
          const isRevealed = revealedPositions.has(position)
          return (
            <div key={position} className="flex items-center gap-3">
              <span className="w-16 shrink-0 text-right text-xs text-text-muted">{label}</span>
              <motion.div
                layout
                className={`flex h-14 flex-1 items-center justify-center rounded-lg border-2 transition-colors ${
                  isRevealed
                    ? 'border-subject-reasoning bg-subject-reasoning-light'
                    : 'border-border-primary bg-bg-elevated'
                }`}
              >
                <AnimatePresence>
                  {isRevealed && cell?.occupant && (
                    <motion.span
                      key={cell.occupant}
                      className="text-lg font-bold text-subject-reasoning"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {cell.occupant}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )
        })}
      </div>

      <StepController
        currentStep={currentStep} totalSteps={totalSteps}
        onStepChange={goToStep} isPlaying={isPlaying}
        onTogglePlay={toggleAutoPlay} onReset={reset}
      />

      <AnimatePresence mode="wait">
        <motion.p
          key={currentStep}
          className="text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          {problem.steps[currentStep]}
        </motion.p>
      </AnimatePresence>

      {currentStep === totalSteps - 1 && (
        <div className="rounded-lg border border-subject-reasoning bg-subject-reasoning-light p-3">
          <p className="text-center text-sm font-semibold text-subject-reasoning-dark">
            All positions solved!
          </p>
        </div>
      )}
    </div>
  )
}
```

**Step 4: Run test — verify PASS**

```bash
npx vitest run src/components/visualizers/reasoning/__tests__/PuzzleVisualizer.test.tsx --reporter=verbose
```

**Step 5: Commit**

```bash
git add src/components/visualizers/reasoning/PuzzleVisualizer.tsx src/components/visualizers/reasoning/__tests__/PuzzleVisualizer.test.tsx
git commit -m "feat(reasoning): add PuzzleVisualizer component"
```

---

## Task 14: Create `/reasoning/[topic]` dynamic route

**Files:**
- Create: `src/app/reasoning/[topic]/page.tsx`

This is a server component. It dispatches to the right visualizer or `ReasoningTopicTabs` based on the slug. No tests needed — the TypeScript build and static generation are the verification.

**Step 1: Create `src/app/reasoning/[topic]/page.tsx`**

```tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'
import type { BloodRelationProblem, DirectionProblem, CodingDecodingProblem, PuzzleProblem } from '@/types/reasoning'
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
    description: 'Master coded inequalities for SSC CGL, IBPS PO, and banking exams. Concepts, shortcuts, and animated step-by-step problems.',
  },
  analogies: {
    kind: 'tabs',
    concept: analogiesConcept,
    tricks: analogiesTricks,
    problems: analogiesProblems,
    label: 'Analogies',
    description: 'Solve analogy problems for all major government exams. Semantic, symbolic, and alphabetical analogy patterns with tricks.',
  },
  classification: {
    kind: 'tabs',
    concept: classificationConcept,
    tricks: classificationTricks,
    problems: classificationProblems,
    label: 'Classification',
    description: 'Identify the odd one out using semantic, letter, number, and code patterns for SSC and IBPS exams.',
  },
  'statement-conclusions': {
    kind: 'tabs',
    concept: statementConclusionsConcept,
    tricks: statementConclusionsTricks,
    problems: statementConclusionsProblems,
    label: 'Statement & Conclusions',
    description: 'Determine valid conclusions from statements for UPSC CSAT, SSC CGL, and banking exams.',
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
    description: 'EJOTY trick, letter series, dictionary order, and word formation problems for SSC and banking exams.',
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
    description: 'Solve blood relation problems with animated family tree builder for SSC CGL and IBPS PO.',
  },
  'direction-distance': {
    kind: 'visualizer',
    type: 'direction-distance',
    label: 'Direction & Distance',
    description: 'Solve direction and distance problems with animated compass path for all major exams.',
  },
  'coding-decoding': {
    kind: 'visualizer',
    type: 'coding-decoding',
    label: 'Coding-Decoding',
    description: 'Decode cipher patterns with animated letter-by-letter visualization for SSC and IBPS exams.',
  },
  puzzles: {
    kind: 'visualizer',
    type: 'puzzles',
    label: 'Floor & Box Puzzles',
    description: 'Solve floor and box puzzle arrangements with animated grid for IBPS PO, SBI PO, and SSC CGL.',
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
      {data.type === 'puzzles' && (
        <PuzzleVisualizer problem={puzzleProblems[0]} />
      )}
    </div>
  )
}
```

> **Note:** The new visualizer pages only show `problems[0]` for now. A future task can add a problem picker.

**Step 2: Verify build**

```bash
npx tsc --noEmit
```
Expected: No errors.

**Step 3: Commit**

```bash
git add 'src/app/reasoning/[topic]/page.tsx'
git commit -m "feat(reasoning): add /reasoning/[topic] dynamic route for 11 new topics"
```

---

## Task 15: Update `reasoning/layout.tsx` and `reasoning/page.tsx`

**Files:**
- Modify: `src/app/reasoning/layout.tsx`
- Modify: `src/app/reasoning/page.tsx`

**Step 1: Replace `src/app/reasoning/layout.tsx`**

```tsx
import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function ReasoningLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Reasoning & Logic"
      subjectColor="#8b5cf6"
      subjectSlug="reasoning"
      showHeading={false}
      links={[
        { href: '/reasoning/seating',              label: 'Seating Arrangement',    group: 'Visualizers' },
        { href: '/reasoning/blood-relations',       label: 'Blood Relations',        group: 'Visualizers' },
        { href: '/reasoning/direction-distance',    label: 'Direction & Distance',   group: 'Visualizers' },
        { href: '/reasoning/coding-decoding',       label: 'Coding-Decoding',        group: 'Visualizers' },
        { href: '/reasoning/puzzles',               label: 'Floor & Box Puzzles',    group: 'Visualizers' },
        { href: '/reasoning/syllogism',             label: 'Syllogism',              group: 'Visualizers' },
        { href: '/reasoning/series',                label: 'Series & Patterns',      group: 'Visualizers' },
        { href: '/reasoning/inequalities',          label: 'Inequalities',           group: 'Verbal' },
        { href: '/reasoning/analogies',             label: 'Analogies',              group: 'Verbal' },
        { href: '/reasoning/classification',        label: 'Classification',         group: 'Verbal' },
        { href: '/reasoning/alphabet-tests',        label: 'Alphabet Tests',         group: 'Verbal' },
        { href: '/reasoning/input-output',          label: 'Input-Output',           group: 'Verbal' },
        { href: '/reasoning/statement-conclusions', label: 'Statement & Conclusions',group: 'Logical' },
        { href: '/reasoning/cause-effect',          label: 'Cause & Effect',         group: 'Logical' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
```

Note: `subjectColor` changed from `#a855f7` to `#8b5cf6` (the CSS variable `--color-subject-reasoning`). Also note `showHeading={false}` is added — each topic page renders its own H1.

**Step 2: Replace `src/app/reasoning/page.tsx`**

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reasoning & Logic — Interactive Visual Learning',
  description:
    'Master reasoning and logic for SSC CGL, IBPS PO, RRB NTPC, and UPSC CSAT. Blood relations, direction, coding-decoding, puzzles, inequalities, analogies, and more.',
}

interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
}

interface Section {
  heading: string
  subheading: string
  topics: Topic[]
}

const SECTIONS: Section[] = [
  {
    heading: 'Interactive Visualizers',
    subheading: 'Step-by-step animated problem solvers',
    topics: [
      { href: '/reasoning/seating',           title: 'Seating Arrangement',     description: 'Solve linear and circular seating problems with animated visual deductions.',              hasTabs: false },
      { href: '/reasoning/blood-relations',   title: 'Blood Relations',         description: 'Build family trees step-by-step to identify relationships.',                               hasTabs: false },
      { href: '/reasoning/direction-distance',title: 'Direction & Distance',    description: 'Animate paths on a compass grid and find displacement.',                                   hasTabs: false },
      { href: '/reasoning/coding-decoding',   title: 'Coding-Decoding',         description: 'Reveal cipher rules and decode letter-by-letter with animation.',                         hasTabs: false },
      { href: '/reasoning/puzzles',           title: 'Floor & Box Puzzles',     description: 'Place persons clue-by-clue in floor or box arrangements.',                                hasTabs: false },
      { href: '/reasoning/syllogism',         title: 'Syllogism',               description: 'Build Venn diagrams step-by-step to evaluate syllogism conclusions.',                      hasTabs: false },
      { href: '/reasoning/series',            title: 'Series & Patterns',       description: 'Detect number and letter series patterns with highlighted differences.',                   hasTabs: false },
    ],
  },
  {
    heading: 'Verbal Reasoning',
    subheading: 'High-frequency topics for SSC, IBPS, RRB',
    topics: [
      { href: '/reasoning/inequalities',  title: 'Inequalities',     description: 'Coded inequalities — decode symbols, combine chains, determine conclusions.',    hasTabs: true },
      { href: '/reasoning/analogies',     title: 'Analogies',        description: 'Semantic, symbolic, and alphabetical analogy types — pair relationships.',       hasTabs: true },
      { href: '/reasoning/classification',title: 'Classification',   description: 'Odd one out — semantic group, letter pattern, number property, code pattern.',   hasTabs: true },
      { href: '/reasoning/alphabet-tests',title: 'Alphabet Tests',   description: 'EJOTY trick, letter series, dictionary order, and word formation problems.',     hasTabs: true },
      { href: '/reasoning/input-output',  title: 'Input-Output',     description: 'Decode machine rearrangement rules — step-by-step word/number patterns.',       hasTabs: true },
    ],
  },
  {
    heading: 'Logical Reasoning',
    subheading: 'Critical thinking topics for UPSC CSAT and banking',
    topics: [
      { href: '/reasoning/statement-conclusions', title: 'Statement & Conclusions', description: 'Identify valid conclusions — definite vs. possible, implicit assumptions.', hasTabs: true },
      { href: '/reasoning/cause-effect',          title: 'Cause & Effect',          description: 'Independent causes, common causes, and effect-as-cause traps.',           hasTabs: true },
    ],
  },
]

export default function ReasoningPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold" style={{ color: '#8b5cf6' }}>Reasoning & Logic</h1>
      <p className="text-text-secondary">
        Master reasoning and logic with interactive animated visualizers and concept sheets.
        Each topic covers exam shortcuts and step-by-step animated practice problems.
      </p>

      {SECTIONS.map((section) => (
        <section key={section.heading}>
          <div className="mb-3">
            <h2 className="text-base font-semibold text-text-primary">{section.heading}</h2>
            <p className="text-xs text-text-muted">{section.subheading}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="rounded-lg border border-border-primary bg-bg-elevated p-4 no-underline transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-sm font-semibold text-text-primary">{topic.title}</h3>
                <p className="mb-2 text-xs leading-relaxed text-text-secondary">{topic.description}</p>
                {topic.hasTabs && (
                  <p className="text-xs text-text-muted">5 concepts · 5 tricks · 5 problems</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
```

**Step 3: Verify build**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add src/app/reasoning/layout.tsx src/app/reasoning/page.tsx
git commit -m "feat(reasoning): update hub page and layout with all 14 topics"
```

---

## Task 16: Update `sitemap.ts`

**File:**
- Modify: `src/app/sitemap.ts`

**Step 1: Add 11 new reasoning routes** to the `routes` array (after the existing 3 reasoning routes):

```ts
'/reasoning/blood-relations',
'/reasoning/direction-distance',
'/reasoning/coding-decoding',
'/reasoning/puzzles',
'/reasoning/inequalities',
'/reasoning/analogies',
'/reasoning/classification',
'/reasoning/statement-conclusions',
'/reasoning/input-output',
'/reasoning/alphabet-tests',
'/reasoning/cause-effect',
```

Also, add all 31 quant topic routes if they are not already there (check first — they may already be present via the existing sitemap). The priority formula `route.split('/').length === 2 ? 0.8 : 0.6` already handles sub-routes correctly.

**Step 2: Verify build**

```bash
npx tsc --noEmit
```

**Step 3: Run full test suite**

```bash
npx vitest run --reporter=verbose
```
Expected: All tests pass.

**Step 4: Run Next.js build to verify static generation**

```bash
npx next build 2>&1 | tail -30
```
Expected: `✓ Generating static pages` with a count that includes the new routes (should be > 61 — the previous count).

**Step 5: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(reasoning): add 11 new reasoning routes to sitemap"
```

---

## Final Verification

```bash
npx vitest run --reporter=verbose
npx tsc --noEmit
npx next build 2>&1 | tail -20
```

All tests pass, no TypeScript errors, build succeeds with static page generation for all new routes.
