import type { QuantTrick } from "@/types/quant"

export const decimalFractionsTricks: QuantTrick[] = [
  {
    id: "df-trick-01",
    topic: "decimal-fractions",
    type: "mental-math",
    title: "Fraction-Decimal Equivalents Table",
    description:
      "Memorise these: 1/2=0.5, 1/4=0.25, 3/4=0.75, 1/3=0.333, 2/3=0.667, 1/5=0.2, 1/8=0.125, 1/6=0.167, 1/7≈0.143, 1/9=0.111. Using fraction form is often faster than decimal arithmetic.",
    example: {
      problem: "Calculate 0.125 × 512",
      solution: "0.125 = 1/8. So 512/8 = 64. Much faster than decimal multiplication.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "df-trick-02",
    topic: "decimal-fractions",
    type: "formula-shortcut",
    title: "Recurring Decimal to Fraction",
    description:
      "For pure recurring: digits/9s (same count). 0.7̄ = 7/9. 0.27̄27̄ = 27/99 = 3/11. For mixed: (all digits − non-recurring part) / 9s0s.",
    formula: "0.abc̄ = (abc − ab) / 900 where c is the recurring digit",
    example: {
      problem: "Convert 0.1̄6̄ to fraction",
      solution: "0.16̄ = (16 − 1)/90 = 15/90 = 1/6.",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "df-trick-03",
    topic: "decimal-fractions",
    type: "mental-math",
    title: "Multiply by Powers of 10",
    description:
      "Multiplying by 10 shifts decimal one place right. Multiplying by 0.1 shifts one place left. Use this to avoid writing out full multiplication.",
    example: {
      problem: "Find 1.36 × 100",
      solution: "Shift decimal 2 places right: 1.36 → 136. Answer: 136.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "df-trick-04",
    topic: "decimal-fractions",
    type: "formula-shortcut",
    title: "Comparison Without Converting",
    description:
      "To compare fractions, convert to decimals mentally using known equivalents. Or cross multiply: a/b vs c/d → compare ad vs bc. The larger product indicates the larger fraction.",
    example: {
      problem: "Which is larger: 5/8 or 7/11?",
      solution: "Cross multiply: 5×11=55 vs 7×8=56. Since 56 > 55, 7/11 > 5/8.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "df-trick-05",
    topic: "decimal-fractions",
    type: "mental-math",
    title: "Decimal Approximation in Options",
    description:
      "In MCQ exams, if exact decimal calculation is complex, round to 2 decimal places and match with options. Options are usually spaced at least 0.1 apart, so 2-place rounding always uniquely identifies the answer.",
    example: {
      problem: "Find 7/13 (choose closest): (a) 0.53 (b) 0.54 (c) 0.52 (d) 0.55",
      solution:
        "7÷13: 13×5=65, 70−65=5, so 0.5 and remainder 5. 50÷13≈3.8. So ≈0.538. Closest: (b) 0.54.",
    },
    timeSaved: "20 seconds",
  },
]
