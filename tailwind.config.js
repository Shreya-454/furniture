/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      backgroundImage: {
        "grey-gradient": "linear-gradient(270deg, #8C939B 0%, #243040 100%)",
      },
      backgroundSize: {
        'size':'100% 100%'
      }
    },
  },
  plugins: [],
};
