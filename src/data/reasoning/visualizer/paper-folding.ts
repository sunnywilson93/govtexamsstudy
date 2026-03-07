import type { PaperFoldProblem } from "@/types/reasoning"

export const paperFoldProblems: PaperFoldProblem[] = [
  {
    id: "paper-p1",
    question:
      "A square sheet of paper is folded in half from right to left. A hole is punched in the center of the folded paper. How many holes appear when the paper is unfolded?",
    folds: [
      {
        direction: "left",
        description:
          "Fold the right half onto the left half — the paper is now two layers thick.",
      },
    ],
    punchPosition: { x: 0.25, y: 0.5 },
    unfoldedResult:
      "Two holes appear: one at (0.25, 0.5) and its mirror at (0.75, 0.5), symmetrically placed about the fold line at x = 0.5.",
    steps: [
      "Start with a square sheet. The fold line is the vertical center at x = 0.5.",
      "Fold right half onto left: the paper is now two layers. The visible area spans x = 0 to x = 0.5.",
      "Punch a hole at the center of the folded paper: position (0.25, 0.5). This pierces both layers.",
      "Unfold: the hole on the top layer stays at (0.25, 0.5). The bottom layer hole mirrors to (0.75, 0.5).",
      "Result: 2 holes, placed symmetrically about the vertical center line.",
    ],
    answer:
      "2 holes appear at (0.25, 0.5) and (0.75, 0.5), symmetric about the vertical fold.",
  },
  {
    id: "paper-p2",
    question:
      "A square sheet is folded in half from top to bottom. A hole is punched near the top-right corner of the folded paper. How many holes appear when unfolded?",
    folds: [
      {
        direction: "bottom",
        description:
          "Fold the top half down onto the bottom half — the fold line is horizontal at y = 0.5.",
      },
    ],
    punchPosition: { x: 0.8, y: 0.2 },
    unfoldedResult:
      "Two holes: one at (0.8, 0.2) on the bottom half and its mirror at (0.8, 0.8) on the top half, symmetric about the horizontal fold at y = 0.5.",
    steps: [
      "Start with a square sheet. The fold line is horizontal at y = 0.5.",
      "Fold top onto bottom: visible area is now the bottom half (y = 0 to y = 0.5), two layers thick.",
      "Punch at (0.8, 0.2) in the folded paper — this is near the top-right of the visible folded area.",
      "The hole pierces both layers. The front layer hole is at (0.8, 0.2). The back layer corresponds to the original top half.",
      "Unfold: the mirror of (0.8, 0.2) about y = 0.5 is (0.8, 0.8). Result: 2 holes.",
    ],
    answer:
      "2 holes at (0.8, 0.2) and (0.8, 0.8), symmetric about the horizontal fold line.",
  },
  {
    id: "paper-p3",
    question:
      "A square sheet is folded from right to left, then from top to bottom. A hole is punched in the center of the folded paper. How many holes appear when fully unfolded?",
    folds: [
      {
        direction: "left",
        description:
          "First fold: right half onto left — vertical fold at x = 0.5. Paper is now 2 layers.",
      },
      {
        direction: "bottom",
        description:
          "Second fold: top half down — horizontal fold at y = 0.5. Paper is now 4 layers.",
      },
    ],
    punchPosition: { x: 0.25, y: 0.25 },
    unfoldedResult:
      "Four holes appear in a symmetric pattern: (0.25, 0.25), (0.75, 0.25), (0.25, 0.75), and (0.75, 0.75) — one in each quadrant.",
    steps: [
      "Start with a square sheet. Fold 1 (right to left): fold line at x = 0.5, paper is 2 layers.",
      "Fold 2 (top to bottom): fold line at y = 0.5, paper is now 4 layers (a quarter of the original).",
      "Punch at the center of the folded paper: (0.25, 0.25). This pierces all 4 layers.",
      "Unfold step 1 (reverse fold 2): the punch mirrors about y = 0.5 giving (0.25, 0.25) and (0.25, 0.75).",
      "Unfold step 2 (reverse fold 1): each hole mirrors about x = 0.5 giving 4 holes total: (0.25, 0.25), (0.75, 0.25), (0.25, 0.75), (0.75, 0.75).",
    ],
    answer:
      "4 holes, one in each quadrant, at (0.25, 0.25), (0.75, 0.25), (0.25, 0.75), and (0.75, 0.75).",
  },
  {
    id: "paper-p4",
    question:
      "A square sheet is folded from left to right, then from bottom to top. A hole is punched near the top-left of the folded paper. How many holes appear when unfolded?",
    folds: [
      {
        direction: "right",
        description:
          "First fold: left half onto right — vertical fold at x = 0.5. Paper is 2 layers.",
      },
      {
        direction: "top",
        description:
          "Second fold: bottom half up onto top — horizontal fold at y = 0.5. Paper is 4 layers.",
      },
    ],
    punchPosition: { x: 0.6, y: 0.9 },
    unfoldedResult:
      "Four holes at (0.6, 0.9), (0.4, 0.9), (0.6, 0.1), and (0.4, 0.1).",
    steps: [
      "Fold 1 (left to right): fold line at x = 0.5. The visible area is x = 0.5 to x = 1.0.",
      "Fold 2 (bottom to top): fold line at y = 0.5. The visible area is y = 0.5 to y = 1.0. Paper is 4 layers.",
      "Punch at (0.6, 0.9) — near top-left of the visible folded quarter.",
      "Unfold fold 2 first: mirror (0.6, 0.9) about y = 0.5 gives (0.6, 0.1). Now 2 holes: (0.6, 0.9) and (0.6, 0.1).",
      "Unfold fold 1: mirror each about x = 0.5. (0.6, 0.9) mirrors to (0.4, 0.9); (0.6, 0.1) mirrors to (0.4, 0.1). Total: 4 holes.",
    ],
    answer:
      "4 holes at (0.6, 0.9), (0.4, 0.9), (0.6, 0.1), and (0.4, 0.1) — symmetrically placed in all four quadrants.",
  },
  {
    id: "paper-p5",
    question:
      "A square sheet is folded along the diagonal from the bottom-left corner to the top-right corner. A hole is punched at the midpoint of the folded triangle. How many holes appear when unfolded?",
    folds: [
      {
        direction: "diagonal",
        description:
          "Fold along the diagonal from bottom-left to top-right — the top-left triangle folds onto the bottom-right triangle.",
      },
    ],
    punchPosition: { x: 0.5, y: 0.25 },
    unfoldedResult:
      "Two holes appear: one at (0.5, 0.25) and its mirror at (0.75, 0.5), reflected across the diagonal y = 1 - x.",
    steps: [
      "The fold line is the diagonal from (0, 1) to (1, 0), which is the line y = 1 - x.",
      "Folding: the upper-left triangle lands on the lower-right triangle. Paper is 2 layers in the lower-right.",
      "Punch at (0.5, 0.25) in the folded triangle. This point is in the lower-right region.",
      "To find the mirror across y = 1 - x: reflect (0.5, 0.25). The reflected point is (1 - 0.25, 1 - 0.5) = (0.75, 0.5).",
      "Unfolding reveals 2 holes: (0.5, 0.25) and (0.75, 0.5), symmetric about the diagonal.",
    ],
    answer:
      "2 holes at (0.5, 0.25) and (0.75, 0.5), reflected across the diagonal fold line y = 1 - x.",
  },
]
