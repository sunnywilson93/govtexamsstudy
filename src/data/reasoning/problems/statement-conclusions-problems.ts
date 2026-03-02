import type { ReasoningProblem } from "@/types/reasoning"

export const statementConclusionsProblems: ReasoningProblem[] = [
  {
    id: "sc-p1",
    topic: "statement-conclusions",
    title: "Definite Conclusion from Universal Statement",
    question:
      "Statement: All students who practise daily pass the exam. Ravi practises daily. Conclusions: (I) Ravi will pass the exam. (II) Only daily practice guarantees passing.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "All (daily-practice students) → pass exam",
        result: "Universal affirmative: daily practice ⊆ pass",
        explanation: "The statement establishes a universal rule: every member of the 'practises daily' group is in the 'pass' group.",
      },
      {
        id: 2,
        operation: "Apply rule to Ravi",
        expression: "Ravi ∈ daily-practice → Ravi ∈ pass",
        result: "Conclusion I follows",
        explanation: "Since Ravi satisfies the condition (practises daily), he must be in the 'pass' group.",
      },
      {
        id: 3,
        operation: "Test Conclusion II",
        expression: "Does the statement say ONLY daily practice leads to passing?",
        result: "No — it only says daily practice → passing, not the reverse",
        explanation:
          "The statement does not rule out other paths to passing. Conclusion II introduces an exclusive claim not supported by the statement.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Valid | Concl II: Not supported",
        result: "Only Conclusion I follows.",
        explanation: "Conclusion I is a direct application of the universal rule. Conclusion II over-extends it.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p2",
    topic: "statement-conclusions",
    title: "Possible Conclusion from Particular Statement",
    question:
      "Statement: Some engineers are managers. Conclusions: (I) All managers are engineers. (II) Some managers are engineers.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Some engineers → managers",
        result: "Particular affirmative: engineers ∩ managers ≠ ∅",
        explanation: "The statement says a non-empty overlap exists between engineers and managers.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: All managers are engineers",
        expression: "Some engineers are managers ≠ All managers are engineers",
        result: "Conclusion I does NOT follow",
        explanation:
          "Particular statements cannot yield universal conclusions. Knowing some engineers are managers tells us nothing about all managers.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some managers are engineers",
        expression: "A ∩ B ≠ ∅ → B ∩ A ≠ ∅ (intersection is symmetric)",
        result: "Conclusion II FOLLOWS",
        explanation:
          "If some engineers are managers, then by symmetry of intersection, some managers are engineers.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: Yes",
        result: "Only Conclusion II follows.",
        explanation: "Particular statements only support particular conclusions; the symmetric form of the given statement is valid.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p3",
    topic: "statement-conclusions",
    title: "Negative Conclusion from No-Statement",
    question:
      "Statement: No plastic bag is environment-friendly. All shopping bags are plastic bags. Conclusions: (I) No shopping bag is environment-friendly. (II) Some shopping bags are environment-friendly.",
    steps: [
      {
        id: 1,
        operation: "Represent premises in set notation",
        expression: "Plastic ∩ Env-friendly = ∅ | Shopping ⊆ Plastic",
        result: "Plastic and env-friendly are disjoint; shopping is a subset of plastic",
        explanation: "First premise: complete exclusion between plastic and environment-friendly. Second: all shopping bags belong to plastic.",
      },
      {
        id: 2,
        operation: "Derive relationship: shopping vs env-friendly",
        expression: "Shopping ⊆ Plastic and Plastic ∩ Env-friendly = ∅ → Shopping ∩ Env-friendly = ∅",
        result: "No shopping bag is environment-friendly",
        explanation: "A subset of a set disjoint from another set is also disjoint from that other set.",
      },
      {
        id: 3,
        operation: "Test Conclusion I",
        expression: "No shopping bag is environment-friendly",
        result: "Conclusion I follows",
        explanation: "This is exactly what we derived in step 2.",
      },
      {
        id: 4,
        operation: "Test Conclusion II",
        expression: "Some shopping bags are environment-friendly — contradicts derivation",
        result: "Conclusion II does NOT follow",
        explanation: "We proved no shopping bag is environment-friendly. Conclusion II is the direct contradiction.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No",
        result: "Only Conclusion I follows.",
        explanation: "The syllogistic chain leads to a definite 'No shopping bag' result, confirming only Conclusion I.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p4",
    topic: "statement-conclusions",
    title: "Implicit Assumption Trap",
    question:
      "Statement: Regular exercise reduces the risk of heart disease. Conclusions: (I) People who never exercise will definitely get heart disease. (II) Regular exercise is one way to reduce heart disease risk.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Regular exercise → reduces heart disease risk",
        result: "Conditional: exercise ⟹ lower risk",
        explanation: "The statement is a conditional — exercise leads to risk reduction, not a biconditional.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: No exercise → definitely get heart disease",
        expression: "P → Q does NOT mean ¬P → ¬Q (inverse fallacy)",
        result: "Conclusion I is the inverse fallacy — does NOT follow",
        explanation:
          "The statement does not claim exercise is the only way to avoid heart disease. Concluding that non-exercisers will 'definitely' get it is a logical fallacy.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Exercise is one way to reduce risk",
        expression: "Statement directly says exercise reduces risk → one method confirmed",
        result: "Conclusion II follows",
        explanation:
          "Saying 'regular exercise reduces risk' implicitly confirms that exercise is at least one route to risk reduction.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Fallacy → No | Concl II: Direct restatement → Yes",
        result: "Only Conclusion II follows.",
        explanation: "Conclusion I commits the inverse fallacy. Conclusion II is a valid, cautious restatement of the premise.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "medium",
  },
  {
    id: "sc-p5",
    topic: "statement-conclusions",
    title: "Either/Neither Evaluation",
    question:
      "Statements: (1) Some doctors are singers. (2) All singers are painters. Conclusions: (I) Some doctors are painters. (II) All painters are doctors. (III) Some painters are doctors.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression: "Doctors ∩ Singers ≠ ∅ | Singers ⊆ Painters",
        result: "Overlap of doctors and singers; singers fully within painters",
        explanation: "Premise 1: partial overlap. Premise 2: singers are a subset of painters.",
      },
      {
        id: 2,
        operation: "Derive doctors-painters relation",
        expression: "Some doctors ∈ Singers and Singers ⊆ Painters → Some doctors ∈ Painters",
        result: "Some doctors are painters",
        explanation: "The doctors in the singers subset are also in the painters set.",
      },
      {
        id: 3,
        operation: "Test Conclusion I: Some doctors are painters",
        expression: "Derived in step 2",
        result: "Conclusion I follows",
        explanation: "Direct derivation from the combined premises.",
      },
      {
        id: 4,
        operation: "Test Conclusion II: All painters are doctors",
        expression: "Painters may include non-doctor singers and non-doctor non-singers",
        result: "Conclusion II does NOT follow",
        explanation: "Painters is a superset of singers. No rule forces all painters to be doctors.",
      },
      {
        id: 5,
        operation: "Test Conclusion III: Some painters are doctors",
        expression: "Some doctors are painters (I) → by symmetry some painters are doctors",
        result: "Conclusion III follows",
        explanation: "If some doctors are painters, then some painters are doctors (symmetric intersection).",
      },
      {
        id: 6,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No | Concl III: Yes",
        result: "Conclusions I and III follow.",
        explanation: "I and III are valid by derivation and symmetry. II is unsupported.",
      },
    ],
    answer: "Conclusions I and III follow.",
    difficulty: "medium",
  },
]
