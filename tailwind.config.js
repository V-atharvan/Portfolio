/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#F7F7F2',
          surface: '#FFFFFF',
          'surface-subtle': '#FAF9F5',
          'surface-muted': '#F0F2EB',
          forest: '#263B32',
          'forest-hover': '#1B2B24',
          'forest-dark': '#15211C',
          sage: '#8A9B83',
          'sage-light': '#E9EFE7',
          'sage-hover': '#74856E',
          charcoal: '#303632',
          'charcoal-light': '#454C47',
          muted: '#737A75',
          border: '#E5E7E2',
          'border-dark': '#CFD3C9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      screens: {
        'xs': '375px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(38, 59, 50, 0.04), 0 1px 2px 0 rgba(38, 59, 50, 0.02)',
        'card': '0 4px 12px -2px rgba(38, 59, 50, 0.05), 0 2px 6px -1px rgba(38, 59, 50, 0.03)',
        'card-hover': '0 10px 24px -4px rgba(38, 59, 50, 0.08), 0 4px 12px -2px rgba(38, 59, 50, 0.04)',
      }
    },
  },
  plugins: [],
}
