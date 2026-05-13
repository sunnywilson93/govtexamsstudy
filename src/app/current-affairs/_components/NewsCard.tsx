import type { NewsItem } from '@/types/current-affairs'
import { CATEGORY_COLORS, parseExamTags } from './categories'

interface Props {
  item: NewsItem
  index: number
}

export function NewsCard({ item, index }: Props) {
  const cat = CATEGORY_COLORS[item.category] ?? CATEGORY_COLORS.polity
  const tags = parseExamTags(item.examRelevance)

  return (
    <article
      style={{
        position: 'relative',
        padding: 18,
        borderRadius: 'var(--r-md)',
        background: 'var(--paper)',
        border: '.5px solid var(--rule)',
        boxShadow: 'var(--sh-1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexWrap: 'wrap',
        }}
      >
        <span
          className="mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 8px 3px',
            borderRadius: 5,
            background: `color-mix(in oklch, ${cat.c} 14%, var(--paper))`,
            color: cat.ink,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '.04em',
            textTransform: 'uppercase',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: cat.c,
              display: 'inline-block',
            }}
          />
          {cat.label}
        </span>
        <span
          className="mono"
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: 'var(--ink-3)',
            letterSpacing: '.08em',
            padding: '3px 6px',
            border: '.5px solid var(--rule-2)',
            borderRadius: 4,
          }}
        >
          PIB
        </span>
        <span
          style={{
            fontSize: 11.5,
            color: 'var(--ink-3)',
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item.sourceName}
        </span>
        <span
          className="mono"
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: 'var(--ink-4)',
            letterSpacing: '.06em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </header>

      <h3
        style={{
          margin: 0,
          fontSize: 16.5,
          fontWeight: 700,
          letterSpacing: '-.015em',
          lineHeight: 1.3,
          color: 'var(--ink)',
          textWrap: 'pretty',
        }}
      >
        {item.headline}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: 13.5,
          lineHeight: 1.55,
          color: 'var(--ink-2)',
        }}
      >
        {item.summary}
      </p>

      {tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            gap: 5,
            flexWrap: 'wrap',
            paddingTop: 2,
          }}
        >
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}

      <footer
        style={{
          marginTop: 'auto',
          paddingTop: 10,
          borderTop: '.5px dashed var(--rule-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mono"
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            color: 'var(--indigo-600)',
            letterSpacing: '.04em',
            textDecoration: 'none',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          Read source
          <span aria-hidden>→</span>
        </a>
        {item.examRelevance && tags.length === 0 && (
          <span
            style={{
              fontSize: 11,
              color: 'var(--ink-3)',
              textAlign: 'right',
              lineHeight: 1.4,
            }}
          >
            {item.examRelevance}
          </span>
        )}
      </footer>
    </article>
  )
}
