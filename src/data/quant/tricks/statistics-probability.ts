import type { QuantTrick } from "@/types/quant"

export const statisticsProbabilityTricks: QuantTrick[] = [
  {
    id: "sp-trick-01",
    topic: "statistics-probability",
    type: "mental-math",
    title: "Median Position Shortcut",
    description:
      "Always sort the list first. For odd n, the median sits at position (n+1)/2. For even n, average the values at positions n/2 and n/2+1. This avoids re-counting after sorting.",
    example: {
      problem: "Find the median of: 7, 2, 9, 4, 6, 1, 8.",
      solution:
        "Sorted: 1, 2, 4, 6, 7, 8, 9. n=7 (odd). Position = (7+1)/2 = 4th term = 6. Median = 6.",
    },
    timeSaved: "~20s vs unsorted counting errors",
  },
  {
    id: "sp-trick-02",
    topic: "statistics-probability",
    type: "formula-shortcut",
    title: "Complement Rule for 'At Least One'",
    description:
      "P(at least one success) = 1 − P(all failures). This is almost always faster than directly counting all successful outcomes, especially with multiple trials.",
    formula: "P(at least one) = 1 − P(none)",
    example: {
      problem: "A fair coin is tossed 3 times. Probability of getting at least one Head?",
      solution:
        "P(no head) = (1/2)³ = 1/8. P(at least one head) = 1 − 1/8 = 7/8.",
    },
    timeSaved: "~25s vs listing all favourable outcomes",
  },
  {
    id: "sp-trick-03",
    topic: "statistics-probability",
    type: "mental-math",
    title: "Standard Outcome Counts for Dice & Coins",
    description:
      "Memorise: 1 coin → 2 outcomes; n coins → 2ⁿ outcomes; 1 die → 6 outcomes; 2 dice → 36 outcomes. For 2 dice, directly count pairs for the target sum rather than listing all.",
    example: {
      problem: "Two dice are thrown. Probability that the sum is 8?",
      solution:
        "Total outcomes = 36. Pairs summing to 8: (2,6),(3,5),(4,4),(5,3),(6,2) → 5 pairs. P = 5/36.",
    },
    timeSaved: "~15s by skipping full outcome enumeration",
  },
  {
    id: "sp-trick-04",
    topic: "statistics-probability",
    type: "formula-shortcut",
    title: "Combination Symmetry Identity",
    description:
      "nCr = nC(n−r). Always pick the smaller of r and n−r to minimise calculations. This is especially useful when r is close to n.",
    formula: "nCr = nC(n−r)  →  use min(r, n−r)",
    example: {
      problem: "Find 10C8.",
      solution: "10C8 = 10C(10−8) = 10C2 = (10×9)/(2×1) = 45.",
    },
    timeSaved: "~30s by avoiding large factorial division",
  },
  {
    id: "sp-trick-05",
    topic: "statistics-probability",
    type: "formula-shortcut",
    title: "Mean Shift & Scale Rule",
    description:
      "Adding a constant k to every value shifts the mean by k but leaves variance unchanged. Multiplying every value by k scales the mean by k and the variance by k². Identify these transformations to skip recomputation.",
    formula:
      "New Mean = Old Mean + k (additive) or k × Old Mean (multiplicative)  |  New Variance = Old Variance (additive) or k² × Old Variance (multiplicative)",
    example: {
      problem:
        "A dataset has mean 50 and variance 16. Every value is doubled. Find new mean and new variance.",
      solution: "New Mean = 2 × 50 = 100. New Variance = 2² × 16 = 64.",
    },
    timeSaved: "~20s vs recomputing from raw data",
  },
]
