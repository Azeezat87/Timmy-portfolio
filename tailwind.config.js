/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mblx}',
    './components/**/*.{js,ts,jsx,tsx,mblx}',
    './app/**/*.{js,ts,jsx,tsx,mblx}',
  ],
  theme: {
    screens: {
      mbl: { max: '767px' },
    },
  },
  plugins: [],
}
