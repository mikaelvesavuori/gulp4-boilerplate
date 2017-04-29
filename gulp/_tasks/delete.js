// This task is used to wipe stuff that you don't need, for example trashing an old distribution build before doing a new build

const config = require("../config.js");
const gulp = require("gulp");
const dlt = require("del");

gulp.task("del", function del(done) {
	return dlt.sync(config.delete.src),
		done();
});
