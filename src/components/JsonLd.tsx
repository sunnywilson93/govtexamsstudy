// Static JSON-LD structured data for India geo-targeting (no user input — XSS safe)
const WEBSITE_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GovtExamsStudy',
  url: 'https://govtexamsstudy.org',
  description:
    "India's first free interactive visual learning platform for UPSC, SSC, IBPS, RRB, and all government exam preparation.",
  inLanguage: 'en-IN',
  audience: {
    '@type': 'Audience',
    geographicArea: { '@type': 'Country', name: 'India' },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://govtexamsstudy.org/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GovtExamsStudy',
    url: 'https://govtexamsstudy.org',
    areaServed: { '@type': 'Country', name: 'India' },
  },
})

const COURSE_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Course',
      name: 'Indian Polity for Government Exams',
      description: 'Complete Indian Polity and Constitution — 50 topics with notes, revision, and PYQs',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/polity',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Course',
      name: 'Indian History for Government Exams',
      description: 'Complete Indian History — 50 topics with notes, revision, and PYQs',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/history',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Course',
      name: 'Indian Geography for Government Exams',
      description: 'Complete Indian Geography — 50 topics with notes, revision, and PYQs',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/geography',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Course',
      name: 'Indian Economy for Government Exams',
      description: 'Complete Indian Economy — 50 topics with notes, revision, and PYQs',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/economics',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Course',
      name: 'Quantitative Aptitude for Government Exams',
      description: 'Complete Quantitative Aptitude — 31 topics with concepts, tricks, and practice problems',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/quant',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Course',
      name: 'Reasoning & Logic for Government Exams',
      description: 'Complete Reasoning — 14 topics with visualizers, concepts, and practice problems',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/reasoning',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Course',
      name: 'General Science for Government Exams',
      description: 'General Science with interactive periodic table and human body systems explorer',
      provider: { '@type': 'Organization', name: 'GovtExamsStudy' },
      url: 'https://govtexamsstudy.org/science',
      educationalLevel: 'Competitive Examination',
      inLanguage: 'en-IN',
    },
  ],
})

export function JsonLd() {
  // React renders <script> text children without HTML-escaping (safe for JSON-LD)
  return (
    <>
      <script type="application/ld+json">{WEBSITE_SCHEMA}</script>
      <script type="application/ld+json">{COURSE_SCHEMA}</script>
    </>
  )
}
