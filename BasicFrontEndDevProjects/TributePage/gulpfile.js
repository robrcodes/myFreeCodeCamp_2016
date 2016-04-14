// Simple gulp setup with only 1 task:
// watch for changes and reload browser!

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// default task
gulp.task('default', ['serve']);

// Static Server + watching html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
        // reload browser
    gulp.watch("./*.html").on('change', browserSync.reload);
});
