const path = require('path')
const pkg = require('./package.json')

module.exports = {
  components: ['src/**/*.examples.tsx'],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    [{}],
  ).parse,
  require: [
    // path.join(__dirname, 'src/components/Select/styles/Select.scss'),
    // path.join(__dirname, 'src/components/Select/styleguide/Styleguide.scss'),
  ],
  styleguideDir: 'docs',
  title: `Booklyer ${pkg.version}`,
  webpackConfig: require('./config/webpack.config.js'),
}
