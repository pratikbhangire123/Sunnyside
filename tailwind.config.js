/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //Primary
        softred: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        darkblue: "hsl(198, 62%, 26%)",
        darkmoderatecyan: "hsl(168, 34%, 41%)",

        //Neutral
        verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        verydarkgrayishblue: "hsl(213, 9%, 39%)",
        darkgrayishblue: "hsl(232, 10%, 55%)",
        grayishblue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
