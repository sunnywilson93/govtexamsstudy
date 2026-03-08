import type { HistoryRevision } from "@/types/history"

export const postIndependenceConsolidationRevision: HistoryRevision = {
  topic: "post-independence-consolidation",
  bullets: [
    "Constitution came into effect on January 26, 1950 (Republic Day — commemorating 1930 Purna Swaraj resolution).",
    "Constituent Assembly: 299 members; Drafting Committee chaired by B.R. Ambedkar; completed in 2 years, 11 months, 18 days.",
    "First President: Dr. Rajendra Prasad; First PM: Jawaharlal Nehru; First CEC: Sukumar Sen.",
    "First General Elections (1951-52) — world's largest democratic exercise; 173 million voters; 45% turnout; INC won 364/489 seats.",
    "First Five Year Plan (1951-56) — Harrod-Domar model; focus on agriculture, irrigation; Bhakra-Nangal Dam.",
    "Second Five Year Plan (1956-61) — Mahalanobis model; heavy industrialization; Bhilai (USSR), Rourkela (Germany), Durgapur (UK) steel plants.",
    "Third Five Year Plan (1961-66) — disrupted by 1962 war, 1965 war, and droughts; led to 'Plan Holiday' (1966-69).",
    "Avadi Resolution (1955) — Congress adopts 'socialist pattern of society' as economic goal.",
    "Industrial Policy Resolution (1956) — reserved key industries for the public sector.",
    "Potti Sreeramulu fasted unto death (December 15, 1952) for Telugu state — Andhra State created October 1, 1953.",
    "States Reorganisation Commission (1953-55) — Fazl Ali (chair), K.M. Panikkar, H.N. Kunzru.",
    "States Reorganisation Act (1956) — 14 states and 6 union territories.",
    "Maharashtra and Gujarat bifurcated from bilingual Bombay state in 1960 (Samyukta Maharashtra Samiti agitation).",
    "First Amendment (1951) — zamindari abolition (Ninth Schedule), reservation provision (Article 15(4)), restrictions on free speech (Article 19(2)).",
    "Hindu Code Bills (1955-56) — Hindu Marriage Act, Succession Act, Adoption Act, Guardianship Act.",
    "Panchsheel Agreement (1954) — Five Principles of Peaceful Coexistence between India and China.",
    "Sino-Indian War (October-November 1962) — India defeated in NEFA (Arunachal Pradesh, an Indian state) and Aksai Chin.",
    "Defence Minister Krishna Menon resigned after 1962 war; Nehru's health declined.",
    "IITs: Kharagpur (1951), Bombay, Madras, Kanpur, Delhi (by 1961); IIMs: Calcutta, Ahmedabad (1961); AIIMS Delhi (1956).",
    "Nehru died on May 27, 1964; Lal Bahadur Shastri succeeded as PM.",
  ],
  comparisons: [
    {
      title: "First Three Five Year Plans",
      headers: ["Plan", "Period", "Model / Focus", "Key Projects / Events"],
      rows: [
        ["First FYP", "1951-56", "Harrod-Domar; agriculture & irrigation", "Bhakra-Nangal Dam; Hirakud Dam; DVC; land reform"],
        ["Second FYP", "1956-61", "Mahalanobis; heavy industry", "Bhilai (USSR), Rourkela (Germany), Durgapur (UK) steel plants"],
        ["Third FYP", "1961-66", "Self-reliance (failed)", "Disrupted by 1962 war, 1965 war, droughts; Plan Holiday followed"],
      ],
    },
    {
      title: "Key Institutional Foundations (Nehruvian Era)",
      headers: ["Institution", "Year", "Significance"],
      rows: [
        ["Planning Commission", "1950", "Central economic planning; PM as ex-officio chairman"],
        ["IIT Kharagpur", "1951", "First IIT; modelled on MIT"],
        ["Atomic Energy Commission", "1948", "Under Homi Bhabha; nuclear program"],
        ["AIIMS Delhi", "1956", "Premier medical institution"],
        ["IIM Calcutta / Ahmedabad", "1961", "Management education"],
        ["INCOSPAR", "1962", "Under Vikram Sarabhai; space research precursor to ISRO"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Steel Plants & Foreign Partners",
      mnemonic: "Bhilai=Russia, Rourkela=Germany, Durgapur=Britain — 'BRD = Big Russian-German-British Deal'",
      explanation:
        "The three public-sector steel plants of the Second Five Year Plan and their foreign collaborators. One of the most frequently tested facts in UPSC/SSC exams.",
    },
    {
      title: "States Reorganisation Commission Members",
      mnemonic: "Fazl Ali (Chair), K.M. Panikkar, H.N. Kunzru — 'FPK Commission'",
      explanation:
        "The three members of the SRC (1953-55) that recommended linguistic reorganization of states. Fazl Ali was the chairman.",
    },
    {
      title: "First Amendment Trio (Z-R-S)",
      mnemonic: "Zamindari abolition (Ninth Schedule), Reservations (Article 15(4)), Speech restrictions (Article 19(2)) — 'ZRS Amendment'",
      explanation:
        "The three issues addressed by the First Amendment to the Constitution (1951).",
    },
  ],
}
