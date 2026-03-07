import type { SyllogismProblem } from "@/types/reasoning"

export const syllogismProblems: SyllogismProblem[] = [
  {
    id: "syl-01",
    statements: [
      { type: "all", subject: "Dogs", predicate: "Animals" },
      { type: "all", subject: "Animals", predicate: "Living beings" },
    ],
    conclusions: [
      {
        statement: { type: "all", subject: "Dogs", predicate: "Living beings" },
        isValid: true,
      },
      {
        statement: { type: "some", subject: "Living beings", predicate: "Dogs" },
        isValid: true,
      },
    ],
    steps: [
      {
        id: 1,
        description: "Draw a circle for Animals and place Dogs entirely inside it (All Dogs are Animals).",
        circles: [
          { label: "Animals", x: 200, y: 150, r: 100 },
          { label: "Dogs", x: 200, y: 180, r: 50 },
        ],
        regions: [
          { type: "filled", description: "Dogs region is entirely within Animals" },
        ],
      },
      {
        id: 2,
        description:
          "Draw a larger circle for Living beings and place Animals entirely inside it (All Animals are Living beings).",
        circles: [
          { label: "Living beings", x: 200, y: 130, r: 150 },
          { label: "Animals", x: 200, y: 160, r: 100 },
          { label: "Dogs", x: 200, y: 190, r: 50 },
        ],
        regions: [
          { type: "filled", description: "Dogs inside Animals inside Living beings" },
        ],
      },
      {
        id: 3,
        description:
          "Conclusion 1: All Dogs are Living beings — Dogs circle is entirely within Living beings. VALID. Conclusion 2: Some Living beings are Dogs — since Dogs exist inside Living beings, at least some Living beings are Dogs. VALID.",
        circles: [
          { label: "Living beings", x: 200, y: 130, r: 150 },
          { label: "Animals", x: 200, y: 160, r: 100 },
          { label: "Dogs", x: 200, y: 190, r: 50 },
        ],
        regions: [
          { type: "shaded", description: "Dogs overlap with Living beings confirms both conclusions" },
        ],
      },
    ],
  },
  {
    id: "syl-02",
    statements: [
      { type: "all", subject: "Roses", predicate: "Flowers" },
      { type: "some", subject: "Flowers", predicate: "Red things" },
    ],
    conclusions: [
      {
        statement: { type: "some", subject: "Roses", predicate: "Red things" },
        isValid: false,
      },
      {
        statement: { type: "some", subject: "Red things", predicate: "Flowers" },
        isValid: true,
      },
    ],
    steps: [
      {
        id: 1,
        description: "Draw Flowers circle. Place Roses entirely inside it (All Roses are Flowers).",
        circles: [
          { label: "Flowers", x: 200, y: 150, r: 100 },
          { label: "Roses", x: 180, y: 170, r: 45 },
        ],
        regions: [
          { type: "filled", description: "Roses entirely within Flowers" },
        ],
      },
      {
        id: 2,
        description:
          "Draw Red things circle overlapping with Flowers (Some Flowers are Red things). The overlap may or may not include the Roses region.",
        circles: [
          { label: "Flowers", x: 180, y: 150, r: 100 },
          { label: "Roses", x: 160, y: 170, r: 45 },
          { label: "Red things", x: 290, y: 150, r: 80 },
        ],
        regions: [
          { type: "shaded", description: "Overlap between Flowers and Red things exists but may not touch Roses" },
        ],
      },
      {
        id: 3,
        description:
          "Conclusion 1: Some Roses are Red things — the overlap of Flowers and Red things does not necessarily include any part of Roses. INVALID. Conclusion 2: Some Red things are Flowers — the overlap region confirms this. VALID.",
        circles: [
          { label: "Flowers", x: 180, y: 150, r: 100 },
          { label: "Roses", x: 160, y: 170, r: 45 },
          { label: "Red things", x: 290, y: 150, r: 80 },
        ],
        regions: [
          { type: "empty", description: "No guaranteed overlap between Roses and Red things" },
          { type: "shaded", description: "Confirmed overlap between Red things and Flowers" },
        ],
      },
    ],
  },
  {
    id: "syl-03",
    statements: [
      { type: "no", subject: "Cats", predicate: "Dogs" },
      { type: "all", subject: "Dogs", predicate: "Pets" },
    ],
    conclusions: [
      {
        statement: { type: "no", subject: "Cats", predicate: "Pets" },
        isValid: false,
      },
      {
        statement: { type: "some", subject: "Pets", predicate: "Dogs" },
        isValid: true,
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Draw separate circles for Cats and Dogs with no overlap (No Cats are Dogs).",
        circles: [
          { label: "Cats", x: 120, y: 150, r: 70 },
          { label: "Dogs", x: 300, y: 150, r: 70 },
        ],
        regions: [
          { type: "empty", description: "No overlap between Cats and Dogs" },
        ],
      },
      {
        id: 2,
        description:
          "Draw Pets circle containing all of Dogs (All Dogs are Pets). Pets may or may not overlap with Cats.",
        circles: [
          { label: "Cats", x: 120, y: 150, r: 70 },
          { label: "Dogs", x: 300, y: 170, r: 60 },
          { label: "Pets", x: 280, y: 150, r: 110 },
        ],
        regions: [
          { type: "filled", description: "Dogs entirely within Pets" },
          { type: "empty", description: "Cats may or may not overlap with Pets" },
        ],
      },
      {
        id: 3,
        description:
          "Conclusion 1: No Cats are Pets — Pets circle could extend to include some Cats (Cats can also be Pets). INVALID. Conclusion 2: Some Pets are Dogs — Dogs is entirely inside Pets, so some Pets are definitely Dogs. VALID.",
        circles: [
          { label: "Cats", x: 120, y: 150, r: 70 },
          { label: "Dogs", x: 300, y: 170, r: 60 },
          { label: "Pets", x: 280, y: 150, r: 110 },
        ],
        regions: [
          { type: "shaded", description: "Dogs within Pets confirms some Pets are Dogs" },
          { type: "empty", description: "Cats-Pets relationship is indeterminate" },
        ],
      },
    ],
  },
  {
    id: "syl-04",
    statements: [
      { type: "some", subject: "Pens", predicate: "Pencils" },
      { type: "all", subject: "Pencils", predicate: "Stationery" },
    ],
    conclusions: [
      {
        statement: { type: "some", subject: "Pens", predicate: "Stationery" },
        isValid: true,
      },
      {
        statement: { type: "all", subject: "Pens", predicate: "Stationery" },
        isValid: false,
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Draw a circle for Pencils. Draw a Pens circle partially overlapping with Pencils (Some Pens are Pencils).",
        circles: [
          { label: "Pencils", x: 200, y: 150, r: 80 },
          { label: "Pens", x: 120, y: 150, r: 70 },
        ],
        regions: [
          { type: "shaded", description: "Overlap region represents Pens that are also Pencils" },
        ],
      },
      {
        id: 2,
        description:
          "Draw a larger Stationery circle that completely contains Pencils (All Pencils are Stationery). The Pens circle partially overlaps Pencils, which is inside Stationery.",
        circles: [
          { label: "Stationery", x: 220, y: 140, r: 140 },
          { label: "Pencils", x: 220, y: 160, r: 80 },
          { label: "Pens", x: 120, y: 160, r: 70 },
        ],
        regions: [
          { type: "filled", description: "Pencils entirely within Stationery" },
          { type: "shaded", description: "Part of Pens overlaps with Pencils (and thus Stationery)" },
        ],
      },
      {
        id: 3,
        description:
          "Conclusion 1: Some Pens are Stationery — the Pens that overlap with Pencils are inside Stationery. VALID. Conclusion 2: All Pens are Stationery — part of the Pens circle extends outside the Stationery circle. INVALID.",
        circles: [
          { label: "Stationery", x: 220, y: 140, r: 140 },
          { label: "Pencils", x: 220, y: 160, r: 80 },
          { label: "Pens", x: 120, y: 160, r: 70 },
        ],
        regions: [
          { type: "shaded", description: "Some Pens within Stationery via Pencils overlap — Conclusion 1 valid" },
          { type: "empty", description: "Part of Pens outside Stationery — Conclusion 2 invalid" },
        ],
      },
    ],
  },
  {
    id: "syl-05",
    statements: [
      { type: "all", subject: "Teachers", predicate: "Educated" },
      { type: "no", subject: "Educated", predicate: "Ignorant" },
    ],
    conclusions: [
      {
        statement: { type: "no", subject: "Teachers", predicate: "Ignorant" },
        isValid: true,
      },
      {
        statement: { type: "some", subject: "Educated", predicate: "Teachers" },
        isValid: true,
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Draw a circle for Educated. Place Teachers entirely inside it (All Teachers are Educated).",
        circles: [
          { label: "Educated", x: 200, y: 150, r: 100 },
          { label: "Teachers", x: 200, y: 180, r: 55 },
        ],
        regions: [
          { type: "filled", description: "Teachers entirely within Educated" },
        ],
      },
      {
        id: 2,
        description:
          "Draw a separate Ignorant circle with no overlap with Educated (No Educated is Ignorant). Since Teachers are inside Educated, Teachers also have no overlap with Ignorant.",
        circles: [
          { label: "Educated", x: 170, y: 150, r: 100 },
          { label: "Teachers", x: 170, y: 180, r: 55 },
          { label: "Ignorant", x: 330, y: 150, r: 70 },
        ],
        regions: [
          { type: "filled", description: "Teachers within Educated" },
          { type: "empty", description: "No overlap between Educated and Ignorant" },
        ],
      },
      {
        id: 3,
        description:
          "Conclusion 1: No Teachers are Ignorant — Teachers is inside Educated, which is completely separate from Ignorant. VALID. Conclusion 2: Some Educated are Teachers — since Teachers is a non-empty subset of Educated, some Educated people are Teachers. VALID.",
        circles: [
          { label: "Educated", x: 170, y: 150, r: 100 },
          { label: "Teachers", x: 170, y: 180, r: 55 },
          { label: "Ignorant", x: 330, y: 150, r: 70 },
        ],
        regions: [
          { type: "shaded", description: "Teachers within Educated confirms some Educated are Teachers" },
          { type: "empty", description: "No overlap between Teachers and Ignorant confirms Conclusion 1" },
        ],
      },
    ],
  },
]
