var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    browserSync = require('browser-sync');
    // sass        = require('gulp-sass');


gulp.task('scripts' , function() {
  gulp.src('./js/*.js')
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
 }); 

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch(['*.html', 'build/css/*.css', 'build/js/*.js']).on('change', browserSync.reload);
        
    });

    gulp.task('default', ['watch', 'browser-sync']);
