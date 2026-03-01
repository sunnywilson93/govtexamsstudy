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
