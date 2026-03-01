import type { QuantTrick } from "@/types/quant"

export const trigonometryTricks: QuantTrick[] = [
  {
    id: "trig-trick-01",
    topic: "trigonometry",
    type: "mental-math",
    title: "Values Table — √n/2 Row Pattern",
    description:
      "Sin values for 0°, 30°, 45°, 60°, 90° follow √0/2, √1/2, √2/2, √3/2, √4/2. Cos is the same row in reverse. Write n = 0 to 4, take √n/2 — no memorisation needed.",
    example: {
      problem: "What is sin 60° and cos 30°?",
      solution: "sin 60° = √3/2 (n=3);  cos 30° = √3/2 (reverse row, n=3). They are equal — a useful check.",
    },
    timeSaved: "~20s filling in the table from scratch",
  },
  {
    id: "trig-trick-02",
    topic: "trigonometry",
    type: "formula-shortcut",
    title: "Identity Simplification — Reduce to sin/cos",
    description:
      "Convert every ratio to sin and cos, apply sin²θ+cos²θ=1 to cancel, and the expression collapses to a constant. Works on all 'find the value of' expression problems.",
    formula: "tan θ = sin θ/cos θ;  cot θ = cos θ/sin θ;  sec θ = 1/cos θ;  cosec θ = 1/sin θ",
    example: {
      problem: "Simplify: sin²θ + cos²θ + tan²θ − sec²θ",
      solution: "= (sin²θ+cos²θ) + (tan²θ−sec²θ) = 1 + (−1) = 0  [using 1+tan²θ=sec²θ]",
    },
    timeSaved: "~40s vs expanding each ratio individually",
  },
  {
    id: "trig-trick-03",
    topic: "trigonometry",
    type: "formula-shortcut",
    title: "Complementary Pair Cancellation",
    description:
      "Any product sin A·cos A where A+(90°−A)=90° can be written as sin A·sin(90°−A). Pairs of angles summing to 90° let you replace one function with another and cancel or combine terms instantly.",
    formula: "sin θ·cos θ = sin θ·sin(90°−θ)",
    example: {
      problem: "Find sin 10°·sin 80° + cos 10°·cos 80°.",
      solution: "sin 80°=cos 10°, cos 80°=sin 10°. Expression = cos²10° + sin²10° = 1.",
    },
    timeSaved: "~30s vs using a calculator or expansion",
  },
  {
    id: "trig-trick-04",
    topic: "trigonometry",
    type: "formula-shortcut",
    title: "Two-Building Problem — Simultaneous tan Equations",
    description:
      "When two angles of elevation are given from a single observation point to two different heights, set up two equations using tan. Divide the equations to eliminate the horizontal distance and solve directly.",
    formula: "tan α = h₁/d  and  tan β = h₂/d  →  h₁/h₂ = tan α/tan β",
    example: {
      problem: "From a point on the ground, the tops of two buildings subtend angles 30° and 60°. Heights are in ratio?",
      solution: "h₁/h₂ = tan 30°/tan 60° = (1/√3)/√3 = 1/3. Ratio = 1:3.",
    },
    timeSaved: "~45s vs solving the full simultaneous system",
  },
  {
    id: "trig-trick-05",
    topic: "trigonometry",
    type: "mental-math",
    title: "45° Symmetry — All Equal Pairs",
    description:
      "At 45°, sin=cos=1/√2 and tan=cot=1 and sec=cosec=√2. Any expression that evaluates at 45° will have equal-function pairs. Substitute 45° first whenever the angle is unspecified and options are constants.",
    example: {
      problem: "If θ=45°, find (sin θ + cos θ)².",
      solution: "(1/√2 + 1/√2)² = (2/√2)² = (√2)² = 2.",
    },
    timeSaved: "~25s on verify-by-substitution MCQs",
  },
]
