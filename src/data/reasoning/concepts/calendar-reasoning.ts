import type { ReasoningConcept } from "@/types/reasoning"

export const calendarReasoningConcept: ReasoningConcept = {
  topic: "calendar-reasoning",
  title: "Calendar Reasoning",
  description:
    "SSC CGL and RRB NTPC include 1-2 calendar questions that ask you to find the day of the week for a given date. You solve them by counting odd days — the remainder when total days divide by 7 — from a known reference point. Memorizing the leap year rules and century odd-day shortcuts turns these into 30-second solves. The odd days method works for any date in history or the future.",
  keyIdea:
    "Count the total number of odd days (remainder when total days are divided by 7) from a reference point. 0 = Sunday, 1 = Monday, ... 6 = Saturday.",
  rules: [
    {
      name: "Odd Days in a Year",
      rule: "Ordinary year = 1 odd day (365 = 52 weeks + 1 day). Leap year = 2 odd days (366 = 52 weeks + 2 days).",
      whenToUse: "Apply this to calculate how many days the weekday shifts when you move across one or more full years.",
    },
    {
      name: "Leap Year Rule",
      rule: "Divisible by 4 → leap. Century years: divisible by 400 → leap, else not. So 1900 is NOT a leap year, but 2000 IS.",
      whenToUse: "Check this rule first to decide whether a year contributes 1 or 2 odd days to your count.",
    },
    {
      name: "Century Odd Days",
      rule: "100 years = 5 odd days. 200 years = 3 odd days. 300 years = 1 odd day. 400 years = 0 odd days.",
      whenToUse:
        "Shortcut for quickly computing odd days across centuries.",
    },
    {
      name: "Month Odd Days",
      rule: "Jan=3, Feb=0(or 1 in leap), Mar=3, Apr=2, May=3, Jun=2, Jul=3, Aug=3, Sep=2, Oct=3, Nov=2, Dec=3",
      whenToUse:
        "When computing the day for a specific date within a year.",
    },
    {
      name: "Day Code",
      rule: "0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat",
      whenToUse:
        "Final step — convert total odd days (mod 7) to the day name.",
    },
  ],
  examTags: ["SSC CGL", "SSC CHSL", "RRB NTPC", "SSC MTS"],
  examRelevance:
    "Calendar questions appear in 1-2 questions in SSC CGL and RRB NTPC. Once the odd days table is memorized, these are quick 30-second solves.",
}
