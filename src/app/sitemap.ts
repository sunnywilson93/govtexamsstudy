import type { MetadataRoute } from 'next'

const baseUrl = 'https://govtexamsstudy.org'

const QUANT_TOPICS = [
  'percentage',
  'profit-loss',
  'ratio',
  'time-speed-distance',
  'time-work',
  'number-system',
  'average',
  'simple-compound-interest',
  'mixture-alligation',
  'mensuration',
  'algebra',
  'trigonometry',
  'data-interpretation',
  'statistics-probability',
  'surds-indices',
  'partnership',
  'ages',
  'simplification',
  'sequences-series',
  'decimal-fractions',
  'square-cube-roots',
  'chain-rule',
  'boats-streams',
  'problems-on-trains',
  'races-games',
  'calendar',
  'clocks',
  'stocks-shares',
  'true-discount',
  'bankers-discount',
  'logarithms',
]

const REASONING_TOPICS = [
  'seating',
  'syllogism',
  'series',
  'blood-relations',
  'direction-distance',
  'coding-decoding',
  'puzzles',
  'inequalities',
  'analogies',
  'classification',
  'statement-conclusions',
  'input-output',
  'alphabet-tests',
  'cause-effect',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '/',
    '/quant',
    '/quant/geometry',
    '/reasoning',
    '/polity',
    '/polity/articles',
    '/polity/amendments',
    '/polity/landmark-cases',
    '/history',
    '/history/timeline',
    '/history/freedom-movement',
    '/geography',
    '/geography/map',
    '/economics',
    '/economics/flows',
    '/economics/budget',
    '/science',
    '/science/periodic-table',
    '/science/human-body',
    '/practice',
  ]

  const quantRoutes = QUANT_TOPICS.map((slug) => `/quant/${slug}`)
  const reasoningRoutes = REASONING_TOPICS.map((slug) => `/reasoning/${slug}`)

  const allRoutes = [...staticRoutes, ...quantRoutes, ...reasoningRoutes]

  return allRoutes.map((route) => {
    const depth = route.split('/').filter(Boolean).length
    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: route === '/' ? 'daily' : 'weekly',
      priority: route === '/' ? 1.0 : depth === 1 ? 0.8 : 0.6,
    }
  })
}
