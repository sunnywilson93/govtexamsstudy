import type { ReasoningProblem } from "@/types/reasoning"

export const inequalitiesProblems: ReasoningProblem[] = [
  // ── Easy (p1-p10): SSC CGL Tier 1 basic, RRB NTPC level ──────────
  {
    id: "ineq-p1",
    topic: "inequalities",
    title: "SSC CGL 2023: Basic Coded Symbol Chain",
    question:
      "In a coded language: @ means >, # means <, $ means =. Statements: A @ B # C $ D. Conclusions: (I) A > D (II) B < D. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both I and II (D) Neither I nor II",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A @ B # C $ D",
        result: "A > B < C = D",
        explanation:
          "Replace each coded symbol: @ becomes >, # becomes <, $ becomes =.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A > D",
        expression: "A > B but B < C = D",
        result: "Cannot be determined",
        explanation:
          "A > B and B < C means the chain reverses direction at B. We cannot determine how A compares to C or D.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: B < D",
        expression: "B < C and C = D",
        result: "B < D is TRUE",
        explanation:
          "Since B < C and C = D, by transitivity B < D. This conclusion follows.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: No | II: Yes",
        result: "Only Conclusion II follows",
        explanation:
          "Conclusion I is indeterminate due to the direction reversal at B. Conclusion II follows from the right sub-chain.",
      },
    ],
    answer: "(B) Only II",
    difficulty: "easy",
  },
  {
    id: "ineq-p2",
    topic: "inequalities",
    title: "SSC CGL 2022: Direct Inequality Straight Chain",
    question:
      "Statements: A < N = U > F > B > H. Conclusions: (I) H < N (II) F > A. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Write the chain",
        expression: "A < N = U > F > B > H",
        result: "Chain identified",
        explanation:
          "The chain has a reversal at U: left side A < N = U, right side U > F > B > H.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: H < N",
        expression: "N = U > F > B > H",
        result: "H < N is TRUE",
        explanation:
          "Following the right sub-chain: U > F > B > H, so U > H. Since N = U, N > H.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: F > A",
        expression: "A < N = U > F",
        result: "Cannot be determined",
        explanation:
          "A < U and U > F, so both A and F are less than U. We cannot determine if F > A or F < A.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: No",
        result: "Only Conclusion I follows",
        explanation:
          "Conclusion I follows via the consistent sub-chain from N to H. Conclusion II is indeterminate.",
      },
    ],
    answer: "(A) Only I",
    difficulty: "easy",
  },
  {
    id: "ineq-p3",
    topic: "inequalities",
    title: "RRB NTPC 2021: Symbols with Equality",
    question:
      "Symbols: % means >=, & means <=, * means =. Statements: P % Q * R & S. Conclusions: (I) P >= S (II) Q <= S. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "P % Q * R & S",
        result: "P >= Q = R <= S",
        explanation:
          "Replace: % becomes >=, * becomes =, & becomes <=.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: P >= S",
        expression: "P >= Q = R <= S",
        result: "Cannot be determined",
        explanation:
          "P >= R and R <= S. P could be less than, equal to, or greater than S since the chain reverses at R.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: Q <= S",
        expression: "Q = R <= S",
        result: "Q <= S is TRUE",
        explanation:
          "Q = R and R <= S, so by transitivity Q <= S.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: No | II: Yes",
        result: "Only Conclusion II follows",
        explanation:
          "The right sub-chain Q = R <= S gives us Conclusion II. Conclusion I is indeterminate.",
      },
    ],
    answer: "(B) Only II",
    difficulty: "easy",
  },
  {
    id: "ineq-p4",
    topic: "inequalities",
    title: "SSC CHSL 2023: Both Conclusions Follow",
    question:
      "Symbols: % means >=, & means <. Statements: A % B % C & D & E. Conclusions: (I) A >= C (II) C < E. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both I and II (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A % B % C & D & E",
        result: "A >= B >= C < D < E",
        explanation:
          "Replace: % becomes >=, & becomes <.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A >= C",
        expression: "A >= B >= C",
        result: "A >= C is TRUE",
        explanation:
          "A >= B and B >= C, so by transitivity A >= C.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: C < E",
        expression: "C < D < E",
        result: "C < E is TRUE",
        explanation:
          "C < D and D < E, so by transitivity C < E.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: Yes",
        result: "Both conclusions follow",
        explanation:
          "Each conclusion derives from a consistent sub-chain without any direction reversal.",
      },
    ],
    answer: "(C) Both I and II",
    difficulty: "easy",
  },
  {
    id: "ineq-p5",
    topic: "inequalities",
    title: "SSC CGL 2023: Complementary Pair Rule",
    question:
      "Symbols: @ means >, # means <, $ means >=. Statements: X @ Y # Z $ W. Conclusions: (I) X > W (II) X <= W. Which conclusion(s) follow? (A) Only I (B) Only II (C) Either I or II (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "X @ Y # Z $ W",
        result: "X > Y < Z >= W",
        explanation:
          "Replace: @ becomes >, # becomes <, $ becomes >=.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: X > W",
        expression: "X > Y < Z >= W",
        result: "Cannot be determined",
        explanation:
          "X > Y and Y < Z means the chain reverses at Y. X vs W is unknown.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: X <= W",
        expression: "Same chain analysis",
        result: "Cannot be determined",
        explanation:
          "Neither X > W nor X <= W can be established from the chain.",
      },
      {
        id: 4,
        operation: "Apply complementary pair rule",
        expression: "I: X > W and II: X <= W cover all possible cases",
        result: "Either I or II must be true",
        explanation:
          "X > W and X <= W are mutually exclusive and exhaustive. One must hold even though we cannot determine which.",
      },
    ],
    answer: "(C) Either I or II",
    difficulty: "easy",
  },
  {
    id: "ineq-p6",
    topic: "inequalities",
    title: "RRB NTPC 2022: Consistent Direction Chain",
    question:
      "Symbols: @ means =, # means >. Statements: P # Q @ R # S. Conclusions: (I) P > S (II) Q > S. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both I and II (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "P # Q @ R # S",
        result: "P > Q = R > S",
        explanation:
          "Replace: # becomes >, @ becomes =.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: P > S",
        expression: "P > Q = R > S",
        result: "P > S is TRUE",
        explanation:
          "P > Q, Q = R, R > S. By chaining: P > R > S, so P > S.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: Q > S",
        expression: "Q = R > S",
        result: "Q > S is TRUE",
        explanation:
          "Q = R and R > S, so Q > S by substitution.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: Yes",
        result: "Both conclusions follow",
        explanation:
          "The chain flows consistently in one direction (all > or =), so both conclusions hold.",
      },
    ],
    answer: "(C) Both I and II",
    difficulty: "easy",
  },
  {
    id: "ineq-p7",
    topic: "inequalities",
    title: "SSC CGL 2022: Neither Follows Due to Reversal",
    question:
      "Symbols: @ means >, # means <=. Statements: J @ K @ L # M. Conclusions: (I) J > M (II) K <= M. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "J @ K @ L # M",
        result: "J > K > L <= M",
        explanation:
          "Replace: @ becomes >, # becomes <=.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: J > M",
        expression: "J > K > L <= M",
        result: "Cannot be determined",
        explanation:
          "J > L but L <= M. If M is much larger than L, then M could exceed J. The reversal at L blocks the conclusion.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: K <= M",
        expression: "K > L and L <= M",
        result: "Cannot be determined",
        explanation:
          "K > L and L <= M do not combine to give a definite K vs M relationship. Example: if L=5, M=6, K=7 then K > M. But if L=5, M=100, K=7 then K < M.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: No | II: No",
        result: "Neither conclusion follows",
        explanation:
          "The direction reversal at L prevents establishing either conclusion.",
      },
    ],
    answer: "(D) Neither",
    difficulty: "easy",
  },
  {
    id: "ineq-p8",
    topic: "inequalities",
    title: "SSC CHSL 2022: Multiple Reversals",
    question:
      "Statements: T < D > G < F > B > H. Conclusions: (I) G < H (II) F > T. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Analyse the chain",
        expression: "T < D > G < F > B > H",
        result: "Chain has reversals at D and F",
        explanation:
          "The chain changes direction at D (< to >) and at G (> to <).",
      },
      {
        id: 2,
        operation: "Check Conclusion I: G < H",
        expression: "G < F > B > H",
        result: "Cannot be determined",
        explanation:
          "G < F and F > B > H. Both G and H are less than F, but their relationship to each other is unknown.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: F > T",
        expression: "T < D > G < F",
        result: "Cannot be determined",
        explanation:
          "T < D and D > G < F. T and F relate to different branches from D. Cannot link them.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: No | II: No",
        result: "Neither conclusion follows",
        explanation:
          "Multiple direction reversals make both conclusions indeterminate.",
      },
    ],
    answer: "(D) Neither",
    difficulty: "easy",
  },
  {
    id: "ineq-p9",
    topic: "inequalities",
    title: "RRB NTPC 2023: Transitivity with >= Chain",
    question:
      "Symbols: ^ means >=, ~ means <=. Statements: A ^ B ^ C ~ D. Conclusions: (I) A >= C (II) C >= D. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A ^ B ^ C ~ D",
        result: "A >= B >= C <= D",
        explanation:
          "Replace: ^ becomes >=, ~ becomes <=.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A >= C",
        expression: "A >= B >= C",
        result: "A >= C is TRUE",
        explanation:
          "A >= B and B >= C, so by transitivity A >= C.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: C >= D",
        expression: "C <= D",
        result: "C >= D is FALSE",
        explanation:
          "The statement says C <= D, which is the opposite of C >= D. Conclusion II contradicts the given information.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: No",
        result: "Only Conclusion I follows",
        explanation:
          "Conclusion I follows from the left sub-chain. Conclusion II directly contradicts the statement.",
      },
    ],
    answer: "(A) Only I",
    difficulty: "easy",
  },
  {
    id: "ineq-p10",
    topic: "inequalities",
    title: "SSC CGL 2024: Combining Two Statements",
    question:
      "Statements: T < S < D = F, F >= Q > E = R. Conclusions: (I) R < D (II) Q > T. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Combine statements into one chain",
        expression: "T < S < D = F >= Q > E = R",
        result: "Single chain formed",
        explanation:
          "Since D = F appears in both statements, combine: T < S < D = F >= Q > E = R.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: R < D",
        expression: "D = F >= Q > E = R",
        result: "R < D is TRUE",
        explanation:
          "D = F >= Q > E = R. Since Q > R and F >= Q, we get F > R. Since D = F, D > R.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: Q > T",
        expression: "T < S < D = F >= Q",
        result: "Cannot be determined",
        explanation:
          "T < D and D >= Q. If D = Q then T < Q. But if D > Q significantly, Q could be close to T or even less. The >= at F blocks a strict conclusion.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: No",
        result: "Only Conclusion I follows",
        explanation:
          "Conclusion I follows from the right sub-chain. Conclusion II cannot be established definitively.",
      },
    ],
    answer: "(A) Only I",
    difficulty: "easy",
  },

  // ── Medium (p11-p20): SSC CGL Tier 1 advanced, IBPS Clerk level ──
  {
    id: "ineq-p11",
    topic: "inequalities",
    title: "SSC CGL 2023: Five-Variable Mixed Operators",
    question:
      "Symbols: ^ means >, ~ means <=, * means >=. Statements: A ^ B ~ C * D ^ E. Conclusions: (I) A > E (II) C >= E. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A ^ B ~ C * D ^ E",
        result: "A > B <= C >= D > E",
        explanation:
          "Replace: ^ becomes >, ~ becomes <=, * becomes >=.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A > E",
        expression: "A > B <= C — direction reverses at B",
        result: "Cannot be determined",
        explanation:
          "A > B but B <= C, so the chain reverses. We cannot link A and E definitively.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: C >= E",
        expression: "C >= D > E",
        result: "C >= E is TRUE",
        explanation:
          "C >= D and D > E gives C > E by transitivity, which satisfies C >= E.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: No | II: Yes",
        result: "Only Conclusion II follows",
        explanation:
          "Conclusion I fails at the reversal. Conclusion II holds from the right sub-chain C >= D > E.",
      },
    ],
    answer: "(B) Only II",
    difficulty: "medium",
  },
  {
    id: "ineq-p12",
    topic: "inequalities",
    title: "IBPS Clerk 2023: Negation-Based Coding",
    question:
      "Symbols: $ means 'not greater than' (<=), @ means 'not less than' (>=), # means 'not equal to and not less than' (>). Statements: A @ B # C $ D @ E. Conclusions: (I) A > C (II) D > A. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode negation-based symbols",
        expression: "$ = not(>) = <= | @ = not(<) = >= | # = not(=,<) = >",
        result: "A >= B > C <= D >= E",
        explanation:
          "$ means 'not greater than' which is <=. @ means 'not less than' which is >=. # means 'neither equal nor less' which is >.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: A > C",
        expression: "A >= B > C",
        result: "A > C is TRUE",
        explanation:
          "A >= B and B > C. Since B > C and A >= B, we get A > C.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: D > A",
        expression: "A >= B > C <= D",
        result: "Cannot be determined",
        explanation:
          "A > C and C <= D. Both A and D are related to C but the chain reverses at C. D could be greater or less than A.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: No",
        result: "Only Conclusion I follows",
        explanation:
          "The left sub-chain gives Conclusion I. The reversal at C blocks Conclusion II.",
      },
    ],
    answer: "(A) Only I",
    difficulty: "medium",
  },
  {
    id: "ineq-p13",
    topic: "inequalities",
    title: "SSC CGL 2024: Six-Variable Double Reversal",
    question:
      "Symbols: @ means <, # means >, $ means =. Statements: W @ X # Y $ Z @ A # B. Conclusions: (I) X > Z (II) W < B. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "W @ X # Y $ Z @ A # B",
        result: "W < X > Y = Z < A > B",
        explanation:
          "Replace: @ becomes <, # becomes >, $ becomes =.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: X > Z",
        expression: "X > Y = Z",
        result: "X > Z is TRUE",
        explanation:
          "X > Y and Y = Z gives X > Z by substitution.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: W < B",
        expression: "W < X > Y = Z < A > B",
        result: "Cannot be determined",
        explanation:
          "W < X but X > Y introduces a reversal at X. Then Z < A but A > B introduces another reversal at A. Cannot link W and B.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: Yes | II: No",
        result: "Only Conclusion I follows",
        explanation:
          "Conclusion I uses a consistent sub-chain X > Y = Z. Conclusion II spans multiple reversals.",
      },
    ],
    answer: "(A) Only I",
    difficulty: "medium",
  },
  {
    id: "ineq-p14",
    topic: "inequalities",
    title: "IBPS Clerk 2022: Three Conclusions Mixed Chain",
    question:
      "Symbols: @ means >=, # means <, $ means <=. Statements: P @ Q # R $ S @ T. Conclusions: (I) P > T (II) Q < S (III) R <= T. Which follow? (A) Only II (B) I and III (C) Only III (D) None",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "P @ Q # R $ S @ T",
        result: "P >= Q < R <= S >= T",
        explanation:
          "Replace: @ becomes >=, # becomes <, $ becomes <=.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: P > T",
        expression: "P >= Q < R — reversal at Q",
        result: "Cannot be determined",
        explanation:
          "The chain reverses direction at Q. P cannot be linked to T definitively.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: Q < S",
        expression: "Q < R <= S",
        result: "Q < S is TRUE",
        explanation:
          "Q < R and R <= S gives Q < S by transitivity.",
      },
      {
        id: 4,
        operation: "Check Conclusion III: R <= T",
        expression: "R <= S >= T — reversal at S",
        result: "Cannot be determined",
        explanation:
          "R <= S and S >= T. S is the peak; R could be less, equal, or greater than T.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: No | II: Yes | III: No",
        result: "Only Conclusion II follows",
        explanation:
          "Only the Q-R-S sub-chain is consistent enough to derive a conclusion.",
      },
    ],
    answer: "(A) Only II",
    difficulty: "medium",
  },
  {
    id: "ineq-p15",
    topic: "inequalities",
    title: "IBPS PO 2023: Coded Symbols with Four Conclusions",
    question:
      "Symbols: $ means >=, @ means >, # means <, ^ means =, * means <=. Statements: H @ T, T # F, F ^ E, E * V. Conclusions: (I) V >= F (II) E > T (III) H > V (IV) T < V. Which follow? (A) I, II, IV (B) I, II, III (C) All four (D) None",
    steps: [
      {
        id: 1,
        operation: "Decode and chain",
        expression: "H > T, T < F, F = E, E <= V",
        result: "H > T < F = E <= V",
        explanation:
          "Decode each symbol and arrange: H > T < F = E <= V.",
      },
      {
        id: 2,
        operation: "Check I: V >= F",
        expression: "F = E <= V",
        result: "V >= F is TRUE",
        explanation:
          "F = E and E <= V, so F <= V, meaning V >= F.",
      },
      {
        id: 3,
        operation: "Check II: E > T",
        expression: "T < F = E",
        result: "E > T is TRUE",
        explanation:
          "T < F and F = E, so T < E, meaning E > T.",
      },
      {
        id: 4,
        operation: "Check III: H > V",
        expression: "H > T < F = E <= V",
        result: "Cannot be determined",
        explanation:
          "H > T but T < F introduces a reversal at T. H and V are on different sides of the reversal.",
      },
      {
        id: 5,
        operation: "Check IV: T < V",
        expression: "T < F = E <= V",
        result: "T < V is TRUE",
        explanation:
          "T < F, F = E, E <= V, so T < V by transitivity.",
      },
    ],
    answer: "(A) I, II, IV",
    difficulty: "medium",
  },
  {
    id: "ineq-p16",
    topic: "inequalities",
    title: "SSC CGL 2024: Combining Multiple Statements",
    question:
      "Statements: T < D > G, P < F = T. Conclusions: (I) P < G (II) G > T. Which conclusion(s) follow? (A) Only I (B) Only II (C) Both (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Combine statements via T",
        expression: "P < F = T < D > G",
        result: "Single chain formed",
        explanation:
          "T appears in both statements. Combining: P < F = T < D > G.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: P < G",
        expression: "P < F = T < D > G — reversal at D",
        result: "Cannot be determined",
        explanation:
          "P < T < D, but D > G reverses direction. P could be less or greater than G.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: G > T",
        expression: "T < D > G — reversal at D",
        result: "Cannot be determined",
        explanation:
          "T < D and D > G. Both T and G are less than D, but T vs G is unknown.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "I: No | II: No",
        result: "Neither conclusion follows",
        explanation:
          "The reversal at D prevents establishing either conclusion.",
      },
    ],
    answer: "(D) Neither",
    difficulty: "medium",
  },
  {
    id: "ineq-p17",
    topic: "inequalities",
    title: "IBPS Clerk 2024: Either-Or Complementary Pair",
    question:
      "Statements: N < O; Q <= P = O; S > P; R >= O. Conclusions: (I) S > R (II) R >= S. Which conclusion(s) follow? (A) Only I (B) Only II (C) Either I or II (D) Neither",
    steps: [
      {
        id: 1,
        operation: "Combine all statements",
        expression: "Q <= P = O, N < O, S > P, R >= O",
        result: "S > P = O and R >= O",
        explanation:
          "S > P = O means S > O. R >= O. So both S > O and R >= O hold.",
      },
      {
        id: 2,
        operation: "Derive S vs R",
        expression: "S > O and R >= O",
        result: "Cannot determine definitively",
        explanation:
          "If R = O, then S > O = R means S > R. If R > O, we cannot compare S and R. So it is indeterminate.",
      },
      {
        id: 3,
        operation: "Check if complementary pair",
        expression: "I: S > R and II: R >= S",
        result: "These are complementary",
        explanation:
          "S > R and R >= S are mutually exclusive and exhaustive. Exactly one must be true.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Neither can be confirmed individually, but one must hold",
        result: "Either I or II follows",
        explanation:
          "Since we cannot determine which holds but one must, the answer is Either I or II.",
      },
    ],
    answer: "(C) Either I or II",
    difficulty: "medium",
  },
  {
    id: "ineq-p18",
    topic: "inequalities",
    title: "SSC CGL 2023: Nested Chain with Three Conclusions",
    question:
      "Symbols: @ means >, # means <, $ means =. Statements: M @ N $ O # P @ Q. Conclusions: (I) M > O (II) N < P (III) O < Q. Which follow? (A) I and II only (B) II and III (C) I only (D) All three",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "M @ N $ O # P @ Q",
        result: "M > N = O < P > Q",
        explanation:
          "Replace: @ becomes >, $ becomes =, # becomes <.",
      },
      {
        id: 2,
        operation: "Check Conclusion I: M > O",
        expression: "M > N = O",
        result: "M > O is TRUE",
        explanation:
          "M > N and N = O, so M > O by substitution.",
      },
      {
        id: 3,
        operation: "Check Conclusion II: N < P",
        expression: "N = O < P",
        result: "N < P is TRUE",
        explanation:
          "N = O and O < P, so N < P by transitivity.",
      },
      {
        id: 4,
        operation: "Check Conclusion III: O < Q",
        expression: "O < P > Q — reversal at P",
        result: "Cannot be determined",
        explanation:
          "O < P and P > Q. The direction reverses at P, so O vs Q is indeterminate.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: Yes | II: Yes | III: No",
        result: "Only Conclusions I and II follow",
        explanation:
          "I and II follow by transitivity. III is indeterminate due to direction reversal at P.",
      },
    ],
    answer: "(A) I and II only",
    difficulty: "medium",
  },
  {
    id: "ineq-p19",
    topic: "inequalities",
    title: "IBPS PO 2022: Long Chain with Three Conclusions",
    question:
      "Statements: Z = Y >= X > W, W >= V >= U = Q, Q > O = P >= I. Conclusions: (I) Z >= Q (II) I <= W (III) X > P. Which follow? (A) Only III (B) I and II (C) All three (D) None",
    steps: [
      {
        id: 1,
        operation: "Combine into single chain",
        expression: "Z = Y >= X > W >= V >= U = Q > O = P >= I",
        result: "Complete chain formed",
        explanation:
          "Link via W (chains 1-2) and Q (chains 2-3). Full chain: Z = Y >= X > W >= V >= U = Q > O = P >= I.",
      },
      {
        id: 2,
        operation: "Check I: Z >= Q",
        expression: "Z = Y >= X > W >= V >= U = Q",
        result: "Z >= Q is TRUE",
        explanation:
          "Z >= X > W >= U = Q. Since Z >= X and X > W >= Q, Z > Q, satisfying Z >= Q.",
      },
      {
        id: 3,
        operation: "Check II: I <= W",
        expression: "W >= V >= U = Q > O = P >= I",
        result: "I <= W is TRUE",
        explanation:
          "W >= U = Q > P >= I. So W >= Q > I, meaning W > I, satisfying I <= W.",
      },
      {
        id: 4,
        operation: "Check III: X > P",
        expression: "X > W >= V >= U = Q > O = P",
        result: "X > P is TRUE",
        explanation:
          "X > W >= U = Q > O = P. By transitivity, X > P.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: Yes | II: Yes | III: Yes",
        result: "All three conclusions follow",
        explanation:
          "The chain flows consistently from Z down to I, allowing all three conclusions.",
      },
    ],
    answer: "(C) All three",
    difficulty: "medium",
  },
  {
    id: "ineq-p20",
    topic: "inequalities",
    title: "SBI Clerk 2023: Which Is Definitely True",
    question:
      "Statements: R > O = A > S < T. Which of the following is definitely true? (A) T > R (B) S < R (C) T > O (D) A < T",
    steps: [
      {
        id: 1,
        operation: "Analyse the chain",
        expression: "R > O = A > S < T",
        result: "Chain identified with reversal at S",
        explanation:
          "The chain flows: R > O = A > S, then reverses at S: S < T.",
      },
      {
        id: 2,
        operation: "Check (A): T > R",
        expression: "R > A > S < T — reversal at S",
        result: "Cannot be determined",
        explanation:
          "R > S and S < T, but R vs T is unknown due to the reversal at S.",
      },
      {
        id: 3,
        operation: "Check (B): S < R",
        expression: "R > O = A > S",
        result: "S < R is TRUE",
        explanation:
          "R > O = A > S. By transitivity, R > S, meaning S < R. This is definitely true.",
      },
      {
        id: 4,
        operation: "Verify remaining options",
        expression: "(C) T > O and (D) A < T both involve the reversal at S",
        result: "Both are indeterminate",
        explanation:
          "T is only linked through S, and the reversal at S blocks definitive comparisons with O or A.",
      },
    ],
    answer: "(B) S < R",
    difficulty: "medium",
  },

  // ── Hard (p21-p30): IBPS PO, SBI PO, UPSC CSAT level ────────────
  {
    id: "ineq-p21",
    topic: "inequalities",
    title: "IBPS PO 2023: Seven-Variable Cascading Chain",
    question:
      "Symbols: @ means >=, # means >, $ means <, % means <=. Statements: A @ B # C $ D % E @ F # G. Conclusions: (I) B > G (II) A >= G (III) D <= F. Which follow? (A) Only III (B) I and II (C) All (D) None",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "A @ B # C $ D % E @ F # G",
        result: "A >= B > C < D <= E >= F > G",
        explanation:
          "Replace: @ becomes >=, # becomes >, $ becomes <, % becomes <=.",
      },
      {
        id: 2,
        operation: "Check I: B > G",
        expression: "B > C < D — reversal at C",
        result: "Cannot be determined",
        explanation:
          "B > C but C < D introduces a reversal. B cannot be linked to anything beyond C.",
      },
      {
        id: 3,
        operation: "Check II: A >= G",
        expression: "Same reversal at C blocks A from reaching G",
        result: "Cannot be determined",
        explanation:
          "A >= B > C, but C < D introduces a reversal. A vs G is indeterminate.",
      },
      {
        id: 4,
        operation: "Check III: D <= F",
        expression: "D <= E >= F — reversal at E",
        result: "Cannot be determined",
        explanation:
          "D <= E and E >= F. E is a peak; D could be greater, equal, or less than F.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: No | II: No | III: No",
        result: "None of the conclusions follows",
        explanation:
          "Multiple direction reversals at C and E make all three conclusions indeterminate.",
      },
    ],
    answer: "(D) None",
    difficulty: "hard",
  },
  {
    id: "ineq-p22",
    topic: "inequalities",
    title: "IBPS PO 2024: Complementary + Definite Mixed",
    question:
      "Symbols: @ means >, # means <, $ means >=. Statements: P @ Q # R $ S @ T. Conclusions: (I) P <= R (II) P > R (III) S > Q. Which follow? (A) Only III (B) Either I or II (C) Either I or II, and also III (D) None",
    steps: [
      {
        id: 1,
        operation: "Decode symbols",
        expression: "P @ Q # R $ S @ T",
        result: "P > Q < R >= S > T",
        explanation:
          "Replace: @ becomes >, # becomes <, $ becomes >=.",
      },
      {
        id: 2,
        operation: "Check I and II as potential complementary pair",
        expression: "P > Q < R — reversal at Q",
        result: "Both I (P <= R) and II (P > R) are indeterminate",
        explanation:
          "P > Q and Q < R. Both P and R exceed Q, but their mutual relationship is unknown.",
      },
      {
        id: 3,
        operation: "Apply complementary pair rule",
        expression: "I: P <= R and II: P > R cover all cases",
        result: "Either I or II must be true",
        explanation:
          "P <= R and P > R are mutually exclusive and exhaustive.",
      },
      {
        id: 4,
        operation: "Check III: S > Q",
        expression: "Q < R >= S — reversal at R",
        result: "Cannot be determined",
        explanation:
          "Q < R and R >= S. Q and S are both <= R, but Q vs S is indeterminate.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Either I or II follows; III does not",
        result: "Either I or II",
        explanation:
          "Conclusions I and II form a complementary pair. Conclusion III is indeterminate.",
      },
    ],
    answer: "(B) Either I or II",
    difficulty: "hard",
  },
  {
    id: "ineq-p23",
    topic: "inequalities",
    title: "SBI PO 2023: Eight-Variable Negation Coding",
    question:
      "Symbols: $ means 'not greater than' (<=), @ means 'not less than' (>=), # means 'not equal to and not less than' (>). Statements: A @ B # C $ D @ E # F $ G @ H. Conclusions: (I) B > F (II) A >= H (III) D >= H. Which follow? (A) Only I (B) I and III (C) Only III (D) None",
    steps: [
      {
        id: 1,
        operation: "Decode negation-based symbols",
        expression: "$ = <=, @ = >=, # = >",
        result: "A >= B > C <= D >= E > F <= G >= H",
        explanation:
          "Full chain: A >= B > C <= D >= E > F <= G >= H. Reversals occur at C and F.",
      },
      {
        id: 2,
        operation: "Check I: B > F",
        expression: "B > C <= D — reversal at C",
        result: "Cannot be determined",
        explanation:
          "B > C but C <= D introduces a reversal. B cannot be linked to F.",
      },
      {
        id: 3,
        operation: "Check II: A >= H",
        expression: "Multiple reversals at C and F",
        result: "Cannot be determined",
        explanation:
          "The chain has reversals at C and F, preventing any connection between A and H.",
      },
      {
        id: 4,
        operation: "Check III: D >= H",
        expression: "D >= E > F <= G >= H — reversal at F",
        result: "Cannot be determined",
        explanation:
          "D >= E > F gives D > F, but F <= G >= H introduces a new sub-chain. D vs H is indeterminate.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: No | II: No | III: No",
        result: "None of the conclusions follows",
        explanation:
          "Multiple direction reversals make all three conclusions indeterminate.",
      },
    ],
    answer: "(D) None",
    difficulty: "hard",
  },
  {
    id: "ineq-p24",
    topic: "inequalities",
    title: "SBI PO 2022: Alternative Coded Symbols",
    question:
      "Symbols: (c) means <=, # means <, @ means =, (e) means >, $ means >=. Statements: A # N, S $ N, S (e) W, W (c) R. Conclusions: (I) R > S (II) N <= W (III) A < R. Which follow? (A) Only II (B) II and III (C) Only III (D) None",
    steps: [
      {
        id: 1,
        operation: "Decode and chain",
        expression: "A < N, S >= N, S > W, W <= R",
        result: "A < N <= S > W <= R",
        explanation:
          "From S >= N: N <= S. From S > W: chain direction. Full: A < N <= S > W <= R.",
      },
      {
        id: 2,
        operation: "Check I: R > S",
        expression: "S > W <= R — reversal at W",
        result: "Cannot be determined",
        explanation:
          "S > W and W <= R. R could be greater, equal, or less than S.",
      },
      {
        id: 3,
        operation: "Check II: N <= W",
        expression: "N <= S > W — reversal at S",
        result: "Cannot be determined",
        explanation:
          "N <= S and S > W. Both N and W are less than or equal to S, but N vs W is unknown.",
      },
      {
        id: 4,
        operation: "Check III: A < R",
        expression: "A < N <= S > W <= R — reversal at S",
        result: "Cannot be determined",
        explanation:
          "A < S and S > W <= R. The reversal at S blocks linking A to R.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: No | II: No | III: No",
        result: "None follows",
        explanation:
          "Multiple reversals prevent establishing any conclusion.",
      },
    ],
    answer: "(D) None",
    difficulty: "hard",
  },
  {
    id: "ineq-p25",
    topic: "inequalities",
    title: "IBPS PO 2024: Three Statements, All Three Follow",
    question:
      "Statements: D >= E > F; G < H <= F; H > I. Conclusions: (I) D > H (II) I < E (III) F > I. Which follow? (A) I and II (B) II and III (C) All three (D) Only I",
    steps: [
      {
        id: 1,
        operation: "Combine statements via F and H",
        expression: "D >= E > F >= H > I and G < H",
        result: "D >= E > F >= H > I",
        explanation:
          "From H <= F: F >= H. Combined main chain: D >= E > F >= H > I. Also G < H.",
      },
      {
        id: 2,
        operation: "Check I: D > H",
        expression: "D >= E > F >= H",
        result: "D > H is TRUE",
        explanation:
          "D >= E and E > F gives D > F. Since F >= H, D > H.",
      },
      {
        id: 3,
        operation: "Check II: I < E",
        expression: "E > F >= H > I",
        result: "I < E is TRUE",
        explanation:
          "E > F >= H > I. By transitivity, E > I.",
      },
      {
        id: 4,
        operation: "Check III: F > I",
        expression: "F >= H > I",
        result: "F > I is TRUE",
        explanation:
          "F >= H and H > I. Since H > I and F >= H, F > I.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: Yes | II: Yes | III: Yes",
        result: "All three follow",
        explanation:
          "The combined chain D >= E > F >= H > I flows consistently, enabling all conclusions.",
      },
    ],
    answer: "(C) All three",
    difficulty: "hard",
  },
  {
    id: "ineq-p26",
    topic: "inequalities",
    title: "UPSC CSAT 2023: Branching Chain",
    question:
      "Statements: S > T > V <= W < X; V > P > U. Conclusions: (I) S > U (II) P < X (III) S > X. Which follow? (A) I and II (B) Only I (C) II and III (D) All three",
    steps: [
      {
        id: 1,
        operation: "Map relationships",
        expression: "S > T > V <= W < X and V > P > U",
        result: "Two chains sharing V",
        explanation:
          "Chain 1: S > T > V <= W < X. Chain 2 (branching at V): V > P > U.",
      },
      {
        id: 2,
        operation: "Check I: S > U",
        expression: "S > T > V > P > U",
        result: "S > U is TRUE",
        explanation:
          "S > T > V from chain 1, and V > P > U from chain 2. By transitivity, S > U.",
      },
      {
        id: 3,
        operation: "Check II: P < X",
        expression: "P < V <= W < X",
        result: "P < X is TRUE",
        explanation:
          "P < V and V <= W < X. So P < V <= W < X, meaning P < X.",
      },
      {
        id: 4,
        operation: "Check III: S > X",
        expression: "S > T > V <= W < X — reversal at V",
        result: "Cannot be determined",
        explanation:
          "S > V but V <= W < X. The reversal at V means S could be greater or less than X.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: Yes | II: Yes | III: No",
        result: "Only I and II follow",
        explanation:
          "I and II use consistent sub-chains. III fails at the V reversal.",
      },
    ],
    answer: "(A) I and II",
    difficulty: "hard",
  },
  {
    id: "ineq-p27",
    topic: "inequalities",
    title: "IBPS PO 2023: Complex Three-Statement Merge",
    question:
      "Statements: L > M = P < Q > R; S <= O < N; R > G > N. Conclusions: (I) Q > S (II) S < G (III) M < G. Which follow? (A) Only I (B) I and II (C) II and III (D) All three",
    steps: [
      {
        id: 1,
        operation: "Combine using R and N as links",
        expression: "L > M = P < Q > R > G > N > O >= S",
        result: "Full chain formed",
        explanation:
          "Link via R (chains 1-3) and N (chains 3-2). S <= O < N, and R > G > N. So: Q > R > G > N > O >= S.",
      },
      {
        id: 2,
        operation: "Check I: Q > S",
        expression: "Q > R > G > N > O >= S",
        result: "Q > S is TRUE",
        explanation:
          "Following the chain: Q > R > G > N > O >= S. By transitivity, Q > S.",
      },
      {
        id: 3,
        operation: "Check II: S < G",
        expression: "G > N > O >= S",
        result: "S < G is TRUE",
        explanation:
          "G > N > O >= S, so G > S.",
      },
      {
        id: 4,
        operation: "Check III: M < G",
        expression: "M = P < Q > R > G — reversal at Q",
        result: "Cannot be determined",
        explanation:
          "M < Q and Q > G. Both M and G are less than Q, but M vs G is indeterminate.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: Yes | II: Yes | III: No",
        result: "Only I and II follow",
        explanation:
          "I and II follow from the consistent right-side chain. III fails at the Q reversal.",
      },
    ],
    answer: "(B) I and II",
    difficulty: "hard",
  },
  {
    id: "ineq-p28",
    topic: "inequalities",
    title: "SBI PO 2024: Combined Chain with Reversal",
    question:
      "Statements: O >= B, B = S, S < E, E <= R. Conclusions: (I) O >= S (II) R > B (III) O > E (IV) R > O. Which follow? (A) Only I and II (B) I, II, and III (C) All four (D) Only I",
    steps: [
      {
        id: 1,
        operation: "Combine into single chain",
        expression: "O >= B = S < E <= R",
        result: "Chain with reversal at S",
        explanation:
          "Combine: O >= B = S < E <= R. Direction reverses at S (>= to <).",
      },
      {
        id: 2,
        operation: "Check I: O >= S",
        expression: "O >= B = S",
        result: "O >= S is TRUE",
        explanation:
          "O >= B and B = S, so O >= S.",
      },
      {
        id: 3,
        operation: "Check II: R > B",
        expression: "B = S < E <= R",
        result: "R > B is TRUE",
        explanation:
          "B = S < E <= R. Since S < E and E <= R, S < R. Since B = S, B < R, so R > B.",
      },
      {
        id: 4,
        operation: "Check III: O > E",
        expression: "O >= B = S < E — reversal at S",
        result: "Cannot be determined",
        explanation:
          "O >= S but S < E. O and E are on opposite sides of the reversal at S. O could be less than, equal to, or greater than E.",
      },
      {
        id: 5,
        operation: "Check IV: R > O — same reversal blocks this",
        expression: "O >= S < E <= R — reversal at S",
        result: "Cannot be determined",
        explanation:
          "The reversal at S prevents linking O and R definitively.",
      },
    ],
    answer: "(A) Only I and II",
    difficulty: "hard",
  },
  {
    id: "ineq-p29",
    topic: "inequalities",
    title: "IBPS PO 2024: Long Chain with Branching",
    question:
      "Statements: S > P = N <= L, O = L > U, U >= W > V. Conclusions: (I) S > U (II) L > V (III) N <= W. Which follow? (A) Only II (B) I and II (C) Only I (D) None",
    steps: [
      {
        id: 1,
        operation: "Combine using L and U as links",
        expression: "S > P = N <= L > U >= W > V and O = L",
        result: "S > P = N <= L > U >= W > V",
        explanation:
          "L appears in multiple statements. Combined: S > P = N <= L > U >= W > V. Also O = L.",
      },
      {
        id: 2,
        operation: "Check I: S > U",
        expression: "S > P = N <= L > U — reversal at N",
        result: "Cannot be determined",
        explanation:
          "S > N but N <= L > U. S > N and N <= L, so S vs L is indeterminate. Therefore S vs U is also indeterminate.",
      },
      {
        id: 3,
        operation: "Check II: L > V",
        expression: "L > U >= W > V",
        result: "L > V is TRUE",
        explanation:
          "L > U >= W > V. By transitivity, L > V.",
      },
      {
        id: 4,
        operation: "Check III: N <= W",
        expression: "N <= L > U >= W — reversal at L",
        result: "Cannot be determined",
        explanation:
          "N <= L and L > U >= W. N and W are on opposite sides of the peak at L.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: No | II: Yes | III: No",
        result: "Only Conclusion II follows",
        explanation:
          "Only the sub-chain L > U >= W > V is consistent enough to yield a conclusion.",
      },
    ],
    answer: "(A) Only II",
    difficulty: "hard",
  },
  {
    id: "ineq-p30",
    topic: "inequalities",
    title: "UPSC CSAT 2024: Multi-Branch with Either-Or",
    question:
      "Statements: A > B = C; C < D; D > E; F >= D. Conclusions: (I) F > C (II) A > E (III) F <= A (IV) F > A. Which follow? (A) Only I (B) I, and either III or IV (C) I and II (D) Either III or IV only",
    steps: [
      {
        id: 1,
        operation: "Combine statements",
        expression: "A > B = C < D > E and F >= D",
        result: "A > B = C < D > E; F >= D",
        explanation:
          "Main chain: A > B = C < D > E. Branch: F >= D. Reversal at C (from > to <).",
      },
      {
        id: 2,
        operation: "Check I: F > C",
        expression: "C < D and F >= D",
        result: "F > C is TRUE",
        explanation:
          "C < D (strict) and F >= D. So F >= D > C, meaning F > C.",
      },
      {
        id: 3,
        operation: "Check II: A > E",
        expression: "A > C < D > E — reversal at C",
        result: "Cannot be determined",
        explanation:
          "A > C and C < D > E. The reversal at C means A and D are on different sides. A vs D is unknown, so A vs E is unknown.",
      },
      {
        id: 4,
        operation: "Check III and IV: F <= A and F > A",
        expression: "A > C < D and F >= D — reversal at C",
        result: "Both individually indeterminate; complementary pair",
        explanation:
          "A > C < D and F >= D. A vs F is indeterminate due to the reversal at C. But F <= A and F > A are exhaustive and mutually exclusive, so exactly one must hold.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "I: Yes | II: No | III or IV: Either",
        result: "Conclusion I follows, and either III or IV follows",
        explanation:
          "F > C is definite. A vs E is indeterminate. F vs A forms a complementary pair.",
      },
    ],
    answer: "(B) I, and either III or IV",
    difficulty: "hard",
  },
]
