import type { QuantConcept } from "@/types/quant"

export const simplificationConcept: QuantConcept = {
  topic: "simplification",
  title: "Simplification & BODMAS",
  description:
    "Simplification is the process of reducing a complex arithmetic expression to its simplest value by applying BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction) in strict order. Mastery of fraction, decimal, and percentage conversions makes this process fast and error-free.",
  keyIdea:
    "BODMAS is non-negotiable. In banking exams, approximate aggressively — the answer choices are spaced wide enough that rounding to nearest 5 still uniquely identifies the correct answer.",
  formulas: [
    {
      name: "BODMAS Order",
      formula: "B → O → D → M → A → S (Brackets, Orders, Divide, Multiply, Add, Subtract)",
      whenToUse: "When evaluating any mixed arithmetic expression",
    },
    {
      name: "LCM for fractions",
      formula: "a/b ± c/d = (ad ± bc)/(bd); simplify by GCD",
      whenToUse: "When adding or subtracting fractions",
    },
    {
      name: "Approximation tolerance",
      formula: "Round to nearest 5; if answer options differ by >5%, approximation is sufficient",
      whenToUse: "For banking exam simplification questions",
    },
    {
      name: "Perfect square pattern",
      formula: "n² − (n−1)² = 2n − 1 (difference of consecutive squares is always odd)",
      whenToUse: "To quickly identify nearby perfect squares",
    },
    {
      name: "Fraction-percent conversion",
      formula: "p% = p/100; reduce fraction; memorise common ones: 20%=1/5, 25%=1/4, 12.5%=1/8",
      whenToUse: "To convert between % and fraction quickly",
    },
  ],
  examTags: ["IBPS PO", "SBI PO", "IBPS Clerk", "SSC CHSL", "RRB NTPC"],
  examRelevance:
    "5+ questions in IBPS PO and SBI PO Prelims — one of the highest-weightage topics in banking exams. Tests BODMAS, approximation, and fraction/decimal operations.",
}
