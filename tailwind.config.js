/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 🌟 Premium Color Palette
        primary: {
          50: '#F8F4E9',
          100: '#F0E8D9',
          200: '#E8D9C4',
          300: '#DCC4A8',
          400: '#C9A882',
          500: '#B08C5C',
          600: '#935073',    // Main Purple
          700: '#7A3D60',
          800: '#502D55',    // Deep Purple
          900: '#3D1F40',
        },
        secondary: {
          50: '#F6DBC0',
          100: '#EDC9A8',
          200: '#E0B38A',
          300: '#D19D6E',
          400: '#C28752',
          500: '#B37136',
          600: '#935073',
          700: '#7A3D60',
          800: '#502D55',
          900: '#3D1F40',
        },
        accent: {
          gold: '#D4AF37',
          rose: '#E8A8B8',
          cream: '#F8F4E9',
          sand: '#F6DBC0',
        },
        dark: {
          DEFAULT: '#0D0D1A',
          lighter: '#1A1A2E',
          light: '#2D2D44',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #502D55 0%, #935073 50%, #D4AF37 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F6DBC0 100%)',
        'gradient-purple': 'linear-gradient(135deg, #502D55 0%, #935073 100%)',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(80, 45, 85, 0.15)',
        'premium-dark': '0 20px 60px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 40px rgba(147, 80, 115, 0.3)',
        'glow-gold': '0 0 40px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(147, 80, 115, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(147, 80, 115, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}