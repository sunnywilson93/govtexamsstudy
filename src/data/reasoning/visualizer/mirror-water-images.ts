import type { MirrorImageProblem } from "@/types/reasoning"

export const mirrorImageProblems: MirrorImageProblem[] = [
  {
    id: "mirror-p1",
    type: "mirror",
    question:
      "Find the mirror image of the following 2x2 grid when a vertical mirror is placed to its right.",
    originalGrid: [
      ["A", "B"],
      ["C", "D"],
    ],
    transformedGrid: [
      ["B", "A"],
      ["D", "C"],
    ],
    steps: [
      "A vertical mirror reverses left and right within each row.",
      "Row 1: [A, B] becomes [B, A] — the leftmost element moves to the right and vice versa.",
      "Row 2: [C, D] becomes [D, C] — same left-right reversal.",
      "The number of rows stays the same; only column order is flipped.",
      "Final mirror image: [[B, A], [D, C]].",
    ],
    answer:
      "The mirror image is [[B, A], [D, C]]. Each row is reversed left-to-right.",
  },
  {
    id: "mirror-p2",
    type: "mirror",
    question:
      "A 3x3 grid contains digits 1-9. Find the mirror image when a vertical mirror is placed to its right.",
    originalGrid: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ],
    transformedGrid: [
      ["3", "2", "1"],
      ["6", "5", "4"],
      ["9", "8", "7"],
    ],
    steps: [
      "A vertical mirror reflects the grid horizontally — each row reverses its column order.",
      "Row 1: [1, 2, 3] becomes [3, 2, 1].",
      "Row 2: [4, 5, 6] becomes [6, 5, 4]. Notice the centre element stays in place.",
      "Row 3: [7, 8, 9] becomes [9, 8, 7].",
      "Final mirror image: [[3, 2, 1], [6, 5, 4], [9, 8, 7]].",
    ],
    answer:
      "The mirror image is [[3, 2, 1], [6, 5, 4], [9, 8, 7]]. In odd-width grids the centre column stays fixed.",
  },
  {
    id: "mirror-p3",
    type: "water",
    question:
      "Find the water image (reflection in a horizontal water surface) of the following 2x3 grid.",
    originalGrid: [
      ["P", "Q", "R"],
      ["S", "T", "U"],
    ],
    transformedGrid: [
      ["S", "T", "U"],
      ["P", "Q", "R"],
    ],
    steps: [
      "A water image reflects top to bottom — the row order reverses while each row keeps its column order.",
      "The original has Row 1 = [P, Q, R] on top and Row 2 = [S, T, U] on bottom.",
      "After water reflection, the bottom row moves to the top: [S, T, U].",
      "And the top row moves to the bottom: [P, Q, R].",
      "Final water image: [[S, T, U], [P, Q, R]].",
    ],
    answer:
      "The water image is [[S, T, U], [P, Q, R]]. Rows flip top-to-bottom; columns stay unchanged.",
  },
  {
    id: "mirror-p4",
    type: "water",
    question:
      "Find the water image of a 3x3 grid containing symbols.",
    originalGrid: [
      ["*", "+", "-"],
      ["@", "#", "$"],
      ["!", "^", "&"],
    ],
    transformedGrid: [
      ["!", "^", "&"],
      ["@", "#", "$"],
      ["*", "+", "-"],
    ],
    steps: [
      "A water reflection reverses the row order — the bottom row becomes the top row.",
      "Row 3 [!, ^, &] moves to the top position.",
      "Row 2 [@, #, $] stays in the middle (it is the center row in a 3-row grid).",
      "Row 1 [*, +, -] moves to the bottom position.",
      "Final water image: [[!, ^, &], [@, #, $], [*, +, -]].",
    ],
    answer:
      "The water image is [[!, ^, &], [@, #, $], [*, +, -]]. The middle row remains in place in odd-height grids.",
  },
  {
    id: "mirror-p5",
    type: "mirror",
    question:
      "A 3x3 grid shows arrows. First find its mirror image (vertical mirror), then find the water image of that result. What is the final grid?",
    originalGrid: [
      ["X", "Y", "Z"],
      ["M", "N", "O"],
      ["A", "B", "C"],
    ],
    transformedGrid: [
      ["C", "B", "A"],
      ["O", "N", "M"],
      ["Z", "Y", "X"],
    ],
    steps: [
      "Step 1 — Mirror image (vertical): reverse each row left-to-right.",
      "After mirror: [[Z, Y, X], [O, N, M], [C, B, A]].",
      "Step 2 — Water image of the mirror result: reverse the row order top-to-bottom.",
      "Row 3 [C, B, A] moves to top, Row 1 [Z, Y, X] moves to bottom, Row 2 stays.",
      "Final combined result: [[C, B, A], [O, N, M], [Z, Y, X]]. A combined mirror + water is equivalent to a 180-degree rotation.",
    ],
    answer:
      "The final grid is [[C, B, A], [O, N, M], [Z, Y, X]]. Mirror + water reflection equals a 180-degree rotation of the original.",
  },
]
