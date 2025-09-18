import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Results() {
  const [results, setResults] = useState(null)
  const [showAnswers, setShowAnswers] = useState(false)

  useEffect(() => {
    const storedResults = localStorage.getItem('quizResults')
    if (storedResults) {
      try {
        const parsedResults = JSON.parse(storedResults)
        setResults(parsedResults)
      } catch (error) {
        console.error('Error parsing quiz results:', error)
      }
    }
  }, [])

  if (!results) {
    return (
      <div className="quiz-container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-gray-600 mb-4">No quiz results found.</p>
            <Link href="/" className="text-kcna-primary hover:underline">
              Take a quiz
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const { answers, questions, timeUsed } = results
  
  // Calculate score
  const correctAnswers = questions.filter(q => answers[q.id] === q.correct).length
  const percentage = Math.round((correctAnswers / questions.length) * 100)
  
  // Calculate topic-wise performance
  const topicPerformance = {}
  questions.forEach(q => {
    if (!topicPerformance[q.topic]) {
      topicPerformance[q.topic] = { correct: 0, total: 0 }
    }
    topicPerformance[q.topic].total += 1
    if (answers[q.id] === q.correct) {
      topicPerformance[q.topic].correct += 1
    }
  })

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getPerformanceColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPerformanceMessage = () => {
    if (percentage >= 80) return 'Excellent! You\'re well prepared for the KCNA exam.'
    if (percentage >= 60) return 'Good job! Review the areas where you missed questions.'
    return 'Keep studying! Focus on the topics where you need improvement.'
  }

  return (
    <div className="quiz-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KCNA Quiz Results
          </h1>
          <p className="text-xl text-gray-600">
            Your performance on the Kubernetes and Cloud Native Associate quiz
          </p>
        </div>

        {/* Score Card */}
        <div className="result-card text-center mb-8">
          <div className="mb-6">
            <div className={`text-6xl font-bold mb-2 ${getPerformanceColor(percentage)}`}>
              {percentage}%
            </div>
            <p className="text-xl text-gray-600">
              {correctAnswers} out of {questions.length} questions correct
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-kcna-primary">{correctAnswers}</div>
              <p className="text-sm text-gray-600">Correct</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">{questions.length - correctAnswers}</div>
              <p className="text-sm text-gray-600">Incorrect</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-700">{formatTime(timeUsed)}</div>
              <p className="text-sm text-gray-600">Time Taken</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            {getPerformanceMessage()}
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/">
              <button className="btn-primary">
                Take Another Quiz
              </button>
            </Link>
            <button 
              onClick={() => setShowAnswers(true)}
              className="btn-secondary"
              type="button"
            >
              Review Answers
            </button>
          </div>
        </div>

        {/* Topic Performance */}
        <div className="result-card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Topic Performance</h2>
          <div className="space-y-4">
            {Object.entries(topicPerformance).map(([topic, perf]) => {
              const topicPercentage = Math.round((perf.correct / perf.total) * 100)
              return (
                <div key={topic} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{topic}</h3>
                    <p className="text-sm text-gray-600">
                      {perf.correct} / {perf.total} questions correct
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          topicPercentage >= 80 ? 'bg-green-500' :
                          topicPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${topicPercentage}%` }}
                      ></div>
                    </div>
                    <span className={`font-bold ${getPerformanceColor(topicPercentage)}`}>
                      {topicPercentage}%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Answer Review Modal */}
        {showAnswers && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAnswers(false)}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-kcna-primary">
                <h2 className="text-2xl font-bold text-white">Answer Review - All Questions</h2>
                <button
                  onClick={() => setShowAnswers(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                  type="button"
                >
                  ×
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
                <div className="space-y-6">
                  {questions.map((question, index) => {
                    const userAnswer = answers[question.id]
                    const isCorrect = userAnswer === question.correct
                    
                    return (
                      <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <div className="flex items-start gap-3 mb-3">
                          <span className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white
                            ${isCorrect ? 'bg-green-500' : 'bg-red-500'}
                          `}>
                            {index + 1}
                          </span>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-2">{question.question}</h3>
                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => {
                                const isUserAnswer = userAnswer === optIndex
                                const isCorrectAnswer = question.correct === optIndex
                                
                                return (
                                  <div
                                    key={optIndex}
                                    className={`
                                      p-3 rounded-lg border text-sm
                                      ${isCorrectAnswer 
                                        ? 'border-green-500 bg-green-50 text-green-800' 
                                        : isUserAnswer 
                                          ? 'border-red-500 bg-red-50 text-red-800'
                                          : 'border-gray-200 bg-gray-50'
                                      }
                                    `}
                                  >
                                    <span className="font-medium mr-2">
                                      {String.fromCharCode(65 + optIndex)}.
                                    </span>
                                    {option}
                                    {isCorrectAnswer && (
                                      <span className="ml-2 text-green-600 font-medium">✓ Correct</span>
                                    )}
                                    {isUserAnswer && !isCorrectAnswer && (
                                      <span className="ml-2 text-red-600 font-medium">✗ Your answer</span>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                              <p className="text-sm text-blue-800">
                                <strong>Explanation:</strong> {question.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
