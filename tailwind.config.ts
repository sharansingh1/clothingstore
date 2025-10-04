import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium gold and warm tones
        gold: {
          50: '#fffdf7',
          100: '#fff9e6',
          200: '#fff2cc',
          300: '#ffe699',
          400: '#ffd966',
          500: '#ffcc33',
          600: '#e6b800',
          700: '#cc9900',
          800: '#b38600',
          900: '#997300',
        },
        // Rich burgundy and wine colors
        burgundy: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Deep emerald green
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Warm cream and off-white
        cream: {
          50: '#fefefe',
          100: '#fefdfb',
          200: '#fdf9f3',
          300: '#fcf4e7',
          400: '#faefdb',
          500: '#f8eacf',
          600: '#f5e5c3',
          700: '#f2e0b7',
          800: '#efdbab',
          900: '#ecd69f',
        },
        // Rich dark tones
        charcoal: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124',
        }
      },
              fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Crimson Text', 'serif'],
                display: ['Montserrat', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                luxury: ['Crimson Text', 'serif'],
                aesthetic: ['Crimson Text', 'serif'],
              },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 0.8s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 204, 51, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 204, 51, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #ffcc33 0%, #ec4899 50%, #10b981 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ffd966 0%, #ffcc33 100%)',
        'burgundy-gradient': 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium': '0 20px 40px -12px rgba(255, 204, 51, 0.3)',
        'gold': '0 10px 30px -5px rgba(255, 204, 51, 0.4)',
        'burgundy': '0 10px 30px -5px rgba(236, 72, 153, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
