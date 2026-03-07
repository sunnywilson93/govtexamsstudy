import type { HistoryRevision } from "@/types/history"

export const europeanCompaniesRevision: HistoryRevision = {
  topic: "european-companies",
  bullets: [
    "Vasco da Gama reached Calicut (Kerala) in 1498 — the first European to reach India by sea via the Cape of Good Hope.",
    "Francisco de Almeida (1505-09) was the first Portuguese Viceroy in India; he followed the 'Blue Water Policy' (Cartaze system) for naval supremacy.",
    "Alfonso de Albuquerque captured Goa from the Sultan of Bijapur in 1510; he is called the 'real founder of the Portuguese empire in India.'",
    "The Portuguese introduced the printing press, tobacco, cashew, potato, and chili to India.",
    "Nino da Cunha shifted the Portuguese capital from Cochin to Goa in 1530.",
    "The Dutch East India Company (VOC) was established in 1602; their first factory in India was at Masulipatnam (1605).",
    "Pulicat was the main Dutch trading center on the Coromandel Coast.",
    "The English East India Company was established on 31 December 1600 by a Royal Charter from Queen Elizabeth I.",
    "Captain William Hawkins visited the Mughal court; the EIC obtained its first firman from Jahangir in 1613.",
    "The first English factory was established at Surat in 1613.",
    "Sir Thomas Roe visited Jahangir's court in 1615 as ambassador of James I and secured trading privileges.",
    "The three British Presidency towns: Madras/Fort St. George (1639), Bombay (1668, from Portugal), Calcutta/Fort William (1690, Job Charnock).",
    "The French East India Company was established in 1664 by Colbert under Louis XIV.",
    "Francois Martin founded Pondicherry (1674), which became the French capital in India.",
    "Dupleix (French Governor, 1742-54) pioneered the policy of political interference in Indian affairs — the concept later perfected by Wellesley as Subsidiary Alliance.",
    "First Carnatic War (1746-48): Extension of War of Austrian Succession; Treaty of Aix-la-Chapelle; Madras restored to English.",
    "Second Carnatic War (1749-54): Robert Clive's defence of Arcot (1751) was the turning point; Treaty of Pondicherry; Dupleix recalled to France.",
    "Third Carnatic War (1758-63): Sir Eyre Coote defeated Count de Lally at the Battle of Wandiwash (1760) — the decisive blow to French power in India.",
    "Treaty of Paris (1763) ended the Third Carnatic War — France retained five trading posts (Pondicherry, Karaikal, Mahe, Yanam, Chandernagore) without military fortifications.",
    "The Battle of Bedara (1759) ended Dutch commercial rivalry with the English in India.",
  ],
  comparisons: [
    {
      title: "European Trading Companies — Chronological Arrival",
      headers: ["Company", "Established", "First Factory in India", "Key Focus"],
      rows: [
        ["Portuguese", "1498 (arrival)", "Cochin (1503, first fort)", "Spice trade, missionary activity, maritime control"],
        ["Dutch (VOC)", "1602", "Masulipatnam (1605)", "Spice trade (pepper, cloves), limited territorial ambition"],
        ["English (EIC)", "1600", "Surat (1613)", "Textiles, spices, gradually territorial expansion"],
        ["French", "1664", "Surat (1668)", "Textiles, political interference, territorial rivalry with English"],
        ["Danish", "1616", "Tranquebar (1620)", "Minor trading activity; sold possessions to British (1845)"],
      ],
    },
    {
      title: "Three Carnatic Wars",
      headers: ["War", "Period", "European Context", "Key Battle/Event", "Treaty"],
      rows: [
        ["First", "1746-48", "War of Austrian Succession", "French captured Madras (1746)", "Aix-la-Chapelle (1748)"],
        ["Second", "1749-54", "Succession disputes in Deccan & Carnatic", "Clive's defence of Arcot (1751)", "Pondicherry (1754)"],
        ["Third", "1758-63", "Seven Years' War", "Battle of Wandiwash (1760)", "Paris (1763)"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Order of European Arrival in India (PDEFD)",
      mnemonic: "Portuguese, Dutch, English, French, Danish",
      explanation:
        "The chronological order of European trading nations arriving in India: Portuguese (1498), Dutch (1602/1605), English (1600/1613), French (1664/1668), Danish (1616/1620). Note: English EIC was chartered before VOC but established factories later.",
    },
    {
      title: "Portuguese Governors (FAA-NN)",
      mnemonic: "Francisco de Almeida, Alfonso de Albuquerque, Nino da Cunha",
      explanation:
        "The three most important Portuguese governors in India: Francisco de Almeida (Blue Water Policy, first Viceroy), Alfonso de Albuquerque (captured Goa, real founder), Nino da Cunha (shifted capital to Goa).",
    },
    {
      title: "Carnatic Wars Results (MAP — Madras restored, Arcot defended, Paris treaty)",
      mnemonic: "MAP: Madras-Arcot-Paris",
      explanation:
        "The defining outcome of each Carnatic War: First — Madras restored to English (Aix-la-Chapelle); Second — Arcot defended by Clive (turning point); Third — Paris treaty ended French power in India.",
    },
  ],
}
