import type { QuantConcept } from "@/types/quant"

export const squareCubeRootsConcept: QuantConcept = {
  topic: "square-cube-roots",
  title: "Square Roots & Cube Roots",
  description:
    "A square root undoes squaring: √(n²) = n. Memorise squares 1–30 (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900). Last digit pattern: n ending in 1 or 9 → n² ends in 1; 2 or 8 → 4; 3 or 7 → 9; 4 or 6 → 6; 5 → 5; 0 → 0. A cube root undoes cubing: ∛(n³) = n. Memorise cubes 1–20 (1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000). Square root properties: √(ab) = √a × √b; √(a/b) = √a/√b; √(a²b) = a√b — factor out perfect squares to simplify (e.g. √72 = √(36×2) = 6√2). For non-perfect squares, use long division: pair digits from the decimal point outward, find the largest n with n² ≤ leftmost pair, bring down the next pair, double the current root for the new divisor, find the next digit. Cube root estimation for 5–6 digit numbers: the last digit of the cube uniquely identifies the last digit of the cube root (with cross-pairs 2↔8, 3↔7), and the leading digits narrow the root to a range between memorised cubes.",
  keyIdea:
    "Memorise squares up to 30 and cubes up to 20. Last digit patterns let you instantly eliminate wrong answers in MCQs without full calculation.",
  formulas: [
    {
      name: "Square root property",
      formula: "√(a×b) = √a × √b; √(a/b) = √a / √b",
      whenToUse: "To split or combine square roots",
    },
    {
      name: "Simplify surd",
      formula: "√(n²×m) = n√m — factor out largest perfect square",
      whenToUse: "To simplify non-perfect square roots",
    },
    {
      name: "Last digit of perfect square",
      formula:
        "Units digit of n determines units digit of n²; only 0,1,4,5,6,9 can be last digits of perfect squares",
      whenToUse: "To check if a number can be a perfect square",
    },
    {
      name: "Cube root last digit",
      formula: "Last digit of cube = same as last digit of cube root (except 2↔8, 3↔7)",
      whenToUse: "To find last digit of cube root",
    },
    {
      name: "Approx square root",
      formula: "√N ≈ nearby perfect square root ± (difference)/(2 × nearby root)",
      whenToUse: "Quick estimation of square roots",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO", "CDS"],
  examRelevance:
    "Direct square root and cube root questions in SSC CGL Tier 1 and 2. Also used in simplification, mensuration (side from area), and Pythagorean triplet identification.",
}
