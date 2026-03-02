import type { ReasoningConcept } from "@/types/reasoning"

export const inequalitiesConcept: ReasoningConcept = {
  topic: "inequalities",
  title: "Inequalities",
  description:
    "Coded inequalities use symbols like @, #, $ to represent <, >, =. The task is to decode symbols, combine chains, and determine if a conclusion follows.",
  keyIdea:
    "Decode the symbols first, then check if each conclusion follows directly from the decoded chain — never assume transitive links unless explicitly derivable.",
  rules: [
    {
      name: "Symbol Decoding",
      rule: "Replace every coded symbol with the actual operator (>, <, =, ≥, ≤)",
      whenToUse: "First step for every coded inequality question.",
    },
    {
      name: "Conclusion Validity",
      rule: "A conclusion A > C is valid only if A > B and B > C (or ≥ with no ambiguity)",
      whenToUse: "When two consecutive inequalities share a middle term.",
    },
    {
      name: "Complementary Pairs",
      rule: "If neither A > C nor A < C can be determined → \"Either I or II follows\" (when they are complementary)",
      whenToUse: "When conclusion I and II together cover all possibilities.",
    },
    {
      name: "Double Inequality Chain",
      rule: "A ≥ B > C means A > C holds; A ≥ B ≥ C means A ≥ C holds (not necessarily A > C)",
      whenToUse: "When mixed ≥ and > appear in a chain.",
    },
    {
      name: "\"Either Follows\" Rule",
      rule: "Say \"Either I or II follows\" only when I and II are direct opposites AND neither can be separately proven true",
      whenToUse: "When one conclusion says A > B and the other says A < B (or A = B).",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "SBI PO", "RRB NTPC"],
  examRelevance:
    "Inequalities appear in 3–5 questions in every IBPS PO/Clerk paper and 2–3 questions in SSC CGL. Speed depends on symbol decoding automaticity.",
}
