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
        cream: '#FAFAF8',
        ink: '#0F0F0F',
        gold: '#C8A96E',
        muted: '#6B6B6B',
        border: '#E8E8E4',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        caps: '0.08em',
      },
    },
  },
  plugins: [],
}
export default config
