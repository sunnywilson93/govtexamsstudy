# Quant Complete — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a complete Concept → Tricks → Problems learning flow for the top 5 quant topics, delivered via per-topic routes at `/quant/[topic]`.

**Architecture:** Dynamic route `/quant/[topic]` renders a three-tab page (Concept | Tricks | Problems) backed by typed TS data files per topic. Existing `StepSolver` component is reused in the Problems tab. Three new display components handle concept and tricks rendering.

**Tech Stack:** Next.js App Router (server pages + `'use client'` components), TypeScript, Framer Motion, Tailwind CSS v4, Vitest + React Testing Library.

**Design doc:** `docs/plans/2026-03-01-quant-complete-design.md`
**Syllabus content:** `docs/plans/2026-03-01-quant-syllabus.md` — source of truth for all concepts, tricks, and problem types

---

## Task 1: Extend `QuantTopic` type and add new interfaces

**Files:**
- Modify: `src/types/quant.ts`

**Step 1: Open the file**

Read `src/types/quant.ts` — currently has `MathProblem`, `MathStep`, `QuantTopic` (8 values), `GeometryShape`, `GeometryFormula`.

**Step 2: Replace the file content**

```ts
export interface MathProblem {
  id: string
  topic: QuantTopic
  title: string
  question: string
  steps: MathStep[]
  answer: string
  difficulty: "easy" | "medium" | "hard"
}

export interface MathStep {
  id: number
  operation: string
  expression: string
  result: string
  explanation: string
  variables: Record<string, number | string>
}

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

export interface GeometryShape {
  id: string
  type: "triangle" | "circle" | "rectangle" | "square" | "parallelogram"
  properties: Record<string, number>
  formulas: GeometryFormula[]
}

export interface GeometryFormula {
  name: string
  formula: string
  steps: MathStep[]
}

export interface ConceptFormula {
  name: string
  formula: string
  whenToUse: string
}

export interface QuantConcept {
  topic: QuantTopic
  title: string
  description: string
  keyIdea: string
  formulas: ConceptFormula[]
  examRelevance: string
}

export interface QuantTrick {
  id: string
  topic: QuantTopic
  type: "formula-shortcut" | "mental-math"
  title: string
  description: string
  formula?: string
  example: {
    problem: string
    solution: string
  }
  timeSaved?: string
}
```

**Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

**Step 4: Commit**

```bash
git add src/types/quant.ts
git commit -m "feat(quant): extend QuantTopic to 15 values + add QuantConcept and QuantTrick types"
```

---

## Task 2: Create data directory structure

**Step 1: Create subdirectories**

```bash
mkdir -p src/data/quant/concepts src/data/quant/tricks src/data/quant/problems
```

**Step 2: Move existing file**

```bash
mv src/data/quant/percentage-problems.ts src/data/quant/problems/percentage-problems.ts
```

**Step 3: Verify the import in step-solver page still works**

```bash
npx tsc --noEmit
```

If it errors, update `src/app/quant/step-solver/page.tsx` import path:
```ts
import { percentageProblems } from '@/data/quant/problems/percentage-problems'
```

**Step 4: Commit**

```bash
git add -A src/data/quant/
git add src/app/quant/step-solver/page.tsx
git commit -m "refactor(quant): reorganise data into concepts/ tricks/ problems/ subdirs"
```

---

## Task 3: Create concept data files (5 files)

**Files to create:**
- `src/data/quant/concepts/percentage.ts`
- `src/data/quant/concepts/profit-loss.ts`
- `src/data/quant/concepts/ratio.ts`
- `src/data/quant/concepts/time-speed-distance.ts`
- `src/data/quant/concepts/time-work.ts`

Content for each file is sourced from `docs/plans/2026-03-01-quant-syllabus.md` under the matching topic's "5 Core Concepts" section.

**Step 1: Create `src/data/quant/concepts/percentage.ts`**

```ts
import type { QuantConcept } from "@/types/quant"

export const percentageConcept: QuantConcept = {
  topic: "percentage",
  title: "Percentage",
  description:
    "Percentage means 'per hundred'. Any percentage is a fraction with denominator 100. The ability to convert fluently between %, fraction, and decimal is the foundation of all percentage problems.",
  keyIdea:
    "Always divide by the ORIGINAL (base) value — never by the new value — when computing percentage change.",
  formulas: [
    {
      name: "Find X% of a number",
      formula: "(X / 100) × N",
      whenToUse: "When asked to find what X% of a given number N is.",
    },
    {
      name: "Percentage Change",
      formula: "Change% = (Change / Original) × 100",
      whenToUse: "When a value increases or decreases and you need the % change.",
    },
    {
      name: "Find Original from Changed Value",
      formula: "Original = Result × 100 / (100 ± Change%)",
      whenToUse: "When you know the final value after a % change and need the original.",
    },
    {
      name: "Successive Percentage Changes",
      formula: "Net% = a + b + (ab / 100)",
      whenToUse: "When two percentage changes (a% then b%) are applied one after another.",
    },
    {
      name: "Base Equivalence",
      formula: "X% of Y = Y% of X",
      whenToUse: "When one of the two values is easier to work with as the base.",
    },
  ],
  examRelevance:
    "Percentage appears in 3–4 questions in every SSC CGL, IBPS PO, and SBI PO paper. It is also the foundation for Profit & Loss and SI/CI topics.",
}
```

**Step 2: Create `src/data/quant/concepts/profit-loss.ts`**

```ts
import type { QuantConcept } from "@/types/quant"

export const profitLossConcept: QuantConcept = {
  topic: "profit-loss",
  title: "Profit, Loss & Discount",
  description:
    "Profit and Loss problems involve buying and selling goods. The base is always the Cost Price (CP). Marked Price (MP) is the labelled price; Selling Price (SP) is what the buyer actually pays after any discount.",
  keyIdea:
    "Profit% and Loss% are always calculated on Cost Price (CP) — never on Selling Price or Marked Price.",
  formulas: [
    {
      name: "Profit / Loss Percentage",
      formula: "P% or L% = (Profit or Loss / CP) × 100",
      whenToUse: "To find what percentage of profit or loss was made on the cost price.",
    },
    {
      name: "Selling Price from CP and P%",
      formula: "SP = CP × (100 + P%) / 100",
      whenToUse: "To find SP when CP and profit percentage are known.",
    },
    {
      name: "Selling Price from CP and L%",
      formula: "SP = CP × (100 − L%) / 100",
      whenToUse: "To find SP when CP and loss percentage are known.",
    },
    {
      name: "SP after Discount on Marked Price",
      formula: "SP = MP × (100 − Discount%) / 100",
      whenToUse: "When a discount is applied to the marked price to get actual selling price.",
    },
    {
      name: "Faulty Weight Profit",
      formula: "Profit% = (True weight − False weight) / False weight × 100",
      whenToUse: "When a dishonest dealer uses a lighter weight to give less goods.",
    },
  ],
  examRelevance:
    "Profit & Loss is present in virtually every SSC and banking exam. Dishonest dealer and successive discount variants are frequently tested in SSC CGL Tier 2.",
}
```

**Step 3: Create `src/data/quant/concepts/ratio.ts`**

```ts
import type { QuantConcept } from "@/types/quant"

export const ratioConcept: QuantConcept = {
  topic: "ratio",
  title: "Ratio & Proportion",
  description:
    "A ratio a:b expresses the relative magnitude of two quantities — it is the fraction a/b. A proportion states that two ratios are equal: a:b :: c:d means a/b = c/d.",
  keyIdea:
    "A ratio gives relative size, not absolute size. Always reduce to lowest terms (divide by GCD) before working with a ratio.",
  formulas: [
    {
      name: "Proportion (Cross-multiplication)",
      formula: "a:b :: c:d → a × d = b × c",
      whenToUse: "To find a missing term when three of four values in a proportion are known.",
    },
    {
      name: "Divide quantity in ratio a:b",
      formula: "First part = Total × a/(a+b); Second = Total × b/(a+b)",
      whenToUse: "To split a total amount between two people in a given ratio.",
    },
    {
      name: "Compounded Ratio",
      formula: "a:b compounded with c:d = ac : bd",
      whenToUse: "When two ratios need to be combined into a single ratio.",
    },
    {
      name: "Mean Proportion",
      formula: "Mean proportion of a and b = √(ab)",
      whenToUse: "When asked to find the mean proportional between two numbers.",
    },
    {
      name: "Third Proportion",
      formula: "Third proportion of a and b = b² / a",
      whenToUse: "When asked to find x such that a:b :: b:x.",
    },
  ],
  examRelevance:
    "Ratio & Proportion underlies age problems, partnership, and mixture questions — all high-frequency topics in SSC CGL, RRB NTPC, and IBPS Clerk exams.",
}
```

**Step 4: Create `src/data/quant/concepts/time-speed-distance.ts`**

```ts
import type { QuantConcept } from "@/types/quant"

export const tsdConcept: QuantConcept = {
  topic: "time-speed-distance",
  title: "Time, Speed & Distance",
  description:
    "Speed, Distance, and Time are related by one fundamental equation. All TSD problems — trains, boats, races — are variations on this single relationship combined with relative speed logic.",
  keyIdea:
    "Average speed for equal distances is the harmonic mean (2S1S2)/(S1+S2) — NOT the arithmetic average. This is the most common trap in TSD questions.",
  formulas: [
    {
      name: "Fundamental Relationship",
      formula: "Speed = Distance / Time  (Distance = S × T, Time = D / S)",
      whenToUse: "Always — this triangle connects all three values.",
    },
    {
      name: "Average Speed (equal distances)",
      formula: "Avg Speed = 2 × S1 × S2 / (S1 + S2)",
      whenToUse: "When a journey is split into two equal-distance halves at different speeds.",
    },
    {
      name: "Relative Speed",
      formula: "Same direction: |S1 − S2|  |  Opposite direction: S1 + S2",
      whenToUse: "For trains crossing, overtaking, or two objects moving towards/away from each other.",
    },
    {
      name: "Train crossing platform",
      formula: "Time = (Length of Train + Length of Platform) / Speed of Train",
      whenToUse: "When a train completely crosses a stationary platform or another train.",
    },
    {
      name: "Boats & Streams",
      formula:
        "Downstream = Boat + Stream  |  Upstream = Boat − Stream  |  Boat speed = (D + U) / 2  |  Stream = (D − U) / 2",
      whenToUse: "For any problem involving a boat moving with or against a river current.",
    },
  ],
  examRelevance:
    "TSD is one of the most tested topics in SSC CGL, RRB NTPC, and UPSC CSAT — typically 3–5 questions per paper across trains, boats, and average speed variants.",
}
```

**Step 5: Create `src/data/quant/concepts/time-work.ts`**

```ts
import type { QuantConcept } from "@/types/quant"

export const timeWorkConcept: QuantConcept = {
  topic: "time-work",
  title: "Time & Work",
  description:
    "Time & Work problems quantify how fast people or machines complete tasks. If A finishes a job in n days, A's one-day work is 1/n. Combined rates add together. Pipes & Cisterns follow the same logic with fill (positive) and drain (negative) rates.",
  keyIdea:
    "Use the LCM method: assume total work = LCM of all given days. Each person's daily work becomes an integer, eliminating fractions entirely.",
  formulas: [
    {
      name: "Work Rate",
      formula: "One day's work of A = 1 / (number of days A takes alone)",
      whenToUse: "First step in any Time & Work problem — convert days to rate.",
    },
    {
      name: "Two people together",
      formula: "Time together = (A × B) / (A + B)",
      whenToUse: "When only two people work together and you need the combined time.",
    },
    {
      name: "Efficiency ratio",
      formula: "If A is k times efficient as B → A takes (1/k) the time of B",
      whenToUse: "When relative efficiency is given instead of actual days.",
    },
    {
      name: "M × D × H = Constant",
      formula: "M1 × D1 × H1 = M2 × D2 × H2",
      whenToUse: "When comparing two scenarios with different numbers of workers, days, or hours.",
    },
    {
      name: "Pipe fill / drain net rate",
      formula: "Net fill time = (F × D) / (D − F)  where F = fill time, D = drain time",
      whenToUse: "When one pipe fills and another drains simultaneously.",
    },
  ],
  examRelevance:
    "Time & Work appears in every banking exam (IBPS PO/Clerk, SBI PO) and SSC CGL. Pipes & Cisterns is a direct sub-type tested separately in harder papers.",
}
```

**Step 6: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 7: Commit**

```bash
git add src/data/quant/concepts/
git commit -m "feat(quant): add concept data files for 5 Phase 1 topics"
```

---

## Task 4: Create tricks data files (5 files)

**Files to create:**
- `src/data/quant/tricks/percentage.ts`
- `src/data/quant/tricks/profit-loss.ts`
- `src/data/quant/tricks/ratio.ts`
- `src/data/quant/tricks/time-speed-distance.ts`
- `src/data/quant/tricks/time-work.ts`

Content sourced from `docs/plans/2026-03-01-quant-syllabus.md` "5 Tricks" section per topic.

**Step 1: Create `src/data/quant/tricks/percentage.ts`**

```ts
import type { QuantTrick } from "@/types/quant"

export const percentageTricks: QuantTrick[] = [
  {
    id: "pct-trick-01",
    topic: "percentage",
    type: "formula-shortcut",
    title: "Successive Percentage Change",
    description: "Combine two successive percentage changes into one net change without computing step by step.",
    formula: "Net% = a + b + (ab / 100)",
    example: {
      problem: "A number is increased by 20% then decreased by 10%. Find net % change.",
      solution: "Net = 20 + (−10) + (20 × −10 / 100) = 10 − 2 = 8% increase",
    },
    timeSaved: "~40s vs standard method",
  },
  {
    id: "pct-trick-02",
    topic: "percentage",
    type: "formula-shortcut",
    title: "Reverse Percentage (Find Original)",
    description: "Given the value after a % change, find the original value directly.",
    formula: "Original = Result × 100 / (100 + P%) for profit; × 100 / (100 − P%) for loss",
    example: {
      problem: "After a 25% increase, a price is ₹500. Find original price.",
      solution: "Original = 500 × 100 / 125 = ₹400",
    },
    timeSaved: "~30s vs reverse working",
  },
  {
    id: "pct-trick-03",
    topic: "percentage",
    type: "mental-math",
    title: "Fraction Equivalents",
    description: "Memorise common percentage-fraction pairs to avoid division entirely.",
    example: {
      problem: "Find 12.5% of 640.",
      solution: "12.5% = 1/8 → 640 / 8 = 80 (instant)",
    },
    timeSaved: "~20s per calculation",
  },
  {
    id: "pct-trick-04",
    topic: "percentage",
    type: "mental-math",
    title: "Find 15% in Two Steps",
    description: "Compute 15% as 10% + half of 10% — two easy mental operations.",
    example: {
      problem: "Find 15% of 380.",
      solution: "10% = 38; 5% = 19; total = 57",
    },
    timeSaved: "~15s vs direct multiplication",
  },
  {
    id: "pct-trick-05",
    topic: "percentage",
    type: "mental-math",
    title: "Base Equivalence Swap",
    description: "X% of Y = Y% of X — swap when the other direction is easier to compute.",
    example: {
      problem: "Find 64% of 25.",
      solution: "= 25% of 64 = 64/4 = 16 (instant)",
    },
    timeSaved: "~20s when numbers align with easy fractions",
  },
]
```

**Step 2: Create `src/data/quant/tricks/profit-loss.ts`**

```ts
import type { QuantTrick } from "@/types/quant"

export const profitLossTricks: QuantTrick[] = [
  {
    id: "pl-trick-01",
    topic: "profit-loss",
    type: "formula-shortcut",
    title: "Find CP from SP and Profit%",
    description: "Compute cost price directly from selling price and profit percentage — no algebra needed.",
    formula: "CP = SP × 100 / (100 + P%)",
    example: {
      problem: "SP = ₹660, Profit = 10%. Find CP.",
      solution: "CP = 660 × 100 / 110 = ₹600",
    },
    timeSaved: "~30s vs equation setup",
  },
  {
    id: "pl-trick-02",
    topic: "profit-loss",
    type: "formula-shortcut",
    title: "Two Successive Discounts",
    description: "Convert two successive discounts into a single net discount using the same formula as successive % change.",
    formula: "Net Discount = a + b − (ab / 100)",
    example: {
      problem: "Successive discounts of 20% and 10%. Find single equivalent discount.",
      solution: "Net = 20 + 10 − (20×10/100) = 30 − 2 = 28%",
    },
    timeSaved: "~30s vs step-by-step",
  },
  {
    id: "pl-trick-03",
    topic: "profit-loss",
    type: "mental-math",
    title: "Read the Multiplier",
    description: "Express SP as a multiplier of CP to read profit/loss instantly.",
    example: {
      problem: "SP = 1.25 × CP. What is profit%?",
      solution: "Multiplier 1.25 → 25% profit. SP = 0.80 × CP → 20% loss.",
    },
    timeSaved: "~20s per problem",
  },
  {
    id: "pl-trick-04",
    topic: "profit-loss",
    type: "formula-shortcut",
    title: "Faulty Weight Gain",
    description: "Quickly calculate the profit% a dishonest dealer makes using a lighter weight.",
    formula: "Profit% = (True weight − False weight) / False weight × 100",
    example: {
      problem: "Dealer uses 900g weight instead of 1000g. Find profit%.",
      solution: "(1000 − 900) / 900 × 100 = 100/9 ≈ 11.11%",
    },
    timeSaved: "~40s vs ratio working",
  },
  {
    id: "pl-trick-05",
    topic: "profit-loss",
    type: "formula-shortcut",
    title: "Overall P/L on Two Transactions",
    description: "When two items are sold at same SP, one at X% profit and one at X% loss — always results in loss.",
    formula: "Net Loss% = (X² / 100)%  — always a loss",
    example: {
      problem: "Two items sold at ₹1200 each — one at 20% profit, one at 20% loss.",
      solution: "Net Loss = 20²/100 = 4%",
    },
    timeSaved: "~45s vs computing both CPs",
  },
]
```

**Step 3: Create `src/data/quant/tricks/ratio.ts`**

```ts
import type { QuantTrick } from "@/types/quant"

export const ratioTricks: QuantTrick[] = [
  {
    id: "ratio-trick-01",
    topic: "ratio",
    type: "formula-shortcut",
    title: "k-Method (Scale Factor)",
    description: "Set ratio terms as multiples of k; use the given total to find k, then compute parts directly.",
    example: {
      problem: "A and B share ₹1200 in ratio 3:5. Find A's share.",
      solution: "Parts = 3k and 5k; 8k = 1200; k = 150; A = 3×150 = ₹450",
    },
    timeSaved: "~20s vs fraction computation",
  },
  {
    id: "ratio-trick-02",
    topic: "ratio",
    type: "mental-math",
    title: "Cross-Multiply to Compare Ratios",
    description: "Compare a/b vs c/d by cross-multiplying: if ad > bc then a/b > c/d — no decimal needed.",
    example: {
      problem: "Which is larger: 7/9 or 8/11?",
      solution: "7×11 = 77 vs 8×9 = 72; 77 > 72 so 7/9 > 8/11",
    },
    timeSaved: "~15s vs converting to decimals",
  },
  {
    id: "ratio-trick-03",
    topic: "ratio",
    type: "formula-shortcut",
    title: "Mean Proportion",
    description: "Find mean proportional of a and b = √(ab). Third proportion = b²/a.",
    formula: "Mean proportion = √(a × b)  |  Third proportion = b² / a",
    example: {
      problem: "Find mean proportion of 4 and 25.",
      solution: "√(4 × 25) = √100 = 10",
    },
    timeSaved: "~25s vs proportion equation setup",
  },
  {
    id: "ratio-trick-04",
    topic: "ratio",
    type: "formula-shortcut",
    title: "Age Ratio After n Years",
    description: "If ages are in ratio a:b now, set them as ak and bk; add n years to both; equate new ratio.",
    example: {
      problem: "Ages in ratio 3:4. After 5 years, ratio is 4:5. Find current ages.",
      solution: "3k+5 / 4k+5 = 4/5 → 15k+25 = 16k+20 → k=5; ages 15 and 20",
    },
    timeSaved: "~30s vs two-variable equations",
  },
  {
    id: "ratio-trick-05",
    topic: "ratio",
    type: "mental-math",
    title: "Equivalent Ratio by Scaling",
    description: "Scale both terms of a ratio to match a given absolute value without division.",
    example: {
      problem: "Ratio 3:5. First part is 12. Find second part.",
      solution: "3×? = 12 → ×4; second = 5×4 = 20",
    },
    timeSaved: "~15s vs fraction setup",
  },
]
```

**Step 4: Create `src/data/quant/tricks/time-speed-distance.ts`**

```ts
import type { QuantTrick } from "@/types/quant"

export const tsdTricks: QuantTrick[] = [
  {
    id: "tsd-trick-01",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Average Speed for Equal Distances",
    description: "When the same distance is covered at two different speeds, use harmonic mean — never average the speeds.",
    formula: "Avg Speed = 2 × S1 × S2 / (S1 + S2)",
    example: {
      problem: "A travels Delhi→Agra at 60 km/h and returns at 40 km/h. Find average speed.",
      solution: "2×60×40 / (60+40) = 4800/100 = 48 km/h",
    },
    timeSaved: "~30s vs computing total distance and time",
  },
  {
    id: "tsd-trick-02",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Train Crossing — One Formula",
    description: "Crossing a pole/person: distance = train length. Crossing platform: distance = train + platform. Crossing train: use relative speed.",
    formula: "Time = (L_train + L_obstacle) / Relative Speed",
    example: {
      problem: "Train 200m long at 72 km/h crosses 300m platform. Time?",
      solution: "Speed = 72×5/18 = 20 m/s; Time = (200+300)/20 = 25s",
    },
    timeSaved: "~20s vs unit conversion errors",
  },
  {
    id: "tsd-trick-03",
    topic: "time-speed-distance",
    type: "mental-math",
    title: "Unit Conversion — km/h to m/s",
    description: "Memorise the conversion factor to switch units in one step instead of deriving.",
    formula: "km/h × 5/18 = m/s  |  m/s × 18/5 = km/h",
    example: {
      problem: "Convert 90 km/h to m/s.",
      solution: "90 × 5/18 = 25 m/s (instant)",
    },
    timeSaved: "~15s per conversion",
  },
  {
    id: "tsd-trick-04",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Boats — Speed from Downstream/Upstream",
    description: "Extract boat speed and stream speed directly from downstream and upstream values.",
    formula: "Boat speed = (Downstream + Upstream) / 2  |  Stream = (Downstream − Upstream) / 2",
    example: {
      problem: "Downstream speed 15 km/h, upstream 9 km/h. Find boat speed in still water.",
      solution: "(15+9)/2 = 12 km/h",
    },
    timeSaved: "~25s vs equation setup",
  },
  {
    id: "tsd-trick-05",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Race — Speed Ratio from Head Start",
    description: "Express the race result as a ratio of speeds instead of computing actual speeds.",
    formula: "Speed ratio = Race distance : (Race distance − head start given)",
    example: {
      problem: "A beats B by 20m in a 200m race. Ratio of speeds?",
      solution: "A : B = 200 : 180 = 10 : 9",
    },
    timeSaved: "~30s vs solving for individual speeds",
  },
]
```

**Step 5: Create `src/data/quant/tricks/time-work.ts`**

```ts
import type { QuantTrick } from "@/types/quant"

export const timeWorkTricks: QuantTrick[] = [
  {
    id: "tw-trick-01",
    topic: "time-work",
    type: "formula-shortcut",
    title: "Two-Person Combined Time",
    description: "Find combined time for two people working together without computing each rate separately.",
    formula: "Combined time = (A × B) / (A + B)  where A and B are individual days",
    example: {
      problem: "A finishes in 12 days, B in 18 days. Together?",
      solution: "(12 × 18) / (12 + 18) = 216 / 30 = 7.2 days",
    },
    timeSaved: "~30s vs rate addition",
  },
  {
    id: "tw-trick-02",
    topic: "time-work",
    type: "formula-shortcut",
    title: "LCM Method (Integer Work)",
    description: "Assume total work = LCM of all given days. Each worker's daily work becomes an integer — no fractions.",
    example: {
      problem: "A: 6 days, B: 8 days, C: 12 days. Together?",
      solution: "LCM = 24. A=4, B=3, C=2 units/day. Combined = 9 units/day. Time = 24/9 = 2⅔ days",
    },
    timeSaved: "~45s vs fraction addition",
  },
  {
    id: "tw-trick-03",
    topic: "time-work",
    type: "formula-shortcut",
    title: "Efficiency Shortcut",
    description: "If A is k times as efficient as B, A takes (1/k) the time. Together = B's time × k/(k+1).",
    formula: "Together = B_days × k / (k + 1)",
    example: {
      problem: "A is 3 times as efficient as B. B alone takes 24 days. Together?",
      solution: "Together = 24 × 3 / (3+1) = 72/4 = 18 days",
    },
    timeSaved: "~30s vs ratio working",
  },
  {
    id: "tw-trick-04",
    topic: "time-work",
    type: "formula-shortcut",
    title: "One Leaves Early",
    description: "Split work into two phases: phase 1 (both work), phase 2 (one works alone). Avoid equations with fractions.",
    example: {
      problem: "A and B together finish in 10 days. A works 4 days then leaves; B finishes alone in 20 more days. Find A's individual time.",
      solution: "Work by A = 4/A; work by B = 20/B; also 1/A + 1/B = 1/10; solve simultaneously using LCM method",
    },
    timeSaved: "~20s vs algebraic equation setup",
  },
  {
    id: "tw-trick-05",
    topic: "time-work",
    type: "mental-math",
    title: "Pipe Net Fill Sign Check",
    description: "Before computing net fill time, verify drain time > fill time (otherwise tank never fills and answer is 'never').",
    formula: "Net fill time = (F × D) / (D − F)  — only valid when D > F",
    example: {
      problem: "Pipe fills in 6h; drain empties in 4h. Both open?",
      solution: "D(4) < F(6) → drain is faster → tank empties, never fills",
    },
    timeSaved: "Avoids computing a meaningless answer",
  },
]
```

**Step 6: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 7: Commit**

```bash
git add src/data/quant/tricks/
git commit -m "feat(quant): add tricks data files for 5 Phase 1 topics"
```

---

## Task 5: Create problem data files for remaining 4 topics

**Files to create** (percentage-problems already exists, moved in Task 2):
- `src/data/quant/problems/profit-loss-problems.ts`
- `src/data/quant/problems/ratio-problems.ts`
- `src/data/quant/problems/time-speed-distance-problems.ts`
- `src/data/quant/problems/time-work-problems.ts`

Each file exports an array of 5 `MathProblem` objects. Content: use the 5 Problem Types listed in `docs/plans/2026-03-01-quant-syllabus.md` for each topic as the basis for the problems. Match the structure of existing `percentage-problems.ts`.

**Step 1: Create `src/data/quant/problems/profit-loss-problems.ts`**

```ts
import type { MathProblem } from "@/types/quant"

export const profitLossProblems: MathProblem[] = [
  {
    id: "pl-01",
    topic: "profit-loss",
    title: "Find SP from CP and Profit%",
    question: "A shopkeeper buys a shirt for ₹400 and wants to make a 25% profit. What should the selling price be?",
    difficulty: "easy",
    answer: "₹500",
    steps: [
      {
        id: 1,
        operation: "Identify CP and profit%",
        expression: "CP = ₹400, Profit% = 25%",
        result: "CP = 400",
        explanation: "The cost price is what the shopkeeper paid. We need to add 25% profit on CP.",
        variables: { CP: 400, profitPct: 25 },
      },
      {
        id: 2,
        operation: "Apply SP formula",
        expression: "SP = CP × (100 + P%) / 100 = 400 × 125 / 100",
        result: "₹500",
        explanation: "Multiply CP by (100 + profit%) then divide by 100 to get SP.",
        variables: { CP: 400, profitPct: 25, SP: 500 },
      },
    ],
  },
  {
    id: "pl-02",
    topic: "profit-loss",
    title: "Find CP from SP and Loss%",
    question: "A book is sold for ₹360 at a loss of 10%. What was its cost price?",
    difficulty: "easy",
    answer: "₹400",
    steps: [
      {
        id: 1,
        operation: "Set up reverse formula",
        expression: "CP = SP × 100 / (100 − L%) = 360 × 100 / 90",
        result: "₹400",
        explanation: "When SP and loss% are known, divide SP × 100 by (100 − loss%) to get CP.",
        variables: { SP: 360, lossPct: 10, CP: 400 },
      },
    ],
  },
  {
    id: "pl-03",
    topic: "profit-loss",
    title: "Successive Discounts",
    question: "An item with MRP ₹1000 has successive discounts of 20% and 10%. Find the final selling price.",
    difficulty: "medium",
    answer: "₹720",
    steps: [
      {
        id: 1,
        operation: "Apply first discount",
        expression: "Price after 20% off = 1000 × (100−20)/100 = 1000 × 0.8",
        result: "₹800",
        explanation: "First discount of 20% reduces the MRP to ₹800.",
        variables: { MRP: 1000, discount1: 20, after1: 800 },
      },
      {
        id: 2,
        operation: "Apply second discount",
        expression: "Final price = 800 × (100−10)/100 = 800 × 0.9",
        result: "₹720",
        explanation: "Second discount of 10% is applied on ₹800 (not on original MRP).",
        variables: { after1: 800, discount2: 10, SP: 720 },
      },
    ],
  },
  {
    id: "pl-04",
    topic: "profit-loss",
    title: "Overall profit on two transactions",
    question: "A trader buys two items for ₹500 each. He sells one at 20% profit and the other at 20% loss. Find overall profit or loss.",
    difficulty: "medium",
    answer: "₹20 loss (2% loss)",
    steps: [
      {
        id: 1,
        operation: "SP of item sold at 20% profit",
        expression: "500 × 120/100",
        result: "₹600",
        explanation: "20% profit on ₹500 gives SP of ₹600.",
        variables: { CP: 500, profitPct: 20, SP1: 600 },
      },
      {
        id: 2,
        operation: "SP of item sold at 20% loss",
        expression: "500 × 80/100",
        result: "₹400",
        explanation: "20% loss on ₹500 gives SP of ₹400.",
        variables: { CP: 500, lossPct: 20, SP2: 400 },
      },
      {
        id: 3,
        operation: "Compare total CP and SP",
        expression: "Total CP = 1000; Total SP = 600 + 400 = 1000",
        result: "No profit, no loss",
        explanation: "Interestingly here the losses cancel; actual net loss = X²/100 only applies when SP is same, not CP.",
        variables: { totalCP: 1000, totalSP: 1000, netChange: 0 },
      },
    ],
  },
  {
    id: "pl-05",
    topic: "profit-loss",
    title: "Faulty weight profit",
    question: "A dishonest dealer uses a weight of 800g instead of 1000g. Find his profit percentage.",
    difficulty: "medium",
    answer: "25%",
    steps: [
      {
        id: 1,
        operation: "Apply faulty weight formula",
        expression: "Profit% = (True − False) / False × 100 = (1000 − 800) / 800 × 100",
        result: "200/800 × 100",
        explanation: "The dealer gives only 800g for the price of 1000g. The difference is his gain, expressed on the false weight.",
        variables: { trueWeight: 1000, falseWeight: 800, difference: 200 },
      },
      {
        id: 2,
        operation: "Simplify",
        expression: "200 / 800 × 100 = 0.25 × 100",
        result: "25%",
        explanation: "The profit percentage is 25%.",
        variables: { profitPct: 25 },
      },
    ],
  },
]
```

**Step 2: Create the remaining 3 problem files**

Follow the same structure. Use the 5 Problem Types listed in `docs/plans/2026-03-01-quant-syllabus.md` for ratio, TSD, and time-work. Each should have 2–4 `MathStep` entries per problem.

Files:
- `src/data/quant/problems/ratio-problems.ts` — export `ratioProblems: MathProblem[]`
- `src/data/quant/problems/time-speed-distance-problems.ts` — export `tsdProblems: MathProblem[]`
- `src/data/quant/problems/time-work-problems.ts` — export `timeWorkProblems: MathProblem[]`

Match the structure of `profit-loss-problems.ts` exactly. 5 problems each, covering the 5 problem types from the syllabus doc.

**Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add src/data/quant/problems/
git commit -m "feat(quant): add problem data files for profit-loss, ratio, TSD, time-work"
```

---

## Task 6: Create `ConceptPanel` component (TDD)

**Files:**
- Create: `src/components/visualizers/quant/ConceptPanel.tsx`
- Create: `src/components/visualizers/quant/__tests__/ConceptPanel.test.tsx`

**Step 1: Write the failing test first**

```tsx
// src/components/visualizers/quant/__tests__/ConceptPanel.test.tsx
import { render, screen } from '@testing-library/react'
import { ConceptPanel } from '../ConceptPanel'
import type { QuantConcept } from '@/types/quant'

const mockConcept: QuantConcept = {
  topic: 'percentage',
  title: 'Percentage',
  description: 'Percentage means per hundred.',
  keyIdea: 'Always divide by the ORIGINAL value.',
  formulas: [
    {
      name: 'Percentage Change',
      formula: 'Change% = (Change / Original) × 100',
      whenToUse: 'When a value increases or decreases.',
    },
  ],
  examRelevance: 'Appears in 3–4 questions per SSC/banking paper.',
}

describe('ConceptPanel', () => {
  it('renders the topic title', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Percentage')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Percentage means per hundred.')).toBeInTheDocument()
  })

  it('renders the key idea in a callout', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Always divide by the ORIGINAL value.')).toBeInTheDocument()
  })

  it('renders each formula name and formula string', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Percentage Change')).toBeInTheDocument()
    expect(screen.getByText('Change% = (Change / Original) × 100')).toBeInTheDocument()
  })

  it('renders the exam relevance note', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText(/3–4 questions/)).toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npx vitest run src/components/visualizers/quant/__tests__/ConceptPanel.test.tsx
```

Expected: FAIL — "ConceptPanel not found"

**Step 3: Implement `ConceptPanel`**

```tsx
// src/components/visualizers/quant/ConceptPanel.tsx
import type { QuantConcept } from '@/types/quant'

interface ConceptPanelProps {
  concept: QuantConcept
}

export function ConceptPanel({ concept }: ConceptPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-text-primary">{concept.title}</h2>
        <p className="mt-2 text-text-secondary leading-relaxed">{concept.description}</p>
      </div>

      <div className="rounded-lg border-l-4 border-subject-quant bg-subject-quant-light p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-subject-quant-dark mb-1">
          Key Idea
        </p>
        <p className="text-sm font-medium text-subject-quant-dark">{concept.keyIdea}</p>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          Core Formulas
        </h3>
        <div className="flex flex-col gap-3">
          {concept.formulas.map((f) => (
            <div
              key={f.name}
              className="rounded-lg border border-border-primary bg-bg-elevated p-4"
            >
              <p className="text-sm font-semibold text-text-primary">{f.name}</p>
              <p className="mt-1 font-mono text-base text-subject-quant">{f.formula}</p>
              <p className="mt-2 text-xs text-text-muted">{f.whenToUse}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-bg-secondary px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
          Exam Relevance
        </p>
        <p className="text-sm text-text-secondary">{concept.examRelevance}</p>
      </div>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npx vitest run src/components/visualizers/quant/__tests__/ConceptPanel.test.tsx
```

Expected: 5 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/quant/ConceptPanel.tsx \
        src/components/visualizers/quant/__tests__/ConceptPanel.test.tsx
git commit -m "feat(quant): add ConceptPanel component with tests"
```

---

## Task 7: Create `TrickCard` component (TDD)

**Files:**
- Create: `src/components/visualizers/quant/TrickCard.tsx`
- Create: `src/components/visualizers/quant/__tests__/TrickCard.test.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/quant/__tests__/TrickCard.test.tsx
import { render, screen } from '@testing-library/react'
import { TrickCard } from '../TrickCard'
import type { QuantTrick } from '@/types/quant'

const mockTrick: QuantTrick = {
  id: 'pct-trick-01',
  topic: 'percentage',
  type: 'formula-shortcut',
  title: 'Successive % Change',
  description: 'Combine two changes into one.',
  formula: 'Net% = a + b + ab/100',
  example: {
    problem: '20% increase then 10% decrease?',
    solution: '20 + (−10) + (20×−10/100) = 8% increase',
  },
  timeSaved: '~40s',
}

describe('TrickCard', () => {
  it('renders the trick title', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('Successive % Change')).toBeInTheDocument()
  })

  it('renders the type badge', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('Formula Shortcut')).toBeInTheDocument()
  })

  it('renders the formula in monospace', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('Net% = a + b + ab/100')).toBeInTheDocument()
  })

  it('renders the example problem and solution', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('20% increase then 10% decrease?')).toBeInTheDocument()
    expect(screen.getByText('20 + (−10) + (20×−10/100) = 8% increase')).toBeInTheDocument()
  })

  it('renders the timeSaved chip when provided', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('~40s')).toBeInTheDocument()
  })

  it('does not render formula section when formula is not provided', () => {
    const noFormula = { ...mockTrick, formula: undefined }
    render(<TrickCard trick={noFormula} />)
    expect(screen.queryByText('Net% = a + b + ab/100')).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npx vitest run src/components/visualizers/quant/__tests__/TrickCard.test.tsx
```

Expected: FAIL

**Step 3: Implement `TrickCard`**

```tsx
// src/components/visualizers/quant/TrickCard.tsx
'use client'

import { motion } from 'framer-motion'
import type { QuantTrick } from '@/types/quant'

interface TrickCardProps {
  trick: QuantTrick
}

const TYPE_LABEL: Record<QuantTrick['type'], string> = {
  'formula-shortcut': 'Formula Shortcut',
  'mental-math': 'Mental Math',
}

const TYPE_STYLE: Record<QuantTrick['type'], string> = {
  'formula-shortcut': 'bg-blue-100 text-blue-700',
  'mental-math': 'bg-amber-100 text-amber-700',
}

export function TrickCard({ trick }: TrickCardProps) {
  return (
    <motion.div
      className="rounded-lg border border-border-primary bg-bg-elevated p-5 flex flex-col gap-3"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-semibold text-text-primary">{trick.title}</h4>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_STYLE[trick.type]}`}
        >
          {TYPE_LABEL[trick.type]}
        </span>
      </div>

      <p className="text-sm text-text-secondary">{trick.description}</p>

      {trick.formula && (
        <div className="rounded-md bg-bg-secondary px-3 py-2">
          <p className="font-mono text-sm text-subject-quant">{trick.formula}</p>
        </div>
      )}

      <div className="rounded-md border border-border-secondary bg-bg-secondary p-3 flex flex-col gap-1">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Example</p>
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

**Step 4: Run test to verify it passes**

```bash
npx vitest run src/components/visualizers/quant/__tests__/TrickCard.test.tsx
```

Expected: 6 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/quant/TrickCard.tsx \
        src/components/visualizers/quant/__tests__/TrickCard.test.tsx
git commit -m "feat(quant): add TrickCard component with tests"
```

---

## Task 8: Create `TricksPanel` component (TDD)

**Files:**
- Create: `src/components/visualizers/quant/TricksPanel.tsx`
- Create: `src/components/visualizers/quant/__tests__/TricksPanel.test.tsx`

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/quant/__tests__/TricksPanel.test.tsx
import { render, screen } from '@testing-library/react'
import { TricksPanel } from '../TricksPanel'
import type { QuantTrick } from '@/types/quant'

const mockTricks: QuantTrick[] = [
  {
    id: 't1',
    topic: 'percentage',
    type: 'formula-shortcut',
    title: 'Shortcut A',
    description: 'A formula shortcut',
    example: { problem: 'Q1', solution: 'A1' },
  },
  {
    id: 't2',
    topic: 'percentage',
    type: 'mental-math',
    title: 'Mental Trick B',
    description: 'A mental math trick',
    example: { problem: 'Q2', solution: 'A2' },
  },
]

describe('TricksPanel', () => {
  it('renders Formula Shortcuts section heading', () => {
    render(<TricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Formula Shortcuts')).toBeInTheDocument()
  })

  it('renders Mental Math section heading', () => {
    render(<TricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Mental Math')).toBeInTheDocument()
  })

  it('renders each trick card', () => {
    render(<TricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Shortcut A')).toBeInTheDocument()
    expect(screen.getByText('Mental Trick B')).toBeInTheDocument()
  })

  it('does not render Mental Math section when no mental-math tricks', () => {
    const formulaOnly = mockTricks.filter(t => t.type === 'formula-shortcut')
    render(<TricksPanel tricks={formulaOnly} />)
    expect(screen.queryByText('Mental Math')).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npx vitest run src/components/visualizers/quant/__tests__/TricksPanel.test.tsx
```

**Step 3: Implement `TricksPanel`**

```tsx
// src/components/visualizers/quant/TricksPanel.tsx
import type { QuantTrick } from '@/types/quant'
import { TrickCard } from './TrickCard'

interface TricksPanelProps {
  tricks: QuantTrick[]
}

export function TricksPanel({ tricks }: TricksPanelProps) {
  const formulaShortcuts = tricks.filter(t => t.type === 'formula-shortcut')
  const mentalMath = tricks.filter(t => t.type === 'mental-math')

  return (
    <div className="flex flex-col gap-8">
      {formulaShortcuts.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Formula Shortcuts
          </h3>
          <div className="flex flex-col gap-3">
            {formulaShortcuts.map(trick => (
              <TrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}

      {mentalMath.length > 0 && (
        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Mental Math
          </h3>
          <div className="flex flex-col gap-3">
            {mentalMath.map(trick => (
              <TrickCard key={trick.id} trick={trick} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npx vitest run src/components/visualizers/quant/__tests__/TricksPanel.test.tsx
```

Expected: 4 tests PASS

**Step 5: Commit**

```bash
git add src/components/visualizers/quant/TricksPanel.tsx \
        src/components/visualizers/quant/__tests__/TricksPanel.test.tsx
git commit -m "feat(quant): add TricksPanel component with tests"
```

---

## Task 9: Create `TopicTabs` component (TDD)

**Files:**
- Create: `src/components/visualizers/quant/TopicTabs.tsx`
- Create: `src/components/visualizers/quant/__tests__/TopicTabs.test.tsx`

This is the tab container that renders Concept | Tricks | Problems tabs for a topic page. It is a `'use client'` component.

**Step 1: Write the failing test**

```tsx
// src/components/visualizers/quant/__tests__/TopicTabs.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { TopicTabs } from '../TopicTabs'
import type { QuantConcept, QuantTrick, MathProblem } from '@/types/quant'

const mockConcept: QuantConcept = {
  topic: 'percentage',
  title: 'Percentage',
  description: 'desc',
  keyIdea: 'key idea',
  formulas: [],
  examRelevance: 'relevance',
}
const mockTricks: QuantTrick[] = []
const mockProblems: MathProblem[] = []

describe('TopicTabs', () => {
  it('renders Concept tab button', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Concept' })).toBeInTheDocument()
  })

  it('renders Tricks tab button', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Tricks' })).toBeInTheDocument()
  })

  it('renders Problems tab button', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Problems' })).toBeInTheDocument()
  })

  it('shows Concept content by default', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByText('key idea')).toBeInTheDocument()
  })

  it('switches to Tricks tab on click', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    fireEvent.click(screen.getByRole('button', { name: 'Tricks' }))
    expect(screen.queryByText('key idea')).not.toBeInTheDocument()
  })
})
```

**Step 2: Run test to verify it fails**

```bash
npx vitest run src/components/visualizers/quant/__tests__/TopicTabs.test.tsx
```

**Step 3: Implement `TopicTabs`**

```tsx
// src/components/visualizers/quant/TopicTabs.tsx
'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { MathProblem, QuantConcept, QuantTrick } from '@/types/quant'
import { ConceptPanel } from './ConceptPanel'
import { TricksPanel } from './TricksPanel'
import { StepSolver } from './StepSolver'

type Tab = 'concept' | 'tricks' | 'problems'

const TABS: { id: Tab; label: string }[] = [
  { id: 'concept', label: 'Concept' },
  { id: 'tricks', label: 'Tricks' },
  { id: 'problems', label: 'Problems' },
]

interface TopicTabsProps {
  concept: QuantConcept
  tricks: QuantTrick[]
  problems: MathProblem[]
}

export function TopicTabs({ concept, tricks, problems }: TopicTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('concept')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1 border-b border-border-primary">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
              activeTab === tab.id
                ? 'border-subject-quant text-subject-quant'
                : 'border-transparent text-text-muted hover:text-text-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'concept' && <ConceptPanel concept={concept} />}
          {activeTab === 'tricks' && <TricksPanel tricks={tricks} />}
          {activeTab === 'problems' && <StepSolver problems={problems} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
```

**Step 4: Run test to verify it passes**

```bash
npx vitest run src/components/visualizers/quant/__tests__/TopicTabs.test.tsx
```

Expected: 5 tests PASS

**Step 5: Run all quant tests**

```bash
npx vitest run src/components/visualizers/quant/__tests__/
```

Expected: all pass

**Step 6: Commit**

```bash
git add src/components/visualizers/quant/TopicTabs.tsx \
        src/components/visualizers/quant/__tests__/TopicTabs.test.tsx
git commit -m "feat(quant): add TopicTabs component with Concept/Tricks/Problems tabs"
```

---

## Task 10: Create dynamic `/quant/[topic]/page.tsx`

**Files:**
- Create: `src/app/quant/[topic]/page.tsx`

This is a server component. It receives the `topic` param, loads data, renders `TopicTabs`.

**Step 1: Create the page**

```tsx
// src/app/quant/[topic]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { QuantTopic } from '@/types/quant'
import { TopicTabs } from '@/components/visualizers/quant/TopicTabs'

// ── Concept imports ─────────────────────────────────────
import { percentageConcept } from '@/data/quant/concepts/percentage'
import { profitLossConcept } from '@/data/quant/concepts/profit-loss'
import { ratioConcept } from '@/data/quant/concepts/ratio'
import { tsdConcept } from '@/data/quant/concepts/time-speed-distance'
import { timeWorkConcept } from '@/data/quant/concepts/time-work'

// ── Tricks imports ───────────────────────────────────────
import { percentageTricks } from '@/data/quant/tricks/percentage'
import { profitLossTricks } from '@/data/quant/tricks/profit-loss'
import { ratioTricks } from '@/data/quant/tricks/ratio'
import { tsdTricks } from '@/data/quant/tricks/time-speed-distance'
import { timeWorkTricks } from '@/data/quant/tricks/time-work'

// ── Problem imports ──────────────────────────────────────
import { percentageProblems } from '@/data/quant/problems/percentage-problems'
import { profitLossProblems } from '@/data/quant/problems/profit-loss-problems'
import { ratioProblems } from '@/data/quant/problems/ratio-problems'
import { tsdProblems } from '@/data/quant/problems/time-speed-distance-problems'
import { timeWorkProblems } from '@/data/quant/problems/time-work-problems'

const TOPIC_DATA = {
  percentage: {
    concept: percentageConcept,
    tricks: percentageTricks,
    problems: percentageProblems,
    label: 'Percentage',
    description: 'Master percentage for SSC CGL and banking exams. Concepts, shortcut tricks, and animated step-by-step problems.',
  },
  'profit-loss': {
    concept: profitLossConcept,
    tricks: profitLossTricks,
    problems: profitLossProblems,
    label: 'Profit, Loss & Discount',
    description: 'Learn profit and loss for competitive exams. CP, SP, discount formulas, tricks, and practice problems.',
  },
  ratio: {
    concept: ratioConcept,
    tricks: ratioTricks,
    problems: ratioProblems,
    label: 'Ratio & Proportion',
    description: 'Master ratio and proportion for SSC and banking exams. k-method, mean proportion, and practice problems.',
  },
  'time-speed-distance': {
    concept: tsdConcept,
    tricks: tsdTricks,
    problems: tsdProblems,
    label: 'Time, Speed & Distance',
    description: 'Learn TSD for government exams. Average speed formula, trains, boats, and race problems with shortcuts.',
  },
  'time-work': {
    concept: timeWorkConcept,
    tricks: timeWorkTricks,
    problems: timeWorkProblems,
    label: 'Time & Work',
    description: 'Master Time & Work and Pipes & Cisterns for SSC and IBPS exams. LCM method, efficiency tricks, and problems.',
  },
} satisfies Record<string, { concept: object; tricks: object[]; problems: object[]; label: string; description: string }>

type TopicParam = keyof typeof TOPIC_DATA

function isValidTopic(slug: string): slug is TopicParam {
  return slug in TOPIC_DATA
}

interface Props {
  params: Promise<{ topic: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params
  if (!isValidTopic(topic)) return {}
  const data = TOPIC_DATA[topic]
  return {
    title: `${data.label} — Concepts, Tricks & Problems | GovtExams`,
    description: data.description,
  }
}

export function generateStaticParams() {
  return Object.keys(TOPIC_DATA).map(topic => ({ topic }))
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params

  if (!isValidTopic(topic)) notFound()

  const { concept, tricks, problems } = TOPIC_DATA[topic]

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-text-primary">
        {TOPIC_DATA[topic].label}
      </h1>
      <TopicTabs concept={concept} tricks={tricks} problems={problems} />
    </div>
  )
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

**Step 3: Start dev server and verify `/quant/percentage` renders**

```bash
npm run dev
```

Open `http://localhost:3000/quant/percentage` — should see Concept tab with Percentage content.
Open `http://localhost:3000/quant/profit-loss` — should see Profit, Loss & Discount.
Verify Tricks and Problems tabs work.

**Step 4: Commit**

```bash
git add src/app/quant/[topic]/
git commit -m "feat(quant): add dynamic [topic] route with Concept/Tricks/Problems tabs"
```

---

## Task 11: Update `/quant` hub page

**Files:**
- Modify: `src/app/quant/page.tsx`

**Step 1: Update the page**

```tsx
// src/app/quant/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quantitative Aptitude — Interactive Visual Learning',
  description:
    'Master quantitative aptitude for SSC CGL, IBPS PO, and other government exams. Concepts, shortcut tricks, and step-by-step animated problem solvers.',
}

const TOPICS = [
  {
    href: '/quant/percentage',
    title: 'Percentage',
    description: 'Core concept, reverse percentage, successive changes, and fraction equivalents.',
  },
  {
    href: '/quant/profit-loss',
    title: 'Profit, Loss & Discount',
    description: 'CP/SP formulas, successive discounts, faulty weight, and marked price problems.',
  },
  {
    href: '/quant/ratio',
    title: 'Ratio & Proportion',
    description: 'k-method, mean proportion, age ratio, and proportion applications.',
  },
  {
    href: '/quant/time-speed-distance',
    title: 'Time, Speed & Distance',
    description: 'Average speed, trains, boats, relative speed, and race problems.',
  },
  {
    href: '/quant/time-work',
    title: 'Time & Work',
    description: 'LCM method, efficiency, pipes & cisterns, and multi-worker problems.',
  },
  {
    href: '/quant/geometry',
    title: 'Geometry Visualizer',
    description: 'Interactive shapes — area, perimeter, and formula proofs with animation.',
  },
]

const META_LINE = '5 concepts · 5 tricks · 5 problems'

export default function QuantPage() {
  return (
    <div>
      <p className="mb-8 text-text-secondary">
        Master arithmetic, algebra, and geometry with step-by-step visual solvers. Each topic
        covers core concepts, exam shortcuts, and animated practice problems.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {TOPICS.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="rounded-lg border border-border-primary bg-bg-elevated p-5 no-underline transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 text-base font-semibold text-text-primary">{topic.title}</h3>
            <p className="mb-3 text-sm leading-relaxed text-text-secondary">{topic.description}</p>
            {topic.href !== '/quant/geometry' && (
              <p className="text-xs text-text-muted">{META_LINE}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
```

**Step 2: Verify dev server**

Open `http://localhost:3000/quant` — 6 topic cards, no "Coming Soon" badges.

**Step 3: Commit**

```bash
git add src/app/quant/page.tsx
git commit -m "feat(quant): update hub page with 5 topic cards + geometry card"
```

---

## Task 12: Redirect `/quant/step-solver` to `/quant/percentage`

**Files:**
- Modify: `src/app/quant/step-solver/page.tsx`

**Step 1: Replace the page with a redirect**

```tsx
// src/app/quant/step-solver/page.tsx
import { redirect } from 'next/navigation'

export default function StepSolverPage() {
  redirect('/quant/percentage')
}
```

**Step 2: Verify**

Open `http://localhost:3000/quant/step-solver` — should redirect to `/quant/percentage`.

**Step 3: Commit**

```bash
git add src/app/quant/step-solver/page.tsx
git commit -m "feat(quant): redirect /quant/step-solver to /quant/percentage"
```

---

## Task 13: Run full test suite and verify build

**Step 1: Run all tests**

```bash
npx vitest run
```

Expected: all tests pass including existing StepSolver, ExpressionDisplay, VariablesPanel tests.

**Step 2: Run production build**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors.

**Step 3: Fix any build errors**

Common issues:
- `params` must be `Promise<{ topic: string }>` in Next.js 15 App Router — already handled above
- Import path for moved `percentage-problems.ts` — fix in `step-solver/page.tsx` if still pointing to old path

**Step 4: Final commit if any fixes applied**

```bash
git add -A
git commit -m "fix(quant): resolve build errors after quant complete feature"
```

---

## Summary

| Task | What it builds | Commit |
|------|---------------|--------|
| 1 | QuantTopic (15 values) + QuantConcept + QuantTrick types | types |
| 2 | data/ subdirectory structure + move percentage-problems | refactor |
| 3 | 5 concept data files | feat |
| 4 | 5 tricks data files | feat |
| 5 | 4 new problem data files | feat |
| 6 | ConceptPanel component + tests | feat |
| 7 | TrickCard component + tests | feat |
| 8 | TricksPanel component + tests | feat |
| 9 | TopicTabs component + tests | feat |
| 10 | `/quant/[topic]` dynamic page | feat |
| 11 | `/quant` hub page update | feat |
| 12 | `/quant/step-solver` redirect | feat |
| 13 | Full test + build verification | fix |

**New files: 24** (5 concept + 5 tricks + 4 problems + 4 components + 4 tests + 1 page + 1 page update)
**Modified files: 3** (`types/quant.ts`, `quant/page.tsx`, `quant/step-solver/page.tsx`)
