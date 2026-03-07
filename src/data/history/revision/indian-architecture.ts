import type { HistoryRevision } from "@/types/history"

export const indianArchitectureRevision: HistoryRevision = {
  topic: "indian-architecture",
  bullets: [
    "Nagara (North Indian) temples have a curvilinear shikhara tower; Dravida (South Indian) temples have a pyramidal vimana.",
    "Vesara style is a Deccan hybrid of Nagara and Dravida, patronized by Chalukyas, Rashtrakutas, and Hoysalas.",
    "Nagara temples have no boundary walls or elaborate gateways; Dravida temples have enclosing walls (prakara) and gopurams.",
    "Barabar Caves (Bihar) are the oldest surviving rock-cut caves in India, patronized by Ashoka for the Ajivika sect.",
    "The Kailasa Temple (Cave 16, Ellora) is the world's largest monolithic structure, carved top-down by Rashtrakuta king Krishna I.",
    "Ajanta Caves have 30 Buddhist caves; Ellora has 34 caves (Buddhist + Hindu + Jain).",
    "The Qutub Minar (72.5m) was begun by Qutbuddin Aibak and completed by Iltutmish.",
    "The Alai Darwaza (Alauddin Khalji, 1311) is the first building in India to use a true arch and true dome.",
    "Humayun's Tomb (1565) is the first Mughal garden tomb, built in the Persian charbagh style — it inspired the Taj Mahal.",
    "The Taj Mahal was built by Shah Jahan (1632-53) for Mumtaz Mahal; architect: Ustad Ahmad Lahori.",
    "The double dome technique was a Mughal innovation, allowing a higher outer dome while maintaining interior proportions.",
    "Pietra dura (inlay of semi-precious stones) was introduced by the Mughals, seen extensively in the Taj Mahal.",
    "Victoria Terminus (CST Mumbai) by F.W. Stevens (1888) is a UNESCO World Heritage Site — Gothic Revival style.",
    "Edwin Lutyens designed New Delhi (1911-31) including Rashtrapati Bhavan (formerly Viceroy's House).",
    "Le Corbusier designed Chandigarh as independent India's first planned city in the 1950s.",
    "Konark Sun Temple (Odisha) is shaped like a chariot with 24 wheels, built by Narasimhadeva I of the Eastern Ganga dynasty.",
    "Brihadeshwara Temple at Thanjavur (Chola, 1010 CE) has a 66m vimana — the tallest in India.",
    "Hoysala temples at Belur, Halebidu, and Somnathpur are known for intricate soapstone carvings and stellate (star-shaped) plans.",
    "The Shore Temple at Mamallapuram (Pallavas) is one of the earliest structural stone temples in South India.",
    "Fatehpur Sikri, built by Akbar, was abandoned after only 14 years, possibly due to water scarcity.",
  ],
  comparisons: [
    {
      title: "Nagara vs Dravida vs Vesara Temple Styles",
      headers: ["Feature", "Nagara (North)", "Dravida (South)", "Vesara (Deccan)"],
      rows: [
        ["Tower", "Curvilinear shikhara", "Pyramidal vimana with storeys (talas)", "Hybrid — elements of both"],
        ["Boundary wall", "Absent", "Present (prakara)", "Variable"],
        ["Gateway", "Simple entrance", "Elaborate gopurams (taller than vimana)", "Moderate"],
        ["Plan shape", "Square/rectangular", "Square/rectangular", "Often stellate (star-shaped)"],
        ["Material", "Sandstone, granite", "Granite", "Soapstone (steatite)"],
        ["Region", "North India (UP, MP, Rajasthan, Odisha)", "Tamil Nadu, Karnataka, AP", "Deccan (Karnataka, Maharashtra)"],
        ["Key examples", "Kandariya Mahadeva, Lingaraja, Konark", "Brihadeshwara, Meenakshi, Shore Temple", "Hoysaleswara, Durga Temple (Aihole)"],
      ],
    },
    {
      title: "Indo-Islamic Architectural Phases",
      headers: ["Period", "Dynasty", "Key Features", "Examples"],
      rows: [
        ["Sultanate (early)", "Slave/Khalji", "Reused Hindu temple materials, pointed arches", "Quwwat-ul-Islam, Qutub Minar, Alai Darwaza"],
        ["Sultanate (later)", "Tughlaq", "Sloping walls, austere, minimal decoration", "Tughlaqabad Fort, Firoz Shah Kotla"],
        ["Provincial", "Various", "Regional adaptations — Jaunpur, Gujarat, Bengal", "Atala Mosque (Jaunpur), Sidi Saiyyed Mosque (Ahmedabad)"],
        ["Mughal", "Mughal", "Symmetry, gardens, domes, pietra dura, marble", "Humayun's Tomb, Taj Mahal, Red Fort"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Temple Styles (NaDraVe)",
      mnemonic: "Nagara (North, curved shikhara), Dravida (Deccan-South, pyramidal vimana), Vesara (hybrid)",
      explanation:
        "The three main styles of Hindu temple architecture: Nagara in the North (curvilinear shikhara), Dravida in the South (pyramidal vimana with gopurams), and Vesara in the Deccan (hybrid with star-shaped plans).",
    },
    {
      title: "Mughal Architecture Evolution (HASFAR)",
      mnemonic: "Humayun's Tomb, Akbar's Fatehpur Sikri, Shah Jahan's Taj, Fort, Aurangzeb's decline, Red Fort",
      explanation:
        "The evolution of Mughal architecture: Humayun's Tomb (first garden tomb), Akbar's Fatehpur Sikri (sandstone), Shah Jahan's Taj Mahal and Red Fort (marble, pietra dura peak), Aurangzeb's Bibi Ka Maqbara (poor imitation of Taj, decline of the tradition).",
    },
  ],
}
