import type { CauseEffectChain } from "@/types/history"

export const causeEffectChains: CauseEffectChain[] = [
  {
    id: "constitutional-evolution",
    title: "Constitutional Evolution: From Revolt to Self-Governance",
    events: [
      "revolt-of-1857",
      "goi-act-1858",
      "indian-councils-act-1861",
      "morley-minto-1909",
      "montagu-chelmsford-1919",
      "goi-act-1935",
    ],
    description:
      "The Revolt of 1857 ended Company rule and led to the Government of India Act 1858 (direct Crown rule). The Indian Councils Act 1861 introduced limited Indian representation. The Morley-Minto Reforms 1909 expanded representation but introduced separate electorates. The Montagu-Chelmsford Reforms 1919 introduced Dyarchy. The Government of India Act 1935 established provincial autonomy and proposed a federal structure that became the foundation for the Indian Constitution.",
  },
  {
    id: "freedom-movement-phases",
    title: "Freedom Movement: From Non-Cooperation to Independence",
    events: [
      "non-cooperation",
      "civil-disobedience",
      "quit-india",
      "independence",
    ],
    description:
      "The Non-Cooperation Movement (1920-22) was Gandhi's first mass movement, uniting Hindus and Muslims through the Khilafat issue. Its suspension after Chauri Chaura led to the Civil Disobedience Movement (1930-34), which internationalised the freedom struggle through the Salt Satyagraha. The failure of the Cripps Mission during WWII triggered the Quit India Movement (1942), the most intense phase. The combined pressure of sustained resistance, post-war British exhaustion, and the Naval Mutiny of 1946 led to Indian Independence in 1947.",
  },
  {
    id: "economic-liberalisation",
    title: "License Raj to LPG: India's Economic Transformation",
    events: [
      "bank-nationalisation",
      "emergency-1975",
      "liberalisation-1991",
      "gst-implementation",
    ],
    description:
      "Post-independence, India adopted a mixed economy with heavy state control (License Raj). Bank nationalisation (1969) and the Emergency (1975-77) marked peak state interventionism. Decades of controlled growth (Hindu rate of growth at 3.5%) and mounting fiscal deficits culminated in the Balance of Payments crisis of 1991 when forex reserves fell to cover just two weeks of imports. PM Narasimha Rao and FM Manmohan Singh launched the LPG (Liberalisation, Privatisation, Globalisation) reforms. This unleashed private enterprise, attracted FDI, and catalysed India's IT revolution, eventually leading to further reforms like GST (2017) creating a unified national market.",
  },
]
