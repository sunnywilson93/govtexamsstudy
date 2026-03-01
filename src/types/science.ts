export interface Element {
  atomicNumber: number
  symbol: string
  name: string
  atomicMass: number
  category: ElementCategory
  group: number
  period: number
  electronConfig: string
  examFacts: string[]
  uses: string[]
}

export type ElementCategory =
  | "alkali-metal"
  | "alkaline-earth"
  | "transition-metal"
  | "post-transition-metal"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide"

export interface BodySystem {
  id: string
  name: string
  description: string
  organs: Organ[]
  diseases: Disease[]
  examFacts: string[]
}

export interface Organ {
  id: string
  name: string
  function: string
  position: { x: number; y: number }
}

export interface Disease {
  id: string
  name: string
  system: string
  cause: string
  symptoms: string[]
  examRelevance: string
}
