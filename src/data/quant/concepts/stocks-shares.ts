import type { QuantConcept } from "@/types/quant"

export const stocksSharesConcept: QuantConcept = {
  topic: "stocks-shares",
  title: "Stocks & Shares",
  description:
    "Stocks and shares problems involve computing dividend income, yield percentage, and comparing investments. Dividend is always calculated on face value (typically ₹100), while yield is calculated on the market price at which the stock is purchased.",
  keyIdea:
    "Dividend is on face value (usually ₹100). Yield is on market price. Invest in the stock with higher yield for the same dividend %, meaning lower market price gives higher yield.",
  formulas: [
    {
      name: "Annual income",
      formula: "Income = (Dividend% × Face Value) / 100",
      whenToUse: "Dividend earned on stock investment",
    },
    {
      name: "Yield/Return",
      formula: "Yield% = (Annual income / Market price) × 100",
      whenToUse: "Return on investment at market price",
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
