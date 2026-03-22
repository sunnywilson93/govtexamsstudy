import type { QuantConcept } from "@/types/quant"

export const partnershipConcept: QuantConcept = {
  topic: "partnership",
  title: "Partnership",
  description:
    "Partnership problems split profit among investors in proportion to their equivalent capital (investment \\u00D7 time). SSC CGL and IBPS PO carry 2\\u20133 partnership questions per paper, often paired with ratio concepts. Compound partnership \\u2014 where partners join or leave at different times \\u2014 is the most tested variant. Always convert to monthly equivalent capital before computing the ratio.",
  keyIdea:
    "Profit is split in ratio of equivalent capital (investment × time). Simple partnership: same duration → use capital only. Compound partnership: different durations → multiply capital × months.",
  formulas: [
    {
      name: "Simple Partnership Ratio",
      formula: "Profit ratio = Investment_A : Investment_B",
      whenToUse: "Use directly when all partners invest for equal time \\u2014 time cancels out, so compare capital amounts alone.",
    },
    {
      name: "Compound Partnership",
      formula: "Equivalent capital = Investment × Time (months)",
      whenToUse: "Multiply each partner\\u2019s capital by the number of months they stayed invested, then compare the products to get the profit-sharing ratio.",
    },
    {
      name: "Profit Share",
      formula: "A's profit = Total Profit × (A's equiv. capital / Total equiv. capital)",
      whenToUse: "To find an individual partner's profit share from the total.",
    },
    {
      name: "Working Partner Salary",
      formula: "Remaining profit = Total profit − Working partner's salary; split remaining by capital ratio",
      whenToUse: "When a working partner receives a fixed monthly salary before the profit is split.",
    },
    {
      name: "New Partner Joining",
      formula: "A's months = months from start; B's months = (12 − joining month + 1)",
      whenToUse: "When a partner joins or leaves partway through the year.",
    },
  ],
  examTags: ["SSC CGL", "IBPS PO", "SBI PO", "SSC CHSL", "RRB NTPC"],
  examRelevance:
    "2–3 questions per paper in SSC CGL and IBPS PO. Tests both simple and compound partnership. Often paired with ratio questions.",
}
