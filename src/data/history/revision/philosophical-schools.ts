import type { HistoryRevision } from "@/types/history"

export const philosophicalSchoolsRevision: HistoryRevision = {
  topic: "philosophical-schools",
  bullets: [
    "Six Orthodox (Astika) schools accept the Vedas: Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta.",
    "Three Heterodox (Nastika) schools reject the Vedas: Buddhism, Jainism, Charvaka (Lokayata).",
    "Samkhya (Kapila) — dualism of Purusha (consciousness) and Prakriti (matter); 25 tattvas; three gunas (Sattva, Rajas, Tamas); atheistic despite being Astika.",
    "Yoga (Patanjali) — Samkhya metaphysics + Ishvara (God); Ashtanga Yoga (8 limbs); 'Chitta Vritti Nirodha'; Yoga Sutras have 196 sutras in 4 chapters.",
    "Nyaya (Gautama/Akshapada) — logic and epistemology; 4 Pramanas (Pratyaksha, Anumana, Upamana, Shabda); five-membered syllogism; theistic.",
    "Vaisheshika (Kanada) — atomism; 6 (later 7) Padarthas; 9 eternal substances; paramanu (atom) theory; originally merged with Nyaya.",
    "Mimamsa (Jaimini) — Vedic hermeneutics; 6 Pramanas (most of any school); Vedas are Apaurusheya (authorless); originally atheistic; Kumarila Bhatta and Prabhakara.",
    "Vedanta (Badarayana) — Prasthanatrayi: Upanishads, Brahma Sutras, Bhagavad Gita; three main sub-schools.",
    "Advaita (Shankaracharya, 788-820 CE) — Brahman alone is real, world is Maya, Atman = Brahman; 4 mathas: Sringeri, Dwarka, Puri, Joshimath.",
    "Vishishtadvaita (Ramanujacharya, 1017-1137 CE) — qualified non-dualism; Brahman has attributes (Saguna); liberation through Bhakti to Vishnu.",
    "Dvaita (Madhvacharya, 1238-1317 CE) — Brahman (Vishnu) and souls eternally distinct; Pancha-Bheda (five-fold difference).",
    "Charvaka (Brihaspati) — materialist; only Pratyaksha (perception) as Pramana; no God, soul, afterlife, karma; known only through opponents' texts.",
    "Number of Pramanas by school: Charvaka (1), Vaisheshika/Buddhism (2), Samkhya (3), Nyaya (4), Mimamsa (6).",
    "Patanjali's 5 Kleshas: Avidya (ignorance), Asmita (ego), Raga (attachment), Dvesha (aversion), Abhinivesha (fear of death).",
    "Yoga's 8 limbs: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi.",
    "International Day of Yoga: June 21 (since 2015); Yoga — UNESCO Intangible Cultural Heritage (2016).",
    "Nyaya's syllogism has 5 steps (vs Aristotle's 3): Pratijna, Hetu, Udaharana, Upanaya, Nigamana.",
    "Navya-Nyaya founded by Gangesha Upadhyaya of Mithila (13th century) — became the standard logical method across Indian philosophy.",
    "Vaisheshika's 9 eternal substances: earth, water, fire, air, ether, time, space, soul, mind.",
    "Other Vedanta sub-schools: Shuddhadvaita (Vallabhacharya), Dvaitadvaita (Nimbarkacharya), Achintya Bhedabheda (Chaitanya Mahaprabhu).",
  ],
  comparisons: [
    {
      title: "Six Orthodox Schools — Key Features",
      headers: ["School", "Founder", "Key Concept", "Pramanas", "Theistic?"],
      rows: [
        ["Samkhya", "Kapila", "Purusha-Prakriti dualism, 25 tattvas, 3 gunas", "3", "No (Nirisvara)"],
        ["Yoga", "Patanjali", "Ashtanga Yoga, Chitta Vritti Nirodha", "3", "Yes (Seshvara)"],
        ["Nyaya", "Gautama (Akshapada)", "Logic, 5-membered syllogism", "4", "Yes"],
        ["Vaisheshika", "Kanada", "Atomism, 6 Padarthas, 9 substances", "2", "Yes (later)"],
        ["Mimamsa", "Jaimini", "Vedic ritual interpretation, Apaurusheya", "6", "No (originally)"],
        ["Vedanta", "Badarayana", "Brahman, Prasthanatrayi", "6", "Yes"],
      ],
    },
    {
      title: "Three Sub-Schools of Vedanta",
      headers: ["Sub-School", "Founder", "Core Teaching", "Brahman", "Liberation Through"],
      rows: [
        ["Advaita", "Shankaracharya (788-820)", "Non-dualism; Brahman = Atman", "Nirguna (without attributes)", "Jnana (knowledge)"],
        ["Vishishtadvaita", "Ramanujacharya (1017-1137)", "Qualified non-dualism", "Saguna (with attributes)", "Bhakti (devotion)"],
        ["Dvaita", "Madhvacharya (1238-1317)", "Dualism; God ≠ Soul", "Saguna (Vishnu)", "Grace of Vishnu"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Six Orthodox Schools (S-Y-N-V-M-V)",
      mnemonic: "Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta — 'Some Yogis Never Visit Mosques or Vatican'",
      explanation:
        "The six Astika (orthodox) schools of Indian philosophy. Often paired: Samkhya-Yoga, Nyaya-Vaisheshika, Mimamsa-Vedanta.",
    },
    {
      title: "Pramanas Count (1-2-3-4-6)",
      mnemonic: "Charvaka=1, Vaisheshika=2, Samkhya=3, Nyaya=4, Mimamsa=6 — 'Cheetahs Very Swiftly Navigate Mountains'",
      explanation:
        "The number of valid means of knowledge accepted by each school. This is one of the most frequently tested facts in UPSC Prelims.",
    },
    {
      title: "Vedanta Trinity (A-V-D)",
      mnemonic: "Advaita (Shankara), Vishishtadvaita (Ramanuja), Dvaita (Madhva) — AVD — 'Absolute Versus Dual'",
      explanation:
        "The three main Vedanta sub-schools in chronological order. Non-dualism → Qualified non-dualism → Dualism.",
    },
  ],
}
