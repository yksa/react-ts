/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        body: {
          light: "#F3F4F7",
          dark: "#09090B",
        },
        card: {
          light: "#FFFFFF",
          dark: "#2C2C2C",
        },
        header: {
          light: "#FFFFFF",
          dark: "#0F0F0F",
        },
        text: {
          light: "#080A0D",
          dark: "#FFFFFF",
        },
        primaryButton: {
          DEFAULT: "#0D6EFD",
        },
        secondaryButton: {
          light: "#6C757D",
          dark: "#495057",
        },
        link: {
          light: "#0D6EFD",
          dark: "#4DABF7",
        },
        highlight: {
          light: "#C8E6C9",
          dark: "#1B5E20",
        },
        border: {
          light: "#D1D5DB",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
