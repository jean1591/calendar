import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  safelist: [
    /* BG */
    'bg-blue-100',
    'bg-blue-300',
    'bg-green-100',
    'bg-green-300',
    'bg-orange-100',
    'bg-orange-300',

    /* BORDER */
    'border-blue-300',
    'border-green-300',
    'border-orange-300',

    /* TEXT */
    'text-blue-300',
    'text-green-300',
    'text-orange-300',
  ],
}
export default config
