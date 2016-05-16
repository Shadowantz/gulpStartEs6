var gulp = require('gulp'),
	sass = require('gulp-sass'),
	babel = require('gulp-babel'),
	watch = require('gulp-watch');


/**
 * @task sass
 * Compile files from scss
 */
gulp.task('sass', function() {
	return gulp.src(['./css/*.scss'])
		.pipe(sass({
			options: {}
		}))
		.pipe(sass())
		.pipe(gulp.dest('app/style'));
});

/**
 * @task build
 * used to only build the app (contains css builder also)
 */
gulp.task('build', ['sass'], function() {
	return gulp.src('script/main.js')
		.pipe(babel())
		.pipe(gulp.dest('app/js'))
});

/**
 * @task watch
 * used to watch over the modifications in js & scss files and rebuild the project
 */
gulp.task('watch', function() {
	gulp.watch(['./css/*.scss'], ['sass']);
	gulp.watch(['script/main.js'], ['build']);

});