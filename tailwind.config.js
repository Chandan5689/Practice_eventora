/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'eventDetail':'0 5px 5px 14px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

