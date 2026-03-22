import type { QuantConcept } from "@/types/quant"

export const sequencesSeriesConcept: QuantConcept = {
  topic: "sequences-series",
  title: "Sequences & Series (AP/GP)",
  description:
    "Sequences & Series covers AP (constant difference) and GP (constant ratio) \\u2014 the two patterns behind number series and sum-based word problems. SSC CGL Tier 1 and banking exams carry 3\\u20135 questions per paper; IBPS PO Prelims tests 5 patterns per set. Identify AP vs GP first: check if consecutive differences are equal (AP) or consecutive ratios are equal (GP), then apply the matching formula.",
  keyIdea:
    "AP: constant difference. GP: constant ratio. Check which one applies first. For AP sum, the fastest form is n/2 × (first + last).",
  formulas: [
    {
      name: "AP nth term",
      formula: "aₙ = a + (n−1)d",
      whenToUse: "Plug in first term (a), common difference (d), and position (n) to compute any AP term directly without listing all terms.",
    },
    {
      name: "AP Sum",
      formula: "Sₙ = n/2 × (first + last) or n/2 × [2a + (n−1)d]",
      whenToUse: "Use the (first + last) form when both endpoints are known; use the 2a + (n\\u22121)d form when only the first term and common difference are given.",
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
