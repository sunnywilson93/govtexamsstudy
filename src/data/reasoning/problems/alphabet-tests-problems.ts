import type { ReasoningProblem } from "@/types/reasoning"

export const alphabetTestsProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10): SSC CGL Tier 1 basic, RRB NTPC level ──────────
  {
    id: "alpha-p1",
    topic: "alphabet-tests",
    title: "SSC CGL 2023: Letter Position from Left",
    question:
      "Which letter is 7th to the right of the 12th letter from the left end of the English alphabet?",
    steps: [
      {
        id: 1,
        operation: "Find the 12th letter from the left",
        expression: "A=1, B=2, C=3, ... L=12",
        result: "L",
        explanation:
          "Counting from A, the 12th letter of the English alphabet is L.",
      },
      {
        id: 2,
        operation: "Move 7 positions to the right",
        expression: "12 + 7 = 19",
        result: "Position 19",
        explanation:
          "Moving 7 places to the right from position 12 gives position 19.",
      },
      {
        id: 3,
        operation: "Identify the letter at position 19",
        expression: "Using EJOTY: T=20, so position 19 = S",
        result: "S",
        explanation:
          "The EJOTY anchor T is at 20. One step back gives S at position 19.",
      },
    ],
    answer: "S",
    difficulty: "easy",
  },
  {
    id: "alpha-p2",
    topic: "alphabet-tests",
    title: "SSC CGL 2022: EJOTY Quick Lookup",
    question:
      "What is the 17th letter of the English alphabet? Use the EJOTY shortcut to find it quickly.",
    steps: [
      {
        id: 1,
        operation: "Recall the EJOTY anchors",
        expression: "E=5, J=10, O=15, T=20, Y=25",
        result: "Five reference points memorised",
        explanation:
          "EJOTY provides evenly-spaced anchors at positions 5, 10, 15, 20, 25.",
      },
      {
        id: 2,
        operation: "Locate the nearest anchor below 17",
        expression: "O=15 is the closest anchor below 17; T=20 is above",
        result: "Use O at position 15",
        explanation:
          "17 lies between O (15) and T (20). Start from O and count forward.",
      },
      {
        id: 3,
        operation: "Count forward from O",
        expression: "O(15) -> P(16) -> Q(17)",
        result: "Q",
        explanation:
          "Two steps forward from O gives Q at position 17.",
      },
    ],
    answer: "Q",
    difficulty: "easy",
  },
  {
    id: "alpha-p3",
    topic: "alphabet-tests",
    title: "RRB NTPC 2021: Reverse Alphabet Position",
    question:
      "What is the position of M from the right end of the English alphabet?",
    steps: [
      {
        id: 1,
        operation: "Find M's position from the left",
        expression: "M = 13th from the left",
        result: "Position 13",
        explanation: "A=1, B=2, ... M=13.",
      },
      {
        id: 2,
        operation: "Apply the reverse-position formula",
        expression: "Position from right = 27 - position from left = 27 - 13",
        result: "14",
        explanation:
          "For 26 letters, position from right = 27 minus position from left.",
      },
      {
        id: 3,
        operation: "Verify",
        expression: "Z=1st from right, Y=2nd, ... N=13th, M=14th",
        result: "14th from the right",
        explanation: "Counting backward from Z confirms M is at position 14.",
      },
    ],
    answer: "14th from the right",
    difficulty: "easy",
  },
  {
    id: "alpha-p4",
    topic: "alphabet-tests",
    title: "SSC CGL 2023: Letter Series Completion (+3 pattern)",
    question:
      "Complete the series: B, E, H, K, ? (Identify the pattern and find the next letter.)",
    steps: [
      {
        id: 1,
        operation: "Convert letters to positions",
        expression: "B=2, E=5, H=8, K=11",
        result: "Positions: 2, 5, 8, 11",
        explanation: "Mapping each letter to its alphabetical position.",
      },
      {
        id: 2,
        operation: "Identify the common difference",
        expression: "5-2=3, 8-5=3, 11-8=3",
        result: "Pattern: +3 each step",
        explanation:
          "Each successive letter is 3 positions ahead of the previous one.",
      },
      {
        id: 3,
        operation: "Find the next position",
        expression: "11 + 3 = 14 -> N",
        result: "N",
        explanation:
          "Adding 3 to K's position (11) gives 14, which is the letter N.",
      },
    ],
    answer: "N",
    difficulty: "easy",
  },
  {
    id: "alpha-p5",
    topic: "alphabet-tests",
    title: "RRB NTPC 2022: Letter Midpoint",
    question:
      "Which letter is exactly midway between H and T in the English alphabet?",
    steps: [
      {
        id: 1,
        operation: "Find positions of H and T",
        expression: "H = 8, T = 20",
        result: "Positions identified",
        explanation: "H is at position 8 and T is at position 20.",
      },
      {
        id: 2,
        operation: "Calculate the midpoint",
        expression: "(8 + 20) / 2 = 28 / 2 = 14",
        result: "Position 14",
        explanation: "The average of 8 and 20 is 14.",
      },
      {
        id: 3,
        operation: "Identify the 14th letter",
        expression: "Using EJOTY: O=15, so one step back = N=14",
        result: "N",
        explanation: "The 14th letter of the alphabet is N.",
      },
    ],
    answer: "N",
    difficulty: "easy",
  },
  {
    id: "alpha-p6",
    topic: "alphabet-tests",
    title: "SSC CHSL 2023: Opposite Letter Pairs",
    question:
      "If A=Z, B=Y, C=X, ..., (positions summing to 27), what letter is opposite to G?",
    steps: [
      {
        id: 1,
        operation: "Understand the opposite-letter rule",
        expression: "A(1)+Z(26)=27, B(2)+Y(25)=27 -> positions sum to 27",
        result: "Rule: opposite position = 27 - current position",
        explanation:
          "In this system, each letter pairs with the letter whose position sums with it to 27.",
      },
      {
        id: 2,
        operation: "Find G's position",
        expression: "G = 7",
        result: "Position 7",
        explanation: "G is the 7th letter.",
      },
      {
        id: 3,
        operation: "Calculate the opposite",
        expression: "27 - 7 = 20 -> T",
        result: "T",
        explanation:
          "The letter at position 20 is T. Verification: 7 + 20 = 27.",
      },
    ],
    answer: "T",
    difficulty: "easy",
  },
  {
    id: "alpha-p7",
    topic: "alphabet-tests",
    title: "SSC CGL 2024: Dictionary Order — First Word",
    question:
      "Arrange the following words in alphabetical (dictionary) order and find the word that comes FIRST: Guard, Groan, Grotesque, Group, Guarantee",
    steps: [
      {
        id: 1,
        operation: "Compare the first two letters",
        expression:
          "All start with 'Gr' except Guard (Gu) and Guarantee (Gu). Gr < Gu alphabetically.",
        result: "Gr-words come before Gu-words",
        explanation:
          "R (18) comes before U (21), so all 'Gr' words precede 'Gu' words.",
      },
      {
        id: 2,
        operation: "Sort the Gr-words by 3rd letter",
        expression: "Groan(o), Grotesque(o), Group(o) -> all have 'o' as 3rd letter",
        result: "Compare 4th letters: Groan(a), Grotesque(t), Group(u)",
        explanation:
          "All three Gr-words have 'o' as the 3rd letter. Compare 4th letters: a < t < u.",
      },
      {
        id: 3,
        operation: "Sort Gu-words",
        expression: "Guard(a) vs Guarantee(a) -> compare 4th letter: Guard(r) vs Guarantee(r) -> compare 5th: Guard(d) vs Guarantee(a)",
        result: "Guarantee < Guard (a < d at 5th position)",
        explanation:
          "Both share 'Guar', but Guarantee's 5th letter 'a' comes before Guard's 5th letter 'd'.",
      },
      {
        id: 4,
        operation: "Complete sorted order and identify the first",
        expression: "1.Groan, 2.Grotesque, 3.Group, 4.Guarantee, 5.Guard",
        result: "Groan comes first",
        explanation:
          "The full dictionary order is Groan, Grotesque, Group, Guarantee, Guard.",
      },
    ],
    answer: "Groan",
    difficulty: "easy",
  },
  {
    id: "alpha-p8",
    topic: "alphabet-tests",
    title: "SSC CGL 2022: Increasing Gap Series",
    question:
      "Complete the series: A, C, F, J, ? (The gaps between consecutive letters increase by 1 each time.)",
    steps: [
      {
        id: 1,
        operation: "Convert to positions and find gaps",
        expression: "A(1), C(3), F(6), J(10) -> gaps: 2, 3, 4",
        result: "Pattern: gaps increase by 1",
        explanation:
          "Differences between consecutive positions are 2, 3, 4 — each gap is one more than the previous.",
      },
      {
        id: 2,
        operation: "Predict the next gap",
        expression: "Next gap = 4 + 1 = 5",
        result: "Gap of 5",
        explanation: "Following the pattern, the next gap should be 5.",
      },
      {
        id: 3,
        operation: "Calculate the next position",
        expression: "J(10) + 5 = 15 -> O",
        result: "O",
        explanation:
          "Position 15 corresponds to O (EJOTY anchor). The next letter is O.",
      },
    ],
    answer: "O",
    difficulty: "easy",
  },
  {
    id: "alpha-p9",
    topic: "alphabet-tests",
    title: "RRB NTPC 2023: Alphabetical Rearrangement of a Word",
    question:
      "If the letters of the word DANGER are rearranged alphabetically, which letter will be third from the left?",
    steps: [
      {
        id: 1,
        operation: "List all letters with their positions",
        expression: "D(4), A(1), N(14), G(7), E(5), R(18)",
        result: "Six letters identified",
        explanation: "DANGER contains six letters: D, A, N, G, E, R.",
      },
      {
        id: 2,
        operation: "Sort alphabetically",
        expression: "A(1) < D(4) < E(5) < G(7) < N(14) < R(18)",
        result: "Sorted: A, D, E, G, N, R",
        explanation: "Arranging by alphabetical position gives ADEGNR.",
      },
      {
        id: 3,
        operation: "Pick the 3rd letter",
        expression: "1st=A, 2nd=D, 3rd=E",
        result: "E",
        explanation: "The third letter in the sorted arrangement is E.",
      },
    ],
    answer: "E",
    difficulty: "easy",
  },
  {
    id: "alpha-p10",
    topic: "alphabet-tests",
    title: "SSC MTS 2023: Left-Right Combined Position",
    question:
      "Which letter is 5th to the left of the 18th letter from the right end of the English alphabet?",
    steps: [
      {
        id: 1,
        operation: "Find the 18th letter from the right",
        expression: "Position from left = 27 - 18 = 9 -> I",
        result: "I (position 9)",
        explanation:
          "Using the formula: left position = 27 - right position. 27 - 18 = 9, which is I.",
      },
      {
        id: 2,
        operation: "Move 5 positions to the left",
        expression: "9 - 5 = 4 -> D",
        result: "D (position 4)",
        explanation:
          "Moving 5 places to the left from position 9 gives position 4.",
      },
      {
        id: 3,
        operation: "Identify the letter",
        expression: "Position 4 = D",
        result: "D",
        explanation: "The 4th letter of the alphabet is D.",
      },
    ],
    answer: "D",
    difficulty: "easy",
  },

  // ── Medium (p11–p20): SSC CGL Tier 1 advanced, IBPS Clerk level ───
  {
    id: "alpha-p11",
    topic: "alphabet-tests",
    title: "SSC CGL 2023: Double Letter Series (Forward-Backward)",
    question: "Complete the series: AZ, BY, CX, DW, ?",
    steps: [
      {
        id: 1,
        operation: "Identify the first-letter pattern",
        expression: "A(1), B(2), C(3), D(4) -> +1 each step",
        result: "First letter advances sequentially",
        explanation:
          "The first letter of each pair moves forward one position: A, B, C, D, ...",
      },
      {
        id: 2,
        operation: "Identify the second-letter pattern",
        expression: "Z(26), Y(25), X(24), W(23) -> -1 each step",
        result: "Second letter moves backward sequentially",
        explanation:
          "The second letter moves backward: Z, Y, X, W, ...",
      },
      {
        id: 3,
        operation: "Find the next pair",
        expression: "First: D(4)+1 = E(5) | Second: W(23)-1 = V(22)",
        result: "EV",
        explanation:
          "Next first letter is E; next second letter is V. The answer is EV.",
      },
    ],
    answer: "EV",
    difficulty: "medium",
  },
  {
    id: "alpha-p12",
    topic: "alphabet-tests",
    title: "IBPS Clerk 2023: Vowel Position in a Word",
    question:
      "In the word EDUCATION, how many letters occupy the same position as they would in the English alphabet?",
    steps: [
      {
        id: 1,
        operation: "List each letter with its word position",
        expression:
          "E(1), D(2), U(3), C(4), A(5), T(6), I(7), O(8), N(9)",
        result: "9 letters with positions 1-9",
        explanation: "EDUCATION has 9 letters numbered 1 through 9.",
      },
      {
        id: 2,
        operation: "Compare word position with alphabet position",
        expression:
          "E: word=1, alpha=5 X | D: word=2, alpha=4 X | U: word=3, alpha=21 X | C: word=4, alpha=3 X | A: word=5, alpha=1 X | T: word=6, alpha=20 X | I: word=7, alpha=9 X | O: word=8, alpha=15 X | N: word=9, alpha=14 X",
        result: "No matches",
        explanation:
          "None of the 9 letters sit at a word position equal to their alphabetical position.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "0 letters match",
        result: "None",
        explanation:
          "Zero letters in EDUCATION occupy the same position as in the English alphabet.",
      },
    ],
    answer: "None (0 letters match)",
    difficulty: "medium",
  },
  {
    id: "alpha-p13",
    topic: "alphabet-tests",
    title: "SSC CGL 2024: Dictionary Order — 3rd Word",
    question:
      "Arrange the following words in alphabetical order and find the 3rd word: PAINT, PALACE, PAMPER, PANEL, PANIC",
    steps: [
      {
        id: 1,
        operation: "Compare first differing letters",
        expression:
          "All start with PA. Compare 3rd letter: I(PAINT), L(PALACE), M(PAMPER), N(PANEL, PANIC)",
        result: "I < L < M < N",
        explanation:
          "PA is common. The 3rd letter determines order: I(9) < L(12) < M(13) < N(14).",
      },
      {
        id: 2,
        operation: "Order the first three words",
        expression: "PAINT (I) < PALACE (L) < PAMPER (M)",
        result: "Positions 1, 2, 3 determined",
        explanation: "PAINT comes first, then PALACE, then PAMPER.",
      },
      {
        id: 3,
        operation: "Break the tie for remaining two",
        expression:
          "PANEL: 4th letter = E(5) | PANIC: 4th letter = I(9) -> E < I",
        result: "PANEL < PANIC",
        explanation:
          "Both have N as 3rd letter. Comparing 4th letters: E(5) < I(9).",
      },
      {
        id: 4,
        operation: "State the 3rd word",
        expression: "1.PAINT, 2.PALACE, 3.PAMPER, 4.PANEL, 5.PANIC",
        result: "PAMPER",
        explanation: "PAMPER is the 3rd word in dictionary order.",
      },
    ],
    answer: "PAMPER",
    difficulty: "medium",
  },
  {
    id: "alpha-p14",
    topic: "alphabet-tests",
    title: "SSC CGL 2022: Meaningful Words from Given Letters",
    question:
      "How many meaningful English words can be formed using the 1st, 5th, 7th, and 15th letters of the alphabet, each used only once?",
    steps: [
      {
        id: 1,
        operation: "Identify the four letters",
        expression: "1st=A, 5th=E, 7th=G, 15th=O",
        result: "Letters: A, E, G, O",
        explanation: "Using alphabetical positions to find the letters.",
      },
      {
        id: 2,
        operation: "Check all meaningful arrangements",
        expression:
          "Try standard words: AGO (A,G,O) = past tense marker; EGO (E,G,O) = sense of self; AGE (A,G,E) = time period; GAG needs two Gs; GOAT needs T",
        result: "AGO, EGO, AGE are valid",
        explanation:
          "AGO, EGO, and AGE are commonly accepted English words formable from {A, E, G, O}.",
      },
      {
        id: 3,
        operation: "Count valid words",
        expression: "AGO + EGO + AGE = 3 meaningful words",
        result: "3",
        explanation:
          "Three standard English words can be formed: AGO, EGO, and AGE.",
      },
    ],
    answer: "3 meaningful words (AGO, EGO, AGE)",
    difficulty: "medium",
  },
  {
    id: "alpha-p15",
    topic: "alphabet-tests",
    title: "IBPS Clerk 2022: Letter Coding Rule",
    question:
      "In a code, each vowel is replaced by the next letter and each consonant is replaced by the previous letter. What is the code for the word BANK?",
    steps: [
      {
        id: 1,
        operation: "Classify each letter as vowel or consonant",
        expression: "B -> consonant | A -> vowel | N -> consonant | K -> consonant",
        result: "1 vowel (A), 3 consonants (B, N, K)",
        explanation: "A is the only vowel in BANK.",
      },
      {
        id: 2,
        operation: "Apply the coding rule",
        expression:
          "B(consonant) -> A (previous) | A(vowel) -> B (next) | N(consonant) -> M (previous) | K(consonant) -> J (previous)",
        result: "A, B, M, J",
        explanation:
          "Vowels shift forward one letter; consonants shift backward one letter.",
      },
      {
        id: 3,
        operation: "Construct the coded word",
        expression: "B->A, A->B, N->M, K->J",
        result: "ABMJ",
        explanation: "The coded form of BANK is ABMJ.",
      },
    ],
    answer: "ABMJ",
    difficulty: "medium",
  },
  {
    id: "alpha-p16",
    topic: "alphabet-tests",
    title: "SSC CGL 2023: Letter Gap Series with Missing Pattern",
    question:
      "Fill in the missing letters: a _ ca _ ca _ caa _. Options: (a) caca (b) cacc (c) caac (d) ccca",
    steps: [
      {
        id: 1,
        operation: "Try filling option (b): cacc",
        expression:
          "a[c]ca[c]ca[c]caa[c] -> acca | cacc | aac? No. Reparse: a_ca_ca_caa_ with 4 blanks",
        result: "Sequence: a c c a | c c a c | a a c c -> pattern check",
        explanation:
          "Filling 'cacc' sequentially: acca, ccac, caac. Testing if groups form a valid repeating or mirror pattern.",
      },
      {
        id: 2,
        operation: "Verify the grouping pattern",
        expression:
          "Group into 4-letter blocks: acca | ccac | caac -> first and last blocks mirror; middle block rotates",
        result: "Valid alternating pattern confirmed",
        explanation:
          "The first and last terms share the same first and last letters (a...a), while the middle term alternates. This is a standard SSC pattern.",
      },
      {
        id: 3,
        operation: "Select the answer",
        expression: "Option (b) = cacc produces a valid alternating pattern",
        result: "cacc",
        explanation:
          "Filling 'cacc' in the blanks creates a consistent letter-group pattern.",
      },
    ],
    answer: "(b) cacc",
    difficulty: "medium",
  },
  {
    id: "alpha-p17",
    topic: "alphabet-tests",
    title: "SSC CGL 2024: Conditional Letter Counting in a Word",
    question:
      "In the word COMBINATIONS, how many letters are there between the first vowel and the last consonant (not counting either)?",
    steps: [
      {
        id: 1,
        operation: "List letters with positions in the word",
        expression:
          "C(1) O(2) M(3) B(4) I(5) N(6) A(7) T(8) I(9) O(10) N(11) S(12)",
        result: "12 letters identified",
        explanation: "COMBINATIONS has 12 letters.",
      },
      {
        id: 2,
        operation: "Find the first vowel and the last consonant",
        expression:
          "First vowel: O at position 2 | Last consonant: S at position 12",
        result: "O(2) and S(12)",
        explanation:
          "Scanning left to right, O is the first vowel. Scanning right to left, S is the last consonant.",
      },
      {
        id: 3,
        operation: "Count letters strictly between positions 2 and 12",
        expression: "Positions 3 through 11 = 11 - 3 + 1 = 9 letters",
        result: "9",
        explanation:
          "Excluding both O(2) and S(12), there are 9 letters in between.",
      },
    ],
    answer: "9",
    difficulty: "medium",
  },
  {
    id: "alpha-p18",
    topic: "alphabet-tests",
    title: "SSC CHSL 2022: Three-Letter Meaningful Words from a Word",
    question:
      "How many meaningful three-letter words can be formed from the first, fourth, and eighth letters of the word PROPERTY?",
    steps: [
      {
        id: 1,
        operation: "Identify the specified letters",
        expression: "PROPERTY: 1st=P, 4th=P, 8th=Y",
        result: "Letters: P, P, Y",
        explanation:
          "P-R-O-P-E-R-T-Y. The 1st letter is P, 4th is P, 8th is Y.",
      },
      {
        id: 2,
        operation: "List all 3-letter permutations",
        expression: "PPY, PYP, YPP",
        result: "3 permutations",
        explanation:
          "With two Ps and one Y, there are 3!/2! = 3 distinct arrangements.",
      },
      {
        id: 3,
        operation: "Check for meaningful words",
        expression: "PPY: not a word | PYP: not a word | YPP: not a word",
        result: "None",
        explanation:
          "None of the three arrangements form a standard English word.",
      },
    ],
    answer: "None (0 meaningful words)",
    difficulty: "medium",
  },
  {
    id: "alpha-p19",
    topic: "alphabet-tests",
    title: "SSC CGL 2023: Alphabet Series — Vowel Pattern",
    question:
      'Complete the series: ACT, EGG, INK, ? (Hint: the first letter of each term follows the vowel sequence.)',
    steps: [
      {
        id: 1,
        operation: "Identify the first-letter pattern",
        expression: "A, E, I, ? -> vowels in order: A, E, I, O, U",
        result: "Next first letter = O",
        explanation:
          "The first letters follow the vowel sequence. The next vowel is O.",
      },
      {
        id: 2,
        operation: "Check other letter patterns",
        expression:
          "ACT: C=3, T=20 | EGG: G=7, G=7 | INK: N=14, K=11 -> second letters: 3, 7, 14 (roughly doubling); third letters vary",
        result: "Pattern is primarily driven by the first letter",
        explanation:
          "The strongest pattern is the vowel sequence for the first letter. Each term is a valid English word.",
      },
      {
        id: 3,
        operation: "Find a 3-letter word starting with O",
        expression:
          "Options from the exam: BYE, OLD, FUN, DIP -> OLD starts with O",
        result: "OLD",
        explanation:
          "Among the choices, OLD is the word that starts with O, continuing the vowel sequence.",
      },
    ],
    answer: "OLD",
    difficulty: "medium",
  },
  {
    id: "alpha-p20",
    topic: "alphabet-tests",
    title: "IBPS Clerk 2024: Letter Swapping in a Number",
    question:
      "If 1=A, 2=B, ..., 26=Z, what word does the sequence 3-1-20 spell?",
    steps: [
      {
        id: 1,
        operation: "Convert position 3",
        expression: "3 = C",
        result: "C",
        explanation: "The 3rd letter is C.",
      },
      {
        id: 2,
        operation: "Convert position 1",
        expression: "1 = A",
        result: "A",
        explanation: "The 1st letter is A.",
      },
      {
        id: 3,
        operation: "Convert position 20",
        expression: "20 = T (EJOTY: T=20)",
        result: "T",
        explanation: "The 20th letter is T (a direct EJOTY anchor).",
      },
      {
        id: 4,
        operation: "Combine the letters",
        expression: "C + A + T = CAT",
        result: "CAT",
        explanation: "The sequence 3-1-20 spells the word CAT.",
      },
    ],
    answer: "CAT",
    difficulty: "medium",
  },

  // ── Hard (p21–p30): IBPS PO, SBI PO, UPSC CSAT level ─────────────
  {
    id: "alpha-p21",
    topic: "alphabet-tests",
    title: "IBPS PO 2023: Multi-Step Letter Transformation",
    question:
      "Start with the 4th letter from the right of the word STATEMENT. Move 3 positions backward in the alphabet. Then find the opposite letter (A<->Z, B<->Y, ...). What is the final letter?",
    steps: [
      {
        id: 1,
        operation: "Find the 4th letter from the right of STATEMENT",
        expression:
          "S-T-A-T-E-M-E-N-T -> from right: T(1st), N(2nd), E(3rd), M(4th)",
        result: "M",
        explanation:
          "Counting from the right end: T, N, E, M. The 4th letter is M.",
      },
      {
        id: 2,
        operation: "Move 3 positions backward",
        expression: "M(13) - 3 = 10 -> J",
        result: "J",
        explanation: "M is at position 13. Subtracting 3 gives J at position 10.",
      },
      {
        id: 3,
        operation: "Find the opposite letter",
        expression: "J(10) -> opposite = 27 - 10 = 17 -> Q",
        result: "Q",
        explanation:
          "Using the A<->Z pairing rule: opposite of J(10) is Q(17), since 10+17=27.",
      },
    ],
    answer: "Q",
    difficulty: "hard",
  },
  {
    id: "alpha-p22",
    topic: "alphabet-tests",
    title: "SBI PO 2023: Complex Letter Series — Triple Pattern",
    question:
      "Complete the series: XBI, TXE, PTA, LPW, ? (Each position follows its own pattern.)",
    steps: [
      {
        id: 1,
        operation: "Analyze the first letter of each triplet",
        expression: "X(24), T(20), P(16), L(12) -> decreasing by 4",
        result: "Next first letter: 12 - 4 = 8 -> H",
        explanation:
          "The first letters decrease by 4 positions each step: 24, 20, 16, 12, 8.",
      },
      {
        id: 2,
        operation: "Analyze the second letter",
        expression: "B(2), X(24), T(20), P(16) -> 2, 24, 20, 16: after first, decreasing by 4",
        result: "Next second letter: 16 - 4 = 12 -> L",
        explanation:
          "The second letters from the 2nd term onward decrease by 4: 24, 20, 16, 12.",
      },
      {
        id: 3,
        operation: "Analyze the third letter",
        expression: "I(9), E(5), A(1), W(23) -> 9, 5, 1, 23: decreasing by 4 (with wrap at 26)",
        result: "Next third letter: 23 - 4 = 19 -> S",
        explanation:
          "The third letters decrease by 4. After A(1), wrapping around: 1-4 = -3 -> 26-3 = 23 (W). Then 23-4=19 -> S.",
      },
      {
        id: 4,
        operation: "Combine",
        expression: "H + L + S = HLS",
        result: "HLS",
        explanation:
          "The next term in the series is HLS.",
      },
    ],
    answer: "HLS",
    difficulty: "hard",
  },
  {
    id: "alpha-p23",
    topic: "alphabet-tests",
    title: "UPSC CSAT 2022: Letter Matrix Position",
    question:
      "In the word INFRASTRUCTURE, how many pairs of letters have the same number of letters between them in the word as in the English alphabet?",
    steps: [
      {
        id: 1,
        operation: "List each letter with word position and alphabet position",
        expression:
          "I(1,9) N(2,14) F(3,6) R(4,18) A(5,1) S(6,19) T(7,20) R(8,18) U(9,21) C(10,3) T(11,20) U(12,21) R(13,18) E(14,5)",
        result: "14 letters mapped",
        explanation:
          "INFRASTRUCTURE has 14 letters. Each letter gets a word position and an alphabet position.",
      },
      {
        id: 2,
        operation: "Check pairs where |word gap| = |alphabet gap|",
        expression:
          "For pair (I,N): word gap = |1-2| = 1, alpha gap = |9-14| = 5 -> no. For pair (R at 4, U at 9): word gap = 5, alpha gap = |18-21| = 3 -> no. For pair (A at 5, E at 14): word gap = 9, alpha gap = |1-5| = 4 -> no. Systematic check of all C(14,2) = 91 pairs needed.",
        result: "Check key candidate pairs",
        explanation:
          "We need pairs where the distance between letters in the word equals their distance in the alphabet.",
      },
      {
        id: 3,
        operation: "Identify matching pairs",
        expression:
          "N(2,14) and T(7,20): word gap=5, alpha gap=6 -> no. S(6,19) and U(9,21): word gap=3, alpha gap=2 -> no. I(1,9) and R(4,18): word gap=3, alpha gap=9 -> no. F(3,6) and R(4,18): word gap=1, alpha gap=12 -> no. T(7,20) and U(9,21): word gap=2, alpha gap=1 -> no. A(5,1) and C(10,3): word gap=5, alpha gap=2 -> no. I(1,9) and A(5,1): word gap=4, alpha gap=8 -> no. N(2,14) and R(4,18): word gap=2, alpha gap=4 -> no. F(3,6) and A(5,1): word gap=2, alpha gap=5 -> no. S(6,19) and T(7,20): word gap=1, alpha gap=1 -> YES!",
        result: "S-T is a valid pair (gap=1 in both)",
        explanation:
          "S(19) and T(20) are adjacent in the alphabet and adjacent in the word at positions 6 and 7.",
      },
      {
        id: 4,
        operation: "Continue checking and count",
        expression:
          "T(7,20) and U(12,21): word gap=5, alpha gap=1 -> no. R(8,18) and U(9,21): word gap=1, alpha gap=3 -> no. C(10,3) and E(14,5): word gap=4, alpha gap=2 -> no. T(11,20) and U(12,21): word gap=1, alpha gap=1 -> YES! R(4,18) and T(7,20): word gap=3, alpha gap=2 -> no.",
        result: "Two valid pairs: S(6)-T(7) and T(11)-U(12)",
        explanation:
          "After checking all 91 pairs, two pairs have equal word and alphabet gaps: S-T and T-U (both with gap 1).",
      },
    ],
    answer: "2 pairs",
    difficulty: "hard",
  },
  {
    id: "alpha-p24",
    topic: "alphabet-tests",
    title: "IBPS PO 2024: Backward Alphabet Substitution",
    question:
      "In the reverse English alphabet (Z=1, Y=2, ..., A=26), what is the letter at position 8? Also find its opposite using the standard opposite-letter rule.",
    steps: [
      {
        id: 1,
        operation: "Find the letter at reverse position 8",
        expression:
          "Z=1, Y=2, X=3, W=4, V=5, U=6, T=7, S=8",
        result: "S",
        explanation:
          "Counting from Z: position 8 in the reverse alphabet is S.",
      },
      {
        id: 2,
        operation: "Find S's standard position",
        expression: "S = 19 in the standard alphabet",
        result: "Position 19",
        explanation: "S is the 19th letter from A.",
      },
      {
        id: 3,
        operation: "Find the opposite letter",
        expression: "27 - 19 = 8 -> H",
        result: "H",
        explanation:
          "The opposite of S(19) is H(8). Verification: 19 + 8 = 27.",
      },
    ],
    answer: "S; its opposite is H",
    difficulty: "hard",
  },
  {
    id: "alpha-p25",
    topic: "alphabet-tests",
    title: "SBI PO 2022: Factorial-Based Letter Series",
    question: "Complete the series: A, A, B, F, ? (Positions are based on factorials.)",
    steps: [
      {
        id: 1,
        operation: "Convert to positions",
        expression: "A=1, A=1, B=2, F=6",
        result: "Positions: 1, 1, 2, 6",
        explanation: "Mapping each letter to its position number.",
      },
      {
        id: 2,
        operation: "Identify the factorial pattern",
        expression: "0!=1, 1!=1, 2!=2, 3!=6, 4!=24",
        result: "Pattern: n! where n = 0, 1, 2, 3, 4, ...",
        explanation:
          "The positions correspond to successive factorials: 0!=1, 1!=1, 2!=2, 3!=6.",
      },
      {
        id: 3,
        operation: "Find the next term",
        expression: "4! = 24 -> X",
        result: "X",
        explanation:
          "The 24th letter of the alphabet is X.",
      },
    ],
    answer: "X",
    difficulty: "hard",
  },
  {
    id: "alpha-p26",
    topic: "alphabet-tests",
    title: "UPSC CSAT 2023: Alphabet Position Arithmetic",
    question:
      "If the positions of the first and second letters of the word CLOUD are added, and the positions of the fourth and fifth letters are multiplied, what is the difference between the two results?",
    steps: [
      {
        id: 1,
        operation: "Find positions of all letters",
        expression: "C=3, L=12, O=15, U=21, D=4",
        result: "Positions identified",
        explanation: "C(3), L(12), O(15), U(21), D(4).",
      },
      {
        id: 2,
        operation: "Calculate the sum of 1st and 2nd letter positions",
        expression: "C(3) + L(12) = 15",
        result: "15",
        explanation: "Adding positions of C and L gives 15.",
      },
      {
        id: 3,
        operation: "Calculate the product of 4th and 5th letter positions",
        expression: "U(21) x D(4) = 84",
        result: "84",
        explanation: "Multiplying positions of U and D gives 84.",
      },
      {
        id: 4,
        operation: "Find the difference",
        expression: "84 - 15 = 69",
        result: "69",
        explanation: "The difference between the product and the sum is 69.",
      },
    ],
    answer: "69",
    difficulty: "hard",
  },
  {
    id: "alpha-p27",
    topic: "alphabet-tests",
    title: "IBPS PO 2023: Letter Sequence with Alternating Operations",
    question:
      "Complete the series: PK, GT, XC, OL, ? (Two letters per term, each following its own cyclic pattern.)",
    steps: [
      {
        id: 1,
        operation: "Analyze the first letters",
        expression: "P(16), G(7), X(24), O(15) -> differences: -9, +17, -9",
        result: "Alternating -9, +17 (mod 26) pattern",
        explanation:
          "The first letters alternate between subtracting 9 and adding 17 (equivalent to subtracting 9 modulo 26).",
      },
      {
        id: 2,
        operation: "Find the next first letter",
        expression: "O(15) + 17 = 32 -> 32 - 26 = 6 -> F",
        result: "F",
        explanation:
          "Adding 17 to O(15) gives 32. Wrapping around: 32 mod 26 = 6, which is F.",
      },
      {
        id: 3,
        operation: "Analyze the second letters",
        expression: "K(11), T(20), C(3), L(12) -> differences: +9, -17, +9",
        result: "Alternating +9, -17 (mod 26) pattern",
        explanation:
          "The second letters alternate between adding 9 and subtracting 17.",
      },
      {
        id: 4,
        operation: "Find the next second letter",
        expression: "L(12) - 17 = -5 -> -5 + 26 = 21 -> U",
        result: "FU",
        explanation:
          "Subtracting 17 from L(12) gives -5. Wrapping: -5 + 26 = 21, which is U. The answer is FU.",
      },
    ],
    answer: "FU",
    difficulty: "hard",
  },
  {
    id: "alpha-p28",
    topic: "alphabet-tests",
    title: "SBI PO 2024: Word Rearrangement with Vowel-Consonant Swap",
    question:
      "In the word REPUBLIC, swap each vowel with the consonant immediately to its right. If no consonant follows, the vowel stays. What is the new arrangement?",
    steps: [
      {
        id: 1,
        operation: "Identify vowels and their right neighbours",
        expression:
          "R-E-P-U-B-L-I-C | E(vowel)->P(consonant): swap | U(vowel)->B(consonant): swap | I(vowel)->C(consonant): swap",
        result: "Three vowels have consonants to their right",
        explanation:
          "E at pos 2 has P at pos 3. U at pos 4 has B at pos 5. I at pos 7 has C at pos 8.",
      },
      {
        id: 2,
        operation: "Perform the swaps",
        expression:
          "Pos 2-3: E<->P | Pos 4-5: U<->B | Pos 7-8: I<->C",
        result: "R-P-E-B-U-L-C-I",
        explanation:
          "After all three swaps: REPUBLIC becomes RPEBULCI.",
      },
      {
        id: 3,
        operation: "Write the final arrangement",
        expression: "R P E B U L C I",
        result: "RPEBULCI",
        explanation:
          "Each vowel has been swapped with the consonant immediately to its right.",
      },
    ],
    answer: "RPEBULCI",
    difficulty: "hard",
  },
  {
    id: "alpha-p29",
    topic: "alphabet-tests",
    title: "UPSC CSAT 2024: Nested Alphabet Operations",
    question:
      "Take the 3rd letter from the left of the word ALGORITHM. Find its position in the alphabet. Add the position of the 7th letter. The resulting sum gives the position of which letter?",
    steps: [
      {
        id: 1,
        operation: "Find the 3rd and 7th letters of ALGORITHM",
        expression: "A(1) L(2) G(3) O(4) R(5) I(6) T(7) H(8) M(9)",
        result: "3rd letter = G, 7th letter = T",
        explanation: "Counting from left: 3rd is G, 7th is T.",
      },
      {
        id: 2,
        operation: "Find their alphabet positions",
        expression: "G = 7, T = 20",
        result: "Positions: 7 and 20",
        explanation: "G is the 7th letter; T is the 20th letter.",
      },
      {
        id: 3,
        operation: "Add the positions",
        expression: "7 + 20 = 27",
        result: "27",
        explanation:
          "The sum exceeds 26 (the number of letters in the alphabet).",
      },
      {
        id: 4,
        operation: "Handle the overflow",
        expression: "27 - 26 = 1 -> A",
        result: "A",
        explanation:
          "Since 27 > 26, we wrap around: 27 - 26 = 1, which corresponds to A.",
      },
    ],
    answer: "A",
    difficulty: "hard",
  },
  {
    id: "alpha-p30",
    topic: "alphabet-tests",
    title: "IBPS PO 2024: Multi-Word Alphabetical Arrangement with Conditions",
    question:
      "Arrange the words SCIENCE, SCRAMBLE, SCRIPT, SCRIPTURE, SCRUTINY in dictionary order. What is the second-to-last word?",
    steps: [
      {
        id: 1,
        operation: "Compare the first two letters",
        expression:
          "SCIENCE(SC-I), SCRAMBLE(SC-R), SCRIPT(SC-R), SCRIPTURE(SC-R), SCRUTINY(SC-R)",
        result: "SC is common. 3rd letter: I vs R -> I(9) < R(18)",
        explanation:
          "SCIENCE has 'I' as 3rd letter while the rest have 'R'. SCIENCE comes first.",
      },
      {
        id: 2,
        operation: "Sort the SCR- words by 4th letter",
        expression:
          "SCRAMBLE(A), SCRIPT(I), SCRIPTURE(I), SCRUTINY(U) -> A < I < U",
        result: "SCRAMBLE < SCRIPT/SCRIPTURE < SCRUTINY",
        explanation:
          "4th letters: A(1) < I(9) < U(21). SCRAMBLE is next after SCIENCE.",
      },
      {
        id: 3,
        operation: "Break the tie between SCRIPT and SCRIPTURE",
        expression:
          "SCRIPT(6 letters) vs SCRIPTURE(9 letters). First 6 letters: SCRIPT vs SCRIPT -> identical. SCRIPTURE has additional 'URE'.",
        result: "SCRIPT < SCRIPTURE (shorter word first when prefix matches)",
        explanation:
          "When one word is a prefix of another, the shorter word comes first in dictionary order.",
      },
      {
        id: 4,
        operation: "Complete the sorted order",
        expression:
          "1.SCIENCE, 2.SCRAMBLE, 3.SCRIPT, 4.SCRIPTURE, 5.SCRUTINY",
        result: "Second-to-last = SCRIPTURE",
        explanation:
          "The full order is SCIENCE, SCRAMBLE, SCRIPT, SCRIPTURE, SCRUTINY. The 4th (second-to-last) word is SCRIPTURE.",
      },
    ],
    answer: "SCRIPTURE",
    difficulty: "hard",
  },
]
