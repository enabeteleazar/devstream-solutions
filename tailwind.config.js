/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        paper: '#fbfaf8',
        ink: '#1d1a24',
        muted: '#6a6474',
        line: '#e7e2ea',
        plum: { DEFAULT: '#6b1f55', soft: '#f3e9f0' },
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
};
