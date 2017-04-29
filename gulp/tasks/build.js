// RunSequence makes it possible to run tasks in series, rather than as parallel processes
// This means that you can make them run in a specific order, which is especially helpful when creating various builds
// In the below case, both build pipelines are almost identical with the difference being whether we run Browser-sync or not - you will probably want to diversify these two more in your own projects


const config = require("../config.js");
const gulp = require("gulp");


gulp.task(build);

function build(done) {
	console.log("build in build.js"), done();
}

/*
gulp.task("build", function(done) {
	return console.log("BUILD"),
		done();
});
*/

/*
gulp.task(build);

function build(done) {
	console.log("build xo"),
	done();
}
*/






/*
gulp.task("build:development", function(callback) {
	runSequence(
		"delete",
		[
			"sass"
		],
		[
			"stylefmt"
		],
		[
			"stylelint"
		],
		[
			"babel"
		],
		[
			"eslint"
		],
		[
			"copyfiles"
		],
		"browsersync")
});

gulp.task("build:production", function(callback) {
	runSequence(
		"delete",
		[
			"sass"
		],
		[
			"stylefmt"
		],
		[
			"stylelint"
		],
		[
			"babel"
		],
		[
			"eslint"
		],
		"copyfiles")
});
*/
