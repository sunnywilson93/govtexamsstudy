import type { QuantConcept } from "@/types/quant"

export const decimalFractionsConcept: QuantConcept = {
  topic: "decimal-fractions",
  title: "Decimal Fractions",
  description:
    "A decimal fraction is a fraction whose denominator is a power of 10. The number of decimal places equals the power of 10 in the denominator (0.375 = 375/1000). To convert a fraction to a decimal, divide numerator by denominator. To convert a terminating decimal to a fraction, write the digits over the appropriate power of 10 and simplify (0.125 = 125/1000 = 1/8). A recurring decimal repeats infinitely — 1/3 = 0.333… — and can be converted to a fraction by multiplying by the appropriate power of 10 and subtracting. For comparison, align decimal points and compare digit by digit from the left. For arithmetic: addition and subtraction require aligned decimal points; multiplication requires counting total decimal places in both factors; division requires making the divisor a whole number first.",
  keyIdea:
    "Decimals are just fractions with powers of 10 as denominator. Every decimal operation maps to a fraction operation — use whichever is more convenient.",
  formulas: [
    {
      name: "Decimal to Fraction",
      formula: "Move digits over power of 10, simplify. 0.ab = ab/100",
      whenToUse: "To convert terminating decimal to fraction",
    },
    {
      name: "Fraction to Decimal",
      formula: "Divide numerator by denominator",
      whenToUse: "To convert fraction to decimal",
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
