import type { QuantTrick } from "@/types/quant"

export const simplificationTricks: QuantTrick[] = [
  {
    id: "simp-trick-01",
    topic: "simplification",
    type: "formula-shortcut",
    title: "BODMAS in 2 Seconds",
    description:
      "Scan expression left-to-right and mentally tag each operation's level: brackets first, then powers, then × and ÷ (same level, left to right), finally + and − (same level, left to right). Resolve highest-level first.",
    example: {
      problem: "Evaluate: 12 + 4 × 3 − 8 ÷ 2",
      solution: "Divide first: 8÷2=4. Then multiply: 4×3=12. Now: 12+12−4 = 20. Answer: 20.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "simp-trick-02",
    topic: "simplification",
    type: "mental-math",
    title: "Approximation for Banking",
    description:
      "Round all numbers to nearest 5 or 10. Compute rounded version. Match with closest option. Works for 90% of IBPS/SBI simplification questions where options are at least 5 apart.",
    example: {
      problem: "Evaluate: 489.7 + 318.4 − 211.6 + 152.3",
      solution: "Round: 490 + 318 − 212 + 152 = 748. Exact: 748.8. Closest option wins.",
    },
    timeSaved: "30 seconds",
  },
  {
    id: "simp-trick-03",
    topic: "simplification",
    type: "mental-math",
    title: "Memorise Square Root Table",
    description:
      "Memorise squares of numbers 1–30. Most simplification questions involve √(perfect square). Recognise 676=26², 784=28², 961=31², 1024=32² instantly.",
    example: {
      problem: "Find √1764",
      solution:
        "1764 ends in 4 → root ends in 2 or 8. Estimate: 40²=1600, 45²=2025. Try 42²=1764. ✓ Answer: 42.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "simp-trick-04",
    topic: "simplification",
    type: "formula-shortcut",
    title: "Fraction Multiplication Shortcut",
    description:
      "When multiplying fractions, cancel diagonally before multiplying. Find common factor between any numerator and any denominator, cancel first, then multiply. Fewer digits to handle.",
    formula: "(a/b) × (c/d) — cancel a with d or c with b if common factor exists",
    example: {
      problem: "Evaluate: (14/3) × (9/7)",
      solution:
        "Cancel diagonally: 14÷7=2; 9÷3=3. Result = 2×3 = 6. (Instead of 14×9=126, 3×7=21, 126÷21=6.)",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "simp-trick-05",
    topic: "simplification",
    type: "mental-math",
    title: "% to Fraction Conversion Table",
    description:
      "Replace % values with fractions for faster arithmetic: 25%=1/4, 50%=1/2, 75%=3/4, 33.33%=1/3, 12.5%=1/8, 16.67%=1/6. Fraction arithmetic is often faster than decimal.",
    example: {
      problem: "What is 37.5% of 320?",
      solution: "37.5% = 3/8. So 3/8 × 320 = 3 × 40 = 120.",
    },
    timeSaved: "20 seconds",
  },
]
