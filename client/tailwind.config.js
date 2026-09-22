/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAFAF7',
        charcoal: '#2A2A2A',
        earthy: '#8B5A2B',
        gold: '#B8860B',
        teal: {
          50: '#E6F5F0',
          100: '#C0E8DA',
          200: '#96D9C2',
          300: '#6BCAA9',
          400: '#4BBE97',
          500: '#0B6E4F',
          600: '#096244',
          700: '#075539',
          800: '#05492F',
          900: '#033D25',
        },
        navy: '#1A2332',
        'light-gray': '#F5F7FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}