import type { QuantConcept } from "@/types/quant"

export const bankersDiscountConcept: QuantConcept = {
  topic: "bankers-discount",
  title: "Banker's Discount",
  description:
    "Banker's Discount (BD) is the Simple Interest on the face value (amount due) for the unexpired time of a bill, as charged by a bank. Unlike True Discount (which is SI on Present Worth), BD is always larger than TD for the same bill. The difference between them is the Banker's Gain (BG).",
  keyIdea:
    "BD is calculated on the face value A; TD is calculated on the present worth PW. Since A > PW, BD > TD always. The Banker's Gain (BG = BD − TD) represents the banker's extra profit. Key relation: BD × PW = TD × A, which enables solving most problems without computing rate/time explicitly.",
  formulas: [
    {
      name: "Banker's Discount",
      formula: "BD = (A × R × T) / 100",
      whenToUse:
        "To find the discount a banker charges on a bill of face value A due T years hence at rate R%. This is simply SI on A.",
    },
    {
      name: "Banker's Gain",
      formula: "BG = BD − TD   |   BG = SI on TD",
      whenToUse:
        "To find the extra profit the banker earns over the true discount. Also computable as Simple Interest on the True Discount itself.",
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
