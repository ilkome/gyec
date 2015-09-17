// Modules
// ===============================================
var gulp = require("gulp");



// Task
// Just copy fonts to site folder
// ===============================================
gulp.task('fonts', function() {
	return gulp.src([config.fonts.src + '/*.+(eot|svg|ttf|woff|woff2)'])

	// Save files
	.pipe(gulp.dest(config.fonts.build))
});