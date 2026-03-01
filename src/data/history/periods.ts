import type { Period } from "@/types/history"

export const periods: Period[] = [
  {
    id: "ancient",
    name: "Ancient India",
    startYear: -3300,
    endYear: 600,
    events: [
      "indus-valley",
      "vedic-period",
      "mahajanapadas",
      "maurya-empire",
      "kalinga-war",
      "gupta-age",
    ],
    significance:
      "Spanning from the Indus Valley Civilisation to the end of the Gupta Empire, this era saw the birth of major religions (Hinduism, Buddhism, Jainism), the first political unification under the Mauryas, and the Golden Age of Indian science and culture under the Guptas.",
  },
  {
    id: "medieval",
    name: "Medieval India",
    startYear: 600,
    endYear: 1526,
    events: [
      "delhi-sultanate",
      "vijayanagara-empire",
    ],
    significance:
      "Marked by the rise and fall of regional kingdoms, the establishment of the Delhi Sultanate, and the Bhakti and Sufi movements. Indo-Islamic architecture and cultural synthesis defined this period.",
  },
  {
    id: "mughal",
    name: "Mughal Period",
    startYear: 1526,
    endYear: 1857,
    events: [
      "mughal-empire",
      "battle-of-plassey",
      "battle-of-buxar",
    ],
    significance:
      "The Mughal Empire unified much of the subcontinent, introduced centralised administration (Mansabdari, Jagirdari systems), and produced iconic architectural works. Its decline opened the door for European colonial powers.",
  },
  {
    id: "colonial",
    name: "Colonial Period",
    startYear: 1757,
    endYear: 1947,
    events: [
      "battle-of-plassey",
      "revolt-of-1857",
      "goi-act-1858",
      "indian-councils-act-1861",
      "inc-formation",
      "partition-of-bengal",
      "morley-minto-1909",
      "jallianwala-bagh",
      "montagu-chelmsford-1919",
      "non-cooperation",
      "civil-disobedience",
      "goi-act-1935",
      "quit-india",
      "independence",
    ],
    significance:
      "British colonial rule transformed India's economy, society, and political structures. The independence movement, led by figures like Gandhi, Nehru, and Ambedkar, resulted in India gaining freedom in 1947 through sustained non-violent and constitutional struggle.",
  },
  {
    id: "post-independence",
    name: "Post-Independence India",
    startYear: 1947,
    endYear: 2025,
    events: [
      "constitution-adoption",
      "first-general-elections",
      "sino-indian-war",
      "green-revolution",
      "bank-nationalisation",
      "emergency-1975",
      "operation-blue-star",
      "liberalisation-1991",
      "pokhran-ii",
      "gst-implementation",
    ],
    significance:
      "Independent India adopted a democratic constitution, pursued planned economic development, achieved food self-sufficiency through the Green Revolution, survived the Emergency crisis, and transformed its economy through the 1991 liberalisation reforms.",
  },
]
