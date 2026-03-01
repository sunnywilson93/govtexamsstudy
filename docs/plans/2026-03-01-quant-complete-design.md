# Quant Complete — Feature Design

**Date:** 2026-03-01
**Status:** Approved
**Reference syllabus:** `docs/plans/2026-03-01-quant-syllabus.md`
**Books referenced:** R.S. Aggarwal "Quantitative Aptitude", M. Tyra "Magical Book on Quicker Maths"

---

## Goal

Make the Quantitative Aptitude section a complete, self-contained learning unit — not just a problem solver. Each topic delivers:

1. **Concept** — what it is, why it matters, core formulas
2. **Tricks** — formula shortcuts + mental math tricks (R.S. Aggarwal pedagogy + M. Tyra shortcuts)
3. **Problems** — step-by-step animated solver (existing StepSolver component)

---

## Scope

### Phase 1 (this implementation)
Build all three layers (Concept + Tricks + Problems) for the top 5 topics:
- Percentage
- Profit, Loss & Discount
- Ratio & Proportion
- Time, Speed & Distance
- Time & Work

### Phase 2 / 3
Routes reserved; data authored later. See `docs/plans/2026-03-01-quant-syllabus.md` for full topic list.

---

## Approach: Per-topic routes with Concept | Tricks | Problems tabs

**Rationale:**
- Matches existing platform pattern (polity/articles, history/timeline, etc.)
- Each topic URL is independently indexable for SEO ("percentage tricks for SSC CGL" → `/quant/percentage`)
- Concept → Tricks → Problems is a single cohesive learning flow per topic
- Scales cleanly as Phase 2/3 topics are added later

---

## Routing

```
/quant                          Hub page — 5 topic cards + Geometry card (no "Coming Soon")
/quant/[topic]                  Dynamic route for all 15 topics
/quant/geometry                 Keep as-is (GeometryVisualizer, different pattern)
/quant/step-solver              Redirect → /quant/percentage
```

**Phase 1 topic slugs:** `percentage`, `profit-loss`, `ratio`, `time-speed-distance`, `time-work`

The hub `/quant` page is updated to show 5 topic cards (Concept | Tricks | Problems) + the Geometry card, removing "Coming Soon" badges.

---

## Data Model

### Extended `QuantTopic` type

```ts
export type QuantTopic =
  | "percentage"
  | "profit-loss"
  | "ratio"
  | "time-speed-distance"
  | "time-work"
  | "number-system"
  | "average"
  | "simple-compound-interest"
  | "mixture-alligation"
  | "mensuration"
  | "algebra"
  | "geometry"
  | "trigonometry"
  | "data-interpretation"
  | "statistics-probability"
```

### New types (add to `src/types/quant.ts`)

```ts
export interface QuantConcept {
  topic: QuantTopic
  title: string
  description: string      // plain-language explanation of the topic
  keyIdea: string          // the single most important insight to remember
  formulas: ConceptFormula[]
  examRelevance: string    // why this appears in SSC/banking exams
}

export interface ConceptFormula {
  name: string             // e.g. "Percentage Change"
  formula: string          // e.g. "Change% = (Change / Original) × 100"
  whenToUse: string        // one sentence on when to apply this
}

export interface QuantTrick {
  id: string
  topic: QuantTopic
  type: "formula-shortcut" | "mental-math"
  title: string
  description: string      // what this trick does
  formula?: string         // the shortcut formula (for formula-shortcut type)
  example: {
    problem: string
    solution: string
  }
  timeSaved?: string       // e.g. "~30s vs standard method"
}
```

### Data file structure

```
src/data/quant/
  concepts/
    percentage.ts            → export const percentageConcept: QuantConcept
    profit-loss.ts           → export const profitLossConcept: QuantConcept
    ratio.ts                 → export const ratioConcept: QuantConcept
    time-speed-distance.ts   → export const tsdConcept: QuantConcept
    time-work.ts             → export const timeWorkConcept: QuantConcept
  tricks/
    percentage.ts            → export const percentageTricks: QuantTrick[]
    profit-loss.ts           → export const profitLossTricks: QuantTrick[]
    ratio.ts                 → export const ratioTricks: QuantTrick[]
    time-speed-distance.ts   → export const tsdTricks: QuantTrick[]
    time-work.ts             → export const timeWorkTricks: QuantTrick[]
  problems/
    percentage-problems.ts   (existing, move from root quant/)
    profit-loss-problems.ts  → export const profitLossProblems: MathProblem[]
    ratio-problems.ts        → export const ratioProblems: MathProblem[]
    time-speed-distance-problems.ts
    time-work-problems.ts
```

Each concept file has exactly 5 `ConceptFormula` entries.
Each tricks file has exactly 5 `QuantTrick` entries (mix of formula-shortcut and mental-math).
Each problems file has exactly 5 `MathProblem` entries.

Content for all 15 items per topic sourced from `docs/plans/2026-03-01-quant-syllabus.md`.

---

## Components

### New components

**`src/components/visualizers/quant/ConceptPanel.tsx`**
- Props: `concept: QuantConcept`
- Renders: topic description, key idea callout box (highlighted), formula cards grid (name + formula + whenToUse), exam relevance note
- Server-compatible (no hooks, no animations needed — static content)

**`src/components/visualizers/quant/TricksPanel.tsx`**
- Props: `tricks: QuantTrick[]`
- Groups tricks by `type`: "Formula Shortcuts" section + "Mental Math" section
- Renders `TrickCard` for each

**`src/components/visualizers/quant/TrickCard.tsx`**
- Props: `trick: QuantTrick`
- Shows: title, type badge, description, formula (monospace), example (problem → solution), timeSaved chip
- Framer Motion: `whileHover` scale 1.01 for subtle lift

### Reused components (no changes)
- `StepSolver` — used in Problems tab, receives topic-filtered `MathProblem[]`
- `StepController`, `ExpressionDisplay`, `VariablesPanel` — unchanged

---

## Pages

### `/quant/[topic]/page.tsx`

```tsx
// Server component
// Loads concept + tricks + problems for the given topic param
// Renders <TopicTabs> with the three datasets
```

Three-tab layout rendered by a `'use client'` `TopicTabs` component:

```
[Concept]  [Tricks]  [Problems]
```

- Tab state is local (`useState`) — no store needed
- Active tab highlighted with `text-subject-quant border-b-2 border-subject-quant`
- Tab content swaps with `AnimatePresence` (fade, 0.2s)

### `/quant/page.tsx` (hub, updated)

Replaces current "Coming Soon" card grid with:
- 5 topic cards linking to `/quant/{slug}` — title, one-line description, "5 concepts · 5 tricks · 5 problems" metadata line
- 1 geometry card linking to `/quant/geometry`
- No "Coming Soon" badges

### `/quant/step-solver/page.tsx` (updated)

```tsx
import { redirect } from 'next/navigation'
export default function StepSolverPage() {
  redirect('/quant/percentage')
}
```

---

## Topic Page UX Flow

```
Student lands on /quant/percentage
│
├── [Concept tab] — default
│     What is Percentage?
│     Key Idea: "Percent = per hundred — always divide by the ORIGINAL"
│     Formula cards:
│       • Percentage Change = (Change / Original) × 100
│       • Find X% of N = (X/100) × N
│       • Reverse: Original = Result × 100 / Percentage
│       • Successive change: a + b + ab/100
│       • Base equivalence: X% of Y = Y% of X
│     Exam note: "Appears in 3-4 questions in every SSC/banking paper"
│
├── [Tricks tab]
│     Formula Shortcuts
│       • Successive % change formula (save re-computing step by step)
│       • Reverse percentage (find original from changed value)
│       • Fraction equivalents (12.5%=1/8, 33.33%=1/3, etc.)
│     Mental Math
│       • Find 1%: move decimal 2 left; multiply to get any %
│       • Find 15%: 10% + half of 10%
│
└── [Problems tab]
      StepSolver component
      Topic: "percentage"
      5 problems, step-by-step animated
```

---

## What Changes vs. Current State

| Area | Before | After |
|------|--------|-------|
| `/quant` hub | 2 "Coming Soon" cards | 5 topic cards + 1 geometry card |
| `/quant/step-solver` | Percentage problems only | Redirects to `/quant/percentage` |
| `/quant/percentage` | Does not exist | Concept + Tricks + Problems tabs |
| `/quant/profit-loss` | Does not exist | Concept + Tricks + Problems tabs |
| `/quant/ratio` | Does not exist | Concept + Tricks + Problems tabs |
| `/quant/time-speed-distance` | Does not exist | Concept + Tricks + Problems tabs |
| `/quant/time-work` | Does not exist | Concept + Tricks + Problems tabs |
| `src/types/quant.ts` | 8-value QuantTopic | 15-value QuantTopic + 3 new interfaces |
| `src/data/quant/` | 1 file (percentage-problems) | 15 files (5 concepts + 5 tricks + 4 new problem files) |
| `src/components/visualizers/quant/` | 4 files | + ConceptPanel, TricksPanel, TrickCard, TopicTabs |

---

## SEO

Each topic page exports `metadata` with:
```ts
title: "Percentage — Concepts, Tricks & Problems | GovtExams"
description: "Learn percentage for SSC CGL and banking exams. Master the key concepts, shortcut formulas, and practice 5 curated problems with animated step-by-step solutions."
```

The sitemap (`src/app/sitemap.ts`) already covers `/quant/*` sub-routes at priority 0.6 — no change needed.
