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
          // McKinsey-inspired Deep Navy palette
          navy: {
            50: '#F0F4F8',
            100: '#D9E2EC',
            200: '#BCCCDC',
            300: '#9FB3C8',
            400: '#829AB1',
            500: '#627D98',
            600: '#486581',
            700: '#334E68',
            800: '#243B53',
            900: '#001E3C',  // Primary - McKinsey Deep Blue
          },
          // Professional Blue accents
          blue: {
            50: '#E6F0FF',
            100: '#CCE0FF',
            200: '#99C2FF',
            300: '#66A3FF',
            400: '#3385FF',
            500: '#0066CC',  // Secondary - Professional Blue
            600: '#0052A3',
            700: '#003D7A',
            800: '#002952',
            900: '#001429',
          },
          // Trust & Innovation
          primary: '#001E3C',    // Deep Navy
          secondary: '#0066CC',  // Professional Blue
          accent: '#0052A3',     // Deeper Blue
          success: '#00693E',    // BCG-inspired Green
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
        // Premium typography system
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
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
        'premium-gradient': 'linear-gradient(135deg, #001E3C 0%, #0066CC 100%)',
        'subtle-gradient': 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 30, 60, 0.1), 0 10px 10px -5px rgba(0, 30, 60, 0.04)',
        'premium-lg': '0 25px 50px -12px rgba(0, 30, 60, 0.25)',
        'subtle': '0 1px 3px 0 rgba(0, 30, 60, 0.08), 0 1px 2px 0 rgba(0, 30, 60, 0.06)',
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
