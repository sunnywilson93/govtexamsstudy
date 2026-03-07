import type { CubeDiceProblem } from "@/types/reasoning"

export const cubeDiceProblems: CubeDiceProblem[] = [
  {
    id: "cube-p1",
    type: "dice-opposite",
    question:
      "A standard die has faces numbered 1 to 6. In three views: (i) 1, 2, 3 are visible; (ii) 1, 2, 5 are visible; (iii) 2, 3, 4 are visible. Which number is opposite to 1?",
    faces: [
      { position: 1, content: "1", color: "#ef4444" },
      { position: 2, content: "2", color: "#3b82f6" },
      { position: 3, content: "3", color: "#22c55e" },
      { position: 4, content: "4", color: "#f59e0b" },
      { position: 5, content: "5", color: "#8b5cf6" },
      { position: 6, content: "6", color: "#06b6d4" },
    ],
    steps: [
      "On a standard die, opposite faces always sum to 7: (1,6), (2,5), (3,4).",
      "View (i) shows 1, 2, 3 together — none of these can be opposite to each other.",
      "View (ii) shows 1, 2, 5 — so 5 is not opposite to 1.",
      "From the standard rule, the face opposite 1 must be 6 (since 1 + 6 = 7).",
      "Verification: 6 never appears alongside 1 in any view, confirming they are opposite.",
    ],
    answer: "6 is opposite to 1. On a standard die, opposite faces sum to 7.",
  },
  {
    id: "cube-p2",
    type: "dice-opposite",
    question:
      "A die shows letters A through F on its six faces. In two views: (i) A, B, C are visible (A on top, B facing, C on right); (ii) A, E, D are visible (A on top, E facing, D on right). Which letter is opposite to A?",
    faces: [
      { position: 1, content: "A", color: "#ef4444" },
      { position: 2, content: "B", color: "#3b82f6" },
      { position: 3, content: "C", color: "#22c55e" },
      { position: 4, content: "D", color: "#f59e0b" },
      { position: 5, content: "E", color: "#8b5cf6" },
      { position: 6, content: "F", color: "#06b6d4" },
    ],
    steps: [
      "List all faces: A, B, C, D, E, F. Each face has exactly one opposite face.",
      "View (i): A is visible alongside B and C — so B and C are adjacent to A, not opposite.",
      "View (ii): A is visible alongside E and D — so E and D are also adjacent to A, not opposite.",
      "A is adjacent to B, C, D, and E. The only remaining face is F.",
      "Therefore F must be opposite to A.",
    ],
    answer:
      "F is opposite to A. Eliminate all faces seen alongside A — the remaining face is opposite.",
  },
  {
    id: "cube-p3",
    type: "dice-adjacent",
    question:
      "A die has faces colored Red, Blue, Green, Yellow, White, and Black. Red is opposite to Green, and Blue is opposite to Yellow. When Red is on top and Blue faces you, which color is on the right?",
    faces: [
      { position: 1, content: "Red", color: "#ef4444" },
      { position: 2, content: "Blue", color: "#3b82f6" },
      { position: 3, content: "Green", color: "#22c55e" },
      { position: 4, content: "Yellow", color: "#f59e0b" },
      { position: 5, content: "White", color: "#f5f5f5" },
      { position: 6, content: "Black", color: "#1f2937" },
    ],
    steps: [
      "Given opposites: Red-Green, Blue-Yellow. The remaining pair must be opposite: White-Black.",
      "Red is on top, so Green is on the bottom (opposite).",
      "Blue faces you, so Yellow is at the back (opposite).",
      "The remaining faces (White, Black) occupy left and right positions.",
      "Using the right-hand rule for standard die orientation: when Red is on top and Blue faces you, White is on the right and Black is on the left.",
    ],
    answer:
      "White is on the right side. With known opposites and two fixed positions, the remaining pair fills left and right.",
  },
  {
    id: "cube-p4",
    type: "dice-adjacent",
    question:
      "A die has numbers 1-6. When 1 is on top: in one view 2 is in front and 3 is on the right; in another view 2 is in front and 5 is on the right. Which face is adjacent to both 3 and 5?",
    faces: [
      { position: 1, content: "1", color: "#ef4444" },
      { position: 2, content: "2", color: "#3b82f6" },
      { position: 3, content: "3", color: "#22c55e" },
      { position: 4, content: "4", color: "#f59e0b" },
      { position: 5, content: "5", color: "#8b5cf6" },
      { position: 6, content: "6", color: "#06b6d4" },
    ],
    steps: [
      "View 1: top=1, front=2, right=3. So bottom=6, back=5, left=4 (opposite pairs: 1-6, 2-5, 3-4).",
      "Wait — View 2 says: top=1, front=2, right=5. If 2-5 were opposite they could not both be visible. Re-examine.",
      "From View 1: top=1, front=2, right=3 → bottom=6 (opposite 1). Left and back are 4 and 5.",
      "From View 2: top=1, front=2, right=5 → the die rotated so 5 moved from back/left to right. This means 3 moved away; 3 and 5 are on opposite faces (3-left and 5-right swap on rotation around the vertical axis).",
      "The face adjacent to both 3 and 5 (which are on the left-right axis) includes top=1, bottom=6, front=2, and back=4. Face 2 is adjacent to both 3 and 5.",
    ],
    answer:
      "Face 2 is adjacent to both 3 and 5. Since 3 and 5 are opposite each other, every other non-opposite face is adjacent to both.",
  },
  {
    id: "cube-p5",
    type: "cube-fold",
    question:
      "A cross-shaped net has 6 squares: center square marked 'X', top marked 'A', right marked 'B', bottom marked 'C', left marked 'D', and the square below C marked 'E'. When folded into a cube, which face is opposite to X?",
    faces: [
      { position: 1, content: "X", color: "#ef4444" },
      { position: 2, content: "A", color: "#3b82f6" },
      { position: 3, content: "B", color: "#22c55e" },
      { position: 4, content: "C", color: "#f59e0b" },
      { position: 5, content: "D", color: "#8b5cf6" },
      { position: 6, content: "E", color: "#06b6d4" },
    ],
    steps: [
      "The net is a cross: A on top of X, B to the right of X, C below X, D to the left of X, and E below C.",
      "Fold A up — A becomes the top face with X as the front face.",
      "Fold B to the right — B becomes the right side. Fold D to the left — D becomes the left side.",
      "Fold C down — C becomes the bottom face. Fold E further — E wraps around to become the back face.",
      "X is the front face and E is the back face. Therefore E is opposite to X.",
    ],
    answer:
      "E is opposite to X. In a cross-shaped net, the face two squares away (across the center) folds to the opposite side.",
  },
]
