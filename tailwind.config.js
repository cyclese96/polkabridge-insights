module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js", './node_modules/tw-elements/dist/js/**/*.js'],
  // content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
          colors: {
            "pink-300": "#ea3b9a",
            "pink-500": "#f373b9",
            "lightgray": "#1b1b1b",
            'stone-500': "#ea3b9a"
          }
        }
    }
};
