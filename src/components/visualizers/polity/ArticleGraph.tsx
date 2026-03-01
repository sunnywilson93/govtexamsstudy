'use client'

import { useMemo, useState } from 'react'
import type { Article, Amendment, LandmarkCase } from '@/types/polity'

interface ArticleGraphProps {
  articles: Article[]
  amendments: Amendment[]
  cases: LandmarkCase[]
  onSelectArticle: (article: Article) => void
}

interface GraphNode {
  id: string
  label: string
  type: 'article' | 'amendment' | 'case'
  x: number
  y: number
  data: Article | Amendment | LandmarkCase
}

interface GraphEdge {
  from: string
  to: string
}

const NODE_RADIUS = 18
const COLORS = {
  article: { fill: '#fee2e2', stroke: '#ef4444' },
  amendment: { fill: '#dbeafe', stroke: '#3b82f6' },
  case: { fill: '#dcfce7', stroke: '#22c55e' },
}

export function ArticleGraph({
  articles,
  amendments,
  cases,
  onSelectArticle,
}: ArticleGraphProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

  const { nodes, edges } = useMemo(() => {
    const nodeList: GraphNode[] = []
    const edgeList: GraphEdge[] = []

    const articleCount = articles.length
    const amendmentCount = amendments.length
    const caseCount = cases.length

    const artCols = Math.ceil(Math.sqrt(articleCount))
    articles.forEach((a, i) => {
      const col = i % artCols
      const row = Math.floor(i / artCols)
      nodeList.push({
        id: a.id,
        label: `Art. ${a.number}`,
        type: 'article',
        x: 60 + col * 80,
        y: 60 + row * 80,
        data: a,
      })
    })

    const artRows = Math.ceil(articleCount / artCols)
    const amendStartY = 60 + artRows * 80 + 40

    const amCols = Math.ceil(Math.sqrt(amendmentCount))
    amendments.forEach((am, i) => {
      const col = i % amCols
      const row = Math.floor(i / amCols)
      nodeList.push({
        id: am.id,
        label: `${am.number}th`,
        type: 'amendment',
        x: 60 + col * 80,
        y: amendStartY + row * 80,
        data: am,
      })
    })

    const amRows = Math.ceil(amendmentCount / amCols)
    const caseStartY = amendStartY + amRows * 80 + 40

    const caseCols = Math.ceil(Math.sqrt(Math.max(caseCount, 1)))
    cases.forEach((c, i) => {
      const col = i % caseCols
      const row = Math.floor(i / caseCols)
      nodeList.push({
        id: c.id,
        label: c.name.split(' v')[0].slice(0, 12),
        type: 'case',
        x: 60 + col * 80,
        y: caseStartY + row * 80,
        data: c,
      })
    })

    articles.forEach((a) => {
      a.amendments.forEach((amLabel) => {
        const am = amendments.find(
          (m) => String(m.number) === amLabel.replace(/\D/g, '')
        )
        if (am) edgeList.push({ from: a.id, to: am.id })
      })

      a.cases.forEach((caseId) => {
        if (cases.find((c) => c.id === caseId)) {
          edgeList.push({ from: a.id, to: caseId })
        }
      })
    })

    return { nodes: nodeList, edges: edgeList }
  }, [articles, amendments, cases])

  const nodeMap = useMemo(() => {
    const map = new Map<string, GraphNode>()
    for (const n of nodes) map.set(n.id, n)
    return map
  }, [nodes])

  const connectedIds = useMemo(() => {
    if (!selectedNodeId) return new Set<string>()
    const ids = new Set<string>([selectedNodeId])
    for (const e of edges) {
      if (e.from === selectedNodeId) ids.add(e.to)
      if (e.to === selectedNodeId) ids.add(e.from)
    }
    return ids
  }, [selectedNodeId, edges])

  const svgWidth = useMemo(() => {
    const maxX = Math.max(...nodes.map((n) => n.x), 0)
    return maxX + 100
  }, [nodes])

  const svgHeight = useMemo(() => {
    const maxY = Math.max(...nodes.map((n) => n.y), 0)
    return maxY + 100
  }, [nodes])

  const handleNodeClick = (node: GraphNode) => {
    setSelectedNodeId(node.id === selectedNodeId ? null : node.id)
    if (node.type === 'article') {
      onSelectArticle(node.data as Article)
    }
  }

  return (
    <div className="overflow-auto rounded-lg border border-border-primary bg-bg-elevated">
      <div className="flex items-center gap-4 border-b border-border-primary px-4 py-2">
        <span className="flex items-center gap-1.5 text-xs text-text-secondary">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: COLORS.article.stroke }}
          />
          Articles
        </span>
        <span className="flex items-center gap-1.5 text-xs text-text-secondary">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: COLORS.amendment.stroke }}
          />
          Amendments
        </span>
        <span className="flex items-center gap-1.5 text-xs text-text-secondary">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: COLORS.case.stroke }}
          />
          Cases
        </span>
      </div>
      <svg
        width={svgWidth}
        height={svgHeight}
        className="min-h-[400px]"
        role="img"
        aria-label="Article relationship graph"
      >
        {edges.map((e, i) => {
          const from = nodeMap.get(e.from)
          const to = nodeMap.get(e.to)
          if (!from || !to) return null
          const isHighlighted =
            selectedNodeId && (connectedIds.has(e.from) && connectedIds.has(e.to))
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isHighlighted ? '#6366f1' : '#e2e8f0'}
              strokeWidth={isHighlighted ? 2 : 1}
              opacity={selectedNodeId ? (isHighlighted ? 1 : 0.15) : 0.4}
            />
          )
        })}

        {nodes.map((node) => {
          const colors = COLORS[node.type]
          const isSelected = node.id === selectedNodeId
          const isConnected = connectedIds.has(node.id)
          const dimmed = selectedNodeId && !isConnected

          return (
            <g
              key={node.id}
              onClick={() => handleNodeClick(node)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
              opacity={dimmed ? 0.2 : 1}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={NODE_RADIUS}
                fill={colors.fill}
                stroke={isSelected ? '#4f46e5' : colors.stroke}
                strokeWidth={isSelected ? 3 : 1.5}
              />
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                className="pointer-events-none select-none text-[9px] font-medium"
                fill={colors.stroke}
              >
                {node.label.length > 8 ? `${node.label.slice(0, 7)}..` : node.label}
              </text>

              {hoveredNode === node.id && (
                <g>
                  <rect
                    x={node.x - 50}
                    y={node.y - NODE_RADIUS - 28}
                    width={100}
                    height={22}
                    rx={4}
                    fill="#1e293b"
                    opacity={0.9}
                  />
                  <text
                    x={node.x}
                    y={node.y - NODE_RADIUS - 14}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="pointer-events-none select-none text-[10px]"
                    fill="white"
                  >
                    {node.label}
                  </text>
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
