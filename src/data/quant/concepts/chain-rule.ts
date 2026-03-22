import type { QuantConcept } from "@/types/quant"

export const chainRuleConcept: QuantConcept = {
  topic: "chain-rule",
  title: "Chain Rule / Direct & Inverse Proportion",
  description:
    "Link multiple quantities through direct and inverse proportion by finding the value of one unit first, then scaling. SSC and RRB papers test 2\\u20133 chain-rule questions per exam, often combining work, speed, and cost in a single problem. Classify each relationship as direct or inverse before setting up the fraction chain.",
  keyIdea:
    "Classify each relationship as Direct (same direction) or Inverse (opposite direction). Then multiply the ratio for Direct, invert and multiply for Inverse.",
  formulas: [
    {
      name: "Unitary method",
      formula: "Value of n units = (Value of 1 unit) × n",
      whenToUse: "Divide total value by total units to get the per-unit rate, then multiply by the required number of units",
    },
    {
      name: "Direct proportion",
      formula: "A₁/A₂ = B₁/B₂ → B₂ = B₁ × (A₂/A₁)",
      whenToUse: "Apply when both quantities increase or decrease together \\u2014 more workers produce more output, more hours cover more distance",
    },
    {
      name: "Inverse proportion",
      formula: "A₁ × B₁ = A₂ × B₂ → B₂ = B₁ × (A₁/A₂)",
      whenToUse: "When quantities vary inversely",
    },
    {
      name: "Chain rule",
      formula: "Required = given × (D₁/D₂) × (I₂/I₁) × ...",
      whenToUse: "For multi-variable proportion problems",
    },
    {
      name: "Work-men-days",
      formula: "M₁ × D₁ × H₁ = M₂ × D₂ × H₂",
      whenToUse: "When workers, days, and hours are all varying",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "SSC MTS"],
  examRelevance:
    "2–3 questions per exam in SSC and RRB. Tests unitary method, direct/inverse proportion, and multi-variable chain. Common in work, speed, and cost problems.",
}
