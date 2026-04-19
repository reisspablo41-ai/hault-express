/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#1e40af', // blue-800
        'primary-dark': '#1e3a8a', // blue-900
        'primary-light': '#3b82f6', // blue-500
        secondary: '#f59e0b',
        accent: '#f06b52',
        dark: '#2d3748',
        light: '#ffff',
        white: '#ffffff',
      },
      fontWeight: {
        bold: '700',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'glow-secondary': '0 0 30px rgba(245, 158, 11, 0.3)',
        'glow-accent': '0 0 30px rgba(240, 107, 82, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.14)',
      },
      screens: {
        xs: '344px',
        cxs: '499px',
        lg: '1025px',
      },
      animation: {
        blink: 'blink 1s infinite',
        spin: 'spin 1s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'scroll-line': 'scrollLine 1.6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollLine: {
          '0%': { transform: 'translateY(-100%)', opacity: 1 },
          '100%': { transform: 'translateY(200%)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
