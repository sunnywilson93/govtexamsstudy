import type { HistoryRevision } from "@/types/history"

export const angloWarsRevision: HistoryRevision = {
  topic: "anglo-wars",
  bullets: [
    "Four Anglo-Mysore Wars: 1st (1767-69), 2nd (1780-84), 3rd (1790-92), 4th (1799).",
    "Treaty of Madras (1769) — ended 1st Mysore War; mutual defence clause; humiliating for British.",
    "Treaty of Mangalore (1784) — ended 2nd Mysore War; last treaty where an Indian power dictated terms to the British.",
    "Treaty of Seringapatam (1792) — ended 3rd Mysore War; Tipu lost half his territory, paid 3.3 crore; Cornwallis led British forces.",
    "4th Mysore War (1799) — Siege of Seringapatam; Tipu Sultan killed on May 4, 1799; Wellesley was Governor-General.",
    "Tipu Sultan — 'Tiger of Mysore'; Mysorean rockets; planted 'Tree of Liberty'; corresponded with Napoleon; tiger-shaped throne.",
    "Mysorean rockets influenced Congreve rockets used in Napoleonic Wars and the War of 1812.",
    "Three Anglo-Maratha Wars: 1st (1775-82), 2nd (1803-05), 3rd (1817-18).",
    "Convention of Wadgaon (1779) — humiliating British defeat; Mahadaji Scindia surrounded British forces near Pune.",
    "Treaty of Salbai (1782) — ended 1st Maratha War; 20 years peace; British gained Salsette island.",
    "Treaty of Bassein (1802) — Peshwa Baji Rao II accepted Subsidiary Alliance; triggered 2nd Maratha War.",
    "Battle of Assaye (1803) — Wellesley (later Duke of Wellington) defeats Scindia; called it 'the bloodiest battle for the numbers.'",
    "3rd Maratha War (1817-18) — final defeat; Peshwa Baji Rao II pensioned at Bithur; his adopted son Nana Sahib revolted in 1857.",
    "Battle of Koregaon (1818) — small British-Indian force (including Mahar soldiers) repelled larger Peshwa army.",
    "Two Anglo-Sikh Wars: 1st (1845-46), 2nd (1848-49).",
    "Treaty of Lahore (1846) — Sikhs cede Jalandhar Doab, pay 1.5 crore; Treaty of Amritsar sold Kashmir to Gulab Singh for 75 lakh rupees.",
    "Battle of Sobraon (1846) — decisive 1st Sikh War battle; Battle of Gujarat (1849) — decisive 2nd Sikh War battle.",
    "Punjab annexed by Dalhousie (March 29, 1849); Dalip Singh deposed; Koh-i-Noor diamond taken to Britain.",
    "Governor-Generals: Cornwallis (3rd Mysore), Wellesley (4th Mysore, 2nd Maratha), Hastings (1st Maratha, 3rd Maratha), Dalhousie (2nd Sikh).",
    "Sikh defeat partly due to treachery by Lal Singh and Tej Singh who betrayed military plans to the British.",
  ],
  comparisons: [
    {
      title: "Anglo-Mysore Wars — Summary",
      headers: ["War", "Period", "Key Battle/Event", "Treaty", "Governor-General"],
      rows: [
        ["1st", "1767-69", "Hyder Ali reaches gates of Madras", "Treaty of Madras (1769)", "Verelst"],
        ["2nd", "1780-84", "Hyder Ali wins at Pollilur (1780)", "Treaty of Mangalore (1784)", "Hastings → Macpherson"],
        ["3rd", "1790-92", "Siege of Seringapatam", "Treaty of Seringapatam (1792)", "Cornwallis"],
        ["4th", "1799", "Tipu killed at Seringapatam", "No treaty — Mysore annexed", "Wellesley"],
      ],
    },
    {
      title: "Anglo-Maratha Wars — Summary",
      headers: ["War", "Period", "Key Treaty", "Outcome"],
      rows: [
        ["1st", "1775-82", "Treaty of Salbai (1782)", "Status quo; British gain Salsette; 20 years peace"],
        ["2nd", "1803-05", "Surji-Arjungaon (Scindia), Deogaon (Bhonsle)", "Subsidiary Alliance on multiple Maratha chiefs"],
        ["3rd", "1817-18", "Peshwa surrenders", "Maratha Confederacy dissolved; Peshwa pensioned at Bithur"],
      ],
    },
    {
      title: "Anglo-Sikh Wars — Summary",
      headers: ["War", "Period", "Decisive Battle", "Treaty/Outcome"],
      rows: [
        ["1st", "1845-46", "Battle of Sobraon", "Treaty of Lahore; Jalandhar Doab ceded; Kashmir sold to Gulab Singh"],
        ["2nd", "1848-49", "Battle of Gujarat", "Punjab annexed (March 29, 1849); Koh-i-Noor taken"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Anglo-Mysore War Treaties (M-M-S-X)",
      mnemonic: "Madras (1769), Mangalore (1784), Seringapatam (1792), [no treaty — 1799 death] — 'MMS then Death'",
      explanation:
        "The three treaties of the first three Mysore Wars, followed by the 4th War where Tipu died and no treaty was needed. Treaty of Mangalore was the last Indian-dictated treaty.",
    },
    {
      title: "Anglo-Maratha Wars G-Gs",
      mnemonic: "1st = Hastings (Warren), 2nd = Wellesley, 3rd = Hastings (Lord) — 'HWH — Howrah Station connects them!'",
      explanation:
        "The Governor-Generals associated with each Anglo-Maratha War. Note: Warren Hastings (1st) and Lord Hastings (3rd) are different people.",
    },
    {
      title: "Key Years of Annexation",
      mnemonic: "Mysore 1799, Marathas 1818, Sikhs 1849 — '1799-1818-1849: fifty years to conquer India'",
      explanation:
        "The British took about 50 years (1799-1849) to defeat the three last major Indian powers: Mysore (Tipu, 1799), Marathas (Peshwa, 1818), and Sikhs (Punjab, 1849).",
    },
  ],
}
