const path = require('path')
const pkg = require('./package.json')

module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    [{}],
  ).parse,
  require: [
    path.join(__dirname, 'src/styles/normalize.css'),
    path.join(__dirname, 'src/styles/reset.css'),
    path.join(__dirname, 'src/styles/styleguide.css'),
  ],
  sections: [
    {
      name: 'Common Components',
      components: ['src/**/*.examples.tsx'],
    },
  ],
  styleguideDir: 'docs',
  title: `Booklyeriest ${pkg.version}`,
  webpackConfig: require('./config/webpack.config.js'),
}
