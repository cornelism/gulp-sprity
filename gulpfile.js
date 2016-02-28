var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

// generate sprite.png and _sprite.scss
gulp.task('default', function () {
  return sprity.src({
    src: './src/**/*.{png,jpg}',
    style: './dist/_sprites.scss',
    // ... other optional options
    processor: 'sass',
    margin: 0,
    split: true,
    cssPath: '../img',
    name: 'sprite',
    prefix: 'sprite',
  })
  .pipe(gulpif('*.{png,jpg}', gulp.dest('./dist/img/'), gulp.dest('./dist/css/')))
});