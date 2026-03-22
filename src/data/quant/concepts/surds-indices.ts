import type { QuantConcept } from "@/types/quant"

export const surdsConcept: QuantConcept = {
  topic: "surds-indices",
  title: "Surds & Indices",
  description:
    "Surds and indices questions boil down to five index laws plus rationalization. SSC CGL Tier 1 and Tier 2 each carry 2\\u20133 direct questions that test simplification, comparison of powers, and conversion between radical and exponential form. Nail the laws and you convert every problem into a single-step base-matching exercise.",
  keyIdea:
    "Master the 5 index laws and rationalisation — every surd/indices question is a combination of these.",
  formulas: [
    {
      name: "Product Rule",
      formula: "a^m × a^n = a^(m+n)",
      whenToUse: "Combine two powers that share the same base into one term by adding exponents.",
    },
    {
      name: "Division Rule",
      formula: "a^m ÷ a^n = a^(m-n)",
      whenToUse: "Reduce a fraction of same-base powers into one term by subtracting exponents.",
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
