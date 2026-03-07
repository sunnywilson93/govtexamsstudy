import type { ReasoningProblem } from "@/types/reasoning"

export const dataSufficiencyProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ─────────────────────────────────────────────
  {
    id: "ds-p1",
    topic: "data-sufficiency",
    title: "IBPS PO: Single Equation — Statement I Sufficient",
    question:
      "What is the value of X? Statement I: X + 5 = 12. Statement II: X is a positive integer less than 10.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "X + 5 = 12 → X = 7",
        result: "Unique value: X = 7. Statement I is SUFFICIENT.",
        explanation: "One equation, one unknown gives a unique solution.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "X is a positive integer < 10 → X can be 1, 2, ..., 9",
        result: "Multiple values possible. Statement II is NOT sufficient.",
        explanation:
          "Statement II narrows the range but does not fix a unique value.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Statement I alone is sufficient",
        result: "Answer: Only Statement I alone is sufficient.",
        explanation:
          "No need to combine since Statement I already gives the answer.",
      },
    ],
    answer: "Only Statement I alone is sufficient.",
    difficulty: "easy",
  },
  {
    id: "ds-p2",
    topic: "data-sufficiency",
    title: "SBI PO: Both Needed — Sum of Two Variables",
    question:
      "What is the value of A + B? Statement I: A = 3. Statement II: B = 7.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "A = 3, but B is unknown",
        result: "Cannot determine A + B. NOT sufficient.",
        explanation: "One variable is still unknown.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "B = 7, but A is unknown",
        result: "Cannot determine A + B. NOT sufficient.",
        explanation: "The other variable is unknown.",
      },
      {
        id: 3,
        operation: "Combine both statements",
        expression: "A = 3, B = 7 → A + B = 10",
        result: "Unique answer. Both together are SUFFICIENT.",
        explanation: "Together they provide all needed information.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "easy",
  },
  {
    id: "ds-p3",
    topic: "data-sufficiency",
    title: "IBPS PO: Either Sufficient — Divisibility Check",
    question:
      "Is N even? Statement I: N is divisible by 4. Statement II: N is divisible by 6.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "N divisible by 4 → N = 4k → N is even",
        result: "Definite Yes. Statement I is SUFFICIENT.",
        explanation: "Any multiple of 4 is even.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "N divisible by 6 → N = 6k → N is even",
        result: "Definite Yes. Statement II is SUFFICIENT.",
        explanation: "Any multiple of 6 is even.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Either statement alone is sufficient",
        result: "Answer: Either statement alone is sufficient.",
        explanation: "Both independently confirm N is even.",
      },
    ],
    answer: "Either statement alone is sufficient.",
    difficulty: "easy",
  },
  {
    id: "ds-p4",
    topic: "data-sufficiency",
    title: "SBI PO: Neither Sufficient — Three Unknowns",
    question:
      "What is A? Statement I: A + B = 10. Statement II: A + C = 15.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "A + B = 10 → A = 10 - B (B unknown)",
        result: "NOT sufficient",
        explanation: "Cannot determine A without knowing B.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "A + C = 15 → A = 15 - C (C unknown)",
        result: "NOT sufficient",
        explanation: "Cannot determine A without knowing C.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "Two equations: A + B = 10, A + C = 15. Three unknowns (A, B, C).",
        result: "Still insufficient — B and C are independent unknowns",
        explanation:
          "Even together, there are more unknowns than equations. A cannot be uniquely determined.",
      },
    ],
    answer: "Data insufficient even with both statements.",
    difficulty: "easy",
  },
  {
    id: "ds-p5",
    topic: "data-sufficiency",
    title: "IBPS Clerk: Direction — Statement I Sufficient",
    question:
      "In which direction is point B from point A? Statement I: A walks 5 km north and reaches B. Statement II: B is 5 km from A.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "A walks north to reach B → B is north of A",
        result: "Direction determined. Statement I is SUFFICIENT.",
        explanation: "Walking north from A to B means B is due north of A.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "B is 5 km from A → could be in any direction",
        result: "NOT sufficient — direction unknown",
        explanation: "Distance alone does not determine direction.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Statement I alone is sufficient",
        result: "Answer: Only Statement I alone is sufficient.",
        explanation: "Only Statement I gives directional information.",
      },
    ],
    answer: "Only Statement I alone is sufficient.",
    difficulty: "easy",
  },
  {
    id: "ds-p6",
    topic: "data-sufficiency",
    title: "RRB NTPC: Pole Weight — Either Sufficient",
    question:
      "What is the total weight of 10 poles, each of the same weight? Statement I: One-fourth of each pole's weight equals 5 kg. Statement II: Three poles weigh 20 kg more than two poles.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Weight / 4 = 5 → Weight per pole = 20 kg → Total = 10 x 20 = 200 kg",
        result: "200 kg. Statement I is SUFFICIENT.",
        explanation:
          "Direct calculation: each pole weighs 20 kg, 10 poles = 200 kg.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "3W - 2W = 20 → W = 20 kg → Total = 10 x 20 = 200 kg",
        result: "200 kg. Statement II is SUFFICIENT.",
        explanation:
          "Three poles minus two poles equals one pole = 20 kg. Same result.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Either statement alone is sufficient",
        result: "Answer: Either statement alone is sufficient.",
        explanation:
          "Both independently establish each pole weighs 20 kg, making total weight 200 kg.",
      },
    ],
    answer: "Either statement alone is sufficient.",
    difficulty: "easy",
  },
  {
    id: "ds-p7",
    topic: "data-sufficiency",
    title: "IBPS PO: Children Count — Neither Sufficient",
    question:
      "How many children does M have? Statement I: H is the only daughter of X, and X is M's wife. Statement II: K and J are M's brothers.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "X is M's wife. H is X's only daughter → H is M's only daughter. But M may have sons too.",
        result: "NOT sufficient — number of sons unknown",
        explanation:
          "We know M has exactly one daughter (H), but cannot determine the total number of children.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "K and J are M's brothers — no info about M's children",
        result: "NOT sufficient — irrelevant to M's children",
        explanation:
          "Knowing M's brothers tells us nothing about M's own children.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "One daughter (H) + unknown sons. Brothers K, J provide no additional info about M's children.",
        result: "Still NOT sufficient — sons count unknown",
        explanation:
          "Even together, we cannot determine M's total number of children.",
      },
    ],
    answer: "Data insufficient even with both statements.",
    difficulty: "easy",
  },
  {
    id: "ds-p8",
    topic: "data-sufficiency",
    title: "SSC CGL: Last Sunday — Either Sufficient",
    question:
      "The last Sunday of March 2006 fell on which date? Statement I: The first Sunday of March 2006 fell on the 5th. Statement II: The last day of March 2006 was a Friday.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "First Sunday = 5th. Subsequent Sundays: 12th, 19th, 26th. March has 31 days. Next would be April 2. So last Sunday = 26th.",
        result: "26th March. Statement I is SUFFICIENT.",
        explanation:
          "Adding 7 repeatedly: 5, 12, 19, 26. The 26th is the last Sunday in March.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "31st March = Friday. Count back: 30th = Thursday, 29th = Wednesday, 28th = Tuesday, 27th = Monday, 26th = Sunday.",
        result: "26th March. Statement II is SUFFICIENT.",
        explanation:
          "Working backwards from Friday the 31st, the 26th is a Sunday.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Either statement alone is sufficient",
        result: "Answer: Either statement alone is sufficient.",
        explanation:
          "Both independently confirm the 26th was the last Sunday.",
      },
    ],
    answer: "Either statement alone is sufficient.",
    difficulty: "easy",
  },
  {
    id: "ds-p9",
    topic: "data-sufficiency",
    title: "IBPS PO: System of Equations — Both Needed",
    question:
      "What is the value of P? Statement I: P + Q = 15. Statement II: P - Q = 3.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "P + Q = 15 → infinite (P, Q) pairs",
        result: "NOT sufficient alone",
        explanation: "One equation with two unknowns.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "P - Q = 3 → infinite (P, Q) pairs",
        result: "NOT sufficient alone",
        explanation: "One equation with two unknowns.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression: "P + Q = 15 and P - Q = 3 → 2P = 18 → P = 9",
        result: "P = 9. Both together are SUFFICIENT.",
        explanation:
          "Two independent equations with two unknowns give a unique solution.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "easy",
  },
  {
    id: "ds-p10",
    topic: "data-sufficiency",
    title: "SBI PO: Age Problem — Statement II Sufficient",
    question:
      "What is Raj's current age? Statement I: Raj is twice as old as Sita. Statement II: Five years ago, Raj was 25.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "Raj = 2 x Sita. But Sita's age is unknown.",
        result: "NOT sufficient",
        explanation: "One equation with two unknowns.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "Raj - 5 = 25 → Raj = 30",
        result: "Unique value. Statement II is SUFFICIENT.",
        explanation: "Direct calculation gives Raj's current age.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Statement II alone is sufficient",
        result: "Answer: Only Statement II alone is sufficient.",
        explanation:
          "Statement II directly gives the answer without needing Statement I.",
      },
    ],
    answer: "Only Statement II alone is sufficient.",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ──────────────────────────────────────────
  {
    id: "ds-p11",
    topic: "data-sufficiency",
    title: "IBPS PO 2023: Yes/No with Square Root Ambiguity",
    question:
      "Is X > 5? Statement I: X^2 = 36. Statement II: X is positive.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "X^2 = 36 → X = 6 or X = -6",
        result: "If X = 6: Yes. If X = -6: No. NOT sufficient.",
        explanation:
          "Two possible values give different answers to the Yes/No question.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "X is positive → X > 0, but could be 1, 2, 3, ...",
        result: "X could be 3 (No) or 8 (Yes). NOT sufficient.",
        explanation: "Knowing X is positive does not determine if X > 5.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression: "X^2 = 36 and X > 0 → X = 6",
        result: "X = 6 > 5. Definite Yes. SUFFICIENT together.",
        explanation:
          "Together they uniquely determine X = 6, which is greater than 5.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "medium",
  },
  {
    id: "ds-p12",
    topic: "data-sufficiency",
    title: "SBI PO: Profit Calculation — Both Needed",
    question:
      "What is the profit percentage? Statement I: Cost price is Rs 200. Statement II: Selling price is Rs 250.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "CP = 200, but SP unknown → cannot compute profit %",
        result: "NOT sufficient",
        explanation: "Need both CP and SP for profit percentage.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "SP = 250, but CP unknown → cannot compute profit %",
        result: "NOT sufficient",
        explanation: "Need both CP and SP for profit percentage.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression: "Profit % = ((250 - 200) / 200) x 100 = 25%",
        result: "25%. Both together SUFFICIENT.",
        explanation:
          "Together they give both CP and SP, allowing calculation.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "medium",
  },
  {
    id: "ds-p13",
    topic: "data-sufficiency",
    title: "IBPS PO: Perfect Square — Either Sufficient",
    question:
      "Is N a perfect square? Statement I: N = K^2 for some positive integer K. Statement II: N has an odd number of factors.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression: "N = K^2 → N is a perfect square by definition",
        result: "Definite Yes. Statement I is SUFFICIENT.",
        explanation: "This is the definition of a perfect square.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "A number has odd number of factors if and only if it is a perfect square",
        result: "Definite Yes. Statement II is SUFFICIENT.",
        explanation:
          "This is a known number theory property — only perfect squares have an odd factor count.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Either statement alone is sufficient",
        result: "Answer: Either statement alone is sufficient.",
        explanation: "Both independently confirm N is a perfect square.",
      },
    ],
    answer: "Either statement alone is sufficient.",
    difficulty: "medium",
  },
  {
    id: "ds-p14",
    topic: "data-sufficiency",
    title: "SBI PO 2023: Tallest Person — Either Sufficient",
    question:
      "Who is the tallest among P, Q, R, S, and T? Statement I: S is shorter than Q. P is shorter than only T. Statement II: Q is taller than only S. T is taller than P and R.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "P is shorter than only T → P is 2nd tallest, T is 1st. S < Q but no full ordering of Q, R, S.",
        result: "T is tallest. Statement I is SUFFICIENT.",
        explanation:
          "P is shorter than only T means T is the only person taller than P. So T is the tallest.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Q is taller than only S → Q is 4th tallest. T > P and T > R. Combined with Q being near bottom: T is tallest.",
        result: "T is tallest. Statement II is SUFFICIENT.",
        explanation:
          "T is taller than both P and R, and Q is near the bottom. T must be tallest.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Either statement alone is sufficient",
        result: "Answer: Either statement alone is sufficient. T is tallest.",
        explanation:
          "Both statements independently establish T as the tallest.",
      },
    ],
    answer: "Either statement alone is sufficient.",
    difficulty: "medium",
  },
  {
    id: "ds-p15",
    topic: "data-sufficiency",
    title: "IBPS PO 2024: Coded Language — Both Needed",
    question:
      "What does 'ka' mean in a code language? Statement I: 'ka la pa' means 'good sweet fruit'. Statement II: 'la pa na' means 'sweet fruit basket'.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "'ka la pa' = 'good sweet fruit'. Three codes, three meanings, no unique mapping.",
        result: "NOT sufficient — cannot determine which code maps to which word",
        explanation:
          "Order may not correspond. Multiple mappings possible.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "'la pa na' = 'sweet fruit basket'. No mention of 'ka'.",
        result: "NOT sufficient — 'ka' not present",
        explanation: "Statement II does not contain the code 'ka' at all.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "I: {ka, la, pa} = {good, sweet, fruit}. II: {la, pa, na} = {sweet, fruit, basket}. Common: {la, pa} = {sweet, fruit}. From I: ka = good.",
        result: "'ka' means 'good'. SUFFICIENT together.",
        explanation:
          "By elimination: la and pa correspond to sweet and fruit (common in both). Therefore ka = good.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "medium",
  },
  {
    id: "ds-p16",
    topic: "data-sufficiency",
    title: "IBPS PO: Relationship — Both Needed",
    question:
      "How is M related to N? Statement I: M is the brother of K. Statement II: K is the daughter of N.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "M is brother of K → M is male, sibling of K. N is not mentioned.",
        result: "NOT sufficient — no link to N",
        explanation: "Statement I tells us about M and K only.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "K is daughter of N → K is female child of N. M is not mentioned.",
        result: "NOT sufficient — no link to M",
        explanation: "Statement II tells us about K and N only.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "M is brother of K, K is daughter of N → M and K are siblings, both children of N. M is male → M is son of N.",
        result: "M is N's son. SUFFICIENT together.",
        explanation:
          "M and K are siblings (M male). K is N's child. Therefore M is also N's child, specifically N's son.",
      },
    ],
    answer: "Both statements together are needed. M is N's son.",
    difficulty: "medium",
  },
  {
    id: "ds-p17",
    topic: "data-sufficiency",
    title: "SBI PO: Birth Year — Both Needed",
    question:
      "In which year was Rahul born? Statement I: Rahul is currently 25 years younger than his mother. Statement II: Rahul's brother, born in 1964, is 35 years younger than his mother.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Rahul = Mother - 25. But mother's age/birth year unknown.",
        result: "NOT sufficient",
        explanation: "Only a relative age difference is given.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Brother born 1964, Brother = Mother - 35. Mother's birth year = 1964 - 35 = 1929. But Rahul's info missing.",
        result: "NOT sufficient — no direct info about Rahul",
        explanation:
          "We can find the mother's age but not Rahul's without Statement I.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "Mother born in 1929. Rahul = Mother - 25. Mother's age when Rahul born = 25. Rahul born = 1929 + 25 = 1954.",
        result: "Rahul born in 1954. SUFFICIENT together.",
        explanation:
          "Together: Mother's birth year (from II) + Rahul's age gap (from I) → Rahul's birth year.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "medium",
  },
  {
    id: "ds-p18",
    topic: "data-sufficiency",
    title: "IBPS PO: Ranking Position — Statement I Sufficient",
    question:
      "What is Monica's position with respect to Rahul in the row? Statement I: In a row of 25 students, Monica is 12th from the right end and Rahul is 20th from the left end. Statement II: Monica is 4th from the right end and Rahul is 8th from the left end.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Row = 25. Monica from left = 25 - 12 + 1 = 14. Rahul from left = 20. Gap = 20 - 14 = 6 positions. Rahul is 6 positions to right of Monica.",
        result: "Position determined. Statement I is SUFFICIENT.",
        explanation:
          "With total known, both positions from left can be found, giving relative position.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Monica from right = 4, Rahul from left = 8. Total unknown → cannot determine relative position definitively.",
        result: "NOT sufficient — total unknown",
        explanation:
          "Without total, we cannot convert positions to the same end for comparison.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Statement I alone is sufficient",
        result: "Answer: Only Statement I alone is sufficient.",
        explanation:
          "Statement I provides total row size, enabling full position calculation.",
      },
    ],
    answer: "Only Statement I alone is sufficient.",
    difficulty: "medium",
  },
  {
    id: "ds-p19",
    topic: "data-sufficiency",
    title: "SBI PO 2024: Least Marks — Statement I Sufficient",
    question:
      "Who scored the least marks among P, Q, R, S, and T? Statement I: S scored less than only R and T. Statement II: Q scored more than P.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "S scored less than only R and T → S is 3rd from top. P and Q are below S. But who is last among P and Q?",
        result: "NOT fully sufficient — P vs Q order unknown",
        explanation:
          "We know R, T are above S, and P, Q are below S. But which of P, Q is last?",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Q > P → P is below Q. But no info about others.",
        result: "NOT sufficient — incomplete ranking",
        explanation:
          "Only one comparison is given.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "From I: R, T > S > P, Q. From II: Q > P. Combined: order is T/R > S > Q > P. P scored least.",
        result: "P scored least. SUFFICIENT together.",
        explanation:
          "Combining both: P is below Q (from II), and both are below S (from I). P is at the bottom.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "medium",
  },
  {
    id: "ds-p20",
    topic: "data-sufficiency",
    title: "IBPS PO: Floor Puzzle — Both Needed",
    question:
      "On which floor does Shikha live in a 6-storey building (ground floor is parking)? Statement I: Rekha is on the 4th floor. Shikha lives only on even-numbered floors. Reema is not on the topmost floor. Statement II: Reema is two floors below Peter, who is 3 floors above Shikha.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Shikha on even floors: 2nd or 4th. Rekha is on 4th. If Shikha cannot share, Shikha = 2nd. But we need to know if sharing is disallowed.",
        result: "Likely 2nd floor, but not conclusive alone",
        explanation:
          "Assuming one person per floor: Rekha takes 4th, so Shikha must be on 2nd. But sharing rule is unstated.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Peter is 3 floors above Shikha. If Shikha = 2, Peter = 5. Reema = Peter - 2 = 3. If Shikha = 1, Peter = 4, Reema = 2.",
        result: "Multiple possibilities. NOT sufficient alone.",
        explanation:
          "Without the even-floor constraint, Shikha could be on floor 1 or 2.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "From I: Shikha is on 2nd or 4th. Rekha = 4th → Shikha = 2nd. From II: Peter = 2 + 3 = 5th. Reema = 5 - 2 = 3rd. Reema is not topmost (5th) — consistent.",
        result: "Shikha on 2nd floor. SUFFICIENT together.",
        explanation:
          "Combined constraints uniquely place Shikha on the 2nd floor.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────
  {
    id: "ds-p21",
    topic: "data-sufficiency",
    title: "IBPS PO 2023: Geometry — Triangle Area",
    question:
      "What is the area of triangle PQR? Statement I: PQ = 10 cm and QR = 8 cm. Statement II: Angle Q = 90 degrees.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Two sides known: PQ = 10, QR = 8. Third side and angles unknown.",
        result: "NOT sufficient — need the included angle or third side",
        explanation: "Two sides alone do not determine a unique triangle.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "Angle Q = 90 degrees. No side lengths known.",
        result: "NOT sufficient — no dimensions",
        explanation: "An angle without sides gives no area information.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "PQ = 10, QR = 8, angle Q = 90 degrees. Area = (1/2) x 10 x 8 = 40 sq cm",
        result: "40 sq cm. Both together SUFFICIENT.",
        explanation:
          "Two sides with the included right angle uniquely determine the triangle and its area.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
  {
    id: "ds-p22",
    topic: "data-sufficiency",
    title: "SBI PO: Speed and Distance — Both Needed",
    question:
      "What is the speed of train A? Statement I: Train A crosses a pole in 10 seconds. Statement II: Train A is 200 meters long.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Crosses pole in 10 sec → Speed = Length / 10. But length unknown.",
        result: "NOT sufficient",
        explanation:
          "Need the train's length to calculate speed from pole-crossing time.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression: "Length = 200 m. No time or speed information.",
        result: "NOT sufficient",
        explanation: "Length alone does not determine speed.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression: "Speed = 200 m / 10 sec = 20 m/s = 72 km/h",
        result: "Speed = 20 m/s. SUFFICIENT together.",
        explanation:
          "When a train crosses a pole, it travels its own length. Length and time together give speed.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
  {
    id: "ds-p23",
    topic: "data-sufficiency",
    title: "IBPS PO: Sequence Pattern — Both Needed",
    question:
      "What is the 10th term of sequence S? Statement I: S is an arithmetic progression with common difference 3. Statement II: The 5th term of S is 20.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "AP with d = 3. But first term (a) unknown. T_n = a + (n-1)d.",
        result: "NOT sufficient — first term unknown",
        explanation: "Common difference alone does not fix the sequence.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "T_5 = 20. Without knowing the type of sequence or first term, one data point is insufficient.",
        result: "NOT sufficient — sequence type unknown",
        explanation: "One term alone does not define the entire sequence.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "T_5 = a + 4(3) = 20 → a = 8. T_10 = 8 + 9(3) = 35.",
        result: "T_10 = 35. SUFFICIENT together.",
        explanation:
          "With d = 3 and T_5 = 20, we find a = 8, then compute any term.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
  {
    id: "ds-p24",
    topic: "data-sufficiency",
    title: "SBI PO 2024: Facing Direction — Insufficient",
    question:
      "Amit is facing which direction? Statement I: Shikha is facing east, and if she turns to her right she will face Raj. Statement II: Amit is facing the opposite direction to Kiran, who is facing Shikha.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Shikha faces east. Raj is to Shikha's right (south). No info about Amit.",
        result: "NOT sufficient — Amit not mentioned",
        explanation: "Statement I tells us about Shikha and Raj only.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Amit faces opposite to Kiran. Kiran faces Shikha. But Shikha's direction is unknown in this statement.",
        result: "NOT sufficient — Shikha's direction unknown here",
        explanation:
          "Without knowing Shikha's facing direction, we cannot determine Kiran's or Amit's.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "Shikha faces east (from I). Kiran faces Shikha → Kiran faces west. Amit faces opposite to Kiran → Amit faces east.",
        result: "Wait — 'facing Shikha' is ambiguous. Kiran could be anywhere facing toward Shikha.",
        explanation:
          "If Kiran faces Shikha (east direction from I), Kiran could be to Shikha's west facing east. Then Amit faces west. But if Kiran is to Shikha's east facing west, Amit faces east. Positional info is missing.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Ambiguity in Kiran's position → direction indeterminate",
        result: "Data insufficient even with both statements.",
        explanation:
          "Without knowing Kiran's exact position relative to Shikha, we cannot definitively determine Amit's direction.",
      },
    ],
    answer: "Data insufficient even with both statements.",
    difficulty: "hard",
  },
  {
    id: "ds-p25",
    topic: "data-sufficiency",
    title: "IBPS PO 2024: Code Language — Both Needed",
    question:
      "How is PRODUCT written in a code language? Statement I: AIEEE is written as BJFFF. Statement II: GYPSY is written as FXORX.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "A→B (+1), I→J (+1), E→F (+1), E→F (+1), E→F (+1). Pattern: each letter shifts +1.",
        result: "Partial pattern discovered but need verification",
        explanation:
          "Statement I suggests a +1 shift for all letters, but this could be coincidence.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "G→F (-1), Y→X (-1), P→O (-1), S→R (-1), Y→X (-1). Pattern: each letter shifts -1.",
        result: "Contradicts Statement I pattern",
        explanation:
          "Statement II shows a -1 shift, opposite to Statement I.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "I shows vowels +1: A→B, I→J, E→F. II shows consonants -1: G→F, P→O, S→R. Y is semi-vowel treated as consonant (-1): Y→X. Rule: vowels shift +1, consonants shift -1.",
        result: "PRODUCT: P(-1)=O, R(-1)=Q, O(+1)=P, D(-1)=C, U(+1)=V, C(-1)=B, T(-1)=S → OQPCVBS",
        explanation:
          "Applying dual rule: consonants -1, vowels +1. Both statements together reveal the complete coding scheme.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Both needed to establish the dual shift rule",
        result: "Both statements together are needed.",
        explanation:
          "Statement I alone suggests +1 for all (incomplete). Statement II alone suggests -1 for all (incomplete). Together they reveal the vowel/consonant split rule.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
  {
    id: "ds-p26",
    topic: "data-sufficiency",
    title: "SBI PO: Company Sales — Both Needed",
    question:
      "How much was the total sale of the company? Statement I: The company sold 8000 units of product X at Rs 25 per unit. Statement II: This is the only product line of the company.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Revenue from X = 8000 x 25 = Rs 2,00,000. But company may have other products.",
        result: "NOT sufficient — other products may exist",
        explanation:
          "Statement I gives revenue from one product but does not confirm it is the only product.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Only one product line. But no sales figures given.",
        result: "NOT sufficient — no numbers",
        explanation: "Knowing it is the only product without sales data is useless.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "Only product is X (from II). Sales of X = Rs 2,00,000 (from I). Total sale = Rs 2,00,000.",
        result: "Total sale = Rs 2,00,000. SUFFICIENT together.",
        explanation:
          "Together they confirm X is the only product and give its revenue.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
  {
    id: "ds-p27",
    topic: "data-sufficiency",
    title: "IBPS PO 2023: Distance Between Points — Insufficient",
    question:
      "What is the distance between point P and point Q? Statement I: Point R is 10 m west of P, and point S is 10 m north of P. Statement II: Point Q is 10 m south-east of R. Point S is 20 m north-west of Q.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "R is 10m west of P. S is 10m north of P. No info about Q.",
        result: "NOT sufficient — Q not located",
        explanation: "Statement I places R and S relative to P but not Q.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Q is 10m SE of R. S is 20m NW of Q. But P's location relative to Q unknown directly.",
        result: "NOT sufficient — P-Q direct link missing",
        explanation:
          "We can place Q relative to R and S, but without knowing P's position, P-Q distance is unknown.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "P at origin. R at (-10, 0). S at (0, 10). Q is 10m SE of R: SE means (+x, -y) at 45 degrees. Q = R + (10cos45, -10sin45) = (-10 + 7.07, -7.07) = (-2.93, -7.07). Need to verify S-Q: distance from S(0,10) to Q(-2.93,-7.07) and direction. Actual distance = sqrt(2.93^2 + 17.07^2) = sqrt(8.58 + 291.4) = sqrt(299.98) ~ 17.3m. But statement says 20m NW. Inconsistency possible due to exact SE angle interpretation.",
        result: "Geometric constraints may be inconsistent or insufficient",
        explanation:
          "The south-east and north-west directions at exact 45-degree angles may not produce consistent distances. Without precise angle specifications, the data is insufficient.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Insufficient data — directional ambiguity prevents unique solution",
        result: "Data insufficient even with both statements.",
        explanation:
          "Cardinal directions at 45 degrees do not consistently satisfy all given distance constraints.",
      },
    ],
    answer: "Data insufficient even with both statements.",
    difficulty: "hard",
  },
  {
    id: "ds-p28",
    topic: "data-sufficiency",
    title: "SBI PO 2024: Birthday Month — Insufficient",
    question:
      "In which month is Meena's birthday? Statement I: Shikha remembers that Meena's birthday was 4 months ago. Statement II: Raj remembers that after 2 months from now, Meena's birthday will be 6 months back.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Birthday was 4 months ago from 'now'. But current month is unknown.",
        result: "NOT sufficient — reference month unknown",
        explanation:
          "Without knowing the current month, 4 months ago is indeterminate.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "After 2 months, birthday will be 6 months back → birthday was 6 - 2 = 4 months ago from now. Same info as I.",
        result: "NOT sufficient — still no reference month",
        explanation:
          "This restates the same relative information without a fixed reference.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "Both say birthday was 4 months ago. Still no absolute reference month given.",
        result: "NOT sufficient — no absolute date reference",
        explanation:
          "Both statements are equivalent and neither provides the current month.",
      },
    ],
    answer: "Data insufficient even with both statements.",
    difficulty: "hard",
  },
  {
    id: "ds-p29",
    topic: "data-sufficiency",
    title: "IBPS PO: Code for 'face' — Both Needed",
    question:
      "How is 'face' written in a code language? Statement I: 'no one with face' is coded as 'fo to om sop' and 'no one has face' is coded as 'om sit fo sop'. Statement II: 'face of no light' is coded as 'om mot fo kiz' and 'no one is smart' is coded as 'sop fo sip lik'.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Phrase 1: {no, one, with, face} = {fo, to, om, sop}. Phrase 2: {no, one, has, face} = {om, sit, fo, sop}. Common words: no, one, face. Common codes: fo, om, sop. So {no, one, face} = {fo, om, sop}. Unique in P1: with = to. Unique in P2: has = sit.",
        result: "{no, one, face} = {fo, om, sop} — but which is which?",
        explanation:
          "We narrow down to three words matching three codes, but cannot uniquely identify 'face' from this alone.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Phrase 3: {face, of, no, light} = {om, mot, fo, kiz}. Phrase 4: {no, one, is, smart} = {sop, fo, sip, lik}. Common: no → common codes between P3 and P4. P3 codes: {om, mot, fo, kiz}. P4 codes: {sop, fo, sip, lik}. Common code: fo. Common word: no. So no = fo.",
        result: "no = fo established. But face still maps to om, mot, or kiz.",
        explanation:
          "From P3: {face, of, light} = {om, mot, kiz}. Still 3 possibilities for face.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "From II: no = fo. Apply to I: {one, face} = {om, sop}. From P4: {one, is, smart} = {sop, sip, lik}. one maps to sop (common between I and P4). So face = om.",
        result: "'face' = 'om'. SUFFICIENT together.",
        explanation:
          "Step by step: no = fo, one = sop (from cross-referencing), leaving face = om.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
  {
    id: "ds-p30",
    topic: "data-sufficiency",
    title: "IBPS PO 2024: Relationship — Both Needed",
    question:
      "How is Shubham related to Shivani? Statement I: Shubham is the brother of Meenal, who is the daughter of Pooja. Statement II: Shivani is the niece of Pooja.",
    steps: [
      {
        id: 1,
        operation: "Check Statement I alone",
        expression:
          "Shubham is brother of Meenal. Meenal is daughter of Pooja. So Shubham is son of Pooja. No info about Shivani.",
        result: "NOT sufficient — Shivani not mentioned",
        explanation: "Statement I establishes Shubham's family but not Shivani's.",
      },
      {
        id: 2,
        operation: "Check Statement II alone",
        expression:
          "Shivani is niece of Pooja → Shivani is the daughter of Pooja's sibling. No info about Shubham.",
        result: "NOT sufficient — Shubham not mentioned",
        explanation:
          "Statement II places Shivani in Pooja's extended family but without Shubham's connection.",
      },
      {
        id: 3,
        operation: "Combine both",
        expression:
          "Shubham is Pooja's son (from I). Shivani is daughter of Pooja's sibling (from II). So Shivani is Shubham's cousin.",
        result: "Shubham is Shivani's cousin. SUFFICIENT together.",
        explanation:
          "Shubham (Pooja's son) and Shivani (Pooja's niece) are cousins.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Both statements together establish the cousin relationship",
        result: "Both statements together are needed.",
        explanation:
          "Neither alone connects both people to the same family tree. Together they establish the cousin relationship.",
      },
    ],
    answer: "Both statements together are needed.",
    difficulty: "hard",
  },
]
