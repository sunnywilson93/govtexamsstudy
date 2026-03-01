import type { QuantTrick } from "@/types/quant"

export const ratioTricks: QuantTrick[] = [
  {
    id: "ratio-trick-01",
    topic: "ratio",
    type: "formula-shortcut",
    title: "k-Method (Scale Factor)",
    description: "Set ratio terms as multiples of k; use the given total to find k, then compute parts directly.",
    example: {
      problem: "A and B share ₹1200 in ratio 3:5. Find A's share.",
      solution: "Parts = 3k and 5k; 8k = 1200; k = 150; A = 3×150 = ₹450",
    },
    timeSaved: "~20s vs fraction computation",
  },
  {
    id: "ratio-trick-02",
    topic: "ratio",
    type: "mental-math",
    title: "Cross-Multiply to Compare Ratios",
    description: "Compare a/b vs c/d by cross-multiplying: if ad > bc then a/b > c/d — no decimal needed.",
    example: {
      problem: "Which is larger: 7/9 or 8/11?",
      solution: "7×11 = 77 vs 8×9 = 72; 77 > 72 so 7/9 > 8/11",
    },
    timeSaved: "~15s vs converting to decimals",
  },
  {
    id: "ratio-trick-03",
    topic: "ratio",
    type: "formula-shortcut",
    title: "Mean and Third Proportion",
    description: "Find mean proportional of a and b = √(ab). Third proportion = b²/a.",
    formula: "Mean proportion = √(a × b)  |  Third proportion = b² / a",
    example: {
      problem: "Find mean proportion of 4 and 25.",
      solution: "√(4 × 25) = √100 = 10",
    },
    timeSaved: "~25s vs proportion equation setup",
  },
  {
    id: "ratio-trick-04",
    topic: "ratio",
    type: "formula-shortcut",
    title: "Age Ratio After n Years",
    description: "If ages are in ratio a:b now, set them as ak and bk; add n years to both; equate new ratio.",
    example: {
      problem: "Ages in ratio 3:4. After 5 years, ratio is 4:5. Find current ages.",
      solution: "3k+5 / 4k+5 = 4/5 → 15k+25 = 16k+20 → k=5; ages 15 and 20",
    },
    timeSaved: "~30s vs two-variable equations",
  },
  {
    id: "ratio-trick-05",
    topic: "ratio",
    type: "mental-math",
    title: "Equivalent Ratio by Scaling",
    description: "Scale both terms of a ratio to match a given absolute value without division.",
    example: {
      problem: "Ratio 3:5. First part is 12. Find second part.",
      solution: "3×? = 12 → ×4; second = 5×4 = 20",
    },
    timeSaved: "~15s vs fraction setup",
  },
]
