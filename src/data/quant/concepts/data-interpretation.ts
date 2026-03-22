import type { QuantConcept } from "@/types/quant"

export const dataInterpretationConcept: QuantConcept = {
  topic: "data-interpretation",
  title: "Data Interpretation",
  description:
    "Read and analyse data from tables, bar charts, pie charts, line graphs, and caselets, then apply percentage, ratio, or change formulas. DI is the single highest-weight section in IBPS PO and SBI PO (15\\u201320 marks) and carries similar weight in SSC CGL Tier II. Speed on approximation and ratio shortcuts directly determines the score.",
  keyIdea:
    "Identify the 'total' and the 'unit' of the data before touching the options — 90 % of DI errors come from reading the wrong row, column, or scale.",
  formulas: [
    {
      name: "Percentage Share (Table / Bar DI)",
      formula: "Percentage = (Part / Whole) × 100",
      whenToUse:
        "Identify the correct total from column/row headers first, then divide the part by that total to get the share.",
    },
    {
      name: "Bar Chart Visual Ratio",
      formula: "Ratio = Height of Bar A : Height of Bar B  (no absolute values needed)",
      whenToUse:
        "Compare bar heights directly for ratio questions \\u2014 skip absolute-value computation when both bars share the same scale.",
    },
    {
      name: "Pie Chart Sector Value",
      formula: "Sector Value = (Angle / 360) × Total  |  Percentage = Angle / 3.6",
      whenToUse:
        "Convert a pie sector's angle to an absolute value or a percentage; compute the total once and reuse it for every question in the set.",
    },
    {
      name: "Percentage Change (Line Graph DI)",
      formula: "% Change = ((New − Old) / Old) × 100",
      whenToUse:
        "For trend or growth-rate questions on line graphs; check the sign first — a negative result means decrease, which immediately eliminates any option greater than the original value.",
    },
    {
      name: "Caselet — Extract & Label",
      formula: "Convert text → table: rows = entities, columns = attributes; mark given vs. computed values",
      whenToUse:
        "Before solving any paragraph-based DI set; writing out the extracted numbers as a mini-table prevents misreads and saves time across all sub-questions.",
    },
  ],
  examTags: ["SSC CGL", "SSC CGL Tier 2", "IBPS PO", "SBI PO", "RRB NTPC", "UPSC CSAT"],
  examRelevance:
    "DI is the single highest-weightage section in banking (IBPS PO / SBI PO Prelims & Mains) and carries 15–20 marks in SSC CGL Tier 2. Speed on approximation and ratio shortcuts directly determines the score.",
}
