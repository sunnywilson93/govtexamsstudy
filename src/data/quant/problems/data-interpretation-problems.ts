import type { MathProblem } from "@/types/quant"

export const dataInterpretationProblems: MathProblem[] = [
  {
    id: "di-01",
    topic: "data-interpretation",
    title: "Percentage share from a table",
    difficulty: "easy",
    question:
      "A company's quarterly sales (in ₹ lakhs) are: Q1 = 120, Q2 = 150, Q3 = 180, Q4 = 150. What percentage of annual sales did Q3 contribute?",
    answer: "30 %",
    steps: [
      {
        id: 1,
        operation: "Find annual total",
        expression: "Total = 120 + 150 + 180 + 150",
        result: "600",
        explanation: "Sum all four quarters to get the annual total.",
        variables: { Q1: 120, Q2: 150, Q3: 180, Q4: 150, total: 600 },
      },
      {
        id: 2,
        operation: "Calculate Q3 percentage share",
        expression: "% Share = (Q3 / Total) × 100 = (180 / 600) × 100",
        result: "30 %",
        explanation: "Divide Q3 sales by the annual total and multiply by 100.",
        variables: { Q3: 180, total: 600, share: 30 },
      },
    ],
  },
  {
    id: "di-02",
    topic: "data-interpretation",
    title: "Ratio between two bars",
    difficulty: "easy",
    question:
      "A bar chart shows the number of students enrolled in two courses: Science = 840, Commerce = 560. Find the ratio of Science to Commerce enrolment.",
    answer: "3 : 2",
    steps: [
      {
        id: 1,
        operation: "Set up the ratio",
        expression: "Ratio = Science : Commerce = 840 : 560",
        result: "840 : 560",
        explanation: "Read both bar heights from the same scale and write them as a ratio.",
        variables: { science: 840, commerce: 560 },
      },
      {
        id: 2,
        operation: "Simplify by GCD (280)",
        expression: "840 / 280 : 560 / 280",
        result: "3 : 2",
        explanation: "Divide both terms by their GCD to get the simplest form.",
        variables: { gcd: 280, simplifiedScience: 3, simplifiedCommerce: 2 },
      },
    ],
  },
  {
    id: "di-03",
    topic: "data-interpretation",
    title: "Percentage change from a line graph",
    difficulty: "medium",
    question:
      "A line graph records a factory's output (in tonnes): 2020 = 4,000; 2021 = 4,800; 2022 = 4,200. Find the percentage change in output from 2021 to 2022.",
    answer: "−12.5 %",
    steps: [
      {
        id: 1,
        operation: "Identify new and old values",
        expression: "Old (2021) = 4,800 ; New (2022) = 4,200",
        result: "New < Old → decrease",
        explanation: "Since 2022 output is less than 2021, the change will be negative.",
        variables: { old: 4800, new: 4200 },
      },
      {
        id: 2,
        operation: "Calculate absolute change",
        expression: "Change = 4,200 − 4,800",
        result: "−600",
        explanation: "The output fell by 600 tonnes.",
        variables: { change: -600 },
      },
      {
        id: 3,
        operation: "Calculate percentage change",
        expression: "% Change = (−600 / 4,800) × 100",
        result: "−12.5 %",
        explanation: "Divide the change by the base year (2021) value and multiply by 100.",
        variables: { change: -600, base: 4800, percentChange: -12.5 },
      },
    ],
  },
  {
    id: "di-04",
    topic: "data-interpretation",
    title: "Total combined value across categories",
    difficulty: "medium",
    question:
      "A pie chart shows a state's budget (total = ₹12,000 crore) split by sector: Education 90°, Health 60°, Infrastructure 120°, Others 90°. Find the combined budget for Education and Health.",
    answer: "₹5,000 crore",
    steps: [
      {
        id: 1,
        operation: "Find Education budget",
        expression: "Education = (90 / 360) × 12,000",
        result: "₹3,000 crore",
        explanation: "Use Sector Value = (Angle / 360) × Total.",
        variables: { angle: 90, total: 12000, education: 3000 },
      },
      {
        id: 2,
        operation: "Find Health budget",
        expression: "Health = (60 / 360) × 12,000",
        result: "₹2,000 crore",
        explanation: "Apply the same formula for the Health sector angle.",
        variables: { angle: 60, total: 12000, health: 2000 },
      },
      {
        id: 3,
        operation: "Combined total",
        expression: "3,000 + 2,000",
        result: "₹5,000 crore",
        explanation: "Add the two sector values to get the combined budget.",
        variables: { education: 3000, health: 2000, combined: 5000 },
      },
    ],
  },
  {
    id: "di-05",
    topic: "data-interpretation",
    title: "Rank comparison — highest sales month",
    difficulty: "medium",
    question:
      "A table shows monthly sales (units): Jan = 3,200; Feb = 2,850; Mar = 3,750; Apr = 3,600; May = 3,750; Jun = 3,100. Which month recorded the second-highest sales?",
    answer: "April (3,600 units)",
    steps: [
      {
        id: 1,
        operation: "Identify the highest value",
        expression: "Max = max(3200, 2850, 3750, 3600, 3750, 3100)",
        result: "3,750 (Mar and May tied)",
        explanation: "Scan all values to find the maximum; both March and May share the top rank.",
        variables: { max: 3750, sharedBy: "Mar, May" },
      },
      {
        id: 2,
        operation: "Identify the next distinct value",
        expression: "Second-highest = max of remaining values after removing 3,750 entries",
        result: "3,600 (April)",
        explanation:
          "After excluding the joint top value (3,750), the next largest reading is April's 3,600.",
        variables: { secondHighest: 3600, month: "April" },
      },
    ],
  },
]
