// Modules
// ===============================================
var gulp    = require("gulp"),
	changed = require('gulp-changed');



// Task
// Just copy javascript to site folder
// ===============================================
gulp.task('javascripts', function() {
	return gulp.src([config.javascripts.src + '/**/*.js'])

	// Pass only unchanged files
	.pipe(changed(config.javascripts.build, {extension: '.js'}))

	// Save files
	.pipe(gulp.dest(config.javascripts.build))
});