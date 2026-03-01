'use client'

import { useState } from 'react'
import type { MapLayer as MapLayerType, GeoFeature } from '@/types/geography'

interface MapLayerProps {
  layer: MapLayerType
  visible: boolean
  onFeatureClick: (feature: GeoFeature) => void
}

export function MapLayerOverlay({ layer, visible, onFeatureClick }: MapLayerProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  if (!visible) return null

  return (
    <g data-testid={`layer-${layer.id}`}>
      {layer.features.map((feature) => {
        const isHovered = hoveredId === feature.id

        return (
          <g key={feature.id}>
            <path
              data-testid={`feature-${feature.id}`}
              d={feature.path}
              fill="none"
              stroke={isHovered ? '#1d4ed8' : '#3b82f6'}
              strokeWidth={isHovered ? 3 : 2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer transition-colors"
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onFeatureClick(feature)}
            />
            {isHovered && (
              <FeatureTooltip feature={feature} />
            )}
            <FeatureLabel feature={feature} />
          </g>
        )
      })}
    </g>
  )
}

function FeatureLabel({ feature }: { feature: GeoFeature }) {
  const coords = extractMidpoint(feature.path)
  if (!coords) return null

  return (
    <text
      x={coords.x}
      y={coords.y - 8}
      textAnchor="middle"
      className="pointer-events-none select-none fill-blue-700 text-[8px] font-medium"
    >
      {feature.name}
    </text>
  )
}

function FeatureTooltip({ feature }: { feature: GeoFeature }) {
  const coords = extractMidpoint(feature.path)
  if (!coords) return null

  const length = feature.properties.length
  const tooltipText = length
    ? `${feature.name} (${length} km)`
    : feature.name

  return (
    <g className="pointer-events-none">
      <rect
        x={coords.x - 60}
        y={coords.y - 30}
        width={120}
        height={20}
        rx={4}
        fill="#1e293b"
        fillOpacity={0.9}
      />
      <text
        x={coords.x}
        y={coords.y - 16}
        textAnchor="middle"
        className="fill-white text-[9px] font-medium"
      >
        {tooltipText}
      </text>
    </g>
  )
}

function extractMidpoint(path: string): { x: number; y: number } | null {
  const points = path.match(/[\d.]+/g)
  if (!points || points.length < 4) return null

  const pairs: { x: number; y: number }[] = []
  for (let i = 0; i < points.length - 1; i += 2) {
    pairs.push({ x: parseFloat(points[i]), y: parseFloat(points[i + 1]) })
  }

  const midIndex = Math.floor(pairs.length / 2)
  return pairs[midIndex] ?? pairs[0]
}
