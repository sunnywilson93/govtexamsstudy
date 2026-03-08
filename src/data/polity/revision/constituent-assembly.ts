import type { SubjectRevision } from '@/types/subject-notes'

export const constituentAssemblyRevision: SubjectRevision = {
  topic: 'constituent-assembly',
  bullets: [
    'Constituent Assembly was formed in 1946 under the Cabinet Mission Plan.',
    'Total membership: 389 (292 British India + 93 Princely States + 4 Chief Commissioners\' Provinces). After Partition: 299 members.',
    'First meeting: 9 December 1946. Temporary President: Dr. Sachchidananda Sinha (oldest member).',
    'Permanent President: Dr. Rajendra Prasad (elected 11 December 1946). Vice-President: H.C. Mukherjee.',
    'Objectives Resolution moved by Jawaharlal Nehru on 13 December 1946; adopted 22 January 1947.',
    'Drafting Committee Chairman: Dr. B.R. Ambedkar (7 members total). Appointed 29 August 1947.',
    'Other Drafting Committee members: N. Gopalaswami Ayyangar, Alladi Krishnaswami Ayyar, K.M. Munshi, Syed Mohammad Saadulla, N. Madhava Rau, T.T. Krishnamachari.',
    'B.N. Rau was the Constitutional Advisor (not a member of the Assembly).',
    'Constitution adopted on 26 November 1949 (celebrated as Constitution Day / Law Day).',
    'Constitution came into full effect on 26 January 1950 (Republic Day).',
    'Total time: 2 years, 11 months, 18 days. Total sessions: 11. Working days: 165. Total amendments debated: 7,635 (2,473 accepted).',
    'Original Constitution: 395 Articles, 22 Parts, 8 Schedules.',
  ],
  comparisons: [
    {
      title: 'Key Committees and Their Chairmen',
      headers: ['Committee', 'Chairman'],
      rows: [
        ['Drafting Committee', 'Dr. B.R. Ambedkar'],
        ['Union Powers Committee', 'Jawaharlal Nehru'],
        ['Union Constitution Committee', 'Jawaharlal Nehru'],
        ['Provincial Constitution Committee', 'Sardar Vallabhbhai Patel'],
        ['Advisory Committee on Fundamental Rights', 'Sardar Vallabhbhai Patel'],
        ['Rules of Procedure Committee', 'Dr. Rajendra Prasad'],
        ['States Committee', 'Jawaharlal Nehru'],
        ['Steering Committee', 'Dr. Rajendra Prasad'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Drafting Committee Members (NAK SNT)',
      mnemonic: 'Nehru\'s Aide Knew Some New Tactics Too — N. Gopalaswami, Alladi, K.M. Munshi, Syed Saadulla, N. Madhava Rau, T.T. Krishnamachari',
      explanation: 'The six members of the Drafting Committee besides Chairman Dr. B.R. Ambedkar.',
    },
    {
      title: 'Key Dates (9-11-13-22-29-26-26)',
      mnemonic: '9 Dec first meeting, 11 Dec Rajendra Prasad, 13 Dec Objectives Resolution, 22 Jan adopted, 29 Aug Drafting Committee, 26 Nov adopted, 26 Jan Republic Day',
      explanation: 'The seven most important dates in the Constituent Assembly timeline.',
    },
  ],
}
