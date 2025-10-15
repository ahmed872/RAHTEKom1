import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          lime: '#CCFF00',
          green: '#00FF41',
          blue: '#00F0FF',
          pink: '#FF10F0',
          purple: '#B026FF',
        },
        royal: {
          gold: '#C9A227',
          purple: '#8B5CF6',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #CCFF00, 0 0 10px #CCFF00, 0 0 15px #CCFF00' },
          '100%': { boxShadow: '0 0 10px #CCFF00, 0 0 20px #CCFF00, 0 0 30px #CCFF00' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'neon-lime': '0 0 10px #CCFF00, 0 0 20px #CCFF00, 0 0 30px #CCFF00',
        'neon-green': '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
        'neon-blue': '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF',
        'neon-pink': '0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0',
      },
    },
  },
  plugins: [],
} satisfies Config;

