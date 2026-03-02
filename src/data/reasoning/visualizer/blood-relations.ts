import type { BloodRelationProblem } from "@/types/reasoning"

export const bloodRelationProblems: BloodRelationProblem[] = [
  {
    id: "br-1",
    question:
      "A is the father of B. C is the sister of B. D is the mother of C. How is A related to D?",
    nodes: [
      { id: "A", name: "A", gender: "M", generation: -1 },
      { id: "B", name: "B", gender: "M", generation: 0 },
      { id: "C", name: "C", gender: "F", generation: 0 },
      { id: "D", name: "D", gender: "F", generation: -1 },
    ],
    edges: [
      { from: "A", to: "B", label: "father of" },
      { from: "C", to: "B", label: "sister of" },
      { from: "D", to: "C", label: "mother of" },
    ],
    steps: [
      "A is the father of B → A is a male parent of B.",
      "C is the sister of B → C and B share the same parents; C is female.",
      "D is the mother of C → D is a female parent of C (and therefore also of B).",
      "Since A is the father and D is the mother of the same children, A is the husband of D.",
    ],
    answer: "A is the husband of D.",
  },
  {
    id: "br-2",
    question:
      "P is the mother of Q. R is the brother of Q. S is the wife of R. How is P related to S?",
    nodes: [
      { id: "P", name: "P", gender: "F", generation: -1 },
      { id: "Q", name: "Q", gender: "M", generation: 0 },
      { id: "R", name: "R", gender: "M", generation: 0 },
      { id: "S", name: "S", gender: "F", generation: 0 },
    ],
    edges: [
      { from: "P", to: "Q", label: "mother of" },
      { from: "R", to: "Q", label: "brother of" },
      { from: "S", to: "R", label: "wife of" },
    ],
    steps: [
      "P is the mother of Q → P is Q's female parent.",
      "R is the brother of Q → R and Q share the same parents; P is also the mother of R.",
      "S is the wife of R → S is married to R (P's son).",
      "A woman whose son is married to S is S's mother-in-law → P is the mother-in-law of S.",
    ],
    answer: "P is the mother-in-law of S.",
  },
  {
    id: "br-3",
    question:
      "X is the father of Y. Z is the mother of Y. W is the daughter of Z. How is X related to W?",
    nodes: [
      { id: "X", name: "X", gender: "M", generation: -1 },
      { id: "Z", name: "Z", gender: "F", generation: -1 },
      { id: "Y", name: "Y", gender: "M", generation: 0 },
      { id: "W", name: "W", gender: "F", generation: 0 },
    ],
    edges: [
      { from: "X", to: "Y", label: "father of" },
      { from: "Z", to: "Y", label: "mother of" },
      { from: "Z", to: "W", label: "mother of" },
    ],
    steps: [
      "X is the father of Y and Z is the mother of Y → X and Z are the parents of Y.",
      "W is the daughter of Z → W is a child of Z.",
      "Since X and Z are a couple and W is Z's child, W is also X's child.",
      "X is a male parent of W → X is the father of W.",
    ],
    answer: "X is the father of W.",
  },
  {
    id: "br-4",
    question:
      "A is the grandfather of B. C is the father of B. D is the sister of C. How is A related to D?",
    nodes: [
      { id: "A", name: "A", gender: "M", generation: -2 },
      { id: "C", name: "C", gender: "M", generation: -1 },
      { id: "B", name: "B", gender: "M", generation: 0 },
      { id: "D", name: "D", gender: "F", generation: -1 },
    ],
    edges: [
      { from: "A", to: "B", label: "grandfather of" },
      { from: "C", to: "B", label: "father of" },
      { from: "D", to: "C", label: "sister of" },
    ],
    steps: [
      "C is the father of B → C is B's male parent.",
      "A is the grandfather of B → A is a parent of B's parent, i.e. A is a parent of C.",
      "D is the sister of C → D and C share the same parents; A is also the parent of D.",
      "A is a male parent of D → A is the father of D.",
    ],
    answer: "A is the father of D.",
  },
  {
    id: "br-5",
    question:
      "M is the husband of N. O is the son of N. P is the daughter of O. How is N related to P?",
    nodes: [
      { id: "M", name: "M", gender: "M", generation: -1 },
      { id: "N", name: "N", gender: "F", generation: -1 },
      { id: "O", name: "O", gender: "M", generation: 0 },
      { id: "P", name: "P", gender: "F", generation: 1 },
    ],
    edges: [
      { from: "M", to: "N", label: "husband of" },
      { from: "N", to: "O", label: "mother of" },
      { from: "O", to: "P", label: "father of" },
    ],
    steps: [
      "M is the husband of N → M and N are a married couple.",
      "O is the son of N → O is N's male child; N is O's mother.",
      "P is the daughter of O → P is O's female child; O is P's father.",
      "N is the mother of O, and O is the father of P → N is the grandmother of P.",
    ],
    answer: "N is the grandmother of P.",
  },
]
