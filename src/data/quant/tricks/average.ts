import type { QuantTrick } from "@/types/quant"

export const averageTricks: QuantTrick[] = [
  {
    id: "avg-trick-01",
    topic: "average",
    type: "mental-math",
    title: "Assume & Adjust Method",
    description: "Assume a convenient average, compute deviations from it, then add (sum of deviations)/n to the assumed average. Much faster than summing large numbers.",
    example: {
      problem: "Find average of 48, 51, 53, 46, 52.",
      solution: "Assume 50. Deviations: −2, +1, +3, −4, +2 → sum=0. Average = 50 + 0/5 = 50",
    },
    timeSaved: "~30s on large numbers",
  },
  {
    id: "avg-trick-02",
    topic: "average",
    type: "formula-shortcut",
    title: "Replacement Effect",
    description: "When one person is replaced by another, the change in average = (new value − old value) / n. No need to recompute the whole sum.",
    formula: "ΔAvg = (New value − Old value) / n",
    example: {
      problem: "Average of 10 people is 30. One person of weight 40 kg is replaced by someone of 50 kg. New average?",
      solution: "ΔAvg = (50 − 40) / 10 = 1. New average = 30 + 1 = 31",
    },
    timeSaved: "~20s vs recomputing total",
  },
  {
    id: "avg-trick-03",
    topic: "average",
    type: "formula-shortcut",
    title: "Find the Added Term",
    description: "When adding one more term changes the average, the new term = New Avg × (n+1) − Old Avg × n.",
    formula: "New term = New Avg × (n+1) − Old Avg × n",
    example: {
      problem: "Average of 5 numbers is 20. When a 6th is added, average becomes 22. Find the 6th number.",
      solution: "6th = 22×6 − 20×5 = 132 − 100 = 32",
    },
    timeSaved: "~15s vs computing original sum",
  },
  {
    id: "avg-trick-04",
    topic: "average",
    type: "mental-math",
    title: "Range Elimination",
    description: "The average must lie between the minimum and maximum values. Use this to instantly eliminate answer choices that fall outside the range.",
    example: {
      problem: "Find average of 12, 18, 24, 30. Options: 21, 25, 10, 35.",
      solution: "Range is 12–30. Eliminate 10 and 35 immediately. Average = 84/4 = 21",
    },
    timeSaved: "~10s on MCQ questions",
  },
  {
    id: "avg-trick-05",
    topic: "average",
    type: "formula-shortcut",
    title: "Wrong Entry Correction",
    description: "If a value was recorded wrongly, correct the sum without redoing the average calculation: correct sum = old sum − wrong entry + correct entry.",
    formula: "Correct Avg = Old Avg + (Correct value − Wrong value) / n",
    example: {
      problem: "Average of 8 numbers is 25. One number read as 36 instead of 63. Find correct average.",
      solution: "ΔAvg = (63 − 36) / 8 = 27/8 = 3.375. Correct average = 25 + 3.375 = 28.375",
    },
    timeSaved: "~20s vs recomputing everything",
  },
]
