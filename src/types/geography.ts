export interface MapLayer {
  id: string
  name: string
  type: LayerType
  features: GeoFeature[]
  visible: boolean
}

export type LayerType = "rivers" | "mountains" | "minerals" | "crops" | "industrial" | "tribal" | "climate" | "soils"

export interface GeoFeature {
  id: string
  name: string
  path: string
  properties: Record<string, string | number>
  linkedTopics: string[]
  examFacts: string[]
}

export interface IndiaState {
  id: string
  name: string
  capital: string
  path: string
  area: number
  population: number
  features: string[]
}
