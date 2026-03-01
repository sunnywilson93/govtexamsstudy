import type { SeriesProblem } from "@/types/reasoning"

export const seriesProblems: SeriesProblem[] = [
  {
    id: "series-01",
    type: "number",
    series: [2, 6, 18, 54, -1],
    missingIndex: 4,
    answer: 162,
    steps: [
      {
        id: 1,
        description: "Observe the ratio between consecutive terms.",
        pattern: "6/2 = 3, 18/6 = 3, 54/18 = 3",
        highlights: [0, 1],
      },
      {
        id: 2,
        description: "Each term is multiplied by 3 to get the next term.",
        pattern: "×3 pattern: geometric progression with common ratio 3",
        highlights: [0, 1, 2, 3],
      },
      {
        id: 3,
        description: "Apply the pattern to find the missing term: 54 × 3 = 162.",
        pattern: "54 × 3 = 162",
        highlights: [3, 4],
      },
    ],
  },
  {
    id: "series-02",
    type: "number",
    series: [1, 4, 9, 16, 25, -1],
    missingIndex: 5,
    answer: 36,
    steps: [
      {
        id: 1,
        description: "Check if the terms are perfect squares.",
        pattern: "1=1², 4=2², 9=3², 16=4², 25=5²",
        highlights: [0, 1, 2, 3, 4],
      },
      {
        id: 2,
        description: "The nth term equals n². The next term is 6² = 36.",
        pattern: "n² series: 1², 2², 3², 4², 5², 6²",
        highlights: [4, 5],
      },
    ],
  },
  {
    id: "series-03",
    type: "number",
    series: [3, 5, 9, 15, 23, -1],
    missingIndex: 5,
    answer: 33,
    steps: [
      {
        id: 1,
        description: "Find the differences between consecutive terms.",
        pattern: "5−3=2, 9−5=4, 15−9=6, 23−15=8",
        highlights: [0, 1, 2, 3, 4],
      },
      {
        id: 2,
        description: "The differences form an arithmetic progression: 2, 4, 6, 8. Next difference is 10.",
        pattern: "Differences: 2, 4, 6, 8, 10 (increasing by 2)",
        highlights: [3, 4],
      },
      {
        id: 3,
        description: "Add 10 to the last term: 23 + 10 = 33.",
        pattern: "23 + 10 = 33",
        highlights: [4, 5],
      },
    ],
  },
  {
    id: "series-04",
    type: "number",
    series: [2, 3, 5, 7, 11, 13, -1],
    missingIndex: 6,
    answer: 17,
    steps: [
      {
        id: 1,
        description: "Check if the terms are prime numbers.",
        pattern: "2, 3, 5, 7, 11, 13 — all primes",
        highlights: [0, 1, 2, 3, 4, 5],
      },
      {
        id: 2,
        description: "The series lists consecutive prime numbers. The next prime after 13 is 17.",
        pattern: "Prime number sequence: 2, 3, 5, 7, 11, 13, 17",
        highlights: [5, 6],
      },
    ],
  },
  {
    id: "series-05",
    type: "number",
    series: [1, 1, 2, 3, 5, 8, -1],
    missingIndex: 6,
    answer: 13,
    steps: [
      {
        id: 1,
        description: "Check if each term is the sum of the two preceding terms.",
        pattern: "1+1=2, 1+2=3, 2+3=5, 3+5=8",
        highlights: [0, 1, 2],
      },
      {
        id: 2,
        description: "This is the Fibonacci sequence. Each term = sum of previous two terms.",
        pattern: "Fibonacci: F(n) = F(n-1) + F(n-2)",
        highlights: [2, 3, 4, 5],
      },
      {
        id: 3,
        description: "Next term: 5 + 8 = 13.",
        pattern: "5 + 8 = 13",
        highlights: [4, 5, 6],
      },
    ],
  },
]
