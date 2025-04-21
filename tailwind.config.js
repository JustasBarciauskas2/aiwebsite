/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'hero-black': '#000000',
        'hero-purple': {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        'hero-pink': {
          500: '#EC4899',
          600: '#DB2777',
        },
      },
      animation: {
        'radar-line': 'radar-line 1s ease-out forwards',
        'radar-path': 'radar-path 1s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'radar-line': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'radar-path': {
          '0%': { opacity: '0', strokeDashoffset: '1000' },
          '100%': { opacity: '1', strokeDashoffset: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};