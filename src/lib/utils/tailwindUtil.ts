import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const breakpoints = {
  xs: 280,
  sm: 640,
  md: 768,
  lg: 1200,
  xl: 1470,
  '2xl': 1740,
};

export const colors = {
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
    300: '#6ba9bo',
    500: '#15c7db',
    DEFAULT: '#15c7db',
  },
};

export const typos = {
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
};
