import type { HistoryRevision } from "@/types/history"

export const landRevenueSystemsRevision: HistoryRevision = {
  topic: "land-revenue-systems",
  bullets: [
    "Three systems: Permanent Settlement (1793, Cornwallis), Ryotwari (1820, Munro), Mahalwari (1822, Holt Mackenzie).",
    "Permanent Settlement — zamindars as owners; revenue fixed forever; Sunset Clause (auction if unpaid by sunset).",
    "Permanent Settlement covered Bengal, Bihar, Orissa, parts of UP and Madras — about 19% of British India.",
    "Ryotwari — individual peasant (ryot) as owner; revenue revised every 20-30 years; covered Madras, Bombay, Assam — about 51% (largest).",
    "Mahalwari — village community (mahal) as owner; headman (lambardar) collects; revised every 30 years; covered UP, Punjab — about 30%.",
    "Revenue was fixed at 10/11 of collection (Permanent Settlement), 45-55% of produce (Ryotwari), village-basis (Mahalwari).",
    "Designed by John Shore (Permanent Settlement), Thomas Munro and Captain Read (Ryotwari), Holt Mackenzie refined by Robert Bird and James Thomason (Mahalwari).",
    "Warren Hastings' Farming System (1772) preceded Permanent Settlement — revenue auctioned to highest bidder for 5 years.",
    "The Company got Diwani of Bengal, Bihar, Orissa from Shah Alam II in 1765 (after Battle of Buxar, 1764).",
    "Permanent Settlement created absentee landlords; sub-infeudation: zamindars → talukdars → jotedars → bargadars.",
    "Ryotwari eliminated zamindars in theory but revenue officials (patwaris, talatis) became corrupt intermediaries.",
    "Dadabhai Naoroji's 'Drain Theory' identified land revenue as primary mechanism of economic drain from India to Britain.",
    "R.C. Dutt's 'Economic History of India' (1902) showed British revenue was far higher than Mughal.",
    "Deccan Riots (1875) — Maharashtra; caused by moneylender exploitation under Ryotwari; led to Deccan Agriculturists' Relief Act (1879).",
    "Bengal Tenancy Act (1885) — gave occupancy ryots some protection against eviction and rent enhancement.",
    "Punjab Land Alienation Act (1900) — prevented transfer of agricultural land to non-agricultural classes (moneylenders).",
    "Pabna Agrarian Leagues (1873) organized peasants against zamindari rent increases in Bengal.",
    "Champaran Satyagraha (1917) — Gandhi's first Indian satyagraha; targeted tinkathia system in Bihar's zamindari areas.",
    "Famine Commission (1880, Strachey) recommended revenue should not exceed 50% of net assets.",
    "After independence: First Amendment (1951) protected zamindari abolition laws through the Ninth Schedule.",
  ],
  comparisons: [
    {
      title: "Three Land Revenue Systems Compared",
      headers: ["Feature", "Permanent Settlement", "Ryotwari", "Mahalwari"],
      rows: [
        ["Year introduced", "1793", "1820", "1822"],
        ["Introduced by", "Cornwallis (designed by Shore)", "Thomas Munro & Captain Read", "Holt Mackenzie"],
        ["Land owner", "Zamindar", "Individual ryot (peasant)", "Village community (mahal)"],
        ["Revenue settlement", "Fixed permanently", "Revised every 20-30 years", "Revised every 30 years"],
        ["Areas", "Bengal, Bihar, Orissa", "Madras, Bombay, Assam", "UP (NWP), Punjab, Central Provinces"],
        ["% of British India", "19%", "51% (largest)", "30%"],
        ["Key problem", "Absentee landlordism", "High revenue + corrupt officials", "Collective punishment"],
      ],
    },
    {
      title: "Peasant Movements Linked to Revenue Systems",
      headers: ["Movement", "Year", "Region", "Revenue System", "Cause"],
      rows: [
        ["Pabna Agrarian Leagues", "1873", "Bengal", "Permanent Settlement", "Zamindar rent increases"],
        ["Deccan Riots", "1875", "Maharashtra", "Ryotwari", "Moneylender exploitation"],
        ["Champaran Satyagraha", "1917", "Bihar", "Permanent Settlement", "Tinkathia (forced indigo cultivation)"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Revenue Systems (P-R-M: 1793-1820-1822)",
      mnemonic: "Permanent (1793, Cornwallis), Ryotwari (1820, Munro), Mahalwari (1822, Mackenzie) — 'Please Remember Money'",
      explanation:
        "The three systems in chronological order with their introducers. P=Permanent=1793=Cornwallis, R=Ryotwari=1820=Munro, M=Mahalwari=1822=Mackenzie.",
    },
    {
      title: "Coverage Areas (B-M-U)",
      mnemonic: "Bengal (Permanent), Madras-Bombay (Ryotwari), UP-Punjab (Mahalwari) — 'Big Money Under'",
      explanation:
        "Quick recall of which system applied where: Bengal=Permanent (19%), Madras/Bombay=Ryotwari (51%), UP/Punjab=Mahalwari (30%).",
    },
    {
      title: "Land Owner in Each System (Z-R-V)",
      mnemonic: "Zamindar (Permanent), Ryot (Ryotwari), Village (Mahalwari) — 'ZRV: Zamindar, Ryot, Village'",
      explanation:
        "The entity recognized as the landowner and responsible for revenue payment in each system.",
    },
  ],
}
