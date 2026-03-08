import type { SubjectRevision } from '@/types/subject-notes'

export const migrationRevision: SubjectRevision = {
  "topic": "migration",
  "bullets": [
    "Census 2011: 455 million migrants (37% of population); 70% intra-state, 12% inter-state.",
    "Rural-to-Rural is the largest migration stream (about 50%), dominated by marriage migration.",
    "Rural-to-Urban is the 2nd largest stream — drives urbanization; mainly economic migration.",
    "49% of all migration in India is marriage-related (predominantly female).",
    "UP and Bihar are the largest source states for interstate out-migration.",
    "Maharashtra and Delhi are the top destination states for interstate migrants.",
    "About 100+ million seasonal/circular migrants move annually for construction, agriculture, brick kilns.",
    "India has the largest diaspora in the world (about 18 million overseas Indians).",
    "India receives the highest remittances globally (about  billion in 2023).",
    "COVID-19 lockdown (2020) triggered massive reverse migration — exposed migrant vulnerability.",
    "One Nation One Ration Card (2019) enables PDS access for migrants in any state.",
    "e-Shram Portal (2021) registers unorganized workers including migrants; 29+ crore registrations."
  ],
  "comparisons": [
    {
      "title": "Streams of Internal Migration",
      "headers": [
        "Stream",
        "Share",
        "Primary Reason",
        "Dominant Gender"
      ],
      "rows": [
        [
          "Rural-to-Rural",
          "~50%",
          "Marriage",
          "Female"
        ],
        [
          "Rural-to-Urban",
          "~20%",
          "Employment",
          "Male"
        ],
        [
          "Urban-to-Urban",
          "~17%",
          "Employment, education",
          "Both"
        ],
        [
          "Urban-to-Rural",
          "~3%",
          "Retirement, reverse migration",
          "Both"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Push vs Pull Factors",
      "mnemonic": "Push: PLaNDS (Poverty, Low wages, Natural disasters, Debt, Social conflict)",
      "explanation": "Push factors drive people out of their origin. Pull factors at destinations include better employment, higher wages, education, healthcare."
    }
  ]
}
