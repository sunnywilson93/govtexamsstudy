import type { QuantConcept } from "@/types/quant"

export const chainRuleConcept: QuantConcept = {
  topic: "chain-rule",
  title: "Chain Rule / Direct & Inverse Proportion",
  description:
    "The chain rule links multiple quantities through direct and inverse proportion. Unitary method — finding the value of one unit first, then scaling — is the foundation of all chain rule problems. When more than two quantities are involved, classify each relationship as direct or inverse and set up a fraction chain.",
  keyIdea:
    "Classify each relationship as Direct (same direction) or Inverse (opposite direction). Then multiply the ratio for Direct, invert and multiply for Inverse.",
  formulas: [
    {
      name: "Unitary method",
      formula: "Value of n units = (Value of 1 unit) × n",
      whenToUse: "When value of one unit is known",
    },
    {
      name: "Direct proportion",
      formula: "A₁/A₂ = B₁/B₂ → B₂ = B₁ × (A₂/A₁)",
      whenToUse: "When quantities vary directly",
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
