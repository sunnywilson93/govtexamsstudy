import type { QuantTrick } from "@/types/quant"

export const trueDiscountTricks: QuantTrick[] = [
  {
    id: "td-trick-01",
    topic: "true-discount",
    type: "formula-shortcut",
    title: "PW in One Step",
    description:
      "Never compute TD first. Divide amount directly by (1 + RT/100) to get Present Worth in a single multiplication step.",
    formula: "PW = A / (1 + RT/100)   →   same as A × 100 / (100 + RT)",
    example: {
      problem: "Find PW of ₹1,320 due 2 years at 10% p.a.",
      solution: "RT = 20. PW = 1320 × 100 / 120 = ₹1100. Done — no subtraction step needed.",
    },
    timeSaved: "~20s vs computing TD first and subtracting",
  },
  {
    id: "td-trick-02",
    topic: "true-discount",
    type: "formula-shortcut",
    title: "TD Directly Without PW",
    description:
      "Compute True Discount in one shot: multiply amount by (RT) then divide by (100 + RT). Skip computing PW entirely.",
    formula: "TD = (A × R × T) / (100 + R × T)",
    example: {
      problem: "Find TD on ₹1200 due 2 years at 10% p.a.",
      solution: "TD = 1200 × 10 × 2 / (100 + 20) = 24000 / 120 = ₹200",
    },
    timeSaved: "~30s vs computing PW and then subtracting from A",
  },
  {
    id: "td-trick-03",
    topic: "true-discount",
    type: "mental-math",
    title: "SI/TD = A/PW Ratio Trick",
    description:
      "The ratio of Simple Interest (on amount A) to True Discount equals A/PW. Use cross-multiplication to find unknowns when any two of SI, TD, A, PW are given.",
    formula: "SI / TD = A / PW",
    example: {
      problem: "SI on a sum for 2 years at 10% is ₹240. Amount = ₹1200. Find TD.",
      solution: "SI/TD = A/PW → PW = A − TD. Also TD = A × RT/(100+RT) = 1200×20/120 = ₹200. Verify: SI = PW×RT/100 = 1000×20/100 = ₹200 = TD ✓",
    },
    timeSaved: "~25s when checking or bridging between SI and TD",
  },
  {
    id: "td-trick-04",
    topic: "true-discount",
    type: "formula-shortcut",
    title: "Find Rate from TD and PW",
    description:
      "Since TD = SI on PW, rearrange the SI formula: R = TD × 100 / (PW × T). Use this whenever rate is the unknown.",
    formula: "R = (TD × 100) / (PW × T)",
    example: {
      problem: "PW = ₹800, TD = ₹80, T = 2 years. Find R.",
      solution: "R = 80 × 100 / (800 × 2) = 8000 / 1600 = 5%",
    },
    timeSaved: "~20s vs re-deriving from PW formula",
  },
  {
    id: "td-trick-05",
    topic: "true-discount",
    type: "formula-shortcut",
    title: "Banker's Gain from BD and TD",
    description:
      "When Banker's Discount (BD) and True Discount (TD) are both given, find the face value (Amount) using the ratio BD/TD = A/PW and the fact that A − PW = TD.",
    formula: "A = TD × BD / (BD − TD)   |   (derive from BD/TD = A/PW and PW = A − TD)",
    example: {
      problem: "BD = ₹100, TD = ₹80. Find the sum due (A).",
      solution: "BD/TD = A/PW → 100/80 = A/(A−80) → 100A − 8000 = 80A → 20A = 8000 → A = ₹400",
    },
    timeSaved: "~40s vs setting up simultaneous equations from scratch",
  },
]
