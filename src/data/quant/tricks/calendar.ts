import type { QuantTrick } from "@/types/quant"

export const calendarTricks: QuantTrick[] = [
  {
    id: "cal-trick-01",
    topic: "calendar",
    type: "mental-math",
    title: "Leap Year Quick Check",
    description:
      "Step 1: Is it a century year (ends in 00)? If yes, divisible by 400? If yes → leap. If not century: divisible by 4? → leap. 2024: not century, 2024÷4=506 → leap. 1900: century, 1900÷400≠integer → NOT leap.",
    example: {
      problem: "Is 2100 a leap year?",
      solution:
        "2100 ends in 00 → century year. 2100 ÷ 400 = 5.25 → NOT divisible by 400. NOT a leap year.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "cal-trick-02",
    topic: "calendar",
    type: "formula-shortcut",
    title: "Odd Days for Standard Periods",
    description:
      "Memorise: 1 ordinary year = 1 odd day; 1 leap year = 2 odd days; 100 yrs = 5 odd days; 200 yrs = 3 odd days; 300 yrs = 1 odd day; 400 yrs = 0 odd days. Sum these up for any period.",
    formula: "Total odd days = sum of each period's odd days; answer = total mod 7",
    example: {
      problem: "What day is 1 January 2001 if 1 January 2000 was Saturday?",
      solution: "2000 was a leap year → 2 odd days. Sat + 2 = Mon. 1 Jan 2001 was Monday.",
    },
    timeSaved: "30 seconds",
  },
  {
    id: "cal-trick-03",
    topic: "calendar",
    type: "mental-math",
    title: "Day Mapping Table",
    description:
      "Always use: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat. Write this at the top of your rough work. After computing odd days mod 7, directly read the day from this table.",
    example: {
      problem: "Odd day sum = 17. What day is it?",
      solution:
        "17 mod 7 = 3 (since 14 is nearest multiple of 7, 17−14=3). Day 3 = Wednesday.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "cal-trick-04",
    topic: "calendar",
    type: "formula-shortcut",
    title: "Doomsday Method Shortcut",
    description:
      "For the current year, know that certain 'anchor dates' always fall on the same day: 4/4, 6/6, 8/8, 10/10, 12/12, last day of Feb, 5/9, 9/5, 7/11, 11/7. In 2024 (leap), the doomsday is Thursday. Count from nearest anchor.",
    example: {
      problem: "What day is 15 August 2024?",
      solution: "8/8 falls on Thursday (doomsday 2024). 8 Aug = Thu. 15 Aug = Thu + 7 = Thursday.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "cal-trick-05",
    topic: "calendar",
    type: "formula-shortcut",
    title: "Calendar Repetition",
    description:
      "A year's calendar repeats after the same number of odd days accumulates to 7k. For non-leap years, the pattern is: same calendar after 6, 11, or 28 years depending on leap years in between.",
    example: {
      problem: "If 2019's calendar is same as which future year?",
      solution:
        "2019 (not leap): add years: 2019+6=2025 (with 2024 leap in between = 2+1+1+1+1+1=7 odd days). 2025 has same calendar as 2019.",
    },
    timeSaved: "20 seconds",
  },
]
