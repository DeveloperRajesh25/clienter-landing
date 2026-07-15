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
        // Editorial accent serif for single highlighted words in headlines.
        'serif-display': ['var(--font-serif-display)', 'Georgia', 'ui-serif', 'serif'],
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

        // ── Landing editorial palette ───────────────────────────────
        // Warm, art-directed surfaces for the marketing homepage. Light
        // sections sit on bone/cream; dark sections use espresso (a warm
        // near-black, never a cold slate) so the orange stays the only
        // saturated thing on screen.
        bone: '#FFF8F2', // the canvas the landing page already sits on
        cream: '#FAEFE2', // warmer paper — alternating light band
        espresso: {
          DEFAULT: '#17100B', // dark section base — warm near-black
          soft: '#231710', // elevated surface on dark
          line: '#3B291D', // hairline border on dark
          text: '#EFE4D8', // warm bone body text on dark
          muted: '#A08A76', // secondary text on dark
        },
        // Supporting warm tone — the bridge between orange and the neutrals.
        terracotta: {
          300: '#EFA184',
          400: '#E2794A',
          500: '#CE5C36',
          600: '#AE4626',
        },
      },
      fontSize: {
        // Editorial display scale — deliberate hierarchy with optical tracking
        // that tightens as size grows. Used for section headlines below the
        // hero (the hero keeps its own bespoke sizing).
        'display-sm': ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.022em' }],
        display: ['3.25rem', { lineHeight: '1.04', letterSpacing: '-0.027em' }],
        'display-lg': ['4.25rem', { lineHeight: '1', letterSpacing: '-0.032em' }],
        'display-xl': ['6rem', { lineHeight: '0.94', letterSpacing: '-0.038em' }],
      },
      maxWidth: {
        // A comfortable ~62-character measure for editorial body copy.
        measure: '34rem',
      },
      boxShadow: {
        // Soft, warm, barely-there shadows — premium, never harsh.
        soft: '0 1px 2px 0 rgba(28,25,23,0.04), 0 1px 3px 0 rgba(28,25,23,0.05)',
        'soft-md': '0 2px 8px -2px rgba(28,25,23,0.06), 0 6px 20px -4px rgba(28,25,23,0.06)',
        'soft-lg': '0 10px 40px -8px rgba(28,25,23,0.12)',
        // Upward shadow for the fixed mobile bottom nav.
        up: '0 -1px 3px rgba(28,25,23,0.04)',

        // ── Landing elevation scale ──────────────────────────────
        // Warm-tinted and layered (a tight contact shadow + a wide ambient
        // one) so panels feel lit rather than cut out. Never neutral gray.
        'lift-1': '0 1px 2px rgba(67,36,16,0.05), 0 3px 8px -2px rgba(67,36,16,0.05)',
        'lift-2': '0 2px 4px rgba(67,36,16,0.05), 0 10px 24px -6px rgba(67,36,16,0.09)',
        'lift-3': '0 4px 8px rgba(67,36,16,0.05), 0 22px 48px -12px rgba(67,36,16,0.14)',
        'lift-4': '0 8px 16px rgba(67,36,16,0.06), 0 40px 80px -20px rgba(67,36,16,0.20)',
        // Brand glow for the accented surfaces (popular plan, primary CTAs).
        ember: '0 18px 48px -16px rgba(234,88,12,0.45)',
        'ember-lg': '0 30px 80px -24px rgba(234,88,12,0.55)',
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
        // A slow light sweep across a surface — used once, on the popular
        // plan, so it reads as a highlight rather than decoration.
        sheen: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(220%) skewX(-18deg)' },
        },
        // Warm ambient drift for the large background glows (parallax's
        // slower cousin — no scroll dependency).
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.05)' },
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
        sheen: 'sheen 5.5s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
