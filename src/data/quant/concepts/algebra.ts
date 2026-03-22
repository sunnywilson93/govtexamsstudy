import type { QuantConcept } from "@/types/quant"

export const algebraConcept: QuantConcept = {
  topic: "algebra",
  title: "Algebra",
  description:
    "Algebra spans linear and quadratic equations, standard identities, the remainder theorem, and inequality rules. SSC CGL and banking papers dedicate 3\\u20135 questions to this topic. Master the sum/product-of-roots shortcut and identity recognition to solve most questions without full expansion.",
  keyIdea:
    "Convert word problems into equations, then solve. For quadratics, use the discriminant (b²−4ac) to determine the nature of roots without fully solving.",
  formulas: [
    {
      name: "Linear Equation (Two Variables) — Substitution / Elimination",
      formula:
        "ax + b = 0  →  x = −b/a  |  For two variables: solve one equation for x, substitute into the other",
      whenToUse:
        "Solve single-variable equations by direct substitution. For two variables, match coefficients for elimination or isolate one variable for substitution.",
    },
    {
      name: "Quadratic Formula",
      formula:
        "x = (−b ± √(b²−4ac)) / 2a  |  Sum of roots = −b/a  |  Product of roots = c/a",
      whenToUse:
        "Find roots of ax\\u00B2+bx+c=0. Apply sum/product shortcuts to answer root-relationship questions without computing each root separately.",
    },
    {
      name: "Key Algebraic Identities",
      formula:
        "(a+b)² = a²+2ab+b²  |  (a−b)² = a²−2ab+b²  |  (a+b)(a−b) = a²−b²  |  a³+b³ = (a+b)(a²−ab+b²)",
      whenToUse:
        "Simplify expressions or find missing values when two of the three terms are known; recognise the pattern first.",
    },
    {
      name: "Remainder Theorem",
      formula: "Remainder when f(x) is divided by (x−a) = f(a)  |  If f(a)=0, (x−a) is a factor",
      whenToUse:
        "Find remainder without performing polynomial long division; also used to check whether a given binomial is a factor.",
    },
    {
      name: "Inequalities — Sign Flip Rule",
      formula:
        "Multiplying or dividing both sides by a negative number flips the inequality sign  |  |x| < a  ⟺  −a < x < a",
      whenToUse:
        "Solving inequalities involving negative coefficients or absolute values; always check whether you are multiplying by a negative.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "CDS", "UPSC CSAT"],
  examRelevance:
    "Algebra is a high-weight topic in SSC and banking exams — expect 3–5 questions per paper. Quadratic roots, identity shortcuts, and age/number word problems are the most frequently tested sub-types.",
}
