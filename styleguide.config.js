const path = require('path')
const pkg = require('./package.json')

module.exports = {
  components: ['src/**/*.examples.tsx'],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    [{}],
  ).parse,
  require: [path.join(__dirname, 'src/styles/normalize.css')],
  styleguideDir: 'docs',
  title: `Booklyeriest ${pkg.version}`,
  webpackConfig: require('./config/webpack.config.js'),
}
