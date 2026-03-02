import type { QuantTrick } from "@/types/quant"

export const clocksTricks: QuantTrick[] = [
  {
    id: "clk-trick-01",
    topic: "clocks",
    type: "formula-shortcut",
    title: "Angle Formula Direct Application",
    description:
      "Angle between hands at H hours M minutes = |30H − 5.5M|. If > 180, subtract from 360 for the reflex angle. Memorise this — it solves any 'find angle' question instantly.",
    formula: "θ = |30H − 5.5M|",
    example: {
      problem: "Find the angle between hands at 3:40.",
      solution: "θ = |30×3 − 5.5×40| = |90 − 220| = 130°.",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "clk-trick-02",
    topic: "clocks",
    type: "formula-shortcut",
    title: "When Hands Overlap",
    description:
      "Hands overlap when minute hand catches up to hour hand. They start together at 12:00 and meet again every 720/11 ≈ 65.45 minutes. Minute of overlap past n o'clock = 60n/11 × 2 = 720n/11. More simply: overlap at h o'clock happens at M = (60×h/11) min past 12.",
    formula: "Overlap time = (60H/11) minutes past 12:00 (or equivalently, 720H/11 mod 60)",
    example: {
      problem: "At what time between 4 and 5 do the clock hands coincide?",
      solution:
        "M = (60×4)/11 = 240/11 = 21(9/11) minutes. So at 4:21(9/11) or approximately 4:21:49.",
    },
    timeSaved: "25 seconds",
  },
  {
    id: "clk-trick-03",
    topic: "clocks",
    type: "formula-shortcut",
    title: "Right Angle Formula",
    description:
      "Hands are at right angles when |30H − 5.5M| = 90 or 270. Between each pair of consecutive hours, there are exactly 2 times the hands form a right angle (22 times in 12 hours).",
    example: {
      problem: "At what time between 2 and 3 are hands at right angle?",
      solution:
        "Use: 5.5M = 30H±90. For H=2: M=(60±90)/5.5. M1=(60−90)/5.5<0, skip. M2=(60+90)/5.5=150/5.5=27(3/11). So 2:27(3/11).",
    },
    timeSaved: "20 seconds",
  },
  {
    id: "clk-trick-04",
    topic: "clocks",
    type: "mental-math",
    title: "Hands Coincide 11 Times in 12 Hours",
    description:
      "Many students say 12 but it's 11. At 12:00 they coincide; next at ~1:05; then ~2:10; ... ~10:55; and back at 12:00 (which is the starting point). Count: 12:00, 1:05, 2:11, 3:16, 4:22, 5:27, 6:33, 7:38, 8:44, 9:49, 10:55 — that's 11 times before returning to 12:00.",
    example: {
      problem: "How many times do clock hands coincide in a 24-hour day?",
      solution: "11 times in 12 hours × 2 = 22 times.",
    },
    timeSaved: "10 seconds",
  },
  {
    id: "clk-trick-05",
    topic: "clocks",
    type: "formula-shortcut",
    title: "Faulty Clock — Time Gained/Lost",
    description:
      "Fast clock: shows more time than elapsed. If clock gains G min/hour, in T actual hours, it shows T×60 + T×G minutes. To find actual time from fast clock: actual = clock_time × 60/(60+G).",
    formula: "Actual hours = Fast clock hours × 60/(60+G) for gain G min/hour",
    example: {
      problem:
        "A clock gains 5 min every hour. If it shows 10:00 AM after starting at 7:00 AM, what is the actual time?",
      solution:
        "Clock shows 3 hours elapsed = 180 min. Actual = 180 × 60/65 = 10800/65 ≈ 166.15 min ≈ 2h 46min. Actual time = 7:00 + 2:46 = 9:46 AM.",
    },
    timeSaved: "25 seconds",
  },
]
