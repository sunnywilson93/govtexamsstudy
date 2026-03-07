import type { ReasoningProblem } from "@/types/reasoning"

export const embeddedFiguresProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ─────────────────────────────────────────────

  {
    id: "ef-p1",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Triangle in a Star",
    question:
      "Target figure: An equilateral triangle. Complex figure: A six-pointed Star of David. Is the target embedded in the complex figure?",
    steps: [
      {
        id: 1,
        operation: "Analyze the Star of David",
        expression:
          "A six-pointed star is formed by overlapping two equilateral triangles",
        result: "Two equilateral triangles are present",
        explanation:
          "One triangle points up, the other points down.",
      },
      {
        id: 2,
        operation: "Match target",
        expression:
          "Target = equilateral triangle. The upward-pointing triangle in the star matches exactly.",
        result: "Yes, the target IS embedded",
        explanation:
          "The equilateral triangle is one of the two component triangles of the star.",
      },
      {
        id: 3,
        operation: "Count total matches",
        expression:
          "Both the upward and downward triangles match the target shape",
        result: "2 equilateral triangles are embedded",
        explanation:
          "The target can be found in two orientations within the star.",
      },
    ],
    answer:
      "Yes. Both the upward and downward equilateral triangles are embedded in the Star of David.",
    difficulty: "easy",
  },
  {
    id: "ef-p2",
    topic: "embedded-figures",
    title: "SSC CGL 2022: Square in a 3x3 Grid",
    question:
      "Target figure: A square. Complex figure: A 3x3 grid of squares (like a tic-tac-toe board). How many times is the target embedded?",
    steps: [
      {
        id: 1,
        operation: "Count 1x1 squares",
        expression:
          "Each cell of the 3x3 grid is a 1x1 square",
        result: "9 squares of size 1x1",
        explanation: "Each of the 9 cells is a square.",
      },
      {
        id: 2,
        operation: "Count 2x2 squares",
        expression:
          "2x2 blocks: top-left corners can be at (1,1), (1,2), (2,1), (2,2)",
        result: "4 squares of size 2x2",
        explanation: "Slide a 2x2 window across the grid.",
      },
      {
        id: 3,
        operation: "Count 3x3 squares",
        expression: "The entire grid itself is a 3x3 square",
        result: "1 square of size 3x3",
        explanation: "The outer boundary forms one large square.",
      },
      {
        id: 4,
        operation: "Total",
        expression: "9 + 4 + 1 = 14",
        result: "14 squares total",
        explanation:
          "The target square is embedded 14 times in the grid.",
      },
    ],
    answer: "14 squares are embedded in the 3x3 grid.",
    difficulty: "easy",
  },
  {
    id: "ef-p3",
    topic: "embedded-figures",
    title: "SSC CHSL 2023: Rectangle in an L-Shape",
    question:
      "Target figure: A rectangle. Complex figure: An L-shaped figure made from two rectangles joined at a corner. Is a single rectangle embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the L-shape",
        expression:
          "An L-shape is composed of two rectangular parts",
        result: "Each arm of the L is a rectangle",
        explanation:
          "The vertical arm and horizontal arm are each rectangles.",
      },
      {
        id: 2,
        operation: "Check target",
        expression:
          "Target = rectangle. Each arm is a rectangle. Also, sub-portions of each arm are rectangles.",
        result: "Yes, rectangles are embedded",
        explanation:
          "Multiple rectangles can be found within the L-shape.",
      },
    ],
    answer:
      "Yes. Each arm of the L-shape contains the target rectangle.",
    difficulty: "easy",
  },
  {
    id: "ef-p4",
    topic: "embedded-figures",
    title: "SSC MTS 2022: Circle in Overlapping Circles",
    question:
      "Target figure: A single circle. Complex figure: Three overlapping circles (Venn diagram style). How many times is the target embedded?",
    steps: [
      {
        id: 1,
        operation: "Count individual circles",
        expression: "Three circles are drawn",
        result: "3 circles",
        explanation:
          "Each of the three original circles is the target figure.",
      },
      {
        id: 2,
        operation: "Check for additional circles",
        expression:
          "The overlapping regions create lens shapes, not circles",
        result: "No additional circles from overlaps",
        explanation:
          "Intersections of circles produce arcs, not complete circles.",
      },
    ],
    answer: "3 times (one for each circle in the diagram).",
    difficulty: "easy",
  },
  {
    id: "ef-p5",
    topic: "embedded-figures",
    title: "RRB NTPC 2022: Right Angle in a Divided Rectangle",
    question:
      "Target figure: A right-angle shape (L-bracket). Complex figure: A rectangle divided into 4 equal parts by one horizontal and one vertical line. How many right-angle shapes can be found?",
    steps: [
      {
        id: 1,
        operation: "Identify L-shapes from center cross",
        expression:
          "The cross divider inside the rectangle creates 4 corners at the center",
        result: "Each corner of the cross forms a right-angle bracket",
        explanation:
          "Where the horizontal and vertical dividers meet, 4 right-angle shapes are formed.",
      },
      {
        id: 2,
        operation: "Count center orientations",
        expression:
          "4 right angles at the center cross (each pointing to a different corner of the rectangle)",
        result: "4 right-angle shapes from the center",
        explanation:
          "Top-left, top-right, bottom-left, bottom-right orientations.",
      },
      {
        id: 3,
        operation: "Check rectangle corners",
        expression:
          "Each corner of the rectangle + partial divider also forms an L-shape",
        result: "4 additional right-angle shapes from corners",
        explanation:
          "The rectangle's corners combined with the divider lines create more L-shapes.",
      },
    ],
    answer:
      "At least 8 right-angle shapes (4 from center cross + 4 from corners).",
    difficulty: "easy",
  },
  {
    id: "ef-p6",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Triangle in a Square with Diagonal",
    question:
      "Target figure: A right triangle. Complex figure: A square with one diagonal drawn from top-left to bottom-right. Is the target embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the divided square",
        expression:
          "A diagonal divides the square into two triangles",
        result: "Two right triangles are formed",
        explanation:
          "Each triangle has one right angle at a corner of the square.",
      },
      {
        id: 2,
        operation: "Verify right angle",
        expression:
          "The corner of the square provides the 90-degree angle. The diagonal is the hypotenuse.",
        result: "Both triangles are right triangles",
        explanation:
          "Upper-left and lower-right corners give the right angles for the two triangles.",
      },
      {
        id: 3,
        operation: "Check if they are also isosceles",
        expression:
          "The two legs of each triangle are sides of the square (equal length)",
        result:
          "Both triangles are isosceles right triangles (45-45-90)",
        explanation:
          "Equal legs from the square make them isosceles.",
      },
    ],
    answer:
      "Yes. Two isosceles right triangles are embedded in the square.",
    difficulty: "easy",
  },
  {
    id: "ef-p7",
    topic: "embedded-figures",
    title: "SSC CGL 2022: Semicircle in a Full Circle",
    question:
      "Target figure: A semicircle. Complex figure: A circle divided by a horizontal diameter line. How many semicircles are embedded?",
    steps: [
      {
        id: 1,
        operation: "Identify the two halves",
        expression:
          "The horizontal line creates an upper semicircle and a lower semicircle",
        result: "2 semicircles are directly visible",
        explanation:
          "The diameter line divides the circle into exactly two semicircles.",
      },
      {
        id: 2,
        operation: "Check for other semicircles",
        expression:
          "No other straight lines exist to create additional semicircular regions",
        result: "Only 2 semicircles total",
        explanation:
          "Without additional diameter lines, only 2 semicircles exist.",
      },
    ],
    answer:
      "2 semicircles (upper and lower halves of the circle).",
    difficulty: "easy",
  },
  {
    id: "ef-p8",
    topic: "embedded-figures",
    title: "IBPS Clerk: Diamond in a Square",
    question:
      "Target figure: A diamond (square rotated 45 degrees). Complex figure: A square with lines connecting the midpoints of opposite sides (forming a diamond inside). Is the target embedded?",
    steps: [
      {
        id: 1,
        operation: "Identify the inner shape",
        expression:
          "Lines connecting midpoints of all four sides of a square form a smaller square rotated 45 degrees",
        result: "A diamond (rotated square) is formed inside",
        explanation:
          "The midpoint connections create a square oriented at 45 degrees to the original.",
      },
      {
        id: 2,
        operation: "Verify it matches the target",
        expression:
          "Target = diamond (square rotated 45 degrees). The inner shape is exactly this.",
        result: "Yes, the target is embedded",
        explanation:
          "The inner diamond matches the target figure exactly.",
      },
      {
        id: 3,
        operation: "Note the outer square",
        expression:
          "The original square (at 0 degrees) is also present",
        result: "Two quadrilaterals total: outer square + inner diamond",
        explanation:
          "Both the original square and the rotated inner square are present.",
      },
    ],
    answer:
      "Yes. The diamond (rotated square) formed by midpoint connections is embedded inside the outer square.",
    difficulty: "easy",
  },
  {
    id: "ef-p9",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Arrow in a Complex Design",
    question:
      "Target figure: A simple rightward-pointing arrow (triangle tip + rectangular shaft). Complex figure: A compass rose design with arrows pointing in 8 directions (N, NE, E, SE, S, SW, W, NW). In which option can the target be found?",
    steps: [
      {
        id: 1,
        operation: "Identify the eastward arrow",
        expression:
          "The compass rose has 8 arrows. The one pointing East (right) matches the target orientation.",
        result: "The eastward arrow matches the target",
        explanation:
          "A rightward-pointing arrow is embedded at the East position.",
      },
      {
        id: 2,
        operation: "Check for rotation matches",
        expression:
          "If rotation is allowed, all 8 arrows are valid matches. If orientation must be exact, only the East arrow matches.",
        result:
          "1 exact match (East), or 8 matches with rotation allowed",
        explanation:
          "In SSC CGL, the standard is that rotation IS allowed unless stated otherwise.",
      },
    ],
    answer:
      "Yes. The eastward arrow in the compass rose matches the target. With rotation, all 8 arrows match.",
    difficulty: "easy",
  },
  {
    id: "ef-p10",
    topic: "embedded-figures",
    title: "RRB NTPC: Cross in a Window Pattern",
    question:
      "Target figure: A plus sign (cross). Complex figure: A square divided into 4 equal quadrants by a horizontal and vertical line through the center, with a circle inscribed in the square. Is the cross embedded?",
    steps: [
      {
        id: 1,
        operation: "Identify the cross lines",
        expression:
          "The horizontal and vertical dividing lines form a plus/cross shape",
        result: "A cross IS present in the figure",
        explanation:
          "The two perpendicular dividers create the cross shape.",
      },
      {
        id: 2,
        operation: "Verify match with target",
        expression:
          "Target = plus sign (cross). The horizontal + vertical lines match exactly.",
        result: "Yes, the cross is embedded",
        explanation:
          "The dividing lines form the exact target shape.",
      },
      {
        id: 3,
        operation: "Note that the circle does not interfere",
        expression:
          "The circle overlaps the cross lines but does not break their continuity",
        result: "Cross remains intact as a continuous figure within the design",
        explanation:
          "Embedded figures are traced as continuous lines regardless of overlapping shapes.",
      },
    ],
    answer:
      "Yes. The horizontal and vertical dividers form the cross (plus sign) target.",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ──────────────────────────────────────────

  {
    id: "ef-p11",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Rotated Triangle in a Diagonal Square",
    question:
      "Target: A right triangle with the right angle at bottom-left. Complex figure: A square divided by both diagonals. Is the target embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the complex figure",
        expression:
          "Square + both diagonals creates 4 right triangles",
        result:
          "Four right triangles, each with the right angle at a corner of the square",
        explanation:
          "The diagonals divide the square into 4 equal right triangles.",
      },
      {
        id: 2,
        operation: "Check orientation",
        expression:
          "Target has right angle at bottom-left. The bottom-left triangle in the divided square has its right angle at bottom-left.",
        result: "Yes, exact match at bottom-left",
        explanation:
          "The bottom-left triangle matches the target's orientation perfectly.",
      },
      {
        id: 3,
        operation: "Check for other matches",
        expression:
          "The other 3 triangles have right angles at different corners (top-left, top-right, bottom-right)",
        result:
          "Only 1 exact orientation match, but all 4 are right triangles",
        explanation:
          "If rotation is allowed, all 4 match. If orientation must be exact, only 1 matches.",
      },
    ],
    answer:
      "Yes. The bottom-left triangle matches exactly. With rotation allowed, all 4 triangles match.",
    difficulty: "medium",
  },
  {
    id: "ef-p12",
    topic: "embedded-figures",
    title: "SSC CGL 2022: Parallelogram in a Divided Hexagon",
    question:
      "Target: A parallelogram. Complex figure: A regular hexagon divided into 6 equilateral triangles by lines from center to vertices. Are any parallelograms embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the divided hexagon",
        expression:
          "6 equilateral triangles radiating from the center",
        result:
          "Adjacent pairs of triangles form rhombuses (special parallelograms)",
        explanation:
          "Any two adjacent triangles sharing a side from the center form a rhombus.",
      },
      {
        id: 2,
        operation: "Count parallelograms from adjacent pairs",
        expression: "6 pairs of adjacent triangles",
        result: "6 rhombus-shaped parallelograms",
        explanation:
          "Each pair of adjacent triangles forms one rhombus.",
      },
      {
        id: 3,
        operation: "Check for larger parallelograms",
        expression:
          "Two opposite triangles across the center can combine with center triangles to form larger parallelograms",
        result:
          "Additional parallelograms exist from non-adjacent combinations",
        explanation:
          "Combining groups of triangles yields more parallelogram shapes.",
      },
    ],
    answer:
      "Yes. At least 6 parallelograms (rhombuses from adjacent triangle pairs) are embedded.",
    difficulty: "medium",
  },
  {
    id: "ef-p13",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Pentagon in a Pentagram",
    question:
      "Target: A regular pentagon. Complex figure: A five-pointed star (pentagram). Is the pentagon embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the pentagram",
        expression:
          "A five-pointed star has a regular pentagon at its center where the lines intersect",
        result: "A regular pentagon IS formed at the center",
        explanation:
          "The five intersection points of the star's lines form a regular pentagon.",
      },
      {
        id: 2,
        operation: "Verify pentagon properties",
        expression:
          "The inner pentagon has all sides equal and all angles equal (108 degrees each)",
        result:
          "Confirmed: regular pentagon embedded in the center",
        explanation:
          "This is a well-known geometric property of the pentagram.",
      },
      {
        id: 3,
        operation: "Count triangles as bonus",
        expression:
          "Each point of the star creates an isosceles triangle. Plus the 5 triangles between the pentagon and the points.",
        result: "5 pointed triangles + 5 inner triangles = 10 triangles also embedded",
        explanation:
          "The pentagram contains multiple embedded shapes beyond just the pentagon.",
      },
    ],
    answer:
      "Yes. A regular pentagon is embedded at the center of the five-pointed star.",
    difficulty: "medium",
  },
  {
    id: "ef-p14",
    topic: "embedded-figures",
    title: "SSC CHSL 2022: Proportional Rectangle Match",
    question:
      "Target: A 1:2 rectangle (width:height = 1:2, tall and narrow). Complex figure: Two equal squares placed side by side horizontally (width:height = 2:1). Is the target embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the complex figure",
        expression:
          "Two squares side by side. If each square is 1x1, the combined shape is 2x1 (width:height).",
        result: "The combined shape is a 2:1 rectangle (wide)",
        explanation:
          "Two unit squares create a rectangle twice as wide as it is tall.",
      },
      {
        id: 2,
        operation: "Check target proportions",
        expression:
          "Target = 1:2 (width:height, tall). Complex figure = 2:1 (width:height, wide). These are inverse proportions.",
        result: "The proportions are inverted",
        explanation:
          "The target is tall and narrow, but the figure is wide and short.",
      },
      {
        id: 3,
        operation: "Check with rotation",
        expression:
          "Rotating the complex figure 90 degrees gives a 1:2 rectangle (tall and narrow)",
        result:
          "With rotation, the entire complex figure matches the target",
        explanation:
          "If rotation is allowed, the 2:1 rectangle becomes 1:2.",
      },
    ],
    answer:
      "Yes, if rotation is allowed. The entire 2x1 figure rotated 90 degrees gives the 1:2 target.",
    difficulty: "medium",
  },
  {
    id: "ef-p15",
    topic: "embedded-figures",
    title: "SSC CGL 2022: Trapezium in a Cut Triangle",
    question:
      "Target: A trapezium (one pair of parallel sides). Complex figure: A triangle with a line drawn parallel to the base, cutting through the two other sides. Is a trapezium embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the cut triangle",
        expression:
          "A line parallel to the base divides the triangle into a smaller triangle (top) and a trapezium (bottom)",
        result: "The bottom portion is a trapezium",
        explanation:
          "It has the base of the triangle and the parallel cut-line as two parallel sides.",
      },
      {
        id: 2,
        operation: "Verify trapezium properties",
        expression:
          "Top side = cut-line (shorter, parallel to base). Bottom side = original base (longer). Two non-parallel sides from the original triangle.",
        result:
          "Confirmed: one pair of parallel sides = trapezium",
        explanation:
          "The bottom portion satisfies the definition of a trapezium.",
      },
    ],
    answer:
      "Yes. The region below the parallel line is a trapezium.",
    difficulty: "medium",
  },
  {
    id: "ef-p16",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Rhombus in Overlapping Squares",
    question:
      "Target: A rhombus. Complex figure: Two equal squares overlapping such that one is rotated 45 degrees relative to the other, and their centers coincide. Is a rhombus embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the overlap region",
        expression:
          "When a square and a 45-degree-rotated square of equal size overlap at their centers, the overlapping region is a regular octagon.",
        result: "The central overlap is an octagon, not a rhombus",
        explanation:
          "Eight sides are formed by the intersecting edges.",
      },
      {
        id: 2,
        operation: "Check the rotated square itself",
        expression:
          "A square rotated 45 degrees IS a rhombus (all four sides equal, opposite angles equal). Every square is a special case of a rhombus.",
        result: "The rotated square itself is a rhombus",
        explanation:
          "A square at 45 degrees looks like a diamond — which is a rhombus.",
      },
      {
        id: 3,
        operation: "Check for other rhombuses",
        expression:
          "The intersection lines create small triangular regions. Pairs of adjacent triangles (one from each square) can form rhombuses.",
        result: "Additional small rhombuses may be found at the edges",
        explanation:
          "Depending on the exact overlap, small diamond shapes appear between the octagon and the outer edges.",
      },
    ],
    answer:
      "Yes. The rotated square itself is a rhombus. Additionally, the overlap geometry creates smaller rhombus shapes.",
    difficulty: "medium",
  },
  {
    id: "ef-p17",
    topic: "embedded-figures",
    title: "SSC CGL 2022: T-Shape in a Grid",
    question:
      "Target: A T-shape (horizontal bar on top of a vertical bar). Complex figure: A 4x4 grid of unit squares. Can the T-shape be found?",
    steps: [
      {
        id: 1,
        operation: "Define the T-shape in grid terms",
        expression:
          "A T-shape occupies a horizontal row of 3 cells plus 1 cell below the center cell of that row",
        result: "The T covers 4 cells in a specific arrangement",
        explanation:
          "3 cells in a row + 1 cell below the middle = T-shape.",
      },
      {
        id: 2,
        operation: "Count positions in the 4x4 grid",
        expression:
          "The top bar of 3 cells can start at columns 1-2 (2 positions) in any of 3 rows (rows 1-3, since the stem extends below). The stem must fit below the middle cell.",
        result: "Multiple T-shapes can be formed",
        explanation:
          "The 4x4 grid has room for T-shapes in various positions.",
      },
      {
        id: 3,
        operation: "Count all rotations",
        expression:
          "T can point down (standard), up (inverted-T), left, or right. Each rotation has multiple placements in the grid.",
        result:
          "Many T-shapes are embedded when all orientations are considered",
        explanation:
          "With 4 orientations and multiple grid positions, numerous T-shapes exist.",
      },
    ],
    answer:
      "Yes. Multiple T-shapes can be traced in a 4x4 grid in all four orientations.",
    difficulty: "medium",
  },
  {
    id: "ef-p18",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Kite in a Divided Rectangle",
    question:
      "Target: A kite (quadrilateral with two pairs of adjacent equal sides). Complex figure: A rectangle with both diagonals drawn plus lines from the midpoint of each shorter side to the opposite corners. Is a kite embedded?",
    steps: [
      {
        id: 1,
        operation: "Identify the lines in the figure",
        expression:
          "Rectangle ABCD with diagonals AC and BD intersecting at center O. Additional lines from midpoints of short sides to opposite corners create more intersection points.",
        result: "Multiple intersection points create various quadrilateral regions",
        explanation:
          "The additional lines divide the rectangle into many smaller regions.",
      },
      {
        id: 2,
        operation: "Look for kite-shaped regions",
        expression:
          "A kite requires two pairs of adjacent equal sides. Near the center, the diagonal intersection creates symmetric regions. Triangles on either side of a diagonal can form a kite shape.",
        result: "Kite shapes are formed near the short sides of the rectangle",
        explanation:
          "The symmetry of the construction creates kite-shaped quadrilaterals.",
      },
      {
        id: 3,
        operation: "Verify kite properties",
        expression:
          "At each short-side midpoint, the two lines going to opposite corners create a V-shape. Combined with the rectangle edge segments, this forms a kite with two pairs of adjacent equal sides.",
        result: "Confirmed: kite shapes are embedded",
        explanation:
          "The construction naturally produces kites at the midpoint vertices.",
      },
    ],
    answer:
      "Yes. Kite shapes are embedded at the midpoints of the shorter sides of the rectangle.",
    difficulty: "medium",
  },
  {
    id: "ef-p19",
    topic: "embedded-figures",
    title: "RRB NTPC 2023: Letter Z in a Rectangle with Diagonals",
    question:
      "Target: The letter 'Z'. Complex figure: A rectangle with both diagonals drawn. Can the 'Z' shape be found?",
    steps: [
      {
        id: 1,
        operation: "Analyze the complex figure",
        expression:
          "Rectangle with both diagonals: creates an X pattern inside. Available lines: top side, bottom side, left side, right side, diagonal 1 (TL to BR), diagonal 2 (TR to BL).",
        result: "6 line segments available",
        explanation:
          "The rectangle's 4 sides plus 2 diagonals.",
      },
      {
        id: 2,
        operation: "Trace 'Z' shape",
        expression:
          "'Z' = horizontal top line + diagonal (top-right to bottom-left) + horizontal bottom line. Check: Top side (horizontal) exists. Diagonal TR to BL exists. Bottom side (horizontal) exists.",
        result: "Yes! Top side + TR-BL diagonal + bottom side = 'Z'",
        explanation:
          "The three required line segments all exist in the figure.",
      },
      {
        id: 3,
        operation: "Verify shape continuity",
        expression:
          "Top side connects to diagonal at the top-right corner. Diagonal connects to bottom side at the bottom-left corner. All connections are at vertices.",
        result: "Confirmed: 'Z' is continuously traced",
        explanation:
          "The path forms a continuous Z from top-left to bottom-right.",
      },
    ],
    answer:
      "Yes. The top side, the TR-to-BL diagonal, and the bottom side form a 'Z' shape.",
    difficulty: "medium",
  },
  {
    id: "ef-p20",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Hexagon in a Triangular Tessellation",
    question:
      "Target: A regular hexagon. Complex figure: A tessellation of equilateral triangles (triangular grid, at least 4 rows). Is a regular hexagon embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze the tessellation",
        expression:
          "A grid of equilateral triangles. Six triangles sharing a common vertex form a regular hexagon.",
        result: "Regular hexagons ARE embedded",
        explanation:
          "Any point in the grid where 6 triangles meet defines a regular hexagon.",
      },
      {
        id: 2,
        operation: "Verify hexagon properties",
        expression:
          "Take any interior vertex. The 6 surrounding triangles form a hexagon with all sides equal and all angles = 120 degrees.",
        result: "Confirmed: regular hexagon embedded",
        explanation:
          "This is a fundamental property of triangular tessellations.",
      },
      {
        id: 3,
        operation: "Count in a finite grid",
        expression:
          "In a grid with N interior vertices, each interior vertex defines one hexagon",
        result:
          "Multiple hexagons embedded (one per interior vertex)",
        explanation:
          "The number of embedded hexagons equals the number of interior vertices.",
      },
    ],
    answer:
      "Yes. Six equilateral triangles around any interior vertex form a regular hexagon.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────

  {
    id: "ef-p21",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Complex Overlapping Squares at 45 Degrees",
    question:
      "Target: A small square. Complex figure: Two large squares overlapping at a 45-degree angle (one rotated 45 degrees relative to the other, centers coincide). How many squares can be identified?",
    steps: [
      {
        id: 1,
        operation: "Count original squares",
        expression:
          "2 large squares (one straight, one rotated 45 degrees)",
        result: "2 squares immediately visible",
        explanation:
          "The two original squares are clearly embedded.",
      },
      {
        id: 2,
        operation: "Check overlapping region",
        expression:
          "The overlap of a square and a 45-degree-rotated square of equal size creates a regular octagon at the center, not a square",
        result: "The overlap region is NOT a square",
        explanation:
          "The intersection of two equal squares at 45 degrees produces an octagonal region.",
      },
      {
        id: 3,
        operation: "Check for smaller squares",
        expression:
          "The intersection lines create various triangular and quadrilateral regions. Some intersection points may define smaller squares depending on exact geometry.",
        result:
          "A small square can form at the very center with specific overlap amounts",
        explanation:
          "With certain overlap amounts, a small square may form at the center of the octagon.",
      },
      {
        id: 4,
        operation: "Final count",
        expression:
          "Minimum 2 squares (the originals). Additional small squares depend on the exact configuration.",
        result: "At least 2 squares, possibly more",
        explanation:
          "The two original squares are always present. Additional squares depend on exact overlap.",
      },
    ],
    answer:
      "At least 2 squares (the two original overlapping squares). Additional small squares may exist depending on overlap configuration.",
    difficulty: "hard",
  },
  {
    id: "ef-p22",
    topic: "embedded-figures",
    title: "SSC CGL 2022: Isosceles Right Triangle Verification",
    question:
      "Target: An isosceles right triangle. Complex figure: A square with one diagonal drawn. Are the triangles formed by the diagonal isosceles right triangles?",
    steps: [
      {
        id: 1,
        operation: "Analyze the triangle formed",
        expression:
          "Square with diagonal: creates two triangles. Each has the diagonal as hypotenuse and two sides of the square as legs.",
        result: "Each triangle has two equal legs (sides of the square)",
        explanation:
          "The two legs are both sides of the same square, so they are equal.",
      },
      {
        id: 2,
        operation: "Check for right angle",
        expression:
          "The angle between two sides of a square = 90 degrees",
        result:
          "Each triangle has a 90-degree angle between its equal legs",
        explanation:
          "The corner of the square provides the right angle.",
      },
      {
        id: 3,
        operation: "Verify isosceles right triangle",
        expression:
          "Two equal sides + right angle between them = isosceles right triangle (45-45-90)",
        result: "Confirmed: the target IS embedded",
        explanation:
          "Both triangles formed by the diagonal are isosceles right triangles.",
      },
    ],
    answer:
      "Yes. Both triangles formed by the diagonal are isosceles right triangles (45-45-90).",
    difficulty: "hard",
  },
  {
    id: "ef-p23",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Counting Triangles — Triangle with Medians",
    question:
      "Complex figure: A triangle with all three medians drawn (connecting each vertex to the midpoint of the opposite side). How many triangles are embedded in total?",
    steps: [
      {
        id: 1,
        operation: "Count smallest triangles",
        expression:
          "The three medians divide the original triangle into 6 small triangles of equal area around the centroid",
        result: "6 small triangles",
        explanation:
          "The medians create 6 equal-area triangles around the centroid.",
      },
      {
        id: 2,
        operation: "Count medium triangles (2 small triangles combined)",
        expression:
          "Adjacent pairs of small triangles sharing a median segment. Along each side of the original triangle, two adjacent small triangles form a medium triangle.",
        result: "6 medium triangles",
        explanation:
          "Two adjacent small triangles along each of the 3 sides give 2 per side = 6.",
      },
      {
        id: 3,
        operation: "Count the original triangle",
        expression:
          "The entire figure boundary = 1 triangle",
        result: "1 original triangle",
        explanation:
          "The outermost boundary is the original triangle.",
      },
      {
        id: 4,
        operation: "Total count",
        expression:
          "6 (smallest) + 6 (medium, 2-part combinations) + 1 (original) = 13. Note: some sources count differently depending on valid triangle formation from non-adjacent small triangles.",
        result: "The standard answer is 13 triangles",
        explanation:
          "6 basic + 6 two-part combinations + 1 whole = 13 total embedded triangles.",
      },
    ],
    answer:
      "13 triangles are embedded in a triangle with all three medians drawn.",
    difficulty: "hard",
  },
  {
    id: "ef-p24",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Rotated Embedded Figure — Orientation Check",
    question:
      "Target: A small right-angled triangle with the hypotenuse as the longest side on the left. Complex figure options: (A) A circle with internal lines forming a pinwheel of 6 triangles. (B) A hexagon with one diagonal. (C) An octagon with alternating shaded triangles. (D) A square with one diagonal and a horizontal center line. In which option is the target embedded (rotation allowed)?",
    steps: [
      {
        id: 1,
        operation: "Analyze option (D)",
        expression:
          "Square + one diagonal (say TL to BR) + horizontal center line. This creates: 2 right triangles from the diagonal, and the horizontal line further divides one of them.",
        result: "Option (D) contains right triangles of various sizes",
        explanation:
          "The diagonal creates right triangles, and the center line creates smaller ones.",
      },
      {
        id: 2,
        operation: "Check if any match the target",
        expression:
          "The upper region above the horizontal line has a right triangle with the right angle at the top-left corner. With rotation, the hypotenuse can be oriented to the left.",
        result: "Yes, option (D) contains the target (rotation allowed)",
        explanation:
          "A right triangle with the correct proportions exists and can be rotated to match.",
      },
      {
        id: 3,
        operation: "Verify other options",
        expression:
          "(A) Pinwheel triangles are acute, not right-angled. (B) One diagonal of a hexagon does not create a right triangle. (C) Shaded triangles in an octagon are isosceles, not right-angled.",
        result: "Options A, B, C do not contain the target",
        explanation:
          "Only option D has right triangles formed by the diagonal of a square.",
      },
    ],
    answer:
      "Option (D). The square's diagonal and center line create right triangles that match the target when rotated.",
    difficulty: "hard",
  },
  {
    id: "ef-p25",
    topic: "embedded-figures",
    title: "SSC CGL 2022: Counting Squares in a 4x4 Grid",
    question:
      "Target: A square of any size. Complex figure: A 4x4 grid of unit squares. How many squares are embedded in total?",
    steps: [
      {
        id: 1,
        operation: "Count 1x1 squares",
        expression: "4 x 4 = 16 unit squares",
        result: "16 squares of size 1x1",
        explanation: "Each cell is a 1x1 square.",
      },
      {
        id: 2,
        operation: "Count 2x2 squares",
        expression:
          "A 2x2 square can start at rows 1-3 and columns 1-3: 3 x 3 = 9",
        result: "9 squares of size 2x2",
        explanation:
          "Slide a 2x2 window across the grid: 3 positions per axis.",
      },
      {
        id: 3,
        operation: "Count 3x3 squares",
        expression:
          "A 3x3 square can start at rows 1-2 and columns 1-2: 2 x 2 = 4",
        result: "4 squares of size 3x3",
        explanation:
          "2 positions per axis for a 3x3 window.",
      },
      {
        id: 4,
        operation: "Count 4x4 square",
        expression: "The entire grid = 1 square",
        result: "1 square of size 4x4",
        explanation: "The outer boundary is one large square.",
      },
      {
        id: 5,
        operation: "Total",
        expression: "16 + 9 + 4 + 1 = 30",
        result: "30 squares total",
        explanation:
          "Formula: sum of k^2 for k=1 to n, where n=4. This gives 1+4+9+16 = 30.",
      },
    ],
    answer: "30 squares are embedded in a 4x4 grid.",
    difficulty: "hard",
  },
  {
    id: "ef-p26",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Circle Embedded in Tangram-Style Figure",
    question:
      "Target: A circle. Complex figure: A square divided into 7 tangram pieces (2 large triangles, 1 medium triangle, 2 small triangles, 1 square, 1 parallelogram). Is a circle embedded?",
    steps: [
      {
        id: 1,
        operation: "Analyze all pieces",
        expression:
          "Tangram has only straight-edged pieces: triangles, a square, and a parallelogram. No curved edges exist.",
        result: "No circular boundary exists in the tangram",
        explanation:
          "All tangram pieces are polygons with straight sides.",
      },
      {
        id: 2,
        operation: "Check for implied circles",
        expression:
          "Can any combination of pieces trace a circular arc? No — all edges are straight lines.",
        result: "No circle can be formed from straight-edged pieces",
        explanation:
          "A circle requires a curved boundary, which straight lines cannot produce.",
      },
      {
        id: 3,
        operation: "Conclude",
        expression:
          "The target circle is NOT embedded in the tangram figure",
        result: "No, the circle is not embedded",
        explanation:
          "Tangram pieces cannot form or contain any curved shapes.",
      },
    ],
    answer:
      "No. A circle cannot be embedded in a tangram figure because all pieces have straight edges.",
    difficulty: "hard",
  },
  {
    id: "ef-p27",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Star of David — Total Triangles Count",
    question:
      "Complex figure: A Star of David (two overlapping equilateral triangles forming a hexagram). How many triangles of all sizes are embedded?",
    steps: [
      {
        id: 1,
        operation: "Count smallest triangles",
        expression:
          "The overlap creates 6 small equilateral triangles around the central hexagon (the points of the star)",
        result: "6 small point triangles",
        explanation:
          "Each point of the star is a small equilateral triangle.",
      },
      {
        id: 2,
        operation: "Count medium triangles",
        expression:
          "The central hexagon can be divided into 6 equilateral triangles. Also, combining a point triangle with an adjacent central triangle gives a larger triangle. There are 6 such combinations pointing inward.",
        result: "6 medium triangles (2-unit size)",
        explanation:
          "Adjacent small triangles combine to form medium triangles.",
      },
      {
        id: 3,
        operation: "Count the two large original triangles",
        expression:
          "The upward-pointing and downward-pointing large equilateral triangles that form the star",
        result: "2 large triangles",
        explanation: "These are the original component triangles.",
      },
      {
        id: 4,
        operation: "Count 3-unit medium-large triangles",
        expression:
          "Combining 3 small triangles (a point + 2 adjacent central pieces) in each direction yields additional triangles.",
        result: "6 additional medium-large triangles",
        explanation:
          "Three-unit triangles formed by grouping adjacent regions.",
      },
      {
        id: 5,
        operation: "Total",
        expression: "6 + 6 + 2 + 6 = 20 triangles",
        result: "20 triangles embedded in a Star of David",
        explanation:
          "Counting all sizes: 6 small + 6 medium + 6 medium-large + 2 large = 20.",
      },
    ],
    answer:
      "20 triangles of various sizes are embedded in a Star of David.",
    difficulty: "hard",
  },
  {
    id: "ef-p28",
    topic: "embedded-figures",
    title: "UPSC CSAT: Concentric Shapes — Counting Regions",
    question:
      "Complex figure: A square inside a circle inside a larger square inside a larger circle (4 concentric shapes alternating square-circle). How many distinct closed regions exist?",
    steps: [
      {
        id: 1,
        operation: "Identify the layers from inside out",
        expression:
          "Innermost square, then circle, then square, then outermost circle. Each boundary creates a new ring-like region.",
        result: "4 boundaries create distinct regions",
        explanation:
          "Each shape boundary separates the plane into regions.",
      },
      {
        id: 2,
        operation: "Count regions",
        expression:
          "Region 1: Inside the innermost square. Region 2: Between inner square and inner circle. Region 3: Between inner circle and outer square. Region 4: Between outer square and outer circle.",
        result: "4 closed regions (plus the exterior)",
        explanation:
          "Each pair of adjacent boundaries creates one ring region.",
      },
      {
        id: 3,
        operation: "Identify embedded shapes",
        expression:
          "2 squares and 2 circles are explicitly present. The regions themselves are: 1 square, 1 square annular ring, 1 circular ring, 1 circular-square ring.",
        result: "4 distinct closed embedded regions",
        explanation:
          "Each region has a unique shape defined by its inner and outer boundaries.",
      },
    ],
    answer:
      "4 distinct closed regions (innermost square + 3 annular rings between successive boundaries).",
    difficulty: "hard",
  },
  {
    id: "ef-p29",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Counting Rectangles in a 3x2 Grid",
    question:
      "Target: A rectangle of any size. Complex figure: A 3x2 grid (3 columns, 2 rows of unit cells). How many rectangles are embedded?",
    steps: [
      {
        id: 1,
        operation: "Use the combination formula",
        expression:
          "To form a rectangle, choose 2 vertical lines from 4 (n+1 lines for n columns) and 2 horizontal lines from 3 (m+1 lines for m rows). Total = C(4,2) x C(3,2).",
        result: "C(4,2) = 6, C(3,2) = 3, Total = 6 x 3 = 18",
        explanation:
          "Every pair of vertical lines combined with every pair of horizontal lines defines one rectangle.",
      },
      {
        id: 2,
        operation: "Verify by enumeration",
        expression:
          "1x1 rectangles: 3x2=6. 1x2: 3x1=3. 2x1: 2x2=4. 2x2: 2x1=2. 3x1: 1x2=2. 3x2: 1x1=1. Total = 6+3+4+2+2+1 = 18.",
        result: "Confirmed: 18 rectangles",
        explanation:
          "Manual counting matches the formula result.",
      },
    ],
    answer: "18 rectangles are embedded in a 3x2 grid.",
    difficulty: "hard",
  },
  {
    id: "ef-p30",
    topic: "embedded-figures",
    title: "SSC CGL 2023: Multi-Layer Embedded Figure — Pentagon in a Complex Star",
    question:
      "Target: A regular pentagon. Complex figure: A five-pointed star (pentagram) inscribed in a circle, with a smaller circle inscribed inside the central pentagon of the star. The target is the pentagon — but it must be identified despite the two circles and the star lines. In which region is the pentagon embedded?",
    steps: [
      {
        id: 1,
        operation: "Identify the pentagon",
        expression:
          "The five-pointed star's line intersections form a regular pentagon at the center. This pentagon exists regardless of the circles.",
        result: "The pentagon is at the center of the star",
        explanation:
          "The 5 intersection points of the star's edges define the pentagon.",
      },
      {
        id: 2,
        operation: "Check if circles obscure the pentagon",
        expression:
          "The outer circle passes through the star's points (circumscribed). The inner circle is inside the pentagon (inscribed). Neither circle's arc replaces or breaks the pentagon's straight edges.",
        result: "The pentagon remains intact as a separate embedded figure",
        explanation:
          "The circles add boundaries but do not erase the pentagon's edges.",
      },
      {
        id: 3,
        operation: "Identify the embedding clearly",
        expression:
          "The pentagon's 5 sides are segments of the star's 5 lines. The inner circle sits inside it. The outer circle surrounds everything.",
        result: "The pentagon is between the inner circle (inside) and the star points (outside)",
        explanation:
          "It occupies the middle layer of the concentric design.",
      },
      {
        id: 4,
        operation: "Verify regularity",
        expression:
          "All 5 sides of the pentagon are equal (symmetry of the star). All 5 angles are 108 degrees.",
        result: "Confirmed: the embedded pentagon is regular",
        explanation:
          "The pentagram's symmetry guarantees a regular pentagon at its center.",
      },
    ],
    answer:
      "The regular pentagon is embedded at the center of the star, formed by the 5 intersection points of the star's lines. The circles do not break its edges.",
    difficulty: "hard",
  },
]
