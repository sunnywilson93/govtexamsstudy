import type { ReasoningProblem } from "@/types/reasoning"

export const figureSeriesProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ─────────────────────────────────────────────

  {
    id: "fs-p1",
    topic: "figure-series",
    title: "SSC CGL 2023: Simple 90-Degree Rotation",
    question:
      "A series shows an arrow: Right, Up, Left, ? What is the next figure?",
    steps: [
      {
        id: 1,
        operation: "Identify the pattern",
        expression: "Right(0) to Up(90 CCW) to Left(180 CCW) to ?",
        result: "Arrow rotates 90 degrees counterclockwise each step",
        explanation:
          "Each step rotates the arrow 90 degrees counterclockwise.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "Left + 90 degrees CCW = Down",
        result: "Arrow pointing Down",
        explanation:
          "Continuing the 90 degree counterclockwise rotation.",
      },
      {
        id: 3,
        operation: "Verify with full cycle",
        expression:
          "Right to Up to Left to Down completes 360 degrees in 4 steps",
        result: "Pattern is consistent — 4-step rotation cycle",
        explanation:
          "The arrow visits all four cardinal directions in order.",
      },
    ],
    answer: "Arrow pointing Down.",
    difficulty: "easy",
  },
  {
    id: "fs-p2",
    topic: "figure-series",
    title: "SSC CGL 2022: Increasing Element Count",
    question:
      "Frame 1: 1 dot inside a circle. Frame 2: 2 dots. Frame 3: 3 dots. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Count elements per frame",
        expression: "1, 2, 3, ...",
        result: "Pattern: +1 dot per frame",
        explanation: "Each frame adds one dot.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "Frame 4 = 3 + 1 = 4 dots",
        result: "4 dots inside a circle",
        explanation: "Continue the +1 progression.",
      },
      {
        id: 3,
        operation: "Check the outer shape",
        expression: "The circle remains unchanged in all frames",
        result: "Only the dot count changes; the circle is constant",
        explanation:
          "The outer boundary stays the same while internal elements increase.",
      },
    ],
    answer: "4 dots inside a circle.",
    difficulty: "easy",
  },
  {
    id: "fs-p3",
    topic: "figure-series",
    title: "SSC CHSL 2023: Alternating Shading",
    question:
      "Frame 1: White circle. Frame 2: Black circle. Frame 3: White circle. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Identify shading pattern",
        expression: "White, Black, White, ...",
        result: "Alternating between white and black",
        explanation: "The shading toggles every frame.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression:
          "Frame 4 = Black (odd frames are white, even frames are black)",
        result: "Black circle",
        explanation: "Following the alternation, frame 4 is black.",
      },
    ],
    answer: "Black circle.",
    difficulty: "easy",
  },
  {
    id: "fs-p4",
    topic: "figure-series",
    title: "RRB NTPC: Shape Progression — Increasing Sides",
    question:
      "Frame 1: Triangle. Frame 2: Square. Frame 3: Pentagon. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Count sides",
        expression: "3 sides, 4 sides, 5 sides, ...",
        result: "Pattern: +1 side per frame",
        explanation: "Each frame adds one side to the polygon.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "Frame 4 = 5 + 1 = 6 sides",
        result: "Hexagon",
        explanation: "A 6-sided polygon is a hexagon.",
      },
    ],
    answer: "Hexagon (6-sided polygon).",
    difficulty: "easy",
  },
  {
    id: "fs-p5",
    topic: "figure-series",
    title: "SSC CGL 2023: Moving Dot — Clockwise Corners",
    question:
      "A square with a dot in the top-left corner. Frame 2: dot in top-right. Frame 3: dot in bottom-right. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track dot position",
        expression: "Top-left to Top-right to Bottom-right to ?",
        result: "Dot moves clockwise around corners",
        explanation:
          "The dot visits each corner in clockwise order.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression:
          "Next clockwise corner after bottom-right = bottom-left",
        result: "Dot in bottom-left corner",
        explanation: "Continuing clockwise: TL, TR, BR, BL.",
      },
    ],
    answer: "Square with dot in the bottom-left corner.",
    difficulty: "easy",
  },
  {
    id: "fs-p6",
    topic: "figure-series",
    title: "SSC MTS 2022: Clock Hand Rotation at 45 Degrees",
    question:
      "A circle with a line (like a clock hand) at 12 o'clock. Frame 2: line at 1:30 position. Frame 3: line at 3 o'clock position. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Calculate rotation angle",
        expression:
          "12 o'clock (0 degrees) to 1:30 (45 degrees CW) to 3 o'clock (90 degrees CW)",
        result: "Line rotates 45 degrees clockwise each step",
        explanation:
          "Each position is 45 degrees clockwise from the previous.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression:
          "3 o'clock (90 degrees) + 45 degrees = 4:30 position (135 degrees)",
        result: "Line at 4:30 position",
        explanation:
          "The line continues rotating 45 degrees clockwise.",
      },
      {
        id: 3,
        operation: "Verify",
        expression:
          "12:00, 1:30, 3:00, 4:30 — consistent 45-degree increments",
        result: "Pattern confirmed",
        explanation:
          "Each step moves the hand by exactly one-eighth of a full rotation.",
      },
    ],
    answer: "Circle with line at the 4:30 position.",
    difficulty: "easy",
  },
  {
    id: "fs-p7",
    topic: "figure-series",
    title: "IBPS Clerk: Element Doubling",
    question:
      "Frame 1: 2 small circles. Frame 2: 4 small circles. Frame 3: 8 small circles. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track the count",
        expression: "2, 4, 8, ...",
        result: "The number of circles doubles each frame",
        explanation: "Each frame has twice as many circles as the previous.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "Frame 4 = 8 x 2 = 16 circles",
        result: "16 small circles",
        explanation: "Continuing the doubling: 2, 4, 8, 16.",
      },
    ],
    answer: "16 small circles.",
    difficulty: "easy",
  },
  {
    id: "fs-p8",
    topic: "figure-series",
    title: "SSC CGL 2022: Layering — Nested Shapes",
    question:
      "Frame 1: A single dot. Frame 2: Dot inside a small circle. Frame 3: Dot inside a small circle inside a square. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Identify the layering pattern",
        expression:
          "Each frame adds an enclosing shape around the previous figure",
        result: "Nested layer pattern — one new outer shape per frame",
        explanation:
          "The figure gains one enclosing boundary each step.",
      },
      {
        id: 2,
        operation: "Determine next enclosing shape",
        expression:
          "Shapes used so far: circle, square. Following a progression of increasing sides or alternation, the next could be a triangle (as an outer boundary).",
        result: "Dot inside circle inside square inside triangle",
        explanation:
          "A triangle is added as the outermost enclosing shape.",
      },
    ],
    answer:
      "Dot inside small circle inside square inside triangle.",
    difficulty: "easy",
  },
  {
    id: "fs-p9",
    topic: "figure-series",
    title: "RRB NTPC 2021: Alternating Mirror — Letter R",
    question:
      "Frame 1: Letter 'R'. Frame 2: Mirror image of 'R' (vertically flipped). Frame 3: Original 'R'. Frame 4: Mirror image of 'R'. Frame 5: ?",
    steps: [
      {
        id: 1,
        operation: "Identify the pattern",
        expression: "R, Mirror-R, R, Mirror-R, ...",
        result: "Alternating between original and mirror image",
        explanation:
          "The figure flips horizontally every frame.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "Frame 5 is odd-numbered, so it is the original",
        result: "Original 'R'",
        explanation:
          "Odd frames show the original; even frames show the mirror.",
      },
    ],
    answer: "Original letter 'R'.",
    difficulty: "easy",
  },
  {
    id: "fs-p10",
    topic: "figure-series",
    title: "SSC CHSL 2022: Progressive Vertex Dots",
    question:
      "Frame 1: Triangle with a dot at the top vertex. Frame 2: Triangle with dots at the top and right vertices. Frame 3: Triangle with dots at all three vertices. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track dot additions",
        expression:
          "1 dot (top), 2 dots (top + right), 3 dots (all vertices)",
        result:
          "One dot is added at the next clockwise vertex each frame",
        explanation:
          "Dots are placed sequentially at vertices in clockwise order.",
      },
      {
        id: 2,
        operation: "Determine Frame 4",
        expression:
          "All vertices are filled at Frame 3. In Frame 4, the pattern may reset (remove all dots and start again at top) or the triangle itself may change.",
        result:
          "Most likely: dots reset and cycle restarts with 1 dot at the top vertex, or a new element is added",
        explanation:
          "In SSC CGL patterns, after filling all positions, the cycle typically restarts.",
      },
      {
        id: 3,
        operation: "Apply standard SSC convention",
        expression:
          "The most common pattern is cycle restart: Frame 4 = triangle with 1 dot at top (same as Frame 1)",
        result: "Triangle with 1 dot at top vertex (cycle restarts)",
        explanation: "The 3-step cycle repeats from the beginning.",
      },
    ],
    answer:
      "Triangle with 1 dot at the top vertex (cycle restarts).",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ──────────────────────────────────────────

  {
    id: "fs-p11",
    topic: "figure-series",
    title: "SSC CGL 2023: Dual Pattern — Rotation + Count",
    question:
      "Frame 1: Triangle pointing up with 1 line inside. Frame 2: Triangle pointing right with 2 lines. Frame 3: Triangle pointing down with 3 lines. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track rotation",
        expression:
          "Up(0 degrees) to Right(90 CW) to Down(180 CW) to ?",
        result: "Triangle rotates 90 degrees clockwise each frame",
        explanation: "Rotation pattern: 90 degrees CW per step.",
      },
      {
        id: 2,
        operation: "Track line count",
        expression: "1, 2, 3, ...",
        result: "+1 line per frame",
        explanation: "Lines increase by 1 each frame.",
      },
      {
        id: 3,
        operation: "Combine patterns",
        expression:
          "Frame 4: Triangle pointing left (270 degrees CW) with 4 lines",
        result: "Triangle pointing left with 4 lines inside",
        explanation: "Both patterns applied independently.",
      },
    ],
    answer: "Triangle pointing left with 4 lines inside.",
    difficulty: "medium",
  },
  {
    id: "fs-p12",
    topic: "figure-series",
    title: "SSC CGL 2022: Shading Cycle — Four States",
    question:
      "Frame 1: Empty circle. Frame 2: Half-shaded circle (left half). Frame 3: Fully shaded circle. Frame 4: Half-shaded (right half). Frame 5: ?",
    steps: [
      {
        id: 1,
        operation: "Identify the cycle",
        expression: "Empty, Left-half, Full, Right-half, ?",
        result: "4-step shading cycle",
        explanation:
          "The shading progresses through 4 states before repeating.",
      },
      {
        id: 2,
        operation: "Apply cycle",
        expression: "After Right-half, cycle repeats from the start",
        result: "Empty circle",
        explanation:
          "Frame 5 returns to the start of the cycle.",
      },
    ],
    answer: "Empty circle (cycle restarts).",
    difficulty: "medium",
  },
  {
    id: "fs-p13",
    topic: "figure-series",
    title: "SSC CHSL 2023: Alternating Inner-Outer Shapes",
    question:
      "Frame 1: Square inside circle. Frame 2: Circle inside square. Frame 3: Square inside circle. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Identify alternation",
        expression:
          "Sq-in-Cir, Cir-in-Sq, Sq-in-Cir, ...",
        result: "Inner and outer shapes swap every frame",
        explanation:
          "The two shapes alternate between inner and outer positions.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "Frame 4 = Circle inside Square",
        result: "Circle inside square",
        explanation: "Even frames show circle inside square.",
      },
    ],
    answer: "Circle inside square.",
    difficulty: "medium",
  },
  {
    id: "fs-p14",
    topic: "figure-series",
    title: "SSC CGL 2022: Diagonal Bounce Movement",
    question:
      "A 3x3 grid. Frame 1: dot at (1,1). Frame 2: dot at (2,2). Frame 3: dot at (3,3). Frame 4: dot at (2,2). Frame 5: ?",
    steps: [
      {
        id: 1,
        operation: "Track dot position",
        expression: "(1,1) to (2,2) to (3,3) to (2,2) to ?",
        result:
          "Dot moves diagonally down-right, then bounces back up-left",
        explanation:
          "The dot reaches the corner and reverses direction.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression: "After (2,2) going back: next = (1,1)",
        result: "Dot at (1,1)",
        explanation:
          "The dot bounces between (1,1) and (3,3) along the diagonal.",
      },
    ],
    answer: "Dot at position (1,1) — top-left corner.",
    difficulty: "medium",
  },
  {
    id: "fs-p15",
    topic: "figure-series",
    title: "SSC CGL 2023: Line Addition — Asterisk Formation",
    question:
      "Frame 1: One horizontal line. Frame 2: One horizontal + one vertical line (cross). Frame 3: Cross + one diagonal line (6 endpoints). Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Count lines",
        expression: "1 line, 2 lines, 3 lines, ...",
        result: "+1 line per frame",
        explanation: "Each frame adds one line through the center.",
      },
      {
        id: 2,
        operation: "Determine line orientation",
        expression:
          "Horizontal (0 degrees), Vertical (90 degrees), Diagonal at 45 degrees, next: Diagonal at 135 degrees",
        result:
          "Lines are added to evenly divide the space around the center",
        explanation:
          "The pattern fills in angles between existing lines.",
      },
      {
        id: 3,
        operation: "Frame 4",
        expression:
          "Add the other diagonal (135 degrees): 4 lines through center, 8 endpoints",
        result: "Asterisk/star pattern with 4 lines",
        explanation:
          "Four lines through the center at 0, 45, 90, and 135 degrees.",
      },
    ],
    answer:
      "Four lines through the center forming an asterisk/star pattern.",
    difficulty: "medium",
  },
  {
    id: "fs-p16",
    topic: "figure-series",
    title: "SSC CGL 2023: Row-Based Rotation — 90 Degrees CW per Cell",
    question:
      "In a 3x3 matrix of figures, each row shows: Frame 1 is a base figure, Frame 2 is that figure rotated 90 degrees CW, and Frame 3 is rotated another 90 degrees CW (180 degrees total). Row 3 shows: an L-shape, the same L-shape rotated 90 degrees CW, and a question mark. What replaces the question mark?",
    steps: [
      {
        id: 1,
        operation: "Verify the rule with Row 1 and Row 2",
        expression:
          "Row 1: base, base+90CW, base+180CW. Row 2: same pattern confirmed.",
        result: "Pattern: each cell in a row is 90 degrees CW rotation of the previous",
        explanation:
          "The matrix rule is consistent rotation within each row.",
      },
      {
        id: 2,
        operation: "Apply to Row 3",
        expression:
          "L-shape rotated 180 degrees CW from the original (or equivalently, rotated 90 degrees CW from the second cell)",
        result: "L-shape rotated 180 degrees from original orientation",
        explanation:
          "The third cell is the second cell rotated 90 degrees CW.",
      },
      {
        id: 3,
        operation: "Describe the result",
        expression:
          "If the original L-shape has the stem pointing right and the foot pointing down, at 180 degrees the stem points left and the foot points up.",
        result: "Inverted L-shape (rotated 180 degrees from original)",
        explanation:
          "The shape appears upside-down relative to the first cell.",
      },
    ],
    answer:
      "The L-shape rotated 180 degrees from the original (stem pointing left, foot pointing up).",
    difficulty: "medium",
  },
  {
    id: "fs-p17",
    topic: "figure-series",
    title: "SSC CGL 2022: Common Elements in Rows",
    question:
      "In a 3x3 matrix, the rule is: the third figure in each row contains only the line segments common to the first two figures. Row 3 shows: Figure 1 has a square with both diagonals, Figure 2 has a square with a horizontal and vertical center line. What is Figure 3?",
    steps: [
      {
        id: 1,
        operation: "List elements of Figure 1",
        expression:
          "Square outline (4 sides) + diagonal from top-left to bottom-right + diagonal from top-right to bottom-left",
        result: "6 line segments total in Figure 1",
        explanation: "The square's sides plus both diagonals.",
      },
      {
        id: 2,
        operation: "List elements of Figure 2",
        expression:
          "Square outline (4 sides) + horizontal center line + vertical center line",
        result: "6 line segments total in Figure 2",
        explanation: "The square's sides plus a cross at the center.",
      },
      {
        id: 3,
        operation: "Find common elements",
        expression:
          "Common to both: the square outline (4 sides). The diagonals (Fig 1) and center cross (Fig 2) are different.",
        result: "Only the square outline is common",
        explanation:
          "The third figure shows just the plain square without any internal lines.",
      },
    ],
    answer: "A plain square (only the outline, no internal lines).",
    difficulty: "medium",
  },
  {
    id: "fs-p18",
    topic: "figure-series",
    title: "RRB NTPC 2022: Additive Pattern — Perpendicular Lines",
    question:
      "In a 3x3 matrix, the rule is: the second figure is obtained from the first by adding two mutually perpendicular line segments at the center, and the third figure is obtained from the first by adding four small circles outside the main figure. Row 3 shows: a hexagon, a hexagon with a cross inside, and a question mark. What replaces it?",
    steps: [
      {
        id: 1,
        operation: "Verify the rule",
        expression:
          "Row 1: base shape, base + center cross, base + 4 outer circles. Row 2: same confirmed.",
        result: "Pattern verified across rows",
        explanation:
          "Second cell adds a cross; third cell adds 4 circles to the base.",
      },
      {
        id: 2,
        operation: "Apply to Row 3",
        expression:
          "Base = hexagon. Third cell = hexagon + 4 small circles placed outside (at top, bottom, left, right).",
        result: "Hexagon with 4 small circles outside",
        explanation:
          "The circles are added to the base shape (hexagon), not the cross version.",
      },
    ],
    answer:
      "A hexagon with 4 small circles placed outside at top, bottom, left, and right.",
    difficulty: "medium",
  },
  {
    id: "fs-p19",
    topic: "figure-series",
    title: "SSC CGL 2023: Column-Based Inversion Rule",
    question:
      "In a 3x3 matrix, the rule by column is: the middle figure is obtained by removing the upper part of the top figure, and the bottom figure is obtained by vertically inverting the upper part of the top figure. Column 3 shows: a figure with a semicircle on top of a rectangle (top cell), a plain rectangle (middle cell), and a question mark (bottom cell). What replaces it?",
    steps: [
      {
        id: 1,
        operation: "Identify the upper part",
        expression:
          "Top cell = semicircle on top of rectangle. Upper part = the semicircle.",
        result: "The semicircle is the removable upper portion",
        explanation:
          "The top figure has two parts: semicircle (top) and rectangle (bottom).",
      },
      {
        id: 2,
        operation: "Verify middle cell",
        expression:
          "Middle cell = top figure minus upper part = rectangle alone. This matches the rule (remove upper part).",
        result: "Rule confirmed: middle cell is the rectangle",
        explanation: "Removing the semicircle leaves the rectangle.",
      },
      {
        id: 3,
        operation: "Apply to bottom cell",
        expression:
          "Bottom cell = vertically inverted upper part = semicircle flipped vertically (opening faces up instead of down, or the curved part points downward).",
        result: "An inverted semicircle (curved side pointing down)",
        explanation:
          "The upper portion (semicircle) is flipped vertically.",
      },
    ],
    answer:
      "An inverted semicircle (curved side pointing downward).",
    difficulty: "medium",
  },
  {
    id: "fs-p20",
    topic: "figure-series",
    title: "IBPS PO: Dual Track — Shape Rotation + Dot Movement",
    question:
      "Frame 1: Square with a dot at the top-left, small triangle attached outside at top. Frame 2: Square with dot at top-right, triangle attached outside at right. Frame 3: Square with dot at bottom-right, triangle attached outside at bottom. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track dot position",
        expression:
          "Top-left, Top-right, Bottom-right: moving clockwise around corners",
        result: "Dot moves clockwise: next = bottom-left",
        explanation:
          "The dot visits each corner in clockwise order.",
      },
      {
        id: 2,
        operation: "Track triangle position",
        expression:
          "Top, Right, Bottom: moving clockwise around the square's sides",
        result: "Triangle moves clockwise: next = left side",
        explanation:
          "The external triangle also moves clockwise around the square.",
      },
      {
        id: 3,
        operation: "Combine",
        expression:
          "Frame 4: Square with dot at bottom-left, small triangle attached outside at left side",
        result: "Both elements at their clockwise-next positions",
        explanation:
          "Dot and triangle move in sync, both clockwise.",
      },
    ],
    answer:
      "Square with dot at bottom-left corner and small triangle attached outside at the left side.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────

  {
    id: "fs-p21",
    topic: "figure-series",
    title: "SSC CGL 2023: Triple Pattern Tracking",
    question:
      "Frame 1: Large circle with small square at top, 1 dot. Frame 2: Large circle with small square at right, 2 dots. Frame 3: Large circle with small square at bottom, 4 dots. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track outer shape",
        expression: "Circle in all frames",
        result: "Outer shape constant (circle)",
        explanation: "No change in the outer shape.",
      },
      {
        id: 2,
        operation: "Track small square position",
        expression: "Top to Right to Bottom to ?",
        result: "Clockwise movement: next = Left",
        explanation:
          "The square moves clockwise around the circle.",
      },
      {
        id: 3,
        operation: "Track dot count",
        expression: "1, 2, 4, ... (doubling)",
        result: "Next = 8 dots",
        explanation:
          "The dot count doubles each frame: 1, 2, 4, 8.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Large circle, small square at left, 8 dots",
        result: "Circle with square at left and 8 dots",
        explanation: "All three patterns applied.",
      },
    ],
    answer:
      "Large circle with small square at left position and 8 dots inside.",
    difficulty: "hard",
  },
  {
    id: "fs-p22",
    topic: "figure-series",
    title: "SSC CGL 2022: Odd-Even Frame Split",
    question:
      "Frame 1: Upward triangle. Frame 2: Circle with cross. Frame 3: Rightward triangle. Frame 4: Circle with cross. Frame 5: Downward triangle. Frame 6: ?",
    steps: [
      {
        id: 1,
        operation: "Separate odd and even frames",
        expression:
          "Odd: Up-tri, Right-tri, Down-tri. Even: Circle+cross, Circle+cross, ?",
        result: "Two independent patterns",
        explanation:
          "Odd and even frames follow different rules.",
      },
      {
        id: 2,
        operation: "Even frame pattern",
        expression:
          "Frame 2: Circle+cross. Frame 4: Circle+cross. Frame 6: ?",
        result: "Even frames are constant: Circle with cross",
        explanation: "No change in even frames.",
      },
      {
        id: 3,
        operation: "Verify odd frame pattern",
        expression: "Up(0 degrees) to Right(90 degrees) to Down(180 degrees)",
        result: "Triangle rotates 90 degrees CW on odd frames",
        explanation:
          "Confirmed rotation pattern for odd frames only.",
      },
    ],
    answer: "Circle with cross (even frame pattern).",
    difficulty: "hard",
  },
  {
    id: "fs-p23",
    topic: "figure-series",
    title: "SSC CGL 2023: Complex Rotation + Shading",
    question:
      "Frame 1: Square with top-left quarter shaded, arrow up. Frame 2: Square with top-right quarter shaded, arrow right. Frame 3: Square with bottom-right quarter shaded, arrow down. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track shaded quarter",
        expression: "TL to TR to BR to ?",
        result: "Shading moves clockwise: next = BL (bottom-left)",
        explanation: "The shaded quarter rotates clockwise.",
      },
      {
        id: 2,
        operation: "Track arrow direction",
        expression: "Up to Right to Down to ?",
        result: "Arrow rotates 90 degrees CW: next = Left",
        explanation:
          "Arrow and shading both rotate clockwise in sync.",
      },
      {
        id: 3,
        operation: "Combine",
        expression:
          "Square with bottom-left quarter shaded, arrow pointing left",
        result: "BL shaded + left arrow",
        explanation:
          "Both elements follow the same 90 degrees CW rotation.",
      },
    ],
    answer:
      "Square with bottom-left quarter shaded and arrow pointing left.",
    difficulty: "hard",
  },
  {
    id: "fs-p24",
    topic: "figure-series",
    title: "SSC CGL 2022: Subtraction Pattern — Star Points",
    question:
      "Frame 1: Star with 8 points. Frame 2: Star with 7 points. Frame 3: Star with 5 points. Frame 4: Star with 2 points. Frame 5: ?",
    steps: [
      {
        id: 1,
        operation: "Track point count",
        expression: "8, 7, 5, 2, ...",
        result: "Differences: -1, -2, -3, ...",
        explanation:
          "The number of points removed increases by 1 each step.",
      },
      {
        id: 2,
        operation: "Apply pattern",
        expression:
          "Next difference = -4. Points = 2 - 4 = -2. Since negative points are impossible, the figure becomes a plain circle (0 points).",
        result:
          "A circle (star with 0 points) — all points have been removed",
        explanation:
          "When the point count goes to zero or below, the star reduces to a circle.",
      },
    ],
    answer: "A circle (star with 0 points) — all points removed.",
    difficulty: "hard",
  },
  {
    id: "fs-p25",
    topic: "figure-series",
    title: "SSC CGL 2023: Mirror + Rotation Combo — Letter F",
    question:
      "Frame 1: Letter 'F'. Frame 2: Mirror image of 'F'. Frame 3: 'F' rotated 180 degrees. Frame 4: Mirror of 180-degree-rotated 'F'. Frame 5: ?",
    steps: [
      {
        id: 1,
        operation: "Identify the transformation cycle",
        expression:
          "F, Mirror(F), Rotate180(F), Mirror(Rotate180(F)), ?",
        result:
          "4-step cycle: Original, Mirror, 180-degree rotation, Mirror of 180-degree rotation",
        explanation:
          "The pattern applies mirror and 180-degree rotation in a cycle.",
      },
      {
        id: 2,
        operation: "Determine Frame 5",
        expression:
          "After 4 transformations, the cycle resets to the original",
        result: "Frame 5 = Original 'F'",
        explanation:
          "Mirror(Mirror(Rotate180(Rotate180(F)))) = F. The cycle has period 4.",
      },
      {
        id: 3,
        operation: "Verify",
        expression:
          "F, flip, 180 degrees, flip+180, back to F. Period = 4 confirmed.",
        result: "Frame 5 = 'F' (same as Frame 1)",
        explanation: "The cycle repeats every 4 frames.",
      },
    ],
    answer: "Original letter 'F' (cycle restarts).",
    difficulty: "hard",
  },
  {
    id: "fs-p26",
    topic: "figure-series",
    title: "SSC CGL 2023: Quadruple Pattern — Shape, Shading, Dot, Rotation",
    question:
      "Frame 1: Circle, empty, 1 dot, arrow at 12 o'clock. Frame 2: Triangle, half-shaded, 2 dots, arrow at 3 o'clock. Frame 3: Square, fully shaded, 3 dots, arrow at 6 o'clock. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track shape progression",
        expression: "Circle (0 corners), Triangle (3), Square (4)",
        result: "Pentagon (5 corners) is next",
        explanation:
          "Shapes progress by increasing vertex count. Circle can be treated as 0 corners.",
      },
      {
        id: 2,
        operation: "Track shading",
        expression: "Empty, Half-shaded, Fully shaded",
        result:
          "Shading increases: next could cycle back to Empty or continue differently. Most likely: cycle to Empty.",
        explanation: "3-step shading cycle: Empty, Half, Full, Empty, ...",
      },
      {
        id: 3,
        operation: "Track dot count and arrow",
        expression:
          "Dots: 1, 2, 3 (next = 4). Arrow: 12:00, 3:00, 6:00 (rotating 90 CW, next = 9:00).",
        result: "4 dots, arrow at 9 o'clock",
        explanation:
          "+1 dot per frame and 90 degree CW arrow rotation.",
      },
      {
        id: 4,
        operation: "Combine all patterns",
        expression:
          "Pentagon, empty (cycle restart), 4 dots, arrow at 9 o'clock",
        result: "Pentagon, empty, 4 dots, arrow at 9:00",
        explanation: "All four patterns applied independently.",
      },
    ],
    answer:
      "Empty pentagon with 4 dots and arrow at 9 o'clock position.",
    difficulty: "hard",
  },
  {
    id: "fs-p27",
    topic: "figure-series",
    title: "SSC CGL 2022: Interleaved Series — Two Independent Sequences",
    question:
      "Frame 1: Square with 1 diagonal. Frame 2: Circle with horizontal line. Frame 3: Square with 2 diagonals (X pattern). Frame 4: Circle with vertical line added (cross). Frame 5: Square with 2 diagonals + horizontal center line. Frame 6: ?",
    steps: [
      {
        id: 1,
        operation: "Separate odd and even frames",
        expression:
          "Odd frames (1,3,5): Square series — 1 diagonal, 2 diagonals, 2 diagonals + horizontal. Even frames (2,4,6): Circle series — horizontal line, cross.",
        result: "Two independent interleaved sequences",
        explanation:
          "Odd frames build up the square; even frames build up the circle.",
      },
      {
        id: 2,
        operation: "Track even frame (circle) pattern",
        expression:
          "Frame 2: 1 line (horizontal). Frame 4: 2 lines (cross). Frame 6: ?",
        result:
          "Each even frame adds one line. Frame 6 = 3 lines (cross + one diagonal = 6 endpoints)",
        explanation:
          "The circle gains one internal line per even step.",
      },
      {
        id: 3,
        operation: "Determine Frame 6",
        expression:
          "Circle with cross (horizontal + vertical) plus one diagonal line",
        result: "Circle with 3 internal lines",
        explanation:
          "The circle's internal lines follow the same progression as the square's.",
      },
    ],
    answer:
      "Circle with 3 internal lines (cross plus one diagonal).",
    difficulty: "hard",
  },
  {
    id: "fs-p28",
    topic: "figure-series",
    title: "UPSC CSAT: Decreasing Boundary + Increasing Fill",
    question:
      "Frame 1: Large hexagon, empty inside. Frame 2: Medium pentagon, small dot inside. Frame 3: Small square, larger filled circle inside. Frame 4: ?",
    steps: [
      {
        id: 1,
        operation: "Track outer shape",
        expression:
          "Hexagon (6 sides) to Pentagon (5 sides) to Square (4 sides) to ?",
        result: "Sides decrease by 1: next = Triangle (3 sides)",
        explanation: "The outer shape loses one side per frame.",
      },
      {
        id: 2,
        operation: "Track outer size",
        expression: "Large, Medium, Small, ...",
        result: "Size decreases: next = Very small / Tiny",
        explanation:
          "The outer shape gets smaller each frame.",
      },
      {
        id: 3,
        operation: "Track inner fill",
        expression:
          "Empty, Small dot, Larger filled circle — the inner element grows relative to the outer shape",
        result:
          "Inner element continues growing; it may nearly fill the outer shape",
        explanation:
          "As the outer shrinks and inner grows, they converge in size.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Tiny triangle with a large filled circle inside (nearly filling the triangle)",
        result: "Small triangle with large filled circle",
        explanation:
          "Both trends continue: smaller outer shape, larger inner fill.",
      },
    ],
    answer:
      "A small triangle with a large filled circle inside (nearly filling the triangle).",
    difficulty: "hard",
  },
  {
    id: "fs-p29",
    topic: "figure-series",
    title: "SSC CGL 2023: Alternating Transformation — Rotate and Shade",
    question:
      "Frame 1: Right-pointing arrow, unshaded. Frame 2: Right-pointing arrow, shaded (same orientation, but filled). Frame 3: Down-pointing arrow, unshaded (rotated 90 CW from Frame 1). Frame 4: Down-pointing arrow, shaded. Frame 5: Left-pointing arrow, unshaded. Frame 6: ?",
    steps: [
      {
        id: 1,
        operation: "Identify the pattern",
        expression:
          "Each orientation appears twice: once unshaded, once shaded. Then the arrow rotates 90 CW and repeats.",
        result: "Alternation: unshaded then shaded, then rotate 90 CW and repeat",
        explanation:
          "Odd frames are unshaded, even frames shade the same orientation.",
      },
      {
        id: 2,
        operation: "Apply to Frame 6",
        expression:
          "Frame 5 = Left-pointing, unshaded. Frame 6 = Left-pointing, shaded.",
        result: "Left-pointing arrow, shaded",
        explanation:
          "Even frame = shaded version of the preceding odd frame.",
      },
    ],
    answer: "Left-pointing arrow, shaded (filled).",
    difficulty: "hard",
  },
  {
    id: "fs-p30",
    topic: "figure-series",
    title: "SSC CGL 2023: Matrix Rule — Superposition of Row Elements",
    question:
      "In a 3x3 matrix, the rule is: the third figure in each row is the superposition (overlay) of the first two figures, keeping only non-overlapping parts. Row 3: Figure 1 is a circle with a vertical diameter line. Figure 2 is a circle with a horizontal diameter line. What is Figure 3?",
    steps: [
      {
        id: 1,
        operation: "List elements of Figure 1",
        expression: "Circle outline + vertical diameter line",
        result: "Two elements: circle and vertical line",
        explanation: "The circle and vertical line are the components.",
      },
      {
        id: 2,
        operation: "List elements of Figure 2",
        expression: "Circle outline + horizontal diameter line",
        result: "Two elements: circle and horizontal line",
        explanation:
          "The circle and horizontal line are the components.",
      },
      {
        id: 3,
        operation: "Apply superposition (non-overlapping parts only)",
        expression:
          "Overlapping: the circle outline (present in both). Non-overlapping: vertical line (only in Fig 1) + horizontal line (only in Fig 2).",
        result: "A cross (+ shape) without the circle outline",
        explanation:
          "The circle cancels out since it appears in both. Only the unique lines remain.",
      },
      {
        id: 4,
        operation: "Verify with other rows",
        expression:
          "Row 1 and Row 2 should follow the same XOR-style superposition rule",
        result: "Pattern confirmed: common elements cancel, unique elements remain",
        explanation:
          "This is an XOR (exclusive-or) superposition pattern.",
      },
    ],
    answer:
      "A cross (+ shape) formed by the vertical and horizontal lines only (no circle outline).",
    difficulty: "hard",
  },
]
