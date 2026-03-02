import type { ReasoningTrick } from "@/types/reasoning"

export const analogiesTricks: ReasoningTrick[] = [
  {
    id: "anal-t1",
    topic: "analogies",
    type: "pattern-shortcut",
    title: "Classify the Relationship First",
    description: "Before looking at options, name the relationship type: semantic pair, degree, part-whole, function, or tool-use. The right answer must match the exact same type.",
    example: {
      problem: "Pen : Write :: Knife : ?",
      solution: "Relationship = tool-use (function). Answer: Cut. Reject 'sharp' (property) or 'steel' (material).",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "anal-t2",
    topic: "analogies",
    type: "elimination",
    title: "Reverse Analogy Trap",
    description: "If the pair appears reversed in an option (e.g., Cause→Effect swapped to Effect→Cause), eliminate immediately. SSC and IBPS often plant this distractor.",
    example: {
      problem: "Heat : Expansion :: Cooling : ? (options: Contraction, Ice, Temperature, Matter)",
      solution: "Heat→Expansion (cause→effect). Cooling→Contraction preserves the direction. 'Ice' reverses to effect→cause, eliminated.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "anal-t3",
    topic: "analogies",
    type: "pattern-shortcut",
    title: "Degree Analogy: Spot the Intensity Scale",
    description: "Degree analogies increase or decrease on an intensity/severity scale. Map both words on the scale before picking the answer.",
    formula: "mild → extreme :: mild₂ → extreme₂",
    example: {
      problem: "Warm : Hot :: Cool : ?",
      solution: "Warm and Hot are on the heat scale (low→high). Cool→Cold follows the same low→high pattern.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "anal-t4",
    topic: "analogies",
    type: "elimination",
    title: "Part-Whole vs. Whole-Part Direction",
    description: "Confirm whether the given pair is Part→Whole or Whole→Part. Never mix directions when selecting the answer option.",
    example: {
      problem: "Page : Book :: Brick : ?",
      solution: "Page is part of Book (part→whole). Brick→Wall preserves part→whole. Reject 'Stone' (synonym) or 'House' (larger whole, wrong level).",
    },
  },
  {
    id: "anal-t5",
    topic: "analogies",
    type: "pattern-shortcut",
    title: "Eliminate by Specificity Mismatch",
    description: "Both pairs must sit at the same level of abstraction. If the given pair is specific→specific, reject options that are generic→specific or vice versa.",
    example: {
      problem: "Mango : Fruit :: Rose : ?",
      solution: "Mango (specific) : Fruit (category) → Rose (specific) : Flower (category). Reject 'Plant' — too generic (wrong level).",
    },
    timeSaved: "10 sec/question",
  },
]
