/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'exam-blue': '#2563eb',
        'exam-green': '#16a34a',
        'exam-red': '#dc2626',
        'kcna-primary': '#0891b2',
        'kcna-secondary': '#0e7490',
        'kcna-accent': '#06b6d4',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
