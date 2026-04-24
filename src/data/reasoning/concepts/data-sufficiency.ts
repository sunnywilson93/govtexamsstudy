import type { ReasoningConcept } from "@/types/reasoning"

export const dataSufficiencyConcept: ReasoningConcept = {
  topic: "data-sufficiency",
  title: "Data Sufficiency",
  description:
    "IBPS PO typically includes a set of 5 data sufficiency questions, and SBI PO follows the same pattern. You determine whether given statements provide enough information to answer a question without actually solving it. Speed comes from recognizing sufficiency patterns early and stopping as soon as the answer becomes determinable. Banking aspirants who master the five-option framework gain a reliable edge in this section.",
  keyIdea:
    "Focus on sufficiency, not the actual answer. Check each statement independently first, then together. Stop as soon as you know the answer is determinable.",
  rules: [
    {
      name: "Statement Independence",
      rule: "First check Statement I alone, then Statement II alone, before combining",
      whenToUse: "Follow this order on every question — evaluate Statement I alone, then Statement II alone, before combining them.",
    },
    {
      name: "Five-Option Framework",
      rule: "(a) I alone sufficient, (b) II alone sufficient, (c) Both together needed, (d) Either alone sufficient, (e) Both together not sufficient",
      whenToUse:
        "Map your findings to these five standard answer choices used in IBPS PO and SBI PO papers.",
    },
    {
      name: "Uniqueness Test",
      rule: "A statement is sufficient only if it leads to exactly one answer — multiple possible answers means insufficient",
      whenToUse:
        "When a statement narrows possibilities but does not fix a unique answer.",
    },
    {
      name: "Combine Only When Needed",
      rule: "Combine statements only after confirming neither alone is sufficient",
      whenToUse:
        "Prevents wasting time on combination when one statement already works.",
    },
  ],
  examTags: ["IBPS PO", "SBI PO", "IBPS Clerk", "RRB PO"],
  examRelevance:
    "Data sufficiency is a staple in banking exams — IBPS PO typically has a set of 5 questions. Speed comes from recognizing sufficiency patterns without fully solving the underlying problem.",
}
