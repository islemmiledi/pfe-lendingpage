module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datetimepicker/dist/react-tailwindcss-datetimepicker.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "service-pattern":
          "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/img-5.jpg')",
        // "footer-pattern":
        //   "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/img-0.jpg')",
      },
    },
    plugins: [],
  },
};
