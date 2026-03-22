import type { QuantConcept } from "@/types/quant"

export const squareCubeRootsConcept: QuantConcept = {
  topic: "square-cube-roots",
  title: "Square Roots & Cube Roots",
  description:
    "Square and cube root questions reward pure memorization: commit squares up to 30 and cubes up to 20 to muscle memory. Last-digit patterns let you eliminate wrong MCQ options instantly without full calculation. SSC CGL Tier 1 and Tier 2 both test direct root computation, and these values reappear inside mensuration, Pythagorean triplet, and simplification problems.",
  keyIdea:
    "Memorise squares up to 30 and cubes up to 20. Last digit patterns let you instantly eliminate wrong answers in MCQs without full calculation.",
  formulas: [
    {
      name: "Square root property",
      formula: "√(a×b) = √a × √b; √(a/b) = √a / √b",
      whenToUse: "Break a complex root into simpler parts or combine two roots into one product.",
    },
    {
      name: "Simplify surd",
      formula: "√(n²×m) = n√m — factor out largest perfect square",
      whenToUse: "Extract the largest perfect-square factor to reduce a surd to its simplest form.",
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
