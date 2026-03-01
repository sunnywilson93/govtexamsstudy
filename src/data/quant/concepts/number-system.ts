import type { QuantConcept } from "@/types/quant"

export const numberSystemConcept: QuantConcept = {
  topic: "number-system",
  title: "Number System",
  description:
    "Number System covers the properties of integers — divisibility, HCF, LCM, remainders, and factorization. These rules underpin nearly all arithmetic reasoning in competitive exams.",
  keyIdea:
    "HCF × LCM = Product of two numbers (valid for exactly two numbers only). Always verify divisibility before computing HCF/LCM.",
  formulas: [
    {
      name: "HCF × LCM Relationship",
      formula: "HCF(a, b) × LCM(a, b) = a × b",
      whenToUse: "When given two numbers and asked for HCF or LCM — find one from the other instantly.",
    },
    {
      name: "Number of Factors",
      formula: "If n = p₁^a × p₂^b × p₃^c, factors = (a+1)(b+1)(c+1)",
      whenToUse: "To count how many divisors a number has after prime factorisation.",
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
