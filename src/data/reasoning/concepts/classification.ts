import type { ReasoningConcept } from "@/types/reasoning"

export const classificationConcept: ReasoningConcept = {
  topic: "classification",
  title: "Classification (Odd One Out)",
  description:
    "Classification questions present four or five items; one does not belong to the group defined by the others. Items can be words (semantic group), letters (pattern group), numbers (mathematical property), or codes. The test is identifying the hidden grouping rule.",
  keyIdea:
    "Find the property shared by the majority — not just any two items — and the one item that breaks that property is the odd one out.",
  rules: [
    {
      name: "Semantic Group Rule",
      rule: "List what each word represents; find the category shared by all but one (e.g., planets, metals, rivers); the item outside that category is odd",
      whenToUse: "When all items are common nouns with an obvious superordinate category.",
    },
    {
      name: "Number Property Rule",
      rule: "Check prime, composite, perfect square, cube, odd, even, multiple, or digit-sum properties; the number that breaks the shared property is odd",
      whenToUse: "When the items are numbers and no obvious semantic category applies.",
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
