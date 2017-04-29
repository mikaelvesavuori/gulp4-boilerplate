'use strict';

const gulp = require("gulp");
const HubRegistry = require("gulp-hub");
const hub = new HubRegistry(["gulp/tasks/*.js"]);
gulp.registry(hub);



// 'clean' and 'scripts' tasks defined in tasks directory
//gulp.task('default', gulp.series('clean', 'scripts'));

//gulp.task("default", gulp.series(build));







// define composite tasks
//gulp.task("default", gulp.series("clean", "scripts"));

/*
gulp.task("test", function(done) {
	console.log("Working"), done();
});
*/

//gulp.task("default", gulp.series("asdf", "console"));

/*
const del = require("del");
gulp.task("console", function(done) {
	return console.log("Console task"), done();
});

gulp.task("clean", function(done) {
	return del.sync("dist"), done();
});

gulp.task("watch", gulp.series("clean", "console"));
*/

/*
Standalone tasks are defined in the tasks directory, and gulp-hub is used to create a new registry. Tasks that use a combination of sub-tasks are now defined in the gulpfile, after gulp.registry

While this will require a minor restructuring of tasks in some projects, I actually prefer defining composite tasks like default, watch, and build in my gulpfile and using the tasks directory strictly for standalone tasks. In larger gulpfiles composite tasks are typically short and called far more frequently than their standalone siblings, so IMO it's easier to reference them in one place.
*/
