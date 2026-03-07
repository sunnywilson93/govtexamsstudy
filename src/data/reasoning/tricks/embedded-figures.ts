import type { ReasoningTrick } from "@/types/reasoning"

export const embeddedFiguresTricks: ReasoningTrick[] = [
  {
    id: "ef-t1",
    topic: "embedded-figures",
    type: "pattern-shortcut",
    title: "Anchor on the Longest Line",
    description:
      "Find the longest or most distinctive line/edge in the target figure. Search for this specific line in the complex figure first — it narrows down the search area instantly.",
    example: {
      problem:
        "Target: a right triangle. Complex figure: overlapping rectangles and triangles.",
      solution:
        "Find the hypotenuse (longest side of the right triangle) in the complex figure. Then check if the two shorter sides also exist at the correct angles.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "ef-t2",
    topic: "embedded-figures",
    type: "pattern-shortcut",
    title: "Mental Rotation Technique",
    description:
      "If the target figure is not visible at first, mentally rotate it by 90° and 180°. Many embedded figures are rotated versions of the target.",
    example: {
      problem:
        "Target: L-shape pointing right. No match visible in the complex figure.",
      solution:
        "Rotate L-shape 90° clockwise — now it points down. This rotated version is visible in the lower-left portion of the complex figure.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "ef-t3",
    topic: "embedded-figures",
    type: "elimination",
    title: "Size Ratio Check",
    description:
      "The embedded figure maintains the same proportions as the target. If the target is a 1:2 rectangle, look for a 1:2 rectangle in the complex figure — not 1:1 or 1:3.",
    example: {
      problem:
        "Target: elongated rectangle (1:3 ratio). Option shows a square-ish portion highlighted.",
      solution:
        "The highlighted portion is roughly 1:1. This does not match the 1:3 target. Eliminate this option.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "ef-t4",
    topic: "embedded-figures",
    type: "elimination",
    title: "Angle Matching",
    description:
      "Count and match the angles of the target figure. A pentagon has 5 angles; if the highlighted region has only 4, it is not the correct embedding.",
    example: {
      problem:
        "Target: regular pentagon. An option highlights a quadrilateral portion.",
      solution:
        "Pentagon needs 5 vertices. Highlighted region has 4 vertices. Eliminate — wrong shape.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "ef-t5",
    topic: "embedded-figures",
    type: "pattern-shortcut",
    title: "Trace and Verify",
    description:
      "Once you think you have found the embedded figure, trace every edge of the target on the complex figure. All edges must align with existing lines in the complex figure.",
    example: {
      problem:
        "You think the triangle target is in the top-right. Trace: side 1 matches, side 2 matches, side 3 crosses empty space.",
      solution:
        "Side 3 does not follow an existing line → this is NOT the correct embedding. Continue searching.",
    },
  },
]
