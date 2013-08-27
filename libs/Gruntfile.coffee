###* global module:true *###
module.exports = (grunt)->
  grunt.initConfig

  # READ PACKAGE JSON ------------------------------------------------------------------------- **/
    pkg       : grunt.file.readJSON 'package.json'
    meta      :
      banner:
        js : '/*! <%= pkg.author %> | <%= pkg.license %> */'
        css: '/*! <%= pkg.author %> | <%= pkg.license %> */'
    # JADE ------------------------------------------------------------------------- **/
    jade      :
      index:
        options:
          pretty: true
          data  :
            title      : "index"
            description: ""
            keywords   : ""
        files  :
          '<%= pkg.html_dir %>index.html': '<%= pkg.jade_dir %>index.jade'
    # HTML MIN ------------------------------------------------------------------------- **/
    htmlmin   :
      index:
        options:
          removeComments    : true
          collapseWhitespace: true
        files  :
          '<%= pkg.production_dir %>index.html': '<%= pkg.html_dir %>index.html'
    # COMPASS ------------------------------------------------------------------------- **/
    compass   :
      index:
        options:
          config : 'config.rb'
          sassDir: '<%= pkg.sass_dir %>css'
          cssDir : '<%= pkg.html_dir %>css'
    # CSS MIN ------------------------------------------------------------------------- **/
    cssmin    :
      index:
        src : ['<%= meta.banner.css %>', '<%= pkg.html_dir %>css/style.css'] # <%= meta.banner.css %> is still ignored.
        dest: '<%= pkg.html_dir %>css/style.min.css'
    # COFFEESCRIPT ------------------------------------------------------------------------- **/
    coffee    :
      compile      :
        files:
          '<%= pkg.html_dir %>common/FBUtil.js': '<%= pkg.coffee_dir %>common/FBUtil.coffee'#, # 1:1 compile
      #'path/to/another.js' :['path/to/sources/*.coffee', 'path/to/more/*.coffee'], # compile and concat into single file
      #'path/to/*.js' :['path/to/sources/*.coffee', 'path/to/more/*.coffee'] # compile individually into dest, maintaining folder structure,
      index:
        expand: true,
        cwd   : '<%= pkg.coffee_dir %>'
        src   : ['*.coffee']
        dest  : '<%= pkg.html_dir %>js/'
        ext   : '.js'
    # TYPESCRIPT ------------------------------------------------------------------------- **/
    typescript:
      index:
        src    : ['<%= pkg.typescript_dir %>*.ts']
        dest   : '<%= pkg.html_dir %>typescript'
        options:
          module     : 'amd' # or commonjs
          target     : 'es5' # or es3
          base_path  : '<%= pkg.typescript_dir %>ts/'
          sourcemap  : false
          declaration: false
    # JS MIN ------------------------------------------------------------------------- **/
    uglify    :
      index:
        options:
          banner: '<%= meta.banner.js %>'
        src    : ['<%= pkg.html_dir %>js/script.js']
        dest   : "<%= pkg.html_dir %>js/script.min.js"
    # CONCAT ------------------------------------------------------------------------- **/
    # TODO : CONCAT
    concat    :
      index:
        src : ["<%= pkg.html_dir %>js/script.js", "<%= pkg.html_dir %>common/js/common.js"]
        dest: "<%= pkg.html_dir %>js/top.js"
    # JSHINT ------------------------------------------------------------------------- **/
    # TODO : JSHINT
    jshint    :
      index :
        options:
          curly: false
          undef: true
        src : ['<%= pkg.html_dir %>js/script.js']
    # QUINT ------------------------------------------------------------------------- **/
    # TODO : QUINT
    qunit     :
      all: ["<%= pkg.html_dir %>canvas/*.html"]

    # IMAGE MIM (NOT STABLE) ------------------------------------------------------------------------- **/
    imagemin  :
      index:
        src    : "images/test.png"
        dest   : "images/s/awawa.png"
        options:
          c: "-c6" #DEFAULT
          s: "-s1" #DEFAULT
          y: "-y" #DEFAULT
      the  :
        src : "images/t_tw_btn.png"
        dest: "images/s/t_tw_btn.png"

    # IMAGE MIM (NOT STABLE) ------------------------------------------------------------------------- **/
    copy      :
      all:
        files: [
          {expand: true, cwd: '<%= pkg.jade_dir %>/', src: ['**/*.gif', '**/*.jpg', '**/*.png'], dest: '<%= pkg.html_dir %>jade/', filter: 'isFile'}
        ]
    # WATCH ------------------------------------------------------------------------- **/
    watch     :
      Something       :
        files: 'ELse'
        tasks: ['give me a chance.']

      # JADE ==================================================
      jade_index      :
        files: ['<%= pkg.jade_dir %>index.jade']
        tasks: ['jade:index']

      # HTML ==================================================
      htmlmin_index  :
        files: ["<%= pkg.html_dir %>*.html"]
        tasks: ['htmlmin:index']

      # CSS ==================================================
      css_index       :
        files: ["<%= pkg.sass_dir %>*.scss"]
        tasks: ['compass:index', 'cssmin:index']

      # JS ==================================================
      js_index:
        files: [
          "<%= pkg.coffee_dir %>*.coffee"
        ]
        tasks: ['coffee:index', 'uglify:index', 'jshint:index']
      ts_index       :
        files: [
          "<%= pkg.typescript_dir %>*.ts"
        ]
        tasks: ['typescript:index']

  # image copy ==================================================
  # TODO : copy
  #copy        :
  # files: ['<%= pkg.jade_dir %>**/*.gif', '<%= pkg.jade_dir %>**/*.jpg', '<%= pkg.jade_dir %>**/*.png']
  # tasks: ['copy:all']


  # LOAD TASKS ------------------------------------------------------------------------- **/
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-htmlmin'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-typescript'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  #grunt.loadNpmTasks 'grunt-contrib-imagemin'
  #grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'


  # RESISTER TASK ------------------------------------------------------------------------- **/
  grunt.registerTask 'default', ['watch']
  grunt.registerTask 'production', ['htmlmin']
