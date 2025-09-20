import { GoogleGenerativeAI } from '@google/generative-ai'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { incorrectQuestions, model: requestedModel } = req.body

    if (!incorrectQuestions || incorrectQuestions.length === 0) {
      return res.status(400).json({ message: 'No incorrect questions provided' })
    }

    // Dynamic model selection with fallback
    const defaultModel = process.env.GEMINI_MODEL || 'gemini-1.5-flash'
    const selectedModel = requestedModel || defaultModel

    // Validate model selection
    const supportedModels = [
      'gemini-1.5-flash',
      'gemini-1.5-pro', 
      'gemini-pro',
      'gemini-1.5-flash-8b',
      'gemini-2.0-flash',
      'gemini-2.5-flash',
      'gemini-2.5-flash-lite',
    ]

    if (!supportedModels.includes(selectedModel)) {
      return res.status(400).json({ 
        message: `Unsupported model: ${selectedModel}. Supported models: ${supportedModels.join(', ')}` 
      })
    }

    // Initialize Gemini AI with dynamic model
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: selectedModel })

    // Format the incorrect questions for analysis
    const questionsText = incorrectQuestions.map((q, index) => {
      return `
Question ${index + 1} (Topic: ${q.topic}):
${q.question}

Options:
${q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join('\n')}

Correct Answer: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}
User's Answer: ${q.userAnswer !== undefined ? `${String.fromCharCode(65 + q.userAnswer)}. ${q.options[q.userAnswer]}` : 'Not answered'}

Explanation: ${q.explanation}
      `.trim()
    }).join('\n\n---\n\n')

    const prompt = `
You are an expert Kubernetes and Cloud Native instructor. A student has taken the KCNA exam and got some questions wrong. Create CONCISE, HIGH-IMPACT study notes that focus on the most important concepts they need to remember.

CRITICAL FORMATTING RULES:
- Use ## for main topic headers
- Use **Key Concept** for the most important points to remember
- Start key takeaways with "🔑 REMEMBER:" or "KEY:"
- Use - for bullet points
- Keep explanations SHORT and MEMORABLE
- Focus on WHAT to remember, not lengthy explanations

CONTENT REQUIREMENTS:
- Make each section 2-3 sentences MAX
- Highlight the ONE key concept per topic
- Include memory aids/mnemonics where possible
- Focus on exam-relevant distinctions
- Use action-oriented language

For each topic, provide:
1. **Key Concept:** The main thing to remember
2. 🔑 REMEMBER: A memorable takeaway
3. Why their answer was wrong (1 sentence)
4. A quick tip or mnemonic

Keep it BRIEF, FOCUSED, and MEMORABLE. This is for quick review before an exam.

Questions they got wrong:

${questionsText}

Create concise study notes organized by topic. Make every word count!
    `

    const result = await model.generateContent(prompt)
    const response = await result.response
    const studyNotes = response.text()

    res.status(200).json({ 
      success: true, 
      studyNotes,
      analyzedQuestions: incorrectQuestions.length,
      modelUsed: selectedModel
    })

  } catch (error) {
    console.error('Error generating study notes:', error)
    
    if (error.message.includes('API_KEY_INVALID') || error.message.includes('API key')) {
      return res.status(401).json({ 
        message: 'Gemini API key is not configured or invalid. Please check your environment variables.' 
      })
    }
    
    res.status(500).json({ 
      message: 'Failed to generate study notes. Please try again later.' 
    })
  }
}
