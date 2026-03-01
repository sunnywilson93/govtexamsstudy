import type { QuantConcept } from "@/types/quant"

export const averageConcept: QuantConcept = {
  topic: "average",
  title: "Average",
  description:
    "Average (Arithmetic Mean) is the sum of all values divided by the count. Most exam problems twist this by adding/removing members, replacing a wrong entry, or combining two groups.",
  keyIdea:
    "Work backwards from Average: Sum = Average × Count. This single formula solves 80% of average problems.",
  formulas: [
    {
      name: "Average",
      formula: "Average = Sum / Count  →  Sum = Average × Count",
      whenToUse: "First step in any average problem — compute the total sum from given average and count.",
    },
    {
      name: "Weighted Average",
      formula: "Combined Avg = (n₁×a₁ + n₂×a₂) / (n₁ + n₂)",
      whenToUse: "When two groups of different sizes are merged and you need the overall average.",
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
