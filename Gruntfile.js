module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },
    // 
    scsslint: {
      options: {
        bundleExec: true,
        config: 'scss/.scss-lint.yml',
        reporterOutput: null
      },
      core: {
        src: ['scss/*.scss', '!scss/_normalize.scss']
      },
      // docs: {
      //   src: ['docs/assets/scss/*.scss', '!docs/assets/scss/docs.scss']
      // }
    },
    
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          loadPath: ['scss'],
          precision: 6,
          sourcemap: 'auto',
          style: 'expanded',
          // trace: true,
          // bundleExec: true
        },
        files: {                         // Dictionary of files
          'dist/css/bootstrap.css': 'scss/bootstrap.scss'
        }
      }
    },


    jekyll: {                             // Task
      options: {                          // Universal options
        bundleExec: true
      },
      serve: {                            // Another target
        options: {
          serve: true,
          // dest: '.jekyll',
          drafts: true,
          future: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-scss-lint');


  // Default task(s).
  grunt.registerTask('default', ['sass']);

  // JS distribution task.
  // grunt.registerTask('dist-js', ['babel:dev', 'concat', 'babel:dist', 'stamp', 'uglify:core']);

  grunt.registerTask('test-scss', ['scsslint:core']);

};