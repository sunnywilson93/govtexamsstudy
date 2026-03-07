import type { HistoryRevision } from "@/types/history"

export const paintingsSculptureRevision: HistoryRevision = {
  topic: "paintings-sculpture",
  bullets: [
    "Bhimbetka rock shelters (MP) contain the earliest known rock paintings in India, dating to c. 30,000 BCE.",
    "Ajanta Caves (Aurangabad, Maharashtra) have 30 Buddhist caves with paintings spanning two phases — Satavahana and Vakataka periods.",
    "Ajanta paintings use the fresco-secco technique (painting on dry plaster, not wet plaster).",
    "The Padmapani and Vajrapani Bodhisattva paintings (Cave 1, Ajanta) are the most celebrated.",
    "Mughal painting was brought to India by Humayun via Persian artists Mir Sayyid Ali and Abdus Samad.",
    "Akbar's atelier produced the Hamzanama (1400 paintings), Akbarnama, and Razmnama (Persian Mahabharata).",
    "Jahangir was the greatest Mughal connoisseur of painting; Mansur was his court painter for naturalistic animal studies.",
    "Aurangzeb's puritanism led to the decline of Mughal painting and dispersal of artists to Rajput courts.",
    "The Bani Thani painting (Kishangarh school, Rajasthan, by Nihal Chand) is called the 'Indian Mona Lisa.'",
    "Kangra school (Pahari) is known for delicate, lyrical paintings of Nayaka-Nayika and Gita Govinda themes.",
    "Basohli school (Pahari) is the earliest Pahari sub-school, known for bold colors and beetle-wing ornamentation.",
    "Gandhara School used grey schist stone and showed Greco-Roman influence (wavy hair, toga-like robes on Buddha).",
    "Mathura School used red sandstone and was purely indigenous Indian in style (curly hair, transparent robes).",
    "The Sarnath Buddha (Gupta period) is considered the finest example of Indian sculpture — serene expression, thin clinging drapery.",
    "Chola bronzes used the lost-wax (cire perdue) technique; the Nataraja is the most iconic.",
    "The Nataraja depicts Shiva performing the Tandava dance within a ring of fire (prabhamandala).",
    "Arjuna's Penance at Mamallapuram (Pallavas) is the world's largest open-air rock relief.",
    "Abanindranath Tagore founded the Bengal School of Art (early 20th c.) — his 'Bharat Mata' painting became iconic.",
    "The Progressive Artists' Group (PAG, 1947) included F.N. Souza, S.H. Raza, and M.F. Husain.",
    "Nandalal Bose illustrated the original copy of the Indian Constitution.",
  ],
  comparisons: [
    {
      title: "Gandhara vs Mathura vs Sarnath Schools of Sculpture",
      headers: ["Feature", "Gandhara", "Mathura", "Sarnath (Gupta)"],
      rows: [
        ["Period", "1st-5th c. CE", "1st-3rd c. CE", "4th-6th c. CE"],
        ["Material", "Grey schist stone", "Red sandstone (spotted)", "Cream-colored chunar sandstone"],
        ["Influence", "Greco-Roman (Hellenistic)", "Purely indigenous Indian", "Refinement of Mathura"],
        ["Buddha's hair", "Wavy, Apollonian", "Curly (ushnisha/top-knot)", "Tight curls (snail-shell)"],
        ["Robe", "Draped toga-like, heavy folds", "Transparent, clinging", "Extremely thin, almost invisible"],
        ["Expression", "Solemn, realistic", "Smiling, robust", "Serene, spiritual, idealized"],
        ["Patron", "Kushana (Kanishka)", "Kushana", "Gupta emperors"],
        ["Region", "NW India / Pakistan / Afghanistan", "Uttar Pradesh", "Uttar Pradesh (Sarnath)"],
      ],
    },
    {
      title: "Mughal vs Rajasthani vs Pahari Painting Schools",
      headers: ["Feature", "Mughal", "Rajasthani (Rajput)", "Pahari"],
      rows: [
        ["Period", "16th-18th c.", "16th-19th c.", "17th-19th c."],
        ["Patronage", "Mughal emperors", "Rajput kings", "Hill state chiefs"],
        ["Themes", "Court scenes, portraits, history", "Devotional (Krishna, Radha), romantic", "Romantic, devotional, lyrical"],
        ["Influence", "Persian + Indian", "Indigenous + Mughal", "Mughal + local traditions"],
        ["Key sub-schools", "Akbar, Jahangir, Shah Jahan periods", "Mewar, Bundi, Kishangarh, Jaipur", "Basohli (bold), Kangra (delicate)"],
        ["Style", "Realistic, detailed, naturalistic", "Bold colors, flat figures, decorative", "Delicate, soft colors, naturalistic landscapes"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Three Sculpture Schools (GMaS)",
      mnemonic: "Gandhara (Grey, Greek), Mathura (Red, Indian), Sarnath (Cream, Gupta refinement)",
      explanation:
        "Remember the three main Buddhist sculpture schools by their stone color and key influence: Gandhara = Grey schist + Greek influence, Mathura = Red sandstone + indigenous Indian, Sarnath = Cream sandstone + Gupta period refinement.",
    },
    {
      title: "Mughal Painters by Emperor (HAJSAu)",
      mnemonic: "Humayun brought painters, Akbar's atelier (1400 Hamzanama), Jahangir (Mansur, Naturalism), Shah Jahan (Formal), Aurangzeb (Decline)",
      explanation:
        "Track the evolution of Mughal painting through emperors: Humayun brought Persian artists; Akbar expanded the atelier massively; Jahangir favoured naturalism (Mansur); Shah Jahan's period saw increasing formalism; Aurangzeb's puritanism led to decline and dispersal.",
    },
  ],
}
