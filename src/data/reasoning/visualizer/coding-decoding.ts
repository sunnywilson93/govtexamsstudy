import type { CodingDecodingProblem } from "@/types/reasoning"

export const codingDecodingProblems: CodingDecodingProblem[] = [
  {
    id: "cd-1",
    type: "letter-shift",
    question:
      "In a certain code, each letter is replaced by the letter 3 places ahead in the alphabet (Z wraps to C). If EXAM is written as HADP, how is BEST coded?",
    codingRules: [
      { input: "E", output: "H", pattern: "+3 shift: E(5) → H(8)" },
      { input: "X", output: "A", pattern: "+3 shift: X(24) → A(1) [wrap]" },
      { input: "A", output: "D", pattern: "+3 shift: A(1) → D(4)" },
      { input: "M", output: "P", pattern: "+3 shift: M(13) → P(16)" },
    ],
    steps: [
      "Rule: each letter shifts +3 in the alphabet; after Z, wrap back to A.",
      "B(2) + 3 = E(5) → B encodes as E.",
      "E(5) + 3 = H(8) → E encodes as H.",
      "S(19) + 3 = V(22) → S encodes as V.",
      "T(20) + 3 = W(23) → T encodes as W.",
      "Combining: BEST → EHVW.",
    ],
    answer: "EHVW",
  },
  {
    id: "cd-2",
    type: "letter-shift",
    question:
      "In a certain code, each letter is replaced by the letter 2 places before it in the alphabet (A wraps to Y). If MIND is written as KILB, how is HOPE coded?",
    codingRules: [
      { input: "M", output: "K", pattern: "−2 shift: M(13) → K(11)" },
      { input: "I", output: "G", pattern: "−2 shift: I(9) → G(7)" },
      { input: "N", output: "L", pattern: "−2 shift: N(14) → L(12)" },
      { input: "D", output: "B", pattern: "−2 shift: D(4) → B(2)" },
    ],
    steps: [
      "Rule: each letter shifts −2 in the alphabet; before A, wrap to Z, Y.",
      "H(8) − 2 = F(6) → H encodes as F.",
      "O(15) − 2 = M(13) → O encodes as M.",
      "P(16) − 2 = N(14) → P encodes as N.",
      "E(5) − 2 = C(3) → E encodes as C.",
      "Combining: HOPE → FMNC.",
    ],
    answer: "FMNC",
  },
  {
    id: "cd-3",
    type: "word-mapping",
    question:
      "In a certain code language, each letter is replaced by its mirror in the alphabet (A↔Z, B↔Y, C↔X, …). If CAT is coded as XZG and DOG is coded as WLT, what is the code for BOY?",
    codingRules: [
      { input: "CAT", output: "XZG", pattern: "Mirror rule: C(3)↔X(24), A(1)↔Z(26), T(20)↔G(7)" },
      { input: "DOG", output: "WLT", pattern: "Mirror rule: D(4)↔W(23), O(15)↔L(12), G(7)↔T(20)" },
    ],
    steps: [
      "Rule: letter at position n encodes as letter at position (27 − n).",
      "B is at position 2; 27 − 2 = 25 → Y.",
      "O is at position 15; 27 − 15 = 12 → L.",
      "Y is at position 25; 27 − 25 = 2 → B.",
      "Combining: BOY → YLB.",
    ],
    answer: "YLB",
  },
  {
    id: "cd-4",
    type: "symbol-substitution",
    question:
      "In a symbol code, # = A, @ = B, * = C, % = E. What is the symbol code for BACE?",
    codingRules: [
      { input: "A", output: "#", pattern: "Symbol substitution: A → #" },
      { input: "B", output: "@", pattern: "Symbol substitution: B → @" },
      { input: "C", output: "*", pattern: "Symbol substitution: C → *" },
      { input: "E", output: "%", pattern: "Symbol substitution: E → %" },
    ],
    steps: [
      "Given substitution table: A=#, B=@, C=*, E=%.",
      "B → @",
      "A → #",
      "C → *",
      "E → %",
      "Combining: BACE → @#*%.",
    ],
    answer: "@#*%",
  },
  {
    id: "cd-5",
    type: "letter-shift",
    question:
      "In a certain code, each letter is replaced by the next letter in the alphabet (Z wraps to A). If CODE is written as DPEF, how is LINK coded?",
    codingRules: [
      { input: "C", output: "D", pattern: "+1 shift: C(3) → D(4)" },
      { input: "O", output: "P", pattern: "+1 shift: O(15) → P(16)" },
      { input: "D", output: "E", pattern: "+1 shift: D(4) → E(5)" },
      { input: "E", output: "F", pattern: "+1 shift: E(5) → F(6)" },
    ],
    steps: [
      "Rule: each letter shifts +1 in the alphabet; Z wraps to A.",
      "L(12) + 1 = M(13) → L encodes as M.",
      "I(9) + 1 = J(10) → I encodes as J.",
      "N(14) + 1 = O(15) → N encodes as O.",
      "K(11) + 1 = L(12) → K encodes as L.",
      "Combining: LINK → MJOL.",
    ],
    answer: "MJOL",
  },
]
