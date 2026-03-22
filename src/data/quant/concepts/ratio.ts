import type { QuantConcept } from "@/types/quant"

export const ratioConcept: QuantConcept = {
  topic: "ratio",
  title: "Ratio & Proportion",
  description:
    "Ratio compares two quantities; proportion equates two ratios. SSC CGL, RRB NTPC, and IBPS Clerk test ratio in almost every paper, often embedded inside age, partnership, and mixture problems. Always reduce a ratio to lowest terms before solving. Cross-multiplication resolves any proportion with one unknown in a single step.",
  keyIdea:
    "A ratio gives relative size, not absolute size. Always reduce to lowest terms (divide by GCD) before working with a ratio.",
  formulas: [
    {
      name: "Proportion (Cross-multiplication)",
      formula: "a:b :: c:d → a × d = b × c",
      whenToUse: "Cross-multiply to find the missing term when the problem gives three of four values in a proportion.",
    },
    {
      name: "Divide quantity in ratio a:b",
      formula: "First part = Total × a/(a+b); Second = Total × b/(a+b)",
      whenToUse: "Split any total (money, weight, mixture) into parts \\u2014 divide each part\\u2019s ratio share by the sum of ratio terms, then multiply by the total.",
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
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO", "IBPS Clerk"],
  examRelevance:
    "Ratio & Proportion underlies age problems, partnership, and mixture questions — all high-frequency topics in SSC CGL, RRB NTPC, and IBPS Clerk exams.",
}
