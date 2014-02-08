(function(){
	'use strict';

	module.exports = function(grunt) {
		// Project Configuration
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			watch: {
				jade: {
					files: ['app/views/**'],
					options: {
						livereload: true
					}
				},
				js: {
					files: ['gruntfile.js', 'static/js/**'],
					tasks: ['jshint','nodemon'],
					options: {
						livereload: true
					}
				},
				html: {
					files: ['static/views/**'],
					options: {
						livereload: true
					}
				},
				css: {
					files: ['static/sass/**'],
					tasks:['sass'],
					options: {
						livereload: true
					}
				}
			},
			jshint: {
				all: {
					src: ['gruntfile.js', 'static/js/**'],
					options: {
						jshintrc: true
					}
				}
			},
			sass: {
				dist: {
					files: [{
						expand: true,
						cwd: 'static/sass',
						src: ['*.scss'],
						dest: 'static/css',
						ext: '.css'
					}],
					options:{
						sourcemap:'true'
					}
				}
			},
			compass: {
				dist: {
					options: {
						sourcemap:'true',
						sassDir: 'static/sass',
						cssDir: 'static/css',
						environment: 'production'
					}
				},
				dev: {
					options: {
						sassDir: 'static/sass',
						cssDir: 'static/css'
					}
				}
			},
			nodemon: {
				dev: {
					script: 'server.js',
					options: {
						args: ['dev'],
						nodeArgs: ['--debug'],
						callback: function (nodemon) {
							nodemon.on('log', function (event) {
								console.log(event.colour);
							});
						},
						env: {
							PORT: '3000'
						},
						cwd: __dirname,
						ignore: ['node_modules/**', 'public/**'],
						ext: 'js,coffee',
						watch: ['server','app/**/*.js'],
						delayTime: 1,
						legacyWatch: true
					}
				},
				exec: {
					options: {
						exec: 'less'
					}
				}
			},
			concurrent: {
				tasks: ['watch'],
				options: {
					logConcurrentOutput: true
				}
			},
			mochaTest: {
				options: {
					reporter: 'spec',
					require: 'server.js'
				},
				src: ['test/mocha/**/*.js']
			},
			env: {
				test: {
					NODE_ENV: 'test'
				}
			},
			karma: {
				unit: {
					configFile: 'test/karma/karma.conf.js'
				}
			}
		});

		//Load NPM tasks
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-mocha-test');
		grunt.loadNpmTasks('grunt-karma');
		grunt.loadNpmTasks('grunt-nodemon');
		grunt.loadNpmTasks('grunt-concurrent');
		grunt.loadNpmTasks('grunt-env');

		//Making grunt default to force in order not to break the project.
		grunt.option('force', true);

		//Default task(s).
		grunt.registerTask('default', ['jshint', 'sass', 'concurrent']);

		//Test task.
		grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
	};
}());