import type { QuantTrick } from "@/types/quant"

export const racesGamesTricks: QuantTrick[] = [
  {
    id: "rg-trick-01",
    topic: "races-games",
    type: "formula-shortcut",
    title: "Speed Ratio from Beat Distance",
    description:
      "Never compute individual speeds. When A beats B by x metres in a race of L metres, write the speed ratio as L : (L−x) directly. All further calculations flow from this single ratio.",
    formula: "S_A : S_B = L : (L − x)",
    example: {
      problem: "In a 500m race, A beats B by 50m. Find speed ratio.",
      solution: "S_A : S_B = 500 : 450 = 10 : 9. Done — no time or individual speed needed.",
    },
    timeSaved: "~25s vs computing individual speeds",
  },
  {
    id: "rg-trick-02",
    topic: "races-games",
    type: "mental-math",
    title: "Head Start = Dead Heat Test",
    description:
      "If A beats B by x metres in a race of L, then giving B exactly an x-metre head start results in a dead heat (both finish simultaneously). Any head start > x means B wins; head start < x means A still wins.",
    example: {
      problem: "In a 100m race, A beats B by 10m. If B gets a 10m head start, who wins?",
      solution: "A covers 100m while B covers 90m. With 10m head start, B travels 90m total distance — exact dead heat. Neither wins.",
    },
    timeSaved: "~30s vs computing finish times for both",
  },
  {
    id: "rg-trick-03",
    topic: "races-games",
    type: "formula-shortcut",
    title: "Three-Runner Gap: Multiply the Fractions",
    description:
      "When A beats B by x in L, and B beats C by y in L, find A's margin over C by: distance C covers when A finishes = L × (L−x)/L × (L−y)/L. Margin = L minus that distance.",
    formula: "C's position when A finishes = (L−x)(L−y) / L   |   A beats C by = L − (L−x)(L−y)/L",
    example: {
      problem: "In a 1000m race, A beats B by 100m and B beats C by 100m. By how much does A beat C?",
      solution: "C's position = 1000 × (900/1000) × (900/1000) = 810m. A beats C by 190m.",
    },
    timeSaved: "~40s vs tracking each ratio step by step",
  },
  {
    id: "rg-trick-04",
    topic: "races-games",
    type: "mental-math",
    title: "Games of Skill — Treat Points as Distance",
    description:
      "In 'A gives B p points in a game of n', treat it exactly like a race: when A covers n points, B covers n−p. Chain two game ratios the same way you chain two race distances.",
    example: {
      problem: "A gives B 20 points in 100. B gives C 10 points in 100. How many points can A give C in 100?",
      solution: "A:B = 100:80. When A scores 100, B scores 80. B:C = 100:90. When B scores 80, C scores 80×90/100 = 72. A gives C 28 points.",
    },
    timeSaved: "~35s vs building separate ratio chains",
  },
  {
    id: "rg-trick-05",
    topic: "races-games",
    type: "formula-shortcut",
    title: "Beat in Time → Distance Advantage",
    description:
      "If A beats B by t seconds in a race of L metres, the distance advantage equals B's speed × t seconds. First find B's speed from the total time, then multiply by t to get the equivalent distance margin.",
    formula: "Distance equivalent = S_B × t   where S_B = L / T_B",
    example: {
      problem: "A finishes a 200m race in 40s. B finishes in 50s. What is A's distance advantage at the moment A finishes?",
      solution: "B's speed = 200/50 = 4 m/s. A beats B by 10s. Distance advantage = 4 × 10 = 40m.",
    },
    timeSaved: "~20s vs computing both distances separately",
  },
]
