import type { QuantConcept } from "@/types/quant"

export const calendarConcept: QuantConcept = {
  topic: "calendar",
  title: "Calendar",
  description:
    "Calendar problems involve finding the day of the week for a given date, identifying leap years, or determining when two years share the same calendar. The core technique is counting 'odd days' — the extra days beyond complete weeks in a given period.",
  keyIdea:
    "Count odd days for the entire period, take mod 7, map to day name. Memorise odd days for 100/200/300/400 year periods — they're always the same.",
  formulas: [
    {
      name: "Ordinary year odd days",
      formula: "365 days = 52 weeks + 1 odd day",
      whenToUse: "Counting extra days in an ordinary year",
    },
    {
      name: "Leap year odd days",
      formula: "366 days = 52 weeks + 2 odd days",
      whenToUse: "Counting extra days in a leap year",
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
