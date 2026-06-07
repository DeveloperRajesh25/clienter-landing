import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },

        // ── Semantic design tokens ──────────────────────────────────
        // A warm-neutral foundation so the orange reads as an accent.
        // Change the whole app's mood from here.
        canvas: '#FAFAF8', // app background — soft warm off-white (not clinical #fff)
        surface: '#FFFFFF', // cards/panels lift gently off the canvas
        ink: {
          DEFAULT: '#1C1917', // primary text — warm near-black (stone-900)
          muted: '#78716C', // secondary text (stone-500)
          faint: '#A8A29E', // tertiary / muted (stone-400)
        },
        line: {
          DEFAULT: '#E7E5E4', // borders (stone-200)
          soft: 'rgba(231, 229, 228, 0.6)', // barely-there edges
        },
      },
      boxShadow: {
        // Soft, warm, barely-there shadows — premium, never harsh.
        soft: '0 1px 2px 0 rgba(28,25,23,0.04), 0 1px 3px 0 rgba(28,25,23,0.05)',
        'soft-md': '0 2px 8px -2px rgba(28,25,23,0.06), 0 6px 20px -4px rgba(28,25,23,0.06)',
        'soft-lg': '0 10px 40px -8px rgba(28,25,23,0.12)',
        // Upward shadow for the fixed mobile bottom nav.
        up: '0 -1px 3px rgba(28,25,23,0.04)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(24px, -32px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 18px) scale(0.94)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Mobile bottom-sheet / drawer slide-up.
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        // Quick fade for overlays/backdrops.
        'fade-in-fast': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out both',
        'slide-up': 'slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-fast': 'fade-in-fast 0.2s ease-out both',
      },
    },
  },
  plugins: [],
}
export default config
