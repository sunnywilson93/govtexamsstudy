import type { QuantTrick } from "@/types/quant"

export const siCiTricks: QuantTrick[] = [
  {
    id: "sici-trick-01",
    topic: "simple-compound-interest",
    type: "formula-shortcut",
    title: "CI − SI Shortcut (2 Years)",
    description: "The difference between CI and SI for 2 years equals P × (R/100)². Use this directly without computing both CI and SI separately.",
    formula: "CI − SI = P × (R/100)²",
    example: {
      problem: "Find the difference between CI and SI on ₹10,000 at 5% for 2 years.",
      solution: "CI − SI = 10000 × (5/100)² = 10000 × 0.0025 = ₹25",
    },
    timeSaved: "~50s vs computing both separately",
  },
  {
    id: "sici-trick-02",
    topic: "simple-compound-interest",
    type: "mental-math",
    title: "Rule of 72 (Doubling Time)",
    description: "Money doubles in approximately 72/R years under compound interest. For simple interest, it doubles in exactly 100/R years.",
    example: {
      problem: "At 8% CI, in how many years does money double?",
      solution: "72 / 8 = 9 years (approximate)",
    },
    timeSaved: "~30s vs trial-and-error computation",
  },
  {
    id: "sici-trick-03",
    topic: "simple-compound-interest",
    type: "formula-shortcut",
    title: "Half-Yearly Compounding in One Step",
    description: "For half-yearly compounding, halve the rate and double the time, then apply the CI formula directly.",
    formula: "A = P × (1 + R/200)^(2T)",
    example: {
      problem: "Find amount on ₹8000 at 10% p.a. compounded half-yearly for 1 year.",
      solution: "A = 8000 × (1 + 5/100)² = 8000 × 1.1025 = ₹8820",
    },
    timeSaved: "~20s vs recalculating rate and time",
  },
  {
    id: "sici-trick-04",
    topic: "simple-compound-interest",
    type: "formula-shortcut",
    title: "Find Rate from SI",
    description: "Rearrange SI = PRT/100 to find Rate: R = (SI × 100) / (P × T). Memorise this rearrangement directly.",
    formula: "R = (SI × 100) / (P × T)",
    example: {
      problem: "SI on ₹5000 for 3 years is ₹900. Find rate.",
      solution: "R = (900 × 100) / (5000 × 3) = 90000 / 15000 = 6%",
    },
    timeSaved: "~10s vs algebraic rearrangement",
  },
  {
    id: "sici-trick-05",
    topic: "simple-compound-interest",
    type: "mental-math",
    title: "CI for 2 Years as Expanded Form",
    description: "CI for 2 years = 2PR/100 + P(R/100)² = SI for 2 years + the extra interest-on-interest term.",
    example: {
      problem: "SI on ₹1000 at 10% for 2 years vs CI. What is CI?",
      solution: "SI = ₹200. Extra = 1000 × (10/100)² = ₹10. CI = ₹210",
    },
    timeSaved: "~15s when SI for 2 years is already computed",
  },
]
