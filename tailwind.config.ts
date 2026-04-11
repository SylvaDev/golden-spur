import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9f5ef',
        foreground: '#1f1814',
        brandRed: '#9c1725',
        brandGold: '#d4af37',
        brandGoldLight: '#f5dea0',
        gold: {
          100: '#f7edd0',
          300: '#e7cb87',
          500: '#c49a38',
          700: '#8a6423',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.25)',
        'panel-light': '0 18px 48px rgba(31, 24, 20, 0.06), 0 4px 16px rgba(31, 24, 20, 0.04)',
      },
      backgroundImage: {
        'desert-glow': 'radial-gradient(circle at top, rgba(196,154,56,0.25), transparent 32%), linear-gradient(135deg, #15181b 0%, #0b0d0f 55%, #111418 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
