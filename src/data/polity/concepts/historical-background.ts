import type { SubjectConcept } from '@/types/subject-notes'

export const historicalBackgroundConcept: SubjectConcept = {
  topic: 'historical-background',
  title: 'Historical Background of Indian Constitution',
  description:
    'The Indian Constitution draws from multiple sources and evolved through a series of British Acts and constitutional experiments. Understanding the historical background — from the Regulating Act of 1773 to the Indian Independence Act of 1947 — is essential for grasping the constitutional framework.',
  category: 'Constitutional Foundations',
  keyDates: [
    { year: '1773', event: 'Regulating Act — first step by British Parliament to regulate the affairs of the East India Company; created the office of Governor-General of Bengal (Warren Hastings)' },
    { year: '1784', event: 'Pitt\'s India Act — established Board of Control in England, dual government (Company + Crown)' },
    { year: '1833', event: 'Charter Act — Governor-General of Bengal became Governor-General of India (Lord William Bentinck); ended EIC commercial activities' },
    { year: '1858', event: 'Government of India Act — abolished EIC; power transferred to British Crown; Secretary of State for India created; Governor-General became Viceroy' },
    { year: '1861', event: 'Indian Councils Act — introduced portfolio system; Indians nominated to Viceroy\'s legislative council for first time' },
    { year: '1892', event: 'Indian Councils Act — introduced indirect elections (though termed "nomination"); expanded legislative councils' },
    { year: '1909', event: 'Indian Councils Act (Morley-Minto Reforms) — introduced separate electorates for Muslims; first Indian to Executive Council (S.P. Sinha)' },
    { year: '1919', event: 'Government of India Act (Montagu-Chelmsford Reforms) — introduced Dyarchy in provinces; bicameralism at centre; direct elections' },
    { year: '1935', event: 'Government of India Act — proposed All-India Federation (never implemented); provincial autonomy; three lists (federal, provincial, concurrent); RBI established' },
    { year: '1947', event: 'Indian Independence Act — partitioned India; abolished sovereignty of British Crown; Constituent Assembly became sovereign body; Governor-General became constitutional head' },
  ],
  notes: [
    {
      section: 'The Company Rule (1773-1858)',
      content:
        'The British constitutional experiments in India began with the Regulating Act of 1773, which was the first step to regulate the East India Company\'s affairs and created the Supreme Court at Calcutta. Pitt\'s India Act of 1784 established dual control through the Board of Control (British government) and the Court of Directors (Company). The Charter Act of 1833 centralized power under the Governor-General of India and ended Company\'s commercial activities. The Charter Act of 1853 separated legislative and executive functions for the first time and introduced an open competition system for civil service recruitment (Macaulay Committee). The Government of India Act 1858 ended Company rule after the Revolt of 1857, transferring power directly to the British Crown and creating the office of Secretary of State for India.',
    },
    {
      section: 'Crown Rule and Constitutional Reforms (1858-1919)',
      content:
        'The Indian Councils Act of 1861 began the process of associating Indians with governance by nominating Indians to the Viceroy\'s expanded legislative council and introducing the portfolio system. The Act of 1892 introduced budgetary discussions and indirect elections ("nomination on recommendation"). The Morley-Minto Reforms (1909) introduced separate electorates for Muslims — sowing the seeds of communal politics — and allowed Satyendra Prasad Sinha as the first Indian member of the Viceroy\'s Executive Council. The Montagu-Chelmsford Reforms (1919) introduced Dyarchy (divided provincial subjects into Reserved and Transferred), bicameralism at centre (Council of State and Legislative Assembly), direct elections, and established a Public Service Commission.',
    },
    {
      section: 'Government of India Act, 1935',
      content:
        'The most voluminous and detailed constitutional document of British India, the GoI Act 1935 proposed an All-India Federation (never came into being as princely states refused to join), abolished Dyarchy in provinces and introduced provincial autonomy, established Dyarchy at the centre (never implemented), created three legislative lists — Federal, Provincial, and Concurrent, provided for a Federal Court, established the Reserve Bank of India (1935), and introduced direct elections and responsible government in provinces. This Act formed the basis of the Indian Constitution — about 250 provisions were drawn directly from it.',
    },
    {
      section: 'Indian Independence Act, 1947',
      content:
        'Based on the Mountbatten Plan (3 June 1947), this Act created two independent dominions — India and Pakistan — effective from 15 August 1947. It abolished the office of Secretary of State for India, the India Council, and the position of Viceroy. The Constituent Assemblies of both dominions were empowered to frame their respective constitutions. Until new constitutions were framed, governance would continue under GoI Act 1935. The Act provided for a Governor-General for each dominion as constitutional head. Lord Mountbatten became the first Governor-General of India, and M.A. Jinnah became Pakistan\'s.',
    },
    {
      section: 'Key Sources of the Indian Constitution',
      content:
        'The Constitution draws from multiple sources: Government of India Act 1935 (federal scheme, judiciary, Public Service Commissions, emergency provisions, administrative details); British Constitution (parliamentary system, rule of law, legislative procedure, single citizenship, writs); US Constitution (Fundamental Rights, judicial review, independence of judiciary, Preamble, impeachment of President, removal of SC/HC judges); Irish Constitution (Directive Principles, method of Presidential election, nomination of Rajya Sabha members); Canadian Constitution (federation with strong centre, residuary powers to centre, appointment of state governors, advisory jurisdiction of SC); Australian Constitution (Concurrent List, trade/commerce provisions, joint sitting); Soviet Constitution (Fundamental Duties via 42nd Amendment, five-year plans); French Constitution (Republic, liberty-equality-fraternity); German Weimar Constitution (suspension of Fundamental Rights during Emergency); South African Constitution (amendment procedure, election of Rajya Sabha members); Japanese Constitution (procedure established by law).',
    },
    {
      section: 'Significance for Competitive Exams',
      content:
        'Questions on historical background appear in nearly every UPSC Prelims exam. The most frequently tested areas include: matching Acts with their key provisions, identifying which Act introduced specific features (e.g., separate electorates, Dyarchy, provincial autonomy), constitutional sources (which country inspired which feature), and the chronological sequence of constitutional developments. The GoI Act 1935 is particularly important as it forms the structural backbone of the Indian Constitution.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most high-yield topics in Indian Polity. UPSC Prelims tests 1-2 questions on constitutional history almost every year — frequently on the Acts of 1909, 1919, and 1935 and their key provisions. SSC and banking exams test factual recall on which Act introduced which feature. Understanding constitutional sources is critical for answering "borrowed from which country" type questions.',
}
