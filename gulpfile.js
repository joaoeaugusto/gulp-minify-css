var paths = {
	styles: {
		src: 'html/css/',
		dest: 'html/css/min/'
	}
}

var appFiles = {
	styles: [
		'html/css/font-awesome.min.css',
		'html/css/fancybox.css',
		'html/css/style.css'
	]
}

var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat');

gulp.task('css', function() {
  gulp.src(appFiles.styles)
  	.pipe(concat('style.css'))
	.pipe(minifyCSS({
		keepSpecialComments:0
	}))
	.pipe(gulp.dest(paths.styles.dest))
});

gulp.task('default', ['css']);
