import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          500: '#f1f5f9',
          900: '#fff',
          DEFAULT: '#fff',
          transparent: {
            50: '#ffffff80',
          },
        },
        black: {
          400: '#404040',
          500: '#1e1e1e',
          900: '#000000',
          DEFAULT: '#000000',
          transparent: {
            30: '#00000048',
            40: '#00000064',
          },
        },
        green: {
          300: '#c8edac',
          500: '#219025',
          DEFAULT: '#219025',
        },
        blue: {
          300: '#7491be',
          500: '#0069ff',
          DEFAULT: '#0069ff',
        },
        red: {
          300: '#e77b7c',
          500: '#c42e30',
          DEFAULT: '#c42e30',
        },
        mint: {
          300: '#6ba9b0',
          500: '#15c7db',
          DEFAULT: '#15c7db',
        },
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)'],
        tenada: ['var(--font-tenada)'],
      },
      screens: {
        xs: `280px`,
        sm: `640px`,
        md: `768px`,
        lg: `1200px`,
        xl: `1470px`,
        '2xl': `1740px`,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        '.typo-2xl': {
          fontFamily: 'var(--font-tenada)',
          fontSize: '24px',
          letterSpacing: '0.24px',
          fontStyle: 'normal',
        },
        '.typo-4xl': {
          fontFamily: 'var(--font-ibm-plex-sans)',
          fontSize: '64px',
          letterSpacing: '-1.28px',
          fontWeight: '700',
          fontStyle: 'normal',
        },
      }),
    ),
  ],
};
export default config;
