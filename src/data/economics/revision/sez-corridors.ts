import type { SubjectRevision } from '@/types/subject-notes'

export const sezCorridorsRevision: SubjectRevision = {
  topic: 'sez-corridors',
  bullets: [
    "SEZ Act 2005 + Rules 2006. SEZs are duty-free enclaves treated as 'foreign territory' for trade operations.",
    "272 SEZs operational (of 425 approved). 5,829 units. Employment: 30.92 lakh. Exports: Rs 15.2 lakh crore (FY24).",
    "SEZ tax benefits: 100% income tax exemption for 5 years, 50% for next 5, 50% ploughed-back for next 5 (Section 10AA).",
    "IT/ITES SEZs account for 60%+ of SEZ exports. Major clusters: Bangalore, Hyderabad, Chennai, Pune.",
    "DESH Bill (proposed 2022): Replace SEZ Act. Development Hubs for export + domestic. WTO-compliant. Not yet tabled.",
    "DMIC (Delhi-Mumbai Industrial Corridor): Flagship. 1,504 km along Western DFC. 8 cities. Japan funding (JICA).",
    "Dholera SIR (Gujarat): India's largest planned industrial city (920 sq km). Solar park (5,000 MW planned).",
    "11 industrial corridors, 32 nodes under National Industrial Corridor Development Programme (NICDP).",
    "WDFC: 1,504 km Dadri-JNPT. JICA funded. EDFC: 1,337 km Ludhiana-Dankuni. World Bank funded.",
    "DFC impact: Delhi-Mumbai freight from 3 days → 30 hours. Double-stack containers. 25-tonne axle load.",
    "PM GatiShakti NMP (2021): GIS-based digital planning for multi-modal connectivity. Integrates all infrastructure.",
    "India's logistics cost: 14-16% of GDP (vs 8-10% developed). Target: 8% by 2030 under National Logistics Policy 2022.",
    "PLI schemes: Rs 1.97 lakh crore across 14 sectors. Mobile exports: Rs 1.2 lakh crore (FY24, up from Rs 11,000 crore FY19).",
    "GIFT City IFSC: Regulated by IFSCA. 10-year tax holiday. Banking, insurance, fund management, aircraft leasing.",
    "Semiconductor Mission: Rs 76,000 crore. Micron (Gujarat), Tata (Assam, Gujarat), CG Power (Sanand)."
],
  comparisons: [
    {
        "title": "SEZ vs Industrial Corridor",
        "headers": [
            "Feature",
            "SEZ",
            "Industrial Corridor"
        ],
        "rows": [
            [
                "Purpose",
                "Export promotion, FDI",
                "Manufacturing hub, logistics integration"
            ],
            [
                "Scale",
                "100-1,000+ hectares",
                "1,000+ km corridor with multiple nodes"
            ],
            [
                "Key benefit",
                "Tax/duty exemptions",
                "Multi-modal connectivity, trunk infrastructure"
            ],
            [
                "Examples",
                "Jamnagar (Reliance), Infosys SEZ",
                "DMIC, CBIC, AKIC"
            ],
            [
                "Governance",
                "SEZ Act 2005, Board of Approval",
                "DPIIT, NICDC, State SPVs"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "DFC Routes — \"WE\"",
        "mnemonic": "Western DFC: Dadri→JNPT (JICA funded). Eastern DFC: Ludhiana→Dankuni (World Bank)",
        "explanation": "Two Dedicated Freight Corridors — Western (1,504 km, Japan funded) and Eastern (1,337 km, World Bank funded)."
    }
],
}
