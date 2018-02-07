

var gulp = require('gulp');
gulp.task('boot' , function(){
    console.log('Gulp started-- ');
});

var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('public/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
    //SCSS watcher
  gulp.watch('public/scss/**/*.scss', ['sass']); 
  // HTML watcher
gulp.watch('public/*.html', browserSync.reload); 
  gulp.watch('public/js/**/*.js', browserSync.reload); 
});

gulp.task('serve', ['browserSync'], function(){
    gulp.watch('public/*.html').on('change', browserSync.reload);
})

gulp.task('default', ['watch']);