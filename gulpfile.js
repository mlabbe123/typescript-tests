var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	tsProject = ts.createProject('./tsconfig.json');

gulp.task('default', function () {
	var tsResult = tsProject.src()
        	.pipe(ts(tsProject));

	return tsResult.js.pipe(gulp.dest('./'));
});