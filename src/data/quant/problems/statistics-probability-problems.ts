import type { MathProblem } from "@/types/quant"

export const statisticsProbabilityProblems: MathProblem[] = [
  {
    id: "sp-01",
    topic: "statistics-probability",
    title: "Mean, median, mode of a dataset",
    question:
      "Find the mean, median, and mode of the dataset: 4, 7, 3, 7, 9, 2, 7, 5.",
    difficulty: "easy",
    answer: "Mean = 5.5, Median = 6, Mode = 7",
    steps: [
      {
        id: 1,
        operation: "Calculate the mean",
        expression: "Mean = (4 + 7 + 3 + 7 + 9 + 2 + 7 + 5) / 8 = 44 / 8",
        result: "5.5",
        explanation: "Add all values and divide by the count of values.",
        variables: { sum: 44, n: 8, mean: 5.5 },
      },
      {
        id: 2,
        operation: "Find the median (sort first)",
        expression: "Sorted: 2, 3, 4, 5, 7, 7, 7, 9  →  n=8 (even)  →  avg of 4th and 5th = (5+7)/2",
        result: "6",
        explanation:
          "For even n, median is the average of the n/2-th and (n/2+1)-th values after sorting.",
        variables: { pos1: 4, pos2: 5, val1: 5, val2: 7, median: 6 },
      },
      {
        id: 3,
        operation: "Identify the mode",
        expression: "7 appears 3 times — more than any other value",
        result: "7",
        explanation: "Mode is the value that occurs most frequently.",
        variables: { mode: 7, frequency: 3 },
      },
    ],
  },
  {
    id: "sp-02",
    topic: "statistics-probability",
    title: "Probability — single event (balls in a bag)",
    question:
      "A bag contains 5 red, 4 blue, and 3 green balls. One ball is drawn at random. What is the probability it is blue?",
    difficulty: "easy",
    answer: "1/3",
    steps: [
      {
        id: 1,
        operation: "Count total outcomes",
        expression: "Total balls = 5 + 4 + 3",
        result: "12",
        explanation: "Total number of equally likely outcomes is the total number of balls.",
        variables: { red: 5, blue: 4, green: 3, total: 12 },
      },
      {
        id: 2,
        operation: "Count favourable outcomes",
        expression: "Favourable = number of blue balls = 4",
        result: "4",
        explanation: "We want a blue ball, so only blue balls are favourable.",
        variables: { favourable: 4 },
      },
      {
        id: 3,
        operation: "Calculate probability",
        expression: "P(blue) = 4 / 12",
        result: "1/3",
        explanation: "Simplify 4/12 by dividing numerator and denominator by 4.",
        variables: { probability: "1/3" },
      },
    ],
  },
  {
    id: "sp-03",
    topic: "statistics-probability",
    title: "Probability — at least one (complement rule)",
    question:
      "A fair die is rolled twice. What is the probability of getting at least one 6?",
    difficulty: "medium",
    answer: "11/36",
    steps: [
      {
        id: 1,
        operation: "Find P(no 6 on a single roll)",
        expression: "P(not 6) = 5/6",
        result: "5/6",
        explanation: "There are 5 outcomes out of 6 that are not a 6.",
        variables: { pNot6: "5/6" },
      },
      {
        id: 2,
        operation: "Find P(no 6 on either roll) — independent events",
        expression: "P(no 6 on both) = (5/6) × (5/6) = 25/36",
        result: "25/36",
        explanation: "The two rolls are independent, so multiply the individual probabilities.",
        variables: { pNone: "25/36" },
      },
      {
        id: 3,
        operation: "Apply complement rule",
        expression: "P(at least one 6) = 1 − 25/36 = 11/36",
        result: "11/36",
        explanation:
          "P(at least one) = 1 − P(none). Faster than counting all favourable pairs.",
        variables: { pAtLeastOne: "11/36" },
      },
    ],
  },
  {
    id: "sp-04",
    topic: "statistics-probability",
    title: "Combinations — committee selection",
    question:
      "From a group of 8 men and 5 women, a committee of 4 men and 2 women is to be formed. In how many ways can this be done?",
    difficulty: "medium",
    answer: "700",
    steps: [
      {
        id: 1,
        operation: "Select 4 men from 8",
        expression: "8C4 = 8! / (4! × 4!) = (8×7×6×5) / (4×3×2×1)",
        result: "70",
        explanation:
          "Order doesn't matter in a committee, so use combinations. 8C4 = 70.",
        variables: { n: 8, r: 4, ways: 70 },
      },
      {
        id: 2,
        operation: "Select 2 women from 5",
        expression: "5C2 = 5! / (2! × 3!) = (5×4) / (2×1)",
        result: "10",
        explanation: "5C2 = 10.",
        variables: { n: 5, r: 2, ways: 10 },
      },
      {
        id: 3,
        operation: "Combine both selections",
        expression: "Total = 8C4 × 5C2 = 70 × 10",
        result: "700",
        explanation:
          "The two selections are independent, so multiply the number of ways.",
        variables: { total: 700 },
      },
    ],
  },
  {
    id: "sp-05",
    topic: "statistics-probability",
    title: "Find missing value from given mean",
    question:
      "The mean of six numbers is 18. Five of the numbers are 12, 20, 15, 25, and 14. Find the sixth number.",
    difficulty: "medium",
    answer: "22",
    steps: [
      {
        id: 1,
        operation: "Find the required total sum",
        expression: "Total Sum = Mean × n = 18 × 6",
        result: "108",
        explanation: "Use Sum = Mean × Count to find the total all six numbers must add up to.",
        variables: { mean: 18, n: 6, requiredSum: 108 },
      },
      {
        id: 2,
        operation: "Sum the five known numbers",
        expression: "12 + 20 + 15 + 25 + 14",
        result: "86",
        explanation: "Add all the known values to find what has already been accounted for.",
        variables: { knownSum: 86 },
      },
      {
        id: 3,
        operation: "Find the sixth number",
        expression: "Sixth number = Total Sum − Known Sum = 108 − 86",
        result: "22",
        explanation: "The missing value is the difference between the required total and the known total.",
        variables: { sixthNumber: 22 },
      },
    ],
  },
]
