import type { QuantTrick } from "@/types/quant"

export const stocksSharesTricks: QuantTrick[] = [
  {
    id: "ss-trick-01",
    topic: "stocks-shares",
    type: "formula-shortcut",
    title: "Annual Income Formula",
    description:
      "Income = (Dividend% / 100) × Face value per share × Number of shares. Since face value is usually ₹100, simplify: Income = Dividend% × number of shares.",
    formula: "Annual income = Dividend% × (Investment / Market price)",
    example: {
      problem: "Find annual income from investing ₹10,000 in 8% stock at ₹125.",
      solution: "Shares = 10000/125 = 80. Income = 8% × 100 × 80 = ₹640.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "ss-trick-02",
    topic: "stocks-shares",
    type: "formula-shortcut",
    title: "Yield Formula",
    description:
      "Yield = (Dividend per share / Market price) × 100. For face value ₹100 stock: Yield = Dividend% × 100 / Market price. Higher market price → lower yield.",
    formula: "Yield% = Dividend% × 100 / Market price",
    example: {
      problem: "Find yield on 9% stock at ₹120.",
      solution: "Yield = 9 × 100 / 120 = 900/120 = 7.5%.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "ss-trick-03",
    topic: "stocks-shares",
    type: "mental-math",
    title: "Compare Two Investments",
    description:
      "To compare two stocks, calculate yield for each. Higher yield = better investment. Or: compare income per ₹100 invested. Stock with higher dividend% relative to market price wins.",
    example: {
      problem: "Which is better: 8% stock at ₹160 or 9% stock at ₹180?",
      solution:
        "Yield A = 8×100/160 = 5%. Yield B = 9×100/180 = 5%. Both equal — same return.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "ss-trick-04",
    topic: "stocks-shares",
    type: "formula-shortcut",
    title: "Brokerage Adjustment",
    description:
      "When buying: add brokerage to market price (effective cost goes up). When selling: subtract brokerage from market price (effective receipt goes down). Always apply brokerage% to market price, not face value.",
    formula: "Effective buy price = Market price × (1 + brokerage/100)",
    example: {
      problem: "Buy 50 shares of stock at ₹200 with 2% brokerage. Find total investment.",
      solution: "Effective price = 200 × 1.02 = ₹204. Total = 204 × 50 = ₹10,200.",
    },
    timeSaved: "15 seconds",
  },
  {
    id: "ss-trick-05",
    topic: "stocks-shares",
    type: "formula-shortcut",
    title: "Find Shares from Income Target",
    description:
      "To find investment needed for target annual income: Investment = (Target income / Dividend%) × Market price. Or: Number of shares = Target income / (Dividend% × Face value / 100).",
    formula: "Number of shares = Target income / Annual income per share",
    example: {
      problem: "How many shares of 10% stock at ₹125 give annual income of ₹500?",
      solution:
        "Income per share = 10% of ₹100 = ₹10. Shares = 500/10 = 50 shares. Investment = 50 × 125 = ₹6,250.",
    },
    timeSaved: "20 seconds",
  },
]
