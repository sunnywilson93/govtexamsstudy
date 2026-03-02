import type { QuantTrick } from "@/types/quant"

export const chainRuleTricks: QuantTrick[] = [
  {
    id: "cr-trick-01",
    topic: "chain-rule",
    type: "formula-shortcut",
    title: "Direct vs Inverse — Quick Test",
    description:
      "Ask: 'If the first quantity increases, does the required quantity increase (Direct) or decrease (Inverse)?' Apply that relation to the ratio. Direct: multiply as-is. Inverse: flip the ratio.",
    example: {
      problem: "5 workers complete a job in 8 days. How many days for 4 workers?",
      solution: "Fewer workers → more days → INVERSE. Days = 8 × 5/4 = 10 days.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "cr-trick-02",
    topic: "chain-rule",
    type: "formula-shortcut",
    title: "Chain Rule Fraction Setup",
    description:
      "Write the 'find' quantity = given × chain of fractions. For each variable pair: Direct → write (new/old); Inverse → write (old/new). Multiply all fractions.",
    formula: "Required = given × Π(new/old for direct) × Π(old/new for inverse)",
    example: {
      problem: "If 12 men earn ₹3600 in 8 days, how much will 9 men earn in 6 days?",
      solution:
        "Men: 9/12 (direct with earnings). Days: 6/8 (direct). Earnings = 3600 × 9/12 × 6/8 = 3600 × 3/4 × 3/4 = 2025.",
    },
    timeSaved: "30 seconds",
  },
  {
    id: "cr-trick-03",
    topic: "chain-rule",
    type: "mental-math",
    title: "Ratio Cancellation in Chain",
    description:
      "Before multiplying, cancel common factors across all numerators and denominators in the chain fraction. This avoids large intermediate numbers.",
    example: {
      problem: "If 15 men finish work in 20 days, how many men finish it in 12 days?",
      solution: "Men and days are inverse. Men = 15 × 20/12 = 15 × 5/3 = 25 men.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "cr-trick-04",
    topic: "chain-rule",
    type: "formula-shortcut",
    title: "M×D×H = Constant",
    description:
      "For work problems: Men × Days × Hours = constant total work. Change any subset and solve for the unknown. Always verify: if men increase, days or hours must decrease.",
    formula: "M₁D₁H₁ = M₂D₂H₂",
    example: {
      problem:
        "16 men working 9 hours/day finish in 10 days. How many hours/day must 12 men work to finish in 15 days?",
      solution: "16×9×10 = 12×H×15. 1440 = 180H. H = 8 hours/day.",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "cr-trick-05",
    topic: "chain-rule",
    type: "mental-math",
    title: "Shortcut for Cost-Quantity-Rate",
    description:
      "For cost = quantity × rate problems: adjust one variable at a time. New cost = old cost × (new qty/old qty) × (new rate/old rate). Both are direct.",
    example: {
      problem: "If 18 kg of rice costs ₹540, find cost of 25 kg.",
      solution: "Cost = 540 × 25/18 = 540/18 × 25 = 30 × 25 = ₹750.",
    },
    timeSaved: "15 seconds",
  },
]
