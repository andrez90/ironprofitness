import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        darker: '#111',
        border: '#1e293b',
        text: '#e2e8f0',
        'text-muted': '#94a3b8',
        'text-faint': '#64748b',
        primary: '#ef4444',
        secondary: '#f97316',
        success: '#22c55e',
        warning: '#eab308',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-in': 'slideIn 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideIn: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(239, 68, 68, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(239, 68, 68, 0.8)' },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1a0000 0%, #2d0000 50%, #1a0000 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
