import type { MathProblem } from "@/types/quant"

export const algebraProblems: MathProblem[] = [
  {
    id: "alg-01",
    topic: "algebra",
    title: "Solve a linear equation in two variables",
    question:
      "Solve the system: 3x + 2y = 16 and x − y = 2. Find the values of x and y.",
    difficulty: "easy",
    answer: "x = 4, y = 2",
    steps: [
      {
        id: 1,
        operation: "Express x in terms of y from equation 2",
        expression: "x − y = 2  →  x = y + 2",
        result: "x = y + 2",
        explanation: "Rearrange the simpler equation to isolate one variable.",
        variables: { x: "y + 2" },
      },
      {
        id: 2,
        operation: "Substitute into equation 1",
        expression: "3(y + 2) + 2y = 16  →  3y + 6 + 2y = 16  →  5y = 10",
        result: "y = 2",
        explanation: "Replace x with (y+2) in the first equation and solve for y.",
        variables: { y: 2 },
      },
      {
        id: 3,
        operation: "Back-substitute to find x",
        expression: "x = y + 2 = 2 + 2",
        result: "x = 4",
        explanation: "Substitute y=2 back into the expression for x.",
        variables: { x: 4, y: 2 },
      },
    ],
  },
  {
    id: "alg-02",
    topic: "algebra",
    title: "Find roots and determine nature using discriminant",
    question:
      "Solve x² − 5x + 6 = 0 and determine the nature of the roots.",
    difficulty: "easy",
    answer: "x = 2 and x = 3 (two distinct real roots)",
    steps: [
      {
        id: 1,
        operation: "Compute the discriminant",
        expression: "D = b² − 4ac = (−5)² − 4×1×6 = 25 − 24",
        result: "D = 1",
        explanation: "D > 0 means the equation has two distinct real roots.",
        variables: { a: 1, b: -5, c: 6, D: 1 },
      },
      {
        id: 2,
        operation: "Apply the quadratic formula",
        expression: "x = (5 ± √1) / 2",
        result: "x = 3  or  x = 2",
        explanation: "√1 = 1, so the two roots are (5+1)/2 = 3 and (5−1)/2 = 2.",
        variables: { root1: 3, root2: 2 },
      },
      {
        id: 3,
        operation: "Verify using sum and product",
        expression: "Sum = 3+2 = 5 = −(−5)/1 = 5  |  Product = 3×2 = 6 = 6/1",
        result: "Verified",
        explanation: "Sum of roots = −b/a and product = c/a both match, confirming the answer.",
        variables: { sumOfRoots: 5, productOfRoots: 6 },
      },
    ],
  },
  {
    id: "alg-03",
    topic: "algebra",
    title: "Apply algebraic identity to find missing value",
    question:
      "If x + 1/x = 6, find the value of x² + 1/x².",
    difficulty: "medium",
    answer: "34",
    steps: [
      {
        id: 1,
        operation: "Recall the chain identity",
        expression: "x² + 1/x² = (x + 1/x)² − 2",
        result: "Identity set up",
        explanation:
          "Squaring x+1/x gives x²+2+1/x², so x²+1/x² = (x+1/x)²−2.",
        variables: { identity: "(x+1/x)² - 2" },
      },
      {
        id: 2,
        operation: "Substitute the given value",
        expression: "x² + 1/x² = 6² − 2 = 36 − 2",
        result: "34",
        explanation: "Replace (x+1/x) with 6 and evaluate.",
        variables: { k: 6, result: 34 },
      },
    ],
  },
  {
    id: "alg-04",
    topic: "algebra",
    title: "Age word problem — single variable",
    question:
      "A father is 3 times as old as his son. Six years from now, he will be twice as old as his son. Find their present ages.",
    difficulty: "medium",
    answer: "Son = 6 years, Father = 18 years",
    steps: [
      {
        id: 1,
        operation: "Assign variable and express both ages",
        expression: "Let son's age = x. Father's age = 3x.",
        result: "Son = x, Father = 3x",
        explanation: "Express the father's age in terms of the son's using the given ratio.",
        variables: { son: "x", father: "3x" },
      },
      {
        id: 2,
        operation: "Set up equation for 6 years later",
        expression: "3x + 6 = 2(x + 6)  →  3x + 6 = 2x + 12  →  x = 6",
        result: "x = 6",
        explanation:
          "After 6 years the father is twice the son's age. Expand and simplify to find x.",
        variables: { x: 6 },
      },
      {
        id: 3,
        operation: "Calculate present ages",
        expression: "Son = 6  |  Father = 3×6 = 18",
        result: "Son = 6, Father = 18",
        explanation:
          "Verify: after 6 years son=12, father=24; 24 = 2×12. Confirmed.",
        variables: { son: 6, father: 18 },
      },
    ],
  },
  {
    id: "alg-05",
    topic: "algebra",
    title: "Remainder theorem — find remainder",
    question:
      "Find the remainder when f(x) = 2x³ − 3x² + x − 5 is divided by (x − 2).",
    difficulty: "medium",
    answer: "1",
    steps: [
      {
        id: 1,
        operation: "Identify the value to substitute",
        expression: "Divisor = (x − 2)  →  substitute x = 2",
        result: "x = 2",
        explanation:
          "Remainder theorem states: remainder = f(a) when dividing by (x−a). Here a = 2.",
        variables: { a: 2 },
      },
      {
        id: 2,
        operation: "Evaluate f(2)",
        expression: "f(2) = 2(2)³ − 3(2)² + 2 − 5 = 16 − 12 + 2 − 5",
        result: "1",
        explanation: "Compute each term: 2×8=16, 3×4=12, then combine: 16−12+2−5=1.",
        variables: { term1: 16, term2: -12, term3: 2, term4: -5, remainder: 1 },
      },
    ],
  },
]
