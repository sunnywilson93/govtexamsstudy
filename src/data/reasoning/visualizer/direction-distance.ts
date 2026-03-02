import type { DirectionProblem } from "@/types/reasoning"

export const directionProblems: DirectionProblem[] = [
  {
    id: "dir-1",
    question:
      "A person walks 5 km North, then 3 km East, then 5 km South. How far and in which direction is the person from the starting point?",
    steps: [
      { id: 1, direction: "N", distance: 5, label: "Walk 5 km North" },
      { id: 2, direction: "E", distance: 3, label: "Walk 3 km East" },
      { id: 3, direction: "S", distance: 5, label: "Walk 5 km South" },
    ],
    finalDirection: "E",
    finalDistance: 3,
    answer: "3 km East of the starting point.",
  },
  {
    id: "dir-2",
    question:
      "A person walks 4 km North, then 4 km East, then 4 km South, then 4 km West. Where is the person relative to the starting point?",
    steps: [
      { id: 1, direction: "N", distance: 4, label: "Walk 4 km North" },
      { id: 2, direction: "E", distance: 4, label: "Walk 4 km East" },
      { id: 3, direction: "S", distance: 4, label: "Walk 4 km South" },
      { id: 4, direction: "W", distance: 4, label: "Walk 4 km West" },
    ],
    finalDirection: "N",
    finalDistance: 0,
    answer: "Back at the starting point, 0 km displacement.",
  },
  {
    id: "dir-3",
    question:
      "A person walks 3 km East, then 4 km North. How far is the person from the starting point?",
    steps: [
      { id: 1, direction: "E", distance: 3, label: "Walk 3 km East" },
      { id: 2, direction: "N", distance: 4, label: "Walk 4 km North" },
    ],
    finalDirection: "NE",
    finalDistance: 5,
    answer:
      "5 km from the starting point (North-East direction). Pythagoras: √(3² + 4²) = √25 = 5.",
  },
  {
    id: "dir-4",
    question:
      "A person walks 6 km South, then 8 km East. How far is the person from the starting point?",
    steps: [
      { id: 1, direction: "S", distance: 6, label: "Walk 6 km South" },
      { id: 2, direction: "E", distance: 8, label: "Walk 8 km East" },
    ],
    finalDirection: "SE",
    finalDistance: 10,
    answer:
      "10 km from the starting point (South-East direction). Pythagoras: √(6² + 8²) = √100 = 10.",
  },
  {
    id: "dir-5",
    question:
      "A person walks 2 km North, then 3 km West, then 2 km South, then 1 km East. How far and in which direction is the person from the starting point?",
    steps: [
      { id: 1, direction: "N", distance: 2, label: "Walk 2 km North" },
      { id: 2, direction: "W", distance: 3, label: "Walk 3 km West" },
      { id: 3, direction: "S", distance: 2, label: "Walk 2 km South" },
      { id: 4, direction: "E", distance: 1, label: "Walk 1 km East" },
    ],
    finalDirection: "W",
    finalDistance: 2,
    answer:
      "2 km West of the starting point. North/South cancel out; net West = 3 − 1 = 2 km.",
  },
]
