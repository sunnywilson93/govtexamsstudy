import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for GovtExamsStudy — how we collect, use, and protect your data under DPDPA 2023.',
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold text-text-primary">Privacy Policy</h1>

      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Data We Collect</h2>
          <p className="mb-2">GovtExamsStudy collects limited data to provide and improve the platform:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong className="text-text-primary">Progress cookies:</strong> Your topic progress,
              streak, and scores are saved in your browser&apos;s localStorage and cookies. This
              data never leaves your device.
            </li>
            <li>
              <strong className="text-text-primary">Google Analytics 4 (GA4):</strong> When you
              consent, we use GA4 to collect anonymised usage data (pages visited, session duration,
              device type). This data is processed by Google under their privacy policy. No
              personally identifiable information is collected.
            </li>
            <li>
              <strong className="text-text-primary">Google AdSense:</strong> When you consent, Google
              AdSense may set cookies to serve relevant ads. Google&apos;s advertising practices are
              governed by their own privacy policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">No Account Data</h2>
          <p>
            GovtExamsStudy does not require registration or login. We do not collect names, email
            addresses, phone numbers, or any other personally identifiable information as part of
            normal platform use. All learning progress is stored locally on your device.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">
            Your Rights (DPDPA 2023)
          </h2>
          <p className="mb-2">
            Under India&apos;s Digital Personal Data Protection Act, 2023 (DPDPA 2023), you have
            the following rights with respect to any personal data we process:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Right to access information about data being processed</li>
            <li>Right to correction and erasure of personal data</li>
            <li>Right to grievance redressal</li>
            <li>Right to nominate another person to exercise rights on your behalf</li>
          </ul>
          <p className="mt-2">
            Since we do not collect personally identifiable information in the ordinary course of
            use, most DPDPA rights are exercisable locally by clearing your browser data. For any
            other requests, please contact us at the email below.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Cookies</h2>
          <p className="mb-2">We use three categories of cookies:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong className="text-text-primary">Essential:</strong> localStorage entries for
              your learning progress and cookie consent preference. These are necessary for the
              platform to function and cannot be disabled.
            </li>
            <li>
              <strong className="text-text-primary">Analytics:</strong> GA4 cookies that help us
              understand how the platform is used. Only set with your consent.
            </li>
            <li>
              <strong className="text-text-primary">Advertising:</strong> AdSense cookies that
              enable Google to serve relevant advertisements. Only set with your consent. Revenue
              from ads keeps this platform free.
            </li>
          </ul>
          <p className="mt-2">
            You can withdraw your consent at any time by clearing your browser&apos;s localStorage
            and cookies for this site. The consent banner will reappear on your next visit.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Contact</h2>
          <p>
            For privacy-related queries or to exercise your rights under DPDPA 2023, please
            contact:
          </p>
          <p className="mt-2">
            <strong className="text-text-primary">Email:</strong>{' '}
            <a
              href="mailto:privacy@govtexamsstudy.org"
              className="text-indigo-600 underline hover:text-indigo-700"
            >
              privacy@govtexamsstudy.org
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
