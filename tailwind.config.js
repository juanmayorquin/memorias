/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.1em',
      widest: '.2em',
      },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '5.5rem',
      '9xl': '8rem',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    extend: {
      keyframes: {
        'breathe': {
          '0%, 100%': {
            transform: 'scale(0.7)' , 
            filter: 'blur(3px)'
          },
          '50%': {
            transform: 'scale(1)' ,
            filter: 'blur(0px)' 
          },
        }
      },
      animation: {
        'breathe-5': 'breathe 5s ease-in-out infinite',
        'breathe-7': 'breathe 7s ease-in-out infinite',
        'breathe-9': 'breathe 9s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}