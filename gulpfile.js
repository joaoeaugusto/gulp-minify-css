var paths = {
	styles: {
		src: 'html/css/',
		dest: 'html/css/min/'
	}
}

var appFiles = {
	styles: [
		paths.styles.src + 'fancybox-custom.css',
		paths.styles.src + 'style.css'
	]
}

var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch');

gulp.task('css', function() {
	gulp.src(appFiles.styles)
		.pipe(concat('style.css'))
		.pipe(minifyCSS({
			keepSpecialComments:0
		}))
	.pipe(gulp.dest(paths.styles.dest))
});

gulp.task('watch', function () {
	gulp.watch(appFiles.styles, ['css']);
});

gulp.task('default', ['css']);
