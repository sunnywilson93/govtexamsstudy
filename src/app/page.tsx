import { HomeHero } from './_components/HomeHero'
import { HomeSubjects } from './_components/HomeSubjects'
import { HomeConceptOfDay } from './_components/HomeConceptOfDay'
import { HomeCurrentAffairs } from './_components/HomeCurrentAffairs'
import { HomeTrust } from './_components/HomeTrust'

export default function Home() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <HomeHero />
      <HomeConceptOfDay />
      <HomeSubjects />
      <HomeCurrentAffairs />
      <HomeTrust />
    </div>
  )
}
