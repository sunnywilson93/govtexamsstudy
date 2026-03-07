import type { ReasoningTrick } from "@/types/reasoning"

export const linearArrangementsTricks: ReasoningTrick[] = [
  {
    id: "la-t1",
    topic: "linear-arrangements",
    type: "pattern-shortcut",
    title: "Most-Constrained Person First",
    description:
      "Identify the person with the most conditions (fixed position, multiple neighbors specified). Place them first to minimize trial-and-error.",
    example: {
      problem:
        "A sits 3rd from left. B is to the immediate right of A. C is 2 places from B.",
      solution:
        "A is most constrained (fixed position). Place A at 3, B at 4, then C at 2 or 6.",
    },
    timeSaved: "30 sec/set",
  },
  {
    id: "la-t2",
    topic: "linear-arrangements",
    type: "pattern-shortcut",
    title: "Facing-Direction Flip Rule",
    description:
      "When someone faces the opposite direction: their 'left' and 'right' are reversed from the observer's perspective. Draw arrows to avoid mistakes.",
    example: {
      problem:
        "All face north. A sits to the left of B. C faces south and sits to the left of D.",
      solution:
        "A is to B's west. But C faces south, so C's left = east direction. D is to C's east (observer's right).",
    },
    timeSaved: "20 sec/set",
  },
  {
    id: "la-t3",
    topic: "linear-arrangements",
    type: "elimination",
    title: "Two-Case Method",
    description:
      "When a condition like 'exactly 2 between A and B' creates two possible placements, track both cases in parallel. Subsequent conditions will usually eliminate one.",
    example: {
      problem: "8 people in a row. Exactly 2 between A and B. A is not at either end.",
      solution:
        "Case 1: A-__-__-B positions. Case 2: B-__-__-A positions. Apply remaining conditions to eliminate one case.",
    },
    timeSaved: "45 sec/set",
  },
  {
    id: "la-t4",
    topic: "linear-arrangements",
    type: "elimination",
    title: "Negative Condition Deferral",
    description:
      "Conditions like 'A does NOT sit next to B' should be applied after positive conditions. Positive conditions fix positions; negative conditions then validate or eliminate.",
    example: {
      problem:
        "C sits 3rd from right. D is immediate neighbor of C. A does not sit next to D.",
      solution:
        "Place C, then D (positive conditions first). Check A's remaining positions against 'not next to D' last.",
    },
    timeSaved: "20 sec/set",
  },
  {
    id: "la-t5",
    topic: "linear-arrangements",
    type: "pattern-shortcut",
    title: "End-Position Anchoring",
    description:
      "If someone is at an extreme end, they have only one neighbor. This heavily constrains the arrangement — always process end-position clues first.",
    example: {
      problem:
        "A sits at one of the ends. B sits to the immediate right of A. 7 people total.",
      solution:
        "A must be at position 1 (leftmost) since B is to A's right. A=1, B=2. This fixes two positions instantly.",
    },
    timeSaved: "15 sec/set",
  },
]
