var gulp = require('gulp');
var blade = require('../');

gulp.task('compile', function(){
  gulp.src('*.blade')
  .pipe(blade())
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['compile']);
