const fs = require('fs');
const path = require('path');

function parseKcnaMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const questions = [];
  let questionId = 1;

  // Split content by question sections (using the --- separator)
  const sections = content.split(/---\s*\n/).filter(section => section.trim());

  for (const section of sections) {
    // Skip header sections or non-question content
    if (!section.includes('Question #:') || !section.includes('Correct Answer:')) {
      continue;
    }

    try {
      console.log(`Processing section: ${section.substring(0, 100)}...`); // Debug

      // Extract question number
      const questionMatch = section.match(/\*\*Question #:\s*(\d+)\*\*/);
      const questionNumber = questionMatch ? parseInt(questionMatch[1]) : questionId;

      // Extract topic
      const topicMatch = section.match(/\*\*Topic #:\s*(\d+)\*\*/);
      const topicNumber = topicMatch ? parseInt(topicMatch[1]) : 1;

      // Extract question text (everything between topic and first option A.)
      const lines = section.split('\n');
      let questionText = '';
      let foundTopicLine = false;
      let foundFirstOption = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('**Topic #:')) {
          foundTopicLine = true;
          continue;
        }
        
        if (foundTopicLine && !foundFirstOption) {
          if (line.match(/^A\.\s/)) {
            foundFirstOption = true;
            break;
          }
          if (line.trim() !== '') {
            questionText += line + '\n';
          }
        }
      }
      
      questionText = questionText.trim();

      // Extract options A, B, C, D
      const options = [];
      const optionRegex = /^([A-D])\.\s*(.+)$/gm;
      let match;
      
      while ((match = optionRegex.exec(section)) !== null) {
        options.push(match[2].trim());
      }

      // Extract correct answer
      const correctMatch = section.match(/\*\*Correct Answer:\s*([A-D])\*\*/);
      const correctLetter = correctMatch ? correctMatch[1] : 'A';
      const correctIndex = correctLetter.charCodeAt(0) - 'A'.charCodeAt(0);

      // Extract explanation
      const explanationMatch = section.match(/\*\*Explanation:\*\*\s*\n([\s\S]*?)$/);
      const explanation = explanationMatch ? explanationMatch[1].trim() : '';

      // Create question object
      if (questionText && options.length === 4) {
        const question = {
          id: questionId++,
          questionNumber: questionNumber,
          topic: `KCNA Topic ${topicNumber}`,
          question: questionText,
          options: options,
          correct: correctIndex,
          explanation: explanation
        };

        questions.push(question);
        console.log(`Successfully parsed question ${questionNumber}`); // Debug
      } else {
        console.warn(`Skipping question - questionText: "${questionText}", options: ${options.length}`);
      }
    } catch (error) {
      console.warn(`Error parsing section: ${error.message}`);
      continue;
    }
  }

  return questions;
}

function generateQuestionsFile() {
  console.log('Parsing KCNA markdown files...');

  const markdownFiles = [
    'kcna-exam-set1.md',
    'kcna-exam-set2.md', 
    'kcna-exam-set3.md'
  ];

  let allQuestions = [];
  let topics = new Set();

  for (const file of markdownFiles) {
    const filePath = path.join(__dirname, '..', file);
    
    if (fs.existsSync(filePath)) {
      console.log(`Processing ${file}...`);
      const questions = parseKcnaMarkdown(filePath);
      console.log(`Extracted ${questions.length} questions from ${file}`);
      
      // Add source file info to questions
      questions.forEach(q => {
        q.source = file;
        topics.add(q.topic);
      });
      
      allQuestions = allQuestions.concat(questions);
    } else {
      console.warn(`File not found: ${filePath}`);
    }
  }

  // Generate the questions.js file
  const questionsJsContent = `// Auto-generated from KCNA markdown files
// Total questions: ${allQuestions.length}
// Generated on: ${new Date().toISOString()}

export const questionBank = ${JSON.stringify(allQuestions, null, 2)};

export const topics = ${JSON.stringify(Array.from(topics).sort(), null, 2)};

export const examSets = {
  "Set 1": questionBank.filter(q => q.source === "kcna-exam-set1.md"),
  "Set 2": questionBank.filter(q => q.source === "kcna-exam-set2.md"),
  "Set 3": questionBank.filter(q => q.source === "kcna-exam-set3.md"),
  "All Sets": questionBank
};
`;

  const outputPath = path.join(__dirname, '..', 'data', 'questions.js');
  fs.writeFileSync(outputPath, questionsJsContent);

  console.log(`\nGenerated questions.js with ${allQuestions.length} questions`);
  console.log(`Topics found: ${Array.from(topics).join(', ')}`);
  console.log(`Output: ${outputPath}`);

  return {
    totalQuestions: allQuestions.length,
    topics: Array.from(topics),
    questions: allQuestions
  };
}

if (require.main === module) {
  generateQuestionsFile();
}

module.exports = { parseKcnaMarkdown, generateQuestionsFile };
