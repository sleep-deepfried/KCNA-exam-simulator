import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KCNA Exam Dojo</title>
        <meta name="description" content="The offline iOS study app for the Kubernetes and Cloud Native Associate (KCNA) exam. Practice exams, flashcards, concept docs, and domain analytics — all on your device." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="KCNA, Kubernetes, Cloud Native, Certification, Exam, iOS, App, Tutorials Dojo" />
        <meta name="author" content="Earl John Pulido" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="icon" type="image/png" href="/favicon.png?v=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="KCNA Exam Dojo" />
        <meta property="og:description" content="The offline iOS study app for the KCNA exam, in collaboration with Tutorials Dojo." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KCNA Exam Dojo" />
        <meta name="twitter:description" content="The offline iOS study app for the KCNA exam, in collaboration with Tutorials Dojo." />
      </Head>

      <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* About */}
              <div>
                <h3 className="text-base font-semibold mb-3 text-teal-400">KCNA Exam Dojo</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  An offline iOS app for Kubernetes and Cloud Native Associate exam prep,
                  built in collaboration with Tutorials Dojo.
                </p>
              </div>

              {/* App links */}
              <div>
                <h3 className="text-base font-semibold mb-3 text-teal-400">App</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    <a href="#" className="hover:text-teal-400 transition-colors">
                      Download on the App Store
                    </a>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="hover:text-teal-400 transition-colors">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-base font-semibold mb-3 text-teal-400">Resources</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>
                    <a href="https://www.cncf.io/certification/kcna/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-teal-400 transition-colors">
                      Official KCNA Certification
                    </a>
                  </li>
                  <li>
                    <a href="https://tutorialsdojo.com" target="_blank" rel="noopener noreferrer"
                       className="hover:text-teal-400 transition-colors">
                      Tutorials Dojo
                    </a>
                  </li>
                  <li>
                    <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-teal-400 transition-colors">
                      Kubernetes Docs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright bar */}
            <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
              <p>© {new Date().getFullYear()} KCNA Exam Dojo. All rights reserved.</p>
              <p>
                Developed by{' '}
                <a
                  href="https://www.linkedin.com/in/pulido-ejn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors underline decoration-dotted underline-offset-2"
                >
                  Earl John Pulido
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
