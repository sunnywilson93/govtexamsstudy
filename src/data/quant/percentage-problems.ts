import type { MathProblem } from "@/types/quant"

export const percentageProblems: MathProblem[] = [
  {
    id: "pct-01",
    topic: "percentage",
    title: "Finding percentage of a number",
    question: "What is 15% of 240?",
    difficulty: "easy",
    answer: "36",
    steps: [
      {
        id: 1,
        operation: "Convert percentage to fraction",
        expression: "15% = 15/100",
        result: "0.15",
        explanation: "Convert the percentage to its decimal form by dividing by 100.",
        variables: { percentage: 15, decimal: 0.15 },
      },
      {
        id: 2,
        operation: "Multiply decimal by the number",
        expression: "0.15 × 240",
        result: "36",
        explanation: "Multiply the decimal form by the given number to find the percentage value.",
        variables: { percentage: 15, decimal: 0.15, number: 240, result: 36 },
      },
    ],
  },
  {
    id: "pct-02",
    topic: "percentage",
    title: "Percentage increase",
    question:
      "A shopkeeper increases the price of an article from ₹400 to ₹480. What is the percentage increase?",
    difficulty: "easy",
    answer: "20%",
    steps: [
      {
        id: 1,
        operation: "Find the increase",
        expression: "480 − 400",
        result: "80",
        explanation: "Subtract the original price from the new price to find the increase.",
        variables: { original: 400, new: 480, increase: 80 },
      },
      {
        id: 2,
        operation: "Divide increase by original",
        expression: "80 / 400",
        result: "0.2",
        explanation: "Divide the increase by the original value to get the fractional change.",
        variables: { original: 400, increase: 80, fraction: 0.2 },
      },
      {
        id: 3,
        operation: "Convert to percentage",
        expression: "0.2 × 100",
        result: "20%",
        explanation: "Multiply by 100 to express the result as a percentage.",
        variables: { original: 400, increase: 80, percentage: "20%" },
      },
    ],
  },
  {
    id: "pct-03",
    topic: "percentage",
    title: "Successive percentage changes",
    question:
      "A number is first increased by 20% and then decreased by 10%. What is the net percentage change?",
    difficulty: "medium",
    answer: "8% increase",
    steps: [
      {
        id: 1,
        operation: "Assume initial value",
        expression: "Let x = 100",
        result: "100",
        explanation: "Assume the original number is 100 for easier calculation.",
        variables: { x: 100 },
      },
      {
        id: 2,
        operation: "Apply 20% increase",
        expression: "100 + (20% of 100) = 100 + 20",
        result: "120",
        explanation: "After 20% increase, the value becomes 120.",
        variables: { x: 100, afterIncrease: 120 },
      },
      {
        id: 3,
        operation: "Apply 10% decrease on new value",
        expression: "120 − (10% of 120) = 120 − 12",
        result: "108",
        explanation: "The 10% decrease is applied on 120, not on the original 100.",
        variables: { x: 100, afterIncrease: 120, afterDecrease: 108 },
      },
      {
        id: 4,
        operation: "Calculate net change",
        expression: "108 − 100 = 8",
        result: "8% increase",
        explanation:
          "Since we started with 100, the final value of 108 means a net increase of 8%.",
        variables: { x: 100, finalValue: 108, netChange: "8%" },
      },
    ],
  },
  {
    id: "pct-04",
    topic: "percentage",
    title: "Finding the original number",
    question: "If 30% of a number is 45, find the number.",
    difficulty: "easy",
    answer: "150",
    steps: [
      {
        id: 1,
        operation: "Set up equation",
        expression: "30% × x = 45",
        result: "(30/100) × x = 45",
        explanation: "Let the unknown number be x. Write the percentage relationship as an equation.",
        variables: { percentage: 30, result: 45 },
      },
      {
        id: 2,
        operation: "Solve for x",
        expression: "x = 45 × (100/30)",
        result: "150",
        explanation: "Rearrange to isolate x: multiply both sides by 100/30.",
        variables: { percentage: 30, result: 45, x: 150 },
      },
    ],
  },
  {
    id: "pct-05",
    topic: "percentage",
    title: "Population percentage problem",
    question:
      "The population of a town increases by 10% in the first year and by 20% in the second year. If the initial population was 50,000, what is the population after 2 years?",
    difficulty: "medium",
    answer: "66,000",
    steps: [
      {
        id: 1,
        operation: "Apply first year increase",
        expression: "50000 × (1 + 10/100) = 50000 × 1.10",
        result: "55000",
        explanation: "After 10% growth in year 1, the population becomes 55,000.",
        variables: { initial: 50000, year1Growth: "10%", afterYear1: 55000 },
      },
      {
        id: 2,
        operation: "Apply second year increase",
        expression: "55000 × (1 + 20/100) = 55000 × 1.20",
        result: "66000",
        explanation:
          "After 20% growth in year 2 (applied on 55,000), the population becomes 66,000.",
        variables: {
          initial: 50000,
          afterYear1: 55000,
          year2Growth: "20%",
          afterYear2: 66000,
        },
      },
    ],
  },
]
