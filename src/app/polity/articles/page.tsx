import { articles } from '@/data/polity/articles'
import { amendments } from '@/data/polity/amendments'
import { landmarkCases } from '@/data/polity/landmark-cases'
import { ArticleExplorer } from '@/components/visualizers/polity/ArticleExplorer'

export default function ArticlesPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-text-primary">Article Explorer</h1>
      <p className="mb-6 text-sm text-text-secondary">
        Browse constitutional articles grouped by Part. Search, explore connections, and switch between list and graph views.
      </p>
      <ArticleExplorer
        articles={articles}
        amendments={amendments}
        cases={landmarkCases}
      />
    </div>
  )
}
