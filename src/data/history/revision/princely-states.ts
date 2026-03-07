import type { HistoryRevision } from "@/types/history"

export const princelyStatesRevision: HistoryRevision = {
  topic: "princely-states",
  bullets: [
    "There were 565 princely states at the time of independence, covering about 40% of India's land area.",
    "Sardar Vallabhbhai Patel was Deputy PM and Home Minister; V.P. Menon was Secretary of the Ministry of States.",
    "The States Department (Ministry of States) was established on 5 July 1947 to handle princely state integration.",
    "The Instrument of Accession was the legal document by which princely states acceded to India on three subjects: defence, external affairs, and communications.",
    "By 15 August 1947, all but three princely states (Hyderabad, Junagadh, Kashmir) had signed the Instrument of Accession.",
    "Hyderabad was the largest and richest princely state, ruled by Nizam Osman Ali Khan.",
    "Operation Polo (13-17 September 1948) was the military action by which Hyderabad was integrated into India.",
    "The Razakars, led by Qasim Razvi, were a paramilitary militia that terrorized Hyderabad's Hindu population.",
    "Maharaja Hari Singh of J&K signed the Instrument of Accession on 26 October 1947 after Pakistani tribal invaders attacked.",
    "Indian troops were airlifted to Srinagar on 27 October 1947 to defend Kashmir.",
    "The first India-Pakistan war over Kashmir (1947-48) ended with a UN-mandated ceasefire on 1 January 1949.",
    "Junagadh's Nawab acceded to Pakistan despite having an overwhelmingly Hindu population; he later fled to Pakistan.",
    "A plebiscite in Junagadh (February 1948) showed 99.95% voted to join India.",
    "Rajasthan was formed by merging 22 princely states.",
    "PEPSU (Patiala and East Punjab States Union) was formed by merging 8 princely states of Punjab.",
    "The Constitution classified territories as Part A (former British provinces), Part B (former princely states), Part C (Chief Commissioner's provinces), and Part D (Andaman & Nicobar).",
    "The States Reorganisation Act 1956 reorganized states on a linguistic basis, abolishing the Part A/B/C distinction.",
    "Privy purses to former rulers were abolished by the 26th Constitutional Amendment in 1971 under PM Indira Gandhi.",
    "Travancore and Jodhpur initially considered independence but were persuaded by Patel to accede to India.",
    "V.P. Menon wrote 'The Story of the Integration of the Indian States' (1956), documenting the entire integration process.",
  ],
  comparisons: [
    {
      title: "Three Holdout Princely States",
      headers: ["State", "Ruler", "Issue", "Resolution"],
      rows: [
        ["Hyderabad", "Nizam Osman Ali Khan", "Declared independence; Razakar violence", "Operation Polo (Sept 1948) — military action"],
        ["Junagadh", "Nawab Mahabat Khan III", "Muslim ruler acceded to Pakistan; Hindu-majority population", "Nawab fled; plebiscite (Feb 1948) — 99.95% chose India"],
        ["Jammu & Kashmir", "Maharaja Hari Singh", "Wanted independence; Pakistani tribal invasion", "Signed Instrument of Accession (26 Oct 1947); Indian troops airlifted"],
      ],
    },
    {
      title: "Constitutional Classification of States (1950)",
      headers: ["Category", "Type", "Examples"],
      rows: [
        ["Part A", "Former British provinces", "Madras, Bombay, UP, Bihar, West Bengal, Assam"],
        ["Part B", "Former princely states / merged unions", "Hyderabad, Mysore, Rajasthan, PEPSU, Travancore-Cochin"],
        ["Part C", "Chief Commissioner's provinces + small states", "Delhi, Ajmer, Coorg, Bhopal, Manipur, Tripura"],
        ["Part D", "Territory", "Andaman & Nicobar Islands"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Three Holdout States (HJK)",
      mnemonic: "Hyderabad, Junagadh, Kashmir",
      explanation:
        "The three princely states that did not sign the Instrument of Accession by 15 August 1947. Each was resolved differently: Hyderabad by military action (Operation Polo), Junagadh by plebiscite, and Kashmir by accession during a military crisis.",
    },
    {
      title: "Patel-Menon Partnership (PM for PM)",
      mnemonic: "Patel (Political Persuasion) + Menon (Meticulous Administration)",
      explanation:
        "Sardar Patel handled the political and diplomatic aspects of integration while V.P. Menon managed the administrative, legal, and bureaucratic details. Together they integrated 562 states in just weeks — one of the greatest diplomatic achievements in modern history.",
    },
  ],
}
