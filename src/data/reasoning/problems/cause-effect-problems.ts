import type { ReasoningProblem } from "@/types/reasoning"

export const causeEffectProblems: ReasoningProblem[] = [
  {
    id: "ce-p1",
    topic: "cause-effect",
    title: "Direct Cause and Effect",
    question:
      "Statement I: The government declared a one-week holiday for all schools due to extreme heat. Statement II: The temperature in the city exceeded 45°C for three consecutive days. Which is cause and which is effect?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: school holiday declared | II: temperature exceeded 45°C for 3 days",
        result: "Two related events identified",
        explanation: "Statement I is a government action; Statement II is a weather condition.",
      },
      {
        id: 2,
        operation: "Identify the temporal and logical sequence",
        expression: "Temperature rise (II) → government response (I)",
        result: "II precedes I logically and temporally",
        explanation:
          "Extreme heat (II) is the condition that prompted the government to act. The holiday (I) is the response.",
      },
      {
        id: 3,
        operation: "Apply cause-effect definition",
        expression: "Cause: event that triggers the other | Effect: event that follows from the other",
        result: "II is the cause; I is the effect",
        explanation: "The temperature crossing 45°C is the cause; the school holiday declaration is the direct effect.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Cause = Statement II | Effect = Statement I",
        result: "Statement II is the cause and Statement I is the effect.",
        explanation: "Prolonged extreme heat caused the government to declare the school holiday.",
      },
    ],
    answer: "Statement II is the cause; Statement I is the effect.",
    difficulty: "easy",
  },
  {
    id: "ce-p2",
    topic: "cause-effect",
    title: "Independent Causes, Independent Effects",
    question:
      "Statement I: Many shops in the market area were closed today. Statement II: A cricket match between India and Australia is being broadcast live today. Are these cause and effect, or independent?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: many shops closed | II: cricket match broadcast live",
        result: "Two events identified",
        explanation: "Statement I is about shop closures; Statement II is about a sports event.",
      },
      {
        id: 2,
        operation: "Check for direct logical link",
        expression: "Does a cricket match broadcast cause shops to close?",
        result: "Possible but not necessary or sufficient",
        explanation:
          "While some shop owners may watch cricket, this is not a standard or reliable cause-effect chain. Shops close for many reasons (strikes, holidays, supply issues).",
      },
      {
        id: 3,
        operation: "Check for common cause",
        expression: "Is there a third event that could cause both?",
        result: "Not evident from the statements",
        explanation: "No single obvious event causes both widespread shop closures and a cricket broadcast simultaneously.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "No reliable causal chain established",
        result: "Both statements are independent causes of independent effects.",
        explanation:
          "Without further information, the shop closures and the cricket match are unrelated events. They are independent.",
      },
    ],
    answer: "Both are independent events with no cause-effect relationship.",
    difficulty: "easy",
  },
  {
    id: "ce-p3",
    topic: "cause-effect",
    title: "Common Cause for Two Effects",
    question:
      "Statement I: The number of road accidents in the city increased sharply last month. Statement II: The traffic police issued a record number of challans (fines) last month. What is the relationship?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: road accidents increased | II: traffic challans at record high",
        result: "Two events in the same domain (road/traffic) at the same time",
        explanation: "Both events occur in the traffic domain during the same period.",
      },
      {
        id: 2,
        operation: "Test: Is I the cause of II?",
        expression: "More accidents → police issue more challans?",
        result: "Possible but indirect",
        explanation: "More accidents could make police more vigilant, leading to more challans — but not certain.",
      },
      {
        id: 3,
        operation: "Test: Is II the cause of I?",
        expression: "More challans → more accidents?",
        result: "Illogical (challans are deterrents)",
        explanation: "Issuing more fines is a deterrent measure and would not typically cause more accidents.",
      },
      {
        id: 4,
        operation: "Identify common cause",
        expression: "Common cause: increased traffic volume or reckless driving culture → causes both more accidents AND more police enforcement",
        result: "Both I and II are effects of a common cause",
        explanation:
          "A surge in traffic (due to festivals, events, or poor road conditions) can independently cause more accidents and prompt stricter police enforcement.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Common cause → I and II are independent effects",
        result: "Both statements are effects of a common underlying cause.",
        explanation: "Increased traffic/recklessness causes both more accidents (I) and more police action (II).",
      },
    ],
    answer: "Both are effects of a common cause (increased traffic/recklessness).",
    difficulty: "easy",
  },
  {
    id: "ce-p4",
    topic: "cause-effect",
    title: "Effect-as-Cause Trap",
    question:
      "Statement I: The river flooded several low-lying areas of the city this week. Statement II: The municipal corporation issued flood-warning notices to residents last week. Which came first logically — and which is cause vs. effect?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: river flooded areas this week | II: flood-warning notices issued last week",
        result: "Temporal clue: II (last week) precedes I (this week)",
        explanation: "Statement II occurred before Statement I in time.",
      },
      {
        id: 2,
        operation: "Identify the underlying cause",
        expression: "What causes both a flood and pre-emptive warnings?",
        result: "Heavy upstream rainfall / dam release — the true initial cause",
        explanation:
          "Warnings are issued based on forecast or upstream data. The actual flooding follows later. Both are consequences of the same trigger.",
      },
      {
        id: 3,
        operation: "Determine the causal chain",
        expression: "Upstream heavy rainfall → Warning issued (II) → Flood occurs (I)",
        result: "II is not the cause of I; both share a common upstream cause",
        explanation:
          "The warning did not cause the flood. Rather, the warning anticipated the flood. II is an early effect; I is a later effect of the same cause.",
      },
      {
        id: 4,
        operation: "Trap: avoid confusing temporal priority with causation",
        expression: "II happened before I but did not cause I",
        result: "Effect-as-cause trap avoided",
        explanation:
          "Just because warnings (II) came before flooding (I) does not mean II caused I. Both are effects of the same root cause.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "Both I and II are effects of a common cause (upstream heavy rain)",
        result: "Both statements are effects of a common cause.",
        explanation:
          "Neither caused the other. Heavy rainfall caused the warnings to be issued and the subsequent flooding.",
      },
    ],
    answer: "Both are effects of a common cause (heavy upstream rainfall).",
    difficulty: "medium",
  },
  {
    id: "ce-p5",
    topic: "cause-effect",
    title: "No Causal Relation",
    question:
      "Statement I: The price of gold increased by 15% last quarter. Statement II: A new multiplex cinema opened in the city last quarter. Are these related?",
    steps: [
      {
        id: 1,
        operation: "Read both statements",
        expression: "I: gold price increased 15% | II: new multiplex cinema opened",
        result: "Two events in different domains during the same period",
        explanation: "Gold pricing is a national/international economic phenomenon. Multiplex opening is a local commercial event.",
      },
      {
        id: 2,
        operation: "Test directional causation I → II",
        expression: "Does a rise in gold prices cause a multiplex to open?",
        result: "No logical mechanism",
        explanation: "Gold price changes do not drive cinema investment decisions, which depend on real estate, demand, and entertainment economics.",
      },
      {
        id: 3,
        operation: "Test directional causation II → I",
        expression: "Does opening a multiplex cause gold prices to rise?",
        result: "No logical mechanism",
        explanation: "A local cinema opening has no bearing on commodity markets.",
      },
      {
        id: 4,
        operation: "Check for common cause",
        expression: "Is there a single event that would cause both gold price rises and cinema openings?",
        result: "Unlikely — gold prices are driven by global factors; cinema by local demand",
        explanation: "No plausible common cause links these two events.",
      },
      {
        id: 5,
        operation: "Final answer",
        expression: "No cause-effect or common-cause relationship",
        result: "The two statements have no causal relationship.",
        explanation:
          "The coincidence of timing does not imply causation. Gold price changes and cinema openings operate in entirely separate domains.",
      },
    ],
    answer: "The two statements have no causal relationship.",
    difficulty: "medium",
  },
]
