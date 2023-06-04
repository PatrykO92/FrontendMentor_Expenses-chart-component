/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "soft-red": "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",
      "dark-brown": "hsl(25, 47%, 15%)",
      "medium-brown": "hsl(28, 10%, 53%)",
      cream: "hsl(27, 66%, 92%)",
      "very-pale-orange": "hsl(33, 100%, 98%)",
    },
  },
  plugins: [],
};
