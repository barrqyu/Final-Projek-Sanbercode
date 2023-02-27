/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        plusjktsans: ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [require("daisyui")],
};
