import Link from 'next/link'
import Head from 'next/head'

const EFFECTIVE_DATE = 'April 19, 2026'
const APP_NAME = 'KCNA Exam Dojo'
const CONTACT_EMAIL = 'spokenindollar@gmail.com'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — {APP_NAME}</title>
        <meta name="description" content={`Privacy Policy for ${APP_NAME}`} />
      </Head>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-1.5 text-kcna-primary hover:text-kcna-secondary text-sm font-medium mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Effective date: {EFFECTIVE_DATE}</p>

            <div className="prose prose-gray max-w-none text-gray-700 space-y-8 text-sm leading-relaxed">

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
                <p>
                  {APP_NAME} ("the App") is an iOS application for KCNA certification exam preparation,
                  built in collaboration with Tutorials Dojo. Your privacy matters to us.
                  The short version: <strong>the App collects no personal data and sends nothing to any server.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Data We Do Not Collect</h2>
                <p>The App does <strong>not</strong> collect, transmit, or share:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li>Your name, email address, or any contact information</li>
                  <li>Device identifiers or advertising IDs</li>
                  <li>Location data</li>
                  <li>Usage analytics or crash reports sent to us</li>
                  <li>Any data to third-party analytics, advertising, or tracking services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Data Stored Locally on Your Device</h2>
                <p>
                  All data the App stores remains on your device and is never transmitted anywhere.
                  This includes:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
                  <li><strong>Exam attempts</strong> — your answers, scores, and timestamps (stored via SwiftData)</li>
                  <li><strong>Display name</strong> — an optional name you enter in Settings (stored in UserDefaults)</li>
                  <li><strong>Exam date</strong> — an optional target exam date you set in Settings (stored in UserDefaults)</li>
                  <li><strong>App preferences</strong> — color scheme, onboarding state, and similar settings (stored in UserDefaults)</li>
                </ul>
                <p className="mt-3">
                  You can delete all local data at any time by deleting the App from your device.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h2>
                <p>
                  The App does not integrate any third-party SDKs for analytics, advertising,
                  crash reporting, or social login. The App operates entirely offline after installation.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Children's Privacy</h2>
                <p>
                  The App does not knowingly collect any information from children under 13.
                  Because no data is collected at all, the App complies with COPPA by design.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
                <p>
                  If we update this Privacy Policy, we will revise the effective date above and post
                  the updated policy at this URL. Continued use of the App after any changes
                  constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
                <p>
                  Questions about this Privacy Policy? Reach us at{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-kcna-primary hover:text-kcna-secondary underline underline-offset-2 decoration-dotted"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
