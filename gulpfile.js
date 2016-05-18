var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;

gulp.task('webdriver_update',webdriver_update);
gulp.task('webdriver_standalone',webdriver_standalone);

gulp.task('default',['webdriver_update','webdriver_standalone'], function() {

	gulp.src(["protractor_test/specs/example-spec.js"])
		.pipe(protractor({
			configfile: "protractor_test/conf.js",
			args: ['--baseUrl','http://127.0.0.1:8000']
		}))
		.on('error', function(e) {throw e});
});
