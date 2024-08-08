/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/page.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          400: '#9F7AEA',
          500: '#805AD5',
          600: '#6B46C1',
          800: '#44337A',
        },
        pink: {
          500: '#D53F8C',
          600: '#B83280',
        },
        gray: {
          800: '#2D3748',
          900: '#1A202C',
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.purple.400"), 0 0 20px theme("colors.purple.700")',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}