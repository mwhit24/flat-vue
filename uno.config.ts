import { defineConfig } from 'unocss'
import presetWind3 from '@unocss/preset-wind3'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetWind3(), // Tailwind-compatible utilities
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Space Grotesk",
          weights: ['400', '500', '600', '700'],
        }
      }

    })
  ],
  safelist: [
    // Solid
    'btn-solid-primary',
    'btn-solid-secondary',
    'btn-solid-danger',
    'btn-solid-success',
    // Outline
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-danger',
    'btn-outline-success',
    // Ghost
    'btn-ghost-primary',
    'btn-ghost-secondary',
    'btn-ghost-danger',
    'btn-ghost-success',
    // Sizes
    'btn-xs',
    'btn-sm',
    'btn-md',
    'btn-lg',
    'btn-xl',
    // Border radius
    'rounded-none',
    'rounded-sm',
    'rounded-md',
    'rounded-lg',
    'rounded-full',
  ],
  theme: {
    colors: {
      // Flat UI color palette - PostHog inspired
      primary: {
        DEFAULT: '#1D4ED8',
        hover: '#1E40AF',
        light: '#3B82F6',
      },
      secondary: {
        DEFAULT: '#7C3AED',
        hover: '#6D28D9',
        light: '#8B5CF6',
      },
      success: {
        DEFAULT: '#059669',
        hover: '#047857',
        light: '#10B981',
      },
      warning: {
        DEFAULT: '#D97706',
        hover: '#B45309',
        light: '#F59E0B',
      },
      danger: {
        DEFAULT: '#DC2626',
        hover: '#B91C1C',
        light: '#EF4444',
      },
      neutral: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
    },
    fontFamily: {
      sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    },
  },
  shortcuts: {
    // Base
    'btn-base': 'border-none cursor-pointer font-semibold transition-colors duration-0 font-sans',

    // Solid style
    'btn-solid-primary': 'btn-base bg-primary text-white hover:bg-primary-hover',
    'btn-solid-secondary': 'btn-base bg-secondary text-white hover:bg-secondary-hover',
    'btn-solid-danger': 'btn-base bg-danger text-white hover:bg-danger-hover',
    'btn-solid-success': 'btn-base bg-success text-white hover:bg-success-hover',

    // Outline style
    'btn-outline-primary': 'btn-base bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    'btn-outline-secondary': 'btn-base bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    'btn-outline-danger': 'btn-base bg-transparent border-2 border-danger text-danger hover:bg-danger hover:text-white',
    'btn-outline-success': 'btn-base bg-transparent border-2 border-success text-success hover:bg-success hover:text-white',

    // Ghost style
    'btn-ghost-primary': 'btn-base bg-transparent text-primary hover:bg-primary-light hover:bg-opacity-10',
    'btn-ghost-secondary': 'btn-base bg-transparent text-secondary hover:bg-secondary-light hover:bg-opacity-10',
    'btn-ghost-danger': 'btn-base bg-transparent text-danger hover:bg-danger-light hover:bg-opacity-10',
    'btn-ghost-success': 'btn-base bg-transparent text-success hover:bg-success-light hover:bg-opacity-10',

    // Sizes
    'btn-xs': 'px-3 py-1 text-xs',
    'btn-sm': 'px-4 py-1 text-sm',
    'btn-md': 'px-6 py-2 text-base',
    'btn-lg': 'px-8 py-3 text-lg',
    'btn-xl': 'px-10 py-4 text-xl',

    // Card shortcuts
    'card': 'bg-white border-2 border-neutral-200 rounded-lg',
    'card-hover': 'card hover:border-primary transition-colors duration-200',

    // Input shortcuts
    'input-base': 'border-2 border-neutral-300 rounded px-4 py-2 text-base font-sans outline-none transition-colors duration-200',
    'input-focus': 'focus:border-primary focus:ring-0',
  },
  // Extract from Vue SFC files
  content: {
    pipeline: {
      include: [
        /\.(vue|ts)($|\?)/,
      ],
    },
  },
})
