import type { QuantTrick } from "@/types/quant"

export const tsdTricks: QuantTrick[] = [
  {
    id: "tsd-trick-01",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Average Speed for Equal Distances",
    description: "When the same distance is covered at two different speeds, use harmonic mean — never average the speeds.",
    formula: "Avg Speed = 2 × S1 × S2 / (S1 + S2)",
    example: {
      problem: "A travels Delhi→Agra at 60 km/h and returns at 40 km/h. Find average speed.",
      solution: "2×60×40 / (60+40) = 4800/100 = 48 km/h",
    },
    timeSaved: "~30s vs computing total distance and time",
  },
  {
    id: "tsd-trick-02",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Train Crossing — One Formula",
    description: "Crossing a pole/person: distance = train length. Crossing platform: distance = train + platform. Crossing train: use relative speed.",
    formula: "Time = (L_train + L_obstacle) / Relative Speed",
    example: {
      problem: "Train 200m long at 72 km/h crosses 300m platform. Time?",
      solution: "Speed = 72×5/18 = 20 m/s; Time = (200+300)/20 = 25s",
    },
    timeSaved: "~20s vs unit conversion errors",
  },
  {
    id: "tsd-trick-03",
    topic: "time-speed-distance",
    type: "mental-math",
    title: "Unit Conversion — km/h to m/s",
    description: "Memorise the conversion factor to switch units in one step instead of deriving.",
    formula: "km/h × 5/18 = m/s  |  m/s × 18/5 = km/h",
    example: {
      problem: "Convert 90 km/h to m/s.",
      solution: "90 × 5/18 = 25 m/s (instant)",
    },
    timeSaved: "~15s per conversion",
  },
  {
    id: "tsd-trick-04",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Boats — Speed from Downstream/Upstream",
    description: "Extract boat speed and stream speed directly from downstream and upstream values.",
    formula: "Boat speed = (Downstream + Upstream) / 2  |  Stream = (Downstream − Upstream) / 2",
    example: {
      problem: "Downstream speed 15 km/h, upstream 9 km/h. Find boat speed in still water.",
      solution: "(15+9)/2 = 12 km/h",
    },
    timeSaved: "~25s vs equation setup",
  },
  {
    id: "tsd-trick-05",
    topic: "time-speed-distance",
    type: "formula-shortcut",
    title: "Race — Speed Ratio from Head Start",
    description: "Express the race result as a ratio of speeds instead of computing actual speeds.",
    formula: "Speed ratio = Race distance : (Race distance − head start given)",
    example: {
      problem: "A beats B by 20m in a 200m race. Ratio of speeds?",
      solution: "A : B = 200 : 180 = 10 : 9",
    },
    timeSaved: "~30s vs solving for individual speeds",
  },
]
