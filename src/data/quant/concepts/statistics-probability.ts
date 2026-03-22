import type { QuantConcept } from "@/types/quant"

export const statisticsProbabilityConcept: QuantConcept = {
  topic: "statistics-probability",
  title: "Statistics & Probability",
  description:
    "Statistics tests your grasp of central tendency (mean, median, mode) and dispersion (range, variance, SD), while probability problems measure how well you count favorable outcomes. SSC CGL Tier 2 and banking mains routinely combine both areas in a single paper. Drill the complement shortcut P(at least one) = 1 \\u2212 P(none) and the Sum = Mean \\u00d7 n back-calculation to cover the highest-frequency patterns.",
  keyIdea:
    "For statistics: Sum = Mean × n — use this to work backwards from a given average. For probability: P(at least one) = 1 − P(none) is almost always faster than direct counting.",
  formulas: [
    {
      name: "Central Tendency",
      formula:
        "Mean = Sum / n  |  Median = middle value (sorted); even n → avg of n/2 and n/2+1 positions  |  Mode = most frequent",
      whenToUse:
        "Pick mean for aggregate calculations, median when data has outliers, and mode when the question asks for the most frequent value.",
    },
    {
      name: "Dispersion",
      formula:
        "Range = Max − Min  |  Variance = Σ(xᵢ − Mean)² / n  |  Standard Deviation = √Variance",
      whenToUse:
        "Compute range for a quick spread check; switch to SD or variance when the question asks about consistency or data spread.",
    },
    {
      name: "Basic Probability",
      formula:
        "P(E) = Favourable outcomes / Total outcomes  |  0 ≤ P(E) ≤ 1  |  P(E') = 1 − P(E)  |  P(A∪B) = P(A) + P(B) − P(A∩B)",
      whenToUse:
        "Apply P(E) = favourable/total for single-event problems; use P(E') = 1 − P(E) as the complement shortcut for complex events.",
    },
    {
      name: "Combined & Conditional Probability",
      formula:
        "Independent: P(A and B) = P(A) × P(B)  |  Mutually exclusive: P(A or B) = P(A) + P(B)  |  Conditional: P(A|B) = P(A∩B) / P(B)",
      whenToUse:
        "Multiplication rule for independent events (coin tosses, dice); addition rule for mutually exclusive outcomes; conditional when one event has already occurred.",
    },
    {
      name: "Permutations & Combinations",
      formula: "nPr = n! / (n−r)!  |  nCr = n! / ((n−r)! × r!)  |  nCr = nC(n−r)",
      whenToUse:
        "Use nPr when order matters (arrangements, rankings); use nCr when order doesn't matter (selections, committees).",
    },
  ],
  examTags: ["SSC CGL", "SSC CGL Tier 2", "IBPS PO", "SBI PO", "CDS", "UPSC CSAT"],
  examRelevance:
    "Statistics & Probability is high-yield in SSC CGL Tier 2 and banking exams — expect 3–5 questions per paper combining central tendency, probability of card/dice/ball problems, and nCr-based selection problems.",
}
