/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        // Primary Colors - Rose
        primary: {
          dark: '#b6143d', // Primary Dark (140%)
          DEFAULT: '#ec1c54', // Primary (100%)
          light: '#f14d78', // Primary Light (80%)
          container: '#fde8ed', // Primary Container (10%)
        },
        // Secondary Colors - Blue
        secondary: {
          dark: '#0D47A1', // Secondary Dark
          DEFAULT: '#1565C0', // Secondary
          light: '#1E88E5', // Secondary Light
          container: '#E3F2FD', // Secondary Container
        },
        // Accent Colors - Amber
        accent: {
          dark: '#FFA000', // Accent Dark
          DEFAULT: '#FFC107', // Accent
          light: '#FFD54F', // Accent Light
          container: '#FFF8E1', // Accent Container
        },
        // Neutral Colors
        neutral: {
          background: '#FFFFFF', // Background
          surface: '#F5F5F5', // Surface
          outline: '#E0E0E0', // Outline
          muted: '#757575', // Muted
        },
        // Feedback Colors
        success: '#4CAF50', // Success
        error: '#F44336', // Error
        warning: '#FF9800', // Warning
        info: '#2196F3', // Info
      },
      letterSpacing: {
        tighter: '-0.25px',
        tight: '0px',
        normal: '0.15px',
        wide: '0.25px',
        wider: '0.5px',
        widest: '1.25px',
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.2', letterSpacing: '-0.25px', fontWeight: '500' }],
        h1: ['40px', { lineHeight: '1.2', letterSpacing: '-0.25px', fontWeight: '500' }],
        h2: ['32px', { lineHeight: '1.2', letterSpacing: '-0.25px', fontWeight: '500' }],
        h3: ['28px', { lineHeight: '1.3', letterSpacing: '0px', fontWeight: '500' }],
        h4: ['24px', { lineHeight: '1.3', letterSpacing: '0.25px', fontWeight: '500' }],
        h5: ['20px', { lineHeight: '1.3', letterSpacing: '0px', fontWeight: '500' }],
        h6: ['18px', { lineHeight: '1.3', letterSpacing: '0.15px', fontWeight: '500' }],
        body1: ['16px', { lineHeight: '1.5', letterSpacing: '0.5px', fontWeight: '400' }],
        body2: ['14px', { lineHeight: '1.5', letterSpacing: '0.25px', fontWeight: '400' }],
        button: [
          '14px',
          {
            lineHeight: '1.5',
            letterSpacing: '1.25px',
            fontWeight: '500',
            textTransform: 'uppercase',
          },
        ],
        caption: ['12px', { lineHeight: '1.5', letterSpacing: '0.4px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
