import type { HistoryRevision } from "@/types/history"

export const governorGeneralsRevision: HistoryRevision = {
  topic: "governor-generals",
  bullets: [
    "Warren Hastings (1772-85): first Governor-General of Bengal (Regulating Act 1773); abolished the Dual System; founded Asiatic Society (1784, with William Jones); impeached by Edmund Burke (1787-95) but acquitted.",
    "Lord Cornwallis (1786-93): Permanent Settlement (1793); 'Father of Civil Services in India'; Cornwallis Code (separation of revenue and justice); Third Anglo-Mysore War.",
    "Lord Wellesley (1798-1805): Subsidiary Alliance System; Fort William College (1800); Fourth Anglo-Mysore War (1799); called himself 'Bengal Tiger.'",
    "Lord Minto I (1807-13): Treaty of Amritsar with Ranjit Singh (1809); sent a mission to Kabul.",
    "Lord Hastings (1813-23): abolished the Pindari system; ended Maratha power (Third Anglo-Maratha War, 1817-18); Ryotwari System introduced in Madras.",
    "Lord William Bentinck (1828-35): first Governor-General of India (Charter Act 1833); abolished Sati (1829); suppressed Thuggee; English education (Macaulay's Minute, 1835).",
    "Lord Dalhousie (1848-56): Doctrine of Lapse; railways (1853), telegraph (1853), Post Office Act (1854); Wood's Dispatch (1854); 'Maker of Modern India.'",
    "Lord Canning (1856-62): last Governor-General and first Viceroy; handled 1857 Revolt; Indian Councils Act 1861; IPC enacted (1860).",
    "Lord Lawrence (1864-69): established the High Courts at Calcutta, Bombay, and Madras (1862); telegraph line to Europe.",
    "Lord Mayo (1869-72): Statistical Survey of India; financial decentralization; assassinated in the Andaman Islands by Sher Ali.",
    "Lord Lytton (1876-80): Delhi Durbar (1877, Queen Victoria as Empress); Vernacular Press Act (1878); Arms Act (1878); lowered ICS age from 21 to 19.",
    "Lord Ripon (1880-84): 'Father of Local Self-Government' (Resolution of 1882); repealed Vernacular Press Act; First Factory Act (1881); Ilbert Bill controversy.",
    "Lord Curzon (1899-1905): Partition of Bengal (1905); Ancient Monuments Preservation Act (1904); Indian Universities Act (1904); Police Commission under Andrew Fraser.",
    "Lord Minto II (1905-10): Morley-Minto Reforms (1909) — separate electorates for Muslims.",
    "Lord Hardinge (1910-16): annulled Partition of Bengal (1911); shifted capital from Calcutta to Delhi; Delhi Durbar (1911).",
    "Lord Chelmsford (1916-21): Montagu-Chelmsford Reforms (GoI Act 1919, Dyarchy); Rowlatt Act (1919); Jallianwala Bagh Massacre (1919).",
    "Lord Irwin (1926-31): Simon Commission (1928); Dandi March (1930); Gandhi-Irwin Pact (1931); Lahore Session — Purna Swaraj.",
    "Lord Linlithgow (1936-43): GoI Act 1935 implemented; August Offer (1940); Cripps Mission (1942); Quit India Movement (1942).",
    "Lord Mountbatten (1947): last Viceroy; Mountbatten Plan (3 June 1947); oversaw Partition and Independence (15 August 1947); first Governor-General of free India.",
    "C. Rajagopalachari: last (and only Indian) Governor-General of India (1948-50).",
  ],
  comparisons: [
    {
      title: "Key Governor-Generals & Their Landmark Reforms",
      headers: ["Governor-General", "Period", "Key Reform/Policy", "Significance"],
      rows: [
        ["Warren Hastings", "1772-85", "Abolished Dual System", "First to regulate Company administration"],
        ["Lord Cornwallis", "1786-93", "Permanent Settlement (1793)", "Created the Zamindari landlord class"],
        ["Lord Wellesley", "1798-1805", "Subsidiary Alliance", "Disarmed Indian states without direct conquest"],
        ["Lord Bentinck", "1828-35", "Abolished Sati (1829)", "First social reform legislation"],
        ["Lord Dalhousie", "1848-56", "Doctrine of Lapse + Modernization", "Biggest annexationist; introduced railways, telegraph"],
        ["Lord Ripon", "1880-84", "Local Self-Government (1882)", "Foundation of democratic decentralization"],
        ["Lord Curzon", "1899-1905", "Partition of Bengal (1905)", "Triggered the Swadeshi Movement"],
        ["Lord Mountbatten", "1947", "Indian Independence Act", "Last Viceroy; oversaw independence"],
      ],
    },
    {
      title: "Governor-Generals of Bengal vs Governor-Generals of India vs Viceroys",
      headers: ["Designation", "Period", "Created By", "First Holder"],
      rows: [
        ["Governor-General of Bengal", "1773-1833", "Regulating Act 1773", "Warren Hastings"],
        ["Governor-General of India", "1833-1858", "Charter Act 1833", "Lord William Bentinck"],
        ["Viceroy & Governor-General", "1858-1947", "GoI Act 1858", "Lord Canning (also last GG of India)"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Governor-Generals (Major ones in order): WHaWBe-DCML-CHIL-LiMo",
      mnemonic: "Warren Hastings, Wellesley, Bentinck, Dalhousie, Canning, Mayo, Lytton, Ripon, Curzon, Hardinge, Irwin, Linlithgow, Mountbatten",
      explanation:
        "The most exam-relevant Governor-Generals/Viceroys in chronological order. Cornwallis comes between WH and Wellesley, but the mnemonic focuses on the most tested ones.",
    },
    {
      title: "Lord Dalhousie's Contributions (RPWT)",
      mnemonic: "Railways, Post Office, Wood's Dispatch, Telegraph",
      explanation:
        "Lord Dalhousie's four key modernization contributions: Railways (Bombay-Thane, 1853), Post Office Act (1854, uniform rates), Wood's Dispatch (1854, education overhaul), Telegraph (Calcutta-Agra, 1853). Plus the Doctrine of Lapse for annexations.",
    },
  ],
}
