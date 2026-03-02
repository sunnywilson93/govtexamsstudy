import type { QuantTrick } from "@/types/quant"

export const boatsStreamsTricks: QuantTrick[] = [
  {
    id: "bs-trick-01",
    topic: "boats-streams",
    type: "formula-shortcut",
    title: "Still Water Speed = Average",
    description:
      "u = (Downstream + Upstream)/2. Stream speed = (Downstream − Upstream)/2. These two shortcuts avoid setting up simultaneous equations every time.",
    formula: "u = (D+U)/2; v = (D−U)/2",
    example: {
      problem: "A boat's downstream speed is 18 km/h and upstream speed is 12 km/h. Find still water speed.",
      solution: "u = (18+12)/2 = 15 km/h. v = (18−12)/2 = 3 km/h.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "bs-trick-02",
    topic: "boats-streams",
    type: "mental-math",
    title: "Same Distance, Time Ratio",
    description:
      "If downstream time is t₁ and upstream time is t₂ for the same distance: (u+v)/(u−v) = t₂/t₁. Use this to find ratio u:v without knowing distance.",
    formula: "(u+v)/(u−v) = t_upstream/t_downstream",
    example: {
      problem:
        "A boat takes 3 hours downstream and 5 hours upstream for the same distance. Find ratio of boat speed to stream speed.",
      solution:
        "(u+v)/(u−v) = 5/3. Cross multiply: 3u+3v = 5u−5v → 8v = 2u → u:v = 4:1.",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "bs-trick-03",
    topic: "boats-streams",
    type: "formula-shortcut",
    title: "Distance from Time and Speeds",
    description:
      "When given downstream time and upstream time for the SAME distance, calculate distance as: d = t_d × t_u × (u+v+u−v) / (t_d + t_u). Alternatively, find speeds first, then use d = t×v.",
    example: {
      problem: "Downstream: 15 km/h for 2h. Upstream: 9 km/h for time t. Same distance — find t.",
      solution: "Distance downstream = 15×2=30 km. Upstream time = 30/9 = 10/3 hours ≈ 3h 20min.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "bs-trick-04",
    topic: "boats-streams",
    type: "formula-shortcut",
    title: "Round Trip Time Formula",
    description:
      "Total time for same distance d upstream and downstream = 2du/(u²−v²). Use when asked 'how long to go d km up and d km back?'",
    formula: "Round trip time = 2du / (u² − v²)",
    example: {
      problem: "Boat speed 8 km/h, stream 2 km/h. Time for 24 km round trip (12 km each way)?",
      solution:
        "Down: 12/10=1.2h. Up: 12/6=2h. Total = 3.2h = 3h 12min. Or: 2×12×8/(64−4) = 192/60 = 3.2h.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "bs-trick-05",
    topic: "boats-streams",
    type: "mental-math",
    title: "Upstream: Larger Denominator Means More Time",
    description:
      "Upstream speed < downstream speed always. So same distance takes MORE time upstream. If asked which direction and how much more time, use ratio: extra time fraction = 2v/(u−v).",
    example: {
      problem:
        "Still water speed 10 km/h, stream 2 km/h. How much longer to cover 24 km upstream vs downstream?",
      solution: "Down time = 24/12 = 2h. Up time = 24/8 = 3h. Extra = 1 hour more upstream.",
    },
    timeSaved: "15 seconds",
  },
]
