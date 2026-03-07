import type { ReasoningProblem } from "@/types/reasoning"

export const logicalVennDiagramsProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ──────────────────────────────────────────────
  {
    id: "lvd-p1",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Chain Subset",
    question:
      "Which Venn diagram best represents the relationship among: Dog, Animal, Labrador?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Dog and Animal",
        expression: "All dogs are animals",
        result: "Dog is a subset of Animal",
        explanation:
          "Every dog belongs to the animal kingdom, so Dog circle goes inside Animal circle.",
      },
      {
        id: 2,
        operation: "Analyze pair: Labrador and Dog",
        expression: "All Labradors are dogs",
        result: "Labrador is a subset of Dog",
        explanation: "Labrador is a breed of dog, so it is fully contained within Dog.",
      },
      {
        id: 3,
        operation: "Combine all three",
        expression: "Labrador ⊂ Dog ⊂ Animal",
        result: "Three concentric circles",
        explanation:
          "A chain subset relationship gives three concentric (nested) circles: Labrador innermost, then Dog, then Animal outermost.",
      },
    ],
    answer:
      "Three concentric circles: Labrador (innermost) inside Dog inside Animal (outermost).",
    difficulty: "easy",
  },
  {
    id: "lvd-p2",
    topic: "logical-venn-diagrams",
    title: "SSC CHSL 2022: Completely Disjoint",
    question:
      "Which Venn diagram best represents the relationship among: Pen, Eraser, Sharpener?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Pen and Eraser",
        expression: "A pen is not an eraser",
        result: "Disjoint",
        explanation:
          "No pen is an eraser. These are completely distinct stationery items.",
      },
      {
        id: 2,
        operation: "Analyze pair: Eraser and Sharpener",
        expression: "An eraser is not a sharpener",
        result: "Disjoint",
        explanation: "No overlap between erasers and sharpeners.",
      },
      {
        id: 3,
        operation: "Combine",
        expression: "All three are mutually exclusive",
        result: "Three separate non-touching circles",
        explanation:
          "No member of any group belongs to another group. Three separate circles with no overlap.",
      },
    ],
    answer: "Three separate non-overlapping circles.",
    difficulty: "easy",
  },
  {
    id: "lvd-p3",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2021: Two Subsets of One",
    question:
      "Which Venn diagram best represents the relationship among: Parrot, Crow, Bird?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Parrot and Bird",
        expression: "All parrots are birds",
        result: "Parrot ⊂ Bird",
        explanation: "Parrot is a subset of Bird.",
      },
      {
        id: 2,
        operation: "Analyze pair: Crow and Bird",
        expression: "All crows are birds",
        result: "Crow ⊂ Bird",
        explanation: "Crow is a subset of Bird.",
      },
      {
        id: 3,
        operation: "Analyze pair: Parrot and Crow",
        expression: "No parrot is a crow",
        result: "Parrot and Crow are disjoint",
        explanation: "These are different species with no overlap.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Two separate circles (Parrot, Crow) inside one large circle (Bird)",
        result: "Two non-overlapping circles within a larger circle",
        explanation:
          "Both are subsets of Bird but do not overlap with each other.",
      },
    ],
    answer:
      "Two separate circles (Parrot and Crow) inside a larger Bird circle.",
    difficulty: "easy",
  },
  {
    id: "lvd-p4",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Vehicle Subset Pattern",
    question:
      "Which Venn diagram best represents the relationship among: Vehicle, Car, Bus?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Car and Vehicle",
        expression: "All cars are vehicles",
        result: "Car ⊂ Vehicle",
        explanation: "Car is a type of vehicle.",
      },
      {
        id: 2,
        operation: "Analyze pair: Bus and Vehicle",
        expression: "All buses are vehicles",
        result: "Bus ⊂ Vehicle",
        explanation: "Bus is a type of vehicle.",
      },
      {
        id: 3,
        operation: "Analyze pair: Car and Bus",
        expression: "No car is a bus",
        result: "Disjoint",
        explanation:
          "Cars and buses are entirely different types of vehicles.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Two separate circles (Car, Bus) inside Vehicle",
        result: "Two non-overlapping circles within a larger circle",
        explanation:
          "Same pattern as Parrot-Crow-Bird. Both are subsets of Vehicle but mutually exclusive.",
      },
    ],
    answer:
      "Car and Bus as separate circles inside the Vehicle circle.",
    difficulty: "easy",
  },
  {
    id: "lvd-p5",
    topic: "logical-venn-diagrams",
    title: "SSC CHSL 2021: Profession Disjoint",
    question:
      "Which Venn diagram best represents the relationship among: Doctors, Lawyers, Engineers?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Doctors and Lawyers",
        expression:
          "A person cannot simultaneously hold both professional titles in the traditional exam context",
        result: "Disjoint",
        explanation:
          "In SSC exam convention, these three professions are treated as mutually exclusive categories.",
      },
      {
        id: 2,
        operation: "Analyze pair: Lawyers and Engineers",
        expression: "A lawyer is not an engineer",
        result: "Disjoint",
        explanation: "Different professions with no overlap.",
      },
      {
        id: 3,
        operation: "Combine",
        expression: "All three are completely independent professions",
        result: "Three separate non-overlapping circles",
        explanation:
          "Three distinct professions represented by three disjoint circles.",
      },
    ],
    answer: "Three separate non-overlapping circles.",
    difficulty: "easy",
  },
  {
    id: "lvd-p6",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Concentric Time Units",
    question:
      "Which Venn diagram best represents the relationship among: Seconds, Minutes, Hours?",
    steps: [
      {
        id: 1,
        operation: "Analyze relationship: Seconds and Minutes",
        expression: "Seconds are contained within minutes (60 seconds = 1 minute)",
        result: "Seconds ⊂ Minutes",
        explanation: "A minute is made up of seconds.",
      },
      {
        id: 2,
        operation: "Analyze relationship: Minutes and Hours",
        expression: "Minutes are contained within hours (60 minutes = 1 hour)",
        result: "Minutes ⊂ Hours",
        explanation: "An hour is made up of minutes.",
      },
      {
        id: 3,
        operation: "Combine",
        expression: "Seconds ⊂ Minutes ⊂ Hours",
        result: "Three concentric circles",
        explanation:
          "Seconds inside Minutes inside Hours. Each larger unit contains the smaller ones.",
      },
    ],
    answer:
      "Three concentric circles: Seconds (innermost) inside Minutes inside Hours (outermost).",
    difficulty: "easy",
  },
  {
    id: "lvd-p7",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2021: Subset with Separate",
    question:
      "Which Venn diagram best represents the relationship among: Engineers, Human Beings, Rats?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Engineers and Human Beings",
        expression: "All engineers are human beings",
        result: "Engineers ⊂ Human Beings",
        explanation: "Every engineer is a human being.",
      },
      {
        id: 2,
        operation: "Analyze pair: Rats and Human Beings",
        expression: "No rat is a human being",
        result: "Disjoint",
        explanation: "Rats and humans are entirely different species.",
      },
      {
        id: 3,
        operation: "Combine",
        expression:
          "Engineers inside Human Beings. Rats completely separate.",
        result: "Two nested circles (Engineers in Human Beings) with Rats separate",
        explanation:
          "Engineers is inside Human Beings; Rats has no relationship with either.",
      },
    ],
    answer:
      "Engineers inside Human Beings; Rats as a separate circle.",
    difficulty: "easy",
  },
  {
    id: "lvd-p8",
    topic: "logical-venn-diagrams",
    title: "SSC CHSL 2022: Atmosphere Components",
    question:
      "Which Venn diagram best represents the relationship among: Atmosphere, Hydrogen, Oxygen?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Hydrogen and Atmosphere",
        expression: "Hydrogen is a component of the atmosphere",
        result: "Hydrogen ⊂ Atmosphere",
        explanation: "Hydrogen gas is found in the atmosphere.",
      },
      {
        id: 2,
        operation: "Analyze pair: Oxygen and Atmosphere",
        expression: "Oxygen is a component of the atmosphere",
        result: "Oxygen ⊂ Atmosphere",
        explanation: "Oxygen gas is found in the atmosphere.",
      },
      {
        id: 3,
        operation: "Analyze pair: Hydrogen and Oxygen",
        expression: "Hydrogen and oxygen are different elements",
        result: "Disjoint",
        explanation:
          "They are entirely different chemical elements.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Two separate circles (H, O) inside Atmosphere",
        result: "Two non-overlapping circles within a larger circle",
        explanation:
          "Both are parts of the atmosphere but are distinct from each other.",
      },
    ],
    answer:
      "Hydrogen and Oxygen as separate circles inside the Atmosphere circle.",
    difficulty: "easy",
  },
  {
    id: "lvd-p9",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2020: Geography Nesting",
    question:
      "Which Venn diagram best represents the relationship among: State, Country, City?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: City and State",
        expression: "A city lies within a state",
        result: "City ⊂ State",
        explanation: "Every city is part of some state.",
      },
      {
        id: 2,
        operation: "Analyze pair: State and Country",
        expression: "A state lies within a country",
        result: "State ⊂ Country",
        explanation: "Every state is part of some country.",
      },
      {
        id: 3,
        operation: "Combine",
        expression: "City ⊂ State ⊂ Country",
        result: "Three concentric circles",
        explanation:
          "City innermost, then State, then Country outermost.",
      },
    ],
    answer:
      "Three concentric circles: City (innermost) inside State inside Country (outermost).",
    difficulty: "easy",
  },
  {
    id: "lvd-p10",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Planet Classification",
    question:
      "Which Venn diagram best represents the relationship among: Planets, Mars, Venus?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Mars and Planets",
        expression: "Mars is a planet",
        result: "Mars ⊂ Planets",
        explanation: "Mars is a subset of Planets.",
      },
      {
        id: 2,
        operation: "Analyze pair: Venus and Planets",
        expression: "Venus is a planet",
        result: "Venus ⊂ Planets",
        explanation: "Venus is a subset of Planets.",
      },
      {
        id: 3,
        operation: "Analyze pair: Mars and Venus",
        expression: "Mars and Venus are different planets",
        result: "Disjoint",
        explanation: "They are distinct celestial bodies.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Two separate circles (Mars, Venus) inside Planets",
        result: "Two non-overlapping circles within a larger circle",
        explanation:
          "Same pattern as Parrot-Crow-Bird or Car-Bus-Vehicle.",
      },
    ],
    answer:
      "Mars and Venus as separate circles inside the Planets circle.",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ───────────────────────────────────────────
  {
    id: "lvd-p11",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Subset with Overlap",
    question:
      "Which Venn diagram best represents the relationship among: Teachers, Women, Mothers?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Teachers and Women",
        expression: "Some teachers are women, some are not",
        result: "Overlapping",
        explanation: "Partial overlap between teachers and women.",
      },
      {
        id: 2,
        operation: "Analyze pair: Women and Mothers",
        expression: "All mothers are women, but not all women are mothers",
        result: "Mothers ⊂ Women",
        explanation: "Mothers is a subset of Women.",
      },
      {
        id: 3,
        operation: "Analyze pair: Teachers and Mothers",
        expression: "Some teachers are mothers, some are not",
        result: "Overlapping",
        explanation: "Partial overlap.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Mothers inside Women. Teachers overlaps with Women (and thus partially with Mothers).",
        result:
          "Mothers inside Women; Teachers overlaps with Women",
        explanation:
          "The Teachers circle partially intersects the Women circle. Since Mothers is inside Women, some teachers who are women may also be mothers.",
      },
    ],
    answer:
      "Mothers circle inside Women circle; Teachers circle overlapping with Women circle.",
    difficulty: "medium",
  },
  {
    id: "lvd-p12",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2021: Intersection in Overlap",
    question:
      "Which Venn diagram best represents the relationship among: Husband, Male, Married?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Husband and Male",
        expression: "All husbands are male, but not all males are husbands",
        result: "Husband ⊂ Male",
        explanation: "Husband is a subset of Male.",
      },
      {
        id: 2,
        operation: "Analyze pair: Husband and Married",
        expression:
          "All husbands are married, but not all married people are husbands",
        result: "Husband ⊂ Married",
        explanation:
          "Husband is a subset of Married (married women are not husbands).",
      },
      {
        id: 3,
        operation: "Analyze pair: Male and Married",
        expression:
          "Some males are married, some are not. Some married people are female.",
        result: "Overlapping",
        explanation: "Partial overlap between Male and Married.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Husband sits in the intersection of Male and Married",
        result:
          "Two overlapping circles (Male, Married) with Husband in their intersection",
        explanation:
          "Husband = Male AND Married. The Husband circle is entirely within the overlapping region of Male and Married.",
      },
    ],
    answer:
      "Male and Married overlap; Husband circle is within their intersection.",
    difficulty: "medium",
  },
  {
    id: "lvd-p13",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Three-Way Overlap",
    question:
      "Which Venn diagram best represents the relationship among: Indians, Engineers, Doctors?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Indians and Engineers",
        expression:
          "Some Indians are engineers; some engineers are not Indian",
        result: "Overlapping",
        explanation:
          "Nationality and profession are independent. Partial overlap.",
      },
      {
        id: 2,
        operation: "Analyze pair: Indians and Doctors",
        expression:
          "Some Indians are doctors; some doctors are not Indian",
        result: "Overlapping",
        explanation: "Same logic as above.",
      },
      {
        id: 3,
        operation: "Analyze pair: Engineers and Doctors",
        expression:
          "In the real world, a person can hold qualifications in both fields",
        result: "Overlapping",
        explanation: "Some people can be both engineers and doctors.",
      },
      {
        id: 4,
        operation: "Combine",
        expression: "All three pairs overlap",
        result: "Three mutually overlapping circles",
        explanation:
          "Each pair has partial overlap, creating the classic 7-region Venn diagram.",
      },
    ],
    answer: "Three mutually overlapping circles.",
    difficulty: "medium",
  },
  {
    id: "lvd-p14",
    topic: "logical-venn-diagrams",
    title: "SSC CHSL 2022: Furniture Pattern",
    question:
      "Which Venn diagram best represents the relationship among: Chair, Furniture, Table?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Chair and Furniture",
        expression: "All chairs are furniture",
        result: "Chair ⊂ Furniture",
        explanation: "Chair is a type of furniture.",
      },
      {
        id: 2,
        operation: "Analyze pair: Table and Furniture",
        expression: "All tables are furniture",
        result: "Table ⊂ Furniture",
        explanation: "Table is a type of furniture.",
      },
      {
        id: 3,
        operation: "Analyze pair: Chair and Table",
        expression: "No chair is a table",
        result: "Disjoint",
        explanation: "These are distinct types of furniture.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Two non-overlapping circles (Chair, Table) inside Furniture",
        result: "Two separate circles inside a larger circle",
        explanation:
          "Both are subsets of Furniture but do not overlap with each other.",
      },
    ],
    answer:
      "Chair and Table as separate circles inside the Furniture circle.",
    difficulty: "medium",
  },
  {
    id: "lvd-p15",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Region Identification",
    question:
      "In a Venn diagram, circle A = Students, circle B = Athletes, circle C = Singers. A person is in the region inside A and B but outside C. What does this person represent?",
    steps: [
      {
        id: 1,
        operation: "Identify the region",
        expression:
          "Inside A (Student), Inside B (Athlete), Outside C (Not Singer)",
        result: "A student who is an athlete but not a singer",
        explanation:
          "The person belongs to A and B but does not belong to C.",
      },
      {
        id: 2,
        operation: "Express in set notation",
        expression: "A ∩ B - C",
        result: "A student who is also an athlete but is not a singer",
        explanation:
          "This is the region in the intersection of A and B, excluding C.",
      },
    ],
    answer: "A student who is an athlete but not a singer.",
    difficulty: "medium",
  },
  {
    id: "lvd-p16",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2021: Delhi-India-Pakistan",
    question:
      "Which Venn diagram best represents the relationship among: Delhi, India, Pakistan?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Delhi and India",
        expression: "Delhi is a city/territory in India",
        result: "Delhi ⊂ India",
        explanation: "Delhi is part of India.",
      },
      {
        id: 2,
        operation: "Analyze pair: Delhi and Pakistan",
        expression: "Delhi is not in Pakistan",
        result: "Disjoint",
        explanation: "Delhi has no overlap with Pakistan.",
      },
      {
        id: 3,
        operation: "Analyze pair: India and Pakistan",
        expression: "India and Pakistan are separate countries",
        result: "Disjoint",
        explanation: "Two sovereign countries with no territorial overlap.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Delhi inside India. Pakistan separate from both.",
        result:
          "Delhi circle inside India circle. Pakistan circle separate.",
        explanation:
          "One subset relationship and one disjoint relationship.",
      },
    ],
    answer: "Delhi inside India; Pakistan as a separate circle.",
    difficulty: "medium",
  },
  {
    id: "lvd-p17",
    topic: "logical-venn-diagrams",
    title: "SSC CHSL 2023: Readers-Writers-Poets",
    question:
      "Which Venn diagram best represents the relationship among: Readers, Writers, Poets?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Poets and Writers",
        expression: "All poets are writers (poets write poetry)",
        result: "Poets ⊂ Writers",
        explanation: "Every poet is a writer.",
      },
      {
        id: 2,
        operation: "Analyze pair: Readers and Writers",
        expression: "Some readers are writers, some writers are readers, but not all",
        result: "Overlapping",
        explanation: "Partial overlap between readers and writers.",
      },
      {
        id: 3,
        operation: "Combine",
        expression:
          "Poets inside Writers. Readers overlaps with Writers.",
        result:
          "Poets inside Writers; Readers overlaps with Writers",
        explanation:
          "Readers circle partially overlaps with Writers circle, and Poets is nested inside Writers.",
      },
    ],
    answer:
      "Poets inside Writers; Readers circle overlapping with Writers circle.",
    difficulty: "medium",
  },
  {
    id: "lvd-p18",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Wire-Copper-Paper",
    question:
      "Which Venn diagram best represents the relationship among: Wire, Copper, Paper?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Wire and Copper",
        expression:
          "Some wires are made of copper, but not all wires are copper (steel wire, aluminium wire exist)",
        result: "Overlapping",
        explanation: "Partial overlap between wire and copper.",
      },
      {
        id: 2,
        operation: "Analyze pair: Wire and Paper",
        expression: "No wire is paper",
        result: "Disjoint",
        explanation: "Paper and wire are entirely different materials/objects.",
      },
      {
        id: 3,
        operation: "Analyze pair: Copper and Paper",
        expression: "No copper is paper",
        result: "Disjoint",
        explanation: "Copper and paper are entirely different.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Wire and Copper overlap. Paper is separate from both.",
        result:
          "Two overlapping circles (Wire, Copper) with Paper separate",
        explanation:
          "Wire and Copper partially overlap. Paper has no connection to either.",
      },
    ],
    answer:
      "Wire and Copper overlap; Paper as a separate circle.",
    difficulty: "medium",
  },
  {
    id: "lvd-p19",
    topic: "logical-venn-diagrams",
    title: "IBPS PO 2021: Two-Set Counting",
    question:
      "In a group of 100 people: 60 like tea, 40 like coffee, 20 like both. How many like neither? (Use Venn diagram reasoning.)",
    steps: [
      {
        id: 1,
        operation: "Apply inclusion-exclusion",
        expression:
          "|Tea ∪ Coffee| = |Tea| + |Coffee| - |Both| = 60 + 40 - 20",
        result: "80 like tea or coffee or both",
        explanation:
          "Subtract the overlap to avoid double-counting.",
      },
      {
        id: 2,
        operation: "Find neither",
        expression: "Neither = Total - |Tea ∪ Coffee| = 100 - 80",
        result: "20",
        explanation: "Those outside both circles in the Venn diagram.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "20 people like neither tea nor coffee",
        result: "20",
        explanation:
          "The region outside both circles contains 20 people.",
      },
    ],
    answer: "20 people like neither.",
    difficulty: "medium",
  },
  {
    id: "lvd-p20",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Married-Women-Teachers",
    question:
      "Which Venn diagram best represents the relationship among: Married, Women, Teachers?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Married and Women",
        expression: "Some women are married, some are not. Some married people are men.",
        result: "Overlapping",
        explanation: "Partial overlap.",
      },
      {
        id: 2,
        operation: "Analyze pair: Women and Teachers",
        expression: "Some women are teachers, some teachers are men",
        result: "Overlapping",
        explanation: "Partial overlap.",
      },
      {
        id: 3,
        operation: "Analyze pair: Married and Teachers",
        expression: "Some teachers are married, some are not",
        result: "Overlapping",
        explanation: "Partial overlap.",
      },
      {
        id: 4,
        operation: "Combine",
        expression: "All three pairs have partial overlap",
        result: "Three mutually overlapping circles",
        explanation:
          "Each of the three categories is independent, with partial overlap between every pair.",
      },
    ],
    answer: "Three mutually overlapping circles.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────
  {
    id: "lvd-p21",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Three-Set Counting",
    question:
      "In a class of 60: 35 play cricket, 25 play football, 20 play hockey. 10 play cricket and football, 8 play football and hockey, 5 play cricket and hockey, 3 play all three. How many play none?",
    steps: [
      {
        id: 1,
        operation: "Apply inclusion-exclusion for three sets",
        expression: "|C ∪ F ∪ H| = 35 + 25 + 20 - 10 - 8 - 5 + 3",
        result: "60",
        explanation:
          "Add individual counts, subtract pairwise overlaps, add triple overlap.",
      },
      {
        id: 2,
        operation: "Find none",
        expression: "None = Total - |C ∪ F ∪ H| = 60 - 60",
        result: "0",
        explanation:
          "Everyone in the class plays at least one sport.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "0 students play none of the three sports",
        result: "0",
        explanation: "The entire class is covered by the three circles.",
      },
    ],
    answer: "0 students play none.",
    difficulty: "hard",
  },
  {
    id: "lvd-p22",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2021: Four-Group Classification",
    question:
      "Which Venn diagram best represents the relationship among: Females, Mothers, Doctors, Widows?",
    steps: [
      {
        id: 1,
        operation: "Analyze subsets of Females",
        expression: "Mothers ⊂ Females, Widows ⊂ Females",
        result: "Both Mothers and Widows are subsets of Females",
        explanation: "All mothers are female. All widows are female.",
      },
      {
        id: 2,
        operation: "Analyze Mothers vs Widows",
        expression:
          "Some mothers are widows, some are not",
        result: "Overlapping",
        explanation:
          "A mother can be a widow or not. A widow can be a mother or not.",
      },
      {
        id: 3,
        operation: "Analyze Doctors vs others",
        expression:
          "Doctors can be male or female, mothers or not, widows or not",
        result:
          "Doctors overlaps with Females (partially inside, partially outside)",
        explanation:
          "Doctors is independent of gender and family status.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Females = large circle. Mothers and Widows = overlapping circles inside Females. Doctors = circle crossing the Females boundary.",
        result:
          "4-circle diagram with Mothers and Widows inside Females; Doctors straddles the boundary",
        explanation:
          "Doctors partially overlaps with all three but extends outside Females (male doctors).",
      },
    ],
    answer:
      "Mothers and Widows overlap inside Females; Doctors overlaps with all three but extends outside Females.",
    difficulty: "hard",
  },
  {
    id: "lvd-p23",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Only-Region Calculation",
    question:
      "From the data: 50 read newspaper A, 40 read B, 30 read C. 15 read A and B, 12 read B and C, 10 read A and C, 5 read all three. How many read ONLY newspaper A?",
    steps: [
      {
        id: 1,
        operation: "Identify the only-A region formula",
        expression: "Only A = A - (A∩B) - (A∩C) + (A∩B∩C)",
        result: "Only A = 50 - 15 - 10 + 5",
        explanation:
          "Subtract those who also read B or C, then add back the triple overlap (subtracted twice).",
      },
      {
        id: 2,
        operation: "Calculate",
        expression: "50 - 15 - 10 + 5 = 30",
        result: "30",
        explanation: "30 people read only newspaper A.",
      },
    ],
    answer: "30 read only newspaper A.",
    difficulty: "hard",
  },
  {
    id: "lvd-p24",
    topic: "logical-venn-diagrams",
    title: "IBPS PO 2022: Minimum Overlap",
    question:
      "In a group of 100: 70 like apples, 80 like bananas. What is the minimum number who like both?",
    steps: [
      {
        id: 1,
        operation: "Apply inclusion-exclusion",
        expression:
          "|A ∪ B| = |A| + |B| - |A ∩ B|. Maximum |A ∪ B| = 100 (total group size).",
        result: "100 = 70 + 80 - |A ∩ B|",
        explanation:
          "The union cannot exceed the total group size.",
      },
      {
        id: 2,
        operation: "Solve for minimum overlap",
        expression: "|A ∩ B| = 70 + 80 - 100 = 50",
        result: "Minimum 50",
        explanation:
          "At least 50 people must like both apples and bananas.",
      },
    ],
    answer: "Minimum 50 like both.",
    difficulty: "hard",
  },
  {
    id: "lvd-p25",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Exactly Two Sets",
    question:
      "In a survey of 200: 120 use WhatsApp, 100 use Instagram, 80 use Twitter. 50 use WA and Insta, 30 use Insta and Twitter, 40 use WA and Twitter, 20 use all three. How many use exactly two platforms?",
    steps: [
      {
        id: 1,
        operation: "Understand pairwise counts include triple",
        expression:
          "WA ∩ Insta = 50 includes the 20 who use all three",
        result: "Exactly WA and Insta only = 50 - 20 = 30",
        explanation:
          "Subtract triple overlap from each pairwise count to get 'exactly two'.",
      },
      {
        id: 2,
        operation: "Calculate each exactly-two region",
        expression:
          "Exactly WA∩Insta = 30. Exactly Insta∩Twitter = 30-20 = 10. Exactly WA∩Twitter = 40-20 = 20.",
        result: "30 + 10 + 20 = 60",
        explanation: "Sum of all exactly-two regions.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "60 people use exactly two platforms",
        result: "60",
        explanation:
          "These people are in exactly one pairwise overlap but not in the triple overlap.",
      },
    ],
    answer: "60 people use exactly two platforms.",
    difficulty: "hard",
  },
  {
    id: "lvd-p26",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2023: Male-Father-Children",
    question:
      "Which Venn diagram best represents the relationship among: Males, Fathers, Children?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Fathers and Males",
        expression: "All fathers are males",
        result: "Fathers ⊂ Males",
        explanation: "Every father is male.",
      },
      {
        id: 2,
        operation: "Analyze pair: Children and Males",
        expression: "Some children are male, some are female",
        result: "Overlapping",
        explanation: "Male children exist, but female children also exist.",
      },
      {
        id: 3,
        operation: "Analyze pair: Children and Fathers",
        expression: "No child is a father (in standard exam context)",
        result: "Disjoint",
        explanation:
          "Children cannot be fathers. These sets do not overlap.",
      },
      {
        id: 4,
        operation: "Combine",
        expression:
          "Fathers inside Males. Children overlaps with Males (male children) but not with Fathers.",
        result:
          "Fathers inside Males; Children partially overlaps with Males but separate from Fathers",
        explanation:
          "The Children circle intersects the Males circle in the region outside Fathers.",
      },
    ],
    answer:
      "Fathers inside Males; Children overlaps with Males but is separate from Fathers.",
    difficulty: "hard",
  },
  {
    id: "lvd-p27",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2022: Disease Classification",
    question:
      "Which Venn diagram best represents the relationship among: Infectious Diseases, Deficiency Diseases, Goitre, Rickets, Chickenpox?",
    steps: [
      {
        id: 1,
        operation: "Classify each disease",
        expression:
          "Goitre = deficiency (iodine). Rickets = deficiency (Vitamin D). Chickenpox = infectious.",
        result: "Goitre and Rickets are deficiency diseases; Chickenpox is infectious",
        explanation: "Each disease belongs to one category.",
      },
      {
        id: 2,
        operation: "Analyze relationship: Infectious and Deficiency",
        expression: "These are distinct categories of diseases",
        result: "Disjoint",
        explanation: "No infectious disease is a deficiency disease.",
      },
      {
        id: 3,
        operation: "Combine",
        expression:
          "Two disjoint large circles (Infectious, Deficiency). Goitre and Rickets inside Deficiency. Chickenpox inside Infectious.",
        result:
          "Two separate large circles, each containing their respective diseases",
        explanation:
          "Goitre and Rickets sit as separate circles inside Deficiency Diseases. Chickenpox sits inside Infectious Diseases.",
      },
    ],
    answer:
      "Two disjoint circles: Goitre and Rickets inside Deficiency Diseases; Chickenpox inside Infectious Diseases.",
    difficulty: "hard",
  },
  {
    id: "lvd-p28",
    topic: "logical-venn-diagrams",
    title: "SSC CGL 2023: Brothers-Fathers-Painters",
    question:
      "Which Venn diagram best represents the relationship among: Brothers, Fathers, Painters?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Brothers and Fathers",
        expression:
          "Some brothers are fathers (elder brothers with children). Some fathers are brothers.",
        result: "Overlapping",
        explanation:
          "A person can be both a brother and a father. Partial overlap.",
      },
      {
        id: 2,
        operation: "Analyze pair: Fathers and Painters",
        expression: "Some fathers can be painters, some painters are fathers",
        result: "Overlapping",
        explanation: "Profession is independent of being a father.",
      },
      {
        id: 3,
        operation: "Analyze pair: Brothers and Painters",
        expression: "Some brothers can be painters",
        result: "Overlapping",
        explanation: "Being a brother and being a painter are independent.",
      },
      {
        id: 4,
        operation: "Combine",
        expression: "All three pairs partially overlap",
        result: "Three mutually overlapping circles",
        explanation:
          "None is a subset of another; all three have independent partial overlaps.",
      },
    ],
    answer: "Three mutually overlapping circles.",
    difficulty: "hard",
  },
  {
    id: "lvd-p29",
    topic: "logical-venn-diagrams",
    title: "SSC CHSL 2023: Bed-Bedroom-House",
    question:
      "Which Venn diagram best represents the relationship among: Bed, Bedroom, House?",
    steps: [
      {
        id: 1,
        operation: "Analyze pair: Bed and Bedroom",
        expression: "A bed is found in a bedroom",
        result: "Bed ⊂ Bedroom",
        explanation: "Bed is typically contained within a bedroom.",
      },
      {
        id: 2,
        operation: "Analyze pair: Bedroom and House",
        expression: "A bedroom is a room in a house",
        result: "Bedroom ⊂ House",
        explanation: "Bedroom is a part of a house.",
      },
      {
        id: 3,
        operation: "Combine",
        expression: "Bed ⊂ Bedroom ⊂ House",
        result: "Three concentric circles",
        explanation:
          "Bed innermost, Bedroom in the middle, House outermost.",
      },
    ],
    answer:
      "Three concentric circles: Bed (innermost) inside Bedroom inside House (outermost).",
    difficulty: "hard",
  },
  {
    id: "lvd-p30",
    topic: "logical-venn-diagrams",
    title: "IBPS PO 2022: Three-Set At Least One",
    question:
      "In a group of 150: 80 speak Hindi, 60 speak English, 50 speak Tamil. 25 speak Hindi and English, 15 speak English and Tamil, 20 speak Hindi and Tamil, 10 speak all three. How many speak at least one language?",
    steps: [
      {
        id: 1,
        operation: "Apply inclusion-exclusion",
        expression:
          "|H ∪ E ∪ T| = 80 + 60 + 50 - 25 - 15 - 20 + 10",
        result: "140",
        explanation:
          "Add individual, subtract pairwise, add triple.",
      },
      {
        id: 2,
        operation: "Find those speaking at least one",
        expression: "At least one = |H ∪ E ∪ T| = 140",
        result: "140",
        explanation: "140 out of 150 speak at least one of the three languages.",
      },
      {
        id: 3,
        operation: "Find none (bonus)",
        expression: "None = 150 - 140 = 10",
        result: "10 speak none of the three",
        explanation:
          "10 people in the group speak none of Hindi, English, or Tamil.",
      },
    ],
    answer: "140 speak at least one language (10 speak none).",
    difficulty: "hard",
  },
]
