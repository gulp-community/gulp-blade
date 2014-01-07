var gulp = require('gulp');
var blade = require('../');

gulp.task('compile', function(){
  gulp.src('./in.blade')
  .pipe(blade())
  .pipe(gulp.dest('./'));
});

gulp.task('default', function(){
  gulp.run('compile');
});