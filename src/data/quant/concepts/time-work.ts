import type { QuantConcept } from "@/types/quant"

export const timeWorkConcept: QuantConcept = {
  topic: "time-work",
  title: "Time & Work",
  description:
    "Time and Work problems measure how fast people or machines finish tasks by converting days into fractional rates that add together. Pipes and Cisterns use the same logic with positive fill rates and negative drain rates. Banking exams (IBPS PO, SBI PO) and SSC CGL test this topic every session, so mastering the LCM method to eliminate fractions gives you a decisive speed edge.",
  keyIdea:
    "Use the LCM method: assume total work = LCM of all given days. Each person's daily work becomes an integer, eliminating fractions entirely.",
  formulas: [
    {
      name: "Work Rate",
      formula: "One day's work of A = 1 / (number of days A takes alone)",
      whenToUse: "Convert each worker\\u2019s completion time into a daily rate before combining or comparing.",
    },
    {
      name: "Two people together",
      formula: "Time together = (A × B) / (A + B)",
      whenToUse: "Plug in both individual completion times to get the combined time when exactly two workers collaborate.",
    },
    {
      name: "Efficiency ratio",
      formula: "If A is k times efficient as B → A takes (1/k) the time of B",
      whenToUse: "When relative efficiency is given instead of actual days.",
    },
    {
      name: "M × D × H = Constant",
      formula: "M1 × D1 × H1 = M2 × D2 × H2",
      whenToUse: "When comparing two scenarios with different numbers of workers, days, or hours.",
    },
    {
      name: "Pipe fill / drain net rate",
      formula: "Net fill time = (F × D) / (D − F)  where F = fill time, D = drain time",
      whenToUse: "When one pipe fills and another drains simultaneously.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "IBPS PO", "IBPS Clerk", "SBI PO", "RRB NTPC"],
  examRelevance:
    "Time & Work appears in every banking exam (IBPS PO/Clerk, SBI PO) and SSC CGL. Pipes & Cisterns is a direct sub-type tested separately in harder papers.",
}
