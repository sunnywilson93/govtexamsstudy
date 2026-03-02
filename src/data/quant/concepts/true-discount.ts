import type { QuantConcept } from "@/types/quant"

export const trueDiscountConcept: QuantConcept = {
  topic: "true-discount",
  title: "True Discount",
  description:
    "True Discount (TD) is the difference between the face value (amount due in the future) and its Present Worth (PW) today. Unlike banker's discount, true discount is the fair reduction — calculated on the present worth, not the face value. Understanding this distinction is critical for TD vs BD questions.",
  keyIdea:
    "Present Worth is what you'd pay today to settle a future debt. True Discount = Amount − PW. The formula PW = (A × 100) / (100 + R × T) removes the need to compute TD and PW separately.",
  formulas: [
    {
      name: "Present Worth",
      formula: "PW = (A × 100) / (100 + R × T)",
      whenToUse:
        "To find the equivalent value today of a sum due in the future at simple interest rate R% for T years.",
    },
    {
      name: "True Discount",
      formula: "TD = (A × R × T) / (100 + R × T)   |   or   TD = A − PW",
      whenToUse:
        "To find the discount (reduction) on a future sum. Use the direct formula when PW is not yet computed.",
    },
    {
      name: "Rate from TD and PW",
      formula: "R = (TD × 100) / (PW × T)",
      whenToUse:
        "When TD and PW are given and rate needs to be found. Derived by rearranging SI = PRT/100 since TD = SI on PW.",
    },
    {
      name: "TD and SI Relation",
      formula: "SI on PW = TD   |   SI on A > TD   |   SI/TD = A/PW",
      whenToUse:
        "Key insight: True Discount equals the Simple Interest on the Present Worth (not on A). Use the ratio SI/TD = A/PW to find unknowns when SI and TD are both mentioned.",
    },
    {
      name: "Banker's Gain (BG)",
      formula: "BG = SI on TD = BD − TD   |   BD = SI on A",
      whenToUse:
        "When a question mixes banker's discount with true discount. BG is the extra amount a banker earns over the true discount.",
    },
  ],
  examTags: ["SSC CGL", "IBPS PO", "SBI PO", "RRB NTPC"],
  examRelevance:
    "True Discount appears in SSC CGL Tier II and IBPS PO quantitative aptitude sections. Questions typically ask for PW, TD, or rate given two of the three. Banker's Discount problems (which build on TD) are a guaranteed 1–2 question topic in SBI PO pre-exam.",
}
