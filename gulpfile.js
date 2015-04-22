
/* Gulpfile
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var gulp = require('gulp');
var connect = require('gulp-connect');
var colors = require('colors');
var watch = require('gulp-watch');
var karma = require('karma').server;
var mocha = require('mocha');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
  return gulp.src('app/app.js')
          .pipe(browserify({
            insertGlobals: true,
            debug: true
          }))
          .on('error', function(err) {
            console.log(err.message);
          })
          .pipe(rename('app.bundle.js'))
          .pipe(gulp.dest('./build'))
          .pipe(connect.reload());
});


gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true
  }, done);
});


gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/test/karma.conf.js'
  }, done);
});


gulp.task('server', ['scripts'], function() {
  // Start a server
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

  // Watch sketch files for changes
  console.log('[CONNECT] Watching sketch files for live-reload'.blue);
  watch(['./index.html', './css/**/*'])
    .pipe(connect.reload());

  // Watch js files for changes
  watch('./app/**/*.js', function() {
    gulp.start('scripts');
  });
});


gulp.task('dev', ['server', 'tdd']);


gulp.task('default', [], function() {
  console.log('\n'.yellow);
  console.log('  server  :'.magenta, 'start a server with live reloading'.yellow);
  console.log('  test    :'.magenta, 'run test once and exit'.yellow);
  console.log('  tdd     :'.magenta, 'Watch for file changes and re-run tests on each change'.yellow);
  console.log('  dev     :'.magenta, 'server + tdd'.yellow);
  console.log('\n'.yellow);
  return true;
});
