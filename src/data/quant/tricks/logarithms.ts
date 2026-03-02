import type { QuantTrick } from "@/types/quant"

export const logarithmsTricks: QuantTrick[] = [
  {
    id: "log-trick-1",
    topic: "logarithms",
    type: "formula-shortcut",
    title: "Log of 1 is Always 0",
    description:
      "For any base b > 0 and b ≠ 1, log_b(1) = 0. Useful for elimination in MCQs.",
    formula: "log_b(1) = 0 for any valid base b",
    example: {
      problem: "Find log_5(1) + log_2(1) + log_10(1)",
      solution:
        "0 + 0 + 0 = 0. Each term equals 0 regardless of base.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "log-trick-2",
    topic: "logarithms",
    type: "formula-shortcut",
    title: "Log of Base Equals 1",
    description:
      "log_b(b) = 1 always. log_10(10) = 1, log_2(2) = 1. Also: log_b(b^n) = n.",
    formula: "log_b(b) = 1 | log_b(b^n) = n",
    example: {
      problem: "Find log_10(10^5)",
      solution: "log_10(10^5) = 5 × log_10(10) = 5 × 1 = 5",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "log-trick-3",
    topic: "logarithms",
    type: "mental-math",
    title: "Build Any Log from log 2, log 3, log 7",
    description:
      "Memorise log 2 ≈ 0.301, log 3 ≈ 0.477, log 7 ≈ 0.845, log 10 = 1. Build others: log 4 = 2 × log 2, log 6 = log 2 + log 3, log 5 = log(10/2) = 1 − log 2, log 9 = 2 × log 3, log 12 = 2 × log 2 + log 3.",
    example: {
      problem: "Find log 12 given log 2 = 0.301, log 3 = 0.477",
      solution:
        "log 12 = log(4 × 3) = 2 log 2 + log 3 = 0.602 + 0.477 = 1.079",
    },
    timeSaved: "45 seconds",
  },
  {
    id: "log-trick-4",
    topic: "logarithms",
    type: "formula-shortcut",
    title: "Log Equation Shortcut: Equate Arguments",
    description:
      "If log_b(x) = log_b(y), then x = y. Eliminates the log instantly when bases match.",
    formula: "log_b(x) = log_b(y) ⟹ x = y",
    example: {
      problem: "Solve: log(x + 3) = log(2x − 1)",
      solution:
        "Since bases match: x + 3 = 2x − 1 → x = 4",
    },
    timeSaved: "30 seconds",
  },
  {
    id: "log-trick-5",
    topic: "logarithms",
    type: "formula-shortcut",
    title: "Negative Log via Reciprocal",
    description:
      "log(1/n) = −log n. Negative log means the argument is a fraction less than 1.",
    formula: "log(1/n) = −log n",
    example: {
      problem: "Find log(1/8) if log 2 = 0.301",
      solution:
        "log(1/8) = −log 8 = −3 log 2 = −3 × 0.301 = −0.903",
    },
    timeSaved: "20 seconds",
  },
]
