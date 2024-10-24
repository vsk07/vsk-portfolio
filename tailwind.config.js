// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['Merienda', 'cursive'],
        montserrat: ['Montserrat', 'serif'],
        'fugaz-one': ['"Fugaz One"', 'sans-serif'],
      },

      keyframes: {
        rotate3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '50%': { transform: 'rotateX(90deg) rotateY(180deg) rotateZ(360deg)' },
          '100%': { transform: 'rotateX(180deg) rotateY(360deg) rotateZ(180deg)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '20%': { transform: 'translateX(-100%)', opacity: '0.2' },
          '40%': { transform: 'translateX(-100%)', opacity: '0.4' },
          '60%': { transform: 'translateX(-100%)', opacity: '0.6' },
          '80%': { transform: 'translateX(-100%)', opacity: '0.8' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        rotate3d: 'rotate3d 8s linear infinite',
        'slide-in-left': 'slide-in-left 5s ease-out forwards',
      },
      transitionTimingFunction: {
        'in-out-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'custom-image': "url('./asstets/images/ul-bg.jpg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
