import type { QuantConcept } from "@/types/quant"

export const boatsStreamsConcept: QuantConcept = {
  topic: "boats-streams",
  title: "Boats & Streams",
  description:
    "Add current speed for downstream, subtract it for upstream. Recover still-water speed and stream speed by averaging and halving the difference. SSC and banking papers test 2\\u20133 questions per exam, typically asking for boat speed, stream speed, or round-trip time.",
  keyIdea:
    "Downstream = add current; Upstream = subtract current. Still water speed = average of D and U. Stream speed = half their difference. These two formulas solve 80% of boat problems.",
  formulas: [
    {
      name: "Downstream speed",
      formula: "D = u + v (boat speed + stream speed)",
      whenToUse: "Calculate effective speed when the boat moves with the current \\u2014 the stream pushes it faster",
    },
    {
      name: "Upstream speed",
      formula: "U = u − v (boat speed − stream speed)",
      whenToUse: "Calculate effective speed when the boat moves against the current \\u2014 the stream slows it down",
    },
    {
      name: "Still water speed",
      formula: "u = (D + U) / 2",
      whenToUse: "To find boat's speed in still water from D and U",
    },
    {
      name: "Stream speed",
      formula: "v = (D − U) / 2",
      whenToUse: "To find stream speed from downstream and upstream speeds",
    },
    {
      name: "Time for round trip",
      formula: "Total time = d/(u+v) + d/(u−v) = 2du/(u²−v²)",
      whenToUse: "Time for same distance downstream and upstream",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "RRB NTPC", "CDS"],
  examRelevance:
    "2–3 questions per exam. Most tested: find boat speed or stream speed given downstream/upstream data. Also tested: time difference for same distance up vs down.",
}
