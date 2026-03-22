import type { QuantConcept } from "@/types/quant"

export const stocksSharesConcept: QuantConcept = {
  topic: "stocks-shares",
  title: "Stocks & Shares",
  description:
    "Stocks and shares questions ask you to compute dividend income, compare yields, and decide which investment pays more. Remember that dividend always applies to face value (usually \\u20b9100), not market price. Banking exams test this distinction directly, so locking the face-value vs. market-price split eliminates the most common trap.",
  keyIdea:
    "Dividend is on face value (usually ₹100). Yield is on market price. Invest in the stock with higher yield for the same dividend %, meaning lower market price gives higher yield.",
  formulas: [
    {
      name: "Annual income",
      formula: "Income = (Dividend% × Face Value) / 100",
      whenToUse: "Calculate the annual dividend earned by multiplying the dividend rate by face value.",
    },
    {
      name: "Yield/Return",
      formula: "Yield% = (Annual income / Market price) × 100",
      whenToUse: "Find the actual return percentage based on what you paid (market price), not face value.",
    },
    {
      name: "Investment",
      formula: "Investment = Number of shares × Market price",
      whenToUse: "Total cost to buy shares",
    },
    {
      name: "Number of shares",
      formula: "Shares = Investment / Market price",
      whenToUse: "Shares purchasable with given investment",
    },
    {
      name: "With brokerage",
      formula:
        "Buy: cost = market price × (1 + brokerage%/100); Sell: price = market price × (1 − brokerage%/100)",
      whenToUse: "Adjusting for broker commission",
    },
  ],
  examTags: ["IBPS PO", "SBI PO", "IBPS Clerk", "SSC CGL", "RRB NTPC"],
  examRelevance:
    "1–2 questions in banking and SSC exams. Tests: compute dividend income, find yield percentage, compare investments, or determine number of shares that can be bought.",
}
