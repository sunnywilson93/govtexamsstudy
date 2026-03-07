import type { HistoryRevision } from "@/types/history"

export const reformMovementsRevision: HistoryRevision = {
  topic: "reform-movements",
  bullets: [
    "Raja Ram Mohan Roy founded the Brahmo Sabha in 1828 (later Brahmo Samaj); he is called the 'Father of the Indian Renaissance' and 'Father of Modern India.'",
    "Ram Mohan Roy fought against Sati, child marriage, polygamy, and idolatry; promoted Western education and monotheism based on the Upanishads.",
    "Sati was abolished in 1829 (Regulation XVII) by Lord William Bentinck, largely due to Ram Mohan Roy's efforts.",
    "After Ram Mohan Roy's death (1833), the Brahmo Samaj split: Debendranath Tagore, then Keshab Chandra Sen (Brahmo Samaj of India, 1866), then Sadharan Brahmo Samaj (1878).",
    "Swami Dayanand Saraswati founded the Arya Samaj in Bombay in 1875; motto: 'Go back to the Vedas.'",
    "Dayanand's 'Satyarth Prakash' (1882) rejected post-Vedic scriptures, idol worship, caste by birth, and child marriage.",
    "Arya Samaj introduced the Shuddhi (reconversion) movement and established DAV schools across North India.",
    "Ramakrishna Paramahamsa preached the universality of religions: 'Yato mat, tato path' (as many faiths, so many paths).",
    "Swami Vivekananda founded the Ramakrishna Mission (1897) at Belur Math; famous for his 1893 Chicago speech.",
    "Vivekananda emphasized practical Vedanta — serving the poor as service to God; his birthday (12 January) is National Youth Day.",
    "Prarthana Samaj (1867) was founded in Bombay by Atmaram Pandurang; M.G. Ranade was its most prominent leader.",
    "Theosophical Society (1875): founded by Blavatsky and Olcott; moved to Adyar, Madras (1882); Annie Besant was its most prominent leader in India.",
    "Jyotirao Phule founded the Satyashodhak Samaj (1873) in Pune; wrote 'Gulamgiri' (1873) comparing caste to slavery.",
    "Sir Syed Ahmed Khan founded the Muhammadan Anglo-Oriental College at Aligarh (1875; later AMU, 1920).",
    "Deoband Movement (1866): founded by Muhammad Qasim Nanautavi; opposed British rule and Western education.",
    "Hindu Widows' Remarriage Act (1856) was achieved through the efforts of Ishwar Chandra Vidyasagar.",
    "Age of Consent Act (1891) raised the marriage age of consent for girls from 10 to 12.",
    "Subhas Chandra Bose called Vivekananda 'the maker of modern India.'",
  ],
  comparisons: [
    {
      title: "Major Reform Movements Compared",
      headers: ["Movement", "Founded", "Founder", "Key Philosophy", "Region"],
      rows: [
        ["Brahmo Samaj", "1828", "Raja Ram Mohan Roy", "Monotheism (Upanishads), anti-Sati, Western education", "Bengal"],
        ["Arya Samaj", "1875", "Swami Dayanand Saraswati", "'Back to the Vedas,' Shuddhi, anti-idolatry", "North India (Punjab)"],
        ["Ramakrishna Mission", "1897", "Swami Vivekananda", "Universal religion, practical Vedanta, service to poor", "Pan-India"],
        ["Prarthana Samaj", "1867", "Atmaram Pandurang", "Social reform, widow remarriage, anti-caste", "Maharashtra/Bombay"],
        ["Theosophical Society", "1875 (India: 1882)", "Blavatsky & Olcott; Annie Besant", "Revival of Hindu/Buddhist philosophy, universal brotherhood", "Madras (Adyar)"],
        ["Satyashodhak Samaj", "1873", "Jyotirao Phule", "Anti-caste, lower-caste rights, women's education", "Maharashtra"],
      ],
    },
    {
      title: "Reformist vs Revivalist Movements",
      headers: ["Aspect", "Reformist (e.g., Brahmo Samaj)", "Revivalist (e.g., Arya Samaj)"],
      rows: [
        ["Approach", "Reform from within using Western ideas", "Revival of ancient Indian (Vedic) traditions"],
        ["Attitude to Western culture", "Selectively embraced Western education and rationalism", "Rejected Western cultural influence; promoted Sanskrit learning"],
        ["Source of authority", "Upanishads + rational inquiry", "Vedas exclusively"],
        ["Religious practices", "Rejected idol worship, caste, rituals", "Rejected idol worship but upheld Vedic rituals (havan, etc.)"],
        ["Conversion", "Did not advocate reconversion", "Promoted Shuddhi (reconversion/purification)"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Reform Movement Founders (RAM-DVP)",
      mnemonic: "Roy-Atmaram, Madam Blavatsky, Dayanand-Vivekananda, Phule",
      explanation:
        "Key founders in chronological order: Raja Ram Mohan Roy (Brahmo Samaj, 1828), Atmaram Pandurang (Prarthana Samaj, 1867), Jyotirao Phule (Satyashodhak Samaj, 1873), Dayanand Saraswati (Arya Samaj, 1875), Blavatsky & Olcott (Theosophical Society, 1875), Vivekananda (Ramakrishna Mission, 1897).",
    },
    {
      title: "Social Reform Legislation (SWA — Sati, Widow, Age)",
      mnemonic: "Sati abolished 1829, Widow Remarriage 1856, Age of Consent 1891",
      explanation:
        "Three landmark social reform laws in chronological order: Sati abolished (1829, Bentinck/Ram Mohan Roy), Hindu Widows' Remarriage Act (1856, Vidyasagar), Age of Consent Act (1891, raised marriage age from 10 to 12).",
    },
  ],
}
