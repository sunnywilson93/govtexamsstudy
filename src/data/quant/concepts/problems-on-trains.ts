import type { QuantConcept } from "@/types/quant"

export const problemsOnTrainsConcept: QuantConcept = {
  topic: "problems-on-trains",
  title: "Problems on Trains",
  description:
    "Train problems are a specialised application of Time, Speed & Distance. The key insight is that a train has length — so the distance covered when crossing an object equals the train's length plus the object's length. Unit conversion between km/h and m/s is essential in every train problem.",
  keyIdea:
    "Distance = length of train + length of obstacle. Opposite directions: add speeds. Same direction: subtract speeds. Always match units — km/h to m/s using ×5/18.",
  formulas: [
    {
      name: "Cross pole/person",
      formula: "Time = Length of train / Speed of train",
      whenToUse: "When train crosses a stationary point",
    },
    {
      name: "Cross platform",
      formula: "Time = (L_train + L_platform) / Speed",
      whenToUse: "When train crosses a platform or bridge",
    },
    {
      name: "Opposite direction",
      formula: "Time to cross = (L₁ + L₂) / (S₁ + S₂)",
      whenToUse: "Two trains coming towards each other",
    },
    {
      name: "Same direction",
      formula: "Time to cross = (L₁ + L₂) / (S₁ − S₂)",
      whenToUse: "Faster train overtaking slower train",
    },
    {
      name: "Speed conversion",
      formula: "1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h",
      whenToUse: "Essential unit conversion for train problems",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO", "RRB Group D"],
  examRelevance:
    "2–4 questions per exam in SSC CGL Tier 1 and RRB exams. Train problems are among the most frequently asked TSD applications. Three types: pole, platform, two trains.",
}
