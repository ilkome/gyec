// Modules
// ===============================================
var gulp = require("gulp"),
	del  = require('del');



// Clean site folder
// ===============================================
gulp.task('clean:site', function (cb) {
	del([
		config.site
	],
	cb);
});


// Clean files from app folder 
// ===============================================
gulp.task('clean:app', function (cb) {
	del([
		config.images.src + '/**', '!' + config.images.src,
		config.jade.src + '/blocks/*.*',
		config.stylus.src + '/blocks/*.*'
	],
	cb);
});