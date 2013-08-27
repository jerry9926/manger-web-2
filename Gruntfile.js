module.export = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    })
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd")%>*/\n',
            build: {
                src: 'js/mange.js',
                dest: 'build/mange.min.js'
            }
        }
    }
}