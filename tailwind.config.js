/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#050a14',
        foreground: '#e8f0ff',
        accent: { DEFAULT: '#3b82f6', hover: '#2563eb', cyan: '#06b6d4' },
        muted: { DEFAULT: '#0f1a2e', foreground: '#8ba3c1' },
        border: 'rgba(59,130,246,0.12)',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: { 'cursor-blink': 'blink 1s step-end infinite' },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
