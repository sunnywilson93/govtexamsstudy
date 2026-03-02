import type { QuantConcept } from "@/types/quant"

export const boatsStreamsConcept: QuantConcept = {
  topic: "boats-streams",
  title: "Boats & Streams",
  description:
    "Boats & Streams problems involve a boat (or swimmer) moving through a river with a current. The current aids motion downstream and opposes it upstream. Downstream speed = boat speed + stream speed; upstream speed = boat speed − stream speed. Still water speed and stream speed can be recovered from downstream and upstream speeds using simple averaging.",
  keyIdea:
    "Downstream = add current; Upstream = subtract current. Still water speed = average of D and U. Stream speed = half their difference. These two formulas solve 80% of boat problems.",
  formulas: [
    {
      name: "Downstream speed",
      formula: "D = u + v (boat speed + stream speed)",
      whenToUse: "Speed when travelling with the current",
    },
    {
      name: "Upstream speed",
      formula: "U = u − v (boat speed − stream speed)",
      whenToUse: "Speed when travelling against the current",
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
