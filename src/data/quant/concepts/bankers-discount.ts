import type { QuantConcept } from "@/types/quant"

export const bankersDiscountConcept: QuantConcept = {
  topic: "bankers-discount",
  title: "Banker's Discount",
  description:
    "Banker\\u2019s Discount (BD) is the Simple Interest a bank charges on the face value of a bill for the unexpired period. BD always exceeds True Discount because it is computed on the larger face value, not the present worth. SSC CGL Tier II and SBI PO test 1\\u20132 BD problems per paper, usually asking you to find TD from BD and BG or to recover the face value.",
  keyIdea:
    "BD is calculated on the face value A; TD is calculated on the present worth PW. Since A > PW, BD > TD always. The Banker's Gain (BG = BD − TD) represents the banker's extra profit. Key relation: BD × PW = TD × A, which enables solving most problems without computing rate/time explicitly.",
  formulas: [
    {
      name: "Banker's Discount",
      formula: "BD = (A × R × T) / 100",
      whenToUse:
        "Calculate the discount charged on a bill of face value A due T years hence at rate R%. Treat it as straight SI on A.",
    },
    {
      name: "Banker's Gain",
      formula: "BG = BD − TD   |   BG = SI on TD",
      whenToUse:
        "Find the banker\\u2019s extra profit over the true discount. Compute it as SI on TD when TD and rate are known.",
    },
    {
      name: "BD and TD Cross-Relation",
      formula: "BD × PW = TD × A   |   BD / TD = A / PW",
      whenToUse:
        "When rate and time are unknown but BD, TD, or A/PW pairs are given. Derive any one quantity from the other three using cross-multiplication.",
    },
    {
      name: "Face Value from BD and BG",
      formula: "TD = BD − BG   |   A = BD² / (BD − TD)   simplifies to   A = BD² / BG  when BG = BD − TD is used carefully",
      whenToUse:
        "When BD and BG are given, first find TD = BD − BG, then find A from BD/TD = A/PW and A − PW = TD.",
    },
    {
      name: "BG from BD and Face Value",
      formula: "BG = BD² / (A + BD)   (derived from TD = BD × A / (A + BD) and BG = BD − TD)",
      whenToUse:
        "To find Banker's Gain directly when face value A and BD are known, without computing TD separately.",
    },
  ],
  examTags: ["SSC CGL", "SBI PO", "IBPS PO", "RRB NTPC"],
  examRelevance:
    "Banker's Discount is a dedicated topic in SSC CGL Tier II and SBI PO. Typically 1–2 problems per exam. High-frequency question types: find TD given BD and BG, find A given BD and TD, and find BG given sum and rate.",
}
