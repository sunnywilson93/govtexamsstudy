import type { ReasoningConcept } from "@/types/reasoning"

export const embeddedFiguresConcept: ReasoningConcept = {
  topic: "embedded-figures",
  title: "Embedded Figures",
  description:
    "Embedded figure problems require identifying a given simple figure hidden within a complex figure. The target figure may be rotated or positioned anywhere but its proportions remain unchanged.",
  keyIdea:
    "Focus on the most distinctive edge or angle of the target figure and scan the complex figure for that specific feature. The target figure never changes size ratio — only position and orientation may differ.",
  rules: [
    {
      name: "Distinctive Feature First",
      rule: "Identify the most unique line, angle, or curve in the target figure and search for it in the complex figure",
      whenToUse:
        "Always — start with the feature that appears least often in the complex figure.",
    },
    {
      name: "Rotation Awareness",
      rule: "The target figure may be rotated by any angle — mentally rotate the target before matching",
      whenToUse:
        "When the target does not seem to appear at first glance.",
    },
    {
      name: "Line-by-Line Verification",
      rule: "After a potential match, verify every line and angle of the target against the complex figure",
      whenToUse:
        "To confirm a match — partial matches are common traps.",
    },
    {
      name: "Ignore Extra Lines",
      rule: "The complex figure has extra lines that are distractors — focus only on lines that form the target shape",
      whenToUse:
        "When the complex figure is very busy with many intersecting lines.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "SSC MTS", "RRB NTPC", "RRB Group D"],
  examRelevance:
    "Embedded figures appear as 2-3 questions in SSC CGL non-verbal section. Speed depends on training the eye to spot distinctive features quickly — practice with timed sets is essential.",
}
