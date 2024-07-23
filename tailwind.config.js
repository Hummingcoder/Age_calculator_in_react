/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        Purple: "	#854dff",
        LightRed: "	#ff5757",
        OffWhite: "	#f0f0f0",
        LightGray: "#c0c0c0",
        SmokeyGray: "	#716f6f",
        OffBlack: "	#141414",
      },
    },
  },
  plugins: [],
};
