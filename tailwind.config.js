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
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#3a3a3a',
        secondary: '#8a7f71',
        accent: '#d4c8be',
        light: '#f9f7f5',
        dark: '#1a1a1a',
      },
    },
  },
  plugins: [],
}