var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	tsProject = ts.createProject('./tsconfig.json');

gulp.task('compile:ts', function() {
    var tsResult = tsProject.src()
            .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('./dist/js'));
});

gulp.task('default', function () {
	gulp.watch('src/ts/**/*.ts', ['compile:ts']);
});