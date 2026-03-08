import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function GeographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian Geography"
      subjectColor="#22c55e"
      subjectSlug="geography"
      showHeading={false}
      links={[
        { href: '/geography/physiography', label: 'Physiography', group: 'Physical Geography' },
        { href: '/geography/drainage-systems', label: 'Drainage Systems', group: 'Physical Geography' },
        { href: '/geography/climate-monsoon', label: 'Climate & Monsoon', group: 'Physical Geography' },
        { href: '/geography/soils', label: 'Soils', group: 'Physical Geography' },
        { href: '/geography/natural-vegetation', label: 'Natural Vegetation', group: 'Physical Geography' },
        { href: '/geography/biodiversity', label: 'Biodiversity', group: 'Physical Geography' },
        { href: '/geography/islands-coasts', label: 'Islands & Coasts', group: 'Physical Geography' },

        { href: '/geography/agriculture', label: 'Agriculture', group: 'Economic Geography' },
        { href: '/geography/irrigation', label: 'Irrigation', group: 'Economic Geography' },
        { href: '/geography/minerals', label: 'Minerals & Mining', group: 'Economic Geography' },
        { href: '/geography/energy', label: 'Energy Resources', group: 'Economic Geography' },
        { href: '/geography/industries', label: 'Industries', group: 'Economic Geography' },
        { href: '/geography/transport', label: 'Transport', group: 'Economic Geography' },

        { href: '/geography/population', label: 'Population', group: 'Human Geography' },
        { href: '/geography/urbanization', label: 'Urbanization', group: 'Human Geography' },
        { href: '/geography/tribes', label: 'Tribes', group: 'Human Geography' },
        { href: '/geography/migration', label: 'Migration', group: 'Human Geography' },

        { href: '/geography/geomorphology', label: 'Geomorphology', group: 'World Geography' },
        { href: '/geography/climatology', label: 'Climatology', group: 'World Geography' },
        { href: '/geography/oceanography', label: 'Oceanography', group: 'World Geography' },
        { href: '/geography/world-mapping', label: 'World Mapping', group: 'World Geography' },

        { href: '/geography/ecosystems', label: 'Ecosystems', group: 'Environment & Ecology' },
        { href: '/geography/environmental-pollution', label: 'Pollution', group: 'Environment & Ecology' },
        { href: '/geography/climate-change', label: 'Climate Change', group: 'Environment & Ecology' },
        { href: '/geography/protected-areas', label: 'Protected Areas', group: 'Environment & Ecology' },
        { href: '/geography/biodiversity-conservation', label: 'Conservation', group: 'Environment & Ecology' },
        { href: '/geography/disaster-management', label: 'Disaster Mgmt', group: 'Environment & Ecology' },
        { href: '/geography/environmental-legislation', label: 'Env. Legislation', group: 'Environment & Ecology' },

        { href: '/geography/water-resources', label: 'Water Resources', group: 'Resource Geography' },
        { href: '/geography/land-resources', label: 'Land Resources', group: 'Resource Geography' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
