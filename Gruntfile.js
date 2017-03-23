
module.exports = function(grunt){


    grunt.initConfig({
    concat: {
      js: {
        src: ['js/count.js', 'js/helper.js', 'js/signup.js'],
        dest: 'scripts/scripts.js',
      },
      css: {
        src: ['css/output.css',],
        dest: 'scripts/styles.css',
      },
    },

    watch: {
        js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],

      },
      css: {
      files: ['css/**/*.css'],
      tasks: ['concat:css'],

    },
    },

  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['concat','watch'])
};
