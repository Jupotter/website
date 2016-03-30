module.exports = function(grunt) {
    grunt.initConfig( {
        bake: {
            build: {
                options: {
                    basePath: 'include/'
                },
                files: [ {
                    expand: true,
                    cwd: 'static/',
                    src: ['**/*.html'],
                    dest: 'dist/'
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
