import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#10151e',
          darker: '#0a0e14',
          gold: '#E3A61A',
          'gold-light': '#F0C240',
          teal: '#2E9B99',
          'teal-light': '#3DBDBA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        hebrew: ['Heebo', 'Rubik', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
