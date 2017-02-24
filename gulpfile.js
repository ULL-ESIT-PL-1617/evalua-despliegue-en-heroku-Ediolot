var gulp = require('gulp');
var shell = require('gulp-shell');
var task = require('shell-task');


gulp.task('default', ['buildGitbook, uploadHeroku']);

gulp.task('buildGitbook',  function() {
    return gulp.src('').pipe(shell([
      'npm install',
      'gitbook build'
  ]));
});

gulp.task('uploadHeroku',  function() {
    return gulp.src('').pipe(shell([
      'git add .',
      'git commit -m "Autocommit deplot gitbook"',
      'git push heroku master'
  ]));
});
