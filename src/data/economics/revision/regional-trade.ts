import type { SubjectRevision } from '@/types/subject-notes'

export const regionalTradeRevision: SubjectRevision = {
  topic: 'regional-trade',
  bullets: [
    "India has FTAs/CEPAs with: ASEAN, Japan, Korea, Singapore, Malaysia, Sri Lanka, UAE, Australia, EFTA. Under negotiation: UK, EU, GCC.",
    "India-ASEAN FTA (2010): 75% tariff lines eliminated. Trade deficit with ASEAN ~$25B (FY24). Review initiated 2023.",
    "RCEP withdrawal (2019): India feared Chinese imports. RCEP = 15 countries (ASEAN+China+Japan+Korea+Australia+NZ). World's largest FTA.",
    "India-UAE CEPA (2022): First major FTA in decade. 97% tariff lines. Bilateral trade $84.5B. Record 88-day negotiation.",
    "India-Australia ECTA (2022): Interim deal. India: 70% tariff concessions. Australia: 100% zero duty immediately.",
    "India-EFTA TEPA (2024): EFTA committed $100B investment over 15 years — first FTA with binding investment commitment.",
    "SAFTA (2006): SAARC members. Intra-SAARC trade only 5%. India-Pakistan trade suspended since 2019.",
    "IPEF (2022): 14 members. 4 pillars. India opted OUT of trade pillar (Pillar I). Participates in supply chains, clean economy, fair economy.",
    "IMEC (India-Middle East-Europe Corridor): Announced G20 2023. Rail+shipping India→UAE→Saudi→Jordan→Israel→Europe. Alternative to BRI.",
    "Types of agreements: PTA (preferential) < FTA (zero tariff) < CEPA (FTA+investment+services) < Customs Union (common external tariff).",
    "India's DFTP scheme: Duty-free access for all LDCs covering 98.6% of tariff lines.",
    "APTA (Asia-Pacific Trade Agreement, 1975): India's oldest PTA. Members include China, South Korea, Bangladesh.",
    "India-UK FTA: 14 rounds completed. Key issues: whisky tariffs (India charges 150%), Mode 4 visas, dairy market access.",
    "India-EU FTA: Restarted 2022 after 9-year gap. EU = India's 2nd largest trading partner ($120B bilateral).",
    "China+1 strategy benefits India despite RCEP absence — PLI schemes designed to capture manufacturing diversification."
],
  comparisons: [
    {
        "title": "India's Key FTAs",
        "headers": [
            "Agreement",
            "Year",
            "Partner",
            "Key Feature"
        ],
        "rows": [
            [
                "India-Sri Lanka FTA",
                "2000",
                "Sri Lanka",
                "India's first bilateral FTA"
            ],
            [
                "India-ASEAN FTA",
                "2010",
                "10 ASEAN countries",
                "75% tariff lines, under review"
            ],
            [
                "India-UAE CEPA",
                "2022",
                "UAE",
                "97% tariff lines, 88-day negotiation"
            ],
            [
                "India-Australia ECTA",
                "2022",
                "Australia",
                "Interim deal, 100% Aus duty-free"
            ],
            [
                "India-EFTA TEPA",
                "2024",
                "Switzerland, Norway, Iceland, Liechtenstein",
                "$100B investment commitment"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Trade Agreement Hierarchy — \"PFC-CU\"",
        "mnemonic": "PTA < FTA < CEPA < Customs Union",
        "explanation": "Ascending depth: Preferential (select products), Free Trade (substantially all), Comprehensive (goods+services+investment), Customs Union (common external tariff)."
    }
],
}
