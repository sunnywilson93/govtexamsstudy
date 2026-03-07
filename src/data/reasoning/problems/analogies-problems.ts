import type { ReasoningProblem } from "@/types/reasoning"

export const analogiesProblems: ReasoningProblem[] = [
  // ── Easy (p1-p10): SSC CGL Tier 1 basic, RRB NTPC level ──────────
  {
    id: "anal-p1",
    topic: "analogies",
    title: "SSC CGL 2023: Workplace Analogy",
    question:
      "Select the option that is related to the third word in the same way as the second word is related to the first word. Doctor : Hospital :: Teacher : ? (A) School (B) Book (C) Student (D) Chalk",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Doctor -> Hospital",
        result: "Professional : Workplace",
        explanation:
          "A Doctor works in a Hospital. The analogy links a professional to their primary workplace.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Teacher -> ?",
        result: "School",
        explanation:
          "A Teacher works in a School, which is the direct workplace equivalent.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Book = tool | Student = recipient | Chalk = instrument",
        result: "None match the workplace pattern",
        explanation:
          "Book, Student, and Chalk relate to teaching tools or recipients, not the workplace.",
      },
    ],
    answer: "(A) School",
    difficulty: "easy",
  },
  {
    id: "anal-p2",
    topic: "analogies",
    title: "SSC CGL 2022: Degree/Intensity Analogy",
    question:
      "Warm : Hot :: Cool : ? (A) Cold (B) Ice (C) Freeze (D) Winter",
    steps: [
      {
        id: 1,
        operation: "Identify degree relationship",
        expression: "Warm -> Hot",
        result: "Mild to intense (same axis)",
        explanation:
          "Hot is the intense degree of Warm on the temperature axis.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Cool -> ?",
        result: "Cold",
        explanation:
          "Cold is the intense degree of Cool on the low-temperature axis.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Ice = state of matter | Freeze = action | Winter = season",
        result: "Not degree synonyms",
        explanation:
          "Ice, Freeze, and Winter shift to different categories. Only Cold is a temperature degree word.",
      },
    ],
    answer: "(A) Cold",
    difficulty: "easy",
  },
  {
    id: "anal-p3",
    topic: "analogies",
    title: "RRB NTPC 2022: Part-Whole Analogy",
    question:
      "Chapter : Book :: Act : ? (A) Stage (B) Drama (C) Scene (D) Script",
    steps: [
      {
        id: 1,
        operation: "Identify part-whole relationship",
        expression: "Chapter -> Book",
        result: "Chapter is a part of Book",
        explanation:
          "A Chapter is a structural division of a Book. The analogy maps part to whole.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Act -> ?",
        result: "Drama",
        explanation:
          "An Act is a major structural division of a Drama (play).",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Stage = location | Scene = sub-unit of Act | Script = written form",
        result: "None are the correct whole",
        explanation:
          "Scene is smaller than an Act (part of an Act). Stage and Script are different categories entirely.",
      },
    ],
    answer: "(B) Drama",
    difficulty: "easy",
  },
  {
    id: "anal-p4",
    topic: "analogies",
    title: "SSC CHSL 2023: Product-Source Analogy",
    question:
      "Milk : Cow :: Honey : ? (A) Flower (B) Sweet (C) Bee (D) Wax",
    steps: [
      {
        id: 1,
        operation: "Identify product-source relationship",
        expression: "Milk <- Cow",
        result: "Product : Producer",
        explanation:
          "Milk is produced by a Cow. The analogy maps a product to its source/producer.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Honey <- ?",
        result: "Bee",
        explanation:
          "Honey is produced by Bees. Bee is the direct producer.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Flower = raw material | Sweet = property | Wax = by-product",
        result: "None are the direct producer",
        explanation:
          "Flowers are inputs for bees, Sweet is a taste, Wax is another product. Only Bee produces honey.",
      },
    ],
    answer: "(C) Bee",
    difficulty: "easy",
  },
  {
    id: "anal-p5",
    topic: "analogies",
    title: "RRB NTPC 2021: Functional Analogy",
    question:
      "Pen : Write :: Knife : ? (A) Sharp (B) Metal (C) Cut (D) Kitchen",
    steps: [
      {
        id: 1,
        operation: "Identify functional relationship",
        expression: "Pen -> Write",
        result: "Tool : Primary function",
        explanation:
          "The primary function of a Pen is to Write. The analogy maps tool to function.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Knife -> ?",
        result: "Cut",
        explanation:
          "The primary function of a Knife is to Cut.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "Sharp = property | Metal = material | Kitchen = location",
        result: "None are primary functions",
        explanation:
          "Sharp describes a quality, Metal is the material, Kitchen is where it is used. Only Cut is the function.",
      },
    ],
    answer: "(C) Cut",
    difficulty: "easy",
  },
  {
    id: "anal-p6",
    topic: "analogies",
    title: "SSC CGL 2024: Unit-Quantity Analogy",
    question:
      "Kilogram : Weight :: Metre : ? (A) Length (B) Distance (C) Height (D) Speed",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Kilogram -> Weight",
        result: "SI Unit : Quantity measured",
        explanation:
          "Kilogram is the SI unit for measuring weight (mass).",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Metre -> ?",
        result: "Length",
        explanation:
          "Metre is the SI unit for measuring Length.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Distance = derived application | Height = specific dimension | Speed = length/time",
        result: "Length is the base quantity",
        explanation:
          "Distance and Height are applications of length. Speed involves time. Length is the fundamental quantity.",
      },
    ],
    answer: "(A) Length",
    difficulty: "easy",
  },
  {
    id: "anal-p7",
    topic: "analogies",
    title: "SSC CGL 2023: Young One Analogy",
    question:
      "Cow : Calf :: Horse : ? (A) Puppy (B) Foal (C) Kitten (D) Lamb",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Cow -> Calf",
        result: "Adult animal : Young one",
        explanation:
          "A Calf is the young one of a Cow.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Horse -> ?",
        result: "Foal",
        explanation:
          "A Foal is the young one of a Horse.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Puppy = dog | Kitten = cat | Lamb = sheep",
        result: "None match horse",
        explanation:
          "Puppy, Kitten, and Lamb are young ones of other animals.",
      },
    ],
    answer: "(B) Foal",
    difficulty: "easy",
  },
  {
    id: "anal-p8",
    topic: "analogies",
    title: "SSC CHSL 2022: Gender Pair Analogy",
    question:
      "Mare : Stallion :: Cow : ? (A) Herd (B) Milk (C) Calf (D) Bull",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Mare -> Stallion",
        result: "Female : Male (same species)",
        explanation:
          "Mare is the female horse, Stallion is the male horse. The analogy maps female to male of the same species.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Cow -> ?",
        result: "Bull",
        explanation:
          "Cow is the female cattle, Bull is the male cattle.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Herd = group | Milk = product | Calf = young one",
        result: "None are male counterparts",
        explanation:
          "Herd, Milk, and Calf relate to cattle but are not the male counterpart.",
      },
    ],
    answer: "(D) Bull",
    difficulty: "easy",
  },
  {
    id: "anal-p9",
    topic: "analogies",
    title: "RRB NTPC 2023: Number Analogy (Square Pattern)",
    question:
      "4 : 16 :: 7 : ? (A) 14 (B) 21 (C) 49 (D) 28",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "4 -> 16",
        result: "4^2 = 16",
        explanation:
          "16 is the square of 4. The pattern is n : n^2.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "7 -> 7^2 = 49",
        result: "49",
        explanation:
          "Following the n^2 pattern: 7^2 = 49.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "14 = 7x2 | 21 = 7x3 | 28 = 7x4",
        result: "These are multiplication patterns, not squaring",
        explanation:
          "14, 21, and 28 are simple multiples of 7. Only 49 matches n^2.",
      },
    ],
    answer: "(C) 49",
    difficulty: "easy",
  },
  {
    id: "anal-p10",
    topic: "analogies",
    title: "SSC CGL 2022: Cause-Effect Analogy",
    question:
      "Fire : Burn :: Flood : ? (A) Rain (B) Drown (C) River (D) Dam",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Fire -> Burn",
        result: "Destructive event : Direct harmful effect",
        explanation:
          "Fire causes Burns. The analogy maps a destructive event to its harmful effect.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Flood -> ?",
        result: "Drown",
        explanation:
          "A Flood can cause Drowning, which is the direct harmful effect.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Rain = cause of flood | River = source | Dam = prevention",
        result: "None are direct harmful effects",
        explanation:
          "Rain causes floods, River is a source, Dam prevents floods. Only Drown is a harmful result.",
      },
    ],
    answer: "(B) Drown",
    difficulty: "easy",
  },

  // ── Medium (p11-p20): SSC CGL Tier 1 advanced, IBPS Clerk level ──
  {
    id: "anal-p11",
    topic: "analogies",
    title: "SSC CGL 2023: Instrument-Measurement Analogy",
    question:
      "Thermometer : Temperature :: Barometer : ? (A) Rain (B) Wind (C) Humidity (D) Pressure",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Thermometer -> Temperature",
        result: "Instrument : Quantity it measures",
        explanation:
          "A Thermometer measures Temperature.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Barometer -> ?",
        result: "Pressure",
        explanation:
          "A Barometer measures atmospheric Pressure.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Rain = rain gauge | Wind = anemometer | Humidity = hygrometer",
        result: "Each has its own dedicated instrument",
        explanation:
          "Rain, Wind, and Humidity are measured by different instruments. Only Pressure is measured by a barometer.",
      },
    ],
    answer: "(D) Pressure",
    difficulty: "medium",
  },
  {
    id: "anal-p12",
    topic: "analogies",
    title: "SSC CGL 2024: Musical Instrument Family",
    question:
      "Drum : Percussion :: Guitar : ? (A) Wind (B) String (C) Sitar (D) Flute",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Drum -> Percussion",
        result: "Instrument : Family/Category",
        explanation:
          "A Drum belongs to the Percussion family. The analogy maps an instrument to its musical family.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Guitar -> ?",
        result: "String",
        explanation:
          "A Guitar belongs to the String family of instruments.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Wind = different family | Sitar = another string instrument | Flute = wind instrument",
        result: "String is the category, not another instrument",
        explanation:
          "Wind and Flute belong to a different family. Sitar is another instrument, not a family name.",
      },
    ],
    answer: "(B) String",
    difficulty: "medium",
  },
  {
    id: "anal-p13",
    topic: "analogies",
    title: "SSC CGL 2023: Craftsperson-Material Analogy",
    question:
      "Carpenter : Wood :: Mason : ? (A) House (B) Brick (C) Cement (D) Building",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Carpenter -> Wood",
        result: "Craftsperson : Primary material",
        explanation:
          "A Carpenter works primarily with Wood.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Mason -> ?",
        result: "Brick",
        explanation:
          "A Mason works primarily with Bricks.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "House = end product | Cement = auxiliary material | Building = end product",
        result: "Brick is the primary raw material",
        explanation:
          "House and Building are finished products. Cement is secondary. Brick is the primary material a mason works with.",
      },
    ],
    answer: "(B) Brick",
    difficulty: "medium",
  },
  {
    id: "anal-p14",
    topic: "analogies",
    title: "IBPS Clerk 2023: Collective Noun Analogy",
    question:
      "Sheep : Flock :: Fish : ? (A) Swarm (B) Shoal (C) Pack (D) Herd",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Sheep -> Flock",
        result: "Animal : Collective noun",
        explanation:
          "A group of Sheep is called a Flock.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Fish -> ?",
        result: "Shoal",
        explanation:
          "A group of Fish is called a Shoal (or School).",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Swarm = bees/insects | Pack = wolves | Herd = cattle",
        result: "None apply to fish",
        explanation:
          "Swarm, Pack, and Herd are collective nouns for other animal groups.",
      },
    ],
    answer: "(B) Shoal",
    difficulty: "medium",
  },
  {
    id: "anal-p15",
    topic: "analogies",
    title: "SSC CGL 2024: Country-Currency Analogy",
    question:
      "Japan : Yen :: Thailand : ? (A) Baht (B) Rupee (C) Ringgit (D) Won",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Japan -> Yen",
        result: "Country : Currency",
        explanation:
          "The Yen is the official currency of Japan.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Thailand -> ?",
        result: "Baht",
        explanation:
          "The Baht is the official currency of Thailand.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Rupee = India | Ringgit = Malaysia | Won = South Korea",
        result: "None are Thailand's currency",
        explanation:
          "Each distractor is the currency of a different Asian country.",
      },
    ],
    answer: "(A) Baht",
    difficulty: "medium",
  },
  {
    id: "anal-p16",
    topic: "analogies",
    title: "SSC CGL 2023: Antonym Pair Analogy",
    question:
      "Increase : Decrease :: Expand : ? (A) Extend (B) Contract (C) Enlarge (D) Inflate",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Increase -> Decrease",
        result: "Word : Antonym",
        explanation:
          "Increase and Decrease are exact opposites.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Expand -> ?",
        result: "Contract",
        explanation:
          "Contract means to become smaller, the exact opposite of Expand.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Extend = synonym | Enlarge = synonym | Inflate = synonym",
        result: "All three are synonyms of Expand",
        explanation:
          "Extend, Enlarge, and Inflate all mean to make bigger. Only Contract is the antonym.",
      },
    ],
    answer: "(B) Contract",
    difficulty: "medium",
  },
  {
    id: "anal-p17",
    topic: "analogies",
    title: "SSC CGL 2024: Synonym Pair Analogy",
    question:
      "Happy : Cheerful :: Danger : ? (A) Security (B) Hurt (C) Hazard (D) Safe",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Happy -> Cheerful",
        result: "Word : Synonym",
        explanation:
          "Happy and Cheerful are synonyms (both mean feeling joy).",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Danger -> ?",
        result: "Hazard",
        explanation:
          "Hazard is a synonym of Danger (both mean a source of risk or peril).",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Security = antonym | Hurt = effect | Safe = antonym",
        result: "None are synonyms of Danger",
        explanation:
          "Security and Safe are opposites of Danger. Hurt is a consequence, not a synonym.",
      },
    ],
    answer: "(C) Hazard",
    difficulty: "medium",
  },
  {
    id: "anal-p18",
    topic: "analogies",
    title: "IBPS Clerk 2022: Disease-Organ Analogy",
    question:
      "Osteoporosis : Bones :: Vitiligo : ? (A) Kidney (B) Heart (C) Brain (D) Skin",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Osteoporosis -> Bones",
        result: "Disease : Body part affected",
        explanation:
          "Osteoporosis is a disease that weakens Bones.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Vitiligo -> ?",
        result: "Skin",
        explanation:
          "Vitiligo is a disease that causes loss of pigmentation in the Skin.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "Kidney = nephritis | Heart = cardiomyopathy | Brain = encephalitis",
        result: "None are affected by vitiligo",
        explanation:
          "Vitiligo specifically affects the skin, not internal organs.",
      },
    ],
    answer: "(D) Skin",
    difficulty: "medium",
  },
  {
    id: "anal-p19",
    topic: "analogies",
    title: "SSC CGL 2023: Number Analogy (Cube + 1 Pattern)",
    question:
      "2 : 9 :: 4 : ? (A) 17 (B) 63 (C) 65 (D) 81",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "2 -> 9",
        result: "2^3 + 1 = 8 + 1 = 9",
        explanation:
          "9 equals 2 cubed plus 1. The pattern is n : n^3 + 1.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "4 -> 4^3 + 1 = 64 + 1 = 65",
        result: "65",
        explanation:
          "Following the n^3 + 1 pattern: 4^3 = 64, then 64 + 1 = 65.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "17 = 4^2 + 1 | 63 = 4^3 - 1 | 81 = 3^4",
        result: "None match n^3 + 1",
        explanation:
          "17 uses squaring; 63 subtracts instead of adding; 81 is a different power. Only 65 fits.",
      },
      {
        id: 4,
        operation: "Cross-verify",
        expression: "2 : 2^3+1=9 | 4 : 4^3+1=65",
        result: "Pattern holds consistently",
        explanation:
          "Both pairs follow n : n^3+1.",
      },
    ],
    answer: "(C) 65",
    difficulty: "medium",
  },
  {
    id: "anal-p20",
    topic: "analogies",
    title: "SSC CGL 2024: Number Analogy (Multiply Digits and Add)",
    question:
      "672 : 44 :: 437 : ? (A) 22 (B) 19 (C) 34 (D) 18",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "672 -> 44",
        result: "6 x 7 + 2 = 42 + 2 = 44",
        explanation:
          "Multiply the first two digits, then add the third digit: 6 x 7 + 2 = 44.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "437 -> 4 x 3 + 7 = 12 + 7 = 19",
        result: "19",
        explanation:
          "Following the same pattern: 4 x 3 + 7 = 19.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "22 = 4+3+7=14 (no) | 34 = ? | 18 = ?",
        result: "Only 19 matches the pattern",
        explanation:
          "No other option results from consistent application of the first-two-digits-product-plus-third pattern.",
      },
    ],
    answer: "(B) 19",
    difficulty: "medium",
  },

  // ── Hard (p21-p30): IBPS PO, SBI PO, UPSC CSAT level ────────────
  {
    id: "anal-p21",
    topic: "analogies",
    title: "IBPS PO 2023: Cricketer-Country Analogy",
    question:
      "Sir Don Bradman : Australia :: Sikandar Raza : ? (A) Zimbabwe (B) New Zealand (C) Ireland (D) Australia",
    steps: [
      {
        id: 1,
        operation: "Identify the relationship",
        expression: "Sir Don Bradman -> Australia",
        result: "Cricketer : Country they represent",
        explanation:
          "Sir Don Bradman is the legendary Australian cricketer.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "Sikandar Raza -> ?",
        result: "Zimbabwe",
        explanation:
          "Sikandar Raza is a well-known international cricketer who represents Zimbabwe.",
      },
      {
        id: 3,
        operation: "Eliminate distractors",
        expression: "New Zealand, Ireland, Australia are other cricket nations",
        result: "Raza does not play for any of these",
        explanation:
          "Sikandar Raza was born in Pakistan but represents Zimbabwe in international cricket.",
      },
    ],
    answer: "(A) Zimbabwe",
    difficulty: "hard",
  },
  {
    id: "anal-p22",
    topic: "analogies",
    title: "SBI PO 2023: Number Analogy (n^2 to n^3)",
    question:
      "676 : 17576 :: 784 : ? (A) 19600 (B) 20384 (C) 21952 (D) 17248",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "676 -> 17576",
        result: "676 = 26^2 and 17576 = 26^3",
        explanation:
          "676 is 26 squared and 17576 is 26 cubed. The pattern is n^2 : n^3.",
      },
      {
        id: 2,
        operation: "Find the base for 784",
        expression: "784 = 28^2",
        result: "Base = 28",
        explanation:
          "784 = 28 x 28 = 28^2.",
      },
      {
        id: 3,
        operation: "Calculate the cube",
        expression: "28^3 = 28 x 28 x 28 = 784 x 28 = 21952",
        result: "21952",
        explanation:
          "28^3 = 21952. Following the n^2 : n^3 pattern.",
      },
      {
        id: 4,
        operation: "Cross-verify",
        expression: "26^2:26^3 = 676:17576 | 28^2:28^3 = 784:21952",
        result: "Pattern holds",
        explanation:
          "Both pairs follow the perfect-square to perfect-cube pattern.",
      },
    ],
    answer: "(C) 21952",
    difficulty: "hard",
  },
  {
    id: "anal-p23",
    topic: "analogies",
    title: "SSC CGL 2024: Number Analogy ((n-1)^2 Pattern)",
    question:
      "50 : 2401 :: 60 : ? (A) 3481 (B) 3600 (C) 3721 (D) 3364",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "50 -> 2401",
        result: "(50 - 1)^2 = 49^2 = 2401",
        explanation:
          "Subtract 1 from the number, then square the result: (50-1)^2 = 49^2 = 2401.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "60 -> (60 - 1)^2 = 59^2",
        result: "59^2 = 3481",
        explanation:
          "Following the (n-1)^2 pattern: 59^2 = 3481.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "3600 = 60^2 | 3721 = 61^2 | 3364 = 58^2",
        result: "Only 3481 = 59^2 matches the (n-1)^2 pattern",
        explanation:
          "3600 is 60^2 (no subtraction). 3721 is (60+1)^2 (addition). 3364 is (60-2)^2 (too much subtraction).",
      },
    ],
    answer: "(A) 3481",
    difficulty: "hard",
  },
  {
    id: "anal-p24",
    topic: "analogies",
    title: "IBPS PO 2024: Number Analogy (Sum Equals Perfect Cube)",
    question:
      "7 : 20 :: 4 : ? (A) 45 (B) 60 (C) 70 (D) 81",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "7 + 20 = 27",
        result: "27 = 3^3",
        explanation:
          "The sum of the pair equals a perfect cube: 7 + 20 = 27 = 3^3.",
      },
      {
        id: 2,
        operation: "Find the next cube to target",
        expression: "Next cube: 4^3 = 64",
        result: "The pair should sum to 64",
        explanation:
          "The base increases: 3^3 = 27 for the first pair, so 4^3 = 64 for the second.",
      },
      {
        id: 3,
        operation: "Calculate the answer",
        expression: "4 + ? = 64",
        result: "? = 60",
        explanation:
          "64 - 4 = 60. The answer is 60.",
      },
      {
        id: 4,
        operation: "Verify",
        expression: "7+20=27=3^3 | 4+60=64=4^3",
        result: "Pattern holds",
        explanation:
          "Both pairs sum to consecutive perfect cubes.",
      },
    ],
    answer: "(B) 60",
    difficulty: "hard",
  },
  {
    id: "anal-p25",
    topic: "analogies",
    title: "SBI PO 2022: Number Analogy (Digit Sum x 3)",
    question:
      "76 : 39 :: 28 : ? (A) 30 (B) 18 (C) 20 (D) 12",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "76 -> 39",
        result: "(7 + 6) x 3 = 13 x 3 = 39",
        explanation:
          "Sum the digits of the first number, then multiply by 3: (7+6) x 3 = 39.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "28 -> (2 + 8) x 3 = 10 x 3 = 30",
        result: "30",
        explanation:
          "Sum the digits: 2+8 = 10. Multiply by 3: 10 x 3 = 30.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "18 = 10x1.8 | 20 = 10x2 | 12 = 10x1.2",
        result: "Only 30 matches the digit-sum-times-3 pattern",
        explanation:
          "None of the other options result from multiplying the digit sum by 3.",
      },
    ],
    answer: "(A) 30",
    difficulty: "hard",
  },
  {
    id: "anal-p26",
    topic: "analogies",
    title: "SSC CGL 2024: Number Analogy (Add 2, Then Square)",
    question:
      "18 : 400 :: 31 : ? (A) 1089 (B) 900 (C) 841 (D) 1156",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "18 -> 400",
        result: "(18 + 2)^2 = 20^2 = 400",
        explanation:
          "Add 2 to the first number, then square: (18+2)^2 = 400.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "31 -> (31 + 2)^2 = 33^2 = 1089",
        result: "1089",
        explanation:
          "Following the pattern: (31+2)^2 = 33^2 = 1089.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "900 = 30^2 | 841 = 29^2 | 1156 = 34^2",
        result: "Only 1089 = 33^2 = (31+2)^2",
        explanation:
          "900 would need base 30, 841 base 29, 1156 base 34. Only 33^2 = 1089 fits the +2-then-square pattern.",
      },
    ],
    answer: "(A) 1089",
    difficulty: "hard",
  },
  {
    id: "anal-p27",
    topic: "analogies",
    title: "UPSC CSAT 2023: Number Analogy (Multiply by 9)",
    question:
      "121 : 1089 :: 147 : ? (A) 1176 (B) 1323 (C) 1470 (D) 1029",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "121 -> 1089",
        result: "121 x 9 = 1089",
        explanation:
          "The second number is the first number multiplied by 9.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "147 x 9 = 1323",
        result: "1323",
        explanation:
          "147 x 9 = 1323.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "1176 = 147x8 | 1470 = 147x10 | 1029 = 147x7",
        result: "Only 1323 = 147x9",
        explanation:
          "The other options use different multipliers. Only 1323 uses the x9 pattern.",
      },
    ],
    answer: "(B) 1323",
    difficulty: "hard",
  },
  {
    id: "anal-p28",
    topic: "analogies",
    title: "SSC CGL 2024: Number Triplet Analogy",
    question:
      "Select the option where numbers relate the same way as (7, 1, 3) and (12, 2, 5). (A) (30, 8, 11) (B) (26, 4, 20) (C) (32, 6, 18) (D) (40, 10, 30)",
    steps: [
      {
        id: 1,
        operation: "Find the relationship in (7, 1, 3)",
        expression: "(7 - 1) / 2 = 6 / 2 = 3",
        result: "Third = (First - Second) / 2",
        explanation:
          "Subtract the second from the first, then divide by 2 to get the third.",
      },
      {
        id: 2,
        operation: "Verify with (12, 2, 5)",
        expression: "(12 - 2) / 2 = 10 / 2 = 5",
        result: "Pattern confirmed",
        explanation:
          "The same formula gives 5, matching the given triplet.",
      },
      {
        id: 3,
        operation: "Test each option",
        expression: "(A) (30-8)/2=11 | (B) (26-4)/2=11 != 20 | (C) (32-6)/2=13 != 18 | (D) (40-10)/2=15 != 30",
        result: "Only (A) satisfies the pattern",
        explanation:
          "Only (30, 8, 11) gives (30-8)/2 = 11, matching the third element.",
      },
    ],
    answer: "(A) (30, 8, 11)",
    difficulty: "hard",
  },
  {
    id: "anal-p29",
    topic: "analogies",
    title: "IBPS PO 2023: Number Analogy (Digit Difference Squared)",
    question:
      "91 : 64 :: 73 : ? (A) 9 (B) 16 (C) 25 (D) 36",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "91 -> 64",
        result: "(9 - 1)^2 = 8^2 = 64",
        explanation:
          "Take the difference of the two digits, then square it: (9-1)^2 = 64.",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "73 -> (7 - 3)^2 = 4^2 = 16",
        result: "16",
        explanation:
          "Difference of digits: 7-3 = 4. Square: 4^2 = 16.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "9 = 3^2 | 25 = 5^2 | 36 = 6^2",
        result: "Only 16 = 4^2 matches the digit-difference-squared pattern",
        explanation:
          "The digit difference is 4, and 4^2 = 16. The other squares correspond to different differences.",
      },
    ],
    answer: "(B) 16",
    difficulty: "hard",
  },
  {
    id: "anal-p30",
    topic: "analogies",
    title: "UPSC CSAT 2024: Number Analogy (n x (n+2))",
    question:
      "17 : 323 :: 13 : ? (A) 169 (B) 195 (C) 221 (D) 156",
    steps: [
      {
        id: 1,
        operation: "Identify the numerical relationship",
        expression: "17 -> 323",
        result: "17 x 19 = 323 (where 19 = 17 + 2)",
        explanation:
          "323 = 17 x 19. Notice 19 = 17 + 2. The pattern is n x (n + 2).",
      },
      {
        id: 2,
        operation: "Apply to second pair",
        expression: "13 -> 13 x (13 + 2) = 13 x 15 = 195",
        result: "195",
        explanation:
          "Following the n x (n+2) pattern: 13 x 15 = 195.",
      },
      {
        id: 3,
        operation: "Verify distractors",
        expression: "169 = 13^2 | 221 = 13 x 17 | 156 = 13 x 12",
        result: "Only 195 = 13 x 15 = 13 x (13+2)",
        explanation:
          "169 is just the square. 221 uses 17 as multiplier. 156 uses 12. Only 195 uses (13+2)=15.",
      },
      {
        id: 4,
        operation: "Cross-verify",
        expression: "17 x 19 = 323 | 13 x 15 = 195",
        result: "Pattern holds consistently",
        explanation:
          "Both pairs follow n x (n+2).",
      },
    ],
    answer: "(B) 195",
    difficulty: "hard",
  },
]
