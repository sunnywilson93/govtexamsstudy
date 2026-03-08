import type { SubjectConcept } from '@/types/subject-notes'

export const cagConcept: SubjectConcept = {
  topic: 'cag',
  title: 'Comptroller and Auditor General (CAG)',
  description:
    'The Comptroller and Auditor General of India is one of the most important constitutional officers, established under Article 148. The CAG audits all government expenditure (Union, state, and bodies funded by government) and reports to Parliament/state legislatures. Dr. B.R. Ambedkar called the CAG the "most important officer under the Constitution."',
  category: 'Bodies & Special',
  keyDates: [
    { year: '1860', event: 'Office of Auditor General of India created by the British' },
    { year: '1919', event: 'Government of India Act 1919 renamed the office to Auditor General and gave statutory status' },
    { year: '1935', event: 'Government of India Act 1935 — Auditor General made responsible to the Crown; position strengthened' },
    { year: '1950', event: 'Constitutional provisions for CAG (Art 148-151) came into force; V. Narahari Rao became the first CAG of independent India' },
    { year: '1971', event: 'CAG (Duties, Powers and Conditions of Service) Act enacted by Parliament under Art 148(3) and 149' },
    { year: '2012', event: 'CAG report on 2G spectrum allocation — one of the most impactful audit reports, leading to cancellation of 122 telecom licenses by the SC' },
    { year: '2017', event: 'CAG Vinod Rai\'s audit of Commonwealth Games (2010) expenditure exposed massive irregularities' },
  ],
  notes: [
    {
      section: 'Appointment, Tenure, and Removal',
      content:
        'Article 148: the CAG is appointed by the President by warrant under his hand and seal. The CAG takes an oath before the President (or a person appointed by the President). Term: 6 years or 65 years of age, whichever is earlier. Removal: only through the same procedure as a Supreme Court judge (impeachment — proved misbehavior or incapacity, special majority in both Houses). After retirement, the CAG is not eligible for any government office (Art 148(4)). Salary and conditions of service are determined by Parliament and cannot be varied to the CAG\'s disadvantage during tenure. The salary is equivalent to that of a Supreme Court judge. The CAG\'s office expenses are charged on the Consolidated Fund of India (non-votable). These provisions ensure the independence of the CAG from executive interference.',
    },
    {
      section: 'Duties and Powers (Art 149-150)',
      content:
        'Article 149: the CAG performs such duties and exercises such powers in relation to the accounts of the Union and states as prescribed by Parliament. Under the CAG (DPC) Act, 1971, the duties include: (1) auditing all expenditure from the Consolidated Fund of India and state Consolidated Funds to verify that money was legally available and spent for the authorized purpose; (2) auditing all expenditure from the Contingency Fund and Public Account; (3) auditing receipts and expenditure of all bodies or authorities substantially financed from Union or state revenues; (4) auditing accounts of government companies (under the Companies Act); (5) auditing accounts of any body or authority when requested by the President or Governor. The CAG is the sole authority to audit and report on all financial transactions of the Central and State Governments. Article 150: accounts of the Union and states shall be kept in such form as the CAG advises and as the President prescribes.',
    },
    {
      section: 'Reports and Accountability',
      content:
        'Article 151: the CAG\'s reports on Union accounts are submitted to the President, who causes them to be laid before each House of Parliament. Reports on state accounts are submitted to the Governor, who causes them to be laid before the state legislature. Three types of audit reports: (1) Appropriation Accounts — whether money spent was in accordance with Parliament\'s grant; (2) Finance Accounts — overall financial position of the government; (3) Performance Audit — evaluates efficiency, economy, and effectiveness of government programs. The CAG\'s reports are examined by the Public Accounts Committee (PAC) of Parliament. The PAC (chaired by an opposition MP since 1967) scrutinizes the CAG\'s findings and makes recommendations to the government. This CAG-PAC mechanism is the cornerstone of financial accountability in India.',
    },
    {
      section: 'Role as Comptroller vs Auditor',
      content:
        'The title "Comptroller and Auditor General" suggests two roles, but in practice, the CAG primarily functions as an Auditor General (post-facto audit) rather than a Comptroller (preventing unauthorized expenditure). In the British system, the Comptroller General authorizes the release of funds from the Exchequer — providing pre-expenditure control. In India, the CAG does not authorize the release of funds; this function is performed by the executive itself. The CAG\'s audit is a post-expenditure review. Critics argue that the CAG should be given comptrollership functions to prevent unauthorized spending rather than merely reporting it after the fact. Despite this limitation, the CAG\'s audit reports have had enormous impact — examples include the 2G spectrum report (2010), coal block allocation (Coalgate, 2012), and Commonwealth Games (2010).',
    },
    {
      section: 'CAG and Indian Audit & Accounts Department (IA&AD)',
      content:
        'The CAG heads the Indian Audit & Accounts Department (IA&AD), which is one of the largest audit institutions in the world. The IA&AD has offices in all states and UTs. The CAG is also responsible for: preparing and submitting the accounts of the Central Government (this function was transferred to the Controller General of Accounts in the Ministry of Finance in 1976, but the CAG retains the audit function); advising on accounting standards and policies; capacity building and training of auditors. The CAG of India is a member of the United Nations Board of Auditors and the Asian Organisation of Supreme Audit Institutions (ASOSAI). The institution has evolved from a compliance auditor to a performance and value-for-money auditor in line with international best practices.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Important for all exams. UPSC tests on: Art 148-151, appointment and removal, Comptroller vs Auditor distinction, CAG-PAC relationship, and the independence provisions. SSC exams ask about the appointment authority, term, removal process, and Ambedkar\'s description. The distinction between CAG reports and PAC examination is frequently tested.',
}
