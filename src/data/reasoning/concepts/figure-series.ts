import type { ReasoningConcept } from "@/types/reasoning"

export const figureSeriesConcept: ReasoningConcept = {
  topic: "figure-series",
  title: "Figure Series",
  description:
    "Figure series problems require identifying the pattern in a sequence of figures and predicting the next one. Patterns involve rotation, element addition/removal, shading changes, and positional shifts.",
  keyIdea:
    "Isolate each element of the figure independently — track rotation angle, count of elements, shading sequence, and position shift for each element across the series.",
  rules: [
    {
      name: "Rotation Pattern",
      rule: "Check if the main element rotates by a fixed angle (45°, 90°, 180°) in each step",
      whenToUse:
        "When the figure appears similar but oriented differently in each frame.",
    },
    {
      name: "Element Count Pattern",
      rule: "Count distinct elements (lines, dots, shapes) in each frame — look for +1, +2, or alternating patterns",
      whenToUse:
        "When the number of components in the figure changes across frames.",
    },
    {
      name: "Shading Cycle",
      rule: "Track shading (empty → half → full → empty) as a repeating cycle",
      whenToUse:
        "When parts of the figure alternate between shaded and unshaded.",
    },
    {
      name: "Positional Shift",
      rule: "An inner element may move clockwise, counterclockwise, or diagonally by fixed steps",
      whenToUse:
        "When a small element inside a larger shape changes position each frame.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "SSC MTS", "RRB NTPC", "RRB Group D"],
  examRelevance:
    "Figure series is a staple of SSC CGL non-verbal reasoning (3-5 questions). Pattern recognition speed improves dramatically with practice on rotation + element counting.",
}
