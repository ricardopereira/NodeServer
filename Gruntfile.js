'use strict';

module.exports = function(grunt) {
  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['tests/**/*.test.js']
      }
    }
  });

  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('default', 'mochaTest');
};
