import type { ReasoningConcept } from "@/types/reasoning"

export const embeddedFiguresConcept: ReasoningConcept = {
  topic: "embedded-figures",
  title: "Embedded Figures",
  description:
    "SSC CGL non-verbal reasoning includes 2-3 embedded figure questions where you identify a simple target figure hidden inside a complex one. The target figure retains its proportions but may appear rotated or repositioned anywhere within the complex design. Training your eye to lock onto the most distinctive edge or angle accelerates your scan significantly. Timed practice sets build the visual pattern recognition needed to solve these under exam pressure.",
  keyIdea:
    "Focus on the most distinctive edge or angle of the target figure and scan the complex figure for that specific feature. The target figure never changes size ratio — only position and orientation may differ.",
  rules: [
    {
      name: "Distinctive Feature First",
      rule: "Identify the most unique line, angle, or curve in the target figure and search for it in the complex figure",
      whenToUse:
        "Start every question by picking the line, angle, or curve that appears least often in the complex figure and search for it first.",
    },
    {
      name: "Rotation Awareness",
      rule: "The target figure may be rotated by any angle — mentally rotate the target before matching",
      whenToUse:
        "Mentally rotate the target figure when your initial scan finds no match — the exam often rotates the embedded shape to increase difficulty.",
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
