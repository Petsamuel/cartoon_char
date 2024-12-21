/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,ts}"],
  safelist: [
    {
      pattern: /(?:hover:)?(bg|text)-\[\#[a-fA-F0-9]{6}\]/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Pre-defined radial gradients
        "radial-primary": "radial-gradient(circle, var(--tw-gradient-stops))",
        "radial-at-t":
          "radial-gradient(circle at top, var(--tw-gradient-stops))",
        "radial-at-b":
          "radial-gradient(circle at bottom, var(--tw-gradient-stops))",
        "radial-at-l":
          "radial-gradient(circle at left, var(--tw-gradient-stops))",
        "radial-at-r":
          "radial-gradient(circle at right, var(--tw-gradient-stops))",
        "radial-at-tl":
          "radial-gradient(circle at top left, var(--tw-gradient-stops))",
        "radial-at-tr":
          "radial-gradient(circle at top right, var(--tw-gradient-stops))",
        "radial-at-bl":
          "radial-gradient(circle at bottom left, var(--tw-gradient-stops))",
        "radial-at-br":
          "radial-gradient(circle at bottom right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
