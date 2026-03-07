import type { ReasoningConcept } from "@/types/reasoning"

export const linearArrangementsConcept: ReasoningConcept = {
  topic: "linear-arrangements",
  title: "Linear Arrangements",
  description:
    "Linear arrangement problems involve seating people in a straight row, often with conditions about relative positions, facing directions, and gaps between people.",
  keyIdea:
    "Fix one person's position first (preferably the most constrained one), then place others relative to that anchor. Track facing direction separately from left-right position.",
  rules: [
    {
      name: "Anchor Strategy",
      rule: "Start with the person who has the most conditions or a fixed position",
      whenToUse:
        "Always — reduces the number of possibilities to test.",
    },
    {
      name: "Facing Direction",
      rule: "If all face north: left = west side, right = east side. If someone faces south, their left/right reverses.",
      whenToUse:
        "When the problem specifies facing directions (common in banking exams).",
    },
    {
      name: "Gap Condition",
      rule: "\"Exactly N people between A and B\" means |Position_A - Position_B| = N + 1",
      whenToUse:
        "When conditions specify people sitting between two individuals.",
    },
    {
      name: "Immediate Neighbor",
      rule: "\"A sits immediately to the left of B\" means Position_A = Position_B - 1 (when facing the same direction)",
      whenToUse: "When adjacency conditions are given.",
    },
    {
      name: "Elimination by Contradiction",
      rule: "If placing a person in a position violates any condition, eliminate that case entirely",
      whenToUse:
        "When multiple valid placements exist — test each and discard contradictions.",
    },
  ],
  examTags: ["IBPS PO", "SBI PO", "IBPS Clerk", "RRB PO", "IBPS RRB"],
  examRelevance:
    "Linear arrangements appear as a 5-question set in IBPS PO and SBI PO prelims. Mastering the anchor-and-eliminate method is essential for solving within 5-7 minutes per set.",
}
