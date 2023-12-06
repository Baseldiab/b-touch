/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "250px",
        app: "420px",
        lg: "1178px",
        xl: "1300px",
      },
      colors: {
        primary: "#2DB0DF",
        danger: "#A7111A",
        stars: "#EABF57",
        buttonColor: "#087DA7",
        footHeader: "#30AFE0",
        textColor: "#F5F5F5",
        iconColor: "#056D92",
        textResetBtn: "#A3A3A3",
        heartBtn: "#A4A4A4",
        textFooterColor: "#F0F0F0",
        textDarkColor: "#464B4E",
        addBg: "#EDF5F9",
        add4Bg: "#055A78",
        userBg: "#72777A",
        bottomNavBorder: "#4C4C4C",
        mainBgColor: "#22292E",
        carouselBgColor: "#464B4EA1",
        bottomNavBg: "#D9D9D9",
        bgHeadRegister: "#0B5C6F",
        textHeadRegister: "#46C1F0",
      },
      fontFamily: {
        orelega: ["Orelega One", "serif"],
        roboto: ["Roboto", "sans-serif"],
        playPal: ["Playball", "cursive"],
      },
      fontSize: {
        ssm: "10px",
      },
      container: {
        center: true,
      },

      boxShadow: {
        customLeft: "-1px 0 2px 0 rgba(0, 0, 0, 0.25)",
        Btn: "-2px 4px 4px 0 rgba(0, 0, 0, 0.25)",
        heart: "inset -1px 2px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      zIndex: {
        min: "-1",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [require("tailwindcss")],
};

export default withMT(config);
