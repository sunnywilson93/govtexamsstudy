import type { QuantConcept } from "@/types/quant"

export const tsdConcept: QuantConcept = {
  topic: "time-speed-distance",
  title: "Time, Speed & Distance",
  description:
    "Every TSD problem \\u2014 trains, boats, races \\u2014 traces back to one equation: Distance = Speed \\u00d7 Time. Exams layer relative speed, average speed traps, and unit conversions on top of this core relationship. SSC CGL, RRB NTPC, and UPSC CSAT each carry 3\\u20135 TSD questions per paper, so drilling the harmonic-mean shortcut and same-direction vs. opposite-direction logic pays off fast.",
  keyIdea:
    "Average speed for equal distances is the harmonic mean (2S1S2)/(S1+S2) — NOT the arithmetic average. This is the most common trap in TSD questions.",
  formulas: [
    {
      name: "Fundamental Relationship",
      formula: "Speed = Distance / Time  (Distance = S × T, Time = D / S)",
      whenToUse: "Start every TSD problem here \\u2014 identify which two values you have and solve for the third.",
    },
    {
      name: "Average Speed (equal distances)",
      formula: "Avg Speed = 2 × S1 × S2 / (S1 + S2)",
      whenToUse: "Apply the harmonic mean whenever someone travels equal distances at two different speeds.",
    },
    {
      name: "Relative Speed",
      formula: "Same direction: |S1 − S2|  |  Opposite direction: S1 + S2",
      whenToUse: "For trains crossing, overtaking, or two objects moving towards/away from each other.",
    },
    {
      name: "Train crossing platform",
      formula: "Time = (Length of Train + Length of Platform) / Speed of Train",
      whenToUse: "When a train completely crosses a stationary platform or another train.",
    },
    {
      name: "Boats & Streams",
      formula:
        "Downstream = Boat + Stream  |  Upstream = Boat − Stream  |  Boat speed = (D + U) / 2  |  Stream = (D − U) / 2",
      whenToUse: "For any problem involving a boat moving with or against a river current.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "UPSC CSAT", "IBPS PO"],
  examRelevance:
    "TSD is one of the most tested topics in SSC CGL, RRB NTPC, and UPSC CSAT — typically 3–5 questions per paper across trains, boats, and average speed variants.",
}
