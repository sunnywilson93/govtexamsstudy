import type { ReasoningProblem } from "@/types/reasoning"

export const classificationProblems: ReasoningProblem[] = [
  // ── Easy (p1-p10): SSC CGL Tier 1 basic, RRB NTPC level ──────────
  {
    id: "class-p1",
    topic: "classification",
    title: "SSC CGL 2023: Odd One Out by Category (Flowers vs Fruit)",
    question:
      "Find the odd one out: (A) Rose (B) Lotus (C) Mango (D) Sunflower",
    steps: [
      {
        id: 1,
        operation: "List items and identify tentative category",
        expression: "Rose, Lotus, Mango, Sunflower",
        result: "All are plants",
        explanation:
          "All four are plants, so the differentiating factor must be more specific.",
      },
      {
        id: 2,
        operation: "Identify sub-category",
        expression: "Rose = flower | Lotus = flower | Mango = fruit | Sunflower = flower",
        result: "Three flowers, one fruit",
        explanation:
          "Rose, Lotus, and Sunflower are valued for their blooms. Mango is a fruit.",
      },
      {
        id: 3,
        operation: "Confirm odd one out",
        expression: "3 flowers vs 1 fruit",
        result: "Mango is the odd one out",
        explanation:
          "The majority share the property of being flowers. Mango does not.",
      },
    ],
    answer: "(C) Mango",
    difficulty: "easy",
  },
  {
    id: "class-p2",
    topic: "classification",
    title: "RRB NTPC 2022: Odd One Out by Prime Number",
    question:
      "Find the odd one out: (A) 11 (B) 13 (C) 15 (D) 17 (E) 19",
    steps: [
      {
        id: 1,
        operation: "Test primality of each number",
        expression: "11 = prime | 13 = prime | 15 = 3x5 | 17 = prime | 19 = prime",
        result: "15 is not prime",
        explanation:
          "11, 13, 17, and 19 are all prime. 15 = 3 x 5 is composite.",
      },
      {
        id: 2,
        operation: "Confirm majority property",
        expression: "4 primes vs 1 composite",
        result: "15 is the odd one out",
        explanation:
          "15 is the only composite number in the group.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 15 (C)",
        result: "15",
        explanation:
          "15 is divisible by 3 and 5, making it the only non-prime.",
      },
    ],
    answer: "(C) 15",
    difficulty: "easy",
  },
  {
    id: "class-p3",
    topic: "classification",
    title: "SSC CGL 2022: Odd One Out by State Capital",
    question:
      "Find the odd one out: (A) Lucknow (B) Patna (C) Kanpur (D) Bhopal",
    steps: [
      {
        id: 1,
        operation: "Identify common property",
        expression: "Lucknow = UP capital | Patna = Bihar capital | Kanpur = UP city (not capital) | Bhopal = MP capital",
        result: "Three are state capitals; one is not",
        explanation:
          "Lucknow, Patna, and Bhopal are state capitals. Kanpur is a major city but not a capital.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 capitals vs 1 non-capital",
        result: "Kanpur is the odd one out",
        explanation:
          "Kanpur is the only city that is not a state capital.",
      },
    ],
    answer: "(C) Kanpur",
    difficulty: "easy",
  },
  {
    id: "class-p4",
    topic: "classification",
    title: "SSC CHSL 2023: Odd One Out (Marine Mammals vs Fish)",
    question:
      "Find the odd one out: (A) Whale (B) Shark (C) Dolphin (D) Seal",
    steps: [
      {
        id: 1,
        operation: "Classify each animal",
        expression: "Whale = mammal | Shark = fish | Dolphin = mammal | Seal = mammal",
        result: "Three mammals, one fish",
        explanation:
          "Whale, Dolphin, and Seal are marine mammals (breathe air). Shark is a fish (gills).",
      },
      {
        id: 2,
        operation: "Confirm distinguishing property",
        expression: "Mammals: warm-blooded, breathe air | Fish: cold-blooded, gills",
        result: "Shark is fundamentally different",
        explanation:
          "Despite all living in water, Shark is the only fish.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = Shark (B)",
        result: "Shark",
        explanation:
          "Shark is the only non-mammal in the group.",
      },
    ],
    answer: "(B) Shark",
    difficulty: "easy",
  },
  {
    id: "class-p5",
    topic: "classification",
    title: "RRB NTPC 2021: Odd One Out by Vehicle Type",
    question:
      "Find the odd one out: (A) Truck (B) Car (C) Motorcycle (D) Airplane",
    steps: [
      {
        id: 1,
        operation: "Classify each vehicle",
        expression: "Truck = road | Car = road | Motorcycle = road | Airplane = air",
        result: "Three road vehicles, one air vehicle",
        explanation:
          "Truck, Car, and Motorcycle operate on roads. Airplane operates in the air.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 road vehicles vs 1 air vehicle",
        result: "Airplane is the odd one out",
        explanation:
          "Airplane is the only vehicle that does not travel on roads.",
      },
    ],
    answer: "(D) Airplane",
    difficulty: "easy",
  },
  {
    id: "class-p6",
    topic: "classification",
    title: "SSC CGL 2023: Odd One Out (Dairy Products)",
    question:
      "Find the odd one out: (A) Curd (B) Oil (C) Cheese (D) Butter",
    steps: [
      {
        id: 1,
        operation: "Identify source of each item",
        expression: "Curd = milk product | Oil = plant/seed extract | Cheese = milk product | Butter = milk product",
        result: "Three dairy, one non-dairy",
        explanation:
          "Curd, Cheese, and Butter are all derived from milk. Oil comes from plants or seeds.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 dairy products vs 1 non-dairy",
        result: "Oil is the odd one out",
        explanation:
          "Oil is the only item not derived from milk.",
      },
    ],
    answer: "(B) Oil",
    difficulty: "easy",
  },
  {
    id: "class-p7",
    topic: "classification",
    title: "SSC CGL 2024: Odd One Out by Perfect Square",
    question:
      "Find the odd one out: (A) 49 (B) 64 (C) 81 (D) 100 (E) 125",
    steps: [
      {
        id: 1,
        operation: "Test perfect square property",
        expression: "49=7^2 | 64=8^2 | 81=9^2 | 100=10^2 | 125=5^3",
        result: "125 is not a perfect square",
        explanation:
          "49, 64, 81, 100 are all perfect squares. 125 is a perfect cube (5^3) but not a perfect square.",
      },
      {
        id: 2,
        operation: "Confirm majority property",
        expression: "4 perfect squares vs 1 perfect cube",
        result: "125 is the odd one out",
        explanation:
          "The dominant property is being a perfect square. 125 does not share it.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 125 (E)",
        result: "125",
        explanation:
          "125 is 5^3, the only non-perfect-square in the group.",
      },
    ],
    answer: "(E) 125",
    difficulty: "easy",
  },
  {
    id: "class-p8",
    topic: "classification",
    title: "RRB NTPC 2023: Odd One Out (Contains Digit 8)",
    question:
      "Find the odd one out: (A) 48 (B) 180 (C) 18 (D) 150",
    steps: [
      {
        id: 1,
        operation: "Check which numbers contain digit 8",
        expression: "48 has 8 | 180 has 8 | 18 has 8 | 150 has no 8",
        result: "150 does not contain the digit 8",
        explanation:
          "48, 180, and 18 all contain the digit 8. 150 does not.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 numbers with digit 8 vs 1 without",
        result: "150 is the odd one out",
        explanation:
          "150 is the only number that does not contain the digit 8.",
      },
    ],
    answer: "(D) 150",
    difficulty: "easy",
  },
  {
    id: "class-p9",
    topic: "classification",
    title: "SSC CGL 2022: Odd One Out (Vowel-Only Group)",
    question:
      "Which is the odd one out? (A) BCD (B) GHW (C) EOA (D) GTS",
    steps: [
      {
        id: 1,
        operation: "Check vowels in each group",
        expression: "BCD = no vowels | GHW = no vowels | EOA = E,O,A (3 vowels) | GTS = no vowels",
        result: "EOA contains vowels; others do not",
        explanation:
          "BCD, GHW, and GTS contain only consonants. EOA contains three vowels.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 consonant-only groups vs 1 vowel group",
        result: "EOA is the odd one out",
        explanation:
          "EOA is the only group containing vowels.",
      },
    ],
    answer: "(C) EOA",
    difficulty: "easy",
  },
  {
    id: "class-p10",
    topic: "classification",
    title: "SSC CHSL 2022: Odd One Out (Mixing Words)",
    question:
      "Find the odd one out: (A) Blend (B) Mingle (C) Jumble (D) Clash",
    steps: [
      {
        id: 1,
        operation: "Identify meaning of each word",
        expression: "Blend = mix smoothly | Mingle = mix together | Jumble = mix in disorder | Clash = conflict/collide",
        result: "Three mean mixing; one means conflict",
        explanation:
          "Blend, Mingle, and Jumble all involve combining or mixing things together. Clash means to conflict.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 mixing words vs 1 conflict word",
        result: "Clash is the odd one out",
        explanation:
          "Clash does not mean to mix or combine; it means to oppose or conflict.",
      },
    ],
    answer: "(D) Clash",
    difficulty: "easy",
  },

  // ── Medium (p11-p20): SSC CGL Tier 1 advanced, IBPS Clerk level ──
  {
    id: "class-p11",
    topic: "classification",
    title: "SSC CGL 2023: Odd One Out by Function (Scopes)",
    question:
      "Find the odd one out: (A) Microscope (B) Telescope (C) Periscope (D) Stethoscope",
    steps: [
      {
        id: 1,
        operation: "Identify each instrument's function",
        expression: "Microscope = magnify tiny objects | Telescope = view distant objects | Periscope = view over obstacles | Stethoscope = listen to body sounds",
        result: "Three visual instruments, one auditory",
        explanation:
          "Microscope, Telescope, and Periscope all use optics to see. Stethoscope uses acoustics to hear.",
      },
      {
        id: 2,
        operation: "Group by sensory modality",
        expression: "Visual: Microscope, Telescope, Periscope | Auditory: Stethoscope",
        result: "3 optical vs 1 acoustic",
        explanation:
          "Despite the shared '-scope' suffix, Stethoscope measures sound, not light.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = Stethoscope (D)",
        result: "Stethoscope",
        explanation:
          "Stethoscope is the only non-optical instrument.",
      },
    ],
    answer: "(D) Stethoscope",
    difficulty: "medium",
  },
  {
    id: "class-p12",
    topic: "classification",
    title: "SSC CGL 2024: Odd One Out (Constitutional Bodies)",
    question:
      "Find the odd one out: (A) Election Commission (B) Finance Commission (C) NITI Aayog (D) UPSC",
    steps: [
      {
        id: 1,
        operation: "Classify each body",
        expression: "Election Commission = Art 324 | Finance Commission = Art 280 | NITI Aayog = executive order 2015 | UPSC = Art 315",
        result: "Three constitutional, one non-constitutional",
        explanation:
          "Election Commission, Finance Commission, and UPSC are established by the Constitution. NITI Aayog was created by executive order.",
      },
      {
        id: 2,
        operation: "Confirm distinguishing property",
        expression: "Constitutional = derives authority from Constitution",
        result: "NITI Aayog is non-constitutional",
        explanation:
          "NITI Aayog replaced the Planning Commission and has no constitutional basis.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = NITI Aayog (C)",
        result: "NITI Aayog",
        explanation:
          "NITI Aayog is the only non-constitutional body in the group.",
      },
    ],
    answer: "(C) NITI Aayog",
    difficulty: "medium",
  },
  {
    id: "class-p13",
    topic: "classification",
    title: "SSC CGL 2023: Letter Group Gap Pattern",
    question:
      "Which is the odd one out? (A) ACEG (B) BDFH (C) MOQS (D) NPRU",
    steps: [
      {
        id: 1,
        operation: "Check gaps in each group",
        expression: "ACEG: A(1)->C(3)->E(5)->G(7) gap=+2 | BDFH: B(2)->D(4)->F(6)->H(8) gap=+2 | MOQS: M(13)->O(15)->Q(17)->S(19) gap=+2",
        result: "First three groups have consistent +2 gap",
        explanation:
          "ACEG, BDFH, and MOQS all skip one letter (gap of +2) between consecutive letters.",
      },
      {
        id: 2,
        operation: "Check gaps in NPRU",
        expression: "N(14)->P(16)->R(18)->U(21): gaps = +2, +2, +3",
        result: "Last gap breaks the +2 pattern",
        explanation:
          "NPRU has gaps +2, +2, +3. The final gap R->U is +3 instead of +2 (should be T, not U).",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = NPRU (D)",
        result: "NPRU",
        explanation:
          "NPRU is the only group where the gap pattern is inconsistent (+3 at the end instead of +2).",
      },
    ],
    answer: "(D) NPRU",
    difficulty: "medium",
  },
  {
    id: "class-p14",
    topic: "classification",
    title: "IBPS Clerk 2023: Number Classification (Digit Sum = 9)",
    question:
      "Find the odd one out: (A) 6210 (B) 7020 (C) 1431 (D) 1280",
    steps: [
      {
        id: 1,
        operation: "Calculate digit sum of each number",
        expression: "6210: 6+2+1+0=9 | 7020: 7+0+2+0=9 | 1431: 1+4+3+1=9 | 1280: 1+2+8+0=11",
        result: "First three have digit sum 9; last has digit sum 11",
        explanation:
          "6210, 7020, and 1431 all have digits summing to 9. 1280 sums to 11.",
      },
      {
        id: 2,
        operation: "Verify divisibility by 9",
        expression: "6210/9=690 | 7020/9=780 | 1431/9=159 | 1280/9=142.2",
        result: "1280 is not divisible by 9",
        explanation:
          "Numbers with digit sum 9 are divisible by 9. 1280 is not.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 1280 (D)",
        result: "1280",
        explanation:
          "1280 is the only number whose digits do not sum to 9.",
      },
    ],
    answer: "(D) 1280",
    difficulty: "medium",
  },
  {
    id: "class-p15",
    topic: "classification",
    title: "SSC CGL 2022: Odd Number by Primality",
    question:
      "Find the odd one out: (A) 51 (B) 66 (C) 83 (D) 93",
    steps: [
      {
        id: 1,
        operation: "Test primality",
        expression: "51 = 3x17 | 66 = 2x3x11 | 83 = prime | 93 = 3x31",
        result: "83 is prime; others are composite",
        explanation:
          "51, 66, and 93 are all divisible by 3. 83 is a prime number.",
      },
      {
        id: 2,
        operation: "Additional check: divisibility by 3",
        expression: "5+1=6 (div by 3) | 6+6=12 (div by 3) | 8+3=11 (not div by 3) | 9+3=12 (div by 3)",
        result: "83 is not divisible by 3",
        explanation:
          "All others are divisible by 3 (digit sum divisible by 3). 83 is not.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 83 (C)",
        result: "83",
        explanation:
          "83 is the only prime number (and the only one not divisible by 3).",
      },
    ],
    answer: "(C) 83",
    difficulty: "medium",
  },
  {
    id: "class-p16",
    topic: "classification",
    title: "SSC CGL 2024: Odd Number by Multiples of 17",
    question:
      "Find the odd one out: (A) 153 (B) 177 (C) 187 (D) 221",
    steps: [
      {
        id: 1,
        operation: "Check divisibility by 17",
        expression: "153/17=9 | 177/17=10.4 | 187/17=11 | 221/17=13",
        result: "177 is not a multiple of 17",
        explanation:
          "153 = 17x9, 187 = 17x11, 221 = 17x13. But 177 = 3x59, not divisible by 17.",
      },
      {
        id: 2,
        operation: "Confirm the pattern",
        expression: "17x9=153, 17x11=187, 17x13=221 (consecutive odd multiples of 17)",
        result: "177 does not fit the sequence",
        explanation:
          "The three valid numbers are consecutive odd multiples of 17 (9th, 11th, 13th). 177 does not belong.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 177 (B)",
        result: "177",
        explanation:
          "177 is the only number not divisible by 17.",
      },
    ],
    answer: "(B) 177",
    difficulty: "medium",
  },
  {
    id: "class-p17",
    topic: "classification",
    title: "SSC CGL 2023: Vowel Count Difference",
    question:
      "Which is the odd one out? (A) AERO (B) IDEA (C) OPAL (D) EURO",
    steps: [
      {
        id: 1,
        operation: "Count vowels in each word",
        expression: "AERO: A,E,O = 3 vowels | IDEA: I,E,A = 3 vowels | OPAL: O,A = 2 vowels | EURO: E,U,O = 3 vowels",
        result: "AERO, IDEA, EURO have 3 vowels; OPAL has 2",
        explanation:
          "Three words contain exactly 3 vowels. OPAL has only 2.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 words with 3 vowels vs 1 word with 2 vowels",
        result: "OPAL is the odd one out",
        explanation:
          "OPAL has fewer vowels than the others.",
      },
    ],
    answer: "(C) OPAL",
    difficulty: "medium",
  },
  {
    id: "class-p18",
    topic: "classification",
    title: "IBPS Clerk 2022: Keyboard Row Pattern",
    question:
      "Which is the odd one out? (A) QWERTY (B) ASDFGH (C) ZXCVBN (D) POIUYT",
    steps: [
      {
        id: 1,
        operation: "Identify the source of each letter group",
        expression: "QWERTY = top row L-to-R | ASDFGH = middle row L-to-R | ZXCVBN = bottom row L-to-R | POIUYT = top row R-to-L",
        result: "Three read left-to-right; one reads right-to-left",
        explanation:
          "QWERTY, ASDFGH, and ZXCVBN are consecutive keyboard keys read left-to-right. POIUYT reads right-to-left.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 left-to-right vs 1 right-to-left",
        result: "POIUYT is the odd one out",
        explanation:
          "POIUYT is the only group reading in reverse direction on the keyboard.",
      },
    ],
    answer: "(D) POIUYT",
    difficulty: "medium",
  },
  {
    id: "class-p19",
    topic: "classification",
    title: "SSC CGL 2024: Letter Gap Pattern (+3 vs +1)",
    question:
      "Which is the odd one out? (A) BEH (B) DGJ (C) HKN (D) MNO",
    steps: [
      {
        id: 1,
        operation: "Check gaps in each group",
        expression: "BEH: B(2)->E(5)->H(8) gap=+3 | DGJ: D(4)->G(7)->J(10) gap=+3 | HKN: H(8)->K(11)->N(14) gap=+3",
        result: "First three have consistent +3 gap",
        explanation:
          "BEH, DGJ, and HKN all skip two letters (gap of +3) between consecutive letters.",
      },
      {
        id: 2,
        operation: "Check gaps in MNO",
        expression: "MNO: M(13)->N(14)->O(15) gap=+1",
        result: "Gap is +1, not +3",
        explanation:
          "MNO has consecutive letters with gap +1. This breaks the +3 pattern.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = MNO (D)",
        result: "MNO",
        explanation:
          "MNO uses +1 gaps while all others use +3 gaps.",
      },
    ],
    answer: "(D) MNO",
    difficulty: "medium",
  },
  {
    id: "class-p20",
    topic: "classification",
    title: "SSC CGL 2023: Number Classification (Permutations of Digits)",
    question:
      "Find the odd one out: (A) 132 (B) 231 (C) 312 (D) 421",
    steps: [
      {
        id: 1,
        operation: "Check digit sets",
        expression: "132: {1,2,3} | 231: {1,2,3} | 312: {1,2,3} | 421: {1,2,4}",
        result: "First three use digits {1,2,3}; last uses {1,2,4}",
        explanation:
          "132, 231, and 312 are all rearrangements of the digits 1, 2, 3. 421 introduces the digit 4.",
      },
      {
        id: 2,
        operation: "Verify with digit sum",
        expression: "132: 1+3+2=6 | 231: 2+3+1=6 | 312: 3+1+2=6 | 421: 4+2+1=7",
        result: "First three sum to 6; 421 sums to 7",
        explanation:
          "The digit sum confirms the difference. 421 has a different digit set and sum.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 421 (D)",
        result: "421",
        explanation:
          "421 does not belong to the set of permutations of {1, 2, 3}.",
      },
    ],
    answer: "(D) 421",
    difficulty: "medium",
  },

  // ── Hard (p21-p30): IBPS PO, SBI PO, UPSC CSAT level ────────────
  {
    id: "class-p21",
    topic: "classification",
    title: "IBPS PO 2023: Odd One Out (Planet Classification)",
    question:
      "Find the odd one out: (A) Jupiter (B) Saturn (C) Mars (D) Uranus (E) Neptune",
    steps: [
      {
        id: 1,
        operation: "Classify each planet",
        expression: "Jupiter = gas giant | Saturn = gas giant | Mars = terrestrial | Uranus = ice giant | Neptune = ice giant",
        result: "Four are giant planets; one is terrestrial",
        explanation:
          "Jupiter, Saturn, Uranus, and Neptune are all giant planets. Mars is a small rocky planet.",
      },
      {
        id: 2,
        operation: "Verify with orbital position",
        expression: "Jupiter, Saturn, Uranus, Neptune = outer planets (beyond asteroid belt) | Mars = inner planet",
        result: "Mars is the only inner planet",
        explanation:
          "Mars orbits between Earth and the asteroid belt. The others are outer planets.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = Mars (C)",
        result: "Mars",
        explanation:
          "Mars is the only terrestrial/inner planet in the group.",
      },
    ],
    answer: "(C) Mars",
    difficulty: "hard",
  },
  {
    id: "class-p22",
    topic: "classification",
    title: "SBI PO 2023: Odd One Out (Indian Rivers by Origin)",
    question:
      "Find the odd one out: (A) Ganga (B) Yamuna (C) Brahmaputra (D) Godavari",
    steps: [
      {
        id: 1,
        operation: "Identify origin of each river",
        expression: "Ganga = Gangotri (Himalayas) | Yamuna = Yamunotri (Himalayas) | Brahmaputra = Tibet (Himalayas) | Godavari = Nashik (Peninsular India)",
        result: "Three Himalayan, one Peninsular",
        explanation:
          "Ganga, Yamuna, and Brahmaputra are glacier-fed Himalayan rivers. Godavari originates in Nashik, Maharashtra.",
      },
      {
        id: 2,
        operation: "Confirm distinguishing property",
        expression: "Himalayan = perennial (glacier-fed) | Peninsular = rain-fed",
        result: "Godavari has a different hydrological character",
        explanation:
          "Himalayan rivers flow year-round due to snowmelt. Godavari depends primarily on monsoon rainfall.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = Godavari (D)",
        result: "Godavari",
        explanation:
          "Godavari is the only Peninsular river; the others are Himalayan.",
      },
    ],
    answer: "(D) Godavari",
    difficulty: "hard",
  },
  {
    id: "class-p23",
    topic: "classification",
    title: "IBPS PO 2024: Perfect Cube vs Perfect Square",
    question:
      "Find the odd one out: (A) 8 (B) 64 (C) 125 (D) 343",
    steps: [
      {
        id: 1,
        operation: "Check perfect cube property",
        expression: "8 = 2^3 | 64 = 4^3 | 125 = 5^3 | 343 = 7^3",
        result: "All are perfect cubes",
        explanation:
          "All four numbers are perfect cubes. Need a finer distinction.",
      },
      {
        id: 2,
        operation: "Check perfect square property",
        expression: "8 = not square | 64 = 8^2 (also square) | 125 = not square | 343 = not square",
        result: "64 is both a perfect square and a perfect cube",
        explanation:
          "64 = 4^3 = 8^2. It is the only number that is both a perfect square and a perfect cube.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 64 (B)",
        result: "64",
        explanation:
          "64 is unique in being both a perfect square (8^2) and a perfect cube (4^3). The others are only cubes.",
      },
    ],
    answer: "(B) 64",
    difficulty: "hard",
  },
  {
    id: "class-p24",
    topic: "classification",
    title: "SSC CGL 2024: Composite among Primes",
    question:
      "Find the odd one out: (A) 211 (B) 287 (C) 283 (D) 277",
    steps: [
      {
        id: 1,
        operation: "Test primality",
        expression: "211: not div by 2,3,5,7,11,13 = prime | 287 = 7x41 | 283: not div by 2,3,5,7,11,13 = prime | 277: not div by 2,3,5,7,11,13 = prime",
        result: "287 is composite; others are prime",
        explanation:
          "211, 283, and 277 are all prime numbers. 287 = 7 x 41 is composite.",
      },
      {
        id: 2,
        operation: "Verify 287 is composite",
        expression: "287 / 7 = 41",
        result: "287 = 7 x 41",
        explanation:
          "287 is divisible by 7, confirming it is not prime.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 287 (B)",
        result: "287",
        explanation:
          "287 is the only composite number in the group.",
      },
    ],
    answer: "(B) 287",
    difficulty: "hard",
  },
  {
    id: "class-p25",
    topic: "classification",
    title: "UPSC CSAT 2023: Odd One Out (Country Borders)",
    question:
      "Find the odd one out (countries sharing a land border with India): (A) Nepal (B) Pakistan (C) China (D) Sri Lanka",
    steps: [
      {
        id: 1,
        operation: "Check land borders with India",
        expression: "Nepal = land border (north) | Pakistan = land border (west) | China = land border (northeast) | Sri Lanka = separated by Palk Strait",
        result: "Three share land borders; one does not",
        explanation:
          "Nepal, Pakistan, and China share land borders with India. Sri Lanka is an island nation separated by the Palk Strait.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 land-border neighbors vs 1 maritime neighbor",
        result: "Sri Lanka is the odd one out",
        explanation:
          "Sri Lanka does not share a land border with India.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = Sri Lanka (D)",
        result: "Sri Lanka",
        explanation:
          "Sri Lanka is the only country that does not share a land border with India.",
      },
    ],
    answer: "(D) Sri Lanka",
    difficulty: "hard",
  },
  {
    id: "class-p26",
    topic: "classification",
    title: "SBI PO 2024: Odd One Out (Capital vs Non-Capital Cities)",
    question:
      "Find the odd one out: (A) Rajkot (B) Bhubaneswar (C) Port Blair (D) Jaipur",
    steps: [
      {
        id: 1,
        operation: "Identify capital status",
        expression: "Rajkot = city in Gujarat (not capital) | Bhubaneswar = Odisha capital | Port Blair = A&N Islands capital | Jaipur = Rajasthan capital",
        result: "Three are capitals; one is not",
        explanation:
          "Bhubaneswar, Port Blair, and Jaipur are all capitals (state or UT). Rajkot is a major city in Gujarat but not its capital (Gandhinagar is).",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 capitals vs 1 non-capital",
        result: "Rajkot is the odd one out",
        explanation:
          "Rajkot is the only non-capital city in the group.",
      },
    ],
    answer: "(A) Rajkot",
    difficulty: "hard",
  },
  {
    id: "class-p27",
    topic: "classification",
    title: "IBPS PO 2023: Number with Different Digit Operation",
    question:
      "Find the odd one out: (A) 844 (B) 972 (C) 716 (D) 345",
    steps: [
      {
        id: 1,
        operation: "Check if difference of first two digits equals last digit",
        expression: "844: 8-4=4 (matches 3rd digit) | 972: 9-7=2 (matches) | 716: 7-1=6 (matches) | 345: 3-4=-1 (does not match 5)",
        result: "First three follow the pattern; 345 does not",
        explanation:
          "In 844, 972, and 716, the difference of the first two digits equals the third digit. 345 breaks this rule.",
      },
      {
        id: 2,
        operation: "Verify",
        expression: "8-4=4=last digit | 9-7=2=last digit | 7-1=6=last digit | 3-4=-1 != 5",
        result: "345 is the odd one out",
        explanation:
          "The pattern first_digit minus second_digit equals third_digit fails for 345.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 345 (D)",
        result: "345",
        explanation:
          "345 does not follow the digit-difference pattern that the other three share.",
      },
    ],
    answer: "(D) 345",
    difficulty: "hard",
  },
  {
    id: "class-p28",
    topic: "classification",
    title: "UPSC CSAT 2024: Odd Number (Binary Digit Count)",
    question:
      "Which is the odd one out? (A) 101101 (B) 001011 (C) 1101011 (D) 100101",
    steps: [
      {
        id: 1,
        operation: "Count digits in each number",
        expression: "101101 = 6 digits | 001011 = 6 digits | 1101011 = 7 digits | 100101 = 6 digits",
        result: "Three have 6 digits; one has 7 digits",
        explanation:
          "101101, 001011, and 100101 all have 6 digits. 1101011 has 7 digits.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 numbers with 6 digits vs 1 with 7 digits",
        result: "1101011 is the odd one out",
        explanation:
          "1101011 has an extra digit compared to the others.",
      },
    ],
    answer: "(C) 1101011",
    difficulty: "hard",
  },
  {
    id: "class-p29",
    topic: "classification",
    title: "SBI PO 2023: Odd Number (Middle Digit Pattern)",
    question:
      "Find the odd one out: (A) 836 (B) 645 (C) 749 (D) 849",
    steps: [
      {
        id: 1,
        operation: "Examine the middle digit of each number",
        expression: "836: middle digit = 3 | 645: middle digit = 4 | 749: middle digit = 4 | 849: middle digit = 4",
        result: "Three have middle digit 4; one has 3",
        explanation:
          "645, 749, and 849 all have 4 as their middle digit. 836 has 3.",
      },
      {
        id: 2,
        operation: "Confirm odd one out",
        expression: "3 numbers with middle digit 4 vs 1 with middle digit 3",
        result: "836 is the odd one out",
        explanation:
          "836 is the only number that does not have 4 as its middle digit.",
      },
    ],
    answer: "(A) 836",
    difficulty: "hard",
  },
  {
    id: "class-p30",
    topic: "classification",
    title: "IBPS PO 2024: Number Pattern (Product of First Two Digits)",
    question:
      "Find the odd one out: (A) 5210 (B) 8432 (C) 8648 (D) 7240",
    steps: [
      {
        id: 1,
        operation: "Check product of first two digits vs last two digits",
        expression: "5210: 5x2=10 (matches last two) | 8432: 8x4=32 (matches) | 8648: 8x6=48 (matches) | 7240: 7x2=14 != 40",
        result: "First three follow the pattern; 7240 does not",
        explanation:
          "In 5210, 8432, and 8648, the product of the first two digits equals the last two digits. 7240 breaks this (7x2=14, not 40).",
      },
      {
        id: 2,
        operation: "Verify pattern",
        expression: "52|10: 5x2=10 | 84|32: 8x4=32 | 86|48: 8x6=48 | 72|40: 7x2=14 != 40",
        result: "7240 is the odd one out",
        explanation:
          "7 x 2 = 14, not 40. The pattern fails for 7240.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Odd one out = 7240 (D)",
        result: "7240",
        explanation:
          "7240 does not satisfy the first-two-digits-product equals last-two-digits rule.",
      },
    ],
    answer: "(D) 7240",
    difficulty: "hard",
  },
]
