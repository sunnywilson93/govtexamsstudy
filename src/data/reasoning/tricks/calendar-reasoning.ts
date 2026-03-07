import type { ReasoningTrick } from "@/types/reasoning"

export const calendarReasoningTricks: ReasoningTrick[] = [
  {
    id: "cal-t1",
    topic: "calendar-reasoning",
    type: "pattern-shortcut",
    title: "Century Odd Days Table",
    description:
      "Memorize: 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0 odd days. This repeats every 400 years.",
    formula: "400 years = 0 odd days (complete cycle)",
    example: {
      problem: "How many odd days in the first 1600 years?",
      solution: "1600 = 4 × 400. Each 400 years = 0 odd days. Total = 0 odd days.",
    },
    timeSaved: "30 sec/question",
  },
  {
    id: "cal-t2",
    topic: "calendar-reasoning",
    type: "pattern-shortcut",
    title: "Month Code Mnemonic",
    description:
      "Memorize month odd days: 033252 335231 (Jan-Dec). This avoids counting days for each month every time.",
    formula: "Jan=0+3, Feb=0+0, Mar=0+3, Apr=0+2, May=0+5, Jun=0+2, Jul=0+3, Aug=0+3, Sep=0+5, Oct=0+2, Nov=0+3, Dec=0+1 (cumulative odd days from start of year)",
    example: {
      problem: "What day was 15th March 2000?",
      solution:
        "2000: 0 odd days for 1600 yrs + 400 yrs later = 0. Jan(3) + Feb(1, leap) + 15 days = 19. 19 mod 7 = 5 = Wednesday.",
    },
    timeSaved: "20 sec/question",
  },
  {
    id: "cal-t3",
    topic: "calendar-reasoning",
    type: "elimination",
    title: "Same Calendar Year Shortcut",
    description:
      "Two years have the same calendar if the total odd days between them is 0 (i.e., a multiple of 7). Non-leap years repeat after 6 or 11 years; leap years repeat after 28 years.",
    example: {
      problem: "Which year will have the same calendar as 2023?",
      solution:
        "2023 is non-leap. Count odd days: 2024(2)+2025(1)+2026(1)+2027(1)+2028(2)+2029(1)+2030(1)+2031(1)+2032(2)+2033(1)+2034(1) = 14 = 0 mod 7. Same calendar in 2034.",
    },
  },
  {
    id: "cal-t4",
    topic: "calendar-reasoning",
    type: "elimination",
    title: "Leap Year Quick Check",
    description:
      "For century years, only check divisibility by 400. For non-century years, check divisibility by 4. This avoids the common trap of treating 1900 as a leap year.",
    example: {
      problem: "Is 2100 a leap year?",
      solution:
        "2100 is a century year. 2100 ÷ 400 = 5.25 (not exact). So 2100 is NOT a leap year.",
    },
    timeSaved: "10 sec/question",
  },
  {
    id: "cal-t5",
    topic: "calendar-reasoning",
    type: "pattern-shortcut",
    title: "Reference Day Anchor",
    description:
      "Memorize one anchor: 1st January 2000 = Saturday. Work forward or backward from this reference point for any date.",
    formula: "1 Jan 2000 = Saturday (day code 6)",
    example: {
      problem: "What day was 1st January 2001?",
      solution:
        "2000 is a leap year = 2 odd days. Saturday + 2 = Monday. So 1 Jan 2001 = Monday.",
    },
    timeSaved: "15 sec/question",
  },
]
