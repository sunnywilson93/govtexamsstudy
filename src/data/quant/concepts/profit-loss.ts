import type { QuantConcept } from "@/types/quant"

export const profitLossConcept: QuantConcept = {
  topic: "profit-loss",
  title: "Profit, Loss & Discount",
  description:
    "Profit and Loss problems involve buying and selling goods. The base is always the Cost Price (CP). Marked Price (MP) is the labelled price; Selling Price (SP) is what the buyer actually pays after any discount.",
  keyIdea:
    "Profit% and Loss% are always calculated on Cost Price (CP) — never on Selling Price or Marked Price.",
  formulas: [
    {
      name: "Profit / Loss Percentage",
      formula: "P% or L% = (Profit or Loss / CP) × 100",
      whenToUse: "To find what percentage of profit or loss was made on the cost price.",
    },
    {
      name: "Selling Price from CP and P%",
      formula: "SP = CP × (100 + P%) / 100",
      whenToUse: "To find SP when CP and profit percentage are known.",
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
