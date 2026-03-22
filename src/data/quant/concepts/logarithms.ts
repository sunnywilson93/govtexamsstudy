import type { QuantConcept } from "@/types/quant"

export const logarithmsConcept: QuantConcept = {
  topic: "logarithms",
  title: "Logarithms",
  description:
    "Logarithms reverse exponentiation: log_b(x) = y means b^y = x. Exams test simplification using product, quotient, and power rules, along with base-conversion and standard log values. SSC CGL Tier 1 and Tier 2 each carry 1\\u20132 log questions. Memorize log 2, log 3, and log 7 to solve numerical evaluations within seconds.",
  keyIdea:
    "If log_b(x) = y, then b^y = x. Logarithm is the inverse of exponentiation — log_10(1000) = 3 because 10^3 = 1000.",
  formulas: [
    {
      name: "Product Rule",
      formula: "log(m × n) = log m + log n",
      whenToUse:
        "Split a product inside a log into a sum \\u2014 use this to break down log(12) into log 4 + log 3 or similar.",
    },
    {
      name: "Quotient Rule",
      formula: "log(m / n) = log m − log n",
      whenToUse:
        "Convert a division inside a log into a subtraction \\u2014 apply when simplifying expressions like log(50/2).",
    },
    {
      name: "Power Rule",
      formula: "log(m^n) = n × log m",
      whenToUse:
        "When the argument has an exponent — bring the power in front",
    },
    {
      name: "Change of Base",
      formula: "log_b(x) = log x / log b  (common logs)",
      whenToUse:
        "To convert between bases — especially log base 2 or base 5 problems",
    },
    {
      name: "Standard Values",
      formula: "log 2 ≈ 0.301 | log 3 ≈ 0.477 | log 7 ≈ 0.845 | log 10 = 1",
      whenToUse:
        "To evaluate numerical log expressions without a calculator",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "UPSC CSAT"],
  examRelevance:
    "Logarithms appear in SSC CGL Tier 1 and Tier 2, usually 1–2 questions. Common question types: find log value given standard values, simplify log expressions, find x in log equations, and base-conversion problems.",
}
