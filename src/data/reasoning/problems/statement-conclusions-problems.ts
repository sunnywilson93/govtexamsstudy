import type { ReasoningProblem } from "@/types/reasoning"

export const statementConclusionsProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ─────────────────────────────────────────────
  {
    id: "sc-p1",
    topic: "statement-conclusions",
    title: "SSC CGL: Universal Affirmative — Direct Application",
    question:
      "Statement: All students who practise daily pass the exam. Ravi practises daily. Conclusions: (I) Ravi will pass the exam. (II) Only daily practice guarantees passing.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "All (daily-practice students) → pass exam",
        result: "Universal affirmative: daily practice ⊆ pass",
        explanation:
          "The statement establishes a universal rule: every member of the 'practises daily' group is in the 'pass' group.",
      },
      {
        id: 2,
        operation: "Apply rule to Ravi",
        expression: "Ravi ∈ daily-practice → Ravi ∈ pass",
        result: "Conclusion I follows",
        explanation:
          "Since Ravi satisfies the condition (practises daily), he must be in the 'pass' group.",
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
        explanation:
          "Conclusion I is a direct application of the universal rule. Conclusion II over-extends it.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p2",
    topic: "statement-conclusions",
    title: "IBPS PO: Particular Affirmative — Symmetric Conversion",
    question:
      "Statement: Some engineers are managers. Conclusions: (I) All managers are engineers. (II) Some managers are engineers.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Some engineers → managers",
        result: "Particular affirmative: Engineers ∩ Managers ≠ ∅",
        explanation:
          "The statement says a non-empty overlap exists between engineers and managers.",
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
        explanation:
          "Particular statements only support particular conclusions; the symmetric form of the given statement is valid.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p3",
    topic: "statement-conclusions",
    title: "SSC CGL: No + All Chain — Universal Negative Derivation",
    question:
      "Statement: No plastic bag is environment-friendly. All shopping bags are plastic bags. Conclusions: (I) No shopping bag is environment-friendly. (II) Some shopping bags are environment-friendly.",
    steps: [
      {
        id: 1,
        operation: "Represent premises in set notation",
        expression: "Plastic ∩ Env-friendly = ∅ | Shopping ⊆ Plastic",
        result:
          "Plastic and env-friendly are disjoint; shopping is a subset of plastic",
        explanation:
          "First premise: complete exclusion between plastic and environment-friendly. Second: all shopping bags belong to plastic.",
      },
      {
        id: 2,
        operation: "Derive relationship: shopping vs env-friendly",
        expression:
          "Shopping ⊆ Plastic and Plastic ∩ Env-friendly = ∅ → Shopping ∩ Env-friendly = ∅",
        result: "No shopping bag is environment-friendly",
        explanation:
          "A subset of a set disjoint from another set is also disjoint from that other set.",
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
        expression:
          "Some shopping bags are environment-friendly — contradicts derivation",
        result: "Conclusion II does NOT follow",
        explanation:
          "We proved no shopping bag is environment-friendly. Conclusion II is the direct contradiction.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p4",
    topic: "statement-conclusions",
    title: "SSC CGL: Universal to Particular Conversion",
    question:
      "Statement: All teachers are graduates. Conclusions: (I) Some graduates are teachers. (II) All graduates are teachers.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "All teachers → graduates",
        result: "Universal affirmative: Teachers ⊆ Graduates",
        explanation:
          "Every teacher belongs to the set of graduates. Teachers is a subset of Graduates.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Some graduates are teachers",
        expression: "Teachers ⊆ Graduates → Graduates ∩ Teachers ≠ ∅",
        result: "Conclusion I follows",
        explanation:
          "Since all teachers are graduates, there must be some graduates who are teachers (conversion of universal affirmative yields particular affirmative).",
      },
      {
        id: 3,
        operation: "Test Conclusion II: All graduates are teachers",
        expression: "Teachers ⊆ Graduates ≠ Graduates ⊆ Teachers",
        result: "Conclusion II does NOT follow",
        explanation:
          "The subset relation is one-way. There may be graduates who are not teachers.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No",
        result: "Only Conclusion I follows.",
        explanation:
          "Universal affirmative converts to particular affirmative, not to another universal.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p5",
    topic: "statement-conclusions",
    title: "IBPS Clerk: Particular Negative — No Affirmative Derivation",
    question:
      "Statement: Some birds are not parrots. Conclusions: (I) Some parrots are birds. (II) Some birds are parrots.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Some birds ∉ parrots",
        result: "Particular negative: part of Birds lies outside Parrots",
        explanation:
          "The statement only says some birds are outside the parrot set. It says nothing about the overlap.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Some parrots are birds",
        expression:
          "The statement does not confirm any overlap between parrots and birds",
        result: "Cannot be derived — does NOT follow definitively",
        explanation:
          "While common sense suggests parrots are birds, the statement alone does not establish this. From 'some birds are not parrots' we cannot logically derive 'some parrots are birds'.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some birds are parrots",
        expression: "Some birds ∉ parrots does not mean some birds ∈ parrots",
        result: "Cannot be derived — does NOT follow definitively",
        explanation:
          "The statement says some birds are NOT parrots, but does not confirm that any birds ARE parrots.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: No",
        result: "Neither conclusion follows.",
        explanation:
          "From a particular negative alone, no affirmative conclusion about the overlap can be drawn.",
      },
    ],
    answer: "Neither conclusion follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p6",
    topic: "statement-conclusions",
    title: "SSC CGL 2022: Shortlisted Candidate — Either/Or",
    question:
      "Statement: Mr. X is one of the probable candidates shortlisted for the post of Director of KLM Institute. Conclusions: (I) Mr. X will be selected as Director. (II) Mr. X will not be selected as Director.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Mr. X is shortlisted → possible, not certain outcome",
        result: "X's selection is uncertain",
        explanation:
          "Being shortlisted means he is a probable candidate. The outcome is not determined.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: X will be selected",
        expression: "Shortlisted ≠ Selected",
        result: "Not definite — does not follow alone",
        explanation:
          "Shortlisting does not guarantee selection. Conclusion I is a possibility, not a certainty.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: X will not be selected",
        expression: "Shortlisted ≠ Rejected",
        result: "Not definite — does not follow alone",
        explanation:
          "Being shortlisted does not mean rejection either. Conclusion II is also a possibility.",
      },
      {
        id: 4,
        operation: "Check complementary pair",
        expression:
          "I and II are mutually exclusive and exhaustive — one must be true",
        result: "Either Conclusion I or Conclusion II follows.",
        explanation:
          "He will either be selected or not selected. These are complementary outcomes, so 'either I or II' follows.",
      },
    ],
    answer: "Either Conclusion I or Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p7",
    topic: "statement-conclusions",
    title: "RRB NTPC: Vegetable Prices — Neither Follows",
    question:
      "Statement: Vegetable prices are soaring in the market. Conclusions: (I) Vegetables are becoming a rare commodity. (II) People cannot eat vegetables.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Vegetable prices are increasing",
        result: "Factual: prices are rising",
        explanation:
          "The statement is about price increase, not about availability or consumption.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Vegetables are becoming rare",
        expression: "Price increase ≠ Scarcity",
        result: "Does not follow",
        explanation:
          "Rising prices can have multiple causes — demand exceeding supply, inflation, hoarding. Scarcity is one possible cause but is not implied.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: People cannot eat vegetables",
        expression: "Higher prices ≠ Complete inability to consume",
        result: "Does not follow",
        explanation:
          "Even with higher prices, people can still buy and eat vegetables. The conclusion is extreme and unsupported.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: No",
        result: "Neither conclusion follows.",
        explanation:
          "Both conclusions make jumps not supported by the statement. Price increase alone does not establish scarcity or inability to consume.",
      },
    ],
    answer: "Neither conclusion follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p8",
    topic: "statement-conclusions",
    title: "SSC CGL: Chained Statements — All + Some",
    question:
      "Statements: (1) All roses are flowers. (2) Some flowers are thorny. Conclusions: (I) Some roses are thorny. (II) Some thorny things are flowers.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression: "Roses ⊆ Flowers | Flowers ∩ Thorny ≠ ∅",
        result: "Roses inside Flowers; Flowers overlaps with Thorny",
        explanation:
          "All roses are flowers, and some flowers are thorny. The thorny overlap may or may not include roses.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Some roses are thorny",
        expression: "The thorny flowers might not include any roses",
        result: "Conclusion I does NOT follow",
        explanation:
          "The overlap between Flowers and Thorny does not necessarily touch the Roses subset.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some thorny things are flowers",
        expression: "Flowers ∩ Thorny ≠ ∅ → Thorny ∩ Flowers ≠ ∅ (symmetric)",
        result: "Conclusion II follows",
        explanation:
          "If some flowers are thorny, then by symmetry, some thorny things are flowers.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: Yes",
        result: "Only Conclusion II follows.",
        explanation:
          "Conclusion I fails because the thorny overlap may exclude roses. Conclusion II is a direct symmetric conversion.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p9",
    topic: "statement-conclusions",
    title: "IBPS PO: Fisherman Storm — Either/Or Pattern",
    question:
      "Statement: Of ten fishermen caught in a storm, nine managed to return to the shore. Praveen has not yet returned after four days. Conclusions: (I) Praveen got killed in the storm. (II) Praveen has survived the storm.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "9 of 10 returned. Praveen is the 10th, not returned after 4 days.",
        result: "Praveen's fate is unknown",
        explanation:
          "The statement does not confirm whether Praveen is alive or dead — only that he has not returned.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Praveen got killed",
        expression: "Not returning ≠ Death confirmed",
        result: "Possible but not certain",
        explanation:
          "He may have died, but could also be stranded, injured, or rescued elsewhere.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Praveen survived",
        expression: "Not returning ≠ Survival confirmed",
        result: "Possible but not certain",
        explanation: "He may have survived but there is no confirmation.",
      },
      {
        id: 4,
        operation: "Check complementary pair",
        expression:
          "Killed or survived — mutually exclusive and exhaustive outcomes",
        result: "Either Conclusion I or Conclusion II follows.",
        explanation:
          "Praveen either died or survived. These are the only two possible outcomes, making them complementary.",
      },
    ],
    answer: "Either Conclusion I or Conclusion II follows.",
    difficulty: "easy",
  },
  {
    id: "sc-p10",
    topic: "statement-conclusions",
    title: "SSC CGL 2023: VCR Import — Direct Inference",
    question:
      "Statement: You don't need an import licence to own a VCR. Conclusions: (I) VCRs are now manufactured domestically. (II) VCRs are freely permitted for import.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "No import licence needed to own a VCR",
        result: "Import restrictions have been lifted for VCRs",
        explanation:
          "The statement removes the licensing requirement, implying free import.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: VCRs are manufactured domestically",
        expression: "No licence ≠ Domestic manufacturing confirmed",
        result: "Does not follow",
        explanation:
          "The absence of an import licence requirement does not imply domestic manufacturing. They could be imported freely.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: VCRs are freely permitted for import",
        expression:
          "No import licence requirement → free import is a reasonable inference",
        result: "Conclusion II follows",
        explanation:
          "If no import licence is required, the most direct interpretation is that VCRs can be freely imported.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: Yes",
        result: "Only Conclusion II follows.",
        explanation:
          "Only free import is directly supported. Domestic manufacturing is an unwarranted assumption.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ──────────────────────────────────────────
  {
    id: "sc-p11",
    topic: "statement-conclusions",
    title: "IBPS PO 2023: Policy Statement — Budget Allocation",
    question:
      "Statement: The government has increased the budget allocation for rural education by 30%. Conclusions: (I) The government considers rural education a priority. (II) Urban education will suffer due to this allocation.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Government → increased rural education budget by 30%",
        result: "Factual statement about budget increase",
        explanation:
          "The statement is about a specific budgetary action — a 30% increase for rural education.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Rural education is a priority",
        expression: "Increased budget → signals priority",
        result: "Conclusion I follows (reasonable inference)",
        explanation:
          "A 30% budget increase strongly implies the government considers rural education important.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Urban education will suffer",
        expression: "More for rural ≠ less for urban",
        result: "Conclusion II does NOT follow",
        explanation:
          "The statement says nothing about urban education. The total budget may have increased, leaving urban allocations unchanged.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No",
        result: "Only Conclusion I follows.",
        explanation:
          "Conclusion I is a reasonable inference. Conclusion II assumes a zero-sum budget, which is not stated.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "medium",
  },
  {
    id: "sc-p12",
    topic: "statement-conclusions",
    title: "SSC CGL 2022: Double Negative — Honest and Corrupt",
    question:
      "Statement: No honest person is corrupt. No corrupt person is respected. Conclusions: (I) No honest person is respected. (II) Some respected persons may be honest.",
    steps: [
      {
        id: 1,
        operation: "Parse both statements",
        expression: "Honest ∩ Corrupt = ∅ | Corrupt ∩ Respected = ∅",
        result:
          "Honest and Corrupt are disjoint; Corrupt and Respected are disjoint",
        explanation:
          "Both statements establish universal negatives (complete exclusion).",
      },
      {
        id: 2,
        operation: "Test Conclusion I: No honest person is respected",
        expression:
          "Honest ∩ Corrupt = ∅ and Corrupt ∩ Respected = ∅ — what about Honest ∩ Respected?",
        result: "Indeterminate — Honest and Respected can still overlap",
        explanation:
          "Honest people are not corrupt, and corrupt people are not respected. But honest people could still be respected through a non-corrupt path. From two universal negatives, no valid conclusion follows in classical syllogism.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some respected persons may be honest",
        expression: "Nothing prevents Honest ∩ Respected overlap",
        result: "This is a possibility — valid in exam logic",
        explanation:
          "Since nothing excludes honest people from being respected, this possibility exists. 'May be' makes it a possibility conclusion, which is considered valid.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression:
          "Concl I: No (two negatives yield no conclusion) | Concl II: Yes (possibility)",
        result: "Only Conclusion II follows.",
        explanation:
          "Two universal negative premises do not yield a valid conclusion. But the possibility that some respected persons are honest is valid.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "medium",
  },
  {
    id: "sc-p13",
    topic: "statement-conclusions",
    title: "IBPS PO: All + All Chain — Transitive Reasoning",
    question:
      "Statements: (1) All books are papers. (2) All papers are recyclable. Conclusions: (I) All books are recyclable. (II) Some recyclable things are books. (III) All recyclable things are books.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression: "Books ⊆ Papers ⊆ Recyclable",
        result: "Books inside Papers inside Recyclable (nested sets)",
        explanation:
          "Premise 1: Books ⊆ Papers. Premise 2: Papers ⊆ Recyclable. Therefore Books ⊆ Recyclable.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: All books are recyclable",
        expression: "Books ⊆ Papers ⊆ Recyclable → Books ⊆ Recyclable",
        result: "Conclusion I follows",
        explanation: "By transitivity, all books are recyclable.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some recyclable things are books",
        expression: "Books ⊆ Recyclable → Recyclable ∩ Books ≠ ∅",
        result: "Conclusion II follows",
        explanation:
          "Since books exist within recyclable, some recyclable things are certainly books.",
      },
      {
        id: 4,
        operation: "Test Conclusion III: All recyclable things are books",
        expression:
          "Recyclable is the superset — may contain non-book non-paper items",
        result: "Conclusion III does NOT follow",
        explanation:
          "Recyclable is the largest set. Many recyclable things may not be books or even papers.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes | Concl III: No",
        result: "Conclusions I and II follow.",
        explanation:
          "The transitive chain supports I and the symmetric conversion supports II. III is an over-generalization.",
      },
    ],
    answer: "Conclusions I and II follow.",
    difficulty: "medium",
  },
  {
    id: "sc-p14",
    topic: "statement-conclusions",
    title: "SSC CGL: Some + No Chain — Particular Negative",
    question:
      "Statements: (1) Some cats are dogs. (2) No dog is a fish. Conclusions: (I) Some cats are not fish. (II) No cat is a fish.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression: "Cats ∩ Dogs ≠ ∅ | Dogs ∩ Fish = ∅",
        result:
          "Some overlap between cats and dogs; dogs completely excluded from fish",
        explanation:
          "Premise 1: partial overlap. Premise 2: complete exclusion.",
      },
      {
        id: 2,
        operation: "Derive cats-fish relationship",
        expression:
          "The cats that are dogs → those cannot be fish (since no dog is fish)",
        result: "Some cats are not fish (the cats-dogs overlap portion)",
        explanation:
          "The cats in the dogs subset cannot be fish. So at least some cats are definitely not fish.",
      },
      {
        id: 3,
        operation: "Test Conclusion I: Some cats are not fish",
        expression: "Derived in step 2",
        result: "Conclusion I follows",
        explanation:
          "The cats that are also dogs cannot be fish, confirming 'some cats are not fish'.",
      },
      {
        id: 4,
        operation: "Test Conclusion II: No cat is a fish",
        expression: "Non-dog cats may or may not be fish",
        result: "Conclusion II does NOT follow",
        explanation:
          "We only know the dog-cats are not fish. Other cats (not in the dogs set) could still be fish.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No",
        result: "Only Conclusion I follows.",
        explanation:
          "Some + No yields a particular negative, not a universal negative.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "medium",
  },
  {
    id: "sc-p15",
    topic: "statement-conclusions",
    title: "IBPS PO 2022: Three-Statement Chain — Some + All + All",
    question:
      "Statements: (1) Some doctors are singers. (2) All singers are painters. Conclusions: (I) Some doctors are painters. (II) All painters are doctors. (III) Some painters are doctors.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression: "Doctors ∩ Singers ≠ ∅ | Singers ⊆ Painters",
        result: "Overlap of doctors and singers; singers fully within painters",
        explanation:
          "Premise 1: partial overlap. Premise 2: singers are a subset of painters.",
      },
      {
        id: 2,
        operation: "Derive doctors-painters relation",
        expression:
          "Some doctors ∈ Singers and Singers ⊆ Painters → Some doctors ∈ Painters",
        result: "Some doctors are painters",
        explanation:
          "The doctors in the singers subset are also in the painters set.",
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
        expression:
          "Painters may include non-doctor singers and non-doctor non-singers",
        result: "Conclusion II does NOT follow",
        explanation:
          "Painters is a superset of singers. No rule forces all painters to be doctors.",
      },
      {
        id: 5,
        operation: "Test Conclusion III: Some painters are doctors",
        expression:
          "Some doctors are painters (I) → by symmetry some painters are doctors",
        result: "Conclusion III follows",
        explanation:
          "If some doctors are painters, then some painters are doctors (symmetric intersection).",
      },
    ],
    answer: "Conclusions I and III follow.",
    difficulty: "medium",
  },
  {
    id: "sc-p16",
    topic: "statement-conclusions",
    title: "SSC CGL 2023: Inverse Fallacy — Exercise and Health",
    question:
      "Statement: Regular exercise reduces the risk of heart disease. Conclusions: (I) People who never exercise will definitely get heart disease. (II) Regular exercise is one way to reduce heart disease risk.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Regular exercise → reduces heart disease risk",
        result: "Conditional: exercise leads to lower risk",
        explanation:
          "The statement is a conditional — exercise leads to risk reduction, not a biconditional.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: No exercise → definitely get heart disease",
        expression: "P → Q does NOT mean not-P → not-Q (inverse fallacy)",
        result: "Conclusion I is the inverse fallacy — does NOT follow",
        explanation:
          "The statement does not claim exercise is the only way to avoid heart disease. Concluding that non-exercisers will 'definitely' get it is a logical fallacy.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Exercise is one way to reduce risk",
        expression:
          "Statement directly says exercise reduces risk → one method confirmed",
        result: "Conclusion II follows",
        explanation:
          "Saying 'regular exercise reduces risk' confirms that exercise is at least one route to risk reduction.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Fallacy → No | Concl II: Direct restatement → Yes",
        result: "Only Conclusion II follows.",
        explanation:
          "Conclusion I commits the inverse fallacy. Conclusion II is a valid, cautious restatement of the premise.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "medium",
  },
  {
    id: "sc-p17",
    topic: "statement-conclusions",
    title: "IBPS Clerk: Quality and Funding",
    question:
      "Statement: Quality has a price tag. India is allocating lots of funds to education. Conclusions: (I) Quality of education in India would improve soon. (II) Funding alone can enhance the quality of education.",
    steps: [
      {
        id: 1,
        operation: "Parse the statements",
        expression:
          "Premise 1: Quality requires investment. Premise 2: India is investing in education.",
        result: "Two related but independent claims",
        explanation:
          "The first statement links quality to cost. The second states India is allocating funds.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Quality would improve",
        expression:
          "Quality needs funds + India is funding → improvement is a reasonable inference",
        result: "Conclusion I follows",
        explanation:
          "Since quality has a price tag and India is allocating funds, improved quality is a reasonable inference.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Funding alone can enhance quality",
        expression:
          "'Quality has a price tag' ≠ 'Only money matters for quality'",
        result: "Conclusion II does NOT follow",
        explanation:
          "The statement says quality requires funding, not that funding is the sole factor. Other factors like teacher training, infrastructure also matter.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No",
        result: "Only Conclusion I follows.",
        explanation:
          "Conclusion I is a reasonable inference from combining both statements. Conclusion II makes an exclusivity claim not supported.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "medium",
  },
  {
    id: "sc-p18",
    topic: "statement-conclusions",
    title: "SSC CGL: Teaching and Social Work — Both Follow",
    question:
      "Statement: For admission to the MA course, the condition of prior experience in social work may be relaxed by the Admission Committee for the best candidates. Conclusions: (I) Some students of MA will have prior experience of social work. (II) Some MA students will not have prior experience in social work.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Admission requires social work experience, but this may be relaxed for best candidates",
        result: "Two groups will exist: those with experience and those without",
        explanation:
          "The general requirement is social work experience. However, exceptions may be made for top candidates.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Some will have experience",
        expression: "The general requirement ensures some students have experience",
        result: "Conclusion I follows",
        explanation:
          "Since social work experience is the standard requirement, many admitted students will have it.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some will not have experience",
        expression: "The relaxation clause allows candidates without experience",
        result: "Conclusion II follows",
        explanation:
          "Since the committee may relax the requirement, some students may be admitted without social work experience.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both Conclusions I and II follow.",
        explanation:
          "The mixed policy (requirement + relaxation) supports both conclusions.",
      },
    ],
    answer: "Both Conclusions I and II follow.",
    difficulty: "medium",
  },
  {
    id: "sc-p19",
    topic: "statement-conclusions",
    title: "IBPS PO: Financial Institutions — Both Follow",
    question:
      "Statement: Government has spoiled many top-ranking financial institutions by appointing bureaucrats as Directors of these institutions. Conclusions: (I) Government should appoint Directors who are experts in finance. (II) Directors of financial institutions should have expertise in finance.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Appointing bureaucrats (non-experts) as Directors → institutions spoiled",
        result: "Lack of financial expertise caused damage",
        explanation:
          "The statement implies that bureaucrats lacked the domain expertise needed to run financial institutions effectively.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Appoint finance experts",
        expression:
          "Problem: non-experts appointed → Solution: appoint experts",
        result: "Conclusion I follows as a corrective action",
        explanation:
          "If bureaucrats spoiled institutions, the logical corrective is to appoint people with financial expertise.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Directors should have finance expertise",
        expression:
          "Same reasoning — institutions need domain expertise at the top",
        result: "Conclusion II follows",
        explanation:
          "This is a general principle directly implied by the statement's criticism.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both conclusions follow.",
        explanation:
          "Both are valid inferences from the criticism of non-expert appointments.",
      },
    ],
    answer: "Both conclusions follow.",
    difficulty: "medium",
  },
  {
    id: "sc-p20",
    topic: "statement-conclusions",
    title: "SSC CHSL: Wind Energy — Both Follow",
    question:
      "Statement: Wind is an inexhaustible source of energy and an aerogenerator can convert it into electricity. Though not much has been done in this field, the survey shows that there is vast potential for developing wind as an alternative source of energy. Conclusions: (I) Energy by wind is a comparatively newly emerging field. (II) The energy crisis can be addressed by exploring more in the field of aero-generation.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Wind = inexhaustible energy + aerogenerator exists + 'not much done' + 'vast potential'",
        result: "Underdeveloped field with high potential",
        explanation:
          "The statement describes wind energy as promising but underdeveloped.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Newly emerging field",
        expression:
          "'Not much has been done' → relatively new or underdeveloped",
        result: "Conclusion I follows",
        explanation:
          "The phrase 'not much has been done' directly supports that this is a newly emerging or underdeveloped field.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Can address energy crisis",
        expression:
          "'Vast potential' + 'inexhaustible source' → viable alternative",
        result: "Conclusion II follows",
        explanation:
          "Vast potential and inexhaustible nature suggest wind energy can help address the energy crisis.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both conclusions follow.",
        explanation:
          "Both are supported by different parts of the statement — 'not much done' for I, 'vast potential' for II.",
      },
    ],
    answer: "Both conclusions follow.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────
  {
    id: "sc-p21",
    topic: "statement-conclusions",
    title: "IBPS PO 2023: Complex Four-Statement Chain",
    question:
      "Statements: (1) All athletes are fit. (2) Some fit people are nutritionists. (3) All nutritionists are health-conscious. Conclusions: (I) Some athletes are nutritionists. (II) Some health-conscious people are fit. (III) All athletes are health-conscious.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression:
          "Athletes ⊆ Fit | Fit ∩ Nutritionists ≠ ∅ | Nutritionists ⊆ Health-conscious",
        result: "Three layered relationships",
        explanation:
          "Athletes are a subset of Fit. Fit overlaps with Nutritionists. Nutritionists are a subset of Health-conscious.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Some athletes are nutritionists",
        expression:
          "Fit ∩ Nutritionists ≠ ∅, but this overlap may not include any athletes",
        result: "Conclusion I does NOT follow",
        explanation:
          "The fit-nutritionist overlap does not necessarily include the athlete subset of fit people.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some health-conscious people are fit",
        expression:
          "Fit ∩ Nutritionists ≠ ∅ and Nutritionists ⊆ Health-conscious → some fit people are health-conscious → symmetric",
        result: "Conclusion II follows",
        explanation:
          "The fit nutritionists are also health-conscious. By symmetry, some health-conscious people are fit.",
      },
      {
        id: 4,
        operation: "Test Conclusion III: All athletes are health-conscious",
        expression:
          "Athletes ⊆ Fit, but Fit → Health-conscious is not established for all fit people",
        result: "Conclusion III does NOT follow",
        explanation:
          "Only nutritionist-fit people are health-conscious. Athletes may be fit but not nutritionists.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: Yes | Concl III: No",
        result: "Only Conclusion II follows.",
        explanation:
          "Only the symmetric derivation through the nutritionist overlap holds.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "hard",
  },
  {
    id: "sc-p22",
    topic: "statement-conclusions",
    title: "SSC CGL 2024: Either-Or Complementary Pair",
    question:
      "Statements: (1) All pens are stationery. (2) Some stationery items are expensive. Conclusions: (I) Some pens are expensive. (II) No pen is expensive.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression: "Pens ⊆ Stationery | Stationery ∩ Expensive ≠ ∅",
        result: "Pens within Stationery; Stationery overlaps with Expensive",
        explanation:
          "All pens belong to stationery. Some stationery is expensive.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Some pens are expensive",
        expression: "Expensive stationery may or may not include pens",
        result: "Indeterminate — cannot confirm",
        explanation:
          "The expensive overlap in stationery might not reach the pens subset.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: No pen is expensive",
        expression: "Also indeterminate — pens could be in the expensive overlap",
        result: "Indeterminate — cannot confirm",
        explanation: "We cannot confirm that no pen is expensive either.",
      },
      {
        id: 4,
        operation: "Check complementary pair",
        expression:
          "I: Some pens are expensive | II: No pen is expensive — these are complementary",
        result: "Either I or II must be true",
        explanation:
          "Either there exist pens that are expensive, or no pen is expensive. These are mutually exclusive and exhaustive.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression:
          "Neither follows individually, but they form a complementary pair",
        result: "Either Conclusion I or Conclusion II follows.",
        explanation:
          "Since the two conclusions are complementary (one must be true), the answer is 'either I or II follows'.",
      },
    ],
    answer: "Either Conclusion I or Conclusion II follows.",
    difficulty: "hard",
  },
  {
    id: "sc-p23",
    topic: "statement-conclusions",
    title: "IBPS PO: No + All + Some Triple Chain",
    question:
      "Statements: (1) No car is a bus. (2) All buses are vehicles. (3) Some vehicles are electric. Conclusions: (I) No car is a vehicle. (II) Some electric things are buses. (III) Some vehicles are buses.",
    steps: [
      {
        id: 1,
        operation: "Map premises",
        expression:
          "Cars ∩ Buses = ∅ | Buses ⊆ Vehicles | Vehicles ∩ Electric ≠ ∅",
        result: "Three relationships mapped",
        explanation:
          "Cars and buses are disjoint. Buses are inside vehicles. Vehicles overlap with electric.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: No car is a vehicle",
        expression:
          "Cars ∩ Buses = ∅ and Buses ⊆ Vehicles, but Vehicles may include cars too",
        result: "Conclusion I does NOT follow",
        explanation:
          "Cars are not buses, but cars could still be vehicles.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some electric things are buses",
        expression:
          "Vehicles ∩ Electric ≠ ∅, but the electric vehicles may not be buses",
        result: "Conclusion II does NOT follow",
        explanation:
          "The electric overlap in vehicles does not necessarily include the bus subset.",
      },
      {
        id: 4,
        operation: "Test Conclusion III: Some vehicles are buses",
        expression: "Buses ⊆ Vehicles → Vehicles ∩ Buses ≠ ∅",
        result: "Conclusion III follows",
        explanation:
          "Since all buses are vehicles, some vehicles are certainly buses (conversion of universal affirmative).",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: No | Concl III: Yes",
        result: "Only Conclusion III follows.",
        explanation:
          "Only the direct conversion of the All-buses-are-vehicles premise holds.",
      },
    ],
    answer: "Only Conclusion III follows.",
    difficulty: "hard",
  },
  {
    id: "sc-p24",
    topic: "statement-conclusions",
    title: "SBI PO: Dowry and Social Values",
    question:
      "Statement: Any young man who makes dowry a condition for marriage discredits himself and dishonours womanhood. Conclusions: (I) Those who take dowry in marriage should be condemned by society. (II) Those who do not take dowry in marriage respect womanhood.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Demanding dowry → self-discredit + dishonour womanhood",
        result: "Strong negative moral judgment on dowry demanders",
        explanation:
          "The statement condemns dowry demands as both self-degrading and disrespectful to women.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Dowry takers should be condemned",
        expression:
          "Statement says dowry demanders 'discredit themselves' → societal condemnation is a valid extension",
        result: "Conclusion I follows",
        explanation:
          "If dowry demand is morally wrong, societal condemnation is a reasonable consequence.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: No dowry = respect womanhood",
        expression:
          "Demanding dowry = dishonouring womanhood → NOT demanding = honouring (contrapositive inference)",
        result: "Conclusion II follows",
        explanation:
          "By contrapositive logic, not demanding dowry implies not dishonouring womanhood, which indicates respect.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both conclusions follow.",
        explanation:
          "Both are valid inferences from the strong moral stance in the statement.",
      },
    ],
    answer: "Both conclusions follow.",
    difficulty: "hard",
  },
  {
    id: "sc-p25",
    topic: "statement-conclusions",
    title: "SSC CGL 2024: Talent and Sportsmen Trap",
    question:
      "Statement: My brother sings very well. My sister is a basketball player. I am very intelligent. Conclusions: (I) We all are very talented. (II) We all are sportsmen.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Brother: good singer | Sister: basketball player | I: intelligent",
        result: "Three different abilities mentioned for three people",
        explanation:
          "Each person has a different skill — singing, sports, intelligence.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: All are talented",
        expression:
          "Only sister's basketball ability is explicitly praised. Brother 'sings well' but others' talent is not established comprehensively.",
        result: "Conclusion I does NOT follow",
        explanation:
          "The statement does not use the word 'talented' and being intelligent or singing well does not automatically mean 'talented' in the comprehensive sense implied.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: All are sportsmen",
        expression: "Only sister is a sportsperson. Brother is a singer, I am intelligent.",
        result: "Conclusion II does NOT follow",
        explanation:
          "Only one of the three is in sports. The other two have non-sports abilities.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No | Concl II: No",
        result: "Neither conclusion follows.",
        explanation:
          "Neither 'all talented' nor 'all sportsmen' can be derived from three different individual abilities.",
      },
    ],
    answer: "Neither conclusion follows.",
    difficulty: "hard",
  },
  {
    id: "sc-p26",
    topic: "statement-conclusions",
    title: "IBPS PO 2024: Student-Teacher Ratio",
    question:
      "Statement: The average number of students per teacher is 50 in urban areas whereas it is 60 in rural areas. The national average is 55. Conclusions: (I) The student-teacher ratio in rural areas is higher than in urban areas. (II) More students study with the same teacher in rural areas as compared to urban areas.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Urban: 50 students/teacher | Rural: 60 students/teacher | National: 55",
        result: "Rural has more students per teacher than urban",
        explanation:
          "The numbers directly show rural areas have a higher student-teacher ratio.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Rural ratio is higher",
        expression: "60 > 50 → rural ratio is higher",
        result: "This is factually correct from the statement",
        explanation:
          "However, 'ratio' without absolute figures can be misleading. In exam logic, without total counts, the ratio comparison alone is considered valid. Conclusion I follows.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: More students per teacher in rural",
        expression: "60 students per teacher vs 50 → more students in rural",
        result: "Conclusion II follows directly",
        explanation:
          "The numerical average directly states that more students study with each teacher in rural areas.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both conclusions follow.",
        explanation:
          "Both conclusions are direct restatements of the numerical data in different words.",
      },
    ],
    answer: "Both conclusions follow.",
    difficulty: "hard",
  },
  {
    id: "sc-p27",
    topic: "statement-conclusions",
    title: "SSC CGL: Death Keeps No Calendar",
    question:
      "Statement: Death keeps no calendar. Conclusions: (I) Man must die one day. (II) Death can come at any time.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression: "Death does not follow a schedule or calendar",
        result: "Death is unpredictable and inevitable",
        explanation:
          "The metaphor means death does not adhere to any timetable — it can come anytime.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Man must die one day",
        expression:
          "The statement presupposes death occurs — just unpredictably",
        result: "Conclusion I follows (implicit inevitability)",
        explanation:
          "By saying death keeps no calendar, the statement implies death is certain but its timing is not.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Death can come at any time",
        expression: "'Keeps no calendar' = no fixed schedule → any time",
        result: "Conclusion II follows directly",
        explanation:
          "This is the direct meaning of the metaphor — death does not follow a schedule.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both conclusions follow.",
        explanation:
          "The metaphor simultaneously conveys inevitability (I) and unpredictability (II) of death.",
      },
    ],
    answer: "Both conclusions follow.",
    difficulty: "hard",
  },
  {
    id: "sc-p28",
    topic: "statement-conclusions",
    title: "UPSC CSAT: Political Prisoners — Subtle Inference",
    question:
      "Statement: All those political prisoners were released on bail who had gone to jail for reasons other than political dharnas. Bail was not granted to persons involved in murders. Conclusions: (I) No political prisoner had committed murder. (II) Some politicians were not arrested.",
    steps: [
      {
        id: 1,
        operation: "Parse the statements",
        expression:
          "Released on bail: political prisoners jailed for non-dharna reasons | Not released: murder-involved persons",
        result: "Two conditions for bail: non-dharna political prisoners, no murder",
        explanation:
          "Bail was given to political prisoners (non-dharna). Murder-involved persons were denied bail.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: No political prisoner committed murder",
        expression:
          "All political prisoners (non-dharna) were released. Murder persons were not released. If any political prisoner had committed murder, they would not have been released — contradicting 'all were released'.",
        result: "Conclusion I follows",
        explanation:
          "Since all qualifying political prisoners were released and murder-involved persons were not, no qualifying political prisoner committed murder.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some politicians were not arrested",
        expression:
          "The statement discusses prisoners, not all politicians. No information about unarrested politicians.",
        result: "Conclusion II does NOT follow",
        explanation:
          "The statement only discusses those already in jail. It says nothing about politicians in general or those not arrested.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: No",
        result: "Only Conclusion I follows.",
        explanation:
          "Conclusion I is derived from the intersection of the two bail conditions. Conclusion II is outside the scope.",
      },
    ],
    answer: "Only Conclusion I follows.",
    difficulty: "hard",
  },
  {
    id: "sc-p29",
    topic: "statement-conclusions",
    title: "SSC CGL 2024: Road Accidents — Recurring Issue",
    question:
      "Statement: The serious accident in which a person was run down by a car yesterday had again focused attention on the most unsatisfactory state of roads. Conclusions: (I) The accident was fatal. (II) Several accidents have so far taken place because of unsatisfactory road conditions.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Serious accident yesterday | 'again' focused attention | unsatisfactory roads",
        result: "Recurring problem indicated by 'again'",
        explanation:
          "The word 'again' is crucial — it implies this has happened before.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: The accident was fatal",
        expression: "'Serious' + 'person was run down' → likely fatal",
        result: "Conclusion I follows (reasonable inference)",
        explanation:
          "A serious accident where a person was 'run down' by a car strongly suggests fatality.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Several accidents have occurred",
        expression:
          "'Again focused attention' → this is not the first time → previous incidents existed",
        result: "Conclusion II follows",
        explanation:
          "The word 'again' clearly indicates that attention has been focused on road conditions before due to similar accidents.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: Yes | Concl II: Yes",
        result: "Both conclusions follow.",
        explanation:
          "'Run down' supports fatality (I), and 'again' supports recurring incidents (II).",
      },
    ],
    answer: "Both conclusions follow.",
    difficulty: "hard",
  },
  {
    id: "sc-p30",
    topic: "statement-conclusions",
    title: "IBPS PO 2024: Compulsory Reading — Forced vs Developed Interest",
    question:
      "Statement: To cultivate interest in reading, the school has made it compulsory from June this year for each student to read two books per week and submit a weekly report on the books. Conclusions: (I) Interest in reading can be created by force. (II) Some students will eventually develop interest in reading.",
    steps: [
      {
        id: 1,
        operation: "Parse the statement",
        expression:
          "Goal: cultivate reading interest | Method: compulsory reading + weekly report",
        result: "School uses mandatory reading to develop interest",
        explanation:
          "The school believes structured exposure (mandatory reading) will lead to genuine interest.",
      },
      {
        id: 2,
        operation: "Test Conclusion I: Interest can be created by force",
        expression:
          "The school is using compulsion, but the goal is to 'cultivate' interest — not to force it permanently",
        result: "Conclusion I does NOT follow",
        explanation:
          "The school uses compulsion as a means to cultivate interest, not to claim force creates genuine interest. The method is structured exposure, not coercion.",
      },
      {
        id: 3,
        operation: "Test Conclusion II: Some students will develop interest",
        expression:
          "The purpose of the scheme is to cultivate interest → some will respond positively",
        result: "Conclusion II follows",
        explanation:
          "The school's expectation is that the scheme will cultivate interest in at least some students. This is the intended outcome of the policy.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Concl I: No (mischaracterizes the method) | Concl II: Yes",
        result: "Only Conclusion II follows.",
        explanation:
          "The scheme aims to develop interest through habit, not through force. Conclusion II captures the intended outcome.",
      },
    ],
    answer: "Only Conclusion II follows.",
    difficulty: "hard",
  },
]
