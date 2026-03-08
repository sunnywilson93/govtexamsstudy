import type { SubjectRevision } from '@/types/subject-notes'

export const balanceOfPaymentsRevision: SubjectRevision = {
  topic: 'balance-of-payments',
  bullets: [
    "BoP: Systematic record of all economic transactions between residents and rest of world. India follows IMF BPM6 framework.",
    "BoP = Current Account + Capital Account + Financial Account + Errors & Omissions = 0 (always balances in accounting sense).",
    "Current Account: Trade balance (goods) + Services trade + Primary income + Secondary income (transfers/remittances).",
    "India's merchandise trade deficit FY24: ~$240 billion. Services surplus: ~$163 billion. Net services partially offset goods deficit.",
    "India is world's largest remittance recipient — $125 billion (2023). Major sources: UAE, US, Saudi Arabia.",
    "CAD (Current Account Deficit): Total imports > total exports. India's CAD FY24: ~1.2% of GDP ($23.3 billion) — comfortable.",
    "Sustainable CAD for India: 2-2.5% of GDP. Worst CAD: 4.8% of GDP in FY13 (Taper Tantrum).",
    "Capital/Financial Account: FDI ($71B FY24), FPI (volatile), ECBs ($190B outstanding), NRI deposits ($157B).",
    "1991 BoP crisis: Forex reserves fell to $1.2 billion (2 weeks imports). India pledged 47 tonnes gold. IMF bailout triggered LPG reforms.",
    "2013 Taper Tantrum: CAD 4.8%, rupee crashed Rs 55→68/$. RBI's FCNR(B) swap attracted $34 billion, stabilised situation.",
    "Forex reserves composition: FCAs (~$590B), Gold (~$57B, 854 tonnes), SDRs (~$18B), IMF reserve position (~$5B).",
    "Reserve adequacy: Import cover ~11 months (benchmark: 3 months). Short-term debt cover ~3x. Guidotti-Greenspan rule met.",
    "India's forex reserves peaked at $704 billion (September 2024) before declining due to RBI intervention.",
    "Sterilised intervention: When RBI buys dollars, it sells G-Secs/issues MSS bonds to absorb excess rupee liquidity.",
    "India's external debt/GDP: ~19% (comfortable; crisis threshold 40%+). Debt service ratio: 6.7% (safe; danger: 20%+).",
    "FDI is most stable CAD financing. Debt-financed CAD is riskier. FPI is most volatile."
],
  comparisons: [
    {
        "title": "Current Account vs Capital Account",
        "headers": [
            "Feature",
            "Current Account",
            "Capital/Financial Account"
        ],
        "rows": [
            [
                "Records",
                "Trade in goods, services, income, transfers",
                "Cross-border capital/financial flows"
            ],
            [
                "Components",
                "Trade balance, services, remittances",
                "FDI, FPI, ECBs, NRI deposits"
            ],
            [
                "Nature",
                "Flow account (income/expenditure)",
                "Stock-changing account (assets/liabilities)"
            ],
            [
                "India position",
                "Usually deficit (imports > exports)",
                "Usually surplus (capital inflows)"
            ]
        ]
    },
    {
        "title": "1991 Crisis vs 2013 Taper Tantrum",
        "headers": [
            "Feature",
            "1991 Crisis",
            "2013 Taper Tantrum"
        ],
        "rows": [
            [
                "Trigger",
                "Gulf War, USSR collapse, political instability",
                "US Fed signalling QE tapering"
            ],
            [
                "CAD/GDP",
                "3.1%",
                "4.8%"
            ],
            [
                "Forex reserves",
                "$1.2 billion (2 weeks imports)",
                "$270 billion (7 months imports)"
            ],
            [
                "Response",
                "IMF bailout, gold pledge, LPG reforms",
                "FCNR(B) swap ($34B), rate hikes"
            ],
            [
                "Outcome",
                "Structural reforms — liberalisation",
                "Temporary — situation stabilised in months"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Current Account — \"GIST\"",
        "mnemonic": "Goods trade, Invisibles (services), Secondary income (transfers), primary income (investment income)",
        "explanation": "Four components of the current account: Goods (merchandise trade), Invisible services trade, Secondary income (remittances, grants), primary income (dividends, interest)."
    },
    {
        "title": "Forex Reserve Components — \"FGSR\"",
        "mnemonic": "Foreign Currency Assets, Gold, SDRs, Reserve position in IMF",
        "explanation": "Four components of India's forex reserves in order of size: FCAs (largest), Gold, Special Drawing Rights, Reserve position in IMF."
    }
],
}
