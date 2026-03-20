import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Disclaimer',
  description:
    'Terms of use, content disclaimer, and grievance redressal information for GovtExamsStudy.',
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold text-text-primary">Terms &amp; Disclaimer</h1>

      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Content Disclaimer</h2>
          <p>
            All content on GovtExamsStudy — including concept explanations, trick summaries, and
            practice questions — is created originally for educational purposes. Content is provided
            &quot;as is&quot; without warranty of any kind, express or implied. While we strive for
            accuracy, users are advised to verify information against official sources before
            relying on it for examination preparation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Public Domain Sources</h2>
          <p className="mb-2">
            Statistical data, constitutional text, and policy information referenced on this
            platform is drawn from publicly available government sources, including:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <a
                href="https://legislative.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                legislative.gov.in
              </a>{' '}
              — Indian legislation and constitutional text
            </li>
            <li>
              <a
                href="https://indiabudget.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                indiabudget.gov.in
              </a>{' '}
              — Union Budget documents
            </li>
            <li>
              <a
                href="https://censusindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                censusindia.gov.in
              </a>{' '}
              — Census and demographic data
            </li>
            <li>
              <a
                href="https://mospi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline hover:text-indigo-700"
              >
                mospi.gov.in
              </a>{' '}
              — National statistics
            </li>
          </ul>
          <p className="mt-2">
            These sources are in the public domain. GovtExamsStudy does not claim copyright over
            any government data or statutory text.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Practice Questions</h2>
          <p>
            All practice questions on this platform are original questions designed solely for
            educational purposes and exam preparation. They are not sourced from, affiliated with,
            or representative of any official examination paper. Questions are intended to help
            learners practise concepts and should not be treated as predictions of actual exam
            questions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">No Affiliation</h2>
          <p>
            GovtExamsStudy is an independent educational platform. It is not affiliated with,
            endorsed by, or connected to any government body or examination authority, including but
            not limited to UPSC (Union Public Service Commission), SSC (Staff Selection
            Commission), IBPS (Institute of Banking Personnel Selection), RRB (Railway Recruitment
            Board), or any State Public Service Commission. All exam names and acronyms are used
            solely for educational reference.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-base font-semibold text-text-primary">Grievance Redressal</h2>
          <p className="mb-2">
            In accordance with the Information Technology Act, 2000 (Section 79) and the
            Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules,
            2021, users who have any grievances regarding content published on this platform may
            contact our Grievance Officer:
          </p>
          <p>
            <strong className="text-text-primary">Email:</strong>{' '}
            <a
              href="mailto:grievance@govtexamsstudy.org"
              className="text-indigo-600 underline hover:text-indigo-700"
            >
              grievance@govtexamsstudy.org
            </a>
          </p>
          <p className="mt-2">
            We will acknowledge grievances within 24 hours and resolve them within 15 days as
            required under the IT Rules 2021.
          </p>
        </section>
      </div>
    </main>
  )
}
