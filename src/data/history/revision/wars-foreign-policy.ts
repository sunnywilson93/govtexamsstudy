import type { HistoryRevision } from "@/types/history"

export const warsForeignPolicyRevision: HistoryRevision = {
  topic: "wars-foreign-policy",
  bullets: [
    "Panchsheel (Five Principles of Peaceful Coexistence) was signed between India and China in 1954 as part of the agreement on trade with Tibet.",
    "The five principles of Panchsheel: mutual respect for sovereignty, non-aggression, non-interference, equality & mutual benefit, peaceful coexistence.",
    "The Non-Aligned Movement (NAM) was co-founded by Nehru, Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia), and Nkrumah (Ghana).",
    "NAM was formally established at the Belgrade Summit in 1961.",
    "The Bandung Conference (1955) in Indonesia was the precursor to NAM.",
    "The Sino-Indian War (1962) was fought over the McMahon Line (NEFA) and Aksai Chin (Ladakh).",
    "China declared a unilateral ceasefire on 21 November 1962 and withdrew from NEFA but retained Aksai Chin.",
    "Defence Minister V.K. Krishna Menon resigned after India's defeat in the 1962 war.",
    "Pakistan launched Operation Gibraltar (1965) to infiltrate Kashmir, leading to the Indo-Pak War of 1965.",
    "The Tashkent Declaration (10 January 1966) ended the 1965 war; PM Lal Bahadur Shastri died in Tashkent hours later.",
    "The Indo-Pak War of 1971 lasted 13 days (3-16 December) and resulted in the creation of Bangladesh.",
    "93,000 Pakistani soldiers surrendered at Dhaka in 1971 — the largest military surrender since WWII.",
    "India signed the Treaty of Peace, Friendship and Cooperation with the Soviet Union in August 1971.",
    "The Shimla Agreement (2 July 1972) was signed between Indira Gandhi and Z.A. Bhutto.",
    "The ceasefire line in Kashmir was redesignated as the Line of Control (LoC) under the Shimla Agreement.",
    "India conducted its first nuclear test (Pokhran-I / Smiling Buddha) on 18 May 1974 under PM Indira Gandhi.",
    "Pokhran-II nuclear tests were conducted on 11 and 13 May 1998 under PM Atal Bihari Vajpayee.",
    "The Kargil War (1999) was fought at altitudes of 16,000-18,000 feet; India recaptured posts in Operation Vijay.",
    "The Kargil Review Committee was headed by K. Subrahmanyam to review security lapses.",
    "India's nuclear doctrine follows a 'No First Use' policy and maintains a nuclear triad (land, air, sea).",
  ],
  comparisons: [
    {
      title: "India's Major Wars",
      headers: ["War", "Year", "Opponent", "Cause", "Outcome / Agreement"],
      rows: [
        ["Sino-Indian War", "1962", "China", "Border dispute (McMahon Line, Aksai Chin)", "India defeated; China retained Aksai Chin; ceasefire"],
        ["Indo-Pak War", "1965", "Pakistan", "Operation Gibraltar in Kashmir", "Inconclusive; Tashkent Declaration (status quo ante)"],
        ["Indo-Pak War", "1971", "Pakistan", "Bangladesh liberation; refugee crisis", "Bangladesh created; 93,000 POWs; Shimla Agreement (1972)"],
        ["Kargil War", "1999", "Pakistan", "Pakistani infiltration across LoC", "India recaptured all posts; Pakistan withdrew; Operation Vijay"],
      ],
    },
    {
      title: "India's Nuclear Tests",
      headers: ["Test", "Date", "PM", "Code Name", "Significance"],
      rows: [
        ["Pokhran-I", "18 May 1974", "Indira Gandhi", "Smiling Buddha", "Described as 'peaceful nuclear explosion'; no weapons declaration"],
        ["Pokhran-II", "11 & 13 May 1998", "Atal Bihari Vajpayee", "Operation Shakti", "India declared itself a nuclear weapons state; 5 tests conducted"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Panchsheel Principles (SNIEP)",
      mnemonic: "Sovereignty, Non-aggression, Non-Interference, Equality, Peaceful coexistence",
      explanation:
        "The five principles of Panchsheel (1954): mutual respect for Sovereignty and territorial integrity, Non-aggression, Non-Interference in internal affairs, Equality and cooperation for mutual benefit, and Peaceful coexistence.",
    },
    {
      title: "NAM Founders (NTNSK)",
      mnemonic: "Nehru, Tito, Nasser, Sukarno, Nkrumah",
      explanation:
        "The five key founders of the Non-Aligned Movement: Jawaharlal Nehru (India), Josip Broz Tito (Yugoslavia), Gamal Abdel Nasser (Egypt), Sukarno (Indonesia), and Kwame Nkrumah (Ghana). Formally established at the Belgrade Summit in 1961.",
    },
  ],
}
