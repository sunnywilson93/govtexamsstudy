import type { QuantTrick } from "@/types/quant"

export const partnershipTricks: QuantTrick[] = [
  {
    id: "partnership-trick-01",
    topic: "partnership",
    type: "formula-shortcut",
    title: "Simple Partnership Shortcut",
    description:
      "If all partners invest for the same duration, profit ratio equals investment ratio directly. No time calculation needed.",
    formula: "Profit ratio = C_A : C_B (for equal time)",
    example: {
      problem: "A invests ₹12,000 and B invests ₹18,000 for the same period. Total profit ₹15,000. Find A's share.",
      solution: "Ratio = 12:18 = 2:3. A's share = 15000 × 2/5 = ₹6,000.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "partnership-trick-02",
    topic: "partnership",
    type: "formula-shortcut",
    title: "Equivalent Capital Formula",
    description:
      "For compound partnership: multiply each investment by its duration in months. The resulting products form the profit-sharing ratio.",
    formula: "Equiv. Capital = Investment × Months",
    example: {
      problem: "A invests ₹10,000 for 8 months, B invests ₹15,000 for 4 months. Find profit ratio.",
      solution: "A: 10000 × 8 = 80000; B: 15000 × 4 = 60000. Ratio = 80000:60000 = 4:3.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "partnership-trick-03",
    topic: "partnership",
    type: "mental-math",
    title: "Backwards from Share",
    description:
      "If you know one partner's profit and the ratio, find total profit by scaling. Partner's share ÷ his ratio part × total ratio parts = Total profit.",
    example: {
      problem: "A and B share profit in 3:5. A's share is ₹9,000. Find total profit and B's share.",
      solution: "Total profit = 9000/3 × 8 = ₹24,000. B's share = 24000 × 5/8 = ₹15,000.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "partnership-trick-04",
    topic: "partnership",
    type: "formula-shortcut",
    title: "Working Partner Deduction",
    description:
      "Working partner gets monthly salary first. Deduct salary × 12 from total profit. Split remainder by capital ratio. Add salary back to working partner's final amount.",
    formula: "Remaining profit = Total − (monthly salary × 12)",
    example: {
      problem:
        "A (working, ₹1,000/month) and B (sleeping) each invest ₹25,000. Total profit ₹42,000. Find A's total income.",
      solution:
        "A's salary = 1000×12 = 12,000. Remaining = 42000 − 12000 = 30,000. Split 1:1 → each gets 15,000. A total = 12000 + 15000 = ₹27,000.",
    },
    timeSaved: "30 seconds",
  },
  {
    id: "partnership-trick-05",
    topic: "partnership",
    type: "formula-shortcut",
    title: "New Partner Mid-Year",
    description:
      "If a partner joins partway through the year, count only the months they were invested. Multiply investment × months for equivalent capital, then find ratio.",
    formula: "A's months = full year; B's months = (12 − joining month + 1)",
    example: {
      problem:
        "A starts business with ₹50,000. B joins after 4 months with ₹60,000. Annual profit ₹43,600. Find each share.",
      solution:
        "A: 50000×12 = 600000; B: 60000×8 = 480000. Ratio = 600:480 = 5:4. A's share = 43600×5/9 = ₹24,222. B = ₹19,378.",
    },
    timeSaved: "25 seconds",
  },
]
