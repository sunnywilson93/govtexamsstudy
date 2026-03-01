import type { QuantConcept } from "@/types/quant"

export const percentageConcept: QuantConcept = {
  topic: "percentage",
  title: "Percentage",
  description:
    "Percentage means 'per hundred'. Any percentage is a fraction with denominator 100. The ability to convert fluently between %, fraction, and decimal is the foundation of all percentage problems.",
  keyIdea:
    "Always divide by the ORIGINAL (base) value — never by the new value — when computing percentage change.",
  formulas: [
    {
      name: "Find X% of a number",
      formula: "(X / 100) × N",
      whenToUse: "When asked to find what X% of a given number N is.",
    },
    {
      name: "Percentage Change",
      formula: "Change% = (Change / Original) × 100",
      whenToUse: "When a value increases or decreases and you need the % change.",
    },
    {
      name: "Find Original from Changed Value",
      formula: "Original = Result × 100 / (100 ± Change%)",
      whenToUse: "When you know the final value after a % change and need the original.",
    },
    {
      name: "Successive Percentage Changes",
      formula: "Net% = a + b + (ab / 100)",
      whenToUse: "When two percentage changes (a% then b%) are applied one after another.",
    },
    {
      name: "Base Equivalence",
      formula: "X% of Y = Y% of X",
      whenToUse: "When one of the two values is easier to work with as the base.",
    },
  ],
  examRelevance:
    "Percentage appears in 3–4 questions in every SSC CGL, IBPS PO, and SBI PO paper. It is also the foundation for Profit & Loss and SI/CI topics.",
}
