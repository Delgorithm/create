import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'watch-sm': '162px',
        'watch-md': '197px',
        xxs: '320px',
        xs: '375px',
        'sm-md': '520px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        albumTransformation: {
          '0%': {
            transform: 'translateY(-7rem) scale(1.25)',
            width: '16rem',
            height: '16rem',
            left: '0rem',
            top: '-7rem',
            borderRadius: '100%',
            zIndex: '50',
          },
          '50%': {
            transform: 'scale(1.15)',
            zIndex: '50',
            borderTopLeftRadius: '0%',
            borderTopRightRadius: '0%',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            borderRadius: '0%',
            zIndex: '50',
          },
        },
        albumTransformationReverse: {
          '0%': {
            transform: 'translateY(0) scale(1)',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            borderRadius: '0%',
            zIndex: '0',
          },
          '50%': {
            borderRadius: '100%',
            top: '-12rem',
            left: '0rem',
            zIndex: '0',
          },
          '100%': {
            transform: 'translateY(-7rem) scale(1.25)',
            width: '16rem',
            height: '16rem',
            left: '0rem',
            top: '-7rem',
            borderRadius: '100%',
            zIndex: '0',
          },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 7s linear infinite',
        albumCover: 'albumTransformation 1s ease-in-out forwards',
        albumCoverReverse:
          'albumTransformationReverse 1s ease-in-out forwards, spinSlow 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
export default config;
