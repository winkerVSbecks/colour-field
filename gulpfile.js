
/* Gulpfile
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var gulp = require('gulp');
var connect = require('gulp-connect');
var colors = require('colors');
var watch = require('gulp-watch');


gulp.task('dev', function() {
  // Start a server
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

  // Watch sketch files for changes
  console.log('[CONNECT] Watching sketch files for live-reload'.blue);
  watch(['./index.html', './sketch/**/*', './css/**/*'])
    .pipe(connect.reload());
});


gulp.task('default', [], function() {
  console.log('\n'.yellow);
  console.log('  dev :'.magenta, 'starts a server with live reloading'.yellow);
  console.log('\n'.yellow);
  return true;
});