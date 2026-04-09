/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15", // Yellow-400
        secondary: "#000000",
        tertiary: "#FFFFFF",
        accent: "#3B82F6", // Blue-500
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
