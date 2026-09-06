/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Coorg heritage palette: forest green + terracotta on warm cream
        primary: '#2a1f15',
        secondary: '#3d2e1e',
        body: '#6b5847',
        muted: '#9a8b78',
        offwhite: '#f5efe4',
        cream: '#ebe2cf',
        accent: {
          DEFAULT: '#3e5a35',
          dark: '#2f4628',
          warm: '#c2603a',
        },
        line: '#d8cebb',
        'line-light': '#e8dfcc',
        'dark-bg': '#1c1410',
      },
      fontFamily: {
        heading: ['Poppins', 'Popins', 'sans-serif'],
        body: ['"Poppins"', 'Popins', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', '"Century Gothic"', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 5px 20px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 25px 60px rgba(0, 0, 0, 0.1)',
        form: '0 20px 60px rgba(0, 0, 0, 0.15)',
        nav: '0 4px 30px rgba(0, 0, 0, 0.15)',
        accent: '0 5px 25px rgba(62, 90, 53, 0.15)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        heroZoom: {
          from: { transform: 'scale(1.15)' },
          to: { transform: 'scale(1)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'hero-zoom': 'heroZoom 10s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.9s ease-out forwards',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'pulse-ring-delayed': 'pulseRing 2s ease-out 1s infinite',
      },
    },
  },
  plugins: [],
};
