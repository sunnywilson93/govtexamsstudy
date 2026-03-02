import type { QuantTrick } from "@/types/quant"

export const squareCubeRootsTricks: QuantTrick[] = [
  {
    id: "scr-trick-01",
    topic: "square-cube-roots",
    type: "mental-math",
    title: "Last Digit of Perfect Square",
    description:
      "Only these digits can be the last digit of a perfect square: 0, 1, 4, 5, 6, 9. If a number ends in 2, 3, 7, or 8 — it CANNOT be a perfect square. Eliminate options instantly.",
    example: {
      problem:
        "Which of these is a perfect square? (a) 2843 (b) 4356 (c) 5927 (d) 8768",
      solution:
        "2843 ends in 3 → NO. 5927 ends in 7 → NO. 8768 ends in 8 → NO. 4356 ends in 6 → possible. Answer: (b) 4356 = 66².",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "scr-trick-02",
    topic: "square-cube-roots",
    type: "mental-math",
    title: "Cube Root Last Digit Pattern",
    description:
      "Last digit of cube root matches last digit of cube for: 1,4,5,6,9,0. For 2↔8, 3↔7, 7↔3, 8↔2 (cross-pairs). Identify units digit of answer instantly.",
    example: {
      problem: "Find ∛32768",
      solution:
        "Last digit 8 → root ends in 2. Number is between 30³=27000 and 40³=64000, closer to 30. Try 32³=32768 ✓. Answer: 32.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "scr-trick-03",
    topic: "square-cube-roots",
    type: "formula-shortcut",
    title: "Simplify Surds by Factoring",
    description:
      "Factor the radicand. Pull out pairs (for √) or triples (for ∛) from under the radical. √(perfect square × remainder) = √(perfect square) × √remainder.",
    formula: "√(a² × b) = a√b; ∛(a³ × b) = a∛b",
    example: {
      problem: "Simplify √(180)",
      solution: "180 = 36 × 5 = 6² × 5. So √180 = 6√5.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "scr-trick-04",
    topic: "square-cube-roots",
    type: "mental-math",
    title: "Estimation Between Consecutive Squares",
    description:
      "For √N where N is not a perfect square, find n such that n² < N < (n+1)². Answer lies between n and n+1. For MCQ, check which nearby perfect square is closer.",
    example: {
      problem: "Approximate √50 (choose: 7.01, 7.07, 7.12, 7.25)",
      solution:
        "7²=49, 8²=64. √50 is just above 7. Since 50-49=1 and 64-49=15, √50 ≈ 7 + 1/(2×7) ≈ 7.07. Answer: 7.07.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "scr-trick-05",
    topic: "square-cube-roots",
    type: "formula-shortcut",
    title: "Identify Perfect Cube Range",
    description:
      "For 5-6 digit numbers, identify which perfect cube they fall between using memorised cubes. Units digit narrows it further. Two constraints usually uniquely identify the cube root.",
    formula: "∛N: find n where n³ ≤ N < (n+1)³; use last digit to confirm",
    example: {
      problem: "Find ∛17576",
      solution:
        "17576 ends in 6, so root ends in 6. 20³=8000 < 17576 < 27000=30³. Try 26: 26³=17576. ✓ Answer: 26.",
    },
    timeSaved: "25 seconds",
  },
]
