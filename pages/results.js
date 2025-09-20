import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Results() {
  const [results, setResults] = useState(null)
  const [showAnswers, setShowAnswers] = useState(false)
  const [showAIAnalysis, setShowAIAnalysis] = useState(false)
  const [studyNotes, setStudyNotes] = useState('')
  const [isGeneratingNotes, setIsGeneratingNotes] = useState(false)
  const [aiError, setAiError] = useState('')
  const [expandedDomains, setExpandedDomains] = useState({})

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
  
  // KCNA Domain mapping
  const domainMapping = {
    'Kubernetes Fundamentals': {
      weight: 46,
      subtopics: ['Kubernetes Fundamentals', 'Kubernetes Architecture', 'Kubernetes API', 'Kubernetes Objects', 'Kubernetes Scheduling', 'Kubernetes Namespaces', 'Kubernetes Probes', 'Kubernetes Control Plane', 'Kubernetes DNS', 'Kubernetes Rollouts']
    },
    'Container Orchestration': {
      weight: 22,
      subtopics: ['Container Runtime', 'Container Technology', 'Container Networking', 'Service Mesh', 'CNI and Network Policies', 'Storage', 'Kubernetes Storage', 'Security', 'Container Security', 'Kubernetes Services', 'Kubernetes Networking', 'Load Balancing']
    },
    'Cloud Native Architecture': {
      weight: 16,
      subtopics: ['Cloud Native', 'Kubernetes Autoscaling', 'Serverless', 'CNCF', 'Kubernetes Project', 'SRE', 'Kubernetes Distributions']
    },
    'Cloud Native Observability': {
      weight: 8,
      subtopics: ['Kubectl Commands', 'Package Management']
    },
    'Cloud Native Application Delivery': {
      weight: 8,
      subtopics: ['CI/CD', 'GitOps', 'DevOps', 'Kubernetes Workloads', 'Kubernetes Jobs', 'Kubernetes Extensions', 'Cloud Controller Manager']
    }
  }

  // Group topics by domain
  const domainPerformance = {}
  
  // Initialize domains
  Object.keys(domainMapping).forEach(domain => {
    domainPerformance[domain] = {
      weight: domainMapping[domain].weight,
      correct: 0,
      total: 0,
      subtopics: {}
    }
    // Initialize subtopics
    domainMapping[domain].subtopics.forEach(subtopic => {
      domainPerformance[domain].subtopics[subtopic] = { correct: 0, total: 0 }
    })
  })

  // Calculate performance for each question
  questions.forEach(q => {
    let foundDomain = false
    
    // Find which domain this topic belongs to
    Object.keys(domainMapping).forEach(domain => {
      if (domainMapping[domain].subtopics.includes(q.topic)) {
        foundDomain = true
        domainPerformance[domain].total += 1
        domainPerformance[domain].subtopics[q.topic].total += 1
        
        if (answers[q.id] === q.correct) {
          domainPerformance[domain].correct += 1
          domainPerformance[domain].subtopics[q.topic].correct += 1
        }
      }
    })
    
    // If topic doesn't match any domain, add to Cloud Native Architecture as fallback
    if (!foundDomain) {
      const fallbackDomain = 'Cloud Native Architecture'
      domainPerformance[fallbackDomain].total += 1
      if (!domainPerformance[fallbackDomain].subtopics[q.topic]) {
        domainPerformance[fallbackDomain].subtopics[q.topic] = { correct: 0, total: 0 }
      }
      domainPerformance[fallbackDomain].subtopics[q.topic].total += 1
      
      if (answers[q.id] === q.correct) {
        domainPerformance[fallbackDomain].correct += 1
        domainPerformance[fallbackDomain].subtopics[q.topic].correct += 1
      }
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

  const getIncorrectQuestions = () => {
    return questions.filter(q => answers[q.id] !== q.correct).map(q => ({
      ...q,
      userAnswer: answers[q.id]
    }))
  }

  const toggleDomainExpansion = (domain) => {
    setExpandedDomains(prev => ({
      ...prev,
      [domain]: !prev[domain]
    }))
  }

  const handleAIAnalysis = async (selectedModelOrEvent = null) => {
    // Handle case where this is called from button click (event object) vs programmatically (string)
    const selectedModel = typeof selectedModelOrEvent === 'string' ? selectedModelOrEvent : null
    
    const incorrectQuestions = getIncorrectQuestions()
    
    if (incorrectQuestions.length === 0) {
      setAiError('No incorrect answers to analyze! You did great!')
      return
    }

    setIsGeneratingNotes(true)
    setAiError('')
    
    try {
      const requestBody = { incorrectQuestions }
      if (selectedModel) {
        requestBody.model = selectedModel
      }

      const response = await fetch('/api/analyze-mistakes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to generate study notes')
      }

      setStudyNotes(data.studyNotes)
      setShowAIAnalysis(true)
      
      // Log which model was used for debugging
      console.log(`Study notes generated using: ${data.modelUsed}`)
    } catch (error) {
      console.error('Error generating AI analysis:', error)
      setAiError(error.message || 'Failed to generate study notes. Please try again.')
    } finally {
      setIsGeneratingNotes(false)
    }
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

          <div className="flex gap-4 justify-center flex-wrap">
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
            <button 
              onClick={handleAIAnalysis}
              disabled={isGeneratingNotes}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              type="button"
            >
              {isGeneratingNotes ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Analyze AI
                </>
              )}
            </button>
          </div>
          {aiError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700">{aiError}</p>
            </div>
          )}
        </div>

        {/* Domain Performance */}
        <div className="result-card mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Domain Performance</h2>
          <div className="space-y-6">
            {Object.entries(domainPerformance)
              .filter(([domain, perf]) => perf.total > 0)
              .sort((a, b) => b[1].weight - a[1].weight)
              .map(([domain, perf]) => {
                const domainPercentage = perf.total > 0 ? Math.round((perf.correct / perf.total) * 100) : 0
                const hasSubtopics = Object.values(perf.subtopics).some(sub => sub.total > 0)
                
                return (
                  <div key={domain} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Domain Header */}
                    <div 
                      className="bg-teal-50 border-b border-teal-200 p-4 cursor-pointer hover:bg-teal-100 transition-colors"
                      onClick={() => toggleDomainExpansion(domain)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <svg 
                                className={`w-4 h-4 text-teal-700 transition-transform duration-200 ${
                                  expandedDomains[domain] ? 'rotate-90' : ''
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <h3 className="font-bold text-teal-900 text-lg">{domain}</h3>
                            </div>
                            <span className="text-sm text-teal-700 bg-teal-100 px-2 py-1 rounded-full">
                              {perf.weight}% of exam
                            </span>
                          </div>
                          <p className="text-sm text-teal-700 mt-1">
                            {perf.correct} / {perf.total} questions correct
                            {hasSubtopics && (
                              <span className="ml-2 text-teal-600">
                                • Click to {expandedDomains[domain] ? 'collapse' : 'expand'} subtopics
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32 bg-teal-200 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full ${
                                domainPercentage >= 80 ? 'bg-green-500' :
                                domainPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${domainPercentage}%` }}
                            ></div>
                          </div>
                          <span className={`font-bold text-lg ${getPerformanceColor(domainPercentage)}`}>
                            {domainPercentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtopics */}
                    {hasSubtopics && expandedDomains[domain] && (
                      <div className="bg-white animate-in slide-in-from-top-2 duration-200">
                        {Object.entries(perf.subtopics)
                          .filter(([subtopic, subPerf]) => subPerf.total > 0)
                          .map(([subtopic, subPerf]) => {
                            const subtopicPercentage = Math.round((subPerf.correct / subPerf.total) * 100)
                            return (
                              <div key={subtopic} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-800 text-sm">{subtopic}</h4>
                                  <p className="text-xs text-gray-600">
                                    {subPerf.correct} / {subPerf.total} questions
                                  </p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="w-20 bg-gray-200 rounded-full h-1.5">
                                    <div 
                                      className={`h-1.5 rounded-full ${
                                        subtopicPercentage >= 80 ? 'bg-green-500' :
                                        subtopicPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                      }`}
                                      style={{ width: `${subtopicPercentage}%` }}
                                    ></div>
                                  </div>
                                  <span className={`font-medium text-sm ${getPerformanceColor(subtopicPercentage)} min-w-[35px] text-right`}>
                                    {subtopicPercentage}%
                                  </span>
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    )}
                  </div>
                )
              })}
          </div>
        </div>

        {/* AI Analysis Modal */}
        {showAIAnalysis && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAIAnalysis(false)}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-teal-600">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-white">AI Study Notes</h2>
                </div>
                <button
                  onClick={() => setShowAIAnalysis(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                  type="button"
                >
                  ×
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-blue-900">AI-Generated Study Notes</h3>
                  </div>
                  <p className="text-blue-700 text-sm mb-0">
                    These personalized study notes were generated based on {getIncorrectQuestions().length} questions you got wrong. Focus on these areas to improve your KCNA exam performance!
                  </p>
                </div>
                
                <div className="ai-study-content">
                  {studyNotes.split('\n').map((line, index) => {
                    const trimmedLine = line.trim()
                    
                    // Skip empty lines
                    if (!trimmedLine) {
                      return <div key={index} className="h-3"></div>
                    }
                    
                    // Main headers (##) - Deep teal for main sections
                    if (trimmedLine.startsWith('##')) {
                      return (
                        <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg mt-6 mb-4 border-l-4 border-teal-500">
                          <h2 className="text-xl font-bold text-teal-800 mb-0">
                            {trimmedLine.replace('##', '').trim()}
                          </h2>
                        </div>
                      )
                    }
                    
                    // Sub headers (#) - Orange for subsections (complementary to teal)
                    if (trimmedLine.startsWith('#')) {
                      return (
                        <h3 key={index} className="text-lg font-bold text-orange-700 mt-5 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {trimmedLine.replace('#', '').trim()}
                        </h3>
                      )
                    }
                    
                    // Bold sections (**text**) - Key concepts in warm orange
                    if (trimmedLine.includes('**')) {
                      const formattedText = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<span class="bg-orange-100 text-orange-800 px-2 py-1 rounded font-bold">$1</span>')
                      return (
                        <div key={index} className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3 mb-3">
                          <div className="text-gray-800 font-medium" dangerouslySetInnerHTML={{ __html: formattedText }}></div>
                        </div>
                      )
                    }
                    
                    // Key takeaways (🔑 or KEY:)
                    if (trimmedLine.includes('🔑') || trimmedLine.toUpperCase().includes('KEY:') || trimmedLine.toUpperCase().includes('REMEMBER:')) {
                      return (
                        <div key={index} className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mt-3 mb-3 rounded-r-lg">
                          <div className="flex items-start">
                            <span className="text-emerald-600 text-lg mr-2">🔑</span>
                            <p className="text-emerald-800 font-medium leading-relaxed mb-0 quiz-text">
                              {trimmedLine.replace(/🔑|KEY:|REMEMBER:/gi, '').trim()}
                            </p>
                          </div>
                        </div>
                      )
                    }
                    
                    // Bullet points - Clean and scannable
                    if (trimmedLine.match(/^[\*\-\•]\s/)) {
                      return (
                        <div key={index} className="flex items-start mb-2 ml-2">
                          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <p className="text-gray-700 leading-relaxed quiz-text">
                            {trimmedLine.replace(/^[\*\-\•]\s/, '')}
                          </p>
                        </div>
                      )
                    }
                    
                    // Numbered lists
                    if (trimmedLine.match(/^\d+\.\s/)) {
                      const number = trimmedLine.match(/^(\d+)\./)[1]
                      return (
                        <div key={index} className="flex items-start mb-2 ml-2">
                          <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                            {number}
                          </span>
                          <p className="text-gray-700 leading-relaxed quiz-text">
                            {trimmedLine.replace(/^\d+\.\s/, '')}
                          </p>
                        </div>
                      )
                    }
                    
                    // Regular paragraphs
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-3 quiz-text">
                        {trimmedLine}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

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
                            <h3 className="font-medium text-gray-900 mb-2 quiz-text">{question.question}</h3>
                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => {
                                const isUserAnswer = userAnswer === optIndex
                                const isCorrectAnswer = question.correct === optIndex
                                
                                return (
                                  <div
                                    key={optIndex}
                                    className={`
                                      p-3 rounded-lg border quiz-text
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
                              <p className="quiz-text text-blue-800">
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
