import type { ReasoningTrick } from "@/types/reasoning"

export const logicalVennDiagramsTricks: ReasoningTrick[] = [
  {
    id: "lvd-t1",
    topic: "logical-venn-diagrams",
    type: "pattern-shortcut",
    title: "Real-World Classification",
    description:
      "Before looking at the options, mentally classify: is A a type of B (subset), can A also be B (overlap), or can A never be B (disjoint)? Real-world knowledge decides.",
    example: {
      problem: "Choose the Venn diagram for: Dog, Animal, Cat.",
      solution:
        "Dog ⊂ Animal. Cat ⊂ Animal. Dog ∩ Cat = empty. Two separate circles inside a larger one.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "lvd-t2",
    topic: "logical-venn-diagrams",
    type: "pattern-shortcut",
    title: "Concentric Circles = Chain Subset",
    description:
      "If A ⊂ B ⊂ C, draw three concentric circles (A innermost). Common pattern: City ⊂ State ⊂ Country.",
    example: {
      problem: "Choose the diagram for: Delhi, India, Asia.",
      solution:
        "Delhi ⊂ India ⊂ Asia. Three concentric circles with Delhi inside India inside Asia.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "lvd-t3",
    topic: "logical-venn-diagrams",
    type: "elimination",
    title: "Eliminate by Checking One Pair",
    description:
      "If any pair relationship in the diagram is wrong, eliminate that option. Start with the easiest pair to verify.",
    example: {
      problem:
        "Diagram for: Doctors, Females, Mothers. Option A shows all three separate.",
      solution:
        "Females and Mothers overlap (some mothers are female — in fact all are). Option A is wrong. Eliminate immediately.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "lvd-t4",
    topic: "logical-venn-diagrams",
    type: "elimination",
    title: "Three Separate = All Disjoint",
    description:
      "Three separate circles mean no member of any group belongs to another. This is rare — if even one pair can overlap, this option is wrong.",
    example: {
      problem: "Diagram for: Tables, Chairs, Furniture.",
      solution:
        "Tables ⊂ Furniture and Chairs ⊂ Furniture. Three separate circles is wrong — two circles should be inside the third.",
    },
  },
  {
    id: "lvd-t5",
    topic: "logical-venn-diagrams",
    type: "pattern-shortcut",
    title: "Profession + Trait + Gender Pattern",
    description:
      "Questions often use: Profession (Engineers), Trait (Married), Gender (Women). These three always mutually overlap — draw three overlapping circles.",
    example: {
      problem: "Diagram for: Engineers, Women, Mothers.",
      solution:
        "Some engineers are women, some women are mothers, some engineers are mothers. All three overlap. Three mutually intersecting circles.",
    },
    timeSaved: "10 sec/question",
  },
]
