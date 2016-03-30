module.exports = function(grunt) {
    grunt.initConfig( {
        bake: {
            build: {
                options: {
                    basePath: 'static/includes'
                },
                files: [ {
                    expand: true,
                    cwd: 'static/pages',
                    src: ['**/*.html'],
                    dest: 'dist/pages'
                }, {
                    dest: "dist/index.html",
                    src: "static/index.html"
                } ]
            },
        },
        copy: {
            main: {
                files: [
                    { cwd: "static/content", src: "**/*", dest: "dist/content", expand: true, },
                    { cwd: "static/octicons", src: "**/*", dest: "dist/octicons", expand: true, },
                ],
            },
        },
        watch: {
            files: [ "static/**/*.{html,js}", "static/content/**/*"],
            tasks: ['bake'],
        },
    } )

    grunt.loadNpmTasks( "grunt-bake" );
    grunt.loadNpmTasks( "grunt-copy" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );

    grunt.registerTask('default', ['bake']);
};
