import type { CountingFigureProblem } from "@/types/reasoning"

export const countingFigureProblems: CountingFigureProblem[] = [
  {
    id: "count-p1",
    type: "triangles",
    question:
      "Count the total number of triangles in a triangle divided by a single line from the apex to the base midpoint.",
    svgPath: "M 50 10 L 10 90 L 90 90 Z M 50 10 L 50 90",
    highlights: [
      {
        id: "t1",
        path: "M 50 10 L 10 90 L 50 90 Z",
        label: "Left triangle (ABD)",
      },
      {
        id: "t2",
        path: "M 50 10 L 50 90 L 90 90 Z",
        label: "Right triangle (BDC)",
      },
      {
        id: "t3",
        path: "M 50 10 L 10 90 L 90 90 Z",
        label: "Full triangle (ABC)",
      },
    ],
    totalCount: 3,
    steps: [
      "The figure is a triangle ABC with a median line from apex B to midpoint D on base AC.",
      "Count smallest triangles: triangle ABD (left half) — that is 1.",
      "Triangle BDC (right half) — that is 2.",
      "Combine both halves: the full triangle ABC — that is 3.",
      "Total triangles = 2 smallest + 1 combined = 3.",
    ],
    answer: "There are 3 triangles in the figure.",
  },
  {
    id: "count-p2",
    type: "triangles",
    question:
      "Count the total number of triangles in a triangle with two lines drawn from the apex to the base, dividing it into three equal parts.",
    svgPath:
      "M 50 10 L 10 90 L 90 90 Z M 50 10 L 30 90 M 50 10 L 63.33 90",
    highlights: [
      {
        id: "t1",
        path: "M 50 10 L 10 90 L 30 90 Z",
        label: "Left small triangle (ABD)",
      },
      {
        id: "t2",
        path: "M 50 10 L 30 90 L 63.33 90 Z",
        label: "Middle small triangle (BDE)",
      },
      {
        id: "t3",
        path: "M 50 10 L 63.33 90 L 90 90 Z",
        label: "Right small triangle (BEC)",
      },
      {
        id: "t4",
        path: "M 50 10 L 10 90 L 63.33 90 Z",
        label: "Left + middle combined (ABE)",
      },
      {
        id: "t5",
        path: "M 50 10 L 30 90 L 90 90 Z",
        label: "Middle + right combined (BDC)",
      },
      {
        id: "t6",
        path: "M 50 10 L 10 90 L 90 90 Z",
        label: "Full triangle (ABC)",
      },
    ],
    totalCount: 6,
    steps: [
      "The figure is triangle ABC with two cevians from apex B to points D and E on base AC, creating 3 sections.",
      "Count smallest (single-part) triangles: ABD, BDE, BEC — that is 3.",
      "Count two-part combinations: ABE (left + middle), BDC (middle + right) — that is 2.",
      "Count three-part combination: ABC (full triangle) — that is 1.",
      "Total = 3 + 2 + 1 = 6 triangles.",
    ],
    answer: "There are 6 triangles in the figure.",
  },
  {
    id: "count-p3",
    type: "squares",
    question:
      "Count the total number of squares in a 2x2 grid (a square divided into 4 equal smaller squares).",
    svgPath:
      "M 10 10 L 90 10 L 90 90 L 10 90 Z M 50 10 L 50 90 M 10 50 L 90 50",
    highlights: [
      {
        id: "s1",
        path: "M 10 10 L 50 10 L 50 50 L 10 50 Z",
        label: "Top-left small square",
      },
      {
        id: "s2",
        path: "M 50 10 L 90 10 L 90 50 L 50 50 Z",
        label: "Top-right small square",
      },
      {
        id: "s3",
        path: "M 10 50 L 50 50 L 50 90 L 10 90 Z",
        label: "Bottom-left small square",
      },
      {
        id: "s4",
        path: "M 50 50 L 90 50 L 90 90 L 50 90 Z",
        label: "Bottom-right small square",
      },
      {
        id: "s5",
        path: "M 10 10 L 90 10 L 90 90 L 10 90 Z",
        label: "Full outer square",
      },
    ],
    totalCount: 5,
    steps: [
      "The figure is a 2x2 grid — a square divided into 4 smaller unit squares by one vertical and one horizontal line.",
      "Count 1x1 squares: top-left, top-right, bottom-left, bottom-right — that is 4.",
      "Count 2x2 squares: the full outer square — that is 1.",
      "Formula for an n x n grid: total squares = n(n+1)(2n+1)/6. For n=2: 2(3)(5)/6 = 5.",
      "Total = 4 + 1 = 5 squares.",
    ],
    answer: "There are 5 squares in a 2x2 grid.",
  },
  {
    id: "count-p4",
    type: "lines",
    question:
      "Count the number of straight lines in a figure made of a triangle with all three medians drawn.",
    svgPath:
      "M 50 10 L 10 90 L 90 90 Z M 50 10 L 50 90 M 10 90 L 70 50 M 90 90 L 30 50",
    highlights: [
      {
        id: "l1",
        path: "M 10 90 L 90 90",
        label: "Base line AC",
      },
      {
        id: "l2",
        path: "M 50 10 L 10 90",
        label: "Left side AB",
      },
      {
        id: "l3",
        path: "M 50 10 L 90 90",
        label: "Right side BC",
      },
      {
        id: "l4",
        path: "M 50 10 L 50 90",
        label: "Median from B to midpoint of AC",
      },
      {
        id: "l5",
        path: "M 10 90 L 70 50",
        label: "Median from A to midpoint of BC",
      },
      {
        id: "l6",
        path: "M 90 90 L 30 50",
        label: "Median from C to midpoint of AB",
      },
    ],
    totalCount: 6,
    steps: [
      "Identify the outer boundary lines: side AB, side BC, and base AC — that is 3 lines.",
      "Identify the medians: median from B to midpoint of AC — line 4.",
      "Median from A to midpoint of BC — line 5.",
      "Median from C to midpoint of AB — line 6.",
      "Total straight lines = 3 sides + 3 medians = 6.",
    ],
    answer: "There are 6 straight lines in the figure (3 sides + 3 medians).",
  },
  {
    id: "count-p5",
    type: "mixed",
    question:
      "A square has both diagonals drawn. Count the total number of triangles and squares in the figure.",
    svgPath:
      "M 10 10 L 90 10 L 90 90 L 10 90 Z M 10 10 L 90 90 M 90 10 L 10 90",
    highlights: [
      {
        id: "f1",
        path: "M 10 10 L 90 10 L 50 50 Z",
        label: "Top triangle",
      },
      {
        id: "f2",
        path: "M 90 10 L 90 90 L 50 50 Z",
        label: "Right triangle",
      },
      {
        id: "f3",
        path: "M 90 90 L 10 90 L 50 50 Z",
        label: "Bottom triangle",
      },
      {
        id: "f4",
        path: "M 10 90 L 10 10 L 50 50 Z",
        label: "Left triangle",
      },
      {
        id: "f5",
        path: "M 10 10 L 90 10 L 90 90 L 10 10 Z",
        label: "Upper-right large triangle",
      },
      {
        id: "f6",
        path: "M 90 10 L 90 90 L 10 90 Z",
        label: "Lower-right large triangle",
      },
      {
        id: "f7",
        path: "M 90 90 L 10 90 L 10 10 Z",
        label: "Lower-left large triangle",
      },
      {
        id: "f8",
        path: "M 10 90 L 10 10 L 90 10 Z",
        label: "Upper-left large triangle",
      },
      {
        id: "f9",
        path: "M 10 10 L 90 10 L 90 90 L 10 90 Z",
        label: "The full square",
      },
    ],
    totalCount: 9,
    steps: [
      "The two diagonals intersect at the center, dividing the square into 4 small right triangles.",
      "Count small triangles (single unit): top, right, bottom, left — 4 triangles.",
      "Count large triangles (two units each): top+right, right+bottom, bottom+left, left+top — 4 more triangles.",
      "Total triangles = 4 small + 4 large = 8.",
      "Count squares: only the full outer square qualifies (the 4 inner shapes are triangles, not squares) — 1 square. Grand total = 8 + 1 = 9 figures.",
    ],
    answer:
      "There are 9 figures: 8 triangles (4 small + 4 large) and 1 square.",
  },
]
