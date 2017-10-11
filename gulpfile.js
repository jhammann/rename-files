// Rename a large number of files. Change the files into a numbered list based on the original order determined by user input (in input.js).
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const files = require('./input');

const $ = gulpLoadPlugins();

gulp.task('default', () => {
  files.forEach((file, index) => {
    const newName = index + 1;
    const extension = file.split('.').pop(); // Extract the extension from the file.
    // Check the files directory for the original files.
    gulp.src(`./files/${file}`)
      .pipe($.rename(`${newName}.${extension}`))
      .pipe(gulp.dest('./new/'));
  });
});
