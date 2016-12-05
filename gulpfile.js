var gulp = require("gulp"),
    //jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify");


gulp.task('js', function() {
    gulp.src(['src/app/**/*.js'])
        //.pipe(jshint())
        //.pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['js']);

gulp.task('watch', function() {
    gulp.watch('src/app/**/*.js', ['build']);
});

gulp.task('default', function() {
    // Your default task
});