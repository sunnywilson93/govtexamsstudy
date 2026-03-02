import type { ReasoningTrick } from "@/types/reasoning"

export const inequalitiesTricks: ReasoningTrick[] = [
  {
    id: "ineq-t1",
    topic: "inequalities",
    type: "pattern-shortcut",
    title: "Symbol Table First",
    description: "Write a 2-column symbol-to-operator map before reading the question. Never decode inline — it creates errors.",
    example: {
      problem: "A @ B # C means A > B = C. Does A > C follow?",
      solution: "A > B, B = C → A > C. Yes, follows.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "ineq-t2",
    topic: "inequalities",
    type: "elimination",
    title: "Break at Weak Link",
    description: "If any link in the chain is =, the conclusion can be ≥ or ≤ but NOT strictly > or <.",
    example: {
      problem: "A ≥ B = C. Does A > C follow?",
      solution: "A = B = C is possible, so A > C does NOT definitively follow.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "ineq-t3",
    topic: "inequalities",
    type: "elimination",
    title: "Direction Conflict → Neither Follows",
    description: "If the chain has A > B but B < C (direction reverses), conclusions about A vs C cannot be determined.",
    example: {
      problem: "A > B < C. Does A > C follow? Does A < C follow?",
      solution: "Neither follows — direction reverses at B.",
    },
  },
  {
    id: "ineq-t4",
    topic: "inequalities",
    type: "pattern-shortcut",
    title: "Complementary Pair Check",
    description: "If Concl. I: A > B and Concl. II: A ≤ B — these are complementary. If neither is provable, 'Either I or II follows'.",
    example: {
      problem: "A > B < C. Concl I: A > C. Concl II: A ≤ C.",
      solution: "Neither provable separately → Either I or II follows.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "ineq-t5",
    topic: "inequalities",
    type: "pattern-shortcut",
    title: "Both ≥ Chain → Use ≥ Not >",
    description: "A ≥ B ≥ C gives only A ≥ C. Exams often trap with 'A > C follows' — it does NOT unless stated.",
    example: {
      problem: "A ≥ B ≥ C. Does A > C follow?",
      solution: "No — A = B = C is possible. Only A ≥ C follows.",
    },
  },
]
