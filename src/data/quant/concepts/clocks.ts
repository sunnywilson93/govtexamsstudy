import type { QuantConcept } from "@/types/quant"

export const clocksConcept: QuantConcept = {
  topic: "clocks",
  title: "Clocks",
  description:
    "Clock problems involve finding angles between hands, determining when hands coincide or form right angles, and solving faulty-clock problems. The minute hand moves at 6°/minute and the hour hand at 0.5°/minute, giving a relative speed of 5.5°/minute.",
  keyIdea:
    "Learn the angle formula |30H − 5.5M|. Apply it directly at any time. If result > 180, subtract from 360 to get the smaller angle. This one formula handles most clock MCQs.",
  formulas: [
    {
      name: "Angle formula",
      formula: "Angle = |30H − 5.5M| degrees (subtract from 360 if > 180)",
      whenToUse: "To find angle between clock hands at time H:M",
    },
    {
      name: "Relative speed",
      formula: "Minute hand gains 5.5° per minute over hour hand",
      whenToUse: "Rate at which minute hand overtakes hour hand",
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
