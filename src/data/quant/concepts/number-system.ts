import type { QuantConcept } from "@/types/quant"

export const numberSystemConcept: QuantConcept = {
  topic: "number-system",
  title: "Number System",
  description:
    "Number System tests divisibility, HCF, LCM, remainders, and prime factorization. SSC and RRB papers repeat HCF/LCM and remainder problems almost every session. Trailing-zeros-in-factorial is a guaranteed one-mark question in SSC CGL Tier 1. Build speed on factor counting and cyclicity \\u2014 these two skills unlock the hardest variants.",
  keyIdea:
    "HCF × LCM = Product of two numbers (valid for exactly two numbers only). Always verify divisibility before computing HCF/LCM.",
  formulas: [
    {
      name: "HCF × LCM Relationship",
      formula: "HCF(a, b) × LCM(a, b) = a × b",
      whenToUse: "Compute one value from the other instantly \\u2014 if the exam gives HCF and the product of two numbers, divide to get LCM (or vice versa).",
    },
    {
      name: "Number of Factors",
      formula: "If n = p₁^a × p₂^b × p₃^c, factors = (a+1)(b+1)(c+1)",
      whenToUse: "Prime-factorise the number first, then multiply incremented exponents \\u2014 this counts all divisors including 1 and the number itself.",
    },
    {
      name: "Trailing Zeros in n!",
      formula: "Zeros = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …",
      whenToUse: "To find how many trailing zeros appear in the factorial of a large number.",
    },
    {
      name: "Sum of First n Natural Numbers",
      formula: "Sₙ = n(n+1)/2",
      whenToUse: "For sum of 1+2+3+…+n; extend to squares: n(n+1)(2n+1)/6; cubes: [n(n+1)/2]²",
    },
    {
      name: "Remainder of Large Powers",
      formula: "aⁿ mod m — find cycle: a¹, a², a³ mod m; use n mod (cycle length) to pick remainder",
      whenToUse: "When asked for remainder of 2^100 ÷ 7 or similar large-power division problems.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO", "IBPS Clerk"],
  examRelevance:
    "Number System questions appear in almost every SSC and RRB exam — HCF/LCM and remainder problems are among the most frequently repeated topics.",
}
