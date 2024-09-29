/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      red: '#E3646E',
      purple: '#BB72E9',
      blue: '#3996DB',
      green: '#82BC4F',
      yellow: '#EABD5Fh',
      gray100: '#0D0E11',
      gray200: '#16181D',
      gray300: '#292C34',
      gray400: '#878EA1',
      gray500: '#C0C4CE',
      gray600: '#E2E4E9',
    },
    fontFamily: {
      'asap': ['Asap', 'sans-serif'],
      'inconsolata': ['Inconsolata', 'monospace'],
      'mavenpro': ['Maven Pro', 'sans-serif']
    },
    fontSize: {
      lg: ['56px', '120%'],
      md: ['24px', '120%'],
      sm: ['16px', '120%'],
      subtitle: ['20px', '120%'],
      mdm: ['16px', '140%'],
      smm: ['14px', '140%'],
    },
    extend: {
      backgroundImage: {
        "intro": "url('/assets/images/intro.png')",
        "contacts": "url('/assets/images/contacts.png')",
      }
    },
  },
  plugins: [],
}