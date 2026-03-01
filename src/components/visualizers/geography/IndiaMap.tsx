'use client'

import { useState, useMemo } from 'react'
import type { IndiaState, MapLayer as MapLayerType, GeoFeature } from '@/types/geography'
import { MapLayerOverlay } from './MapLayer'
import { FeatureSidebar } from './FeatureSidebar'

interface IndiaMapProps {
  states: IndiaState[]
  layers: MapLayerType[]
}

type SidebarFeature =
  | { type: 'state'; data: IndiaState }
  | { type: 'river'; data: GeoFeature }

export function IndiaMap({ states, layers }: IndiaMapProps) {
  const [layerVisibility, setLayerVisibility] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const layer of layers) {
      initial[layer.id] = layer.visible
    }
    return initial
  })

  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<SidebarFeature | null>(null)

  const viewBox = useMemo(() => computeViewBox(states, layers), [states, layers])

  function handleStateClick(state: IndiaState) {
    setSelectedFeature({ type: 'state', data: state })
  }

  function handleFeatureClick(feature: GeoFeature) {
    setSelectedFeature({ type: 'river', data: feature })
  }

  function toggleLayer(layerId: string) {
    setLayerVisibility((prev) => ({ ...prev, [layerId]: !prev[layerId] }))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4" role="group" aria-label="Map layer controls">
        {layers.map((layer) => (
          <label key={layer.id} className="flex items-center gap-2 text-sm text-text-secondary">
            <input
              type="checkbox"
              checked={layerVisibility[layer.id] ?? false}
              onChange={() => toggleLayer(layer.id)}
              aria-label={layer.name}
              className="h-4 w-4 rounded border-border-secondary accent-subject-geography"
            />
            {layer.name}
          </label>
        ))}
      </div>

      <div className="overflow-auto rounded-lg border border-border-primary bg-bg-elevated p-2">
        <svg
          viewBox={viewBox}
          className="h-auto w-full max-w-3xl"
          role="img"
          aria-label="Interactive map of India"
        >
          <g>
            {states.map((state) => {
              const isHovered = hoveredStateId === state.id

              return (
                <g key={state.id}>
                  <path
                    data-testid={`state-${state.id}`}
                    d={state.path}
                    fill={isHovered ? '#86efac' : '#bbf7d0'}
                    stroke="#15803d"
                    strokeWidth={isHovered ? 1.5 : 0.8}
                    className="cursor-pointer transition-colors"
                    onMouseEnter={() => setHoveredStateId(state.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={() => handleStateClick(state)}
                  />
                  {isHovered && (
                    <StateTooltip state={state} />
                  )}
                </g>
              )
            })}
          </g>

          {layers.map((layer) => (
            <MapLayerOverlay
              key={layer.id}
              layer={layer}
              visible={layerVisibility[layer.id] ?? false}
              onFeatureClick={handleFeatureClick}
            />
          ))}
        </svg>
      </div>

      <FeatureSidebar
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </div>
  )
}

function StateTooltip({ state }: { state: IndiaState }) {
  const center = extractCentroid(state.path)
  if (!center) return null

  return (
    <g className="pointer-events-none">
      <rect
        x={center.x - 50}
        y={center.y - 28}
        width={100}
        height={22}
        rx={4}
        fill="#1e293b"
        fillOpacity={0.9}
      />
      <text
        x={center.x}
        y={center.y - 18}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-white text-[8px] font-medium"
      >
        {state.name}
      </text>
      <text
        x={center.x}
        y={center.y - 9}
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-gray-300 text-[6px]"
      >
        Capital: {state.capital}
      </text>
    </g>
  )
}

function extractCentroid(path: string): { x: number; y: number } | null {
  const numbers = path.match(/[\d.]+/g)
  if (!numbers || numbers.length < 4) return null

  let sumX = 0
  let sumY = 0
  let count = 0

  for (let i = 0; i < numbers.length - 1; i += 2) {
    sumX += parseFloat(numbers[i])
    sumY += parseFloat(numbers[i + 1])
    count++
  }

  if (count === 0) return null
  return { x: sumX / count, y: sumY / count }
}

function computeViewBox(states: IndiaState[], layers: MapLayerType[]): string {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  function processPath(path: string) {
    const numbers = path.match(/[\d.]+/g)
    if (!numbers) return
    for (let i = 0; i < numbers.length - 1; i += 2) {
      const x = parseFloat(numbers[i])
      const y = parseFloat(numbers[i + 1])
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }

  for (const state of states) {
    processPath(state.path)
  }

  for (const layer of layers) {
    for (const feature of layer.features) {
      processPath(feature.path)
    }
  }

  if (!isFinite(minX)) return '0 0 600 800'

  const padding = 20
  return `${minX - padding} ${minY - padding} ${maxX - minX + 2 * padding} ${maxY - minY + 2 * padding}`
}
