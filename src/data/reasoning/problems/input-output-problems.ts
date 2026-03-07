import type { ReasoningProblem } from "@/types/reasoning"

export const inputOutputProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10): SSC CGL Tier 1 basic, RRB NTPC level ──────────
  {
    id: "io-p1",
    topic: "input-output",
    title: "IBPS Clerk 2022: Alphabetical Word Sorting",
    question:
      "A word arrangement machine rearranges words alphabetically, one word per step, from left to right. Input: mango apple zebra kite banana. What is the output at Step 3?",
    steps: [
      {
        id: 1,
        operation: "Identify the rule",
        expression:
          "Each step picks the alphabetically smallest remaining word and places it in the next left position",
        result: "Rule: selection sort (ascending A to Z)",
        explanation:
          "The machine performs selection sort, placing the earliest word first.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression:
          "From {mango, apple, zebra, kite, banana}: smallest = apple",
        result: "apple mango zebra kite banana",
        explanation: "apple is moved to the front.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression:
          "From {mango, zebra, kite, banana}: smallest = banana",
        result: "apple banana mango zebra kite",
        explanation: "banana is placed in position 2.",
      },
      {
        id: 4,
        operation: "Step 3",
        expression: "From {mango, zebra, kite}: smallest = kite",
        result: "apple banana kite mango zebra",
        explanation: "kite is placed in position 3.",
      },
    ],
    answer: "apple banana kite mango zebra",
    difficulty: "easy",
  },
  {
    id: "io-p2",
    topic: "input-output",
    title: "RRB NTPC 2023: Descending Number Sort",
    question:
      "A number arrangement machine sorts numbers in descending order, one per step from left. Input: 34 12 78 45 56. What is the output at Step 2?",
    steps: [
      {
        id: 1,
        operation: "Identify the rule",
        expression:
          "Each step picks the largest remaining number and places it at the current leftmost unsorted position",
        result: "Rule: descending selection sort",
        explanation: "The machine repeatedly extracts the maximum.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression: "From {34, 12, 78, 45, 56}: largest = 78",
        result: "78 34 12 45 56",
        explanation: "78 is moved to position 1.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression: "From {34, 12, 45, 56}: largest = 56",
        result: "78 56 34 12 45",
        explanation: "56 is placed in position 2.",
      },
    ],
    answer: "78 56 34 12 45",
    difficulty: "easy",
  },
  {
    id: "io-p3",
    topic: "input-output",
    title: "IBPS Clerk 2023: Dual Sorting — Words Left, Numbers Right",
    question:
      "Input: sky 24 river 7 cloud 15. Rule: each step moves the alphabetically first remaining word to the left end AND the largest remaining number to the right end. What is the output at Step 2?",
    steps: [
      {
        id: 1,
        operation: "Identify the dual rule",
        expression:
          "Left: alphabetically smallest word | Right: numerically largest number",
        result: "Two placements per step",
        explanation:
          "Each step fixes one word on the left and one number on the right.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression:
          "Words: {sky, river, cloud} -> smallest = cloud | Numbers: {24, 7, 15} -> largest = 24",
        result: "cloud sky river 7 15 24",
        explanation: "cloud goes to left end; 24 goes to right end.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression:
          "Remaining words: {sky, river} -> smallest = river | Remaining numbers: {7, 15} -> largest = 15",
        result: "cloud river sky 7 15 24",
        explanation: "river placed after cloud; 15 placed before 24.",
      },
    ],
    answer: "cloud river sky 7 15 24",
    difficulty: "easy",
  },
  {
    id: "io-p4",
    topic: "input-output",
    title: "SSC CGL 2023: Ascending Number + Descending Word Sort",
    question:
      "Input: red 42 blue 18 green 35. Rule: each step places the smallest remaining number at the left end and the alphabetically last remaining word at the right end. What is the output at Step 2?",
    steps: [
      {
        id: 1,
        operation: "Identify the rule",
        expression:
          "Left end: smallest number | Right end: reverse-alphabetically first word",
        result: "Dual placement per step",
        explanation:
          "Each step fixes a number on the left (ascending) and a word on the right (reverse alphabetical).",
      },
      {
        id: 2,
        operation: "Step 1",
        expression:
          "Numbers: {42, 18, 35} -> smallest = 18 | Words: {red, blue, green} -> alphabetically last = red",
        result: "18 42 blue green 35 red",
        explanation: "18 to left end; red to right end.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression:
          "Remaining numbers: {42, 35} -> smallest = 35 | Remaining words: {blue, green} -> alphabetically last = green",
        result: "18 35 42 blue green red",
        explanation: "35 placed after 18; green placed before red.",
      },
    ],
    answer: "18 35 42 blue green red",
    difficulty: "easy",
  },
  {
    id: "io-p5",
    topic: "input-output",
    title: "RRB NTPC 2022: Vowel-First Word Sorting",
    question:
      "Input: orange tiger umbrella box eagle. Rule: each step moves the first vowel-starting word (scanning left to right) to the left end. If none remain, move the alphabetically first consonant-word. What is Step 3?",
    steps: [
      {
        id: 1,
        operation: "Identify vowel-starting words",
        expression:
          "orange(O) yes | tiger(T) no | umbrella(U) yes | box(B) no | eagle(E) yes",
        result: "Vowel words: orange, umbrella, eagle",
        explanation: "Three words start with vowels.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression:
          "First vowel-word left to right = orange -> already at position 1",
        result: "orange tiger umbrella box eagle",
        explanation: "orange is already in position; no change.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression:
          "Remaining unsorted: tiger umbrella box eagle -> first vowel-word = umbrella",
        result: "orange umbrella tiger box eagle",
        explanation: "umbrella moves to position 2.",
      },
      {
        id: 4,
        operation: "Step 3",
        expression:
          "Remaining unsorted: tiger box eagle -> first vowel-word = eagle",
        result: "orange umbrella eagle tiger box",
        explanation: "eagle moves to position 3.",
      },
    ],
    answer: "orange umbrella eagle tiger box",
    difficulty: "easy",
  },
  {
    id: "io-p6",
    topic: "input-output",
    title: "SSC CGL 2024: Number Doubling Machine",
    question:
      "Input: 3 7 2 5. Rule: each step picks the smallest remaining number, doubles it, and places the doubled value at the right end. What is the output at Step 3?",
    steps: [
      {
        id: 1,
        operation: "Identify the rule",
        expression:
          "Pick smallest remaining -> double it -> place at right end",
        result: "Selection + transformation + right placement",
        explanation:
          "The machine doubles the minimum and appends it to the output on the right.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression: "From {3, 7, 2, 5}: smallest = 2 -> doubled = 4",
        result: "3 7 5 4",
        explanation: "2 is removed, doubled to 4, placed at the right.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression: "From {3, 7, 5}: smallest = 3 -> doubled = 6",
        result: "7 5 6 4",
        explanation: "3 is removed, doubled to 6, placed at the right.",
      },
      {
        id: 4,
        operation: "Step 3",
        expression: "From {7, 5}: smallest = 5 -> doubled = 10",
        result: "7 10 6 4",
        explanation: "5 is removed, doubled to 10, placed at the right.",
      },
    ],
    answer: "7 10 6 4",
    difficulty: "easy",
  },
  {
    id: "io-p7",
    topic: "input-output",
    title: "IBPS Clerk 2024: Word Length Sort",
    question:
      "Input: at box crane do elephant. Rule: each step moves the shortest remaining word to the left end. Ties are broken alphabetically. What is Step 4?",
    steps: [
      {
        id: 1,
        operation: "List word lengths",
        expression: "at(2), box(3), crane(5), do(2), elephant(8)",
        result: "Lengths: 2, 3, 5, 2, 8",
        explanation: "Identify lengths for sorting.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression: "Shortest = length 2: {at, do} -> alphabetically: at < do",
        result: "at box crane do elephant",
        explanation: "at is already in position, no movement needed.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression: "Remaining: box crane do elephant -> shortest = do (length 2)",
        result: "at do box crane elephant",
        explanation: "do (length 2) moves to position 2.",
      },
      {
        id: 4,
        operation: "Steps 3 and 4",
        expression:
          "Step 3: remaining {box, crane, elephant} -> shortest = box (length 3) -> position 3. Step 4: remaining {crane, elephant} -> shortest = crane (length 5) -> position 4.",
        result: "at do box crane elephant",
        explanation:
          "After four steps, words are sorted by length: 2, 2, 3, 5, 8.",
      },
    ],
    answer: "at do box crane elephant",
    difficulty: "easy",
  },
  {
    id: "io-p8",
    topic: "input-output",
    title: "SSC CHSL 2023: Bubble Sort Machine — One Pass",
    question:
      "Input: 5 2 8 1 4. Rule: each step is one full left-to-right pass comparing adjacent pairs and swapping if the left number is greater (bubble sort). What is the output after Step 2 (two full passes)?",
    steps: [
      {
        id: 1,
        operation: "Step 1 (Pass 1)",
        expression:
          "(5,2)->swap->2,5 | (5,8)->ok | (8,1)->swap->1,8 | (8,4)->swap->4,8",
        result: "2 5 1 4 8",
        explanation:
          "After pass 1, the largest element (8) has bubbled to the end.",
      },
      {
        id: 2,
        operation: "Step 2 (Pass 2)",
        expression:
          "(2,5)->ok | (5,1)->swap->1,5 | (5,4)->swap->4,5 | (5,8)->ok",
        result: "2 1 4 5 8",
        explanation:
          "After pass 2, the second-largest (5) is in its correct position.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Two passes of bubble sort applied",
        result: "2 1 4 5 8",
        explanation:
          "Two left-to-right adjacent-swap passes yield 2 1 4 5 8.",
      },
    ],
    answer: "2 1 4 5 8",
    difficulty: "easy",
  },
  {
    id: "io-p9",
    topic: "input-output",
    title: "RRB NTPC 2024: Alphabetical Sorting with Step Count",
    question:
      "A machine sorts words alphabetically from left to right, one word per step. Input: DELHI MUMBAI CHENNAI KOLKATA BANGALORE. How many steps are needed to fully sort the input?",
    steps: [
      {
        id: 1,
        operation: "Determine the final sorted order",
        expression:
          "Sorted: BANGALORE CHENNAI DELHI KOLKATA MUMBAI",
        result: "5 words to sort",
        explanation: "Alphabetically: B < C < D < K < M.",
      },
      {
        id: 2,
        operation: "Apply step-by-step selection sort",
        expression:
          "Step 1: BANGALORE placed at pos 1. Step 2: CHENNAI at pos 2. Step 3: DELHI at pos 3 (already after CHENNAI). Step 4: KOLKATA at pos 4.",
        result: "After Step 3, DELHI KOLKATA MUMBAI are already in order",
        explanation:
          "Step 1 places BANGALORE. Step 2 places CHENNAI. Step 3 places DELHI. After that, KOLKATA and MUMBAI are already sorted.",
      },
      {
        id: 3,
        operation: "Count the steps",
        expression:
          "For n=5 words, selection sort needs at most n-1 = 4 steps. But if the last two are already sorted, it completes in 3.",
        result: "3 steps",
        explanation:
          "After 3 steps of selection sort, the entire arrangement is in alphabetical order.",
      },
    ],
    answer: "3 steps",
    difficulty: "easy",
  },
  {
    id: "io-p10",
    topic: "input-output",
    title: "SSC CGL 2022: Interleaved Same-Length Word-Number Sort",
    question:
      "Input: cat 9 dog 3 rat 6. Rule: each step places the alphabetically first remaining word at the left and the smallest remaining number at the right. What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Identify components",
        expression:
          "Words: cat(3), dog(3), rat(3) — all same length. Numbers: 9, 3, 6",
        result: "Ties broken alphabetically for words",
        explanation: "All words have 3 letters; alphabetical order decides.",
      },
      {
        id: 2,
        operation: "Step 1",
        expression:
          "Alphabetically first word = cat | Smallest number = 3",
        result: "cat 9 dog rat 6 3",
        explanation: "cat to left end; 3 to right end.",
      },
      {
        id: 3,
        operation: "Step 2",
        expression:
          "Remaining words: {dog, rat} -> first = dog | Remaining numbers: {9, 6} -> smallest = 6",
        result: "cat dog 9 rat 6 3",
        explanation: "dog placed after cat; 6 placed before 3.",
      },
    ],
    answer: "cat dog 9 rat 6 3",
    difficulty: "easy",
  },

  // ── Medium (p11–p20): SSC CGL Tier 1 advanced, IBPS Clerk level ───
  {
    id: "io-p11",
    topic: "input-output",
    title: "IBPS PO Prelims 2023: Word + Number Dual Arrangement",
    question:
      "Input: Tank 15 35 Sweet 39 26 Ignite Brush Kite 49. Rule: each step moves the alphabetically first remaining word to the left end and the smallest remaining number to the right end. What is Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1",
        expression:
          "Words: {Tank, Sweet, Ignite, Brush, Kite} -> first = Brush | Numbers: {15, 35, 39, 26, 49} -> smallest = 15",
        result: "Brush Tank 35 Sweet 39 26 Ignite Kite 49 15",
        explanation: "Brush to left; 15 to right.",
      },
      {
        id: 2,
        operation: "Step 2",
        expression:
          "Remaining words: {Tank, Sweet, Ignite, Kite} -> first = Ignite | Remaining numbers: {35, 39, 26, 49} -> smallest = 26",
        result: "Brush Ignite Tank 35 Sweet 39 Kite 49 26 15",
        explanation: "Ignite placed after Brush; 26 placed before 15.",
      },
      {
        id: 3,
        operation: "Step 3",
        expression:
          "Remaining words: {Tank, Sweet, Kite} -> first = Kite | Remaining numbers: {35, 39, 49} -> smallest = 35",
        result: "Brush Ignite Kite Tank Sweet 39 49 35 26 15",
        explanation: "Kite placed after Ignite; 35 placed before 26.",
      },
    ],
    answer: "Brush Ignite Kite Tank Sweet 39 49 35 26 15",
    difficulty: "medium",
  },
  {
    id: "io-p12",
    topic: "input-output",
    title: "IBPS Clerk 2022: Reverse and Sort Machine",
    question:
      "Input: 15 22 8 31 19. Rule: Step 1 reverses the entire sequence. Step 2 sorts the first 3 elements ascending. Step 3 sorts the last 3 elements descending. What is the output at Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Reverse entire sequence",
        expression: "15 22 8 31 19 -> 19 31 8 22 15",
        result: "19 31 8 22 15",
        explanation: "The entire sequence is reversed.",
      },
      {
        id: 2,
        operation: "Step 2: Sort first 3 ascending",
        expression:
          "First 3: {19, 31, 8} -> sorted: 8 19 31 | Last 2 unchanged: 22 15",
        result: "8 19 31 22 15",
        explanation: "First three elements sorted ascending.",
      },
      {
        id: 3,
        operation: "Step 3: Sort last 3 descending",
        expression:
          "First 2 unchanged: 8 19 | Last 3: {31, 22, 15} -> sorted descending: 31 22 15",
        result: "8 19 31 22 15",
        explanation:
          "Last three already in descending order; no change.",
      },
    ],
    answer: "8 19 31 22 15",
    difficulty: "medium",
  },
  {
    id: "io-p13",
    topic: "input-output",
    title: "IBPS PO 2023: Word Reversal + Number Increment Machine",
    question:
      "Input: CAT 3 DOG 7 EGG 2. Rule: each step reverses the next unreversed word and adds 1 to the next un-incremented number (left to right). What is the output at Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1",
        expression: "CAT -> TAC | 3 -> 4",
        result: "TAC 4 DOG 7 EGG 2",
        explanation: "First word reversed; first number incremented.",
      },
      {
        id: 2,
        operation: "Step 2",
        expression: "DOG -> GOD | 7 -> 8",
        result: "TAC 4 GOD 8 EGG 2",
        explanation: "Second word reversed; second number incremented.",
      },
      {
        id: 3,
        operation: "Step 3",
        expression: "EGG -> GGE | 2 -> 3",
        result: "TAC 4 GOD 8 GGE 3",
        explanation:
          "Third word reversed; third number incremented. All elements processed.",
      },
    ],
    answer: "TAC 4 GOD 8 GGE 3",
    difficulty: "medium",
  },
  {
    id: "io-p14",
    topic: "input-output",
    title: "SBI Clerk 2023: Swap-and-Shift Machine",
    question:
      "Input: pen 5 key 3 hat 8. Rule: each step swaps the first and last elements, then right-shifts the inner elements by one (last inner wraps to first inner). What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Swap first and last",
        expression: "pen 5 key 3 hat 8 -> swap pen <-> 8",
        result: "8 5 key 3 hat pen",
        explanation: "First element (pen) and last element (8) are swapped.",
      },
      {
        id: 2,
        operation: "Step 1: Right-shift inner elements",
        expression:
          "Inner: [5, key, 3, hat] -> right shift -> [hat, 5, key, 3]",
        result: "8 hat 5 key 3 pen",
        explanation: "Inner elements shift right; hat wraps to first inner.",
      },
      {
        id: 3,
        operation: "Step 2: Swap first and last",
        expression: "8 hat 5 key 3 pen -> swap 8 <-> pen",
        result: "pen hat 5 key 3 8",
        explanation: "First (8) and last (pen) swapped again.",
      },
      {
        id: 4,
        operation: "Step 2: Right-shift inner elements",
        expression:
          "Inner: [hat, 5, key, 3] -> right shift -> [3, hat, 5, key]",
        result: "pen 3 hat 5 key 8",
        explanation: "Inner elements shift right; 3 wraps to first inner.",
      },
    ],
    answer: "pen 3 hat 5 key 8",
    difficulty: "medium",
  },
  {
    id: "io-p15",
    topic: "input-output",
    title: "IBPS PO Prelims 2024: Full Arrangement — Step Count",
    question:
      "Input: jar 14 fox 27 eel 9 dog 31. Rule: each step simultaneously places the alphabetically first remaining word at the left end and the largest remaining number at the right end. How many steps to complete?",
    steps: [
      {
        id: 1,
        operation: "Step 1",
        expression:
          "First word = dog | Largest number = 31",
        result: "dog jar 14 fox 27 eel 9 31",
        explanation: "dog to left; 31 to right.",
      },
      {
        id: 2,
        operation: "Step 2",
        expression:
          "Remaining words: {jar, fox, eel} -> first = eel | Remaining numbers: {14, 27, 9} -> largest = 27",
        result: "dog eel jar 14 fox 9 27 31",
        explanation: "eel placed after dog; 27 placed before 31.",
      },
      {
        id: 3,
        operation: "Step 3",
        expression:
          "Remaining: {jar, fox} -> first = fox | {14, 9} -> largest = 14",
        result: "dog eel fox jar 9 14 27 31",
        explanation: "fox after eel; 14 before 27.",
      },
      {
        id: 4,
        operation: "Step 4",
        expression: "Remaining: jar and 9 -> already in correct positions",
        result: "dog eel fox jar 9 14 27 31",
        explanation:
          "4 words and 4 numbers require 4 steps to complete.",
      },
    ],
    answer: "4 steps. Final: dog eel fox jar 9 14 27 31",
    difficulty: "medium",
  },
  {
    id: "io-p16",
    topic: "input-output",
    title: "SSC CGL 2024: Alternate Step — Odd Ascending, Even Descending",
    question:
      "Input: 12 45 23 67 34. Rule: Odd-numbered steps sort the smallest unsorted number to the left. Even-numbered steps sort the largest unsorted number to the right. What is Step 4?",
    steps: [
      {
        id: 1,
        operation: "Step 1 (odd -> smallest to left)",
        expression: "From {12, 45, 23, 67, 34}: smallest = 12 (already at pos 1)",
        result: "12 45 23 67 34",
        explanation: "12 is already at the left; no movement.",
      },
      {
        id: 2,
        operation: "Step 2 (even -> largest to right)",
        expression: "From unsorted {45, 23, 67, 34}: largest = 67",
        result: "12 45 23 34 67",
        explanation: "67 is moved to the right end.",
      },
      {
        id: 3,
        operation: "Step 3 (odd -> smallest to left)",
        expression: "From unsorted {45, 23, 34}: smallest = 23",
        result: "12 23 45 34 67",
        explanation: "23 is placed in position 2.",
      },
      {
        id: 4,
        operation: "Step 4 (even -> largest to right)",
        expression: "From unsorted {45, 34}: largest = 45",
        result: "12 23 34 45 67",
        explanation: "45 is placed before 67. Arrangement complete.",
      },
    ],
    answer: "12 23 34 45 67",
    difficulty: "medium",
  },
  {
    id: "io-p17",
    topic: "input-output",
    title: "IBPS PO 2022: Digit Sum Transformation Machine",
    question:
      "Input: 85 47 63 29 14. Rule: Step 1 replaces each number with its digit sum. Step 2 sorts the results in ascending order. What is the output at Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Calculate digit sums",
        expression:
          "85: 8+5=13 | 47: 4+7=11 | 63: 6+3=9 | 29: 2+9=11 | 14: 1+4=5",
        result: "13 11 9 11 5",
        explanation: "Each number is replaced by the sum of its digits.",
      },
      {
        id: 2,
        operation: "Step 2: Sort ascending",
        expression: "{13, 11, 9, 11, 5} -> sorted: 5 9 11 11 13",
        result: "5 9 11 11 13",
        explanation: "Numbers are arranged from smallest to largest.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output",
        result: "5 9 11 11 13",
        explanation:
          "The digit sums sorted in ascending order.",
      },
    ],
    answer: "5 9 11 11 13",
    difficulty: "medium",
  },
  {
    id: "io-p18",
    topic: "input-output",
    title: "SBI PO 2023: Digit Reversal + Descending Sort",
    question:
      "Input: 52 36 14 89 47 23. Rule: Step 1 reverses the digits of each number. Step 2 sorts the reversed numbers in descending order. What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Reverse digits",
        expression:
          "52->25 | 36->63 | 14->41 | 89->98 | 47->74 | 23->32",
        result: "25 63 41 98 74 32",
        explanation: "Each number has its digits reversed.",
      },
      {
        id: 2,
        operation: "Step 2: Sort descending",
        expression:
          "{25, 63, 41, 98, 74, 32} -> sorted descending: 98 74 63 41 32 25",
        result: "98 74 63 41 32 25",
        explanation: "Reversed numbers arranged from largest to smallest.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output",
        result: "98 74 63 41 32 25",
        explanation:
          "After digit reversal and descending sort, the output is 98 74 63 41 32 25.",
      },
    ],
    answer: "98 74 63 41 32 25",
    difficulty: "medium",
  },
  {
    id: "io-p19",
    topic: "input-output",
    title: "IBPS Clerk 2023: Conditional Swap Machine",
    question:
      "Input: 8 3 7 2 5 1. Rule: each step compares pairs at positions (1,2), (3,4), (5,6) and swaps each pair if the left element is greater. What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Compare and swap pairs",
        expression:
          "(8,3)->swap->3,8 | (7,2)->swap->2,7 | (5,1)->swap->1,5",
        result: "3 8 2 7 1 5",
        explanation:
          "All three pairs are out of order and get swapped.",
      },
      {
        id: 2,
        operation: "Step 2: Compare and swap pairs again",
        expression:
          "(3,8)->ok | (2,7)->ok | (1,5)->ok",
        result: "3 8 2 7 1 5",
        explanation:
          "No pairs are out of order in this step; no swaps needed.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output is the same as Step 1",
        result: "3 8 2 7 1 5",
        explanation:
          "After two passes of pairwise comparison, the output stabilises.",
      },
    ],
    answer: "3 8 2 7 1 5",
    difficulty: "medium",
  },
  {
    id: "io-p20",
    topic: "input-output",
    title: "SSC CGL 2023: Mixed Word-Number Machine with Subtraction",
    question:
      "Input: pen 45 cap 12 lid 28. Rule: each step moves the alphabetically first remaining word to the left and subtracts 5 from the largest remaining number before placing it at the right. What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1",
        expression:
          "First word = cap | Largest number = 45 -> 45-5 = 40",
        result: "cap pen 12 lid 28 40",
        explanation:
          "cap moves to the left; 45 is transformed to 40 and placed at the right.",
      },
      {
        id: 2,
        operation: "Step 2",
        expression:
          "Remaining words: {pen, lid} -> first = lid | Remaining numbers: {12, 28} -> largest = 28 -> 28-5 = 23",
        result: "cap lid pen 12 23 40",
        explanation:
          "lid placed after cap; 28 transformed to 23 and placed before 40.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output",
        result: "cap lid pen 12 23 40",
        explanation:
          "Two words sorted left, two transformed numbers sorted right.",
      },
    ],
    answer: "cap lid pen 12 23 40",
    difficulty: "medium",
  },

  // ── Hard (p21–p30): IBPS PO, SBI PO, UPSC CSAT level ─────────────
  {
    id: "io-p21",
    topic: "input-output",
    title: "IBPS PO Mains 2023: Complex 5-Word 5-Number Dual Sort",
    question:
      "Input: pen 5 cap 12 lid 8 box 3 tag 10. Rule: each step moves the alphabetically first remaining word to the left, moves the largest remaining number to the right, and reverses the remaining middle portion. What is Step 1?",
    steps: [
      {
        id: 1,
        operation: "Identify the alphabetically first word and largest number",
        expression:
          "Words: {pen, cap, lid, box, tag} -> first = box | Numbers: {5, 12, 8, 3, 10} -> largest = 12",
        result: "box goes left; 12 goes right",
        explanation: "box is alphabetically first; 12 is the largest number.",
      },
      {
        id: 2,
        operation: "Remove box and 12, reverse the middle",
        expression:
          "After removing box and 12: pen 5 cap lid 8 3 tag 10 -> reversed: 10 tag 3 8 lid cap 5 pen",
        result: "Middle reversed",
        explanation: "The 8 remaining elements are reversed in order.",
      },
      {
        id: 3,
        operation: "Construct the Step 1 output",
        expression: "box + [10 tag 3 8 lid cap 5 pen] + 12",
        result: "box 10 tag 3 8 lid cap 5 pen 12",
        explanation:
          "box at left, reversed middle, 12 at right.",
      },
    ],
    answer: "box 10 tag 3 8 lid cap 5 pen 12",
    difficulty: "hard",
  },
  {
    id: "io-p22",
    topic: "input-output",
    title: "SBI PO 2023: Squaring Machine",
    question:
      "Input: 7 15 3 22 11 9. Rule: each step picks the smallest remaining number, squares it, and places the squared value at the left end. What is Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1",
        expression:
          "From {7, 15, 3, 22, 11, 9}: smallest = 3 -> 3^2 = 9",
        result: "9 7 15 22 11 9",
        explanation:
          "3 removed, squared to 9, placed at left. Note: now two 9s exist.",
      },
      {
        id: 2,
        operation: "Step 2",
        expression:
          "From {7, 15, 22, 11, 9}: smallest = 7 -> 7^2 = 49",
        result: "9 49 15 22 11 9",
        explanation: "7 removed, squared to 49, placed after 9.",
      },
      {
        id: 3,
        operation: "Step 3",
        expression:
          "From {15, 22, 11, 9}: smallest = 9 -> 9^2 = 81",
        result: "9 49 81 15 22 11",
        explanation: "9 removed, squared to 81, placed after 49.",
      },
    ],
    answer: "9 49 81 15 22 11",
    difficulty: "hard",
  },
  {
    id: "io-p23",
    topic: "input-output",
    title: "IBPS PO Mains 2024: Symbol-Letter-Number Shift Machine",
    question:
      "Input: 9 ? H Q $ Y 4 1 E N. Rule: odd-numbered steps shift the first element to the right end; even-numbered steps shift the last element to the left end. What is Step 4?",
    steps: [
      {
        id: 1,
        operation: "Step 1 (odd -> first to right end)",
        expression: "9 ? H Q $ Y 4 1 E N -> move 9 to right end",
        result: "? H Q $ Y 4 1 E N 9",
        explanation: "9 is removed from front and placed at the end.",
      },
      {
        id: 2,
        operation: "Step 2 (even -> last to left end)",
        expression: "? H Q $ Y 4 1 E N 9 -> move 9 to left end",
        result: "9 ? H Q $ Y 4 1 E N",
        explanation: "9 is moved from right back to left. Same as input.",
      },
      {
        id: 3,
        operation: "Step 3 (odd -> first to right end)",
        expression: "9 ? H Q $ Y 4 1 E N -> move 9 to right end",
        result: "? H Q $ Y 4 1 E N 9",
        explanation: "Pattern repeats: same as Step 1.",
      },
      {
        id: 4,
        operation: "Step 4 (even -> last to left end)",
        expression: "? H Q $ Y 4 1 E N 9 -> move 9 to left end",
        result: "9 ? H Q $ Y 4 1 E N",
        explanation:
          "Pattern repeats: same as original input. The machine oscillates.",
      },
    ],
    answer: "9 ? H Q $ Y 4 1 E N",
    difficulty: "hard",
  },
  {
    id: "io-p24",
    topic: "input-output",
    title: "SBI PO 2024: Division + Sort Machine",
    question:
      "Input: 243 357 876 1296 1359. Rule: Step 1 divides each number by 3 and adds 1. Step 2 sorts the results in ascending order. What is the final output?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Divide by 3 and add 1",
        expression:
          "243/3+1=82 | 357/3+1=120 | 876/3+1=293 | 1296/3+1=433 | 1359/3+1=454",
        result: "82 120 293 433 454",
        explanation:
          "Each number is divided by 3, then 1 is added to the quotient.",
      },
      {
        id: 2,
        operation: "Step 2: Sort ascending",
        expression:
          "{82, 120, 293, 433, 454} -> already in ascending order",
        result: "82 120 293 433 454",
        explanation:
          "The results happen to already be in ascending order after the transformation.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output",
        result: "82 120 293 433 454",
        explanation:
          "The division-and-add-one transformation preserves the original relative order here.",
      },
    ],
    answer: "82 120 293 433 454",
    difficulty: "hard",
  },
  {
    id: "io-p25",
    topic: "input-output",
    title: "IBPS PO 2023: Three-Rule Multi-Step Machine",
    question:
      "Input: 12 15 18 21 24. Rule: Step 1 subtracts 9 from each number. Step 2 squares each result. Step 3 sorts by digital root ascending. What is Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Subtract 9",
        expression:
          "12-9=3 | 15-9=6 | 18-9=9 | 21-9=12 | 24-9=15",
        result: "3 6 9 12 15",
        explanation: "Each number reduced by 9.",
      },
      {
        id: 2,
        operation: "Step 2: Square each",
        expression: "3^2=9 | 6^2=36 | 9^2=81 | 12^2=144 | 15^2=225",
        result: "9 36 81 144 225",
        explanation: "Each number is squared.",
      },
      {
        id: 3,
        operation: "Step 3: Calculate digital roots and sort",
        expression:
          "9: root=9 | 36: 3+6=9 | 81: 8+1=9 | 144: 1+4+4=9 | 225: 2+2+5=9",
        result: "All digital roots are 9 — order unchanged",
        explanation:
          "All five numbers have digital root 9 (since all original numbers were multiples of 3). Order stays as is.",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "All roots equal -> original order preserved",
        result: "9 36 81 144 225",
        explanation:
          "When digital roots are identical, the relative order is maintained.",
      },
    ],
    answer: "9 36 81 144 225",
    difficulty: "hard",
  },
  {
    id: "io-p26",
    topic: "input-output",
    title: "IBPS PO Mains 2022: Word + Number Arrangement — 5 Steps",
    question:
      "Input: yellow jovial 48 cross truth 20 connect. Rule: each step moves the alphabetically first remaining word to the left and the smallest remaining number to the right. What is Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1",
        expression:
          "Words: {yellow, jovial, cross, truth, connect} -> first = connect | Numbers: {48, 20} -> smallest = 20",
        result: "connect yellow jovial 48 cross truth 20",
        explanation: "connect to left; 20 to right.",
      },
      {
        id: 2,
        operation: "Step 2",
        expression:
          "Remaining words: {yellow, jovial, cross, truth} -> first = cross | Remaining numbers: {48} -> smallest = 48",
        result: "connect cross yellow jovial truth 48 20",
        explanation: "cross placed after connect; 48 placed before 20.",
      },
      {
        id: 3,
        operation: "Step 3",
        expression:
          "Remaining words: {yellow, jovial, truth} -> first = jovial | No more numbers",
        result: "connect cross jovial yellow truth 48 20",
        explanation:
          "jovial placed after cross. All numbers already sorted. Remaining words: yellow, truth still unsorted.",
      },
    ],
    answer: "connect cross jovial yellow truth 48 20",
    difficulty: "hard",
  },
  {
    id: "io-p27",
    topic: "input-output",
    title: "SBI PO Mains 2023: Alternating Word-Number Placement",
    question:
      "Input: star 17 moon 42 ring 8 dawn 35. Rule: Step 1 places the shortest word at position 1 and the largest number at position 8 (last). Step 2 places the longest remaining word at position 2 and the smallest remaining number at position 7. Steps alternate between these two rules. What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Shortest word to pos 1, largest number to last",
        expression:
          "Words: star(4), moon(4), ring(4), dawn(4) -> tie, alphabetically first = dawn | Numbers: {17, 42, 8, 35} -> largest = 42",
        result: "dawn star 17 moon ring 8 35 42",
        explanation:
          "dawn (shortest, alphabetically first tie-breaker) to position 1; 42 to last position.",
      },
      {
        id: 2,
        operation: "Step 2: Longest remaining word to pos 2, smallest remaining number to pos 7",
        expression:
          "Remaining words: {star, moon, ring} -> all length 4 -> alphabetically last = star | Remaining numbers: {17, 8, 35} -> smallest = 8",
        result: "dawn star 17 moon ring 35 8 42",
        explanation:
          "star placed at position 2; 8 placed at position 7 (second from right).",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output",
        result: "dawn star 17 moon ring 35 8 42",
        explanation:
          "After two steps: two words fixed on left, two numbers fixed on right.",
      },
    ],
    answer: "dawn star 17 moon ring 35 8 42",
    difficulty: "hard",
  },
  {
    id: "io-p28",
    topic: "input-output",
    title: "UPSC CSAT 2023: Even-Odd Transformation Machine",
    question:
      "Input: 13 26 7 44 19 38. Rule: Step 1 multiplies even numbers by 2 and odd numbers by 3. Step 2 sorts all results in descending order. What is Step 2?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Apply even/odd transformation",
        expression:
          "13(odd)*3=39 | 26(even)*2=52 | 7(odd)*3=21 | 44(even)*2=88 | 19(odd)*3=57 | 38(even)*2=76",
        result: "39 52 21 88 57 76",
        explanation:
          "Even numbers doubled; odd numbers tripled.",
      },
      {
        id: 2,
        operation: "Step 2: Sort descending",
        expression:
          "{39, 52, 21, 88, 57, 76} -> sorted: 88 76 57 52 39 21",
        result: "88 76 57 52 39 21",
        explanation: "All six transformed numbers in descending order.",
      },
      {
        id: 3,
        operation: "Final answer",
        expression: "Step 2 output",
        result: "88 76 57 52 39 21",
        explanation:
          "The even-odd transformation followed by descending sort gives 88 76 57 52 39 21.",
      },
    ],
    answer: "88 76 57 52 39 21",
    difficulty: "hard",
  },
  {
    id: "io-p29",
    topic: "input-output",
    title: "IBPS PO Mains 2024: Position-Based Element Access",
    question:
      "Input: Tank 15 35 Sweet 39 26 Ignite Brush Assumption Kite 49 80 60. After full arrangement (words alphabetically left, numbers descending right), what element is 5th from the left?",
    steps: [
      {
        id: 1,
        operation: "Sort words alphabetically",
        expression:
          "Words: {Tank, Sweet, Ignite, Brush, Assumption, Kite} -> Assumption Brush Ignite Kite Sweet Tank",
        result: "6 words sorted",
        explanation: "A < B < I < K < S < T alphabetically.",
      },
      {
        id: 2,
        operation: "Sort numbers descending",
        expression:
          "Numbers: {15, 35, 39, 26, 49, 80, 60} -> 80 60 49 39 35 26 15",
        result: "7 numbers sorted descending",
        explanation: "Numbers from largest to smallest.",
      },
      {
        id: 3,
        operation: "Construct the final arrangement",
        expression:
          "Assumption Brush Ignite Kite Sweet Tank 80 60 49 39 35 26 15",
        result: "13-element final arrangement",
        explanation:
          "Words on the left (alphabetical), numbers on the right (descending).",
      },
      {
        id: 4,
        operation: "Find the 5th element from the left",
        expression:
          "1.Assumption, 2.Brush, 3.Ignite, 4.Kite, 5.Sweet",
        result: "Sweet",
        explanation:
          "The 5th element from the left in the final arrangement is Sweet.",
      },
    ],
    answer: "Sweet",
    difficulty: "hard",
  },
  {
    id: "io-p30",
    topic: "input-output",
    title: "SBI PO 2024: Cumulative Sum Machine",
    question:
      "Input: 4 7 2 5 3. Rule: Step 1 arranges numbers in ascending order. Step 2 replaces each number with the cumulative sum up to that position. Step 3 finds the difference between consecutive elements. What is Step 3?",
    steps: [
      {
        id: 1,
        operation: "Step 1: Sort ascending",
        expression: "{4, 7, 2, 5, 3} -> 2 3 4 5 7",
        result: "2 3 4 5 7",
        explanation: "Numbers arranged from smallest to largest.",
      },
      {
        id: 2,
        operation: "Step 2: Cumulative sums",
        expression:
          "pos1: 2 | pos2: 2+3=5 | pos3: 5+4=9 | pos4: 9+5=14 | pos5: 14+7=21",
        result: "2 5 9 14 21",
        explanation:
          "Each position holds the running total up to that point.",
      },
      {
        id: 3,
        operation: "Step 3: Consecutive differences",
        expression:
          "5-2=3 | 9-5=4 | 14-9=5 | 21-14=7",
        result: "3 4 5 7",
        explanation:
          "Differences between consecutive cumulative sums. Note: this has 4 elements (one fewer than Step 2).",
      },
      {
        id: 4,
        operation: "Final answer",
        expression: "Step 3 output = consecutive differences of cumulative sums",
        result: "3 4 5 7",
        explanation:
          "The consecutive differences recover the original sorted sequence minus the first element.",
      },
    ],
    answer: "3 4 5 7",
    difficulty: "hard",
  },
]
