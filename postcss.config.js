module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss')('./tailwind.config.js'), //This refers to your tailwind config
    require('autoprefixer'),
  ],
}
