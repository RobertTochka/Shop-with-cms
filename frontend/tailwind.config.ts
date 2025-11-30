module.exports = {
  content: ['./src/**/*.{js,ts,tsx,jsx,html}'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-geist-sans)']
        }
    }
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ]
}