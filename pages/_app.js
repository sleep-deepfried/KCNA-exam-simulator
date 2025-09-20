import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KCNA Exam Simulator</title>
        <meta name="description" content="Practice for your Kubernetes and Cloud Native Associate (KCNA) certification with comprehensive questions covering all essential topics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="KCNA, Kubernetes, Cloud Native, Certification, Exam, Practice, Simulator" />
        <meta name="author" content="KCNA Exam Simulator" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="icon" type="image/png" href="/favicon.png?v=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="KCNA Exam Simulator" />
        <meta property="og:description" content="Practice for your Kubernetes and Cloud Native Associate (KCNA) certification with comprehensive questions covering all essential topics." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KCNA Exam Simulator" />
        <meta name="twitter:description" content="Practice for your Kubernetes and Cloud Native Associate (KCNA) certification with comprehensive questions covering all essential topics." />
      </Head>
      <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">About KCNA Exam Simulator</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A comprehensive practice platform for the Kubernetes and Cloud Native Associate (KCNA) certification. 
                  Test your knowledge with carefully curated questions and AI-powered study assistance.
                </p>
              </div>
              
              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">Features</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                    153 Practice Questions
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                    AI-Powered Study Notes
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                    Domain Performance Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                    Detailed Explanations
                  </li>
                </ul>
              </div>
              
              {/* Contact & Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-teal-400">Resources</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>
                    <a href="https://www.cncf.io/certification/kcna/" target="_blank" rel="noopener noreferrer" 
                       className="hover:text-teal-400 transition-colors">
                      Official KCNA Certification
                    </a>
                  </li>
                  <li>
                    <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" 
                       className="hover:text-teal-400 transition-colors">
                      Kubernetes Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cncf.io/" target="_blank" rel="noopener noreferrer" 
                       className="hover:text-teal-400 transition-colors">
                      Cloud Native Computing Foundation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Copyright Bar */}
            <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                <p>© {new Date().getFullYear()} KCNA Exam Simulator. Built with ❤️ for the Kubernetes community.</p>
                <p className="mt-1">
                  Developed by <a 
                    href="https://www.linkedin.com/in/pulido-ejn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-400 font-medium hover:text-teal-300 transition-colors underline decoration-dotted underline-offset-2"
                  >
                    Earl John Pulido
                  </a>
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Powered by Next.js
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI by Gemini
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
