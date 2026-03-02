import type { MathProblem } from "@/types/quant"

export const racesGamesProblems: MathProblem[] = [
  {
    id: "rg-01",
    topic: "races-games",
    title: "Speed Ratio from Race",
    question:
      "In a 100m race, A beats B by 10m. Find the ratio of their speeds.",
    difficulty: "easy",
    answer: "10 : 9",
    steps: [
      {
        id: 1,
        operation: "Understand what 'beats by 10m' means",
        expression: "When A finishes 100m, B has run 100 − 10 = 90m",
        result: "A covers 100m, B covers 90m in the same time",
        explanation:
          "Both run for exactly the same duration — the time it takes A to finish. So the ratio of speeds equals the ratio of distances covered.",
        variables: { L: 100, margin: 10, B_distance: 90 },
      },
      {
        id: 2,
        operation: "Write speed ratio",
        expression: "S_A / S_B = 100 / 90",
        result: "S_A : S_B = 10 : 9",
        explanation: "Divide both by 10 to simplify the ratio.",
        variables: { ratio_A: 10, ratio_B: 9 },
      },
    ],
  },
  {
    id: "rg-02",
    topic: "races-games",
    title: "Beat by Time",
    question:
      "A runs 200m in 40 seconds. B runs the same 200m in 50 seconds. By how many metres does A beat B?",
    difficulty: "easy",
    answer: "40 metres",
    steps: [
      {
        id: 1,
        operation: "Find B's speed",
        expression: "S_B = 200 / 50 = 4 m/s",
        result: "B's speed = 4 m/s",
        explanation: "Speed = Distance / Time.",
        variables: { distance: 200, T_B: 50, S_B: 4 },
      },
      {
        id: 2,
        operation: "Find distance B covers when A finishes (at t = 40s)",
        expression: "Distance_B = S_B × T_A = 4 × 40",
        result: "160m",
        explanation: "When A finishes at 40 seconds, B has been running for only 40 seconds.",
        variables: { S_B: 4, T_A: 40, distance_B: 160 },
      },
      {
        id: 3,
        operation: "Compute margin",
        expression: "Margin = 200 − 160",
        result: "40 metres",
        explanation: "A beats B by 40 metres (B is 40m behind when A crosses the finish line).",
        variables: { margin: 40 },
      },
    ],
  },
  {
    id: "rg-03",
    topic: "races-games",
    title: "Head Start — Dead Heat",
    question:
      "In a 500m race, A beats B by 50m. If B is given a head start of 50m, what is the result?",
    difficulty: "medium",
    answer: "Dead heat — both finish together",
    steps: [
      {
        id: 1,
        operation: "Find speed ratio from the original race",
        expression: "S_A : S_B = 500 : (500 − 50) = 500 : 450 = 10 : 9",
        result: "S_A : S_B = 10 : 9",
        explanation: "When A covers 500m, B covers 450m in the same time.",
        variables: { L: 500, margin: 50, S_A: 10, S_B: 9 },
      },
      {
        id: 2,
        operation: "Apply head start — B needs only 450m now",
        expression: "B starts at 50m mark, needs to cover 500 − 50 = 450m",
        result: "B's effective race = 450m",
        explanation:
          "With a 50m head start, B only needs to travel 450m to finish.",
        variables: { B_effective: 450 },
      },
      {
        id: 3,
        operation: "Check distances covered in the same time",
        expression: "When A covers 500m, B covers (9/10) × 500 = 450m",
        result: "B covers exactly 450m — reaches the finish line simultaneously",
        explanation:
          "B's speed ratio means B covers 450m in the exact time A covers 500m. Combined with the 50m head start, B finishes at the same moment as A.",
        variables: { A_distance: 500, B_distance_covered: 450, B_head_start: 50, B_total: 500 },
      },
      {
        id: 4,
        operation: "Conclude",
        expression: "B's total position = 50 (head start) + 450 (covered) = 500m",
        result: "Dead heat",
        explanation:
          "A head start exactly equal to the original margin results in a dead heat.",
        variables: {},
      },
    ],
  },
  {
    id: "rg-04",
    topic: "races-games",
    title: "Three-Runner Race",
    question:
      "In a 1000m race, A beats B by 100m. In the same race, B beats C by 100m. By how many metres does A beat C?",
    difficulty: "medium",
    answer: "190 metres",
    steps: [
      {
        id: 1,
        operation: "When A finishes, find B's position",
        expression: "When A covers 1000m, B covers 1000 − 100 = 900m",
        result: "B is at 900m when A finishes",
        explanation: "A beats B by 100m means B has 100m still to run when A finishes.",
        variables: { A: 1000, B: 900 },
      },
      {
        id: 2,
        operation: "Find B:C speed ratio from B beating C",
        expression: "When B covers 1000m, C covers 1000 − 100 = 900m  →  S_B : S_C = 1000 : 900 = 10 : 9",
        result: "S_B : S_C = 10 : 9",
        explanation: "Same logic applied to the B vs C race.",
        variables: { S_B: 10, S_C: 9 },
      },
      {
        id: 3,
        operation: "Find C's position when A finishes (when B has run 900m)",
        expression: "C covers (9/10) × 900 = 810m in the same time B covers 900m",
        result: "C is at 810m when A finishes",
        explanation:
          "Use the B:C speed ratio. When B runs 900m, C runs 900 × (9/10) = 810m.",
        variables: { B_distance: 900, C_distance: 810 },
      },
      {
        id: 4,
        operation: "Compute A's margin over C",
        expression: "Margin = 1000 − 810",
        result: "190 metres",
        explanation:
          "A beats C by 190 metres (not 200m — the two margins are not simply additive because of the compounding effect).",
        variables: { margin: 190 },
      },
    ],
  },
  {
    id: "rg-05",
    topic: "races-games",
    title: "Chained Games of Skill",
    question:
      "In a game of 100, A can give B 20 points. In a game of 100, B can give C 10 points. In a game of 100, how many points can A give C?",
    difficulty: "hard",
    answer: "28 points",
    steps: [
      {
        id: 1,
        operation: "Find A:B scoring ratio",
        expression: "When A scores 100, B scores 100 − 20 = 80",
        result: "A : B = 100 : 80",
        explanation:
          "'A gives B 20 points in 100' means when A finishes 100, B has scored only 80. Treat scores like distances.",
        variables: { A_score: 100, B_score: 80 },
      },
      {
        id: 2,
        operation: "Find B:C scoring ratio",
        expression: "When B scores 100, C scores 100 − 10 = 90",
        result: "B : C = 100 : 90",
        explanation: "'B gives C 10 points in 100' similarly gives this ratio.",
        variables: { B_score_full: 100, C_score_full: 90 },
      },
      {
        id: 3,
        operation: "Find C's score when A scores 100",
        expression: "When A scores 100, B scores 80. When B scores 80, C scores 80 × (90/100) = 72",
        result: "C scores 72 when A scores 100",
        explanation:
          "Chain the two ratios: scale C's score proportionally to what B actually scores (80, not 100).",
        variables: { A: 100, B: 80, C: 72 },
      },
      {
        id: 4,
        operation: "Find points A gives C",
        expression: "Points A gives C = 100 − 72",
        result: "28 points",
        explanation:
          "In a game of 100, A can give C 28 points. Note: this is less than 20 + 10 = 30 because the margins compound, not add.",
        variables: { points_given: 28 },
      },
    ],
  },
]
