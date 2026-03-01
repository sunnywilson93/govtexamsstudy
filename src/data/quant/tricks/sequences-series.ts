import type { QuantTrick } from "@/types/quant"

export const sequencesSeriesTricks: QuantTrick[] = [
  {
    id: "ss-trick-01",
    topic: "sequences-series",
    type: "formula-shortcut",
    title: "AP Sum Shortcut",
    description:
      "When you know the first and last term of an AP, use Sₙ = n/2 × (first + last). Faster than the full formula when last term is given or easily found.",
    formula: "Sₙ = n/2 × (a + l) where l = last term",
    example: {
      problem: "Find the sum of all even numbers from 2 to 100.",
      solution:
        "AP: 2, 4, 6, ..., 100. n=50, a=2, l=100. Sₙ = 50/2 × (2+100) = 25 × 102 = 2550.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "ss-trick-02",
    topic: "sequences-series",
    type: "formula-shortcut",
    title: "Identify AP vs GP Instantly",
    description:
      "Check if differences are constant → AP. Check if ratios are constant → GP. In number series questions, check consecutive differences first; if constant it's AP. If consecutive ratios are equal, it's GP.",
    example: {
      problem: "Is 3, 6, 12, 24, 48 an AP or GP?",
      solution:
        "Ratios: 6/3=2, 12/6=2, 24/12=2. Constant ratio=2. It's a GP with a=3, r=2.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "ss-trick-03",
    topic: "sequences-series",
    type: "mental-math",
    title: "Missing Term in AP",
    description:
      "For a missing middle term in AP, use the property that the middle term = arithmetic mean of its neighbours. Middle term = (term before + term after)/2.",
    formula: "Middle term of AP = (a + c)/2 where b is between a and c",
    example: {
      problem: "Find the missing term: 7, __, 19",
      solution:
        "Missing term = (7+19)/2 = 26/2 = 13. Verify: difference = 13-7 = 6; 19-13 = 6 ✓",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "ss-trick-04",
    topic: "sequences-series",
    type: "formula-shortcut",
    title: "Sum of First n Naturals",
    description:
      "Sum 1+2+3+...+n = n(n+1)/2. Memorise this. For sum from 1 to 100 = 5050. For sum from m to n = [sum to n] − [sum to m-1].",
    formula: "1+2+...+n = n(n+1)/2",
    example: {
      problem: "Find the sum: 51 + 52 + 53 + ... + 100",
      solution:
        "Sum 1 to 100 = 5050. Sum 1 to 50 = 50×51/2 = 1275. Answer = 5050 − 1275 = 3775.",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "ss-trick-05",
    topic: "sequences-series",
    type: "formula-shortcut",
    title: "GP Infinite Sum Shortcut",
    description:
      "For infinite GP where |r| < 1, the sum converges: S∞ = a/(1-r). Useful when numbers keep halving or reducing. Common in banking exam word problems.",
    formula: "S∞ = a/(1−r) when |r| < 1",
    example: {
      problem:
        "A bouncing ball reaches 2/3 of previous height each time. First bounce = 12m. Total distance travelled (sum of all bounces)?",
      solution: "S∞ = 12/(1 − 2/3) = 12/(1/3) = 36 metres.",
    },
    timeSaved: "20 seconds",
  },
]
