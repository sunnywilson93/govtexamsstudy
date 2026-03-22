import type { QuantConcept } from "@/types/quant"

export const profitLossConcept: QuantConcept = {
  topic: "profit-loss",
  title: "Profit, Loss & Discount",
  description:
    "Profit & Loss tests buying, selling, and discounting. Every SSC and banking paper carries P&L questions \\u2014 dishonest dealer and successive discount variants dominate SSC CGL Tier 2. Always calculate profit% and loss% on Cost Price, never on Selling Price or Marked Price. Master the CP\\u2013MP\\u2013SP chain: CP decides profit/loss, MP decides discount, SP is what the buyer pays.",
  keyIdea:
    "Profit% and Loss% are always calculated on Cost Price (CP) — never on Selling Price or Marked Price.",
  formulas: [
    {
      name: "Profit / Loss Percentage",
      formula: "P% or L% = (Profit or Loss / CP) × 100",
      whenToUse: "Divide profit (or loss) by CP and multiply by 100 \\u2014 never use SP as the base, even if the problem gives SP first.",
    },
    {
      name: "Selling Price from CP and P%",
      formula: "SP = CP × (100 + P%) / 100",
      whenToUse: "Compute the selling price directly from cost price and desired profit% \\u2014 use the multiplier (100 + P%)/100 to skip intermediate steps.",
    },
    {
      name: "Selling Price from CP and L%",
      formula: "SP = CP × (100 − L%) / 100",
      whenToUse: "To find SP when CP and loss percentage are known.",
    },
    {
      name: "SP after Discount on Marked Price",
      formula: "SP = MP × (100 − Discount%) / 100",
      whenToUse: "When a discount is applied to the marked price to get actual selling price.",
    },
    {
      name: "Faulty Weight Profit",
      formula: "Profit% = (True weight − False weight) / False weight × 100",
      whenToUse: "When a dishonest dealer uses a lighter weight to give less goods.",
    },
  ],
  examTags: ["SSC CGL", "SSC CGL Tier 2", "SSC CHSL", "IBPS PO", "IBPS Clerk", "SBI PO"],
  examRelevance:
    "Profit & Loss is present in virtually every SSC and banking exam. Dishonest dealer and successive discount variants are frequently tested in SSC CGL Tier 2.",
}
