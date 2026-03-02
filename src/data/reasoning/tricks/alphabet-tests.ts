import type { ReasoningTrick } from "@/types/reasoning"

export const alphabetTestsTricks: ReasoningTrick[] = [
  {
    id: "alpha-t1",
    topic: "alphabet-tests",
    type: "pattern-shortcut",
    title: "EJOTY Anchor Points",
    description: "Memorise: E=5, J=10, O=15, T=20, Y=25. Use these 5 anchors to find any letter's position without counting from A every time.",
    formula: "E=5, J=10, O=15, T=20, Y=25 — offset by ±1,2,3,4 from nearest anchor",
    example: {
      problem: "What is the position of R in the alphabet?",
      solution: "T=20, R is 2 before T → R=18. Instant — no counting from A.",
    },
    timeSaved: "15 sec/question",
  },
  {
    id: "alpha-t2",
    topic: "alphabet-tests",
    type: "pattern-shortcut",
    title: "Letter Reversal: Position from Z",
    description: "When asked for the nth letter from the END of the alphabet, use the formula: position from end = 27 − position from start.",
    formula: "Forward position = 27 − reverse position",
    example: {
      problem: "Which letter is 8th from the end of the alphabet?",
      solution: "27 − 8 = 19th from start = S. No need to count Z, Y, X… backwards.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "alpha-t3",
    topic: "alphabet-tests",
    type: "elimination",
    title: "Middle Letter of a Range",
    description: "To find the letter exactly between two given letters, add their positions and divide by 2. If the result is a decimal, both adjacent letters are equidistant.",
    formula: "Middle = (pos₁ + pos₂) / 2",
    example: {
      problem: "Which letter is midway between F and P?",
      solution: "F=6, P=16. Midway = (6+16)/2 = 11 = K.",
    },
    timeSaved: "8 sec/question",
  },
  {
    id: "alpha-t4",
    topic: "alphabet-tests",
    type: "pattern-shortcut",
    title: "Dictionary Order Shortcut",
    description: "To arrange words in dictionary order, compare letters position-by-position. The first differing letter decides order — do not read the full word.",
    example: {
      problem: "Arrange: PLANE, PLANET, PLAN, PLANT.",
      solution: "All share PLA. 4th letter: N in all → 5th: PLAN ends; PLANE=E, PLANET=E+T, PLANT=T. Order: PLAN, PLANE, PLANET, PLANT.",
    },
    timeSaved: "12 sec/question",
  },
  {
    id: "alpha-t5",
    topic: "alphabet-tests",
    type: "elimination",
    title: "Skip-Letter Series: Detect the Gap Size",
    description: "In a letter series, count the numerical gap between consecutive terms. If the gap is constant, extend it. If the gap increases by 1 each time, apply the arithmetic progression.",
    example: {
      problem: "B, D, G, K, ? (series).",
      solution: "B=2, D=4 (gap 2), G=7 (gap 3), K=11 (gap 4). Next gap = 5 → K+5=16=P.",
    },
    timeSaved: "10 sec/question",
  },
]
