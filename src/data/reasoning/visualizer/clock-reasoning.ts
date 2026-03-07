import type { ClockProblem } from "@/types/reasoning"

export const clockProblems: ClockProblem[] = [
  {
    id: "clock-p1",
    type: "angle",
    question: "What is the angle between the hour and minute hands at 3:00?",
    hourAngle: 90,
    minuteAngle: 0,
    steps: [
      "At 3:00, the minute hand is at 12, which is 0 degrees.",
      "The hour hand is at 3. Each hour mark = 360/12 = 30 degrees.",
      "Hour hand angle = 3 x 30 = 90 degrees from 12 o'clock.",
      "Angle between hands = |90 - 0| = 90 degrees.",
      "Since 90 < 180, the acute angle is 90 degrees.",
    ],
    answer: "The angle between the hands at 3:00 is 90 degrees.",
  },
  {
    id: "clock-p2",
    type: "angle",
    question:
      "What is the angle between the hour and minute hands at 7:20?",
    hourAngle: 220,
    minuteAngle: 120,
    steps: [
      "Formula: Hour hand angle = 30H + 0.5M; Minute hand angle = 6M.",
      "At 7:20 — H = 7, M = 20.",
      "Hour hand = 30(7) + 0.5(20) = 210 + 10 = 220 degrees.",
      "Minute hand = 6(20) = 120 degrees.",
      "Angle = |220 - 120| = 100 degrees. Since 100 < 180, the angle is 100 degrees.",
    ],
    answer:
      "The angle between the hands at 7:20 is 100 degrees.",
  },
  {
    id: "clock-p3",
    type: "time-gain-loss",
    question:
      "A clock gains 5 minutes every hour. If set correctly at 12:00 noon, what time will it show when the actual time is 6:00 PM?",
    hourAngle: 195,
    minuteAngle: 180,
    steps: [
      "The clock gains 5 minutes per hour, meaning it runs at 65 minutes for every real 60 minutes.",
      "From 12:00 noon to 6:00 PM = 6 actual hours.",
      "In 6 actual hours, the clock runs: 6 x 65 = 390 clock-minutes = 6 hours 30 minutes.",
      "The clock will show 12:00 + 6h 30m = 6:30 PM.",
      "At 6:30 — hour hand at 30(6) + 0.5(30) = 195 degrees; minute hand at 6(30) = 180 degrees.",
    ],
    answer:
      "The clock will show 6:30 PM, running 30 minutes ahead of the actual time.",
  },
  {
    id: "clock-p4",
    type: "time-gain-loss",
    question:
      "A clock loses 3 minutes every hour. It was set to the correct time at 8:00 AM. What is the actual time when the clock shows 2:00 PM?",
    hourAngle: 60,
    minuteAngle: 0,
    steps: [
      "The clock loses 3 minutes/hour: it shows only 57 minutes for every actual 60 minutes.",
      "The clock shows 2:00 PM, which is 6 clock-hours after 8:00 AM = 360 clock-minutes.",
      "If the clock shows 57 minutes per real hour, then 360 clock-minutes = 360 x (60/57) real minutes.",
      "Real minutes elapsed = 360 x 60/57 = 21600/57 = 378.95 minutes, approximately 6 hours and 19 minutes.",
      "Actual time = 8:00 AM + 6h 19m = approximately 2:19 PM. Hour hand at ~69 degrees, minute hand at ~114 degrees.",
    ],
    answer:
      "The actual time is approximately 2:19 PM when the slow clock reads 2:00 PM.",
  },
  {
    id: "clock-p5",
    type: "mirror",
    question:
      "A clock is seen in a mirror and the mirror image shows 8:20. What is the actual time?",
    hourAngle: 100,
    minuteAngle: 240,
    steps: [
      "In a mirror, a clock image is laterally inverted — left and right swap.",
      "To find the real time from a mirror time, subtract the mirror time from 12:00 (for times before 11:60) or 11:60.",
      "Mirror shows 8:20. Subtract from 11:60: 11:60 - 8:20 = 3:40.",
      "Verify: at 3:40, hour hand = 30(3) + 0.5(40) = 90 + 20 = 110 degrees; minute hand = 6(40) = 240 degrees.",
      "The mirror reflection of 3:40 does indeed look like 8:20, confirming the answer.",
    ],
    answer:
      "The actual time is 3:40. Mirror time formula: subtract the shown time from 11:60.",
  },
]
