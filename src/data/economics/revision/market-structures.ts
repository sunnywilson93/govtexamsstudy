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
    "Akerlof's 'Market for Lemons' (1970): Information asymmetry causes adverse selection — justifies SEBI disclosure norms, IRDAI regulations."
],
  comparisons: [
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
    }
],
  mnemonics: [
    {
        "title": "CCI Sections — \"3-4-5\"",
        "mnemonic": "Section 3: Anti-competitive agreements, Section 4: Abuse of dominance, Section 5-6: Mergers",
        "explanation": "CCI's three mandates in ascending section numbers: Agreements (3), Dominance abuse (4), Merger control (5-6)."
    },
    {
        "title": "Market Failure — \"EPIM\"",
        "mnemonic": "Externalities, Public goods, Information asymmetry, Merit goods",
        "explanation": "Four types of market failure that justify government intervention in a free market economy."
    }
],
}
