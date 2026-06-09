import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Custom breakpoints matching the original design
    // Default (0+)  = phone ≤420px styles
    // sm  (421px+)  = above small phone
    // md  (801px+)  = tablet + desktop layout kicks in
    // lg  (1101px+) = full desktop pixel sizes
    // xl  (1280px+) = wide desktop
    screens: {
      sm:  '421px',
      md:  '801px',
      lg: '1101px',
      xl: '1280px',
    },
    extend: {
      colors: {
        bg:      '#f8f8f8',
        dark:    '#2d2f39',
        border:  '#d0d3e1',
        card:    '#F1F2F5',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans:  ['"Inter Tight"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
