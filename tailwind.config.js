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
        primary: "#2C57A7",
        primary_04: "#9AB4E4",
        on_primary: "#ffffff",
        primary_container: "#BBCDED",
        on_primary_container: "#112343",
        primary_outline_reverse: "#789BDB",

        secondary: "#495F89",
        on_secondary: "#ffffff",
        secondary_container: "#C7D0E1",
        on_secondary_container: "#1D2637",

        teritary: "#FFAE2A",
        on_teritary: "#2A1A00",
        teritary_container: "#FFDDBA",
        on_teritary_container: "#2B1700",
        teritary_04: "#FFCE7F",
        teritary_07: "#FF9E00",
        teritary_08: "#D48400",
        teritary_11: "#553400",
        teritary_surface_container: "#FFF3E0",

        surface_high: "#E8E7EF",
        on_surface: "#26292E",
        on_surface_v: "#5F6674",

        outline: "#A1A7B2",
        outline_v: "#D0D3D8",
        background: "#F9F9FA",
        bg_surface_container: "#EEEDF4",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
