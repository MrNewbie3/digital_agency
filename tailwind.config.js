/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue-secondary": "#EFF8FF",
        "blue-main": "#0768B3",
        "primary-text": "#475569",
        "primary-grey": "#9795B5",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.25, 0.8, 0.25, 1)", // Ease-out kustom untuk transisi profesional
      },
      boxShadow: {
        "blue-300": "0 4px 15px rgba(59, 130, 246, 0.3)", // Shadow dengan warna biru lembut
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
