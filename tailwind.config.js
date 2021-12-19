
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

        moveRight2: 'moveRight 2s ease-in ',
        moveRight3: 'moveRight 3s ease-in ',
        moveRight4: 'moveRight 4s ease-in',
        moveRight5: 'moveRight 5s ease-in',
        moveRight6: 'moveRight 6s ease-in',
        moveRight7: 'moveRight 7s ease-in',
        moveLeftNav: 'moveLeftNav 2s ease',
        moveRightNav: 'moveRightNav 2s ease',
        // general animations
        spinSlow: 'spin 15s linear infinite',
        bounceSlow: 'bounce 5s linear infinite',
        pingSlow: 'pingSlow1 1.5s linear infinite',
        //higlighted text in about
        rotateText: 'rotate1 10s linear infinite',
      },
      keyframes: {
        //hero text animations
        moveRight: {
          '0%': { transform: 'translateX(-2000px)', opacity: 0 },
          '90%': { transform: 'translateX(-5px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        moveLeftNav: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)', },
        },
        moveRightNav: {
          '0%': { transform: '' },
          '100%': { transform: 'translateX(0%)', },
        },
        rotate1: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(1080deg)', },
        },
        pingSlow1: {
          '75%': {
            transform: "scale(1.05)",

          },
          '75%': {
            transform: "scale(1.0)",

          },
          '75%': {
            transform: "scale(1.05)",

          },
          '100%': {
            transform: "scale(1)",

          }
        }

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