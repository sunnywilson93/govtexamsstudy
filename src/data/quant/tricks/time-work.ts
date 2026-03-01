import type { QuantTrick } from "@/types/quant"

export const timeWorkTricks: QuantTrick[] = [
  {
    id: "tw-trick-01",
    topic: "time-work",
    type: "formula-shortcut",
    title: "Two-Person Combined Time",
    description: "Find combined time for two people working together without computing each rate separately.",
    formula: "Combined time = (A × B) / (A + B)  where A and B are individual days",
    example: {
      problem: "A finishes in 12 days, B in 18 days. Together?",
      solution: "(12 × 18) / (12 + 18) = 216 / 30 = 7.2 days",
    },
    timeSaved: "~30s vs rate addition",
  },
  {
    id: "tw-trick-02",
    topic: "time-work",
    type: "formula-shortcut",
    title: "LCM Method (Integer Work)",
    description: "Assume total work = LCM of all given days. Each worker's daily work becomes an integer — no fractions.",
    example: {
      problem: "A: 6 days, B: 8 days, C: 12 days. Together?",
      solution: "LCM = 24. A=4, B=3, C=2 units/day. Combined = 9 units/day. Time = 24/9 = 2⅔ days",
    },
    timeSaved: "~45s vs fraction addition",
  },
  {
    id: "tw-trick-03",
    topic: "time-work",
    type: "formula-shortcut",
    title: "Efficiency Shortcut",
    description: "If A is k times as efficient as B, A takes (1/k) the time. Together = B's time × k/(k+1).",
    formula: "Together = B_days × k / (k + 1)",
    example: {
      problem: "A is 3 times as efficient as B. B alone takes 24 days. Together?",
      solution: "Together = 24 × 3 / (3+1) = 72/4 = 18 days",
    },
    timeSaved: "~30s vs ratio working",
  },
  {
    id: "tw-trick-04",
    topic: "time-work",
    type: "formula-shortcut",
    title: "One Leaves Early — Phase Split",
    description: "Split work into two phases: phase 1 (both work), phase 2 (one works alone). Avoid equations with fractions.",
    example: {
      problem: "A and B together finish in 10 days. A works 4 days then leaves; B finishes alone in 20 more days. Find A's individual time.",
      solution: "Work by A in 4 days = 4/A; work by B in 20 days = 20/B; 4/A + 20/B = 1; also 1/A + 1/B = 1/10; solve to get A's time",
    },
    timeSaved: "~20s vs algebraic equation setup",
  },
  {
    id: "tw-trick-05",
    topic: "time-work",
    type: "mental-math",
    title: "Pipe Net Fill Sign Check",
    description: "Before computing net fill time, verify drain time > fill time (otherwise tank never fills and answer is 'never').",
    formula: "Net fill time = (F × D) / (D − F)  — only valid when D > F",
    example: {
      problem: "Pipe fills in 6h; drain empties in 4h. Both open?",
      solution: "D(4) < F(6) → drain is faster → tank empties, never fills",
    },
    timeSaved: "Avoids computing a meaningless answer",
  },
]
