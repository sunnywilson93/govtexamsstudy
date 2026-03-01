import type { QuantConcept } from "@/types/quant"

export const agesConcept: QuantConcept = {
  topic: "ages",
  title: "Problems on Ages",
  description:
    "Age problems require setting up algebraic equations from conditions about present, past, and future ages. Questions involve ratios, sums, differences, and multiples of ages across different points in time.",
  keyIdea:
    "Age difference is permanent. If A is 5 years older than B today, A was 5 years older than B 10 years ago too. This single fact unlocks most age problems.",
  formulas: [
    {
      name: "Age Difference",
      formula:
        "Age difference is constant — it remains the same regardless of the year",
      whenToUse: "To compare ages at different points in time",
    },
    {
      name: "Ratio Method",
      formula: "Present ages = ak and bk; use condition to find k",
      whenToUse: "When ages are given as ratio",
    },
    {
      name: "Past Age",
      formula: "Age n years ago = Present age − n",
      whenToUse: "For questions about past ages",
    },
    {
      name: "Future Age",
      formula: "Age n years later = Present age + n",
      whenToUse: "For questions about future ages",
    },
    {
      name: "Average Age",
      formula:
        "Sum of ages = Average × Count; if one new member joins, new sum = old sum + new age",
      whenToUse: "For group age questions",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "RRB NTPC", "SBI PO"],
  examRelevance:
    "2–4 questions in almost every competitive exam. Age problems appear in both arithmetic and word problem sections. Mastering ratio-based setup solves 80% of questions.",
}
