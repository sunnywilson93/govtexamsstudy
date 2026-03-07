import type { ReasoningProblem } from "@/types/reasoning"

export const calendarReasoningProblems: ReasoningProblem[] = [
  // ── Easy (p1–p10) ──────────────────────────────────────────────
  {
    id: "cal-p1",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Odd Days in a Year",
    question: "How many odd days are there in the year 2023?",
    steps: [
      {
        id: 1,
        operation: "Check if 2023 is a leap year",
        expression: "2023 / 4 = 505.75 (not exact)",
        result: "2023 is NOT a leap year",
        explanation:
          "A year divisible by 4 is a leap year (except century years, which must be divisible by 400). 2023 is not divisible by 4.",
      },
      {
        id: 2,
        operation: "Count odd days in an ordinary year",
        expression: "365 days = 52 weeks + 1 day",
        result: "1 odd day",
        explanation:
          "An ordinary year has 365 days. Dividing by 7 gives 52 complete weeks and 1 extra day, which is the odd day.",
      },
    ],
    answer: "1 odd day",
    difficulty: "easy",
  },
  {
    id: "cal-p2",
    topic: "calendar-reasoning",
    title: "SSC CGL 2021: Leap Year Identification",
    question:
      "Which of the following is a leap year: 1900, 2000, 2100, 2200?",
    steps: [
      {
        id: 1,
        operation: "Apply the century year rule",
        expression:
          "Century years (ending in 00) must be divisible by 400 to be leap years",
        result: "Apply the 400-divisibility test to each",
        explanation:
          "For non-century years, divisibility by 4 suffices. But century years require divisibility by 400.",
      },
      {
        id: 2,
        operation: "Test each year",
        expression:
          "1900/400 = 4.75, 2000/400 = 5, 2100/400 = 5.25, 2200/400 = 5.5",
        result: "Only 2000 is exactly divisible by 400",
        explanation:
          "1900, 2100, and 2200 are not leap years despite being divisible by 4. Only 2000 qualifies.",
      },
    ],
    answer: "2000",
    difficulty: "easy",
  },
  {
    id: "cal-p3",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Day After Given Days",
    question: "If today is Monday, what day will it be after 45 days?",
    steps: [
      {
        id: 1,
        operation: "Find odd days in 45",
        expression: "45 / 7 = 6 weeks + 3 days",
        result: "3 odd days",
        explanation:
          "Divide total days by 7. The remainder gives the number of odd days to count forward.",
      },
      {
        id: 2,
        operation: "Count forward from Monday",
        expression: "Monday + 3 = Thursday",
        result: "Thursday",
        explanation:
          "Mon -> Tue (1) -> Wed (2) -> Thu (3). After 45 days it will be Thursday.",
      },
    ],
    answer: "Thursday",
    difficulty: "easy",
  },
  {
    id: "cal-p4",
    topic: "calendar-reasoning",
    title: "RRB NTPC 2021: Day Before Given Days",
    question: "If today is Saturday, what day was it 30 days ago?",
    steps: [
      {
        id: 1,
        operation: "Find odd days in 30",
        expression: "30 / 7 = 4 weeks + 2 days",
        result: "2 odd days",
        explanation: "Remainder when dividing 30 by 7 is 2.",
      },
      {
        id: 2,
        operation: "Count backward from Saturday",
        expression: "Saturday - 2 days = Thursday",
        result: "Thursday",
        explanation:
          "Sat -> Fri (1 back) -> Thu (2 back). 30 days ago was Thursday.",
      },
    ],
    answer: "Thursday",
    difficulty: "easy",
  },
  {
    id: "cal-p5",
    topic: "calendar-reasoning",
    title: "SSC CGL 2020: Odd Days in Leap Year",
    question: "How many odd days are there in the year 2024?",
    steps: [
      {
        id: 1,
        operation: "Check if 2024 is a leap year",
        expression: "2024 / 4 = 506 (exact), not a century year",
        result: "2024 IS a leap year",
        explanation:
          "2024 is divisible by 4 and is not a century year, so it is a leap year with 366 days.",
      },
      {
        id: 2,
        operation: "Count odd days",
        expression: "366 days = 52 weeks + 2 days",
        result: "2 odd days",
        explanation:
          "A leap year has 366 days. Dividing by 7 gives 52 complete weeks and 2 extra days.",
      },
    ],
    answer: "2 odd days",
    difficulty: "easy",
  },
  {
    id: "cal-p6",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2023: Day After 68 Days",
    question:
      "If today is Tuesday, what day of the week will it be after 68 days?",
    steps: [
      {
        id: 1,
        operation: "Find odd days in 68",
        expression: "68 / 7 = 9 weeks + 5 days",
        result: "5 odd days",
        explanation: "68 = 9 x 7 + 5. The remainder 5 is the number of odd days.",
      },
      {
        id: 2,
        operation: "Count forward from Tuesday",
        expression: "Tue + 5 = Sunday",
        result: "Sunday",
        explanation:
          "Tue -> Wed (1) -> Thu (2) -> Fri (3) -> Sat (4) -> Sun (5). After 68 days it will be Sunday.",
      },
    ],
    answer: "Sunday",
    difficulty: "easy",
  },
  {
    id: "cal-p7",
    topic: "calendar-reasoning",
    title: "IBPS Clerk 2022: Odd Days in 400 Years",
    question: "How many odd days are there in 400 years?",
    steps: [
      {
        id: 1,
        operation: "Calculate odd days per century",
        expression:
          "100 years = 76 ordinary + 24 leap = 76(1) + 24(2) = 124 odd days. 124 mod 7 = 5",
        result: "5 odd days per 100 years",
        explanation:
          "In 100 years there are 24 leap years and 76 ordinary years, giving 124 odd days total, which is 5 mod 7.",
      },
      {
        id: 2,
        operation: "Calculate for 400 years",
        expression:
          "400 years = 4 x 5 + 1 (extra day for the 400th year being leap) = 21 odd days. 21 mod 7 = 0",
        result: "0 odd days",
        explanation:
          "400 years contain exactly 0 odd days. This is a key reference: every 400-year cycle is complete.",
      },
    ],
    answer: "0 odd days",
    difficulty: "easy",
  },
  {
    id: "cal-p8",
    topic: "calendar-reasoning",
    title: "SSC CGL 2022: Odd Days in Centuries",
    question: "How many odd days are in 300 years?",
    steps: [
      {
        id: 1,
        operation: "Use the century odd-day formula",
        expression:
          "100 years = 5 odd days. 200 years = 10 odd days = 3 mod 7. 300 years = 15 odd days = 1 mod 7.",
        result: "1 odd day",
        explanation:
          "100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0. These are standard results to memorize.",
      },
    ],
    answer: "1 odd day",
    difficulty: "easy",
  },
  {
    id: "cal-p9",
    topic: "calendar-reasoning",
    title: "RRB NTPC 2020: Day After One Year",
    question:
      "January 1, 2023 was a Sunday. On what day will January 1, 2024 fall?",
    steps: [
      {
        id: 1,
        operation: "Count odd days in 2023",
        expression: "2023 is an ordinary year = 1 odd day",
        result: "1 odd day",
        explanation:
          "Since 2023 is not a leap year, it contributes 1 odd day.",
      },
      {
        id: 2,
        operation: "Add odd days to Sunday",
        expression: "Sunday + 1 = Monday",
        result: "Monday",
        explanation:
          "January 1, 2024 falls on Monday, one day after Sunday.",
      },
    ],
    answer: "Monday",
    difficulty: "easy",
  },
  {
    id: "cal-p10",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2023: Leap Year Across Two Years",
    question:
      "January 1, 2023 was a Sunday. On what day will January 1, 2025 fall?",
    steps: [
      {
        id: 1,
        operation: "Count odd days in 2023",
        expression: "2023 is ordinary = 1 odd day. Jan 1, 2024 = Sunday + 1 = Monday",
        result: "Monday",
        explanation: "2023 has 365 days = 1 odd day.",
      },
      {
        id: 2,
        operation: "Count odd days in 2024",
        expression: "2024 is a leap year = 2 odd days. Jan 1, 2025 = Monday + 2 = Wednesday",
        result: "Wednesday",
        explanation:
          "2024 has 366 days = 2 odd days. Monday + 2 = Wednesday.",
      },
    ],
    answer: "Wednesday",
    difficulty: "easy",
  },

  // ── Medium (p11–p20) ───────────────────────────────────────────
  {
    id: "cal-p11",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Independence Day 1947",
    question:
      "What day of the week was 15th August 1947 (Indian Independence Day)?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 1600 years",
        expression: "1600 years = 4 x 400 = 0 odd days",
        result: "0",
        explanation:
          "Every 400-year cycle has 0 odd days. 1600 = 4 complete cycles.",
      },
      {
        id: 2,
        operation: "Odd days for 300 years (1601-1900)",
        expression: "300 years = 1 odd day",
        result: "1",
        explanation: "Standard result: 300 years = 1 odd day.",
      },
      {
        id: 3,
        operation: "Odd days for 1901-1946 (46 years)",
        expression:
          "46 years = 35 ordinary + 11 leap = 35(1) + 11(2) = 57. 57 mod 7 = 1",
        result: "1",
        explanation:
          "Leap years: 1904, 1908, ..., 1944. Count = (1944-1904)/4 + 1 = 11.",
      },
      {
        id: 4,
        operation: "Odd days from Jan 1 to Aug 15, 1947",
        expression:
          "Jan(31) + Feb(28) + Mar(31) + Apr(30) + May(31) + Jun(30) + Jul(31) + Aug(15) = 227. 227 mod 7 = 3",
        result: "3",
        explanation: "1947 is not a leap year. 227 days from Jan 1 to Aug 15.",
      },
      {
        id: 5,
        operation: "Total odd days and determine day",
        expression:
          "0 + 1 + 1 + 3 = 5. Day code: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat",
        result: "Friday",
        explanation: "Day code 5 = Friday. India's Independence Day was a Friday.",
      },
    ],
    answer: "Friday",
    difficulty: "medium",
  },
  {
    id: "cal-p12",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Republic Day 1950",
    question: "What day of the week was 26th January 1950?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 1600 years",
        expression: "0 odd days",
        result: "0",
        explanation: "1600 years = 0 odd days.",
      },
      {
        id: 2,
        operation: "Odd days for 1601-1900 (300 years)",
        expression: "1 odd day",
        result: "1",
        explanation: "300 years = 1 odd day.",
      },
      {
        id: 3,
        operation: "Odd days for 1901-1949 (49 years)",
        expression:
          "49 years = 37 ordinary + 12 leap = 37 + 24 = 61. 61 mod 7 = 5",
        result: "5",
        explanation:
          "Leap years: 1904, 1908, ..., 1948 = 12 leap years.",
      },
      {
        id: 4,
        operation: "Odd days for Jan 1-26, 1950",
        expression: "26 days. 26 mod 7 = 5",
        result: "5",
        explanation: "January 1 to January 26 = 26 days.",
      },
      {
        id: 5,
        operation: "Total odd days",
        expression:
          "0 + 1 + 5 + 5 = 11. 11 mod 7 = 4. Day code 4 = Thursday",
        result: "Thursday",
        explanation:
          "India's first Republic Day, 26th January 1950, was a Thursday.",
      },
    ],
    answer: "Thursday",
    difficulty: "medium",
  },
  {
    id: "cal-p13",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Given Reference Day",
    question:
      "If 1 January 2020 was Wednesday, then what was the day of the week on 28 February 2021?",
    steps: [
      {
        id: 1,
        operation: "Count days from Jan 1, 2020 to Feb 28, 2021",
        expression:
          "Remaining 2020: 366 - 1 = 365 days (2020 is leap). Jan 2021 = 31 days. Feb 1-28 = 28 days. Total = 365 + 31 + 28 = 424",
        result: "424 days",
        explanation:
          "Count total days between the two dates. 2020 is a leap year (366 days), so from Jan 1 to Dec 31 = 365 more days.",
      },
      {
        id: 2,
        operation: "Find odd days",
        expression: "424 mod 7 = 60 weeks + 4 days = 4 odd days",
        result: "4 odd days",
        explanation: "424 / 7 = 60 remainder 4.",
      },
      {
        id: 3,
        operation: "Count forward from Wednesday",
        expression: "Wed + 4 = Sunday",
        result: "Sunday",
        explanation:
          "Wed -> Thu (1) -> Fri (2) -> Sat (3) -> Sun (4). 28 Feb 2021 was Sunday.",
      },
    ],
    answer: "Sunday",
    difficulty: "medium",
  },
  {
    id: "cal-p14",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Cross-Year Calculation",
    question:
      "If 28 February 2017 was Tuesday, then what was the day of the week on 28 February 2019?",
    steps: [
      {
        id: 1,
        operation: "Count odd days in 2017 (from Feb 28)",
        expression:
          "Remaining 2017 from Mar 1: 306 days. 2017 is ordinary.",
        result: "306 days remaining",
        explanation: "March to December 2017 = 31+30+31+30+31+31+30+31+30+31 = 306.",
      },
      {
        id: 2,
        operation: "Count total days to Feb 28, 2019",
        expression:
          "306 (rest of 2017) + 365 (2018, ordinary) + 59 (Jan-Feb 2019) = 730 days",
        result: "730 days",
        explanation: "2018 is ordinary (365 days). Jan(31) + Feb(28) = 59 days in 2019.",
      },
      {
        id: 3,
        operation: "Find odd days",
        expression: "730 mod 7 = 104 weeks + 2 days = 2 odd days",
        result: "2 odd days",
        explanation: "730 / 7 = 104 remainder 2.",
      },
      {
        id: 4,
        operation: "Count forward from Tuesday",
        expression: "Tue + 2 = Thursday",
        result: "Thursday",
        explanation: "Tue -> Wed (1) -> Thu (2). 28 Feb 2019 was Thursday.",
      },
    ],
    answer: "Thursday",
    difficulty: "medium",
  },
  {
    id: "cal-p15",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Day on 1st Jan 2001",
    question: "What day was January 1, 2001?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 2000 years",
        expression:
          "2000 years = 5 complete 400-year cycles = 5 x 0 = 0 odd days",
        result: "0",
        explanation: "Every 400-year cycle contributes 0 odd days.",
      },
      {
        id: 2,
        operation: "Add 1 day for Jan 1",
        expression: "Jan 1 = 1st day. 1 mod 7 = 1",
        result: "1 odd day total",
        explanation:
          "Starting from the reference point (0 odd days through year 2000), add 1 for Jan 1.",
      },
      {
        id: 3,
        operation: "Determine day",
        expression: "Day code 1 = Monday",
        result: "Monday",
        explanation: "January 1, 2001 was a Monday.",
      },
    ],
    answer: "Monday",
    difficulty: "medium",
  },
  {
    id: "cal-p16",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Given Reference, Forward Count",
    question:
      "If 15 July 2002 is a Monday, then what will be the day of the week on 16 October 2005?",
    steps: [
      {
        id: 1,
        operation: "Count days from Jul 15, 2002 to Jul 15, 2005",
        expression:
          "2002 rest (ordinary, 1 odd), 2003 (ordinary, 1 odd), 2004 (leap, 2 odd), 2005 up to Jul 15. Total odd days for full years = 1 + 1 + 2 = 4",
        result: "Jul 15, 2005 = Monday + 4 = Friday",
        explanation:
          "From Jul 15, 2002 to Jul 15, 2005: 3 years, with 2004 being a leap year.",
      },
      {
        id: 2,
        operation: "Count days from Jul 15 to Oct 16, 2005",
        expression:
          "Jul remaining: 16 days, Aug: 31, Sep: 30, Oct 1-16: 16. Total = 93 days. 93 mod 7 = 2",
        result: "2 odd days",
        explanation:
          "From July 15 to October 16 = 93 days = 13 weeks + 2 days.",
      },
      {
        id: 3,
        operation: "Count forward",
        expression: "Friday + 2 = Sunday",
        result: "Sunday",
        explanation: "16 October 2005 was a Sunday.",
      },
    ],
    answer: "Sunday",
    difficulty: "medium",
  },
  {
    id: "cal-p17",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Backward from Reference",
    question:
      "If 15 August 2001 was Wednesday, then what was the day of the week on 2 October 2001?",
    steps: [
      {
        id: 1,
        operation: "Count days from Aug 15 to Oct 2",
        expression:
          "Aug remaining: 16 days, Sep: 30 days, Oct 1-2: 2 days. Total = 48 days",
        result: "48 days",
        explanation: "From August 15 to October 2, 2001.",
      },
      {
        id: 2,
        operation: "Find odd days",
        expression: "48 mod 7 = 6 weeks + 6 days = 6 odd days",
        result: "6 odd days",
        explanation: "48 / 7 = 6 remainder 6.",
      },
      {
        id: 3,
        operation: "Count forward from Wednesday",
        expression: "Wed + 6 = Tuesday",
        result: "Tuesday",
        explanation:
          "Wed -> Thu (1) -> Fri (2) -> Sat (3) -> Sun (4) -> Mon (5) -> Tue (6). Gandhi Jayanti 2001 was Tuesday.",
      },
    ],
    answer: "Tuesday",
    difficulty: "medium",
  },
  {
    id: "cal-p18",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2023: March to February",
    question:
      "If 1 March 2012 was Thursday, then what was the day of the week on 1 February 2016?",
    steps: [
      {
        id: 1,
        operation: "Count odd days from Mar 1, 2012 to Mar 1, 2016",
        expression:
          "2012 rest: leap but past Feb, 1 odd. 2013: 1 odd. 2014: 1 odd. 2015: 1 odd. To Mar 1, 2016 = 4 odd days total",
        result: "Mar 1, 2016 = Thursday + 4 = Monday",
        explanation:
          "From Mar 1 to Mar 1 spanning 4 years. 2016 is leap but Feb 29 is before Mar 1. Each year Mar-to-Mar = 365 days = 1 odd day.",
      },
      {
        id: 2,
        operation: "Go back from Mar 1, 2016 to Feb 1, 2016",
        expression:
          "Mar 1 back 29 days (2016 is leap, Feb has 29 days). 29 mod 7 = 1",
        result: "1 odd day backward",
        explanation: "Going back 29 days from Monday.",
      },
      {
        id: 3,
        operation: "Count backward",
        expression: "Monday - 1 day = Sunday. Wait: going BACK 29 days. Monday - 1 = Sunday",
        result: "Monday",
        explanation:
          "Feb 1 to Mar 1 = 29 days forward = 1 odd day. So Feb 1 = Monday - 1 = Sunday. Actually let us recount: Feb has 29 days in 2016. Feb 1 + 29 days = Mar 1. So Feb 1 is 29 days BEFORE Mar 1. 29 mod 7 = 1. Monday - 1 = Sunday. But the SSC answer key says Monday. Let us recount years: Mar 1 2012 (Thu) to Mar 1 2013 = 366 days (2012 is leap, but from Mar the leap day is next year's Feb). Actually from Mar 1 2012 to Feb 28 2013 = 365 days. From Mar 1 2012 to Mar 1 2013 = 365 days = 1 odd. Mar 1 2013 = Fri. Mar 1 2014 = Sat. Mar 1 2015 = Sun. Mar 1 2016 = Tue (2016 is leap, Feb has 29 days, so Mar 2015 to Mar 2016 = 366 = 2 odd). So Mar 1 2016 = Sun + 2 = Tue. Feb 1 2016 = Tue - 29 mod 7 = Tue - 1 = Mon.",
      },
    ],
    answer: "Monday",
    difficulty: "medium",
  },
  {
    id: "cal-p19",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Jan 2020 Reference",
    question:
      "If 26 January 2019 was Saturday, then what was the day of the week on 30 January 2022?",
    steps: [
      {
        id: 1,
        operation: "Count odd days year by year",
        expression:
          "Jan 26 2019 to Jan 26 2020: 2019 ordinary = 1 odd day. Jan 26 2020 = Sat + 1 = Sun",
        result: "Sunday",
        explanation: "2019 is ordinary, so 1 odd day.",
      },
      {
        id: 2,
        operation: "Continue to Jan 26, 2021",
        expression:
          "Jan 26 2020 to Jan 26 2021: 2020 is leap = 2 odd days. Jan 26 2021 = Sun + 2 = Tue",
        result: "Tuesday",
        explanation: "2020 is a leap year (366 days = 2 odd days).",
      },
      {
        id: 3,
        operation: "Continue to Jan 26, 2022",
        expression:
          "2021 is ordinary = 1 odd day. Jan 26 2022 = Tue + 1 = Wed",
        result: "Wednesday",
        explanation: "2021 is ordinary.",
      },
      {
        id: 4,
        operation: "From Jan 26 to Jan 30, 2022",
        expression: "4 more days. Wed + 4 = Sunday",
        result: "Sunday",
        explanation:
          "Wed -> Thu (1) -> Fri (2) -> Sat (3) -> Sun (4). January 30, 2022 was a Sunday.",
      },
    ],
    answer: "Sunday",
    difficulty: "medium",
  },
  {
    id: "cal-p20",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Same Month Different Year",
    question:
      "If 31 August 2000 was Friday, then what was the day of the week on 31 August 2009?",
    steps: [
      {
        id: 1,
        operation: "Count odd days from 2000 to 2009",
        expression:
          "Years 2000-2008: 2000(L,2) + 2001(1) + 2002(1) + 2003(1) + 2004(L,2) + 2005(1) + 2006(1) + 2007(1) + 2008(L,2) = 12",
        result: "12 odd days",
        explanation:
          "Aug 31 to Aug 31 each year. Leap years (2000, 2004, 2008) contribute 2 odd days, others 1.",
      },
      {
        id: 2,
        operation: "Reduce mod 7",
        expression: "12 mod 7 = 5 odd days",
        result: "5",
        explanation: "12 = 1 week + 5 days.",
      },
      {
        id: 3,
        operation: "Count forward from Friday",
        expression: "Fri + 5 = Wednesday. Wait: Fri(0) -> Sat(1) -> Sun(2) -> Mon(3) -> Tue(4) -> Wed(5)",
        result: "Wednesday",
        explanation:
          "But the SSC answer is Tuesday. Let us recheck: Aug 31 to Aug 31 spans exactly the calendar year boundary. For a leap year, the extra day only counts if Feb 29 falls within the span. Aug 31 2000 to Aug 31 2001: includes Feb 29? No, Feb 29 2000 is before Aug 31 2000. So 2000-01 span = 365 = 1 odd. Similarly 2004: Feb 29 2004 IS within Aug 31 2003 to Aug 31 2004 span. So: 00-01(1) + 01-02(1) + 02-03(1) + 03-04(2) + 04-05(1) + 05-06(1) + 06-07(1) + 07-08(2) + 08-09(1) = 11. 11 mod 7 = 4. Fri + 4 = Tue.",
      },
    ],
    answer: "Tuesday",
    difficulty: "medium",
  },

  // ── Hard (p21–p30) ────────────────────────────────────────────
  {
    id: "cal-p21",
    topic: "calendar-reasoning",
    title: "SSC CGL 2022: Date from Scratch",
    question: "What day of the week was 15th August 2023?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 2000 years",
        expression: "5 complete 400-year cycles = 0 odd days",
        result: "0",
        explanation: "2000 years = 0 odd days.",
      },
      {
        id: 2,
        operation: "Odd days for 2001-2022 (22 years)",
        expression:
          "22 years: 17 ordinary + 5 leap (2004, 2008, 2012, 2016, 2020) = 17 + 10 = 27. 27 mod 7 = 6",
        result: "6",
        explanation: "5 leap years in 2001-2022.",
      },
      {
        id: 3,
        operation: "Odd days for Jan 1 to Aug 15, 2023",
        expression:
          "31 + 28 + 31 + 30 + 31 + 30 + 31 + 15 = 227. 227 mod 7 = 3",
        result: "3",
        explanation: "2023 is not a leap year.",
      },
      {
        id: 4,
        operation: "Total",
        expression: "0 + 6 + 3 = 9. 9 mod 7 = 2. Day code 2 = Tuesday",
        result: "Tuesday",
        explanation: "15th August 2023 was a Tuesday.",
      },
    ],
    answer: "Tuesday",
    difficulty: "hard",
  },
  {
    id: "cal-p22",
    topic: "calendar-reasoning",
    title: "SSC CGL 2021: Same Calendar Year",
    question: "Which year after 2020 will have the same calendar as 2020?",
    steps: [
      {
        id: 1,
        operation: "Identify 2020's properties",
        expression: "2020 is a leap year starting on Wednesday",
        result: "Need another leap year starting on Wednesday",
        explanation:
          "Same calendar requires same starting day AND same leap/non-leap type.",
      },
      {
        id: 2,
        operation: "Accumulate odd days from 2020",
        expression:
          "2020(2) + 2021(1) + 2022(1) + 2023(1) = 5. 2024(leap, 2) = 7 = 0. But 2025 start matches, and 2025 is not leap.",
        result: "Not 2025. Continue searching.",
        explanation:
          "We need cumulative odd days = 0 mod 7 at the START of a leap year.",
      },
      {
        id: 3,
        operation: "Continue counting",
        expression:
          "2025(1)=1, 2026(1)=2, 2027(1)=3, 2028(L,2)=5, 2029(1)=6, 2030(1)=0. But 2031 is not leap. Continue: 2031(1)=1, 2032(L,2)=3, 2033(1)=4, 2034(1)=5, 2035(1)=6, 2036(L,2)=1, ..., 2048 start = 0 and 2048 is leap.",
        result: "2048",
        explanation:
          "After 28 years, total odd days = 0 mod 7, and 2048 is a leap year.",
      },
    ],
    answer: "2048",
    difficulty: "hard",
  },
  {
    id: "cal-p23",
    topic: "calendar-reasoning",
    title: "SSC CGL 2020: Birthday Day Calculation",
    question:
      "A person was born on January 26, 1990. On which day of the week was he born?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 1600 years",
        expression: "0 odd days",
        result: "0",
        explanation: "1600 years = 0 odd days.",
      },
      {
        id: 2,
        operation: "Odd days for 300 years (1601-1900)",
        expression: "1 odd day",
        result: "1",
        explanation: "300 years = 1 odd day.",
      },
      {
        id: 3,
        operation: "Odd days for 1901-1989 (89 years)",
        expression:
          "89 years: 67 ordinary + 22 leap = 67 + 44 = 111. 111 mod 7 = 6",
        result: "6",
        explanation:
          "Leap years: 1904, 1908, ..., 1988. Count = (1988-1904)/4 + 1 = 22.",
      },
      {
        id: 4,
        operation: "Odd days for Jan 1-26, 1990",
        expression: "26 days. 26 mod 7 = 5",
        result: "5",
        explanation: "26 days into 1990.",
      },
      {
        id: 5,
        operation: "Total",
        expression: "0 + 1 + 6 + 5 = 12. 12 mod 7 = 5 = Friday",
        result: "Friday",
        explanation: "January 26, 1990 was a Friday.",
      },
    ],
    answer: "Friday",
    difficulty: "hard",
  },
  {
    id: "cal-p24",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Sundays in a Month",
    question:
      "If February 1, 2028 is a Tuesday, how many Sundays are in February 2028?",
    steps: [
      {
        id: 1,
        operation: "Determine February 2028 length",
        expression:
          "2028 / 4 = 507 (exact), not a century year = leap year. Feb has 29 days.",
        result: "29 days in February 2028",
        explanation: "2028 is a leap year, so February has 29 days.",
      },
      {
        id: 2,
        operation: "Find first Sunday",
        expression:
          "Feb 1 = Tue. Sun = 5 days later = Feb 6",
        result: "First Sunday = Feb 6",
        explanation:
          "Tue(1) -> Wed(2) -> Thu(3) -> Fri(4) -> Sat(5) -> Sun(6).",
      },
      {
        id: 3,
        operation: "List all Sundays",
        expression: "Feb 6, 13, 20, 27. Next = 34 > 29.",
        result: "4 Sundays",
        explanation:
          "Adding 7 repeatedly: 6, 13, 20, 27. The 5th Sunday would be Feb 34 which does not exist.",
      },
    ],
    answer: "4 Sundays",
    difficulty: "hard",
  },
  {
    id: "cal-p25",
    topic: "calendar-reasoning",
    title: "SSC CGL 2019: 1st January 1901",
    question: "What day of the week was 1st January 1901?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 1600 years",
        expression: "0 odd days",
        result: "0",
        explanation: "1600 years = 0 odd days.",
      },
      {
        id: 2,
        operation: "Odd days for 300 years (1601-1900)",
        expression: "1 odd day",
        result: "1",
        explanation: "300 years = 1 odd day.",
      },
      {
        id: 3,
        operation: "Add 1 day for Jan 1",
        expression: "1 day. 1 mod 7 = 1",
        result: "1",
        explanation: "January 1 is the 1st day of 1901.",
      },
      {
        id: 4,
        operation: "Total",
        expression: "0 + 1 + 1 = 2. Day code 2 = Tuesday",
        result: "Tuesday",
        explanation: "1st January 1901 was a Tuesday.",
      },
    ],
    answer: "Tuesday",
    difficulty: "hard",
  },
  {
    id: "cal-p26",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2023: Cross-Year with Leap",
    question:
      "If 13 January 2006 is a Friday, then what will be the day of the week on 28 March 2008?",
    steps: [
      {
        id: 1,
        operation: "Count days from Jan 13, 2006 to Jan 13, 2008",
        expression:
          "2006 (ordinary) = 1 odd. 2007 (ordinary) = 1 odd. Total = 2 odd days.",
        result: "Jan 13, 2008 = Friday + 2 = Sunday",
        explanation:
          "Two ordinary years contribute 2 odd days total.",
      },
      {
        id: 2,
        operation: "Count from Jan 13 to Mar 28, 2008",
        expression:
          "Jan remaining: 18 days. Feb: 29 (2008 is leap). Mar 1-28: 28 days. Total = 75 days.",
        result: "75 days",
        explanation:
          "2008 is a leap year so February has 29 days.",
      },
      {
        id: 3,
        operation: "Find odd days in 75",
        expression: "75 mod 7 = 10 weeks + 5 = 5 odd days",
        result: "5",
        explanation: "75 / 7 = 10 remainder 5.",
      },
      {
        id: 4,
        operation: "Count forward from Sunday",
        expression: "Sun + 5 = Friday",
        result: "Friday",
        explanation:
          "Sun -> Mon (1) -> Tue (2) -> Wed (3) -> Thu (4) -> Fri (5). March 28, 2008 was Friday.",
      },
    ],
    answer: "Friday",
    difficulty: "hard",
  },
  {
    id: "cal-p27",
    topic: "calendar-reasoning",
    title: "UPSC CSAT 2019: Date from Scratch",
    question: "What day of the week was April 14, 2000 (Ambedkar Jayanti)?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 1600 years",
        expression: "0 odd days",
        result: "0",
        explanation: "1600 = 4 x 400 year cycles = 0.",
      },
      {
        id: 2,
        operation: "Odd days for 300 years (1601-1900)",
        expression: "1 odd day",
        result: "1",
        explanation: "Standard: 300 years = 1 odd day.",
      },
      {
        id: 3,
        operation: "Odd days for 1901-1999 (99 years)",
        expression:
          "99 years: 75 ordinary + 24 leap = 75 + 48 = 123. 123 mod 7 = 4",
        result: "4",
        explanation:
          "Leap years from 1904 to 1996: (1996-1904)/4 + 1 = 24.",
      },
      {
        id: 4,
        operation: "Odd days Jan 1 to Apr 14, 2000",
        expression:
          "Jan(31) + Feb(29, leap year) + Mar(31) + Apr(14) = 105. 105 mod 7 = 0",
        result: "0",
        explanation: "2000 is a leap year. 105 = 15 exact weeks.",
      },
      {
        id: 5,
        operation: "Total",
        expression: "0 + 1 + 4 + 0 = 5. Day code 5 = Friday",
        result: "Friday",
        explanation: "April 14, 2000 was a Friday.",
      },
    ],
    answer: "Friday",
    difficulty: "hard",
  },
  {
    id: "cal-p28",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2023: Long Gap Calculation",
    question:
      "If 12 February 2011 was a Saturday, then what was the day of the week on 13 February 2015?",
    steps: [
      {
        id: 1,
        operation: "Count odd days from Feb 12, 2011 to Feb 12, 2015",
        expression:
          "2011(1) + 2012(leap, 2) + 2013(1) + 2014(1) = 5 odd days",
        result: "5 odd days",
        explanation:
          "Feb 12 to Feb 12 spans full years. 2012 is a leap year so its span includes Feb 29.",
      },
      {
        id: 2,
        operation: "Feb 12 to Feb 13",
        expression: "1 more day",
        result: "Total = 5 + 1 = 6 odd days",
        explanation: "One additional day to reach Feb 13.",
      },
      {
        id: 3,
        operation: "Count forward from Saturday",
        expression: "Sat + 6 = Friday",
        result: "Friday",
        explanation:
          "Sat -> Sun (1) -> Mon (2) -> Tue (3) -> Wed (4) -> Thu (5) -> Fri (6). February 13, 2015 was Friday.",
      },
    ],
    answer: "Friday",
    difficulty: "hard",
  },
  {
    id: "cal-p29",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Same Calendar as 1986",
    question: "Which year will have the same calendar as 1986?",
    steps: [
      {
        id: 1,
        operation: "Identify 1986's properties",
        expression: "1986 is an ordinary year (not divisible by 4)",
        result: "Need an ordinary year with same starting day",
        explanation:
          "Same calendar = same type (ordinary/leap) AND same starting day of week.",
      },
      {
        id: 2,
        operation: "Accumulate odd days from 1986",
        expression:
          "1986(1)=1, 1987(1)=2, 1988(L,2)=4, 1989(1)=5, 1990(1)=6, 1991(1)=7=0",
        result: "Cumulative = 0 mod 7 at start of 1992",
        explanation: "After 6 years from 1986, total odd days = 7 = 0 mod 7.",
      },
      {
        id: 3,
        operation: "Check if 1992 qualifies",
        expression: "1992 is a leap year, but 1986 is ordinary",
        result: "1992 does not qualify",
        explanation:
          "Same starting day but different type. Continue counting.",
      },
      {
        id: 4,
        operation: "Continue from 1992",
        expression:
          "1992(L,2)=2, 1993(1)=3, 1994(1)=4, 1995(1)=5, 1996(L,2)=7=0. Start of 1997 = 0 mod 7. 1997 is ordinary.",
        result: "1997",
        explanation:
          "Total odd days from 1986 to start of 1997 = 14 = 0 mod 7, and 1997 is ordinary like 1986.",
      },
    ],
    answer: "1997",
    difficulty: "hard",
  },
  {
    id: "cal-p30",
    topic: "calendar-reasoning",
    title: "SSC CHSL 2022: Day on 29th January 1950",
    question: "What day of the week was 29th January 1950?",
    steps: [
      {
        id: 1,
        operation: "Odd days for 1600 years",
        expression: "0 odd days",
        result: "0",
        explanation: "1600 years = 0 odd days.",
      },
      {
        id: 2,
        operation: "Odd days for 300 years (1601-1900)",
        expression: "1 odd day",
        result: "1",
        explanation: "300 years = 1 odd day.",
      },
      {
        id: 3,
        operation: "Odd days for 1901-1949 (49 years)",
        expression:
          "49 years: 37 ordinary + 12 leap = 37 + 24 = 61. 61 mod 7 = 5",
        result: "5",
        explanation: "Leap years from 1904 to 1948 = 12.",
      },
      {
        id: 4,
        operation: "Odd days for Jan 1-29, 1950",
        expression: "29 days. 29 mod 7 = 1",
        result: "1",
        explanation: "29 days from January 1.",
      },
      {
        id: 5,
        operation: "Total",
        expression: "0 + 1 + 5 + 1 = 7. 7 mod 7 = 0 = Sunday",
        result: "Sunday",
        explanation:
          "Day code 0 = Sunday. January 29, 1950 (Mahatma Gandhi's death anniversary) was a Sunday.",
      },
    ],
    answer: "Sunday",
    difficulty: "hard",
  },
]
