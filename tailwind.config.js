/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yy-black': '#000000',
        'yy-white': '#ffffff',
        'yy-gray': '#1a1a1a',
        'yy-accent': '#333333',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scroll-down': 'scrollDown 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      }
    },
  },
  plugins: [],
}
