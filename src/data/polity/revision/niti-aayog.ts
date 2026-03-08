import type { SubjectRevision } from '@/types/subject-notes'

export const nitiAayogRevision: SubjectRevision = {
  topic: 'niti-aayog',
  bullets: [
    'Established 1 January 2015 by Cabinet resolution. NOT constitutional or statutory — executive body. Replaced Planning Commission.',
    'Chairperson: Prime Minister. Vice-Chairperson: appointed by PM. CEO: appointed by PM (Secretary rank, fixed tenure).',
    'Governing Council: All Chief Ministers + All Lt. Governors — highest decision-making body.',
    'Regional Councils: formed for specific issues affecting groups of states. Chaired by PM or Vice-Chairperson.',
    'Full-time Members: domain experts. Part-time Members: max 2 from research institutions. Ex-officio Members: max 4 Union Ministers.',
    'KEY DIFFERENCE from Planning Commission: NITI Aayog has NO power to allocate funds. Fund allocation is by Finance Ministry.',
    'Planning Commission followed top-down approach. NITI Aayog follows bottom-up approach — cooperative + competitive federalism.',
    'Five Year Plans replaced by: Three Year Action Agenda (2017-20), Seven Year Strategy (2017-24), Fifteen Year Vision (2017-32).',
    'Key initiatives: Aspirational Districts Programme (112 districts), Atal Innovation Mission (AIM), National Monetisation Pipeline.',
    'Indices published: SDG India Index, Composite Water Management Index, Health Index, Innovation Index, School Education Quality Index.',
    'Planning Commission was chaired by PM with Deputy Chairman (Cabinet rank). NITI has Vice-Chairperson.',
    'Planning Commission had state plan approval authority. NITI Aayog has NO approval authority over state plans.',
    'iGOT Karmayogi platform operates under NITI Aayog for civil services capacity building.',
    'NITI Aayog operates from Yojana Bhavan (former Planning Commission HQ) in New Delhi.',
    'First Vice-Chairperson: Arvind Panagariya (2015-2017). Current: Suman Bery (2022-).',
  ],
  comparisons: [
    {
      title: 'NITI Aayog vs Planning Commission',
      headers: ['Feature', 'Planning Commission', 'NITI Aayog'],
      rows: [
        ['Established', '1950', '2015'],
        ['Nature', 'Executive body', 'Executive body (think tank)'],
        ['Fund allocation', 'Yes — to states/ministries', 'No — Finance Ministry does'],
        ['Approach', 'Top-down', 'Bottom-up (cooperative federalism)'],
        ['Head', 'PM + Deputy Chairman', 'PM + Vice-Chairperson'],
        ['State plan approval', 'Yes', 'No'],
        ['Planning framework', 'Five Year Plans', 'Action Agenda/Strategy/Vision'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'NITI = National Institution for Transforming India',
      mnemonic: 'NITI stands for National Institution for Transforming India — NOT "Niti" meaning policy',
      explanation: 'While "niti" means policy in Hindi, NITI is an acronym for National Institution for Transforming India.',
    },
    {
      title: 'NITI Key Feature — "No Funds"',
      mnemonic: 'NITI has No Fund allocation power — biggest difference from Planning Commission',
      explanation: 'The most important distinction: NITI Aayog cannot allocate funds to ministries or states.',
    },
  ],
}
