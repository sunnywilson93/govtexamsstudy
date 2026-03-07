import type { ReasoningConcept } from "@/types/reasoning"

export const logicalVennDiagramsConcept: ReasoningConcept = {
  topic: "logical-venn-diagrams",
  title: "Logical Venn Diagrams",
  description:
    "Logical Venn diagrams represent relationships between groups using overlapping circles. The task is to identify which diagram correctly shows the relationship among 2-3 given categories.",
  keyIdea:
    "Determine whether groups are subsets, overlapping, or disjoint. A group that is entirely inside another is a subset; partial overlap means some members are shared; separate circles mean no common members.",
  rules: [
    {
      name: "Subset Relationship",
      rule: "If all members of A are also members of B, draw A's circle entirely inside B's circle",
      whenToUse:
        "When one category is a specific type of another (e.g., Dogs inside Animals).",
    },
    {
      name: "Overlapping Relationship",
      rule: "If some members of A are also in B (but not all), draw two partially overlapping circles",
      whenToUse:
        "When categories share some but not all members (e.g., Engineers and Cricketers).",
    },
    {
      name: "Disjoint Relationship",
      rule: "If A and B share no members at all, draw two separate non-touching circles",
      whenToUse:
        "When categories are mutually exclusive (e.g., Dogs and Cats).",
    },
    {
      name: "Three-Group Analysis",
      rule: "Analyze all three pairs (A-B, B-C, A-C) independently, then combine into one diagram",
      whenToUse:
        "When three categories are given — check each pair before drawing.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "SSC MTS", "RRB NTPC"],
  examRelevance:
    "Logical Venn diagrams appear as 2-3 questions in SSC CGL. They are visual and fast to solve once the subset/overlap/disjoint framework is internalized.",
}
