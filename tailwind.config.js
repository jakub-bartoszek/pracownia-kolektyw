module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
