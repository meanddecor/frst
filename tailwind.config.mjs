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
          sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        },
        animation: {
          // Animation for scrolling left
          'marquee-left': 'marquee-left 90s linear infinite',
          // Animation for scrolling right
          'marquee-right': 'marquee-right 90s linear infinite',
        },
        keyframes: {
          'marquee-left': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' }, // Moves left
          },
          'marquee-right': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0%)' }, // Moves right
          },
        },
      },
    },
    plugins: [],
  };