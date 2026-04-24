import type { ReasoningConcept } from "@/types/reasoning"

export const analogiesConcept: ReasoningConcept = {
  topic: "analogies",
  title: "Analogies",
  description:
    "SSC CGL Tier-I and RRB NTPC carry 2-4 analogy questions that test your ability to identify a relationship in a given pair and match it to another pair. UPSC CSAT embeds analogies inside reading-comprehension reasoning sets. You will encounter semantic, alphabetical, and symbolic subtypes across papers. Classifying the relationship type before scanning options saves 30-40 seconds per question.",
  keyIdea:
    "First identify the precise nature of the relationship in the given pair — tool:user, part:whole, cause:effect, synonym, antonym — then apply the same logic to find the answer pair.",
  rules: [
    {
      name: "Semantic Relationship Identification",
      rule: "Categorise the pair as: tool→user, product→source, action→doer, part→whole, cause→effect, or degree (hot→warm)",
      whenToUse: "Start here when both items in the pair carry meaning and the link is conceptual or factual.",
    },
    {
      name: "Alphabetical Position Rule",
      rule: "Find position of each letter (A=1, B=2, … Z=26); compute the gap or operation (e.g., +3, ×2, reverse) and apply identically to the answer pair",
      whenToUse: "Switch to this method when the pair consists of letters or letter groups with no obvious semantic connection.",
    },
    {
      name: "Mirror / Reverse Pair Rule",
      rule: "If word A is the plural, feminine, or opposite of word B, the answer pair must satisfy the same directional transformation",
      whenToUse: "When one word in the pair is a grammatical or logical transformation of the other.",
    },
    {
      name: "Degree of Intensity Rule",
      rule: "Identify whether the pair goes from weak→strong, general→specific, or raw→processed; preserve that direction in the answer",
      whenToUse: "When pairs like 'Drizzle : Downpour' or 'Cub : Lion' show a magnitude or maturity relationship.",
    },
    {
      name: "Elimination by Relation Consistency",
      rule: "Reject any answer option whose relationship type differs from the given pair, even if the words seem related",
      whenToUse: "When two answer options look plausible; checking the exact relationship direction eliminates distractors.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "UPSC CSAT", "IBPS Clerk"],
  examRelevance:
    "Analogies appear in 2–4 questions in SSC CGL Tier-I and RRB NTPC. UPSC CSAT uses them in reading-comprehension reasoning sets. Quick relation classification saves 30–40 seconds per question.",
}
