/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'display': ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
      },
    },
  },
  plugins: [],
} 