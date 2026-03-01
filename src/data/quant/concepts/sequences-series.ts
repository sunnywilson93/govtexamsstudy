import type { QuantConcept } from "@/types/quant"

export const sequencesSeriesConcept: QuantConcept = {
  topic: "sequences-series",
  title: "Sequences & Series (AP/GP)",
  description:
    "Sequences & Series covers Arithmetic Progressions (AP) and Geometric Progressions (GP) — two fundamental patterns found in competitive exam number series, word problems, and sum questions. Identifying which type applies is the first and most important step.",
  keyIdea:
    "AP: constant difference. GP: constant ratio. Check which one applies first. For AP sum, the fastest form is n/2 × (first + last).",
  formulas: [
    {
      name: "AP nth term",
      formula: "aₙ = a + (n−1)d",
      whenToUse: "To find any term of an arithmetic progression",
    },
    {
      name: "AP Sum",
      formula: "Sₙ = n/2 × (first + last) or n/2 × [2a + (n−1)d]",
      whenToUse: "To find sum of n terms of AP",
    },
    {
      name: "GP nth term",
      formula: "aₙ = a × r^(n−1)",
      whenToUse: "To find any term of a geometric progression",
    },
    {
      name: "GP Sum (finite)",
      formula: "Sₙ = a(rⁿ − 1)/(r − 1) for r > 1; a(1 − rⁿ)/(1 − r) for r < 1",
      whenToUse: "To find sum of n terms of GP",
    },
    {
      name: "Sum of first n naturals",
      formula: "Sₙ = n(n+1)/2",
      whenToUse: "Instant sum without adding term by term",
    },
  ],
  examTags: ["SSC CGL", "IBPS PO", "SBI PO", "CDS", "NDA", "UPSC CSAT"],
  examRelevance:
    "3–5 questions in SSC CGL Tier 1 and banking exams. Number series questions in IBPS PO pre test 5 patterns per set. Sum of AP/GP in SSC Tier 2 and CDS.",
}
