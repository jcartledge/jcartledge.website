var compileCSS = require('broccoli-postcss');
var nested = require('postcss-nested');

module.exports = compileCSS(['src/stylesheets'], 'screen.css', 'stylesheets/screen.css', [{
  module: nested
}]);
