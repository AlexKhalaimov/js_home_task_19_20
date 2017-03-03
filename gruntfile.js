module.exports = function(grunt) {

  grunt.initConfig({
          concat: {
            options: {
              // define a string to put between each file in the concatenated output
            //   separator: ';'
            },
            dist: {
              // the files to concatenate
              src: [  'css/style.scss'],
              // the location of the resulting JS file
              dest: 'styles/distr/main.scss'
            }
        },
        uglify: {
            dist: {
                src:['js/distr/script.main.js'],
                dest: 'js/distr/script.main.min.js'
            }
        },
        sass: {
            dist: {
                  files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['style.scss'],
                    dest: 'css',
                    ext: '.css'
                  }]
              }
        },
        watch: {
            sass: {
              // We watch and compile sass files as normal but don't live reload here
              files: ['styles/*.scss'],
              tasks: ['concat','sass']
            }
        }
  });

  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};
