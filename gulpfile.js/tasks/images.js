// Modules
// ===============================================
var gulp = require("gulp");



// Task
// Just copy images to site folder
// ===============================================
gulp.task('images', function() {
	return gulp.src([config.images.src + '/**/*.+(jpg|png|gif|mp4)'])

	// Save files
	.pipe(gulp.dest(config.images.build))
});