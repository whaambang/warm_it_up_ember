/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();
 app.import('bower_components/bootstrap/dist/js/bootstrap.js');
 app.import('bower_components/bootstrap/dist/css/bootstrap.css');
 app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
  });
 app.import('bower_components/prism/prism.js');
 app.import('bower_components/prism/themes/prism-okaidia.css');
 app.import('bower_components/FlipClock/compiled/flipclock.min.js');
 app.import('bower_components/FlipClock/compiled/flipclock.css');
 app.import('bower_components/FlipClock/compiled/flipclock.js');


var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

var sassSources = [
  'app/styles'
]

var appCss = compileSass( sassSources , 'app.scss', 'assets/app.css');

var appAndCustomDependencies = mergeTrees([app.toTree(),appCss], {
  overwrite: true
});
// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
module.exports = appAndCustomDependencies;
// module.exports = app.toTree();
