import type { QuantTrick } from "@/types/quant"

export const agesTricks: QuantTrick[] = [
  {
    id: "ages-trick-01",
    topic: "ages",
    type: "mental-math",
    title: "Age Difference Is Constant",
    description:
      "The difference between two people's ages never changes. If A is 5 years older than B now, A was always 5 years older. Use this to form instant equations.",
    example: {
      problem:
        "Father is 30 years older than son. 5 years ago, father was 4 times son's age. Find current ages.",
      solution:
        "Let son's present age = x. Father = x + 30. Five years ago: (x+30-5) = 4(x-5) → x+25 = 4x-20 → 3x = 45 → x = 15. Son = 15, Father = 45.",
    },
    timeSaved: "30 seconds",
  },
  {
    id: "ages-trick-02",
    topic: "ages",
    type: "formula-shortcut",
    title: "Ratio Method — k-Substitution",
    description:
      "When ages given as ratio a:b, write them as ak and bk. The sum (a+b)k equals any given total. Find k in one step, then scale.",
    formula: "Ages = ak, bk where k = Total sum / (a+b)",
    example: {
      problem: "Ratio of A's age to B's age is 3:5. Sum is 40. Find each age.",
      solution: "k = 40/(3+5) = 5. A = 3×5 = 15, B = 5×5 = 25.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "ages-trick-03",
    topic: "ages",
    type: "formula-shortcut",
    title: "Years Later Ratio Trap",
    description:
      "When a future ratio is given, add the same number to both ratio parts (not just one). Many students forget to add to both ages.",
    formula: "n years later: ratio = (ak + n):(bk + n)",
    example: {
      problem: "A is 20 and B is 10 now. In how many years will A:B = 5:3?",
      solution:
        "Let n years later: (20+n)/(10+n) = 5/3. Cross-multiply: 3(20+n) = 5(10+n) → 60+3n = 50+5n → 10 = 2n → n = 5 years.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "ages-trick-04",
    topic: "ages",
    type: "mental-math",
    title: "Average Age Shortcut",
    description:
      "Total age of group = average × count. If one member is replaced or a new one joins, adjust total and recompute average directly. Avoid listing all ages.",
    example: {
      problem:
        "Average age of 5 people is 28. If one person aged 40 leaves, find new average.",
      solution:
        "Total = 5 × 28 = 140. New total = 140 − 40 = 100. New average = 100/4 = 25.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "ages-trick-05",
    topic: "ages",
    type: "formula-shortcut",
    title: "Years Ago Simplification",
    description:
      "For 'n years ago' ratio questions, subtract n from both current ages, set ratio equal to given fraction, and solve. Remember both ages decrease by n.",
    formula: "(Present_A − n) / (Present_B − n) = given ratio",
    example: {
      problem:
        "Present ratio of A to B is 7:4. 6 years ago, ratio was 5:2. Find present ages.",
      solution:
        "Present: A=7k, B=4k. Six years ago: (7k-6)/(4k-6) = 5/2. Cross multiply: 2(7k-6) = 5(4k-6) → 14k-12 = 20k-30 → 18 = 6k → k=3. A=21, B=12.",
    },
    timeSaved: "25 seconds",
  },
]
