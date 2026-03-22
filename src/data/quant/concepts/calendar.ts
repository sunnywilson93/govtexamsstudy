import type { QuantConcept } from "@/types/quant"

export const calendarConcept: QuantConcept = {
  topic: "calendar",
  title: "Calendar",
  description:
    "Count odd days (extra days beyond complete weeks) to find the weekday of any date. Exams also test leap-year identification and same-calendar-year detection. SSC CGL, CHSL, and RRB NTPC carry 1\\u20132 calendar questions per paper \\u2014 fast to solve once you memorize century odd-day values.",
  keyIdea:
    "Count odd days for the entire period, take mod 7, map to day name. Memorise odd days for 100/200/300/400 year periods — they're always the same.",
  formulas: [
    {
      name: "Ordinary year odd days",
      formula: "365 days = 52 weeks + 1 odd day",
      whenToUse: "Add 1 odd day for every ordinary year when counting forward or backward from a known date",
    },
    {
      name: "Leap year odd days",
      formula: "366 days = 52 weeks + 2 odd days",
      whenToUse: "Add 2 odd days for every leap year in the range \\u2014 the extra February day produces the second odd day",
    },
    {
      name: "Century odd days",
      formula: "100 yrs=5, 200 yrs=3, 300 yrs=1, 400 yrs=0 odd days",
      whenToUse: "Pre-computed odd days for century multiples",
    },
    {
      name: "Day number mapping",
      formula: "0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat",
      whenToUse: "Converting odd day total to weekday",
    },
    {
      name: "Leap year rule",
      formula: "Divisible by 4 (not century) OR divisible by 400 (century)",
      whenToUse: "Determining if year is a leap year",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "IBPS PO", "SSC MTS"],
  examRelevance:
    "1–2 questions per exam. Most common: find day of week for a given date, identify leap year, or find which years have same calendar. Quick to solve with odd days method.",
}
