import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#EAEAEA',
          300: '#AEAEAE',
          400: '#9A9A9A',
          500: '#858585',
          600: '#494949',
          700: '#363636',
          800: '#1A1A1A',
          900: '#121212',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;