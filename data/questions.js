// KCNA Exam Questions - All Sets Combined// Total: 152 questions across 3 sets (Set 1: 51, Set 2: 51, Set 3: 50)

import { examSet1Questions } from './kcna-exam-set1.js';
import { examSet2Questions } from './kcna-exam-set2.js';
import { examSet3Questions } from './kcna-exam-set3.js';

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
