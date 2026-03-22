import type { QuantConcept } from "@/types/quant"

export const averageConcept: QuantConcept = {
  topic: "average",
  title: "Average",
  description:
    "Average equals Sum divided by Count. Exams twist this with member additions, removals, replacements, and group merges. Banking and SSC papers carry 2\\u20133 average questions per paper, and the replacement variant appears most frequently.",
  keyIdea:
    "Work backwards from Average: Sum = Average × Count. This single formula solves 80% of average problems.",
  formulas: [
    {
      name: "Average",
      formula: "Average = Sum / Count  →  Sum = Average × Count",
      whenToUse: "Start every average problem here \\u2014 compute the total sum first, then manipulate it based on the condition given.",
    },
    {
      name: "Weighted Average",
      formula: "Combined Avg = (n₁×a₁ + n₂×a₂) / (n₁ + n₂)",
      whenToUse: "Merge two groups of different sizes into one and compute the combined average directly.",
    },
    {
      name: "Effect of Adding a New Term",
      formula: "New term = New Avg × (n+1) − Old Avg × n",
      whenToUse: "When the average changes after one more element is included.",
    },
    {
      name: "Effect of Replacing a Term",
      formula: "Change in average = (New value − Old value) / n",
      whenToUse: "When one member leaves and another joins — find how much the average shifts.",
    },
    {
      name: "Average of Consecutive Integers",
      formula: "Avg = (First + Last) / 2  =  middle term",
      whenToUse: "For any evenly-spaced sequence; the average equals the middle value.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "RRB NTPC"],
  examRelevance:
    "Average questions appear in virtually every banking and SSC exam — replacement and weighted-average variants are the most tested sub-types.",
}
