/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'galaxy': "url('/background-galaxy.png')",
        'rainbow-gradient': "linear-gradient(89.86deg, #9572FC 0%, #43E7AD 33.33%, #E1D55D 66.67%, #9572FC 100%)",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
      }
    },
  },
  plugins: [],
}
