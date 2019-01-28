var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),  
    browserSync  = require('browser-sync').create(),    
    notify       = require('gulp-notify');


// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/scss/*.scss", gulp.parallel('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .on("error", notify.onError())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('serve', 'sass'));