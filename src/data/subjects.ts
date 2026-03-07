import type { Subject } from "@/types/shared"

export interface SubjectInfo {
  slug: Subject
  name: string
  color: string
  description: string
  routes: { path: string; label: string }[]
}

export const subjects: SubjectInfo[] = [
  {
    slug: "quant",
    name: "Quantitative Aptitude",
    color: "blue",
    description:
      "Master arithmetic, algebra, geometry and data interpretation with step-by-step visual solvers.",
    routes: [
      { path: "/quant/step-solver", label: "Step-by-Step Solver" },
      { path: "/quant/geometry", label: "Geometry Visualizer" },
    ],
  },
  {
    slug: "reasoning",
    name: "Reasoning & Logic",
    color: "purple",
    description:
      "Solve seating arrangements, syllogisms and number series with animated visual deductions.",
    routes: [
      { path: "/reasoning/seating", label: "Seating Arrangement" },
      { path: "/reasoning/syllogism", label: "Syllogism Venn Builder" },
      { path: "/reasoning/series", label: "Series Pattern Detector" },
    ],
  },
  {
    slug: "polity",
    name: "Indian Polity",
    color: "red",
    description:
      "Explore the Constitution interactively — articles, amendments, landmark cases and their connections.",
    routes: [
      { path: "/polity/articles", label: "Article Explorer" },
      { path: "/polity/amendments", label: "Amendment Timeline" },
      { path: "/polity/landmark-cases", label: "Landmark Cases" },
    ],
  },
  {
    slug: "history",
    name: "Indian History",
    color: "amber",
    description:
      "Navigate a zoomable timeline from the Indus Valley to modern India with cause-effect chains.",
    routes: [
      { path: "/history/timeline", label: "Interactive Timeline" },
      { path: "/history/freedom-movement", label: "Freedom Movement" },
    ],
  },
  {
    slug: "geography",
    name: "Indian Geography",
    color: "green",
    description:
      "Explore India's physical and political geography on an interactive layered map.",
    routes: [],
  },
  {
    slug: "economics",
    name: "Indian Economy",
    color: "teal",
    description:
      "Visualize monetary and fiscal policy flows, budget breakdowns and economic concepts.",
    routes: [
      { path: "/economics/flows", label: "Policy Flow Diagrams" },
      { path: "/economics/budget", label: "Budget Visualizer" },
    ],
  },
  {
    slug: "science",
    name: "General Science",
    color: "cyan",
    description:
      "Interactive periodic table, human body systems explorer and key science concepts for exams.",
    routes: [
      { path: "/science/periodic-table", label: "Periodic Table" },
      { path: "/science/human-body", label: "Human Body Systems" },
    ],
  },
]
