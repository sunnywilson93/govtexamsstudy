import type { QuantConcept } from "@/types/quant"

export const siCiConcept: QuantConcept = {
  topic: "simple-compound-interest",
  title: "Simple & Compound Interest",
  description:
    "Simple Interest grows linearly — same amount every period. Compound Interest grows exponentially — interest is added to principal each period. Knowing the difference between them is key to all SI/CI problems.",
  keyIdea:
    "The extra amount in CI over SI for 2 years = P(R/100)². This shortcut directly gives the CI−SI difference without computing both separately.",
  formulas: [
    {
      name: "Simple Interest",
      formula: "SI = P × R × T / 100   |   Amount = P + SI",
      whenToUse: "For linear interest problems — same interest earned every period.",
    },
    {
      name: "Compound Interest",
      formula: "A = P × (1 + R/100)ᵀ   |   CI = A − P",
      whenToUse: "When interest is compounded annually — principal grows each period.",
    },
    {
      name: "CI − SI Difference (2 years)",
      formula: "CI − SI = P × (R/100)²",
      whenToUse: "To directly find the difference between CI and SI for 2 years without computing each.",
    },
    {
      name: "Compounding Frequency Adjustment",
      formula: "Half-yearly: A = P(1 + R/200)^(2T)  |  Quarterly: A = P(1 + R/400)^(4T)",
      whenToUse: "When interest is compounded more than once per year — adjust rate and time.",
    },
    {
      name: "Rule of 72 (Doubling Time)",
      formula: "Years to double ≈ 72 / R  (for CI)   |   100 / R  (for SI)",
      whenToUse: "To quickly estimate how long it takes for money to double at a given rate.",
    },
  ],
  examTags: ["SSC CGL", "IBPS PO", "SBI PO", "IBPS Clerk", "RRB NTPC"],
  examRelevance:
    "SI/CI questions are guaranteed in every banking exam (IBPS PO, SBI PO) and appear regularly in SSC CGL. The CI−SI difference and half-yearly compounding variants are high-frequency.",
}
