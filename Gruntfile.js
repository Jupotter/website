module.exports = function(grunt) {
    grunt.initConfig( {
        bake: {
            build: {
                files: {
                    "dist/index.html": "static/index.html",
                    "dist/sierra.html": "static/sierra.html",
                    "dist/zombie.html": "static/zombie.html",
                    "dist/light-out.html": "static/light-out.html",
                    "dist/robots.txt": "static/robots.txt",
                },
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
