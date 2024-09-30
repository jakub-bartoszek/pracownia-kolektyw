module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "primary": "var(--color-primary)",
        "accent": "var(--color-accent)",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
