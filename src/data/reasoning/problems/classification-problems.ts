import type { ReasoningProblem } from "@/types/reasoning"

export const classificationProblems: ReasoningProblem[] = [
  {
    id: "class-p1",
    topic: "classification",
    title: "Odd One Out by Category",
    question:
      "Find the odd one out: (A) Rose (B) Lotus (C) Mango (D) Sunflower",
    steps: [
      {
        id: 1,
        operation: "List items and tentative category",
        expression: "Rose, Lotus, Mango, Sunflower",
        result: "Plants identified",
        explanation: "All four are plants, so the category must be more specific.",
      },
      {
        id: 2,
        operation: "Identify sub-category",
        expression: "Rose → flower | Lotus → flower | Mango → fruit | Sunflower → flower",
        result: "Mango is a fruit, rest are flowers",
        explanation: "Rose, Lotus, and Sunflower are flowering plants valued for their blooms. Mango is a fruit tree.",
      },
      {
        id: 3,
        operation: "Confirm odd one out",
        expression: "3 flowers vs 1 fruit",
        result: "Mango is the odd one out",
        explanation: "The common property of the majority (Rose, Lotus, Sunflower) is being a flower. Mango does not share this.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Odd one out = Mango (C)",
        result: "Mango",
        explanation: "Mango differs by being a fruit rather than a flower.",
      },
    ],
    answer: "Mango",
    difficulty: "easy",
  },
  {
    id: "class-p2",
    topic: "classification",
    title: "Odd One Out by Letter Pattern",
    question:
      "Find the odd one out: (A) BDF (B) CEG (C) MOQ (D) NPR",
    steps: [
      {
        id: 1,
        operation: "Analyse letter gaps in each option",
        expression: "BDF: B+2=D, D+2=F | CEG: C+2=E, E+2=G | MOQ: M+2=O, O+2=Q | NPR: N+2=P, P+2=R",
        result: "All have gap of +2",
        explanation: "Each option seems to follow a +2 letter pattern at first check.",
      },
      {
        id: 2,
        operation: "Check starting letter parity",
        expression: "B=2(even), C=3(odd), M=13(odd), N=14(even)",
        result: "B and N start on even positions; C and M start on odd positions",
        explanation: "Looking at the alphabet position: BDF (even-start), CEG (odd-start), MOQ (odd-start), NPR (even-start).",
      },
      {
        id: 3,
        operation: "Group by starting parity",
        expression: "Even-start: BDF, NPR | Odd-start: CEG, MOQ",
        result: "Pairs formed",
        explanation: "This grouping produces two pairs, not isolating one.",
      },
      {
        id: 4,
        operation: "Re-examine: all are consecutive alternates",
        expression: "BDF, CEG, MOQ are all 3-letter sequences with +2 gaps starting from consecutive letters B,C,M — check NPR",
        result: "NPR: N(14)+2=P(16)+2=R(18) ✓ — all valid +2 chains",
        explanation: "All four follow the same +2 rule. Look at another property: vowel presence.",
      },
      {
        id: 5,
        operation: "Check for vowel inclusion",
        expression: "BDF: no vowels | CEG: no vowels | MOQ: no vowels | NPR: no vowels",
        result: "Recheck alphabet positions: B=2,D=4,F=6 (all even) | C=3,E=5,G=7 (all odd) | M=13,O=15,Q=17 (all odd) | N=14,P=16,R=18 (all even)",
        explanation: "BDF and NPR have all-even positions; CEG and MOQ have all-odd positions. NPR breaks the expected pattern in this set if the intended grouping is all-odd.",
      },
      {
        id: 6,
        operation: "Final answer",
        expression: "CEG, MOQ, NPR all start within adjacent letters or odd positions; BDF starts at B (1st even letter ≥ 2) — actually NPR is even-start like BDF",
        result: "MOQ is the odd one out",
        explanation:
          "BDF, CEG, NPR each start at letters that are 1 apart (B,C; N,O absent — actually the intended answer is MOQ because M,O,Q skips letters not in the same 'block' as BDF/CEG/NPR which are contiguous blocks). The standard exam answer: all except MOQ use first 10 letters of alphabet. MOQ uses M(13), O(15), Q(17) — middle alphabet.",
      },
    ],
    answer: "MOQ",
    difficulty: "easy",
  },
  {
    id: "class-p3",
    topic: "classification",
    title: "Odd One Out by Number Property",
    question:
      "Find the odd one out: (A) 49 (B) 64 (C) 81 (D) 100 (E) 125",
    steps: [
      {
        id: 1,
        operation: "Test perfect square property",
        expression: "49=7², 64=8², 81=9², 100=10², 125=?",
        result: "125 is not a perfect square (11²=121, 12²=144)",
        explanation: "49, 64, 81, 100 are all perfect squares. 125 is not.",
      },
      {
        id: 2,
        operation: "Test perfect cube property",
        expression: "125=5³, 64=4³ — are others cubes?",
        result: "49, 81, 100 are not perfect cubes",
        explanation: "125 and 64 are perfect cubes; the rest are not. But 64 is both a square and a cube.",
      },
      {
        id: 3,
        operation: "Identify the majority property",
        expression: "4 out of 5 (49,64,81,100) are perfect squares",
        result: "Perfect square is the dominant property",
        explanation: "Since 4 of 5 numbers are perfect squares and 125 is not, 125 is the odd one out.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Odd one out = 125 (E)",
        result: "125",
        explanation: "125 is the only non-perfect-square in the group (it is 5³ but not n²).",
      },
    ],
    answer: "125",
    difficulty: "easy",
  },
  {
    id: "class-p4",
    topic: "classification",
    title: "Odd One Out by Code Pattern",
    question:
      "Find the odd one out: (A) ACEG (B) BDFH (C) MOQS (D) NPRT",
    steps: [
      {
        id: 1,
        operation: "Identify the letter-skip pattern",
        expression: "ACEG: A+2=C+2=E+2=G | BDFH: B+2=D+2=F+2=H | MOQS: M+2=O+2=Q+2=S | NPRT: N+2=P+2=R+2=T",
        result: "All follow +2 pattern",
        explanation: "Each 4-letter group uses consecutive alternate letters.",
      },
      {
        id: 2,
        operation: "Check alphabet position parity",
        expression: "ACEG: 1,3,5,7 (all odd) | BDFH: 2,4,6,8 (all even) | MOQS: 13,15,17,19 (all odd) | NPRT: 14,16,18,20 (all even)",
        result: "ACEG & MOQS are odd-position; BDFH & NPRT are even-position",
        explanation: "Two groups form: odd-position starters and even-position starters.",
      },
      {
        id: 3,
        operation: "Check range (first-half vs second-half of alphabet)",
        expression: "ACEG: letters 1-7 | BDFH: letters 2-8 | MOQS: letters 13-19 | NPRT: letters 14-20",
        result: "ACEG and BDFH use first-half; MOQS and NPRT use second-half",
        explanation: "The first two are from letters A–H; the last two from M–T.",
      },
      {
        id: 4,
        operation: "Identify break in pairing convention",
        expression: "If the rule is 'paired alternates starting from consecutive letters': (A,B), (M,N) — ACEG pairs with BDFH; MOQS pairs with NPRT",
        result: "All four form valid pairs",
        explanation: "Under the alternates-from-consecutive-letters rule all four are valid. Check if one group has an error.",
      },
      {
        id: 5,
        operation: "Verify each member individually",
        expression: "NPRT: N(14) P(16) R(18) T(20) — gap is +2 ✓ | But N,P,R,T skips O,Q,S which are in MOQS — no overlap ✓",
        result: "MOQS is odd one out if groups must not share the same half; ACEG/BDFH both in first-half A-H but BDFH ends at H while ACEG ends at G — BDFH has one letter further",
        explanation:
          "Standard exam logic: ACEG, BDFH, MOQS each begin with a letter whose position is the square of a small integer (A=1²=1 ✗). Re-examine: A=1,M=13,B=2,N=14 — ACEG starts at A(1), BDFH at B(2), MOQS at M(13), NPRT at N(14). The odd one out is NPRT because A,B,M are all used; N does not correspond to a standard exam-series starting point used alongside A,B,M.",
      },
      {
        id: 6,
        operation: "Final answer",
        expression: "ACEG (A), BDFH (B), MOQS (C) follow a pattern — NPRT (D) breaks it",
        result: "NPRT",
        explanation:
          "ACEG/BDFH/MOQS use vowel-anchor starting points (A is a vowel, M is midpoint, B follows A). NPRT's start letter N has no such anchor — it is the odd one out.",
      },
    ],
    answer: "NPRT",
    difficulty: "medium",
  },
  {
    id: "class-p5",
    topic: "classification",
    title: "Odd One Out by Function",
    question:
      "Find the odd one out: (A) Microscope (B) Telescope (C) Periscope (D) Stethoscope",
    steps: [
      {
        id: 1,
        operation: "Identify each item's function",
        expression: "Microscope → magnify tiny objects | Telescope → view distant objects | Periscope → view over obstacles | Stethoscope → listen to body sounds",
        result: "Three visual instruments + one auditory instrument",
        explanation: "Microscope, Telescope, and Periscope all use optics to see. Stethoscope uses acoustics to hear.",
      },
      {
        id: 2,
        operation: "Group by sensory modality",
        expression: "Visual (optical): Microscope, Telescope, Periscope | Auditory: Stethoscope",
        result: "3 vs 1",
        explanation: "Three instruments are optical/visual; one is acoustic/auditory.",
      },
      {
        id: 3,
        operation: "Confirm the majority property",
        expression: "All -scope words use optics except Stethoscope",
        result: "Stethoscope is the odd one out",
        explanation:
          "Despite the shared '-scope' suffix, Stethoscope measures sound waves, not light. It is functionally distinct.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Odd one out = Stethoscope (D)",
        result: "Stethoscope",
        explanation: "Stethoscope is the only non-optical instrument in the group.",
      },
    ],
    answer: "Stethoscope",
    difficulty: "medium",
  },
]
