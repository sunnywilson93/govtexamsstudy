import type { HistoryRevision } from "@/types/history"

export const britishExpansionRevision: HistoryRevision = {
  topic: "british-expansion",
  bullets: [
    "Battle of Plassey (23 June 1757): Robert Clive defeated Siraj-ud-Daulah; Mir Jafar betrayed the Nawab; marks the beginning of British political rule.",
    "Plassey was more of a 'transaction' than a real battle — won through conspiracy, not military superiority.",
    "Mir Jafar was installed as the puppet Nawab of Bengal after Plassey; later replaced by Mir Qasim (1760).",
    "Mir Qasim abolished internal trade duties to give Indian merchants equal footing with the EIC — this led to conflict.",
    "Battle of Buxar (22 October 1764): Major Hector Munro defeated the combined forces of Mir Qasim, Shuja-ud-Daulah, and Shah Alam II.",
    "Buxar was militarily more significant than Plassey — it established the Company as the supreme military power in North India.",
    "Treaty of Allahabad (1765): Clive obtained the Diwani (revenue collection rights) of Bengal, Bihar, and Orissa from Shah Alam II.",
    "The Dual System (Diwani under the Company, Nizamat under the Nawab) led to exploitation — described as 'Plunder of Bengal.'",
    "Lord Wellesley introduced the Subsidiary Alliance System in 1798; Nizam of Hyderabad was the first to accept.",
    "Under Subsidiary Alliance, Indian rulers had to accept a British Resident, maintain British troops, cede territory or pay for the troops, and surrender foreign affairs.",
    "Lord Dalhousie applied the Doctrine of Lapse — annexed states whose rulers died without a natural male heir.",
    "States annexed under Doctrine of Lapse: Satara (1848), Sambalpur (1850), Udaipur (1852), Jhansi (1853), Nagpur (1854).",
    "Awadh (1856) was annexed by Dalhousie on grounds of 'misgovernance,' not the Doctrine of Lapse.",
    "Punjab was annexed in 1849 after the Second Anglo-Sikh War; Koh-i-Noor diamond taken.",
    "Four Anglo-Mysore Wars (1767-99): Hyder Ali and Tipu Sultan vs British; Treaty of Mangalore (1784) was the last treaty dictated by an Indian power to the British.",
    "Tipu Sultan was killed defending Srirangapatam in the Fourth Anglo-Mysore War (1799).",
    "Three Anglo-Maratha Wars (1775-1818): ended with the fall of the Peshwa; Treaty of Bassein (1802) was a turning point.",
    "First Anglo-Sikh War (1845-46): Treaty of Lahore — Sikhs ceded Jalandhar Doab.",
    "Second Anglo-Sikh War (1848-49): Punjab annexed; last independent Indian power subdued.",
  ],
  comparisons: [
    {
      title: "Battle of Plassey vs Battle of Buxar",
      headers: ["Aspect", "Plassey (1757)", "Buxar (1764)"],
      rows: [
        ["Date", "23 June 1757", "22 October 1764"],
        ["British Commander", "Robert Clive", "Major Hector Munro"],
        ["Indian Side", "Siraj-ud-Daulah (Nawab of Bengal)", "Mir Qasim + Shuja-ud-Daulah + Shah Alam II"],
        ["Nature", "Won by conspiracy (Mir Jafar's betrayal)", "Decisive military victory"],
        ["Military Significance", "Low — hardly a real battle", "High — established unrivalled military supremacy"],
        ["Political Outcome", "Company became kingmaker in Bengal", "Company became the real power in Northern India"],
        ["Key Treaty", "None formal (Mir Jafar installed)", "Treaty of Allahabad (1765) — Diwani rights"],
      ],
    },
    {
      title: "States Annexed by Dalhousie",
      headers: ["State", "Year", "Ground for Annexation"],
      rows: [
        ["Satara", "1848", "Doctrine of Lapse"],
        ["Punjab", "1849", "Right of Conquest (Anglo-Sikh War)"],
        ["Sambalpur", "1850", "Doctrine of Lapse"],
        ["Pegu (Lower Burma)", "1852", "Right of Conquest"],
        ["Udaipur", "1852", "Doctrine of Lapse"],
        ["Jhansi", "1853", "Doctrine of Lapse"],
        ["Nagpur", "1854", "Doctrine of Lapse"],
        ["Awadh (Oudh)", "1856", "Alleged Misgovernance"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Subsidiary Alliance Acceptors (HMT-APe)",
      mnemonic: "Hyderabad, Mysore, Tanjore, Awadh, Peshwa",
      explanation:
        "The five most important states that accepted the Subsidiary Alliance: Hyderabad (1798, first), Mysore (1799), Tanjore (1799), Awadh (1801), Peshwa/Maratha (1802, Treaty of Bassein). Many smaller Rajput states also accepted.",
    },
    {
      title: "Doctrine of Lapse States (SaSa-UJN-A)",
      mnemonic: "Satara, Sambalpur, Udaipur, Jhansi, Nagpur — Awadh (misgovernance)",
      explanation:
        "States annexed under the Doctrine of Lapse in chronological order: Satara (1848), Sambalpur (1850), Udaipur (1852), Jhansi (1853), Nagpur (1854). Awadh (1856) was annexed on grounds of misgovernance, not the Doctrine of Lapse — a critical distinction for exams.",
    },
  ],
}
