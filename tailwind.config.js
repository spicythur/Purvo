/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: '#F5F0E8',
        charcoal: '#2C2C2C',
        espresso: '#5C4A3A',
        brown: '#8B6F4E',
      },
      fontFamily: {
        baskerville: ['"Libre Baskerville"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
