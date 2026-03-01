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
    title: "Same SP, Equal P% and L% — Always a Loss",
    description: "When two items are sold at same SP, one at X% profit and one at X% loss — always results in loss.",
    formula: "Net Loss% = (X² / 100)%  — always a loss",
    example: {
      problem: "Two items sold at ₹1200 each — one at 20% profit, one at 20% loss.",
      solution: "Net Loss = 20²/100 = 4%",
    },
    timeSaved: "~45s vs computing both CPs",
  },
]
