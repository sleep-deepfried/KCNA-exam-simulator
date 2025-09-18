import { useState } from 'react'
import Link from 'next/link'
import { examSets } from '../data/questions'

export default function Home() {
  const [selectedExamSet, setSelectedExamSet] = useState('')

  const examSetOptions = Object.keys(examSets)

  return (
    <div className="quiz-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            KCNA Exam Simulator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice for your Kubernetes and Cloud Native Associate (KCNA) certification 
            with comprehensive questions covering all essential topics. Test your knowledge and track your progress.
          </p>
        </div>

        {/* Exam Set Selection Card */}
        <div className="question-card mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Choose Your KCNA Exam Set
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select one of the three available KCNA exam sets. Each set contains carefully curated questions 
              that cover all essential Kubernetes and Cloud Native concepts.
            </p>
          </div>

          {/* Exam Sets Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {examSetOptions.map((examSet, index) => {
              const questionCount = examSets[examSet].length;
              const setNumber = index + 1;
              
              return (
                <div
                  key={examSet}
                  onClick={() => setSelectedExamSet(examSet)}
                  className={`
                    p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-lg
                    ${selectedExamSet === examSet 
                      ? 'border-kcna-primary bg-cyan-50' 
                      : 'border-gray-200 bg-white hover:border-kcna-primary'
                    }
                  `}
                >
                  <div className="text-center">
                    <div className={`
                      w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold
                      ${selectedExamSet === examSet 
                        ? 'bg-kcna-primary text-white' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {setNumber}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Exam Set {setNumber}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {questionCount} Questions
                    </p>
                    
                    <div className="text-sm text-gray-500">
                      {setNumber === 1 && "Kubernetes Fundamentals & Core Concepts"}
                      {setNumber === 2 && "Advanced Kubernetes & Cloud Native"}
                      {setNumber === 3 && "Security, Monitoring & Best Practices"}
                    </div>
                    
                    {selectedExamSet === examSet && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-kcna-primary text-white">
                          ✓ Selected
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quiz Information */}
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-kcna-primary mb-3">📋 Exam Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-700">
              <ul className="space-y-2">
                <li>• Multiple choice questions</li>
                <li>• Detailed explanations provided</li>
                <li>• Topic-wise performance tracking</li>
              </ul>
              <ul className="space-y-2">
                <li>• Review incorrect answers</li>
                <li>• Progress tracking with navigation</li>
                <li>• Immediate feedback and results</li>
              </ul>
            </div>
          </div>

          {/* Start Exam Button */}
          <div className="text-center">
            {selectedExamSet ? (
              <Link 
                href={{
                  pathname: '/quiz',
                  query: { 
                    examSet: selectedExamSet
                  }
                }}
              >
                <button className="btn-primary text-lg px-12 py-4">
                  Start {selectedExamSet} ({examSets[selectedExamSet].length} Questions)
                </button>
              </Link>
            ) : (
              <button 
                disabled 
                className="bg-gray-300 text-gray-500 font-medium py-4 px-12 rounded-lg cursor-not-allowed text-lg"
              >
                Please select an exam set
              </button>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="bg-kcna-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-kcna-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real KCNA Experience</h3>
            <p className="text-gray-600 text-sm">Questions designed to match the actual KCNA certification exam patterns and difficulty level.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="bg-exam-green bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-exam-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Analytics</h3>
            <p className="text-gray-600 text-sm">Get comprehensive results with topic-wise breakdown and performance insights.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="bg-purple-500 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Native Learning</h3>
            <p className="text-gray-600 text-sm">Master Kubernetes and cloud native concepts with detailed explanations for each question.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
