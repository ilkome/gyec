/*
	ilkome-gulp
	Version 3.0.0

	Ilya Komichev
	ilko.me
*/


// Modules
// ===============================================
var gulp        = require("gulp"),
	watch       = require('gulp-watch'),
	requireDir  = require('require-dir'),
	runSequence = require('run-sequence'),
	browsersync = require("browser-sync");



// Paths
// ===============================================
config = {
	tasks: './tasks',
	site: 'site',
	jade: {
		src: 'app/jade',
		inc: 'app/jade/inc',
		ignore: '!app/jade/inc/*.jade',
	},
	stylus: {
		src: 'app/stylus',
	},
	css: {
		src: 'app',
		build: 'site/css',
	},
	images: {
		src: 'app/images',
		build: 'site/img',
	},
	javascripts: {
		src: 'app/javascripts',
		build: 'site/js',
	},
	fonts: {
		src: 'app/fonts',
		build: 'site/fonts',
	}
}



// Require all tasks from gulpfile.js/tasks
// ===============================================
requireDir(config.tasks);



// Build task
// ===============================================
gulp.task('default', function(callback) {
	runSequence(
		'clean:site',
		['jade', 'stylus', 'images', 'javascripts', 'fonts'],
		['watch', 'browsersync'],
		callback);
});



// Browsersync
// ===============================================
gulp.task('browsersync', function() {
	return browsersync.init({
		files: [
			config.site + '/*.html', 
			config.css.build + '/*.css',
			config.javascripts.build + '/**/*.js'
		],
		server: {baseDir: 'site'},
		open: "", //local
		notify: true,
		logPrefix: 'gulp-ilkome',
		logFileChanges: false,
		notify: false
	});
});



// Watch
// ===============================================
gulp.task('watch', function() {
	// Process jade file on change
	watch(config.jade.src + '/*.jade', function(event, cb) {
		gulp.start('jade');
	});

	// Process all jade files when inc change
	watch(config.jade.inc + '/*.jade', function(event, cb) {
		gulp.start('jade:nocache');
	});

	// Process stylus
	watch(config.stylus.src + '/**/*.styl', function(event, cb) {
		gulp.start('stylus');
	});

	// Copy images
	watch(config.images.src + '/**/*.+(jpg|png|gif)', function(event, cb) {
		gulp.start('images');
	});

	// Copy JavaScripts
	watch(config.javascripts.src + '/**/*.js', function(event, cb) {
		gulp.start('javascripts');
	});
});