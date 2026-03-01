import type { QuantConcept } from "@/types/quant"

export const mensurationConcept: QuantConcept = {
  topic: "mensuration",
  title: "Mensuration",
  description:
    "Mensuration is the measurement of geometric shapes — area, perimeter, surface area, and volume. Questions involve standard 2D and 3D shapes, cost of fencing/painting, and shape conversions (melting and recasting).",
  keyIdea:
    "When all linear dimensions are scaled by factor k, area scales by k² and volume by k³. This single rule solves all 'percentage increase in radius → percentage increase in area/volume' problems.",
  formulas: [
    {
      name: "2D Shapes",
      formula: "Triangle: ½bh (or √s(s−a)(s−b)(s−c))  |  Circle: πr², 2πr  |  Rectangle: lb, 2(l+b)  |  Trapezium: ½(a+b)h",
      whenToUse: "For area and perimeter of standard flat shapes — identify the shape and apply the right formula.",
    },
    {
      name: "3D Volumes",
      formula: "Cube: a³  |  Cuboid: lbh  |  Cylinder: πr²h  |  Cone: ⅓πr²h  |  Sphere: (4/3)πr³",
      whenToUse: "For volume of solid objects — melting/recasting problems equate volumes of the two shapes.",
    },
    {
      name: "Surface Areas",
      formula: "Cube: 6a²  |  Cylinder: 2πr(r+h)  |  Cone: πr(l+r) where l=√(r²+h²)  |  Sphere: 4πr²",
      whenToUse: "For painting/coating problems — surface area × rate = cost.",
    },
    {
      name: "Slant Height of Cone",
      formula: "l = √(r² + h²)",
      whenToUse: "Always compute slant height first before finding lateral surface area of a cone.",
    },
    {
      name: "Scaling Rule",
      formula: "If dimensions ×k: Area ×k²  |  Volume ×k³",
      whenToUse: "When radius/side increases by x% — area increases by (2x + x²/100)% and volume by a cube-based factor.",
    },
  ],
  examTags: ["SSC CGL", "SSC CGL Tier 2", "SSC CHSL", "RRB NTPC", "IBPS PO"],
  examRelevance:
    "Mensuration is one of the highest-weightage topics in SSC CGL Tier 2 — expect 4-6 questions. Cylinder, cone, and sphere conversion problems are especially frequent.",
}
