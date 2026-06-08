/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#06101C',
        aqua: '#0BA1A2',
        violet: '#8959D5',
        mist: '#F7F9FC'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(6, 16, 28, 0.08)',
        glow: '0 18px 60px rgba(11, 161, 162, 0.22)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
