// Lint your CSS/Sass files
// Linting settings are configured in config.js

const config = require("../config.js");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const reporter = require("postcss-reporter");
const plumber = require("gulp-plumber");
const scss = require("postcss-scss");
const gulpstylelint = require("stylelint");

gulp.task("stylelint", function stylelint() {
	const processors = [
		gulpstylelint(config.linting.stylelint),
		reporter(config.linting.reporter)
	];

	return gulp.src(config.linting.stylelint.src)
		.pipe(plumber())
		.pipe(postcss(processors, {syntax: scss}))
});
