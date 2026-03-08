import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function PolityLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian Polity"
      subjectColor="#ef4444"
      subjectSlug="polity"
      showHeading={false}
      links={[
        { href: '/polity/historical-background', label: 'Historical Background', group: 'Constitutional Foundations' },
        { href: '/polity/constituent-assembly', label: 'Constituent Assembly', group: 'Constitutional Foundations' },
        { href: '/polity/preamble', label: 'Preamble', group: 'Constitutional Foundations' },
        { href: '/polity/union-territory', label: 'Union & Its Territory', group: 'Constitutional Foundations' },
        { href: '/polity/citizenship', label: 'Citizenship', group: 'Constitutional Foundations' },
        { href: '/polity/official-language', label: 'Official Language', group: 'Constitutional Foundations' },
        { href: '/polity/comparison-constitutions', label: 'Comparison of Constitutions', group: 'Constitutional Foundations' },
        { href: '/polity/fundamental-rights', label: 'Fundamental Rights', group: 'Rights & Duties' },
        { href: '/polity/dpsp', label: 'Directive Principles', group: 'Rights & Duties' },
        { href: '/polity/fundamental-duties', label: 'Fundamental Duties', group: 'Rights & Duties' },
        { href: '/polity/rights-issues', label: 'Rights & Contemporary Issues', group: 'Rights & Duties' },
        { href: '/polity/president-vp', label: 'President & VP', group: 'Union Executive' },
        { href: '/polity/prime-minister', label: 'Prime Minister & CoM', group: 'Union Executive' },
        { href: '/polity/parliament', label: 'Parliament', group: 'Union Executive' },
        { href: '/polity/attorney-general', label: 'Attorney General', group: 'Union Executive' },
        { href: '/polity/governor', label: 'Governor', group: 'State Government' },
        { href: '/polity/chief-minister', label: 'Chief Minister & CoM', group: 'State Government' },
        { href: '/polity/state-legislature', label: 'State Legislature', group: 'State Government' },
        { href: '/polity/advocate-general', label: 'Advocate General', group: 'State Government' },
        { href: '/polity/parliamentary-committees', label: 'Parliamentary Committees', group: 'Parliament' },
        { href: '/polity/parliamentary-privileges', label: 'Parliamentary Privileges', group: 'Parliament' },
        { href: '/polity/supreme-court', label: 'Supreme Court', group: 'Judiciary' },
        { href: '/polity/high-courts', label: 'High Courts', group: 'Judiciary' },
        { href: '/polity/tribunals', label: 'Tribunals', group: 'Judiciary' },
        { href: '/polity/judicial-review', label: 'Judicial Review', group: 'Judiciary' },
        { href: '/polity/basic-structure', label: 'Basic Structure Doctrine', group: 'Judiciary' },
        { href: '/polity/subordinate-courts', label: 'Subordinate Courts', group: 'Judiciary' },
        { href: '/polity/centre-state-relations', label: 'Centre-State Relations', group: 'Federal Structure' },
        { href: '/polity/inter-state-relations', label: 'Inter-State Relations', group: 'Federal Structure' },
        { href: '/polity/emergency-provisions', label: 'Emergency Provisions', group: 'Federal Structure' },
        { href: '/polity/amendment-procedure', label: 'Amendment Procedure', group: 'Federal Structure' },
        { href: '/polity/special-provisions-states', label: 'Special Provisions for States', group: 'Federal Structure' },
        { href: '/polity/panchayati-raj', label: 'Panchayati Raj', group: 'Local Government' },
        { href: '/polity/municipalities', label: 'Municipalities', group: 'Local Government' },
        { href: '/polity/cooperative-societies', label: 'Cooperative Societies', group: 'Local Government' },
        { href: '/polity/election-commission', label: 'Election Commission', group: 'Bodies & Special' },
        { href: '/polity/cag', label: 'CAG', group: 'Bodies & Special' },
        { href: '/polity/upsc-spsc', label: 'UPSC & State PSCs', group: 'Bodies & Special' },
        { href: '/polity/finance-commission', label: 'Finance Commission', group: 'Bodies & Special' },
        { href: '/polity/statutory-bodies', label: 'Statutory Bodies', group: 'Bodies & Special' },
        { href: '/polity/anti-defection', label: 'Anti-Defection Law', group: 'Bodies & Special' },
        { href: '/polity/scheduled-tribal-areas', label: 'Scheduled & Tribal Areas', group: 'Bodies & Special' },
        { href: '/polity/niti-aayog', label: 'NITI Aayog', group: 'Bodies & Special' },
        { href: '/polity/national-commissions', label: 'National Commissions', group: 'Bodies & Special' },
        { href: '/polity/lokpal-lokayuktas', label: 'Lokpal & Lokayuktas', group: 'Bodies & Special' },
        { href: '/polity/political-parties', label: 'Political Parties', group: 'Political Process' },
        { href: '/polity/pressure-groups', label: 'Pressure Groups', group: 'Political Process' },
        { href: '/polity/representation-people', label: 'Representation of People', group: 'Political Process' },
        { href: '/polity/rti-act', label: 'RTI Act', group: 'Governance & Transparency' },
        { href: '/polity/governance-reforms', label: 'Governance Reforms', group: 'Governance & Transparency' },
        { href: '/polity/articles', label: 'Article Explorer', group: 'Visualizers' },
        { href: '/polity/amendments', label: 'Amendment Timeline', group: 'Visualizers' },
        { href: '/polity/landmark-cases', label: 'Landmark Cases', group: 'Visualizers' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
