import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

const APP_NAME = 'KCNA Exam Dojo'
const CONTACT_EMAIL = 'spokenindollar@gmail.com'

const faqs = [
  {
    q: 'Does the app require an internet connection?',
    a: 'No. KCNA Exam Dojo is fully offline. All question banks, flashcards, and Kubernetes concept docs are bundled with the app — no account or network connection needed.',
  },
  {
    q: 'Will my exam history be lost if I delete and reinstall the app?',
    a: 'Yes. All data (attempt history, scores, settings) is stored locally on your device. Deleting the app removes all local data. iCloud backup may preserve it depending on your device settings.',
  },
  {
    q: 'How do I reset my exam history?',
    a: 'Open Settings inside the app and tap "Reset All Data." This permanently deletes all saved attempts and preferences.',
  },
  {
    q: 'Are the questions based on the official KCNA exam?',
    a: 'The question bank is created in collaboration with Tutorials Dojo and is designed to reflect KCNA exam patterns and difficulty. It is not affiliated with or endorsed by the CNCF.',
  },
  {
    q: 'What iOS version is required?',
    a: 'KCNA Exam Dojo requires iOS 18.0 or later.',
  },
  {
    q: 'How do I report a mistake in a question or explanation?',
    a: `Email us at ${CONTACT_EMAIL} with the exam set name, question number, and a description of the issue. We aim to respond within a few business days.`,
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-start justify-between gap-4 focus:outline-none"
      >
        <span className="text-sm font-medium text-gray-900">{q}</span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="text-sm text-gray-600 leading-relaxed pb-4 pr-8">{a}</p>
      )}
    </div>
  )
}

export default function Support() {
  return (
    <>
      <Head>
        <title>Support — {APP_NAME}</title>
        <meta name="description" content={`Get help with ${APP_NAME}`} />
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

          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kcna-primary to-kcna-secondary mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Support</h1>
            <p className="text-gray-500 text-sm">How can we help?</p>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div>
              {faqs.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Still need help?</h2>
            <p className="text-sm text-gray-500 mb-5">
              Send us an email and we'll get back to you within a few business days.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=KCNA Exam Dojo Support`}
              className="inline-flex items-center gap-2 bg-kcna-primary hover:bg-kcna-secondary text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
