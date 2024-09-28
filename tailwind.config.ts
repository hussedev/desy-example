import type { Config } from 'tailwindcss';
import { colors, white, black, currentColor, transparent } from './src/tokens/colors';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      currentColor,
      transparent,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        warning: colors.warning,
        danger: colors.danger,
        info: colors.information,
        surface: colors.slate,
        success: colors.success,
        accent: colors.accent,
      },
    },
  },
  plugins: [],
} satisfies Config;
