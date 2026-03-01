import type { QuantConcept } from "@/types/quant"

export const ratioConcept: QuantConcept = {
  topic: "ratio",
  title: "Ratio & Proportion",
  description:
    "A ratio a:b expresses the relative magnitude of two quantities — it is the fraction a/b. A proportion states that two ratios are equal: a:b :: c:d means a/b = c/d.",
  keyIdea:
    "A ratio gives relative size, not absolute size. Always reduce to lowest terms (divide by GCD) before working with a ratio.",
  formulas: [
    {
      name: "Proportion (Cross-multiplication)",
      formula: "a:b :: c:d → a × d = b × c",
      whenToUse: "To find a missing term when three of four values in a proportion are known.",
    },
    {
      name: "Divide quantity in ratio a:b",
      formula: "First part = Total × a/(a+b); Second = Total × b/(a+b)",
      whenToUse: "To split a total amount between two people in a given ratio.",
    },
    {
      name: "Compounded Ratio",
      formula: "a:b compounded with c:d = ac : bd",
      whenToUse: "When two ratios need to be combined into a single ratio.",
    },
    {
      name: "Mean Proportion",
      formula: "Mean proportion of a and b = √(ab)",
      whenToUse: "When asked to find the mean proportional between two numbers.",
    },
    {
      name: "Third Proportion",
      formula: "Third proportion of a and b = b² / a",
      whenToUse: "When asked to find x such that a:b :: b:x.",
    },
  ],
  examRelevance:
    "Ratio & Proportion underlies age problems, partnership, and mixture questions — all high-frequency topics in SSC CGL, RRB NTPC, and IBPS Clerk exams.",
}
