import type { SubjectRevision } from '@/types/subject-notes'

export const wtoIndiaRevision: SubjectRevision = {
  topic: 'wto-india',
  bullets: [
    "WTO established January 1, 1995, replacing GATT (1947). 164 members. HQ: Geneva. DG: Ngozi Okonjo-Iweala.",
    "India was founding member of both GATT (1947) and WTO (1995). Decision-making by consensus.",
    "WTO principles: MFN (Most Favoured Nation), National Treatment, Reciprocity, Transparency, Special & Differential Treatment (S&DT).",
    "AoA three pillars: Market Access (tariff reduction), Domestic Support (Amber/Blue/Green boxes), Export Subsidies (eliminate).",
    "India's de minimis: 10% of value of agricultural production for product-specific and non-product-specific support each.",
    "Food stockholding — India's core WTO fight. MSP procurement calculated using 1986-88 ERP appears to exceed AMS limits due to inflation.",
    "Peace Clause (Bali 2013): No WTO challenge for food security stockholding — temporary until 'permanent solution' found. Still pending.",
    "TRIPS: 20-year patents. India complied in 2005 (product patents for pharma). Section 3(d) prevents evergreening — Novartis case (2013).",
    "India's only compulsory licence: Bayer's Nexavar (2012) — Natco produced generic at 97% lower price.",
    "GATS 4 modes: Cross-border (Mode 1), Consumption abroad (Mode 2), Commercial presence (Mode 3), Movement of persons (Mode 4).",
    "India has offensive interest in Mode 1 (IT exports $191B FY24) and Mode 4 (professional mobility). Defensive in Mode 3.",
    "E-commerce moratorium: No customs duties on electronic transmissions — extended at MC13 (2024) for 2 more years. India has opposed it.",
    "India pulled out of RCEP (2019) — feared Chinese imports. Pursuing bilateral FTAs instead (UAE, Australia, EFTA, UK, EU).",
    "MC12 (2022): Limited TRIPS waiver for COVID vaccines, fisheries subsidies agreement. MC13 (2024): Moratorium extended, no food stockholding solution.",
    "WTO Appellate Body non-functional since December 2019 — US blocked judge appointments. India has NOT joined MPIA alternative."
],
  comparisons: [
    {
        "title": "GATT vs WTO",
        "headers": [
            "Feature",
            "GATT",
            "WTO"
        ],
        "rows": [
            [
                "Nature",
                "Agreement (temporary)",
                "Organisation (permanent)"
            ],
            [
                "Coverage",
                "Goods only",
                "Goods, services, IPR"
            ],
            [
                "Dispute settlement",
                "Weak (panel reports could be blocked)",
                "Strong (binding, cannot block adoption)"
            ],
            [
                "Decision rule",
                "Consensus + selective participation",
                "Single Undertaking (all-or-nothing)"
            ],
            [
                "Period",
                "1947-1994",
                "1995-present"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "AoA Boxes — \"GAB\"",
        "mnemonic": "Green (allowed freely), Amber (trade-distorting, reduce), Blue (production-limiting, allowed)",
        "explanation": "Green Box: Non/minimally distorting (research, safety nets). Amber Box: Trade-distorting subsidies (MSP). Blue Box: Payments with production limits."
    },
    {
        "title": "GATS Modes — \"1234\"",
        "mnemonic": "Mode 1: Cross-border, Mode 2: Consumption abroad, Mode 3: Commercial presence, Mode 4: Movement of persons",
        "explanation": "Four modes of services trade — India strong in Mode 1 (IT exports) and wants Mode 4 liberalisation."
    }
],
}
