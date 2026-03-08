import type { SubjectConcept } from '@/types/subject-notes'

export const parliamentConcept: SubjectConcept = {
  topic: 'parliament',
  title: 'Parliament of India',
  description:
    'Parliament is the supreme legislative body of India, consisting of the President, the Rajya Sabha (Council of States), and the Lok Sabha (House of the People) — Art 79. It is the embodiment of the sovereignty of the people and exercises legislative, financial, and oversight functions.',
  category: 'Union Executive',
  keyDates: [
    { year: '1952', event: 'First general elections held; first Lok Sabha constituted on 17 April 1952; first session began on 13 May 1952' },
    { year: '1954', event: 'First joint sitting of Parliament convened to pass the Dowry Prohibition Bill (not eventually needed); first actual joint sitting was in 1961 for the same bill' },
    { year: '1978', event: '44th Amendment — strengthened parliamentary supremacy; restored many provisions altered during Emergency' },
    { year: '1985', event: '52nd Amendment — Anti-Defection Law (Tenth Schedule) enacted' },
    { year: '2003', event: '91st Amendment — strengthened anti-defection provisions; limited Council of Ministers to 15% of Lok Sabha strength' },
    { year: '2010', event: 'Women\'s Reservation Bill passed by Rajya Sabha (reserved 33% seats for women in Parliament and state legislatures); lapsed in Lok Sabha' },
    { year: '2023', event: 'Nari Shakti Vandan Adhiniyam (128th Amendment, later renumbered as 106th Amendment) passed, reserving 1/3 seats for women in Lok Sabha and state assemblies (implementation pending delimitation after Census)' },
  ],
  notes: [
    {
      section: 'Composition of Parliament',
      content:
        'Rajya Sabha (Art 80): maximum 250 members — 238 elected by state and UT legislative assemblies (proportional representation by single transferable vote) + 12 nominated by the President (persons with special knowledge/experience in literature, science, art, social service). It is a permanent body — not subject to dissolution; 1/3 members retire every 2 years (each member serves 6 years). The Vice-President is the ex-officio Chairman; the Deputy Chairman is elected from among members. Rajya Sabha can delay but not reject Money Bills (14 days). Lok Sabha (Art 81): maximum 552 members — 530 elected from states + 20 from UTs + 2 Anglo-Indians nominated by President (nomination provision deleted by 104th Amendment, 2020, effective from Jan 2020). Members directly elected by universal adult franchise (18+ years, 61st Amendment, 1988 — reduced from 21). Normal term is 5 years; can be dissolved earlier by President on PM\'s advice. Speaker is the presiding officer, elected from among members.',
    },
    {
      section: 'Sessions and Procedures',
      content:
        'The President summons each House from time to time; maximum gap between two sessions cannot exceed 6 months (Art 85). Three sessions typically: Budget Session (Feb-May, longest), Monsoon Session (July-Aug), Winter Session (Nov-Dec). Quorum: 1/10 of total membership of each House (Art 100). Types of majority: Simple majority (majority of members present and voting — ordinary bills); Effective majority (majority of effective strength — VP removal); Absolute majority (majority of total strength — Art 368 amendments); Special majority (2/3 of members present and voting — most constitutional amendments); Special majority + state ratification (Art 368 proviso — federal provisions). Question Hour: first hour of each sitting; Starred (oral answer + supplementaries), Unstarred (written answer), Short Notice (less than 10 days notice). Zero Hour: unofficial device; starts after Question Hour; members raise matters of urgent importance without prior notice.',
    },
    {
      section: 'Legislative Process',
      content:
        'Ordinary Bills can be introduced in either House and require simple majority in both Houses. If disagreement exists, the President can summon a Joint Sitting (Art 108) — presided by the Speaker. Only 3 joint sittings have occurred: Dowry Prohibition Bill (1961), Banking Service Commission (Repeal) Bill (1978), Prevention of Terrorism Bill (2002). Money Bills (Art 110): can only be introduced in Lok Sabha, with President\'s recommendation; Rajya Sabha can only suggest amendments within 14 days; Lok Sabha may or may not accept suggestions; no joint sitting for Money Bills. Financial Bills (Art 117): Type I — deal with matters in Art 110 plus other matters (introduced only in Lok Sabha); Type II — contain incidental provisions on expenditure from Consolidated Fund (can be introduced in either House). Constitutional Amendment Bills (Art 368): can be introduced in either House without President\'s recommendation; require special majority; no joint sitting; certain amendments require ratification by half the states.',
    },
    {
      section: 'Parliamentary Privileges and Committees',
      content:
        'Parliamentary Privileges (Art 105): freedom of speech in Parliament (Art 105(1)); no court proceedings for anything said or voted in Parliament (Art 105(2)); exemption from jury service when Parliament is in session; freedom from arrest in civil cases during session and 40 days before and after. Parliament can punish for breach of privilege and contempt. Important Parliamentary Committees: Public Accounts Committee (PAC) — 22 members (15 LS + 7 RS), chaired by an opposition member (convention since 1967); Estimates Committee — 30 members (all from LS); Committee on Public Undertakings — 22 members (15 LS + 7 RS); Departmentally Related Standing Committees — 24 committees, 31 members each; Business Advisory Committee; Committee of Privileges; Ethics Committee. These committees strengthen parliamentary oversight and are called "miniature Parliaments."',
    },
    {
      section: 'Speaker and Deputy Speaker',
      content:
        'The Speaker (Art 93) is elected by Lok Sabha from among its members. Powers: presides over Lok Sabha; maintains order and decorum; decides whether a bill is a Money Bill (decision is final); does not vote in the first instance but has a casting vote in case of a tie; chairs joint sittings; decides disqualification under the Anti-Defection Law (Tenth Schedule); can allow a "secret sitting." The Speaker remains in office even after dissolution of Lok Sabha — until the new Lok Sabha meets. Can be removed by a resolution passed by an effective majority of Lok Sabha after 14 days\' notice. The Speaker is expected to be impartial — by convention, the Speaker severs ties with the party upon election (inspired by British tradition). The Deputy Speaker performs the Speaker\'s duties in their absence; elected by Lok Sabha; by convention, belongs to the opposition party. Pro-tem Speaker: the senior-most member is appointed by the President to conduct the first session of a new Lok Sabha until the Speaker is elected.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Extremely high-yield topic. Questions cover: composition of both Houses, Money Bill vs Financial Bill vs Ordinary Bill procedures, types of majorities, joint sittings (when applicable and when not), parliamentary committees (especially PAC and Estimates Committee), Speaker\'s powers, and the distinction between Rajya Sabha and Lok Sabha. UPSC frequently tests on constitutional provisions vs conventions.',
}
