import type { ReasoningProblem } from "@/types/reasoning"

export const orderRankingProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ─────────────────────────────────────────────
  {
    id: "or-p1",
    topic: "order-ranking",
    title: "SSC CGL: Basic Total from Both Ends",
    question:
      "In a row of students, Ravi is 7th from the left and 13th from the right. How many students are in the row?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Left position = 7, Right position = 13",
        result: "Two positions of the same person",
        explanation: "Ravi's positions from both ends are given.",
      },
      {
        id: 2,
        operation: "Apply total formula",
        expression: "Total = 7 + 13 - 1 = 19",
        result: "19",
        explanation:
          "Total = Left + Right - 1 (subtract 1 because Ravi is counted twice).",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "19 students in the row",
        result: "19",
        explanation: "There are 19 students in the row.",
      },
    ],
    answer: "19 students",
    difficulty: "easy",
  },
  {
    id: "or-p2",
    topic: "order-ranking",
    title: "SSC CGL: Position from Other End",
    question:
      "In a class of 40 students, Meera ranks 15th from the top. What is her rank from the bottom?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Total = 40, Rank from top = 15",
        result: "Need rank from bottom",
        explanation: "Total and one position are known.",
      },
      {
        id: 2,
        operation: "Apply conversion formula",
        expression: "Rank from bottom = 40 - 15 + 1 = 26",
        result: "26",
        explanation: "Position from other end = Total - Given position + 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "26th from the bottom",
        result: "26th",
        explanation: "Meera ranks 26th from the bottom.",
      },
    ],
    answer: "26th from the bottom",
    difficulty: "easy",
  },
  {
    id: "or-p3",
    topic: "order-ranking",
    title: "RRB NTPC: People Between Two Positions (Same End)",
    question:
      "In a row, A is 8th from the left and B is 14th from the left. How many people sit between A and B?",
    steps: [
      {
        id: 1,
        operation: "Identify positions",
        expression: "A = 8th from left, B = 14th from left",
        result: "Both from the same end",
        explanation: "Both positions are measured from the left.",
      },
      {
        id: 2,
        operation: "Apply between formula",
        expression: "|14 - 8| - 1 = 6 - 1 = 5",
        result: "5",
        explanation: "People between = |Pos_A - Pos_B| - 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "5 people between A and B",
        result: "5",
        explanation: "5 people sit between A and B.",
      },
    ],
    answer: "5 people",
    difficulty: "easy",
  },
  {
    id: "or-p4",
    topic: "order-ranking",
    title: "SSC CGL 2022: Rank in Class — Both Ends",
    question:
      "Priya ranks 12th from the top and 31st from the bottom. How many students are in the class?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Top rank = 12, Bottom rank = 31",
        result: "Same person from opposite ends",
        explanation: "Priya's ranks from both ends are given.",
      },
      {
        id: 2,
        operation: "Apply total formula",
        expression: "Total = 12 + 31 - 1 = 42",
        result: "42",
        explanation: "Total = Top rank + Bottom rank - 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "42 students",
        result: "42",
        explanation: "There are 42 students in the class.",
      },
    ],
    answer: "42 students",
    difficulty: "easy",
  },
  {
    id: "or-p5",
    topic: "order-ranking",
    title: "SSC CGL 2023: Large Row — Direct Formula",
    question:
      "In a class, Saurav is ranked 274th from the first and 367th from the last. How many students are there in the class?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Rank from first = 274, Rank from last = 367",
        result: "Same person, both ends",
        explanation: "Saurav's positions from both ends are given.",
      },
      {
        id: 2,
        operation: "Apply total formula",
        expression: "Total = 274 + 367 - 1 = 640",
        result: "640",
        explanation:
          "Total = Rank from first + Rank from last - 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "640 students in the class",
        result: "640",
        explanation: "There are 640 students in the class.",
      },
    ],
    answer: "640 students",
    difficulty: "easy",
  },
  {
    id: "or-p6",
    topic: "order-ranking",
    title: "SSC CGL: Rank from Other End Conversion",
    question:
      "Anita ranks 12th in a class of 46 students. What is her rank from the last?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Total = 46, Rank from first = 12",
        result: "Need rank from last",
        explanation: "Total students and rank from one end are given.",
      },
      {
        id: 2,
        operation: "Apply conversion formula",
        expression: "Rank from last = (46 - 12) + 1 = 35",
        result: "35th",
        explanation:
          "Position from other end = Total - Given position + 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "35th from the last",
        result: "35th",
        explanation: "Anita's rank from the last is 35th.",
      },
    ],
    answer: "35th from the last",
    difficulty: "easy",
  },
  {
    id: "or-p7",
    topic: "order-ranking",
    title: "RRB NTPC: Position in Row of 60",
    question:
      "In a row of 60 cars, car A is 32nd from the right end. What is its position from the left end?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Total = 60, Position from right = 32",
        result: "Need position from left",
        explanation: "Total and position from one end are known.",
      },
      {
        id: 2,
        operation: "Apply conversion formula",
        expression: "Position from left = 60 - 32 + 1 = 29",
        result: "29th",
        explanation: "Left position = Total - Right position + 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "29th from the left end",
        result: "29th",
        explanation: "Car A is 29th from the left end.",
      },
    ],
    answer: "29th from the left end",
    difficulty: "easy",
  },
  {
    id: "or-p8",
    topic: "order-ranking",
    title: "SSC CGL: Ravi Ahead of Sumit",
    question:
      "Ravi is 7 ranks ahead of Sumit in a class of 39 students. If Sumit's rank is 17th from the last, what is Ravi's rank from the start?",
    steps: [
      {
        id: 1,
        operation: "Find Sumit's rank from the start",
        expression: "Sumit from start = 39 - 17 + 1 = 23",
        result: "Sumit is 23rd from the start",
        explanation: "Convert Sumit's rank from last to rank from start.",
      },
      {
        id: 2,
        operation: "Find Ravi's rank",
        expression: "Ravi is 7 ranks ahead → Ravi = 23 - 7 = 16",
        result: "Ravi is 16th from the start",
        explanation:
          "Being 7 ranks ahead means a lower rank number (better position).",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "16th from the start",
        result: "16th",
        explanation: "Ravi's rank from the start is 16th.",
      },
    ],
    answer: "16th from the start",
    difficulty: "easy",
  },
  {
    id: "or-p9",
    topic: "order-ranking",
    title: "IBPS Clerk: Simple Interchange",
    question:
      "In a row of 25 students, Suresh is 9th from the left. After interchanging positions with Ramesh, Suresh becomes 17th from the left. What was Ramesh's original position from the right?",
    steps: [
      {
        id: 1,
        operation: "Find Ramesh's original position from left",
        expression:
          "After swap, Suresh is at Ramesh's old position = 17th from left",
        result: "Ramesh was originally 17th from left",
        explanation:
          "After interchange, each person occupies the other's old position.",
      },
      {
        id: 2,
        operation: "Convert to position from right",
        expression: "Ramesh from right = 25 - 17 + 1 = 9",
        result: "9th from right",
        explanation: "Right position = Total - Left position + 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "9th from the right",
        result: "9th",
        explanation: "Ramesh was originally 9th from the right.",
      },
    ],
    answer: "9th from the right",
    difficulty: "easy",
  },
  {
    id: "or-p10",
    topic: "order-ranking",
    title: "SSC CGL: Deepak's Position from Right",
    question:
      "In a row of 80 persons, Deepak is 42nd from the left. What is his position from the right?",
    steps: [
      {
        id: 1,
        operation: "Identify given data",
        expression: "Total = 80, Position from left = 42",
        result: "Need position from right",
        explanation: "Total and left position are known.",
      },
      {
        id: 2,
        operation: "Apply conversion formula",
        expression: "Position from right = 80 - 42 + 1 = 39",
        result: "39th",
        explanation: "Right position = Total - Left position + 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "39th from the right",
        result: "39th",
        explanation: "Deepak is 39th from the right end.",
      },
    ],
    answer: "39th from the right",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ──────────────────────────────────────────
  {
    id: "or-p11",
    topic: "order-ranking",
    title: "SSC CGL 2023: Two People Different Ends with Between",
    question:
      "In a row, A is 10th from the left and B is 8th from the right. If there are 3 people between A and B, and A is to the left of B, how many people are in the row?",
    steps: [
      {
        id: 1,
        operation: "Express B's left position",
        expression: "B from left = Total - 8 + 1 = Total - 7",
        result: "B is at position (Total - 7) from left",
        explanation: "Convert B's right rank to left rank using Total.",
      },
      {
        id: 2,
        operation: "Use between condition (A left of B)",
        expression: "(Total - 7) - 10 - 1 = 3",
        result: "Total - 18 = 3",
        explanation: "People between A and B = B_left - A_left - 1 = 3.",
      },
      {
        id: 3,
        operation: "Solve for Total",
        expression: "Total = 3 + 18 = 21",
        result: "21",
        explanation: "There are 21 people in the row.",
      },
    ],
    answer: "21 people",
    difficulty: "medium",
  },
  {
    id: "or-p12",
    topic: "order-ranking",
    title: "IBPS PO: Interchange with New Right Rank",
    question:
      "In a row of 30 students, Ankit is 11th from the left. After interchanging with Bhanu, Ankit becomes 21st from the left. What is Bhanu's new rank from the right?",
    steps: [
      {
        id: 1,
        operation: "Find Bhanu's original position",
        expression:
          "Ankit's new position = 21st from left = Bhanu's original",
        result: "Bhanu was 21st from left",
        explanation: "After swap, Ankit is at Bhanu's old position.",
      },
      {
        id: 2,
        operation: "Find Bhanu's new position",
        expression: "Bhanu now occupies Ankit's old position = 11th from left",
        result: "Bhanu is now 11th from left",
        explanation: "After swap, Bhanu goes to Ankit's old spot.",
      },
      {
        id: 3,
        operation: "Convert to right rank",
        expression: "Bhanu from right = 30 - 11 + 1 = 20",
        result: "20th from right",
        explanation: "Right rank = Total - Left rank + 1.",
      },
    ],
    answer: "20th from the right",
    difficulty: "medium",
  },
  {
    id: "or-p13",
    topic: "order-ranking",
    title: "SSC CGL 2022: Between with Students from Different Ends",
    question:
      "In a class of n students, Akhil's rank is 42nd from the top. Sahil's rank is 19th from the bottom. There are 29 students between Akhil and Sahil. Find the value of n.",
    steps: [
      {
        id: 1,
        operation: "Express Sahil's rank from top",
        expression: "Sahil from top = n - 19 + 1 = n - 18",
        result: "Sahil is at position (n - 18) from top",
        explanation: "Convert Sahil's bottom rank to top rank.",
      },
      {
        id: 2,
        operation: "Apply between formula",
        expression: "(n - 18) - 42 - 1 = 29",
        result: "n - 61 = 29",
        explanation:
          "Students between = Sahil_top - Akhil_top - 1 = 29 (assuming Akhil is above Sahil).",
      },
      {
        id: 3,
        operation: "Solve for n",
        expression: "n = 29 + 61 = 90",
        result: "90",
        explanation: "There are 90 students in the class.",
      },
    ],
    answer: "90 students",
    difficulty: "medium",
  },
  {
    id: "or-p14",
    topic: "order-ranking",
    title: "RRB NTPC: Rank Below Another Person",
    question:
      "In a class, Rahul is 16th from the top. Sunil is 5 ranks below Rahul. If Sunil is 30th from the bottom, how many students are in the class?",
    steps: [
      {
        id: 1,
        operation: "Find Sunil's rank from top",
        expression: "Sunil = 16 + 5 = 21st from top",
        result: "Sunil is 21st from top",
        explanation: "Sunil is 5 ranks below Rahul (rank 16).",
      },
      {
        id: 2,
        operation: "Apply total formula for Sunil",
        expression: "Total = 21 + 30 - 1 = 50",
        result: "50",
        explanation: "Total = Top rank + Bottom rank - 1.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "50 students",
        result: "50",
        explanation: "There are 50 students in the class.",
      },
    ],
    answer: "50 students",
    difficulty: "medium",
  },
  {
    id: "or-p15",
    topic: "order-ranking",
    title: "SSC CGL: Three People in a Row — Midway Position",
    question:
      "In a row of 50 students, A is 20th from the left. B is 10 positions to the right of A. C is exactly midway between A and B. What is C's position from the right?",
    steps: [
      {
        id: 1,
        operation: "Find B's position",
        expression: "B = 20 + 10 = 30th from left",
        result: "B is 30th from left",
        explanation: "B is 10 positions to the right of A.",
      },
      {
        id: 2,
        operation: "Find C's position",
        expression: "C = (20 + 30) / 2 = 25th from left",
        result: "C is 25th from left",
        explanation: "Midway between positions 20 and 30 is position 25.",
      },
      {
        id: 3,
        operation: "Convert to right position",
        expression: "C from right = 50 - 25 + 1 = 26",
        result: "26th from right",
        explanation: "Right position = Total - Left position + 1.",
      },
    ],
    answer: "26th from the right",
    difficulty: "medium",
  },
  {
    id: "or-p16",
    topic: "order-ranking",
    title: "IBPS PO: Shifted Position in Row",
    question:
      "In a row of 15 children, when Raju was shifted three places towards the right, he became 8th from the right end. What was his earlier position from the left end?",
    steps: [
      {
        id: 1,
        operation: "Find Raju's new position from left",
        expression: "New position from left = 15 - 8 + 1 = 8th from left",
        result: "After shifting, Raju is 8th from left",
        explanation: "Convert new right position to left position.",
      },
      {
        id: 2,
        operation: "Find original position",
        expression:
          "He shifted 3 places right → original was 3 places to the left = 8 - 3 = 5th from left",
        result: "Originally 5th from left",
        explanation:
          "Shifting right increases the left position number. Original = new - shift.",
      },
      {
        id: 3,
        operation: "Verify",
        expression:
          "Original: 5th from left. Shift right by 3: 5 + 3 = 8th from left. Right position = 15 - 8 + 1 = 8th from right. Matches.",
        result: "5th from the left (verified)",
        explanation:
          "After shifting 3 places right from position 5, Raju reaches position 8 from left, which is 8th from right in a row of 15. Confirmed.",
      },
    ],
    answer: "5th from the left",
    difficulty: "medium",
  },
  {
    id: "or-p17",
    topic: "order-ranking",
    title: "SSC CGL 2024: Unnati and Prabha — Derived Total",
    question:
      "If Unnati is 12 ranks ahead of Prabha, who ranks 15th from the last, then how many students are there in the class if Unnati ranks 4th in order of merit?",
    steps: [
      {
        id: 1,
        operation: "Find Prabha's rank from top",
        expression:
          "Unnati is 4th from top. She is 12 ranks ahead of Prabha. So Prabha = 4 + 12 = 16th from top.",
        result: "Prabha is 16th from top",
        explanation:
          "Being 12 ranks ahead means Unnati has a better (lower) rank number.",
      },
      {
        id: 2,
        operation: "Apply total formula for Prabha",
        expression: "Total = 16 + 15 - 1 = 30",
        result: "30",
        explanation:
          "Prabha is 16th from top and 15th from last. Using the formula: Total = Top rank + Bottom rank - 1 = 16 + 15 - 1 = 30.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "30 students",
        result: "30",
        explanation: "There are 30 students in the class.",
      },
    ],
    answer: "30 students",
    difficulty: "medium",
  },
  {
    id: "or-p18",
    topic: "order-ranking",
    title: "SSC CGL: Height Comparison — Ordering Five People",
    question:
      "Alka is taller than Vinod, who is shorter than Pramod. Usha is taller than Priyanka but shorter than Vinod. Pramod is shorter than Alka. Who is the tallest?",
    steps: [
      {
        id: 1,
        operation: "List relationships",
        expression:
          "Alka > Vinod | Pramod > Vinod | Usha > Priyanka | Vinod > Usha | Alka > Pramod",
        result: "Five comparative relationships",
        explanation:
          "Extract all height comparisons from the given information.",
      },
      {
        id: 2,
        operation: "Build complete order",
        expression:
          "From Alka > Pramod > Vinod > Usha > Priyanka",
        result: "Alka > Pramod > Vinod > Usha > Priyanka",
        explanation:
          "Combining all relationships: Alka > Pramod (given), Pramod > Vinod (given), Vinod > Usha (given), Usha > Priyanka (given). The complete descending order is Alka > Pramod > Vinod > Usha > Priyanka.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "Alka is the tallest",
        result: "Alka",
        explanation:
          "Alka is taller than everyone else based on the chain of comparisons.",
      },
    ],
    answer: "Alka is the tallest",
    difficulty: "medium",
  },
  {
    id: "or-p19",
    topic: "order-ranking",
    title: "IBPS PO: Percentage-Based Rank",
    question:
      "Rahul's rank in a class is 20th and he scored more than at least 75% of the class. What is the minimum strength of the class?",
    steps: [
      {
        id: 1,
        operation: "Interpret the condition",
        expression:
          "Rahul is 20th from top and scored more than 75% of students",
        result: "75% of students scored less than Rahul",
        explanation:
          "Being better than 75% means 75% of total students are ranked below him.",
      },
      {
        id: 2,
        operation: "Set up equation",
        expression:
          "Students below Rahul = Total - 20. This must be at least 75% of Total. So (Total - 20) / Total >= 0.75",
        result: "Total - 20 >= 0.75 * Total",
        explanation:
          "At least 75% of the class is below rank 20.",
      },
      {
        id: 3,
        operation: "Solve",
        expression:
          "0.25 * Total >= 20 → Total >= 80",
        result: "Minimum 80 students",
        explanation:
          "The minimum class strength is 80 for Rahul at rank 20 to be in the top 25%.",
      },
    ],
    answer: "Minimum 80 students",
    difficulty: "medium",
  },
  {
    id: "or-p20",
    topic: "order-ranking",
    title: "SSC CGL 2023: Between with Students from Same Rank Direction",
    question:
      "In a class, Ram's rank was 25th from the last. There were 25 people whose ranks were between Ram and Shyam. If Shyam's rank from the top was 35th, how many students were there in the class?",
    steps: [
      {
        id: 1,
        operation: "Find Ram's rank from top",
        expression:
          "Shyam is 35th from top. 25 people between them. Ram is below Shyam. So Ram from top = 35 + 25 + 1 = 61",
        result: "Ram is 61st from top",
        explanation:
          "Ram is 25th from last and Shyam is 35th from top. Since 25 are between them and Ram is below Shyam, Ram = 35 + 25 + 1 = 61st from top.",
      },
      {
        id: 2,
        operation: "Apply total formula for Ram",
        expression: "Total = 61 + 25 - 1 = 85",
        result: "85",
        explanation:
          "Ram is 61st from top and 25th from last. Total = 61 + 25 - 1 = 85.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "85 students",
        result: "85",
        explanation: "There are 85 students in the class.",
      },
    ],
    answer: "85 students",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────
  {
    id: "or-p21",
    topic: "order-ranking",
    title: "SSC CGL 2024: Rows and Columns Grid",
    question:
      "In a class seating grid, Rohit is 5th from the left and 10th from the right in his row, and 3rd from the top and 8th from the bottom in his column. How many students are in the class?",
    steps: [
      {
        id: 1,
        operation: "Find number of columns (seats per row)",
        expression: "Columns = 5 + 10 - 1 = 14",
        result: "14 seats per row",
        explanation: "Apply total formula horizontally.",
      },
      {
        id: 2,
        operation: "Find number of rows",
        expression: "Rows = 3 + 8 - 1 = 10",
        result: "10 rows",
        explanation: "Apply total formula vertically.",
      },
      {
        id: 3,
        operation: "Calculate total",
        expression: "Total = 14 x 10 = 140",
        result: "140",
        explanation: "Total students = rows x columns.",
      },
    ],
    answer: "140 students",
    difficulty: "hard",
  },
  {
    id: "or-p22",
    topic: "order-ranking",
    title: "IBPS PO: Students Join the Row",
    question:
      "In a row of 35, Kavita is 14th from the left. 6 students join and all stand to the right of Kavita. What is Kavita's new rank from the right?",
    steps: [
      {
        id: 1,
        operation: "New total",
        expression: "New total = 35 + 6 = 41",
        result: "41",
        explanation: "6 new students added to the row.",
      },
      {
        id: 2,
        operation: "Kavita's left rank unchanged",
        expression:
          "All new students are to her right, so left rank stays 14",
        result: "14th from left",
        explanation:
          "No one joined to her left, so her left position is unchanged.",
      },
      {
        id: 3,
        operation: "Calculate new right rank",
        expression: "Right rank = 41 - 14 + 1 = 28",
        result: "28th from right",
        explanation:
          "6 more people are now to her right, increasing her right rank by 6.",
      },
    ],
    answer: "28th from the right",
    difficulty: "hard",
  },
  {
    id: "or-p23",
    topic: "order-ranking",
    title: "SSC CGL: Conditional Minimum with Ordering Constraint",
    question:
      "In a row, A is 18th from the left and B is 15th from the right. A is to the left of B. What is the minimum number of people in the row?",
    steps: [
      {
        id: 1,
        operation: "Convert B's position",
        expression: "B from left = Total - 15 + 1 = Total - 14",
        result: "B at (Total - 14) from left",
        explanation: "Convert B's right rank to left rank.",
      },
      {
        id: 2,
        operation: "Apply A < B constraint",
        expression: "18 < Total - 14 (A must be strictly to the left of B)",
        result: "Total > 32",
        explanation:
          "A's left position must be less than B's left position for A to be left of B.",
      },
      {
        id: 3,
        operation: "Minimum integer total",
        expression: "Total = 33 (smallest integer > 32)",
        result: "33",
        explanation:
          "At 33: A is at 18, B is at 33 - 14 = 19. A(18) < B(19). Valid with 0 between.",
      },
    ],
    answer: "Minimum 33 people",
    difficulty: "hard",
  },
  {
    id: "or-p24",
    topic: "order-ranking",
    title: "IBPS PO 2023: Double Interchange Tracking",
    question:
      "In a row of 40, A is 12th from left. A swaps with B, making A 25th from left. Then B swaps with C, making B 33rd from left. What was C's original position from the right?",
    steps: [
      {
        id: 1,
        operation: "Find B's original position",
        expression:
          "After swap 1, A goes to B's old position = 25th from left",
        result: "B was originally 25th from left",
        explanation:
          "In a swap, each person goes to the other's position.",
      },
      {
        id: 2,
        operation: "Find B's position after swap 1",
        expression: "B goes to A's old position = 12th from left",
        result: "After swap 1, B is at 12th from left",
        explanation: "B takes A's original position.",
      },
      {
        id: 3,
        operation: "Find C's original position",
        expression:
          "After swap 2, B goes to C's old position = 33rd from left",
        result: "C was originally at 33rd from left",
        explanation: "In swap 2, B goes to C's old position.",
      },
      {
        id: 4,
        operation: "Convert to right position",
        expression: "C from right = 40 - 33 + 1 = 8",
        result: "8th from right",
        explanation: "Right position = Total - Left position + 1.",
      },
    ],
    answer: "8th from the right",
    difficulty: "hard",
  },
  {
    id: "or-p25",
    topic: "order-ranking",
    title: "SSC CGL 2024: Two Rows Comparison",
    question:
      "Row 1 has students where Amit is 9th from left and 16th from right. Row 2 has students where Bina is 12th from left and 20th from right. How many more students are in Row 2 than Row 1?",
    steps: [
      {
        id: 1,
        operation: "Find total in Row 1",
        expression: "Row 1 = 9 + 16 - 1 = 24",
        result: "24 students in Row 1",
        explanation: "Apply formula for Amit.",
      },
      {
        id: 2,
        operation: "Find total in Row 2",
        expression: "Row 2 = 12 + 20 - 1 = 31",
        result: "31 students in Row 2",
        explanation: "Apply formula for Bina.",
      },
      {
        id: 3,
        operation: "Find difference",
        expression: "31 - 24 = 7",
        result: "7",
        explanation: "Row 2 has 7 more students than Row 1.",
      },
    ],
    answer: "7 more students in Row 2",
    difficulty: "hard",
  },
  {
    id: "or-p26",
    topic: "order-ranking",
    title: "IBPS PO: Boys vs Girls in Class",
    question:
      "In a class, there are 120 students, where boys are twice that of girls. Ramu, a boy, was ranked 25th from the top. If there are 10 girls ahead of Ramu, how many boys are after him in rank?",
    steps: [
      {
        id: 1,
        operation: "Find number of boys and girls",
        expression:
          "Boys = 2 x Girls, Boys + Girls = 120. So 3 x Girls = 120 → Girls = 40, Boys = 80",
        result: "80 boys and 40 girls",
        explanation:
          "Boys are twice the number of girls. Solving: Girls = 40, Boys = 80.",
      },
      {
        id: 2,
        operation: "Find boys ahead of Ramu",
        expression:
          "24 students ahead of Ramu. 10 are girls → 24 - 10 = 14 boys ahead",
        result: "14 boys ahead of Ramu",
        explanation:
          "Out of 24 students ranked above Ramu, 10 are girls, so 14 are boys.",
      },
      {
        id: 3,
        operation: "Find boys after Ramu",
        expression:
          "Ramu is the 15th boy (14 boys ahead + himself). Boys after = 80 - 15 = 65",
        result: "65 boys after Ramu",
        explanation:
          "Total boys (80) minus boys up to and including Ramu (15).",
      },
    ],
    answer: "65 boys are after him",
    difficulty: "hard",
  },
  {
    id: "or-p27",
    topic: "order-ranking",
    title: "SSC CGL: Interchange — Finding New Total",
    question:
      "In a row, Dipa is 5th from the left and Vijay is 6th from the right. After interchanging positions, Dipa becomes 13th from the left. What is Vijay's new position from the right?",
    steps: [
      {
        id: 1,
        operation: "Find total people in the row",
        expression:
          "After swap, Dipa is at Vijay's old position = 13th from left. Vijay's old right position = 6th. Total = 13 + 6 - 1 = 18.",
        result: "18 people in the row",
        explanation:
          "Using Vijay's original positions: 13th from left and 6th from right gives Total = 18.",
      },
      {
        id: 2,
        operation: "Find Vijay's new position",
        expression:
          "Vijay goes to Dipa's old position = 5th from left",
        result: "Vijay is now 5th from left",
        explanation: "After swap, Vijay occupies Dipa's original position.",
      },
      {
        id: 3,
        operation: "Convert to right position",
        expression: "Vijay from right = 18 - 5 + 1 = 14",
        result: "14th from right",
        explanation: "Right position = Total - Left position + 1.",
      },
    ],
    answer: "14th from the right",
    difficulty: "hard",
  },
  {
    id: "or-p28",
    topic: "order-ranking",
    title: "IBPS PO 2024: Passed, Failed, and Absent",
    question:
      "Manish ranked 16th from the top and 29th from the bottom among those who passed an examination. Six students did not participate, and five failed. How many students are in the class?",
    steps: [
      {
        id: 1,
        operation: "Find total who passed",
        expression: "Passed = 16 + 29 - 1 = 44",
        result: "44 students passed",
        explanation:
          "Manish's rank from top (16) + rank from bottom (29) - 1 among those who passed.",
      },
      {
        id: 2,
        operation: "Add non-participants and failures",
        expression: "Total = 44 + 6 + 5 = 55",
        result: "55 students",
        explanation:
          "Total class = passed (44) + absent (6) + failed (5).",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "55 students in the class",
        result: "55",
        explanation: "The total class strength is 55.",
      },
    ],
    answer: "55 students",
    difficulty: "hard",
  },
  {
    id: "or-p29",
    topic: "order-ranking",
    title: "SSC CGL 2023: Gaurav and Tarun — Total with Between",
    question:
      "Gaurav is 29th from the left and Tarun is 27th from the right. If there are 26 students between them, how many students are in the row?",
    steps: [
      {
        id: 1,
        operation: "Apply the total formula with between",
        expression: "Total = 29 + 27 + 26 = 82",
        result: "82",
        explanation:
          "When positions are from opposite ends and we know the number between: Total = Left position + Right position + Between. This works because: Left-side people (29) + Between (26) + Right-side people (27) = Total, and the two given positions include the persons themselves.",
      },
      {
        id: 2,
        operation: "Verify",
        expression:
          "Gaurav at 29 from left. Tarun from left = 82 - 27 + 1 = 56. Between = 56 - 29 - 1 = 26. Correct.",
        result: "Verified: 26 between them",
        explanation:
          "Converting Tarun to left position (56th) and checking between gives 26. Confirmed.",
      },
      {
        id: 3,
        operation: "State answer",
        expression: "82 students",
        result: "82",
        explanation: "There are 82 students in the row.",
      },
    ],
    answer: "82 students",
    difficulty: "hard",
  },
  {
    id: "or-p30",
    topic: "order-ranking",
    title: "IBPS PO: Kavya and Lucky — Between in Known Total",
    question:
      "In a row of 100 students, Kavya's rank is 50th from the top and Lucky's rank is 68th from the bottom. How many students are between them?",
    steps: [
      {
        id: 1,
        operation: "Find Lucky's rank from top",
        expression: "Lucky from top = 100 - 68 + 1 = 33",
        result: "Lucky is 33rd from top",
        explanation: "Convert bottom rank to top rank.",
      },
      {
        id: 2,
        operation: "Determine order",
        expression:
          "Lucky is 33rd from top, Kavya is 50th from top. Lucky is ahead of Kavya.",
        result: "Lucky (33) ... gap ... Kavya (50)",
        explanation:
          "Lucky has a better (lower) rank than Kavya.",
      },
      {
        id: 3,
        operation: "Calculate between",
        expression: "Between = 50 - 33 - 1 = 16",
        result: "16 students",
        explanation:
          "People between = |Pos_Kavya - Pos_Lucky| - 1 = 50 - 33 - 1 = 16.",
      },
    ],
    answer: "16 students between them",
    difficulty: "hard",
  },
]
