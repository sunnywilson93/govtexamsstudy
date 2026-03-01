import type { QuantTrick } from "@/types/quant"

export const mensurationTricks: QuantTrick[] = [
  {
    id: "men-trick-01",
    topic: "mensuration",
    type: "mental-math",
    title: "Pythagorean Triplets",
    description: "Memorise common triplets to instantly find the third side of a right triangle — no calculation needed.",
    formula: "3-4-5  |  5-12-13  |  8-15-17  |  7-24-25  (and their multiples: 6-8-10, 10-24-26…)",
    example: {
      problem: "A right triangle has legs 15 and 20. Find hypotenuse.",
      solution: "15-20-? = 5×(3-4-5) = 5×5 = 25. Hypotenuse = 25 (no Pythagoras computation)",
    },
    timeSaved: "~30s per right-triangle problem",
  },
  {
    id: "men-trick-02",
    topic: "mensuration",
    type: "formula-shortcut",
    title: "% Change in Area When Radius Changes",
    description: "If radius increases by r%, area increases by (2r + r²/100)%. Derive this from the scaling rule (area ∝ r²) — don't recompute from scratch.",
    formula: "Area change% = 2r + r²/100",
    example: {
      problem: "Radius of circle increases by 10%. % increase in area?",
      solution: "2(10) + 100/100 = 20 + 1 = 21%",
    },
    timeSaved: "~25s vs computing new area from scratch",
  },
  {
    id: "men-trick-03",
    topic: "mensuration",
    type: "formula-shortcut",
    title: "Volume Conversion (Recasting)",
    description: "When a solid is melted and recast into another shape, set volumes equal. Write both volume formulas, equate, and solve for the unknown dimension.",
    example: {
      problem: "A cone (r=3, h=4) is recast into a sphere. Find sphere radius.",
      solution: "Cone vol = ⅓π(9)(4) = 12π. Sphere: (4/3)πR³ = 12π → R³ = 9 → R = ∛9 ≈ 2.08",
    },
    timeSaved: "~20s vs guessing which formula to use",
  },
  {
    id: "men-trick-04",
    topic: "mensuration",
    type: "mental-math",
    title: "Area of Equilateral Triangle",
    description: "Memorise (√3/4)a² for area and (√3/2)a for height. Don't re-derive from Heron's formula under time pressure.",
    formula: "Area = (√3/4)a²   |   Height = (√3/2)a   |   Perimeter = 3a",
    example: {
      problem: "Find area of equilateral triangle with side 8.",
      solution: "Area = (√3/4) × 64 = 16√3 sq units",
    },
    timeSaved: "~20s vs Heron's formula computation",
  },
  {
    id: "men-trick-05",
    topic: "mensuration",
    type: "formula-shortcut",
    title: "Path / Border Area",
    description: "For a rectangular path of uniform width w around a rectangle l×b: path area = 2w(l + b + 2w). Compute outer dimensions then subtract inner area.",
    formula: "Path Area = (l + 2w)(b + 2w) − l × b = 2w(l + b + 2w)",
    example: {
      problem: "A 2m path runs around a garden 30m × 20m. Find path area.",
      solution: "2×2×(30 + 20 + 2×2) = 4 × 54 = 216 sq m",
    },
    timeSaved: "~20s vs computing both rectangles and subtracting manually",
  },
]
