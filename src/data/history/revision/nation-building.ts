import type { HistoryRevision } from "@/types/history"

export const nationBuildingRevision: HistoryRevision = {
  topic: "nation-building",
  bullets: [
    "The Planning Commission was established in 1950 with PM Nehru as its chairman.",
    "The First Five Year Plan (1951-56) focused on agriculture and irrigation, based on the Harrod-Domar model.",
    "The Second Five Year Plan (1956-61) was based on P.C. Mahalanobis's model and prioritized heavy industrialization.",
    "Steel plants were established at Bhilai (Soviet), Durgapur (British), and Rourkela (German) during the Second Plan.",
    "The Industrial Policy Resolution 1956 expanded the public sector's role to 17 industries.",
    "Plan Holidays (1966-69) were annual plans due to the 1962 China war, 1965 Pakistan war, and drought.",
    "The Green Revolution began in the mid-1960s with HYV seeds, led by M.S. Swaminathan in India and Norman Borlaug internationally.",
    "The Green Revolution primarily benefited Punjab, Haryana, and western UP, and focused on wheat production.",
    "Operation Flood (White Revolution) was launched in 1970 by Dr. Verghese Kurien and the NDDB.",
    "Operation Flood was based on the Anand Model (AMUL cooperative, Gujarat).",
    "India became the world's largest milk producer in 1998, surpassing the USA.",
    "14 major commercial banks were nationalized in 1969 under PM Indira Gandhi; 6 more in 1980.",
    "India faced a Balance of Payments crisis in 1991 — forex reserves fell to cover only two weeks of imports.",
    "LPG reforms (1991) were initiated by PM P.V. Narasimha Rao and FM Manmohan Singh.",
    "LPG stands for Liberalisation, Privatisation, and Globalisation.",
    "The License Raj was abolished as part of the 1991 reforms, removing industrial licensing for most industries.",
    "India became a member of the WTO in 1995.",
    "NITI Aayog replaced the Planning Commission on 1 January 2015.",
    "NITI Aayog is a think tank and advisory body, unlike the Planning Commission which allocated funds.",
    "Twelve Five Year Plans were formulated before the system was replaced by NITI Aayog's three-year Action Agenda.",
  ],
  comparisons: [
    {
      title: "Planning Commission vs NITI Aayog",
      headers: ["Aspect", "Planning Commission (1950-2014)", "NITI Aayog (2015-)"],
      rows: [
        ["Nature", "Extra-constitutional body, allocating body", "Think tank and advisory body"],
        ["Chairperson", "PM (ex-officio)", "PM (ex-officio)"],
        ["Key role", "Formulated Five Year Plans, allocated funds to states", "Cooperative and competitive federalism, policy advisory"],
        ["Fund allocation", "Had power to allocate funds to ministries and states", "No fund allocation power (shifted to Finance Commission)"],
        ["Approach", "Top-down, centralized planning", "Bottom-up, state-driven development"],
        ["Full-time head", "Deputy Chairman", "Vice-Chairperson + CEO"],
      ],
    },
    {
      title: "Green Revolution vs White Revolution",
      headers: ["Aspect", "Green Revolution", "White Revolution (Operation Flood)"],
      rows: [
        ["Focus", "Food grain production (mainly wheat, later rice)", "Milk production"],
        ["Pioneer in India", "M.S. Swaminathan", "Dr. Verghese Kurien"],
        ["Began", "Mid-1960s", "1970"],
        ["Model", "HYV seeds + fertilizers + irrigation", "Cooperative model (Anand/AMUL)"],
        ["Key region", "Punjab, Haryana, western UP", "Gujarat (initially), then nationwide"],
        ["Outcome", "India became self-sufficient in food grains", "India became world's largest milk producer (1998)"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Five Year Plan Focus (AHSG)",
      mnemonic: "Agriculture (1st), Heavy Industry (2nd), Self-reliance (3rd), Growth with stability (4th)",
      explanation:
        "The focus areas of the first four Five Year Plans: First (agriculture & irrigation), Second (heavy industrialization — Mahalanobis model), Third (self-reliance), Fourth (growth with stability).",
    },
    {
      title: "LPG Reforms Key Players (NM)",
      mnemonic: "Narasimha Rao (PM) + Manmohan Singh (FM) = 1991 Reforms",
      explanation:
        "PM P.V. Narasimha Rao and Finance Minister Manmohan Singh initiated the Liberalisation, Privatisation, Globalisation reforms in 1991 to address India's balance of payments crisis.",
    },
  ],
}
