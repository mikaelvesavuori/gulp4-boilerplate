// Browser-sync is a local server which will update your browser(s) when it sees that the below files are updated
// You may also provide so-called "watch" tasks which are to be run whenever these changes are taking place, for example recompiling JS or linting Sass

const config = require("../config.js");
const gulp = require("gulp");
const browsersync = require("browser-sync");

gulp.task("browsersync", function browsersync(done) {
	browsersync(config.browsersync);

	gulp.watch("**/*.{html,php}", browsersync.reload);
	gulp.watch(config.browsersync.src + "css/**/*.css", browsersync.reload);
	gulp.watch(config.browsersync.src + "sass/**/*.scss", ["sass", "stylelint"]);
	gulp.watch(config.browsersync.src + "scripts/js/**/*.js", ["babel", "eslint"], browsersync.reload);
	gulp.watch(config.browsersync.src + "scripts/compiled/*.js", browsersync.reload);
});



/*
// OLD VERSION
gulp.watch('js/starstar/star.js', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
// WILL CHANGE TO:
var watcher = gulp.watch('js/starstar/star.js' /star You can also pass options and/or a task function here star/);
watcher.on('all', function(event, path, stats) {
  console.log('File ' + path + ' was ' + event + ', running tasks...');
});
// OR LISTEN TO INDIVIDUAL EVENT TYPES
watcher.on('change', function(path, stats) {
  console.log('File ' + path + ' was changed, running tasks...');
});
watcher.on('add', function(path) {
  console.log('File ' + path + ' was added, running tasks...');
});
watcher.on('unlink', function(path) {
  console.log('File ' + path + ' was removed, running tasks...');
});
*/
