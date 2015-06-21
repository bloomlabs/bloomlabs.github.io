module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks("grunt-sitemap");

  grunt.initConfig({
    copy: {
      jquery: {
        files: [{
          expand: true,
          cwd: "public/bower_components/jquery/dist/",
          src: "jquery.min.js",
          dest: "vendor/js/"
        }]
      },
      materialize: {
        files: [{
          expand: true,
          cwd: "public/bower_components/materialize/dist/css/",
          src: "materialize.min.css",
          dest: "vendor/css/"
        },
        {
          expand: true,
          cwd: "public/bower_components/materialize/dist/js/",
          src: "materialize.min.js",
          dest: "vendor/js/"
        }]
      }
    },
    sitemap: {
        dist: {
            siteRoot: "_site/",
            pattern: ['_site/**/*.html', '_site/!**/google*.html'], // this will exclude 'google*.html'
            homepage: "http://bloom.org.au/"
        }
    },
    exec: {
      jekyll: {
        cmd: "jekyll build --trace"
      }
    },
    watch: {
      options: {
        livereload: true
      },
      source: {
        files: [
          "_drafts/**/*",
          "_includes/**/*",
          "_layouts/**/*",
          "_posts/**/*",
          "css/**/*",
          "js/**/*",
          "_config.yml",
          "*.html",
          "*.md"
        ],
        tasks: [
          "exec:jekyll"
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          base: '_site',
          livereload: true
        }
      }
    }
  });
  grunt.registerTask("build", ["copy", "exec:jekyll", "sitemap"]);

  grunt.registerTask("serve", ["build", "connect:server","watch"]);

  grunt.registerTask("default", ["serve"]);
};