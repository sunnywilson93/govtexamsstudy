import type { ReasoningConcept } from "@/types/reasoning"

export const alphabetTestsConcept: ReasoningConcept = {
  topic: "alphabet-tests",
  title: "Alphabet Tests",
  description:
    "Alphabet tests include letter-position questions, letter series completion, dictionary ordering of words, and word formation from given letters. Positional shortcuts dramatically reduce calculation time.",
  keyIdea:
    "Memorise the EJOTY positions (E=5, J=10, O=15, T=20, Y=25) as anchors — any letter's position can be found in one step using the nearest anchor.",
  rules: [
    {
      name: "EJOTY Anchor Rule",
      rule: "E=5, J=10, O=15, T=20, Y=25; to find any letter, pick the nearest anchor and count forward or backward (e.g., R = T−2 = 18)",
      whenToUse: "For any question requiring the numerical position of a letter — eliminates counting from A every time.",
    },
    {
      name: "Nth Letter from Right",
      rule: "Position from right = 27 − (position from left); equivalently, the letter at position n from right is the letter at position (26 − n + 1) from left",
      whenToUse: "When asked for the 3rd letter from the right of an alphabet or a given word.",
    },
    {
      name: "Dictionary Order Rule",
      rule: "To arrange words alphabetically, compare letter by letter from left to right; the first position where two words differ determines their order",
      whenToUse: "When asked which word comes first/last in dictionary order or to find the 2nd/3rd word in a given list.",
    },
    {
      name: "Letter Series Gap Pattern",
      rule: "Write down positions of each term; compute the differences between consecutive positions; the pattern (constant gap, alternating gap, increasing gap) reveals the missing term",
      whenToUse: "When asked to find the missing letter in a series like B, E, H, ?, N.",
    },
    {
      name: "Meaningful Word Formation",
      rule: "When forming words from given letters, check for common 3–5 letter words first; if asked for the second or third letter of the formed word, build the full word before answering",
      whenToUse: "When the question gives shuffled letters and asks if a meaningful word can be formed or what a specific position letter is.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "RRB Group D", "IBPS Clerk", "UPSC CSAT"],
  examRelevance:
    "Alphabet tests contribute 3–5 questions in SSC CGL Tier-I and RRB NTPC. The EJOTY trick alone reduces average time per question from ~40 seconds to ~10 seconds.",
}
