import type { QuantConcept } from "@/types/quant"

export const decimalFractionsConcept: QuantConcept = {
  topic: "decimal-fractions",
  title: "Decimal Fractions",
  description:
    "Convert between decimals, fractions, and recurring decimals fluently \\u2014 this skill underpins every percentage, ratio, and interest calculation. SSC CHSL and RRB papers test direct decimal simplification, while banking exams embed decimal operations inside larger DI and approximation sets. Master terminating-vs-recurring recognition and the multiply-subtract trick for recurring decimals.",
  keyIdea:
    "Decimals are just fractions with powers of 10 as denominator. Every decimal operation maps to a fraction operation — use whichever is more convenient.",
  formulas: [
    {
      name: "Decimal to Fraction",
      formula: "Move digits over power of 10, simplify. 0.ab = ab/100",
      whenToUse: "Place the decimal digits over the matching power of 10 and simplify \\u2014 use this whenever a question gives a terminating decimal and asks for the fraction form",
    },
    {
      name: "Fraction to Decimal",
      formula: "Divide numerator by denominator",
      whenToUse: "Divide directly to convert any fraction into its decimal equivalent \\u2014 stop once the remainder repeats or terminates",
    },
    {
      name: "Recurring decimal",
      formula: "x = 0.abab... → 100x − x = ab → x = ab/99",
      whenToUse: "To convert pure recurring decimal to fraction",
    },
    {
      name: "Decimal multiplication",
      formula: "Count total decimal places in factors; place decimal in product from right",
      whenToUse: "Multiplying decimal numbers",
    },
    {
      name: "Decimal comparison",
      formula: "Align decimal points, compare digit by digit from leftmost",
      whenToUse: "Comparing two decimal numbers",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "RRB NTPC"],
  examRelevance:
    "Direct calculation questions in SSC CHSL and RRB exams. Forms the basis for all percentage, ratio, and interest calculations. Tested as simplification questions in banking exams.",
}
