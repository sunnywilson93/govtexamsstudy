import type { SubjectRevision } from '@/types/subject-notes'

export const marketStructuresRevision: SubjectRevision = {
  topic: 'market-structures',
  bullets: [
    "Perfect competition: Many buyers & sellers, homogeneous products, free entry/exit, price takers, P = MR = MC.",
    "Monopoly: Single seller, high barriers to entry, price maker, MR < P, deadweight loss, higher price & lower output than competition.",
    "Types of monopoly: Natural (economies of scale — Railways), Legal (patents — 20 years under Indian Patents Act), Government (India Post for letters).",
    "Price discrimination: 1st degree (each consumer's max willingness), 2nd degree (quantity-based — electricity slabs), 3rd degree (group-based — Railways classes).",
    "Monopolistic competition: Many firms, differentiated products, free entry/exit, non-price competition (advertising), short-run supernormal → long-run normal profits.",
    "Examples of monopolistic competition in India: Restaurants (280K+ on Zomato), FMCG brands (HUL, ITC, Dabur), coaching institutes.",
    "Oligopoly: Few dominant firms, strategic interdependence, high barriers to entry, may collude (cartel). Examples: Telecom (Jio, Airtel, Vi), Cement, Aviation.",
    "Cournot model (quantity competition), Bertrand model (price competition), Kinked demand curve (price rigidity in oligopoly).",
    "MRTP Act 1969 → Competition Act 2002. CCI established 2009. Anti-competitive agreements (Section 3), Abuse of dominance (Section 4), Merger regulation (Section 5-6).",
    "CCI penalties: Google Rs 1,337.76 crore (2022, Android), Cement companies Rs 6,307 crore (2012, cartel), Coal India Rs 1,773 crore.",
    "Competition Amendment Act 2023: Deal value threshold Rs 2,000 crore (targets digital acquisitions), settlement/commitment framework.",
    "Market failure: Externalities, public goods, information asymmetry, merit goods — justifies government intervention.",
    "Pigouvian tax: Tax = marginal external cost. India's coal cess Rs 400/tonne is a form of Pigouvian tax.",
    "Public goods: Non-excludable + Non-rivalrous (defence, street lighting). Free-rider problem → government must provide.",
    "Akerlof's 'Market for Lemons' (1970): Information asymmetry causes adverse selection — justifies SEBI disclosure norms, IRDAI regulations.",
    "Monopsony: Single buyer — Government as sole buyer of defence equipment (HAL, BEL). FCI as dominant buyer of wheat/rice at MSP in Punjab/Haryana.",
    "Duopoly: Two sellers — Boeing & Airbus (commercial aircraft), Visa & Mastercard (card networks). Simplest case of oligopoly.",
    "Oligopsony: Few buyers — agricultural traders in remote areas. Key rationale for MSP and cooperative marketing to protect farmers.",
    "Bilateral monopoly: One buyer, one seller — outcome depends on bargaining power. Example: Coal India (single seller) vs single large power plant (buyer).",
    "Contestable markets (Baumol, 1982): Even monopolist may behave competitively if entry barriers are low and exit costless — threat of entry disciplines pricing.",
    "CCI horizontal agreements (Section 3): Cartels, price-fixing, bid rigging, market allocation — presumed AAEC (appreciable adverse effect on competition).",
    "CCI vertical agreements: Exclusive supply, refusal to deal, RPM, tied selling — assessed under rule of reason (not presumed anti-competitive).",
    "Google Android penalty (2022): Rs 1,337.76 crore — mandatory pre-installation of Google apps, preventing OEMs from developing Android forks.",
    "Google Play Store penalty (2022): Rs 936 crore — abuse of dominance in in-app billing, requiring developers to use Google's payment system.",
    "Beer cartel penalty (2021): United Breweries, SABMiller, Carlsberg penalised for price coordination across multiple Indian states.",
    "Competition Amendment 2023: Deal value threshold Rs 2,000 crore (targets digital acquisitions), settlement & commitment framework, reduced merger review to 150 days.",
    "Digital competition challenges: Network effects, data as barrier to entry, multi-sided platforms, killer acquisitions (Facebook buying Instagram/WhatsApp).",
    "Committee on Digital Competition Law (CDCL, 2024): Recommended ex-ante regulation — designating 'Systemically Significant Digital Enterprises' (SSDEs).",
    "HHI (Herfindahl-Hirschman Index): Sum of squared market shares. <1,500 = unconcentrated, 1,500-2,500 = moderate, >2,500 = highly concentrated.",
    "Concentration Ratio: CR4 (top 4 firms). Indian telecom CR3 = 95%+. Aviation CR1 = 60%+ (IndiGo alone). Cement CR5 = 50%+.",
    "Lerner Index: (P - MC) / P. Ranges from 0 (perfect competition) to 1 (max market power). Measures degree of pricing power.",
    "Indian telecom consolidation: 12+ operators (2015) → 3 effective players (2024). Jio entry (2016) drove prices to $0.17/GB — world's lowest.",
    "Natural monopoly regulation: DISCOMs (SERCs set tariffs), Railways (govt monopoly + limited private trains), Airports (AERA regulates charges).",
    "Consumer Protection Act 2019: CCPA (Central Consumer Protection Authority), product liability, e-commerce rules, misleading ad penalties.",
    "MRTP Act focus: Preventing concentration of economic power (size-based, aligned with socialist era). Competition Act focus: Preventing anti-competitive conduct (behaviour-based).",
    "CCI combination review: Assets > Rs 2,000 crore or turnover > Rs 6,000 crore (enterprise) or Rs 8,000 crore / Rs 24,000 crore (group) require CCI approval.",
    "India's advertising market: Rs 1.07 lakh crore (2024). FMCG companies spend 10-15% of revenue on advertising — key feature of monopolistic competition.",
    "Excess capacity in monopolistic competition: Firms produce below minimum efficient scale — the social cost of product variety and differentiation.",
    "Price discrimination examples in India: Railways (8 classes), electricity tariffs (domestic/commercial/industrial slabs), airline dynamic pricing.",
    "Game theory: Nash Equilibrium (no player gains by changing), Prisoner's Dilemma (both cheat despite mutual benefit of cooperation), explains cartel instability.",
    "Barriers to entry: Structural (economies of scale, capital), Strategic (predatory/limit pricing), Legal (patents, licences), Information (brand reputation).",
    "Bid rigging in public procurement: Cover bidding, bid rotation, market allocation, bid suppression. CCI penalised tyre cos, battery cos for bid rigging.",
    "GeM (Government e-Marketplace, 2016): 73+ lakh sellers, Rs 4+ lakh crore transactions (2024). Competitive bidding reduces bid-rigging opportunities.",
    "Indian banking: Top 5 banks hold 50%+ deposits. SBI 22-23% share. PSBs hold ~58% of assets. UPI oligopoly: PhonePe 47%, Google Pay 34%.",
    "Penetration pricing: Jio free services (Sept 2016 - Mar 2017). Predatory pricing: Below-cost by dominant firm to eliminate competition (CCI Section 4).",
    "Agricultural markets: Farmers received 30-40% of consumer price pre-reform. e-NAM (2016): 1,361+ mandis integrated. FPOs bypass intermediaries.",
    "Farm Laws 2020-21: Allowed trade outside APMCs, contract farming, removed stock limits. Repealed Nov 2021 after year-long farmer protests.",
  ],
  comparisons: [
    {
        title: 'MRTP Act vs Competition Act',
        headers: ['Feature', 'MRTP Act 1969', 'Competition Act 2002'],
        rows: [
            ['Focus', 'Size-based (monopolistic power)', 'Conduct-based (anti-competitive behaviour)'],
            ['Philosophy', 'Socialist \u2014 prevent concentration', 'Market-oriented \u2014 promote competition'],
            ['Regulator', 'MRTP Commission', 'Competition Commission of India (CCI)'],
            ['Mergers', 'No merger control', 'Mandatory merger notification above thresholds'],
            ['Penalty', 'Cease and desist only', 'Monetary penalties, structural remedies'],
            ['Dominance', 'Illegal per se (>25% share)', 'Dominance legal \u2014 only abuse is illegal'],
        ],
    },
    {
        title: 'CCI Major Penalty Cases',
        headers: ['Case', 'Year', 'Section', 'Penalty'],
        rows: [
            ['Cement cartel (11 companies)', '2012', 'Section 3 (cartel)', 'Rs 6,307 crore (reduced by NCLAT)'],
            ['Google Android', '2022', 'Section 4 (abuse)', 'Rs 1,337.76 crore'],
            ['Google Play Store', '2022', 'Section 4 (abuse)', 'Rs 936 crore'],
            ['Coal India', '2014', 'Section 4 (abuse)', 'Rs 1,773 crore (set aside)'],
            ['Beer cartel', '2021', 'Section 3 (cartel)', 'Rs 873 crore (3 companies)'],
        ],
    },
    {
        "title": "Market Structures Comparison",
        "headers": [
            "Feature",
            "Perfect Competition",
            "Monopoly",
            "Monopolistic Competition",
            "Oligopoly"
        ],
        "rows": [
            [
                "Number of firms",
                "Very many",
                "One",
                "Many",
                "Few"
            ],
            [
                "Product",
                "Homogeneous",
                "Unique, no substitutes",
                "Differentiated",
                "Homogeneous or differentiated"
            ],
            [
                "Entry barriers",
                "None",
                "Very high",
                "Low",
                "High"
            ],
            [
                "Price control",
                "None (price taker)",
                "Significant (price maker)",
                "Some",
                "Interdependent"
            ],
            [
                "Indian example",
                "Wheat mandi",
                "Indian Railways",
                "Restaurants, FMCG",
                "Telecom, cement"
            ]
        ]
    },
    {
        title: 'Natural Monopoly Regulation in India',
        headers: ['Sector', 'Regulator', 'Market Type', 'Competition Status'],
        rows: [
            ['Electricity distribution', 'CERC/SERCs', 'Natural monopoly (DISCOMs)', 'Regulated tariffs, open access for large consumers'],
            ['Railways', 'Ministry of Railways', 'Government monopoly', 'Limited private trains (Tejas, Vande Bharat)'],
            ['Telecom', 'TRAI', 'Oligopoly (post-liberalisation)', '3 players: Jio, Airtel, Vi'],
            ['Airports', 'AERA', 'Regulated monopoly per city', 'Private operators (Adani, GMR) under regulation'],
            ['Petroleum retail', 'PPAC/PNGRB', 'Oligopoly (PSU-dominated)', 'PSUs >90% share, private <10%'],
        ],
    },
    {
        title: 'Indian Sector Concentration',
        headers: ['Sector', 'Market Type', 'Top Players', 'Concentration Indicator'],
        rows: [
            ['Telecom', 'Oligopoly', 'Jio, Airtel, Vi', 'CR3 = 95%+'],
            ['Aviation', 'Oligopoly', 'IndiGo (60%+), Air India, Akasa', 'CR1 = 60%+'],
            ['Cement', 'Oligopoly', 'UltraTech, Adani, Ambuja, Shree, Dalmia', 'CR5 = 50%+'],
            ['Banking', 'Oligopoly', 'SBI, HDFC, ICICI, BoB, PNB', 'Top 5 = 50%+ deposits'],
            ['FMCG', 'Monopolistic competition', 'HUL, ITC, Dabur, Patanjali, Marico', 'Low concentration, high differentiation'],
            ['E-commerce', 'Duopoly', 'Flipkart, Amazon', 'CR2 = 60%+ (online retail)'],
        ],
    },
  ],
  mnemonics: [
    {
        title: 'CCI Sections \u2014 "3-4-5"',
        mnemonic: 'Section 3: Anti-competitive agreements, Section 4: Abuse of dominance, Section 5-6: Mergers',
        explanation: 'CCI\'s three mandates in ascending section numbers: Agreements (3), Dominance abuse (4), Merger control (5-6).',
    },
    {
        title: 'Market Failure \u2014 "EPIM"',
        mnemonic: 'Externalities, Public goods, Information asymmetry, Merit goods',
        explanation: 'Four types of market failure that justify government intervention in a free market economy.',
    },
    {
        title: 'Market Structures \u2014 "PMMO"',
        mnemonic: 'P: Perfect competition (many firms, homogeneous). M: Monopoly (one firm). M: Monopolistic competition (many firms, differentiated). O: Oligopoly (few firms)',
        explanation: 'Four main market structures in decreasing order of competitiveness and increasing order of market power.',
    },
    {
        title: 'Oligopoly Models \u2014 "CBSK"',
        mnemonic: 'C: Cournot (quantity). B: Bertrand (price). S: Stackelberg (leader-follower). K: Kinked demand (price rigidity)',
        explanation: 'Four key oligopoly models explaining how firms compete \u2014 used in UPSC Economics optional.',
    },
    {
        title: 'HHI Thresholds \u2014 "15-25"',
        mnemonic: '<1,500 = Unconcentrated. 1,500-2,500 = Moderate. >2,500 = Highly concentrated',
        explanation: 'Herfindahl-Hirschman Index thresholds used by competition authorities (US DOJ, CCI) for merger review.',
    },
],
}
