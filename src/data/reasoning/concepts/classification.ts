import type { ReasoningConcept } from "@/types/reasoning"

export const classificationConcept: ReasoningConcept = {
  topic: "classification",
  title: "Classification (Odd One Out)",
  description:
    "SSC and RRB papers carry 4-6 classification questions per paper, making this one of the highest-frequency reasoning topics. Each question presents four or five items where one breaks the grouping rule shared by the rest. You will encounter semantic, number, letter-pattern, and code-based subtypes across SSC CGL, SSC CHSL, and IBPS Clerk. Mastering all four subtypes ensures you do not lose easy marks.",
  keyIdea:
    "Find the property shared by the majority — not just any two items — and the one item that breaks that property is the odd one out.",
  rules: [
    {
      name: "Semantic Group Rule",
      rule: "List what each word represents; find the category shared by all but one (e.g., planets, metals, rivers); the item outside that category is odd",
      whenToUse: "Start with this rule when all items are common nouns and you can identify a clear superordinate category.",
    },
    {
      name: "Number Property Rule",
      rule: "Check prime, composite, perfect square, cube, odd, even, multiple, or digit-sum properties; the number that breaks the shared property is odd",
      whenToUse: "Apply this when the items are numbers and no semantic category exists — test mathematical properties one by one.",
    },
    {
      name: "Letter Pattern Rule",
      rule: "Check position of letters (A=1…Z=26), gap between letters, vowel/consonant count, or alphabetical order; one group violates the pattern",
      whenToUse: "When items are letter-groups like BDF, CFI, EGJ, and you need the deviation.",
    },
    {
      name: "Code Pattern Rule",
      rule: "Decode each item using the coding logic; the item whose decoded value does not match the others' rule is the odd one",
      whenToUse: "When items are symbol or digit codes and a hidden substitution cipher is present.",
    },
    {
      name: "Multiple Groupings Trap",
      rule: "When two plausible groupings exist, pick the one that unites the largest number (3 or 4 out of 5) — exam questions always have exactly one valid majority grouping",
      whenToUse: "When you can justify more than one item as odd; choose the answer that leaves the tightest group.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS Clerk", "UPSC CSAT"],
  examRelevance:
    "Classification is among the highest-frequency topics in SSC and RRB papers — typically 4–6 questions per paper spanning semantic, number, and letter subtypes. Mastery of all four subtypes is essential.",
}
