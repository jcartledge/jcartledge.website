var compileCSS = require('broccoli-postcss');
var cssPlugins = [
  {module: require('postcss-import')},
  {module: require('postcss-nested')}
];

module.exports = compileCSS(
  ['src/stylesheets'],
  'screen.css',
  'stylesheets/screen.css',
  cssPlugins);
