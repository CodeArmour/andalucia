import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1E4E72',
        'ink-mid': '#234A68',
        'ink-soft': '#2A5A7A',
        terracotta: '#C2753F',
        teal: '#5FA4A9',
        ochre: '#C4944C',
        cream: '#FFF6E5',
        stone: '#E8D9C0',
        'stone-mid': '#C4A882',
        'stone-light': '#8B6E4E',
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
