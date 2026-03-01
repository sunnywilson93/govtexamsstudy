import type { QuantTrick } from "@/types/quant"

export const mixtureAlligationTricks: QuantTrick[] = [
  {
    id: "mix-trick-01",
    topic: "mixture-alligation",
    type: "formula-shortcut",
    title: "Alligation Cross",
    description: "Write C1 top-left, C2 top-right, Cm (mean price/target) in the centre. Take diagonal differences: lower-right = C2−Cm, lower-left = Cm−C1. This ratio is your mixing proportion.",
    formula: "Ratio = (C2 − Cm) : (Cm − C1)",
    example: {
      problem: "Mix tea at ₹20/kg and ₹30/kg to get ₹24/kg. Find ratio.",
      solution: "(30 − 24) : (24 − 20) = 6 : 4 = 3 : 2",
    },
    timeSaved: "~40s vs equation method",
  },
  {
    id: "mix-trick-02",
    topic: "mixture-alligation",
    type: "formula-shortcut",
    title: "Repeated Replacement Formula",
    description: "After removing x litres from V litres of pure liquid and replacing with water, repeated n times: remaining pure = V × ((V−x)/V)^n.",
    formula: "Pure remaining = V × ((V − x) / V)ⁿ",
    example: {
      problem: "From 40L milk, 5L removed and replaced with water, 3 times. Milk remaining?",
      solution: "40 × (35/40)³ = 40 × (7/8)³ = 40 × 343/512 ≈ 26.8 L",
    },
    timeSaved: "~60s vs doing 3 iterations manually",
  },
  {
    id: "mix-trick-03",
    topic: "mixture-alligation",
    type: "mental-math",
    title: "Verify with Mean Price Check",
    description: "Before solving, verify that the target price Cm lies strictly between C1 and C2. If not, the problem is misstated — saves time debugging wrong setups.",
    example: {
      problem: "Mix solutions at 20% and 60% to get 45% concentration. Valid?",
      solution: "20 < 45 < 60 ✓. Ratio = (60−45) : (45−20) = 15 : 25 = 3 : 5",
    },
    timeSaved: "~15s on setup verification",
  },
  {
    id: "mix-trick-04",
    topic: "mixture-alligation",
    type: "formula-shortcut",
    title: "Profit-Based Alligation",
    description: "Alligation works for profit% too, not just price. Use the desired profit% as Cm to find the mixing ratio of two cost-price items.",
    formula: "Ratio = (P2 − Pm) : (Pm − P1)  where P = profit percentage of each item",
    example: {
      problem: "Mix item giving 20% profit with item giving 30% profit to get 25% profit. Ratio?",
      solution: "(30−25) : (25−20) = 5 : 5 = 1 : 1",
    },
    timeSaved: "~30s vs equation approach",
  },
  {
    id: "mix-trick-05",
    topic: "mixture-alligation",
    type: "mental-math",
    title: "Track Components Separately",
    description: "In milk-water problems, always track milk quantity and water quantity separately. Do NOT track their ratio directly through dilutions — compute volumes, then take ratio at the end.",
    example: {
      problem: "Vessel has milk:water = 3:1 in 40L. 10L removed, 10L water added. New ratio?",
      solution: "Milk: 30 − 30×10/40 = 30 − 7.5 = 22.5L. Water: 10 − 2.5 + 10 = 17.5L. Ratio = 22.5:17.5 = 9:7",
    },
    timeSaved: "~30s vs confusion from working with ratios directly",
  },
]
