import type { HistoryRevision } from "@/types/history"

export const heritageSitesRevision: HistoryRevision = {
  topic: "heritage-sites",
  bullets: [
    "India has 42 UNESCO World Heritage Sites (as of 2024) — 34 cultural, 7 natural, 1 mixed.",
    "India ranks 6th globally in total number of World Heritage Sites (after Italy, China, Germany, France, Spain).",
    "India ratified the World Heritage Convention in 1977.",
    "India's first four World Heritage Sites (1983): Agra Fort, Ajanta Caves, Ellora Caves, and Taj Mahal.",
    "The Kailasa Temple at Ellora (Rashtrakuta) is the world's largest monolithic structure — part of the Ellora Caves WHS.",
    "Kaziranga National Park (1985, Assam) is home to the world's largest population of one-horned Indian rhinoceros.",
    "Sundarbans National Park (1987, West Bengal) is the largest mangrove forest and home to the Royal Bengal Tiger.",
    "The Western Ghats (2012) is one of the world's 8 'hottest hotspots' of biodiversity — a serial site across 4 states.",
    "Khangchendzonga National Park (2016, Sikkim) is India's only mixed (cultural + natural) World Heritage Site.",
    "Dholavira (2021, Gujarat) is an Indus Valley Civilization site inscribed as a World Heritage Site.",
    "Ramappa Temple (2021, Telangana) was built by the Kakatiya dynasty and named after its sculptor Ramappa.",
    "Shantiniketan (2023, West Bengal) — Rabindranath Tagore's university — is India's 41st World Heritage Site.",
    "Sacred Ensembles of the Hoysala (2023, Karnataka) — Belur, Halebidu, Somnathpur — is the 42nd site.",
    "Rani-ki-Vav (2014, Patan, Gujarat) is an inverted temple designed as a stepwell on the Saraswati River.",
    "Jaipur City (2019, Rajasthan) was inscribed for its distinctive grid-plan urban planning by Sawai Jai Singh II.",
    "The Mountain Railways of India (serial site): Darjeeling (1999), Nilgiri (2005), Kalka-Shimla (2008).",
    "Chhatrapati Shivaji Terminus/Victoria Terminus (2004, Mumbai) is a Victorian Gothic Revival building by F.W. Stevens.",
    "The Nalanda Mahavihara (2016, Bihar) was an ancient Buddhist university — one of the first residential universities in the world.",
    "States with the most World Heritage Sites: Maharashtra (5), Karnataka (4), Gujarat (4), Rajasthan (3).",
    "A site must demonstrate Outstanding Universal Value (OUV) and meet at least one of ten selection criteria for inscription.",
  ],
  comparisons: [
    {
      title: "Types of UNESCO World Heritage Sites in India",
      headers: ["Type", "Count", "Key Examples"],
      rows: [
        ["Cultural", "34", "Taj Mahal, Ajanta, Ellora, Hampi, Khajuraho, Red Fort, Qutub Minar, Sanchi, Nalanda"],
        ["Natural", "7", "Kaziranga, Sundarbans, Western Ghats, Nanda Devi, Manas, Keoladeo, Great Himalayan NP"],
        ["Mixed", "1", "Khangchendzonga National Park (Sikkim)"],
      ],
    },
    {
      title: "Recently Inscribed UNESCO Sites (2019-2023)",
      headers: ["Year", "Site", "State", "Type"],
      rows: [
        ["2019", "Jaipur City", "Rajasthan", "Cultural"],
        ["2021", "Dholavira (Harappan City)", "Gujarat", "Cultural"],
        ["2021", "Ramappa Temple (Kakatiya)", "Telangana", "Cultural"],
        ["2023", "Shantiniketan", "West Bengal", "Cultural"],
        ["2023", "Sacred Ensembles of the Hoysala", "Karnataka", "Cultural"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "First Four Sites (AATE — 1983)",
      mnemonic: "Agra Fort, Ajanta Caves, Taj Mahal, Ellora Caves",
      explanation:
        "India's first four UNESCO World Heritage Sites, all inscribed in 1983: Agra Fort (UP), Ajanta Caves (Maharashtra), Taj Mahal (UP), and Ellora Caves (Maharashtra). Note that 3 of the 4 are in Maharashtra/UP.",
    },
    {
      title: "Natural Sites (KMSKNWG)",
      mnemonic: "Kaziranga, Manas, Sundarbans, Keoladeo, Nanda Devi, Western Ghats, Great Himalayan",
      explanation:
        "India's 7 natural World Heritage Sites: Kaziranga (rhinos), Manas (golden langur), Sundarbans (mangroves), Keoladeo (birds), Nanda Devi & Valley of Flowers, Western Ghats (biodiversity hotspot), Great Himalayan NP (snow leopard).",
    },
  ],
}
