import type { ReasoningTrick } from "@/types/reasoning"

export const orderRankingTricks: ReasoningTrick[] = [
  {
    id: "or-t1",
    topic: "order-ranking",
    type: "pattern-shortcut",
    title: "Instant Total Formula",
    description:
      "When both positions of a person are given, apply Total = Left + Right - 1 directly. No need to draw the row.",
    formula: "Total = Left + Right - 1",
    example: {
      problem:
        "Ravi is 7th from the left and 13th from the right. How many people are in the row?",
      solution: "Total = 7 + 13 - 1 = 19 people.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "or-t2",
    topic: "order-ranking",
    type: "pattern-shortcut",
    title: "Between Count Shortcut",
    description:
      "People between two positions = |Pos1 - Pos2| - 1. Works from either end as long as both positions are from the same end.",
    formula: "Between = |Position_A - Position_B| - 1",
    example: {
      problem:
        "In a row, A is 5th from left and B is 12th from left. How many people are between them?",
      solution: "|12 - 5| - 1 = 6 people between A and B.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "or-t3",
    topic: "order-ranking",
    type: "elimination",
    title: "Interchange Swap Logic",
    description:
      "When two people swap positions: new rank of A = old rank of B and vice versa. Use this to set up equations without drawing the row.",
    example: {
      problem:
        "A is 10th from left. After swapping with B, A becomes 15th from left. What was B's original position from left?",
      solution:
        "After swap, A takes B's position. So B was originally 15th from left.",
    },
  },
  {
    id: "or-t4",
    topic: "order-ranking",
    type: "elimination",
    title: "Minimum vs. Maximum Total",
    description:
      "Minimum total: assume maximum overlap (the two people could be the same). Maximum total: assume no overlap at all.",
    example: {
      problem:
        "A is 8th from left, B is 6th from right. What is the minimum number of people?",
      solution:
        "If A and B are the same person: min = max(8, 6) = 8. If different: min = 8 + 6 - 1 = 13 (if adjacent). The true minimum when they CAN be the same = 8.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "or-t5",
    topic: "order-ranking",
    type: "pattern-shortcut",
    title: "Convert to Same End",
    description:
      "Always convert all given positions to the same end (left or right) before comparing. Pos from Right = Total - Pos from Left + 1.",
    formula: "Right Position = Total - Left Position + 1",
    example: {
      problem:
        "In a row of 20, A is 6th from left and B is 9th from right. Who is more to the left?",
      solution:
        "B from left = 20 - 9 + 1 = 12th. A is 6th from left. A is more to the left.",
    },
    timeSaved: "10 sec/question",
  },
]
