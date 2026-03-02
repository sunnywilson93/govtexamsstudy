import type { ReasoningTrick } from "@/types/reasoning"

export const inputOutputTricks: ReasoningTrick[] = [
  {
    id: "io-t1",
    topic: "input-output",
    type: "pattern-shortcut",
    title: "Compare Input to Step 1 First",
    description: "Always compare the original input to Step 1 output only. Never compare non-adjacent steps. Find what changed — word moved, number swapped, or arrangement shifted.",
    example: {
      problem: "Input: cat 31 dog 17 hen 45. Step 1: 17 cat 31 dog hen 45.",
      solution: "Smallest number (17) moved to front. Rule detected from just 2 rows — no need to read further steps.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "io-t2",
    topic: "input-output",
    type: "pattern-shortcut",
    title: "Alternating Rule Detection",
    description: "Many machines alternate between two operations: e.g., odd steps sort words, even steps sort numbers. Test this hypothesis on steps 1, 2, 3.",
    example: {
      problem: "Step 1 moves smallest number left. Step 2 moves largest word right. Step 3 moves next smallest number left.",
      solution: "Pattern: alternate number-sort (ascending, left) and word-sort (descending, right). Apply the rule to predict any step directly.",
    },
    timeSaved: "25 sec/question",
  },
  {
    id: "io-t3",
    topic: "input-output",
    type: "elimination",
    title: "Count Elements to Find Last Step",
    description: "The machine terminates when all elements are sorted or placed. Count total elements and divide by elements placed per step to estimate final step count.",
    formula: "Last step ≈ Total elements / Elements moved per step",
    example: {
      problem: "Input has 8 elements. Machine places 1 element per step.",
      solution: "Last step = Step 7 (first 7 place 7 elements; 8th is already in place). Confirm by checking if Step 7 output matches a fully sorted arrangement.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "io-t4",
    topic: "input-output",
    type: "elimination",
    title: "Word-by-Value Shift: Check Alphabetical or Length",
    description: "When words (not numbers) are being sorted, test alphabetical order first, then word-length order. One of these two rules covers 80% of SSC/IBPS input-output questions.",
    example: {
      problem: "Input: mango apple kiwi banana. Step 1: apple mango kiwi banana. Step 2: apple banana mango kiwi.",
      solution: "Alphabetical sort from left. Step 3 would be: apple banana kiwi mango.",
    },
    timeSaved: "12 sec/question",
  },
  {
    id: "io-t5",
    topic: "input-output",
    type: "pattern-shortcut",
    title: "Backward Step Reconstruction",
    description: "If asked for the input given an intermediate step, reverse the operation. If Step 2 moves smallest left, reverse: move the leftmost number back to its pre-Step-2 position.",
    example: {
      problem: "Step 3: 12 apple 34 mango 56. Find Step 2.",
      solution: "Rule: each step moves smallest number to front. Reverse: 34 was moved to position 3 in Step 3; put it back where 12 sits. Step 2: apple 12 34 mango 56.",
    },
    timeSaved: "18 sec/question",
  },
]
