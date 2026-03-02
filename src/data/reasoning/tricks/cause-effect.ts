import type { ReasoningTrick } from "@/types/reasoning"

export const causeEffectTricks: ReasoningTrick[] = [
  {
    id: "ce-t1",
    topic: "cause-effect",
    type: "pattern-shortcut",
    title: "Temporal Order Check",
    description: "A cause must precede its effect in time. If statement II happened before statement I, II is more likely the cause. Always check which event happened first.",
    example: {
      problem: "I: Heavy rains in the city yesterday. II: Flooding in low-lying areas today.",
      solution: "I (yesterday) precedes II (today). I is the cause, II is the effect.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "ce-t2",
    topic: "cause-effect",
    type: "elimination",
    title: "Common Cause Pattern",
    description: "If two statements appear unrelated but both can be explained by a third underlying cause, they are independent effects of a common cause — not cause-effect of each other.",
    example: {
      problem: "I: Large number of people suffered sunstroke. II: Hospitals reported shortage of ORS packets.",
      solution: "Both are effects of heatwave — a common cause. Statement I did not cause II; they are independent effects.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "ce-t3",
    topic: "cause-effect",
    type: "elimination",
    title: "Rule Out Coincidence",
    description: "Two events occurring at the same time are NOT necessarily cause-effect. Reject cause-effect if no logical mechanism links them, even if timing matches.",
    example: {
      problem: "I: A new bridge was inaugurated on Monday. II: A politician visited the city on Monday.",
      solution: "Temporal coincidence only. No logical mechanism makes inauguration cause the visit or vice versa. Both are independent events.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "ce-t4",
    topic: "cause-effect",
    type: "pattern-shortcut",
    title: "Policy → Impact Chain",
    description: "When one statement is a policy or decision and the other is a societal outcome, the policy is almost always the cause. This pattern covers 60% of IBPS PO cause-effect questions.",
    example: {
      problem: "I: Government raised minimum wage by 20%. II: Consumer spending in rural areas increased.",
      solution: "I (policy decision) is the cause. II (societal outcome) is the effect — direct cause-effect relationship.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "ce-t5",
    topic: "cause-effect",
    type: "pattern-shortcut",
    title: "Indirect Cause Detection",
    description: "An indirect cause triggers a chain: A → B → C. If asked whether A caused C, the answer is yes — indirect causes still count as causes in reasoning questions.",
    example: {
      problem: "I: Drought reduced crop output. II: Food prices rose sharply in urban markets.",
      solution: "Drought → reduced supply → price rise. I is the indirect cause of II. The chain is valid — answer: I is the cause, II is the effect.",
    },
    timeSaved: "12 sec/question",
  },
]
