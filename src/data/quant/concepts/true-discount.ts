import type { QuantConcept } from "@/types/quant"

export const trueDiscountConcept: QuantConcept = {
  topic: "true-discount",
  title: "True Discount",
  description:
    "True Discount represents the fair deduction on a future sum, calculated on the present worth rather than the face value. This distinction from Banker\\u2019s Discount is the core trap examiners exploit. SSC CGL Tier 2 and IBPS PO both test TD\\u2013PW\\u2013rate triangles, so drilling the direct formula PW = (A \\u00d7 100)/(100 + RT) lets you skip intermediate steps entirely.",
  keyIdea:
    "Present Worth is what you'd pay today to settle a future debt. True Discount = Amount − PW. The formula PW = (A × 100) / (100 + R × T) removes the need to compute TD and PW separately.",
  formulas: [
    {
      name: "Present Worth",
      formula: "PW = (A × 100) / (100 + R × T)",
      whenToUse:
        "Convert a future amount to its present-day value at a given simple interest rate and time period.",
    },
    {
      name: "True Discount",
      formula: "TD = (A × R × T) / (100 + R × T)   |   or   TD = A − PW",
      whenToUse:
        "Compute the fair discount directly from face value, rate, and time without first calculating PW.",
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
