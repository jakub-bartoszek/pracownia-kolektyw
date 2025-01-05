module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-background-rgb), ${opacityValue})`;
          }
          return `rgb(var(--color-background-rgb))`;
        },
        primary: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary-rgb), ${opacityValue})`;
          }
          return `rgb(var(--color-primary-rgb))`;
        },
        accent: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-accent-rgb), ${opacityValue})`;
          }
          return `rgb(var(--color-accent-rgb))`;
        },
        muted: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--color-primary-rgb), 0.5)`; // Zawsze 50% przezroczystości
          }
          return `rgba(var(--color-primary-rgb), 0.5)`; // Domyślna wartość
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/banner.png')",
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        fadeInDown: "fadeInDown 1s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
