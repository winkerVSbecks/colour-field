module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai'],
    files: [
      // Vendor
      'bower_components/paper/dist/paper-full.min.js',
      'bower_components/ramda/dist/ramda.min.js',
      // App
      'app/**/*.js',
      'test/*.spec.js'
    ],
    reporters: ['nyan'],
    nyanReporter: {
      suppressErrorReport: true
    },
    colors: true,
    logLevel: config.LOG_ERROR,
    browsers: ['PhantomJS']
  });
};
