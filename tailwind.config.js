
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        body: ['"Road Rage"', 'cursive']

      },
      animation: {
        //hero text animations
        moveRight1: 'moveRight 2s ease-in-out ',
        moveRight2: 'moveRight 4s ease-in-out ',
        moveRight3: 'moveRight 6s ease-in-out ',
        moveRight4: 'moveRight 8s ease-in-out ',
        // generic
        spinSlow: 'spin 15s linear infinite',
      },
      keyframes: {
        //hero text animations
        moveRight: {
          '0%': { transform: 'translateX(-2000px)', opacity: 0 },
          '90%': { transform: 'translateX(-5px)', opacity: 0.9 },
          '100%': { transform: 'translatateX(2000px)', opacity: 1 },
        },

      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
        '5000': '5000ms',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}