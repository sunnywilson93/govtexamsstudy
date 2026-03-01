import type { QuantTrick } from "@/types/quant"

export const numberSystemTricks: QuantTrick[] = [
  {
    id: "ns-trick-01",
    topic: "number-system",
    type: "mental-math",
    title: "Divisibility Rule for 7",
    description: "Double the last digit and subtract from the remaining number. Repeat until small enough to judge.",
    example: {
      problem: "Is 161 divisible by 7?",
      solution: "16 − (2×1) = 14. 14 is divisible by 7 ✓",
    },
    timeSaved: "~20s vs long division",
  },
  {
    id: "ns-trick-02",
    topic: "number-system",
    type: "formula-shortcut",
    title: "Last Digit Cyclicity",
    description: "Powers of single digits repeat their last digit in a cycle of 1, 2, or 4. Find the cycle, then use (power mod cycle) to read off the last digit.",
    formula: "2→cycle 4 (2,4,8,6)  |  3→cycle 4 (3,9,7,1)  |  7→cycle 4 (7,9,3,1)  |  4,9→cycle 2",
    example: {
      problem: "Find the last digit of 7^53.",
      solution: "Cycle of 7 is 4. 53 mod 4 = 1 → last digit is 7¹ = 7",
    },
    timeSaved: "~45s vs computing large powers",
  },
  {
    id: "ns-trick-03",
    topic: "number-system",
    type: "formula-shortcut",
    title: "Trailing Zeros in n!",
    description: "Count factors of 5 in n! (there are always enough 2s). Keep dividing n by powers of 5 and sum up.",
    formula: "Zeros = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …",
    example: {
      problem: "How many trailing zeros in 100!?",
      solution: "⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24 zeros",
    },
    timeSaved: "~30s vs listing multiples",
  },
  {
    id: "ns-trick-04",
    topic: "number-system",
    type: "mental-math",
    title: "Remainder of Large Powers (Cyclicity)",
    description: "Find the remainder pattern for base^1, base^2, … mod divisor — it repeats. Use (power mod cycle-length) to read the answer.",
    example: {
      problem: "Find remainder when 2^100 is divided by 7.",
      solution: "2^1=2, 2^2=4, 2^3=1 (mod 7) → cycle=3. 100 mod 3 = 1 → remainder = 2¹ mod 7 = 2",
    },
    timeSaved: "~60s vs computing 2^100",
  },
  {
    id: "ns-trick-05",
    topic: "number-system",
    type: "formula-shortcut",
    title: "HCF from LCM (or vice versa)",
    description: "Use HCF × LCM = a × b to find the missing value instantly when one of HCF or LCM is given.",
    formula: "HCF(a, b) = (a × b) / LCM(a, b)",
    example: {
      problem: "LCM of two numbers is 180 and their product is 1800. Find HCF.",
      solution: "HCF = 1800 / 180 = 10",
    },
    timeSaved: "~25s vs factorisation method",
  },
]
