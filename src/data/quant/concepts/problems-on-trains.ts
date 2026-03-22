import type { QuantConcept } from "@/types/quant"

export const problemsOnTrainsConcept: QuantConcept = {
  topic: "problems-on-trains",
  title: "Problems on Trains",
  description:
    "Train problems apply TSD with one twist: a train has length, so the crossing distance equals train length plus obstacle length. SSC CGL Tier 1 and RRB exams carry 2\\u20134 train questions per paper across three types: pole, platform, and two-train crossings. Convert km/h to m/s (\\u00D75/18) before plugging into any formula \\u2014 unit mismatch is the most common error.",
  keyIdea:
    "Distance = length of train + length of obstacle. Opposite directions: add speeds. Same direction: subtract speeds. Always match units — km/h to m/s using ×5/18.",
  formulas: [
    {
      name: "Cross pole/person",
      formula: "Time = Length of train / Speed of train",
      whenToUse: "Use when a train passes a pole, signal post, or standing person \\u2014 the object has zero length, so distance equals the train\\u2019s own length.",
    },
    {
      name: "Cross platform",
      formula: "Time = (L_train + L_platform) / Speed",
      whenToUse: "Add the platform (or bridge) length to the train\\u2019s length to get total crossing distance, then divide by speed.",
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
