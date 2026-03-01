import type { QuantTrick } from "@/types/quant"

export const surdsTricks: QuantTrick[] = [
  {
    id: "si-trick-01",
    topic: "surds-indices",
    type: "formula-shortcut",
    title: "Zero Exponent Rule",
    description:
      "Any non-zero number raised to power 0 is always 1. Instantly evaluate a^0 = 1 for any base.",
    formula: "a^0 = 1 (a ≠ 0)",
    example: {
      problem: "Simplify: (999)^0 + (0.001)^0",
      solution: "1 + 1 = 2. Any non-zero base raised to 0 is 1.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "si-trick-02",
    topic: "surds-indices",
    type: "formula-shortcut",
    title: "Negative Index Flip",
    description:
      "Flip the base to make a negative exponent positive: a^(-n) = 1/a^n. Apply immediately without hesitation.",
    formula: "a^(-n) = 1/a^n → (a/b)^(-n) = (b/a)^n",
    example: {
      problem: "Evaluate (2/3)^(-2)",
      solution:
        "(3/2)^2 = 9/4. Flip the fraction and remove the negative sign from the exponent.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "si-trick-03",
    topic: "surds-indices",
    type: "mental-math",
    title: "Surd Comparison by Squaring",
    description:
      "To compare √a and ∛b, convert to same index: express as 6th roots. √a = ⁶√(a³); ∛b = ⁶√(b²). Compare values under the 6th root.",
    example: {
      problem: "Which is larger: √5 or ∛7?",
      solution: "√5 = ⁶√(125); ∛7 = ⁶√(49). Since 125 > 49, √5 > ∛7.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "si-trick-04",
    topic: "surds-indices",
    type: "formula-shortcut",
    title: "Rationalise the Denominator",
    description:
      "To remove surd from denominator: multiply by conjugate. (a + √b)(a - √b) = a² - b. This eliminates the surd.",
    formula: "1/(a + √b) = (a - √b)/(a² - b)",
    example: {
      problem: "Simplify 1/(3 + √2)",
      solution:
        "Multiply by (3 - √2)/(3 - √2) = (3 - √2)/(9 - 2) = (3 - √2)/7",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "si-trick-05",
    topic: "surds-indices",
    type: "formula-shortcut",
    title: "Same Base Exponent Product",
    description:
      "When same base appears in product: just add exponents. When same base in division: subtract. Combine into one step.",
    formula: "a^m × a^n × a^p = a^(m+n+p)",
    example: {
      problem: "Simplify 2^3 × 2^(-1) × 2^5",
      solution: "2^(3-1+5) = 2^7 = 128. Add all exponents algebraically.",
    },
    timeSaved: "10 seconds",
  },
]
