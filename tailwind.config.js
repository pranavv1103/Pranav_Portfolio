/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#07090f',
        surface: '#0f1629',
        card: '#111827',
        'card-hover': '#161f35',
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      boxShadow: {
        glow: '0 0 32px rgba(99, 102, 241, 0.1)',
        'glow-md': '0 0 48px rgba(99, 102, 241, 0.14)',
        'glow-lg': '0 0 72px rgba(99, 102, 241, 0.16)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 56px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(99, 102, 241, 0.18)',
      },
    },
  },
  plugins: [],
}
