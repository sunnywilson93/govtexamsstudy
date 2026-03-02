import type { ReasoningConcept } from "@/types/reasoning"

export const statementConclusionsConcept: ReasoningConcept = {
  topic: "statement-conclusions",
  title: "Statement & Conclusions",
  description:
    "A set of statements is given as true (even if they seem unrealistic). You must judge whether each conclusion follows logically — definitely, possibly, or not at all. The test distinguishes between what is explicitly stated, what can be inferred, and what is merely assumed.",
  keyIdea:
    "A conclusion follows only if it is a direct, necessary logical deduction from the statements — not just a possibility, a common belief, or an implicit assumption.",
  rules: [
    {
      name: "Accept Statements as True",
      rule: "Treat every statement as an absolute fact for the purpose of this question, regardless of real-world accuracy",
      whenToUse: "Before analysing any conclusion — suspend judgment on the realism of the statements.",
    },
    {
      name: "Definite vs. Possible Conclusion",
      rule: "\"Definitely follows\" requires the conclusion to be true in all cases; \"possibly follows\" is used only when the question explicitly asks for possibility",
      whenToUse: "When distinguishing between conclusion types in IBPS or SBI questions that have 'possibly' options.",
    },
    {
      name: "Avoid Implicit Assumptions",
      rule: "Do not infer information that is not stated or directly derivable; a conclusion that relies on outside knowledge or common sense does not 'definitely follow'",
      whenToUse: "When a conclusion seems reasonable but requires extra facts not present in the statements.",
    },
    {
      name: "Universal vs. Particular Statements",
      rule: "\"All A are B\" does NOT imply \"All B are A\"; \"Some A are B\" implies \"Some B are A\" (conversion rule); apply these syllogistic rules carefully",
      whenToUse: "When statements use quantifiers like all, some, no, none and the conclusion tests the reverse direction.",
    },
    {
      name: "Both Conclusions Follow Test",
      rule: "If both conclusions are independently valid deductions from the same statements, mark 'Both follow'; if neither alone invalidates the other, they can coexist",
      whenToUse: "When the question asks whether either, neither, or both conclusions follow from the given statements.",
    },
  ],
  examTags: ["IBPS PO", "IBPS Clerk", "SBI PO", "SSC CGL", "UPSC CSAT", "RRB NTPC"],
  examRelevance:
    "Statement-Conclusions is a staple in IBPS PO/Clerk reasoning (3–5 questions) and appears in UPSC CSAT reading-comprehension sets. The 'definite vs. possible' distinction is a frequent trap that eliminates careless test-takers.",
}
