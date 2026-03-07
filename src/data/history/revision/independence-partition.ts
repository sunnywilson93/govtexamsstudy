import type { HistoryRevision } from "@/types/history"

export const independencePartitionRevision: HistoryRevision = {
  topic: "independence-partition",
  bullets: [
    "The Cabinet Mission (1946) comprised Lord Pethick-Lawrence, Sir Stafford Cripps, and A.V. Alexander.",
    "The Cabinet Mission rejected the demand for a separate Pakistan and proposed a three-tier federation with a weak centre.",
    "Direct Action Day (16 August 1946) was called by Jinnah and the Muslim League, leading to the Great Calcutta Killings.",
    "Lord Mountbatten was the last Viceroy of India, appointed in March 1947.",
    "The Mountbatten Plan (3 June Plan) announced the partition of India into two dominions — India and Pakistan.",
    "The Indian Independence Act 1947 received Royal Assent on 18 July 1947.",
    "Pakistan was created on 14 August 1947; India became independent on 15 August 1947.",
    "Sir Cyril Radcliffe headed the Boundary Commission that drew the Radcliffe Line dividing India and Pakistan.",
    "Radcliffe had never visited India before and was given only five weeks to draw the boundary.",
    "The Radcliffe Award was published on 17 August 1947 — two days after independence.",
    "An estimated 10-20 million people migrated across the new borders during partition.",
    "Jawaharlal Nehru delivered the 'Tryst with Destiny' speech at midnight on 14-15 August 1947.",
    "Lord Mountbatten became the first Governor-General of independent India; C. Rajagopalachari was the last.",
    "Muhammad Ali Jinnah became the first Governor-General of Pakistan.",
    "The Two-Nation Theory argued that Hindus and Muslims were two separate nations that could not coexist.",
    "The Lahore Resolution (1940) was the formal demand for a separate Muslim state.",
    "The Cripps Mission (1942) offered dominion status after the war but was rejected by both Congress and the League.",
    "Mahatma Gandhi undertook fasts in Calcutta and Delhi to restore communal harmony during partition violence.",
    "The Constituent Assembly, elected in 1946, continued to draft the Constitution under Dr. B.R. Ambedkar.",
    "Dr. Rajendra Prasad was the first President of the Constituent Assembly and later the first President of India.",
  ],
  comparisons: [
    {
      title: "Key Plans & Missions Leading to Independence",
      headers: ["Plan/Mission", "Year", "Key Proposal", "Outcome"],
      rows: [
        ["Cripps Mission", "1942", "Dominion status after WWII, right to secede", "Rejected by both Congress and Muslim League"],
        ["Wavell Plan (Simla Conference)", "1945", "Reconstituted Viceroy's Council with Indian members", "Failed due to Jinnah's demand for Muslim League to nominate all Muslim members"],
        ["Cabinet Mission", "1946", "United India with three-tier federation, weak centre", "Initially accepted but failed over grouping clause"],
        ["Mountbatten Plan", "1947 (June 3)", "Partition into India and Pakistan", "Accepted; led to Indian Independence Act"],
      ],
    },
    {
      title: "India vs Pakistan at Independence",
      headers: ["Aspect", "India", "Pakistan"],
      rows: [
        ["Independence date", "15 August 1947", "14 August 1947"],
        ["First Governor-General", "Lord Mountbatten", "Muhammad Ali Jinnah"],
        ["First PM", "Jawaharlal Nehru", "Liaquat Ali Khan"],
        ["Constituent Assembly head", "Dr. Rajendra Prasad", "Muhammad Ali Jinnah"],
        ["Capital", "New Delhi", "Karachi (later Islamabad)"],
        ["Territory", "Contiguous landmass", "Two wings — West and East Pakistan (separated by 1,600 km)"],
      ],
    },
  ],
  mnemonics: [
    {
      title: "Cabinet Mission Members (PCA)",
      mnemonic: "Pethick-Lawrence, Cripps, Alexander",
      explanation:
        "The three members of the 1946 Cabinet Mission: Lord Pethick-Lawrence (Secretary of State for India, chairman), Sir Stafford Cripps (President of the Board of Trade), and A.V. Alexander (First Lord of the Admiralty).",
    },
    {
      title: "Sequence of Events 1946-47 (CDMI)",
      mnemonic: "Cabinet Mission → Direct Action → Mountbatten Plan → Independence Act",
      explanation:
        "The chronological sequence of major events: Cabinet Mission (March 1946) → Direct Action Day (August 1946) → Mountbatten Plan (June 1947) → Indian Independence Act (July 1947) → Independence (August 1947).",
    },
  ],
}
