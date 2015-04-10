var compileCSS = require('broccoli-postcss');
var cssPlugins = [
  {module: require('postcss-nested')},
  {module: require('postcss-import')}
];

module.exports = compileCSS(
  ['src/stylesheets'],
  'screen.css',
  'stylesheets/screen.css',
  cssPlugins);
