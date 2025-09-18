const fs = require('fs');
const path = require('path');

function parseAllQuestionsFromMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const questions = [];
  let questionId = 1;

  // Split content by the --- separator
  const sections = content.split(/---\s*\n/).filter(section => section.trim());

  for (const section of sections) {
    // Skip header sections or non-question content
    if (!section.includes('Question #:') || !section.includes('Correct Answer:')) {
      continue;
    }

    try {
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
      let explanation = explanationMatch ? explanationMatch[1].trim() : '';
      
      // Clean up explanation - remove extra formatting
      explanation = explanation.replace(/\*\s+\*\*/g, '').replace(/\*\*/g, '').trim();

      // Create question object
      if (questionText && options.length === 4) {
        const question = {
          id: questionId++,
          questionNumber: questionNumber,
          topic: getTopicName(questionText, questionNumber),
          question: questionText,
          options: options,
          correct: correctIndex,
          explanation: explanation
        };

        questions.push(question);
      }
    } catch (error) {
      console.warn(`Error parsing section: ${error.message}`);
      continue;
    }
  }

  return questions;
}

function getTopicName(questionText, questionNumber) {
  // Categorize questions based on content
  const text = questionText.toLowerCase();
  
  if (text.includes('replicaset') || text.includes('deployment') || text.includes('pod') || text.includes('container')) {
    return 'Kubernetes Fundamentals';
  }
  if (text.includes('service') || text.includes('ingress') || text.includes('network')) {
    return 'Kubernetes Networking';
  }
  if (text.includes('security') || text.includes('rbac') || text.includes('secret')) {
    return 'Security';
  }
  if (text.includes('storage') || text.includes('volume') || text.includes('persistent')) {
    return 'Storage';
  }
  if (text.includes('ci/cd') || text.includes('continuous') || text.includes('pipeline')) {
    return 'CI/CD';
  }
  if (text.includes('monitoring') || text.includes('prometheus') || text.includes('observability')) {
    return 'Monitoring';
  }
  if (text.includes('cloud native') || text.includes('microservice') || text.includes('cncf')) {
    return 'Cloud Native';
  }
  if (text.includes('container runtime') || text.includes('cri-o') || text.includes('oci')) {
    return 'Container Runtime';
  }
  
  return 'KCNA General';
}

function generateExamSetFile(questions, setNumber) {
  const jsContent = `// KCNA Exam Set ${setNumber} - ${questions.length} Questions
// Auto-generated from kcna-exam-set${setNumber}.md

export const examSet${setNumber}Questions = ${JSON.stringify(questions, null, 2)};

export default examSet${setNumber}Questions;
`;

  const outputPath = path.join(__dirname, '..', 'data', `kcna-exam-set${setNumber}.js`);
  fs.writeFileSync(outputPath, jsContent);
  
  console.log(`Generated kcna-exam-set${setNumber}.js with ${questions.length} questions`);
  return questions.length;
}

function generateAllExamSets() {
  console.log('Extracting all questions from KCNA markdown files...');

  const files = [
    { file: 'kcna-exam-set1.md', setNumber: 1 },
    { file: 'kcna-exam-set2.md', setNumber: 2 },
    { file: 'kcna-exam-set3.md', setNumber: 3 }
  ];

  let totalQuestions = 0;
  const setCounts = [];

  for (const { file, setNumber } of files) {
    const filePath = path.join(__dirname, '..', file);
    
    if (fs.existsSync(filePath)) {
      console.log(`Processing ${file}...`);
      const questions = parseAllQuestionsFromMarkdown(filePath);
      const count = generateExamSetFile(questions, setNumber);
      setCounts.push(count);
      totalQuestions += count;
      console.log(`✅ Set ${setNumber}: ${count} questions extracted`);
    } else {
      console.warn(`❌ File not found: ${filePath}`);
    }
  }

  // Generate main questions.js file
  const mainQuestionsContent = `// KCNA Exam Questions - All Sets Combined
// Total: ${totalQuestions} questions across 3 sets

import examSet1Questions from './kcna-exam-set1.js';
import examSet2Questions from './kcna-exam-set2.js';
import examSet3Questions from './kcna-exam-set3.js';

// Combine all questions
export const questionBank = [
  ...examSet1Questions,
  ...examSet2Questions,
  ...examSet3Questions
];

// Export individual exam sets
export const examSets = {
  "KCNA Exam Set 1": examSet1Questions,
  "KCNA Exam Set 2": examSet2Questions, 
  "KCNA Exam Set 3": examSet3Questions
};

// Export for backward compatibility
export { examSet1Questions, examSet2Questions, examSet3Questions };
`;

  const mainOutputPath = path.join(__dirname, '..', 'data', 'questions.js');
  fs.writeFileSync(mainOutputPath, mainQuestionsContent);

  console.log(`\n🎉 Successfully generated all exam sets!`);
  console.log(`📊 Question counts: Set 1: ${setCounts[0]}, Set 2: ${setCounts[1]}, Set 3: ${setCounts[2]}`);
  console.log(`📝 Total questions: ${totalQuestions}`);
  console.log(`📁 Files created:`);
  console.log(`   - data/kcna-exam-set1.js`);
  console.log(`   - data/kcna-exam-set2.js`);
  console.log(`   - data/kcna-exam-set3.js`);
  console.log(`   - data/questions.js (main file)`);

  return { totalQuestions, setCounts };
}

if (require.main === module) {
  generateAllExamSets();
}

module.exports = { parseAllQuestionsFromMarkdown, generateExamSetFile, generateAllExamSets };
