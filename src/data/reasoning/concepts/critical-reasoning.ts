import type { ReasoningConcept } from "@/types/reasoning"

export const criticalReasoningConcept: ReasoningConcept = {
  topic: "critical-reasoning",
  title: "Critical Reasoning",
  description:
    "Critical reasoning tests the ability to evaluate arguments — identifying assumptions, finding what strengthens or weakens an argument, and determining the best course of action.",
  keyIdea:
    "Every argument has a premise (given facts) and a conclusion (what is claimed). The gap between them is the assumption. Strengthening fills the gap; weakening exploits it.",
  rules: [
    {
      name: "Assumption Identification",
      rule: "The assumption is the unstated premise that MUST be true for the conclusion to hold",
      whenToUse:
        "When asked \"Which of the following is an assumption?\" — negate each option and check if the argument collapses.",
    },
    {
      name: "Negation Test",
      rule: "Negate the option: if the argument breaks down, that option IS the assumption",
      whenToUse:
        "Fastest way to confirm an assumption — used in UPSC CSAT and banking exams.",
    },
    {
      name: "Strengthen/Weaken",
      rule: "Strengthening adds support to the conclusion; weakening introduces a counter-possibility that breaks the premise-conclusion link",
      whenToUse:
        "When asked to strengthen or weaken a given argument.",
    },
    {
      name: "Course of Action",
      rule: "A course of action is valid only if it is practically feasible AND directly addresses the problem stated",
      whenToUse:
        "When asked which course of action follows from a given situation.",
    },
    {
      name: "Inference vs. Assumption",
      rule: "An inference is what can be concluded from given data; an assumption is what must be presupposed. Do not confuse them.",
      whenToUse:
        "When options mix inferences and assumptions to create traps.",
    },
  ],
  examTags: ["UPSC CSAT", "IBPS PO", "SBI PO", "CAT", "CLAT"],
  examRelevance:
    "Critical reasoning is heavily tested in UPSC CSAT (4-5 questions) and banking mains. The negation test alone can solve most assumption questions in under 60 seconds.",
}
