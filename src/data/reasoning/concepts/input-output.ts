import type { ReasoningConcept } from "@/types/reasoning"

export const inputOutputConcept: ReasoningConcept = {
  topic: "input-output",
  title: "Input-Output (Machine Rearrangement)",
  description:
    "A machine receives a line of words and/or numbers as input and rearranges them across steps. You are shown some intermediate steps and asked to identify a specific step, the number of total steps, or the content of a given step.",
  keyIdea:
    "Study at least two consecutive steps to reverse-engineer the machine's rule before answering — the rule is fixed and applies identically at every step.",
  rules: [
    {
      name: "Rule Detection from Two Steps",
      rule: "Compare Step 1 to Step 2: identify which element moved, where it went, and how the rest shifted; confirm the same rule holds from Step 2 to Step 3",
      whenToUse: "Always — as the very first action before attempting any question about the input-output sequence.",
    },
    {
      name: "Dual-End Arrangement Rule",
      rule: "Many machines move the largest/smallest number to the left end AND the alphabetically first/last word to the right end in alternate sub-steps within one step",
      whenToUse: "When both numbers and words are present and each step seems to place two elements simultaneously.",
    },
    {
      name: "Counting Total Steps",
      rule: "Total steps = number of elements ÷ elements placed per step (round up for odd elements); the sequence terminates when all elements are in sorted order",
      whenToUse: "When the question asks 'In how many steps will the arrangement be complete?'",
    },
    {
      name: "Backward Tracing",
      rule: "To find an earlier step from a later one, reverse the machine's rule: un-sort the last placed element and shift the remainder back to their prior positions",
      whenToUse: "When only the final or a late step is given and you need to find the input or an earlier intermediate step.",
    },
    {
      name: "Position Anchoring",
      rule: "Once an element is placed at its final position in any step, it never moves again in subsequent steps; use this to anchor known positions and reduce the search space",
      whenToUse: "When reconstructing any specific step — check which elements have already been anchored in prior steps.",
    },
  ],
  examTags: ["IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk", "RRB Office Assistant"],
  examRelevance:
    "Input-Output appears as a full puzzle set (4–5 questions) in almost every IBPS PO and SBI PO mains paper. Mastering rule detection can earn all 4–5 marks in under 3 minutes.",
}
