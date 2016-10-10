var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat 		 = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/js/**/*.js", ['js-watch']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/**/*.scss")
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
    	.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest("app/dist/css/"))
        .pipe(browserSync.stream());
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('app/js/**/*.js')
        //.pipe(browserify())
        //.pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/dist/js/'));
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['serve']);