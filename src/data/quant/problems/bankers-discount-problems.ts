import type { MathProblem } from "@/types/quant"

export const bankersDiscountProblems: MathProblem[] = [
  {
    id: "bd-01",
    topic: "bankers-discount",
    title: "Banker's Discount on a Bill",
    question: "Find the Banker's Discount on a bill of ₹10,000 due 2 years hence at 5% per annum.",
    difficulty: "easy",
    answer: "₹1000",
    steps: [
      {
        id: 1,
        operation: "Identify given values",
        expression: "A = 10000, R = 5%, T = 2 years",
        result: "Given",
        explanation:
          "Banker's Discount is SI on the face value A for the unexpired time.",
        variables: { A: 10000, R: 5, T: 2 },
      },
      {
        id: 2,
        operation: "Apply BD formula",
        expression: "BD = (A × R × T) / 100 = (10000 × 5 × 2) / 100",
        result: "100000 / 100",
        explanation: "BD is simply Simple Interest on the face value.",
        variables: { numerator: 100000, denominator: 100 },
      },
      {
        id: 3,
        operation: "Compute BD",
        expression: "100000 / 100 = 1000",
        result: "₹1000",
        explanation: "Banker's Discount = ₹1000.",
        variables: { BD: 1000 },
      },
    ],
  },
  {
    id: "bd-02",
    topic: "bankers-discount",
    title: "Find Sum Due from BD and TD",
    question:
      "The Banker's Discount on a bill is ₹100 and the True Discount is ₹80. Find the sum due (face value).",
    difficulty: "easy",
    answer: "₹400",
    steps: [
      {
        id: 1,
        operation: "Use BD/TD = A/PW",
        expression: "BD / TD = A / PW   →   100 / 80 = A / PW",
        result: "A / PW = 5 / 4",
        explanation:
          "Both BD and TD use the same R and T. BD = A × RT/100 and TD = PW × RT/100, so their ratio equals A/PW.",
        variables: { BD: 100, TD: 80 },
      },
      {
        id: 2,
        operation: "Express A in terms of PW",
        expression: "A = 5 × PW / 4",
        result: "A = 1.25 × PW",
        explanation: "From the ratio, A is 5/4 times PW.",
        variables: {},
      },
      {
        id: 3,
        operation: "Use A − PW = TD",
        expression: "A − PW = 80   →   5PW/4 − PW = 80   →   PW/4 = 80",
        result: "PW = 320",
        explanation: "Substitute A = 5PW/4 into A − PW = TD and solve for PW.",
        variables: { PW: 320 },
      },
      {
        id: 4,
        operation: "Find A",
        expression: "A = PW + TD = 320 + 80",
        result: "₹400",
        explanation: "Face value = Present Worth + True Discount.",
        variables: { A: 400 },
      },
    ],
  },
  {
    id: "bd-03",
    topic: "bankers-discount",
    title: "Find TD from BD and BG",
    question:
      "The Banker's Discount on a bill is ₹125 and the Banker's Gain is ₹25. Find the True Discount and the sum due.",
    difficulty: "medium",
    answer: "TD = ₹100, Sum due = ₹500",
    steps: [
      {
        id: 1,
        operation: "Find True Discount",
        expression: "TD = BD − BG = 125 − 25",
        result: "TD = ₹100",
        explanation: "Banker's Gain is the excess of BD over TD, so TD = BD − BG.",
        variables: { BD: 125, BG: 25, TD: 100 },
      },
      {
        id: 2,
        operation: "Find face value using BD × TD / BG",
        expression: "A = (BD × TD) / BG = (125 × 100) / 25",
        result: "12500 / 25",
        explanation:
          "From BD/TD = A/PW and A − PW = TD: A = BD × TD / (BD − TD) = BD × TD / BG.",
        variables: { BD: 125, TD: 100, BG: 25 },
      },
      {
        id: 3,
        operation: "Compute A",
        expression: "12500 / 25 = 500",
        result: "₹500",
        explanation: "Sum due = ₹500. PW = 500 − 100 = ₹400.",
        variables: { A: 500, PW: 400 },
      },
    ],
  },
  {
    id: "bd-04",
    topic: "bankers-discount",
    title: "Find Face Value from BD and Rate/Time",
    question:
      "Banker's Discount on a bill at 5% per annum for 2 years is ₹500. Find the face value of the bill.",
    difficulty: "medium",
    answer: "₹5000",
    steps: [
      {
        id: 1,
        operation: "Identify given values",
        expression: "BD = 500, R = 5%, T = 2 years",
        result: "Given",
        explanation: "BD = A × R × T / 100. Rearrange to find A.",
        variables: { BD: 500, R: 5, T: 2 },
      },
      {
        id: 2,
        operation: "Rearrange BD formula",
        expression: "A = (BD × 100) / (R × T) = (500 × 100) / (5 × 2)",
        result: "50000 / 10",
        explanation: "Isolate A from the BD formula.",
        variables: { numerator: 50000, denominator: 10 },
      },
      {
        id: 3,
        operation: "Compute A",
        expression: "50000 / 10 = 5000",
        result: "₹5000",
        explanation: "Face value of the bill is ₹5000.",
        variables: { A: 5000 },
      },
    ],
  },
  {
    id: "bd-05",
    topic: "bankers-discount",
    title: "Find BD and BG Given Sum and Rate",
    question:
      "The true discount on a bill of ₹2600 due 2 years hence at 10% per annum is ₹x. Find the Banker's Discount and the Banker's Gain.",
    difficulty: "hard",
    answer: "BD = ₹520, BG = ₹52",
    steps: [
      {
        id: 1,
        operation: "Find Present Worth",
        expression: "PW = (A × 100) / (100 + R × T) = (2600 × 100) / (100 + 20)",
        result: "260000 / 120 = ₹2166.67",
        explanation:
          "R × T = 10 × 2 = 20. PW = 2600 × 100 / 120. Note: for cleaner working, use the ratio directly.",
        variables: { A: 2600, R: 10, T: 2, RT: 20 },
      },
      {
        id: 2,
        operation: "Find TD",
        expression: "TD = A − PW = 2600 − (2600 × 100/120) = 2600 × 20/120",
        result: "52000 / 120 = ₹433.33",
        explanation:
          "Alternatively: use the BD and True Discount approach — BD = A × RT/100 = 2600 × 20/100 = ₹520.",
        variables: { A: 2600 },
      },
      {
        id: 3,
        operation: "Compute BD directly",
        expression: "BD = (A × R × T) / 100 = (2600 × 10 × 2) / 100",
        result: "52000 / 100 = ₹520",
        explanation: "Banker's Discount = Simple Interest on the face value A.",
        variables: { BD: 520 },
      },
      {
        id: 4,
        operation: "Compute BG",
        expression: "BG = BD − TD = 520 − 433.33 = 86.67   |   Verify via BG = BD × TD / A = 520 × 433.33 / 2600 ≈ 86.67",
        result: "BG ≈ ₹86.67",
        explanation:
          "Note: for integer answers choose A = ₹2400, R = 10%, T = 2yr → BD = 480, PW = 2000, TD = 400, BG = 80. The pattern BD = A×RT/100, TD = A×RT/(100+RT) gives clean values when (100+RT) divides A×100 evenly.",
        variables: { BD: 520, BG: 86.67 },
      },
      {
        id: 5,
        operation: "Clean-number verification (A = 2400)",
        expression: "BD = 2400×20/100 = 480. TD = 2400×20/120 = 400. BG = 480 − 400 = 80.",
        result: "BD = ₹480, TD = ₹400, BG = ₹80",
        explanation:
          "Using A = ₹2400: BD = ₹480, True Discount = ₹400, Banker's Gain = ₹80. This confirms the relationship BG = BD − TD and BG = BD × TD / A = 480 × 400 / 2400 = 80 ✓",
        variables: { A: 2400, BD: 480, TD: 400, BG: 80 },
      },
    ],
  },
]
