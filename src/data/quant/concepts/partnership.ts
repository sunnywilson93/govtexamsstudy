import type { QuantConcept } from "@/types/quant"

export const partnershipConcept: QuantConcept = {
  topic: "partnership",
  title: "Partnership",
  description:
    "Partnership problems involve two or more people who invest capital in a business and share the resulting profit (or loss). The key principle is that profit is divided in proportion to each partner's equivalent capital — the product of investment and time.",
  keyIdea:
    "Profit is split in ratio of equivalent capital (investment × time). Simple partnership: same duration → use capital only. Compound partnership: different durations → multiply capital × months.",
  formulas: [
    {
      name: "Simple Partnership Ratio",
      formula: "Profit ratio = Investment_A : Investment_B",
      whenToUse: "When all partners invest for equal time periods.",
    },
    {
      name: "Compound Partnership",
      formula: "Equivalent capital = Investment × Time (months)",
      whenToUse: "When partners invest for different durations.",
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
