import type { HistoryRevision } from "@/types/history"

export const constitutionalDevelopmentRevision: HistoryRevision = {
  topic: "constitutional-development",
  bullets: [
    "Regulating Act 1773: First Act to regulate EIC; created Governor-General of Bengal (Warren Hastings); Supreme Court at Calcutta (1774).",
    "Pitt's India Act 1784: Established dual control — Board of Control (Government) + Court of Directors (Company); territories called 'British possessions in India.'",
    "Charter Act 1813: Ended EIC's trade monopoly (except China/tea); Rs 1 lakh for Indian education; missionaries allowed in India.",
    "Charter Act 1833: Governor-General of Bengal became Governor-General of India (first: Lord William Bentinck); EIC's commercial activities ended; Law Commission (Macaulay) established.",
    "Charter Act 1853: Last Charter Act; separated legislative and executive functions; open competition for civil services introduced.",
    "GoI Act 1858: Transferred power from EIC to Crown; Governor-General became Viceroy (first: Lord Canning); Secretary of State for India created.",
    "Queen Victoria's Proclamation (1 November 1858): Promised religious tolerance, non-interference, and equal treatment.",
    "Indian Councils Act 1861: Nominated Indians in legislative councils for the first time (3 Indians); portfolio system introduced.",
    "Indian Councils Act 1892: Enlarged councils; indirect election introduced (word 'election' avoided); members could discuss budget but not vote on it.",
    "Indian Councils Act 1909 (Morley-Minto Reforms): Introduced separate electorates for Muslims; S.P. Sinha — first Indian in Viceroy's Executive Council.",
    "GoI Act 1919 (Montagu-Chelmsford Reforms): Introduced Dyarchy in provinces (Transferred + Reserved subjects); bicameral legislature at centre.",
    "The August Declaration (1917) by Montagu promised 'progressive realisation of responsible government.'",
    "GoI Act 1935: Proposed All-India Federation (never implemented); introduced provincial autonomy; abolished Dyarchy in provinces; three lists (Federal, Provincial, Concurrent); Federal Court established.",
    "GoI Act 1935 was the longest Act (321 sections, 10 schedules); franchise expanded to 35 million voters.",
    "1937 elections: Congress formed governments in 8 of 11 provinces under GoI Act 1935.",
    "Indian Independence Act 1947: Created India and Pakistan (15 August 1947); abolished Secretary of State's office; Constituent Assemblies empowered.",
    "Lord Mountbatten was the first Governor-General of free India; C. Rajagopalachari was the last.",
    "Until the new Constitution was framed, GoI Act 1935 governed India (with modifications).",
    "Separate electorates (Morley-Minto, 1909) are considered the 'seeds of communalism' and Pakistan.",
  ],
  comparisons: [
    {
      title: "Key Constitutional Acts — Chronological Summary",
      headers: ["Act", "Year", "Key Provision", "Significance"],
      rows: [
        ["Regulating Act", "1773", "Governor-General of Bengal; Supreme Court", "First parliamentary regulation of EIC"],
        ["Pitt's India Act", "1784", "Dual control (Board of Control + Court of Directors)", "Government control over EIC's political affairs"],
        ["Charter Act", "1833", "Governor-General of India; end of EIC commerce", "Centralization of administration"],
        ["GoI Act", "1858", "Crown rule; Viceroy; Secretary of State", "End of EIC; direct Crown governance"],
        ["Indian Councils Act", "1861", "Nominated Indians in councils; portfolio system", "Beginning of Indian association in legislation"],
        ["Indian Councils Act", "1909", "Separate electorates for Muslims", "Communal representation; seeds of partition"],
        ["GoI Act", "1919", "Dyarchy in provinces; bicameral legislature", "First step toward responsible government in provinces"],
        ["GoI Act", "1935", "Provincial autonomy; Federal Court; three lists", "Foundation of India's Constitution"],
        ["Independence Act", "1947", "Two dominions; Constituent Assemblies", "End of British rule"],
      ],
    },
    {
      title: "Dyarchy: Transferred vs Reserved Subjects (GoI Act 1919)",
      headers: ["Transferred Subjects (Indian Ministers)", "Reserved Subjects (Governor)"],
      rows: [
        ["Education", "Finance"],
        ["Public Health", "Law and Order"],
        ["Local Self-Government", "Police"],
        ["Agriculture", "Revenue"],
        ["Public Works", "Justice"],
        ["Industries", "Press"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Constitutional Acts in Order (RPC-C-G-ICM-MG-I)",
      mnemonic: "Regulating (1773), Pitt's (1784), Charter (1833), Charter (1853), GoI (1858), Indian Councils (1861, 1892, 1909), Montford (1919), GoI (1935), Independence (1947)",
      explanation:
        "The chronological sequence of all major constitutional Acts from 1773 to 1947. The most frequently tested are: Charter Act 1833 (GG of India), GoI Act 1858 (Crown rule), Morley-Minto 1909 (separate electorates), Montford 1919 (Dyarchy), GoI Act 1935 (provincial autonomy).",
    },
    {
      title: "GoI Act 1935 Features (FAPF — Federation, Autonomy, Provincial lists, Federal Court)",
      mnemonic: "FAPF: Federation proposed, Autonomy granted, Provincial+Federal+Concurrent lists, Federal Court established",
      explanation:
        "The four key features of the GoI Act 1935: All-India Federation (never materialized), Provincial Autonomy (replaced Dyarchy), Three Legislative Lists, and establishment of a Federal Court. The 1935 Act formed the foundation of the Indian Constitution of 1950.",
    },
  ],
}
