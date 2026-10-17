import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // BarajTrans logosundaki lacivert ve sarı
        navy: {
          50: '#eef3fb',
          100: '#d7e2f5',
          200: '#aec4ea',
          300: '#7c9fdb',
          400: '#4b77c7',
          500: '#2556ad',
          600: '#1a4594',
          700: '#143777',
          800: '#0f2a5c',
          900: '#0b1f45',
          950: '#071530',
        },
        sun: {
          50: '#fffbea',
          100: '#fff3c4',
          200: '#ffe58a',
          300: '#ffd54f',
          400: '#ffc61a',
          500: '#f5b000',
          600: '#d99700',
          700: '#b37a00',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,31,69,.06), 0 8px 24px -12px rgba(11,31,69,.18)',
      },
    },
  },
  plugins: [],
}
export default config
