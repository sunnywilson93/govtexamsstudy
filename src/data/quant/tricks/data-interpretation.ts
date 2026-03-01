import type { QuantTrick } from "@/types/quant"

export const dataInterpretationTricks: QuantTrick[] = [
  {
    id: "di-trick-01",
    topic: "data-interpretation",
    type: "mental-math",
    title: "Approximation Rule",
    description:
      "In DI, answer options are usually spread wide enough that rounding each value to the nearest 5 or 10 still yields a unique correct answer. Calculate approximately — never spend time on exact long division.",
    example: {
      problem:
        "Sales in 2022 = 4,83,200; total sales = 24,16,000. What is the percentage share?",
      solution:
        "Round: 4,80,000 / 24,00,000 × 100 ≈ 20 %. Options are 18 %, 20 %, 22 %, 25 % — answer is 20 % without exact division.",
    },
    timeSaved: "~25s per sub-question",
  },
  {
    id: "di-trick-02",
    topic: "data-interpretation",
    type: "formula-shortcut",
    title: "Ratio Without Absolute Values",
    description:
      "When a question asks for the ratio of two categories that are both read off the same chart scale, set up the ratio directly from the chart readings — no need to find the actual numbers.",
    formula: "Ratio = Reading A : Reading B  (both from the same scale)",
    example: {
      problem:
        "Bar chart shows City A exports = 60 units, City B = 45 units (same scale). Ratio A : B?",
      solution: "60 : 45 = 4 : 3. No unit conversion needed because the scale is identical.",
    },
    timeSaved: "~15s vs converting to actual figures",
  },
  {
    id: "di-trick-03",
    topic: "data-interpretation",
    type: "formula-shortcut",
    title: "Sign-Check to Eliminate Options",
    description:
      "Before computing a percentage change, decide the sign: if the new value is smaller, the answer is negative (decrease). Instantly eliminate any option whose sign is wrong.",
    formula: "If New < Old → % change is negative; if New > Old → % change is positive",
    example: {
      problem:
        "Production in 2021 = 800 units, in 2022 = 650 units. Options: +18.75 %, −18.75 %, +23 %, −23 %.",
      solution:
        "New < Old → decrease. Eliminate +18.75 % and +23 %. Calculate: (800−650)/800 × 100 = 18.75 %. Answer: −18.75 %.",
    },
    timeSaved: "~10s per change question",
  },
  {
    id: "di-trick-04",
    topic: "data-interpretation",
    type: "formula-shortcut",
    title: "Compute Pie Total Once, Reuse",
    description:
      "All sub-questions of a pie chart DI set share the same grand total. Compute it once from any given sector and reuse it for every other question — avoid recomputing the total repeatedly.",
    formula: "Total = (Given sector value / Given sector angle) × 360",
    example: {
      problem:
        "Pie chart: Agriculture sector = 72° and represents ₹1,800 cr. What is the total budget?",
      solution:
        "Total = (1800 / 72) × 360 = 25 × 360 = ₹9,000 cr. Reuse ₹9,000 cr for all remaining questions.",
    },
    timeSaved: "~20s per subsequent sub-question",
  },
  {
    id: "di-trick-05",
    topic: "data-interpretation",
    type: "mental-math",
    title: "Scan First, Solve Easy Questions First",
    description:
      "Before attempting any calculation in a 4–5 question DI set, read all the questions. Identify the 2–3 that need only a single read-off or a simple percentage; solve those first to bank marks quickly, then attempt the harder one.",
    example: {
      problem:
        "A DI set has Q1 (find total), Q2 (find ratio), Q3 (find % change across 5 years), Q4 (find combined average), Q5 (find 2nd highest).",
      solution:
        "Solve Q1 (direct sum), Q2 (visual ratio), Q5 (visual comparison) first — all under 30 s each. Then attempt Q4 and Q3 with the time saved.",
    },
    timeSaved: "2–3 min across the full DI set",
  },
]
