import type { ReasoningConcept } from "@/types/reasoning"

export const causeEffectConcept: ReasoningConcept = {
  topic: "cause-effect",
  title: "Cause & Effect",
  description:
    "Two statements are given. You must decide whether one causes the other, both are effects of a common cause, both are independent, or both are causes of a combined effect. The relationship must be a direct and necessary logical link, not a mere correlation.",
  keyIdea:
    "Ask: 'Does Statement I necessarily produce Statement II, or vice versa?' If neither direction is necessary, look for a hidden common cause. Temporal precedence alone does not establish causation.",
  rules: [
    {
      name: "Directionality Check",
      rule: "Test both directions: 'Does I cause II?' and 'Does II cause I?'; the correct direction is the one where the first event is a sufficient and necessary precondition for the second",
      whenToUse: "Before choosing between options 'I is cause, II is effect' vs. 'II is cause, I is effect'.",
    },
    {
      name: "Independent Events Rule",
      rule: "If the two statements belong to entirely different domains (e.g., weather and stock market) and no logical mechanism links them, mark them as independent causes or independent effects",
      whenToUse: "When the two statements seem temporally close but there is no plausible causal mechanism.",
    },
    {
      name: "Common Cause Rule",
      rule: "If both statements are outcomes that share a single upstream trigger (e.g., both are results of a government policy change), mark them as 'effects of an independent common cause'",
      whenToUse: "When both statements describe negative or positive changes that would logically share the same root event.",
    },
    {
      name: "Scale and Specificity Rule",
      rule: "A macro-level event (e.g., nationwide strike) can cause a micro-level effect (e.g., local shortage), but a micro-level event rarely causes a nationwide macro effect on its own",
      whenToUse: "When one statement is broad and the other is narrow; the broader event is typically the cause.",
    },
    {
      name: "Both Causes Rule",
      rule: "When two independent events together produce a third outcome (implied or stated), both statements are causes — neither alone is sufficient",
      whenToUse: "When the question hints that the combined effect only arises if both conditions are simultaneously true.",
    },
  ],
  examTags: ["IBPS PO", "IBPS Clerk", "SBI PO", "SSC CGL", "UPSC CSAT"],
  examRelevance:
    "Cause-Effect questions appear in 2–4 question sets in IBPS PO mains and UPSC CSAT. They reward structured logical thinking over intuition — candidates who apply the directionality and common-cause rules consistently score near-perfect on this topic.",
}
