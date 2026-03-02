import type { ReasoningTrick } from "@/types/reasoning"

export const statementConclusionsTricks: ReasoningTrick[] = [
  {
    id: "sc-t1",
    topic: "statement-conclusions",
    type: "pattern-shortcut",
    title: "Definite vs. Possible — Know the Ask",
    description: "If the question asks 'which conclusion FOLLOWS', only definitively true conclusions qualify. 'Possible' conclusions that might be true do not follow.",
    example: {
      problem: "All doctors are qualified. Ram is a doctor. Concl: Ram is qualified.",
      solution: "All doctors → Ram (doctor) → Ram qualified. Definitively follows. Accept.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "sc-t2",
    topic: "statement-conclusions",
    type: "elimination",
    title: "Never Go Beyond the Statement",
    description: "A conclusion that requires external knowledge or facts not in the statement does NOT follow. Reject conclusions that import new information.",
    example: {
      problem: "Statement: Most students passed the exam. Concl: The exam was easy.",
      solution: "Ease of exam is not mentioned in the statement — external inference. Does NOT follow.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "sc-t3",
    topic: "statement-conclusions",
    type: "elimination",
    title: "Negative Statement Trap",
    description: "A negative conclusion (e.g., 'No X is Y') needs explicit negation in the statement. Absence of positive evidence is NOT evidence of negation.",
    example: {
      problem: "Statement: Some cats are black. Concl: Some cats are not black.",
      solution: "'Some cats are black' does not tell us about the rest. Conclusion 'some cats are not black' does NOT definitively follow — it could be all cats are black.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "sc-t4",
    topic: "statement-conclusions",
    type: "pattern-shortcut",
    title: "Implicit Assumption Detection",
    description: "An implicit assumption is a hidden premise the argument depends on. It is always unstated, always required, and its negation would destroy the argument.",
    example: {
      problem: "Ad: 'Use Brand X toothpaste for strong teeth.' Assumption: ?",
      solution: "Assumption: Brand X toothpaste is effective for strong teeth. Without this, the ad makes no sense.",
    },
    timeSaved: "12 sec/question",
  },
  {
    id: "sc-t5",
    topic: "statement-conclusions",
    type: "pattern-shortcut",
    title: "Complementary Conclusion Pair",
    description: "Two conclusions are complementary when one is exactly the logical negation of the other. If neither individually follows from the statement, 'Either I or II follows' is correct.",
    example: {
      problem: "Statement: Some A are B. Concl I: All A are B. Concl II: No A is B.",
      solution: "Neither is provable from 'Some A are B'. They are NOT complements (complement of 'All A are B' is 'Some A are not B'). Both do not follow — answer: neither.",
    },
    timeSaved: "15 sec/question",
  },
]
