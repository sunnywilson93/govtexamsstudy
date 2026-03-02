import type { ReasoningConcept } from "@/types/reasoning"

export const analogiesConcept: ReasoningConcept = {
  topic: "analogies",
  title: "Analogies",
  description:
    "Analogies test the ability to identify a relationship between a given pair and find another pair sharing the exact same relationship. Types include semantic (meaning-based), alphabetical (letter-position-based), and symbolic (coded pattern) analogies.",
  keyIdea:
    "First identify the precise nature of the relationship in the given pair — tool:user, part:whole, cause:effect, synonym, antonym — then apply the same logic to find the answer pair.",
  rules: [
    {
      name: "Semantic Relationship Identification",
      rule: "Categorise the pair as: tool→user, product→source, action→doer, part→whole, cause→effect, or degree (hot→warm)",
      whenToUse: "When both words carry meaning and the link is conceptual or factual.",
    },
    {
      name: "Alphabetical Position Rule",
      rule: "Find position of each letter (A=1, B=2, … Z=26); compute the gap or operation (e.g., +3, ×2, reverse) and apply identically to the answer pair",
      whenToUse: "When the analogy pair consists of letters or letter groups with no obvious semantic link.",
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
