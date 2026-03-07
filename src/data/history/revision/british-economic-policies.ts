import type { HistoryRevision } from "@/types/history"

export const britishEconomicPoliciesRevision: HistoryRevision = {
  topic: "british-economic-policies",
  bullets: [
    "The Diwani of Bengal (1765) was the starting point of systematic British economic exploitation of India.",
    "Dadabhai Naoroji first articulated the 'Drain of Wealth' theory in 1867; his book 'Poverty and Un-British Rule in India' (1901) elaborated it.",
    "R.C. Dutt's 'Economic History of India' (1901) is the most comprehensive critique of British economic exploitation.",
    "The 'drain' included: Home Charges, profits of British companies, salaries of British officials, and interest on public debt.",
    "Permanent Settlement (Zamindari System, 1793) was introduced by Lord Cornwallis in Bengal, Bihar, and Orissa.",
    "Under the Permanent Settlement, revenue was fixed in perpetuity — Zamindars paid 89% of rental to the government and kept 11%.",
    "The Zamindari system created an absentee landlord class with no incentive to improve agriculture.",
    "Ryotwari System (1820) was introduced by Thomas Munro in Madras; later extended to Bombay by Elphinstone.",
    "Under Ryotwari, settlement was directly between the government and the ryot (cultivator); revenue was 50% of gross produce.",
    "Ryotwari covered about 51% of British India — the largest proportion of any land system.",
    "Mahalwari System (1822) was introduced by Holt Mackenzie in NW Provinces, Punjab, and Central Provinces.",
    "Under Mahalwari, revenue was settled with the village community (mahal) collectively; periodic revision was possible.",
    "De-industrialization: India went from a leading manufacturing nation to a raw material exporter and captive market for British goods.",
    "Indian textiles faced 80% import duty in Britain; British goods entered India duty-free or at nominal rates.",
    "Cotton was first cultivated in India but by 1880, India imported 51% of its cotton cloth from Britain.",
    "Commercialization of agriculture: forced shift from food crops to cash crops (indigo, opium, cotton, jute, tea).",
    "The Indigo Revolt (1859) and Champaran Satyagraha (1917) exposed the exploitation of indigo cultivators.",
    "Bengal Famine of 1770 killed ~10 million (one-third of Bengal's population).",
    "Great Famine of 1876-78 killed 5.5 million; Bengal Famine of 1943 killed ~3 million.",
    "Strachey Commission (1880) recommended famine codes; Macdonnell Commission (1900) further refined famine relief.",
  ],
  comparisons: [
    {
      title: "Three Land Revenue Systems Compared",
      headers: ["Feature", "Zamindari (Permanent Settlement)", "Ryotwari", "Mahalwari"],
      rows: [
        ["Year", "1793", "1820", "1822"],
        ["Introduced by", "Lord Cornwallis", "Thomas Munro (Madras), Elphinstone (Bombay)", "Holt Mackenzie"],
        ["Region", "Bengal, Bihar, Orissa, parts of N. Madras", "Madras, Bombay, Assam", "NW Provinces, Punjab, Central Provinces"],
        ["Settlement with", "Zamindar (landlord)", "Ryot (individual cultivator)", "Village community (mahal)"],
        ["Revenue rate", "Fixed in perpetuity (89% of rental)", "50% of gross produce", "Varied; periodic revision"],
        ["Coverage", "~19% of British India", "~51% of British India", "~30% of British India"],
        ["Revision", "Never — fixed permanently", "Revised every 20-30 years", "Revised periodically"],
        ["Major problem", "Absentee landlordism", "High revenue demand on small peasants", "Collective liability — defaulters affected the whole village"],
      ],
    },
    {
      title: "Key Economic Critics of British Rule",
      headers: ["Critic", "Key Work/Contribution", "Year"],
      rows: [
        ["Dadabhai Naoroji", "'Poverty and Un-British Rule in India'; Drain of Wealth theory", "1867/1901"],
        ["R.C. Dutt", "'Economic History of India' (2 volumes)", "1901"],
        ["William Digby", "'Prosperous British India' (sarcastic title)", "1901"],
        ["M.G. Ranade", "Economic nationalism through Prarthana Samaj lectures", "1890s"],
        ["G.V. Joshi", "Critiques in the Quarterly Journal of the Poona Sarvajanik Sabha", "1870s-90s"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Land Revenue Systems (ZRM — Zamindar, Ryot, Mahal)",
      mnemonic: "Zamindari = Bengal (Cornwallis), Ryotwari = Madras (Munro), Mahalwari = NW Provinces (Mackenzie)",
      explanation:
        "Match each system with its region and architect: Z = Zamindari/Bengal/Cornwallis (1793), R = Ryotwari/Madras/Munro (1820), M = Mahalwari/NW Provinces/Mackenzie (1822). Alphabetical order (M, R, Z) is reverse chronological.",
    },
    {
      title: "Drain of Wealth: Key Figures (DDR — Dadabhai, Dutt, Ranade)",
      mnemonic: "Dadabhai Drained, Dutt Documented, Ranade Reasoned",
      explanation:
        "Dadabhai Naoroji propounded the Drain theory (1867), R.C. Dutt documented it comprehensively (1901), and M.G. Ranade reasoned out economic nationalism through his lectures and writings.",
    },
  ],
}
