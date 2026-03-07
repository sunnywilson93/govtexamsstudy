import type { ReasoningConcept } from "@/types/reasoning"

export const orderRankingConcept: ReasoningConcept = {
  topic: "order-ranking",
  title: "Order & Ranking",
  description:
    "Order and ranking problems involve determining a person's position from the left, right, top, or bottom of a row or queue. The key formula relates total count to individual positions.",
  keyIdea:
    "Total = Left position + Right position - 1. Always convert all given information to positions from one end before solving.",
  rules: [
    {
      name: "Total Formula",
      rule: "Total = Position from Left + Position from Right - 1",
      whenToUse:
        "When two positions of the same person from opposite ends are given.",
    },
    {
      name: "Position from Other End",
      rule: "Position from Right = Total - Position from Left + 1",
      whenToUse: "When total and one position are known, find the other.",
    },
    {
      name: "Between Counting",
      rule: "People between A and B = |Position_A - Position_B| - 1",
      whenToUse:
        "When asked how many people sit between two known positions.",
    },
    {
      name: "Interchange Rule",
      rule: "After interchange, new position of A = old position of B and vice versa",
      whenToUse:
        "When two people swap positions and new rankings are given.",
    },
    {
      name: "Minimum Total",
      rule: "If A is nth from left and B is mth from right, minimum total = n + m - 1 (if they could be the same person) or n + m (if different)",
      whenToUse:
        "When asked for the minimum number of people in a row.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "RRB NTPC", "SBI PO"],
  examRelevance:
    "Order & Ranking appears as 3-4 questions in SSC CGL and 2-3 in IBPS PO. These are quick-solve questions if formulas are applied directly — high ROI for exam preparation.",
}
