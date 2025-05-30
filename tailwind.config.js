/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        terminalBg: "#0d0d0d",
        terminalText: "#00ff00",
      },
    },
  },
  plugins: [],
};
