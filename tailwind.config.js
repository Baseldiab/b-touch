/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/App.tsx",
    "./src/Header/Header.tsx",
    "./src/Header/Header-Components/Bottom-nav.tsx",
    "./src/Header/Header-Components/Search-screen.tsx",
    "./src/Header/Header-Components/NavList.tsx",
    "./src/Header/Header-Components/Logo-Menu.tsx",
    "./src/Home-page/Home.tsx",
    "./src/Home-component/New-Arrivals.tsx",
    "./src/Home-component/Reviews.tsx",
    "./src/Home-component/Ratings.tsx",
    "./src/Home-component/BestOffers.tsx",
    "./src/Home-component/AdFour-section.tsx",
    "./src/Home-component/Carousel-section/Carousel-section.tsx",
    "./src/Home-component/Carousel-section/Select-Vehicle.tsx",
    "./src/Home-component/Carousel-section/Select-Vehicle.tsx",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "250px",
        app: "430px",
        lg: "1178px",
        xl: "1300px",
      },
      colors: {
        primary: "#2DB0DF",
        danger: "#A7111A",
        stars: "#EABF57",
        buttonColor: "#087DA7",
        textColor: "#F5F5F5",
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
  plugins: [require("@tailwindcss/custom-forms"), require("tailwindcss")],
};

export default withMT(config);
