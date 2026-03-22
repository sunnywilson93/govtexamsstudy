import type { QuantConcept } from "@/types/quant"

export const percentageConcept: QuantConcept = {
  topic: "percentage",
  title: "Percentage",
  description:
    "Percentage means \\u2018per hundred\\u2019 and underpins Profit & Loss, SI/CI, and Data Interpretation. SSC CGL, IBPS PO, and SBI PO each carry 3\\u20134 percentage questions per paper. Exams test successive changes, reverse-percentage (find original from final), and fraction\\u2013percent conversion speed. Always divide by the original value when computing percentage change \\u2014 this is the most common trap.",
  keyIdea:
    "Always divide by the ORIGINAL (base) value — never by the new value — when computing percentage change.",
  formulas: [
    {
      name: "Find X% of a number",
      formula: "(X / 100) × N",
      whenToUse: "Multiply the number by X/100 \\u2014 convert X to a fraction (e.g. 12.5% = 1/8) for mental math speed.",
    },
    {
      name: "Percentage Change",
      formula: "Change% = (Change / Original) × 100",
      whenToUse: "Divide the absolute change by the original (base) value, not the new value \\u2014 then multiply by 100 to get the percentage increase or decrease.",
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
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "SBI PO", "RRB NTPC"],
  examRelevance:
    "Percentage appears in 3–4 questions in every SSC CGL, IBPS PO, and SBI PO paper. It is also the foundation for Profit & Loss and SI/CI topics.",
}
