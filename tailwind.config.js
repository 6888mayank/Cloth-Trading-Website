/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: '#faf9f7',
        charcoal: '#1a1a1a',
        'warm-beige': '#f0ece4',
        'warm-sand': '#d4c8b4',
        'warm-brown': '#8a7a62',
        'warm-gold': '#c4b99a',
      },
    },
  },
  plugins: [],
};
