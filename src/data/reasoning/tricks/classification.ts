import type { ReasoningTrick } from "@/types/reasoning"

export const classificationTricks: ReasoningTrick[] = [
  {
    id: "class-t1",
    topic: "classification",
    type: "pattern-shortcut",
    title: "Name the Category of Three First",
    description: "Before checking options, identify the category that three items share. The odd one out is whatever does NOT belong to that category — even if it seems related.",
    example: {
      problem: "Rose, Lotus, Jasmine, Marigold — find the odd one.",
      solution: "Rose, Lotus, Jasmine are national symbols of India/other countries. Marigold is not — it is the odd one out.",
    },
    timeSaved: "12 sec/question",
  },
  {
    id: "class-t2",
    topic: "classification",
    type: "elimination",
    title: "Alphabetical Position Trap",
    description: "When words seem unrelated, check their starting letter positions (A=1, B=2, …). SSC often hides a number-property disguised as words.",
    example: {
      problem: "ACE, BDF, CEG, DFH — odd one out.",
      solution: "ACE=1,3,5 (odd positions); BDF=2,4,6; CEG=3,5,7; DFH=4,6,8. All skip-one sequences — check gaps: A+2=C+2=E. All consistent. No odd one — question tests that you don't eliminate by surface reading.",
    },
  },
  {
    id: "class-t3",
    topic: "classification",
    type: "elimination",
    title: "Number Properties — Rule Out Primes/Squares/Odd",
    description: "For number classification, test prime, perfect square, cube, even, odd, multiple-of-N. The odd one out breaks exactly one of these properties.",
    example: {
      problem: "4, 9, 25, 35 — odd one out.",
      solution: "4=2², 9=3², 25=5² are perfect squares. 35 is not a perfect square — odd one out.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "class-t4",
    topic: "classification",
    type: "pattern-shortcut",
    title: "Group by Function, Not Appearance",
    description: "When items look similar, group by what they DO (function) rather than what they look like. This resolves ambiguous classification in IBPS/SSC.",
    example: {
      problem: "Hammer, Saw, Chisel, Drill — odd one out.",
      solution: "Hammer: strikes. Saw, Chisel, Drill: all cut/bore material. Hammer is the odd one — function differs.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "class-t5",
    topic: "classification",
    type: "elimination",
    title: "Two Possible Groups — Pick the Larger",
    description: "If two valid groupings seem possible, the correct answer is based on the grouping that covers three items under a more specific (narrower) category.",
    example: {
      problem: "Cricket, Football, Chess, Hockey — odd one out.",
      solution: "Chess is a board game (indoor); others are outdoor sports. Narrower specific group = outdoor sports (3 items). Chess is odd one out.",
    },
    timeSaved: "10 sec/question",
  },
]
