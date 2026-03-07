import type { ReasoningTrick } from "@/types/reasoning"

export const dataSufficiencyTricks: ReasoningTrick[] = [
  {
    id: "ds-t1",
    topic: "data-sufficiency",
    type: "pattern-shortcut",
    title: "Check Alone First",
    description:
      "Always evaluate each statement independently before combining. Many students waste time combining statements that are individually sufficient.",
    example: {
      problem:
        "Is X even? I: X is divisible by 4. II: X is divisible by 6.",
      solution:
        "Statement I alone: divisible by 4 → even. Sufficient. No need to check II or combine.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "ds-t2",
    topic: "data-sufficiency",
    type: "elimination",
    title: "Plug Two Values Test",
    description:
      "To check if a statement is sufficient, plug in two values that satisfy the statement. If both give the same answer, it is likely sufficient. If they give different answers, it is insufficient.",
    example: {
      problem:
        "Is N > 5? Statement: N is a prime number.",
      solution:
        "Try N = 2 (prime, not > 5) and N = 7 (prime, > 5). Different answers → statement alone is NOT sufficient.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "ds-t3",
    topic: "data-sufficiency",
    type: "pattern-shortcut",
    title: "Equation Counting",
    description:
      "If the question has N unknowns, you generally need N independent equations to determine unique values. Count equations from each statement.",
    example: {
      problem:
        "What is the value of X + Y? I: X = 3. II: Y = 7.",
      solution:
        "2 unknowns, each statement gives 1 equation. Neither alone sufficient, but both together give X + Y = 10. Answer: Both needed.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "ds-t4",
    topic: "data-sufficiency",
    type: "elimination",
    title: "Yes/No vs. Value Questions",
    description:
      "For Yes/No questions, a statement is sufficient if it ALWAYS gives Yes or ALWAYS gives No. For value questions, it must give a unique value.",
    example: {
      problem:
        "Is X positive? Statement: X² = 9.",
      solution:
        "X = 3 (positive) or X = -3 (negative). Statement gives both Yes and No → NOT sufficient.",
    },
  },
  {
    id: "ds-t5",
    topic: "data-sufficiency",
    type: "pattern-shortcut",
    title: "Tautology Trap",
    description:
      "If combining both statements still leaves multiple answers, the answer is 'Data insufficient even with both.' Do not force an answer.",
    example: {
      problem:
        "What is A? I: A + B = 10. II: A + C = 15.",
      solution:
        "Two equations, three unknowns (A, B, C). Even together, A cannot be uniquely determined. Answer: Data insufficient.",
    },
    timeSaved: "15 sec/question",
  },
]
