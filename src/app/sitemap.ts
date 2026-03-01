import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://govtexamsstudy.org'

  const routes = [
    '/',
    '/quant',
    '/quant/step-solver',
    '/quant/geometry',
    '/reasoning',
    '/reasoning/seating',
    '/reasoning/syllogism',
    '/reasoning/series',
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
    '/dashboard',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
