var compileCSS = require('broccoli-postcss');
var cssnext = require('cssnext');

module.exports = compileCSS(['src/stylesheets'], 'screen.css', 'stylesheets/screen.css', [{
  module: cssnext
}]);
