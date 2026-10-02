/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf3f5',
          100: '#fbe8ee',
          200: '#f6d1dc',
          300: '#eea9bf',
          400: '#df7694',
          500: '#c94b6f',
          600: '#a82f54',
          700: '#7a1f3d',
          800: '#661b35',
          900: '#551b31',
          950: '#2f0d18',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf5e0',
          200: '#f4eac0',
          300: '#ecd9a0',
          400: '#e0c274',
          500: '#d4af37',
          600: '#c69c50',
          700: '#a87f3c',
          800: '#8a6736',
          900: '#735532',
          950: '#422e16',
        },
        offwhite: '#f9f9f9',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
