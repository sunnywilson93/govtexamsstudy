import type { QuantConcept } from "@/types/quant"

export const logarithmsConcept: QuantConcept = {
  topic: "logarithms",
  title: "Logarithms",
  description:
    "Logarithms express exponents: log_b(x) = y means b^y = x. They convert multiplication to addition and division to subtraction, making large-number calculations manageable in competitive exams.",
  keyIdea:
    "If log_b(x) = y, then b^y = x. Logarithm is the inverse of exponentiation — log_10(1000) = 3 because 10^3 = 1000.",
  formulas: [
    {
      name: "Product Rule",
      formula: "log(m × n) = log m + log n",
      whenToUse:
        "When multiplying two numbers under a single log",
    },
    {
      name: "Quotient Rule",
      formula: "log(m / n) = log m − log n",
      whenToUse:
        "When dividing numbers under a log",
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
