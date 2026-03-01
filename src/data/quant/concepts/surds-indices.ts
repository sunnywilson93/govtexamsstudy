import type { QuantConcept } from "@/types/quant"

export const surdsConcept: QuantConcept = {
  topic: "surds-indices",
  title: "Surds & Indices",
  description:
    "Indices (exponents) express repeated multiplication; surds are irrational roots that cannot be simplified to rational numbers. Together they appear in simplification, comparison, and algebraic manipulation questions across competitive exams.",
  keyIdea:
    "Master the 5 index laws and rationalisation — every surd/indices question is a combination of these.",
  formulas: [
    {
      name: "Product Rule",
      formula: "a^m × a^n = a^(m+n)",
      whenToUse: "When multiplying same base powers",
    },
    {
      name: "Division Rule",
      formula: "a^m ÷ a^n = a^(m-n)",
      whenToUse: "When dividing same base powers",
    },
    {
      name: "Power Rule",
      formula: "(a^m)^n = a^(mn)",
      whenToUse: "When raising a power to another power",
    },
    {
      name: "Negative Index",
      formula: "a^(-n) = 1/a^n",
      whenToUse: "To convert negative exponents to positive",
    },
    {
      name: "Fractional Index",
      formula: "a^(p/q) = q√(a^p)",
      whenToUse: "To convert fractional exponents to radicals",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "CDS"],
  examRelevance:
    "2–3 direct questions per paper in SSC CGL Tier 1 and Tier 2. Mostly evaluate laws of indices and simplification of surds.",
}
