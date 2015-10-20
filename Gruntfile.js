module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				mangle: {
					except: ['jQuery', 'Backbone']
				}
			},
			my_target: {
				files: {
					'dist/index.<%= pkg.version%>.js': ['js/index.js', "js/common.js"]
				}
			}
		},
		htmlmin: { // Task
			dist: { // Target
				options: { // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: { // Dictionary of files
					'dist/index.min.html': './index.html', // 'destination': 'source'
				}
			},
			dev: { // Another target
				files: {
					'dist/index.min.html': './index.html',
				}
			}
		},
		concat: {
			dist: {
				src: ['js/*.js'],
				dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
			},
		},
		jade: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					src: "*.jade",
					dest: "./",
					cwd: "templates/",
					ext: '.html'
				}]
			}
		},
		watch: {
			main: {
				files: ["templates/*.jade","templates/common/*.jade"],
				tasks: ["jade"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-jade");

	grunt.registerTask("default", ["watch"]);//"uglify", "htmlmin", "concat",
};