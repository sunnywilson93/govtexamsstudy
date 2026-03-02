import type { ReasoningProblem } from "@/types/reasoning"

export const inequalitiesProblems: ReasoningProblem[] = [
  {
    id: "ineq-p1",
    topic: "inequalities",
    title: "Basic Coded Inequality",
    question:
      "In a code: @ means >, # means <, $ means =. Given: A @ B # C $ D. Does (I) A > D follow? Does (II) B ≥ D follow?",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A @ B # C $ D",
        result: "A > B < C = D",
        explanation: "Replace each symbol: @ → >, # → <, $ → =.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A > D",
        expression: "A > B, B < C, C = D",
        result: "Indeterminate",
        explanation:
          "A > B but B < C, so the chain reverses direction. We cannot determine the relationship between A and D.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: B ≥ D",
        expression: "B < C = D → B < D",
        result: "B < D, so B ≥ D is FALSE",
        explanation: "Since B < C and C = D, it follows that B < D. The conclusion B ≥ D does not hold.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: A > D → No | Concl II: B ≥ D → No",
        result: "Neither conclusion follows.",
        explanation: "Conclusion I is indeterminate and Conclusion II is false.",
      },
    ],
    answer: "Neither conclusion follows.",
    difficulty: "easy",
  },
  {
    id: "ineq-p2",
    topic: "inequalities",
    title: "Simple Chain Inequality",
    question:
      "Symbols: % means ≥, & means ≤, * means =. Given: P % Q * R & S. Does (I) P ≥ S follow? Does (II) Q ≤ S follow?",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "P % Q * R & S",
        result: "P ≥ Q = R ≤ S",
        explanation: "Replace: % → ≥, * → =, & → ≤.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: P ≥ S",
        expression: "P ≥ Q = R ≤ S",
        result: "Indeterminate",
        explanation:
          "P ≥ R and R ≤ S means P could be less than, equal to, or greater than S. Cannot conclude P ≥ S.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: Q ≤ S",
        expression: "Q = R ≤ S → Q ≤ S",
        result: "Q ≤ S is TRUE",
        explanation: "Q = R and R ≤ S, so by transitivity Q ≤ S.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: P ≥ S → No | Concl II: Q ≤ S → Yes",
        result: "Only Conclusion II follows.",
        explanation: "Conclusion I cannot be established; Conclusion II follows from the chain.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "ineq-p3",
    topic: "inequalities",
    title: "Complementary Pair",
    question:
      "Symbols: © means >, ™ means <, ® means ≥. Given: X © Y ™ Z ® W. Does (I) X > W follow? Does (II) X ≤ W follow?",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "X © Y ™ Z ® W",
        result: "X > Y < Z ≥ W",
        explanation: "Replace: © → >, ™ → <, ® → ≥.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: X > W",
        expression: "X > Y, Y < Z ≥ W",
        result: "Indeterminate",
        explanation:
          "The chain breaks at Y (direction reverses). X vs W cannot be determined.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: X ≤ W",
        expression: "Cannot establish X ≤ W either",
        result: "Indeterminate",
        explanation:
          "Neither X > W nor X ≤ W can be confirmed — both are uncertain.",
      },
      {
        id: 4,
        operation: "Check complementary pair rule",
        expression: "I: X > W and II: X ≤ W together cover all cases",
        result: "Either I or II must be true",
        explanation:
          "When two conclusions form a complementary pair (one is the negation of the other) and neither can be directly confirmed or denied, the answer is 'Either I or II follows'.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Complementary pair → Either Conclusion follows",
        result: "Either Conclusion I or Conclusion II follows.",
        explanation:
          "I (X > W) and II (X ≤ W) are exhaustive and mutually exclusive, so one of them must hold.",
      },
    ],
    answer: "Either Conclusion I or Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "ineq-p4",
    topic: "inequalities",
    title: "All-≥ Chain with Combined Conclusion",
    question:
      "Symbols: ^ means ≥, ~ means ≤. Given: A ^ B ^ C ~ D ~ E. Does (I) A ≥ C follow? Does (II) C ≥ E follow?",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A ^ B ^ C ~ D ~ E",
        result: "A ≥ B ≥ C ≤ D ≤ E",
        explanation: "Replace: ^ → ≥, ~ → ≤.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A ≥ C",
        expression: "A ≥ B ≥ C",
        result: "A ≥ C is TRUE",
        explanation: "A ≥ B and B ≥ C, so by transitivity A ≥ C.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: C ≥ E",
        expression: "C ≤ D ≤ E → C ≤ E",
        result: "C ≤ E, so C ≥ E is FALSE",
        explanation: "C ≤ D and D ≤ E means C ≤ E. Therefore C ≥ E does not follow.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: A ≥ C → Yes | Concl II: C ≥ E → No",
        result: "Only Conclusion I follows.",
        explanation: "Conclusion I is supported by transitivity; Conclusion II contradicts the chain.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "medium",
  },
  {
    id: "ineq-p5",
    topic: "inequalities",
    title: "Nested Chain with Three Conclusions",
    question:
      "Symbols: ♦ means >, ♠ means <, ♣ means =. Given: M ♦ N ♣ O ♠ P ♦ Q. Does (I) M > O follow? Does (II) N < P follow? Does (III) O < Q follow?",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "M ♦ N ♣ O ♠ P ♦ Q",
        result: "M > N = O < P > Q",
        explanation: "Replace: ♦ → >, ♠ → <, ♣ → =.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: M > O",
        expression: "M > N = O → M > O",
        result: "TRUE",
        explanation: "M > N and N = O, so M > O by substitution.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: N < P",
        expression: "N = O < P → N < P",
        result: "TRUE",
        explanation: "N = O and O < P, so N < P by transitivity.",
      },
      {
        id: 4,
        operation: "Check Conclusion III: O < Q",
        expression: "O < P > Q",
        result: "Indeterminate",
        explanation:
          "O < P and P > Q, but the direction reverses at P. O vs Q cannot be determined.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes | Concl III: No",
        result: "Both Conclusions I and II follow.",
        explanation:
          "I and II follow by transitivity. III is indeterminate due to direction reversal at P.",
      },
    ],
    answer: "Both Conclusions I and II follow.",
    difficulty: "medium",
  },
]
