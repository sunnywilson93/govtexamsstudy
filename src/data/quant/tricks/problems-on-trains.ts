import type { QuantTrick } from "@/types/quant"

export const problemsOnTrainsTricks: QuantTrick[] = [
  {
    id: "tr-trick-01",
    topic: "problems-on-trains",
    type: "formula-shortcut",
    title: "km/h to m/s Conversion",
    description:
      "Multiply km/h by 5/18 to get m/s. Divide m/s by 5/18 (i.e. multiply by 18/5) to get km/h. Memorise this — train problems always mix km/h and metres.",
    formula: "m/s = km/h × (5/18); km/h = m/s × (18/5)",
    example: {
      problem: "Convert 72 km/h to m/s.",
      solution: "72 × 5/18 = 20 m/s.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "tr-trick-02",
    topic: "problems-on-trains",
    type: "formula-shortcut",
    title: "Pole Crossing = Train Length",
    description:
      "When a train crosses a pole, signal, or person standing still, the distance = only the length of the train. No other length added. Time = L_train / Speed.",
    example: {
      problem: "A 180m train passes a pole in 9 seconds. Find its speed.",
      solution: "Speed = 180/9 = 20 m/s = 20 × 18/5 = 72 km/h.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "tr-trick-03",
    topic: "problems-on-trains",
    type: "formula-shortcut",
    title: "Platform Length from Two Timings",
    description:
      "If a train's speed is known and two crossing times given (pole and platform), find platform length: L_platform = Speed × (t_platform − t_pole).",
    formula: "L_platform = Speed × (t_platform − t_pole)",
    example: {
      problem: "A train crosses a pole in 10s and a 200m platform in 20s. Find train length.",
      solution:
        "Let train length = L. L/speed = 10; (L+200)/speed = 20. Divide: (L+200)/L = 2 → L+200 = 2L → L = 200m.",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "tr-trick-04",
    topic: "problems-on-trains",
    type: "formula-shortcut",
    title: "Opposite Trains — Add Speeds",
    description:
      "Two trains coming towards each other: closing speed = S₁+S₂. Time to pass = (L₁+L₂)/(S₁+S₂). Remember: the total length of BOTH trains must be covered.",
    formula: "Time = (L₁ + L₂) / (S₁ + S₂)",
    example: {
      problem:
        "Train A (100m, 60 km/h) and Train B (80m, 40 km/h) approach each other. Time to cross?",
      solution:
        "Relative speed = 100 km/h = 250/9 m/s. Length = 180m. Time = 180/(250/9) = 180×9/250 = 6.48s.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "tr-trick-05",
    topic: "problems-on-trains",
    type: "mental-math",
    title: "Same Direction — Subtract Speeds",
    description:
      "Faster train overtaking slower train: relative speed = difference of speeds. Time for complete overtake = sum of both lengths / speed difference. Slower trains take much longer to pass.",
    formula: "Time = (L₁ + L₂) / (S₁ − S₂)",
    example: {
      problem: "Train A (150m, 90 km/h) overtaking Train B (100m, 60 km/h). Time?",
      solution:
        "Relative speed = 30 km/h = 25/3 m/s. Time = 250/(25/3) = 250×3/25 = 30 seconds.",
    },
    timeSaved: "20 seconds",
  },
]
