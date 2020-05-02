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
      name: 'Velcrostrip Components',
      components: ['src/packages/velcrostrip/**/*.examples.tsx'],
    },
  ],
  styleguideDir: 'docs',
  styles: path.join(__dirname, 'src/styles/styleguide.js'),
  title: `Booklyeriest ${pkg.version}`,
  webpackConfig: require('./config/webpack.config.js'),
}
