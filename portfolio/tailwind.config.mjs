// File: portfolio/tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8F0D0D',    // PastelRed from your LaTeX
        dark: '#2E2E2E',
        light: '#666666',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};