import type { QuantConcept } from "@/types/quant"

export const trigonometryConcept: QuantConcept = {
  topic: "trigonometry",
  title: "Trigonometry",
  description:
    "Trigonometry links angles to side lengths in a right triangle and branches into identity simplification and heights-and-distances word problems. SSC CGL Tier 1 carries 3\\u20135 questions while Tier 2 can go up to 10, making it the single highest-weighted quant sub-topic. Memorize the standard-value table and three Pythagorean identities \\u2014 they unlock nearly every exam question.",
  keyIdea:
    "SOHCAHTOA: sin=P/H, cos=B/H, tan=P/B. Memorise the standard value table for 0°–90° and the three Pythagorean identities — they unlock almost every exam question.",
  formulas: [
    {
      name: "Basic Ratios (SOHCAHTOA)",
      formula: "sin θ = P/H;  cos θ = B/H;  tan θ = P/B;  cosec θ = H/P;  sec θ = H/B;  cot θ = B/P",
      whenToUse: "Label the Perpendicular (P), Base (B), and Hypotenuse (H) first, then pick the ratio that connects the two known or needed sides.",
    },
    {
      name: "Standard Values Table",
      formula: "sin: 0°=0, 30°=½, 45°=1/√2, 60°=√3/2, 90°=1  |  cos: reverse of sin row  |  tan: 0°=0, 30°=1/√3, 45°=1, 60°=√3, 90°=∞",
      whenToUse: "Substitute the exact value the moment you see a specific standard angle in the expression.",
    },
    {
      name: "Pythagorean Identities",
      formula: "sin²θ + cos²θ = 1  |  1 + tan²θ = sec²θ  |  1 + cot²θ = cosec²θ",
      whenToUse: "Simplifying expressions and proving identities — convert any ratio to sin/cos then apply these.",
    },
    {
      name: "Complementary Angle Pairs",
      formula: "sin θ = cos(90°−θ)  |  tan θ = cot(90°−θ)  |  sec θ = cosec(90°−θ)",
      whenToUse: "When two angles in an expression add up to 90° — replace one ratio to create cancellable pairs.",
    },
    {
      name: "Heights and Distances",
      formula: "tan(angle of elevation) = height / horizontal distance  |  angle of depression = angle of elevation (alternate interior angles)",
      whenToUse: "Word problems with towers, poles, or observers looking up/down — draw a right triangle and apply tan.",
    },
  ],
  examTags: ["SSC CGL", "SSC CGL Tier 2", "SSC CHSL", "CDS", "RRB NTPC"],
  examRelevance:
    "Trigonometry carries 3–5 questions in SSC CGL Tier 1 and up to 10 in Tier 2; heights-and-distances and identity simplification are the most tested sub-types across all listed exams.",
}
