# KCNA Exam Simulator

A comprehensive web-based exam simulator for the Kubernetes and Cloud Native Associate (KCNA) certification, built with Next.js and Tailwind CSS.

## Features

- 🎯 **Real KCNA Experience**: Questions designed to match actual certification exam patterns
- 📊 **Detailed Analytics**: Topic-wise performance breakdown and insights
- 🔄 **Review Mode**: Detailed explanations for each question with correct answers highlighted
- 🎨 **Modern UI**: Clean, responsive design optimized for exam taking
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speeds
- 📱 **Mobile Friendly**: Works seamlessly across all device sizes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd kcna-exam-dump
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
kcna-exam-dump/
├── data/
│   └── questions.js          # Question bank with KCNA exam questions
├── pages/
│   ├── _app.js              # Next.js app wrapper
│   ├── index.js             # Home page with quiz configuration
│   ├── quiz.js              # Quiz interface
│   └── results.js           # Results and review page
├── scripts/
│   └── parseKcnaMarkdown.cjs # Script to parse KCNA markdown files
├── styles/
│   └── globals.css          # Global styles with KCNA theming
├── kcna-exam-set*.md        # Original KCNA exam question files
└── package.json
```

## Topics Covered

- Kubernetes Fundamentals
- Container Runtime
- OCI and Containers  
- Kubernetes Services
- CI/CD
- Security
- Kubernetes Architecture
- Container Technology
- Cloud Native
- Kubernetes Networking
- DevOps
- Container Security
- Kubernetes Storage

## Usage

1. **Configure Quiz**: Select topics and number of questions on the home page
2. **Take Quiz**: Answer questions with multiple choice interface
3. **Submit & Review**: Get instant results with detailed explanations
4. **Track Progress**: View topic-wise performance analytics

## Adding More Questions

Questions are stored in `data/questions.js`. To add more questions:

1. Edit the `questionBank` array in `data/questions.js`
2. Follow the existing question format:
   ```javascript
   {
     id: number,
     questionNumber: number,
     topic: "Topic Name",
     question: "Question text",
     options: ["Option A", "Option B", "Option C", "Option D"],
     correct: 0, // Index of correct answer (0-3)
     explanation: "Detailed explanation"
   }
   ```

## Customization

- **Styling**: Modify `styles/globals.css` and `tailwind.config.js`
- **Questions**: Update `data/questions.js`
- **Topics**: Add/modify topics in the questions file
- **Branding**: Update colors in Tailwind config (kcna-primary, kcna-secondary, etc.)

## License

This project is for educational purposes. The KCNA exam questions are based on publicly available practice materials.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues or questions about the KCNA exam simulator, please check the existing issues or create a new one.

---

Good luck with your KCNA certification preparation! 🚀
