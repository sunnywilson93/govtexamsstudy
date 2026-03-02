import type { QuantTrick } from "@/types/quant"

export const bankersDiscountTricks: QuantTrick[] = [
  {
    id: "bd-trick-01",
    topic: "bankers-discount",
    type: "formula-shortcut",
    title: "Find TD Instantly from BD and BG",
    description:
      "When Banker's Discount and Banker's Gain are given, True Discount = BD − BG. No formula manipulation required — it is a direct subtraction.",
    formula: "TD = BD − BG",
    example: {
      problem: "BD = ₹125, BG = ₹25. Find True Discount.",
      solution: "TD = 125 − 25 = ₹100. (Also: A = BD × TD / BG = 125 × 100 / 25 = ₹500)",
    },
    timeSaved: "~30s vs using rate/time approach",
  },
  {
    id: "bd-trick-02",
    topic: "bankers-discount",
    type: "formula-shortcut",
    title: "Find Face Value from BD and TD",
    description:
      "Use the cross-relation BD/TD = A/PW along with A − PW = TD. Derive A = TD × BD / (BD − TD). Clean single-step formula when BD and TD are known.",
    formula: "A = (BD × TD) / (BD − TD)  — equivalently A = BD × TD / BG",
    example: {
      problem: "BD = ₹100, TD = ₹80. Find sum due.",
      solution: "BG = 100 − 80 = 20. A = 100 × 80 / 20 = 8000 / 20 = ₹400",
    },
    timeSaved: "~40s vs setting up ratio equations manually",
  },
  {
    id: "bd-trick-03",
    topic: "bankers-discount",
    type: "mental-math",
    title: "BD > TD Always — Use to Check Answers",
    description:
      "Banker's Discount is always greater than True Discount for the same bill. If your computed TD ≥ BD, you have made an error. Use this as a quick sanity check.",
    example: {
      problem: "BD = ₹50, and you computed TD = ₹55. Is this correct?",
      solution: "No. TD must be less than BD always. Recheck the computation — a sign or formula error is present.",
    },
    timeSaved: "~60s by catching errors before full re-work",
  },
  {
    id: "bd-trick-04",
    topic: "bankers-discount",
    type: "formula-shortcut",
    title: "Find A Directly from BD and Rate/Time",
    description:
      "BD is simply SI on face value A. Rearrange the SI formula: A = BD × 100 / (R × T). Use this to find the face value of a bill when rate, time, and BD are given.",
    formula: "A = (BD × 100) / (R × T)",
    example: {
      problem: "BD on a bill at 5% for 2 years is ₹1000. Find the face value.",
      solution: "A = 1000 × 100 / (5 × 2) = 100000 / 10 = ₹10,000",
    },
    timeSaved: "~20s vs working from SI formula and rearranging",
  },
  {
    id: "bd-trick-05",
    topic: "bankers-discount",
    type: "formula-shortcut",
    title: "BG = TD² / PW (Geometric Mean Relation)",
    description:
      "Banker's Gain equals TD squared divided by PW. Equivalently, TD is the geometric mean of PW and BG: TD² = PW × BG. Use when BG and PW are given to find TD without computing BD.",
    formula: "BG = TD² / PW   |   TD = √(PW × BG)",
    example: {
      problem: "PW = ₹400, BG = ₹1. Find TD.",
      solution: "TD = √(400 × 1) = √400 = ₹20. Verify: BG = TD²/PW = 400/400 = ₹1 ✓",
    },
    timeSaved: "~35s vs computing BD then subtracting",
  },
]
