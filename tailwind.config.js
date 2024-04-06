/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#4c2c17',
        'dark-blue': '#016180',
        'light-brown': '#8c5c47',
        'light-blue': '#4a8cb0',
        'bg-color': '#f8ede5',
        
      },
    },
  },
  plugins: [],
}
