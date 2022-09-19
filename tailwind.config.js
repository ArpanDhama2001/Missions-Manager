/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        bg: "var(--bg-color)",
        sub: "var(--sub-color)",
        "sub-alt": "var(--sub-alt-color)",
        text: "var(--text-color)",
      },
      backgroundColor: {
        primary: "var(--primary)",
        "primary-muted": "var(--primary-muted)",
        "secondary-muted": "var(--secondary-muted)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
      },
      textColor: {
        primary: "var(--secondary)",
        "primary-muted": "var(--secondary-muted)",
        secondary: "var(--primary)",
        "secondary-muted": "var(--primary-muted)",
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
      },
    },
  },
  plugins: [],
};
