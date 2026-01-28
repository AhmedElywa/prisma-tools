/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'paljs-',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--paljs-primary, #3b82f6)',
          hover: 'var(--paljs-primary-hover, #2563eb)',
          foreground: 'var(--paljs-primary-foreground, #ffffff)',
        },
        secondary: {
          DEFAULT: 'var(--paljs-secondary, #6366f1)',
          hover: 'var(--paljs-secondary-hover, #4f46e5)',
          foreground: 'var(--paljs-secondary-foreground, #ffffff)',
        },
        background: 'var(--paljs-background, #ffffff)',
        foreground: 'var(--paljs-foreground, #0f172a)',
        muted: {
          DEFAULT: 'var(--paljs-muted, #f1f5f9)',
          foreground: 'var(--paljs-muted-foreground, #64748b)',
        },
        border: 'var(--paljs-border, #e2e8f0)',
        input: 'var(--paljs-input, #e2e8f0)',
        ring: 'var(--paljs-ring, #3b82f6)',
        destructive: {
          DEFAULT: 'var(--paljs-destructive, #ef4444)',
          foreground: 'var(--paljs-destructive-foreground, #ffffff)',
        },
      },
      borderRadius: {
        lg: 'var(--paljs-radius, 0.5rem)',
        md: 'calc(var(--paljs-radius, 0.5rem) - 2px)',
        sm: 'calc(var(--paljs-radius, 0.5rem) - 4px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}