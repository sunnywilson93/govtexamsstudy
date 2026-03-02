import type { QuantConcept } from "@/types/quant"

export const racesGamesConcept: QuantConcept = {
  topic: "races-games",
  title: "Races & Games of Skill",
  description:
    "Races & Games questions test proportional reasoning about speeds, distances, and head starts. In a race, competitors cover the same distance in different times (or different distances in the same time). Games of skill (like billiards) follow the same ratio logic — 'A gives B n points in a game of 100' means when A scores 100, B scores 100−n.",
  keyIdea:
    "Speed ratio = Distance ratio (for equal time). If A beats B by x metres in a race of L metres, then when A finishes (L metres), B has run only L−x metres. So Speed_A / Speed_B = L / (L−x). All race and game problems reduce to this one ratio.",
  formulas: [
    {
      name: "Speed Ratio from Race Distance",
      formula: "S_A / S_B = L / (L − x)   where L = race length, x = margin A beats B by",
      whenToUse:
        "Whenever A beats B by a distance x in a race of L metres. Gives the speed ratio for any further comparisons.",
    },
    {
      name: "Beat by Time",
      formula: "S_A / S_B = T_B / T_A   |   Margin in time = T_B − T_A",
      whenToUse:
        "When competitors cover the same distance in different times. Ratio of speeds equals inverse ratio of times.",
    },
    {
      name: "Head Start Equivalence",
      formula: "With x-metre head start: B covers L−x metres while A covers L metres",
      whenToUse:
        "When B starts x metres ahead of A. B now needs L−x metres to finish. Compare distances using the established speed ratio to determine who wins.",
    },
    {
      name: "Three-Runner Transitivity",
      formula:
        "If A beats B by x in L, and B beats C by y in L, then when A finishes: B has run L−x, and C has run (L−x) × (L−y)/L",
      whenToUse:
        "In A vs B vs C problems. First find where B is when A finishes, then apply B's speed ratio to find where C is at that same moment.",
    },
    {
      name: "Games of Skill (Points)",
      formula:
        "A gives B p points in a game of n  →  when A scores n, B scores n−p  →  S_A / S_B = n / (n−p)",
      whenToUse:
        "In billiards or games problems. Treat 'points scored' exactly like 'distance covered'. Chain multiple game ratios the same way as three-runner race problems.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO"],
  examRelevance:
    "Races & Games is a guaranteed topic in SSC CGL Tier I (1 question) and appears in RRB NTPC. Common question types: three-runner transitivity, head start equivalence, and chaining game ratios across two rounds.",
}
