
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
        body: ['Nunito', 'sans-serif'],
        heading1: ['Tourney', 'cursive']

      },
      animation: {
        //hero text animations
        moveRight1: 'moveRight 1s ease-in ',
        moveRight2: 'moveRight 2s ease-in ',
        moveRight3: 'moveRight 3s ease-in ',
        moveRight4: 'moveRight 4s ease-in',
        // general animations
        spinSlow: 'spin 15s linear infinite',
      },
      keyframes: {
        //hero text animations
        moveRight: {
          '0%': { transform: 'translateY(-2000px)', opacity: 0 },
          '90%': { transform: 'translateY(-5px)', opacity: 0 },
          '100%': { transform: 'translatateY(0px)', opacity: 1 },
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