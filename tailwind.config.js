/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-main"),
        secondary: withOpacity("--color-sub"),
        accent: withOpacity("--color-accent"),
        fill: withOpacity("--color-fill"),
      },
      fontFamily: {
        heading: ["Montserrat"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [],
};
