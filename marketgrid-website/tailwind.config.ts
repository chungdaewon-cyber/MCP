import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deloitte-inspired Black palette
          black: {
            50: '#F7F7F7',
            100: '#E3E3E3',
            200: '#C7C7C7',
            300: '#A4A4A4',
            400: '#818181',
            500: '#666666',
            600: '#515151',
            700: '#434343',
            800: '#1A1A1A',
            900: '#000000',  // Primary - Pure Black
          },
          // Deloitte Green accents
          green: {
            50: '#F5FBE9',
            100: '#E8F5D0',
            200: '#D5ECA5',
            300: '#BFE375',
            400: '#A8D94D',
            500: '#86BC24',  // Secondary - Deloitte Green
            600: '#6B9B1E',
            700: '#4F7516',
            800: '#364F0F',
            900: '#1E2B08',
          },
          // Core colors
          primary: '#000000',    // Pure Black
          secondary: '#86BC24',  // Deloitte Green
          accent: '#6B9B1E',     // Darker Green
          success: '#86BC24',    // Deloitte Green
          warning: '#F59E0B',    // Amber
          // Sophisticated grays
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',   // Body text
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
      },
      fontFamily: {
        // Deloitte-inspired typography (Bold, sans-serif)
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Arial', 'Helvetica Neue', 'Helvetica', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Arial Black', 'Arial Bold', 'Arial', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        // Refined type scale
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #E5E7EB 1px, transparent 1px),
                        linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
        'premium-gradient': 'linear-gradient(135deg, #000000 0%, #86BC24 100%)',
        'subtle-gradient': 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
        'deloitte-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #86BC24 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'deloitte': '0 10px 20px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(134, 188, 36, 0.1)',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
    },
  },
  plugins: [],
}

export default config
