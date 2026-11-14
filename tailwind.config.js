/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Design System Tokens from Section 3.3
        portfolio: {
          bg: '#F7F7F2',               // Primary background
          surface: '#FFFFFF',          // Secondary background
          'surface-subtle': '#FAF9F5', // Soft card surface
          'surface-muted': '#F0F1EC',  // Muted surface
          forest: '#263B32',           // Primary accent
          'forest-hover': '#1B2B24',   // Primary accent hover
          sage: '#8A9B83',             // Secondary accent
          'sage-light': '#E9EEE7',     // Subtle accent background
          'sage-hover': '#788972',     // Secondary accent hover
          charcoal: '#303632',         // Primary text
          muted: '#737A75',            // Secondary text
          border: '#E5E7E2',           // Border
          'border-dark': '#CFD3C9',    // Subtle darker border
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'container': '1240px',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(38, 59, 50, 0.04), 0 1px 2px 0 rgba(38, 59, 50, 0.02)',
        'card': '0 4px 12px -2px rgba(38, 59, 50, 0.05), 0 2px 6px -1px rgba(38, 59, 50, 0.03)',
        'card-hover': '0 8px 20px -3px rgba(38, 59, 50, 0.07), 0 3px 8px -2px rgba(38, 59, 50, 0.03)',
      }
    },
  },
  plugins: [],
}
