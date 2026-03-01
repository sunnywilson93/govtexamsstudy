import type { QuantConcept } from "@/types/quant"

export const mixtureAlligationConcept: QuantConcept = {
  topic: "mixture-alligation",
  title: "Mixture & Alligation",
  description:
    "Mixture problems involve combining two or more ingredients at different values (price, concentration, strength). Alligation is the shortcut method that finds the mixing ratio directly from the values without setting up equations.",
  keyIdea:
    "Draw the alligation cross: put C1 top-left, C2 top-right, mean price Cm in centre. The diagonal differences give the mixing ratio: (C2 − Cm) : (Cm − C1).",
  formulas: [
    {
      name: "Alligation Rule (Mixing Ratio)",
      formula: "Ratio = (C2 − Cm) : (Cm − C1)  where Cm is the mean/target value",
      whenToUse: "To find in what ratio two ingredients must be mixed to achieve a target price or concentration.",
    },
    {
      name: "Repeated Dilution",
      formula: "Pure liquid remaining = V × ((V − x) / V)ⁿ",
      whenToUse: "When x litres are removed and replaced with water n times from a V-litre container.",
    },
    {
      name: "Weighted Average (Mixed Mixture)",
      formula: "Resultant Avg = (n₁×p₁ + n₂×p₂) / (n₁ + n₂)",
      whenToUse: "When combining two mixtures of different sizes and concentrations.",
    },
    {
      name: "Milk-Water Problem",
      formula: "Milk% in final mix = Total milk / Total volume × 100",
      whenToUse: "After repeated replacement or combination — track milk and water separately.",
    },
    {
      name: "Mean Price Constraint",
      formula: "C1 < Cm < C2  (mean price must lie between the two ingredient prices)",
      whenToUse: "To verify the problem setup — if Cm is outside this range, something is wrong.",
    },
  ],
  examTags: ["SSC CGL", "SSC CGL Tier 2", "IBPS PO", "SBI PO", "IBPS Clerk"],
  examRelevance:
    "Mixture & Alligation is a consistent topic in SSC CGL Tier 1 and Tier 2, and banking exams. Repeated dilution and profit-based alligation are the hardest and most frequently asked variants.",
}
