'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pageres: {
			screenshot: {
				options: {
					urls: 'yeoman.io',
					sizes: ['1000x1000', '100x100'],
					dest: 'tmp'
				}
			},
			multipleUrls: {
				options: {
					urls: ['yeoman.io', 'google.com'],
					sizes: ['1000x1000'],
					dest: 'tmp'
				}
			},
			scripted: {
				options: {
					urls: ['yeoman.io', 'google.com'],
					sizes: ['1000x1000'],
					dest: 'tmp',
				  	script: 'examples/hello.js'
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['pageres']);
};
