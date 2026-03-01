import type { Amendment } from "@/types/polity"

export const amendments: Amendment[] = [
  {
    id: "amend-1",
    number: 1,
    year: 1951,
    description:
      "Added Ninth Schedule to protect land reform laws from judicial review. Introduced reasonable restrictions on freedom of speech under Article 19.",
    articlesAffected: ["15", "19", "85", "87", "174", "176", "341", "342", "372"],
    significance:
      "First amendment to the Constitution; curtailed fundamental rights to enable agrarian reforms and restrictions on free speech.",
    category: "landmark",
  },
  {
    id: "amend-7",
    number: 7,
    year: 1956,
    description:
      "Reorganisation of states on linguistic basis. Abolished the classification of states into Parts A, B, C and D. Created Union Territories as a new category.",
    articlesAffected: ["1", "3", "49", "80", "81", "82", "131", "153", "158", "168", "170"],
    significance:
      "Implemented the States Reorganisation Act, 1956 — the most extensive redrawing of India's internal boundaries.",
    category: "landmark",
  },
  {
    id: "amend-24",
    number: 24,
    year: 1971,
    description:
      "Affirmed Parliament's power to amend any part of the Constitution including Fundamental Rights. Response to the Golak Nath case.",
    articlesAffected: ["13", "368"],
    significance:
      "Overruled the Supreme Court's Golak Nath decision and restored Parliament's amending power over Fundamental Rights.",
    category: "landmark",
  },
  {
    id: "amend-25",
    number: 25,
    year: 1971,
    description:
      "Curtailed the right to property. Provided that no law giving effect to DPSP Articles 39(b) and 39(c) can be challenged for violating Articles 14, 19, and 31.",
    articlesAffected: ["31", "31C"],
    significance:
      "Gave primacy to certain Directive Principles over Fundamental Rights, reshaping the relationship between Parts III and IV.",
    category: "landmark",
  },
  {
    id: "amend-42",
    number: 42,
    year: 1976,
    description:
      "The 'Mini Constitution'. Added words 'Socialist', 'Secular', and 'Integrity' to the Preamble. Added Fundamental Duties (Part IVA). Curtailed judicial review. Made DPSPs non-justiciable but gave them precedence over FRs.",
    articlesAffected: ["31C", "31D", "32A", "39", "43A", "48A", "51A", "131", "226", "228A", "257A", "312A", "323A", "323B", "368"],
    significance:
      "The most comprehensive amendment, passed during the Emergency. Many provisions later struck down or modified by the 43rd and 44th Amendments.",
    category: "landmark",
  },
  {
    id: "amend-44",
    number: 44,
    year: 1978,
    description:
      "Reversed several changes of the 42nd Amendment. Eliminated the right to property as a Fundamental Right (made it a legal right under Article 300A). Restored habeas corpus during Emergency.",
    articlesAffected: ["19", "22", "30", "31", "31A", "31C", "34", "38", "71", "74", "77", "83", "103", "105", "123", "132", "133", "134", "139A", "150", "166", "192", "194", "213", "217", "225", "226", "227", "239B", "300A", "329A", "352", "356", "358", "359", "360", "371F"],
    significance:
      "Restored democratic safeguards removed during Emergency. Made right to property a mere legal right instead of a Fundamental Right.",
    category: "landmark",
  },
  {
    id: "amend-52",
    number: 52,
    year: 1985,
    description:
      "Anti-defection law. Added the Tenth Schedule to the Constitution providing for disqualification of members on grounds of defection.",
    articlesAffected: ["101", "102", "190", "191"],
    significance:
      "Introduced the Anti-Defection Law to curb political defections and ensure party discipline among legislators.",
    category: "landmark",
  },
  {
    id: "amend-61",
    number: 61,
    year: 1989,
    description:
      "Reduced the voting age from 21 years to 18 years for elections to the Lok Sabha and State Legislative Assemblies.",
    articlesAffected: ["326"],
    significance:
      "Brought a massive expansion of the electorate by lowering the voting age, empowering youth participation in democracy.",
    category: "major",
  },
  {
    id: "amend-73",
    number: 73,
    year: 1992,
    description:
      "Constitutionalized the Panchayati Raj system. Added Part IX and Eleventh Schedule. Mandated regular elections, reservations for SC/ST and women, and a three-tier system of local self-government in rural areas.",
    articlesAffected: ["243", "243A", "243B", "243C", "243D", "243E", "243F", "243G", "243H", "243I", "243J", "243K", "243L", "243M", "243N", "243O"],
    significance:
      "Gave constitutional status to Panchayati Raj institutions, deepening grassroots democracy with mandatory elections and reservations.",
    category: "landmark",
  },
  {
    id: "amend-74",
    number: 74,
    year: 1992,
    description:
      "Constitutionalized urban local bodies (Municipalities). Added Part IXA and Twelfth Schedule. Mandated regular elections, reservations, and Ward Committees.",
    articlesAffected: ["243P", "243Q", "243R", "243S", "243T", "243U", "243V", "243W", "243X", "243Y", "243Z", "243ZA", "243ZB", "243ZC", "243ZD", "243ZE", "243ZF", "243ZG"],
    significance:
      "Gave constitutional status to Municipalities, strengthening urban governance alongside the 73rd Amendment for rural areas.",
    category: "landmark",
  },
  {
    id: "amend-86",
    number: 86,
    year: 2002,
    description:
      "Made education a Fundamental Right. Inserted Article 21A providing free and compulsory education for children aged 6-14. Modified Article 45 for early childhood care.",
    articlesAffected: ["21A", "45", "51A"],
    significance:
      "Made Right to Education a Fundamental Right, leading to the RTE Act of 2009.",
    category: "landmark",
  },
  {
    id: "amend-91",
    number: 91,
    year: 2003,
    description:
      "Limited the size of the Council of Ministers to 15% of the total strength of the House. Strengthened the anti-defection law.",
    articlesAffected: ["75", "164"],
    significance:
      "Restricted bloated ministries and tightened anti-defection provisions for greater political accountability.",
    category: "major",
  },
  {
    id: "amend-97",
    number: 97,
    year: 2011,
    description:
      "Gave constitutional status and protection to cooperative societies. Added Part IXB and the right to form cooperatives under Article 19(1)(c).",
    articlesAffected: ["19", "43B", "243ZH", "243ZI", "243ZJ", "243ZK", "243ZL", "243ZM", "243ZN", "243ZO", "243ZP", "243ZQ", "243ZR", "243ZS", "243ZT"],
    significance:
      "Constitutionalized cooperatives, promoting democratic and autonomous functioning of cooperative societies.",
    category: "major",
  },
  {
    id: "amend-101",
    number: 101,
    year: 2016,
    description:
      "Introduced the Goods and Services Tax (GST). Created the GST Council under Article 279A. Subsumed multiple indirect taxes into a single national tax.",
    articlesAffected: ["246A", "269A", "279A", "286", "366", "368"],
    significance:
      "India's biggest indirect tax reform — 'One Nation, One Tax'. Created a unified national market by subsuming central and state indirect taxes.",
    category: "landmark",
  },
  {
    id: "amend-103",
    number: 103,
    year: 2019,
    description:
      "Provided 10% reservation for Economically Weaker Sections (EWS) in education and public employment, for citizens not covered by existing reservation policies.",
    articlesAffected: ["15", "16"],
    significance:
      "First time economic criteria (not caste) used as the basis for constitutional reservation in India.",
    category: "landmark",
  },
]
