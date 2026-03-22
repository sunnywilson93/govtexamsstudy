import type { QuantConcept } from "@/types/quant"

export const clocksConcept: QuantConcept = {
  topic: "clocks",
  title: "Clocks",
  description:
    "Find angles between clock hands, determine when they coincide or form right angles, and solve faulty-clock problems. The minute hand gains 5.5\\u00B0 per minute over the hour hand. SSC and RRB papers test 1\\u20132 clock questions per exam \\u2014 the single angle formula |30H \\u2212 5.5M| handles 90% of them.",
  keyIdea:
    "Learn the angle formula |30H − 5.5M|. Apply it directly at any time. If result > 180, subtract from 360 to get the smaller angle. This one formula handles most clock MCQs.",
  formulas: [
    {
      name: "Angle formula",
      formula: "Angle = |30H − 5.5M| degrees (subtract from 360 if > 180)",
      whenToUse: "Plug in hours H and minutes M to get the angle instantly \\u2014 subtract from 360 if the result exceeds 180",
    },
    {
      name: "Relative speed",
      formula: "Minute hand gains 5.5° per minute over hour hand",
      whenToUse: "Use this rate to calculate how long until the hands reach a target angle from their current position",
    },
    {
      name: "Coincidence interval",
      formula: "Hands meet every 65(5/11) minutes = 720/11 minutes",
      whenToUse: "Time between successive overlaps",
    },
    {
      name: "Right angle times",
      formula: "Hands at 90° 22 times in 12 hours",
      whenToUse: "Count of right angle positions",
    },
    {
      name: "Faulty clock",
      formula: "Gain per hour × hours elapsed = total extra time shown",
      whenToUse: "For fast/slow clock problems",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO", "SSC MTS"],
  examRelevance:
    "1–2 questions per exam. Most common: find angle between hands at given time, find when hands coincide or are perpendicular. Angle formula solves 90% of clock questions.",
}
