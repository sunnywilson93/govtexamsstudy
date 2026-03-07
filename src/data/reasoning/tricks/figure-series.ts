import type { ReasoningTrick } from "@/types/reasoning"

export const figureSeriesTricks: ReasoningTrick[] = [
  {
    id: "fs-t1",
    topic: "figure-series",
    type: "pattern-shortcut",
    title: "Isolate Each Element",
    description:
      "Track each element (outer shape, inner shape, dots, lines, arrows) separately across all frames. Each element often follows its own independent pattern.",
    example: {
      problem:
        "Frame 1: Square with dot top-left. Frame 2: Square with dot top-right. Frame 3: Square with dot bottom-right. Frame 4: ?",
      solution:
        "Outer shape: unchanged (square). Dot: moves clockwise. Next = bottom-left. Answer: Square with dot bottom-left.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "fs-t2",
    topic: "figure-series",
    type: "pattern-shortcut",
    title: "Common Rotation Angles",
    description:
      "Most rotations in exams use 45°, 90°, or 180°. If an element seems to turn, test these three angles first.",
    formula: "Check: 45° (1/8 turn), 90° (1/4 turn), 180° (half turn)",
    example: {
      problem:
        "An arrow points right, then up, then left. What comes next?",
      solution:
        "Arrow rotates 90° counterclockwise each step: Right → Up → Left → Down.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "fs-t3",
    topic: "figure-series",
    type: "elimination",
    title: "Element Count Progression",
    description:
      "Count the total elements (lines, dots, shapes) in each frame. Common patterns: +1 per frame, +2 per frame, doubling, or alternating increase/decrease.",
    example: {
      problem:
        "Frame 1: 2 dots. Frame 2: 4 dots. Frame 3: 6 dots. Frame 4: ?",
      solution: "Pattern: +2 each frame. Frame 4 = 8 dots.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "fs-t4",
    topic: "figure-series",
    type: "elimination",
    title: "Shading Cycle Detection",
    description:
      "Track shading states: empty, half-shaded, fully shaded. These usually cycle with a period of 2 or 3 frames.",
    example: {
      problem:
        "Circle: empty, half, full, empty, half, ?",
      solution:
        "3-step cycle: empty → half → full → repeat. Next = full.",
    },
  },
  {
    id: "fs-t5",
    topic: "figure-series",
    type: "pattern-shortcut",
    title: "Odd-Even Frame Split",
    description:
      "Some series alternate between two different patterns on odd and even frames. If no single pattern fits all frames, check odd-numbered and even-numbered frames separately.",
    example: {
      problem:
        "Frame 1: Triangle up. Frame 2: Circle. Frame 3: Triangle right. Frame 4: Circle. Frame 5: ?",
      solution:
        "Odd frames: triangle rotates 90° CW. Even frames: circle (constant). Frame 5 = Triangle down.",
    },
    timeSaved: "20 sec/question",
  },
]
