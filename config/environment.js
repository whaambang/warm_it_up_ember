/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'warm-it-up-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none' http://fonts.googleapis.com 'self' 'unsafe-inline'",
      'script-src': "'self' 0.0.0.0:3000 'unsafe-eval' https://rawgit.com",
      'font-src': "'self' http://fonts.gstatic.com ",
      'connect-src': "'self' '127.0.0.1:3000'",
      'img-src': "'self' https://raw.githubusercontent.com http://amturing.acm.org http://media-cache-ec0.pinimg.com http://upload.wikimedia.org http://sysrun.haifa.il.ibm.com http://a2.files.biography.com http://media.npr.org http://www.erlang-factory.com http://img.quotery.com https://encrypted-tbn0.gstatic.com https://encrypted-tbn1.gstatic.com http://www.siliconrepublic.com https://encrypted-tbn2.gstatic.com http://esslli2004.loria.fr http://wiki.linuxformat.ru data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
