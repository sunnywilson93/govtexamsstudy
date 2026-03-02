import type { ReasoningProblem } from "@/types/reasoning"

export const analogiesProblems: ReasoningProblem[] = [
  {
    id: "anal-p1",
    topic: "analogies",
    title: "Semantic Pair Analogy",
    question:
      "Doctor : Hospital :: Teacher : ? (A) School (B) Book (C) Student (D) Chalk",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Doctor → Hospital",
        result: "Workplace relationship",
        explanation: "A Doctor works in a Hospital. The analogy links a professional to their primary workplace.",
      },
      {
        id: 2,
        operation: "Apply relationship to second pair",
        expression: "Teacher → ?",
        result: "School",
        explanation: "A Teacher works in a School, which is the direct workplace equivalent.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Book → tool | Student → receiver | Chalk → instrument",
        result: "None match workplace",
        explanation: "Book, Student, and Chalk relate to teaching tools or recipients, not the workplace.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Doctor : Hospital = Teacher : School",
        result: "School",
        explanation: "The consistent relationship is professional-to-workplace.",
      },
    ],
    answer: "School",
    difficulty: "easy",
  },
  {
    id: "anal-p2",
    topic: "analogies",
    title: "Degree Analogy",
    question:
      "Warm : Hot :: Cool : ? (A) Cold (B) Ice (C) Freeze (D) Winter",
    steps: [
      {
        id: 1,
        operation: "Identify degree relationship",
        expression: "Warm → Hot",
        result: "Mild to intense (heat)",
        explanation: "Hot is the intense degree of Warm — same temperature axis, greater magnitude.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Cool → ?",
        result: "Cold (intense degree of cool)",
        explanation: "Cold is the intense degree of Cool on the low-temperature axis.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Ice → state of matter | Freeze → action | Winter → season",
        result: "Not degree synonyms",
        explanation: "Ice, Freeze, and Winter shift category from temperature degree to state/action/season.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Warm : Hot = Cool : Cold",
        result: "Cold",
        explanation: "The pattern is mild-temperature → intense-temperature in both pairs.",
      },
    ],
    answer: "Cold",
    difficulty: "easy",
  },
  {
    id: "anal-p3",
    topic: "analogies",
    title: "Part-Whole Analogy",
    question:
      "Chapter : Book :: Act : ? (A) Stage (B) Drama (C) Scene (D) Script",
    steps: [
      {
        id: 1,
        operation: "Identify part-whole relationship",
        expression: "Chapter → Book",
        result: "Chapter is a part of Book",
        explanation: "A Chapter is a subdivided unit that together with others makes up a Book.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Act → ?",
        result: "Drama (Act is a part of Drama)",
        explanation: "An Act is a major division of a Drama/Play, making Drama the whole.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Stage → location | Scene → part of Act (too small) | Script → written form",
        result: "None are the correct whole",
        explanation:
          "Scene is a sub-unit within an Act, not the whole. Stage and Script shift category.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Chapter : Book = Act : Drama",
        result: "Drama",
        explanation: "Both pairs follow part : whole — the Act is to Drama what a Chapter is to a Book.",
      },
    ],
    answer: "Drama",
    difficulty: "easy",
  },
  {
    id: "anal-p4",
    topic: "analogies",
    title: "Functional Relationship Analogy",
    question:
      "Pen : Write :: Knife : ? (A) Sharp (B) Metal (C) Cut (D) Kitchen",
    steps: [
      {
        id: 1,
        operation: "Identify functional relationship",
        expression: "Pen → Write",
        result: "Tool : Primary function",
        explanation: "The primary function of a Pen is to Write. The analogy maps a tool to what it does.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Knife → ?",
        result: "Cut",
        explanation: "The primary function of a Knife is to Cut.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Sharp → property | Metal → material | Kitchen → location",
        result: "None are primary functions",
        explanation: "Sharp is a property, Metal is a material, Kitchen is where it is used — none are the function.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Pen : Write = Knife : Cut",
        result: "Cut",
        explanation: "Both pairs follow Tool : Primary Function pattern.",
      },
    ],
    answer: "Cut",
    difficulty: "medium",
  },
  {
    id: "anal-p5",
    topic: "analogies",
    title: "Reverse Analogy (Product to Source)",
    question:
      "Milk : Cow :: Honey : ? (A) Flower (B) Sweet (C) Bee (D) Wax",
    steps: [
      {
        id: 1,
        operation: "Identify product-source relationship",
        expression: "Milk ← Cow",
        result: "Product : Source",
        explanation: "Milk is produced by a Cow. The first word is the product; the second is the source.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Honey ← ?",
        result: "Bee",
        explanation: "Honey is produced by Bees. Bee is the correct source.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Flower → raw material for bees | Sweet → property | Wax → by-product",
        result: "None are the direct producer",
        explanation:
          "Flowers are inputs for bees, Sweet is a taste attribute, Wax is another product — none produce honey.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Milk : Cow = Honey : Bee",
        result: "Bee",
        explanation: "Both pairs follow Product : Source.",
      },
      {
        id: 5,
        operation: "Confirm no reversal trap",
        expression: "Source : Product vs Product : Source — direction same in both pairs",
        result: "Consistent",
        explanation: "Milk-Cow and Honey-Bee are both in Product:Source order, so Bee is correct.",
      },
    ],
    answer: "Bee",
    difficulty: "medium",
  },
]
