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

export function JsonLd() {
  // React renders <script> text children without HTML-escaping (safe for JSON-LD)
  return <script type="application/ld+json">{WEBSITE_SCHEMA}</script>
}
