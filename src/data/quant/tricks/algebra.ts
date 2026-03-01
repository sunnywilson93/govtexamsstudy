import type { QuantTrick } from "@/types/quant"

export const algebraTricks: QuantTrick[] = [
  {
    id: "alg-trick-01",
    topic: "algebra",
    type: "formula-shortcut",
    title: "Sum and Product of Roots Shortcut",
    description:
      "For ax²+bx+c=0, sum of roots α+β = −b/a and product αβ = c/a. Use these to evaluate composite expressions like α²+β² or αβ(α+β) without actually finding the roots.",
    formula: "α+β = −b/a  |  αβ = c/a  |  α²+β² = (α+β)² − 2αβ",
    example: {
      problem: "For 2x²−7x+3=0, find α²+β² without solving for the roots.",
      solution:
        "α+β = 7/2, αβ = 3/2. α²+β² = (7/2)² − 2×(3/2) = 49/4 − 3 = 37/4 = 9.25",
    },
    timeSaved: "~40s vs solving quadratic then squaring",
  },
  {
    id: "alg-trick-02",
    topic: "algebra",
    type: "formula-shortcut",
    title: "x + 1/x Chain Identity",
    description:
      "If x + 1/x = k, then higher powers follow a chain: x²+1/x² = k²−2, and x³+1/x³ = k³−3k. Recognise this pattern and apply directly.",
    formula:
      "x²+1/x² = (x+1/x)² − 2  |  x³+1/x³ = (x+1/x)³ − 3(x+1/x)",
    example: {
      problem: "If x + 1/x = 5, find x³ + 1/x³.",
      solution: "x³+1/x³ = 5³ − 3×5 = 125 − 15 = 110",
    },
    timeSaved: "~30s vs expanding and simplifying manually",
  },
  {
    id: "alg-trick-03",
    topic: "algebra",
    type: "mental-math",
    title: "Split the Middle Term (Factorisation)",
    description:
      "To factorise ax²+bx+c mentally, find two numbers whose sum = b and product = ac. Split the middle term and group. Much faster than using the quadratic formula for integer-root problems.",
    example: {
      problem: "Factorise 2x²+7x+3.",
      solution:
        "Need two numbers with sum=7 and product=2×3=6 → 6 and 1. Rewrite: 2x²+6x+x+3 = 2x(x+3)+1(x+3) = (2x+1)(x+3)",
    },
    timeSaved: "~20s vs quadratic formula",
  },
  {
    id: "alg-trick-04",
    topic: "algebra",
    type: "mental-math",
    title: "Single-Variable Age / Number Word Problems",
    description:
      "Assign one variable to the unknown and express all other quantities in terms of it. Avoid setting up multi-variable systems — one equation in one unknown is always faster to solve under exam conditions.",
    example: {
      problem:
        "A father is 3 times as old as his son. In 12 years, he will be twice as old. Find the son's current age.",
      solution:
        "Let son = x, father = 3x. After 12 years: 3x+12 = 2(x+12) → 3x+12 = 2x+24 → x = 12. Son is 12 years old.",
    },
    timeSaved: "~25s vs two-variable approach",
  },
  {
    id: "alg-trick-05",
    topic: "algebra",
    type: "formula-shortcut",
    title: "(a+b+c)² and the Zero-Sum Cube Shortcut",
    description:
      "Expand (a+b+c)² = a²+b²+c²+2(ab+bc+ca) to find any missing component. Bonus: if a+b+c=0, then a³+b³+c³ = 3abc — this exact identity appears frequently as a one-step exam question.",
    formula:
      "(a+b+c)² = a²+b²+c²+2(ab+bc+ca)  |  If a+b+c=0 → a³+b³+c³ = 3abc",
    example: {
      problem: "If a+b+c=0 and abc=6, find a³+b³+c³.",
      solution: "Since a+b+c=0, apply the identity directly: a³+b³+c³ = 3abc = 3×6 = 18",
    },
    timeSaved: "~35s vs expanding cubes individually",
  },
]
