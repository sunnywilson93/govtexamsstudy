import type { ReasoningTrick } from "@/types/reasoning"

export const criticalReasoningTricks: ReasoningTrick[] = [
  {
    id: "cr-t1",
    topic: "critical-reasoning",
    type: "pattern-shortcut",
    title: "Negation Test for Assumptions",
    description:
      "Negate each answer choice. If the argument falls apart after negation, that choice IS the assumption. This works reliably for 90%+ of assumption questions.",
    example: {
      problem:
        "Argument: 'City should build a metro to reduce traffic.' Assumption: (a) People will use the metro.",
      solution:
        "Negate: 'People will NOT use the metro.' Argument collapses — building metro is pointless. So (a) IS the assumption.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "cr-t2",
    topic: "critical-reasoning",
    type: "elimination",
    title: "Out-of-Scope Elimination",
    description:
      "If an answer choice introduces a topic not mentioned in the argument, it is almost certainly wrong. Assumptions and conclusions must be directly linked to the given premise.",
    example: {
      problem:
        "Argument about traffic reduction. Option: 'The city has sufficient budget.' Is this the assumption?",
      solution:
        "Budget is not discussed in the premise. While practically relevant, it is out of scope for this argument. Eliminate.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "cr-t3",
    topic: "critical-reasoning",
    type: "pattern-shortcut",
    title: "Strengthen = Bridge the Gap",
    description:
      "A strengthening answer fills the logical gap between premise and conclusion. Look for the answer that makes the conclusion more likely to be true.",
    example: {
      problem:
        "Premise: 'Sales increased after the ad campaign.' Conclusion: 'The ad campaign was effective.' Which strengthens?",
      solution:
        "'No other factors changed during this period' — this eliminates alternative explanations, strengthening the causal link.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "cr-t4",
    topic: "critical-reasoning",
    type: "elimination",
    title: "Weaken = Find the Alternative",
    description:
      "A weakening answer provides an alternative explanation for the observed result, breaking the premise-conclusion link.",
    example: {
      problem:
        "Premise: 'Crime dropped after more police were deployed.' Conclusion: 'More police reduce crime.' Which weakens?",
      solution:
        "'A major holiday season occurred, and people stayed indoors' — alternative explanation for the crime drop.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "cr-t5",
    topic: "critical-reasoning",
    type: "pattern-shortcut",
    title: "Course of Action: Feasibility + Relevance",
    description:
      "A valid course of action must pass two tests: (1) Is it practically feasible? (2) Does it directly address the stated problem? Extreme measures (ban everything, jail everyone) usually fail test 1.",
    example: {
      problem:
        "Problem: 'Rising pollution in city.' Action: 'Ban all vehicles immediately.'",
      solution:
        "Not feasible — cannot ban all vehicles overnight. Invalid course of action despite being relevant to pollution.",
    },
    timeSaved: "10 sec/question",
  },
]
