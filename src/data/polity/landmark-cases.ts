import type { LandmarkCase } from "@/types/polity"

export const landmarkCases: LandmarkCase[] = [
  {
    id: "kesavananda-bharati",
    name: "Kesavananda Bharati v. State of Kerala",
    year: 1973,
    summary:
      "The Supreme Court's 13-judge bench held that Parliament can amend any part of the Constitution but cannot alter its basic structure. This became the cornerstone of Indian constitutional law.",
    articlesInterpreted: ["368", "31C", "14", "19", "31"],
    impact:
      "Established the Basic Structure Doctrine — the most important judicial innovation in Indian constitutional history. No amendment can destroy the Constitution's essential features.",
    verdict:
      "Parliament's amending power under Article 368 does not include the power to destroy the basic structure or framework of the Constitution.",
  },
  {
    id: "maneka-gandhi",
    name: "Maneka Gandhi v. Union of India",
    year: 1978,
    summary:
      "Expanded the scope of Article 21 (Right to Life) to include the right to live with dignity. Held that procedure established by law must be fair, just and reasonable, not arbitrary.",
    articlesInterpreted: ["14", "19", "21"],
    impact:
      "Transformed Article 21 from a narrow protection against executive action into a broad guarantee of substantive due process. Articles 14, 19, and 21 form a 'golden triangle'.",
    verdict:
      "The procedure under Article 21 must satisfy the requirements of Article 14 (non-arbitrariness) and Article 19 (reasonableness). Right to travel abroad is part of personal liberty.",
  },
  {
    id: "minerva-mills",
    name: "Minerva Mills Ltd. v. Union of India",
    year: 1980,
    summary:
      "Struck down Section 4 of the 42nd Amendment that gave unlimited amending power to Parliament and Section 55 that gave primacy to Directive Principles over Fundamental Rights.",
    articlesInterpreted: ["14", "31C", "368"],
    impact:
      "Reinforced the Basic Structure Doctrine. Established that the balance between Fundamental Rights and Directive Principles is itself a basic feature of the Constitution.",
    verdict:
      "Clauses 4 and 5 of Article 368 (inserted by 42nd Amendment) are unconstitutional as they destroy the essential feature of the limited amending power.",
  },
  {
    id: "golak-nath",
    name: "Golak Nath v. State of Punjab",
    year: 1967,
    summary:
      "Held that Parliament cannot amend Fundamental Rights under Article 368. This was later overruled by the 24th Amendment and the Kesavananda Bharati case.",
    articlesInterpreted: ["13", "368"],
    impact:
      "Temporarily froze Parliament's power to amend Fundamental Rights. Led directly to the 24th and 25th Amendments.",
    verdict:
      "An amendment of the Constitution is a 'law' within the meaning of Article 13, and therefore, if it takes away or abridges a Fundamental Right, it is void.",
  },
  {
    id: "ak-gopalan",
    name: "A.K. Gopalan v. State of Madras",
    year: 1950,
    summary:
      "One of the earliest constitutional cases. Held that Article 21 only protects against executive action, not legislative action. Each Fundamental Right operates independently.",
    articlesInterpreted: ["19", "21", "22"],
    impact:
      "Established a narrow interpretation of Article 21 that prevailed until Maneka Gandhi (1978) overruled it. Each FR was treated as a separate, watertight compartment.",
    verdict:
      "Personal liberty under Article 21 means only freedom from physical restraint. The validity of a law depriving personal liberty cannot be tested under Article 19.",
  },
  {
    id: "golaknath-v-punjab",
    name: "I.C. Golaknath v. State of Punjab",
    year: 1967,
    summary:
      "The Supreme Court ruled that Parliament had no power to amend the Fundamental Rights guaranteed under Part III of the Constitution.",
    articlesInterpreted: ["13", "368"],
    impact:
      "This prospective overruling doctrine was unique in Indian jurisprudence. The decision was effectively overruled by the 24th Amendment (1971) and Kesavananda Bharati (1973).",
    verdict:
      "Fundamental Rights are given a transcendental position and Parliament cannot curtail them through constitutional amendments.",
  },
  {
    id: "ir-coelho",
    name: "I.R. Coelho v. State of Tamil Nadu",
    year: 2007,
    summary:
      "A 9-judge bench held that even laws placed in the Ninth Schedule can be subject to judicial review if they violate the basic structure of the Constitution.",
    articlesInterpreted: ["14", "19", "21", "31B"],
    impact:
      "Removed the blanket immunity of Ninth Schedule laws. Laws added after April 24, 1973 (Kesavananda Bharati date) can be challenged if they violate basic structure.",
    verdict:
      "Ninth Schedule laws are not immune from judicial review if they violate fundamental rights forming part of the basic structure.",
  },
  {
    id: "sr-bommai",
    name: "S.R. Bommai v. Union of India",
    year: 1994,
    summary:
      "Laid down strict guidelines for the exercise of President's Rule under Article 356. Held that secularism is a basic feature of the Constitution.",
    articlesInterpreted: ["356", "74", "75"],
    impact:
      "Curtailed the misuse of Article 356 for political purposes. The President's proclamation is now subject to judicial review. Floor test in assembly is the only valid way to test majority.",
    verdict:
      "The President's power under Article 356 is not absolute and is subject to judicial review. Secularism is a basic feature of the Constitution.",
  },
  {
    id: "vishaka",
    name: "Vishaka v. State of Rajasthan",
    year: 1997,
    summary:
      "In the absence of domestic law, the Supreme Court laid down binding guidelines to prevent sexual harassment of women at the workplace, treating international conventions as enforceable.",
    articlesInterpreted: ["14", "15", "19", "21"],
    impact:
      "Created binding guidelines (Vishaka Guidelines) that remained law until the Sexual Harassment of Women at Workplace Act, 2013 was enacted.",
    verdict:
      "International conventions and norms are to be read into fundamental rights in the absence of domestic law. Laid down detailed guidelines for prevention of sexual harassment.",
  },
  {
    id: "navtej-singh-johar",
    name: "Navtej Singh Johar v. Union of India",
    year: 2018,
    summary:
      "A 5-judge Constitution bench unanimously decriminalized consensual homosexual acts between adults by reading down Section 377 of the Indian Penal Code.",
    articlesInterpreted: ["14", "15", "19", "21"],
    impact:
      "Landmark victory for LGBTQ+ rights in India. Recognized that sexual orientation is a natural and inherent aspect of identity protected by the right to privacy and dignity.",
    verdict:
      "Section 377 IPC, insofar as it criminalises consensual sexual acts of adults in private, is unconstitutional as it violates Articles 14, 15, 19, and 21.",
  },
]
